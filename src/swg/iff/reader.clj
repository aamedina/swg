(ns swg.iff.reader
  (:require [clojure.java.io :as io]
            [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.zip :as zip]
            [clojure.string :as str])
  (:import (java.io RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

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

(defn get-descendant
  [root descendant-name]
  )

(defn parse-string
  ([buf] (parse-string buf (dec (.capacity buf))))
  ([buf n]
     (->> (repeatedly n #(.get buf))
          (map char)
          (reduce str))))

(defn read-vec
  [buf n]
  (into [] (repeatedly n #(.getFloat buf))))

(defn parse-vertex
  [vertex-data bytes-per-vertex]
  (case bytes-per-vertex
    32 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :texture-coords-0uv (read-vec vertex-data 2)}
    36 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :color (into [] (repeatedly 4 #(.get vertex-data)))
        :texture-coords-0uv (read-vec vertex-data 2)}
    40 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :texture-coords-0uv (read-vec vertex-data 2)
        :texture-coords-1uv (read-vec vertex-data 2)}
    44 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :color (into [] (repeatedly 4 #(.get vertex-data)))
        :texture-coords-0uv (read-vec vertex-data 2)
        :texture-coords-1uv (read-vec vertex-data 2)}
    48 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :texture-coords-0uv (read-vec vertex-data 2)
        :texture-coords-1uv (read-vec vertex-data 2)
        :texture-coords-2uv (read-vec vertex-data 2)}
    52 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :color (into [] (repeatedly 4 #(.get vertex-data)))
        :texture-coords-0uv (read-vec vertex-data 2)
        :texture-coords-1uv (read-vec vertex-data 2)
        :texture-coords-2uv (read-vec vertex-data 2)}
    56 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :texture-coords-0uv (read-vec vertex-data 2)
        :texture-coords-1uv (read-vec vertex-data 2)
        :texture-coords-2uv (read-vec vertex-data 2)
        :texture-coords-3uv (read-vec vertex-data 2)}
    60 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :color (into [] (repeatedly 4 #(.get vertex-data)))
        :texture-coords-0uv (read-vec vertex-data 2)
        :texture-coords-1uv (read-vec vertex-data 2)
        :texture-coords-2uv (read-vec vertex-data 2)
        :texture-coords-3uv (read-vec vertex-data 2)}
    64 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :texture-coords-0uv (read-vec vertex-data 2)
        :texture-coords-1uv (read-vec vertex-data 2)
        :texture-coords-2uv (read-vec vertex-data 2)
        :texture-coords-3uv (read-vec vertex-data 2)
        :texture-coords-4uv (read-vec vertex-data 2)}
    68 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :color (into [] (repeatedly 4 #(.get vertex-data)))
        :texture-coords-0uv (read-vec vertex-data 2)
        :texture-coords-1uv (read-vec vertex-data 2)
        :texture-coords-2uv (read-vec vertex-data 2)
        :texture-coords-3uv (read-vec vertex-data 2)
        :texture-coords-4uv (read-vec vertex-data 2)}
    72 {:position (read-vec vertex-data 3)
        :normal (read-vec vertex-data 3)
        :texture-coords-0uv (read-vec vertex-data 2)
        :texture-coords-1uv (read-vec vertex-data 2)
        :texture-coords-2uv (read-vec vertex-data 2)
        :texture-coords-3uv (read-vec vertex-data 2)
        :texture-coords-4uv (read-vec vertex-data 2)
        :texture-coords-5uv (read-vec vertex-data 2)}))

(defn parse-vertices
  [vertex-data-node n]
  (let [vertex-data-length (.capacity (:data vertex-data-node))
        bytes-per-vertex (/ vertex-data-length n)
        vertex-data (:data vertex-data-node)]
    (loop [vertices []]
      (if (< (.position vertex-data) (.capacity vertex-data))
        (let [vertex (parse-vertex vertex-data bytes-per-vertex)]
          (conj vertices vertex))
        vertices))))

(defn parse-mesh
  [root]
  (let [root-geometry-node (first (:children (get-child root "SPS ")))
        geometry-count (.getInt (:data (get-child root-geometry-node "CNT ")))]
    (reduce (fn [coll idx]
              (let [type (str "000" (inc idx))
                    node (->> (:children root-geometry-node)
                              (filter #(= (:type %) type))
                              (first))
                    data (:data (get-child node "NAME"))
                    shader (when data (parse-string data))
                    vertex-node (get-child node "VTXA")
                    num-vertices (-> (:data (get-child vertex-node "INFO"))
                                     (.getInt 4))
                    vertex-data-node (get-child node "DATA")
                    vertex-data-length (.capacity (:data vertex-data-node))
                    bytes-per-vertex (/ vertex-data-length num-vertices)
                    vertex-data (:data vertex-data-node)
                    vertices (parse-vertices vertex-data-node num-vertices)]
                (conj coll vertices)))
            [] (range geometry-count))))

(defn parse-iff
  [buf]
  (letfn [(reduce-children [max parent children]
            (if (< (.position buf) max)
              (let [tag (parse-string buf 4)
                    size (.getInt (.order buf ByteOrder/BIG_ENDIAN))
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
                      :size (.getInt (.order buf ByteOrder/BIG_ENDIAN))
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
    (parse-mesh (iff-buffer path))))
