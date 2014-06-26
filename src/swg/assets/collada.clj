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
                    (let [[r g b a] diffuse]
                      [:effect {:id (str "effect" n)}
                       [:profile_COMMON
                        [:newparam {:sid (str "image" n "-surface")}
                         [:surface {:type "2D"}
                          [:init_from (str "image" n)]
                          [:format "A8R8G8B8"]]]
                        [:newparam {:sid (str "image" n "-sampler")}
                         [:sampler2D
                          [:source (str "image" n "-surface")]]]
                        [:technique {:sid "common"}
                         [:phong
                          [:emission [:color (str/join " " emissive)]]
                          [:ambient [:color (str/join " " ambient)]]
                          [:diffuse
                           [:texture {:texture (str "image" n "-sampler")
                                      :texcoord (str "TEX" n)}]]
                          [:specular [:color (str/join " " specular)]]
                          [:shininess [:float shininess]]
                          [:reflective [:color (str/join " " diffuse)]]
                          [:reflectivity [:float "0.5"]]
                          [:transparent [:color (str/join " " diffuse)]]
                          [:transparency [:float a]]]]]])))
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

;; (def yt1300
;;   (binding [iff/*prefix-path* "resources/merged"]
;;     (-> "resources/merged/appearance/mesh/yt1300_l0.msh"
;;         iff/load-iff-file
;;         load-node
;;         (export-collada "resources/merged/yt1300.dae")
;;         time)))

;; (def star-destroyer
;;   (binding [iff/*prefix-path* "resources/merged"]
;;     (-> "resources/merged/appearance/mesh/star_destroyer_space_l0_c0_l0.msh"
;;         iff/load-iff-file
;;         load-node
;;         (export-collada "resources/merged/star_destroyer.dae")
;;         time)))

;; (def theed-palace
;;   (binding [iff/*prefix-path* "resources/merged"]
;;     (-> "resources/merged/appearance/mesh/thm_nboo_thed_theed_palace_r0_mesh_l0_c0_l0.msh"
;;         iff/load-iff-file
;;         load-node
;;         (export-collada "resources/merged/theed_palace.dae")
;;         time)))

(defn export-file
  [from-path to-path]
  (-> (iff/load-iff-file from-path)
      (load-node)
      (export-collada to-path)
      (time)))
(comment
  (export-file "resources/merged/appearance/mesh/space_station.msh"
               "resources/merged/space_station.dae")
  (let [files (->> (file-seq (io/as-file "resources/merged/appearance/mesh"))
                   (filter #(re-seq #"star_destroyer_space_l0" (.getPath %)))
                   (interleave (range))
                   (partition 2))]
    (time (doseq [[n file] files
                  :let [prefix "resources/merged/star_destroyer_space_l0_"
                        path (str prefix n ".dae")]]
            (export-collada (load-node (iff/load-iff-file file)) path)))))
