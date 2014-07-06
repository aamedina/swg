(ns swg.core
  (:require [cljs.core.async :as a :refer [<! >! put! take! chan]]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [dommy.core :as dom])
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                   [dommy.macros :refer [sel sel1]])
  (:import (goog.dom ViewportSizeMonitor)
           (goog.events EventType)))

(defprotocol IRenderLoop
  (render-loop [component state]))

(defprotocol IInitScene
  (init-scene [component state]))

(defprotocol IUpdateScene
  (update-scene [component scene-state state]))

(defprotocol IAnimateScene
  (animate-scene [component scene-state state]))

(defprotocol IRenderScene
  (render-scene [component scene-state state]))

(def app-state (atom {}))

(defn debounce
  [msecs out]
  (let [in (chan (a/sliding-buffer 1))]
    (go-loop []
      (when-let [val (<! in)]
        (put! out val)
        (<! (a/timeout msecs))
        (recur)))
    in))

(defn grid
  [size step]
  (let [geometry (THREE.Geometry.)
        material (THREE.LineBasicMaterial. #js {:color 0x303030})
        vertices (.-vertices geometry)]
    (loop [i (- size)]
      (when (<= i size)
        (.push vertices (THREE.Vector3. (- size) -0.04 i))
        (.push vertices (THREE.Vector3. size -0.04 i))
        (.push vertices (THREE.Vector3. i -0.04 (- size)))
        (.push vertices (THREE.Vector3. i -0.04 size))
        (recur (+ i step))))
    (THREE.Line. geometry material THREE.LinePieces)))

(defn canvas
  [{:keys [scene camera frame loader model-uri model clock] :as data} owner]
  (reify
    om/IInitState
    (init-state [this]
      {:size [js/window.innerWidth js/window.innerHeight]})

    om/IWillMount
    (will-mount [this]
      (let [resize-chan (chan 1)
            debouncing (debounce 50 resize-chan)
            monitor (ViewportSizeMonitor.)]
        (goog.events/listen monitor EventType/RESIZE #(put! debouncing %))
        (go-loop []
          (when-let [e (<! resize-chan)]
            (let [size (.getSize monitor)]
              (om/set-state! owner :size [(.-width size) (.-height size)])
              (recur))))
        (go (let [{:keys [loader-chan scene] :as scene-state}
                  (init-scene this (om/get-state owner))]
              (om/update! data (merge @data scene-state))
              (loop []
                (when-let [model (<! loader-chan)]
                  (.add scene (:scene model))
                  (recur)))))))
    
    om/IDidMount
    (did-mount [this]
      (let [[width height] (om/get-state owner :size)
            renderer (THREE.WebGLRenderer. #js {:canvas (om/get-node owner)
                                                :antialias true})]
        (om/set-state! owner :renderer (doto renderer
                                         (.setSize width height)))))

    om/IShouldUpdate
    (should-update [this next-props next-state]
      (when (or (and (nil? scene) (:scene next-props))
                (not (identical? (:size next-state)
                                 (:size (om/get-state owner)))))
        true))

    om/IWillUnmount
    (will-unmount [this]
      (when frame
        (js/cancelAnimationFrame frame)
        (om/update! data :frame -1)))

    IInitScene
    (init-scene [this {:keys [renderer size] :as state}]
      (let [[width height] size
            scene (THREE.Scene.)
            camera (THREE.PerspectiveCamera. 60 (/ width height) 1 10000)
            loader-chan (chan 1)
            light1 (THREE.DirectionalLight. 0xffffff)
            light2 (THREE.DirectionalLight. 0xffffff)
            controls (THREE.OrbitControls. camera)]

        (.normalize (.set (.-position light1) 1 1 1))
        (.normalize (.set (.-position light2) -1 -1 -1))
        
        (.load loader (str "./" model-uri)
               (fn [collada]
                 (let [[scene morphs skins animations dae :as model]
                       (map (partial aget collada) (js-keys collada))
                       m (zipmap (map keyword (js-keys collada)) model)]
                   (set! (.. scene -scale -x) 0.2)
                   (set! (.. scene -scale -y) 0.2)
                   (set! (.. scene -scale -z) 0.2)
                   (.updateMatrix scene)
                   (put! loader-chan m))))
        
        (.set (.-position camera) 7 5 5)
        
        (set! (.-fog scene) (THREE.FogExp2. 0x3f3f3f 0.0002))

        (.setClearColor renderer (.. scene -fog -color) 1)
        
        {:scene (doto scene
                  (.add (grid 14 1))
                  (.add (THREE.AmbientLight. 0x222222))
                  (.add light1)
                  (.add light2))
         :camera camera
         :controls controls
         :loader-chan loader-chan}))

    IUpdateScene
    (update-scene [this {:keys [scene camera controls] :as scene-state} state]
      (let [[width height] (:size state)]
        (set! (.-aspect camera) (/ width height))
        (.updateProjectionMatrix camera)
        (.setSize (:renderer state) width height)
        (.handleResize controls)))

    IAnimateScene
    (animate-scene [this {:keys [scene camera clock model controls]
                          :as scene-state} state]
      (.update controls))

    IRenderScene
    (render-scene [this {:keys [scene camera clock model]
                         :as scene-state} state])
    
    IRenderLoop
    (render-loop [this {:keys [renderer] :as state}]
      (letfn [(render []
                (when (or (nil? frame) (not (== frame -1)))
                  (om/update! data :frame (js/requestAnimationFrame render))
                  (animate-scene this (if (om/rendering?) data @data) state)
                  (render-scene this (if (om/rendering?) data @data) state)
                  (.render renderer scene camera)))]
        (when renderer
          (if (nil? frame)
            (render)
            (do (om/update! data :frame (js/cancelAnimationFrame frame))
                (update-scene this data state)
                (render))))))
    
    om/IRenderState
    (render-state [this {:keys [size renderer] :as state}]
      (when (:scene data)
        (render-loop this (om/get-state owner)))
      (html [:canvas]))))

(defn ^:export -main
  [& args]
  (enable-console-print!)
  (om/root canvas {:loader (THREE.ColladaLoader.)
                   :model-uri "models/at_at.dae"
                   :clock (THREE.Clock.)}
           {:target (sel1 :#content)}))
