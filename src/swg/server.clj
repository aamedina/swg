(ns swg.server
  (:require [clojure.tools.namespace.repl :refer [refresh-all]]
            [com.stuartsierra.component :as c])
  (:import (io.netty.bootstrap Bootstrap ServerBootstrap)
           (io.netty.buffer ByteBuf Unpooled)
           (io.netty.channel ChannelHandler DefaultAddressedEnvelope)
           (io.netty.channel ChannelInitializer ChannelOption)
           (io.netty.channel ChannelFuture ChannelFutureListener)
           (io.netty.channel ChannelHandlerContext ChannelHandlerAdapter)
           (io.netty.channel SimpleChannelInboundHandler)
           (io.netty.channel.group ChannelGroup ChannelGroupFuture)
           (io.netty.channel.group DefaultChannelGroup)
           (io.netty.channel.nio NioEventLoopGroup)
           (io.netty.channel.socket SocketChannel)
           (io.netty.channel.socket DatagramChannel DatagramPacket)
           (io.netty.channel.socket.nio NioServerSocketChannel)
           (io.netty.channel.socket.nio NioDatagramChannel)
           (io.netty.handler.codec MessageToMessageEncoder)
           (io.netty.util CharsetUtil)
           (io.netty.util.concurrent GenericFutureListener)
           (io.netty.util.concurrent GlobalEventExecutor)))

(defn ^String packet-content
  [^DatagramPacket packet]
  (.toString ^DefaultAddressedEnvelope (.content packet) CharsetUtil/UTF_8))

(defn protocol-multiplexer-channel-initializer
  []
  (proxy [ChannelInitializer] []
    (initChannel [^SocketChannel ch]
      (-> (.pipeline ch)
          ))))

(defn udp-upstream-handler
  [sessions]
  (proxy [SimpleChannelInboundHandler] []
    (channelRead0 [^ChannelHandlerContext ctx ^DatagramPacket packet]
      (let [remote-address (.sender packet)]
        (println remote-address)
        (when-let [session (get @sessions remote-address)]
          (let [buffer (.content packet)]
            buffer))))))

(defn udp-event-encoder
  []
  (proxy [MessageToMessageEncoder] []
    (encode [^ChannelHandlerContext ctx msg out]
      (let [encoded (doto (.buffer (.alloc ctx) 1)
                      (.writeByte (.readBytes msg)))
            client-address msg]
        (.add out (DatagramPacket. encoded msg))))))

(defn add-last
  [pipeline name handler]
  (.addLast pipeline (into-array ChannelHandler [handler])))

(defn udp-channel-initializer
  [sessions]
  (proxy [ChannelInitializer] []
    (initChannel [^DatagramChannel ch]
      (-> (.pipeline ch)
          (add-last "upstream" (udp-upstream-handler sessions))
          (add-last "encoder"(udp-event-encoder))))))

(defn server-response
  [^DatagramPacket packet]
  (let [ret (packet-content packet)]
    (Unpooled/copiedBuffer ret CharsetUtil/UTF_8)))

(defn server-handler []
  (proxy [SimpleChannelInboundHandler] []
    (messageReceived [^ChannelHandlerContext ctx ^DatagramPacket packet]
      (let [content (packet-content packet)
            res (DatagramPacket. (server-response packet) (.sender packet))]
        (.write ctx res)))
    (channelReadComplete [^ChannelHandlerContext ctx]
      (.flush ctx))
    (exceptionCaught [^ChannelHandlerContext ctx ^Throwable cause]
      (.printStackTrace cause))))

(defrecord UDPSocketServer [bootstrap boss-group worker-group port channels]
  c/Lifecycle
  (start [this]
    (let [channel (.channel (.bind bootstrap port))]
      (.add channels channel)
      (.addListener (.closeFuture channel) (reify GenericFutureListener
                                             (operationComplete [_ future]
                                               (c/stop this))))
      this))
  (stop [this]
    (.await (.close channels))
    (.shutdownGracefully boss-group)
    (.shutdownGracefully worker-group)
    this))

(defn udp-socket-server
  [port]
  (let [boss-group (NioEventLoopGroup.)
        worker-group (NioEventLoopGroup.)
        bootstrap (doto (Bootstrap.)
                    (.group boss-group)
                    (.channel NioDatagramChannel)
                    (.option ChannelOption/SO_BROADCAST true)
                    (.handler (server-handler)))
        exec GlobalEventExecutor/INSTANCE
        channels (DefaultChannelGroup. "SWG-CHANNELS" exec)]
    (map->UDPSocketServer {:bootstrap bootstrap
                           :boss-group boss-group
                           :worker-group worker-group
                           :port (int port)
                           :channels channels})))

(def server nil)

(defn start
  []
  (alter-var-root #'server c/start))

(defn go
  [port]
  (alter-var-root #'server (constantly (udp-socket-server port)))
  (start)
  (println "Server started at port:" port))

(defn stop
  []
  (alter-var-root #'server c/stop))

(defn reset
  []
  (alter-var-root #'server c/stop)
  (refresh-all :after start))
