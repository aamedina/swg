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
  (into [] (reverse (map get-float (repeat 4 buf)))))

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

(defmethod load-node "PAL "
  [{:keys [type data size] :as node}]
  (apply str (map char (repeatedly size #(.get data)))))

(defmethod load-node "TFAC"
  [{:keys [type children] :as node}]
  (map load-node children))

(defmethod load-node "CSHD"
  [{:keys [type children] :as node}]
  (load-node (find-child node #(= (:type %) "SSHT"))))

