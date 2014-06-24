(ns swg.assets.util
  (:refer-clojure :exclude [record?])
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [clojure.zip :as zip])
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

(defn find-child
  [root pred]
  (loop [loc (iff-zipper root)]
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

(defn get-float
  [buf pos]
  (let [flt (with-precision 6 (/ (bigdec (.getFloat buf pos)) 1))]
    (cond 
      (> (.scale flt) 6) (.setScale flt 6 java.math.RoundingMode/UP)
      (zero? flt) 0
      (== -1.0M flt) -1
      (== 1.0M flt) 1
      :else flt)))

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

