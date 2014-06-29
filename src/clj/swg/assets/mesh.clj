(ns swg.assets.mesh
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [swg.assets.iff :as iff :refer [load-node]]
            [swg.assets.util :as util :refer :all :exclude [record?]]
            [swg.assets.shader :as shader]
            [clojure.string :as str]
            [clojure.core.reducers :as r])
  (:import (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

(defmethod load-node "NAME"
  [{:keys [size data] :as node}]
  (let [s (str/split (get-string data size) #"\u0000")]
    (if (== (count s) 1)
      (first s)
      s)))

(defmethod load-node "INFO"
  [{:keys [data size]}]
  (case size
    2 (.getShort data)
    4 (.getInt data)
    6 [(.getInt data) (.getShort data)]
    8 [(.getInt data) (.getInt data)]
    44 [(.getInt data) (.getInt data) (.getInt data)
        (.getInt data) (.getInt data) (.getInt data)
        (.getInt data) (.getInt data) (.getInt data)
        (.getShort data) (.getShort data) (.getShort data) (.getShort data)]
    (.getInt data)))

(defn read-vertex
  [vertex-data bpv pos]
  (let [base-map {:position (read-vec3 vertex-data pos)
                  :normal (read-vec3 vertex-data (+ pos 12))}]
    (case bpv
      (32 40 48 56 64 72)
      (assoc base-map
        :map (mapv #(read-vec2 vertex-data %)
                   (range (+ 24 pos) (+ (- bpv 24) (+ 24 pos)) 8)))
      (36 44 52 60 68)
      (assoc base-map
        :color (read-color vertex-data (+ 24 pos))
        :map (mapv #(read-vec2 vertex-data %)
                   (range (+ 28 pos) (+ (- bpv 28) (+ 28 pos)) 8))))))

(defmethod load-node "VTXA"
  [{:keys [data size children]}]
  (let [[info data-node] (:children (first children))
        [flags vertex-count] (load-node info)
        bpv (/ (:size data-node) vertex-count)
        vertex-data (:data data-node)]
    (into [] (pmap (fn [pos] (read-vertex vertex-data bpv pos))
                   (range 0 (* vertex-count bpv) bpv)))))

(defmethod load-node "INDX"
  [{:keys [data size children]}]
  (let [index-count (.getInt data)
        bpi (/ (- size 4) index-count)
        indices (repeatedly (/ index-count 3) (fn [] (read-triangle data bpi)))]
    (into [] indices)))

(defmethod load-node "SIDX"
  [{:keys [data size bpi children]}]
  (into [] (repeatedly (.getInt data)
                       (fn []
                         (let [rotations [(get-float data)
                                          (get-float data)
                                          (get-float data)]
                               index-count (.getInt data)
                               indices (repeatedly (/ index-count 3)
                                                   #(read-triangle data bpi))]
                           {:rotations rotations
                            :indices (into [] indices)})))))

(defn load-geometry-node
  [geometry-node]
  (let [[sht-node _ vnode] (:children geometry-node)
        sht-file (load-node sht-node)
        [info vtxa indx sidx] (:children vnode)
        vertices (load-node vtxa)
        indices (load-node indx)
        bpi (/ (- (:size indx) 4) (* (count indices) 3))
        secondary (when sidx (load-node (assoc sidx :bpi bpi)))]
    (cond-> {:texture (load-node (iff/load-iff-file sht-file))
             :positions (mapv :position vertices)
             :normals (mapv :normal vertices)
             :maps (mapv :map vertices)
             :triangles indices}
      secondary (assoc :secondary secondary))))

(defmethod load-node "CNT"
  [{:keys [data]}]
  (.getInt data))

(defmethod load-node "HPNT"
  [{:keys [data size] :as node}]
  {:transforms (mapv (fn [_]
                       (into [] (repeatedly 4 #(.getFloat data))))
                     (range 0 2))
   :name (get-string data (- size 48))})

(defmethod load-node "DATA"
  [{:keys [data size parent]}]
  (when (= parent "FLOR")
    (get-string data (.get data))))

(defmethod load-node "SPHR"
  [{:keys [data size]}]
  {:center (read-vec data 3)
   :radius (.getFloat data)})

(defmethod load-node "BOX"
  [{:keys [data size]}]
  {:length (read-vec data 3)
   :width (read-vec data 3)})

(defmethod load-node "CYLN"
  [{:keys [data size]}]
  {:base (read-vec data 3)
   :height (read-vec data 5)})

(defmethod load-node "SPS"
  [{:keys [children size] :as node}]
  (let [root (first children)
        [cnt-node & geometry-nodes] (:children root)
        cnt (.getInt (:data cnt-node))
        geometries (if (>= (count geometry-nodes)
                           (.availableProcessors (Runtime/getRuntime)))
                     (pmap load-geometry-node geometry-nodes)
                     (map load-geometry-node geometry-nodes))]
    (into [] geometries)))

(defmethod load-node "MESH"
  [{:keys [children size] :as node}]
  (load-node (find-child node #(= (:type %) "SPS"))))

(defmethod load-node "ITL"
  [{:keys [data size]}]
  (let [num (.getInt data)]
    (into [] (repeatedly num #(read-triangle data 4)))))

(defmethod load-node "OITL"
  [{:keys [data size]}]
  (let [num (.getInt data)]
    (into [] (repeatedly num #(read-triangle data 4 (.getInt data))))))

(defmethod load-node "TCSD"
  [{:keys [data size]}]
  (->> (repeatedly (/ size 4) #(.getFloat data))
       (partition 2)
       (mapv (comp vector vec))))

(defmethod load-node "TXCI"
  [{:keys [data size]}]
  (into [] (repeatedly (/ size 4) #(.getInt data))))

(defmethod load-node "NIDX"
  [{:keys [data size]}]
  (into [] (repeatedly (/ size 4) #(.getInt data))))

(defmethod load-node "PIDX"
  [{:keys [data size]}]
  (into [] (repeatedly (.getInt data) #(.getInt data))))

(defmethod load-node "DOT3"
  [{:keys [data size]}]
  (let [fst (.getInt data)]
    (if (== size (+ (* fst 16) 4))
      (into [] (repeatedly fst #(read-vec data 4)))
      (into [fst] (repeatedly (/ (- size 4) 4) #(.getInt data))))))

(defmethod load-node "NORM"
  [{:keys [data size]}]
  (let [normals-count (/ (/ size 4) 3)]
    (into [] (repeatedly normals-count #(read-vec data 3)))))

(defmethod load-node "TWDT"
  [{:keys [data size]}]
  (let [vertex-count (/ size 8)]
    (->> (repeatedly vertex-count #(vector (.getInt data) (.getFloat data)))
         (into []))))

(defmethod load-node "TWHD"
  [{:keys [data size]}]
  (into [] (repeatedly (/ size 4) #(.getInt data))))

(defmethod load-node "POSN"
  [{:keys [data size]}]
  (let [vertex-count (/ (/ size 4) 3)]
    (into [] (repeatedly vertex-count #(read-vec data 3)))))

(defmethod load-node "XFNM"
  [{:keys [data size]}]
  (str/split (get-string data size) #"\u0000"))

(defmethod load-node "SKTM"
  [{:keys [data size]}]
  (get-string data (dec size)))

(defmethod load-node "SKMG"
  [{:keys [size children] :as node}]
  (-> (load-all-nodes node)
      (update-in ["NAME"] (partial pmap (comp load-node iff/load-iff-file)))
      (update-in ["SKTM"] (partial mapv (fn [file]
                                          (-> (iff/load-iff-file file)
                                              (load-node)
                                              (assoc :skeleton-file file)))))))

(defn load-mesh
  [path]
  (load-node (iff/load-iff-file path)))

(defn load-skeleton
  [skeleton]
  (let [num-joints (first (skeleton "INFO"))
        names (map (fn [names]
                     (map str/lower-case names)) (skeleton "NAME"))
        ks [:name :parent :pre-rotation :post-rotation :bone-offset :rotations]
        joints (map interleave
                    names (skeleton "PRNT") (skeleton "RPRE")
                    (skeleton "RPST") (skeleton "BPTR") (skeleton "BPRO"))]
    (->> (map #(partition 6 %) joints)
         (mapv (fn [joint] (mapv #(zipmap ks %) joint))))))

(defn load-mgn
  [path]
  (let [nodes (load-node (iff/load-iff-file path))
        [_ _ skeleton-count bone-count vertex-count bone-weight-count
         normal-count _ blend-table-count _ _ _ _] (first (nodes "INFO"))
        positions (first (nodes "POSN"))
        normals (first (nodes "NORM"))
        bone-weights (first (nodes "TWDT"))
        skeletons (load-skeleton (first (nodes "SKTM")))
        bone-names (first (nodes "XFNM"))]
    (mapv (fn [material pidx nidx tcsd itl]
            {:texture material
             :positions (mapv (partial nth positions) pidx)
             :normals (mapv (partial nth normals) nidx)
             :maps tcsd
             :triangles itl
             :skeletons skeletons
             :bone-names bone-names
             :bone-weights bone-weights})
          (nodes "NAME") (nodes "PIDX") (nodes "NIDX") (nodes "TCSD")
          (nodes "ITL"))))

(def at-at
  (time (load-mgn "appearance/mesh/at_at_l0.mgn")))

(def skl
  (:skeletons (first at-at)))
