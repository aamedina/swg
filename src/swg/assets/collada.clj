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
     [:modified date]]))

(defelem library-cameras
  [& cameras]
  [:library_cameras])

(defelem library-lights
  [& lights]
  [:library_lights])

(defelem library-materials
  [geometries]
  [:library_materials])

(defelem accessor-node
  [n coll k name]
  (into [:accessor {:count (count coll)
                    :source (str "#" "geometry" n  "-lib-" name "s-array")
                    :stride (case k (:position :normal) 3 :map 2)}]
        (case k
          (:position :normal) [[:param {:name "X" :type "float"}]
                               [:param {:name "Y" :type "float"}]
                               [:param {:name "Z" :type "float"}]]
          :map [[:param {:name "S" :type "float"}]
                [:param {:name "T" :type "float"}]])))

(defelem source
  [n coll k name]
  [:source {:id (str "geometry" n "-lib-" name "s") :name name}
   [:float_array {:id (str "geometry" n "-lib-" name "s-array")
                  :count (case k
                           (:position :normal) (* (count coll) 3)
                           :map (* (count coll) 2))}
    (case k
      (:position :normal) (str/join " " (mapcat k coll))
      :map (str/join " " (mapcat (comp flatten k) coll)))]
   [:technique_common (accessor-node n coll k name)]])

(defelem geometry
  [n {:keys [shader vertices indices secondary]}]
  [:geometry {:id (str "geometry" n "-lib") :name (str "geometry" n)}
   [:mesh
    (source n vertices :position "position")
    (source n vertices :normal "normal")
    (source n vertices :map "map")
    [:vertices {:id (str "geometry" n "-lib-vertices")}
     [:input {:semantic "POSITION"
              :source (str "#geometry" n "-lib-positions")}]]
    [:triangles {:count (count indices)}
     [:input {:offset 0
              :semantic "VERTEX"
              :source (str "#geometry" n "-lib-vertices")}]
     [:input {:offset 0
              :semantic "NORMAL"
              :source (str "#geometry" n "-lib-normals")}]
     [:input {:offset 0
              :semantic "TEXCOORD"
              :source (str "#geometry" n "-lib-maps")}]
     [:p (str/join " " (flatten indices))]]]])

(defelem library-geometries
  [geometries]
  [:library_geometries
   (map-indexed geometry geometries)])

(defelem node
  [n geometry]
  [:node {:id (str "mesh" n) :name "mesh"}
   [:rotate {:sid "rotateZ"} "0 0 1 0"]
   [:rotate {:sid "rotateY"} "0 1 0 0"]
   [:rotate {:sid "rotateX"} "1 0 0 0"]
   [:instance_geometry {:url (str "#" "geometry" n "-lib")}]])

(defelem library-visual-scenes
  [geometries]
  [:library_visual_scenes 
   [:visual_scene {:id "VisualSceneNode" :name "untitled"}
    (map-indexed node geometries)]])

(defelem collada
  [geometries]
  [:COLLADA {:xmlns "http://www.collada.org/2005/11/COLLADASchema"
             :version "1.4.1"}
   (asset)
   (library-geometries geometries)
   (library-visual-scenes geometries)
   [:scene
    [:instance_visual_scene {:url "#VisualSceneNode"}]]])

(defn export-collada
  [geometries to-path]
  (let [xml (xml/indent-str (xml/as-elements (collada geometries)))]
    (spit to-path xml)))



;; (def yt1300
;;   (-> mesh/yt1300 export-collada))

(def star-destroyer
  (-> mesh/star-destroyer
      (export-collada "resources/extracted/star_destroyer.dae")))

;; (def theed-palace
;;   (-> mesh/theed-palace))
