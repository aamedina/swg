(ns swg.tre.reader
  (:require [clojure.java.io :as io]
            [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.core.reducers :as r])
  (:import (java.io RandomAccessFile)
           (java.nio ByteBuffer ByteOrder MappedByteBuffer)
           (java.nio.channels FileChannel FileChannel$MapMode)
           (java.util.zip Deflater Inflater)
           (com.jcraft.jzlib JZlib ZStream)))

(defn parse-header
  [archive]
  (zipmap [:file-id
           :version
           :total-records
           :records-offset 
           :records-compression-level
           :records-deflated-size 
           :names-compression-level
           :names-deflated-size
           :names-inflated-size]
          (repeatedly #(.getInt archive))))

(defn parse-data
  [archive]
  (zipmap [:data-block
           :record-block 
           :names-block
           :checksum-block] []))

(defn inflate
  [buf size compression-level deflated-size]
  (let [dest (doto (ByteBuffer/allocate size)
               (.order ByteOrder/LITTLE_ENDIAN))
        src (byte-array deflated-size)]
    (.get buf src)
    (if (== compression-level 0)
      (doto dest
        (.put src)
        (.rewind))
      (do (doto (ZStream.)
            (.setAvailIn 0)
            (.inflateInit)
            (.setNextIn src)
            (.setNextInIndex 0)
            (.setAvailIn (alength src))
            (.setNextOut (.array dest))
            (.setNextOutIndex 0)
            (.setAvailOut (alength (.array dest)))
            (.inflate JZlib/Z_FINISH)
            (.inflateEnd))
          dest))))

(defn parse-record
  [names-data checksum-data record]
  (let [char-stream (->> (repeatedly #(.get names-data))
                         (take-while (complement zero?))
                         (map char))]
    (.position names-data (:name-offset record))
    (assoc record
      :name (reduce str char-stream)
      :checksum checksum-data
      :bytes (with-open [file (RandomAccessFile. (:path record) "r")
                         ch (.getChannel file)]
               (let [file-buffer (.map ch FileChannel$MapMode/READ_ONLY
                                       (:data-offset record)
                                       (:deflated-size record))
                     buf (inflate file-buffer
                                  (:inflated-size record)
                                  (:compression-level record)
                                  (:deflated-size record))]
                 buf)))))

(defn unpack
  [path]
  (let [abs (.getAbsolutePath (io/file path))
        buf (with-open [in (RandomAccessFile. abs "r")
                        ch (.getChannel in)]
              (doto (.map ch FileChannel$MapMode/READ_ONLY 0 (.size ch))
                (.order ByteOrder/LITTLE_ENDIAN)))
        header (parse-header buf)
        _ (.position buf (:records-offset header))
        record-data (inflate buf (* 24 (:total-records header))
                             (:records-compression-level header)
                             (:records-deflated-size header))
        names-data (inflate buf (:names-inflated-size header)
                            (:names-compression-level header)
                            (:names-deflated-size header))
        checksum-data (.slice buf)
        record-data (.order record-data ByteOrder/LITTLE_ENDIAN)
        records (reduce (fn [xs buffer]
                          (let [r {:checksum (.getInt buffer)
                                   :inflated-size (.getInt buffer)
                                   :data-offset (.getInt buffer)
                                   :compression-level (.getInt buffer)
                                   :deflated-size (.getInt buffer)
                                   :name-offset (.getInt buffer)
                                   :path abs}]
                            (if (and (== (:compression-level r) 0)
                                     (== (:deflated-size r) 0))
                              (conj xs (assoc r
                                         :deflated-size (:inflated-size r)))
                              (conj xs r))))
                        [] (repeat (:total-records header) record-data))]
    (reduce (fn [xs record]
              (conj xs (parse-record names-data checksum-data record)))
            [] records)))

(defn extract
  [from-path to-path]
  (let [unpacked-archive (unpack from-path)]
    (doseq [{:keys [name bytes]} unpacked-archive]
      (let [file (java.io.File. (str to-path "/" name))]
        (when-not (.exists file)
          (.mkdirs (.getParentFile file))
          (with-open [raf (RandomAccessFile. file "rw")
                      ch (.getChannel raf)]
            (.write ch bytes)))) )))

(defn extract-all-tres
  [dir to-path]
  (->> (file-seq (io/file dir))
       (filter #(.endsWith (.getPath %) ".tre"))
       (remove #(.isDirectory %))
       (map #(.getPath %))
       (pmap #(extract % to-path))))
