// Compiled by ClojureScript 0.0-2234
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
var G__17876__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17875 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17875,0,null);var body = cljs.core.nthnext.call(null,vec__17875,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17876 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17876__delegate.call(this,args);};
G__17876.cljs$lang$maxFixedArity = 0;
G__17876.cljs$lang$applyTo = (function (arglist__17877){
var args = cljs.core.seq(arglist__17877);
return G__17876__delegate(args);
});
G__17876.cljs$core$IFn$_invoke$arity$variadic = G__17876__delegate;
return G__17876;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__10145__auto__ = (function iter__17882(s__17883){return (new cljs.core.LazySeq(null,(function (){var s__17883__$1 = s__17883;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17883__$1);if(temp__4126__auto__)
{var s__17883__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17883__$2))
{var c__10143__auto__ = cljs.core.chunk_first.call(null,s__17883__$2);var size__10144__auto__ = cljs.core.count.call(null,c__10143__auto__);var b__17885 = cljs.core.chunk_buffer.call(null,size__10144__auto__);if((function (){var i__17884 = 0;while(true){
if((i__17884 < size__10144__auto__))
{var args = cljs.core._nth.call(null,c__10143__auto__,i__17884);cljs.core.chunk_append.call(null,b__17885,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__17886 = (i__17884 + 1);
i__17884 = G__17886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17885),iter__17882.call(null,cljs.core.chunk_rest.call(null,s__17883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17885),null);
}
} else
{var args = cljs.core.first.call(null,s__17883__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__17882.call(null,cljs.core.rest.call(null,s__17883__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10145__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__10145__auto__ = (function iter__17891(s__17892){return (new cljs.core.LazySeq(null,(function (){var s__17892__$1 = s__17892;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17892__$1);if(temp__4126__auto__)
{var s__17892__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17892__$2))
{var c__10143__auto__ = cljs.core.chunk_first.call(null,s__17892__$2);var size__10144__auto__ = cljs.core.count.call(null,c__10143__auto__);var b__17894 = cljs.core.chunk_buffer.call(null,size__10144__auto__);if((function (){var i__17893 = 0;while(true){
if((i__17893 < size__10144__auto__))
{var style = cljs.core._nth.call(null,c__10143__auto__,i__17893);cljs.core.chunk_append.call(null,b__17894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__17895 = (i__17893 + 1);
i__17893 = G__17895;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17894),iter__17891.call(null,cljs.core.chunk_rest.call(null,s__17892__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17894),null);
}
} else
{var style = cljs.core.first.call(null,s__17892__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__17891.call(null,cljs.core.rest.call(null,s__17892__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10145__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17896){
var styles = cljs.core.seq(arglist__17896);
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
sablono.core.link_to17897 = (function() { 
var link_to17897__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17897 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17897__delegate.call(this,url,content);};
link_to17897.cljs$lang$maxFixedArity = 1;
link_to17897.cljs$lang$applyTo = (function (arglist__17898){
var url = cljs.core.first(arglist__17898);
var content = cljs.core.rest(arglist__17898);
return link_to17897__delegate(url,content);
});
link_to17897.cljs$core$IFn$_invoke$arity$variadic = link_to17897__delegate;
return link_to17897;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17897);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17899 = (function() { 
var mail_to17899__delegate = function (e_mail,p__17900){var vec__17902 = p__17900;var content = cljs.core.nth.call(null,vec__17902,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__9420__auto__ = content;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17899 = function (e_mail,var_args){
var p__17900 = null;if (arguments.length > 1) {
  p__17900 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17899__delegate.call(this,e_mail,p__17900);};
mail_to17899.cljs$lang$maxFixedArity = 1;
mail_to17899.cljs$lang$applyTo = (function (arglist__17903){
var e_mail = cljs.core.first(arglist__17903);
var p__17900 = cljs.core.rest(arglist__17903);
return mail_to17899__delegate(e_mail,p__17900);
});
mail_to17899.cljs$core$IFn$_invoke$arity$variadic = mail_to17899__delegate;
return mail_to17899;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17899);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17904 = (function unordered_list17904(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__10145__auto__ = (function iter__17909(s__17910){return (new cljs.core.LazySeq(null,(function (){var s__17910__$1 = s__17910;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17910__$1);if(temp__4126__auto__)
{var s__17910__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17910__$2))
{var c__10143__auto__ = cljs.core.chunk_first.call(null,s__17910__$2);var size__10144__auto__ = cljs.core.count.call(null,c__10143__auto__);var b__17912 = cljs.core.chunk_buffer.call(null,size__10144__auto__);if((function (){var i__17911 = 0;while(true){
if((i__17911 < size__10144__auto__))
{var x = cljs.core._nth.call(null,c__10143__auto__,i__17911);cljs.core.chunk_append.call(null,b__17912,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17913 = (i__17911 + 1);
i__17911 = G__17913;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17912),iter__17909.call(null,cljs.core.chunk_rest.call(null,s__17910__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17912),null);
}
} else
{var x = cljs.core.first.call(null,s__17910__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17909.call(null,cljs.core.rest.call(null,s__17910__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10145__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17904);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17914 = (function ordered_list17914(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__10145__auto__ = (function iter__17919(s__17920){return (new cljs.core.LazySeq(null,(function (){var s__17920__$1 = s__17920;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17920__$1);if(temp__4126__auto__)
{var s__17920__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17920__$2))
{var c__10143__auto__ = cljs.core.chunk_first.call(null,s__17920__$2);var size__10144__auto__ = cljs.core.count.call(null,c__10143__auto__);var b__17922 = cljs.core.chunk_buffer.call(null,size__10144__auto__);if((function (){var i__17921 = 0;while(true){
if((i__17921 < size__10144__auto__))
{var x = cljs.core._nth.call(null,c__10143__auto__,i__17921);cljs.core.chunk_append.call(null,b__17922,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17923 = (i__17921 + 1);
i__17921 = G__17923;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17922),iter__17919.call(null,cljs.core.chunk_rest.call(null,s__17920__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17922),null);
}
} else
{var x = cljs.core.first.call(null,s__17920__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17919.call(null,cljs.core.rest.call(null,s__17920__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10145__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17914);
/**
* Create an image element.
*/
sablono.core.image17924 = (function() {
var image17924 = null;
var image17924__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17924__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17924 = function(src,alt){
switch(arguments.length){
case 1:
return image17924__1.call(this,src);
case 2:
return image17924__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17924.cljs$core$IFn$_invoke$arity$1 = image17924__1;
image17924.cljs$core$IFn$_invoke$arity$2 = image17924__2;
return image17924;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17924);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17925_SHARP_,p2__17926_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17925_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17926_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17927_SHARP_,p2__17928_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17927_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17928_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field17929 = (function() {
var color_field17929 = null;
var color_field17929__1 = (function (name__16419__auto__){return color_field17929.call(null,name__16419__auto__,null);
});
var color_field17929__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__16419__auto__,value__16420__auto__);
});
color_field17929 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return color_field17929__1.call(this,name__16419__auto__);
case 2:
return color_field17929__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field17929.cljs$core$IFn$_invoke$arity$1 = color_field17929__1;
color_field17929.cljs$core$IFn$_invoke$arity$2 = color_field17929__2;
return color_field17929;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17929);
/**
* Creates a date input field.
*/
sablono.core.date_field17930 = (function() {
var date_field17930 = null;
var date_field17930__1 = (function (name__16419__auto__){return date_field17930.call(null,name__16419__auto__,null);
});
var date_field17930__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__16419__auto__,value__16420__auto__);
});
date_field17930 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return date_field17930__1.call(this,name__16419__auto__);
case 2:
return date_field17930__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field17930.cljs$core$IFn$_invoke$arity$1 = date_field17930__1;
date_field17930.cljs$core$IFn$_invoke$arity$2 = date_field17930__2;
return date_field17930;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17930);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field17931 = (function() {
var datetime_field17931 = null;
var datetime_field17931__1 = (function (name__16419__auto__){return datetime_field17931.call(null,name__16419__auto__,null);
});
var datetime_field17931__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__16419__auto__,value__16420__auto__);
});
datetime_field17931 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return datetime_field17931__1.call(this,name__16419__auto__);
case 2:
return datetime_field17931__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field17931.cljs$core$IFn$_invoke$arity$1 = datetime_field17931__1;
datetime_field17931.cljs$core$IFn$_invoke$arity$2 = datetime_field17931__2;
return datetime_field17931;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17931);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field17932 = (function() {
var datetime_local_field17932 = null;
var datetime_local_field17932__1 = (function (name__16419__auto__){return datetime_local_field17932.call(null,name__16419__auto__,null);
});
var datetime_local_field17932__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__16419__auto__,value__16420__auto__);
});
datetime_local_field17932 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return datetime_local_field17932__1.call(this,name__16419__auto__);
case 2:
return datetime_local_field17932__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field17932.cljs$core$IFn$_invoke$arity$1 = datetime_local_field17932__1;
datetime_local_field17932.cljs$core$IFn$_invoke$arity$2 = datetime_local_field17932__2;
return datetime_local_field17932;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17932);
/**
* Creates a email input field.
*/
sablono.core.email_field17933 = (function() {
var email_field17933 = null;
var email_field17933__1 = (function (name__16419__auto__){return email_field17933.call(null,name__16419__auto__,null);
});
var email_field17933__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__16419__auto__,value__16420__auto__);
});
email_field17933 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return email_field17933__1.call(this,name__16419__auto__);
case 2:
return email_field17933__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17933.cljs$core$IFn$_invoke$arity$1 = email_field17933__1;
email_field17933.cljs$core$IFn$_invoke$arity$2 = email_field17933__2;
return email_field17933;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17933);
/**
* Creates a file input field.
*/
sablono.core.file_field17934 = (function() {
var file_field17934 = null;
var file_field17934__1 = (function (name__16419__auto__){return file_field17934.call(null,name__16419__auto__,null);
});
var file_field17934__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__16419__auto__,value__16420__auto__);
});
file_field17934 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return file_field17934__1.call(this,name__16419__auto__);
case 2:
return file_field17934__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field17934.cljs$core$IFn$_invoke$arity$1 = file_field17934__1;
file_field17934.cljs$core$IFn$_invoke$arity$2 = file_field17934__2;
return file_field17934;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17934);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17935 = (function() {
var hidden_field17935 = null;
var hidden_field17935__1 = (function (name__16419__auto__){return hidden_field17935.call(null,name__16419__auto__,null);
});
var hidden_field17935__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__16419__auto__,value__16420__auto__);
});
hidden_field17935 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return hidden_field17935__1.call(this,name__16419__auto__);
case 2:
return hidden_field17935__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17935.cljs$core$IFn$_invoke$arity$1 = hidden_field17935__1;
hidden_field17935.cljs$core$IFn$_invoke$arity$2 = hidden_field17935__2;
return hidden_field17935;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17935);
/**
* Creates a month input field.
*/
sablono.core.month_field17936 = (function() {
var month_field17936 = null;
var month_field17936__1 = (function (name__16419__auto__){return month_field17936.call(null,name__16419__auto__,null);
});
var month_field17936__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__16419__auto__,value__16420__auto__);
});
month_field17936 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return month_field17936__1.call(this,name__16419__auto__);
case 2:
return month_field17936__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field17936.cljs$core$IFn$_invoke$arity$1 = month_field17936__1;
month_field17936.cljs$core$IFn$_invoke$arity$2 = month_field17936__2;
return month_field17936;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17936);
/**
* Creates a number input field.
*/
sablono.core.number_field17937 = (function() {
var number_field17937 = null;
var number_field17937__1 = (function (name__16419__auto__){return number_field17937.call(null,name__16419__auto__,null);
});
var number_field17937__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__16419__auto__,value__16420__auto__);
});
number_field17937 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return number_field17937__1.call(this,name__16419__auto__);
case 2:
return number_field17937__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field17937.cljs$core$IFn$_invoke$arity$1 = number_field17937__1;
number_field17937.cljs$core$IFn$_invoke$arity$2 = number_field17937__2;
return number_field17937;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17937);
/**
* Creates a password input field.
*/
sablono.core.password_field17938 = (function() {
var password_field17938 = null;
var password_field17938__1 = (function (name__16419__auto__){return password_field17938.call(null,name__16419__auto__,null);
});
var password_field17938__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__16419__auto__,value__16420__auto__);
});
password_field17938 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return password_field17938__1.call(this,name__16419__auto__);
case 2:
return password_field17938__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17938.cljs$core$IFn$_invoke$arity$1 = password_field17938__1;
password_field17938.cljs$core$IFn$_invoke$arity$2 = password_field17938__2;
return password_field17938;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17938);
/**
* Creates a range input field.
*/
sablono.core.range_field17939 = (function() {
var range_field17939 = null;
var range_field17939__1 = (function (name__16419__auto__){return range_field17939.call(null,name__16419__auto__,null);
});
var range_field17939__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__16419__auto__,value__16420__auto__);
});
range_field17939 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return range_field17939__1.call(this,name__16419__auto__);
case 2:
return range_field17939__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field17939.cljs$core$IFn$_invoke$arity$1 = range_field17939__1;
range_field17939.cljs$core$IFn$_invoke$arity$2 = range_field17939__2;
return range_field17939;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17939);
/**
* Creates a search input field.
*/
sablono.core.search_field17940 = (function() {
var search_field17940 = null;
var search_field17940__1 = (function (name__16419__auto__){return search_field17940.call(null,name__16419__auto__,null);
});
var search_field17940__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__16419__auto__,value__16420__auto__);
});
search_field17940 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return search_field17940__1.call(this,name__16419__auto__);
case 2:
return search_field17940__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field17940.cljs$core$IFn$_invoke$arity$1 = search_field17940__1;
search_field17940.cljs$core$IFn$_invoke$arity$2 = search_field17940__2;
return search_field17940;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17940);
/**
* Creates a tel input field.
*/
sablono.core.tel_field17941 = (function() {
var tel_field17941 = null;
var tel_field17941__1 = (function (name__16419__auto__){return tel_field17941.call(null,name__16419__auto__,null);
});
var tel_field17941__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__16419__auto__,value__16420__auto__);
});
tel_field17941 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return tel_field17941__1.call(this,name__16419__auto__);
case 2:
return tel_field17941__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field17941.cljs$core$IFn$_invoke$arity$1 = tel_field17941__1;
tel_field17941.cljs$core$IFn$_invoke$arity$2 = tel_field17941__2;
return tel_field17941;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17941);
/**
* Creates a text input field.
*/
sablono.core.text_field17942 = (function() {
var text_field17942 = null;
var text_field17942__1 = (function (name__16419__auto__){return text_field17942.call(null,name__16419__auto__,null);
});
var text_field17942__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__16419__auto__,value__16420__auto__);
});
text_field17942 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return text_field17942__1.call(this,name__16419__auto__);
case 2:
return text_field17942__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17942.cljs$core$IFn$_invoke$arity$1 = text_field17942__1;
text_field17942.cljs$core$IFn$_invoke$arity$2 = text_field17942__2;
return text_field17942;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17942);
/**
* Creates a time input field.
*/
sablono.core.time_field17943 = (function() {
var time_field17943 = null;
var time_field17943__1 = (function (name__16419__auto__){return time_field17943.call(null,name__16419__auto__,null);
});
var time_field17943__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__16419__auto__,value__16420__auto__);
});
time_field17943 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return time_field17943__1.call(this,name__16419__auto__);
case 2:
return time_field17943__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field17943.cljs$core$IFn$_invoke$arity$1 = time_field17943__1;
time_field17943.cljs$core$IFn$_invoke$arity$2 = time_field17943__2;
return time_field17943;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17943);
/**
* Creates a url input field.
*/
sablono.core.url_field17944 = (function() {
var url_field17944 = null;
var url_field17944__1 = (function (name__16419__auto__){return url_field17944.call(null,name__16419__auto__,null);
});
var url_field17944__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__16419__auto__,value__16420__auto__);
});
url_field17944 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return url_field17944__1.call(this,name__16419__auto__);
case 2:
return url_field17944__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field17944.cljs$core$IFn$_invoke$arity$1 = url_field17944__1;
url_field17944.cljs$core$IFn$_invoke$arity$2 = url_field17944__2;
return url_field17944;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17944);
/**
* Creates a week input field.
*/
sablono.core.week_field17945 = (function() {
var week_field17945 = null;
var week_field17945__1 = (function (name__16419__auto__){return week_field17945.call(null,name__16419__auto__,null);
});
var week_field17945__2 = (function (name__16419__auto__,value__16420__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__16419__auto__,value__16420__auto__);
});
week_field17945 = function(name__16419__auto__,value__16420__auto__){
switch(arguments.length){
case 1:
return week_field17945__1.call(this,name__16419__auto__);
case 2:
return week_field17945__2.call(this,name__16419__auto__,value__16420__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field17945.cljs$core$IFn$_invoke$arity$1 = week_field17945__1;
week_field17945.cljs$core$IFn$_invoke$arity$2 = week_field17945__2;
return week_field17945;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17945);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box17946 = (function() {
var check_box17946 = null;
var check_box17946__1 = (function (name){return check_box17946.call(null,name,null);
});
var check_box17946__2 = (function (name,checked_QMARK_){return check_box17946.call(null,name,checked_QMARK_,"true");
});
var check_box17946__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17946 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17946__1.call(this,name);
case 2:
return check_box17946__2.call(this,name,checked_QMARK_);
case 3:
return check_box17946__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17946.cljs$core$IFn$_invoke$arity$1 = check_box17946__1;
check_box17946.cljs$core$IFn$_invoke$arity$2 = check_box17946__2;
check_box17946.cljs$core$IFn$_invoke$arity$3 = check_box17946__3;
return check_box17946;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17946);
/**
* Creates a radio button.
*/
sablono.core.radio_button17947 = (function() {
var radio_button17947 = null;
var radio_button17947__1 = (function (group){return radio_button17947.call(null,group,null);
});
var radio_button17947__2 = (function (group,checked_QMARK_){return radio_button17947.call(null,group,checked_QMARK_,"true");
});
var radio_button17947__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17947 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17947__1.call(this,group);
case 2:
return radio_button17947__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17947__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17947.cljs$core$IFn$_invoke$arity$1 = radio_button17947__1;
radio_button17947.cljs$core$IFn$_invoke$arity$2 = radio_button17947__2;
radio_button17947.cljs$core$IFn$_invoke$arity$3 = radio_button17947__3;
return radio_button17947;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17947);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17948 = (function() {
var select_options17948 = null;
var select_options17948__1 = (function (coll){return select_options17948.call(null,coll,null);
});
var select_options17948__2 = (function (coll,selected){var iter__10145__auto__ = (function iter__17957(s__17958){return (new cljs.core.LazySeq(null,(function (){var s__17958__$1 = s__17958;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17958__$1);if(temp__4126__auto__)
{var s__17958__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17958__$2))
{var c__10143__auto__ = cljs.core.chunk_first.call(null,s__17958__$2);var size__10144__auto__ = cljs.core.count.call(null,c__10143__auto__);var b__17960 = cljs.core.chunk_buffer.call(null,size__10144__auto__);if((function (){var i__17959 = 0;while(true){
if((i__17959 < size__10144__auto__))
{var x = cljs.core._nth.call(null,c__10143__auto__,i__17959);cljs.core.chunk_append.call(null,b__17960,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17963 = x;var text = cljs.core.nth.call(null,vec__17963,0,null);var val = cljs.core.nth.call(null,vec__17963,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17963,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17948.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17965 = (i__17959 + 1);
i__17959 = G__17965;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17960),iter__17957.call(null,cljs.core.chunk_rest.call(null,s__17958__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17960),null);
}
} else
{var x = cljs.core.first.call(null,s__17958__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17964 = x;var text = cljs.core.nth.call(null,vec__17964,0,null);var val = cljs.core.nth.call(null,vec__17964,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17964,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17948.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17957.call(null,cljs.core.rest.call(null,s__17958__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10145__auto__.call(null,coll);
});
select_options17948 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17948__1.call(this,coll);
case 2:
return select_options17948__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17948.cljs$core$IFn$_invoke$arity$1 = select_options17948__1;
select_options17948.cljs$core$IFn$_invoke$arity$2 = select_options17948__2;
return select_options17948;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17948);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17966 = (function() {
var drop_down17966 = null;
var drop_down17966__2 = (function (name,options){return drop_down17966.call(null,name,options,null);
});
var drop_down17966__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17966 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17966__2.call(this,name,options);
case 3:
return drop_down17966__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17966.cljs$core$IFn$_invoke$arity$2 = drop_down17966__2;
drop_down17966.cljs$core$IFn$_invoke$arity$3 = drop_down17966__3;
return drop_down17966;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17966);
/**
* Creates a text area element.
*/
sablono.core.text_area17967 = (function() {
var text_area17967 = null;
var text_area17967__1 = (function (name){return text_area17967.call(null,name,null);
});
var text_area17967__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17967 = function(name,value){
switch(arguments.length){
case 1:
return text_area17967__1.call(this,name);
case 2:
return text_area17967__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17967.cljs$core$IFn$_invoke$arity$1 = text_area17967__1;
text_area17967.cljs$core$IFn$_invoke$arity$2 = text_area17967__2;
return text_area17967;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17967);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17968 = (function label17968(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17968);
/**
* Creates a submit button.
*/
sablono.core.submit_button17969 = (function submit_button17969(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17969);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17970 = (function reset_button17970(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17970);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17971 = (function() { 
var form_to17971__delegate = function (p__17972,body){var vec__17974 = p__17972;var method = cljs.core.nth.call(null,vec__17974,0,null);var action = cljs.core.nth.call(null,vec__17974,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17971 = function (p__17972,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17971__delegate.call(this,p__17972,body);};
form_to17971.cljs$lang$maxFixedArity = 1;
form_to17971.cljs$lang$applyTo = (function (arglist__17975){
var p__17972 = cljs.core.first(arglist__17975);
var body = cljs.core.rest(arglist__17975);
return form_to17971__delegate(p__17972,body);
});
form_to17971.cljs$core$IFn$_invoke$arity$variadic = form_to17971__delegate;
return form_to17971;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17971);
