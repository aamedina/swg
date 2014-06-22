(defproject swg "0.1.0-SNAPSHOT"
  :description "Star Wars Galaxies Emulator"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"sonatype-oss-public"
                 "https://oss.sonatype.org/content/groups/public/"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [org.clojure/tools.namespace "0.2.4"]
                 [org.clojure/tools.logging "0.3.0"]
                 [org.clojure/test.check "0.5.8"]
                 [org.clojure/tools.cli "0.3.1"]
                 [org.clojure/core.match "0.2.1"]
                 [io.netty/netty-all "5.0.0.Alpha2-SNAPSHOT"]
                 [clojurewerkz/buffy "1.0.0-beta4"]
                 [com.stuartsierra/component "0.2.1"]
                 [com.jcraft/jzlib "1.1.3"]
                 [gloss "0.2.2"]
                 [criterium "0.4.3"]]
  :main ^:skip-aot swg.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
