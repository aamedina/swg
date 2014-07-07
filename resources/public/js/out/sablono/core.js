// Compiled by ClojureScript 0.0-2261
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__596579__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__596578 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__596578,(0),null);var body = cljs.core.nthnext.call(null,vec__596578,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__596579 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__596579__delegate.call(this,args);};
G__596579.cljs$lang$maxFixedArity = 0;
G__596579.cljs$lang$applyTo = (function (arglist__596580){
var args = cljs.core.seq(arglist__596580);
return G__596579__delegate(args);
});
G__596579.cljs$core$IFn$_invoke$arity$variadic = G__596579__delegate;
return G__596579;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8331__auto__ = (function iter__596585(s__596586){return (new cljs.core.LazySeq(null,(function (){var s__596586__$1 = s__596586;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__596586__$1);if(temp__4126__auto__)
{var s__596586__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__596586__$2))
{var c__8329__auto__ = cljs.core.chunk_first.call(null,s__596586__$2);var size__8330__auto__ = cljs.core.count.call(null,c__8329__auto__);var b__596588 = cljs.core.chunk_buffer.call(null,size__8330__auto__);if((function (){var i__596587 = (0);while(true){
if((i__596587 < size__8330__auto__))
{var args = cljs.core._nth.call(null,c__8329__auto__,i__596587);cljs.core.chunk_append.call(null,b__596588,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__596589 = (i__596587 + (1));
i__596587 = G__596589;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__596588),iter__596585.call(null,cljs.core.chunk_rest.call(null,s__596586__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__596588),null);
}
} else
{var args = cljs.core.first.call(null,s__596586__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__596585.call(null,cljs.core.rest.call(null,s__596586__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8331__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8331__auto__ = (function iter__596594(s__596595){return (new cljs.core.LazySeq(null,(function (){var s__596595__$1 = s__596595;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__596595__$1);if(temp__4126__auto__)
{var s__596595__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__596595__$2))
{var c__8329__auto__ = cljs.core.chunk_first.call(null,s__596595__$2);var size__8330__auto__ = cljs.core.count.call(null,c__8329__auto__);var b__596597 = cljs.core.chunk_buffer.call(null,size__8330__auto__);if((function (){var i__596596 = (0);while(true){
if((i__596596 < size__8330__auto__))
{var style = cljs.core._nth.call(null,c__8329__auto__,i__596596);cljs.core.chunk_append.call(null,b__596597,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__596598 = (i__596596 + (1));
i__596596 = G__596598;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__596597),iter__596594.call(null,cljs.core.chunk_rest.call(null,s__596595__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__596597),null);
}
} else
{var style = cljs.core.first.call(null,s__596595__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__596594.call(null,cljs.core.rest.call(null,s__596595__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8331__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__596599){
var styles = cljs.core.seq(arglist__596599);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to596600 = (function() { 
var link_to596600__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to596600 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to596600__delegate.call(this,url,content);};
link_to596600.cljs$lang$maxFixedArity = 1;
link_to596600.cljs$lang$applyTo = (function (arglist__596601){
var url = cljs.core.first(arglist__596601);
var content = cljs.core.rest(arglist__596601);
return link_to596600__delegate(url,content);
});
link_to596600.cljs$core$IFn$_invoke$arity$variadic = link_to596600__delegate;
return link_to596600;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to596600);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to596602 = (function() { 
var mail_to596602__delegate = function (e_mail,p__596603){var vec__596605 = p__596603;var content = cljs.core.nth.call(null,vec__596605,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__7606__auto__ = content;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to596602 = function (e_mail,var_args){
var p__596603 = null;if (arguments.length > 1) {
  p__596603 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to596602__delegate.call(this,e_mail,p__596603);};
mail_to596602.cljs$lang$maxFixedArity = 1;
mail_to596602.cljs$lang$applyTo = (function (arglist__596606){
var e_mail = cljs.core.first(arglist__596606);
var p__596603 = cljs.core.rest(arglist__596606);
return mail_to596602__delegate(e_mail,p__596603);
});
mail_to596602.cljs$core$IFn$_invoke$arity$variadic = mail_to596602__delegate;
return mail_to596602;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to596602);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list596607 = (function unordered_list596607(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__8331__auto__ = (function iter__596612(s__596613){return (new cljs.core.LazySeq(null,(function (){var s__596613__$1 = s__596613;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__596613__$1);if(temp__4126__auto__)
{var s__596613__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__596613__$2))
{var c__8329__auto__ = cljs.core.chunk_first.call(null,s__596613__$2);var size__8330__auto__ = cljs.core.count.call(null,c__8329__auto__);var b__596615 = cljs.core.chunk_buffer.call(null,size__8330__auto__);if((function (){var i__596614 = (0);while(true){
if((i__596614 < size__8330__auto__))
{var x = cljs.core._nth.call(null,c__8329__auto__,i__596614);cljs.core.chunk_append.call(null,b__596615,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__596616 = (i__596614 + (1));
i__596614 = G__596616;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__596615),iter__596612.call(null,cljs.core.chunk_rest.call(null,s__596613__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__596615),null);
}
} else
{var x = cljs.core.first.call(null,s__596613__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__596612.call(null,cljs.core.rest.call(null,s__596613__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8331__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list596607);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list596617 = (function ordered_list596617(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__8331__auto__ = (function iter__596622(s__596623){return (new cljs.core.LazySeq(null,(function (){var s__596623__$1 = s__596623;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__596623__$1);if(temp__4126__auto__)
{var s__596623__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__596623__$2))
{var c__8329__auto__ = cljs.core.chunk_first.call(null,s__596623__$2);var size__8330__auto__ = cljs.core.count.call(null,c__8329__auto__);var b__596625 = cljs.core.chunk_buffer.call(null,size__8330__auto__);if((function (){var i__596624 = (0);while(true){
if((i__596624 < size__8330__auto__))
{var x = cljs.core._nth.call(null,c__8329__auto__,i__596624);cljs.core.chunk_append.call(null,b__596625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__596626 = (i__596624 + (1));
i__596624 = G__596626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__596625),iter__596622.call(null,cljs.core.chunk_rest.call(null,s__596623__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__596625),null);
}
} else
{var x = cljs.core.first.call(null,s__596623__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__596622.call(null,cljs.core.rest.call(null,s__596623__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8331__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list596617);
/**
* Create an image element.
*/
sablono.core.image596627 = (function() {
var image596627 = null;
var image596627__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image596627__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image596627 = function(src,alt){
switch(arguments.length){
case 1:
return image596627__1.call(this,src);
case 2:
return image596627__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image596627.cljs$core$IFn$_invoke$arity$1 = image596627__1;
image596627.cljs$core$IFn$_invoke$arity$2 = image596627__2;
return image596627;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image596627);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__596628_SHARP_,p2__596629_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__596628_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__596629_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__596630_SHARP_,p2__596631_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__596630_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__596631_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field596632 = (function() {
var color_field596632 = null;
var color_field596632__1 = (function (name__9074__auto__){return color_field596632.call(null,name__9074__auto__,null);
});
var color_field596632__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__9074__auto__,value__9075__auto__);
});
color_field596632 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return color_field596632__1.call(this,name__9074__auto__);
case 2:
return color_field596632__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field596632.cljs$core$IFn$_invoke$arity$1 = color_field596632__1;
color_field596632.cljs$core$IFn$_invoke$arity$2 = color_field596632__2;
return color_field596632;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field596632);
/**
* Creates a date input field.
*/
sablono.core.date_field596633 = (function() {
var date_field596633 = null;
var date_field596633__1 = (function (name__9074__auto__){return date_field596633.call(null,name__9074__auto__,null);
});
var date_field596633__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__9074__auto__,value__9075__auto__);
});
date_field596633 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return date_field596633__1.call(this,name__9074__auto__);
case 2:
return date_field596633__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field596633.cljs$core$IFn$_invoke$arity$1 = date_field596633__1;
date_field596633.cljs$core$IFn$_invoke$arity$2 = date_field596633__2;
return date_field596633;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field596633);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field596634 = (function() {
var datetime_field596634 = null;
var datetime_field596634__1 = (function (name__9074__auto__){return datetime_field596634.call(null,name__9074__auto__,null);
});
var datetime_field596634__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__9074__auto__,value__9075__auto__);
});
datetime_field596634 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return datetime_field596634__1.call(this,name__9074__auto__);
case 2:
return datetime_field596634__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field596634.cljs$core$IFn$_invoke$arity$1 = datetime_field596634__1;
datetime_field596634.cljs$core$IFn$_invoke$arity$2 = datetime_field596634__2;
return datetime_field596634;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field596634);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field596635 = (function() {
var datetime_local_field596635 = null;
var datetime_local_field596635__1 = (function (name__9074__auto__){return datetime_local_field596635.call(null,name__9074__auto__,null);
});
var datetime_local_field596635__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__9074__auto__,value__9075__auto__);
});
datetime_local_field596635 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return datetime_local_field596635__1.call(this,name__9074__auto__);
case 2:
return datetime_local_field596635__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field596635.cljs$core$IFn$_invoke$arity$1 = datetime_local_field596635__1;
datetime_local_field596635.cljs$core$IFn$_invoke$arity$2 = datetime_local_field596635__2;
return datetime_local_field596635;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field596635);
/**
* Creates a email input field.
*/
sablono.core.email_field596636 = (function() {
var email_field596636 = null;
var email_field596636__1 = (function (name__9074__auto__){return email_field596636.call(null,name__9074__auto__,null);
});
var email_field596636__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__9074__auto__,value__9075__auto__);
});
email_field596636 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return email_field596636__1.call(this,name__9074__auto__);
case 2:
return email_field596636__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field596636.cljs$core$IFn$_invoke$arity$1 = email_field596636__1;
email_field596636.cljs$core$IFn$_invoke$arity$2 = email_field596636__2;
return email_field596636;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field596636);
/**
* Creates a file input field.
*/
sablono.core.file_field596637 = (function() {
var file_field596637 = null;
var file_field596637__1 = (function (name__9074__auto__){return file_field596637.call(null,name__9074__auto__,null);
});
var file_field596637__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__9074__auto__,value__9075__auto__);
});
file_field596637 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return file_field596637__1.call(this,name__9074__auto__);
case 2:
return file_field596637__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field596637.cljs$core$IFn$_invoke$arity$1 = file_field596637__1;
file_field596637.cljs$core$IFn$_invoke$arity$2 = file_field596637__2;
return file_field596637;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field596637);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field596638 = (function() {
var hidden_field596638 = null;
var hidden_field596638__1 = (function (name__9074__auto__){return hidden_field596638.call(null,name__9074__auto__,null);
});
var hidden_field596638__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__9074__auto__,value__9075__auto__);
});
hidden_field596638 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return hidden_field596638__1.call(this,name__9074__auto__);
case 2:
return hidden_field596638__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field596638.cljs$core$IFn$_invoke$arity$1 = hidden_field596638__1;
hidden_field596638.cljs$core$IFn$_invoke$arity$2 = hidden_field596638__2;
return hidden_field596638;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field596638);
/**
* Creates a month input field.
*/
sablono.core.month_field596639 = (function() {
var month_field596639 = null;
var month_field596639__1 = (function (name__9074__auto__){return month_field596639.call(null,name__9074__auto__,null);
});
var month_field596639__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__9074__auto__,value__9075__auto__);
});
month_field596639 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return month_field596639__1.call(this,name__9074__auto__);
case 2:
return month_field596639__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field596639.cljs$core$IFn$_invoke$arity$1 = month_field596639__1;
month_field596639.cljs$core$IFn$_invoke$arity$2 = month_field596639__2;
return month_field596639;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field596639);
/**
* Creates a number input field.
*/
sablono.core.number_field596640 = (function() {
var number_field596640 = null;
var number_field596640__1 = (function (name__9074__auto__){return number_field596640.call(null,name__9074__auto__,null);
});
var number_field596640__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__9074__auto__,value__9075__auto__);
});
number_field596640 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return number_field596640__1.call(this,name__9074__auto__);
case 2:
return number_field596640__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field596640.cljs$core$IFn$_invoke$arity$1 = number_field596640__1;
number_field596640.cljs$core$IFn$_invoke$arity$2 = number_field596640__2;
return number_field596640;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field596640);
/**
* Creates a password input field.
*/
sablono.core.password_field596641 = (function() {
var password_field596641 = null;
var password_field596641__1 = (function (name__9074__auto__){return password_field596641.call(null,name__9074__auto__,null);
});
var password_field596641__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__9074__auto__,value__9075__auto__);
});
password_field596641 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return password_field596641__1.call(this,name__9074__auto__);
case 2:
return password_field596641__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field596641.cljs$core$IFn$_invoke$arity$1 = password_field596641__1;
password_field596641.cljs$core$IFn$_invoke$arity$2 = password_field596641__2;
return password_field596641;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field596641);
/**
* Creates a range input field.
*/
sablono.core.range_field596642 = (function() {
var range_field596642 = null;
var range_field596642__1 = (function (name__9074__auto__){return range_field596642.call(null,name__9074__auto__,null);
});
var range_field596642__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__9074__auto__,value__9075__auto__);
});
range_field596642 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return range_field596642__1.call(this,name__9074__auto__);
case 2:
return range_field596642__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field596642.cljs$core$IFn$_invoke$arity$1 = range_field596642__1;
range_field596642.cljs$core$IFn$_invoke$arity$2 = range_field596642__2;
return range_field596642;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field596642);
/**
* Creates a search input field.
*/
sablono.core.search_field596643 = (function() {
var search_field596643 = null;
var search_field596643__1 = (function (name__9074__auto__){return search_field596643.call(null,name__9074__auto__,null);
});
var search_field596643__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__9074__auto__,value__9075__auto__);
});
search_field596643 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return search_field596643__1.call(this,name__9074__auto__);
case 2:
return search_field596643__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field596643.cljs$core$IFn$_invoke$arity$1 = search_field596643__1;
search_field596643.cljs$core$IFn$_invoke$arity$2 = search_field596643__2;
return search_field596643;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field596643);
/**
* Creates a tel input field.
*/
sablono.core.tel_field596644 = (function() {
var tel_field596644 = null;
var tel_field596644__1 = (function (name__9074__auto__){return tel_field596644.call(null,name__9074__auto__,null);
});
var tel_field596644__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__9074__auto__,value__9075__auto__);
});
tel_field596644 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return tel_field596644__1.call(this,name__9074__auto__);
case 2:
return tel_field596644__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field596644.cljs$core$IFn$_invoke$arity$1 = tel_field596644__1;
tel_field596644.cljs$core$IFn$_invoke$arity$2 = tel_field596644__2;
return tel_field596644;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field596644);
/**
* Creates a text input field.
*/
sablono.core.text_field596645 = (function() {
var text_field596645 = null;
var text_field596645__1 = (function (name__9074__auto__){return text_field596645.call(null,name__9074__auto__,null);
});
var text_field596645__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__9074__auto__,value__9075__auto__);
});
text_field596645 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return text_field596645__1.call(this,name__9074__auto__);
case 2:
return text_field596645__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field596645.cljs$core$IFn$_invoke$arity$1 = text_field596645__1;
text_field596645.cljs$core$IFn$_invoke$arity$2 = text_field596645__2;
return text_field596645;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field596645);
/**
* Creates a time input field.
*/
sablono.core.time_field596646 = (function() {
var time_field596646 = null;
var time_field596646__1 = (function (name__9074__auto__){return time_field596646.call(null,name__9074__auto__,null);
});
var time_field596646__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__9074__auto__,value__9075__auto__);
});
time_field596646 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return time_field596646__1.call(this,name__9074__auto__);
case 2:
return time_field596646__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field596646.cljs$core$IFn$_invoke$arity$1 = time_field596646__1;
time_field596646.cljs$core$IFn$_invoke$arity$2 = time_field596646__2;
return time_field596646;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field596646);
/**
* Creates a url input field.
*/
sablono.core.url_field596647 = (function() {
var url_field596647 = null;
var url_field596647__1 = (function (name__9074__auto__){return url_field596647.call(null,name__9074__auto__,null);
});
var url_field596647__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__9074__auto__,value__9075__auto__);
});
url_field596647 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return url_field596647__1.call(this,name__9074__auto__);
case 2:
return url_field596647__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field596647.cljs$core$IFn$_invoke$arity$1 = url_field596647__1;
url_field596647.cljs$core$IFn$_invoke$arity$2 = url_field596647__2;
return url_field596647;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field596647);
/**
* Creates a week input field.
*/
sablono.core.week_field596648 = (function() {
var week_field596648 = null;
var week_field596648__1 = (function (name__9074__auto__){return week_field596648.call(null,name__9074__auto__,null);
});
var week_field596648__2 = (function (name__9074__auto__,value__9075__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__9074__auto__,value__9075__auto__);
});
week_field596648 = function(name__9074__auto__,value__9075__auto__){
switch(arguments.length){
case 1:
return week_field596648__1.call(this,name__9074__auto__);
case 2:
return week_field596648__2.call(this,name__9074__auto__,value__9075__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field596648.cljs$core$IFn$_invoke$arity$1 = week_field596648__1;
week_field596648.cljs$core$IFn$_invoke$arity$2 = week_field596648__2;
return week_field596648;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field596648);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box596649 = (function() {
var check_box596649 = null;
var check_box596649__1 = (function (name){return check_box596649.call(null,name,null);
});
var check_box596649__2 = (function (name,checked_QMARK_){return check_box596649.call(null,name,checked_QMARK_,"true");
});
var check_box596649__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box596649 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box596649__1.call(this,name);
case 2:
return check_box596649__2.call(this,name,checked_QMARK_);
case 3:
return check_box596649__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box596649.cljs$core$IFn$_invoke$arity$1 = check_box596649__1;
check_box596649.cljs$core$IFn$_invoke$arity$2 = check_box596649__2;
check_box596649.cljs$core$IFn$_invoke$arity$3 = check_box596649__3;
return check_box596649;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box596649);
/**
* Creates a radio button.
*/
sablono.core.radio_button596650 = (function() {
var radio_button596650 = null;
var radio_button596650__1 = (function (group){return radio_button596650.call(null,group,null);
});
var radio_button596650__2 = (function (group,checked_QMARK_){return radio_button596650.call(null,group,checked_QMARK_,"true");
});
var radio_button596650__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button596650 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button596650__1.call(this,group);
case 2:
return radio_button596650__2.call(this,group,checked_QMARK_);
case 3:
return radio_button596650__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button596650.cljs$core$IFn$_invoke$arity$1 = radio_button596650__1;
radio_button596650.cljs$core$IFn$_invoke$arity$2 = radio_button596650__2;
radio_button596650.cljs$core$IFn$_invoke$arity$3 = radio_button596650__3;
return radio_button596650;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button596650);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options596651 = (function() {
var select_options596651 = null;
var select_options596651__1 = (function (coll){return select_options596651.call(null,coll,null);
});
var select_options596651__2 = (function (coll,selected){var iter__8331__auto__ = (function iter__596660(s__596661){return (new cljs.core.LazySeq(null,(function (){var s__596661__$1 = s__596661;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__596661__$1);if(temp__4126__auto__)
{var s__596661__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__596661__$2))
{var c__8329__auto__ = cljs.core.chunk_first.call(null,s__596661__$2);var size__8330__auto__ = cljs.core.count.call(null,c__8329__auto__);var b__596663 = cljs.core.chunk_buffer.call(null,size__8330__auto__);if((function (){var i__596662 = (0);while(true){
if((i__596662 < size__8330__auto__))
{var x = cljs.core._nth.call(null,c__8329__auto__,i__596662);cljs.core.chunk_append.call(null,b__596663,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__596666 = x;var text = cljs.core.nth.call(null,vec__596666,(0),null);var val = cljs.core.nth.call(null,vec__596666,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__596666,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options596651.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__596668 = (i__596662 + (1));
i__596662 = G__596668;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__596663),iter__596660.call(null,cljs.core.chunk_rest.call(null,s__596661__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__596663),null);
}
} else
{var x = cljs.core.first.call(null,s__596661__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__596667 = x;var text = cljs.core.nth.call(null,vec__596667,(0),null);var val = cljs.core.nth.call(null,vec__596667,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__596667,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options596651.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__596660.call(null,cljs.core.rest.call(null,s__596661__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8331__auto__.call(null,coll);
});
select_options596651 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options596651__1.call(this,coll);
case 2:
return select_options596651__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options596651.cljs$core$IFn$_invoke$arity$1 = select_options596651__1;
select_options596651.cljs$core$IFn$_invoke$arity$2 = select_options596651__2;
return select_options596651;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options596651);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down596669 = (function() {
var drop_down596669 = null;
var drop_down596669__2 = (function (name,options){return drop_down596669.call(null,name,options,null);
});
var drop_down596669__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down596669 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down596669__2.call(this,name,options);
case 3:
return drop_down596669__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down596669.cljs$core$IFn$_invoke$arity$2 = drop_down596669__2;
drop_down596669.cljs$core$IFn$_invoke$arity$3 = drop_down596669__3;
return drop_down596669;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down596669);
/**
* Creates a text area element.
*/
sablono.core.text_area596670 = (function() {
var text_area596670 = null;
var text_area596670__1 = (function (name){return text_area596670.call(null,name,null);
});
var text_area596670__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area596670 = function(name,value){
switch(arguments.length){
case 1:
return text_area596670__1.call(this,name);
case 2:
return text_area596670__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area596670.cljs$core$IFn$_invoke$arity$1 = text_area596670__1;
text_area596670.cljs$core$IFn$_invoke$arity$2 = text_area596670__2;
return text_area596670;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area596670);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label596671 = (function label596671(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label596671);
/**
* Creates a submit button.
*/
sablono.core.submit_button596672 = (function submit_button596672(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button596672);
/**
* Creates a form reset button.
*/
sablono.core.reset_button596673 = (function reset_button596673(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button596673);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to596674 = (function() { 
var form_to596674__delegate = function (p__596675,body){var vec__596677 = p__596675;var method = cljs.core.nth.call(null,vec__596677,(0),null);var action = cljs.core.nth.call(null,vec__596677,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to596674 = function (p__596675,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to596674__delegate.call(this,p__596675,body);};
form_to596674.cljs$lang$maxFixedArity = 1;
form_to596674.cljs$lang$applyTo = (function (arglist__596678){
var p__596675 = cljs.core.first(arglist__596678);
var body = cljs.core.rest(arglist__596678);
return form_to596674__delegate(p__596675,body);
});
form_to596674.cljs$core$IFn$_invoke$arity$variadic = form_to596674__delegate;
return form_to596674;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to596674);

//# sourceMappingURL=core.js.map