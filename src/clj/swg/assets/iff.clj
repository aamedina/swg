(ns swg.assets.iff
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [criterium.core :refer [quick-bench]]
            [swg.assets.util :as util :refer :all :exclude [record?]])
  (:import (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

(def ^:dynamic *prefix-path* "resources/merged")

(defmulti load-node :type)

(defmethod load-node "NULL" [node] nil)

(defmethod load-node :default
  [{:keys [type size children] :as node}]
  (if (seq children)
    (reduce (fn [coll x]
              (cond
                (map? x) (conj coll x)
                (and (vector? x) (coll? (first x))) (into coll x)
                (nil? x) coll
                :else (conj coll x)))
            [] (map load-node children))
    (when (nil? children)
      node)))

(defn read-form
  [buf]
  (let [tag (get-string buf 4)
        size (get-uint buf)]
    (if (= tag "FORM")
      {:size size :type (str/trim (get-string buf 4)) :children []}
      {:size size :type (str/trim tag) :data (read-bytes buf size)})))

(defn load-children
  [buf {:keys [size] :as parent}]
  (let [max (+ (.position buf) (- size 4))]
    (loop [children []]
      (if (< (.position buf) max)
        (let [child (read-form buf)]
          (recur (if (form? child)
                   (conj children (load-children buf child))
                   (conj children child))))
        (assoc parent
          :children (mapv #(assoc % :parent (:type parent)) children))))))

(defn load-iff-file
  ([path]
     (let [buf (byte-buffer (str *prefix-path* "/" path))
           header (read-form buf)]
       (load-children buf header)))
  ([prefix-path path-to-file]
     (let [buf (byte-buffer (str prefix-path "/" path-to-file))
           header (read-form buf)]
       (load-children buf header))))
