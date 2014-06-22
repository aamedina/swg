(ns swg.iff.exporter
  (:require [swg.iff.reader :as iff]
            [clojure.data.xml :as xml]))

(defn param-node
  [vertex]
  (xml/element :param {:name vertex :type "float"}))

(defn accessor-node
  [id {:keys [shader vertices indices] :as geometry}]
  (let [id (str "#" id "-array")]
    (xml/element :accessor {:source id
                            :count (count indices)
                            :stride 3}
                 [(param-node "x") (param-node "y") (param-node "z")])))

(defn technique-common-node
  [id {:keys [shader vertices indices] :as geometry}]
  (xml/element :technique-common {} (accessor-node id geometry)))

(defn float-array-node
  [id {:keys [shader vertices indices] :as geometry}]
  (let [id (str id "-array")]
    (xml/element :float-array {:id id :count (count vertices)})))

(defn source-node
  [id {:keys [shader vertices indices] :as geometry}]
  (let [id (str id "-positions")]
    (xml/element :source {:id id :name "position"}
                 [(float-array-node id geometry)
                  (technique-common-node id geometry)])))

(defn mesh-node
  [id {:keys [shader vertices indices] :as geometry}]
  (xml/element :mesh {} (source-node id geometry)))

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
