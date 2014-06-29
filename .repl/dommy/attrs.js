// Compiled by ClojureScript 0.0-2234
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__9408__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__9408__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__9408__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__22253 = (i + class$.length);
start_from = G__22253;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___22278 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___22278))
{var class_list_22279 = temp__4124__auto___22278;var seq__22266_22280 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__22267_22281 = null;var count__22268_22282 = 0;var i__22269_22283 = 0;while(true){
if((i__22269_22283 < count__22268_22282))
{var class_22284 = cljs.core._nth.call(null,chunk__22267_22281,i__22269_22283);class_list_22279.add(class_22284);
{
var G__22285 = seq__22266_22280;
var G__22286 = chunk__22267_22281;
var G__22287 = count__22268_22282;
var G__22288 = (i__22269_22283 + 1);
seq__22266_22280 = G__22285;
chunk__22267_22281 = G__22286;
count__22268_22282 = G__22287;
i__22269_22283 = G__22288;
continue;
}
} else
{var temp__4126__auto___22289 = cljs.core.seq.call(null,seq__22266_22280);if(temp__4126__auto___22289)
{var seq__22266_22290__$1 = temp__4126__auto___22289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22266_22290__$1))
{var c__10176__auto___22291 = cljs.core.chunk_first.call(null,seq__22266_22290__$1);{
var G__22292 = cljs.core.chunk_rest.call(null,seq__22266_22290__$1);
var G__22293 = c__10176__auto___22291;
var G__22294 = cljs.core.count.call(null,c__10176__auto___22291);
var G__22295 = 0;
seq__22266_22280 = G__22292;
chunk__22267_22281 = G__22293;
count__22268_22282 = G__22294;
i__22269_22283 = G__22295;
continue;
}
} else
{var class_22296 = cljs.core.first.call(null,seq__22266_22290__$1);class_list_22279.add(class_22296);
{
var G__22297 = cljs.core.next.call(null,seq__22266_22290__$1);
var G__22298 = null;
var G__22299 = 0;
var G__22300 = 0;
seq__22266_22280 = G__22297;
chunk__22267_22281 = G__22298;
count__22268_22282 = G__22299;
i__22269_22283 = G__22300;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_22301 = elem__$1.className;var seq__22270_22302 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__22271_22303 = null;var count__22272_22304 = 0;var i__22273_22305 = 0;while(true){
if((i__22273_22305 < count__22272_22304))
{var class_22306 = cljs.core._nth.call(null,chunk__22271_22303,i__22273_22305);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_22301,class_22306)))
{} else
{elem__$1.className = (((class_name_22301 === ""))?class_22306:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_22301)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_22306)));
}
{
var G__22307 = seq__22270_22302;
var G__22308 = chunk__22271_22303;
var G__22309 = count__22272_22304;
var G__22310 = (i__22273_22305 + 1);
seq__22270_22302 = G__22307;
chunk__22271_22303 = G__22308;
count__22272_22304 = G__22309;
i__22273_22305 = G__22310;
continue;
}
} else
{var temp__4126__auto___22311 = cljs.core.seq.call(null,seq__22270_22302);if(temp__4126__auto___22311)
{var seq__22270_22312__$1 = temp__4126__auto___22311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22270_22312__$1))
{var c__10176__auto___22313 = cljs.core.chunk_first.call(null,seq__22270_22312__$1);{
var G__22314 = cljs.core.chunk_rest.call(null,seq__22270_22312__$1);
var G__22315 = c__10176__auto___22313;
var G__22316 = cljs.core.count.call(null,c__10176__auto___22313);
var G__22317 = 0;
seq__22270_22302 = G__22314;
chunk__22271_22303 = G__22315;
count__22272_22304 = G__22316;
i__22273_22305 = G__22317;
continue;
}
} else
{var class_22318 = cljs.core.first.call(null,seq__22270_22312__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_22301,class_22318)))
{} else
{elem__$1.className = (((class_name_22301 === ""))?class_22318:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_22301)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_22318)));
}
{
var G__22319 = cljs.core.next.call(null,seq__22270_22312__$1);
var G__22320 = null;
var G__22321 = 0;
var G__22322 = 0;
seq__22270_22302 = G__22319;
chunk__22271_22303 = G__22320;
count__22272_22304 = G__22321;
i__22273_22305 = G__22322;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__22323__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__22274_22324 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__22275_22325 = null;var count__22276_22326 = 0;var i__22277_22327 = 0;while(true){
if((i__22277_22327 < count__22276_22326))
{var c_22328 = cljs.core._nth.call(null,chunk__22275_22325,i__22277_22327);add_class_BANG_.call(null,elem__$1,c_22328);
{
var G__22329 = seq__22274_22324;
var G__22330 = chunk__22275_22325;
var G__22331 = count__22276_22326;
var G__22332 = (i__22277_22327 + 1);
seq__22274_22324 = G__22329;
chunk__22275_22325 = G__22330;
count__22276_22326 = G__22331;
i__22277_22327 = G__22332;
continue;
}
} else
{var temp__4126__auto___22333 = cljs.core.seq.call(null,seq__22274_22324);if(temp__4126__auto___22333)
{var seq__22274_22334__$1 = temp__4126__auto___22333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22274_22334__$1))
{var c__10176__auto___22335 = cljs.core.chunk_first.call(null,seq__22274_22334__$1);{
var G__22336 = cljs.core.chunk_rest.call(null,seq__22274_22334__$1);
var G__22337 = c__10176__auto___22335;
var G__22338 = cljs.core.count.call(null,c__10176__auto___22335);
var G__22339 = 0;
seq__22274_22324 = G__22336;
chunk__22275_22325 = G__22337;
count__22276_22326 = G__22338;
i__22277_22327 = G__22339;
continue;
}
} else
{var c_22340 = cljs.core.first.call(null,seq__22274_22334__$1);add_class_BANG_.call(null,elem__$1,c_22340);
{
var G__22341 = cljs.core.next.call(null,seq__22274_22334__$1);
var G__22342 = null;
var G__22343 = 0;
var G__22344 = 0;
seq__22274_22324 = G__22341;
chunk__22275_22325 = G__22342;
count__22276_22326 = G__22343;
i__22277_22327 = G__22344;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__22323 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22323__delegate.call(this,elem,classes,more_classes);};
G__22323.cljs$lang$maxFixedArity = 2;
G__22323.cljs$lang$applyTo = (function (arglist__22345){
var elem = cljs.core.first(arglist__22345);
arglist__22345 = cljs.core.next(arglist__22345);
var classes = cljs.core.first(arglist__22345);
var more_classes = cljs.core.rest(arglist__22345);
return G__22323__delegate(elem,classes,more_classes);
});
G__22323.cljs$core$IFn$_invoke$arity$variadic = G__22323__delegate;
return G__22323;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__22346 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring(0,i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + 1)))):class_name.substring(0,(i - 1)))));
})();
class_name = G__22346;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___22355 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___22355))
{var class_list_22356 = temp__4124__auto___22355;class_list_22356.remove(class$__$1);
} else
{var class_name_22357 = elem__$1.className;var new_class_name_22358 = dommy.attrs.remove_class_str.call(null,class_name_22357,class$__$1);if((class_name_22357 === new_class_name_22358))
{} else
{elem__$1.className = new_class_name_22358;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__22359__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__22351 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__22352 = null;var count__22353 = 0;var i__22354 = 0;while(true){
if((i__22354 < count__22353))
{var c = cljs.core._nth.call(null,chunk__22352,i__22354);remove_class_BANG_.call(null,elem__$1,c);
{
var G__22360 = seq__22351;
var G__22361 = chunk__22352;
var G__22362 = count__22353;
var G__22363 = (i__22354 + 1);
seq__22351 = G__22360;
chunk__22352 = G__22361;
count__22353 = G__22362;
i__22354 = G__22363;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22351);if(temp__4126__auto__)
{var seq__22351__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22351__$1))
{var c__10176__auto__ = cljs.core.chunk_first.call(null,seq__22351__$1);{
var G__22364 = cljs.core.chunk_rest.call(null,seq__22351__$1);
var G__22365 = c__10176__auto__;
var G__22366 = cljs.core.count.call(null,c__10176__auto__);
var G__22367 = 0;
seq__22351 = G__22364;
chunk__22352 = G__22365;
count__22353 = G__22366;
i__22354 = G__22367;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__22351__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__22368 = cljs.core.next.call(null,seq__22351__$1);
var G__22369 = null;
var G__22370 = 0;
var G__22371 = 0;
seq__22351 = G__22368;
chunk__22352 = G__22369;
count__22353 = G__22370;
i__22354 = G__22371;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__22359 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22359__delegate.call(this,elem,class$,classes);};
G__22359.cljs$lang$maxFixedArity = 2;
G__22359.cljs$lang$applyTo = (function (arglist__22372){
var elem = cljs.core.first(arglist__22372);
arglist__22372 = cljs.core.next(arglist__22372);
var class$ = cljs.core.first(arglist__22372);
var classes = cljs.core.rest(arglist__22372);
return G__22359__delegate(elem,class$,classes);
});
G__22359.cljs$core$IFn$_invoke$arity$variadic = G__22359__delegate;
return G__22359;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___22373 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___22373))
{var class_list_22374 = temp__4124__auto___22373;class_list_22374.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__22377){var vec__22378 = p__22377;var k = cljs.core.nth.call(null,vec__22378,0,null);var v = cljs.core.nth.call(null,vec__22378,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__22385_22391 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__22386_22392 = null;var count__22387_22393 = 0;var i__22388_22394 = 0;while(true){
if((i__22388_22394 < count__22387_22393))
{var vec__22389_22395 = cljs.core._nth.call(null,chunk__22386_22392,i__22388_22394);var k_22396 = cljs.core.nth.call(null,vec__22389_22395,0,null);var v_22397 = cljs.core.nth.call(null,vec__22389_22395,1,null);(style[cljs.core.name.call(null,k_22396)] = v_22397);
{
var G__22398 = seq__22385_22391;
var G__22399 = chunk__22386_22392;
var G__22400 = count__22387_22393;
var G__22401 = (i__22388_22394 + 1);
seq__22385_22391 = G__22398;
chunk__22386_22392 = G__22399;
count__22387_22393 = G__22400;
i__22388_22394 = G__22401;
continue;
}
} else
{var temp__4126__auto___22402 = cljs.core.seq.call(null,seq__22385_22391);if(temp__4126__auto___22402)
{var seq__22385_22403__$1 = temp__4126__auto___22402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22385_22403__$1))
{var c__10176__auto___22404 = cljs.core.chunk_first.call(null,seq__22385_22403__$1);{
var G__22405 = cljs.core.chunk_rest.call(null,seq__22385_22403__$1);
var G__22406 = c__10176__auto___22404;
var G__22407 = cljs.core.count.call(null,c__10176__auto___22404);
var G__22408 = 0;
seq__22385_22391 = G__22405;
chunk__22386_22392 = G__22406;
count__22387_22393 = G__22407;
i__22388_22394 = G__22408;
continue;
}
} else
{var vec__22390_22409 = cljs.core.first.call(null,seq__22385_22403__$1);var k_22410 = cljs.core.nth.call(null,vec__22390_22409,0,null);var v_22411 = cljs.core.nth.call(null,vec__22390_22409,1,null);(style[cljs.core.name.call(null,k_22410)] = v_22411);
{
var G__22412 = cljs.core.next.call(null,seq__22385_22403__$1);
var G__22413 = null;
var G__22414 = 0;
var G__22415 = 0;
seq__22385_22391 = G__22412;
chunk__22386_22392 = G__22413;
count__22387_22393 = G__22414;
i__22388_22394 = G__22415;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__22416){
var elem = cljs.core.first(arglist__22416);
var kvs = cljs.core.rest(arglist__22416);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__22423_22429 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__22424_22430 = null;var count__22425_22431 = 0;var i__22426_22432 = 0;while(true){
if((i__22426_22432 < count__22425_22431))
{var vec__22427_22433 = cljs.core._nth.call(null,chunk__22424_22430,i__22426_22432);var k_22434 = cljs.core.nth.call(null,vec__22427_22433,0,null);var v_22435 = cljs.core.nth.call(null,vec__22427_22433,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_22434,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_22435)+"px"));
{
var G__22436 = seq__22423_22429;
var G__22437 = chunk__22424_22430;
var G__22438 = count__22425_22431;
var G__22439 = (i__22426_22432 + 1);
seq__22423_22429 = G__22436;
chunk__22424_22430 = G__22437;
count__22425_22431 = G__22438;
i__22426_22432 = G__22439;
continue;
}
} else
{var temp__4126__auto___22440 = cljs.core.seq.call(null,seq__22423_22429);if(temp__4126__auto___22440)
{var seq__22423_22441__$1 = temp__4126__auto___22440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22423_22441__$1))
{var c__10176__auto___22442 = cljs.core.chunk_first.call(null,seq__22423_22441__$1);{
var G__22443 = cljs.core.chunk_rest.call(null,seq__22423_22441__$1);
var G__22444 = c__10176__auto___22442;
var G__22445 = cljs.core.count.call(null,c__10176__auto___22442);
var G__22446 = 0;
seq__22423_22429 = G__22443;
chunk__22424_22430 = G__22444;
count__22425_22431 = G__22445;
i__22426_22432 = G__22446;
continue;
}
} else
{var vec__22428_22447 = cljs.core.first.call(null,seq__22423_22441__$1);var k_22448 = cljs.core.nth.call(null,vec__22428_22447,0,null);var v_22449 = cljs.core.nth.call(null,vec__22428_22447,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_22448,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_22449)+"px"));
{
var G__22450 = cljs.core.next.call(null,seq__22423_22441__$1);
var G__22451 = null;
var G__22452 = 0;
var G__22453 = 0;
seq__22423_22429 = G__22450;
chunk__22424_22430 = G__22451;
count__22425_22431 = G__22452;
i__22426_22432 = G__22453;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__22454){
var elem = cljs.core.first(arglist__22454);
var kvs = cljs.core.rest(arglist__22454);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__22463 = dommy.template.__GT_node_like.call(null,elem);(G__22463[cljs.core.name.call(null,k)] = v);
return G__22463;
} else
{var G__22464 = dommy.template.__GT_node_like.call(null,elem);G__22464.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__22464;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__22471__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__22465_22472 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__22466_22473 = null;var count__22467_22474 = 0;var i__22468_22475 = 0;while(true){
if((i__22468_22475 < count__22467_22474))
{var vec__22469_22476 = cljs.core._nth.call(null,chunk__22466_22473,i__22468_22475);var k_22477__$1 = cljs.core.nth.call(null,vec__22469_22476,0,null);var v_22478__$1 = cljs.core.nth.call(null,vec__22469_22476,1,null);set_attr_BANG_.call(null,elem__$1,k_22477__$1,v_22478__$1);
{
var G__22479 = seq__22465_22472;
var G__22480 = chunk__22466_22473;
var G__22481 = count__22467_22474;
var G__22482 = (i__22468_22475 + 1);
seq__22465_22472 = G__22479;
chunk__22466_22473 = G__22480;
count__22467_22474 = G__22481;
i__22468_22475 = G__22482;
continue;
}
} else
{var temp__4126__auto___22483 = cljs.core.seq.call(null,seq__22465_22472);if(temp__4126__auto___22483)
{var seq__22465_22484__$1 = temp__4126__auto___22483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22465_22484__$1))
{var c__10176__auto___22485 = cljs.core.chunk_first.call(null,seq__22465_22484__$1);{
var G__22486 = cljs.core.chunk_rest.call(null,seq__22465_22484__$1);
var G__22487 = c__10176__auto___22485;
var G__22488 = cljs.core.count.call(null,c__10176__auto___22485);
var G__22489 = 0;
seq__22465_22472 = G__22486;
chunk__22466_22473 = G__22487;
count__22467_22474 = G__22488;
i__22468_22475 = G__22489;
continue;
}
} else
{var vec__22470_22490 = cljs.core.first.call(null,seq__22465_22484__$1);var k_22491__$1 = cljs.core.nth.call(null,vec__22470_22490,0,null);var v_22492__$1 = cljs.core.nth.call(null,vec__22470_22490,1,null);set_attr_BANG_.call(null,elem__$1,k_22491__$1,v_22492__$1);
{
var G__22493 = cljs.core.next.call(null,seq__22465_22484__$1);
var G__22494 = null;
var G__22495 = 0;
var G__22496 = 0;
seq__22465_22472 = G__22493;
chunk__22466_22473 = G__22494;
count__22467_22474 = G__22495;
i__22468_22475 = G__22496;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__22471 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22471__delegate.call(this,elem,k,v,kvs);};
G__22471.cljs$lang$maxFixedArity = 3;
G__22471.cljs$lang$applyTo = (function (arglist__22497){
var elem = cljs.core.first(arglist__22497);
arglist__22497 = cljs.core.next(arglist__22497);
var k = cljs.core.first(arglist__22497);
arglist__22497 = cljs.core.next(arglist__22497);
var v = cljs.core.first(arglist__22497);
var kvs = cljs.core.rest(arglist__22497);
return G__22471__delegate(elem,k,v,kvs);
});
G__22471.cljs$core$IFn$_invoke$arity$variadic = G__22471__delegate;
return G__22471;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__22506__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__22502_22507 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__22503_22508 = null;var count__22504_22509 = 0;var i__22505_22510 = 0;while(true){
if((i__22505_22510 < count__22504_22509))
{var k_22511__$1 = cljs.core._nth.call(null,chunk__22503_22508,i__22505_22510);remove_attr_BANG_.call(null,elem__$1,k_22511__$1);
{
var G__22512 = seq__22502_22507;
var G__22513 = chunk__22503_22508;
var G__22514 = count__22504_22509;
var G__22515 = (i__22505_22510 + 1);
seq__22502_22507 = G__22512;
chunk__22503_22508 = G__22513;
count__22504_22509 = G__22514;
i__22505_22510 = G__22515;
continue;
}
} else
{var temp__4126__auto___22516 = cljs.core.seq.call(null,seq__22502_22507);if(temp__4126__auto___22516)
{var seq__22502_22517__$1 = temp__4126__auto___22516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22502_22517__$1))
{var c__10176__auto___22518 = cljs.core.chunk_first.call(null,seq__22502_22517__$1);{
var G__22519 = cljs.core.chunk_rest.call(null,seq__22502_22517__$1);
var G__22520 = c__10176__auto___22518;
var G__22521 = cljs.core.count.call(null,c__10176__auto___22518);
var G__22522 = 0;
seq__22502_22507 = G__22519;
chunk__22503_22508 = G__22520;
count__22504_22509 = G__22521;
i__22505_22510 = G__22522;
continue;
}
} else
{var k_22523__$1 = cljs.core.first.call(null,seq__22502_22517__$1);remove_attr_BANG_.call(null,elem__$1,k_22523__$1);
{
var G__22524 = cljs.core.next.call(null,seq__22502_22517__$1);
var G__22525 = null;
var G__22526 = 0;
var G__22527 = 0;
seq__22502_22507 = G__22524;
chunk__22503_22508 = G__22525;
count__22504_22509 = G__22526;
i__22505_22510 = G__22527;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__22506 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22506__delegate.call(this,elem,k,ks);};
G__22506.cljs$lang$maxFixedArity = 2;
G__22506.cljs$lang$applyTo = (function (arglist__22528){
var elem = cljs.core.first(arglist__22528);
arglist__22528 = cljs.core.next(arglist__22528);
var k = cljs.core.first(arglist__22528);
var ks = cljs.core.rest(arglist__22528);
return G__22506__delegate(elem,k,ks);
});
G__22506.cljs$core$IFn$_invoke$arity$variadic = G__22506__delegate;
return G__22506;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__22530 = dommy.template.__GT_node_like.call(null,elem);G__22530.style.display = ((show_QMARK_)?"":"none");
return G__22530;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__22532 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__22532,false);
return G__22532;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__22534 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__22534,true);
return G__22534;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__22536 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__22536["constructor"] = Object);
return G__22536;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
