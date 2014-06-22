(ns swg.iff.exporter
  (:require [swg.iff.reader :as iff]
            [clojure.data.xml :as xml]
            [clojure.string :as str]))

(defn param-node
  [vertex]
  (xml/element :param {:name vertex :type "float"}))

(defn accessor-node
  [id {:keys [shader vertices indices] :as geometry}]
  (let [id (str "#" id "-array")]
    (xml/element :accessor {:source id
                            :count (count vertices)
                            :stride 3}
                 [(param-node "x") (param-node "y") (param-node "z")])))

(defn technique-common-node
  [id {:keys [shader vertices indices] :as geometry}]
  (xml/element :technique_common {} (accessor-node id geometry)))

(defn positions-str
  [vertices flip-z?]
  (->> (for [{:keys [position]} vertices
             :let [[x y z] position
                   z (if flip-z? (- z) z)]]
         (format "{0:0.%.6f} {1:0.%.6f} {2:0.%.6f}" x y z))
       (str/join " ")))

(defn normals-str
  [vertices flip-z?]
  (->> (for [{:keys [normal]} vertices
             :let [[x y z] normal
                   z (if flip-z? (- z) z)]]
         (format "{0:0.%.6f} {1:0.%.6f} {2:0.%.6f}" x y z))
       (str/join " ")))

(defn texture-coords-str
  [vertices idx flip-v?]
  (->> (for [{:keys [texture-coords]} vertices
             :let [[x y] (nth texture-coords idx)
                   y (if flip-v? (- 1.0 y) y)]]
         (format "{0:0.%.6f} {1:0.%.6f}" x y))
       (str/join " ")))

(defn triangle-points-str
  [indices reverse?]
  (if reverse?
    (str/join " " (map #(format "{%d}" %) indices))
    (str/join " " (map #(format "{%d}" %) indices))))

(defn float-array-node
  [id {:keys [shader vertices indices] :as geometry}]
  (let [id (str id "-array")]
    (xml/element :float_array {:id id :count (* (count vertices) 3)}
                 (positions-str vertices true))))

(defn vertices-node
  [id {:keys [shader vertices indices] :as geometry}]
  (xml/element :vertices {:id (str id "-vertices")
                          :source (str id "-positions")}))

(defn triangles-node
  [id {:keys [shader vertices indices] :as geometry}]
  (xml/element :triangles {:material (str id "-material")
                           :count (/ (count indices) 3)}))

(defn source-node
  [id name {:keys [shader vertices indices] :as geometry}]
  (let [id (str id "-" name "s")]
    (xml/element :source {:id id :name name}
                 [(float-array-node id geometry)
                  (technique-common-node id geometry)])))

(defn mesh-node
  [id {:keys [shader vertices indices] :as geometry}]
  (xml/element :mesh {}
               (source-node id "position" geometry)
               (source-node id "normal" geometry)
               (source-node id "map" geometry)
               (vertices-node id geometry)
               (triangles-node id geometry)))

(defn geometry-node
  [idx {:keys [shader vertices indices] :as geometry}]
  (let [id (str "meshGeometry" idx)]
    (xml/element :geometry {:id id :name id}
                 (mesh-node id geometry))))

(defn export-mesh
  [{:keys [geometries] :as mesh}]
  (let [xs (reduce-kv (fn [coll idx geometry]                       
                        (conj coll (geometry-node idx geometry)))
                      [] geometries)]
    (xml/element :library_geometries {} xs)))

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
  []
  (xml/element :library_effects {}))

(defn library-geometries
  []
  (xml/element :library_geometries {}))

(defn library-visual-scenes
  []
  (xml/element :library_geometries {}))

(defn scene
  []
  (xml/element :scene {}))

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
               (library-effects)
               (library-geometries)
               (library-visual-scenes)
               (scene)))

(def star-destroyer
  (let [xml (xml/emit-str (export-collada iff/test-iff))]
    (spit "resources/meshes/star_destroyer.dae" xml)
    xml))
