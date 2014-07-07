// Compiled by ClojureScript 0.0-2261
goog.provide('swg.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.dom.fullscreen');
goog.require('dommy.core');
goog.require('goog.dom.fullscreen');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('dommy.core');
goog.require('om.core');
swg.core.IRenderLoop = (function (){var obj621844 = {};return obj621844;
})();
swg.core.render_loop = (function render_loop(component,state){if((function (){var and__7594__auto__ = component;if(and__7594__auto__)
{return component.swg$core$IRenderLoop$render_loop$arity$2;
} else
{return and__7594__auto__;
}
})())
{return component.swg$core$IRenderLoop$render_loop$arity$2(component,state);
} else
{var x__8233__auto__ = (((component == null))?null:component);return (function (){var or__7606__auto__ = (swg.core.render_loop[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (swg.core.render_loop["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderLoop.render-loop",component);
}
}
})().call(null,component,state);
}
});
swg.core.IInitScene = (function (){var obj621846 = {};return obj621846;
})();
swg.core.init_scene = (function init_scene(component,state){if((function (){var and__7594__auto__ = component;if(and__7594__auto__)
{return component.swg$core$IInitScene$init_scene$arity$2;
} else
{return and__7594__auto__;
}
})())
{return component.swg$core$IInitScene$init_scene$arity$2(component,state);
} else
{var x__8233__auto__ = (((component == null))?null:component);return (function (){var or__7606__auto__ = (swg.core.init_scene[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (swg.core.init_scene["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitScene.init-scene",component);
}
}
})().call(null,component,state);
}
});
swg.core.IUpdateScene = (function (){var obj621848 = {};return obj621848;
})();
swg.core.update_scene = (function update_scene(component,scene_state,state){if((function (){var and__7594__auto__ = component;if(and__7594__auto__)
{return component.swg$core$IUpdateScene$update_scene$arity$3;
} else
{return and__7594__auto__;
}
})())
{return component.swg$core$IUpdateScene$update_scene$arity$3(component,scene_state,state);
} else
{var x__8233__auto__ = (((component == null))?null:component);return (function (){var or__7606__auto__ = (swg.core.update_scene[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (swg.core.update_scene["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUpdateScene.update-scene",component);
}
}
})().call(null,component,scene_state,state);
}
});
swg.core.IAnimateScene = (function (){var obj621850 = {};return obj621850;
})();
swg.core.animate_scene = (function animate_scene(component,scene_state,state){if((function (){var and__7594__auto__ = component;if(and__7594__auto__)
{return component.swg$core$IAnimateScene$animate_scene$arity$3;
} else
{return and__7594__auto__;
}
})())
{return component.swg$core$IAnimateScene$animate_scene$arity$3(component,scene_state,state);
} else
{var x__8233__auto__ = (((component == null))?null:component);return (function (){var or__7606__auto__ = (swg.core.animate_scene[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (swg.core.animate_scene["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAnimateScene.animate-scene",component);
}
}
})().call(null,component,scene_state,state);
}
});
swg.core.IRenderScene = (function (){var obj621852 = {};return obj621852;
})();
swg.core.render_scene = (function render_scene(component,scene_state,state){if((function (){var and__7594__auto__ = component;if(and__7594__auto__)
{return component.swg$core$IRenderScene$render_scene$arity$3;
} else
{return and__7594__auto__;
}
})())
{return component.swg$core$IRenderScene$render_scene$arity$3(component,scene_state,state);
} else
{var x__8233__auto__ = (((component == null))?null:component);return (function (){var or__7606__auto__ = (swg.core.render_scene[goog.typeOf(x__8233__auto__)]);if(or__7606__auto__)
{return or__7606__auto__;
} else
{var or__7606__auto____$1 = (swg.core.render_scene["_"]);if(or__7606__auto____$1)
{return or__7606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderScene.render-scene",component);
}
}
})().call(null,component,scene_state,state);
}
});
swg.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
swg.core.debounce = (function debounce(msecs,out){var in$ = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var c__10566__auto___621919 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___621919,in$){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___621919,in$){
return (function (state_621901){var state_val_621902 = (state_621901[(1)]);if((state_val_621902 === (8)))
{var inst_621893 = (state_621901[(2)]);var state_621901__$1 = (function (){var statearr_621903 = state_621901;(statearr_621903[(7)] = inst_621893);
return statearr_621903;
})();var statearr_621904_621920 = state_621901__$1;(statearr_621904_621920[(2)] = null);
(statearr_621904_621920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_621902 === (7)))
{var inst_621897 = (state_621901[(2)]);var state_621901__$1 = state_621901;var statearr_621905_621921 = state_621901__$1;(statearr_621905_621921[(2)] = inst_621897);
(statearr_621905_621921[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_621902 === (6)))
{var state_621901__$1 = state_621901;var statearr_621906_621922 = state_621901__$1;(statearr_621906_621922[(2)] = null);
(statearr_621906_621922[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_621902 === (5)))
{var inst_621888 = (state_621901[(8)]);var inst_621890 = cljs.core.async.put_BANG_.call(null,out,inst_621888);var inst_621891 = cljs.core.async.timeout.call(null,msecs);var state_621901__$1 = (function (){var statearr_621907 = state_621901;(statearr_621907[(9)] = inst_621890);
return statearr_621907;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_621901__$1,(8),inst_621891);
} else
{if((state_val_621902 === (4)))
{var inst_621888 = (state_621901[(8)]);var inst_621888__$1 = (state_621901[(2)]);var state_621901__$1 = (function (){var statearr_621908 = state_621901;(statearr_621908[(8)] = inst_621888__$1);
return statearr_621908;
})();if(cljs.core.truth_(inst_621888__$1))
{var statearr_621909_621923 = state_621901__$1;(statearr_621909_621923[(1)] = (5));
} else
{var statearr_621910_621924 = state_621901__$1;(statearr_621910_621924[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_621902 === (3)))
{var inst_621899 = (state_621901[(2)]);var state_621901__$1 = state_621901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_621901__$1,inst_621899);
} else
{if((state_val_621902 === (2)))
{var state_621901__$1 = state_621901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_621901__$1,(4),in$);
} else
{if((state_val_621902 === (1)))
{var state_621901__$1 = state_621901;var statearr_621911_621925 = state_621901__$1;(statearr_621911_621925[(2)] = null);
(statearr_621911_621925[(1)] = (2));
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
});})(c__10566__auto___621919,in$))
;return ((function (switch__10551__auto__,c__10566__auto___621919,in$){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_621915 = [null,null,null,null,null,null,null,null,null,null];(statearr_621915[(0)] = state_machine__10552__auto__);
(statearr_621915[(1)] = (1));
return statearr_621915;
});
var state_machine__10552__auto____1 = (function (state_621901){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_621901);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e621916){if((e621916 instanceof Object))
{var ex__10555__auto__ = e621916;var statearr_621917_621926 = state_621901;(statearr_621917_621926[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_621901);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e621916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__621927 = state_621901;
state_621901 = G__621927;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_621901){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_621901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___621919,in$))
})();var state__10568__auto__ = (function (){var statearr_621918 = f__10567__auto__.call(null);(statearr_621918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___621919);
return statearr_621918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___621919,in$))
);
return in$;
});
swg.core.grid = (function grid(size,step){var geometry = (new THREE.Geometry());var material = (new THREE.LineBasicMaterial({"color": (3158064)}));var vertices = geometry.vertices;var i_621928 = (- size);while(true){
if((i_621928 <= size))
{vertices.push((new THREE.Vector3((- size),-0.04,i_621928)));
vertices.push((new THREE.Vector3(size,-0.04,i_621928)));
vertices.push((new THREE.Vector3(i_621928,-0.04,(- size))));
vertices.push((new THREE.Vector3(i_621928,-0.04,size)));
{
var G__621929 = (i_621928 + step);
i_621928 = G__621929;
continue;
}
} else
{}
break;
}
return (new THREE.Line(geometry,material,THREE.LinePieces));
});
swg.core.canvas = (function canvas(p__621932,owner){var map__622041 = p__621932;var map__622041__$1 = ((cljs.core.seq_QMARK_.call(null,map__622041))?cljs.core.apply.call(null,cljs.core.hash_map,map__622041):map__622041);var data = map__622041__$1;var frame = cljs.core.get.call(null,map__622041__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));var scene = cljs.core.get.call(null,map__622041__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));if(typeof swg.core.t622042 !== 'undefined')
{} else
{
/**
* @constructor
*/
swg.core.t622042 = (function (scene,frame,data,map__622041,owner,p__621932,canvas,meta622043){
this.scene = scene;
this.frame = frame;
this.data = data;
this.map__622041 = map__622041;
this.owner = owner;
this.p__621932 = p__621932;
this.canvas = canvas;
this.meta622043 = meta622043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
swg.core.t622042.cljs$lang$type = true;
swg.core.t622042.cljs$lang$ctorStr = "swg.core/t622042";
swg.core.t622042.cljs$lang$ctorPrWriter = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this__8173__auto__,writer__8174__auto__,opt__8175__auto__){return cljs.core._write.call(null,writer__8174__auto__,"swg.core/t622042");
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.om$core$IInitState$ = true;
swg.core.t622042.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null)], null);
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.swg$core$IAnimateScene$ = true;
swg.core.t622042.prototype.swg$core$IAnimateScene$animate_scene$arity$3 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$,p__622045,state){var self__ = this;
var map__622046 = p__622045;var map__622046__$1 = ((cljs.core.seq_QMARK_.call(null,map__622046))?cljs.core.apply.call(null,cljs.core.hash_map,map__622046):map__622046);var scene_state = map__622046__$1;var controls = cljs.core.get.call(null,map__622046__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var model = cljs.core.get.call(null,map__622046__$1,new cljs.core.Keyword(null,"model","model",331153215));var clock = cljs.core.get.call(null,map__622046__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));var camera = cljs.core.get.call(null,map__622046__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));var scene__$2 = cljs.core.get.call(null,map__622046__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));var this$__$1 = this;return controls.update();
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.swg$core$IRenderLoop$ = true;
swg.core.t622042.prototype.swg$core$IRenderLoop$render_loop$arity$2 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$,p__622047){var self__ = this;
var map__622048 = p__622047;var map__622048__$1 = ((cljs.core.seq_QMARK_.call(null,map__622048))?cljs.core.apply.call(null,cljs.core.hash_map,map__622048):map__622048);var state = map__622048__$1;var renderer = cljs.core.get.call(null,map__622048__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));var this$__$1 = this;var render = ((function (this$__$1,map__622048,map__622048__$1,state,renderer,map__622041,map__622041__$1,data,frame,scene){
return (function render(){var map__622052 = ((om.core.rendering_QMARK_.call(null))?self__.data:cljs.core.deref.call(null,self__.data));var map__622052__$1 = ((cljs.core.seq_QMARK_.call(null,map__622052))?cljs.core.apply.call(null,cljs.core.hash_map,map__622052):map__622052);var d = map__622052__$1;var camera = cljs.core.get.call(null,map__622052__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));var scene__$2 = cljs.core.get.call(null,map__622052__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));var frame__$2 = cljs.core.get.call(null,map__622052__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));if(((frame__$2 == null)) || (!((frame__$2 === (-1)))))
{om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"frame","frame",-1711082588),requestAnimationFrame(render));
swg.core.animate_scene.call(null,this$__$1,d,state);
swg.core.render_scene.call(null,this$__$1,d,state);
return renderer.render(scene__$2,camera);
} else
{return null;
}
});})(this$__$1,map__622048,map__622048__$1,state,renderer,map__622041,map__622041__$1,data,frame,scene))
;
if((self__.frame == null))
{return render.call(null);
} else
{om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"frame","frame",-1711082588),cancelAnimationFrame(self__.frame));
swg.core.update_scene.call(null,this$__$1,self__.data,state);
return render.call(null);
}
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.om$core$IDidMount$ = true;
swg.core.t622042.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$){var self__ = this;
var this$__$1 = this;var vec__622053 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"size","size",1098693007));var width = cljs.core.nth.call(null,vec__622053,(0),null);var height = cljs.core.nth.call(null,vec__622053,(1),null);var renderer = (new THREE.WebGLRenderer({"antialias": true, "canvas": om.core.get_node.call(null,self__.owner)}));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (){var G__622054 = renderer;G__622054.setSize(width,height);
return G__622054;
})());
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.swg$core$IUpdateScene$ = true;
swg.core.t622042.prototype.swg$core$IUpdateScene$update_scene$arity$3 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$,p__622055,state){var self__ = this;
var map__622056 = p__622055;var map__622056__$1 = ((cljs.core.seq_QMARK_.call(null,map__622056))?cljs.core.apply.call(null,cljs.core.hash_map,map__622056):map__622056);var scene_state = map__622056__$1;var controls = cljs.core.get.call(null,map__622056__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var camera = cljs.core.get.call(null,map__622056__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));var scene__$2 = cljs.core.get.call(null,map__622056__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));var this$__$1 = this;var vec__622057 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state);var width = cljs.core.nth.call(null,vec__622057,(0),null);var height = cljs.core.nth.call(null,vec__622057,(1),null);camera.aspect = (width / height);
camera.updateProjectionMatrix();
return new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(state).setSize(width,height);
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.swg$core$IInitScene$ = true;
swg.core.t622042.prototype.swg$core$IInitScene$init_scene$arity$2 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$,p__622058){var self__ = this;
var map__622059 = p__622058;var map__622059__$1 = ((cljs.core.seq_QMARK_.call(null,map__622059))?cljs.core.apply.call(null,cljs.core.hash_map,map__622059):map__622059);var state = map__622059__$1;var size = cljs.core.get.call(null,map__622059__$1,new cljs.core.Keyword(null,"size","size",1098693007));var renderer = cljs.core.get.call(null,map__622059__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));var this$__$1 = this;var vec__622060 = size;var width = cljs.core.nth.call(null,vec__622060,(0),null);var height = cljs.core.nth.call(null,vec__622060,(1),null);var scene__$2 = (new THREE.Scene());var camera = (new THREE.PerspectiveCamera((60),(width / height),(1),(10000)));var loader_chan = cljs.core.async.chan.call(null,(1));var light1 = (new THREE.DirectionalLight((16777215)));var light2 = (new THREE.DirectionalLight((16777215)));var controls = (new THREE.OrbitControls(camera));var map__622061 = ((om.core.rendering_QMARK_.call(null))?self__.data:cljs.core.deref.call(null,self__.data));var map__622061__$1 = ((cljs.core.seq_QMARK_.call(null,map__622061))?cljs.core.apply.call(null,cljs.core.hash_map,map__622061):map__622061);var models = cljs.core.get.call(null,map__622061__$1,new cljs.core.Keyword(null,"models","models",-1985455662));var loader = cljs.core.get.call(null,map__622061__$1,new cljs.core.Keyword(null,"loader","loader",-462395423));light1.position.set((1),(1),(1)).normalize();
light2.position.set((-1),(-1),(-1)).normalize();
loader.load(("./"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,models))),((function (vec__622060,width,height,scene__$2,camera,loader_chan,light1,light2,controls,map__622061,map__622061__$1,models,loader,this$__$1,map__622059,map__622059__$1,state,size,renderer,map__622041,map__622041__$1,data,frame,scene){
return (function (p1__621931_SHARP_){return cljs.core.async.put_BANG_.call(null,loader_chan,p1__621931_SHARP_.scene);
});})(vec__622060,width,height,scene__$2,camera,loader_chan,light1,light2,controls,map__622061,map__622061__$1,models,loader,this$__$1,map__622059,map__622059__$1,state,size,renderer,map__622041,map__622041__$1,data,frame,scene))
);
camera.position.set((7),(5),(5));
scene__$2.fog = (new THREE.FogExp2((4144959),2.0E-4));
renderer.setClearColor(scene__$2.fog.color,(1));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scene","scene",1523800415),(function (){var G__622062 = scene__$2;G__622062.add((new THREE.AmbientLight((2236962))));
G__622062.add(light1);
G__622062.add(light2);
return G__622062;
})(),new cljs.core.Keyword(null,"camera","camera",-1190348585),camera,new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"loader-chan","loader-chan",-1526963119),loader_chan], null);
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.swg$core$IRenderScene$ = true;
swg.core.t622042.prototype.swg$core$IRenderScene$render_scene$arity$3 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$,p__622063,state){var self__ = this;
var map__622064 = p__622063;var map__622064__$1 = ((cljs.core.seq_QMARK_.call(null,map__622064))?cljs.core.apply.call(null,cljs.core.hash_map,map__622064):map__622064);var scene_state = map__622064__$1;var model = cljs.core.get.call(null,map__622064__$1,new cljs.core.Keyword(null,"model","model",331153215));var clock = cljs.core.get.call(null,map__622064__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));var camera = cljs.core.get.call(null,map__622064__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));var scene__$2 = cljs.core.get.call(null,map__622064__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));var this$__$1 = this;return null;
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (_622044){var self__ = this;
var _622044__$1 = this;return self__.meta622043;
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.om$core$IWillUnmount$ = true;
swg.core.t622042.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.frame))
{cancelAnimationFrame(self__.frame);
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"frame","frame",-1711082588),(-1));
} else
{return null;
}
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.om$core$IShouldUpdate$ = true;
swg.core.t622042.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var or__7606__auto__ = (function (){var and__7594__auto__ = (self__.scene == null);if(and__7594__auto__)
{return new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(next_props);
} else
{return and__7594__auto__;
}
})();if(cljs.core.truth_(or__7606__auto__))
{return or__7606__auto__;
} else
{return !((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(next_state) === new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner))));
}
})()))
{return true;
} else
{return null;
}
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.om$core$IRenderState$ = true;
swg.core.t622042.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$,p__622065){var self__ = this;
var map__622066 = p__622065;var map__622066__$1 = ((cljs.core.seq_QMARK_.call(null,map__622066))?cljs.core.apply.call(null,cljs.core.hash_map,map__622066):map__622066);var state = map__622066__$1;var renderer = cljs.core.get.call(null,map__622066__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));var size = cljs.core.get.call(null,map__622066__$1,new cljs.core.Keyword(null,"size","size",1098693007));var this$__$1 = this;if(cljs.core.truth_((function (){var and__7594__auto__ = new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(and__7594__auto__))
{return renderer;
} else
{return and__7594__auto__;
}
})()))
{swg.core.render_loop.call(null,this$__$1,om.core.get_state.call(null,self__.owner));
} else
{}
return React.DOM.canvas({"onDoubleClick": ((function (this$__$1,map__622066,map__622066__$1,state,renderer,size,map__622041,map__622041__$1,data,frame,scene){
return (function (e){var el = om.core.get_node.call(null,self__.owner);return goog.dom.fullscreen.requestFullScreenWithKeys(el);
});})(this$__$1,map__622066,map__622066__$1,state,renderer,size,map__622041,map__622041__$1,data,frame,scene))
});
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.om$core$IWillMount$ = true;
swg.core.t622042.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (this$){var self__ = this;
var this$__$1 = this;var resize_chan = cljs.core.async.chan.call(null,(1));var debouncing = swg.core.debounce.call(null,(50),resize_chan);var monitor = (new goog.dom.ViewportSizeMonitor());goog.events.listen(monitor,goog.events.EventType.RESIZE,((function (resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene){
return (function (p1__621930_SHARP_){return cljs.core.async.put_BANG_.call(null,debouncing,p1__621930_SHARP_);
});})(resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene))
);
var c__10566__auto___622149 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto___622149,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto___622149,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene){
return (function (state_622084){var state_val_622085 = (state_622084[(1)]);if((state_val_622085 === (7)))
{var inst_622080 = (state_622084[(2)]);var state_622084__$1 = state_622084;var statearr_622086_622150 = state_622084__$1;(statearr_622086_622150[(2)] = inst_622080);
(statearr_622086_622150[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622085 === (6)))
{var state_622084__$1 = state_622084;var statearr_622087_622151 = state_622084__$1;(statearr_622087_622151[(2)] = null);
(statearr_622087_622151[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622085 === (5)))
{var inst_622071 = monitor.getSize();var inst_622072 = inst_622071.width;var inst_622073 = inst_622071.height;var inst_622074 = [inst_622072,inst_622073];var inst_622075 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_622074,null));var inst_622076 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"size","size",1098693007),inst_622075);var state_622084__$1 = (function (){var statearr_622088 = state_622084;(statearr_622088[(7)] = inst_622076);
return statearr_622088;
})();var statearr_622089_622152 = state_622084__$1;(statearr_622089_622152[(2)] = null);
(statearr_622089_622152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622085 === (4)))
{var inst_622069 = (state_622084[(2)]);var state_622084__$1 = state_622084;if(cljs.core.truth_(inst_622069))
{var statearr_622090_622153 = state_622084__$1;(statearr_622090_622153[(1)] = (5));
} else
{var statearr_622091_622154 = state_622084__$1;(statearr_622091_622154[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622085 === (3)))
{var inst_622082 = (state_622084[(2)]);var state_622084__$1 = state_622084;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_622084__$1,inst_622082);
} else
{if((state_val_622085 === (2)))
{var state_622084__$1 = state_622084;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_622084__$1,(4),resize_chan);
} else
{if((state_val_622085 === (1)))
{var state_622084__$1 = state_622084;var statearr_622092_622155 = state_622084__$1;(statearr_622092_622155[(2)] = null);
(statearr_622092_622155[(1)] = (2));
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
});})(c__10566__auto___622149,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene))
;return ((function (switch__10551__auto__,c__10566__auto___622149,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_622096 = [null,null,null,null,null,null,null,null];(statearr_622096[(0)] = state_machine__10552__auto__);
(statearr_622096[(1)] = (1));
return statearr_622096;
});
var state_machine__10552__auto____1 = (function (state_622084){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_622084);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e622097){if((e622097 instanceof Object))
{var ex__10555__auto__ = e622097;var statearr_622098_622156 = state_622084;(statearr_622098_622156[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_622084);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e622097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__622157 = state_622084;
state_622084 = G__622157;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_622084){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_622084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto___622149,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene))
})();var state__10568__auto__ = (function (){var statearr_622099 = f__10567__auto__.call(null);(statearr_622099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto___622149);
return statearr_622099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto___622149,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene))
);
var c__10566__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10566__auto__,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene){
return (function (){var f__10567__auto__ = (function (){var switch__10551__auto__ = ((function (c__10566__auto__,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene){
return (function (state_622126){var state_val_622127 = (state_622126[(1)]);if((state_val_622127 === (7)))
{var inst_622116 = (state_622126[(7)]);var inst_622116__$1 = (state_622126[(2)]);var state_622126__$1 = (function (){var statearr_622128 = state_622126;(statearr_622128[(7)] = inst_622116__$1);
return statearr_622128;
})();if(cljs.core.truth_(inst_622116__$1))
{var statearr_622129_622158 = state_622126__$1;(statearr_622129_622158[(1)] = (8));
} else
{var statearr_622130_622159 = state_622126__$1;(statearr_622130_622159[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622127 === (1)))
{var inst_622102 = (state_622126[(8)]);var inst_622101 = om.core.get_state.call(null,self__.owner);var inst_622102__$1 = swg.core.init_scene.call(null,this$__$1,inst_622101);var inst_622103 = cljs.core.seq_QMARK_.call(null,inst_622102__$1);var state_622126__$1 = (function (){var statearr_622131 = state_622126;(statearr_622131[(8)] = inst_622102__$1);
return statearr_622131;
})();if(inst_622103)
{var statearr_622132_622160 = state_622126__$1;(statearr_622132_622160[(1)] = (2));
} else
{var statearr_622133_622161 = state_622126__$1;(statearr_622133_622161[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622127 === (4)))
{var inst_622108 = (state_622126[(2)]);var inst_622109 = cljs.core.get.call(null,inst_622108,new cljs.core.Keyword(null,"scene","scene",1523800415));var inst_622110 = cljs.core.get.call(null,inst_622108,new cljs.core.Keyword(null,"loader-chan","loader-chan",-1526963119));var inst_622111 = cljs.core.deref.call(null,self__.data);var inst_622112 = cljs.core.merge.call(null,inst_622111,inst_622108);var inst_622113 = om.core.update_BANG_.call(null,self__.data,inst_622112);var state_622126__$1 = (function (){var statearr_622134 = state_622126;(statearr_622134[(9)] = inst_622113);
(statearr_622134[(10)] = inst_622109);
(statearr_622134[(11)] = inst_622110);
return statearr_622134;
})();var statearr_622135_622162 = state_622126__$1;(statearr_622135_622162[(2)] = null);
(statearr_622135_622162[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622127 === (6)))
{var inst_622124 = (state_622126[(2)]);var state_622126__$1 = state_622126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_622126__$1,inst_622124);
} else
{if((state_val_622127 === (3)))
{var inst_622102 = (state_622126[(8)]);var state_622126__$1 = state_622126;var statearr_622136_622163 = state_622126__$1;(statearr_622136_622163[(2)] = inst_622102);
(statearr_622136_622163[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622127 === (2)))
{var inst_622102 = (state_622126[(8)]);var inst_622105 = cljs.core.apply.call(null,cljs.core.hash_map,inst_622102);var state_622126__$1 = state_622126;var statearr_622137_622164 = state_622126__$1;(statearr_622137_622164[(2)] = inst_622105);
(statearr_622137_622164[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622127 === (9)))
{var state_622126__$1 = state_622126;var statearr_622138_622165 = state_622126__$1;(statearr_622138_622165[(2)] = null);
(statearr_622138_622165[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622127 === (5)))
{var inst_622110 = (state_622126[(11)]);var state_622126__$1 = state_622126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_622126__$1,(7),inst_622110);
} else
{if((state_val_622127 === (10)))
{var inst_622122 = (state_622126[(2)]);var state_622126__$1 = state_622126;var statearr_622139_622166 = state_622126__$1;(statearr_622139_622166[(2)] = inst_622122);
(statearr_622139_622166[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_622127 === (8)))
{var inst_622116 = (state_622126[(7)]);var inst_622109 = (state_622126[(10)]);var inst_622118 = inst_622109.add(inst_622116);var state_622126__$1 = (function (){var statearr_622140 = state_622126;(statearr_622140[(12)] = inst_622118);
return statearr_622140;
})();var statearr_622141_622167 = state_622126__$1;(statearr_622141_622167[(2)] = null);
(statearr_622141_622167[(1)] = (5));
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
});})(c__10566__auto__,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene))
;return ((function (switch__10551__auto__,c__10566__auto__,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene){
return (function() {
var state_machine__10552__auto__ = null;
var state_machine__10552__auto____0 = (function (){var statearr_622145 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_622145[(0)] = state_machine__10552__auto__);
(statearr_622145[(1)] = (1));
return statearr_622145;
});
var state_machine__10552__auto____1 = (function (state_622126){while(true){
var ret_value__10553__auto__ = (function (){try{while(true){
var result__10554__auto__ = switch__10551__auto__.call(null,state_622126);if(cljs.core.keyword_identical_QMARK_.call(null,result__10554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10554__auto__;
}
break;
}
}catch (e622146){if((e622146 instanceof Object))
{var ex__10555__auto__ = e622146;var statearr_622147_622168 = state_622126;(statearr_622147_622168[(5)] = ex__10555__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_622126);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e622146;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__622169 = state_622126;
state_622126 = G__622169;
continue;
}
} else
{return ret_value__10553__auto__;
}
break;
}
});
state_machine__10552__auto__ = function(state_622126){
switch(arguments.length){
case 0:
return state_machine__10552__auto____0.call(this);
case 1:
return state_machine__10552__auto____1.call(this,state_622126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10552__auto____0;
state_machine__10552__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10552__auto____1;
return state_machine__10552__auto__;
})()
;})(switch__10551__auto__,c__10566__auto__,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene))
})();var state__10568__auto__ = (function (){var statearr_622148 = f__10567__auto__.call(null);(statearr_622148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10566__auto__);
return statearr_622148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10568__auto__);
});})(c__10566__auto__,resize_chan,debouncing,monitor,this$__$1,map__622041,map__622041__$1,data,frame,scene))
);
return c__10566__auto__;
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.t622042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function (_622044,meta622043__$1){var self__ = this;
var _622044__$1 = this;return (new swg.core.t622042(self__.scene,self__.frame,self__.data,self__.map__622041,self__.owner,self__.p__621932,self__.canvas,meta622043__$1));
});})(map__622041,map__622041__$1,data,frame,scene))
;
swg.core.__GT_t622042 = ((function (map__622041,map__622041__$1,data,frame,scene){
return (function __GT_t622042(scene__$1,frame__$1,data__$1,map__622041__$2,owner__$1,p__621932__$1,canvas__$1,meta622043){return (new swg.core.t622042(scene__$1,frame__$1,data__$1,map__622041__$2,owner__$1,p__621932__$1,canvas__$1,meta622043));
});})(map__622041,map__622041__$1,data,frame,scene))
;
}
return (new swg.core.t622042(scene,frame,data,map__622041__$1,owner,p__621932,canvas,null));
});
/**
* @param {...*} var_args
*/
swg.core._main = (function() { 
var _main__delegate = function (args){cljs.core.enable_console_print_BANG_.call(null);
return om.core.root.call(null,swg.core.canvas,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loader","loader",-462395423),(new THREE.ColladaLoader()),new cljs.core.Keyword(null,"models","models",-1985455662),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["models/shuttle_rebel_l0.dae"], null),new cljs.core.Keyword(null,"clock","clock",-894301127),(new THREE.Clock())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
};
var _main = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _main__delegate.call(this,args);};
_main.cljs$lang$maxFixedArity = 0;
_main.cljs$lang$applyTo = (function (arglist__622170){
var args = cljs.core.seq(arglist__622170);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
goog.exportSymbol('swg.core._main', swg.core._main);

//# sourceMappingURL=core.js.map