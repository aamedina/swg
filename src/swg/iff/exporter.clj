(ns swg.iff.exporter
  (:require [swg.iff.reader :as iff]
            [clojure.data.xml :as xml]
            [clojure.string :as str]
            [clojure.java.io :as io]))

(def ^:const epsilon 2E-23)

(defn format-floats
  [floats flip-z?]
  (->> (mapcat (fn [[x y z]]
              (if flip-z?
                [x y (- z)]
                [x y z])) floats)
       (map #(format "%g" %))
       (str/join " ")))

(defn format-texture-coords
  [texture-coords idx flip-v?]
  (->> (map #(nth % idx) texture-coords)
       (mapcat (fn [[x y]]
              (if flip-v?
                [x (- 1.0 y)]
                [x y])))
       (map #(format "%g" %))
       (str/join " ")))

(defn format-indices
  [indices reverse?]
  (->> (mapcat (fn [[x y z]]
              (if reverse?
                [z y x]
                [x y z])) (partition 3 indices))
       (str/join " ")))

(defn geometry
  [idx {:keys [shader vertices indices] :as geometry}]
  (let [id (str "shape" idx "-lib")
        name (str "shape" idx)]
    [:geometry {:id id :name name}
     [:mesh
      [:source {:id (str id "-positions") :name "position"}
       [:float_array {:id (str id "-positions-array")
                      :count (* (count vertices) 3)}
        (format-floats (map first vertices) true)]
       [:technique_common
        [:accessor {:source (str "#" id "-positions-array")
                    :count (count vertices)
                    :stride 3}
         [:param {:name "X" :type "float"}]
         [:param {:name "Y" :type "float"}]
         [:param {:name "Z" :type "float"}]]]]
      [:source {:id (str id "-normals") :name "normal"}
       [:float_array {:id (str id "-normals-array")
                      :count (* (count vertices) 3)}
        (format-floats (map second vertices) true)]
       [:technique_common
        [:accessor {:source (str "#" id "-normals-array")
                    :count (count vertices)
                    :stride 3}
         [:param {:name "X" :type "float"}]
         [:param {:name "Y" :type "float"}]
         [:param {:name "Z" :type "float"}]]]]
      [:source {:id (str id "-map") :name "map"}
       [:float_array {:id (str id "-map-array")
                      :count (* (count vertices) 2)}
        (format-texture-coords (map last vertices) 0 true)]
       [:technique_common
        [:accessor {:source (str "#" id "-map-array")
                    :count (count vertices)
                    :stride 2}
         [:param {:name "S" :type "float"}]
         [:param {:name "T" :type "float"}]]]]
      [:vertices {:id (str id "-vertices")}
       [:input {:semantic "POSITION" :source (str "#" id "-positions")}]]
      [:triangles {:material (str "material" idx)
                   :count (/ (count indices) 3)}
       [:input {:semantic "VERTEX"
                :source (str "#" id "-vertices")
                :offset "0"}]
       [:input {:semantic "NORMAL"
                :source (str "#" id "-normals")
                :offset "1"}]
       [:input {:semantic "TEXCOORD"
                :source (str "#" id "-map")
                :offset "2"}]
       [:p (format-indices indices false)]]]]))

(defn camera
  [n]
  (xml/as-elements [:camera {:id (str "cameraShape" n)
                             :name (str "cameraShape" n)}
                    [:optics
                     [:technique_common
                      [:perspective
                       [:yfov 37.8492]
                       [:aspect_ratio 1.5]
                       [:znear 1]
                       [:zfar 10000]]]]]))

(defn library-cameras
  []
  (xml/element :library_cameras {} (camera 0)))

(defn directional-light
  [n]
  (xml/as-elements [:light {:id (str "directionalLightShape" n "-lib")
                            :name (str "directionalLightShape" n)}
                    [:technique_common
                     [:directional
                      [:color (str/join " " [1 1 1])]]]]))

(defn library-lights
  []
  (xml/element :library_lights {} (directional-light 0)))

(defn library-images
  [shaders]
  (xml/as-elements [:library_images
                    (for [[{:keys [texture-file]} n]
                          (->> (range (count shaders))
                               (interleave shaders)
                               (partition 2))
                          :let [id (str "texture" n)]]
                      [:image {:id id :name id}
                       [:init_from texture-file]])]))

(defn library-materials
  [geometries]
  (xml/as-elements [:library_materials
                    (for [n (range (count geometries))
                          :let [id (str "material" n)]]
                      [:material {:id id :name id}
                       [:instance_effect {:url (str "#" id "-fx")}]])]))

(defn library-effects
  [geometries]
  (xml/as-elements [:library_effects
                    (for [n (range (count geometries))
                          :let [id (str "material" n "-fx")
                                img (str "texture" n)]]
                      [:effect {:id id}
                       [:profile_COMMON
                        [:newparam {:sid (str img "-surface")}
                         [:surface {:type "2D"}
                          [:init_from img]
                          [:format "A8R8G8B8"]]]
                        [:newparam {:sid (str img "-sampler")}
                         [:sampler2D
                          [:source (str img "-surface")]]]
                        [:technique {:sid "common"}
                         [:blinn
                          [:emission [:color "0 0 0 1"]]
                          [:ambient [:color "0 0 0 1"]]
                          [:diffuse [:texture {:texture (str img "-sampler")
                                               :texcoord "TEX0"}]]
                          [:specular [:color "0 0 0 1"]]
                          [:shininess [:float 0]]
                          [:reflective [:color "0 0 0 1"]]
                          [:reflectivity [:float 0.5]]
                          [:transparent {:opaque "RGB_ZERO"} [:color "0 0 0 1"]]
                          [:transparency [:float 1]]]]]])]))

(defn library-geometries
  [geometries]
  (xml/as-elements
   [:library_geometries
    (for [[geo n] (->> (range (count geometries))
                       (interleave geometries)
                       (partition 2))]
      (geometry n geo))]))

(defn library-visual-scenes
  [geometries]
  (xml/as-elements [:library_visual_scenes
                    [:visual_scene {:id "VisualSceneNode" :name "untitled"}
                     [:node {:id "SWGMesh" :name "SWGMesh"}
                      [:matrix {:sid "transform"}
                       "1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1"]
                      ;; [:rotate {:sid "rotateZ"} "0 0 1 0"]
                      ;; [:rotate {:sid "rotateY"} "0 1 0 0"]
                      ;; [:rotate {:sid "rotateX"} "1 0 0 0"]
                      (for [n (range (count geometries))
                            :let [geometry-url (str "#shape" n "-lib")]]
                        [:instance_geometry {:url geometry-url}
                         [:bind_material
                          [:technique_common
                           [:instance_material
                            {:symbol (str "material" n)
                             :target (str "#material" n)}
                            [:bind_vertex_input {:semantic "TEX0"
                                                 :input_semantic "TEXCOORD"
                                                 :input_set 0}]]]]])]]]))

(defn scene
  []
  (xml/as-elements [:scene [:instance_visual_scene {:url "#VisualSceneNode"}]]))

(defn asset
  []
  (xml/as-elements [:asset
                    [:contributor
                     [:author "Sony Online Entertainment"]
                     [:authoring_tool "Unknown"]
                     [:copyright "Copyright 2014 Sony Online Entertainment"]]
                    [:created "2006-08-23T22:29:59Z"]
                    [:modified "2006-08-23T22:29:59Z"]
                    [:up_axis "Y_UP"]]))

(defn export-collada
  [mesh]
  (xml/element :COLLADA {:xmlns "http://www.collada.org/2005/11/COLLADASchema"
                         :version "1.4.1"}
               (asset)
               #_(library-cameras)
               #_(library-lights)
               (library-images (map :shader mesh))
               (library-materials mesh)
               (library-effects mesh)
               (library-geometries mesh)
               (library-visual-scenes mesh)
               (scene)))

(defn export-mesh
  [inpath outpath]
  (let [mesh (iff/parse-mesh (iff/iff-buffer inpath))
        xml (xml/indent-str (export-collada mesh))]
    (spit outpath xml)))

(comment
  (let [buf (iff/iff-buffer "resources/extracted/appearance/mesh/thm_nboo_thed_theed_palace_r0_mesh_l0_c0_l0.msh")
        mesh (iff/parse-mesh buf)]
    mesh)
  (export-mesh 
               "resources/extracted/thm_nboo_thed_theed_palace_r0_mesh_l0_c0_l0.dae"))

(def star-destroyer
  (let [xml (xml/indent-str (export-collada iff/test-iff))]
    (spit "resources/extracted/star_destroyer.dae" xml)
    xml))
