// Compiled by ClojureScript 0.0-2261
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__7606__auto__ = elem.textContent;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__597107 = dommy.template.__GT_node_like.call(null,parent);G__597107.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__597107;
});
var append_BANG___3 = (function() { 
var G__597112__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__597108_597113 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__597109_597114 = null;var count__597110_597115 = (0);var i__597111_597116 = (0);while(true){
if((i__597111_597116 < count__597110_597115))
{var c_597117 = cljs.core._nth.call(null,chunk__597109_597114,i__597111_597116);append_BANG_.call(null,parent__$1,c_597117);
{
var G__597118 = seq__597108_597113;
var G__597119 = chunk__597109_597114;
var G__597120 = count__597110_597115;
var G__597121 = (i__597111_597116 + (1));
seq__597108_597113 = G__597118;
chunk__597109_597114 = G__597119;
count__597110_597115 = G__597120;
i__597111_597116 = G__597121;
continue;
}
} else
{var temp__4126__auto___597122 = cljs.core.seq.call(null,seq__597108_597113);if(temp__4126__auto___597122)
{var seq__597108_597123__$1 = temp__4126__auto___597122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597108_597123__$1))
{var c__8362__auto___597124 = cljs.core.chunk_first.call(null,seq__597108_597123__$1);{
var G__597125 = cljs.core.chunk_rest.call(null,seq__597108_597123__$1);
var G__597126 = c__8362__auto___597124;
var G__597127 = cljs.core.count.call(null,c__8362__auto___597124);
var G__597128 = (0);
seq__597108_597113 = G__597125;
chunk__597109_597114 = G__597126;
count__597110_597115 = G__597127;
i__597111_597116 = G__597128;
continue;
}
} else
{var c_597129 = cljs.core.first.call(null,seq__597108_597123__$1);append_BANG_.call(null,parent__$1,c_597129);
{
var G__597130 = cljs.core.next.call(null,seq__597108_597123__$1);
var G__597131 = null;
var G__597132 = (0);
var G__597133 = (0);
seq__597108_597113 = G__597130;
chunk__597109_597114 = G__597131;
count__597110_597115 = G__597132;
i__597111_597116 = G__597133;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__597112 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__597112__delegate.call(this,parent,child,more_children);};
G__597112.cljs$lang$maxFixedArity = 2;
G__597112.cljs$lang$applyTo = (function (arglist__597134){
var parent = cljs.core.first(arglist__597134);
arglist__597134 = cljs.core.next(arglist__597134);
var child = cljs.core.first(arglist__597134);
var more_children = cljs.core.rest(arglist__597134);
return G__597112__delegate(parent,child,more_children);
});
G__597112.cljs$core$IFn$_invoke$arity$variadic = G__597112__delegate;
return G__597112;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__597143__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__597139_597144 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__597140_597145 = null;var count__597141_597146 = (0);var i__597142_597147 = (0);while(true){
if((i__597142_597147 < count__597141_597146))
{var c_597148 = cljs.core._nth.call(null,chunk__597140_597145,i__597142_597147);prepend_BANG_.call(null,parent__$1,c_597148);
{
var G__597149 = seq__597139_597144;
var G__597150 = chunk__597140_597145;
var G__597151 = count__597141_597146;
var G__597152 = (i__597142_597147 + (1));
seq__597139_597144 = G__597149;
chunk__597140_597145 = G__597150;
count__597141_597146 = G__597151;
i__597142_597147 = G__597152;
continue;
}
} else
{var temp__4126__auto___597153 = cljs.core.seq.call(null,seq__597139_597144);if(temp__4126__auto___597153)
{var seq__597139_597154__$1 = temp__4126__auto___597153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597139_597154__$1))
{var c__8362__auto___597155 = cljs.core.chunk_first.call(null,seq__597139_597154__$1);{
var G__597156 = cljs.core.chunk_rest.call(null,seq__597139_597154__$1);
var G__597157 = c__8362__auto___597155;
var G__597158 = cljs.core.count.call(null,c__8362__auto___597155);
var G__597159 = (0);
seq__597139_597144 = G__597156;
chunk__597140_597145 = G__597157;
count__597141_597146 = G__597158;
i__597142_597147 = G__597159;
continue;
}
} else
{var c_597160 = cljs.core.first.call(null,seq__597139_597154__$1);prepend_BANG_.call(null,parent__$1,c_597160);
{
var G__597161 = cljs.core.next.call(null,seq__597139_597154__$1);
var G__597162 = null;
var G__597163 = (0);
var G__597164 = (0);
seq__597139_597144 = G__597161;
chunk__597140_597145 = G__597162;
count__597141_597146 = G__597163;
i__597142_597147 = G__597164;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__597143 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__597143__delegate.call(this,parent,child,more_children);};
G__597143.cljs$lang$maxFixedArity = 2;
G__597143.cljs$lang$applyTo = (function (arglist__597165){
var parent = cljs.core.first(arglist__597165);
arglist__597165 = cljs.core.next(arglist__597165);
var child = cljs.core.first(arglist__597165);
var more_children = cljs.core.rest(arglist__597165);
return G__597143__delegate(parent,child,more_children);
});
G__597143.cljs$core$IFn$_invoke$arity$variadic = G__597143__delegate;
return G__597143;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___597166 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___597166))
{var next_597167 = temp__4124__auto___597166;parent.insertBefore(actual_node,next_597167);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__597169 = dommy.template.__GT_node_like.call(null,parent);G__597169.innerHTML = "";
dommy.core.append_BANG_.call(null,G__597169,node_like);
return G__597169;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__597171 = elem__$1.parentNode;G__597171.removeChild(elem__$1);
return G__597171;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__597177){var vec__597178 = p__597177;var k = cljs.core.nth.call(null,vec__597178,(0),null);var v = cljs.core.nth.call(null,vec__597178,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t597179 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t597179 = (function (v,k,vec__597178,p__597177,container,key_selectors_map,template,selector_map,meta597180){
this.v = v;
this.k = k;
this.vec__597178 = vec__597178;
this.p__597177 = p__597177;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta597180 = meta597180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t597179.cljs$lang$type = true;
dommy.core.t597179.cljs$lang$ctorStr = "dommy.core/t597179";
dommy.core.t597179.cljs$lang$ctorPrWriter = ((function (vec__597178,k,v,container){
return (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"dommy.core/t597179");
});})(vec__597178,k,v,container))
;
dommy.core.t597179.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__597178,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__597178,k,v,container))
;
dommy.core.t597179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__597178,k,v,container){
return (function (_597181){var self__ = this;
var _597181__$1 = this;return self__.meta597180;
});})(vec__597178,k,v,container))
;
dommy.core.t597179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__597178,k,v,container){
return (function (_597181,meta597180__$1){var self__ = this;
var _597181__$1 = this;return (new dommy.core.t597179(self__.v,self__.k,self__.vec__597178,self__.p__597177,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta597180__$1));
});})(vec__597178,k,v,container))
;
dommy.core.__GT_t597179 = ((function (vec__597178,k,v,container){
return (function __GT_t597179(v__$1,k__$1,vec__597178__$1,p__597177__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta597180){return (new dommy.core.t597179(v__$1,k__$1,vec__597178__$1,p__597177__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta597180));
});})(vec__597178,k,v,container))
;
}
return (new dommy.core.t597179(v,k,vec__597178,p__597177,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__597182_SHARP_){return p1__597182_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__597183_SHARP_){return !((p1__597183_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__597184){var vec__597185 = p__597184;var special_mouse_event = cljs.core.nth.call(null,vec__597185,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__597185,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__597185,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__597185,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7606__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__7594__auto__ = related_target;if(cljs.core.truth_(and__7594__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__7594__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__597185,special_mouse_event,real_mouse_event))
});})(vec__597185,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__7594__auto__ = selected_target;if(cljs.core.truth_(and__7594__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__7594__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__7606__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__597186){
var elem = cljs.core.first(arglist__597186);
arglist__597186 = cljs.core.next(arglist__597186);
var f = cljs.core.first(arglist__597186);
var args = cljs.core.rest(arglist__597186);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__597187_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__597187_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__597211_597234 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_597235 = cljs.core.nth.call(null,vec__597211_597234,(0),null);var selector_597236 = cljs.core.nth.call(null,vec__597211_597234,(1),null);var seq__597212_597237 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__597219_597238 = null;var count__597220_597239 = (0);var i__597221_597240 = (0);while(true){
if((i__597221_597240 < count__597220_597239))
{var vec__597228_597241 = cljs.core._nth.call(null,chunk__597219_597238,i__597221_597240);var orig_type_597242 = cljs.core.nth.call(null,vec__597228_597241,(0),null);var f_597243 = cljs.core.nth.call(null,vec__597228_597241,(1),null);var seq__597222_597244 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_597242,new cljs.core.PersistentArrayMap.fromArray([orig_type_597242,cljs.core.identity], true, false)));var chunk__597224_597245 = null;var count__597225_597246 = (0);var i__597226_597247 = (0);while(true){
if((i__597226_597247 < count__597225_597246))
{var vec__597229_597248 = cljs.core._nth.call(null,chunk__597224_597245,i__597226_597247);var actual_type_597249 = cljs.core.nth.call(null,vec__597229_597248,(0),null);var factory_597250 = cljs.core.nth.call(null,vec__597229_597248,(1),null);var canonical_f_597251 = (cljs.core.truth_(selector_597236)?cljs.core.partial.call(null,dommy.core.live_listener,elem_597235,selector_597236):cljs.core.identity).call(null,factory_597250.call(null,f_597243));dommy.core.update_event_listeners_BANG_.call(null,elem_597235,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_597236,actual_type_597249,f_597243], null),canonical_f_597251);
if(cljs.core.truth_(elem_597235.addEventListener))
{elem_597235.addEventListener(cljs.core.name.call(null,actual_type_597249),canonical_f_597251);
} else
{elem_597235.attachEvent(cljs.core.name.call(null,actual_type_597249),canonical_f_597251);
}
{
var G__597252 = seq__597222_597244;
var G__597253 = chunk__597224_597245;
var G__597254 = count__597225_597246;
var G__597255 = (i__597226_597247 + (1));
seq__597222_597244 = G__597252;
chunk__597224_597245 = G__597253;
count__597225_597246 = G__597254;
i__597226_597247 = G__597255;
continue;
}
} else
{var temp__4126__auto___597256 = cljs.core.seq.call(null,seq__597222_597244);if(temp__4126__auto___597256)
{var seq__597222_597257__$1 = temp__4126__auto___597256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597222_597257__$1))
{var c__8362__auto___597258 = cljs.core.chunk_first.call(null,seq__597222_597257__$1);{
var G__597259 = cljs.core.chunk_rest.call(null,seq__597222_597257__$1);
var G__597260 = c__8362__auto___597258;
var G__597261 = cljs.core.count.call(null,c__8362__auto___597258);
var G__597262 = (0);
seq__597222_597244 = G__597259;
chunk__597224_597245 = G__597260;
count__597225_597246 = G__597261;
i__597226_597247 = G__597262;
continue;
}
} else
{var vec__597230_597263 = cljs.core.first.call(null,seq__597222_597257__$1);var actual_type_597264 = cljs.core.nth.call(null,vec__597230_597263,(0),null);var factory_597265 = cljs.core.nth.call(null,vec__597230_597263,(1),null);var canonical_f_597266 = (cljs.core.truth_(selector_597236)?cljs.core.partial.call(null,dommy.core.live_listener,elem_597235,selector_597236):cljs.core.identity).call(null,factory_597265.call(null,f_597243));dommy.core.update_event_listeners_BANG_.call(null,elem_597235,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_597236,actual_type_597264,f_597243], null),canonical_f_597266);
if(cljs.core.truth_(elem_597235.addEventListener))
{elem_597235.addEventListener(cljs.core.name.call(null,actual_type_597264),canonical_f_597266);
} else
{elem_597235.attachEvent(cljs.core.name.call(null,actual_type_597264),canonical_f_597266);
}
{
var G__597267 = cljs.core.next.call(null,seq__597222_597257__$1);
var G__597268 = null;
var G__597269 = (0);
var G__597270 = (0);
seq__597222_597244 = G__597267;
chunk__597224_597245 = G__597268;
count__597225_597246 = G__597269;
i__597226_597247 = G__597270;
continue;
}
}
} else
{}
}
break;
}
{
var G__597271 = seq__597212_597237;
var G__597272 = chunk__597219_597238;
var G__597273 = count__597220_597239;
var G__597274 = (i__597221_597240 + (1));
seq__597212_597237 = G__597271;
chunk__597219_597238 = G__597272;
count__597220_597239 = G__597273;
i__597221_597240 = G__597274;
continue;
}
} else
{var temp__4126__auto___597275 = cljs.core.seq.call(null,seq__597212_597237);if(temp__4126__auto___597275)
{var seq__597212_597276__$1 = temp__4126__auto___597275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597212_597276__$1))
{var c__8362__auto___597277 = cljs.core.chunk_first.call(null,seq__597212_597276__$1);{
var G__597278 = cljs.core.chunk_rest.call(null,seq__597212_597276__$1);
var G__597279 = c__8362__auto___597277;
var G__597280 = cljs.core.count.call(null,c__8362__auto___597277);
var G__597281 = (0);
seq__597212_597237 = G__597278;
chunk__597219_597238 = G__597279;
count__597220_597239 = G__597280;
i__597221_597240 = G__597281;
continue;
}
} else
{var vec__597231_597282 = cljs.core.first.call(null,seq__597212_597276__$1);var orig_type_597283 = cljs.core.nth.call(null,vec__597231_597282,(0),null);var f_597284 = cljs.core.nth.call(null,vec__597231_597282,(1),null);var seq__597213_597285 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_597283,new cljs.core.PersistentArrayMap.fromArray([orig_type_597283,cljs.core.identity], true, false)));var chunk__597215_597286 = null;var count__597216_597287 = (0);var i__597217_597288 = (0);while(true){
if((i__597217_597288 < count__597216_597287))
{var vec__597232_597289 = cljs.core._nth.call(null,chunk__597215_597286,i__597217_597288);var actual_type_597290 = cljs.core.nth.call(null,vec__597232_597289,(0),null);var factory_597291 = cljs.core.nth.call(null,vec__597232_597289,(1),null);var canonical_f_597292 = (cljs.core.truth_(selector_597236)?cljs.core.partial.call(null,dommy.core.live_listener,elem_597235,selector_597236):cljs.core.identity).call(null,factory_597291.call(null,f_597284));dommy.core.update_event_listeners_BANG_.call(null,elem_597235,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_597236,actual_type_597290,f_597284], null),canonical_f_597292);
if(cljs.core.truth_(elem_597235.addEventListener))
{elem_597235.addEventListener(cljs.core.name.call(null,actual_type_597290),canonical_f_597292);
} else
{elem_597235.attachEvent(cljs.core.name.call(null,actual_type_597290),canonical_f_597292);
}
{
var G__597293 = seq__597213_597285;
var G__597294 = chunk__597215_597286;
var G__597295 = count__597216_597287;
var G__597296 = (i__597217_597288 + (1));
seq__597213_597285 = G__597293;
chunk__597215_597286 = G__597294;
count__597216_597287 = G__597295;
i__597217_597288 = G__597296;
continue;
}
} else
{var temp__4126__auto___597297__$1 = cljs.core.seq.call(null,seq__597213_597285);if(temp__4126__auto___597297__$1)
{var seq__597213_597298__$1 = temp__4126__auto___597297__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597213_597298__$1))
{var c__8362__auto___597299 = cljs.core.chunk_first.call(null,seq__597213_597298__$1);{
var G__597300 = cljs.core.chunk_rest.call(null,seq__597213_597298__$1);
var G__597301 = c__8362__auto___597299;
var G__597302 = cljs.core.count.call(null,c__8362__auto___597299);
var G__597303 = (0);
seq__597213_597285 = G__597300;
chunk__597215_597286 = G__597301;
count__597216_597287 = G__597302;
i__597217_597288 = G__597303;
continue;
}
} else
{var vec__597233_597304 = cljs.core.first.call(null,seq__597213_597298__$1);var actual_type_597305 = cljs.core.nth.call(null,vec__597233_597304,(0),null);var factory_597306 = cljs.core.nth.call(null,vec__597233_597304,(1),null);var canonical_f_597307 = (cljs.core.truth_(selector_597236)?cljs.core.partial.call(null,dommy.core.live_listener,elem_597235,selector_597236):cljs.core.identity).call(null,factory_597306.call(null,f_597284));dommy.core.update_event_listeners_BANG_.call(null,elem_597235,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_597236,actual_type_597305,f_597284], null),canonical_f_597307);
if(cljs.core.truth_(elem_597235.addEventListener))
{elem_597235.addEventListener(cljs.core.name.call(null,actual_type_597305),canonical_f_597307);
} else
{elem_597235.attachEvent(cljs.core.name.call(null,actual_type_597305),canonical_f_597307);
}
{
var G__597308 = cljs.core.next.call(null,seq__597213_597298__$1);
var G__597309 = null;
var G__597310 = (0);
var G__597311 = (0);
seq__597213_597285 = G__597308;
chunk__597215_597286 = G__597309;
count__597216_597287 = G__597310;
i__597217_597288 = G__597311;
continue;
}
}
} else
{}
}
break;
}
{
var G__597312 = cljs.core.next.call(null,seq__597212_597276__$1);
var G__597313 = null;
var G__597314 = (0);
var G__597315 = (0);
seq__597212_597237 = G__597312;
chunk__597219_597238 = G__597313;
count__597220_597239 = G__597314;
i__597221_597240 = G__597315;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__597316){
var elem_sel = cljs.core.first(arglist__597316);
var type_fs = cljs.core.rest(arglist__597316);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__597340_597363 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_597364 = cljs.core.nth.call(null,vec__597340_597363,(0),null);var selector_597365 = cljs.core.nth.call(null,vec__597340_597363,(1),null);var seq__597341_597366 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__597348_597367 = null;var count__597349_597368 = (0);var i__597350_597369 = (0);while(true){
if((i__597350_597369 < count__597349_597368))
{var vec__597357_597370 = cljs.core._nth.call(null,chunk__597348_597367,i__597350_597369);var orig_type_597371 = cljs.core.nth.call(null,vec__597357_597370,(0),null);var f_597372 = cljs.core.nth.call(null,vec__597357_597370,(1),null);var seq__597351_597373 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_597371,new cljs.core.PersistentArrayMap.fromArray([orig_type_597371,cljs.core.identity], true, false)));var chunk__597353_597374 = null;var count__597354_597375 = (0);var i__597355_597376 = (0);while(true){
if((i__597355_597376 < count__597354_597375))
{var vec__597358_597377 = cljs.core._nth.call(null,chunk__597353_597374,i__597355_597376);var actual_type_597378 = cljs.core.nth.call(null,vec__597358_597377,(0),null);var __597379 = cljs.core.nth.call(null,vec__597358_597377,(1),null);var keys_597380 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_597365,actual_type_597378,f_597372], null);var canonical_f_597381 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_597364),keys_597380);dommy.core.update_event_listeners_BANG_.call(null,elem_597364,dommy.utils.dissoc_in,keys_597380);
if(cljs.core.truth_(elem_597364.removeEventListener))
{elem_597364.removeEventListener(cljs.core.name.call(null,actual_type_597378),canonical_f_597381);
} else
{elem_597364.detachEvent(cljs.core.name.call(null,actual_type_597378),canonical_f_597381);
}
{
var G__597382 = seq__597351_597373;
var G__597383 = chunk__597353_597374;
var G__597384 = count__597354_597375;
var G__597385 = (i__597355_597376 + (1));
seq__597351_597373 = G__597382;
chunk__597353_597374 = G__597383;
count__597354_597375 = G__597384;
i__597355_597376 = G__597385;
continue;
}
} else
{var temp__4126__auto___597386 = cljs.core.seq.call(null,seq__597351_597373);if(temp__4126__auto___597386)
{var seq__597351_597387__$1 = temp__4126__auto___597386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597351_597387__$1))
{var c__8362__auto___597388 = cljs.core.chunk_first.call(null,seq__597351_597387__$1);{
var G__597389 = cljs.core.chunk_rest.call(null,seq__597351_597387__$1);
var G__597390 = c__8362__auto___597388;
var G__597391 = cljs.core.count.call(null,c__8362__auto___597388);
var G__597392 = (0);
seq__597351_597373 = G__597389;
chunk__597353_597374 = G__597390;
count__597354_597375 = G__597391;
i__597355_597376 = G__597392;
continue;
}
} else
{var vec__597359_597393 = cljs.core.first.call(null,seq__597351_597387__$1);var actual_type_597394 = cljs.core.nth.call(null,vec__597359_597393,(0),null);var __597395 = cljs.core.nth.call(null,vec__597359_597393,(1),null);var keys_597396 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_597365,actual_type_597394,f_597372], null);var canonical_f_597397 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_597364),keys_597396);dommy.core.update_event_listeners_BANG_.call(null,elem_597364,dommy.utils.dissoc_in,keys_597396);
if(cljs.core.truth_(elem_597364.removeEventListener))
{elem_597364.removeEventListener(cljs.core.name.call(null,actual_type_597394),canonical_f_597397);
} else
{elem_597364.detachEvent(cljs.core.name.call(null,actual_type_597394),canonical_f_597397);
}
{
var G__597398 = cljs.core.next.call(null,seq__597351_597387__$1);
var G__597399 = null;
var G__597400 = (0);
var G__597401 = (0);
seq__597351_597373 = G__597398;
chunk__597353_597374 = G__597399;
count__597354_597375 = G__597400;
i__597355_597376 = G__597401;
continue;
}
}
} else
{}
}
break;
}
{
var G__597402 = seq__597341_597366;
var G__597403 = chunk__597348_597367;
var G__597404 = count__597349_597368;
var G__597405 = (i__597350_597369 + (1));
seq__597341_597366 = G__597402;
chunk__597348_597367 = G__597403;
count__597349_597368 = G__597404;
i__597350_597369 = G__597405;
continue;
}
} else
{var temp__4126__auto___597406 = cljs.core.seq.call(null,seq__597341_597366);if(temp__4126__auto___597406)
{var seq__597341_597407__$1 = temp__4126__auto___597406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597341_597407__$1))
{var c__8362__auto___597408 = cljs.core.chunk_first.call(null,seq__597341_597407__$1);{
var G__597409 = cljs.core.chunk_rest.call(null,seq__597341_597407__$1);
var G__597410 = c__8362__auto___597408;
var G__597411 = cljs.core.count.call(null,c__8362__auto___597408);
var G__597412 = (0);
seq__597341_597366 = G__597409;
chunk__597348_597367 = G__597410;
count__597349_597368 = G__597411;
i__597350_597369 = G__597412;
continue;
}
} else
{var vec__597360_597413 = cljs.core.first.call(null,seq__597341_597407__$1);var orig_type_597414 = cljs.core.nth.call(null,vec__597360_597413,(0),null);var f_597415 = cljs.core.nth.call(null,vec__597360_597413,(1),null);var seq__597342_597416 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_597414,new cljs.core.PersistentArrayMap.fromArray([orig_type_597414,cljs.core.identity], true, false)));var chunk__597344_597417 = null;var count__597345_597418 = (0);var i__597346_597419 = (0);while(true){
if((i__597346_597419 < count__597345_597418))
{var vec__597361_597420 = cljs.core._nth.call(null,chunk__597344_597417,i__597346_597419);var actual_type_597421 = cljs.core.nth.call(null,vec__597361_597420,(0),null);var __597422 = cljs.core.nth.call(null,vec__597361_597420,(1),null);var keys_597423 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_597365,actual_type_597421,f_597415], null);var canonical_f_597424 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_597364),keys_597423);dommy.core.update_event_listeners_BANG_.call(null,elem_597364,dommy.utils.dissoc_in,keys_597423);
if(cljs.core.truth_(elem_597364.removeEventListener))
{elem_597364.removeEventListener(cljs.core.name.call(null,actual_type_597421),canonical_f_597424);
} else
{elem_597364.detachEvent(cljs.core.name.call(null,actual_type_597421),canonical_f_597424);
}
{
var G__597425 = seq__597342_597416;
var G__597426 = chunk__597344_597417;
var G__597427 = count__597345_597418;
var G__597428 = (i__597346_597419 + (1));
seq__597342_597416 = G__597425;
chunk__597344_597417 = G__597426;
count__597345_597418 = G__597427;
i__597346_597419 = G__597428;
continue;
}
} else
{var temp__4126__auto___597429__$1 = cljs.core.seq.call(null,seq__597342_597416);if(temp__4126__auto___597429__$1)
{var seq__597342_597430__$1 = temp__4126__auto___597429__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597342_597430__$1))
{var c__8362__auto___597431 = cljs.core.chunk_first.call(null,seq__597342_597430__$1);{
var G__597432 = cljs.core.chunk_rest.call(null,seq__597342_597430__$1);
var G__597433 = c__8362__auto___597431;
var G__597434 = cljs.core.count.call(null,c__8362__auto___597431);
var G__597435 = (0);
seq__597342_597416 = G__597432;
chunk__597344_597417 = G__597433;
count__597345_597418 = G__597434;
i__597346_597419 = G__597435;
continue;
}
} else
{var vec__597362_597436 = cljs.core.first.call(null,seq__597342_597430__$1);var actual_type_597437 = cljs.core.nth.call(null,vec__597362_597436,(0),null);var __597438 = cljs.core.nth.call(null,vec__597362_597436,(1),null);var keys_597439 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_597365,actual_type_597437,f_597415], null);var canonical_f_597440 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_597364),keys_597439);dommy.core.update_event_listeners_BANG_.call(null,elem_597364,dommy.utils.dissoc_in,keys_597439);
if(cljs.core.truth_(elem_597364.removeEventListener))
{elem_597364.removeEventListener(cljs.core.name.call(null,actual_type_597437),canonical_f_597440);
} else
{elem_597364.detachEvent(cljs.core.name.call(null,actual_type_597437),canonical_f_597440);
}
{
var G__597441 = cljs.core.next.call(null,seq__597342_597430__$1);
var G__597442 = null;
var G__597443 = (0);
var G__597444 = (0);
seq__597342_597416 = G__597441;
chunk__597344_597417 = G__597442;
count__597345_597418 = G__597443;
i__597346_597419 = G__597444;
continue;
}
}
} else
{}
}
break;
}
{
var G__597445 = cljs.core.next.call(null,seq__597341_597407__$1);
var G__597446 = null;
var G__597447 = (0);
var G__597448 = (0);
seq__597341_597366 = G__597445;
chunk__597348_597367 = G__597446;
count__597349_597368 = G__597447;
i__597350_597369 = G__597448;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__597449){
var elem_sel = cljs.core.first(arglist__597449);
var type_fs = cljs.core.rest(arglist__597449);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__597457_597464 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_597465 = cljs.core.nth.call(null,vec__597457_597464,(0),null);var selector_597466 = cljs.core.nth.call(null,vec__597457_597464,(1),null);var seq__597458_597467 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__597459_597468 = null;var count__597460_597469 = (0);var i__597461_597470 = (0);while(true){
if((i__597461_597470 < count__597460_597469))
{var vec__597462_597471 = cljs.core._nth.call(null,chunk__597459_597468,i__597461_597470);var type_597472 = cljs.core.nth.call(null,vec__597462_597471,(0),null);var f_597473 = cljs.core.nth.call(null,vec__597462_597471,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_597472,((function (seq__597458_597467,chunk__597459_597468,count__597460_597469,i__597461_597470,vec__597462_597471,type_597472,f_597473,vec__597457_597464,elem_597465,selector_597466){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_597472,this_fn);
return f_597473.call(null,e);
});})(seq__597458_597467,chunk__597459_597468,count__597460_597469,i__597461_597470,vec__597462_597471,type_597472,f_597473,vec__597457_597464,elem_597465,selector_597466))
);
{
var G__597474 = seq__597458_597467;
var G__597475 = chunk__597459_597468;
var G__597476 = count__597460_597469;
var G__597477 = (i__597461_597470 + (1));
seq__597458_597467 = G__597474;
chunk__597459_597468 = G__597475;
count__597460_597469 = G__597476;
i__597461_597470 = G__597477;
continue;
}
} else
{var temp__4126__auto___597478 = cljs.core.seq.call(null,seq__597458_597467);if(temp__4126__auto___597478)
{var seq__597458_597479__$1 = temp__4126__auto___597478;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597458_597479__$1))
{var c__8362__auto___597480 = cljs.core.chunk_first.call(null,seq__597458_597479__$1);{
var G__597481 = cljs.core.chunk_rest.call(null,seq__597458_597479__$1);
var G__597482 = c__8362__auto___597480;
var G__597483 = cljs.core.count.call(null,c__8362__auto___597480);
var G__597484 = (0);
seq__597458_597467 = G__597481;
chunk__597459_597468 = G__597482;
count__597460_597469 = G__597483;
i__597461_597470 = G__597484;
continue;
}
} else
{var vec__597463_597485 = cljs.core.first.call(null,seq__597458_597479__$1);var type_597486 = cljs.core.nth.call(null,vec__597463_597485,(0),null);var f_597487 = cljs.core.nth.call(null,vec__597463_597485,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_597486,((function (seq__597458_597467,chunk__597459_597468,count__597460_597469,i__597461_597470,vec__597463_597485,type_597486,f_597487,seq__597458_597479__$1,temp__4126__auto___597478,vec__597457_597464,elem_597465,selector_597466){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_597486,this_fn);
return f_597487.call(null,e);
});})(seq__597458_597467,chunk__597459_597468,count__597460_597469,i__597461_597470,vec__597463_597485,type_597486,f_597487,seq__597458_597479__$1,temp__4126__auto___597478,vec__597457_597464,elem_597465,selector_597466))
);
{
var G__597488 = cljs.core.next.call(null,seq__597458_597479__$1);
var G__597489 = null;
var G__597490 = (0);
var G__597491 = (0);
seq__597458_597467 = G__597488;
chunk__597459_597468 = G__597489;
count__597460_597469 = G__597490;
i__597461_597470 = G__597491;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__597492){
var elem_sel = cljs.core.first(arglist__597492);
var type_fs = cljs.core.rest(arglist__597492);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__597493){var vec__597495 = p__597493;var update_event_BANG_ = cljs.core.nth.call(null,vec__597495,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__7606__auto__ = update_event_BANG_;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__597493 = null;if (arguments.length > 2) {
  p__597493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__597493);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__597496){
var node = cljs.core.first(arglist__597496);
arglist__597496 = cljs.core.next(arglist__597496);
var event_type = cljs.core.first(arglist__597496);
var p__597493 = cljs.core.rest(arglist__597496);
return fire_BANG___delegate(node,event_type,p__597493);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map