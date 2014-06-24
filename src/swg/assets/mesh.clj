(ns swg.assets.mesh
  (:use clojure.core.matrix)
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [swg.assets.iff :as iff :refer [load-node]]
            [swg.assets.util :refer :all :exclude [record?]]
            [clojure.string :as str]
            [clojure.walk :as walk])
  (:import (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

(set-current-implementation :vectorz)

(defmethod load-node "NAME"
  [{:keys [size data] :as node}]
  (subs (get-string data size) 0 (dec size)))

(defmethod load-node "MESH"
  [node]
  (let [root (first (:children (find-child node #(= (:type %) "SPS "))))
        [cnt-node & geometry-nodes] (:children root)
        cnt (.getInt (:data cnt-node))]
    (reduce (fn [geometries geometry-node]
              (let [geometry (:type geometry-node)
                    sht-node (find-child geometry-node #(= (:type %) "NAME"))
                    sht-file (load-node sht-node)]
                (conj geometries sht-file)))
            [] geometry-nodes)))

(def yt1300
  (-> "resources/extracted_jtl/appearance/mesh/yt1300_l0.msh" iff/load-iff-file load-node time))

(def star-destroyer
  (-> "resources/extracted/appearance/mesh/star_destroyer.msh" iff/load-iff-file load-node time))

(def theed-palace
  (-> "resources/extracted/appearance/mesh/thm_nboo_thed_theed_palace_r0_mesh_l0_c0_l0.msh" iff/load-iff-file load-node time))
