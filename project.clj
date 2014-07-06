(defproject swg "0.1.0-SNAPSHOT"
  :description "Star Wars Galaxies WebGL Streaming Experiment"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"sonatype-oss-public"
                 "https://oss.sonatype.org/content/groups/public/"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2261"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [org.clojure/tools.namespace "0.2.4"]
                 [org.clojure/tools.logging "0.3.0"]
                 [org.clojure/test.check "0.5.8"]
                 [org.clojure/tools.cli "0.3.1"]
                 [org.clojure/core.match "0.2.1"]
                 [org.clojure/data.xml "0.0.7"]
                 [io.netty/netty-all "5.0.0.Alpha2-SNAPSHOT"]
                 [clojurewerkz/buffy "1.0.0-beta4"]
                 [com.stuartsierra/component "0.2.1"]
                 [com.jcraft/jzlib "1.1.3"]
                 [net.mikera/vectorz-clj "0.23.0"]
                 [euclidean "0.2.0"]
                 [byte-streams "0.1.11"]
                 [byte-transforms "0.1.3"]
                 [hiccup "1.0.5"]
                 [criterium "0.4.3"]
                 [om "0.6.4"]
                 [sablono "0.2.17"]
                 [cljs-http "0.1.12"]
                 [prismatic/dommy "0.1.2"]
                 [weasel "0.3.0"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :source-paths ["src/clj"]
  :profiles {:dev {:dependencies [[ring "1.3.0"]
                                  [compojure "1.1.8"]
                                  [enlive "1.1.5"]]
                   :plugins [[com.cemerick/austin "0.1.5-SNAPSHOT"]]
                   :source-paths ["dev"]}
             :uberjar {:aot :all}
             :prod {:main ^:skip-aot swg.core
                    :target-path "target/%s"}}
  :plugins [[lein-cljsbuild "1.0.3"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs" "src/clj" "dev"]
                :compiler {:output-to "resources/public/js/main.js"
                           :output-dir "resources/public/js/out"
                           :source-map true
                           :optimizations :none}}]})
