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
  [{:keys [data size]}]
  {:ambient (read-rgba data)
   :diffuse (read-rgba data)
   :specular (read-rgba data)
   :emissive (read-rgba data)
   :shininess (.getFloat data)})

(def image? (partial re-find #"png$"))

(defmethod load-node "EFCT"
  [node]
  (let [nodes (load-all-nodes node)]
    {:vertex-shaders (into [] (filter #(re-find #"vsh$" %) (nodes "0000")))
     :tags (let [m (->> (nodes "0002")
                        (map (fn [[n & chars]]
                               [n (apply str (map char chars))]) )
                        (group-by first))]
             (zipmap (keys m) (map #(mapv (comp str/reverse second) %)
                                   (vals m))))
     :optional-tags (->> (nodes "OPTN")
                         (map #(apply str (map char %)))
                         (mapv str/reverse))
     :pixel-shaders (->> (filter string? (nodes "DATA"))
                         (filter #(re-find #"psh$" %))
                         (into []))
     :nodes (dissoc nodes "0000" "0001" "0002" "DATA" "OPTN")}))

(defmethod load-node "SSHT"
  [{:keys [type children] :as node}]
  (let [nodes (load-all-nodes node)
        material (first (nodes "MATL"))
        [images effects] (->> (distinct (nodes "NAME"))
                              (map #(str/replace % #"\\" "/"))
                              (map #(str/replace % #"dds$" "png"))
                              ((juxt (partial filter image?)
                                     (partial remove image?))))
        effects (mapv #(load-node (iff/load-iff-file %)) effects)]
    #_(println images)
    (reduce (fn [material image]
                        (cond
                          (re-find #"spec" image)
                          (assoc material
                            ;; :specular image
                            :images (assoc (:images material)
                                      :specular image))

                          (re-find #"detail" image)
                          (assoc material
                            :images (assoc (:images material)
                                      :detail image))

                          (re-find #"_n.png$|_cn.png$" image)
                          (assoc material
                            ;; :normal image
                            :images (assoc (:images material)
                                      :normal image))

                          :else (assoc material
                                  ;; :diffuse image
                                  :images (assoc (:images material)
                                            :diffuse image))))
            (assoc material
              :effects effects) images)))

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
  (into [] (repeatedly (/ size 12) #(read-vec data 3))))

(defmethod load-node "BPRO"
  [{:keys [data size] :as node}]
  (into [] (repeatedly (/ size 16) #(read-quaternion data))))

(defmethod load-node "JROR"
  [{:keys [data size] :as node}]
  (into [] (repeatedly (/ size 4) #(.getInt data))))

(defmethod load-node "SLOD"
  [{:keys [type children] :as node}]
  (load-all-nodes node))

(defmethod load-node "OPTN"
  [{:keys [data size] :as node}]
  (get-string data size))
