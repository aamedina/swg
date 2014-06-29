// Compiled by ClojureScript 0.0-2234
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj22538 = {};return obj22538;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__9408__auto__ = this$;if(and__9408__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__9408__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__10047__auto__ = (((this$ == null))?null:this$);return (function (){var or__9420__auto__ = (dommy.template._elem[goog.typeOf(x__10047__auto__)]);if(or__9420__auto__)
{return or__9420__auto__;
} else
{var or__9420__auto____$1 = (dommy.template._elem["_"]);if(or__9420__auto____$1)
{return or__9420__auto____$1;
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
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_22541 = node_str.substring(base_idx);while(true){
var next_idx_22542 = dommy.template.next_css_index.call(null,str_22541,1);var frag_22543 = (((next_idx_22542 >= 0))?str_22541.substring(0,next_idx_22542):str_22541);var G__22540_22544 = frag_22543.charAt(0);if(cljs.core._EQ_.call(null,"#",G__22540_22544))
{node.setAttribute("id",frag_22543.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__22540_22544))
{dommy.attrs.add_class_BANG_.call(null,node,frag_22543.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_22543.charAt(0)))));
} else
{}
}
}
if((next_idx_22542 >= 0))
{{
var G__22545 = str_22541.substring(next_idx_22542);
str_22541 = G__22545;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__22551 = data;if(G__22551)
{var bit__10070__auto__ = null;if(cljs.core.truth_((function (){var or__9420__auto__ = bit__10070__auto__;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
} else
{return G__22551.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__22551.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__22551);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__22551);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__22552_22556 = cljs.core.seq.call(null,data);var chunk__22553_22557 = null;var count__22554_22558 = 0;var i__22555_22559 = 0;while(true){
if((i__22555_22559 < count__22554_22558))
{var child_22560 = cljs.core._nth.call(null,chunk__22553_22557,i__22555_22559);__GT_document_fragment.call(null,result_frag,child_22560);
{
var G__22561 = seq__22552_22556;
var G__22562 = chunk__22553_22557;
var G__22563 = count__22554_22558;
var G__22564 = (i__22555_22559 + 1);
seq__22552_22556 = G__22561;
chunk__22553_22557 = G__22562;
count__22554_22558 = G__22563;
i__22555_22559 = G__22564;
continue;
}
} else
{var temp__4126__auto___22565 = cljs.core.seq.call(null,seq__22552_22556);if(temp__4126__auto___22565)
{var seq__22552_22566__$1 = temp__4126__auto___22565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22552_22566__$1))
{var c__10176__auto___22567 = cljs.core.chunk_first.call(null,seq__22552_22566__$1);{
var G__22568 = cljs.core.chunk_rest.call(null,seq__22552_22566__$1);
var G__22569 = c__10176__auto___22567;
var G__22570 = cljs.core.count.call(null,c__10176__auto___22567);
var G__22571 = 0;
seq__22552_22556 = G__22568;
chunk__22553_22557 = G__22569;
count__22554_22558 = G__22570;
i__22555_22559 = G__22571;
continue;
}
} else
{var child_22572 = cljs.core.first.call(null,seq__22552_22566__$1);__GT_document_fragment.call(null,result_frag,child_22572);
{
var G__22573 = cljs.core.next.call(null,seq__22552_22566__$1);
var G__22574 = null;
var G__22575 = 0;
var G__22576 = 0;
seq__22552_22556 = G__22573;
chunk__22553_22557 = G__22574;
count__22554_22558 = G__22575;
i__22555_22559 = G__22576;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__22578 = data;if(G__22578)
{var bit__10070__auto__ = null;if(cljs.core.truth_((function (){var or__9420__auto__ = bit__10070__auto__;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
} else
{return G__22578.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__22578.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__22578);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__22578);
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
dommy.template.compound_element = (function compound_element(p__22579){var vec__22599 = p__22579;var tag_name = cljs.core.nth.call(null,vec__22599,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__22599,1,null);var children = cljs.core.nthnext.call(null,vec__22599,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__22601 = maybe_attrs;if(G__22601)
{var bit__10070__auto__ = null;if(cljs.core.truth_((function (){var or__9420__auto__ = bit__10070__auto__;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
} else
{return G__22601.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__22601.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__22601);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__22601);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__22602_22618 = cljs.core.seq.call(null,attrs);var chunk__22603_22619 = null;var count__22604_22620 = 0;var i__22605_22621 = 0;while(true){
if((i__22605_22621 < count__22604_22620))
{var vec__22606_22622 = cljs.core._nth.call(null,chunk__22603_22619,i__22605_22621);var k_22623 = cljs.core.nth.call(null,vec__22606_22622,0,null);var v_22624 = cljs.core.nth.call(null,vec__22606_22622,1,null);var G__22607_22625 = (((k_22623 instanceof cljs.core.Keyword))?k_22623.fqn:null);switch (G__22607_22625) {
case "classes":
var seq__22608_22627 = cljs.core.seq.call(null,v_22624);var chunk__22609_22628 = null;var count__22610_22629 = 0;var i__22611_22630 = 0;while(true){
if((i__22611_22630 < count__22610_22629))
{var c_22631 = cljs.core._nth.call(null,chunk__22609_22628,i__22611_22630);dommy.attrs.add_class_BANG_.call(null,n,c_22631);
{
var G__22632 = seq__22608_22627;
var G__22633 = chunk__22609_22628;
var G__22634 = count__22610_22629;
var G__22635 = (i__22611_22630 + 1);
seq__22608_22627 = G__22632;
chunk__22609_22628 = G__22633;
count__22610_22629 = G__22634;
i__22611_22630 = G__22635;
continue;
}
} else
{var temp__4126__auto___22636 = cljs.core.seq.call(null,seq__22608_22627);if(temp__4126__auto___22636)
{var seq__22608_22637__$1 = temp__4126__auto___22636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22608_22637__$1))
{var c__10176__auto___22638 = cljs.core.chunk_first.call(null,seq__22608_22637__$1);{
var G__22639 = cljs.core.chunk_rest.call(null,seq__22608_22637__$1);
var G__22640 = c__10176__auto___22638;
var G__22641 = cljs.core.count.call(null,c__10176__auto___22638);
var G__22642 = 0;
seq__22608_22627 = G__22639;
chunk__22609_22628 = G__22640;
count__22610_22629 = G__22641;
i__22611_22630 = G__22642;
continue;
}
} else
{var c_22643 = cljs.core.first.call(null,seq__22608_22637__$1);dommy.attrs.add_class_BANG_.call(null,n,c_22643);
{
var G__22644 = cljs.core.next.call(null,seq__22608_22637__$1);
var G__22645 = null;
var G__22646 = 0;
var G__22647 = 0;
seq__22608_22627 = G__22644;
chunk__22609_22628 = G__22645;
count__22610_22629 = G__22646;
i__22611_22630 = G__22647;
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
dommy.attrs.add_class_BANG_.call(null,n,v_22624);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_22623,v_22624);

}
{
var G__22648 = seq__22602_22618;
var G__22649 = chunk__22603_22619;
var G__22650 = count__22604_22620;
var G__22651 = (i__22605_22621 + 1);
seq__22602_22618 = G__22648;
chunk__22603_22619 = G__22649;
count__22604_22620 = G__22650;
i__22605_22621 = G__22651;
continue;
}
} else
{var temp__4126__auto___22652 = cljs.core.seq.call(null,seq__22602_22618);if(temp__4126__auto___22652)
{var seq__22602_22653__$1 = temp__4126__auto___22652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22602_22653__$1))
{var c__10176__auto___22654 = cljs.core.chunk_first.call(null,seq__22602_22653__$1);{
var G__22655 = cljs.core.chunk_rest.call(null,seq__22602_22653__$1);
var G__22656 = c__10176__auto___22654;
var G__22657 = cljs.core.count.call(null,c__10176__auto___22654);
var G__22658 = 0;
seq__22602_22618 = G__22655;
chunk__22603_22619 = G__22656;
count__22604_22620 = G__22657;
i__22605_22621 = G__22658;
continue;
}
} else
{var vec__22612_22659 = cljs.core.first.call(null,seq__22602_22653__$1);var k_22660 = cljs.core.nth.call(null,vec__22612_22659,0,null);var v_22661 = cljs.core.nth.call(null,vec__22612_22659,1,null);var G__22613_22662 = (((k_22660 instanceof cljs.core.Keyword))?k_22660.fqn:null);switch (G__22613_22662) {
case "classes":
var seq__22614_22664 = cljs.core.seq.call(null,v_22661);var chunk__22615_22665 = null;var count__22616_22666 = 0;var i__22617_22667 = 0;while(true){
if((i__22617_22667 < count__22616_22666))
{var c_22668 = cljs.core._nth.call(null,chunk__22615_22665,i__22617_22667);dommy.attrs.add_class_BANG_.call(null,n,c_22668);
{
var G__22669 = seq__22614_22664;
var G__22670 = chunk__22615_22665;
var G__22671 = count__22616_22666;
var G__22672 = (i__22617_22667 + 1);
seq__22614_22664 = G__22669;
chunk__22615_22665 = G__22670;
count__22616_22666 = G__22671;
i__22617_22667 = G__22672;
continue;
}
} else
{var temp__4126__auto___22673__$1 = cljs.core.seq.call(null,seq__22614_22664);if(temp__4126__auto___22673__$1)
{var seq__22614_22674__$1 = temp__4126__auto___22673__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22614_22674__$1))
{var c__10176__auto___22675 = cljs.core.chunk_first.call(null,seq__22614_22674__$1);{
var G__22676 = cljs.core.chunk_rest.call(null,seq__22614_22674__$1);
var G__22677 = c__10176__auto___22675;
var G__22678 = cljs.core.count.call(null,c__10176__auto___22675);
var G__22679 = 0;
seq__22614_22664 = G__22676;
chunk__22615_22665 = G__22677;
count__22616_22666 = G__22678;
i__22617_22667 = G__22679;
continue;
}
} else
{var c_22680 = cljs.core.first.call(null,seq__22614_22674__$1);dommy.attrs.add_class_BANG_.call(null,n,c_22680);
{
var G__22681 = cljs.core.next.call(null,seq__22614_22674__$1);
var G__22682 = null;
var G__22683 = 0;
var G__22684 = 0;
seq__22614_22664 = G__22681;
chunk__22615_22665 = G__22682;
count__22616_22666 = G__22683;
i__22617_22667 = G__22684;
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
dommy.attrs.add_class_BANG_.call(null,n,v_22661);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_22660,v_22661);

}
{
var G__22685 = cljs.core.next.call(null,seq__22602_22653__$1);
var G__22686 = null;
var G__22687 = 0;
var G__22688 = 0;
seq__22602_22618 = G__22685;
chunk__22603_22619 = G__22686;
count__22604_22620 = G__22687;
i__22605_22621 = G__22688;
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
}catch (e22689){if((e22689 instanceof ReferenceError))
{var __22690 = e22689;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22689;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__22692 = data;if(G__22692)
{var bit__10070__auto__ = null;if(cljs.core.truth_((function (){var or__9420__auto__ = bit__10070__auto__;if(cljs.core.truth_(or__9420__auto__))
{return or__9420__auto__;
} else
{return G__22692.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__22692.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__22692);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__22692);
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
