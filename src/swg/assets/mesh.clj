(ns swg.assets.mesh
  (:use clojure.core.matrix)
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [swg.assets.iff :as iff :refer [load-node]]
            [swg.assets.util :refer :all :exclude [record?]]
            [clojure.string :as str]
            [clojure.core.reducers :as r])
  (:import (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

(set-current-implementation :vectorz)

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
  [buf n pos]
  (mapv #(get-float buf %) (range pos (+ pos (* n 4)) 4)))

(defn read-color
  [buf pos]
  (mapv #(get-ubyte buf %) (range pos (+ 4 pos))))

(defn read-vertex
  [vertex-data bpv pos]
  (case bpv
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

(defmethod load-node "VTXA"
  [{:keys [data size children]}]
  (let [[info data-node] (:children (first children))
        [flags vertex-count] (load-node info)
        bpv (/ (:size data-node) vertex-count)
        vertex-data (:data data-node)
        vertices (pmap (fn [pos] (read-vertex vertex-data bpv pos))
                       (range 0 (* vertex-count bpv) bpv))]
    (into [] vertices)))

(defmethod load-node "INDX"
  [{:keys [data size children]}]
  (let [index-count (.getInt data)
        bpi (/ (- size 4) index-count)
        indices (r/map (fn [pos]
                        (case bpi
                          2 (.getShort data pos)
                          4 (.getInt data pos)))
                       (range 0 (* index-count bpi) bpi))]
    (into [] indices)))

(defmethod load-node "SIDX"
  [{:keys [data size bpi children]}]
  (reduce (fn [sets pos]
            (let [rotations [(get-float data) (get-float data) (get-float data)]
                  num-indices (.getInt data)]
              (conj sets {:rotations rotations
                          :indices
                          (reduce (fn [indices pos]
                                    (conj indices (case bpi
                                                    2 (.getShort data)
                                                    4 (.getInt data))))
                                  [] (range 0 (* num-indices bpi) bpi))})))
          [] (range 0 (.getInt data))))

(defmethod load-node "MESH"
  [node]
  (let [root (first (:children (find-child node #(= (:type %) "SPS "))))
        [cnt-node & geometry-nodes] (:children root)
        cnt (.getInt (:data cnt-node))]
    (reduce (fn [geometries geometry-node]
              (let [[sht-node _ vnode] (:children geometry-node)
                    sht-file (load-node sht-node)
                    [info vtxa indx sidx] (:children vnode)
                    vertices (load-node vtxa)
                    indices (load-node indx)
                    bpi (if (instance? java.lang.Short (first indices)) 2 4)
                    secondary (when sidx (load-node (assoc sidx :bpi bpi)))]
                (conj geometries (cond-> {:vertices vertices
                                          :indices indices}
                                   secondary (assoc :secondary secondary)))))
            [] geometry-nodes)))

(def yt1300
  (-> "resources/extracted_jtl/appearance/mesh/yt1300_l0.msh" iff/load-iff-file load-node time))

(def star-destroyer
  (-> "resources/extracted/appearance/mesh/star_destroyer.msh" iff/load-iff-file load-node time))

(def theed-palace
  (-> "resources/extracted/appearance/mesh/thm_nboo_thed_theed_palace_r0_mesh_l0_c0_l0.msh" iff/load-iff-file load-node time))
