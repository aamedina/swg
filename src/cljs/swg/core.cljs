(ns swg.core
  (:require [weasel.repl :as repl]
            [cljs.core.async :as a :refer [<! >! put! take! chan]]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [dommy.core :as dom])
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                   [dommy.macros :refer [sel sel1 node deftemplate]]))

(defn canvas
  [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:message "Hello, world!"})
    om/IRenderState
    (render-state [_ state]
      (html [:h1 (:message state)]))))

(defn -main
  [& args]
  (enable-console-print!)
  (repl/connect "ws://localhost:9001")
  (om/root canvas {} {:target (sel1 :#content)}))
