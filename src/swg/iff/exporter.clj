(ns swg.iff.exporter
  (:require [swg.iff.reader :as iff]
            [clojure.data.xml :as xml]
            [clojure.string :as str]
            [clojure.java.io :as io]))

(defn geometry
  [idx {:keys [shader vertices indices] :as geometry}]
  (let [id (str "meshGeometry" idx)]
    [:geometry {:id id :name id}
     [:mesh
      [:source {:id (str id "-positions") :name "position"}
       [:float_array {:id (str id "-positions-array")
                      :count (* (count vertices) 3)}
        (str/join " " (reduce into [] (map :position vertices)))]
       [:technique_common
        [:accessor {:source (str "#" id "-positions-array")
                    :count (str (count vertices))
                    :stride "3"}
         [:param {:name "X" :type "float"}]
         [:param {:name "Y" :type "float"}]
         [:param {:name "Z" :type "float"}]]]]
      [:source {:id (str id "-normals") :name "normal"}
       [:float_array {:id (str id "-normals-array")
                      :count (* (count vertices) 3)}
        (str/join " " (reduce into [] (map :normal vertices)))]
       [:technique_common
        [:accessor {:source (str "#" id "-normals-array")
                    :count (str (count vertices))
                    :stride "3"}
         [:param {:name "X" :type "float"}]
         [:param {:name "Y" :type "float"}]
         [:param {:name "Z" :type "float"}]]]]
      [:source {:id (str id "-maps") :name "map"}
       [:float_array {:id (str id "-maps-array")
                      :count (* (count indices) 2)}
        (str/join " " (reduce into [] (reduce into []
                                              (map :texture-coords vertices))))]
       [:technique_common
        [:accessor {:source (str "#" id "-maps-array")
                    :count (str (count indices))
                    :stride "2"}
         [:param {:name "S" :type "float"}]
         [:param {:name "T" :type "float"}]]]]
      [:vertices {:id (str id "-vertices")}
       [:input {:semantic "POSITION" :source (str "#" id "-positions")}]]
      [:triangles {:material (str id "-material")
                   :count (/ (count indices) 3)}
       [:input {:semantic "VERTEX"
                :source (str "#" id "-vertices")
                :offset "0"}]
       [:input {:semantic "NORMAL"
                :source (str "#" id "-normals")
                :offset "0"}]
       [:input {:semantic "TEXCOORD"
                :source (str "#" id "-maps")
                :offset "0"}]
       (str/join " " indices)]]]))

(defn technique-common
  [child]
  (xml/element :technique_common {} child))

(defn perspective
  [yfov aspect-ratio znear zfar]
  (xml/as-elements [:perspective
                    [:yfov yfov]
                    [:aspect_ratio aspect-ratio]
                    [:znear znear]
                    [:zfar zfar]]))

(defn optics
  []
  (xml/element :optics {} (technique-common (perspective 37.8492 1.5 1 10000))))

(defn camera
  [n]
  (xml/element :camera {:id (str "cameraShape" n)
                        :name (str "cameraShape" n)}
               (optics)))

(defn library-cameras
  []
  (xml/element :library_cameras {} (camera 0)))

(defn directional-light
  [n]
  (xml/as-elements [:light {:id (str "directionalLightShape" n "-lib")
                            :name (str "directionalLightShape" n)}
                    [:technique-common
                     [:directional
                      [:color (str/join " " [1 1 1])]]]]))

(defn library-lights
  []
  (xml/element :library_lights {} (directional-light 0)))

(defn library-images
  [shaders]
  (xml/as-elements [:library_images
                    (for [shader shaders
                          n (range (count shaders))
                          :let [id (str "Image" n)]]
                      [:image {:id id :name id :depth "1"}
                       [:init_from shader]])]))

(defn library-materials
  [geometries]
  (xml/as-elements [:library_materials
                    (for [n (range (count geometries))
                          :let [id (str "Material" n)]]
                      [:material {:id id :name id}
                       [:instance_effect {:url (str "#Effect" n)}]])]))

(defn library-effects
  [geometries]
  (xml/as-elements [:library_effects
                    (for [n (range (count geometries))
                          :let [id (str "Effect" n)
                                img (str "Image" n)]]
                      [:effect {:id id}
                       [:profile_COMMON
                        [:new-param {:sid (str img "-surface")}
                         [:surface {:type "2D"}
                          [:init_from img]
                          [:format "A8R8G8B8"]]]
                        [:new-param {:sid (str img "-sampler")}
                         [:sampler2D
                          [:source (str img "-surface")]
                          [:minfilter "LINEAR_MIPMAP_LINEAR"]
                          [:magfilter "LINEAR"]]]
                        [:technique {:sid "common"}
                         [:phong
                          [:emission [:color "0 0 0 1"]]
                          [:ambient [:color "0 0 0 1"]]
                          [:diffuse [:texture {:texture (str img "-sampler")
                                               :texcoord "TEX0"}]]
                          [:specular [:color "0 0 0 1"]]
                          [:shininess [:float 0]]
                          [:reflective [:color "0 0 0 1"]]
                          [:reflectivity [:float "0.5"]]
                          [:transparent {:opaque "RGB_ZERO"}
                           [:color "0 0 0 1"]]
                          [:transparent [:float "1"]]]]]])]))

(defn library-geometries
  [geometries]
  (xml/as-elements
   [:library_geometries
    (for [geometry geometries
          n (range (count geometries))]
      (geometry n geometry))]))

(defn library-visual-scenes
  [geometries]
  (xml/as-elements [:library_visual_scenes
                    (for [n (range (count geometries))
                          :let [geometry-url (str "#meshGeometry" n)]]
                      [:visual_scene {:id "VisualSceneNode"
                                      :name "untitled"}
                       [:node {:id "Mesh" :name "Mesh" :type "NODE"}
                        [:matrix {:sid "transform"}
                         "1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1"]
                        [:instance_geometry {:url geometry-url}
                         [:bind_material
                          [:technique_common
                           [:instance_material
                            {:symbol (str "meshGeometry" n "-material")
                             :target (str "Material" n)}]]]]]])]))

(defn scene
  []
  (xml/as-elements [:scene [:instance_visual_scene {:url "#VisualSceneNode"}]]))

(defn author
  [author]
  (xml/element :author {} author))

(defn authoring-tool
  [tool]
  (xml/element :authoring_tool {} tool))

(defn comments
  [text]
  (xml/element :comments {} text))

(defn copyright
  [text]
  (xml/element :copyright {} text))

(defn contributor
  [name tool comments-text copyright-text]
  (xml/element :contributor {}
               (author name)
               (authoring-tool tool)
               (comments comments-text)
               (copyright copyright-text)))

(defn asset
  []
  (xml/element :asset {}
               (contributor "Sony Online Entertainment"
                            "Unknown"
                            "Clojure rules"
                            "Copyright 2014 Sony Online Entertainment")))

(defn export-collada
  [mesh]
  (xml/element :COLLADA {:xmlns "http://www.collada.org/2005/11/COLLADASchema"
                         :version "1.4.1"}
               (asset)
               (library-cameras)
               (library-lights)
               (library-images (map :shader (:geometries mesh)))
               (library-materials (:geometries mesh))
               (library-effects (:geometries mesh))
               (library-geometries (:geometries mesh))
               (library-visual-scenes (:geometries mesh))
               (scene)))

(def star-destroyer
  (let [xml (xml/indent-str (export-collada iff/test-iff))]
    (spit "resources/meshes/star_destroyer.dae" xml)
    xml))
