// Compiled by ClojureScript 0.0-2261
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj597785 = {};return obj597785;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__7594__auto__ = this$;if(and__7594__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7594__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8233__auto__ = (((this$ == null))?null:this$);return (function (){var or__7606__auto__ = (dommy.template._elem[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (dommy.template._elem["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":((new cljs.core.Keyword(null,"else","else",-1508377146))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_597788 = node_str.substring(base_idx);while(true){
var next_idx_597789 = dommy.template.next_css_index.call(null,str_597788,(1));var frag_597790 = (((next_idx_597789 >= (0)))?str_597788.substring((0),next_idx_597789):str_597788);var G__597787_597791 = frag_597790.charAt((0));switch (G__597787_597791) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_597790.substring((1)));

break;
case "#":
node.setAttribute("id",frag_597790.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_597790.charAt((0))))));

}
if((next_idx_597789 >= (0)))
{{
var G__597793 = str_597788.substring(next_idx_597789);
str_597788 = G__597793;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__597799 = data;if(G__597799)
{var bit__8256__auto__ = null;if(cljs.core.truth_((function (){var or__7606__auto__ = bit__8256__auto__;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return G__597799.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__597799.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__597799);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__597799);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__597800_597804 = cljs.core.seq.call(null,data);var chunk__597801_597805 = null;var count__597802_597806 = (0);var i__597803_597807 = (0);while(true){
if((i__597803_597807 < count__597802_597806))
{var child_597808 = cljs.core._nth.call(null,chunk__597801_597805,i__597803_597807);__GT_document_fragment.call(null,result_frag,child_597808);
{
var G__597809 = seq__597800_597804;
var G__597810 = chunk__597801_597805;
var G__597811 = count__597802_597806;
var G__597812 = (i__597803_597807 + (1));
seq__597800_597804 = G__597809;
chunk__597801_597805 = G__597810;
count__597802_597806 = G__597811;
i__597803_597807 = G__597812;
continue;
}
} else
{var temp__4126__auto___597813 = cljs.core.seq.call(null,seq__597800_597804);if(temp__4126__auto___597813)
{var seq__597800_597814__$1 = temp__4126__auto___597813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597800_597814__$1))
{var c__8362__auto___597815 = cljs.core.chunk_first.call(null,seq__597800_597814__$1);{
var G__597816 = cljs.core.chunk_rest.call(null,seq__597800_597814__$1);
var G__597817 = c__8362__auto___597815;
var G__597818 = cljs.core.count.call(null,c__8362__auto___597815);
var G__597819 = (0);
seq__597800_597804 = G__597816;
chunk__597801_597805 = G__597817;
count__597802_597806 = G__597818;
i__597803_597807 = G__597819;
continue;
}
} else
{var child_597820 = cljs.core.first.call(null,seq__597800_597814__$1);__GT_document_fragment.call(null,result_frag,child_597820);
{
var G__597821 = cljs.core.next.call(null,seq__597800_597814__$1);
var G__597822 = null;
var G__597823 = (0);
var G__597824 = (0);
seq__597800_597804 = G__597821;
chunk__597801_597805 = G__597822;
count__597802_597806 = G__597823;
i__597803_597807 = G__597824;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__597826 = data;if(G__597826)
{var bit__8256__auto__ = null;if(cljs.core.truth_((function (){var or__7606__auto__ = bit__8256__auto__;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return G__597826.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__597826.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__597826);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__597826);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__597827){var vec__597847 = p__597827;var tag_name = cljs.core.nth.call(null,vec__597847,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__597847,(1),null);var children = cljs.core.nthnext.call(null,vec__597847,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__597849 = maybe_attrs;if(G__597849)
{var bit__8256__auto__ = null;if(cljs.core.truth_((function (){var or__7606__auto__ = bit__8256__auto__;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return G__597849.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__597849.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__597849);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__597849);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__597850_597866 = cljs.core.seq.call(null,attrs);var chunk__597851_597867 = null;var count__597852_597868 = (0);var i__597853_597869 = (0);while(true){
if((i__597853_597869 < count__597852_597868))
{var vec__597854_597870 = cljs.core._nth.call(null,chunk__597851_597867,i__597853_597869);var k_597871 = cljs.core.nth.call(null,vec__597854_597870,(0),null);var v_597872 = cljs.core.nth.call(null,vec__597854_597870,(1),null);var G__597855_597873 = (((k_597871 instanceof cljs.core.Keyword))?k_597871.fqn:null);switch (G__597855_597873) {
case "classes":
var seq__597856_597875 = cljs.core.seq.call(null,v_597872);var chunk__597857_597876 = null;var count__597858_597877 = (0);var i__597859_597878 = (0);while(true){
if((i__597859_597878 < count__597858_597877))
{var c_597879 = cljs.core._nth.call(null,chunk__597857_597876,i__597859_597878);dommy.attrs.add_class_BANG_.call(null,n,c_597879);
{
var G__597880 = seq__597856_597875;
var G__597881 = chunk__597857_597876;
var G__597882 = count__597858_597877;
var G__597883 = (i__597859_597878 + (1));
seq__597856_597875 = G__597880;
chunk__597857_597876 = G__597881;
count__597858_597877 = G__597882;
i__597859_597878 = G__597883;
continue;
}
} else
{var temp__4126__auto___597884 = cljs.core.seq.call(null,seq__597856_597875);if(temp__4126__auto___597884)
{var seq__597856_597885__$1 = temp__4126__auto___597884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597856_597885__$1))
{var c__8362__auto___597886 = cljs.core.chunk_first.call(null,seq__597856_597885__$1);{
var G__597887 = cljs.core.chunk_rest.call(null,seq__597856_597885__$1);
var G__597888 = c__8362__auto___597886;
var G__597889 = cljs.core.count.call(null,c__8362__auto___597886);
var G__597890 = (0);
seq__597856_597875 = G__597887;
chunk__597857_597876 = G__597888;
count__597858_597877 = G__597889;
i__597859_597878 = G__597890;
continue;
}
} else
{var c_597891 = cljs.core.first.call(null,seq__597856_597885__$1);dommy.attrs.add_class_BANG_.call(null,n,c_597891);
{
var G__597892 = cljs.core.next.call(null,seq__597856_597885__$1);
var G__597893 = null;
var G__597894 = (0);
var G__597895 = (0);
seq__597856_597875 = G__597892;
chunk__597857_597876 = G__597893;
count__597858_597877 = G__597894;
i__597859_597878 = G__597895;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_597872);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_597871,v_597872);

}
{
var G__597896 = seq__597850_597866;
var G__597897 = chunk__597851_597867;
var G__597898 = count__597852_597868;
var G__597899 = (i__597853_597869 + (1));
seq__597850_597866 = G__597896;
chunk__597851_597867 = G__597897;
count__597852_597868 = G__597898;
i__597853_597869 = G__597899;
continue;
}
} else
{var temp__4126__auto___597900 = cljs.core.seq.call(null,seq__597850_597866);if(temp__4126__auto___597900)
{var seq__597850_597901__$1 = temp__4126__auto___597900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597850_597901__$1))
{var c__8362__auto___597902 = cljs.core.chunk_first.call(null,seq__597850_597901__$1);{
var G__597903 = cljs.core.chunk_rest.call(null,seq__597850_597901__$1);
var G__597904 = c__8362__auto___597902;
var G__597905 = cljs.core.count.call(null,c__8362__auto___597902);
var G__597906 = (0);
seq__597850_597866 = G__597903;
chunk__597851_597867 = G__597904;
count__597852_597868 = G__597905;
i__597853_597869 = G__597906;
continue;
}
} else
{var vec__597860_597907 = cljs.core.first.call(null,seq__597850_597901__$1);var k_597908 = cljs.core.nth.call(null,vec__597860_597907,(0),null);var v_597909 = cljs.core.nth.call(null,vec__597860_597907,(1),null);var G__597861_597910 = (((k_597908 instanceof cljs.core.Keyword))?k_597908.fqn:null);switch (G__597861_597910) {
case "classes":
var seq__597862_597912 = cljs.core.seq.call(null,v_597909);var chunk__597863_597913 = null;var count__597864_597914 = (0);var i__597865_597915 = (0);while(true){
if((i__597865_597915 < count__597864_597914))
{var c_597916 = cljs.core._nth.call(null,chunk__597863_597913,i__597865_597915);dommy.attrs.add_class_BANG_.call(null,n,c_597916);
{
var G__597917 = seq__597862_597912;
var G__597918 = chunk__597863_597913;
var G__597919 = count__597864_597914;
var G__597920 = (i__597865_597915 + (1));
seq__597862_597912 = G__597917;
chunk__597863_597913 = G__597918;
count__597864_597914 = G__597919;
i__597865_597915 = G__597920;
continue;
}
} else
{var temp__4126__auto___597921__$1 = cljs.core.seq.call(null,seq__597862_597912);if(temp__4126__auto___597921__$1)
{var seq__597862_597922__$1 = temp__4126__auto___597921__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597862_597922__$1))
{var c__8362__auto___597923 = cljs.core.chunk_first.call(null,seq__597862_597922__$1);{
var G__597924 = cljs.core.chunk_rest.call(null,seq__597862_597922__$1);
var G__597925 = c__8362__auto___597923;
var G__597926 = cljs.core.count.call(null,c__8362__auto___597923);
var G__597927 = (0);
seq__597862_597912 = G__597924;
chunk__597863_597913 = G__597925;
count__597864_597914 = G__597926;
i__597865_597915 = G__597927;
continue;
}
} else
{var c_597928 = cljs.core.first.call(null,seq__597862_597922__$1);dommy.attrs.add_class_BANG_.call(null,n,c_597928);
{
var G__597929 = cljs.core.next.call(null,seq__597862_597922__$1);
var G__597930 = null;
var G__597931 = (0);
var G__597932 = (0);
seq__597862_597912 = G__597929;
chunk__597863_597913 = G__597930;
count__597864_597914 = G__597931;
i__597865_597915 = G__597932;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_597909);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_597908,v_597909);

}
{
var G__597933 = cljs.core.next.call(null,seq__597850_597901__$1);
var G__597934 = null;
var G__597935 = (0);
var G__597936 = (0);
seq__597850_597866 = G__597933;
chunk__597851_597867 = G__597934;
count__597852_597868 = G__597935;
i__597853_597869 = G__597936;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e597937){if((e597937 instanceof ReferenceError))
{var __597938 = e597937;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e597937;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__597940 = data;if(G__597940)
{var bit__8256__auto__ = null;if(cljs.core.truth_((function (){var or__7606__auto__ = bit__8256__auto__;if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return G__597940.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__597940.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__597940);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__597940);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map