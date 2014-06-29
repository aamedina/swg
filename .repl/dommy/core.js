// Compiled by ClojureScript 0.0-2234
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
dommy.core.text = (function text(elem){var or__9420__auto__ = elem.textContent;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
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
var append_BANG___2 = (function (parent,child){var G__21860 = dommy.template.__GT_node_like.call(null,parent);G__21860.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__21860;
});
var append_BANG___3 = (function() { 
var G__21865__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__21861_21866 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__21862_21867 = null;var count__21863_21868 = 0;var i__21864_21869 = 0;while(true){
if((i__21864_21869 < count__21863_21868))
{var c_21870 = cljs.core._nth.call(null,chunk__21862_21867,i__21864_21869);append_BANG_.call(null,parent__$1,c_21870);
{
var G__21871 = seq__21861_21866;
var G__21872 = chunk__21862_21867;
var G__21873 = count__21863_21868;
var G__21874 = (i__21864_21869 + 1);
seq__21861_21866 = G__21871;
chunk__21862_21867 = G__21872;
count__21863_21868 = G__21873;
i__21864_21869 = G__21874;
continue;
}
} else
{var temp__4126__auto___21875 = cljs.core.seq.call(null,seq__21861_21866);if(temp__4126__auto___21875)
{var seq__21861_21876__$1 = temp__4126__auto___21875;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21861_21876__$1))
{var c__10176__auto___21877 = cljs.core.chunk_first.call(null,seq__21861_21876__$1);{
var G__21878 = cljs.core.chunk_rest.call(null,seq__21861_21876__$1);
var G__21879 = c__10176__auto___21877;
var G__21880 = cljs.core.count.call(null,c__10176__auto___21877);
var G__21881 = 0;
seq__21861_21866 = G__21878;
chunk__21862_21867 = G__21879;
count__21863_21868 = G__21880;
i__21864_21869 = G__21881;
continue;
}
} else
{var c_21882 = cljs.core.first.call(null,seq__21861_21876__$1);append_BANG_.call(null,parent__$1,c_21882);
{
var G__21883 = cljs.core.next.call(null,seq__21861_21876__$1);
var G__21884 = null;
var G__21885 = 0;
var G__21886 = 0;
seq__21861_21866 = G__21883;
chunk__21862_21867 = G__21884;
count__21863_21868 = G__21885;
i__21864_21869 = G__21886;
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
var G__21865 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21865__delegate.call(this,parent,child,more_children);};
G__21865.cljs$lang$maxFixedArity = 2;
G__21865.cljs$lang$applyTo = (function (arglist__21887){
var parent = cljs.core.first(arglist__21887);
arglist__21887 = cljs.core.next(arglist__21887);
var child = cljs.core.first(arglist__21887);
var more_children = cljs.core.rest(arglist__21887);
return G__21865__delegate(parent,child,more_children);
});
G__21865.cljs$core$IFn$_invoke$arity$variadic = G__21865__delegate;
return G__21865;
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
var G__21896__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__21892_21897 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__21893_21898 = null;var count__21894_21899 = 0;var i__21895_21900 = 0;while(true){
if((i__21895_21900 < count__21894_21899))
{var c_21901 = cljs.core._nth.call(null,chunk__21893_21898,i__21895_21900);prepend_BANG_.call(null,parent__$1,c_21901);
{
var G__21902 = seq__21892_21897;
var G__21903 = chunk__21893_21898;
var G__21904 = count__21894_21899;
var G__21905 = (i__21895_21900 + 1);
seq__21892_21897 = G__21902;
chunk__21893_21898 = G__21903;
count__21894_21899 = G__21904;
i__21895_21900 = G__21905;
continue;
}
} else
{var temp__4126__auto___21906 = cljs.core.seq.call(null,seq__21892_21897);if(temp__4126__auto___21906)
{var seq__21892_21907__$1 = temp__4126__auto___21906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21892_21907__$1))
{var c__10176__auto___21908 = cljs.core.chunk_first.call(null,seq__21892_21907__$1);{
var G__21909 = cljs.core.chunk_rest.call(null,seq__21892_21907__$1);
var G__21910 = c__10176__auto___21908;
var G__21911 = cljs.core.count.call(null,c__10176__auto___21908);
var G__21912 = 0;
seq__21892_21897 = G__21909;
chunk__21893_21898 = G__21910;
count__21894_21899 = G__21911;
i__21895_21900 = G__21912;
continue;
}
} else
{var c_21913 = cljs.core.first.call(null,seq__21892_21907__$1);prepend_BANG_.call(null,parent__$1,c_21913);
{
var G__21914 = cljs.core.next.call(null,seq__21892_21907__$1);
var G__21915 = null;
var G__21916 = 0;
var G__21917 = 0;
seq__21892_21897 = G__21914;
chunk__21893_21898 = G__21915;
count__21894_21899 = G__21916;
i__21895_21900 = G__21917;
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
var G__21896 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21896__delegate.call(this,parent,child,more_children);};
G__21896.cljs$lang$maxFixedArity = 2;
G__21896.cljs$lang$applyTo = (function (arglist__21918){
var parent = cljs.core.first(arglist__21918);
arglist__21918 = cljs.core.next(arglist__21918);
var child = cljs.core.first(arglist__21918);
var more_children = cljs.core.rest(arglist__21918);
return G__21896__delegate(parent,child,more_children);
});
G__21896.cljs$core$IFn$_invoke$arity$variadic = G__21896__delegate;
return G__21896;
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___21919 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___21919))
{var next_21920 = temp__4124__auto___21919;parent.insertBefore(actual_node,next_21920);
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__21922 = dommy.template.__GT_node_like.call(null,parent);G__21922.innerHTML = "";
dommy.core.append_BANG_.call(null,G__21922,node_like);
return G__21922;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__21924 = elem__$1.parentNode;G__21924.removeChild(elem__$1);
return G__21924;
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
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__21930){var vec__21931 = p__21930;var k = cljs.core.nth.call(null,vec__21931,0,null);var v = cljs.core.nth.call(null,vec__21931,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t21932 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t21932 = (function (v,k,vec__21931,p__21930,container,key_selectors_map,template,selector_map,meta21933){
this.v = v;
this.k = k;
this.vec__21931 = vec__21931;
this.p__21930 = p__21930;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta21933 = meta21933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t21932.cljs$lang$type = true;
dommy.core.t21932.cljs$lang$ctorStr = "dommy.core/t21932";
dommy.core.t21932.cljs$lang$ctorPrWriter = ((function (vec__21931,k,v,container){
return (function (this__9987__auto__,writer__9988__auto__,opt__9989__auto__){return cljs.core._write.call(null,writer__9988__auto__,"dommy.core/t21932");
});})(vec__21931,k,v,container))
;
dommy.core.t21932.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__21931,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__21931,k,v,container))
;
dommy.core.t21932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__21931,k,v,container){
return (function (_21934){var self__ = this;
var _21934__$1 = this;return self__.meta21933;
});})(vec__21931,k,v,container))
;
dommy.core.t21932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__21931,k,v,container){
return (function (_21934,meta21933__$1){var self__ = this;
var _21934__$1 = this;return (new dommy.core.t21932(self__.v,self__.k,self__.vec__21931,self__.p__21930,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta21933__$1));
});})(vec__21931,k,v,container))
;
dommy.core.__GT_t21932 = ((function (vec__21931,k,v,container){
return (function __GT_t21932(v__$1,k__$1,vec__21931__$1,p__21930__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta21933){return (new dommy.core.t21932(v__$1,k__$1,vec__21931__$1,p__21930__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta21933));
});})(vec__21931,k,v,container))
;
}
return (new dommy.core.t21932(v,k,vec__21931,p__21930,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__21935_SHARP_){return p1__21935_SHARP_.parentNode;
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
return (function (elem){return (matches.indexOf(elem) >= 0);
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
return (function (p1__21936_SHARP_){return !((p1__21936_SHARP_ === base__$1));
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
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__21937){var vec__21938 = p__21937;var special_mouse_event = cljs.core.nth.call(null,vec__21938,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__21938,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__21938,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__21938,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__9420__auto__ = event.selectedTarget;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__9408__auto__ = related_target;if(cljs.core.truth_(and__9408__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__9408__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__21938,special_mouse_event,real_mouse_event))
});})(vec__21938,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__9408__auto__ = selected_target;if(cljs.core.truth_(and__9408__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__9408__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__9420__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__21939){
var elem = cljs.core.first(arglist__21939);
arglist__21939 = cljs.core.next(arglist__21939);
var f = cljs.core.first(arglist__21939);
var args = cljs.core.rest(arglist__21939);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__21940_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__21940_SHARP_));
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null))))))));
}
var vec__21964_21987 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_21988 = cljs.core.nth.call(null,vec__21964_21987,0,null);var selector_21989 = cljs.core.nth.call(null,vec__21964_21987,1,null);var seq__21965_21990 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__21972_21991 = null;var count__21973_21992 = 0;var i__21974_21993 = 0;while(true){
if((i__21974_21993 < count__21973_21992))
{var vec__21981_21994 = cljs.core._nth.call(null,chunk__21972_21991,i__21974_21993);var orig_type_21995 = cljs.core.nth.call(null,vec__21981_21994,0,null);var f_21996 = cljs.core.nth.call(null,vec__21981_21994,1,null);var seq__21975_21997 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_21995,new cljs.core.PersistentArrayMap.fromArray([orig_type_21995,cljs.core.identity], true, false)));var chunk__21977_21998 = null;var count__21978_21999 = 0;var i__21979_22000 = 0;while(true){
if((i__21979_22000 < count__21978_21999))
{var vec__21982_22001 = cljs.core._nth.call(null,chunk__21977_21998,i__21979_22000);var actual_type_22002 = cljs.core.nth.call(null,vec__21982_22001,0,null);var factory_22003 = cljs.core.nth.call(null,vec__21982_22001,1,null);var canonical_f_22004 = (cljs.core.truth_(selector_21989)?cljs.core.partial.call(null,dommy.core.live_listener,elem_21988,selector_21989):cljs.core.identity).call(null,factory_22003.call(null,f_21996));dommy.core.update_event_listeners_BANG_.call(null,elem_21988,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_21989,actual_type_22002,f_21996], null),canonical_f_22004);
if(cljs.core.truth_(elem_21988.addEventListener))
{elem_21988.addEventListener(cljs.core.name.call(null,actual_type_22002),canonical_f_22004);
} else
{elem_21988.attachEvent(cljs.core.name.call(null,actual_type_22002),canonical_f_22004);
}
{
var G__22005 = seq__21975_21997;
var G__22006 = chunk__21977_21998;
var G__22007 = count__21978_21999;
var G__22008 = (i__21979_22000 + 1);
seq__21975_21997 = G__22005;
chunk__21977_21998 = G__22006;
count__21978_21999 = G__22007;
i__21979_22000 = G__22008;
continue;
}
} else
{var temp__4126__auto___22009 = cljs.core.seq.call(null,seq__21975_21997);if(temp__4126__auto___22009)
{var seq__21975_22010__$1 = temp__4126__auto___22009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21975_22010__$1))
{var c__10176__auto___22011 = cljs.core.chunk_first.call(null,seq__21975_22010__$1);{
var G__22012 = cljs.core.chunk_rest.call(null,seq__21975_22010__$1);
var G__22013 = c__10176__auto___22011;
var G__22014 = cljs.core.count.call(null,c__10176__auto___22011);
var G__22015 = 0;
seq__21975_21997 = G__22012;
chunk__21977_21998 = G__22013;
count__21978_21999 = G__22014;
i__21979_22000 = G__22015;
continue;
}
} else
{var vec__21983_22016 = cljs.core.first.call(null,seq__21975_22010__$1);var actual_type_22017 = cljs.core.nth.call(null,vec__21983_22016,0,null);var factory_22018 = cljs.core.nth.call(null,vec__21983_22016,1,null);var canonical_f_22019 = (cljs.core.truth_(selector_21989)?cljs.core.partial.call(null,dommy.core.live_listener,elem_21988,selector_21989):cljs.core.identity).call(null,factory_22018.call(null,f_21996));dommy.core.update_event_listeners_BANG_.call(null,elem_21988,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_21989,actual_type_22017,f_21996], null),canonical_f_22019);
if(cljs.core.truth_(elem_21988.addEventListener))
{elem_21988.addEventListener(cljs.core.name.call(null,actual_type_22017),canonical_f_22019);
} else
{elem_21988.attachEvent(cljs.core.name.call(null,actual_type_22017),canonical_f_22019);
}
{
var G__22020 = cljs.core.next.call(null,seq__21975_22010__$1);
var G__22021 = null;
var G__22022 = 0;
var G__22023 = 0;
seq__21975_21997 = G__22020;
chunk__21977_21998 = G__22021;
count__21978_21999 = G__22022;
i__21979_22000 = G__22023;
continue;
}
}
} else
{}
}
break;
}
{
var G__22024 = seq__21965_21990;
var G__22025 = chunk__21972_21991;
var G__22026 = count__21973_21992;
var G__22027 = (i__21974_21993 + 1);
seq__21965_21990 = G__22024;
chunk__21972_21991 = G__22025;
count__21973_21992 = G__22026;
i__21974_21993 = G__22027;
continue;
}
} else
{var temp__4126__auto___22028 = cljs.core.seq.call(null,seq__21965_21990);if(temp__4126__auto___22028)
{var seq__21965_22029__$1 = temp__4126__auto___22028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21965_22029__$1))
{var c__10176__auto___22030 = cljs.core.chunk_first.call(null,seq__21965_22029__$1);{
var G__22031 = cljs.core.chunk_rest.call(null,seq__21965_22029__$1);
var G__22032 = c__10176__auto___22030;
var G__22033 = cljs.core.count.call(null,c__10176__auto___22030);
var G__22034 = 0;
seq__21965_21990 = G__22031;
chunk__21972_21991 = G__22032;
count__21973_21992 = G__22033;
i__21974_21993 = G__22034;
continue;
}
} else
{var vec__21984_22035 = cljs.core.first.call(null,seq__21965_22029__$1);var orig_type_22036 = cljs.core.nth.call(null,vec__21984_22035,0,null);var f_22037 = cljs.core.nth.call(null,vec__21984_22035,1,null);var seq__21966_22038 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_22036,new cljs.core.PersistentArrayMap.fromArray([orig_type_22036,cljs.core.identity], true, false)));var chunk__21968_22039 = null;var count__21969_22040 = 0;var i__21970_22041 = 0;while(true){
if((i__21970_22041 < count__21969_22040))
{var vec__21985_22042 = cljs.core._nth.call(null,chunk__21968_22039,i__21970_22041);var actual_type_22043 = cljs.core.nth.call(null,vec__21985_22042,0,null);var factory_22044 = cljs.core.nth.call(null,vec__21985_22042,1,null);var canonical_f_22045 = (cljs.core.truth_(selector_21989)?cljs.core.partial.call(null,dommy.core.live_listener,elem_21988,selector_21989):cljs.core.identity).call(null,factory_22044.call(null,f_22037));dommy.core.update_event_listeners_BANG_.call(null,elem_21988,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_21989,actual_type_22043,f_22037], null),canonical_f_22045);
if(cljs.core.truth_(elem_21988.addEventListener))
{elem_21988.addEventListener(cljs.core.name.call(null,actual_type_22043),canonical_f_22045);
} else
{elem_21988.attachEvent(cljs.core.name.call(null,actual_type_22043),canonical_f_22045);
}
{
var G__22046 = seq__21966_22038;
var G__22047 = chunk__21968_22039;
var G__22048 = count__21969_22040;
var G__22049 = (i__21970_22041 + 1);
seq__21966_22038 = G__22046;
chunk__21968_22039 = G__22047;
count__21969_22040 = G__22048;
i__21970_22041 = G__22049;
continue;
}
} else
{var temp__4126__auto___22050__$1 = cljs.core.seq.call(null,seq__21966_22038);if(temp__4126__auto___22050__$1)
{var seq__21966_22051__$1 = temp__4126__auto___22050__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21966_22051__$1))
{var c__10176__auto___22052 = cljs.core.chunk_first.call(null,seq__21966_22051__$1);{
var G__22053 = cljs.core.chunk_rest.call(null,seq__21966_22051__$1);
var G__22054 = c__10176__auto___22052;
var G__22055 = cljs.core.count.call(null,c__10176__auto___22052);
var G__22056 = 0;
seq__21966_22038 = G__22053;
chunk__21968_22039 = G__22054;
count__21969_22040 = G__22055;
i__21970_22041 = G__22056;
continue;
}
} else
{var vec__21986_22057 = cljs.core.first.call(null,seq__21966_22051__$1);var actual_type_22058 = cljs.core.nth.call(null,vec__21986_22057,0,null);var factory_22059 = cljs.core.nth.call(null,vec__21986_22057,1,null);var canonical_f_22060 = (cljs.core.truth_(selector_21989)?cljs.core.partial.call(null,dommy.core.live_listener,elem_21988,selector_21989):cljs.core.identity).call(null,factory_22059.call(null,f_22037));dommy.core.update_event_listeners_BANG_.call(null,elem_21988,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_21989,actual_type_22058,f_22037], null),canonical_f_22060);
if(cljs.core.truth_(elem_21988.addEventListener))
{elem_21988.addEventListener(cljs.core.name.call(null,actual_type_22058),canonical_f_22060);
} else
{elem_21988.attachEvent(cljs.core.name.call(null,actual_type_22058),canonical_f_22060);
}
{
var G__22061 = cljs.core.next.call(null,seq__21966_22051__$1);
var G__22062 = null;
var G__22063 = 0;
var G__22064 = 0;
seq__21966_22038 = G__22061;
chunk__21968_22039 = G__22062;
count__21969_22040 = G__22063;
i__21970_22041 = G__22064;
continue;
}
}
} else
{}
}
break;
}
{
var G__22065 = cljs.core.next.call(null,seq__21965_22029__$1);
var G__22066 = null;
var G__22067 = 0;
var G__22068 = 0;
seq__21965_21990 = G__22065;
chunk__21972_21991 = G__22066;
count__21973_21992 = G__22067;
i__21974_21993 = G__22068;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__22069){
var elem_sel = cljs.core.first(arglist__22069);
var type_fs = cljs.core.rest(arglist__22069);
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null))))))));
}
var vec__22093_22116 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_22117 = cljs.core.nth.call(null,vec__22093_22116,0,null);var selector_22118 = cljs.core.nth.call(null,vec__22093_22116,1,null);var seq__22094_22119 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__22101_22120 = null;var count__22102_22121 = 0;var i__22103_22122 = 0;while(true){
if((i__22103_22122 < count__22102_22121))
{var vec__22110_22123 = cljs.core._nth.call(null,chunk__22101_22120,i__22103_22122);var orig_type_22124 = cljs.core.nth.call(null,vec__22110_22123,0,null);var f_22125 = cljs.core.nth.call(null,vec__22110_22123,1,null);var seq__22104_22126 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_22124,new cljs.core.PersistentArrayMap.fromArray([orig_type_22124,cljs.core.identity], true, false)));var chunk__22106_22127 = null;var count__22107_22128 = 0;var i__22108_22129 = 0;while(true){
if((i__22108_22129 < count__22107_22128))
{var vec__22111_22130 = cljs.core._nth.call(null,chunk__22106_22127,i__22108_22129);var actual_type_22131 = cljs.core.nth.call(null,vec__22111_22130,0,null);var __22132 = cljs.core.nth.call(null,vec__22111_22130,1,null);var keys_22133 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_22118,actual_type_22131,f_22125], null);var canonical_f_22134 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_22117),keys_22133);dommy.core.update_event_listeners_BANG_.call(null,elem_22117,dommy.utils.dissoc_in,keys_22133);
if(cljs.core.truth_(elem_22117.removeEventListener))
{elem_22117.removeEventListener(cljs.core.name.call(null,actual_type_22131),canonical_f_22134);
} else
{elem_22117.detachEvent(cljs.core.name.call(null,actual_type_22131),canonical_f_22134);
}
{
var G__22135 = seq__22104_22126;
var G__22136 = chunk__22106_22127;
var G__22137 = count__22107_22128;
var G__22138 = (i__22108_22129 + 1);
seq__22104_22126 = G__22135;
chunk__22106_22127 = G__22136;
count__22107_22128 = G__22137;
i__22108_22129 = G__22138;
continue;
}
} else
{var temp__4126__auto___22139 = cljs.core.seq.call(null,seq__22104_22126);if(temp__4126__auto___22139)
{var seq__22104_22140__$1 = temp__4126__auto___22139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22104_22140__$1))
{var c__10176__auto___22141 = cljs.core.chunk_first.call(null,seq__22104_22140__$1);{
var G__22142 = cljs.core.chunk_rest.call(null,seq__22104_22140__$1);
var G__22143 = c__10176__auto___22141;
var G__22144 = cljs.core.count.call(null,c__10176__auto___22141);
var G__22145 = 0;
seq__22104_22126 = G__22142;
chunk__22106_22127 = G__22143;
count__22107_22128 = G__22144;
i__22108_22129 = G__22145;
continue;
}
} else
{var vec__22112_22146 = cljs.core.first.call(null,seq__22104_22140__$1);var actual_type_22147 = cljs.core.nth.call(null,vec__22112_22146,0,null);var __22148 = cljs.core.nth.call(null,vec__22112_22146,1,null);var keys_22149 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_22118,actual_type_22147,f_22125], null);var canonical_f_22150 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_22117),keys_22149);dommy.core.update_event_listeners_BANG_.call(null,elem_22117,dommy.utils.dissoc_in,keys_22149);
if(cljs.core.truth_(elem_22117.removeEventListener))
{elem_22117.removeEventListener(cljs.core.name.call(null,actual_type_22147),canonical_f_22150);
} else
{elem_22117.detachEvent(cljs.core.name.call(null,actual_type_22147),canonical_f_22150);
}
{
var G__22151 = cljs.core.next.call(null,seq__22104_22140__$1);
var G__22152 = null;
var G__22153 = 0;
var G__22154 = 0;
seq__22104_22126 = G__22151;
chunk__22106_22127 = G__22152;
count__22107_22128 = G__22153;
i__22108_22129 = G__22154;
continue;
}
}
} else
{}
}
break;
}
{
var G__22155 = seq__22094_22119;
var G__22156 = chunk__22101_22120;
var G__22157 = count__22102_22121;
var G__22158 = (i__22103_22122 + 1);
seq__22094_22119 = G__22155;
chunk__22101_22120 = G__22156;
count__22102_22121 = G__22157;
i__22103_22122 = G__22158;
continue;
}
} else
{var temp__4126__auto___22159 = cljs.core.seq.call(null,seq__22094_22119);if(temp__4126__auto___22159)
{var seq__22094_22160__$1 = temp__4126__auto___22159;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22094_22160__$1))
{var c__10176__auto___22161 = cljs.core.chunk_first.call(null,seq__22094_22160__$1);{
var G__22162 = cljs.core.chunk_rest.call(null,seq__22094_22160__$1);
var G__22163 = c__10176__auto___22161;
var G__22164 = cljs.core.count.call(null,c__10176__auto___22161);
var G__22165 = 0;
seq__22094_22119 = G__22162;
chunk__22101_22120 = G__22163;
count__22102_22121 = G__22164;
i__22103_22122 = G__22165;
continue;
}
} else
{var vec__22113_22166 = cljs.core.first.call(null,seq__22094_22160__$1);var orig_type_22167 = cljs.core.nth.call(null,vec__22113_22166,0,null);var f_22168 = cljs.core.nth.call(null,vec__22113_22166,1,null);var seq__22095_22169 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_22167,new cljs.core.PersistentArrayMap.fromArray([orig_type_22167,cljs.core.identity], true, false)));var chunk__22097_22170 = null;var count__22098_22171 = 0;var i__22099_22172 = 0;while(true){
if((i__22099_22172 < count__22098_22171))
{var vec__22114_22173 = cljs.core._nth.call(null,chunk__22097_22170,i__22099_22172);var actual_type_22174 = cljs.core.nth.call(null,vec__22114_22173,0,null);var __22175 = cljs.core.nth.call(null,vec__22114_22173,1,null);var keys_22176 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_22118,actual_type_22174,f_22168], null);var canonical_f_22177 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_22117),keys_22176);dommy.core.update_event_listeners_BANG_.call(null,elem_22117,dommy.utils.dissoc_in,keys_22176);
if(cljs.core.truth_(elem_22117.removeEventListener))
{elem_22117.removeEventListener(cljs.core.name.call(null,actual_type_22174),canonical_f_22177);
} else
{elem_22117.detachEvent(cljs.core.name.call(null,actual_type_22174),canonical_f_22177);
}
{
var G__22178 = seq__22095_22169;
var G__22179 = chunk__22097_22170;
var G__22180 = count__22098_22171;
var G__22181 = (i__22099_22172 + 1);
seq__22095_22169 = G__22178;
chunk__22097_22170 = G__22179;
count__22098_22171 = G__22180;
i__22099_22172 = G__22181;
continue;
}
} else
{var temp__4126__auto___22182__$1 = cljs.core.seq.call(null,seq__22095_22169);if(temp__4126__auto___22182__$1)
{var seq__22095_22183__$1 = temp__4126__auto___22182__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22095_22183__$1))
{var c__10176__auto___22184 = cljs.core.chunk_first.call(null,seq__22095_22183__$1);{
var G__22185 = cljs.core.chunk_rest.call(null,seq__22095_22183__$1);
var G__22186 = c__10176__auto___22184;
var G__22187 = cljs.core.count.call(null,c__10176__auto___22184);
var G__22188 = 0;
seq__22095_22169 = G__22185;
chunk__22097_22170 = G__22186;
count__22098_22171 = G__22187;
i__22099_22172 = G__22188;
continue;
}
} else
{var vec__22115_22189 = cljs.core.first.call(null,seq__22095_22183__$1);var actual_type_22190 = cljs.core.nth.call(null,vec__22115_22189,0,null);var __22191 = cljs.core.nth.call(null,vec__22115_22189,1,null);var keys_22192 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_22118,actual_type_22190,f_22168], null);var canonical_f_22193 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_22117),keys_22192);dommy.core.update_event_listeners_BANG_.call(null,elem_22117,dommy.utils.dissoc_in,keys_22192);
if(cljs.core.truth_(elem_22117.removeEventListener))
{elem_22117.removeEventListener(cljs.core.name.call(null,actual_type_22190),canonical_f_22193);
} else
{elem_22117.detachEvent(cljs.core.name.call(null,actual_type_22190),canonical_f_22193);
}
{
var G__22194 = cljs.core.next.call(null,seq__22095_22183__$1);
var G__22195 = null;
var G__22196 = 0;
var G__22197 = 0;
seq__22095_22169 = G__22194;
chunk__22097_22170 = G__22195;
count__22098_22171 = G__22196;
i__22099_22172 = G__22197;
continue;
}
}
} else
{}
}
break;
}
{
var G__22198 = cljs.core.next.call(null,seq__22094_22160__$1);
var G__22199 = null;
var G__22200 = 0;
var G__22201 = 0;
seq__22094_22119 = G__22198;
chunk__22101_22120 = G__22199;
count__22102_22121 = G__22200;
i__22103_22122 = G__22201;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__22202){
var elem_sel = cljs.core.first(arglist__22202);
var type_fs = cljs.core.rest(arglist__22202);
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null))))))));
}
var vec__22210_22217 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_22218 = cljs.core.nth.call(null,vec__22210_22217,0,null);var selector_22219 = cljs.core.nth.call(null,vec__22210_22217,1,null);var seq__22211_22220 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__22212_22221 = null;var count__22213_22222 = 0;var i__22214_22223 = 0;while(true){
if((i__22214_22223 < count__22213_22222))
{var vec__22215_22224 = cljs.core._nth.call(null,chunk__22212_22221,i__22214_22223);var type_22225 = cljs.core.nth.call(null,vec__22215_22224,0,null);var f_22226 = cljs.core.nth.call(null,vec__22215_22224,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_22225,((function (seq__22211_22220,chunk__22212_22221,count__22213_22222,i__22214_22223,vec__22215_22224,type_22225,f_22226,vec__22210_22217,elem_22218,selector_22219){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_22225,this_fn);
return f_22226.call(null,e);
});})(seq__22211_22220,chunk__22212_22221,count__22213_22222,i__22214_22223,vec__22215_22224,type_22225,f_22226,vec__22210_22217,elem_22218,selector_22219))
);
{
var G__22227 = seq__22211_22220;
var G__22228 = chunk__22212_22221;
var G__22229 = count__22213_22222;
var G__22230 = (i__22214_22223 + 1);
seq__22211_22220 = G__22227;
chunk__22212_22221 = G__22228;
count__22213_22222 = G__22229;
i__22214_22223 = G__22230;
continue;
}
} else
{var temp__4126__auto___22231 = cljs.core.seq.call(null,seq__22211_22220);if(temp__4126__auto___22231)
{var seq__22211_22232__$1 = temp__4126__auto___22231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22211_22232__$1))
{var c__10176__auto___22233 = cljs.core.chunk_first.call(null,seq__22211_22232__$1);{
var G__22234 = cljs.core.chunk_rest.call(null,seq__22211_22232__$1);
var G__22235 = c__10176__auto___22233;
var G__22236 = cljs.core.count.call(null,c__10176__auto___22233);
var G__22237 = 0;
seq__22211_22220 = G__22234;
chunk__22212_22221 = G__22235;
count__22213_22222 = G__22236;
i__22214_22223 = G__22237;
continue;
}
} else
{var vec__22216_22238 = cljs.core.first.call(null,seq__22211_22232__$1);var type_22239 = cljs.core.nth.call(null,vec__22216_22238,0,null);var f_22240 = cljs.core.nth.call(null,vec__22216_22238,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_22239,((function (seq__22211_22220,chunk__22212_22221,count__22213_22222,i__22214_22223,vec__22216_22238,type_22239,f_22240,seq__22211_22232__$1,temp__4126__auto___22231,vec__22210_22217,elem_22218,selector_22219){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_22239,this_fn);
return f_22240.call(null,e);
});})(seq__22211_22220,chunk__22212_22221,count__22213_22222,i__22214_22223,vec__22216_22238,type_22239,f_22240,seq__22211_22232__$1,temp__4126__auto___22231,vec__22210_22217,elem_22218,selector_22219))
);
{
var G__22241 = cljs.core.next.call(null,seq__22211_22232__$1);
var G__22242 = null;
var G__22243 = 0;
var G__22244 = 0;
seq__22211_22220 = G__22241;
chunk__22212_22221 = G__22242;
count__22213_22222 = G__22243;
i__22214_22223 = G__22244;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__22245){
var elem_sel = cljs.core.first(arglist__22245);
var type_fs = cljs.core.rest(arglist__22245);
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
var fire_BANG___delegate = function (node,event_type,p__22246){var vec__22248 = p__22246;var update_event_BANG_ = cljs.core.nth.call(null,vec__22248,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null)))))));
}
var update_event_BANG___$1 = (function (){var or__9420__auto__ = update_event_BANG_;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
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
var p__22246 = null;if (arguments.length > 2) {
  p__22246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__22246);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__22249){
var node = cljs.core.first(arglist__22249);
arglist__22249 = cljs.core.next(arglist__22249);
var event_type = cljs.core.first(arglist__22249);
var p__22246 = cljs.core.rest(arglist__22249);
return fire_BANG___delegate(node,event_type,p__22246);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
