(ns user
  "Tools for interactive development with the REPL. This file should
  not be included in a production build of the application."
  (:require
   [cemerick.austin]
   [cemerick.austin.repls
    :refer (browser-repl-env browser-connected-repl-js exec)]
   [clojure.java.io :as io]
   [clojure.tools.namespace.repl :refer (refresh refresh-all)]
   [compojure.core :refer (GET ANY POST defroutes)]
   [compojure.route :as route]
   [net.cgrand.enlive-html :as enlive :refer [deftemplate]]
   [ring.adapter.jetty :refer (run-jetty)]
   [weasel.repl.websocket :as repl]))

(defroutes app
  (route/resources "/")
  (ANY "*" req (io/resource "public/index.html")))

(def system
  "A Var containing an object representing the application under
  development."
  nil)

(defn init
  "Creates and initializes the system under development in the Var
  #'system."
  []
  (alter-var-root
   #'system
   (fn [system]
     (if-not (:server system)
       {:server (run-jetty #'app {:port 3000 :join? false})
        :repl-env (reset! browser-repl-env (repl/repl-env :ip "0.0.0.0"
                                                          :port 9001))}
       (do (.start (:server system)) system)))))

(defn start
  "Starts the system running, updates the Var #'system."
  []
  (cemerick.austin.repls/cljs-repl (:repl-env system) :optimizations :none))

(defn stop
  "Stops the system if it is currently running, updates the Var
  #'system."
  []
  (when (try (.stop (:server system))
             (catch Throwable e false))
    true))

(defn go
  "Initializes and starts the system running."
  []
  (init)
  (start)
  :ready)

(defn reset
  "Stops the system, reloads modified source files, and restarts it."
  []
  (stop)
  (refresh-all :after 'user/go))
