(ns swg.assets.iff
  (:refer-clojure :exclude [record?])
  (:use clojure.core.matrix)
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [swg.assets.util :refer :all])
  (:import (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

(set-current-implementation :vectorz)

(defn form?
  [x]
  (and (map? x) (contains? x :children)))

(defn record?
  [x]
  (and (map? x) (contains? x :data)))

(defn read-form
  [buf]
  (let [tag (get-string buf 4)
        size (get-uint buf)]
    (if (= tag "FORM")
      {:size size :type (get-string buf 4) :children []}
      {:size size :type tag :data (read-bytes buf size)})))

(defn load-children
  [buf {:keys [size] :as parent}]
  (let [max (+ (.position buf) (- size 4))]
    (loop [children []]
      (if (< (.position buf) max)
        (let [child (read-form buf)]
          (recur (if (form? child)
                   (conj children (load-children buf child))
                   (conj children child))))
        (assoc parent :children children)))))

(defn load-iff-file
  [path]
  (let [buf (byte-buffer path)
        header (read-form buf)]
    (load-children buf header)))

(def yt1300
  (-> "resources/extracted_jtl/appearance/mesh/yt1300_l0.msh"
      load-iff-file
      time))

(def star-destroyer
  (-> "resources/extracted/appearance/mesh/star_destroyer.msh"
      load-iff-file
      time))
