// Compiled by ClojureScript 0.0-2261
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t593818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t593818 = (function (f,fn_handler,meta593819){
this.f = f;
this.fn_handler = fn_handler;
this.meta593819 = meta593819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t593818.cljs$lang$type = true;
cljs.core.async.t593818.cljs$lang$ctorStr = "cljs.core.async/t593818";
cljs.core.async.t593818.cljs$lang$ctorPrWriter = (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"cljs.core.async/t593818");
});
cljs.core.async.t593818.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t593818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t593818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t593818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_593820){var self__ = this;
var _593820__$1 = this;return self__.meta593819;
});
cljs.core.async.t593818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_593820,meta593819__$1){var self__ = this;
var _593820__$1 = this;return (new cljs.core.async.t593818(self__.f,self__.fn_handler,meta593819__$1));
});
cljs.core.async.__GT_t593818 = (function __GT_t593818(f__$1,fn_handler__$1,meta593819){return (new cljs.core.async.t593818(f__$1,fn_handler__$1,meta593819));
});
}
return (new cljs.core.async.t593818(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__593822 = buff;if(G__593822)
{var bit__8256__auto__ = null;if(cljs.core.truth_((function (){var or__7606__auto__ = bit__8256__auto__;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return G__593822.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__593822.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__593822);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__593822);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{var val_593823 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_593823);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_593823,ret){
return (function (){return fn1.call(null,val_593823);
});})(val_593823,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8462__auto___593824 = n;var x_593825 = (0);while(true){
if((x_593825 < n__8462__auto___593824))
{(a[x_593825] = (0));
{
var G__593826 = (x_593825 + (1));
x_593825 = G__593826;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__593827 = (i + (1));
i = G__593827;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t593831 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t593831 = (function (flag,alt_flag,meta593832){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta593832 = meta593832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t593831.cljs$lang$type = true;
cljs.core.async.t593831.cljs$lang$ctorStr = "cljs.core.async/t593831";
cljs.core.async.t593831.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"cljs.core.async/t593831");
});})(flag))
;
cljs.core.async.t593831.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t593831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t593831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t593831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_593833){var self__ = this;
var _593833__$1 = this;return self__.meta593832;
});})(flag))
;
cljs.core.async.t593831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_593833,meta593832__$1){var self__ = this;
var _593833__$1 = this;return (new cljs.core.async.t593831(self__.flag,self__.alt_flag,meta593832__$1));
});})(flag))
;
cljs.core.async.__GT_t593831 = ((function (flag){
return (function __GT_t593831(flag__$1,alt_flag__$1,meta593832){return (new cljs.core.async.t593831(flag__$1,alt_flag__$1,meta593832));
});})(flag))
;
}
return (new cljs.core.async.t593831(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t593837 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t593837 = (function (cb,flag,alt_handler,meta593838){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta593838 = meta593838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t593837.cljs$lang$type = true;
cljs.core.async.t593837.cljs$lang$ctorStr = "cljs.core.async/t593837";
cljs.core.async.t593837.cljs$lang$ctorPrWriter = (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"cljs.core.async/t593837");
});
cljs.core.async.t593837.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t593837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t593837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t593837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_593839){var self__ = this;
var _593839__$1 = this;return self__.meta593838;
});
cljs.core.async.t593837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_593839,meta593838__$1){var self__ = this;
var _593839__$1 = this;return (new cljs.core.async.t593837(self__.cb,self__.flag,self__.alt_handler,meta593838__$1));
});
cljs.core.async.__GT_t593837 = (function __GT_t593837(cb__$1,flag__$1,alt_handler__$1,meta593838){return (new cljs.core.async.t593837(cb__$1,flag__$1,alt_handler__$1,meta593838));
});
}
return (new cljs.core.async.t593837(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__593840_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__593840_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__593841_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__593841_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7606__auto__ = wport;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__593842 = (i + (1));
i = G__593842;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7606__auto__ = ret;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7594__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7594__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7594__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__593843){var map__593845 = p__593843;var map__593845__$1 = ((cljs.core.seq_QMARK_.call(null,map__593845))?cljs.core.apply.call(null,cljs.core.hash_map,map__593845):map__593845);var opts = map__593845__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__593843 = null;if (arguments.length > 1) {
  p__593843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__593843);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__593846){
var ports = cljs.core.first(arglist__593846);
var p__593843 = cljs.core.rest(arglist__593846);
return alts_BANG___delegate(ports,p__593843);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t593854 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t593854 = (function (ch,f,map_LT_,meta593855){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta593855 = meta593855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t593854.cljs$lang$type = true;
cljs.core.async.t593854.cljs$lang$ctorStr = "cljs.core.async/t593854";
cljs.core.async.t593854.cljs$lang$ctorPrWriter = (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"cljs.core.async/t593854");
});
cljs.core.async.t593854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t593854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t593854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t593854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t593857 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t593857 = (function (fn1,_,meta593855,ch,f,map_LT_,meta593858){
this.fn1 = fn1;
this._ = _;
this.meta593855 = meta593855;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta593858 = meta593858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t593857.cljs$lang$type = true;
cljs.core.async.t593857.cljs$lang$ctorStr = "cljs.core.async/t593857";
cljs.core.async.t593857.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"cljs.core.async/t593857");
});})(___$1))
;
cljs.core.async.t593857.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t593857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t593857.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t593857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__593847_SHARP_){return f1.call(null,(((p1__593847_SHARP_ == null))?null:self__.f.call(null,p1__593847_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t593857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_593859){var self__ = this;
var _593859__$1 = this;return self__.meta593858;
});})(___$1))
;
cljs.core.async.t593857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_593859,meta593858__$1){var self__ = this;
var _593859__$1 = this;return (new cljs.core.async.t593857(self__.fn1,self__._,self__.meta593855,self__.ch,self__.f,self__.map_LT_,meta593858__$1));
});})(___$1))
;
cljs.core.async.__GT_t593857 = ((function (___$1){
return (function __GT_t593857(fn1__$1,___$2,meta593855__$1,ch__$2,f__$2,map_LT___$2,meta593858){return (new cljs.core.async.t593857(fn1__$1,___$2,meta593855__$1,ch__$2,f__$2,map_LT___$2,meta593858));
});})(___$1))
;
}
return (new cljs.core.async.t593857(fn1,___$1,self__.meta593855,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7594__auto__ = ret;if(cljs.core.truth_(and__7594__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7594__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t593854.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t593854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t593854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t593854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_593856){var self__ = this;
var _593856__$1 = this;return self__.meta593855;
});
cljs.core.async.t593854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_593856,meta593855__$1){var self__ = this;
var _593856__$1 = this;return (new cljs.core.async.t593854(self__.ch,self__.f,self__.map_LT_,meta593855__$1));
});
cljs.core.async.__GT_t593854 = (function __GT_t593854(ch__$1,f__$1,map_LT___$1,meta593855){return (new cljs.core.async.t593854(ch__$1,f__$1,map_LT___$1,meta593855));
});
}
return (new cljs.core.async.t593854(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t593863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t593863 = (function (ch,f,map_GT_,meta593864){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta593864 = meta593864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t593863.cljs$lang$type = true;
cljs.core.async.t593863.cljs$lang$ctorStr = "cljs.core.async/t593863";
cljs.core.async.t593863.cljs$lang$ctorPrWriter = (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"cljs.core.async/t593863");
});
cljs.core.async.t593863.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t593863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t593863.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t593863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t593863.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t593863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t593863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_593865){var self__ = this;
var _593865__$1 = this;return self__.meta593864;
});
cljs.core.async.t593863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_593865,meta593864__$1){var self__ = this;
var _593865__$1 = this;return (new cljs.core.async.t593863(self__.ch,self__.f,self__.map_GT_,meta593864__$1));
});
cljs.core.async.__GT_t593863 = (function __GT_t593863(ch__$1,f__$1,map_GT___$1,meta593864){return (new cljs.core.async.t593863(ch__$1,f__$1,map_GT___$1,meta593864));
});
}
return (new cljs.core.async.t593863(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t593869 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t593869 = (function (ch,p,filter_GT_,meta593870){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta593870 = meta593870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t593869.cljs$lang$type = true;
cljs.core.async.t593869.cljs$lang$ctorStr = "cljs.core.async/t593869";
cljs.core.async.t593869.cljs$lang$ctorPrWriter = (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"cljs.core.async/t593869");
});
cljs.core.async.t593869.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t593869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t593869.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t593869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t593869.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t593869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t593869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t593869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_593871){var self__ = this;
var _593871__$1 = this;return self__.meta593870;
});
cljs.core.async.t593869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_593871,meta593870__$1){var self__ = this;
var _593871__$1 = this;return (new cljs.core.async.t593869(self__.ch,self__.p,self__.filter_GT_,meta593870__$1));
});
cljs.core.async.__GT_t593869 = (function __GT_t593869(ch__$1,p__$1,filter_GT___$1,meta593870){return (new cljs.core.async.t593869(ch__$1,p__$1,filter_GT___$1,meta593870));
});
}
return (new cljs.core.async.t593869(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10566__auto___593954 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___593954,out){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___593954,out){
return (function (state_593933){var state_val_593934 = (state_593933[(1)]);if((state_val_593934 === (7)))
{var inst_593929 = (state_593933[(2)]);var state_593933__$1 = state_593933;var statearr_593935_593955 = state_593933__$1;(statearr_593935_593955[(2)] = inst_593929);
(statearr_593935_593955[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_593934 === (1)))
{var state_593933__$1 = state_593933;var statearr_593936_593956 = state_593933__$1;(statearr_593936_593956[(2)] = null);
(statearr_593936_593956[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_593934 === (4)))
{var inst_593915 = (state_593933[(7)]);var inst_593915__$1 = (state_593933[(2)]);var inst_593916 = (inst_593915__$1 == null);var state_593933__$1 = (function (){var statearr_593937 = state_593933;(statearr_593937[(7)] = inst_593915__$1);
return statearr_593937;
})();if(cljs.core.truth_(inst_593916))
{var statearr_593938_593957 = state_593933__$1;(statearr_593938_593957[(1)] = (5));
} else
{var statearr_593939_593958 = state_593933__$1;(statearr_593939_593958[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_593934 === (6)))
{var inst_593915 = (state_593933[(7)]);var inst_593920 = p.call(null,inst_593915);var state_593933__$1 = state_593933;if(cljs.core.truth_(inst_593920))
{var statearr_593940_593959 = state_593933__$1;(statearr_593940_593959[(1)] = (8));
} else
{var statearr_593941_593960 = state_593933__$1;(statearr_593941_593960[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_593934 === (3)))
{var inst_593931 = (state_593933[(2)]);var state_593933__$1 = state_593933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_593933__$1,inst_593931);
} else
{if((state_val_593934 === (2)))
{var state_593933__$1 = state_593933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_593933__$1,(4),ch);
} else
{if((state_val_593934 === (11)))
{var inst_593923 = (state_593933[(2)]);var state_593933__$1 = state_593933;var statearr_593942_593961 = state_593933__$1;(statearr_593942_593961[(2)] = inst_593923);
(statearr_593942_593961[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_593934 === (9)))
{var state_593933__$1 = state_593933;var statearr_593943_593962 = state_593933__$1;(statearr_593943_593962[(2)] = null);
(statearr_593943_593962[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_593934 === (5)))
{var inst_593918 = cljs.core.async.close_BANG_.call(null,out);var state_593933__$1 = state_593933;var statearr_593944_593963 = state_593933__$1;(statearr_593944_593963[(2)] = inst_593918);
(statearr_593944_593963[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_593934 === (10)))
{var inst_593926 = (state_593933[(2)]);var state_593933__$1 = (function (){var statearr_593945 = state_593933;(statearr_593945[(8)] = inst_593926);
return statearr_593945;
})();var statearr_593946_593964 = state_593933__$1;(statearr_593946_593964[(2)] = null);
(statearr_593946_593964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_593934 === (8)))
{var inst_593915 = (state_593933[(7)]);var state_593933__$1 = state_593933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_593933__$1,(11),out,inst_593915);
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
});})(c__10566__auto___593954,out))
;return ((function (switch__10551__auto__,c__10566__auto___593954,out){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_593950 = [null,null,null,null,null,null,null,null,null];(statearr_593950[(0)] = state_machine__10552__auto__);
(statearr_593950[(1)] = (1));
return statearr_593950;
});
var state_machine__10552__auto____1 = (function (state_593933){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_593933);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e593951){if((e593951 instanceof Object))
{var ex__10555__auto__ = e593951;var statearr_593952_593965 = state_593933;(statearr_593952_593965[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_593933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e593951;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__593966 = state_593933;
state_593933 = G__593966;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_593933){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_593933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___593954,out))
})();var state__10568__auto__ = (function (){var statearr_593953 = f__10567__auto__.call(null);(statearr_593953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___593954);
return statearr_593953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___593954,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10566__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto__){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto__){
return (function (state_594132){var state_val_594133 = (state_594132[(1)]);if((state_val_594133 === (7)))
{var inst_594128 = (state_594132[(2)]);var state_594132__$1 = state_594132;var statearr_594134_594175 = state_594132__$1;(statearr_594134_594175[(2)] = inst_594128);
(statearr_594134_594175[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (20)))
{var inst_594098 = (state_594132[(7)]);var inst_594109 = (state_594132[(2)]);var inst_594110 = cljs.core.next.call(null,inst_594098);var inst_594084 = inst_594110;var inst_594085 = null;var inst_594086 = (0);var inst_594087 = (0);var state_594132__$1 = (function (){var statearr_594135 = state_594132;(statearr_594135[(8)] = inst_594109);
(statearr_594135[(9)] = inst_594084);
(statearr_594135[(10)] = inst_594086);
(statearr_594135[(11)] = inst_594085);
(statearr_594135[(12)] = inst_594087);
return statearr_594135;
})();var statearr_594136_594176 = state_594132__$1;(statearr_594136_594176[(2)] = null);
(statearr_594136_594176[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (1)))
{var state_594132__$1 = state_594132;var statearr_594137_594177 = state_594132__$1;(statearr_594137_594177[(2)] = null);
(statearr_594137_594177[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (4)))
{var inst_594073 = (state_594132[(13)]);var inst_594073__$1 = (state_594132[(2)]);var inst_594074 = (inst_594073__$1 == null);var state_594132__$1 = (function (){var statearr_594138 = state_594132;(statearr_594138[(13)] = inst_594073__$1);
return statearr_594138;
})();if(cljs.core.truth_(inst_594074))
{var statearr_594139_594178 = state_594132__$1;(statearr_594139_594178[(1)] = (5));
} else
{var statearr_594140_594179 = state_594132__$1;(statearr_594140_594179[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (15)))
{var state_594132__$1 = state_594132;var statearr_594144_594180 = state_594132__$1;(statearr_594144_594180[(2)] = null);
(statearr_594144_594180[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (21)))
{var state_594132__$1 = state_594132;var statearr_594145_594181 = state_594132__$1;(statearr_594145_594181[(2)] = null);
(statearr_594145_594181[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (13)))
{var inst_594084 = (state_594132[(9)]);var inst_594086 = (state_594132[(10)]);var inst_594085 = (state_594132[(11)]);var inst_594087 = (state_594132[(12)]);var inst_594094 = (state_594132[(2)]);var inst_594095 = (inst_594087 + (1));var tmp594141 = inst_594084;var tmp594142 = inst_594086;var tmp594143 = inst_594085;var inst_594084__$1 = tmp594141;var inst_594085__$1 = tmp594143;var inst_594086__$1 = tmp594142;var inst_594087__$1 = inst_594095;var state_594132__$1 = (function (){var statearr_594146 = state_594132;(statearr_594146[(9)] = inst_594084__$1);
(statearr_594146[(14)] = inst_594094);
(statearr_594146[(10)] = inst_594086__$1);
(statearr_594146[(11)] = inst_594085__$1);
(statearr_594146[(12)] = inst_594087__$1);
return statearr_594146;
})();var statearr_594147_594182 = state_594132__$1;(statearr_594147_594182[(2)] = null);
(statearr_594147_594182[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (22)))
{var state_594132__$1 = state_594132;var statearr_594148_594183 = state_594132__$1;(statearr_594148_594183[(2)] = null);
(statearr_594148_594183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (6)))
{var inst_594073 = (state_594132[(13)]);var inst_594082 = f.call(null,inst_594073);var inst_594083 = cljs.core.seq.call(null,inst_594082);var inst_594084 = inst_594083;var inst_594085 = null;var inst_594086 = (0);var inst_594087 = (0);var state_594132__$1 = (function (){var statearr_594149 = state_594132;(statearr_594149[(9)] = inst_594084);
(statearr_594149[(10)] = inst_594086);
(statearr_594149[(11)] = inst_594085);
(statearr_594149[(12)] = inst_594087);
return statearr_594149;
})();var statearr_594150_594184 = state_594132__$1;(statearr_594150_594184[(2)] = null);
(statearr_594150_594184[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (17)))
{var inst_594098 = (state_594132[(7)]);var inst_594102 = cljs.core.chunk_first.call(null,inst_594098);var inst_594103 = cljs.core.chunk_rest.call(null,inst_594098);var inst_594104 = cljs.core.count.call(null,inst_594102);var inst_594084 = inst_594103;var inst_594085 = inst_594102;var inst_594086 = inst_594104;var inst_594087 = (0);var state_594132__$1 = (function (){var statearr_594151 = state_594132;(statearr_594151[(9)] = inst_594084);
(statearr_594151[(10)] = inst_594086);
(statearr_594151[(11)] = inst_594085);
(statearr_594151[(12)] = inst_594087);
return statearr_594151;
})();var statearr_594152_594185 = state_594132__$1;(statearr_594152_594185[(2)] = null);
(statearr_594152_594185[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (3)))
{var inst_594130 = (state_594132[(2)]);var state_594132__$1 = state_594132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_594132__$1,inst_594130);
} else
{if((state_val_594133 === (12)))
{var inst_594118 = (state_594132[(2)]);var state_594132__$1 = state_594132;var statearr_594153_594186 = state_594132__$1;(statearr_594153_594186[(2)] = inst_594118);
(statearr_594153_594186[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (2)))
{var state_594132__$1 = state_594132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_594132__$1,(4),in$);
} else
{if((state_val_594133 === (23)))
{var inst_594126 = (state_594132[(2)]);var state_594132__$1 = state_594132;var statearr_594154_594187 = state_594132__$1;(statearr_594154_594187[(2)] = inst_594126);
(statearr_594154_594187[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (19)))
{var inst_594113 = (state_594132[(2)]);var state_594132__$1 = state_594132;var statearr_594155_594188 = state_594132__$1;(statearr_594155_594188[(2)] = inst_594113);
(statearr_594155_594188[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (11)))
{var inst_594084 = (state_594132[(9)]);var inst_594098 = (state_594132[(7)]);var inst_594098__$1 = cljs.core.seq.call(null,inst_594084);var state_594132__$1 = (function (){var statearr_594156 = state_594132;(statearr_594156[(7)] = inst_594098__$1);
return statearr_594156;
})();if(inst_594098__$1)
{var statearr_594157_594189 = state_594132__$1;(statearr_594157_594189[(1)] = (14));
} else
{var statearr_594158_594190 = state_594132__$1;(statearr_594158_594190[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (9)))
{var inst_594120 = (state_594132[(2)]);var inst_594121 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_594132__$1 = (function (){var statearr_594159 = state_594132;(statearr_594159[(15)] = inst_594120);
return statearr_594159;
})();if(cljs.core.truth_(inst_594121))
{var statearr_594160_594191 = state_594132__$1;(statearr_594160_594191[(1)] = (21));
} else
{var statearr_594161_594192 = state_594132__$1;(statearr_594161_594192[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (5)))
{var inst_594076 = cljs.core.async.close_BANG_.call(null,out);var state_594132__$1 = state_594132;var statearr_594162_594193 = state_594132__$1;(statearr_594162_594193[(2)] = inst_594076);
(statearr_594162_594193[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (14)))
{var inst_594098 = (state_594132[(7)]);var inst_594100 = cljs.core.chunked_seq_QMARK_.call(null,inst_594098);var state_594132__$1 = state_594132;if(inst_594100)
{var statearr_594163_594194 = state_594132__$1;(statearr_594163_594194[(1)] = (17));
} else
{var statearr_594164_594195 = state_594132__$1;(statearr_594164_594195[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (16)))
{var inst_594116 = (state_594132[(2)]);var state_594132__$1 = state_594132;var statearr_594165_594196 = state_594132__$1;(statearr_594165_594196[(2)] = inst_594116);
(statearr_594165_594196[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594133 === (10)))
{var inst_594085 = (state_594132[(11)]);var inst_594087 = (state_594132[(12)]);var inst_594092 = cljs.core._nth.call(null,inst_594085,inst_594087);var state_594132__$1 = state_594132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_594132__$1,(13),out,inst_594092);
} else
{if((state_val_594133 === (18)))
{var inst_594098 = (state_594132[(7)]);var inst_594107 = cljs.core.first.call(null,inst_594098);var state_594132__$1 = state_594132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_594132__$1,(20),out,inst_594107);
} else
{if((state_val_594133 === (8)))
{var inst_594086 = (state_594132[(10)]);var inst_594087 = (state_594132[(12)]);var inst_594089 = (inst_594087 < inst_594086);var inst_594090 = inst_594089;var state_594132__$1 = state_594132;if(cljs.core.truth_(inst_594090))
{var statearr_594166_594197 = state_594132__$1;(statearr_594166_594197[(1)] = (10));
} else
{var statearr_594167_594198 = state_594132__$1;(statearr_594167_594198[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto__))
;return ((function (switch__10551__auto__,c__10566__auto__){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_594171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_594171[(0)] = state_machine__10552__auto__);
(statearr_594171[(1)] = (1));
return statearr_594171;
});
var state_machine__10552__auto____1 = (function (state_594132){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_594132);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e594172){if((e594172 instanceof Object))
{var ex__10555__auto__ = e594172;var statearr_594173_594199 = state_594132;(statearr_594173_594199[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_594132);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e594172;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__594200 = state_594132;
state_594132 = G__594200;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_594132){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_594132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto__))
})();var state__10568__auto__ = (function (){var statearr_594174 = f__10567__auto__.call(null);(statearr_594174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto__);
return statearr_594174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto__))
);
return c__10566__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10566__auto___594295 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___594295){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___594295){
return (function (state_594271){var state_val_594272 = (state_594271[(1)]);if((state_val_594272 === (7)))
{var inst_594267 = (state_594271[(2)]);var state_594271__$1 = state_594271;var statearr_594273_594296 = state_594271__$1;(statearr_594273_594296[(2)] = inst_594267);
(statearr_594273_594296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594272 === (1)))
{var state_594271__$1 = state_594271;var statearr_594274_594297 = state_594271__$1;(statearr_594274_594297[(2)] = null);
(statearr_594274_594297[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594272 === (4)))
{var inst_594250 = (state_594271[(7)]);var inst_594250__$1 = (state_594271[(2)]);var inst_594251 = (inst_594250__$1 == null);var state_594271__$1 = (function (){var statearr_594275 = state_594271;(statearr_594275[(7)] = inst_594250__$1);
return statearr_594275;
})();if(cljs.core.truth_(inst_594251))
{var statearr_594276_594298 = state_594271__$1;(statearr_594276_594298[(1)] = (5));
} else
{var statearr_594277_594299 = state_594271__$1;(statearr_594277_594299[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594272 === (13)))
{var state_594271__$1 = state_594271;var statearr_594278_594300 = state_594271__$1;(statearr_594278_594300[(2)] = null);
(statearr_594278_594300[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594272 === (6)))
{var inst_594250 = (state_594271[(7)]);var state_594271__$1 = state_594271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_594271__$1,(11),to,inst_594250);
} else
{if((state_val_594272 === (3)))
{var inst_594269 = (state_594271[(2)]);var state_594271__$1 = state_594271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_594271__$1,inst_594269);
} else
{if((state_val_594272 === (12)))
{var state_594271__$1 = state_594271;var statearr_594279_594301 = state_594271__$1;(statearr_594279_594301[(2)] = null);
(statearr_594279_594301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594272 === (2)))
{var state_594271__$1 = state_594271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_594271__$1,(4),from);
} else
{if((state_val_594272 === (11)))
{var inst_594260 = (state_594271[(2)]);var state_594271__$1 = state_594271;if(cljs.core.truth_(inst_594260))
{var statearr_594280_594302 = state_594271__$1;(statearr_594280_594302[(1)] = (12));
} else
{var statearr_594281_594303 = state_594271__$1;(statearr_594281_594303[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594272 === (9)))
{var state_594271__$1 = state_594271;var statearr_594282_594304 = state_594271__$1;(statearr_594282_594304[(2)] = null);
(statearr_594282_594304[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594272 === (5)))
{var state_594271__$1 = state_594271;if(cljs.core.truth_(close_QMARK_))
{var statearr_594283_594305 = state_594271__$1;(statearr_594283_594305[(1)] = (8));
} else
{var statearr_594284_594306 = state_594271__$1;(statearr_594284_594306[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594272 === (14)))
{var inst_594265 = (state_594271[(2)]);var state_594271__$1 = state_594271;var statearr_594285_594307 = state_594271__$1;(statearr_594285_594307[(2)] = inst_594265);
(statearr_594285_594307[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594272 === (10)))
{var inst_594257 = (state_594271[(2)]);var state_594271__$1 = state_594271;var statearr_594286_594308 = state_594271__$1;(statearr_594286_594308[(2)] = inst_594257);
(statearr_594286_594308[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594272 === (8)))
{var inst_594254 = cljs.core.async.close_BANG_.call(null,to);var state_594271__$1 = state_594271;var statearr_594287_594309 = state_594271__$1;(statearr_594287_594309[(2)] = inst_594254);
(statearr_594287_594309[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto___594295))
;return ((function (switch__10551__auto__,c__10566__auto___594295){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_594291 = [null,null,null,null,null,null,null,null];(statearr_594291[(0)] = state_machine__10552__auto__);
(statearr_594291[(1)] = (1));
return statearr_594291;
});
var state_machine__10552__auto____1 = (function (state_594271){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_594271);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e594292){if((e594292 instanceof Object))
{var ex__10555__auto__ = e594292;var statearr_594293_594310 = state_594271;(statearr_594293_594310[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_594271);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e594292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__594311 = state_594271;
state_594271 = G__594311;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_594271){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_594271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___594295))
})();var state__10568__auto__ = (function (){var statearr_594294 = f__10567__auto__.call(null);(statearr_594294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___594295);
return statearr_594294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___594295))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10566__auto___594412 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___594412,tc,fc){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___594412,tc,fc){
return (function (state_594387){var state_val_594388 = (state_594387[(1)]);if((state_val_594388 === (7)))
{var inst_594383 = (state_594387[(2)]);var state_594387__$1 = state_594387;var statearr_594389_594413 = state_594387__$1;(statearr_594389_594413[(2)] = inst_594383);
(statearr_594389_594413[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594388 === (1)))
{var state_594387__$1 = state_594387;var statearr_594390_594414 = state_594387__$1;(statearr_594390_594414[(2)] = null);
(statearr_594390_594414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594388 === (4)))
{var inst_594364 = (state_594387[(7)]);var inst_594364__$1 = (state_594387[(2)]);var inst_594365 = (inst_594364__$1 == null);var state_594387__$1 = (function (){var statearr_594391 = state_594387;(statearr_594391[(7)] = inst_594364__$1);
return statearr_594391;
})();if(cljs.core.truth_(inst_594365))
{var statearr_594392_594415 = state_594387__$1;(statearr_594392_594415[(1)] = (5));
} else
{var statearr_594393_594416 = state_594387__$1;(statearr_594393_594416[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594388 === (13)))
{var state_594387__$1 = state_594387;var statearr_594394_594417 = state_594387__$1;(statearr_594394_594417[(2)] = null);
(statearr_594394_594417[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594388 === (6)))
{var inst_594364 = (state_594387[(7)]);var inst_594370 = p.call(null,inst_594364);var state_594387__$1 = state_594387;if(cljs.core.truth_(inst_594370))
{var statearr_594395_594418 = state_594387__$1;(statearr_594395_594418[(1)] = (9));
} else
{var statearr_594396_594419 = state_594387__$1;(statearr_594396_594419[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594388 === (3)))
{var inst_594385 = (state_594387[(2)]);var state_594387__$1 = state_594387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_594387__$1,inst_594385);
} else
{if((state_val_594388 === (12)))
{var state_594387__$1 = state_594387;var statearr_594397_594420 = state_594387__$1;(statearr_594397_594420[(2)] = null);
(statearr_594397_594420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594388 === (2)))
{var state_594387__$1 = state_594387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_594387__$1,(4),ch);
} else
{if((state_val_594388 === (11)))
{var inst_594364 = (state_594387[(7)]);var inst_594374 = (state_594387[(2)]);var state_594387__$1 = state_594387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_594387__$1,(8),inst_594374,inst_594364);
} else
{if((state_val_594388 === (9)))
{var state_594387__$1 = state_594387;var statearr_594398_594421 = state_594387__$1;(statearr_594398_594421[(2)] = tc);
(statearr_594398_594421[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594388 === (5)))
{var inst_594367 = cljs.core.async.close_BANG_.call(null,tc);var inst_594368 = cljs.core.async.close_BANG_.call(null,fc);var state_594387__$1 = (function (){var statearr_594399 = state_594387;(statearr_594399[(8)] = inst_594367);
return statearr_594399;
})();var statearr_594400_594422 = state_594387__$1;(statearr_594400_594422[(2)] = inst_594368);
(statearr_594400_594422[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594388 === (14)))
{var inst_594381 = (state_594387[(2)]);var state_594387__$1 = state_594387;var statearr_594401_594423 = state_594387__$1;(statearr_594401_594423[(2)] = inst_594381);
(statearr_594401_594423[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594388 === (10)))
{var state_594387__$1 = state_594387;var statearr_594402_594424 = state_594387__$1;(statearr_594402_594424[(2)] = fc);
(statearr_594402_594424[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594388 === (8)))
{var inst_594376 = (state_594387[(2)]);var state_594387__$1 = state_594387;if(cljs.core.truth_(inst_594376))
{var statearr_594403_594425 = state_594387__$1;(statearr_594403_594425[(1)] = (12));
} else
{var statearr_594404_594426 = state_594387__$1;(statearr_594404_594426[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto___594412,tc,fc))
;return ((function (switch__10551__auto__,c__10566__auto___594412,tc,fc){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_594408 = [null,null,null,null,null,null,null,null,null];(statearr_594408[(0)] = state_machine__10552__auto__);
(statearr_594408[(1)] = (1));
return statearr_594408;
});
var state_machine__10552__auto____1 = (function (state_594387){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_594387);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e594409){if((e594409 instanceof Object))
{var ex__10555__auto__ = e594409;var statearr_594410_594427 = state_594387;(statearr_594410_594427[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_594387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e594409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__594428 = state_594387;
state_594387 = G__594428;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_594387){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_594387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___594412,tc,fc))
})();var state__10568__auto__ = (function (){var statearr_594411 = f__10567__auto__.call(null);(statearr_594411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___594412);
return statearr_594411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___594412,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10566__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto__){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto__){
return (function (state_594475){var state_val_594476 = (state_594475[(1)]);if((state_val_594476 === (7)))
{var inst_594471 = (state_594475[(2)]);var state_594475__$1 = state_594475;var statearr_594477_594493 = state_594475__$1;(statearr_594477_594493[(2)] = inst_594471);
(statearr_594477_594493[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594476 === (6)))
{var inst_594464 = (state_594475[(7)]);var inst_594461 = (state_594475[(8)]);var inst_594468 = f.call(null,inst_594461,inst_594464);var inst_594461__$1 = inst_594468;var state_594475__$1 = (function (){var statearr_594478 = state_594475;(statearr_594478[(8)] = inst_594461__$1);
return statearr_594478;
})();var statearr_594479_594494 = state_594475__$1;(statearr_594479_594494[(2)] = null);
(statearr_594479_594494[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594476 === (5)))
{var inst_594461 = (state_594475[(8)]);var state_594475__$1 = state_594475;var statearr_594480_594495 = state_594475__$1;(statearr_594480_594495[(2)] = inst_594461);
(statearr_594480_594495[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594476 === (4)))
{var inst_594464 = (state_594475[(7)]);var inst_594464__$1 = (state_594475[(2)]);var inst_594465 = (inst_594464__$1 == null);var state_594475__$1 = (function (){var statearr_594481 = state_594475;(statearr_594481[(7)] = inst_594464__$1);
return statearr_594481;
})();if(cljs.core.truth_(inst_594465))
{var statearr_594482_594496 = state_594475__$1;(statearr_594482_594496[(1)] = (5));
} else
{var statearr_594483_594497 = state_594475__$1;(statearr_594483_594497[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594476 === (3)))
{var inst_594473 = (state_594475[(2)]);var state_594475__$1 = state_594475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_594475__$1,inst_594473);
} else
{if((state_val_594476 === (2)))
{var state_594475__$1 = state_594475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_594475__$1,(4),ch);
} else
{if((state_val_594476 === (1)))
{var inst_594461 = init;var state_594475__$1 = (function (){var statearr_594484 = state_594475;(statearr_594484[(8)] = inst_594461);
return statearr_594484;
})();var statearr_594485_594498 = state_594475__$1;(statearr_594485_594498[(2)] = null);
(statearr_594485_594498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10566__auto__))
;return ((function (switch__10551__auto__,c__10566__auto__){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_594489 = [null,null,null,null,null,null,null,null,null];(statearr_594489[(0)] = state_machine__10552__auto__);
(statearr_594489[(1)] = (1));
return statearr_594489;
});
var state_machine__10552__auto____1 = (function (state_594475){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_594475);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e594490){if((e594490 instanceof Object))
{var ex__10555__auto__ = e594490;var statearr_594491_594499 = state_594475;(statearr_594491_594499[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_594475);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e594490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__594500 = state_594475;
state_594475 = G__594500;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_594475){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_594475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto__))
})();var state__10568__auto__ = (function (){var statearr_594492 = f__10567__auto__.call(null);(statearr_594492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto__);
return statearr_594492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto__))
);
return c__10566__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10566__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto__){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto__){
return (function (state_594574){var state_val_594575 = (state_594574[(1)]);if((state_val_594575 === (7)))
{var inst_594556 = (state_594574[(2)]);var state_594574__$1 = state_594574;var statearr_594576_594599 = state_594574__$1;(statearr_594576_594599[(2)] = inst_594556);
(statearr_594576_594599[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594575 === (1)))
{var inst_594550 = cljs.core.seq.call(null,coll);var inst_594551 = inst_594550;var state_594574__$1 = (function (){var statearr_594577 = state_594574;(statearr_594577[(7)] = inst_594551);
return statearr_594577;
})();var statearr_594578_594600 = state_594574__$1;(statearr_594578_594600[(2)] = null);
(statearr_594578_594600[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594575 === (4)))
{var inst_594551 = (state_594574[(7)]);var inst_594554 = cljs.core.first.call(null,inst_594551);var state_594574__$1 = state_594574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_594574__$1,(7),ch,inst_594554);
} else
{if((state_val_594575 === (13)))
{var inst_594568 = (state_594574[(2)]);var state_594574__$1 = state_594574;var statearr_594579_594601 = state_594574__$1;(statearr_594579_594601[(2)] = inst_594568);
(statearr_594579_594601[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594575 === (6)))
{var inst_594559 = (state_594574[(2)]);var state_594574__$1 = state_594574;if(cljs.core.truth_(inst_594559))
{var statearr_594580_594602 = state_594574__$1;(statearr_594580_594602[(1)] = (8));
} else
{var statearr_594581_594603 = state_594574__$1;(statearr_594581_594603[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594575 === (3)))
{var inst_594572 = (state_594574[(2)]);var state_594574__$1 = state_594574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_594574__$1,inst_594572);
} else
{if((state_val_594575 === (12)))
{var state_594574__$1 = state_594574;var statearr_594582_594604 = state_594574__$1;(statearr_594582_594604[(2)] = null);
(statearr_594582_594604[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594575 === (2)))
{var inst_594551 = (state_594574[(7)]);var state_594574__$1 = state_594574;if(cljs.core.truth_(inst_594551))
{var statearr_594583_594605 = state_594574__$1;(statearr_594583_594605[(1)] = (4));
} else
{var statearr_594584_594606 = state_594574__$1;(statearr_594584_594606[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594575 === (11)))
{var inst_594565 = cljs.core.async.close_BANG_.call(null,ch);var state_594574__$1 = state_594574;var statearr_594585_594607 = state_594574__$1;(statearr_594585_594607[(2)] = inst_594565);
(statearr_594585_594607[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594575 === (9)))
{var state_594574__$1 = state_594574;if(cljs.core.truth_(close_QMARK_))
{var statearr_594586_594608 = state_594574__$1;(statearr_594586_594608[(1)] = (11));
} else
{var statearr_594587_594609 = state_594574__$1;(statearr_594587_594609[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594575 === (5)))
{var inst_594551 = (state_594574[(7)]);var state_594574__$1 = state_594574;var statearr_594588_594610 = state_594574__$1;(statearr_594588_594610[(2)] = inst_594551);
(statearr_594588_594610[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594575 === (10)))
{var inst_594570 = (state_594574[(2)]);var state_594574__$1 = state_594574;var statearr_594589_594611 = state_594574__$1;(statearr_594589_594611[(2)] = inst_594570);
(statearr_594589_594611[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594575 === (8)))
{var inst_594551 = (state_594574[(7)]);var inst_594561 = cljs.core.next.call(null,inst_594551);var inst_594551__$1 = inst_594561;var state_594574__$1 = (function (){var statearr_594590 = state_594574;(statearr_594590[(7)] = inst_594551__$1);
return statearr_594590;
})();var statearr_594591_594612 = state_594574__$1;(statearr_594591_594612[(2)] = null);
(statearr_594591_594612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto__))
;return ((function (switch__10551__auto__,c__10566__auto__){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_594595 = [null,null,null,null,null,null,null,null];(statearr_594595[(0)] = state_machine__10552__auto__);
(statearr_594595[(1)] = (1));
return statearr_594595;
});
var state_machine__10552__auto____1 = (function (state_594574){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_594574);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e594596){if((e594596 instanceof Object))
{var ex__10555__auto__ = e594596;var statearr_594597_594613 = state_594574;(statearr_594597_594613[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_594574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e594596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__594614 = state_594574;
state_594574 = G__594614;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_594574){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_594574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto__))
})();var state__10568__auto__ = (function (){var statearr_594598 = f__10567__auto__.call(null);(statearr_594598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto__);
return statearr_594598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto__))
);
return c__10566__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj594616 = {};return obj594616;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7594__auto__ = _;if(and__7594__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7594__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8233__auto__ = (((_ == null))?null:_);return (function (){var or__7606__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj594618 = {};return obj594618;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7594__auto__ = m;if(and__7594__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7594__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8233__auto__ = (((m == null))?null:m);return (function (){var or__7606__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7594__auto__ = m;if(and__7594__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7594__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8233__auto__ = (((m == null))?null:m);return (function (){var or__7606__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7594__auto__ = m;if(and__7594__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7594__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8233__auto__ = (((m == null))?null:m);return (function (){var or__7606__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t594840 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t594840 = (function (cs,ch,mult,meta594841){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta594841 = meta594841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t594840.cljs$lang$type = true;
cljs.core.async.t594840.cljs$lang$ctorStr = "cljs.core.async/t594840";
cljs.core.async.t594840.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"cljs.core.async/t594840");
});})(cs))
;
cljs.core.async.t594840.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t594840.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t594840.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t594840.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t594840.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t594840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t594840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_594842){var self__ = this;
var _594842__$1 = this;return self__.meta594841;
});})(cs))
;
cljs.core.async.t594840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_594842,meta594841__$1){var self__ = this;
var _594842__$1 = this;return (new cljs.core.async.t594840(self__.cs,self__.ch,self__.mult,meta594841__$1));
});})(cs))
;
cljs.core.async.__GT_t594840 = ((function (cs){
return (function __GT_t594840(cs__$1,ch__$1,mult__$1,meta594841){return (new cljs.core.async.t594840(cs__$1,ch__$1,mult__$1,meta594841));
});})(cs))
;
}
return (new cljs.core.async.t594840(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10566__auto___595061 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___595061,cs,m,dchan,dctr,done){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___595061,cs,m,dchan,dctr,done){
return (function (state_594973){var state_val_594974 = (state_594973[(1)]);if((state_val_594974 === (7)))
{var inst_594969 = (state_594973[(2)]);var state_594973__$1 = state_594973;var statearr_594975_595062 = state_594973__$1;(statearr_594975_595062[(2)] = inst_594969);
(statearr_594975_595062[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (20)))
{var inst_594874 = (state_594973[(7)]);var inst_594884 = cljs.core.first.call(null,inst_594874);var inst_594885 = cljs.core.nth.call(null,inst_594884,(0),null);var inst_594886 = cljs.core.nth.call(null,inst_594884,(1),null);var state_594973__$1 = (function (){var statearr_594976 = state_594973;(statearr_594976[(8)] = inst_594885);
return statearr_594976;
})();if(cljs.core.truth_(inst_594886))
{var statearr_594977_595063 = state_594973__$1;(statearr_594977_595063[(1)] = (22));
} else
{var statearr_594978_595064 = state_594973__$1;(statearr_594978_595064[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (27)))
{var inst_594845 = (state_594973[(9)]);var inst_594921 = (state_594973[(10)]);var inst_594914 = (state_594973[(11)]);var inst_594916 = (state_594973[(12)]);var inst_594921__$1 = cljs.core._nth.call(null,inst_594914,inst_594916);var inst_594922 = cljs.core.async.put_BANG_.call(null,inst_594921__$1,inst_594845,done);var state_594973__$1 = (function (){var statearr_594979 = state_594973;(statearr_594979[(10)] = inst_594921__$1);
return statearr_594979;
})();if(cljs.core.truth_(inst_594922))
{var statearr_594980_595065 = state_594973__$1;(statearr_594980_595065[(1)] = (30));
} else
{var statearr_594981_595066 = state_594973__$1;(statearr_594981_595066[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (1)))
{var state_594973__$1 = state_594973;var statearr_594982_595067 = state_594973__$1;(statearr_594982_595067[(2)] = null);
(statearr_594982_595067[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (24)))
{var inst_594874 = (state_594973[(7)]);var inst_594891 = (state_594973[(2)]);var inst_594892 = cljs.core.next.call(null,inst_594874);var inst_594854 = inst_594892;var inst_594855 = null;var inst_594856 = (0);var inst_594857 = (0);var state_594973__$1 = (function (){var statearr_594983 = state_594973;(statearr_594983[(13)] = inst_594857);
(statearr_594983[(14)] = inst_594856);
(statearr_594983[(15)] = inst_594855);
(statearr_594983[(16)] = inst_594891);
(statearr_594983[(17)] = inst_594854);
return statearr_594983;
})();var statearr_594984_595068 = state_594973__$1;(statearr_594984_595068[(2)] = null);
(statearr_594984_595068[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (39)))
{var state_594973__$1 = state_594973;var statearr_594988_595069 = state_594973__$1;(statearr_594988_595069[(2)] = null);
(statearr_594988_595069[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (4)))
{var inst_594845 = (state_594973[(9)]);var inst_594845__$1 = (state_594973[(2)]);var inst_594846 = (inst_594845__$1 == null);var state_594973__$1 = (function (){var statearr_594989 = state_594973;(statearr_594989[(9)] = inst_594845__$1);
return statearr_594989;
})();if(cljs.core.truth_(inst_594846))
{var statearr_594990_595070 = state_594973__$1;(statearr_594990_595070[(1)] = (5));
} else
{var statearr_594991_595071 = state_594973__$1;(statearr_594991_595071[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (15)))
{var inst_594857 = (state_594973[(13)]);var inst_594856 = (state_594973[(14)]);var inst_594855 = (state_594973[(15)]);var inst_594854 = (state_594973[(17)]);var inst_594870 = (state_594973[(2)]);var inst_594871 = (inst_594857 + (1));var tmp594985 = inst_594856;var tmp594986 = inst_594855;var tmp594987 = inst_594854;var inst_594854__$1 = tmp594987;var inst_594855__$1 = tmp594986;var inst_594856__$1 = tmp594985;var inst_594857__$1 = inst_594871;var state_594973__$1 = (function (){var statearr_594992 = state_594973;(statearr_594992[(13)] = inst_594857__$1);
(statearr_594992[(18)] = inst_594870);
(statearr_594992[(14)] = inst_594856__$1);
(statearr_594992[(15)] = inst_594855__$1);
(statearr_594992[(17)] = inst_594854__$1);
return statearr_594992;
})();var statearr_594993_595072 = state_594973__$1;(statearr_594993_595072[(2)] = null);
(statearr_594993_595072[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (21)))
{var inst_594895 = (state_594973[(2)]);var state_594973__$1 = state_594973;var statearr_594997_595073 = state_594973__$1;(statearr_594997_595073[(2)] = inst_594895);
(statearr_594997_595073[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (31)))
{var inst_594921 = (state_594973[(10)]);var inst_594925 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_594926 = cljs.core.async.untap_STAR_.call(null,m,inst_594921);var state_594973__$1 = (function (){var statearr_594998 = state_594973;(statearr_594998[(19)] = inst_594925);
return statearr_594998;
})();var statearr_594999_595074 = state_594973__$1;(statearr_594999_595074[(2)] = inst_594926);
(statearr_594999_595074[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (32)))
{var inst_594915 = (state_594973[(20)]);var inst_594914 = (state_594973[(11)]);var inst_594916 = (state_594973[(12)]);var inst_594913 = (state_594973[(21)]);var inst_594928 = (state_594973[(2)]);var inst_594929 = (inst_594916 + (1));var tmp594994 = inst_594915;var tmp594995 = inst_594914;var tmp594996 = inst_594913;var inst_594913__$1 = tmp594996;var inst_594914__$1 = tmp594995;var inst_594915__$1 = tmp594994;var inst_594916__$1 = inst_594929;var state_594973__$1 = (function (){var statearr_595000 = state_594973;(statearr_595000[(22)] = inst_594928);
(statearr_595000[(20)] = inst_594915__$1);
(statearr_595000[(11)] = inst_594914__$1);
(statearr_595000[(12)] = inst_594916__$1);
(statearr_595000[(21)] = inst_594913__$1);
return statearr_595000;
})();var statearr_595001_595075 = state_594973__$1;(statearr_595001_595075[(2)] = null);
(statearr_595001_595075[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (40)))
{var inst_594941 = (state_594973[(23)]);var inst_594945 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_594946 = cljs.core.async.untap_STAR_.call(null,m,inst_594941);var state_594973__$1 = (function (){var statearr_595002 = state_594973;(statearr_595002[(24)] = inst_594945);
return statearr_595002;
})();var statearr_595003_595076 = state_594973__$1;(statearr_595003_595076[(2)] = inst_594946);
(statearr_595003_595076[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (33)))
{var inst_594932 = (state_594973[(25)]);var inst_594934 = cljs.core.chunked_seq_QMARK_.call(null,inst_594932);var state_594973__$1 = state_594973;if(inst_594934)
{var statearr_595004_595077 = state_594973__$1;(statearr_595004_595077[(1)] = (36));
} else
{var statearr_595005_595078 = state_594973__$1;(statearr_595005_595078[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (13)))
{var inst_594864 = (state_594973[(26)]);var inst_594867 = cljs.core.async.close_BANG_.call(null,inst_594864);var state_594973__$1 = state_594973;var statearr_595006_595079 = state_594973__$1;(statearr_595006_595079[(2)] = inst_594867);
(statearr_595006_595079[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (22)))
{var inst_594885 = (state_594973[(8)]);var inst_594888 = cljs.core.async.close_BANG_.call(null,inst_594885);var state_594973__$1 = state_594973;var statearr_595007_595080 = state_594973__$1;(statearr_595007_595080[(2)] = inst_594888);
(statearr_595007_595080[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (36)))
{var inst_594932 = (state_594973[(25)]);var inst_594936 = cljs.core.chunk_first.call(null,inst_594932);var inst_594937 = cljs.core.chunk_rest.call(null,inst_594932);var inst_594938 = cljs.core.count.call(null,inst_594936);var inst_594913 = inst_594937;var inst_594914 = inst_594936;var inst_594915 = inst_594938;var inst_594916 = (0);var state_594973__$1 = (function (){var statearr_595008 = state_594973;(statearr_595008[(20)] = inst_594915);
(statearr_595008[(11)] = inst_594914);
(statearr_595008[(12)] = inst_594916);
(statearr_595008[(21)] = inst_594913);
return statearr_595008;
})();var statearr_595009_595081 = state_594973__$1;(statearr_595009_595081[(2)] = null);
(statearr_595009_595081[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (41)))
{var inst_594932 = (state_594973[(25)]);var inst_594948 = (state_594973[(2)]);var inst_594949 = cljs.core.next.call(null,inst_594932);var inst_594913 = inst_594949;var inst_594914 = null;var inst_594915 = (0);var inst_594916 = (0);var state_594973__$1 = (function (){var statearr_595010 = state_594973;(statearr_595010[(27)] = inst_594948);
(statearr_595010[(20)] = inst_594915);
(statearr_595010[(11)] = inst_594914);
(statearr_595010[(12)] = inst_594916);
(statearr_595010[(21)] = inst_594913);
return statearr_595010;
})();var statearr_595011_595082 = state_594973__$1;(statearr_595011_595082[(2)] = null);
(statearr_595011_595082[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (43)))
{var state_594973__$1 = state_594973;var statearr_595012_595083 = state_594973__$1;(statearr_595012_595083[(2)] = null);
(statearr_595012_595083[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (29)))
{var inst_594957 = (state_594973[(2)]);var state_594973__$1 = state_594973;var statearr_595013_595084 = state_594973__$1;(statearr_595013_595084[(2)] = inst_594957);
(statearr_595013_595084[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (44)))
{var inst_594966 = (state_594973[(2)]);var state_594973__$1 = (function (){var statearr_595014 = state_594973;(statearr_595014[(28)] = inst_594966);
return statearr_595014;
})();var statearr_595015_595085 = state_594973__$1;(statearr_595015_595085[(2)] = null);
(statearr_595015_595085[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (6)))
{var inst_594905 = (state_594973[(29)]);var inst_594904 = cljs.core.deref.call(null,cs);var inst_594905__$1 = cljs.core.keys.call(null,inst_594904);var inst_594906 = cljs.core.count.call(null,inst_594905__$1);var inst_594907 = cljs.core.reset_BANG_.call(null,dctr,inst_594906);var inst_594912 = cljs.core.seq.call(null,inst_594905__$1);var inst_594913 = inst_594912;var inst_594914 = null;var inst_594915 = (0);var inst_594916 = (0);var state_594973__$1 = (function (){var statearr_595016 = state_594973;(statearr_595016[(29)] = inst_594905__$1);
(statearr_595016[(20)] = inst_594915);
(statearr_595016[(11)] = inst_594914);
(statearr_595016[(12)] = inst_594916);
(statearr_595016[(21)] = inst_594913);
(statearr_595016[(30)] = inst_594907);
return statearr_595016;
})();var statearr_595017_595086 = state_594973__$1;(statearr_595017_595086[(2)] = null);
(statearr_595017_595086[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (28)))
{var inst_594932 = (state_594973[(25)]);var inst_594913 = (state_594973[(21)]);var inst_594932__$1 = cljs.core.seq.call(null,inst_594913);var state_594973__$1 = (function (){var statearr_595018 = state_594973;(statearr_595018[(25)] = inst_594932__$1);
return statearr_595018;
})();if(inst_594932__$1)
{var statearr_595019_595087 = state_594973__$1;(statearr_595019_595087[(1)] = (33));
} else
{var statearr_595020_595088 = state_594973__$1;(statearr_595020_595088[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (25)))
{var inst_594915 = (state_594973[(20)]);var inst_594916 = (state_594973[(12)]);var inst_594918 = (inst_594916 < inst_594915);var inst_594919 = inst_594918;var state_594973__$1 = state_594973;if(cljs.core.truth_(inst_594919))
{var statearr_595021_595089 = state_594973__$1;(statearr_595021_595089[(1)] = (27));
} else
{var statearr_595022_595090 = state_594973__$1;(statearr_595022_595090[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (34)))
{var state_594973__$1 = state_594973;var statearr_595023_595091 = state_594973__$1;(statearr_595023_595091[(2)] = null);
(statearr_595023_595091[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (17)))
{var state_594973__$1 = state_594973;var statearr_595024_595092 = state_594973__$1;(statearr_595024_595092[(2)] = null);
(statearr_595024_595092[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (3)))
{var inst_594971 = (state_594973[(2)]);var state_594973__$1 = state_594973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_594973__$1,inst_594971);
} else
{if((state_val_594974 === (12)))
{var inst_594900 = (state_594973[(2)]);var state_594973__$1 = state_594973;var statearr_595025_595093 = state_594973__$1;(statearr_595025_595093[(2)] = inst_594900);
(statearr_595025_595093[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (2)))
{var state_594973__$1 = state_594973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_594973__$1,(4),ch);
} else
{if((state_val_594974 === (23)))
{var state_594973__$1 = state_594973;var statearr_595026_595094 = state_594973__$1;(statearr_595026_595094[(2)] = null);
(statearr_595026_595094[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (35)))
{var inst_594955 = (state_594973[(2)]);var state_594973__$1 = state_594973;var statearr_595027_595095 = state_594973__$1;(statearr_595027_595095[(2)] = inst_594955);
(statearr_595027_595095[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (19)))
{var inst_594874 = (state_594973[(7)]);var inst_594878 = cljs.core.chunk_first.call(null,inst_594874);var inst_594879 = cljs.core.chunk_rest.call(null,inst_594874);var inst_594880 = cljs.core.count.call(null,inst_594878);var inst_594854 = inst_594879;var inst_594855 = inst_594878;var inst_594856 = inst_594880;var inst_594857 = (0);var state_594973__$1 = (function (){var statearr_595028 = state_594973;(statearr_595028[(13)] = inst_594857);
(statearr_595028[(14)] = inst_594856);
(statearr_595028[(15)] = inst_594855);
(statearr_595028[(17)] = inst_594854);
return statearr_595028;
})();var statearr_595029_595096 = state_594973__$1;(statearr_595029_595096[(2)] = null);
(statearr_595029_595096[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (11)))
{var inst_594874 = (state_594973[(7)]);var inst_594854 = (state_594973[(17)]);var inst_594874__$1 = cljs.core.seq.call(null,inst_594854);var state_594973__$1 = (function (){var statearr_595030 = state_594973;(statearr_595030[(7)] = inst_594874__$1);
return statearr_595030;
})();if(inst_594874__$1)
{var statearr_595031_595097 = state_594973__$1;(statearr_595031_595097[(1)] = (16));
} else
{var statearr_595032_595098 = state_594973__$1;(statearr_595032_595098[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (9)))
{var inst_594902 = (state_594973[(2)]);var state_594973__$1 = state_594973;var statearr_595033_595099 = state_594973__$1;(statearr_595033_595099[(2)] = inst_594902);
(statearr_595033_595099[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (5)))
{var inst_594852 = cljs.core.deref.call(null,cs);var inst_594853 = cljs.core.seq.call(null,inst_594852);var inst_594854 = inst_594853;var inst_594855 = null;var inst_594856 = (0);var inst_594857 = (0);var state_594973__$1 = (function (){var statearr_595034 = state_594973;(statearr_595034[(13)] = inst_594857);
(statearr_595034[(14)] = inst_594856);
(statearr_595034[(15)] = inst_594855);
(statearr_595034[(17)] = inst_594854);
return statearr_595034;
})();var statearr_595035_595100 = state_594973__$1;(statearr_595035_595100[(2)] = null);
(statearr_595035_595100[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (14)))
{var state_594973__$1 = state_594973;var statearr_595036_595101 = state_594973__$1;(statearr_595036_595101[(2)] = null);
(statearr_595036_595101[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (45)))
{var inst_594963 = (state_594973[(2)]);var state_594973__$1 = state_594973;var statearr_595037_595102 = state_594973__$1;(statearr_595037_595102[(2)] = inst_594963);
(statearr_595037_595102[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (26)))
{var inst_594905 = (state_594973[(29)]);var inst_594959 = (state_594973[(2)]);var inst_594960 = cljs.core.seq.call(null,inst_594905);var state_594973__$1 = (function (){var statearr_595038 = state_594973;(statearr_595038[(31)] = inst_594959);
return statearr_595038;
})();if(inst_594960)
{var statearr_595039_595103 = state_594973__$1;(statearr_595039_595103[(1)] = (42));
} else
{var statearr_595040_595104 = state_594973__$1;(statearr_595040_595104[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (16)))
{var inst_594874 = (state_594973[(7)]);var inst_594876 = cljs.core.chunked_seq_QMARK_.call(null,inst_594874);var state_594973__$1 = state_594973;if(inst_594876)
{var statearr_595041_595105 = state_594973__$1;(statearr_595041_595105[(1)] = (19));
} else
{var statearr_595042_595106 = state_594973__$1;(statearr_595042_595106[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (38)))
{var inst_594952 = (state_594973[(2)]);var state_594973__$1 = state_594973;var statearr_595043_595107 = state_594973__$1;(statearr_595043_595107[(2)] = inst_594952);
(statearr_595043_595107[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (30)))
{var state_594973__$1 = state_594973;var statearr_595044_595108 = state_594973__$1;(statearr_595044_595108[(2)] = null);
(statearr_595044_595108[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (10)))
{var inst_594857 = (state_594973[(13)]);var inst_594855 = (state_594973[(15)]);var inst_594863 = cljs.core._nth.call(null,inst_594855,inst_594857);var inst_594864 = cljs.core.nth.call(null,inst_594863,(0),null);var inst_594865 = cljs.core.nth.call(null,inst_594863,(1),null);var state_594973__$1 = (function (){var statearr_595045 = state_594973;(statearr_595045[(26)] = inst_594864);
return statearr_595045;
})();if(cljs.core.truth_(inst_594865))
{var statearr_595046_595109 = state_594973__$1;(statearr_595046_595109[(1)] = (13));
} else
{var statearr_595047_595110 = state_594973__$1;(statearr_595047_595110[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (18)))
{var inst_594898 = (state_594973[(2)]);var state_594973__$1 = state_594973;var statearr_595048_595111 = state_594973__$1;(statearr_595048_595111[(2)] = inst_594898);
(statearr_595048_595111[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (42)))
{var state_594973__$1 = state_594973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_594973__$1,(45),dchan);
} else
{if((state_val_594974 === (37)))
{var inst_594941 = (state_594973[(23)]);var inst_594845 = (state_594973[(9)]);var inst_594932 = (state_594973[(25)]);var inst_594941__$1 = cljs.core.first.call(null,inst_594932);var inst_594942 = cljs.core.async.put_BANG_.call(null,inst_594941__$1,inst_594845,done);var state_594973__$1 = (function (){var statearr_595049 = state_594973;(statearr_595049[(23)] = inst_594941__$1);
return statearr_595049;
})();if(cljs.core.truth_(inst_594942))
{var statearr_595050_595112 = state_594973__$1;(statearr_595050_595112[(1)] = (39));
} else
{var statearr_595051_595113 = state_594973__$1;(statearr_595051_595113[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_594974 === (8)))
{var inst_594857 = (state_594973[(13)]);var inst_594856 = (state_594973[(14)]);var inst_594859 = (inst_594857 < inst_594856);var inst_594860 = inst_594859;var state_594973__$1 = state_594973;if(cljs.core.truth_(inst_594860))
{var statearr_595052_595114 = state_594973__$1;(statearr_595052_595114[(1)] = (10));
} else
{var statearr_595053_595115 = state_594973__$1;(statearr_595053_595115[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto___595061,cs,m,dchan,dctr,done))
;return ((function (switch__10551__auto__,c__10566__auto___595061,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_595057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_595057[(0)] = state_machine__10552__auto__);
(statearr_595057[(1)] = (1));
return statearr_595057;
});
var state_machine__10552__auto____1 = (function (state_594973){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_594973);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e595058){if((e595058 instanceof Object))
{var ex__10555__auto__ = e595058;var statearr_595059_595116 = state_594973;(statearr_595059_595116[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_594973);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e595058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__595117 = state_594973;
state_594973 = G__595117;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_594973){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_594973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___595061,cs,m,dchan,dctr,done))
})();var state__10568__auto__ = (function (){var statearr_595060 = f__10567__auto__.call(null);(statearr_595060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___595061);
return statearr_595060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___595061,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj595119 = {};return obj595119;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7594__auto__ = m;if(and__7594__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7594__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8233__auto__ = (((m == null))?null:m);return (function (){var or__7606__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7594__auto__ = m;if(and__7594__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7594__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8233__auto__ = (((m == null))?null:m);return (function (){var or__7606__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7594__auto__ = m;if(and__7594__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7594__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8233__auto__ = (((m == null))?null:m);return (function (){var or__7606__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7594__auto__ = m;if(and__7594__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7594__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8233__auto__ = (((m == null))?null:m);return (function (){var or__7606__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7594__auto__ = m;if(and__7594__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7594__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8233__auto__ = (((m == null))?null:m);return (function (){var or__7606__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t595239 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t595239 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta595240){
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
this.meta595240 = meta595240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t595239.cljs$lang$type = true;
cljs.core.async.t595239.cljs$lang$ctorStr = "cljs.core.async/t595239";
cljs.core.async.t595239.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"cljs.core.async/t595239");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t595239.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t595239.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t595239.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t595239.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t595239.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t595239.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t595239.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t595239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t595239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_595241){var self__ = this;
var _595241__$1 = this;return self__.meta595240;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t595239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_595241,meta595240__$1){var self__ = this;
var _595241__$1 = this;return (new cljs.core.async.t595239(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta595240__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t595239 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t595239(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta595240){return (new cljs.core.async.t595239(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta595240));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t595239(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10566__auto___595358 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___595358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___595358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_595311){var state_val_595312 = (state_595311[(1)]);if((state_val_595312 === (7)))
{var inst_595255 = (state_595311[(7)]);var inst_595260 = cljs.core.apply.call(null,cljs.core.hash_map,inst_595255);var state_595311__$1 = state_595311;var statearr_595313_595359 = state_595311__$1;(statearr_595313_595359[(2)] = inst_595260);
(statearr_595313_595359[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (20)))
{var inst_595270 = (state_595311[(8)]);var state_595311__$1 = state_595311;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_595311__$1,(23),out,inst_595270);
} else
{if((state_val_595312 === (1)))
{var inst_595245 = (state_595311[(9)]);var inst_595245__$1 = calc_state.call(null);var inst_595246 = cljs.core.seq_QMARK_.call(null,inst_595245__$1);var state_595311__$1 = (function (){var statearr_595314 = state_595311;(statearr_595314[(9)] = inst_595245__$1);
return statearr_595314;
})();if(inst_595246)
{var statearr_595315_595360 = state_595311__$1;(statearr_595315_595360[(1)] = (2));
} else
{var statearr_595316_595361 = state_595311__$1;(statearr_595316_595361[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (24)))
{var inst_595263 = (state_595311[(10)]);var inst_595255 = inst_595263;var state_595311__$1 = (function (){var statearr_595317 = state_595311;(statearr_595317[(7)] = inst_595255);
return statearr_595317;
})();var statearr_595318_595362 = state_595311__$1;(statearr_595318_595362[(2)] = null);
(statearr_595318_595362[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (4)))
{var inst_595245 = (state_595311[(9)]);var inst_595251 = (state_595311[(2)]);var inst_595252 = cljs.core.get.call(null,inst_595251,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_595253 = cljs.core.get.call(null,inst_595251,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_595254 = cljs.core.get.call(null,inst_595251,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_595255 = inst_595245;var state_595311__$1 = (function (){var statearr_595319 = state_595311;(statearr_595319[(11)] = inst_595253);
(statearr_595319[(12)] = inst_595252);
(statearr_595319[(13)] = inst_595254);
(statearr_595319[(7)] = inst_595255);
return statearr_595319;
})();var statearr_595320_595363 = state_595311__$1;(statearr_595320_595363[(2)] = null);
(statearr_595320_595363[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (15)))
{var state_595311__$1 = state_595311;var statearr_595321_595364 = state_595311__$1;(statearr_595321_595364[(2)] = null);
(statearr_595321_595364[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (21)))
{var inst_595263 = (state_595311[(10)]);var inst_595255 = inst_595263;var state_595311__$1 = (function (){var statearr_595322 = state_595311;(statearr_595322[(7)] = inst_595255);
return statearr_595322;
})();var statearr_595323_595365 = state_595311__$1;(statearr_595323_595365[(2)] = null);
(statearr_595323_595365[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (13)))
{var inst_595307 = (state_595311[(2)]);var state_595311__$1 = state_595311;var statearr_595324_595366 = state_595311__$1;(statearr_595324_595366[(2)] = inst_595307);
(statearr_595324_595366[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (22)))
{var inst_595305 = (state_595311[(2)]);var state_595311__$1 = state_595311;var statearr_595325_595367 = state_595311__$1;(statearr_595325_595367[(2)] = inst_595305);
(statearr_595325_595367[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (6)))
{var inst_595309 = (state_595311[(2)]);var state_595311__$1 = state_595311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_595311__$1,inst_595309);
} else
{if((state_val_595312 === (25)))
{var state_595311__$1 = state_595311;var statearr_595326_595368 = state_595311__$1;(statearr_595326_595368[(2)] = null);
(statearr_595326_595368[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (17)))
{var inst_595285 = (state_595311[(14)]);var state_595311__$1 = state_595311;var statearr_595327_595369 = state_595311__$1;(statearr_595327_595369[(2)] = inst_595285);
(statearr_595327_595369[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (3)))
{var inst_595245 = (state_595311[(9)]);var state_595311__$1 = state_595311;var statearr_595328_595370 = state_595311__$1;(statearr_595328_595370[(2)] = inst_595245);
(statearr_595328_595370[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (12)))
{var inst_595266 = (state_595311[(15)]);var inst_595271 = (state_595311[(16)]);var inst_595285 = (state_595311[(14)]);var inst_595285__$1 = inst_595266.call(null,inst_595271);var state_595311__$1 = (function (){var statearr_595329 = state_595311;(statearr_595329[(14)] = inst_595285__$1);
return statearr_595329;
})();if(cljs.core.truth_(inst_595285__$1))
{var statearr_595330_595371 = state_595311__$1;(statearr_595330_595371[(1)] = (17));
} else
{var statearr_595331_595372 = state_595311__$1;(statearr_595331_595372[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (2)))
{var inst_595245 = (state_595311[(9)]);var inst_595248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_595245);var state_595311__$1 = state_595311;var statearr_595332_595373 = state_595311__$1;(statearr_595332_595373[(2)] = inst_595248);
(statearr_595332_595373[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (23)))
{var inst_595296 = (state_595311[(2)]);var state_595311__$1 = state_595311;if(cljs.core.truth_(inst_595296))
{var statearr_595333_595374 = state_595311__$1;(statearr_595333_595374[(1)] = (24));
} else
{var statearr_595334_595375 = state_595311__$1;(statearr_595334_595375[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (19)))
{var inst_595293 = (state_595311[(2)]);var state_595311__$1 = state_595311;if(cljs.core.truth_(inst_595293))
{var statearr_595335_595376 = state_595311__$1;(statearr_595335_595376[(1)] = (20));
} else
{var statearr_595336_595377 = state_595311__$1;(statearr_595336_595377[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (11)))
{var inst_595270 = (state_595311[(8)]);var inst_595276 = (inst_595270 == null);var state_595311__$1 = state_595311;if(cljs.core.truth_(inst_595276))
{var statearr_595337_595378 = state_595311__$1;(statearr_595337_595378[(1)] = (14));
} else
{var statearr_595338_595379 = state_595311__$1;(statearr_595338_595379[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (9)))
{var inst_595263 = (state_595311[(10)]);var inst_595263__$1 = (state_595311[(2)]);var inst_595264 = cljs.core.get.call(null,inst_595263__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_595265 = cljs.core.get.call(null,inst_595263__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_595266 = cljs.core.get.call(null,inst_595263__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_595311__$1 = (function (){var statearr_595339 = state_595311;(statearr_595339[(15)] = inst_595266);
(statearr_595339[(17)] = inst_595265);
(statearr_595339[(10)] = inst_595263__$1);
return statearr_595339;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_595311__$1,(10),inst_595264);
} else
{if((state_val_595312 === (5)))
{var inst_595255 = (state_595311[(7)]);var inst_595258 = cljs.core.seq_QMARK_.call(null,inst_595255);var state_595311__$1 = state_595311;if(inst_595258)
{var statearr_595340_595380 = state_595311__$1;(statearr_595340_595380[(1)] = (7));
} else
{var statearr_595341_595381 = state_595311__$1;(statearr_595341_595381[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (14)))
{var inst_595271 = (state_595311[(16)]);var inst_595278 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_595271);var state_595311__$1 = state_595311;var statearr_595342_595382 = state_595311__$1;(statearr_595342_595382[(2)] = inst_595278);
(statearr_595342_595382[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (26)))
{var inst_595301 = (state_595311[(2)]);var state_595311__$1 = state_595311;var statearr_595343_595383 = state_595311__$1;(statearr_595343_595383[(2)] = inst_595301);
(statearr_595343_595383[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (16)))
{var inst_595281 = (state_595311[(2)]);var inst_595282 = calc_state.call(null);var inst_595255 = inst_595282;var state_595311__$1 = (function (){var statearr_595344 = state_595311;(statearr_595344[(18)] = inst_595281);
(statearr_595344[(7)] = inst_595255);
return statearr_595344;
})();var statearr_595345_595384 = state_595311__$1;(statearr_595345_595384[(2)] = null);
(statearr_595345_595384[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (10)))
{var inst_595270 = (state_595311[(8)]);var inst_595271 = (state_595311[(16)]);var inst_595269 = (state_595311[(2)]);var inst_595270__$1 = cljs.core.nth.call(null,inst_595269,(0),null);var inst_595271__$1 = cljs.core.nth.call(null,inst_595269,(1),null);var inst_595272 = (inst_595270__$1 == null);var inst_595273 = cljs.core._EQ_.call(null,inst_595271__$1,change);var inst_595274 = (inst_595272) || (inst_595273);var state_595311__$1 = (function (){var statearr_595346 = state_595311;(statearr_595346[(8)] = inst_595270__$1);
(statearr_595346[(16)] = inst_595271__$1);
return statearr_595346;
})();if(cljs.core.truth_(inst_595274))
{var statearr_595347_595385 = state_595311__$1;(statearr_595347_595385[(1)] = (11));
} else
{var statearr_595348_595386 = state_595311__$1;(statearr_595348_595386[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (18)))
{var inst_595266 = (state_595311[(15)]);var inst_595271 = (state_595311[(16)]);var inst_595265 = (state_595311[(17)]);var inst_595288 = cljs.core.empty_QMARK_.call(null,inst_595266);var inst_595289 = inst_595265.call(null,inst_595271);var inst_595290 = cljs.core.not.call(null,inst_595289);var inst_595291 = (inst_595288) && (inst_595290);var state_595311__$1 = state_595311;var statearr_595349_595387 = state_595311__$1;(statearr_595349_595387[(2)] = inst_595291);
(statearr_595349_595387[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595312 === (8)))
{var inst_595255 = (state_595311[(7)]);var state_595311__$1 = state_595311;var statearr_595350_595388 = state_595311__$1;(statearr_595350_595388[(2)] = inst_595255);
(statearr_595350_595388[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto___595358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10551__auto__,c__10566__auto___595358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_595354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_595354[(0)] = state_machine__10552__auto__);
(statearr_595354[(1)] = (1));
return statearr_595354;
});
var state_machine__10552__auto____1 = (function (state_595311){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_595311);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e595355){if((e595355 instanceof Object))
{var ex__10555__auto__ = e595355;var statearr_595356_595389 = state_595311;(statearr_595356_595389[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_595311);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e595355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__595390 = state_595311;
state_595311 = G__595390;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_595311){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_595311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___595358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10568__auto__ = (function (){var statearr_595357 = f__10567__auto__.call(null);(statearr_595357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___595358);
return statearr_595357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___595358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj595392 = {};return obj595392;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7594__auto__ = p;if(and__7594__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7594__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8233__auto__ = (((p == null))?null:p);return (function (){var or__7606__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7594__auto__ = p;if(and__7594__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7594__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8233__auto__ = (((p == null))?null:p);return (function (){var or__7606__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7594__auto__ = p;if(and__7594__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7594__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8233__auto__ = (((p == null))?null:p);return (function (){var or__7606__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7594__auto__ = p;if(and__7594__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7594__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8233__auto__ = (((p == null))?null:p);return (function (){var or__7606__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
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
return (function (topic){var or__7606__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7606__auto__,mults){
return (function (p1__595393_SHARP_){if(cljs.core.truth_(p1__595393_SHARP_.call(null,topic)))
{return p1__595393_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__595393_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7606__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t595516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t595516 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta595517){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta595517 = meta595517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t595516.cljs$lang$type = true;
cljs.core.async.t595516.cljs$lang$ctorStr = "cljs.core.async/t595516";
cljs.core.async.t595516.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"cljs.core.async/t595516");
});})(mults,ensure_mult))
;
cljs.core.async.t595516.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t595516.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t595516.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t595516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t595516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t595516.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t595516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t595516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_595518){var self__ = this;
var _595518__$1 = this;return self__.meta595517;
});})(mults,ensure_mult))
;
cljs.core.async.t595516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_595518,meta595517__$1){var self__ = this;
var _595518__$1 = this;return (new cljs.core.async.t595516(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta595517__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t595516 = ((function (mults,ensure_mult){
return (function __GT_t595516(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta595517){return (new cljs.core.async.t595516(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta595517));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t595516(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10566__auto___595638 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___595638,mults,ensure_mult,p){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___595638,mults,ensure_mult,p){
return (function (state_595590){var state_val_595591 = (state_595590[(1)]);if((state_val_595591 === (7)))
{var inst_595586 = (state_595590[(2)]);var state_595590__$1 = state_595590;var statearr_595592_595639 = state_595590__$1;(statearr_595592_595639[(2)] = inst_595586);
(statearr_595592_595639[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (20)))
{var state_595590__$1 = state_595590;var statearr_595593_595640 = state_595590__$1;(statearr_595593_595640[(2)] = null);
(statearr_595593_595640[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (1)))
{var state_595590__$1 = state_595590;var statearr_595594_595641 = state_595590__$1;(statearr_595594_595641[(2)] = null);
(statearr_595594_595641[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (24)))
{var inst_595569 = (state_595590[(7)]);var inst_595578 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_595569);var state_595590__$1 = state_595590;var statearr_595595_595642 = state_595590__$1;(statearr_595595_595642[(2)] = inst_595578);
(statearr_595595_595642[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (4)))
{var inst_595521 = (state_595590[(8)]);var inst_595521__$1 = (state_595590[(2)]);var inst_595522 = (inst_595521__$1 == null);var state_595590__$1 = (function (){var statearr_595596 = state_595590;(statearr_595596[(8)] = inst_595521__$1);
return statearr_595596;
})();if(cljs.core.truth_(inst_595522))
{var statearr_595597_595643 = state_595590__$1;(statearr_595597_595643[(1)] = (5));
} else
{var statearr_595598_595644 = state_595590__$1;(statearr_595598_595644[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (15)))
{var inst_595563 = (state_595590[(2)]);var state_595590__$1 = state_595590;var statearr_595599_595645 = state_595590__$1;(statearr_595599_595645[(2)] = inst_595563);
(statearr_595599_595645[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (21)))
{var inst_595583 = (state_595590[(2)]);var state_595590__$1 = (function (){var statearr_595600 = state_595590;(statearr_595600[(9)] = inst_595583);
return statearr_595600;
})();var statearr_595601_595646 = state_595590__$1;(statearr_595601_595646[(2)] = null);
(statearr_595601_595646[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (13)))
{var inst_595545 = (state_595590[(10)]);var inst_595547 = cljs.core.chunked_seq_QMARK_.call(null,inst_595545);var state_595590__$1 = state_595590;if(inst_595547)
{var statearr_595602_595647 = state_595590__$1;(statearr_595602_595647[(1)] = (16));
} else
{var statearr_595603_595648 = state_595590__$1;(statearr_595603_595648[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (22)))
{var inst_595575 = (state_595590[(2)]);var state_595590__$1 = state_595590;if(cljs.core.truth_(inst_595575))
{var statearr_595604_595649 = state_595590__$1;(statearr_595604_595649[(1)] = (23));
} else
{var statearr_595605_595650 = state_595590__$1;(statearr_595605_595650[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (6)))
{var inst_595521 = (state_595590[(8)]);var inst_595571 = (state_595590[(11)]);var inst_595569 = (state_595590[(7)]);var inst_595569__$1 = topic_fn.call(null,inst_595521);var inst_595570 = cljs.core.deref.call(null,mults);var inst_595571__$1 = cljs.core.get.call(null,inst_595570,inst_595569__$1);var state_595590__$1 = (function (){var statearr_595606 = state_595590;(statearr_595606[(11)] = inst_595571__$1);
(statearr_595606[(7)] = inst_595569__$1);
return statearr_595606;
})();if(cljs.core.truth_(inst_595571__$1))
{var statearr_595607_595651 = state_595590__$1;(statearr_595607_595651[(1)] = (19));
} else
{var statearr_595608_595652 = state_595590__$1;(statearr_595608_595652[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (25)))
{var inst_595580 = (state_595590[(2)]);var state_595590__$1 = state_595590;var statearr_595609_595653 = state_595590__$1;(statearr_595609_595653[(2)] = inst_595580);
(statearr_595609_595653[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (17)))
{var inst_595545 = (state_595590[(10)]);var inst_595554 = cljs.core.first.call(null,inst_595545);var inst_595555 = cljs.core.async.muxch_STAR_.call(null,inst_595554);var inst_595556 = cljs.core.async.close_BANG_.call(null,inst_595555);var inst_595557 = cljs.core.next.call(null,inst_595545);var inst_595531 = inst_595557;var inst_595532 = null;var inst_595533 = (0);var inst_595534 = (0);var state_595590__$1 = (function (){var statearr_595610 = state_595590;(statearr_595610[(12)] = inst_595556);
(statearr_595610[(13)] = inst_595533);
(statearr_595610[(14)] = inst_595534);
(statearr_595610[(15)] = inst_595532);
(statearr_595610[(16)] = inst_595531);
return statearr_595610;
})();var statearr_595611_595654 = state_595590__$1;(statearr_595611_595654[(2)] = null);
(statearr_595611_595654[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (3)))
{var inst_595588 = (state_595590[(2)]);var state_595590__$1 = state_595590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_595590__$1,inst_595588);
} else
{if((state_val_595591 === (12)))
{var inst_595565 = (state_595590[(2)]);var state_595590__$1 = state_595590;var statearr_595612_595655 = state_595590__$1;(statearr_595612_595655[(2)] = inst_595565);
(statearr_595612_595655[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (2)))
{var state_595590__$1 = state_595590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_595590__$1,(4),ch);
} else
{if((state_val_595591 === (23)))
{var state_595590__$1 = state_595590;var statearr_595613_595656 = state_595590__$1;(statearr_595613_595656[(2)] = null);
(statearr_595613_595656[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (19)))
{var inst_595521 = (state_595590[(8)]);var inst_595571 = (state_595590[(11)]);var inst_595573 = cljs.core.async.muxch_STAR_.call(null,inst_595571);var state_595590__$1 = state_595590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_595590__$1,(22),inst_595573,inst_595521);
} else
{if((state_val_595591 === (11)))
{var inst_595545 = (state_595590[(10)]);var inst_595531 = (state_595590[(16)]);var inst_595545__$1 = cljs.core.seq.call(null,inst_595531);var state_595590__$1 = (function (){var statearr_595614 = state_595590;(statearr_595614[(10)] = inst_595545__$1);
return statearr_595614;
})();if(inst_595545__$1)
{var statearr_595615_595657 = state_595590__$1;(statearr_595615_595657[(1)] = (13));
} else
{var statearr_595616_595658 = state_595590__$1;(statearr_595616_595658[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (9)))
{var inst_595567 = (state_595590[(2)]);var state_595590__$1 = state_595590;var statearr_595617_595659 = state_595590__$1;(statearr_595617_595659[(2)] = inst_595567);
(statearr_595617_595659[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (5)))
{var inst_595528 = cljs.core.deref.call(null,mults);var inst_595529 = cljs.core.vals.call(null,inst_595528);var inst_595530 = cljs.core.seq.call(null,inst_595529);var inst_595531 = inst_595530;var inst_595532 = null;var inst_595533 = (0);var inst_595534 = (0);var state_595590__$1 = (function (){var statearr_595618 = state_595590;(statearr_595618[(13)] = inst_595533);
(statearr_595618[(14)] = inst_595534);
(statearr_595618[(15)] = inst_595532);
(statearr_595618[(16)] = inst_595531);
return statearr_595618;
})();var statearr_595619_595660 = state_595590__$1;(statearr_595619_595660[(2)] = null);
(statearr_595619_595660[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (14)))
{var state_595590__$1 = state_595590;var statearr_595623_595661 = state_595590__$1;(statearr_595623_595661[(2)] = null);
(statearr_595623_595661[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (16)))
{var inst_595545 = (state_595590[(10)]);var inst_595549 = cljs.core.chunk_first.call(null,inst_595545);var inst_595550 = cljs.core.chunk_rest.call(null,inst_595545);var inst_595551 = cljs.core.count.call(null,inst_595549);var inst_595531 = inst_595550;var inst_595532 = inst_595549;var inst_595533 = inst_595551;var inst_595534 = (0);var state_595590__$1 = (function (){var statearr_595624 = state_595590;(statearr_595624[(13)] = inst_595533);
(statearr_595624[(14)] = inst_595534);
(statearr_595624[(15)] = inst_595532);
(statearr_595624[(16)] = inst_595531);
return statearr_595624;
})();var statearr_595625_595662 = state_595590__$1;(statearr_595625_595662[(2)] = null);
(statearr_595625_595662[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (10)))
{var inst_595533 = (state_595590[(13)]);var inst_595534 = (state_595590[(14)]);var inst_595532 = (state_595590[(15)]);var inst_595531 = (state_595590[(16)]);var inst_595539 = cljs.core._nth.call(null,inst_595532,inst_595534);var inst_595540 = cljs.core.async.muxch_STAR_.call(null,inst_595539);var inst_595541 = cljs.core.async.close_BANG_.call(null,inst_595540);var inst_595542 = (inst_595534 + (1));var tmp595620 = inst_595533;var tmp595621 = inst_595532;var tmp595622 = inst_595531;var inst_595531__$1 = tmp595622;var inst_595532__$1 = tmp595621;var inst_595533__$1 = tmp595620;var inst_595534__$1 = inst_595542;var state_595590__$1 = (function (){var statearr_595626 = state_595590;(statearr_595626[(13)] = inst_595533__$1);
(statearr_595626[(14)] = inst_595534__$1);
(statearr_595626[(15)] = inst_595532__$1);
(statearr_595626[(16)] = inst_595531__$1);
(statearr_595626[(17)] = inst_595541);
return statearr_595626;
})();var statearr_595627_595663 = state_595590__$1;(statearr_595627_595663[(2)] = null);
(statearr_595627_595663[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (18)))
{var inst_595560 = (state_595590[(2)]);var state_595590__$1 = state_595590;var statearr_595628_595664 = state_595590__$1;(statearr_595628_595664[(2)] = inst_595560);
(statearr_595628_595664[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595591 === (8)))
{var inst_595533 = (state_595590[(13)]);var inst_595534 = (state_595590[(14)]);var inst_595536 = (inst_595534 < inst_595533);var inst_595537 = inst_595536;var state_595590__$1 = state_595590;if(cljs.core.truth_(inst_595537))
{var statearr_595629_595665 = state_595590__$1;(statearr_595629_595665[(1)] = (10));
} else
{var statearr_595630_595666 = state_595590__$1;(statearr_595630_595666[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto___595638,mults,ensure_mult,p))
;return ((function (switch__10551__auto__,c__10566__auto___595638,mults,ensure_mult,p){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_595634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_595634[(0)] = state_machine__10552__auto__);
(statearr_595634[(1)] = (1));
return statearr_595634;
});
var state_machine__10552__auto____1 = (function (state_595590){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_595590);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e595635){if((e595635 instanceof Object))
{var ex__10555__auto__ = e595635;var statearr_595636_595667 = state_595590;(statearr_595636_595667[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_595590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e595635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__595668 = state_595590;
state_595590 = G__595668;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_595590){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_595590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___595638,mults,ensure_mult,p))
})();var state__10568__auto__ = (function (){var statearr_595637 = f__10567__auto__.call(null);(statearr_595637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___595638);
return statearr_595637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___595638,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10566__auto___595805 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___595805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___595805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_595775){var state_val_595776 = (state_595775[(1)]);if((state_val_595776 === (7)))
{var state_595775__$1 = state_595775;var statearr_595777_595806 = state_595775__$1;(statearr_595777_595806[(2)] = null);
(statearr_595777_595806[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (1)))
{var state_595775__$1 = state_595775;var statearr_595778_595807 = state_595775__$1;(statearr_595778_595807[(2)] = null);
(statearr_595778_595807[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (4)))
{var inst_595739 = (state_595775[(7)]);var inst_595741 = (inst_595739 < cnt);var state_595775__$1 = state_595775;if(cljs.core.truth_(inst_595741))
{var statearr_595779_595808 = state_595775__$1;(statearr_595779_595808[(1)] = (6));
} else
{var statearr_595780_595809 = state_595775__$1;(statearr_595780_595809[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (15)))
{var inst_595771 = (state_595775[(2)]);var state_595775__$1 = state_595775;var statearr_595781_595810 = state_595775__$1;(statearr_595781_595810[(2)] = inst_595771);
(statearr_595781_595810[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (13)))
{var inst_595764 = cljs.core.async.close_BANG_.call(null,out);var state_595775__$1 = state_595775;var statearr_595782_595811 = state_595775__$1;(statearr_595782_595811[(2)] = inst_595764);
(statearr_595782_595811[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (6)))
{var state_595775__$1 = state_595775;var statearr_595783_595812 = state_595775__$1;(statearr_595783_595812[(2)] = null);
(statearr_595783_595812[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (3)))
{var inst_595773 = (state_595775[(2)]);var state_595775__$1 = state_595775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_595775__$1,inst_595773);
} else
{if((state_val_595776 === (12)))
{var inst_595761 = (state_595775[(8)]);var inst_595761__$1 = (state_595775[(2)]);var inst_595762 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_595761__$1);var state_595775__$1 = (function (){var statearr_595784 = state_595775;(statearr_595784[(8)] = inst_595761__$1);
return statearr_595784;
})();if(cljs.core.truth_(inst_595762))
{var statearr_595785_595813 = state_595775__$1;(statearr_595785_595813[(1)] = (13));
} else
{var statearr_595786_595814 = state_595775__$1;(statearr_595786_595814[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (2)))
{var inst_595738 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_595739 = (0);var state_595775__$1 = (function (){var statearr_595787 = state_595775;(statearr_595787[(7)] = inst_595739);
(statearr_595787[(9)] = inst_595738);
return statearr_595787;
})();var statearr_595788_595815 = state_595775__$1;(statearr_595788_595815[(2)] = null);
(statearr_595788_595815[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (11)))
{var inst_595739 = (state_595775[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_595775,(10),Object,null,(9));var inst_595748 = chs__$1.call(null,inst_595739);var inst_595749 = done.call(null,inst_595739);var inst_595750 = cljs.core.async.take_BANG_.call(null,inst_595748,inst_595749);var state_595775__$1 = state_595775;var statearr_595789_595816 = state_595775__$1;(statearr_595789_595816[(2)] = inst_595750);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_595775__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (9)))
{var inst_595739 = (state_595775[(7)]);var inst_595752 = (state_595775[(2)]);var inst_595753 = (inst_595739 + (1));var inst_595739__$1 = inst_595753;var state_595775__$1 = (function (){var statearr_595790 = state_595775;(statearr_595790[(7)] = inst_595739__$1);
(statearr_595790[(10)] = inst_595752);
return statearr_595790;
})();var statearr_595791_595817 = state_595775__$1;(statearr_595791_595817[(2)] = null);
(statearr_595791_595817[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (5)))
{var inst_595759 = (state_595775[(2)]);var state_595775__$1 = (function (){var statearr_595792 = state_595775;(statearr_595792[(11)] = inst_595759);
return statearr_595792;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_595775__$1,(12),dchan);
} else
{if((state_val_595776 === (14)))
{var inst_595761 = (state_595775[(8)]);var inst_595766 = cljs.core.apply.call(null,f,inst_595761);var state_595775__$1 = state_595775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_595775__$1,(16),out,inst_595766);
} else
{if((state_val_595776 === (16)))
{var inst_595768 = (state_595775[(2)]);var state_595775__$1 = (function (){var statearr_595793 = state_595775;(statearr_595793[(12)] = inst_595768);
return statearr_595793;
})();var statearr_595794_595818 = state_595775__$1;(statearr_595794_595818[(2)] = null);
(statearr_595794_595818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (10)))
{var inst_595743 = (state_595775[(2)]);var inst_595744 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_595775__$1 = (function (){var statearr_595795 = state_595775;(statearr_595795[(13)] = inst_595743);
return statearr_595795;
})();var statearr_595796_595819 = state_595775__$1;(statearr_595796_595819[(2)] = inst_595744);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_595775__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595776 === (8)))
{var inst_595757 = (state_595775[(2)]);var state_595775__$1 = state_595775;var statearr_595797_595820 = state_595775__$1;(statearr_595797_595820[(2)] = inst_595757);
(statearr_595797_595820[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto___595805,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10551__auto__,c__10566__auto___595805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_595801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_595801[(0)] = state_machine__10552__auto__);
(statearr_595801[(1)] = (1));
return statearr_595801;
});
var state_machine__10552__auto____1 = (function (state_595775){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_595775);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e595802){if((e595802 instanceof Object))
{var ex__10555__auto__ = e595802;var statearr_595803_595821 = state_595775;(statearr_595803_595821[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_595775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e595802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__595822 = state_595775;
state_595775 = G__595822;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_595775){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_595775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___595805,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10568__auto__ = (function (){var statearr_595804 = f__10567__auto__.call(null);(statearr_595804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___595805);
return statearr_595804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___595805,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10566__auto___595930 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___595930,out){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___595930,out){
return (function (state_595906){var state_val_595907 = (state_595906[(1)]);if((state_val_595907 === (7)))
{var inst_595885 = (state_595906[(7)]);var inst_595886 = (state_595906[(8)]);var inst_595885__$1 = (state_595906[(2)]);var inst_595886__$1 = cljs.core.nth.call(null,inst_595885__$1,(0),null);var inst_595887 = cljs.core.nth.call(null,inst_595885__$1,(1),null);var inst_595888 = (inst_595886__$1 == null);var state_595906__$1 = (function (){var statearr_595908 = state_595906;(statearr_595908[(7)] = inst_595885__$1);
(statearr_595908[(9)] = inst_595887);
(statearr_595908[(8)] = inst_595886__$1);
return statearr_595908;
})();if(cljs.core.truth_(inst_595888))
{var statearr_595909_595931 = state_595906__$1;(statearr_595909_595931[(1)] = (8));
} else
{var statearr_595910_595932 = state_595906__$1;(statearr_595910_595932[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595907 === (1)))
{var inst_595877 = cljs.core.vec.call(null,chs);var inst_595878 = inst_595877;var state_595906__$1 = (function (){var statearr_595911 = state_595906;(statearr_595911[(10)] = inst_595878);
return statearr_595911;
})();var statearr_595912_595933 = state_595906__$1;(statearr_595912_595933[(2)] = null);
(statearr_595912_595933[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595907 === (4)))
{var inst_595878 = (state_595906[(10)]);var state_595906__$1 = state_595906;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_595906__$1,(7),inst_595878);
} else
{if((state_val_595907 === (6)))
{var inst_595902 = (state_595906[(2)]);var state_595906__$1 = state_595906;var statearr_595913_595934 = state_595906__$1;(statearr_595913_595934[(2)] = inst_595902);
(statearr_595913_595934[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595907 === (3)))
{var inst_595904 = (state_595906[(2)]);var state_595906__$1 = state_595906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_595906__$1,inst_595904);
} else
{if((state_val_595907 === (2)))
{var inst_595878 = (state_595906[(10)]);var inst_595880 = cljs.core.count.call(null,inst_595878);var inst_595881 = (inst_595880 > (0));var state_595906__$1 = state_595906;if(cljs.core.truth_(inst_595881))
{var statearr_595915_595935 = state_595906__$1;(statearr_595915_595935[(1)] = (4));
} else
{var statearr_595916_595936 = state_595906__$1;(statearr_595916_595936[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595907 === (11)))
{var inst_595878 = (state_595906[(10)]);var inst_595895 = (state_595906[(2)]);var tmp595914 = inst_595878;var inst_595878__$1 = tmp595914;var state_595906__$1 = (function (){var statearr_595917 = state_595906;(statearr_595917[(10)] = inst_595878__$1);
(statearr_595917[(11)] = inst_595895);
return statearr_595917;
})();var statearr_595918_595937 = state_595906__$1;(statearr_595918_595937[(2)] = null);
(statearr_595918_595937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595907 === (9)))
{var inst_595886 = (state_595906[(8)]);var state_595906__$1 = state_595906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_595906__$1,(11),out,inst_595886);
} else
{if((state_val_595907 === (5)))
{var inst_595900 = cljs.core.async.close_BANG_.call(null,out);var state_595906__$1 = state_595906;var statearr_595919_595938 = state_595906__$1;(statearr_595919_595938[(2)] = inst_595900);
(statearr_595919_595938[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595907 === (10)))
{var inst_595898 = (state_595906[(2)]);var state_595906__$1 = state_595906;var statearr_595920_595939 = state_595906__$1;(statearr_595920_595939[(2)] = inst_595898);
(statearr_595920_595939[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_595907 === (8)))
{var inst_595878 = (state_595906[(10)]);var inst_595885 = (state_595906[(7)]);var inst_595887 = (state_595906[(9)]);var inst_595886 = (state_595906[(8)]);var inst_595890 = (function (){var c = inst_595887;var v = inst_595886;var vec__595883 = inst_595885;var cs = inst_595878;return ((function (c,v,vec__595883,cs,inst_595878,inst_595885,inst_595887,inst_595886,state_val_595907,c__10566__auto___595930,out){
return (function (p1__595823_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__595823_SHARP_);
});
;})(c,v,vec__595883,cs,inst_595878,inst_595885,inst_595887,inst_595886,state_val_595907,c__10566__auto___595930,out))
})();var inst_595891 = cljs.core.filterv.call(null,inst_595890,inst_595878);var inst_595878__$1 = inst_595891;var state_595906__$1 = (function (){var statearr_595921 = state_595906;(statearr_595921[(10)] = inst_595878__$1);
return statearr_595921;
})();var statearr_595922_595940 = state_595906__$1;(statearr_595922_595940[(2)] = null);
(statearr_595922_595940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto___595930,out))
;return ((function (switch__10551__auto__,c__10566__auto___595930,out){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_595926 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_595926[(0)] = state_machine__10552__auto__);
(statearr_595926[(1)] = (1));
return statearr_595926;
});
var state_machine__10552__auto____1 = (function (state_595906){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_595906);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e595927){if((e595927 instanceof Object))
{var ex__10555__auto__ = e595927;var statearr_595928_595941 = state_595906;(statearr_595928_595941[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_595906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e595927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__595942 = state_595906;
state_595906 = G__595942;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_595906){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_595906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___595930,out))
})();var state__10568__auto__ = (function (){var statearr_595929 = f__10567__auto__.call(null);(statearr_595929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___595930);
return statearr_595929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___595930,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10566__auto___596035 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___596035,out){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___596035,out){
return (function (state_596012){var state_val_596013 = (state_596012[(1)]);if((state_val_596013 === (7)))
{var inst_595994 = (state_596012[(7)]);var inst_595994__$1 = (state_596012[(2)]);var inst_595995 = (inst_595994__$1 == null);var inst_595996 = cljs.core.not.call(null,inst_595995);var state_596012__$1 = (function (){var statearr_596014 = state_596012;(statearr_596014[(7)] = inst_595994__$1);
return statearr_596014;
})();if(inst_595996)
{var statearr_596015_596036 = state_596012__$1;(statearr_596015_596036[(1)] = (8));
} else
{var statearr_596016_596037 = state_596012__$1;(statearr_596016_596037[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596013 === (1)))
{var inst_595989 = (0);var state_596012__$1 = (function (){var statearr_596017 = state_596012;(statearr_596017[(8)] = inst_595989);
return statearr_596017;
})();var statearr_596018_596038 = state_596012__$1;(statearr_596018_596038[(2)] = null);
(statearr_596018_596038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596013 === (4)))
{var state_596012__$1 = state_596012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_596012__$1,(7),ch);
} else
{if((state_val_596013 === (6)))
{var inst_596007 = (state_596012[(2)]);var state_596012__$1 = state_596012;var statearr_596019_596039 = state_596012__$1;(statearr_596019_596039[(2)] = inst_596007);
(statearr_596019_596039[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596013 === (3)))
{var inst_596009 = (state_596012[(2)]);var inst_596010 = cljs.core.async.close_BANG_.call(null,out);var state_596012__$1 = (function (){var statearr_596020 = state_596012;(statearr_596020[(9)] = inst_596009);
return statearr_596020;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_596012__$1,inst_596010);
} else
{if((state_val_596013 === (2)))
{var inst_595989 = (state_596012[(8)]);var inst_595991 = (inst_595989 < n);var state_596012__$1 = state_596012;if(cljs.core.truth_(inst_595991))
{var statearr_596021_596040 = state_596012__$1;(statearr_596021_596040[(1)] = (4));
} else
{var statearr_596022_596041 = state_596012__$1;(statearr_596022_596041[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596013 === (11)))
{var inst_595989 = (state_596012[(8)]);var inst_595999 = (state_596012[(2)]);var inst_596000 = (inst_595989 + (1));var inst_595989__$1 = inst_596000;var state_596012__$1 = (function (){var statearr_596023 = state_596012;(statearr_596023[(8)] = inst_595989__$1);
(statearr_596023[(10)] = inst_595999);
return statearr_596023;
})();var statearr_596024_596042 = state_596012__$1;(statearr_596024_596042[(2)] = null);
(statearr_596024_596042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596013 === (9)))
{var state_596012__$1 = state_596012;var statearr_596025_596043 = state_596012__$1;(statearr_596025_596043[(2)] = null);
(statearr_596025_596043[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596013 === (5)))
{var state_596012__$1 = state_596012;var statearr_596026_596044 = state_596012__$1;(statearr_596026_596044[(2)] = null);
(statearr_596026_596044[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596013 === (10)))
{var inst_596004 = (state_596012[(2)]);var state_596012__$1 = state_596012;var statearr_596027_596045 = state_596012__$1;(statearr_596027_596045[(2)] = inst_596004);
(statearr_596027_596045[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596013 === (8)))
{var inst_595994 = (state_596012[(7)]);var state_596012__$1 = state_596012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_596012__$1,(11),out,inst_595994);
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
});})(c__10566__auto___596035,out))
;return ((function (switch__10551__auto__,c__10566__auto___596035,out){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_596031 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_596031[(0)] = state_machine__10552__auto__);
(statearr_596031[(1)] = (1));
return statearr_596031;
});
var state_machine__10552__auto____1 = (function (state_596012){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_596012);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e596032){if((e596032 instanceof Object))
{var ex__10555__auto__ = e596032;var statearr_596033_596046 = state_596012;(statearr_596033_596046[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_596012);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e596032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__596047 = state_596012;
state_596012 = G__596047;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_596012){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_596012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___596035,out))
})();var state__10568__auto__ = (function (){var statearr_596034 = f__10567__auto__.call(null);(statearr_596034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___596035);
return statearr_596034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___596035,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10566__auto___596144 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___596144,out){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___596144,out){
return (function (state_596119){var state_val_596120 = (state_596119[(1)]);if((state_val_596120 === (7)))
{var inst_596114 = (state_596119[(2)]);var state_596119__$1 = state_596119;var statearr_596121_596145 = state_596119__$1;(statearr_596121_596145[(2)] = inst_596114);
(statearr_596121_596145[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596120 === (1)))
{var inst_596096 = null;var state_596119__$1 = (function (){var statearr_596122 = state_596119;(statearr_596122[(7)] = inst_596096);
return statearr_596122;
})();var statearr_596123_596146 = state_596119__$1;(statearr_596123_596146[(2)] = null);
(statearr_596123_596146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596120 === (4)))
{var inst_596099 = (state_596119[(8)]);var inst_596099__$1 = (state_596119[(2)]);var inst_596100 = (inst_596099__$1 == null);var inst_596101 = cljs.core.not.call(null,inst_596100);var state_596119__$1 = (function (){var statearr_596124 = state_596119;(statearr_596124[(8)] = inst_596099__$1);
return statearr_596124;
})();if(inst_596101)
{var statearr_596125_596147 = state_596119__$1;(statearr_596125_596147[(1)] = (5));
} else
{var statearr_596126_596148 = state_596119__$1;(statearr_596126_596148[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596120 === (6)))
{var state_596119__$1 = state_596119;var statearr_596127_596149 = state_596119__$1;(statearr_596127_596149[(2)] = null);
(statearr_596127_596149[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596120 === (3)))
{var inst_596116 = (state_596119[(2)]);var inst_596117 = cljs.core.async.close_BANG_.call(null,out);var state_596119__$1 = (function (){var statearr_596128 = state_596119;(statearr_596128[(9)] = inst_596116);
return statearr_596128;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_596119__$1,inst_596117);
} else
{if((state_val_596120 === (2)))
{var state_596119__$1 = state_596119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_596119__$1,(4),ch);
} else
{if((state_val_596120 === (11)))
{var inst_596099 = (state_596119[(8)]);var inst_596108 = (state_596119[(2)]);var inst_596096 = inst_596099;var state_596119__$1 = (function (){var statearr_596129 = state_596119;(statearr_596129[(10)] = inst_596108);
(statearr_596129[(7)] = inst_596096);
return statearr_596129;
})();var statearr_596130_596150 = state_596119__$1;(statearr_596130_596150[(2)] = null);
(statearr_596130_596150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596120 === (9)))
{var inst_596099 = (state_596119[(8)]);var state_596119__$1 = state_596119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_596119__$1,(11),out,inst_596099);
} else
{if((state_val_596120 === (5)))
{var inst_596096 = (state_596119[(7)]);var inst_596099 = (state_596119[(8)]);var inst_596103 = cljs.core._EQ_.call(null,inst_596099,inst_596096);var state_596119__$1 = state_596119;if(inst_596103)
{var statearr_596132_596151 = state_596119__$1;(statearr_596132_596151[(1)] = (8));
} else
{var statearr_596133_596152 = state_596119__$1;(statearr_596133_596152[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596120 === (10)))
{var inst_596111 = (state_596119[(2)]);var state_596119__$1 = state_596119;var statearr_596134_596153 = state_596119__$1;(statearr_596134_596153[(2)] = inst_596111);
(statearr_596134_596153[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596120 === (8)))
{var inst_596096 = (state_596119[(7)]);var tmp596131 = inst_596096;var inst_596096__$1 = tmp596131;var state_596119__$1 = (function (){var statearr_596135 = state_596119;(statearr_596135[(7)] = inst_596096__$1);
return statearr_596135;
})();var statearr_596136_596154 = state_596119__$1;(statearr_596136_596154[(2)] = null);
(statearr_596136_596154[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto___596144,out))
;return ((function (switch__10551__auto__,c__10566__auto___596144,out){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_596140 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_596140[(0)] = state_machine__10552__auto__);
(statearr_596140[(1)] = (1));
return statearr_596140;
});
var state_machine__10552__auto____1 = (function (state_596119){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_596119);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e596141){if((e596141 instanceof Object))
{var ex__10555__auto__ = e596141;var statearr_596142_596155 = state_596119;(statearr_596142_596155[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_596119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e596141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__596156 = state_596119;
state_596119 = G__596156;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_596119){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_596119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___596144,out))
})();var state__10568__auto__ = (function (){var statearr_596143 = f__10567__auto__.call(null);(statearr_596143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___596144);
return statearr_596143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___596144,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10566__auto___596291 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___596291,out){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___596291,out){
return (function (state_596261){var state_val_596262 = (state_596261[(1)]);if((state_val_596262 === (7)))
{var inst_596257 = (state_596261[(2)]);var state_596261__$1 = state_596261;var statearr_596263_596292 = state_596261__$1;(statearr_596263_596292[(2)] = inst_596257);
(statearr_596263_596292[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596262 === (1)))
{var inst_596224 = (new Array(n));var inst_596225 = inst_596224;var inst_596226 = (0);var state_596261__$1 = (function (){var statearr_596264 = state_596261;(statearr_596264[(7)] = inst_596225);
(statearr_596264[(8)] = inst_596226);
return statearr_596264;
})();var statearr_596265_596293 = state_596261__$1;(statearr_596265_596293[(2)] = null);
(statearr_596265_596293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596262 === (4)))
{var inst_596229 = (state_596261[(9)]);var inst_596229__$1 = (state_596261[(2)]);var inst_596230 = (inst_596229__$1 == null);var inst_596231 = cljs.core.not.call(null,inst_596230);var state_596261__$1 = (function (){var statearr_596266 = state_596261;(statearr_596266[(9)] = inst_596229__$1);
return statearr_596266;
})();if(inst_596231)
{var statearr_596267_596294 = state_596261__$1;(statearr_596267_596294[(1)] = (5));
} else
{var statearr_596268_596295 = state_596261__$1;(statearr_596268_596295[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596262 === (15)))
{var inst_596251 = (state_596261[(2)]);var state_596261__$1 = state_596261;var statearr_596269_596296 = state_596261__$1;(statearr_596269_596296[(2)] = inst_596251);
(statearr_596269_596296[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596262 === (13)))
{var state_596261__$1 = state_596261;var statearr_596270_596297 = state_596261__$1;(statearr_596270_596297[(2)] = null);
(statearr_596270_596297[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596262 === (6)))
{var inst_596226 = (state_596261[(8)]);var inst_596247 = (inst_596226 > (0));var state_596261__$1 = state_596261;if(cljs.core.truth_(inst_596247))
{var statearr_596271_596298 = state_596261__$1;(statearr_596271_596298[(1)] = (12));
} else
{var statearr_596272_596299 = state_596261__$1;(statearr_596272_596299[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596262 === (3)))
{var inst_596259 = (state_596261[(2)]);var state_596261__$1 = state_596261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_596261__$1,inst_596259);
} else
{if((state_val_596262 === (12)))
{var inst_596225 = (state_596261[(7)]);var inst_596249 = cljs.core.vec.call(null,inst_596225);var state_596261__$1 = state_596261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_596261__$1,(15),out,inst_596249);
} else
{if((state_val_596262 === (2)))
{var state_596261__$1 = state_596261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_596261__$1,(4),ch);
} else
{if((state_val_596262 === (11)))
{var inst_596241 = (state_596261[(2)]);var inst_596242 = (new Array(n));var inst_596225 = inst_596242;var inst_596226 = (0);var state_596261__$1 = (function (){var statearr_596273 = state_596261;(statearr_596273[(7)] = inst_596225);
(statearr_596273[(10)] = inst_596241);
(statearr_596273[(8)] = inst_596226);
return statearr_596273;
})();var statearr_596274_596300 = state_596261__$1;(statearr_596274_596300[(2)] = null);
(statearr_596274_596300[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596262 === (9)))
{var inst_596225 = (state_596261[(7)]);var inst_596239 = cljs.core.vec.call(null,inst_596225);var state_596261__$1 = state_596261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_596261__$1,(11),out,inst_596239);
} else
{if((state_val_596262 === (5)))
{var inst_596225 = (state_596261[(7)]);var inst_596234 = (state_596261[(11)]);var inst_596229 = (state_596261[(9)]);var inst_596226 = (state_596261[(8)]);var inst_596233 = (inst_596225[inst_596226] = inst_596229);var inst_596234__$1 = (inst_596226 + (1));var inst_596235 = (inst_596234__$1 < n);var state_596261__$1 = (function (){var statearr_596275 = state_596261;(statearr_596275[(11)] = inst_596234__$1);
(statearr_596275[(12)] = inst_596233);
return statearr_596275;
})();if(cljs.core.truth_(inst_596235))
{var statearr_596276_596301 = state_596261__$1;(statearr_596276_596301[(1)] = (8));
} else
{var statearr_596277_596302 = state_596261__$1;(statearr_596277_596302[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596262 === (14)))
{var inst_596254 = (state_596261[(2)]);var inst_596255 = cljs.core.async.close_BANG_.call(null,out);var state_596261__$1 = (function (){var statearr_596279 = state_596261;(statearr_596279[(13)] = inst_596254);
return statearr_596279;
})();var statearr_596280_596303 = state_596261__$1;(statearr_596280_596303[(2)] = inst_596255);
(statearr_596280_596303[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596262 === (10)))
{var inst_596245 = (state_596261[(2)]);var state_596261__$1 = state_596261;var statearr_596281_596304 = state_596261__$1;(statearr_596281_596304[(2)] = inst_596245);
(statearr_596281_596304[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596262 === (8)))
{var inst_596225 = (state_596261[(7)]);var inst_596234 = (state_596261[(11)]);var tmp596278 = inst_596225;var inst_596225__$1 = tmp596278;var inst_596226 = inst_596234;var state_596261__$1 = (function (){var statearr_596282 = state_596261;(statearr_596282[(7)] = inst_596225__$1);
(statearr_596282[(8)] = inst_596226);
return statearr_596282;
})();var statearr_596283_596305 = state_596261__$1;(statearr_596283_596305[(2)] = null);
(statearr_596283_596305[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto___596291,out))
;return ((function (switch__10551__auto__,c__10566__auto___596291,out){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_596287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_596287[(0)] = state_machine__10552__auto__);
(statearr_596287[(1)] = (1));
return statearr_596287;
});
var state_machine__10552__auto____1 = (function (state_596261){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_596261);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e596288){if((e596288 instanceof Object))
{var ex__10555__auto__ = e596288;var statearr_596289_596306 = state_596261;(statearr_596289_596306[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_596261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e596288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__596307 = state_596261;
state_596261 = G__596307;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_596261){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_596261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___596291,out))
})();var state__10568__auto__ = (function (){var statearr_596290 = f__10567__auto__.call(null);(statearr_596290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___596291);
return statearr_596290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___596291,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10566__auto___596450 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___596450,out){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___596450,out){
return (function (state_596420){var state_val_596421 = (state_596420[(1)]);if((state_val_596421 === (7)))
{var inst_596416 = (state_596420[(2)]);var state_596420__$1 = state_596420;var statearr_596422_596451 = state_596420__$1;(statearr_596422_596451[(2)] = inst_596416);
(statearr_596422_596451[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596421 === (1)))
{var inst_596379 = [];var inst_596380 = inst_596379;var inst_596381 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_596420__$1 = (function (){var statearr_596423 = state_596420;(statearr_596423[(7)] = inst_596380);
(statearr_596423[(8)] = inst_596381);
return statearr_596423;
})();var statearr_596424_596452 = state_596420__$1;(statearr_596424_596452[(2)] = null);
(statearr_596424_596452[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596421 === (4)))
{var inst_596384 = (state_596420[(9)]);var inst_596384__$1 = (state_596420[(2)]);var inst_596385 = (inst_596384__$1 == null);var inst_596386 = cljs.core.not.call(null,inst_596385);var state_596420__$1 = (function (){var statearr_596425 = state_596420;(statearr_596425[(9)] = inst_596384__$1);
return statearr_596425;
})();if(inst_596386)
{var statearr_596426_596453 = state_596420__$1;(statearr_596426_596453[(1)] = (5));
} else
{var statearr_596427_596454 = state_596420__$1;(statearr_596427_596454[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596421 === (15)))
{var inst_596410 = (state_596420[(2)]);var state_596420__$1 = state_596420;var statearr_596428_596455 = state_596420__$1;(statearr_596428_596455[(2)] = inst_596410);
(statearr_596428_596455[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596421 === (13)))
{var state_596420__$1 = state_596420;var statearr_596429_596456 = state_596420__$1;(statearr_596429_596456[(2)] = null);
(statearr_596429_596456[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596421 === (6)))
{var inst_596380 = (state_596420[(7)]);var inst_596405 = inst_596380.length;var inst_596406 = (inst_596405 > (0));var state_596420__$1 = state_596420;if(cljs.core.truth_(inst_596406))
{var statearr_596430_596457 = state_596420__$1;(statearr_596430_596457[(1)] = (12));
} else
{var statearr_596431_596458 = state_596420__$1;(statearr_596431_596458[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596421 === (3)))
{var inst_596418 = (state_596420[(2)]);var state_596420__$1 = state_596420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_596420__$1,inst_596418);
} else
{if((state_val_596421 === (12)))
{var inst_596380 = (state_596420[(7)]);var inst_596408 = cljs.core.vec.call(null,inst_596380);var state_596420__$1 = state_596420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_596420__$1,(15),out,inst_596408);
} else
{if((state_val_596421 === (2)))
{var state_596420__$1 = state_596420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_596420__$1,(4),ch);
} else
{if((state_val_596421 === (11)))
{var inst_596384 = (state_596420[(9)]);var inst_596388 = (state_596420[(10)]);var inst_596398 = (state_596420[(2)]);var inst_596399 = [];var inst_596400 = inst_596399.push(inst_596384);var inst_596380 = inst_596399;var inst_596381 = inst_596388;var state_596420__$1 = (function (){var statearr_596432 = state_596420;(statearr_596432[(11)] = inst_596400);
(statearr_596432[(12)] = inst_596398);
(statearr_596432[(7)] = inst_596380);
(statearr_596432[(8)] = inst_596381);
return statearr_596432;
})();var statearr_596433_596459 = state_596420__$1;(statearr_596433_596459[(2)] = null);
(statearr_596433_596459[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596421 === (9)))
{var inst_596380 = (state_596420[(7)]);var inst_596396 = cljs.core.vec.call(null,inst_596380);var state_596420__$1 = state_596420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_596420__$1,(11),out,inst_596396);
} else
{if((state_val_596421 === (5)))
{var inst_596381 = (state_596420[(8)]);var inst_596384 = (state_596420[(9)]);var inst_596388 = (state_596420[(10)]);var inst_596388__$1 = f.call(null,inst_596384);var inst_596389 = cljs.core._EQ_.call(null,inst_596388__$1,inst_596381);var inst_596390 = cljs.core.keyword_identical_QMARK_.call(null,inst_596381,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_596391 = (inst_596389) || (inst_596390);var state_596420__$1 = (function (){var statearr_596434 = state_596420;(statearr_596434[(10)] = inst_596388__$1);
return statearr_596434;
})();if(cljs.core.truth_(inst_596391))
{var statearr_596435_596460 = state_596420__$1;(statearr_596435_596460[(1)] = (8));
} else
{var statearr_596436_596461 = state_596420__$1;(statearr_596436_596461[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596421 === (14)))
{var inst_596413 = (state_596420[(2)]);var inst_596414 = cljs.core.async.close_BANG_.call(null,out);var state_596420__$1 = (function (){var statearr_596438 = state_596420;(statearr_596438[(13)] = inst_596413);
return statearr_596438;
})();var statearr_596439_596462 = state_596420__$1;(statearr_596439_596462[(2)] = inst_596414);
(statearr_596439_596462[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596421 === (10)))
{var inst_596403 = (state_596420[(2)]);var state_596420__$1 = state_596420;var statearr_596440_596463 = state_596420__$1;(statearr_596440_596463[(2)] = inst_596403);
(statearr_596440_596463[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_596421 === (8)))
{var inst_596380 = (state_596420[(7)]);var inst_596384 = (state_596420[(9)]);var inst_596388 = (state_596420[(10)]);var inst_596393 = inst_596380.push(inst_596384);var tmp596437 = inst_596380;var inst_596380__$1 = tmp596437;var inst_596381 = inst_596388;var state_596420__$1 = (function (){var statearr_596441 = state_596420;(statearr_596441[(14)] = inst_596393);
(statearr_596441[(7)] = inst_596380__$1);
(statearr_596441[(8)] = inst_596381);
return statearr_596441;
})();var statearr_596442_596464 = state_596420__$1;(statearr_596442_596464[(2)] = null);
(statearr_596442_596464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10566__auto___596450,out))
;return ((function (switch__10551__auto__,c__10566__auto___596450,out){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_596446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_596446[(0)] = state_machine__10552__auto__);
(statearr_596446[(1)] = (1));
return statearr_596446;
});
var state_machine__10552__auto____1 = (function (state_596420){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_596420);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e596447){if((e596447 instanceof Object))
{var ex__10555__auto__ = e596447;var statearr_596448_596465 = state_596420;(statearr_596448_596465[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_596420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e596447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__596466 = state_596420;
state_596420 = G__596466;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_596420){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_596420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___596450,out))
})();var state__10568__auto__ = (function (){var statearr_596449 = f__10567__auto__.call(null);(statearr_596449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___596450);
return statearr_596449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___596450,out))
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

//# sourceMappingURL=async.js.map