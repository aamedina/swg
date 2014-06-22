(ns swg.iff.reader
  (:require [clojure.java.io :as io]
            [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.zip :as zip]
            [clojure.string :as str]
            [clojure.core.reducers :as r])
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

(defn parse-string
  ([buf] (parse-string buf (dec (.capacity buf))))
  ([buf n]
     (->> (repeatedly n #(.get buf))
          (map char)
          (reduce str))))

(defn read-vec
  [buf n pos]
  (into [] (map #(.getFloat buf %) (range pos (+ pos (* n 4)) 4))))

(defn parse-vertex
  [vertex-data bytes-per-vertex pos]
  (case bytes-per-vertex
    32 {:position (read-vec vertex-data 3 pos)
        :normal (read-vec vertex-data 3 (+ 12 pos))
        :texture-coords [(read-vec vertex-data 2 (+ 24 pos))]}
    36 {:position (read-vec vertex-data 3 pos)
        :normal (read-vec vertex-data 3 (+ 12 pos))
        :color (into [] (map #(.get vertex-data %)
                             (range (+ 24 pos) (+ 28 pos))))
        :texture-coords [(read-vec vertex-data 2 (+ 28 pos))]}
    ;; 40 {:position (read-vec vertex-data 3)
    ;;     :normal (read-vec vertex-data 3)
    ;;     :texture-coords-0uv (read-vec vertex-data 2)
    ;;     :texture-coords-1uv (read-vec vertex-data 2)}
    ;; 44 {:position (read-vec vertex-data 3)
    ;;     :normal (read-vec vertex-data 3)
    ;;     :color (into [] (repeatedly 4 #(.get vertex-data)))
    ;;     :texture-coords-0uv (read-vec vertex-data 2)
    ;;     :texture-coords-1uv (read-vec vertex-data 2)}
    ;; 48 {:position (read-vec vertex-data 3)
    ;;     :normal (read-vec vertex-data 3)
    ;;     :texture-coords-0uv (read-vec vertex-data 2)
    ;;     :texture-coords-1uv (read-vec vertex-data 2)
    ;;     :texture-coords-2uv (read-vec vertex-data 2)}
    ;; 52 {:position (read-vec vertex-data 3)
    ;;     :normal (read-vec vertex-data 3)
    ;;     :color (into [] (repeatedly 4 #(.get vertex-data)))
    ;;     :texture-coords-0uv (read-vec vertex-data 2)
    ;;     :texture-coords-1uv (read-vec vertex-data 2)
    ;;     :texture-coords-2uv (read-vec vertex-data 2)}
    ;; 56 {:position (read-vec vertex-data 3)
    ;;     :normal (read-vec vertex-data 3)
    ;;     :texture-coords-0uv (read-vec vertex-data 2)
    ;;     :texture-coords-1uv (read-vec vertex-data 2)
    ;;     :texture-coords-2uv (read-vec vertex-data 2)
    ;;     :texture-coords-3uv (read-vec vertex-data 2)}
    ;; 60 {:position (read-vec vertex-data 3)
    ;;     :normal (read-vec vertex-data 3)
    ;;     :color (into [] (repeatedly 4 #(.get vertex-data)))
    ;;     :texture-coords-0uv (read-vec vertex-data 2)
    ;;     :texture-coords-1uv (read-vec vertex-data 2)
    ;;     :texture-coords-2uv (read-vec vertex-data 2)
    ;;     :texture-coords-3uv (read-vec vertex-data 2)}
    ;; 64 {:position (read-vec vertex-data 3)
    ;;     :normal (read-vec vertex-data 3)
    ;;     :texture-coords-0uv (read-vec vertex-data 2)
    ;;     :texture-coords-1uv (read-vec vertex-data 2)
    ;;     :texture-coords-2uv (read-vec vertex-data 2)
    ;;     :texture-coords-3uv (read-vec vertex-data 2)
    ;;     :texture-coords-4uv (read-vec vertex-data 2)}
    ;; 68 {:position (read-vec vertex-data 3)
    ;;     :normal (read-vec vertex-data 3)
    ;;     :color (into [] (repeatedly 4 #(.get vertex-data)))
    ;;     :texture-coords-0uv (read-vec vertex-data 2)
    ;;     :texture-coords-1uv (read-vec vertex-data 2)
    ;;     :texture-coords-2uv (read-vec vertex-data 2)
    ;;     :texture-coords-3uv (read-vec vertex-data 2)
    ;;     :texture-coords-4uv (read-vec vertex-data 2)}
    ;; 72 {:position (read-vec vertex-data 3)
    ;;     :normal (read-vec vertex-data 3)
    ;;     :texture-coords-0uv (read-vec vertex-data 2)
    ;;     :texture-coords-1uv (read-vec vertex-data 2)
    ;;     :texture-coords-2uv (read-vec vertex-data 2)
    ;;     :texture-coords-3uv (read-vec vertex-data 2)
    ;;     :texture-coords-4uv (read-vec vertex-data 2)
    ;;     :texture-coords-5uv (read-vec vertex-data 2)}
    ))

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
  (let [n (.getInt data)
        index-data-length (.capacity data)
        bytes-per-index (/ (- size 4) n)]
    (->> (iterate #(+ % bytes-per-index) 0)
         (take-while #(< % index-data-length))
         (pmap #(case bytes-per-index
                  2 (.getShort data %)
                  4 (.getInt data %)))
         (into []))))

(defn parse-geometry
  [root-geometry-node idx]
  (let [node (->> (:children root-geometry-node)
                  (filter #(= (:type %) (str "000" (inc idx))))
                  first)]
    {:shader (parse-string (:data (get-child node "NAME")))
     :vertices (parse-vertices (get-child node "DATA")
                               (-> (get-child node "VTXA")
                                   (get-child "INFO")
                                   (:data)
                                   (.getInt 4)))
     :indices (parse-indices (get-child node "INDX"))}))

(defn parse-mesh
  [root]
  (let [root-geometry-node (first (:children (get-child root "SPS ")))
        geometry-count (.getInt (:data (get-child root-geometry-node "CNT ")))
        geometries (pmap #(parse-geometry root-geometry-node %)
                         (range geometry-count))]
    {:geometries (into [] geometries)}))

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
    (time (parse-mesh (iff-buffer path)))))
