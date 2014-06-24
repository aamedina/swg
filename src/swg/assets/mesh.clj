(ns swg.assets.mesh
  (:use clojure.core.matrix)
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [swg.assets.iff :as iff]
            [swg.assets.util :refer :all])
  (:import (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)))

(set-current-implementation :vectorz)

(defmulti load-node :type)

(defmethod load-node :default
  [{:keys [type]}]
  type)

(defn load-mesh
  [iff]
  (load-node iff))

(def yt1300
  (-> "resources/extracted_jtl/appearance/mesh/yt1300_l0.msh"
      iff/load-iff-file
      load-mesh
      time))

(def star-destroyer
  (-> "resources/extracted/appearance/mesh/star_destroyer.msh"
      iff/load-iff-file
      load-mesh
      time))
