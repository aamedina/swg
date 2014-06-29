// Compiled by ClojureScript 0.0-2234
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19096 = (function (f,fn_handler,meta19097){
this.f = f;
this.fn_handler = fn_handler;
this.meta19097 = meta19097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19096.cljs$lang$type = true;
cljs.core.async.t19096.cljs$lang$ctorStr = "cljs.core.async/t19096";
cljs.core.async.t19096.cljs$lang$ctorPrWriter = (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"cljs.core.async/t19096");
});
cljs.core.async.t19096.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19098){var self__ = this;
var _19098__$1 = this;return self__.meta19097;
});
cljs.core.async.t19096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19098,meta19097__$1){var self__ = this;
var _19098__$1 = this;return (new cljs.core.async.t19096(self__.f,self__.fn_handler,meta19097__$1));
});
cljs.core.async.__GT_t19096 = (function __GT_t19096(f__$1,fn_handler__$1,meta19097){return (new cljs.core.async.t19096(f__$1,fn_handler__$1,meta19097));
});
}
return (new cljs.core.async.t19096(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19100 = buff;if(G__19100)
{var bit__10070__auto__ = null;if(cljs.core.truth_((function (){var or__9420__auto__ = bit__10070__auto__;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
} else
{return G__19100.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19100.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19100);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19100);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_19101 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19101);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_19101,ret){
return (function (){return fn1.call(null,val_19101);
});})(val_19101,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__10276__auto___19102 = n;var x_19103 = 0;while(true){
if((x_19103 < n__10276__auto___19102))
{(a[x_19103] = 0);
{
var G__19104 = (x_19103 + 1);
x_19103 = G__19104;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__19105 = (i + 1);
i = G__19105;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19109 = (function (flag,alt_flag,meta19110){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19110 = meta19110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19109.cljs$lang$type = true;
cljs.core.async.t19109.cljs$lang$ctorStr = "cljs.core.async/t19109";
cljs.core.async.t19109.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"cljs.core.async/t19109");
});})(flag))
;
cljs.core.async.t19109.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t19109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t19109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19111){var self__ = this;
var _19111__$1 = this;return self__.meta19110;
});})(flag))
;
cljs.core.async.t19109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19111,meta19110__$1){var self__ = this;
var _19111__$1 = this;return (new cljs.core.async.t19109(self__.flag,self__.alt_flag,meta19110__$1));
});})(flag))
;
cljs.core.async.__GT_t19109 = ((function (flag){
return (function __GT_t19109(flag__$1,alt_flag__$1,meta19110){return (new cljs.core.async.t19109(flag__$1,alt_flag__$1,meta19110));
});})(flag))
;
}
return (new cljs.core.async.t19109(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19115 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19115 = (function (cb,flag,alt_handler,meta19116){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19116 = meta19116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19115.cljs$lang$type = true;
cljs.core.async.t19115.cljs$lang$ctorStr = "cljs.core.async/t19115";
cljs.core.async.t19115.cljs$lang$ctorPrWriter = (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"cljs.core.async/t19115");
});
cljs.core.async.t19115.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19117){var self__ = this;
var _19117__$1 = this;return self__.meta19116;
});
cljs.core.async.t19115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19117,meta19116__$1){var self__ = this;
var _19117__$1 = this;return (new cljs.core.async.t19115(self__.cb,self__.flag,self__.alt_handler,meta19116__$1));
});
cljs.core.async.__GT_t19115 = (function __GT_t19115(cb__$1,flag__$1,alt_handler__$1,meta19116){return (new cljs.core.async.t19115(cb__$1,flag__$1,alt_handler__$1,meta19116));
});
}
return (new cljs.core.async.t19115(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19118_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19118_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19119_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19119_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9420__auto__ = wport;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__19120 = (i + 1);
i = G__19120;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__9420__auto__ = ret;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__9408__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__9408__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__9408__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__19121){var map__19123 = p__19121;var map__19123__$1 = ((cljs.core.seq_QMARK_.call(null,map__19123))?cljs.core.apply.call(null,cljs.core.hash_map,map__19123):map__19123);var opts = map__19123__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__19121 = null;if (arguments.length > 1) {
  p__19121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19121);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19124){
var ports = cljs.core.first(arglist__19124);
var p__19121 = cljs.core.rest(arglist__19124);
return alts_BANG___delegate(ports,p__19121);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19132 = (function (ch,f,map_LT_,meta19133){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19133 = meta19133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19132.cljs$lang$type = true;
cljs.core.async.t19132.cljs$lang$ctorStr = "cljs.core.async/t19132";
cljs.core.async.t19132.cljs$lang$ctorPrWriter = (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"cljs.core.async/t19132");
});
cljs.core.async.t19132.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t19132.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19135 = (function (fn1,_,meta19133,ch,f,map_LT_,meta19136){
this.fn1 = fn1;
this._ = _;
this.meta19133 = meta19133;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19136 = meta19136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19135.cljs$lang$type = true;
cljs.core.async.t19135.cljs$lang$ctorStr = "cljs.core.async/t19135";
cljs.core.async.t19135.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"cljs.core.async/t19135");
});})(___$1))
;
cljs.core.async.t19135.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19135.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__19125_SHARP_){return f1.call(null,(((p1__19125_SHARP_ == null))?null:self__.f.call(null,p1__19125_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t19135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19137){var self__ = this;
var _19137__$1 = this;return self__.meta19136;
});})(___$1))
;
cljs.core.async.t19135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19137,meta19136__$1){var self__ = this;
var _19137__$1 = this;return (new cljs.core.async.t19135(self__.fn1,self__._,self__.meta19133,self__.ch,self__.f,self__.map_LT_,meta19136__$1));
});})(___$1))
;
cljs.core.async.__GT_t19135 = ((function (___$1){
return (function __GT_t19135(fn1__$1,___$2,meta19133__$1,ch__$2,f__$2,map_LT___$2,meta19136){return (new cljs.core.async.t19135(fn1__$1,___$2,meta19133__$1,ch__$2,f__$2,map_LT___$2,meta19136));
});})(___$1))
;
}
return (new cljs.core.async.t19135(fn1,___$1,self__.meta19133,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__9408__auto__ = ret;if(cljs.core.truth_(and__9408__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__9408__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t19132.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19132.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19134){var self__ = this;
var _19134__$1 = this;return self__.meta19133;
});
cljs.core.async.t19132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19134,meta19133__$1){var self__ = this;
var _19134__$1 = this;return (new cljs.core.async.t19132(self__.ch,self__.f,self__.map_LT_,meta19133__$1));
});
cljs.core.async.__GT_t19132 = (function __GT_t19132(ch__$1,f__$1,map_LT___$1,meta19133){return (new cljs.core.async.t19132(ch__$1,f__$1,map_LT___$1,meta19133));
});
}
return (new cljs.core.async.t19132(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19141 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19141 = (function (ch,f,map_GT_,meta19142){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19142 = meta19142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19141.cljs$lang$type = true;
cljs.core.async.t19141.cljs$lang$ctorStr = "cljs.core.async/t19141";
cljs.core.async.t19141.cljs$lang$ctorPrWriter = (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"cljs.core.async/t19141");
});
cljs.core.async.t19141.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t19141.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19141.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19143){var self__ = this;
var _19143__$1 = this;return self__.meta19142;
});
cljs.core.async.t19141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19143,meta19142__$1){var self__ = this;
var _19143__$1 = this;return (new cljs.core.async.t19141(self__.ch,self__.f,self__.map_GT_,meta19142__$1));
});
cljs.core.async.__GT_t19141 = (function __GT_t19141(ch__$1,f__$1,map_GT___$1,meta19142){return (new cljs.core.async.t19141(ch__$1,f__$1,map_GT___$1,meta19142));
});
}
return (new cljs.core.async.t19141(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19147 = (function (ch,p,filter_GT_,meta19148){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19148 = meta19148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19147.cljs$lang$type = true;
cljs.core.async.t19147.cljs$lang$ctorStr = "cljs.core.async/t19147";
cljs.core.async.t19147.cljs$lang$ctorPrWriter = (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"cljs.core.async/t19147");
});
cljs.core.async.t19147.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t19147.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19147.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19147.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19149){var self__ = this;
var _19149__$1 = this;return self__.meta19148;
});
cljs.core.async.t19147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19149,meta19148__$1){var self__ = this;
var _19149__$1 = this;return (new cljs.core.async.t19147(self__.ch,self__.p,self__.filter_GT_,meta19148__$1));
});
cljs.core.async.__GT_t19147 = (function __GT_t19147(ch__$1,p__$1,filter_GT___$1,meta19148){return (new cljs.core.async.t19147(ch__$1,p__$1,filter_GT___$1,meta19148));
});
}
return (new cljs.core.async.t19147(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13458__auto___19232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___19232,out){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___19232,out){
return (function (state_19211){var state_val_19212 = (state_19211[1]);if((state_val_19212 === 7))
{var inst_19207 = (state_19211[2]);var state_19211__$1 = state_19211;var statearr_19213_19233 = state_19211__$1;(statearr_19213_19233[2] = inst_19207);
(statearr_19213_19233[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19212 === 1))
{var state_19211__$1 = state_19211;var statearr_19214_19234 = state_19211__$1;(statearr_19214_19234[2] = null);
(statearr_19214_19234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19212 === 4))
{var inst_19193 = (state_19211[7]);var inst_19193__$1 = (state_19211[2]);var inst_19194 = (inst_19193__$1 == null);var state_19211__$1 = (function (){var statearr_19215 = state_19211;(statearr_19215[7] = inst_19193__$1);
return statearr_19215;
})();if(cljs.core.truth_(inst_19194))
{var statearr_19216_19235 = state_19211__$1;(statearr_19216_19235[1] = 5);
} else
{var statearr_19217_19236 = state_19211__$1;(statearr_19217_19236[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19212 === 6))
{var inst_19193 = (state_19211[7]);var inst_19198 = p.call(null,inst_19193);var state_19211__$1 = state_19211;if(cljs.core.truth_(inst_19198))
{var statearr_19218_19237 = state_19211__$1;(statearr_19218_19237[1] = 8);
} else
{var statearr_19219_19238 = state_19211__$1;(statearr_19219_19238[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19212 === 3))
{var inst_19209 = (state_19211[2]);var state_19211__$1 = state_19211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19211__$1,inst_19209);
} else
{if((state_val_19212 === 2))
{var state_19211__$1 = state_19211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19211__$1,4,ch);
} else
{if((state_val_19212 === 11))
{var inst_19201 = (state_19211[2]);var state_19211__$1 = state_19211;var statearr_19220_19239 = state_19211__$1;(statearr_19220_19239[2] = inst_19201);
(statearr_19220_19239[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19212 === 9))
{var state_19211__$1 = state_19211;var statearr_19221_19240 = state_19211__$1;(statearr_19221_19240[2] = null);
(statearr_19221_19240[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19212 === 5))
{var inst_19196 = cljs.core.async.close_BANG_.call(null,out);var state_19211__$1 = state_19211;var statearr_19222_19241 = state_19211__$1;(statearr_19222_19241[2] = inst_19196);
(statearr_19222_19241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19212 === 10))
{var inst_19204 = (state_19211[2]);var state_19211__$1 = (function (){var statearr_19223 = state_19211;(statearr_19223[8] = inst_19204);
return statearr_19223;
})();var statearr_19224_19242 = state_19211__$1;(statearr_19224_19242[2] = null);
(statearr_19224_19242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19212 === 8))
{var inst_19193 = (state_19211[7]);var state_19211__$1 = state_19211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19211__$1,11,out,inst_19193);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___19232,out))
;return ((function (switch__13393__auto__,c__13458__auto___19232,out){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_19228 = [null,null,null,null,null,null,null,null,null];(statearr_19228[0] = state_machine__13394__auto__);
(statearr_19228[1] = 1);
return statearr_19228;
});
var state_machine__13394__auto____1 = (function (state_19211){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_19211);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e19229){if((e19229 instanceof Object))
{var ex__13397__auto__ = e19229;var statearr_19230_19243 = state_19211;(statearr_19230_19243[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19211);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19244 = state_19211;
state_19211 = G__19244;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_19211){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_19211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___19232,out))
})();var state__13460__auto__ = (function (){var statearr_19231 = f__13459__auto__.call(null);(statearr_19231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___19232);
return statearr_19231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___19232,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13458__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto__){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto__){
return (function (state_19410){var state_val_19411 = (state_19410[1]);if((state_val_19411 === 7))
{var inst_19406 = (state_19410[2]);var state_19410__$1 = state_19410;var statearr_19412_19453 = state_19410__$1;(statearr_19412_19453[2] = inst_19406);
(statearr_19412_19453[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 20))
{var inst_19376 = (state_19410[7]);var inst_19387 = (state_19410[2]);var inst_19388 = cljs.core.next.call(null,inst_19376);var inst_19362 = inst_19388;var inst_19363 = null;var inst_19364 = 0;var inst_19365 = 0;var state_19410__$1 = (function (){var statearr_19413 = state_19410;(statearr_19413[8] = inst_19364);
(statearr_19413[9] = inst_19387);
(statearr_19413[10] = inst_19365);
(statearr_19413[11] = inst_19363);
(statearr_19413[12] = inst_19362);
return statearr_19413;
})();var statearr_19414_19454 = state_19410__$1;(statearr_19414_19454[2] = null);
(statearr_19414_19454[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 1))
{var state_19410__$1 = state_19410;var statearr_19415_19455 = state_19410__$1;(statearr_19415_19455[2] = null);
(statearr_19415_19455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 4))
{var inst_19351 = (state_19410[13]);var inst_19351__$1 = (state_19410[2]);var inst_19352 = (inst_19351__$1 == null);var state_19410__$1 = (function (){var statearr_19416 = state_19410;(statearr_19416[13] = inst_19351__$1);
return statearr_19416;
})();if(cljs.core.truth_(inst_19352))
{var statearr_19417_19456 = state_19410__$1;(statearr_19417_19456[1] = 5);
} else
{var statearr_19418_19457 = state_19410__$1;(statearr_19418_19457[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 15))
{var state_19410__$1 = state_19410;var statearr_19422_19458 = state_19410__$1;(statearr_19422_19458[2] = null);
(statearr_19422_19458[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 21))
{var state_19410__$1 = state_19410;var statearr_19423_19459 = state_19410__$1;(statearr_19423_19459[2] = null);
(statearr_19423_19459[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 13))
{var inst_19364 = (state_19410[8]);var inst_19365 = (state_19410[10]);var inst_19363 = (state_19410[11]);var inst_19362 = (state_19410[12]);var inst_19372 = (state_19410[2]);var inst_19373 = (inst_19365 + 1);var tmp19419 = inst_19364;var tmp19420 = inst_19363;var tmp19421 = inst_19362;var inst_19362__$1 = tmp19421;var inst_19363__$1 = tmp19420;var inst_19364__$1 = tmp19419;var inst_19365__$1 = inst_19373;var state_19410__$1 = (function (){var statearr_19424 = state_19410;(statearr_19424[8] = inst_19364__$1);
(statearr_19424[14] = inst_19372);
(statearr_19424[10] = inst_19365__$1);
(statearr_19424[11] = inst_19363__$1);
(statearr_19424[12] = inst_19362__$1);
return statearr_19424;
})();var statearr_19425_19460 = state_19410__$1;(statearr_19425_19460[2] = null);
(statearr_19425_19460[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 22))
{var state_19410__$1 = state_19410;var statearr_19426_19461 = state_19410__$1;(statearr_19426_19461[2] = null);
(statearr_19426_19461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 6))
{var inst_19351 = (state_19410[13]);var inst_19360 = f.call(null,inst_19351);var inst_19361 = cljs.core.seq.call(null,inst_19360);var inst_19362 = inst_19361;var inst_19363 = null;var inst_19364 = 0;var inst_19365 = 0;var state_19410__$1 = (function (){var statearr_19427 = state_19410;(statearr_19427[8] = inst_19364);
(statearr_19427[10] = inst_19365);
(statearr_19427[11] = inst_19363);
(statearr_19427[12] = inst_19362);
return statearr_19427;
})();var statearr_19428_19462 = state_19410__$1;(statearr_19428_19462[2] = null);
(statearr_19428_19462[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 17))
{var inst_19376 = (state_19410[7]);var inst_19380 = cljs.core.chunk_first.call(null,inst_19376);var inst_19381 = cljs.core.chunk_rest.call(null,inst_19376);var inst_19382 = cljs.core.count.call(null,inst_19380);var inst_19362 = inst_19381;var inst_19363 = inst_19380;var inst_19364 = inst_19382;var inst_19365 = 0;var state_19410__$1 = (function (){var statearr_19429 = state_19410;(statearr_19429[8] = inst_19364);
(statearr_19429[10] = inst_19365);
(statearr_19429[11] = inst_19363);
(statearr_19429[12] = inst_19362);
return statearr_19429;
})();var statearr_19430_19463 = state_19410__$1;(statearr_19430_19463[2] = null);
(statearr_19430_19463[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 3))
{var inst_19408 = (state_19410[2]);var state_19410__$1 = state_19410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19410__$1,inst_19408);
} else
{if((state_val_19411 === 12))
{var inst_19396 = (state_19410[2]);var state_19410__$1 = state_19410;var statearr_19431_19464 = state_19410__$1;(statearr_19431_19464[2] = inst_19396);
(statearr_19431_19464[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 2))
{var state_19410__$1 = state_19410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19410__$1,4,in$);
} else
{if((state_val_19411 === 23))
{var inst_19404 = (state_19410[2]);var state_19410__$1 = state_19410;var statearr_19432_19465 = state_19410__$1;(statearr_19432_19465[2] = inst_19404);
(statearr_19432_19465[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 19))
{var inst_19391 = (state_19410[2]);var state_19410__$1 = state_19410;var statearr_19433_19466 = state_19410__$1;(statearr_19433_19466[2] = inst_19391);
(statearr_19433_19466[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 11))
{var inst_19376 = (state_19410[7]);var inst_19362 = (state_19410[12]);var inst_19376__$1 = cljs.core.seq.call(null,inst_19362);var state_19410__$1 = (function (){var statearr_19434 = state_19410;(statearr_19434[7] = inst_19376__$1);
return statearr_19434;
})();if(inst_19376__$1)
{var statearr_19435_19467 = state_19410__$1;(statearr_19435_19467[1] = 14);
} else
{var statearr_19436_19468 = state_19410__$1;(statearr_19436_19468[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 9))
{var inst_19398 = (state_19410[2]);var inst_19399 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_19410__$1 = (function (){var statearr_19437 = state_19410;(statearr_19437[15] = inst_19398);
return statearr_19437;
})();if(cljs.core.truth_(inst_19399))
{var statearr_19438_19469 = state_19410__$1;(statearr_19438_19469[1] = 21);
} else
{var statearr_19439_19470 = state_19410__$1;(statearr_19439_19470[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 5))
{var inst_19354 = cljs.core.async.close_BANG_.call(null,out);var state_19410__$1 = state_19410;var statearr_19440_19471 = state_19410__$1;(statearr_19440_19471[2] = inst_19354);
(statearr_19440_19471[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 14))
{var inst_19376 = (state_19410[7]);var inst_19378 = cljs.core.chunked_seq_QMARK_.call(null,inst_19376);var state_19410__$1 = state_19410;if(inst_19378)
{var statearr_19441_19472 = state_19410__$1;(statearr_19441_19472[1] = 17);
} else
{var statearr_19442_19473 = state_19410__$1;(statearr_19442_19473[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 16))
{var inst_19394 = (state_19410[2]);var state_19410__$1 = state_19410;var statearr_19443_19474 = state_19410__$1;(statearr_19443_19474[2] = inst_19394);
(statearr_19443_19474[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19411 === 10))
{var inst_19365 = (state_19410[10]);var inst_19363 = (state_19410[11]);var inst_19370 = cljs.core._nth.call(null,inst_19363,inst_19365);var state_19410__$1 = state_19410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19410__$1,13,out,inst_19370);
} else
{if((state_val_19411 === 18))
{var inst_19376 = (state_19410[7]);var inst_19385 = cljs.core.first.call(null,inst_19376);var state_19410__$1 = state_19410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19410__$1,20,out,inst_19385);
} else
{if((state_val_19411 === 8))
{var inst_19364 = (state_19410[8]);var inst_19365 = (state_19410[10]);var inst_19367 = (inst_19365 < inst_19364);var inst_19368 = inst_19367;var state_19410__$1 = state_19410;if(cljs.core.truth_(inst_19368))
{var statearr_19444_19475 = state_19410__$1;(statearr_19444_19475[1] = 10);
} else
{var statearr_19445_19476 = state_19410__$1;(statearr_19445_19476[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto__))
;return ((function (switch__13393__auto__,c__13458__auto__){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_19449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19449[0] = state_machine__13394__auto__);
(statearr_19449[1] = 1);
return statearr_19449;
});
var state_machine__13394__auto____1 = (function (state_19410){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_19410);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e19450){if((e19450 instanceof Object))
{var ex__13397__auto__ = e19450;var statearr_19451_19477 = state_19410;(statearr_19451_19477[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19410);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19478 = state_19410;
state_19410 = G__19478;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_19410){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_19410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto__))
})();var state__13460__auto__ = (function (){var statearr_19452 = f__13459__auto__.call(null);(statearr_19452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto__);
return statearr_19452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto__))
);
return c__13458__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13458__auto___19573 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___19573){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___19573){
return (function (state_19549){var state_val_19550 = (state_19549[1]);if((state_val_19550 === 7))
{var inst_19545 = (state_19549[2]);var state_19549__$1 = state_19549;var statearr_19551_19574 = state_19549__$1;(statearr_19551_19574[2] = inst_19545);
(statearr_19551_19574[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19550 === 1))
{var state_19549__$1 = state_19549;var statearr_19552_19575 = state_19549__$1;(statearr_19552_19575[2] = null);
(statearr_19552_19575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19550 === 4))
{var inst_19528 = (state_19549[7]);var inst_19528__$1 = (state_19549[2]);var inst_19529 = (inst_19528__$1 == null);var state_19549__$1 = (function (){var statearr_19553 = state_19549;(statearr_19553[7] = inst_19528__$1);
return statearr_19553;
})();if(cljs.core.truth_(inst_19529))
{var statearr_19554_19576 = state_19549__$1;(statearr_19554_19576[1] = 5);
} else
{var statearr_19555_19577 = state_19549__$1;(statearr_19555_19577[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19550 === 13))
{var state_19549__$1 = state_19549;var statearr_19556_19578 = state_19549__$1;(statearr_19556_19578[2] = null);
(statearr_19556_19578[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19550 === 6))
{var inst_19528 = (state_19549[7]);var state_19549__$1 = state_19549;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19549__$1,11,to,inst_19528);
} else
{if((state_val_19550 === 3))
{var inst_19547 = (state_19549[2]);var state_19549__$1 = state_19549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19549__$1,inst_19547);
} else
{if((state_val_19550 === 12))
{var state_19549__$1 = state_19549;var statearr_19557_19579 = state_19549__$1;(statearr_19557_19579[2] = null);
(statearr_19557_19579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19550 === 2))
{var state_19549__$1 = state_19549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19549__$1,4,from);
} else
{if((state_val_19550 === 11))
{var inst_19538 = (state_19549[2]);var state_19549__$1 = state_19549;if(cljs.core.truth_(inst_19538))
{var statearr_19558_19580 = state_19549__$1;(statearr_19558_19580[1] = 12);
} else
{var statearr_19559_19581 = state_19549__$1;(statearr_19559_19581[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19550 === 9))
{var state_19549__$1 = state_19549;var statearr_19560_19582 = state_19549__$1;(statearr_19560_19582[2] = null);
(statearr_19560_19582[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19550 === 5))
{var state_19549__$1 = state_19549;if(cljs.core.truth_(close_QMARK_))
{var statearr_19561_19583 = state_19549__$1;(statearr_19561_19583[1] = 8);
} else
{var statearr_19562_19584 = state_19549__$1;(statearr_19562_19584[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19550 === 14))
{var inst_19543 = (state_19549[2]);var state_19549__$1 = state_19549;var statearr_19563_19585 = state_19549__$1;(statearr_19563_19585[2] = inst_19543);
(statearr_19563_19585[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19550 === 10))
{var inst_19535 = (state_19549[2]);var state_19549__$1 = state_19549;var statearr_19564_19586 = state_19549__$1;(statearr_19564_19586[2] = inst_19535);
(statearr_19564_19586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19550 === 8))
{var inst_19532 = cljs.core.async.close_BANG_.call(null,to);var state_19549__$1 = state_19549;var statearr_19565_19587 = state_19549__$1;(statearr_19565_19587[2] = inst_19532);
(statearr_19565_19587[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___19573))
;return ((function (switch__13393__auto__,c__13458__auto___19573){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_19569 = [null,null,null,null,null,null,null,null];(statearr_19569[0] = state_machine__13394__auto__);
(statearr_19569[1] = 1);
return statearr_19569;
});
var state_machine__13394__auto____1 = (function (state_19549){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_19549);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e19570){if((e19570 instanceof Object))
{var ex__13397__auto__ = e19570;var statearr_19571_19588 = state_19549;(statearr_19571_19588[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19589 = state_19549;
state_19549 = G__19589;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_19549){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_19549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___19573))
})();var state__13460__auto__ = (function (){var statearr_19572 = f__13459__auto__.call(null);(statearr_19572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___19573);
return statearr_19572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___19573))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13458__auto___19690 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___19690,tc,fc){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___19690,tc,fc){
return (function (state_19665){var state_val_19666 = (state_19665[1]);if((state_val_19666 === 7))
{var inst_19661 = (state_19665[2]);var state_19665__$1 = state_19665;var statearr_19667_19691 = state_19665__$1;(statearr_19667_19691[2] = inst_19661);
(statearr_19667_19691[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 1))
{var state_19665__$1 = state_19665;var statearr_19668_19692 = state_19665__$1;(statearr_19668_19692[2] = null);
(statearr_19668_19692[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 4))
{var inst_19642 = (state_19665[7]);var inst_19642__$1 = (state_19665[2]);var inst_19643 = (inst_19642__$1 == null);var state_19665__$1 = (function (){var statearr_19669 = state_19665;(statearr_19669[7] = inst_19642__$1);
return statearr_19669;
})();if(cljs.core.truth_(inst_19643))
{var statearr_19670_19693 = state_19665__$1;(statearr_19670_19693[1] = 5);
} else
{var statearr_19671_19694 = state_19665__$1;(statearr_19671_19694[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 13))
{var state_19665__$1 = state_19665;var statearr_19672_19695 = state_19665__$1;(statearr_19672_19695[2] = null);
(statearr_19672_19695[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 6))
{var inst_19642 = (state_19665[7]);var inst_19648 = p.call(null,inst_19642);var state_19665__$1 = state_19665;if(cljs.core.truth_(inst_19648))
{var statearr_19673_19696 = state_19665__$1;(statearr_19673_19696[1] = 9);
} else
{var statearr_19674_19697 = state_19665__$1;(statearr_19674_19697[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 3))
{var inst_19663 = (state_19665[2]);var state_19665__$1 = state_19665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19665__$1,inst_19663);
} else
{if((state_val_19666 === 12))
{var state_19665__$1 = state_19665;var statearr_19675_19698 = state_19665__$1;(statearr_19675_19698[2] = null);
(statearr_19675_19698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 2))
{var state_19665__$1 = state_19665;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19665__$1,4,ch);
} else
{if((state_val_19666 === 11))
{var inst_19642 = (state_19665[7]);var inst_19652 = (state_19665[2]);var state_19665__$1 = state_19665;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19665__$1,8,inst_19652,inst_19642);
} else
{if((state_val_19666 === 9))
{var state_19665__$1 = state_19665;var statearr_19676_19699 = state_19665__$1;(statearr_19676_19699[2] = tc);
(statearr_19676_19699[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 5))
{var inst_19645 = cljs.core.async.close_BANG_.call(null,tc);var inst_19646 = cljs.core.async.close_BANG_.call(null,fc);var state_19665__$1 = (function (){var statearr_19677 = state_19665;(statearr_19677[8] = inst_19645);
return statearr_19677;
})();var statearr_19678_19700 = state_19665__$1;(statearr_19678_19700[2] = inst_19646);
(statearr_19678_19700[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 14))
{var inst_19659 = (state_19665[2]);var state_19665__$1 = state_19665;var statearr_19679_19701 = state_19665__$1;(statearr_19679_19701[2] = inst_19659);
(statearr_19679_19701[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 10))
{var state_19665__$1 = state_19665;var statearr_19680_19702 = state_19665__$1;(statearr_19680_19702[2] = fc);
(statearr_19680_19702[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 8))
{var inst_19654 = (state_19665[2]);var state_19665__$1 = state_19665;if(cljs.core.truth_(inst_19654))
{var statearr_19681_19703 = state_19665__$1;(statearr_19681_19703[1] = 12);
} else
{var statearr_19682_19704 = state_19665__$1;(statearr_19682_19704[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___19690,tc,fc))
;return ((function (switch__13393__auto__,c__13458__auto___19690,tc,fc){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_19686 = [null,null,null,null,null,null,null,null,null];(statearr_19686[0] = state_machine__13394__auto__);
(statearr_19686[1] = 1);
return statearr_19686;
});
var state_machine__13394__auto____1 = (function (state_19665){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_19665);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e19687){if((e19687 instanceof Object))
{var ex__13397__auto__ = e19687;var statearr_19688_19705 = state_19665;(statearr_19688_19705[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19665);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19706 = state_19665;
state_19665 = G__19706;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_19665){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_19665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___19690,tc,fc))
})();var state__13460__auto__ = (function (){var statearr_19689 = f__13459__auto__.call(null);(statearr_19689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___19690);
return statearr_19689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___19690,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13458__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto__){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto__){
return (function (state_19753){var state_val_19754 = (state_19753[1]);if((state_val_19754 === 7))
{var inst_19749 = (state_19753[2]);var state_19753__$1 = state_19753;var statearr_19755_19771 = state_19753__$1;(statearr_19755_19771[2] = inst_19749);
(statearr_19755_19771[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19754 === 6))
{var inst_19739 = (state_19753[7]);var inst_19742 = (state_19753[8]);var inst_19746 = f.call(null,inst_19739,inst_19742);var inst_19739__$1 = inst_19746;var state_19753__$1 = (function (){var statearr_19756 = state_19753;(statearr_19756[7] = inst_19739__$1);
return statearr_19756;
})();var statearr_19757_19772 = state_19753__$1;(statearr_19757_19772[2] = null);
(statearr_19757_19772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19754 === 5))
{var inst_19739 = (state_19753[7]);var state_19753__$1 = state_19753;var statearr_19758_19773 = state_19753__$1;(statearr_19758_19773[2] = inst_19739);
(statearr_19758_19773[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19754 === 4))
{var inst_19742 = (state_19753[8]);var inst_19742__$1 = (state_19753[2]);var inst_19743 = (inst_19742__$1 == null);var state_19753__$1 = (function (){var statearr_19759 = state_19753;(statearr_19759[8] = inst_19742__$1);
return statearr_19759;
})();if(cljs.core.truth_(inst_19743))
{var statearr_19760_19774 = state_19753__$1;(statearr_19760_19774[1] = 5);
} else
{var statearr_19761_19775 = state_19753__$1;(statearr_19761_19775[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19754 === 3))
{var inst_19751 = (state_19753[2]);var state_19753__$1 = state_19753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19753__$1,inst_19751);
} else
{if((state_val_19754 === 2))
{var state_19753__$1 = state_19753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19753__$1,4,ch);
} else
{if((state_val_19754 === 1))
{var inst_19739 = init;var state_19753__$1 = (function (){var statearr_19762 = state_19753;(statearr_19762[7] = inst_19739);
return statearr_19762;
})();var statearr_19763_19776 = state_19753__$1;(statearr_19763_19776[2] = null);
(statearr_19763_19776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__13458__auto__))
;return ((function (switch__13393__auto__,c__13458__auto__){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_19767 = [null,null,null,null,null,null,null,null,null];(statearr_19767[0] = state_machine__13394__auto__);
(statearr_19767[1] = 1);
return statearr_19767;
});
var state_machine__13394__auto____1 = (function (state_19753){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_19753);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e19768){if((e19768 instanceof Object))
{var ex__13397__auto__ = e19768;var statearr_19769_19777 = state_19753;(statearr_19769_19777[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19778 = state_19753;
state_19753 = G__19778;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_19753){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_19753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto__))
})();var state__13460__auto__ = (function (){var statearr_19770 = f__13459__auto__.call(null);(statearr_19770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto__);
return statearr_19770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto__))
);
return c__13458__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13458__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto__){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto__){
return (function (state_19852){var state_val_19853 = (state_19852[1]);if((state_val_19853 === 7))
{var inst_19834 = (state_19852[2]);var state_19852__$1 = state_19852;var statearr_19854_19877 = state_19852__$1;(statearr_19854_19877[2] = inst_19834);
(statearr_19854_19877[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 1))
{var inst_19828 = cljs.core.seq.call(null,coll);var inst_19829 = inst_19828;var state_19852__$1 = (function (){var statearr_19855 = state_19852;(statearr_19855[7] = inst_19829);
return statearr_19855;
})();var statearr_19856_19878 = state_19852__$1;(statearr_19856_19878[2] = null);
(statearr_19856_19878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 4))
{var inst_19829 = (state_19852[7]);var inst_19832 = cljs.core.first.call(null,inst_19829);var state_19852__$1 = state_19852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19852__$1,7,ch,inst_19832);
} else
{if((state_val_19853 === 13))
{var inst_19846 = (state_19852[2]);var state_19852__$1 = state_19852;var statearr_19857_19879 = state_19852__$1;(statearr_19857_19879[2] = inst_19846);
(statearr_19857_19879[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 6))
{var inst_19837 = (state_19852[2]);var state_19852__$1 = state_19852;if(cljs.core.truth_(inst_19837))
{var statearr_19858_19880 = state_19852__$1;(statearr_19858_19880[1] = 8);
} else
{var statearr_19859_19881 = state_19852__$1;(statearr_19859_19881[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 3))
{var inst_19850 = (state_19852[2]);var state_19852__$1 = state_19852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19852__$1,inst_19850);
} else
{if((state_val_19853 === 12))
{var state_19852__$1 = state_19852;var statearr_19860_19882 = state_19852__$1;(statearr_19860_19882[2] = null);
(statearr_19860_19882[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 2))
{var inst_19829 = (state_19852[7]);var state_19852__$1 = state_19852;if(cljs.core.truth_(inst_19829))
{var statearr_19861_19883 = state_19852__$1;(statearr_19861_19883[1] = 4);
} else
{var statearr_19862_19884 = state_19852__$1;(statearr_19862_19884[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 11))
{var inst_19843 = cljs.core.async.close_BANG_.call(null,ch);var state_19852__$1 = state_19852;var statearr_19863_19885 = state_19852__$1;(statearr_19863_19885[2] = inst_19843);
(statearr_19863_19885[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 9))
{var state_19852__$1 = state_19852;if(cljs.core.truth_(close_QMARK_))
{var statearr_19864_19886 = state_19852__$1;(statearr_19864_19886[1] = 11);
} else
{var statearr_19865_19887 = state_19852__$1;(statearr_19865_19887[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 5))
{var inst_19829 = (state_19852[7]);var state_19852__$1 = state_19852;var statearr_19866_19888 = state_19852__$1;(statearr_19866_19888[2] = inst_19829);
(statearr_19866_19888[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 10))
{var inst_19848 = (state_19852[2]);var state_19852__$1 = state_19852;var statearr_19867_19889 = state_19852__$1;(statearr_19867_19889[2] = inst_19848);
(statearr_19867_19889[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 8))
{var inst_19829 = (state_19852[7]);var inst_19839 = cljs.core.next.call(null,inst_19829);var inst_19829__$1 = inst_19839;var state_19852__$1 = (function (){var statearr_19868 = state_19852;(statearr_19868[7] = inst_19829__$1);
return statearr_19868;
})();var statearr_19869_19890 = state_19852__$1;(statearr_19869_19890[2] = null);
(statearr_19869_19890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto__))
;return ((function (switch__13393__auto__,c__13458__auto__){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_19873 = [null,null,null,null,null,null,null,null];(statearr_19873[0] = state_machine__13394__auto__);
(statearr_19873[1] = 1);
return statearr_19873;
});
var state_machine__13394__auto____1 = (function (state_19852){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_19852);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e19874){if((e19874 instanceof Object))
{var ex__13397__auto__ = e19874;var statearr_19875_19891 = state_19852;(statearr_19875_19891[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19874;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19892 = state_19852;
state_19852 = G__19892;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_19852){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_19852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto__))
})();var state__13460__auto__ = (function (){var statearr_19876 = f__13459__auto__.call(null);(statearr_19876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto__);
return statearr_19876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto__))
);
return c__13458__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj19894 = {};return obj19894;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__9408__auto__ = _;if(and__9408__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__9408__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__10047__auto__ = (((_ == null))?null:_);return (function (){var or__9420__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19896 = {};return obj19896;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__9408__auto__ = m;if(and__9408__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__9408__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__10047__auto__ = (((m == null))?null:m);return (function (){var or__9420__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__9408__auto__ = m;if(and__9408__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__9408__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__10047__auto__ = (((m == null))?null:m);return (function (){var or__9420__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__9408__auto__ = m;if(and__9408__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__9408__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__10047__auto__ = (((m == null))?null:m);return (function (){var or__9420__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20118 = (function (cs,ch,mult,meta20119){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20119 = meta20119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20118.cljs$lang$type = true;
cljs.core.async.t20118.cljs$lang$ctorStr = "cljs.core.async/t20118";
cljs.core.async.t20118.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"cljs.core.async/t20118");
});})(cs))
;
cljs.core.async.t20118.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20118.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20118.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20118.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20118.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20120){var self__ = this;
var _20120__$1 = this;return self__.meta20119;
});})(cs))
;
cljs.core.async.t20118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20120,meta20119__$1){var self__ = this;
var _20120__$1 = this;return (new cljs.core.async.t20118(self__.cs,self__.ch,self__.mult,meta20119__$1));
});})(cs))
;
cljs.core.async.__GT_t20118 = ((function (cs){
return (function __GT_t20118(cs__$1,ch__$1,mult__$1,meta20119){return (new cljs.core.async.t20118(cs__$1,ch__$1,mult__$1,meta20119));
});})(cs))
;
}
return (new cljs.core.async.t20118(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13458__auto___20339 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___20339,cs,m,dchan,dctr,done){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___20339,cs,m,dchan,dctr,done){
return (function (state_20251){var state_val_20252 = (state_20251[1]);if((state_val_20252 === 7))
{var inst_20247 = (state_20251[2]);var state_20251__$1 = state_20251;var statearr_20253_20340 = state_20251__$1;(statearr_20253_20340[2] = inst_20247);
(statearr_20253_20340[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 20))
{var inst_20152 = (state_20251[7]);var inst_20162 = cljs.core.first.call(null,inst_20152);var inst_20163 = cljs.core.nth.call(null,inst_20162,0,null);var inst_20164 = cljs.core.nth.call(null,inst_20162,1,null);var state_20251__$1 = (function (){var statearr_20254 = state_20251;(statearr_20254[8] = inst_20163);
return statearr_20254;
})();if(cljs.core.truth_(inst_20164))
{var statearr_20255_20341 = state_20251__$1;(statearr_20255_20341[1] = 22);
} else
{var statearr_20256_20342 = state_20251__$1;(statearr_20256_20342[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 27))
{var inst_20194 = (state_20251[9]);var inst_20199 = (state_20251[10]);var inst_20192 = (state_20251[11]);var inst_20123 = (state_20251[12]);var inst_20199__$1 = cljs.core._nth.call(null,inst_20192,inst_20194);var inst_20200 = cljs.core.async.put_BANG_.call(null,inst_20199__$1,inst_20123,done);var state_20251__$1 = (function (){var statearr_20257 = state_20251;(statearr_20257[10] = inst_20199__$1);
return statearr_20257;
})();if(cljs.core.truth_(inst_20200))
{var statearr_20258_20343 = state_20251__$1;(statearr_20258_20343[1] = 30);
} else
{var statearr_20259_20344 = state_20251__$1;(statearr_20259_20344[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 1))
{var state_20251__$1 = state_20251;var statearr_20260_20345 = state_20251__$1;(statearr_20260_20345[2] = null);
(statearr_20260_20345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 24))
{var inst_20152 = (state_20251[7]);var inst_20169 = (state_20251[2]);var inst_20170 = cljs.core.next.call(null,inst_20152);var inst_20132 = inst_20170;var inst_20133 = null;var inst_20134 = 0;var inst_20135 = 0;var state_20251__$1 = (function (){var statearr_20261 = state_20251;(statearr_20261[13] = inst_20134);
(statearr_20261[14] = inst_20133);
(statearr_20261[15] = inst_20169);
(statearr_20261[16] = inst_20132);
(statearr_20261[17] = inst_20135);
return statearr_20261;
})();var statearr_20262_20346 = state_20251__$1;(statearr_20262_20346[2] = null);
(statearr_20262_20346[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 39))
{var state_20251__$1 = state_20251;var statearr_20266_20347 = state_20251__$1;(statearr_20266_20347[2] = null);
(statearr_20266_20347[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 4))
{var inst_20123 = (state_20251[12]);var inst_20123__$1 = (state_20251[2]);var inst_20124 = (inst_20123__$1 == null);var state_20251__$1 = (function (){var statearr_20267 = state_20251;(statearr_20267[12] = inst_20123__$1);
return statearr_20267;
})();if(cljs.core.truth_(inst_20124))
{var statearr_20268_20348 = state_20251__$1;(statearr_20268_20348[1] = 5);
} else
{var statearr_20269_20349 = state_20251__$1;(statearr_20269_20349[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 15))
{var inst_20134 = (state_20251[13]);var inst_20133 = (state_20251[14]);var inst_20132 = (state_20251[16]);var inst_20135 = (state_20251[17]);var inst_20148 = (state_20251[2]);var inst_20149 = (inst_20135 + 1);var tmp20263 = inst_20134;var tmp20264 = inst_20133;var tmp20265 = inst_20132;var inst_20132__$1 = tmp20265;var inst_20133__$1 = tmp20264;var inst_20134__$1 = tmp20263;var inst_20135__$1 = inst_20149;var state_20251__$1 = (function (){var statearr_20270 = state_20251;(statearr_20270[18] = inst_20148);
(statearr_20270[13] = inst_20134__$1);
(statearr_20270[14] = inst_20133__$1);
(statearr_20270[16] = inst_20132__$1);
(statearr_20270[17] = inst_20135__$1);
return statearr_20270;
})();var statearr_20271_20350 = state_20251__$1;(statearr_20271_20350[2] = null);
(statearr_20271_20350[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 21))
{var inst_20173 = (state_20251[2]);var state_20251__$1 = state_20251;var statearr_20275_20351 = state_20251__$1;(statearr_20275_20351[2] = inst_20173);
(statearr_20275_20351[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 31))
{var inst_20199 = (state_20251[10]);var inst_20203 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20204 = cljs.core.async.untap_STAR_.call(null,m,inst_20199);var state_20251__$1 = (function (){var statearr_20276 = state_20251;(statearr_20276[19] = inst_20203);
return statearr_20276;
})();var statearr_20277_20352 = state_20251__$1;(statearr_20277_20352[2] = inst_20204);
(statearr_20277_20352[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 32))
{var inst_20193 = (state_20251[20]);var inst_20194 = (state_20251[9]);var inst_20192 = (state_20251[11]);var inst_20191 = (state_20251[21]);var inst_20206 = (state_20251[2]);var inst_20207 = (inst_20194 + 1);var tmp20272 = inst_20193;var tmp20273 = inst_20192;var tmp20274 = inst_20191;var inst_20191__$1 = tmp20274;var inst_20192__$1 = tmp20273;var inst_20193__$1 = tmp20272;var inst_20194__$1 = inst_20207;var state_20251__$1 = (function (){var statearr_20278 = state_20251;(statearr_20278[20] = inst_20193__$1);
(statearr_20278[9] = inst_20194__$1);
(statearr_20278[22] = inst_20206);
(statearr_20278[11] = inst_20192__$1);
(statearr_20278[21] = inst_20191__$1);
return statearr_20278;
})();var statearr_20279_20353 = state_20251__$1;(statearr_20279_20353[2] = null);
(statearr_20279_20353[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 40))
{var inst_20219 = (state_20251[23]);var inst_20223 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20224 = cljs.core.async.untap_STAR_.call(null,m,inst_20219);var state_20251__$1 = (function (){var statearr_20280 = state_20251;(statearr_20280[24] = inst_20223);
return statearr_20280;
})();var statearr_20281_20354 = state_20251__$1;(statearr_20281_20354[2] = inst_20224);
(statearr_20281_20354[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 33))
{var inst_20210 = (state_20251[25]);var inst_20212 = cljs.core.chunked_seq_QMARK_.call(null,inst_20210);var state_20251__$1 = state_20251;if(inst_20212)
{var statearr_20282_20355 = state_20251__$1;(statearr_20282_20355[1] = 36);
} else
{var statearr_20283_20356 = state_20251__$1;(statearr_20283_20356[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 13))
{var inst_20142 = (state_20251[26]);var inst_20145 = cljs.core.async.close_BANG_.call(null,inst_20142);var state_20251__$1 = state_20251;var statearr_20284_20357 = state_20251__$1;(statearr_20284_20357[2] = inst_20145);
(statearr_20284_20357[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 22))
{var inst_20163 = (state_20251[8]);var inst_20166 = cljs.core.async.close_BANG_.call(null,inst_20163);var state_20251__$1 = state_20251;var statearr_20285_20358 = state_20251__$1;(statearr_20285_20358[2] = inst_20166);
(statearr_20285_20358[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 36))
{var inst_20210 = (state_20251[25]);var inst_20214 = cljs.core.chunk_first.call(null,inst_20210);var inst_20215 = cljs.core.chunk_rest.call(null,inst_20210);var inst_20216 = cljs.core.count.call(null,inst_20214);var inst_20191 = inst_20215;var inst_20192 = inst_20214;var inst_20193 = inst_20216;var inst_20194 = 0;var state_20251__$1 = (function (){var statearr_20286 = state_20251;(statearr_20286[20] = inst_20193);
(statearr_20286[9] = inst_20194);
(statearr_20286[11] = inst_20192);
(statearr_20286[21] = inst_20191);
return statearr_20286;
})();var statearr_20287_20359 = state_20251__$1;(statearr_20287_20359[2] = null);
(statearr_20287_20359[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 41))
{var inst_20210 = (state_20251[25]);var inst_20226 = (state_20251[2]);var inst_20227 = cljs.core.next.call(null,inst_20210);var inst_20191 = inst_20227;var inst_20192 = null;var inst_20193 = 0;var inst_20194 = 0;var state_20251__$1 = (function (){var statearr_20288 = state_20251;(statearr_20288[20] = inst_20193);
(statearr_20288[9] = inst_20194);
(statearr_20288[11] = inst_20192);
(statearr_20288[21] = inst_20191);
(statearr_20288[27] = inst_20226);
return statearr_20288;
})();var statearr_20289_20360 = state_20251__$1;(statearr_20289_20360[2] = null);
(statearr_20289_20360[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 43))
{var state_20251__$1 = state_20251;var statearr_20290_20361 = state_20251__$1;(statearr_20290_20361[2] = null);
(statearr_20290_20361[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 29))
{var inst_20235 = (state_20251[2]);var state_20251__$1 = state_20251;var statearr_20291_20362 = state_20251__$1;(statearr_20291_20362[2] = inst_20235);
(statearr_20291_20362[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 44))
{var inst_20244 = (state_20251[2]);var state_20251__$1 = (function (){var statearr_20292 = state_20251;(statearr_20292[28] = inst_20244);
return statearr_20292;
})();var statearr_20293_20363 = state_20251__$1;(statearr_20293_20363[2] = null);
(statearr_20293_20363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 6))
{var inst_20183 = (state_20251[29]);var inst_20182 = cljs.core.deref.call(null,cs);var inst_20183__$1 = cljs.core.keys.call(null,inst_20182);var inst_20184 = cljs.core.count.call(null,inst_20183__$1);var inst_20185 = cljs.core.reset_BANG_.call(null,dctr,inst_20184);var inst_20190 = cljs.core.seq.call(null,inst_20183__$1);var inst_20191 = inst_20190;var inst_20192 = null;var inst_20193 = 0;var inst_20194 = 0;var state_20251__$1 = (function (){var statearr_20294 = state_20251;(statearr_20294[20] = inst_20193);
(statearr_20294[29] = inst_20183__$1);
(statearr_20294[9] = inst_20194);
(statearr_20294[11] = inst_20192);
(statearr_20294[21] = inst_20191);
(statearr_20294[30] = inst_20185);
return statearr_20294;
})();var statearr_20295_20364 = state_20251__$1;(statearr_20295_20364[2] = null);
(statearr_20295_20364[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 28))
{var inst_20191 = (state_20251[21]);var inst_20210 = (state_20251[25]);var inst_20210__$1 = cljs.core.seq.call(null,inst_20191);var state_20251__$1 = (function (){var statearr_20296 = state_20251;(statearr_20296[25] = inst_20210__$1);
return statearr_20296;
})();if(inst_20210__$1)
{var statearr_20297_20365 = state_20251__$1;(statearr_20297_20365[1] = 33);
} else
{var statearr_20298_20366 = state_20251__$1;(statearr_20298_20366[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 25))
{var inst_20193 = (state_20251[20]);var inst_20194 = (state_20251[9]);var inst_20196 = (inst_20194 < inst_20193);var inst_20197 = inst_20196;var state_20251__$1 = state_20251;if(cljs.core.truth_(inst_20197))
{var statearr_20299_20367 = state_20251__$1;(statearr_20299_20367[1] = 27);
} else
{var statearr_20300_20368 = state_20251__$1;(statearr_20300_20368[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 34))
{var state_20251__$1 = state_20251;var statearr_20301_20369 = state_20251__$1;(statearr_20301_20369[2] = null);
(statearr_20301_20369[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 17))
{var state_20251__$1 = state_20251;var statearr_20302_20370 = state_20251__$1;(statearr_20302_20370[2] = null);
(statearr_20302_20370[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 3))
{var inst_20249 = (state_20251[2]);var state_20251__$1 = state_20251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20251__$1,inst_20249);
} else
{if((state_val_20252 === 12))
{var inst_20178 = (state_20251[2]);var state_20251__$1 = state_20251;var statearr_20303_20371 = state_20251__$1;(statearr_20303_20371[2] = inst_20178);
(statearr_20303_20371[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 2))
{var state_20251__$1 = state_20251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20251__$1,4,ch);
} else
{if((state_val_20252 === 23))
{var state_20251__$1 = state_20251;var statearr_20304_20372 = state_20251__$1;(statearr_20304_20372[2] = null);
(statearr_20304_20372[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 35))
{var inst_20233 = (state_20251[2]);var state_20251__$1 = state_20251;var statearr_20305_20373 = state_20251__$1;(statearr_20305_20373[2] = inst_20233);
(statearr_20305_20373[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 19))
{var inst_20152 = (state_20251[7]);var inst_20156 = cljs.core.chunk_first.call(null,inst_20152);var inst_20157 = cljs.core.chunk_rest.call(null,inst_20152);var inst_20158 = cljs.core.count.call(null,inst_20156);var inst_20132 = inst_20157;var inst_20133 = inst_20156;var inst_20134 = inst_20158;var inst_20135 = 0;var state_20251__$1 = (function (){var statearr_20306 = state_20251;(statearr_20306[13] = inst_20134);
(statearr_20306[14] = inst_20133);
(statearr_20306[16] = inst_20132);
(statearr_20306[17] = inst_20135);
return statearr_20306;
})();var statearr_20307_20374 = state_20251__$1;(statearr_20307_20374[2] = null);
(statearr_20307_20374[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 11))
{var inst_20152 = (state_20251[7]);var inst_20132 = (state_20251[16]);var inst_20152__$1 = cljs.core.seq.call(null,inst_20132);var state_20251__$1 = (function (){var statearr_20308 = state_20251;(statearr_20308[7] = inst_20152__$1);
return statearr_20308;
})();if(inst_20152__$1)
{var statearr_20309_20375 = state_20251__$1;(statearr_20309_20375[1] = 16);
} else
{var statearr_20310_20376 = state_20251__$1;(statearr_20310_20376[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 9))
{var inst_20180 = (state_20251[2]);var state_20251__$1 = state_20251;var statearr_20311_20377 = state_20251__$1;(statearr_20311_20377[2] = inst_20180);
(statearr_20311_20377[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 5))
{var inst_20130 = cljs.core.deref.call(null,cs);var inst_20131 = cljs.core.seq.call(null,inst_20130);var inst_20132 = inst_20131;var inst_20133 = null;var inst_20134 = 0;var inst_20135 = 0;var state_20251__$1 = (function (){var statearr_20312 = state_20251;(statearr_20312[13] = inst_20134);
(statearr_20312[14] = inst_20133);
(statearr_20312[16] = inst_20132);
(statearr_20312[17] = inst_20135);
return statearr_20312;
})();var statearr_20313_20378 = state_20251__$1;(statearr_20313_20378[2] = null);
(statearr_20313_20378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 14))
{var state_20251__$1 = state_20251;var statearr_20314_20379 = state_20251__$1;(statearr_20314_20379[2] = null);
(statearr_20314_20379[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 45))
{var inst_20241 = (state_20251[2]);var state_20251__$1 = state_20251;var statearr_20315_20380 = state_20251__$1;(statearr_20315_20380[2] = inst_20241);
(statearr_20315_20380[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 26))
{var inst_20183 = (state_20251[29]);var inst_20237 = (state_20251[2]);var inst_20238 = cljs.core.seq.call(null,inst_20183);var state_20251__$1 = (function (){var statearr_20316 = state_20251;(statearr_20316[31] = inst_20237);
return statearr_20316;
})();if(inst_20238)
{var statearr_20317_20381 = state_20251__$1;(statearr_20317_20381[1] = 42);
} else
{var statearr_20318_20382 = state_20251__$1;(statearr_20318_20382[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 16))
{var inst_20152 = (state_20251[7]);var inst_20154 = cljs.core.chunked_seq_QMARK_.call(null,inst_20152);var state_20251__$1 = state_20251;if(inst_20154)
{var statearr_20319_20383 = state_20251__$1;(statearr_20319_20383[1] = 19);
} else
{var statearr_20320_20384 = state_20251__$1;(statearr_20320_20384[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 38))
{var inst_20230 = (state_20251[2]);var state_20251__$1 = state_20251;var statearr_20321_20385 = state_20251__$1;(statearr_20321_20385[2] = inst_20230);
(statearr_20321_20385[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 30))
{var state_20251__$1 = state_20251;var statearr_20322_20386 = state_20251__$1;(statearr_20322_20386[2] = null);
(statearr_20322_20386[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 10))
{var inst_20133 = (state_20251[14]);var inst_20135 = (state_20251[17]);var inst_20141 = cljs.core._nth.call(null,inst_20133,inst_20135);var inst_20142 = cljs.core.nth.call(null,inst_20141,0,null);var inst_20143 = cljs.core.nth.call(null,inst_20141,1,null);var state_20251__$1 = (function (){var statearr_20323 = state_20251;(statearr_20323[26] = inst_20142);
return statearr_20323;
})();if(cljs.core.truth_(inst_20143))
{var statearr_20324_20387 = state_20251__$1;(statearr_20324_20387[1] = 13);
} else
{var statearr_20325_20388 = state_20251__$1;(statearr_20325_20388[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 18))
{var inst_20176 = (state_20251[2]);var state_20251__$1 = state_20251;var statearr_20326_20389 = state_20251__$1;(statearr_20326_20389[2] = inst_20176);
(statearr_20326_20389[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 42))
{var state_20251__$1 = state_20251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20251__$1,45,dchan);
} else
{if((state_val_20252 === 37))
{var inst_20123 = (state_20251[12]);var inst_20210 = (state_20251[25]);var inst_20219 = (state_20251[23]);var inst_20219__$1 = cljs.core.first.call(null,inst_20210);var inst_20220 = cljs.core.async.put_BANG_.call(null,inst_20219__$1,inst_20123,done);var state_20251__$1 = (function (){var statearr_20327 = state_20251;(statearr_20327[23] = inst_20219__$1);
return statearr_20327;
})();if(cljs.core.truth_(inst_20220))
{var statearr_20328_20390 = state_20251__$1;(statearr_20328_20390[1] = 39);
} else
{var statearr_20329_20391 = state_20251__$1;(statearr_20329_20391[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20252 === 8))
{var inst_20134 = (state_20251[13]);var inst_20135 = (state_20251[17]);var inst_20137 = (inst_20135 < inst_20134);var inst_20138 = inst_20137;var state_20251__$1 = state_20251;if(cljs.core.truth_(inst_20138))
{var statearr_20330_20392 = state_20251__$1;(statearr_20330_20392[1] = 10);
} else
{var statearr_20331_20393 = state_20251__$1;(statearr_20331_20393[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___20339,cs,m,dchan,dctr,done))
;return ((function (switch__13393__auto__,c__13458__auto___20339,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_20335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20335[0] = state_machine__13394__auto__);
(statearr_20335[1] = 1);
return statearr_20335;
});
var state_machine__13394__auto____1 = (function (state_20251){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_20251);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e20336){if((e20336 instanceof Object))
{var ex__13397__auto__ = e20336;var statearr_20337_20394 = state_20251;(statearr_20337_20394[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20395 = state_20251;
state_20251 = G__20395;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_20251){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_20251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___20339,cs,m,dchan,dctr,done))
})();var state__13460__auto__ = (function (){var statearr_20338 = f__13459__auto__.call(null);(statearr_20338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___20339);
return statearr_20338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___20339,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj20397 = {};return obj20397;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__9408__auto__ = m;if(and__9408__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__9408__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__10047__auto__ = (((m == null))?null:m);return (function (){var or__9420__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__9408__auto__ = m;if(and__9408__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__9408__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__10047__auto__ = (((m == null))?null:m);return (function (){var or__9420__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__9408__auto__ = m;if(and__9408__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__9408__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__10047__auto__ = (((m == null))?null:m);return (function (){var or__9420__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__9408__auto__ = m;if(and__9408__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__9408__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__10047__auto__ = (((m == null))?null:m);return (function (){var or__9420__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__9408__auto__ = m;if(and__9408__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__9408__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__10047__auto__ = (((m == null))?null:m);return (function (){var or__9420__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t20517 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20517 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20518){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20518 = meta20518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20517.cljs$lang$type = true;
cljs.core.async.t20517.cljs$lang$ctorStr = "cljs.core.async/t20517";
cljs.core.async.t20517.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"cljs.core.async/t20517");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20517.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20517.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20517.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20517.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20517.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20517.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20517.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20517.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20519){var self__ = this;
var _20519__$1 = this;return self__.meta20518;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20519,meta20518__$1){var self__ = this;
var _20519__$1 = this;return (new cljs.core.async.t20517(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20518__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20517 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20517(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20518){return (new cljs.core.async.t20517(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20518));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20517(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__13458__auto___20636 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___20636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___20636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20589){var state_val_20590 = (state_20589[1]);if((state_val_20590 === 7))
{var inst_20533 = (state_20589[7]);var inst_20538 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20533);var state_20589__$1 = state_20589;var statearr_20591_20637 = state_20589__$1;(statearr_20591_20637[2] = inst_20538);
(statearr_20591_20637[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 20))
{var inst_20548 = (state_20589[8]);var state_20589__$1 = state_20589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20589__$1,23,out,inst_20548);
} else
{if((state_val_20590 === 1))
{var inst_20523 = (state_20589[9]);var inst_20523__$1 = calc_state.call(null);var inst_20524 = cljs.core.seq_QMARK_.call(null,inst_20523__$1);var state_20589__$1 = (function (){var statearr_20592 = state_20589;(statearr_20592[9] = inst_20523__$1);
return statearr_20592;
})();if(inst_20524)
{var statearr_20593_20638 = state_20589__$1;(statearr_20593_20638[1] = 2);
} else
{var statearr_20594_20639 = state_20589__$1;(statearr_20594_20639[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 24))
{var inst_20541 = (state_20589[10]);var inst_20533 = inst_20541;var state_20589__$1 = (function (){var statearr_20595 = state_20589;(statearr_20595[7] = inst_20533);
return statearr_20595;
})();var statearr_20596_20640 = state_20589__$1;(statearr_20596_20640[2] = null);
(statearr_20596_20640[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 4))
{var inst_20523 = (state_20589[9]);var inst_20529 = (state_20589[2]);var inst_20530 = cljs.core.get.call(null,inst_20529,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_20531 = cljs.core.get.call(null,inst_20529,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_20532 = cljs.core.get.call(null,inst_20529,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_20533 = inst_20523;var state_20589__$1 = (function (){var statearr_20597 = state_20589;(statearr_20597[7] = inst_20533);
(statearr_20597[11] = inst_20530);
(statearr_20597[12] = inst_20531);
(statearr_20597[13] = inst_20532);
return statearr_20597;
})();var statearr_20598_20641 = state_20589__$1;(statearr_20598_20641[2] = null);
(statearr_20598_20641[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 15))
{var state_20589__$1 = state_20589;var statearr_20599_20642 = state_20589__$1;(statearr_20599_20642[2] = null);
(statearr_20599_20642[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 21))
{var inst_20541 = (state_20589[10]);var inst_20533 = inst_20541;var state_20589__$1 = (function (){var statearr_20600 = state_20589;(statearr_20600[7] = inst_20533);
return statearr_20600;
})();var statearr_20601_20643 = state_20589__$1;(statearr_20601_20643[2] = null);
(statearr_20601_20643[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 13))
{var inst_20585 = (state_20589[2]);var state_20589__$1 = state_20589;var statearr_20602_20644 = state_20589__$1;(statearr_20602_20644[2] = inst_20585);
(statearr_20602_20644[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 22))
{var inst_20583 = (state_20589[2]);var state_20589__$1 = state_20589;var statearr_20603_20645 = state_20589__$1;(statearr_20603_20645[2] = inst_20583);
(statearr_20603_20645[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 6))
{var inst_20587 = (state_20589[2]);var state_20589__$1 = state_20589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20589__$1,inst_20587);
} else
{if((state_val_20590 === 25))
{var state_20589__$1 = state_20589;var statearr_20604_20646 = state_20589__$1;(statearr_20604_20646[2] = null);
(statearr_20604_20646[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 17))
{var inst_20563 = (state_20589[14]);var state_20589__$1 = state_20589;var statearr_20605_20647 = state_20589__$1;(statearr_20605_20647[2] = inst_20563);
(statearr_20605_20647[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 3))
{var inst_20523 = (state_20589[9]);var state_20589__$1 = state_20589;var statearr_20606_20648 = state_20589__$1;(statearr_20606_20648[2] = inst_20523);
(statearr_20606_20648[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 12))
{var inst_20563 = (state_20589[14]);var inst_20549 = (state_20589[15]);var inst_20544 = (state_20589[16]);var inst_20563__$1 = inst_20544.call(null,inst_20549);var state_20589__$1 = (function (){var statearr_20607 = state_20589;(statearr_20607[14] = inst_20563__$1);
return statearr_20607;
})();if(cljs.core.truth_(inst_20563__$1))
{var statearr_20608_20649 = state_20589__$1;(statearr_20608_20649[1] = 17);
} else
{var statearr_20609_20650 = state_20589__$1;(statearr_20609_20650[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 2))
{var inst_20523 = (state_20589[9]);var inst_20526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20523);var state_20589__$1 = state_20589;var statearr_20610_20651 = state_20589__$1;(statearr_20610_20651[2] = inst_20526);
(statearr_20610_20651[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 23))
{var inst_20574 = (state_20589[2]);var state_20589__$1 = state_20589;if(cljs.core.truth_(inst_20574))
{var statearr_20611_20652 = state_20589__$1;(statearr_20611_20652[1] = 24);
} else
{var statearr_20612_20653 = state_20589__$1;(statearr_20612_20653[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 19))
{var inst_20571 = (state_20589[2]);var state_20589__$1 = state_20589;if(cljs.core.truth_(inst_20571))
{var statearr_20613_20654 = state_20589__$1;(statearr_20613_20654[1] = 20);
} else
{var statearr_20614_20655 = state_20589__$1;(statearr_20614_20655[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 11))
{var inst_20548 = (state_20589[8]);var inst_20554 = (inst_20548 == null);var state_20589__$1 = state_20589;if(cljs.core.truth_(inst_20554))
{var statearr_20615_20656 = state_20589__$1;(statearr_20615_20656[1] = 14);
} else
{var statearr_20616_20657 = state_20589__$1;(statearr_20616_20657[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 9))
{var inst_20541 = (state_20589[10]);var inst_20541__$1 = (state_20589[2]);var inst_20542 = cljs.core.get.call(null,inst_20541__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_20543 = cljs.core.get.call(null,inst_20541__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_20544 = cljs.core.get.call(null,inst_20541__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_20589__$1 = (function (){var statearr_20617 = state_20589;(statearr_20617[17] = inst_20543);
(statearr_20617[10] = inst_20541__$1);
(statearr_20617[16] = inst_20544);
return statearr_20617;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20589__$1,10,inst_20542);
} else
{if((state_val_20590 === 5))
{var inst_20533 = (state_20589[7]);var inst_20536 = cljs.core.seq_QMARK_.call(null,inst_20533);var state_20589__$1 = state_20589;if(inst_20536)
{var statearr_20618_20658 = state_20589__$1;(statearr_20618_20658[1] = 7);
} else
{var statearr_20619_20659 = state_20589__$1;(statearr_20619_20659[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 14))
{var inst_20549 = (state_20589[15]);var inst_20556 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20549);var state_20589__$1 = state_20589;var statearr_20620_20660 = state_20589__$1;(statearr_20620_20660[2] = inst_20556);
(statearr_20620_20660[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 26))
{var inst_20579 = (state_20589[2]);var state_20589__$1 = state_20589;var statearr_20621_20661 = state_20589__$1;(statearr_20621_20661[2] = inst_20579);
(statearr_20621_20661[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 16))
{var inst_20559 = (state_20589[2]);var inst_20560 = calc_state.call(null);var inst_20533 = inst_20560;var state_20589__$1 = (function (){var statearr_20622 = state_20589;(statearr_20622[7] = inst_20533);
(statearr_20622[18] = inst_20559);
return statearr_20622;
})();var statearr_20623_20662 = state_20589__$1;(statearr_20623_20662[2] = null);
(statearr_20623_20662[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 10))
{var inst_20548 = (state_20589[8]);var inst_20549 = (state_20589[15]);var inst_20547 = (state_20589[2]);var inst_20548__$1 = cljs.core.nth.call(null,inst_20547,0,null);var inst_20549__$1 = cljs.core.nth.call(null,inst_20547,1,null);var inst_20550 = (inst_20548__$1 == null);var inst_20551 = cljs.core._EQ_.call(null,inst_20549__$1,change);var inst_20552 = (inst_20550) || (inst_20551);var state_20589__$1 = (function (){var statearr_20624 = state_20589;(statearr_20624[8] = inst_20548__$1);
(statearr_20624[15] = inst_20549__$1);
return statearr_20624;
})();if(cljs.core.truth_(inst_20552))
{var statearr_20625_20663 = state_20589__$1;(statearr_20625_20663[1] = 11);
} else
{var statearr_20626_20664 = state_20589__$1;(statearr_20626_20664[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 18))
{var inst_20543 = (state_20589[17]);var inst_20549 = (state_20589[15]);var inst_20544 = (state_20589[16]);var inst_20566 = cljs.core.empty_QMARK_.call(null,inst_20544);var inst_20567 = inst_20543.call(null,inst_20549);var inst_20568 = cljs.core.not.call(null,inst_20567);var inst_20569 = (inst_20566) && (inst_20568);var state_20589__$1 = state_20589;var statearr_20627_20665 = state_20589__$1;(statearr_20627_20665[2] = inst_20569);
(statearr_20627_20665[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 8))
{var inst_20533 = (state_20589[7]);var state_20589__$1 = state_20589;var statearr_20628_20666 = state_20589__$1;(statearr_20628_20666[2] = inst_20533);
(statearr_20628_20666[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___20636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13393__auto__,c__13458__auto___20636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_20632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20632[0] = state_machine__13394__auto__);
(statearr_20632[1] = 1);
return statearr_20632;
});
var state_machine__13394__auto____1 = (function (state_20589){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_20589);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e20633){if((e20633 instanceof Object))
{var ex__13397__auto__ = e20633;var statearr_20634_20667 = state_20589;(statearr_20634_20667[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20668 = state_20589;
state_20589 = G__20668;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_20589){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_20589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___20636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13460__auto__ = (function (){var statearr_20635 = f__13459__auto__.call(null);(statearr_20635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___20636);
return statearr_20635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___20636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj20670 = {};return obj20670;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__9408__auto__ = p;if(and__9408__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__9408__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__10047__auto__ = (((p == null))?null:p);return (function (){var or__9420__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__9408__auto__ = p;if(and__9408__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__9408__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__10047__auto__ = (((p == null))?null:p);return (function (){var or__9420__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__9408__auto__ = p;if(and__9408__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__9408__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__10047__auto__ = (((p == null))?null:p);return (function (){var or__9420__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__9408__auto__ = p;if(and__9408__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__9408__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__10047__auto__ = (((p == null))?null:p);return (function (){var or__9420__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__9420__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9420__auto__,mults){
return (function (p1__20671_SHARP_){if(cljs.core.truth_(p1__20671_SHARP_.call(null,topic)))
{return p1__20671_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20671_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9420__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20794 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20795){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20795 = meta20795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20794.cljs$lang$type = true;
cljs.core.async.t20794.cljs$lang$ctorStr = "cljs.core.async/t20794";
cljs.core.async.t20794.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"cljs.core.async/t20794");
});})(mults,ensure_mult))
;
cljs.core.async.t20794.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20794.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20794.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20794.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20796){var self__ = this;
var _20796__$1 = this;return self__.meta20795;
});})(mults,ensure_mult))
;
cljs.core.async.t20794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20796,meta20795__$1){var self__ = this;
var _20796__$1 = this;return (new cljs.core.async.t20794(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20795__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20794 = ((function (mults,ensure_mult){
return (function __GT_t20794(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20795){return (new cljs.core.async.t20794(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20795));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20794(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13458__auto___20916 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___20916,mults,ensure_mult,p){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___20916,mults,ensure_mult,p){
return (function (state_20868){var state_val_20869 = (state_20868[1]);if((state_val_20869 === 7))
{var inst_20864 = (state_20868[2]);var state_20868__$1 = state_20868;var statearr_20870_20917 = state_20868__$1;(statearr_20870_20917[2] = inst_20864);
(statearr_20870_20917[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 20))
{var state_20868__$1 = state_20868;var statearr_20871_20918 = state_20868__$1;(statearr_20871_20918[2] = null);
(statearr_20871_20918[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 1))
{var state_20868__$1 = state_20868;var statearr_20872_20919 = state_20868__$1;(statearr_20872_20919[2] = null);
(statearr_20872_20919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 24))
{var inst_20847 = (state_20868[7]);var inst_20856 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20847);var state_20868__$1 = state_20868;var statearr_20873_20920 = state_20868__$1;(statearr_20873_20920[2] = inst_20856);
(statearr_20873_20920[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 4))
{var inst_20799 = (state_20868[8]);var inst_20799__$1 = (state_20868[2]);var inst_20800 = (inst_20799__$1 == null);var state_20868__$1 = (function (){var statearr_20874 = state_20868;(statearr_20874[8] = inst_20799__$1);
return statearr_20874;
})();if(cljs.core.truth_(inst_20800))
{var statearr_20875_20921 = state_20868__$1;(statearr_20875_20921[1] = 5);
} else
{var statearr_20876_20922 = state_20868__$1;(statearr_20876_20922[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 15))
{var inst_20841 = (state_20868[2]);var state_20868__$1 = state_20868;var statearr_20877_20923 = state_20868__$1;(statearr_20877_20923[2] = inst_20841);
(statearr_20877_20923[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 21))
{var inst_20861 = (state_20868[2]);var state_20868__$1 = (function (){var statearr_20878 = state_20868;(statearr_20878[9] = inst_20861);
return statearr_20878;
})();var statearr_20879_20924 = state_20868__$1;(statearr_20879_20924[2] = null);
(statearr_20879_20924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 13))
{var inst_20823 = (state_20868[10]);var inst_20825 = cljs.core.chunked_seq_QMARK_.call(null,inst_20823);var state_20868__$1 = state_20868;if(inst_20825)
{var statearr_20880_20925 = state_20868__$1;(statearr_20880_20925[1] = 16);
} else
{var statearr_20881_20926 = state_20868__$1;(statearr_20881_20926[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 22))
{var inst_20853 = (state_20868[2]);var state_20868__$1 = state_20868;if(cljs.core.truth_(inst_20853))
{var statearr_20882_20927 = state_20868__$1;(statearr_20882_20927[1] = 23);
} else
{var statearr_20883_20928 = state_20868__$1;(statearr_20883_20928[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 6))
{var inst_20847 = (state_20868[7]);var inst_20799 = (state_20868[8]);var inst_20849 = (state_20868[11]);var inst_20847__$1 = topic_fn.call(null,inst_20799);var inst_20848 = cljs.core.deref.call(null,mults);var inst_20849__$1 = cljs.core.get.call(null,inst_20848,inst_20847__$1);var state_20868__$1 = (function (){var statearr_20884 = state_20868;(statearr_20884[7] = inst_20847__$1);
(statearr_20884[11] = inst_20849__$1);
return statearr_20884;
})();if(cljs.core.truth_(inst_20849__$1))
{var statearr_20885_20929 = state_20868__$1;(statearr_20885_20929[1] = 19);
} else
{var statearr_20886_20930 = state_20868__$1;(statearr_20886_20930[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 25))
{var inst_20858 = (state_20868[2]);var state_20868__$1 = state_20868;var statearr_20887_20931 = state_20868__$1;(statearr_20887_20931[2] = inst_20858);
(statearr_20887_20931[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 17))
{var inst_20823 = (state_20868[10]);var inst_20832 = cljs.core.first.call(null,inst_20823);var inst_20833 = cljs.core.async.muxch_STAR_.call(null,inst_20832);var inst_20834 = cljs.core.async.close_BANG_.call(null,inst_20833);var inst_20835 = cljs.core.next.call(null,inst_20823);var inst_20809 = inst_20835;var inst_20810 = null;var inst_20811 = 0;var inst_20812 = 0;var state_20868__$1 = (function (){var statearr_20888 = state_20868;(statearr_20888[12] = inst_20810);
(statearr_20888[13] = inst_20811);
(statearr_20888[14] = inst_20834);
(statearr_20888[15] = inst_20809);
(statearr_20888[16] = inst_20812);
return statearr_20888;
})();var statearr_20889_20932 = state_20868__$1;(statearr_20889_20932[2] = null);
(statearr_20889_20932[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 3))
{var inst_20866 = (state_20868[2]);var state_20868__$1 = state_20868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20868__$1,inst_20866);
} else
{if((state_val_20869 === 12))
{var inst_20843 = (state_20868[2]);var state_20868__$1 = state_20868;var statearr_20890_20933 = state_20868__$1;(statearr_20890_20933[2] = inst_20843);
(statearr_20890_20933[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 2))
{var state_20868__$1 = state_20868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20868__$1,4,ch);
} else
{if((state_val_20869 === 23))
{var state_20868__$1 = state_20868;var statearr_20891_20934 = state_20868__$1;(statearr_20891_20934[2] = null);
(statearr_20891_20934[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 19))
{var inst_20799 = (state_20868[8]);var inst_20849 = (state_20868[11]);var inst_20851 = cljs.core.async.muxch_STAR_.call(null,inst_20849);var state_20868__$1 = state_20868;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20868__$1,22,inst_20851,inst_20799);
} else
{if((state_val_20869 === 11))
{var inst_20823 = (state_20868[10]);var inst_20809 = (state_20868[15]);var inst_20823__$1 = cljs.core.seq.call(null,inst_20809);var state_20868__$1 = (function (){var statearr_20892 = state_20868;(statearr_20892[10] = inst_20823__$1);
return statearr_20892;
})();if(inst_20823__$1)
{var statearr_20893_20935 = state_20868__$1;(statearr_20893_20935[1] = 13);
} else
{var statearr_20894_20936 = state_20868__$1;(statearr_20894_20936[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 9))
{var inst_20845 = (state_20868[2]);var state_20868__$1 = state_20868;var statearr_20895_20937 = state_20868__$1;(statearr_20895_20937[2] = inst_20845);
(statearr_20895_20937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 5))
{var inst_20806 = cljs.core.deref.call(null,mults);var inst_20807 = cljs.core.vals.call(null,inst_20806);var inst_20808 = cljs.core.seq.call(null,inst_20807);var inst_20809 = inst_20808;var inst_20810 = null;var inst_20811 = 0;var inst_20812 = 0;var state_20868__$1 = (function (){var statearr_20896 = state_20868;(statearr_20896[12] = inst_20810);
(statearr_20896[13] = inst_20811);
(statearr_20896[15] = inst_20809);
(statearr_20896[16] = inst_20812);
return statearr_20896;
})();var statearr_20897_20938 = state_20868__$1;(statearr_20897_20938[2] = null);
(statearr_20897_20938[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 14))
{var state_20868__$1 = state_20868;var statearr_20901_20939 = state_20868__$1;(statearr_20901_20939[2] = null);
(statearr_20901_20939[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 16))
{var inst_20823 = (state_20868[10]);var inst_20827 = cljs.core.chunk_first.call(null,inst_20823);var inst_20828 = cljs.core.chunk_rest.call(null,inst_20823);var inst_20829 = cljs.core.count.call(null,inst_20827);var inst_20809 = inst_20828;var inst_20810 = inst_20827;var inst_20811 = inst_20829;var inst_20812 = 0;var state_20868__$1 = (function (){var statearr_20902 = state_20868;(statearr_20902[12] = inst_20810);
(statearr_20902[13] = inst_20811);
(statearr_20902[15] = inst_20809);
(statearr_20902[16] = inst_20812);
return statearr_20902;
})();var statearr_20903_20940 = state_20868__$1;(statearr_20903_20940[2] = null);
(statearr_20903_20940[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 10))
{var inst_20810 = (state_20868[12]);var inst_20811 = (state_20868[13]);var inst_20809 = (state_20868[15]);var inst_20812 = (state_20868[16]);var inst_20817 = cljs.core._nth.call(null,inst_20810,inst_20812);var inst_20818 = cljs.core.async.muxch_STAR_.call(null,inst_20817);var inst_20819 = cljs.core.async.close_BANG_.call(null,inst_20818);var inst_20820 = (inst_20812 + 1);var tmp20898 = inst_20810;var tmp20899 = inst_20811;var tmp20900 = inst_20809;var inst_20809__$1 = tmp20900;var inst_20810__$1 = tmp20898;var inst_20811__$1 = tmp20899;var inst_20812__$1 = inst_20820;var state_20868__$1 = (function (){var statearr_20904 = state_20868;(statearr_20904[17] = inst_20819);
(statearr_20904[12] = inst_20810__$1);
(statearr_20904[13] = inst_20811__$1);
(statearr_20904[15] = inst_20809__$1);
(statearr_20904[16] = inst_20812__$1);
return statearr_20904;
})();var statearr_20905_20941 = state_20868__$1;(statearr_20905_20941[2] = null);
(statearr_20905_20941[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 18))
{var inst_20838 = (state_20868[2]);var state_20868__$1 = state_20868;var statearr_20906_20942 = state_20868__$1;(statearr_20906_20942[2] = inst_20838);
(statearr_20906_20942[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20869 === 8))
{var inst_20811 = (state_20868[13]);var inst_20812 = (state_20868[16]);var inst_20814 = (inst_20812 < inst_20811);var inst_20815 = inst_20814;var state_20868__$1 = state_20868;if(cljs.core.truth_(inst_20815))
{var statearr_20907_20943 = state_20868__$1;(statearr_20907_20943[1] = 10);
} else
{var statearr_20908_20944 = state_20868__$1;(statearr_20908_20944[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___20916,mults,ensure_mult,p))
;return ((function (switch__13393__auto__,c__13458__auto___20916,mults,ensure_mult,p){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_20912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20912[0] = state_machine__13394__auto__);
(statearr_20912[1] = 1);
return statearr_20912;
});
var state_machine__13394__auto____1 = (function (state_20868){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_20868);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e20913){if((e20913 instanceof Object))
{var ex__13397__auto__ = e20913;var statearr_20914_20945 = state_20868;(statearr_20914_20945[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20868);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20946 = state_20868;
state_20868 = G__20946;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_20868){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_20868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___20916,mults,ensure_mult,p))
})();var state__13460__auto__ = (function (){var statearr_20915 = f__13459__auto__.call(null);(statearr_20915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___20916);
return statearr_20915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___20916,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__13458__auto___21083 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___21083,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___21083,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21053){var state_val_21054 = (state_21053[1]);if((state_val_21054 === 7))
{var state_21053__$1 = state_21053;var statearr_21055_21084 = state_21053__$1;(statearr_21055_21084[2] = null);
(statearr_21055_21084[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 1))
{var state_21053__$1 = state_21053;var statearr_21056_21085 = state_21053__$1;(statearr_21056_21085[2] = null);
(statearr_21056_21085[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 4))
{var inst_21017 = (state_21053[7]);var inst_21019 = (inst_21017 < cnt);var state_21053__$1 = state_21053;if(cljs.core.truth_(inst_21019))
{var statearr_21057_21086 = state_21053__$1;(statearr_21057_21086[1] = 6);
} else
{var statearr_21058_21087 = state_21053__$1;(statearr_21058_21087[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 15))
{var inst_21049 = (state_21053[2]);var state_21053__$1 = state_21053;var statearr_21059_21088 = state_21053__$1;(statearr_21059_21088[2] = inst_21049);
(statearr_21059_21088[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 13))
{var inst_21042 = cljs.core.async.close_BANG_.call(null,out);var state_21053__$1 = state_21053;var statearr_21060_21089 = state_21053__$1;(statearr_21060_21089[2] = inst_21042);
(statearr_21060_21089[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 6))
{var state_21053__$1 = state_21053;var statearr_21061_21090 = state_21053__$1;(statearr_21061_21090[2] = null);
(statearr_21061_21090[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 3))
{var inst_21051 = (state_21053[2]);var state_21053__$1 = state_21053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21053__$1,inst_21051);
} else
{if((state_val_21054 === 12))
{var inst_21039 = (state_21053[8]);var inst_21039__$1 = (state_21053[2]);var inst_21040 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21039__$1);var state_21053__$1 = (function (){var statearr_21062 = state_21053;(statearr_21062[8] = inst_21039__$1);
return statearr_21062;
})();if(cljs.core.truth_(inst_21040))
{var statearr_21063_21091 = state_21053__$1;(statearr_21063_21091[1] = 13);
} else
{var statearr_21064_21092 = state_21053__$1;(statearr_21064_21092[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 2))
{var inst_21016 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21017 = 0;var state_21053__$1 = (function (){var statearr_21065 = state_21053;(statearr_21065[7] = inst_21017);
(statearr_21065[9] = inst_21016);
return statearr_21065;
})();var statearr_21066_21093 = state_21053__$1;(statearr_21066_21093[2] = null);
(statearr_21066_21093[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 11))
{var inst_21017 = (state_21053[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21053,10,Object,null,9);var inst_21026 = chs__$1.call(null,inst_21017);var inst_21027 = done.call(null,inst_21017);var inst_21028 = cljs.core.async.take_BANG_.call(null,inst_21026,inst_21027);var state_21053__$1 = state_21053;var statearr_21067_21094 = state_21053__$1;(statearr_21067_21094[2] = inst_21028);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21053__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 9))
{var inst_21017 = (state_21053[7]);var inst_21030 = (state_21053[2]);var inst_21031 = (inst_21017 + 1);var inst_21017__$1 = inst_21031;var state_21053__$1 = (function (){var statearr_21068 = state_21053;(statearr_21068[10] = inst_21030);
(statearr_21068[7] = inst_21017__$1);
return statearr_21068;
})();var statearr_21069_21095 = state_21053__$1;(statearr_21069_21095[2] = null);
(statearr_21069_21095[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 5))
{var inst_21037 = (state_21053[2]);var state_21053__$1 = (function (){var statearr_21070 = state_21053;(statearr_21070[11] = inst_21037);
return statearr_21070;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21053__$1,12,dchan);
} else
{if((state_val_21054 === 14))
{var inst_21039 = (state_21053[8]);var inst_21044 = cljs.core.apply.call(null,f,inst_21039);var state_21053__$1 = state_21053;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21053__$1,16,out,inst_21044);
} else
{if((state_val_21054 === 16))
{var inst_21046 = (state_21053[2]);var state_21053__$1 = (function (){var statearr_21071 = state_21053;(statearr_21071[12] = inst_21046);
return statearr_21071;
})();var statearr_21072_21096 = state_21053__$1;(statearr_21072_21096[2] = null);
(statearr_21072_21096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 10))
{var inst_21021 = (state_21053[2]);var inst_21022 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21053__$1 = (function (){var statearr_21073 = state_21053;(statearr_21073[13] = inst_21021);
return statearr_21073;
})();var statearr_21074_21097 = state_21053__$1;(statearr_21074_21097[2] = inst_21022);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21053__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21054 === 8))
{var inst_21035 = (state_21053[2]);var state_21053__$1 = state_21053;var statearr_21075_21098 = state_21053__$1;(statearr_21075_21098[2] = inst_21035);
(statearr_21075_21098[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___21083,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13393__auto__,c__13458__auto___21083,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_21079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21079[0] = state_machine__13394__auto__);
(statearr_21079[1] = 1);
return statearr_21079;
});
var state_machine__13394__auto____1 = (function (state_21053){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_21053);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e21080){if((e21080 instanceof Object))
{var ex__13397__auto__ = e21080;var statearr_21081_21099 = state_21053;(statearr_21081_21099[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21053);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21100 = state_21053;
state_21053 = G__21100;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_21053){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_21053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___21083,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13460__auto__ = (function (){var statearr_21082 = f__13459__auto__.call(null);(statearr_21082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___21083);
return statearr_21082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___21083,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13458__auto___21208 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___21208,out){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___21208,out){
return (function (state_21184){var state_val_21185 = (state_21184[1]);if((state_val_21185 === 7))
{var inst_21164 = (state_21184[7]);var inst_21163 = (state_21184[8]);var inst_21163__$1 = (state_21184[2]);var inst_21164__$1 = cljs.core.nth.call(null,inst_21163__$1,0,null);var inst_21165 = cljs.core.nth.call(null,inst_21163__$1,1,null);var inst_21166 = (inst_21164__$1 == null);var state_21184__$1 = (function (){var statearr_21186 = state_21184;(statearr_21186[7] = inst_21164__$1);
(statearr_21186[8] = inst_21163__$1);
(statearr_21186[9] = inst_21165);
return statearr_21186;
})();if(cljs.core.truth_(inst_21166))
{var statearr_21187_21209 = state_21184__$1;(statearr_21187_21209[1] = 8);
} else
{var statearr_21188_21210 = state_21184__$1;(statearr_21188_21210[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21185 === 1))
{var inst_21155 = cljs.core.vec.call(null,chs);var inst_21156 = inst_21155;var state_21184__$1 = (function (){var statearr_21189 = state_21184;(statearr_21189[10] = inst_21156);
return statearr_21189;
})();var statearr_21190_21211 = state_21184__$1;(statearr_21190_21211[2] = null);
(statearr_21190_21211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21185 === 4))
{var inst_21156 = (state_21184[10]);var state_21184__$1 = state_21184;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21184__$1,7,inst_21156);
} else
{if((state_val_21185 === 6))
{var inst_21180 = (state_21184[2]);var state_21184__$1 = state_21184;var statearr_21191_21212 = state_21184__$1;(statearr_21191_21212[2] = inst_21180);
(statearr_21191_21212[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21185 === 3))
{var inst_21182 = (state_21184[2]);var state_21184__$1 = state_21184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21184__$1,inst_21182);
} else
{if((state_val_21185 === 2))
{var inst_21156 = (state_21184[10]);var inst_21158 = cljs.core.count.call(null,inst_21156);var inst_21159 = (inst_21158 > 0);var state_21184__$1 = state_21184;if(cljs.core.truth_(inst_21159))
{var statearr_21193_21213 = state_21184__$1;(statearr_21193_21213[1] = 4);
} else
{var statearr_21194_21214 = state_21184__$1;(statearr_21194_21214[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21185 === 11))
{var inst_21156 = (state_21184[10]);var inst_21173 = (state_21184[2]);var tmp21192 = inst_21156;var inst_21156__$1 = tmp21192;var state_21184__$1 = (function (){var statearr_21195 = state_21184;(statearr_21195[10] = inst_21156__$1);
(statearr_21195[11] = inst_21173);
return statearr_21195;
})();var statearr_21196_21215 = state_21184__$1;(statearr_21196_21215[2] = null);
(statearr_21196_21215[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21185 === 9))
{var inst_21164 = (state_21184[7]);var state_21184__$1 = state_21184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21184__$1,11,out,inst_21164);
} else
{if((state_val_21185 === 5))
{var inst_21178 = cljs.core.async.close_BANG_.call(null,out);var state_21184__$1 = state_21184;var statearr_21197_21216 = state_21184__$1;(statearr_21197_21216[2] = inst_21178);
(statearr_21197_21216[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21185 === 10))
{var inst_21176 = (state_21184[2]);var state_21184__$1 = state_21184;var statearr_21198_21217 = state_21184__$1;(statearr_21198_21217[2] = inst_21176);
(statearr_21198_21217[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21185 === 8))
{var inst_21156 = (state_21184[10]);var inst_21164 = (state_21184[7]);var inst_21163 = (state_21184[8]);var inst_21165 = (state_21184[9]);var inst_21168 = (function (){var c = inst_21165;var v = inst_21164;var vec__21161 = inst_21163;var cs = inst_21156;return ((function (c,v,vec__21161,cs,inst_21156,inst_21164,inst_21163,inst_21165,state_val_21185,c__13458__auto___21208,out){
return (function (p1__21101_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21101_SHARP_);
});
;})(c,v,vec__21161,cs,inst_21156,inst_21164,inst_21163,inst_21165,state_val_21185,c__13458__auto___21208,out))
})();var inst_21169 = cljs.core.filterv.call(null,inst_21168,inst_21156);var inst_21156__$1 = inst_21169;var state_21184__$1 = (function (){var statearr_21199 = state_21184;(statearr_21199[10] = inst_21156__$1);
return statearr_21199;
})();var statearr_21200_21218 = state_21184__$1;(statearr_21200_21218[2] = null);
(statearr_21200_21218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___21208,out))
;return ((function (switch__13393__auto__,c__13458__auto___21208,out){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_21204 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21204[0] = state_machine__13394__auto__);
(statearr_21204[1] = 1);
return statearr_21204;
});
var state_machine__13394__auto____1 = (function (state_21184){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_21184);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e21205){if((e21205 instanceof Object))
{var ex__13397__auto__ = e21205;var statearr_21206_21219 = state_21184;(statearr_21206_21219[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21184);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21205;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21220 = state_21184;
state_21184 = G__21220;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_21184){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_21184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___21208,out))
})();var state__13460__auto__ = (function (){var statearr_21207 = f__13459__auto__.call(null);(statearr_21207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___21208);
return statearr_21207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___21208,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13458__auto___21313 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___21313,out){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___21313,out){
return (function (state_21290){var state_val_21291 = (state_21290[1]);if((state_val_21291 === 7))
{var inst_21272 = (state_21290[7]);var inst_21272__$1 = (state_21290[2]);var inst_21273 = (inst_21272__$1 == null);var inst_21274 = cljs.core.not.call(null,inst_21273);var state_21290__$1 = (function (){var statearr_21292 = state_21290;(statearr_21292[7] = inst_21272__$1);
return statearr_21292;
})();if(inst_21274)
{var statearr_21293_21314 = state_21290__$1;(statearr_21293_21314[1] = 8);
} else
{var statearr_21294_21315 = state_21290__$1;(statearr_21294_21315[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21291 === 1))
{var inst_21267 = 0;var state_21290__$1 = (function (){var statearr_21295 = state_21290;(statearr_21295[8] = inst_21267);
return statearr_21295;
})();var statearr_21296_21316 = state_21290__$1;(statearr_21296_21316[2] = null);
(statearr_21296_21316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21291 === 4))
{var state_21290__$1 = state_21290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21290__$1,7,ch);
} else
{if((state_val_21291 === 6))
{var inst_21285 = (state_21290[2]);var state_21290__$1 = state_21290;var statearr_21297_21317 = state_21290__$1;(statearr_21297_21317[2] = inst_21285);
(statearr_21297_21317[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21291 === 3))
{var inst_21287 = (state_21290[2]);var inst_21288 = cljs.core.async.close_BANG_.call(null,out);var state_21290__$1 = (function (){var statearr_21298 = state_21290;(statearr_21298[9] = inst_21287);
return statearr_21298;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21290__$1,inst_21288);
} else
{if((state_val_21291 === 2))
{var inst_21267 = (state_21290[8]);var inst_21269 = (inst_21267 < n);var state_21290__$1 = state_21290;if(cljs.core.truth_(inst_21269))
{var statearr_21299_21318 = state_21290__$1;(statearr_21299_21318[1] = 4);
} else
{var statearr_21300_21319 = state_21290__$1;(statearr_21300_21319[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21291 === 11))
{var inst_21267 = (state_21290[8]);var inst_21277 = (state_21290[2]);var inst_21278 = (inst_21267 + 1);var inst_21267__$1 = inst_21278;var state_21290__$1 = (function (){var statearr_21301 = state_21290;(statearr_21301[10] = inst_21277);
(statearr_21301[8] = inst_21267__$1);
return statearr_21301;
})();var statearr_21302_21320 = state_21290__$1;(statearr_21302_21320[2] = null);
(statearr_21302_21320[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21291 === 9))
{var state_21290__$1 = state_21290;var statearr_21303_21321 = state_21290__$1;(statearr_21303_21321[2] = null);
(statearr_21303_21321[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21291 === 5))
{var state_21290__$1 = state_21290;var statearr_21304_21322 = state_21290__$1;(statearr_21304_21322[2] = null);
(statearr_21304_21322[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21291 === 10))
{var inst_21282 = (state_21290[2]);var state_21290__$1 = state_21290;var statearr_21305_21323 = state_21290__$1;(statearr_21305_21323[2] = inst_21282);
(statearr_21305_21323[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21291 === 8))
{var inst_21272 = (state_21290[7]);var state_21290__$1 = state_21290;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21290__$1,11,out,inst_21272);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___21313,out))
;return ((function (switch__13393__auto__,c__13458__auto___21313,out){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_21309 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21309[0] = state_machine__13394__auto__);
(statearr_21309[1] = 1);
return statearr_21309;
});
var state_machine__13394__auto____1 = (function (state_21290){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_21290);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e21310){if((e21310 instanceof Object))
{var ex__13397__auto__ = e21310;var statearr_21311_21324 = state_21290;(statearr_21311_21324[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21290);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21310;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21325 = state_21290;
state_21290 = G__21325;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_21290){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_21290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___21313,out))
})();var state__13460__auto__ = (function (){var statearr_21312 = f__13459__auto__.call(null);(statearr_21312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___21313);
return statearr_21312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___21313,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13458__auto___21422 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___21422,out){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___21422,out){
return (function (state_21397){var state_val_21398 = (state_21397[1]);if((state_val_21398 === 7))
{var inst_21392 = (state_21397[2]);var state_21397__$1 = state_21397;var statearr_21399_21423 = state_21397__$1;(statearr_21399_21423[2] = inst_21392);
(statearr_21399_21423[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21398 === 1))
{var inst_21374 = null;var state_21397__$1 = (function (){var statearr_21400 = state_21397;(statearr_21400[7] = inst_21374);
return statearr_21400;
})();var statearr_21401_21424 = state_21397__$1;(statearr_21401_21424[2] = null);
(statearr_21401_21424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21398 === 4))
{var inst_21377 = (state_21397[8]);var inst_21377__$1 = (state_21397[2]);var inst_21378 = (inst_21377__$1 == null);var inst_21379 = cljs.core.not.call(null,inst_21378);var state_21397__$1 = (function (){var statearr_21402 = state_21397;(statearr_21402[8] = inst_21377__$1);
return statearr_21402;
})();if(inst_21379)
{var statearr_21403_21425 = state_21397__$1;(statearr_21403_21425[1] = 5);
} else
{var statearr_21404_21426 = state_21397__$1;(statearr_21404_21426[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21398 === 6))
{var state_21397__$1 = state_21397;var statearr_21405_21427 = state_21397__$1;(statearr_21405_21427[2] = null);
(statearr_21405_21427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21398 === 3))
{var inst_21394 = (state_21397[2]);var inst_21395 = cljs.core.async.close_BANG_.call(null,out);var state_21397__$1 = (function (){var statearr_21406 = state_21397;(statearr_21406[9] = inst_21394);
return statearr_21406;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21397__$1,inst_21395);
} else
{if((state_val_21398 === 2))
{var state_21397__$1 = state_21397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21397__$1,4,ch);
} else
{if((state_val_21398 === 11))
{var inst_21377 = (state_21397[8]);var inst_21386 = (state_21397[2]);var inst_21374 = inst_21377;var state_21397__$1 = (function (){var statearr_21407 = state_21397;(statearr_21407[10] = inst_21386);
(statearr_21407[7] = inst_21374);
return statearr_21407;
})();var statearr_21408_21428 = state_21397__$1;(statearr_21408_21428[2] = null);
(statearr_21408_21428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21398 === 9))
{var inst_21377 = (state_21397[8]);var state_21397__$1 = state_21397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21397__$1,11,out,inst_21377);
} else
{if((state_val_21398 === 5))
{var inst_21374 = (state_21397[7]);var inst_21377 = (state_21397[8]);var inst_21381 = cljs.core._EQ_.call(null,inst_21377,inst_21374);var state_21397__$1 = state_21397;if(inst_21381)
{var statearr_21410_21429 = state_21397__$1;(statearr_21410_21429[1] = 8);
} else
{var statearr_21411_21430 = state_21397__$1;(statearr_21411_21430[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21398 === 10))
{var inst_21389 = (state_21397[2]);var state_21397__$1 = state_21397;var statearr_21412_21431 = state_21397__$1;(statearr_21412_21431[2] = inst_21389);
(statearr_21412_21431[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21398 === 8))
{var inst_21374 = (state_21397[7]);var tmp21409 = inst_21374;var inst_21374__$1 = tmp21409;var state_21397__$1 = (function (){var statearr_21413 = state_21397;(statearr_21413[7] = inst_21374__$1);
return statearr_21413;
})();var statearr_21414_21432 = state_21397__$1;(statearr_21414_21432[2] = null);
(statearr_21414_21432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___21422,out))
;return ((function (switch__13393__auto__,c__13458__auto___21422,out){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_21418 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21418[0] = state_machine__13394__auto__);
(statearr_21418[1] = 1);
return statearr_21418;
});
var state_machine__13394__auto____1 = (function (state_21397){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_21397);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e21419){if((e21419 instanceof Object))
{var ex__13397__auto__ = e21419;var statearr_21420_21433 = state_21397;(statearr_21420_21433[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21434 = state_21397;
state_21397 = G__21434;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_21397){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_21397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___21422,out))
})();var state__13460__auto__ = (function (){var statearr_21421 = f__13459__auto__.call(null);(statearr_21421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___21422);
return statearr_21421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___21422,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13458__auto___21569 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___21569,out){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___21569,out){
return (function (state_21539){var state_val_21540 = (state_21539[1]);if((state_val_21540 === 7))
{var inst_21535 = (state_21539[2]);var state_21539__$1 = state_21539;var statearr_21541_21570 = state_21539__$1;(statearr_21541_21570[2] = inst_21535);
(statearr_21541_21570[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21540 === 1))
{var inst_21502 = (new Array(n));var inst_21503 = inst_21502;var inst_21504 = 0;var state_21539__$1 = (function (){var statearr_21542 = state_21539;(statearr_21542[7] = inst_21503);
(statearr_21542[8] = inst_21504);
return statearr_21542;
})();var statearr_21543_21571 = state_21539__$1;(statearr_21543_21571[2] = null);
(statearr_21543_21571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21540 === 4))
{var inst_21507 = (state_21539[9]);var inst_21507__$1 = (state_21539[2]);var inst_21508 = (inst_21507__$1 == null);var inst_21509 = cljs.core.not.call(null,inst_21508);var state_21539__$1 = (function (){var statearr_21544 = state_21539;(statearr_21544[9] = inst_21507__$1);
return statearr_21544;
})();if(inst_21509)
{var statearr_21545_21572 = state_21539__$1;(statearr_21545_21572[1] = 5);
} else
{var statearr_21546_21573 = state_21539__$1;(statearr_21546_21573[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21540 === 15))
{var inst_21529 = (state_21539[2]);var state_21539__$1 = state_21539;var statearr_21547_21574 = state_21539__$1;(statearr_21547_21574[2] = inst_21529);
(statearr_21547_21574[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21540 === 13))
{var state_21539__$1 = state_21539;var statearr_21548_21575 = state_21539__$1;(statearr_21548_21575[2] = null);
(statearr_21548_21575[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21540 === 6))
{var inst_21504 = (state_21539[8]);var inst_21525 = (inst_21504 > 0);var state_21539__$1 = state_21539;if(cljs.core.truth_(inst_21525))
{var statearr_21549_21576 = state_21539__$1;(statearr_21549_21576[1] = 12);
} else
{var statearr_21550_21577 = state_21539__$1;(statearr_21550_21577[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21540 === 3))
{var inst_21537 = (state_21539[2]);var state_21539__$1 = state_21539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21539__$1,inst_21537);
} else
{if((state_val_21540 === 12))
{var inst_21503 = (state_21539[7]);var inst_21527 = cljs.core.vec.call(null,inst_21503);var state_21539__$1 = state_21539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21539__$1,15,out,inst_21527);
} else
{if((state_val_21540 === 2))
{var state_21539__$1 = state_21539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21539__$1,4,ch);
} else
{if((state_val_21540 === 11))
{var inst_21519 = (state_21539[2]);var inst_21520 = (new Array(n));var inst_21503 = inst_21520;var inst_21504 = 0;var state_21539__$1 = (function (){var statearr_21551 = state_21539;(statearr_21551[7] = inst_21503);
(statearr_21551[10] = inst_21519);
(statearr_21551[8] = inst_21504);
return statearr_21551;
})();var statearr_21552_21578 = state_21539__$1;(statearr_21552_21578[2] = null);
(statearr_21552_21578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21540 === 9))
{var inst_21503 = (state_21539[7]);var inst_21517 = cljs.core.vec.call(null,inst_21503);var state_21539__$1 = state_21539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21539__$1,11,out,inst_21517);
} else
{if((state_val_21540 === 5))
{var inst_21503 = (state_21539[7]);var inst_21507 = (state_21539[9]);var inst_21512 = (state_21539[11]);var inst_21504 = (state_21539[8]);var inst_21511 = (inst_21503[inst_21504] = inst_21507);var inst_21512__$1 = (inst_21504 + 1);var inst_21513 = (inst_21512__$1 < n);var state_21539__$1 = (function (){var statearr_21553 = state_21539;(statearr_21553[11] = inst_21512__$1);
(statearr_21553[12] = inst_21511);
return statearr_21553;
})();if(cljs.core.truth_(inst_21513))
{var statearr_21554_21579 = state_21539__$1;(statearr_21554_21579[1] = 8);
} else
{var statearr_21555_21580 = state_21539__$1;(statearr_21555_21580[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21540 === 14))
{var inst_21532 = (state_21539[2]);var inst_21533 = cljs.core.async.close_BANG_.call(null,out);var state_21539__$1 = (function (){var statearr_21557 = state_21539;(statearr_21557[13] = inst_21532);
return statearr_21557;
})();var statearr_21558_21581 = state_21539__$1;(statearr_21558_21581[2] = inst_21533);
(statearr_21558_21581[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21540 === 10))
{var inst_21523 = (state_21539[2]);var state_21539__$1 = state_21539;var statearr_21559_21582 = state_21539__$1;(statearr_21559_21582[2] = inst_21523);
(statearr_21559_21582[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21540 === 8))
{var inst_21503 = (state_21539[7]);var inst_21512 = (state_21539[11]);var tmp21556 = inst_21503;var inst_21503__$1 = tmp21556;var inst_21504 = inst_21512;var state_21539__$1 = (function (){var statearr_21560 = state_21539;(statearr_21560[7] = inst_21503__$1);
(statearr_21560[8] = inst_21504);
return statearr_21560;
})();var statearr_21561_21583 = state_21539__$1;(statearr_21561_21583[2] = null);
(statearr_21561_21583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___21569,out))
;return ((function (switch__13393__auto__,c__13458__auto___21569,out){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_21565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21565[0] = state_machine__13394__auto__);
(statearr_21565[1] = 1);
return statearr_21565;
});
var state_machine__13394__auto____1 = (function (state_21539){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_21539);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e21566){if((e21566 instanceof Object))
{var ex__13397__auto__ = e21566;var statearr_21567_21584 = state_21539;(statearr_21567_21584[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21539);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21585 = state_21539;
state_21539 = G__21585;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_21539){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_21539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___21569,out))
})();var state__13460__auto__ = (function (){var statearr_21568 = f__13459__auto__.call(null);(statearr_21568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___21569);
return statearr_21568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___21569,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13458__auto___21728 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13458__auto___21728,out){
return (function (){var f__13459__auto__ = (function (){var switch__13393__auto__ = ((function (c__13458__auto___21728,out){
return (function (state_21698){var state_val_21699 = (state_21698[1]);if((state_val_21699 === 7))
{var inst_21694 = (state_21698[2]);var state_21698__$1 = state_21698;var statearr_21700_21729 = state_21698__$1;(statearr_21700_21729[2] = inst_21694);
(statearr_21700_21729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21699 === 1))
{var inst_21657 = [];var inst_21658 = inst_21657;var inst_21659 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_21698__$1 = (function (){var statearr_21701 = state_21698;(statearr_21701[7] = inst_21659);
(statearr_21701[8] = inst_21658);
return statearr_21701;
})();var statearr_21702_21730 = state_21698__$1;(statearr_21702_21730[2] = null);
(statearr_21702_21730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21699 === 4))
{var inst_21662 = (state_21698[9]);var inst_21662__$1 = (state_21698[2]);var inst_21663 = (inst_21662__$1 == null);var inst_21664 = cljs.core.not.call(null,inst_21663);var state_21698__$1 = (function (){var statearr_21703 = state_21698;(statearr_21703[9] = inst_21662__$1);
return statearr_21703;
})();if(inst_21664)
{var statearr_21704_21731 = state_21698__$1;(statearr_21704_21731[1] = 5);
} else
{var statearr_21705_21732 = state_21698__$1;(statearr_21705_21732[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21699 === 15))
{var inst_21688 = (state_21698[2]);var state_21698__$1 = state_21698;var statearr_21706_21733 = state_21698__$1;(statearr_21706_21733[2] = inst_21688);
(statearr_21706_21733[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21699 === 13))
{var state_21698__$1 = state_21698;var statearr_21707_21734 = state_21698__$1;(statearr_21707_21734[2] = null);
(statearr_21707_21734[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21699 === 6))
{var inst_21658 = (state_21698[8]);var inst_21683 = inst_21658.length;var inst_21684 = (inst_21683 > 0);var state_21698__$1 = state_21698;if(cljs.core.truth_(inst_21684))
{var statearr_21708_21735 = state_21698__$1;(statearr_21708_21735[1] = 12);
} else
{var statearr_21709_21736 = state_21698__$1;(statearr_21709_21736[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21699 === 3))
{var inst_21696 = (state_21698[2]);var state_21698__$1 = state_21698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21698__$1,inst_21696);
} else
{if((state_val_21699 === 12))
{var inst_21658 = (state_21698[8]);var inst_21686 = cljs.core.vec.call(null,inst_21658);var state_21698__$1 = state_21698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21698__$1,15,out,inst_21686);
} else
{if((state_val_21699 === 2))
{var state_21698__$1 = state_21698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21698__$1,4,ch);
} else
{if((state_val_21699 === 11))
{var inst_21666 = (state_21698[10]);var inst_21662 = (state_21698[9]);var inst_21676 = (state_21698[2]);var inst_21677 = [];var inst_21678 = inst_21677.push(inst_21662);var inst_21658 = inst_21677;var inst_21659 = inst_21666;var state_21698__$1 = (function (){var statearr_21710 = state_21698;(statearr_21710[7] = inst_21659);
(statearr_21710[11] = inst_21678);
(statearr_21710[12] = inst_21676);
(statearr_21710[8] = inst_21658);
return statearr_21710;
})();var statearr_21711_21737 = state_21698__$1;(statearr_21711_21737[2] = null);
(statearr_21711_21737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21699 === 9))
{var inst_21658 = (state_21698[8]);var inst_21674 = cljs.core.vec.call(null,inst_21658);var state_21698__$1 = state_21698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21698__$1,11,out,inst_21674);
} else
{if((state_val_21699 === 5))
{var inst_21659 = (state_21698[7]);var inst_21666 = (state_21698[10]);var inst_21662 = (state_21698[9]);var inst_21666__$1 = f.call(null,inst_21662);var inst_21667 = cljs.core._EQ_.call(null,inst_21666__$1,inst_21659);var inst_21668 = cljs.core.keyword_identical_QMARK_.call(null,inst_21659,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_21669 = (inst_21667) || (inst_21668);var state_21698__$1 = (function (){var statearr_21712 = state_21698;(statearr_21712[10] = inst_21666__$1);
return statearr_21712;
})();if(cljs.core.truth_(inst_21669))
{var statearr_21713_21738 = state_21698__$1;(statearr_21713_21738[1] = 8);
} else
{var statearr_21714_21739 = state_21698__$1;(statearr_21714_21739[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21699 === 14))
{var inst_21691 = (state_21698[2]);var inst_21692 = cljs.core.async.close_BANG_.call(null,out);var state_21698__$1 = (function (){var statearr_21716 = state_21698;(statearr_21716[13] = inst_21691);
return statearr_21716;
})();var statearr_21717_21740 = state_21698__$1;(statearr_21717_21740[2] = inst_21692);
(statearr_21717_21740[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21699 === 10))
{var inst_21681 = (state_21698[2]);var state_21698__$1 = state_21698;var statearr_21718_21741 = state_21698__$1;(statearr_21718_21741[2] = inst_21681);
(statearr_21718_21741[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21699 === 8))
{var inst_21658 = (state_21698[8]);var inst_21666 = (state_21698[10]);var inst_21662 = (state_21698[9]);var inst_21671 = inst_21658.push(inst_21662);var tmp21715 = inst_21658;var inst_21658__$1 = tmp21715;var inst_21659 = inst_21666;var state_21698__$1 = (function (){var statearr_21719 = state_21698;(statearr_21719[7] = inst_21659);
(statearr_21719[8] = inst_21658__$1);
(statearr_21719[14] = inst_21671);
return statearr_21719;
})();var statearr_21720_21742 = state_21698__$1;(statearr_21720_21742[2] = null);
(statearr_21720_21742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13458__auto___21728,out))
;return ((function (switch__13393__auto__,c__13458__auto___21728,out){
return (function() {
var state_machine__13394__auto__ = null;
var state_machine__13394__auto____0 = (function (){var statearr_21724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21724[0] = state_machine__13394__auto__);
(statearr_21724[1] = 1);
return statearr_21724;
});
var state_machine__13394__auto____1 = (function (state_21698){while(true){
var ret_value__13395__auto__ = (function (){try{while(true){
var result__13396__auto__ = switch__13393__auto__.call(null,state_21698);if(cljs.core.keyword_identical_QMARK_.call(null,result__13396__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13396__auto__;
}
break;
}
}catch (e21725){if((e21725 instanceof Object))
{var ex__13397__auto__ = e21725;var statearr_21726_21743 = state_21698;(statearr_21726_21743[5] = ex__13397__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21698);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13395__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21744 = state_21698;
state_21698 = G__21744;
continue;
}
} else
{return ret_value__13395__auto__;
}
break;
}
});
state_machine__13394__auto__ = function(state_21698){
switch(arguments.length){
case 0:
return state_machine__13394__auto____0.call(this);
case 1:
return state_machine__13394__auto____1.call(this,state_21698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13394__auto____0;
state_machine__13394__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13394__auto____1;
return state_machine__13394__auto__;
})()
;})(switch__13393__auto__,c__13458__auto___21728,out))
})();var state__13460__auto__ = (function (){var statearr_21727 = f__13459__auto__.call(null);(statearr_21727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13458__auto___21728);
return statearr_21727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13460__auto__);
});})(c__13458__auto___21728,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
