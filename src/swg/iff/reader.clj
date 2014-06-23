(ns swg.iff.reader
  (:require [clojure.java.io :as io]
            [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.zip :as zip]
            [clojure.string :as str]
            [clojure.core.reducers :as r]
            [clojure.java.shell :as sh])
  (:import (java.io RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

(declare iff-buffer)

(defn get-unsigned-byte
  ([buf] (bit-and (.get buf) 0xff))
  ([buf pos] (bit-and (.get buf pos) 0xff)))

(defn get-unsigned-short
  ([buf] (bit-and (.getShort buf) 0xffff))
  ([buf pos] (bit-and (.getShort buf pos) 0xffff)))

(defn get-unsigned-int
  ([buf] (bit-and (.getInt buf) 0xffffffff))
  ([buf pos] (bit-and (.getInt buf pos) 0xffffffff)))

(defn iff-zipper
  [root]
  (zip/zipper #(identical? (:tag %) :form)
              (comp seq :children)
              (fn [node children]
                (assoc node
                  :children (and children (apply vector children))))
              root))

(defn loc-seq
  [root]
  (take-while (complement zip/end?) (iterate zip/next (iff-zipper root))))

(defn node-seq
  [root]
  (->> (loc-seq root)
       (map zip/node)))

(defn get-child
  [root child-name]
  (->> (node-seq root)
       (filter #(= (:type %) child-name))
       first))

(defn parse-string
  ([buf] (parse-string buf (dec (.capacity buf))))
  ([buf n]
     (->> (repeatedly n #(.get buf))
          (map char)
          (reduce str))))

(defn read-vec
  [buf n pos]
  (mapv #(.getFloat buf %) (range pos (+ pos (* n 4)) 4)))

(defn read-color
  [buf pos]
  (mapv #(get-unsigned-byte buf %) (range pos (+ 4 pos))))

(defn parse-vertex
  [vertex-data bytes-per-vertex pos]
  (case bytes-per-vertex
    32 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        [(read-vec vertex-data 2 (+ 24 pos))]]
    36 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        (read-color vertex-data (+ 24 pos))
        [(read-vec vertex-data 2 (+ 28 pos))]]
    40 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        [(read-vec vertex-data 2 (+ 24 pos))
         (read-vec vertex-data 2 (+ 32 pos))]]
    44 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        (read-color vertex-data (+ 24 pos))
        [(read-vec vertex-data 2 (+ 28 pos))
         (read-vec vertex-data 2 (+ 36 pos))]]
    48 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        [(read-vec vertex-data 2 (+ 24 pos))
         (read-vec vertex-data 2 (+ 32 pos))
         (read-vec vertex-data 2 (+ 40 pos))]]
    52 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        (read-color vertex-data (+ 24 pos))
        [(read-vec vertex-data 2 (+ 28 pos))
         (read-vec vertex-data 2 (+ 36 pos))
         (read-vec vertex-data 2 (+ 44 pos))]]
    56 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        [(read-vec vertex-data 2 (+ 24 pos))
         (read-vec vertex-data 2 (+ 32 pos))
         (read-vec vertex-data 2 (+ 40 pos))
         (read-vec vertex-data 2 (+ 48 pos))]]
    60 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        (read-color vertex-data (+ 24 pos))
        [(read-vec vertex-data 2 (+ 28 pos))
         (read-vec vertex-data 2 (+ 36 pos))
         (read-vec vertex-data 2 (+ 44 pos))
         (read-vec vertex-data 2 (+ 52 pos))]]
    64 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        [(read-vec vertex-data 2 (+ 24 pos))
         (read-vec vertex-data 2 (+ 32 pos))
         (read-vec vertex-data 2 (+ 40 pos))
         (read-vec vertex-data 2 (+ 48 pos))
         (read-vec vertex-data 2 (+ 56 pos))]]
    68 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        (read-color vertex-data (+ 24 pos))
        [(read-vec vertex-data 2 (+ 28 pos))
         (read-vec vertex-data 2 (+ 36 pos))
         (read-vec vertex-data 2 (+ 44 pos))
         (read-vec vertex-data 2 (+ 52 pos))
         (read-vec vertex-data 2 (+ 56 pos))]]
    72 [(read-vec vertex-data 3 pos)
        (read-vec vertex-data 3 (+ 12 pos))
        [(read-vec vertex-data 2 (+ 24 pos))
         (read-vec vertex-data 2 (+ 32 pos))
         (read-vec vertex-data 2 (+ 40 pos))
         (read-vec vertex-data 2 (+ 48 pos))
         (read-vec vertex-data 2 (+ 56 pos))
         (read-vec vertex-data 2 (+ 64 pos))]]))

(defn parse-vertices
  [vertex-data-node n]
  (let [vertex-data-length (.capacity (:data vertex-data-node))
        bytes-per-vertex (/ vertex-data-length n)
        vertex-data (:data vertex-data-node)]
    (->> (iterate #(+ % bytes-per-vertex) 0)
         (take-while #(< % vertex-data-length))
         (pmap #(parse-vertex vertex-data bytes-per-vertex %))
         (into []))))

(defn parse-indices
  [{:keys [data size] :as vertex-index-node}]
  (let [n (get-unsigned-int data)
        index-data-length (.capacity data)
        bytes-per-index (/ (- index-data-length 4) n)]
    (assert (== (mod (- index-data-length 4) n) 0))
    (->> (take n (iterate #(+ % bytes-per-index) 0))
         (pmap #(case bytes-per-index
                  2 (get-unsigned-short data %)
                  4 (get-unsigned-int data %)))
         (into []))))

(defn parse-shader
  [path]
  (let [shader (iff-buffer (str "resources/extracted/" path))
        material-node (get-child shader "MATS")
        first-child (first (:children material-node))
        material-tag (-> (get-child first-child "TAG ")
                         :data
                         (parse-string 4))
        {:keys [data] :as material-list} (get-child first-child "MATL")]
    {:ambient (get-unsigned-byte data)
     :diffuse (get-unsigned-byte data)
     :specular (get-unsigned-byte data)
     :emissive (get-unsigned-byte data)
     :shininess (get-unsigned-byte data)
     :texture-file (let [texture-node (-> (get-child shader "TXMS")
                                          (get-child "TXM "))
                         {:keys [data]} (get-child texture-node "NAME") ]
                     (str/replace (parse-string data) #"\.dds" ".png"))}))

(defn parse-geometry
  [root-geometry-node idx]
  (let [node (->> (:children root-geometry-node)
                  (filter #(= (:type %) (str "000" (inc idx))))
                  first)]
    {:shader (parse-shader (parse-string (:data (get-child node "NAME"))))
     :vertices (parse-vertices (get-child node "DATA")
                               (-> (get-child node "VTXA")
                                   (get-child "INFO")
                                   (:data)
                                   (get-unsigned-int 4)))
     :indices (parse-indices (get-child node "INDX"))}))

(defn parse-mesh
  [root]
  (let [root-geometry-node (first (:children (get-child root "SPS ")))
        geometry-count (get-unsigned-int
                        (:data (get-child root-geometry-node "CNT ")))
        geometries (pmap #(parse-geometry root-geometry-node %)
                         (range geometry-count))]
    (into [] geometries)))

(defn parse-iff
  [buf]
  (letfn [(reduce-children [max parent children]
            (if (< (.position buf) max)
              (let [tag (parse-string buf 4)
                    size (get-unsigned-int (.order buf ByteOrder/BIG_ENDIAN))
                    child (if (= tag "FORM")
                            {:tag :form
                             :parent parent
                             :type (parse-string buf 4)
                             :size size
                             :children []}
                            {:tag :record
                             :parent parent
                             :type tag
                             :size size
                             :data (let [dest (byte-array size)]
                                     (.get buf dest)
                                     (.order (ByteBuffer/wrap dest)
                                             ByteOrder/LITTLE_ENDIAN))})]
                (if (= tag "FORM")
                  (recur max parent (conj children (parse-form-node child)))
                  (recur max parent (conj children child))))
              children))
          (parse-form-node [{:keys [size children] :as parent}]
            (assoc parent
              :children (reduce-children (+ (.position buf) (- size 4))
                                         parent children)))]
    (reduce str (map char (repeatedly 4 #(.get buf))))
    (parse-form-node {:tag :form
                      :size (get-unsigned-int (.order buf ByteOrder/BIG_ENDIAN))
                      :type (parse-string buf 4)
                      :parent nil
                      :children []})))

(defn iff-buffer
  [path]
  (let [file (io/file path)
        buf (with-open [in (RandomAccessFile. file "r")
                        ch (.getChannel in)]
              (doto (.map ch FileChannel$MapMode/READ_ONLY 0 (.size ch))
                (.order ByteOrder/LITTLE_ENDIAN)))]
    (parse-iff buf)))

(def test-iff
  (let [path "resources/extracted/appearance/mesh/star_destroyer.msh"]
    (time (parse-mesh (iff-buffer path)))))


