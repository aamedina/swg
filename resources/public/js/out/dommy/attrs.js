// Compiled by ClojureScript 0.0-2261
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7594__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__7594__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7594__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__597500 = (i + class$.length);
start_from = G__597500;
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
{var i = temp__4126__auto____$1;return (i >= (0));
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
{var temp__4124__auto___597525 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___597525))
{var class_list_597526 = temp__4124__auto___597525;var seq__597513_597527 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__597514_597528 = null;var count__597515_597529 = (0);var i__597516_597530 = (0);while(true){
if((i__597516_597530 < count__597515_597529))
{var class_597531 = cljs.core._nth.call(null,chunk__597514_597528,i__597516_597530);class_list_597526.add(class_597531);
{
var G__597532 = seq__597513_597527;
var G__597533 = chunk__597514_597528;
var G__597534 = count__597515_597529;
var G__597535 = (i__597516_597530 + (1));
seq__597513_597527 = G__597532;
chunk__597514_597528 = G__597533;
count__597515_597529 = G__597534;
i__597516_597530 = G__597535;
continue;
}
} else
{var temp__4126__auto___597536 = cljs.core.seq.call(null,seq__597513_597527);if(temp__4126__auto___597536)
{var seq__597513_597537__$1 = temp__4126__auto___597536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597513_597537__$1))
{var c__8362__auto___597538 = cljs.core.chunk_first.call(null,seq__597513_597537__$1);{
var G__597539 = cljs.core.chunk_rest.call(null,seq__597513_597537__$1);
var G__597540 = c__8362__auto___597538;
var G__597541 = cljs.core.count.call(null,c__8362__auto___597538);
var G__597542 = (0);
seq__597513_597527 = G__597539;
chunk__597514_597528 = G__597540;
count__597515_597529 = G__597541;
i__597516_597530 = G__597542;
continue;
}
} else
{var class_597543 = cljs.core.first.call(null,seq__597513_597537__$1);class_list_597526.add(class_597543);
{
var G__597544 = cljs.core.next.call(null,seq__597513_597537__$1);
var G__597545 = null;
var G__597546 = (0);
var G__597547 = (0);
seq__597513_597527 = G__597544;
chunk__597514_597528 = G__597545;
count__597515_597529 = G__597546;
i__597516_597530 = G__597547;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_597548 = elem__$1.className;var seq__597517_597549 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__597518_597550 = null;var count__597519_597551 = (0);var i__597520_597552 = (0);while(true){
if((i__597520_597552 < count__597519_597551))
{var class_597553 = cljs.core._nth.call(null,chunk__597518_597550,i__597520_597552);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_597548,class_597553)))
{} else
{elem__$1.className = (((class_name_597548 === ""))?class_597553:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_597548)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_597553)));
}
{
var G__597554 = seq__597517_597549;
var G__597555 = chunk__597518_597550;
var G__597556 = count__597519_597551;
var G__597557 = (i__597520_597552 + (1));
seq__597517_597549 = G__597554;
chunk__597518_597550 = G__597555;
count__597519_597551 = G__597556;
i__597520_597552 = G__597557;
continue;
}
} else
{var temp__4126__auto___597558 = cljs.core.seq.call(null,seq__597517_597549);if(temp__4126__auto___597558)
{var seq__597517_597559__$1 = temp__4126__auto___597558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597517_597559__$1))
{var c__8362__auto___597560 = cljs.core.chunk_first.call(null,seq__597517_597559__$1);{
var G__597561 = cljs.core.chunk_rest.call(null,seq__597517_597559__$1);
var G__597562 = c__8362__auto___597560;
var G__597563 = cljs.core.count.call(null,c__8362__auto___597560);
var G__597564 = (0);
seq__597517_597549 = G__597561;
chunk__597518_597550 = G__597562;
count__597519_597551 = G__597563;
i__597520_597552 = G__597564;
continue;
}
} else
{var class_597565 = cljs.core.first.call(null,seq__597517_597559__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_597548,class_597565)))
{} else
{elem__$1.className = (((class_name_597548 === ""))?class_597565:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_597548)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_597565)));
}
{
var G__597566 = cljs.core.next.call(null,seq__597517_597559__$1);
var G__597567 = null;
var G__597568 = (0);
var G__597569 = (0);
seq__597517_597549 = G__597566;
chunk__597518_597550 = G__597567;
count__597519_597551 = G__597568;
i__597520_597552 = G__597569;
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
var G__597570__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__597521_597571 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__597522_597572 = null;var count__597523_597573 = (0);var i__597524_597574 = (0);while(true){
if((i__597524_597574 < count__597523_597573))
{var c_597575 = cljs.core._nth.call(null,chunk__597522_597572,i__597524_597574);add_class_BANG_.call(null,elem__$1,c_597575);
{
var G__597576 = seq__597521_597571;
var G__597577 = chunk__597522_597572;
var G__597578 = count__597523_597573;
var G__597579 = (i__597524_597574 + (1));
seq__597521_597571 = G__597576;
chunk__597522_597572 = G__597577;
count__597523_597573 = G__597578;
i__597524_597574 = G__597579;
continue;
}
} else
{var temp__4126__auto___597580 = cljs.core.seq.call(null,seq__597521_597571);if(temp__4126__auto___597580)
{var seq__597521_597581__$1 = temp__4126__auto___597580;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597521_597581__$1))
{var c__8362__auto___597582 = cljs.core.chunk_first.call(null,seq__597521_597581__$1);{
var G__597583 = cljs.core.chunk_rest.call(null,seq__597521_597581__$1);
var G__597584 = c__8362__auto___597582;
var G__597585 = cljs.core.count.call(null,c__8362__auto___597582);
var G__597586 = (0);
seq__597521_597571 = G__597583;
chunk__597522_597572 = G__597584;
count__597523_597573 = G__597585;
i__597524_597574 = G__597586;
continue;
}
} else
{var c_597587 = cljs.core.first.call(null,seq__597521_597581__$1);add_class_BANG_.call(null,elem__$1,c_597587);
{
var G__597588 = cljs.core.next.call(null,seq__597521_597581__$1);
var G__597589 = null;
var G__597590 = (0);
var G__597591 = (0);
seq__597521_597571 = G__597588;
chunk__597522_597572 = G__597589;
count__597523_597573 = G__597590;
i__597524_597574 = G__597591;
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
var G__597570 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__597570__delegate.call(this,elem,classes,more_classes);};
G__597570.cljs$lang$maxFixedArity = 2;
G__597570.cljs$lang$applyTo = (function (arglist__597592){
var elem = cljs.core.first(arglist__597592);
arglist__597592 = cljs.core.next(arglist__597592);
var classes = cljs.core.first(arglist__597592);
var more_classes = cljs.core.rest(arglist__597592);
return G__597570__delegate(elem,classes,more_classes);
});
G__597570.cljs$core$IFn$_invoke$arity$variadic = G__597570__delegate;
return G__597570;
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
var G__597593 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__597593;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___597602 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___597602))
{var class_list_597603 = temp__4124__auto___597602;class_list_597603.remove(class$__$1);
} else
{var class_name_597604 = elem__$1.className;var new_class_name_597605 = dommy.attrs.remove_class_str.call(null,class_name_597604,class$__$1);if((class_name_597604 === new_class_name_597605))
{} else
{elem__$1.className = new_class_name_597605;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__597606__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__597598 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__597599 = null;var count__597600 = (0);var i__597601 = (0);while(true){
if((i__597601 < count__597600))
{var c = cljs.core._nth.call(null,chunk__597599,i__597601);remove_class_BANG_.call(null,elem__$1,c);
{
var G__597607 = seq__597598;
var G__597608 = chunk__597599;
var G__597609 = count__597600;
var G__597610 = (i__597601 + (1));
seq__597598 = G__597607;
chunk__597599 = G__597608;
count__597600 = G__597609;
i__597601 = G__597610;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__597598);if(temp__4126__auto__)
{var seq__597598__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597598__$1))
{var c__8362__auto__ = cljs.core.chunk_first.call(null,seq__597598__$1);{
var G__597611 = cljs.core.chunk_rest.call(null,seq__597598__$1);
var G__597612 = c__8362__auto__;
var G__597613 = cljs.core.count.call(null,c__8362__auto__);
var G__597614 = (0);
seq__597598 = G__597611;
chunk__597599 = G__597612;
count__597600 = G__597613;
i__597601 = G__597614;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__597598__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__597615 = cljs.core.next.call(null,seq__597598__$1);
var G__597616 = null;
var G__597617 = (0);
var G__597618 = (0);
seq__597598 = G__597615;
chunk__597599 = G__597616;
count__597600 = G__597617;
i__597601 = G__597618;
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
var G__597606 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__597606__delegate.call(this,elem,class$,classes);};
G__597606.cljs$lang$maxFixedArity = 2;
G__597606.cljs$lang$applyTo = (function (arglist__597619){
var elem = cljs.core.first(arglist__597619);
arglist__597619 = cljs.core.next(arglist__597619);
var class$ = cljs.core.first(arglist__597619);
var classes = cljs.core.rest(arglist__597619);
return G__597606__delegate(elem,class$,classes);
});
G__597606.cljs$core$IFn$_invoke$arity$variadic = G__597606__delegate;
return G__597606;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___597620 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___597620))
{var class_list_597621 = temp__4124__auto___597620;class_list_597621.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__597624){var vec__597625 = p__597624;var k = cljs.core.nth.call(null,vec__597625,(0),null);var v = cljs.core.nth.call(null,vec__597625,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__597632_597638 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__597633_597639 = null;var count__597634_597640 = (0);var i__597635_597641 = (0);while(true){
if((i__597635_597641 < count__597634_597640))
{var vec__597636_597642 = cljs.core._nth.call(null,chunk__597633_597639,i__597635_597641);var k_597643 = cljs.core.nth.call(null,vec__597636_597642,(0),null);var v_597644 = cljs.core.nth.call(null,vec__597636_597642,(1),null);(style[cljs.core.name.call(null,k_597643)] = v_597644);
{
var G__597645 = seq__597632_597638;
var G__597646 = chunk__597633_597639;
var G__597647 = count__597634_597640;
var G__597648 = (i__597635_597641 + (1));
seq__597632_597638 = G__597645;
chunk__597633_597639 = G__597646;
count__597634_597640 = G__597647;
i__597635_597641 = G__597648;
continue;
}
} else
{var temp__4126__auto___597649 = cljs.core.seq.call(null,seq__597632_597638);if(temp__4126__auto___597649)
{var seq__597632_597650__$1 = temp__4126__auto___597649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597632_597650__$1))
{var c__8362__auto___597651 = cljs.core.chunk_first.call(null,seq__597632_597650__$1);{
var G__597652 = cljs.core.chunk_rest.call(null,seq__597632_597650__$1);
var G__597653 = c__8362__auto___597651;
var G__597654 = cljs.core.count.call(null,c__8362__auto___597651);
var G__597655 = (0);
seq__597632_597638 = G__597652;
chunk__597633_597639 = G__597653;
count__597634_597640 = G__597654;
i__597635_597641 = G__597655;
continue;
}
} else
{var vec__597637_597656 = cljs.core.first.call(null,seq__597632_597650__$1);var k_597657 = cljs.core.nth.call(null,vec__597637_597656,(0),null);var v_597658 = cljs.core.nth.call(null,vec__597637_597656,(1),null);(style[cljs.core.name.call(null,k_597657)] = v_597658);
{
var G__597659 = cljs.core.next.call(null,seq__597632_597650__$1);
var G__597660 = null;
var G__597661 = (0);
var G__597662 = (0);
seq__597632_597638 = G__597659;
chunk__597633_597639 = G__597660;
count__597634_597640 = G__597661;
i__597635_597641 = G__597662;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__597663){
var elem = cljs.core.first(arglist__597663);
var kvs = cljs.core.rest(arglist__597663);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__597670_597676 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__597671_597677 = null;var count__597672_597678 = (0);var i__597673_597679 = (0);while(true){
if((i__597673_597679 < count__597672_597678))
{var vec__597674_597680 = cljs.core._nth.call(null,chunk__597671_597677,i__597673_597679);var k_597681 = cljs.core.nth.call(null,vec__597674_597680,(0),null);var v_597682 = cljs.core.nth.call(null,vec__597674_597680,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_597681,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_597682)+"px"));
{
var G__597683 = seq__597670_597676;
var G__597684 = chunk__597671_597677;
var G__597685 = count__597672_597678;
var G__597686 = (i__597673_597679 + (1));
seq__597670_597676 = G__597683;
chunk__597671_597677 = G__597684;
count__597672_597678 = G__597685;
i__597673_597679 = G__597686;
continue;
}
} else
{var temp__4126__auto___597687 = cljs.core.seq.call(null,seq__597670_597676);if(temp__4126__auto___597687)
{var seq__597670_597688__$1 = temp__4126__auto___597687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597670_597688__$1))
{var c__8362__auto___597689 = cljs.core.chunk_first.call(null,seq__597670_597688__$1);{
var G__597690 = cljs.core.chunk_rest.call(null,seq__597670_597688__$1);
var G__597691 = c__8362__auto___597689;
var G__597692 = cljs.core.count.call(null,c__8362__auto___597689);
var G__597693 = (0);
seq__597670_597676 = G__597690;
chunk__597671_597677 = G__597691;
count__597672_597678 = G__597692;
i__597673_597679 = G__597693;
continue;
}
} else
{var vec__597675_597694 = cljs.core.first.call(null,seq__597670_597688__$1);var k_597695 = cljs.core.nth.call(null,vec__597675_597694,(0),null);var v_597696 = cljs.core.nth.call(null,vec__597675_597694,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_597695,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_597696)+"px"));
{
var G__597697 = cljs.core.next.call(null,seq__597670_597688__$1);
var G__597698 = null;
var G__597699 = (0);
var G__597700 = (0);
seq__597670_597676 = G__597697;
chunk__597671_597677 = G__597698;
count__597672_597678 = G__597699;
i__597673_597679 = G__597700;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__597701){
var elem = cljs.core.first(arglist__597701);
var kvs = cljs.core.rest(arglist__597701);
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
{var G__597710 = dommy.template.__GT_node_like.call(null,elem);(G__597710[cljs.core.name.call(null,k)] = v);
return G__597710;
} else
{var G__597711 = dommy.template.__GT_node_like.call(null,elem);G__597711.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__597711;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__597718__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__597712_597719 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__597713_597720 = null;var count__597714_597721 = (0);var i__597715_597722 = (0);while(true){
if((i__597715_597722 < count__597714_597721))
{var vec__597716_597723 = cljs.core._nth.call(null,chunk__597713_597720,i__597715_597722);var k_597724__$1 = cljs.core.nth.call(null,vec__597716_597723,(0),null);var v_597725__$1 = cljs.core.nth.call(null,vec__597716_597723,(1),null);set_attr_BANG_.call(null,elem__$1,k_597724__$1,v_597725__$1);
{
var G__597726 = seq__597712_597719;
var G__597727 = chunk__597713_597720;
var G__597728 = count__597714_597721;
var G__597729 = (i__597715_597722 + (1));
seq__597712_597719 = G__597726;
chunk__597713_597720 = G__597727;
count__597714_597721 = G__597728;
i__597715_597722 = G__597729;
continue;
}
} else
{var temp__4126__auto___597730 = cljs.core.seq.call(null,seq__597712_597719);if(temp__4126__auto___597730)
{var seq__597712_597731__$1 = temp__4126__auto___597730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597712_597731__$1))
{var c__8362__auto___597732 = cljs.core.chunk_first.call(null,seq__597712_597731__$1);{
var G__597733 = cljs.core.chunk_rest.call(null,seq__597712_597731__$1);
var G__597734 = c__8362__auto___597732;
var G__597735 = cljs.core.count.call(null,c__8362__auto___597732);
var G__597736 = (0);
seq__597712_597719 = G__597733;
chunk__597713_597720 = G__597734;
count__597714_597721 = G__597735;
i__597715_597722 = G__597736;
continue;
}
} else
{var vec__597717_597737 = cljs.core.first.call(null,seq__597712_597731__$1);var k_597738__$1 = cljs.core.nth.call(null,vec__597717_597737,(0),null);var v_597739__$1 = cljs.core.nth.call(null,vec__597717_597737,(1),null);set_attr_BANG_.call(null,elem__$1,k_597738__$1,v_597739__$1);
{
var G__597740 = cljs.core.next.call(null,seq__597712_597731__$1);
var G__597741 = null;
var G__597742 = (0);
var G__597743 = (0);
seq__597712_597719 = G__597740;
chunk__597713_597720 = G__597741;
count__597714_597721 = G__597742;
i__597715_597722 = G__597743;
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
var G__597718 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__597718__delegate.call(this,elem,k,v,kvs);};
G__597718.cljs$lang$maxFixedArity = 3;
G__597718.cljs$lang$applyTo = (function (arglist__597744){
var elem = cljs.core.first(arglist__597744);
arglist__597744 = cljs.core.next(arglist__597744);
var k = cljs.core.first(arglist__597744);
arglist__597744 = cljs.core.next(arglist__597744);
var v = cljs.core.first(arglist__597744);
var kvs = cljs.core.rest(arglist__597744);
return G__597718__delegate(elem,k,v,kvs);
});
G__597718.cljs$core$IFn$_invoke$arity$variadic = G__597718__delegate;
return G__597718;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__597753__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__597749_597754 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__597750_597755 = null;var count__597751_597756 = (0);var i__597752_597757 = (0);while(true){
if((i__597752_597757 < count__597751_597756))
{var k_597758__$1 = cljs.core._nth.call(null,chunk__597750_597755,i__597752_597757);remove_attr_BANG_.call(null,elem__$1,k_597758__$1);
{
var G__597759 = seq__597749_597754;
var G__597760 = chunk__597750_597755;
var G__597761 = count__597751_597756;
var G__597762 = (i__597752_597757 + (1));
seq__597749_597754 = G__597759;
chunk__597750_597755 = G__597760;
count__597751_597756 = G__597761;
i__597752_597757 = G__597762;
continue;
}
} else
{var temp__4126__auto___597763 = cljs.core.seq.call(null,seq__597749_597754);if(temp__4126__auto___597763)
{var seq__597749_597764__$1 = temp__4126__auto___597763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__597749_597764__$1))
{var c__8362__auto___597765 = cljs.core.chunk_first.call(null,seq__597749_597764__$1);{
var G__597766 = cljs.core.chunk_rest.call(null,seq__597749_597764__$1);
var G__597767 = c__8362__auto___597765;
var G__597768 = cljs.core.count.call(null,c__8362__auto___597765);
var G__597769 = (0);
seq__597749_597754 = G__597766;
chunk__597750_597755 = G__597767;
count__597751_597756 = G__597768;
i__597752_597757 = G__597769;
continue;
}
} else
{var k_597770__$1 = cljs.core.first.call(null,seq__597749_597764__$1);remove_attr_BANG_.call(null,elem__$1,k_597770__$1);
{
var G__597771 = cljs.core.next.call(null,seq__597749_597764__$1);
var G__597772 = null;
var G__597773 = (0);
var G__597774 = (0);
seq__597749_597754 = G__597771;
chunk__597750_597755 = G__597772;
count__597751_597756 = G__597773;
i__597752_597757 = G__597774;
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
var G__597753 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__597753__delegate.call(this,elem,k,ks);};
G__597753.cljs$lang$maxFixedArity = 2;
G__597753.cljs$lang$applyTo = (function (arglist__597775){
var elem = cljs.core.first(arglist__597775);
arglist__597775 = cljs.core.next(arglist__597775);
var k = cljs.core.first(arglist__597775);
var ks = cljs.core.rest(arglist__597775);
return G__597753__delegate(elem,k,ks);
});
G__597753.cljs$core$IFn$_invoke$arity$variadic = G__597753__delegate;
return G__597753;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__597777 = dommy.template.__GT_node_like.call(null,elem);G__597777.style.display = ((show_QMARK_)?"":"none");
return G__597777;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__597779 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__597779,false);
return G__597779;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__597781 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__597781,true);
return G__597781;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__597783 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__597783["constructor"] = Object);
return G__597783;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map