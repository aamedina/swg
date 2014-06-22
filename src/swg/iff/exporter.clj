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
                           :count (count indices)}))

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

(def star-destroyer
  (xml/emit-str (export-mesh iff/test-iff)))
