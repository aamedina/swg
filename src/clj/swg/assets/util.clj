(ns swg.assets.util
  (:refer-clojure :exclude [record?])
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [clojure.zip :as zip]
            [euclidean.math.quaternion :as q]
            [euclidean.math.vector :as v])
  (:import (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

(defn form?
  [x]
  (and (map? x) (contains? x :children)))

(defn record?
  [x]
  (and (map? x) (contains? x :data)))

(defn iff-zipper
  [root]
  (zip/zipper form?
              (comp seq :children)
              (fn [node children]
                (assoc node :children (and children (apply vector children))))
              root))

(defn node-seq
  [zipper]
  (->> (take-while (complement zip/end?) (iterate zip/next zipper))
       (map zip/node)))

(defn find-child
  [root pred]
  (loop [loc (iff-zipper root)]
    (if-let [node (when (pred (zip/node loc))
                    (zip/node loc))]
      node
      (when-not (zip/end? loc)
        (recur (zip/next loc))))))

(defn find-xml-child
  [root pred]
  (loop [loc (zip/xml-zip root)]
    (if-let [node (when (pred (zip/node loc))
                    (zip/node loc))]
      node
      (when-not (zip/end? loc)
        (recur (zip/next loc))))))

(defn find-children
  [root pred]
  (loop [loc (iff-zipper root) nodes []]
    (if (zip/end? loc)
      nodes
      (recur (zip/next loc) (if (pred (zip/node loc))
                              (conj nodes (zip/node loc))
                              nodes)))))

(def formatter (java.text.DecimalFormat. "0.######"))

(defn get-float
  ([buf]
     ;; (read-string (.format formatter ))
     (.getFloat buf)
     #_(let [flt (with-precision 6 (/ (bigdec (.getFloat buf)) 1))]
       (cond 
         (> (.scale flt) 6) (.setScale flt 6 java.math.RoundingMode/UP)
         (zero? flt) 0
         (== -1.0M flt) -1
         (== 1.0M flt) 1
         :else flt)))
  ([buf pos]
     (.getFloat buf pos)
     ;; (read-string (.format formatter ))
     #_(let [flt (with-precision 6 (/ (bigdec (.getFloat buf pos)) 1))]
       (cond 
         (> (.scale flt) 6) (.setScale flt 6 java.math.RoundingMode/UP)
         (zero? flt) 0
         (== -1.0M flt) -1
         (== 1.0M flt) 1
         :else flt))))

(defn get-ubyte
  ([buf] (bit-and (.get buf) 0xff))
  ([buf pos] (bit-and (.get buf pos) 0xff)))

(defn get-ushort
  ([buf] (bit-and (.getShort buf) 0xffff))
  ([buf pos] (bit-and (.getShort buf pos) 0xffff)))

(defn get-uint
  ([buf] (let [nbuf (.duplicate buf)
               ret (-> (.getInt (.order nbuf ByteOrder/BIG_ENDIAN))
                       (bit-and 0xffffffff))]
           (.position buf (.position nbuf))
           ret))
  ([buf pos]
     (-> (.getInt (.order (.duplicate buf) ByteOrder/BIG_ENDIAN) pos)
         (bit-and 0xffffffff))))

(defn get-string
  ([buf n] (apply str (repeatedly n #(char (.get buf)))))
  ([buf n pos]
     (apply str (map #(char (.get buf %)) (range pos (+ pos n))))))

(defn byte-buffer
  [path]
  (with-open [in (RandomAccessFile. (io/file path) "r")
              ch (.getChannel in)]
    (doto (.map ch FileChannel$MapMode/READ_ONLY 0 (.size ch))
      (.order ByteOrder/LITTLE_ENDIAN))))

(defn read-bytes
  ([buf size]
     (let [dest (byte-array size)]
       (.get buf dest)
       (.order (ByteBuffer/wrap dest) ByteOrder/LITTLE_ENDIAN)))
  ([buf pos size]
     (let [dest (byte-array size)
           buf (.position (.duplicate buf) (+ 8 pos))]
       (.get buf dest)
       (.order (ByteBuffer/wrap dest) ByteOrder/LITTLE_ENDIAN))))

(defn read-vec
  [buf n]
  (into [] (repeatedly n #(.getFloat buf))))

(defn read-vec2
  [buf pos]
  [(.getFloat buf pos) (.getFloat buf (+ pos 4))])

(defn read-vec3
  [buf pos]
  [(.getFloat buf pos) (.getFloat buf (+ pos 4)) (.getFloat buf (+ pos 8))])

(defn read-color
  ([buf]
     (into [] (->> (repeatedly 4 #(get-ubyte buf)) (map #(/ % 255.0)))))
  ([buf pos]
     (into [] (for [pos (range pos (+ 4 pos))] (/ (get-ubyte buf pos) 255.0)))))

(defn read-rgba
  [buf]
  (let [[a r g b] (repeatedly 4 #(.getFloat buf))]
    [r g b a]))

(defn read-triangle
  ([data bpi]
     (case bpi
       2 [(.getShort data) (.getShort data) (.getShort data)]
       4 [(.getInt data) (.getInt data) (.getInt data)]))
  ([data bpi group]
     (case bpi
       2 [group (.getShort data) (.getShort data) (.getShort data)]
       4 [group (.getInt data) (.getInt data) (.getInt data)])))

(defn read-quaternion
  [buf]
  (let [[w x y z] (repeatedly 4 #(.getFloat buf))]
    [x y z w]))

(defn load-all-nodes
  [root]
  (let [nodes (->> (node-seq (iff-zipper root))
                   (filter record?)
                   (map (juxt :type (resolve 'swg.assets.iff/load-node)))
                   (group-by first))]
    (zipmap (keys nodes)
            (map (fn [group] (mapv second group)) (vals nodes)))))

(defn bone-matrix
  [{:keys [name bone-offset pre-rotation post-rotation rotations] :as bone}]
  (let [[x y z] bone-offset
        rot (q/mult (q/into-quaternion pre-rotation)
                    (q/into-quaternion post-rotation))
        rotation (q/rotate rot (v/into-vector bone-offset))
        len2 (reduce + (map * rot rot))
        rlen2 (if (== len2 1.0) 2.0 (/ 2.0 len2))
        [qx qy qz qw] rot
        [x2 y2 z2] (map * [rlen2 rlen2 rlen2] [qx qy qz])
        [xx xy xz] (map * [qx qx qx] [x2 y2 z2])
        [yy yz zz] (map * [qy qy qz] [y2 z2 z2])
        [wx wy wz] (map * [qw qw qw] [x2 y2 z2])]
    [[(- 1.0 (+ yy zz)) (+ xy wz) (- xz wy) x]
     [(- xy wz) (- 1.0 (+ xx zz)) (+ yz wx) y]
     [(+ xz wy) (- yz wx) (- 1.0 (+ xx yy)) z]
     [0 0 0 1]]))
