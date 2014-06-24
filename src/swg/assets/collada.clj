(ns swg.assets.collada
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [swg.assets.iff :as iff :refer [load-node]]
            [swg.assets.mesh :as mesh]
            [swg.assets.util :refer :all :exclude [record?]]
            [clojure.string :as str]
            [clojure.core.reducers :as r]
            [hiccup.page :refer [xml-declaration]]
            [hiccup.def :refer [defelem defhtml]]
            [clojure.data.xml :as xml])
  (:import (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)
           (javax.xml.bind DatatypeConverter)))


(defelem library-cameras
  [& cameras]
  [:library_cameras])

(defelem library-lights
  [& lights]
  [:library_lights])

(defelem library-materials
  [geometries]
  [:library_materials])

(defelem geometry
  [n geo]
  [:geometry {}
   [:mesh]])

(defelem library-geometries
  [geometries]
  [:library_geometries
   (map-indexed geometry geometries)])

(defelem asset
  []
  (let [date (-> (java.util.TimeZone/getTimeZone "UTC")
                 (java.util.Calendar/getInstance)
                 (DatatypeConverter/printDateTime))]
    [:asset
     [:contributor
      [:author "Sony Online Entertainment"]
      [:authoring_tool "Clojure"]
      [:copyright "Sony Online Entertainment"]]
     [:created date]
     [:modified date]
     [:up_axis "Y_UP"]]))

(defelem collada
  [geometries]
  [:COLLADA {:xmlns "http://www.collada.org/2005/11/COLLADASchema"
             :version "1.4.1"}
   (asset)
   (library-geometries geometries)])

(defn export-collada
  [geometries]
  (spit "resources/extracted/star_destroyer.dae"
        (xml/indent-str (xml/as-elements (collada geometries)))))

;; (def yt1300
;;   (-> mesh/yt1300 export-collada))

(def star-destroyer
  (-> mesh/star-destroyer export-collada))

;; (def theed-palace
;;   (-> mesh/theed-palace))
