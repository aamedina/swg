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
  [cameras]
  [:library_cameras])

(defelem library-lights
  [lights]
  [:library_lights])

(defelem library-images
  [geometries]
  [:library_images
   (map-indexed (fn [n {:keys [texture]}]
                  [:image {:id (str "image" n)
                           :name (str "image" n)}
                   [:init_from (str "./" (:texture texture))]])
                geometries)])

(defelem library-materials
  [geometries]
  [:library_materials
   (map-indexed (fn [n geometry]
                  [:material {:id (str "material" n)
                              :name (str "material" n)}
                   [:instance_effect {:url (str "#effect" n)}]])
                geometries)])

(defelem library-effects
  [geometries]
  [:library_effects
   (map-indexed (fn [n {:keys [texture]}]
                  (let [{:keys [ambient diffuse specular emissive shininess]
                         :as colors} texture]
                    [:effect {:id (str "effect" n)}
                     [:profile_COMMON
                      [:newparam {:sid (str "image" n "-surface")}
                       [:surface {:type "2D"}
                        [:init_from (str "image" n)]
                        [:format "A8R8G8B8"]]]
                      [:newparam {:sid (str "image" n "-sampler")}
                       [:sampler2D
                        [:source (str "image" n "-surface")]
                        [:minfilter "LINEAR_MIPMAP_LINEAR"]
                        [:magfilter "LINEAR"]]]
                      [:technique {:sid "common"}
                       [:phong
                        [:emission [:color "0 0 0 1"]]
                        [:ambient [:color "0 0 0 1"]]
                        [:diffuse
                         [:texture {:texture (str "image" n "-sampler")
                                    :texcoord (str "TEX" n)}]]
                        [:specular [:color "0 0 0 1"]]
                        [:shininess [:float shininess]]
                        [:reflective [:color "0 0 0 1"]]
                        [:reflectivity [:float "0.1"]]
                        [:transparent {:opaque "RGB_ZERO"} [:color "0 0 0 1"]]
                        [:transparency [:float "1"]]]]]]))
                geometries)])

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
  [:source {:id (str "geometry" n "-lib-" name) :name name}
   [:float_array {:id (str "geometry" n "-lib-" name "s-array")
                  :count (case k
                           (:position :normal) (* (count coll) 3)
                           :map (* (count coll) 2))}
    (str/join " " (->> (flatten coll)
                       (map #(.format formatter %))))]
   [:technique_common (accessor-node n coll k name)]])

(defelem geometry
  [n {:keys [shader vertices indices secondary]}]
  [:geometry {:id (str "geometry" n "-lib") :name (str "geometry" n)}
   [:mesh
    (source n (map :position vertices) :position "position")
    (source n (map :normal vertices) :normal "normal")
    (for [m (range (count (:map (first vertices))))]
      (source n (map (comp #(nth % m) :map) vertices) :map (str "map" m)))
    [:vertices {:id (str "geometry" n "-lib-positions-vertices")}
     [:input {:semantic "POSITION"
              :source (str "#geometry" n "-lib-position")}]]
    [:triangles {:count (count indices)
                 :material (str "geometry-material" n)}
     [:input {:semantic "VERTEX"
              :offset 0
              :source (str "#geometry" n "-lib-positions-vertices")}]
     [:input {:semantic "NORMAL"
              :offset 0
              :source (str "#geometry" n "-lib-normal")}]
     (for [m (range (count (:map (first vertices))))]
       [:input {:semantic "TEXCOORD"
                :offset 0
                :source (str "#geometry" n "-lib-map" m)}])
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
   [:instance_geometry {:url (str "#" "geometry" n "-lib")}
    [:bind_material
     [:technique_common
      [:instance_material {:symbol (str "geometry-material" n)
                           :target (str "#material" n)}]]]]])

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
   (library-images geometries)
   (library-materials geometries)
   (library-effects geometries)
   (library-geometries geometries)
   (library-visual-scenes geometries)
   [:scene
    [:instance_visual_scene {:url "#VisualSceneNode"}]]])

(defn export-collada
  [geometries to-path]
  (let [xml (xml/indent-str (xml/as-elements (collada geometries)))]
    (spit to-path xml)))

(def yt1300
  (binding [iff/*prefix-path* "resources/merged"]
    (-> "resources/merged/appearance/mesh/yt1300_l0.msh"
        iff/load-iff-file
        load-node
        (export-collada "resources/merged/yt1300.dae")
        time)))

(def star-destroyer
  (binding [iff/*prefix-path* "resources/merged"]
    (-> "resources/merged/appearance/mesh/star_destroyer.msh"
        iff/load-iff-file
        load-node
        (export-collada "resources/merged/star_destroyer.dae")
        time)))

;; (def theed-palace
;;   (-> mesh/theed-palace
;;       (export-collada "resources/extracted/theed_palace.dae")))
