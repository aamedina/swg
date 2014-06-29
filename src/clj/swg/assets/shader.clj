(ns swg.assets.shader
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [swg.assets.iff :as iff :refer [load-node]]
            [swg.assets.util :as util :refer :all :exclude [record?]]
            [clojure.string :as str]
            [clojure.core.reducers :as r])
  (:import (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

(defmethod load-node "TAG"
  [{:keys [data]}]
  (get-string data 4))

(defmethod load-node "MATL"
  [{:keys [data]}]
  {:ambient (read-rgba data)
   :diffuse (read-rgba data)
   :specular (read-rgba data)
   :emissive (read-rgba data)
   :shininess (.getFloat data)})

(defmethod load-node "SSHT"
  [{:keys [type children] :as node}]
  (let [mats (find-child node #(= (:type %) "MATS"))
        tag (load-node (find-child node #(= (:type %) "TAG")))
        colors (load-node (find-child node #(= (:type %) "MATL")))
        texture (find-child node #(= (:type %) "NAME"))
        texture-file (-> #_(str iff/*prefix-path* "/")
                         (get-string (:data texture) (dec (:size texture)))
                         (str/replace #"dds$" "png")
                         (str/replace #"\\" "/"))]
    (assoc colors
      :texture texture-file)))

(defmethod load-node "PAL"
  [{:keys [type data size] :as node}]
  (apply str (map char (repeatedly size #(.get data)))))

(defmethod load-node "TFAC"
  [{:keys [type children] :as node}]
  (map load-node children))

(defmethod load-node "CSHD"
  [{:keys [type children] :as node}]
  (load-node (find-child node #(= (:type %) "SSHT"))))

(defmethod load-node "PRNT"
  [{:keys [data size] :as node}]
  (into [] (repeatedly (/ size 4) #(.getInt data))))

(defmethod load-node "RPRE"
  [{:keys [data size] :as node}]
  (into [] (repeatedly (/ size 16) #(read-quaternion data))))

(defmethod load-node "RPST"
  [{:keys [data size] :as node}]
  (into [] (repeatedly (/ size 16) #(read-quaternion data))))

(defmethod load-node "BPTR"
  [{:keys [data size] :as node}]
  (into [] (repeatedly (/ (/ size 4) 3) #(read-vec data 3))))

(defmethod load-node "BPRO"
  [{:keys [data size] :as node}]
  (into [] (repeatedly (/ size 16) #(read-quaternion data))))

(defmethod load-node "JROR"
  [{:keys [data size] :as node}]
  (into [] (repeatedly (/ size 4) #(.getInt data))))

(defmethod load-node "SLOD"
  [{:keys [type children] :as node}]
  (load-all-nodes node))
