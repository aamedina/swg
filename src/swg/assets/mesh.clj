(ns swg.assets.mesh
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [swg.assets.iff :as iff :refer [load-node]]
            [swg.assets.util :refer :all :exclude [record?]]
            [swg.assets.shader :as shader]
            [clojure.string :as str]
            [clojure.core.reducers :as r])
  (:import (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

(defmethod load-node "NAME"
  [{:keys [size data] :as node}]
  (subs (get-string data size) 0 (dec size)))

(defmethod load-node "INFO"
  [{:keys [data size]}]
  (case size
    6 [(.getInt data) (.getShort data)]
    8 [(.getInt data) (.getInt data)]
    (.getInt data)))

(defn read-vec
  [buf n]
  (vec (repeatedly n #(get-float buf))))

(defn read-vec2
  [buf pos]
  [(get-float buf pos) (get-float buf (+ pos 4))])

(defn read-vec3
  [buf pos]
  [(get-float buf pos) (get-float buf (+ pos 4)) (get-float buf (+ pos 8))])

(defn read-color
  [buf pos]
  [(get-ubyte buf pos) (get-ubyte buf (+ pos 1))
   (get-ubyte buf (+ pos 2)) (get-ubyte buf (+ pos 3))])

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
        vertex-data (:data data-node)
        vertices (pmap (fn [pos] (read-vertex vertex-data bpv pos))
                       (range 0 (* vertex-count bpv) bpv))]
    (into [] vertices)))

(defn read-triangle
  [data bpi]
  (case bpi
    2 [(.getShort data) (.getShort data) (.getShort data)]
    4 [(.getInt data) (.getInt data) (.getInt data)]))

(defmethod load-node "INDX"
  [{:keys [data size children]}]
  (let [index-count (.getInt data)
        bpi (/ (- size 4) index-count)
        indices (repeatedly (/ index-count 3) (fn [] (read-triangle data bpi)))]
    (into [] indices)))

(defmethod load-node "SIDX"
  [{:keys [data size bpi children]}]
  (r/reduce (fn [sets pos]
              (let [rotations [(get-float data)
                               (get-float data)
                               (get-float data)]
                  num-indices (.getInt data)
                  indices (r/reduce (fn [indices pos]
                                      (conj indices (case bpi
                                                      2 (.getShort data)
                                                      4 (.getInt data))))
                                    [] (range 0 (* num-indices bpi) bpi))]
              (conj sets {:rotations rotations :indices indices})))
          [] (range (.getInt data))))

(defn load-geometry-node
  [geometry-node]
  (let [[sht-node _ vnode] (:children geometry-node)
        sht-file (load-node sht-node)
        [info vtxa indx sidx] (:children vnode)
        vertices (load-node vtxa)
        indices (load-node indx)
        bpi (if (instance? java.lang.Short (first indices)) 2 4)
        secondary (when sidx (load-node (assoc sidx :bpi bpi)))]
    (cond-> {:texture (load-node (iff/load-iff-file iff/*prefix-path* sht-file))
             :vertices vertices
             :indices indices}
      secondary (assoc :secondary secondary))))

(defmethod load-node "MESH"
  [node]
  (let [root (first (:children (find-child node #(= (:type %) "SPS "))))
        [cnt-node & geometry-nodes] (:children root)
        cnt (.getInt (:data cnt-node))
        geometries (if (>= (count geometry-nodes)
                           (.availableProcessors (Runtime/getRuntime)))
                     (pmap load-geometry-node geometry-nodes)
                     (map load-geometry-node geometry-nodes))]
    (into [] geometries)))

;; (def yt1300
;;   (binding [iff/*prefix-path* "resources/extracted_jtl"]
;;     (-> "resources/extracted_jtl/appearance/mesh/yt1300_l0.msh"
;;         iff/load-iff-file
;;         load-node
;;         time)))

(def star-destroyer
  (-> "resources/extracted/appearance/mesh/star_destroyer.msh" iff/load-iff-file load-node time))

;; (def theed-palace
;;   (-> "resources/extracted/appearance/mesh/thm_nboo_thed_theed_palace_r0_mesh_l0_c0_l0.msh" iff/load-iff-file load-node time))
