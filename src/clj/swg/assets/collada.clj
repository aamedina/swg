(ns swg.assets.collada
  (:use clojure.core.matrix)
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.core.matrix.operators :as ops]
            [euclidean.math.quaternion :as q]
            [euclidean.math.vector :as v]
            [clojure.java.io :as io]
            [criterium.core :refer [quick-bench]]
            [swg.assets.iff :as iff :refer [load-node]]
            [swg.assets.mesh :as mesh]
            [swg.assets.util :refer :all :exclude [record?]]
            [clojure.string :as str]
            [clojure.core.reducers :as r]
            [hiccup.page :refer [xml-declaration]]
            [hiccup.def :refer [defelem defhtml]]
            [clojure.data.xml :as xml]
            [clojure.zip :as zip])
  (:import (org.apache.commons.io FilenameUtils)
           (java.io File RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)
           (javax.xml.bind DatatypeConverter)))

(set-current-implementation :vectorz)

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
                                      :texcoord "TEX0"}]]
                          [:specular [:color (str/join " " specular)]]
                          [:shininess [:float 0]]
                          [:reflective [:color "0 0 0 1"]]
                          [:reflectivity [:float 0.5]]
                          [:transparent {:opaque "RGB_ZERO"} [:color "0 0 0 1"]]
                          [:transparency [:float 1]]]]]])))
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
  (let [flattened (flatten coll)]
    [:source {:id (str "geometry" n "-lib-" name) :name name}
     [:float_array {:id (str "geometry" n "-lib-" name "s-array")
                    :count (count flattened)}
      (str/join " " (->> flattened
                         (map #(.format formatter %))))]
     [:technique_common (accessor-node n coll k name)]]))

(defelem geometry
  [n {:keys [positions normals maps triangles secondary]}]
  [:geometry {:id (str "geometry" n "-lib") :name (str "geometry" n)}
   [:mesh
    (source n positions :position "position")
    (source n normals :normal "normal")
    (for [m (range (count (first maps)))]
      (source n (mapv #(nth % m) maps) :map (str "map" m)))
    [:vertices {:id (str "geometry" n "-lib-positions-vertices")}
     [:input {:semantic "POSITION"
              :source (str "#geometry" n "-lib-position")}]]
    [:triangles {:count (count triangles)
                 :material (str "geometry-material" n)}
     [:input {:semantic "VERTEX"
              :offset 0
              :source (str "#geometry" n "-lib-positions-vertices")}]
     [:input {:semantic "NORMAL"
              :offset 0
              :source (str "#geometry" n "-lib-normal")}]
     (for [m (range (count (first maps)))]
       [:input {:semantic "TEXCOORD"
                :offset 0
                :source (str "#geometry" n "-lib-map" m)}])
     [:p (str/join " " (flatten triangles))]]]])

(defelem library-geometries
  [geometries]
  [:library_geometries
   (map-indexed geometry geometries)])

(defelem controller
  [n geometry]
  [:controller {:id (str "controller" n)}
   [:skin {:source (str "#geometry" n "-lib")}
    [:source {:id (str "controller" n "-joints")}
     [:Name_array (str/join " " (:bone-names geometry))]]
    [:joints
     [:input {:semantic "JOINT" :source (str "#controller" n "-joints")}]
     [:input {:semantic "INV_BIND_MATRIX" :source (str "#controller" n)}]]
    [:vertex_weights {:id (str "controller" n "-joints")}
     [:input {:semantic "JOINT"
              :source (str "#controller" n "-joints")
              :offset "0"}]
     [:input {:semantic "WEIGHT"
              :source (str "#controller" n "-weights")
              :offset "1"}]
     [:vcount]
     [:v]]]])

(defelem library-controllers
  [geometries]
  (when (some :skeletons geometries)
    [:library_controllers
     (map-indexed controller geometries)]))

(defelem joint
  [n geometry]
  [:node {:id (str "mesh" n) :name "mesh" :type "JOINT"}
   ])

(defelem instance-controller
  [n geometry]
  [:instance_controller
   [:skeleton ""]
   [:bind_material
    [:technique_common
     [:instance_material {:symbol (str "geometry-material" n)
                          :target (str "#material" n)}]]]])

(defelem instance-geometry
  [n geometry]
  [:instance_geometry {:url (str "#" "geometry" n "-lib")}
   [:bind_material
    [:technique_common
     [:instance_material {:symbol (str "geometry-material" n)
                          :target (str "#material" n)}]]]])

(defelem node
  [n geometry]
  [:node {:id (str "mesh" n) :name "mesh"}
   (if (:skeletons geometry)
     (instance-controller n geometry)
     (instance-geometry n geometry))])

(defelem library-visual-scenes
  [geometries]
  [:library_visual_scenes 
   [:visual_scene {:id "VisualSceneNode" :name "untitled"}
    (when (some :skeletons geometries)
      (map-indexed joint geometries))
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
   (library-controllers geometries)
   (library-visual-scenes geometries)
   [:scene
    [:instance_visual_scene {:url "#VisualSceneNode"}]]])

(defn export-collada
  [geometries to-path]
  (let [elements (collada geometries)
        xml (xml/indent-str (xml/as-elements elements))]
    (spit (str iff/*prefix-path* "/" to-path) xml)))

(defn export-file
  [from-path to-path]
  (when-let [mesh (case (FilenameUtils/getExtension from-path)
                    "msh" (mesh/load-mesh from-path)
                    "mgn" (mesh/load-mgn from-path))]
    (export-collada mesh to-path)))

(defn import-file
  [path]
  (xml/parse (io/reader (io/as-file path))))

#_(def monster (import-file "/Users/adrian/Downloads/monster.dae"))

#_(export-file "appearance/mesh/star_destroyer.msh" "star_destroyer.dae")

#_(export-file "appearance/mesh/at_at_l0.mgn" "at_at.dae")

#_(def at-at (mesh/load-mgn "appearance/mesh/at_at_l0.mgn"))

(comment
  (export-file "appearance/mesh/space_station.msh"
               "space_station.dae")
  (def bone (rand-nth (last (:skeletons (first at-at)))))
  (q/mult (q/into-quaternion (:pre-rotation bone))
          (q/into-quaternion (:post-rotation bone)))
  (:rotations bone)
  (let [files (->> (file-seq (io/as-file "resources/merged/appearance/mesh"))
                   (filter #(re-seq #".*msh$" (.getPath %)))
                   (interleave (range))
                   (partition 2))]
    
    (do (time (doall (pmap (fn [[n file]]
                             (let [prefix "resources/merged/jedi_"
                                   path (str prefix n ".dae")]
                               (export-file file path))) files))))))
