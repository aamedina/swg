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

(defmethod load-node "SSHT"
  [{:keys [children] :as node}]
  node)

(defmethod load-node "CSHD"
  [{:keys [children] :as node}]
  node)

(def yt1300
  (->> (map (partial iff/load-iff-file "resources/extracted_jtl")
            ["shader/yt1300_a_hcsb21.sht"
             "shader/yt1300_engine_as8.sht"
             "shader/yt1300_gun_s01_as8.sht"
             "shader/yt1300_b_hcsb21.sht"
             "shader/yt1300_dish_s01_hcsb21.sht"])
       (map load-node)))

(def star-destroyer
  (->> (map (partial iff/load-iff-file "resources/extracted")
            ["shader/sd_hangar_a_as6.sht"
             "shader/sd_win_a_as6.sht"
             "shader/sd_grey_a_as6.sht"
             "shader/sd_mainhull_a_as6.sht"
             "shader/sd_detail_a_as6.sht"])
       (map load-node)))
