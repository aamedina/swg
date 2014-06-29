(ns swg.core
  (:gen-class)
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.tools.cli :refer [parse-opts]]
            [clojure.string :as str]
            [swg.server :as server])
  (:import (java.net InetAddress)))

(def command-line-options
  [["-p" "--port PORT" nil
    :default 3000
    :parse-fn #(Integer/parseInt %)
    :validate [#(< 0 0x10000) "PORT must be a number between 0 and 65536"]]
   ["-H" "--host HOSTNAME"
    :default (InetAddress/getByName "localhost")
    :default-desc "localhost"
    :parse-fn #(InetAddress/getByName %)]
   ["-h" "--help"]
   ["-v" "--version"]])

(defn print-usage
  [summary]
  (->> ["usage: swg [OPTIONS]"
        ""
        "Options:"
        summary]
       (str/join \newline)
       (println)))

(defn -main
  [& args]
  (let [{:keys [options arguments errors summary]
         :as opts} (parse-opts args command-line-options)]
    (cond
      (:version options) (println "0.1.0-SNAPSHOT")
      (:help options) (print-usage summary)
      :else (case (first arguments)      
              "start" (server/go (:port options))
              "stop" (server/stop)
              (print-usage summary)))))
