(ns swg.assets.shader
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

(defmethod load-node "MATS"
  [node]
  node)

(defmethod load-node "TAG "
  [{:keys [data]}]
  (get-string data 4))

(defn read-color
  [buf]
  (mapv get-float (repeat 4 buf)))

(defmethod load-node "MATL"
  [{:keys [data]}]
  {:ambient (read-color data)
   :diffuse (read-color data)
   :specular (read-color data)
   :emissive (read-color data)
   :shininess (get-float data)})

(defmethod load-node "SSHT"
  [{:keys [type children] :as node}]
  (let [mats (find-child node #(= (:type %) "MATS"))
        tag (load-node (find-child node #(= (:type %) "TAG ")))
        colors (load-node (find-child node #(= (:type %) "MATL")))
        texture (find-child node #(= (:type %) "NAME"))
        texture-file (-> #_(str iff/*prefix-path* "/")
                         (get-string (:data texture) (dec (:size texture)))
                         (str/replace #"dds$" "png")
                         (str/replace #"\\" "/"))]
    (assoc colors
      :texture texture-file)))

(defmethod load-node "CSHD"
  [{:keys [type children] :as node}]
  (load-node (find-child node #(= (:type %) "SSHT"))))

(def yt1300
  (->> (map (partial iff/load-iff-file "resources/merged")
            ["shader/yt1300_a_hcsb21.sht"
             "shader/yt1300_engine_as8.sht"
             "shader/yt1300_gun_s01_as8.sht"
             "shader/yt1300_b_hcsb21.sht"
             "shader/yt1300_dish_s01_hcsb21.sht"])
       (map load-node)))

(def star-destroyer
  (->> (map (partial iff/load-iff-file "resources/merged")
            ["shader/sd_hangar_a_as6.sht"
             "shader/sd_win_a_as6.sht"
             "shader/sd_grey_a_as6.sht"
             "shader/sd_mainhull_a_as6.sht"
             "shader/sd_detail_a_as6.sht"])
       (map load-node)))
