(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function w0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sg={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),A0=Symbol.for("react.portal"),R0=Symbol.for("react.fragment"),C0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),D0=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),I0=Symbol.for("react.memo"),U0=Symbol.for("react.lazy"),Ph=Symbol.iterator;function F0(t){return t===null||typeof t!="object"?null:(t=Ph&&t[Ph]||t["@@iterator"],typeof t=="function"?t:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lg=Object.assign,ug={};function Fo(t,e,n){this.props=t,this.context=e,this.refs=ug,this.updater=n||ag}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cg(){}cg.prototype=Fo.prototype;function fd(t,e,n){this.props=t,this.context=e,this.refs=ug,this.updater=n||ag}var dd=fd.prototype=new cg;dd.constructor=fd;lg(dd,Fo.prototype);dd.isPureReactComponent=!0;var Lh=Array.isArray,fg=Object.prototype.hasOwnProperty,hd={current:null},dg={key:!0,ref:!0,__self:!0,__source:!0};function hg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)fg.call(e,i)&&!dg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Bs,type:t,key:o,ref:s,props:r,_owner:hd.current}}function O0(t,e){return{$$typeof:Bs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bs}function k0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dh=/\/+/g;function Su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k0(""+t.key):e.toString(36)}function Qa(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Bs:case A0:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Su(s,0):i,Lh(r)?(n="",t!=null&&(n=t.replace(Dh,"$&/")+"/"),Qa(r,e,n,"",function(u){return u})):r!=null&&(pd(r)&&(r=O0(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Dh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Lh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Su(o,a);s+=Qa(o,e,n,l,r)}else if(l=F0(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Su(o,a++),s+=Qa(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function sa(t,e,n){if(t==null)return t;var i=[],r=0;return Qa(t,i,"","",function(o){return e.call(n,o,r++)}),i}function z0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Ja={transition:null},B0={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:hd};function pg(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Fo;ke.Fragment=R0;ke.Profiler=b0;ke.PureComponent=fd;ke.StrictMode=C0;ke.Suspense=N0;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B0;ke.act=pg;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=lg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=hd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)fg.call(e,l)&&!dg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Bs,type:t.type,key:r,ref:o,props:i,_owner:s}};ke.createContext=function(t){return t={$$typeof:L0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P0,_context:t},t.Consumer=t};ke.createElement=hg;ke.createFactory=function(t){var e=hg.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:D0,render:t}};ke.isValidElement=pd;ke.lazy=function(t){return{$$typeof:U0,_payload:{_status:-1,_result:t},_init:z0}};ke.memo=function(t,e){return{$$typeof:I0,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Ja.transition;Ja.transition={};try{t()}finally{Ja.transition=e}};ke.unstable_act=pg;ke.useCallback=function(t,e){return Kt.current.useCallback(t,e)};ke.useContext=function(t){return Kt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Kt.current.useEffect(t,e)};ke.useId=function(){return Kt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Kt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};ke.useRef=function(t){return Kt.current.useRef(t)};ke.useState=function(t){return Kt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Kt.current.useTransition()};ke.version="18.3.1";sg.exports=ke;var Gn=sg.exports;const Zn=w0(Gn);var Cc={},mg={exports:{}},vn={},gg={exports:{}},vg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,W){var K=N.length;N.push(W);e:for(;0<K;){var oe=K-1>>>1,Se=N[oe];if(0<r(Se,W))N[oe]=W,N[K]=Se,K=oe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var W=N[0],K=N.pop();if(K!==W){N[0]=K;e:for(var oe=0,Se=N.length,Ve=Se>>>1;oe<Ve;){var G=2*(oe+1)-1,re=N[G],me=G+1,le=N[me];if(0>r(re,K))me<Se&&0>r(le,re)?(N[oe]=le,N[me]=K,oe=me):(N[oe]=re,N[G]=K,oe=G);else if(me<Se&&0>r(le,K))N[oe]=le,N[me]=K,oe=me;else break e}}return W}function r(N,W){var K=N.sortIndex-W.sortIndex;return K!==0?K:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,d=null,h=3,p=!1,v=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var W=n(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=N)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function x(N){if(S=!1,_(N),!v)if(n(l)!==null)v=!0,j(C);else{var W=n(u);W!==null&&Q(x,W.startTime-N)}}function C(N,W){v=!1,S&&(S=!1,c(b),b=-1),p=!0;var K=h;try{for(_(W),d=n(l);d!==null&&(!(d.expirationTime>W)||N&&!L());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var Se=oe(d.expirationTime<=W);W=t.unstable_now(),typeof Se=="function"?d.callback=Se:d===n(l)&&i(l),_(W)}else i(l);d=n(l)}if(d!==null)var Ve=!0;else{var G=n(u);G!==null&&Q(x,G.startTime-W),Ve=!1}return Ve}finally{d=null,h=K,p=!1}}var A=!1,w=null,b=-1,T=5,E=-1;function L(){return!(t.unstable_now()-E<T)}function V(){if(w!==null){var N=t.unstable_now();E=N;var W=!0;try{W=w(!0,N)}finally{W?B():(A=!1,w=null)}}else A=!1}var B;if(typeof g=="function")B=function(){g(V)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=V,B=function(){q.postMessage(null)}}else B=function(){m(V,0)};function j(N){w=N,A||(A=!0,B())}function Q(N,W){b=m(function(){N(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,j(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var K=h;h=W;try{return N()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=h;h=N;try{return W()}finally{h=K}},t.unstable_scheduleCallback=function(N,W,K){var oe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?oe+K:oe):K=oe,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=K+Se,N={id:f++,callback:W,priorityLevel:N,startTime:K,expirationTime:Se,sortIndex:-1},K>oe?(N.sortIndex=K,e(u,N),n(l)===null&&N===n(u)&&(S?(c(b),b=-1):S=!0,Q(x,K-oe))):(N.sortIndex=Se,e(l,N),v||p||(v=!0,j(C))),N},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(N){var W=h;return function(){var K=h;h=W;try{return N.apply(this,arguments)}finally{h=K}}}})(vg);gg.exports=vg;var H0=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0=Gn,gn=H0;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _g=new Set,_s={};function Fr(t,e){To(t,e),To(t+"Capture",e)}function To(t,e){for(_s[t]=e,t=0;t<e.length;t++)_g.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=Object.prototype.hasOwnProperty,G0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nh={},Ih={};function W0(t){return bc.call(Ih,t)?!0:bc.call(Nh,t)?!1:G0.test(t)?Ih[t]=!0:(Nh[t]=!0,!1)}function X0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j0(t,e,n,i){if(e===null||typeof e>"u"||X0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);Ot[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);Ot[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);Ot[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function vd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(j0(e,n,r,i)&&(n=null),i||r===null?W0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),to=Symbol.for("react.portal"),no=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),Dc=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),Sg=Symbol.for("react.offscreen"),Uh=Symbol.iterator;function Wo(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Eu;function ns(t){if(Eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eu=e&&e[1]||""}return`
`+Eu+t}var Mu=!1;function Tu(t,e){if(!t||Mu)return"";Mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ns(t):""}function $0(t){switch(t.tag){case 5:return ns(t.type);case 16:return ns("Lazy");case 13:return ns("Suspense");case 19:return ns("SuspenseList");case 0:case 2:case 15:return t=Tu(t.type,!1),t;case 11:return t=Tu(t.type.render,!1),t;case 1:return t=Tu(t.type,!0),t;default:return""}}function Nc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case no:return"Fragment";case to:return"Portal";case Pc:return"Profiler";case _d:return"StrictMode";case Lc:return"Suspense";case Dc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yg:return(t.displayName||"Context")+".Consumer";case xg:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yd:return e=t.displayName||null,e!==null?e:Nc(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return Nc(t(e))}catch{}}return null}function Y0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nc(e);case 8:return e===_d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Eg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q0(t){var e=Eg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function la(t){t._valueTracker||(t._valueTracker=q0(t))}function Mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Eg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tg(t,e){e=e.checked,e!=null&&vd(t,"checked",e,!1)}function Uc(t,e){Tg(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fc(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Oh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fc(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var is=Array.isArray;function mo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Oc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(is(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function wg(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ua,Rg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var as={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K0=["Webkit","ms","Moz","O"];Object.keys(as).forEach(function(t){K0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),as[e]=as[t]})});function Cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||as.hasOwnProperty(t)&&as[t]?(""+e).trim():e+"px"}function bg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Z0=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zc(t,e){if(e){if(Z0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hc=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vc=null,go=null,vo=null;function Bh(t){if(t=Gs(t)){if(typeof Vc!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Zl(e),Vc(t.stateNode,t.type,e))}}function Pg(t){go?vo?vo.push(t):vo=[t]:go=t}function Lg(){if(go){var t=go,e=vo;if(vo=go=null,Bh(t),e)for(t=0;t<e.length;t++)Bh(e[t])}}function Dg(t,e){return t(e)}function Ng(){}var wu=!1;function Ig(t,e,n){if(wu)return t(e,n);wu=!0;try{return Dg(t,e,n)}finally{wu=!1,(go!==null||vo!==null)&&(Ng(),Lg())}}function ys(t,e){var n=t.stateNode;if(n===null)return null;var i=Zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Gc=!1;if(xi)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Gc=!1}function Q0(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ls=!1,_l=null,xl=!1,Wc=null,J0={onError:function(t){ls=!0,_l=t}};function e1(t,e,n,i,r,o,s,a,l){ls=!1,_l=null,Q0.apply(J0,arguments)}function t1(t,e,n,i,r,o,s,a,l){if(e1.apply(this,arguments),ls){if(ls){var u=_l;ls=!1,_l=null}else throw Error(te(198));xl||(xl=!0,Wc=u)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hh(t){if(Or(t)!==t)throw Error(te(188))}function n1(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Hh(r),t;if(o===i)return Hh(r),e;o=o.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Fg(t){return t=n1(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var kg=gn.unstable_scheduleCallback,Vh=gn.unstable_cancelCallback,i1=gn.unstable_shouldYield,r1=gn.unstable_requestPaint,Et=gn.unstable_now,o1=gn.unstable_getCurrentPriorityLevel,Ed=gn.unstable_ImmediatePriority,zg=gn.unstable_UserBlockingPriority,yl=gn.unstable_NormalPriority,s1=gn.unstable_LowPriority,Bg=gn.unstable_IdlePriority,$l=null,Qn=null;function a1(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:c1,l1=Math.log,u1=Math.LN2;function c1(t){return t>>>=0,t===0?32:31-(l1(t)/u1|0)|0}var ca=64,fa=4194304;function rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=rs(a):(o&=s,o!==0&&(i=rs(o)))}else s=n&~r,s!==0?i=rs(s):o!==0&&(i=rs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function f1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Bn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=f1(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Xc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hg(){var t=ca;return ca<<=1,!(ca&4194240)&&(ca=64),t}function Au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function h1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Vg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gg,Td,Wg,Xg,jg,jc=!1,da=[],Gi=null,Wi=null,Xi=null,Ss=new Map,Es=new Map,ki=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gh(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(e.pointerId)}}function jo(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Gs(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function m1(t,e,n,i,r){switch(e){case"focusin":return Gi=jo(Gi,t,e,n,i,r),!0;case"dragenter":return Wi=jo(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=jo(Xi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ss.set(o,jo(Ss.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Es.set(o,jo(Es.get(o)||null,t,e,n,i,r)),!0}return!1}function $g(t){var e=Er(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=Ug(n),e!==null){t.blockedOn=e,jg(t.priority,function(){Wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function el(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$c(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hc=i,n.target.dispatchEvent(i),Hc=null}else return e=Gs(n),e!==null&&Td(e),t.blockedOn=n,!1;e.shift()}return!0}function Wh(t,e,n){el(t)&&n.delete(e)}function g1(){jc=!1,Gi!==null&&el(Gi)&&(Gi=null),Wi!==null&&el(Wi)&&(Wi=null),Xi!==null&&el(Xi)&&(Xi=null),Ss.forEach(Wh),Es.forEach(Wh)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,jc||(jc=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,g1)))}function Ms(t){function e(r){return $o(r,t)}if(0<da.length){$o(da[0],t);for(var n=1;n<da.length;n++){var i=da[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&$o(Gi,t),Wi!==null&&$o(Wi,t),Xi!==null&&$o(Xi,t),Ss.forEach(e),Es.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&ki.shift()}var _o=wi.ReactCurrentBatchConfig,El=!0;function v1(t,e,n,i){var r=Ze,o=_o.transition;_o.transition=null;try{Ze=1,wd(t,e,n,i)}finally{Ze=r,_o.transition=o}}function _1(t,e,n,i){var r=Ze,o=_o.transition;_o.transition=null;try{Ze=4,wd(t,e,n,i)}finally{Ze=r,_o.transition=o}}function wd(t,e,n,i){if(El){var r=$c(t,e,n,i);if(r===null)Fu(t,e,i,Ml,n),Gh(t,i);else if(m1(r,t,e,n,i))i.stopPropagation();else if(Gh(t,i),e&4&&-1<p1.indexOf(t)){for(;r!==null;){var o=Gs(r);if(o!==null&&Gg(o),o=$c(t,e,n,i),o===null&&Fu(t,e,i,Ml,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Fu(t,e,i,null,n)}}var Ml=null;function $c(t,e,n,i){if(Ml=null,t=Sd(i),t=Er(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function Yg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o1()){case Ed:return 1;case zg:return 4;case yl:case s1:return 16;case Bg:return 536870912;default:return 16}default:return 16}}var Hi=null,Ad=null,tl=null;function qg(){if(tl)return tl;var t,e=Ad,n=e.length,i,r="value"in Hi?Hi.value:Hi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return tl=r.slice(t,1<i?1-i:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function Xh(){return!1}function _n(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ha:Xh,this.isPropagationStopped=Xh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rd=_n(Oo),Vs=_t({},Oo,{view:0,detail:0}),x1=_n(Vs),Ru,Cu,Yo,Yl=_t({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Ru=t.screenX-Yo.screenX,Cu=t.screenY-Yo.screenY):Cu=Ru=0,Yo=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),jh=_n(Yl),y1=_t({},Yl,{dataTransfer:0}),S1=_n(y1),E1=_t({},Vs,{relatedTarget:0}),bu=_n(E1),M1=_t({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),T1=_n(M1),w1=_t({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A1=_n(w1),R1=_t({},Oo,{data:0}),$h=_n(R1),C1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=P1[t])?!!e[t]:!1}function Cd(){return L1}var D1=_t({},Vs,{key:function(t){if(t.key){var e=C1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N1=_n(D1),I1=_t({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=_n(I1),U1=_t({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),F1=_n(U1),O1=_t({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),k1=_n(O1),z1=_t({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B1=_n(z1),H1=[9,13,27,32],bd=xi&&"CompositionEvent"in window,us=null;xi&&"documentMode"in document&&(us=document.documentMode);var V1=xi&&"TextEvent"in window&&!us,Kg=xi&&(!bd||us&&8<us&&11>=us),qh=" ",Kh=!1;function Zg(t,e){switch(t){case"keyup":return H1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function G1(t,e){switch(t){case"compositionend":return Qg(e);case"keypress":return e.which!==32?null:(Kh=!0,qh);case"textInput":return t=e.data,t===qh&&Kh?null:t;default:return null}}function W1(t,e){if(io)return t==="compositionend"||!bd&&Zg(t,e)?(t=qg(),tl=Ad=Hi=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kg&&e.locale!=="ko"?null:e.data;default:return null}}var X1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X1[t.type]:e==="textarea"}function Jg(t,e,n,i){Pg(i),e=Tl(e,"onChange"),0<e.length&&(n=new Rd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var cs=null,Ts=null;function j1(t){cv(t,0)}function ql(t){var e=so(t);if(Mg(e))return t}function $1(t,e){if(t==="change")return e}var ev=!1;if(xi){var Pu;if(xi){var Lu="oninput"in document;if(!Lu){var Qh=document.createElement("div");Qh.setAttribute("oninput","return;"),Lu=typeof Qh.oninput=="function"}Pu=Lu}else Pu=!1;ev=Pu&&(!document.documentMode||9<document.documentMode)}function Jh(){cs&&(cs.detachEvent("onpropertychange",tv),Ts=cs=null)}function tv(t){if(t.propertyName==="value"&&ql(Ts)){var e=[];Jg(e,Ts,t,Sd(t)),Ig(j1,e)}}function Y1(t,e,n){t==="focusin"?(Jh(),cs=e,Ts=n,cs.attachEvent("onpropertychange",tv)):t==="focusout"&&Jh()}function q1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(Ts)}function K1(t,e){if(t==="click")return ql(e)}function Z1(t,e){if(t==="input"||t==="change")return ql(e)}function Q1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:Q1;function ws(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bc.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,e){var n=ep(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ep(n)}}function nv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iv(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function J1(t){var e=iv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nv(n.ownerDocument.documentElement,n)){if(i!==null&&Pd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=tp(n,o);var s=tp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ex=xi&&"documentMode"in document&&11>=document.documentMode,ro=null,Yc=null,fs=null,qc=!1;function np(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qc||ro==null||ro!==vl(i)||(i=ro,"selectionStart"in i&&Pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fs&&ws(fs,i)||(fs=i,i=Tl(Yc,"onSelect"),0<i.length&&(e=new Rd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ro)))}function pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oo={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},Du={},rv={};xi&&(rv=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function Kl(t){if(Du[t])return Du[t];if(!oo[t])return t;var e=oo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rv)return Du[t]=e[n];return t}var ov=Kl("animationend"),sv=Kl("animationiteration"),av=Kl("animationstart"),lv=Kl("transitionend"),uv=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){uv.set(t,e),Fr(e,[t])}for(var Nu=0;Nu<ip.length;Nu++){var Iu=ip[Nu],tx=Iu.toLowerCase(),nx=Iu[0].toUpperCase()+Iu.slice(1);rr(tx,"on"+nx)}rr(ov,"onAnimationEnd");rr(sv,"onAnimationIteration");rr(av,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(lv,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(os));function rp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,t1(i,e,void 0,t),t.currentTarget=null}function cv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;rp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;rp(r,a,u),o=l}}}if(xl)throw t=Wc,xl=!1,Wc=null,t}function st(t,e){var n=e[ef];n===void 0&&(n=e[ef]=new Set);var i=t+"__bubble";n.has(i)||(fv(e,t,2,!1),n.add(i))}function Uu(t,e,n){var i=0;e&&(i|=4),fv(n,t,i,e)}var ma="_reactListening"+Math.random().toString(36).slice(2);function As(t){if(!t[ma]){t[ma]=!0,_g.forEach(function(n){n!=="selectionchange"&&(ix.has(n)||Uu(n,!1,t),Uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ma]||(e[ma]=!0,Uu("selectionchange",!1,e))}}function fv(t,e,n,i){switch(Yg(e)){case 1:var r=v1;break;case 4:r=_1;break;default:r=wd}n=r.bind(null,e,n,t),r=void 0,!Gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Er(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Ig(function(){var u=o,f=Sd(n),d=[];e:{var h=uv.get(t);if(h!==void 0){var p=Rd,v=t;switch(t){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":p=N1;break;case"focusin":v="focus",p=bu;break;case"focusout":v="blur",p=bu;break;case"beforeblur":case"afterblur":p=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=F1;break;case ov:case sv:case av:p=T1;break;case lv:p=k1;break;case"scroll":p=x1;break;case"wheel":p=B1;break;case"copy":case"cut":case"paste":p=A1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Yh}var S=(e&4)!==0,m=!S&&t==="scroll",c=S?h!==null?h+"Capture":null:h;S=[];for(var g=u,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,c!==null&&(x=ys(g,c),x!=null&&S.push(Rs(g,x,_)))),m)break;g=g.return}0<S.length&&(h=new p(h,v,null,n,f),d.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Hc&&(v=n.relatedTarget||n.fromElement)&&(Er(v)||v[yi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Er(v):null,v!==null&&(m=Or(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(S=jh,x="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=Yh,x="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?h:so(p),_=v==null?h:so(v),h=new S(x,g+"leave",p,n,f),h.target=m,h.relatedTarget=_,x=null,Er(f)===u&&(S=new S(c,g+"enter",v,n,f),S.target=_,S.relatedTarget=m,x=S),m=x,p&&v)t:{for(S=p,c=v,g=0,_=S;_;_=zr(_))g++;for(_=0,x=c;x;x=zr(x))_++;for(;0<g-_;)S=zr(S),g--;for(;0<_-g;)c=zr(c),_--;for(;g--;){if(S===c||c!==null&&S===c.alternate)break t;S=zr(S),c=zr(c)}S=null}else S=null;p!==null&&op(d,h,p,S,!1),v!==null&&m!==null&&op(d,m,v,S,!0)}}e:{if(h=u?so(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=$1;else if(Zh(h))if(ev)C=Z1;else{C=q1;var A=Y1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=K1);if(C&&(C=C(t,u))){Jg(d,C,n,f);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Fc(h,"number",h.value)}switch(A=u?so(u):window,t){case"focusin":(Zh(A)||A.contentEditable==="true")&&(ro=A,Yc=u,fs=null);break;case"focusout":fs=Yc=ro=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,np(d,n,f);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":np(d,n,f)}var w;if(bd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else io?Zg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Kg&&n.locale!=="ko"&&(io||b!=="onCompositionStart"?b==="onCompositionEnd"&&io&&(w=qg()):(Hi=f,Ad="value"in Hi?Hi.value:Hi.textContent,io=!0)),A=Tl(u,b),0<A.length&&(b=new $h(b,t,null,n,f),d.push({event:b,listeners:A}),w?b.data=w:(w=Qg(n),w!==null&&(b.data=w)))),(w=V1?G1(t,n):W1(t,n))&&(u=Tl(u,"onBeforeInput"),0<u.length&&(f=new $h("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=w))}cv(d,e)})}function Rs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ys(t,n),o!=null&&i.unshift(Rs(t,o,r)),o=ys(t,e),o!=null&&i.push(Rs(t,o,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function op(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ys(n,o),l!=null&&s.unshift(Rs(n,l,a))):r||(l=ys(n,o),l!=null&&s.push(Rs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var rx=/\r\n?/g,ox=/\u0000|\uFFFD/g;function sp(t){return(typeof t=="string"?t:""+t).replace(rx,`
`).replace(ox,"")}function ga(t,e,n){if(e=sp(e),sp(t)!==e&&n)throw Error(te(425))}function wl(){}var Kc=null,Zc=null;function Qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(t){return ap.resolve(null).then(t).catch(lx)}:Jc;function lx(t){setTimeout(function(){throw t})}function Ou(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ms(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ms(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ko=Math.random().toString(36).slice(2),qn="__reactFiber$"+ko,Cs="__reactProps$"+ko,yi="__reactContainer$"+ko,ef="__reactEvents$"+ko,ux="__reactListeners$"+ko,cx="__reactHandles$"+ko;function Er(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lp(t);t!==null;){if(n=t[qn])return n;t=lp(t)}return e}t=n,n=t.parentNode}return null}function Gs(t){return t=t[qn]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function so(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Zl(t){return t[Cs]||null}var tf=[],ao=-1;function or(t){return{current:t}}function at(t){0>ao||(t.current=tf[ao],tf[ao]=null,ao--)}function it(t,e){ao++,tf[ao]=t.current,t.current=e}var tr={},Gt=or(tr),nn=or(!1),br=tr;function wo(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function Al(){at(nn),at(Gt)}function up(t,e,n){if(Gt.current!==tr)throw Error(te(168));it(Gt,e),it(nn,n)}function dv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Y0(t)||"Unknown",r));return _t({},n,i)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,br=Gt.current,it(Gt,t),it(nn,nn.current),!0}function cp(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=dv(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,at(nn),at(Gt),it(Gt,t)):at(nn),it(nn,n)}var ci=null,Ql=!1,ku=!1;function hv(t){ci===null?ci=[t]:ci.push(t)}function fx(t){Ql=!0,hv(t)}function sr(){if(!ku&&ci!==null){ku=!0;var t=0,e=Ze;try{var n=ci;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ci=null,Ql=!1}catch(r){throw ci!==null&&(ci=ci.slice(t+1)),kg(Ed,sr),r}finally{Ze=e,ku=!1}}return null}var lo=[],uo=0,Cl=null,bl=0,Mn=[],Tn=0,Pr=null,di=1,hi="";function gr(t,e){lo[uo++]=bl,lo[uo++]=Cl,Cl=t,bl=e}function pv(t,e,n){Mn[Tn++]=di,Mn[Tn++]=hi,Mn[Tn++]=Pr,Pr=t;var i=di;t=hi;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var o=32-Bn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,di=1<<32-Bn(e)+r|n<<r|i,hi=o+t}else di=1<<o|n<<r|i,hi=t}function Ld(t){t.return!==null&&(gr(t,1),pv(t,1,0))}function Dd(t){for(;t===Cl;)Cl=lo[--uo],lo[uo]=null,bl=lo[--uo],lo[uo]=null;for(;t===Pr;)Pr=Mn[--Tn],Mn[Tn]=null,hi=Mn[--Tn],Mn[Tn]=null,di=Mn[--Tn],Mn[Tn]=null}var mn=null,pn=null,ct=!1,On=null;function mv(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:di,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rf(t){if(ct){var e=pn;if(e){var n=e;if(!fp(t,e)){if(nf(t))throw Error(te(418));e=ji(n.nextSibling);var i=mn;e&&fp(t,e)?mv(i,n):(t.flags=t.flags&-4097|2,ct=!1,mn=t)}}else{if(nf(t))throw Error(te(418));t.flags=t.flags&-4097|2,ct=!1,mn=t}}}function dp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function va(t){if(t!==mn)return!1;if(!ct)return dp(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qc(t.type,t.memoizedProps)),e&&(e=pn)){if(nf(t))throw gv(),Error(te(418));for(;e;)mv(t,e),e=ji(e.nextSibling)}if(dp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?ji(t.stateNode.nextSibling):null;return!0}function gv(){for(var t=pn;t;)t=ji(t.nextSibling)}function Ao(){pn=mn=null,ct=!1}function Nd(t){On===null?On=[t]:On.push(t)}var dx=wi.ReactCurrentBatchConfig;function qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function _a(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hp(t){var e=t._init;return e(t._payload)}function vv(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Ki(c,g),c.index=0,c.sibling=null,c}function o(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,x){return g===null||g.tag!==6?(g=Xu(_,c.mode,x),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,x){var C=_.type;return C===no?f(c,g,_.props.children,x,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Fi&&hp(C)===g.type)?(x=r(g,_.props),x.ref=qo(c,g,_),x.return=c,x):(x=ul(_.type,_.key,_.props,null,c.mode,x),x.ref=qo(c,g,_),x.return=c,x)}function u(c,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=ju(_,c.mode,x),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function f(c,g,_,x,C){return g===null||g.tag!==7?(g=Cr(_,c.mode,x,C),g.return=c,g):(g=r(g,_),g.return=c,g)}function d(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Xu(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case aa:return _=ul(g.type,g.key,g.props,null,c.mode,_),_.ref=qo(c,null,g),_.return=c,_;case to:return g=ju(g,c.mode,_),g.return=c,g;case Fi:var x=g._init;return d(c,x(g._payload),_)}if(is(g)||Wo(g))return g=Cr(g,c.mode,_,null),g.return=c,g;_a(c,g)}return null}function h(c,g,_,x){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(c,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case aa:return _.key===C?l(c,g,_,x):null;case to:return _.key===C?u(c,g,_,x):null;case Fi:return C=_._init,h(c,g,C(_._payload),x)}if(is(_)||Wo(_))return C!==null?null:f(c,g,_,x,null);_a(c,_)}return null}function p(c,g,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(_)||null,a(g,c,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case aa:return c=c.get(x.key===null?_:x.key)||null,l(g,c,x,C);case to:return c=c.get(x.key===null?_:x.key)||null,u(g,c,x,C);case Fi:var A=x._init;return p(c,g,_,A(x._payload),C)}if(is(x)||Wo(x))return c=c.get(_)||null,f(g,c,x,C,null);_a(g,x)}return null}function v(c,g,_,x){for(var C=null,A=null,w=g,b=g=0,T=null;w!==null&&b<_.length;b++){w.index>b?(T=w,w=null):T=w.sibling;var E=h(c,w,_[b],x);if(E===null){w===null&&(w=T);break}t&&w&&E.alternate===null&&e(c,w),g=o(E,g,b),A===null?C=E:A.sibling=E,A=E,w=T}if(b===_.length)return n(c,w),ct&&gr(c,b),C;if(w===null){for(;b<_.length;b++)w=d(c,_[b],x),w!==null&&(g=o(w,g,b),A===null?C=w:A.sibling=w,A=w);return ct&&gr(c,b),C}for(w=i(c,w);b<_.length;b++)T=p(w,c,b,_[b],x),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?b:T.key),g=o(T,g,b),A===null?C=T:A.sibling=T,A=T);return t&&w.forEach(function(L){return e(c,L)}),ct&&gr(c,b),C}function S(c,g,_,x){var C=Wo(_);if(typeof C!="function")throw Error(te(150));if(_=C.call(_),_==null)throw Error(te(151));for(var A=C=null,w=g,b=g=0,T=null,E=_.next();w!==null&&!E.done;b++,E=_.next()){w.index>b?(T=w,w=null):T=w.sibling;var L=h(c,w,E.value,x);if(L===null){w===null&&(w=T);break}t&&w&&L.alternate===null&&e(c,w),g=o(L,g,b),A===null?C=L:A.sibling=L,A=L,w=T}if(E.done)return n(c,w),ct&&gr(c,b),C;if(w===null){for(;!E.done;b++,E=_.next())E=d(c,E.value,x),E!==null&&(g=o(E,g,b),A===null?C=E:A.sibling=E,A=E);return ct&&gr(c,b),C}for(w=i(c,w);!E.done;b++,E=_.next())E=p(w,c,b,E.value,x),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?b:E.key),g=o(E,g,b),A===null?C=E:A.sibling=E,A=E);return t&&w.forEach(function(V){return e(c,V)}),ct&&gr(c,b),C}function m(c,g,_,x){if(typeof _=="object"&&_!==null&&_.type===no&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case aa:e:{for(var C=_.key,A=g;A!==null;){if(A.key===C){if(C=_.type,C===no){if(A.tag===7){n(c,A.sibling),g=r(A,_.props.children),g.return=c,c=g;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Fi&&hp(C)===A.type){n(c,A.sibling),g=r(A,_.props),g.ref=qo(c,A,_),g.return=c,c=g;break e}n(c,A);break}else e(c,A);A=A.sibling}_.type===no?(g=Cr(_.props.children,c.mode,x,_.key),g.return=c,c=g):(x=ul(_.type,_.key,_.props,null,c.mode,x),x.ref=qo(c,g,_),x.return=c,c=x)}return s(c);case to:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=ju(_,c.mode,x),g.return=c,c=g}return s(c);case Fi:return A=_._init,m(c,g,A(_._payload),x)}if(is(_))return v(c,g,_,x);if(Wo(_))return S(c,g,_,x);_a(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=Xu(_,c.mode,x),g.return=c,c=g),s(c)):n(c,g)}return m}var Ro=vv(!0),_v=vv(!1),Pl=or(null),Ll=null,co=null,Id=null;function Ud(){Id=co=Ll=null}function Fd(t){var e=Pl.current;at(Pl),t._currentValue=e}function of(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xo(t,e){Ll=t,Id=co=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Id!==t)if(t={context:t,memoizedValue:e,next:null},co===null){if(Ll===null)throw Error(te(308));co=t,Ll.dependencies={lanes:0,firstContext:t}}else co=co.next=t;return e}var Mr=null;function Od(t){Mr===null?Mr=[t]:Mr.push(t)}function xv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Od(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,He&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,Od(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}function pp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,i){var r=t.updateQueue;Oi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,f=u=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(h=e,p=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=_t({},d,h);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=d):f=f.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Dr|=s,t.lanes=s,t.memoizedState=d}}function mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ws={},Jn=or(Ws),bs=or(Ws),Ps=or(Ws);function Tr(t){if(t===Ws)throw Error(te(174));return t}function zd(t,e){switch(it(Ps,e),it(bs,t),it(Jn,Ws),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kc(e,t)}at(Jn),it(Jn,e)}function Co(){at(Jn),at(bs),at(Ps)}function Sv(t){Tr(Ps.current);var e=Tr(Jn.current),n=kc(e,t.type);e!==n&&(it(bs,t),it(Jn,n))}function Bd(t){bs.current===t&&(at(Jn),at(bs))}var gt=or(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zu=[];function Hd(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var rl=wi.ReactCurrentDispatcher,Bu=wi.ReactCurrentBatchConfig,Lr=0,vt=null,Ct=null,Nt=null,Il=!1,ds=!1,Ls=0,hx=0;function kt(){throw Error(te(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Gd(t,e,n,i,r,o){if(Lr=o,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?vx:_x,t=n(i,r),ds){o=0;do{if(ds=!1,Ls=0,25<=o)throw Error(te(301));o+=1,Nt=Ct=null,e.updateQueue=null,rl.current=xx,t=n(i,r)}while(ds)}if(rl.current=Ul,e=Ct!==null&&Ct.next!==null,Lr=0,Nt=Ct=vt=null,Il=!1,e)throw Error(te(300));return t}function Wd(){var t=Ls!==0;return Ls=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?vt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function bn(){if(Ct===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Nt===null?vt.memoizedState:Nt.next;if(e!==null)Nt=e,Ct=t;else{if(t===null)throw Error(te(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Nt===null?vt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Ds(t,e){return typeof e=="function"?e(t):e}function Hu(t){var e=bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Lr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,vt.lanes|=f,Dr|=f}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Wn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,vt.lanes|=o,Dr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vu(t){var e=bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Wn(o,e.memoizedState)||(tn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Ev(){}function Mv(t,e){var n=vt,i=bn(),r=e(),o=!Wn(i.memoizedState,r);if(o&&(i.memoizedState=r,tn=!0),i=i.queue,Xd(Av.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ns(9,wv.bind(null,n,i,r,e),void 0,null),It===null)throw Error(te(349));Lr&30||Tv(n,e,r)}return r}function Tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wv(t,e,n,i){e.value=n,e.getSnapshot=i,Rv(e)&&Cv(t)}function Av(t,e,n){return n(function(){Rv(e)&&Cv(t)})}function Rv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function Cv(t){var e=Si(t,1);e!==null&&Hn(e,t,1,-1)}function gp(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:t},e.queue=t,t=t.dispatch=gx.bind(null,vt,t),[e.memoizedState,t]}function Ns(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function bv(){return bn().memoizedState}function ol(t,e,n,i){var r=jn();vt.flags|=t,r.memoizedState=Ns(1|e,n,void 0,i===void 0?null:i)}function Jl(t,e,n,i){var r=bn();i=i===void 0?null:i;var o=void 0;if(Ct!==null){var s=Ct.memoizedState;if(o=s.destroy,i!==null&&Vd(i,s.deps)){r.memoizedState=Ns(e,n,o,i);return}}vt.flags|=t,r.memoizedState=Ns(1|e,n,o,i)}function vp(t,e){return ol(8390656,8,t,e)}function Xd(t,e){return Jl(2048,8,t,e)}function Pv(t,e){return Jl(4,2,t,e)}function Lv(t,e){return Jl(4,4,t,e)}function Dv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nv(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4,4,Dv.bind(null,e,t),n)}function jd(){}function Iv(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Uv(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Fv(t,e,n){return Lr&21?(Wn(n,e)||(n=Hg(),vt.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function px(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=Bu.transition;Bu.transition={};try{t(!1),e()}finally{Ze=n,Bu.transition=i}}function Ov(){return bn().memoizedState}function mx(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},kv(t))zv(e,n);else if(n=xv(t,e,n,i),n!==null){var r=qt();Hn(n,t,i,r),Bv(n,e,i)}}function gx(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(kv(t))zv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Wn(a,s)){var l=e.interleaved;l===null?(r.next=r,Od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=xv(t,e,r,i),n!==null&&(r=qt(),Hn(n,t,i,r),Bv(n,e,i))}}function kv(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function zv(t,e){ds=Il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}var Ul={readContext:Cn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},vx={readContext:Cn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:vp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,Dv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=mx.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:gp,useDebugValue:jd,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=gp(!1),e=t[0];return t=px.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=jn();if(ct){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),It===null)throw Error(te(349));Lr&30||Tv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,vp(Av.bind(null,i,o,t),[t]),i.flags|=2048,Ns(9,wv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=jn(),e=It.identifierPrefix;if(ct){var n=hi,i=di;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ls++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_x={readContext:Cn,useCallback:Iv,useContext:Cn,useEffect:Xd,useImperativeHandle:Nv,useInsertionEffect:Pv,useLayoutEffect:Lv,useMemo:Uv,useReducer:Hu,useRef:bv,useState:function(){return Hu(Ds)},useDebugValue:jd,useDeferredValue:function(t){var e=bn();return Fv(e,Ct.memoizedState,t)},useTransition:function(){var t=Hu(Ds)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Ev,useSyncExternalStore:Mv,useId:Ov,unstable_isNewReconciler:!1},xx={readContext:Cn,useCallback:Iv,useContext:Cn,useEffect:Xd,useImperativeHandle:Nv,useInsertionEffect:Pv,useLayoutEffect:Lv,useMemo:Uv,useReducer:Vu,useRef:bv,useState:function(){return Vu(Ds)},useDebugValue:jd,useDeferredValue:function(t){var e=bn();return Ct===null?e.memoizedState=t:Fv(e,Ct.memoizedState,t)},useTransition:function(){var t=Vu(Ds)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Ev,useSyncExternalStore:Mv,useId:Ov,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var eu={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=qi(t),o=vi(i,r);o.payload=e,n!=null&&(o.callback=n),e=$i(t,o,r),e!==null&&(Hn(e,t,r,i),il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=qi(t),o=vi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=$i(t,o,r),e!==null&&(Hn(e,t,r,i),il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=qi(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Hn(e,t,i,n),il(e,t,i))}};function _p(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ws(n,i)||!ws(r,o):!0}function Hv(t,e,n){var i=!1,r=tr,o=e.contextType;return typeof o=="object"&&o!==null?o=Cn(o):(r=rn(e)?br:Gt.current,i=e.contextTypes,o=(i=i!=null)?wo(t,r):tr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function xp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&eu.enqueueReplaceState(e,e.state,null)}function af(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Cn(o):(o=rn(e)?br:Gt.current,r.context=wo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(sf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&eu.enqueueReplaceState(r,r.state,null),Dl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e){try{var n="",i=e;do n+=$0(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function Vv(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ol||(Ol=!0,_f=i),lf(t,e)},n}function Gv(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){lf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){lf(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function yp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new yx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ix.bind(null,t,e,n),e.then(t,t))}function Sp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ep(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var Sx=wi.ReactCurrentOwner,tn=!1;function Yt(t,e,n,i){e.child=t===null?_v(e,null,n,i):Ro(e,t.child,n,i)}function Mp(t,e,n,i,r){n=n.render;var o=e.ref;return xo(e,r),i=Gd(t,e,n,i,o,r),n=Wd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(ct&&n&&Ld(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Tp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!eh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Wv(t,e,o,i,r)):(t=ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ws,n(s,i)&&t.ref===e.ref)return Ei(t,e,r)}return e.flags|=1,t=Ki(o,i),t.ref=e.ref,t.return=e,e.child=t}function Wv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ws(o,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Ei(t,e,r)}return uf(t,e,n,i,r)}function Xv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ho,hn),hn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ho,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,it(ho,hn),hn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,it(ho,hn),hn|=i;return Yt(t,e,r,n),e.child}function jv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uf(t,e,n,i,r){var o=rn(n)?br:Gt.current;return o=wo(e,o),xo(e,r),n=Gd(t,e,n,i,o,r),i=Wd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(ct&&i&&Ld(e),e.flags|=1,Yt(t,e,n,r),e.child)}function wp(t,e,n,i,r){if(rn(n)){var o=!0;Rl(e)}else o=!1;if(xo(e,r),e.stateNode===null)sl(t,e),Hv(e,n,i),af(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=rn(n)?br:Gt.current,u=wo(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&xp(e,s,i,u),Oi=!1;var h=e.memoizedState;s.state=h,Dl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||nn.current||Oi?(typeof f=="function"&&(sf(e,n,f,i),l=e.memoizedState),(a=Oi||_p(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,yv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Un(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=rn(n)?br:Gt.current,l=wo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&xp(e,s,i,l),Oi=!1,h=e.memoizedState,s.state=h,Dl(e,i,s,r);var v=e.memoizedState;a!==d||h!==v||nn.current||Oi?(typeof p=="function"&&(sf(e,n,p,i),v=e.memoizedState),(u=Oi||_p(e,n,u,i,h,v,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),s.props=i,s.state=v,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return cf(t,e,n,i,o,r)}function cf(t,e,n,i,r,o){jv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&cp(e,n,!1),Ei(t,e,o);i=e.stateNode,Sx.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ro(e,t.child,null,o),e.child=Ro(e,null,a,o)):Yt(t,e,a,o),e.memoizedState=i.state,r&&cp(e,n,!0),e.child}function $v(t){var e=t.stateNode;e.pendingContext?up(t,e.pendingContext,e.pendingContext!==e.context):e.context&&up(t,e.context,!1),zd(t,e.containerInfo)}function Ap(t,e,n,i,r){return Ao(),Nd(r),e.flags|=256,Yt(t,e,n,i),e.child}var ff={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yv(t,e,n){var i=e.pendingProps,r=gt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(gt,r&1),t===null)return rf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=iu(s,i,0,null),t=Cr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=df(n),e.memoizedState=ff,t):$d(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ex(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Ki(a,o):(o=Cr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?df(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=ff,i}return o=t.child,t=o.sibling,i=Ki(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function $d(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xa(t,e,n,i){return i!==null&&Nd(i),Ro(e,t.child,null,n),t=$d(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ex(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Gu(Error(te(422))),xa(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=iu({mode:"visible",children:i.children},r,0,null),o=Cr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ro(e,t.child,null,s),e.child.memoizedState=df(s),e.memoizedState=ff,o);if(!(e.mode&1))return xa(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(te(419)),i=Gu(o,i,void 0),xa(t,e,s,i)}if(a=(s&t.childLanes)!==0,tn||a){if(i=It,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Si(t,r),Hn(i,t,r,-1))}return Jd(),i=Gu(Error(te(421))),xa(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ux.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,pn=ji(r.nextSibling),mn=e,ct=!0,On=null,t!==null&&(Mn[Tn++]=di,Mn[Tn++]=hi,Mn[Tn++]=Pr,di=t.id,hi=t.overflow,Pr=e),e=$d(e,i.children),e.flags|=4096,e)}function Rp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),of(t.return,e,n)}function Wu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function qv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Yt(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rp(t,n,e);else if(t.tag===19)Rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Wu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Wu(e,!0,n,null,o);break;case"together":Wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mx(t,e,n){switch(e.tag){case 3:$v(e),Ao();break;case 5:Sv(e);break;case 1:rn(e.type)&&Rl(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?Yv(t,e,n):(it(gt,gt.current&1),t=Ei(t,e,n),t!==null?t.sibling:null);it(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Xv(t,e,n)}return Ei(t,e,n)}var Kv,hf,Zv,Qv;Kv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hf=function(){};Zv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(Jn.current);var o=null;switch(n){case"input":r=Ic(t,r),i=Ic(t,i),o=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),o=[];break;case"textarea":r=Oc(t,r),i=Oc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wl)}zc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_s.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Qv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ko(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Tx(t,e,n){var i=e.pendingProps;switch(Dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return rn(e.type)&&Al(),zt(e),null;case 3:return i=e.stateNode,Co(),at(nn),at(Gt),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(Sf(On),On=null))),hf(t,e),zt(e),null;case 5:Bd(e);var r=Tr(Ps.current);if(n=e.type,t!==null&&e.stateNode!=null)Zv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return zt(e),null}if(t=Tr(Jn.current),va(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[qn]=e,i[Cs]=o,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<os.length;r++)st(os[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Fh(i,o),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},st("invalid",i);break;case"textarea":kh(i,o),st("invalid",i)}zc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ga(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ga(i.textContent,a,t),r=["children",""+a]):_s.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&st("scroll",i)}switch(n){case"input":la(i),Oh(i,o,!0);break;case"textarea":la(i),zh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[qn]=e,t[Cs]=i,Kv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Bc(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<os.length;r++)st(os[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Fh(t,i),r=Ic(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),st("invalid",t);break;case"textarea":kh(t,i),r=Oc(t,i),st("invalid",t);break;default:r=i}zc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?bg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xs(t,l):typeof l=="number"&&xs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_s.hasOwnProperty(o)?l!=null&&o==="onScroll"&&st("scroll",t):l!=null&&vd(t,o,l,s))}switch(n){case"input":la(t),Oh(t,i,!1);break;case"textarea":la(t),zh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?mo(t,!!i.multiple,o,!1):i.defaultValue!=null&&mo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Qv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Tr(Ps.current),Tr(Jn.current),va(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(o=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return zt(e),null;case 13:if(at(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&pn!==null&&e.mode&1&&!(e.flags&128))gv(),Ao(),e.flags|=98560,o=!1;else if(o=va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(te(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(te(317));o[qn]=e}else Ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),o=!1}else On!==null&&(Sf(On),On=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?bt===0&&(bt=3):Jd())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Co(),hf(t,e),t===null&&As(e.stateNode.containerInfo),zt(e),null;case 10:return Fd(e.type._context),zt(e),null;case 17:return rn(e.type)&&Al(),zt(e),null;case 19:if(at(gt),o=e.memoizedState,o===null)return zt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Ko(o,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Nl(t),s!==null){for(e.flags|=128,Ko(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(gt,gt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Et()>Po&&(e.flags|=128,i=!0,Ko(o,!1),e.lanes=4194304)}else{if(!i)if(t=Nl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ko(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ct)return zt(e),null}else 2*Et()-o.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,i=!0,Ko(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,n=gt.current,it(gt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function wx(t,e){switch(Dd(e),e.tag){case 1:return rn(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Co(),at(nn),at(Gt),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(at(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(gt),null;case 4:return Co(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var ya=!1,Vt=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,de=null;function fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function pf(t,e,n){try{n()}catch(i){St(t,e,i)}}var Cp=!1;function Rx(t,e){if(Kc=El,t=iv(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++f===i&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zc={focusedElem:t,selectionRange:n},El=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,m=v.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?S:Un(e.type,S),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){St(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return v=Cp,Cp=!1,v}function hs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&pf(e,n,o)}r=r.next}while(r!==i)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jv(t){var e=t.alternate;e!==null&&(t.alternate=null,Jv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Cs],delete e[ef],delete e[ux],delete e[cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e_(t){return t.tag===5||t.tag===3||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}function vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vf(t,e,n),t=t.sibling;t!==null;)vf(t,e,n),t=t.sibling}var Ut=null,Fn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)t_(t,e,n),n=n.sibling}function t_(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Vt||fo(n,e);case 6:var i=Ut,r=Fn;Ut=null,Ri(t,e,n),Ut=i,Fn=r,Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),Ms(t)):Ou(Ut,n.stateNode));break;case 4:i=Ut,r=Fn,Ut=n.stateNode.containerInfo,Fn=!0,Ri(t,e,n),Ut=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&pf(n,e,s),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Vt&&(fo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ri(t,e,n),Vt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function Pp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ax),e.forEach(function(i){var r=Fx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Fn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Fn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(Ut===null)throw Error(te(160));t_(o,s,r),Ut=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n_(e,t),e=e.sibling}function n_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Xn(t),i&4){try{hs(3,t,t.return),tu(3,t)}catch(S){St(t,t.return,S)}try{hs(5,t,t.return)}catch(S){St(t,t.return,S)}}break;case 1:Ln(e,t),Xn(t),i&512&&n!==null&&fo(n,n.return);break;case 5:if(Ln(e,t),Xn(t),i&512&&n!==null&&fo(n,n.return),t.flags&32){var r=t.stateNode;try{xs(r,"")}catch(S){St(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Tg(r,o),Bc(a,s);var u=Bc(a,o);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?bg(r,d):f==="dangerouslySetInnerHTML"?Rg(r,d):f==="children"?xs(r,d):vd(r,f,d,u)}switch(a){case"input":Uc(r,o);break;case"textarea":wg(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?mo(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?mo(r,!!o.multiple,o.defaultValue,!0):mo(r,!!o.multiple,o.multiple?[]:"",!1))}r[Cs]=o}catch(S){St(t,t.return,S)}}break;case 6:if(Ln(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(S){St(t,t.return,S)}}break;case 3:if(Ln(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ms(e.containerInfo)}catch(S){St(t,t.return,S)}break;case 4:Ln(e,t),Xn(t);break;case 13:Ln(e,t),Xn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Kd=Et())),i&4&&Pp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||f,Ln(e,t),Vt=u):Ln(e,t),Xn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(de=t,f=t.child;f!==null;){for(d=de=f;de!==null;){switch(h=de,p=h.child,h.tag){case 0:case 11:case 14:case 15:hs(4,h,h.return);break;case 1:fo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){St(i,n,S)}}break;case 5:fo(h,h.return);break;case 22:if(h.memoizedState!==null){Dp(d);continue}}p!==null?(p.return=h,de=p):Dp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cg("display",s))}catch(S){St(t,t.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){St(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ln(e,t),Xn(t),i&4&&Pp(t);break;case 21:break;default:Ln(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(e_(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xs(r,""),i.flags&=-33);var o=bp(t);vf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=bp(t);gf(t,a,s);break;default:throw Error(te(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cx(t,e,n){de=t,i_(t)}function i_(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ya;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=ya;var u=Vt;if(ya=s,(Vt=l)&&!u)for(de=r;de!==null;)s=de,l=s.child,s.tag===22&&s.memoizedState!==null?Np(r):l!==null?(l.return=s,de=l):Np(r);for(;o!==null;)de=o,i_(o),o=o.sibling;de=r,ya=a,Vt=u}Lp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,de=o):Lp(t)}}function Lp(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&mp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ms(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Vt||e.flags&512&&mf(e)}catch(h){St(e,e.return,h)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Dp(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Np(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var o=e.return;try{mf(e)}catch(l){St(e,o,l)}break;case 5:var s=e.return;try{mf(e)}catch(l){St(e,s,l)}}}catch(l){St(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var bx=Math.ceil,Fl=wi.ReactCurrentDispatcher,Yd=wi.ReactCurrentOwner,Rn=wi.ReactCurrentBatchConfig,He=0,It=null,At=null,Ft=0,hn=0,ho=or(0),bt=0,Is=null,Dr=0,nu=0,qd=0,ps=null,en=null,Kd=0,Po=1/0,ui=null,Ol=!1,_f=null,Yi=null,Sa=!1,Vi=null,kl=0,ms=0,xf=null,al=-1,ll=0;function qt(){return He&6?Et():al!==-1?al:al=Et()}function qi(t){return t.mode&1?He&2&&Ft!==0?Ft&-Ft:dx.transition!==null?(ll===0&&(ll=Hg()),ll):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:Yg(t.type)),t):1}function Hn(t,e,n,i){if(50<ms)throw ms=0,xf=null,Error(te(185));Hs(t,n,i),(!(He&2)||t!==It)&&(t===It&&(!(He&2)&&(nu|=n),bt===4&&zi(t,Ft)),on(t,i),n===1&&He===0&&!(e.mode&1)&&(Po=Et()+500,Ql&&sr()))}function on(t,e){var n=t.callbackNode;d1(t,e);var i=Sl(t,t===It?Ft:0);if(i===0)n!==null&&Vh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vh(n),e===1)t.tag===0?fx(Ip.bind(null,t)):hv(Ip.bind(null,t)),ax(function(){!(He&6)&&sr()}),n=null;else{switch(Vg(i)){case 1:n=Ed;break;case 4:n=zg;break;case 16:n=yl;break;case 536870912:n=Bg;break;default:n=yl}n=f_(n,r_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r_(t,e){if(al=-1,ll=0,He&6)throw Error(te(327));var n=t.callbackNode;if(yo()&&t.callbackNode!==n)return null;var i=Sl(t,t===It?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zl(t,i);else{e=i;var r=He;He|=2;var o=s_();(It!==t||Ft!==e)&&(ui=null,Po=Et()+500,Rr(t,e));do try{Dx();break}catch(a){o_(t,a)}while(!0);Ud(),Fl.current=o,He=r,At!==null?e=0:(It=null,Ft=0,e=bt)}if(e!==0){if(e===2&&(r=Xc(t),r!==0&&(i=r,e=yf(t,r))),e===1)throw n=Is,Rr(t,0),zi(t,i),on(t,Et()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Px(r)&&(e=zl(t,i),e===2&&(o=Xc(t),o!==0&&(i=o,e=yf(t,o))),e===1))throw n=Is,Rr(t,0),zi(t,i),on(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:vr(t,en,ui);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=Kd+500-Et(),10<e)){if(Sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Jc(vr.bind(null,t,en,ui),e);break}vr(t,en,ui);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Bn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bx(i/1960))-i,10<i){t.timeoutHandle=Jc(vr.bind(null,t,en,ui),i);break}vr(t,en,ui);break;case 5:vr(t,en,ui);break;default:throw Error(te(329))}}}return on(t,Et()),t.callbackNode===n?r_.bind(null,t):null}function yf(t,e){var n=ps;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=zl(t,e),t!==2&&(e=en,en=n,e!==null&&Sf(e)),t}function Sf(t){en===null?en=t:en.push.apply(en,t)}function Px(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Wn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~qd,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function Ip(t){if(He&6)throw Error(te(327));yo();var e=Sl(t,0);if(!(e&1))return on(t,Et()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var i=Xc(t);i!==0&&(e=i,n=yf(t,i))}if(n===1)throw n=Is,Rr(t,0),zi(t,e),on(t,Et()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,en,ui),on(t,Et()),null}function Zd(t,e){var n=He;He|=1;try{return t(e)}finally{He=n,He===0&&(Po=Et()+500,Ql&&sr())}}function Nr(t){Vi!==null&&Vi.tag===0&&!(He&6)&&yo();var e=He;He|=1;var n=Rn.transition,i=Ze;try{if(Rn.transition=null,Ze=1,t)return t()}finally{Ze=i,Rn.transition=n,He=e,!(He&6)&&sr()}}function Qd(){hn=ho.current,at(ho)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sx(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Al();break;case 3:Co(),at(nn),at(Gt),Hd();break;case 5:Bd(i);break;case 4:Co();break;case 13:at(gt);break;case 19:at(gt);break;case 10:Fd(i.type._context);break;case 22:case 23:Qd()}n=n.return}if(It=t,At=t=Ki(t.current,null),Ft=hn=e,bt=0,Is=null,qd=nu=Dr=0,en=ps=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Mr=null}return t}function o_(t,e){do{var n=At;try{if(Ud(),rl.current=Ul,Il){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Il=!1}if(Lr=0,Nt=Ct=vt=null,ds=!1,Ls=0,Yd.current=null,n===null||n.return===null){bt=1,Is=e,At=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Sp(s);if(p!==null){p.flags&=-257,Ep(p,s,a,o,e),p.mode&1&&yp(o,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){yp(o,u,e),Jd();break e}l=Error(te(426))}}else if(ct&&a.mode&1){var m=Sp(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ep(m,s,a,o,e),Nd(bo(l,a));break e}}o=l=bo(l,a),bt!==4&&(bt=2),ps===null?ps=[o]:ps.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=Vv(o,l,e);pp(o,c);break e;case 1:a=l;var g=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Yi===null||!Yi.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Gv(o,a,e);pp(o,x);break e}}o=o.return}while(o!==null)}l_(n)}catch(C){e=C,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function s_(){var t=Fl.current;return Fl.current=Ul,t===null?Ul:t}function Jd(){(bt===0||bt===3||bt===2)&&(bt=4),It===null||!(Dr&268435455)&&!(nu&268435455)||zi(It,Ft)}function zl(t,e){var n=He;He|=2;var i=s_();(It!==t||Ft!==e)&&(ui=null,Rr(t,e));do try{Lx();break}catch(r){o_(t,r)}while(!0);if(Ud(),He=n,Fl.current=i,At!==null)throw Error(te(261));return It=null,Ft=0,bt}function Lx(){for(;At!==null;)a_(At)}function Dx(){for(;At!==null&&!i1();)a_(At)}function a_(t){var e=c_(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?l_(t):At=e,Yd.current=null}function l_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wx(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,At=null;return}}else if(n=Tx(n,e,hn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);bt===0&&(bt=5)}function vr(t,e,n){var i=Ze,r=Rn.transition;try{Rn.transition=null,Ze=1,Nx(t,e,n,i)}finally{Rn.transition=r,Ze=i}return null}function Nx(t,e,n,i){do yo();while(Vi!==null);if(He&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(h1(t,o),t===It&&(At=It=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sa||(Sa=!0,f_(yl,function(){return yo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Rn.transition,Rn.transition=null;var s=Ze;Ze=1;var a=He;He|=4,Yd.current=null,Rx(t,n),n_(n,t),J1(Zc),El=!!Kc,Zc=Kc=null,t.current=n,Cx(n),r1(),He=a,Ze=s,Rn.transition=o}else t.current=n;if(Sa&&(Sa=!1,Vi=t,kl=r),o=t.pendingLanes,o===0&&(Yi=null),a1(n.stateNode),on(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ol)throw Ol=!1,t=_f,_f=null,t;return kl&1&&t.tag!==0&&yo(),o=t.pendingLanes,o&1?t===xf?ms++:(ms=0,xf=t):ms=0,sr(),null}function yo(){if(Vi!==null){var t=Vg(kl),e=Rn.transition,n=Ze;try{if(Rn.transition=null,Ze=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,kl=0,He&6)throw Error(te(331));var r=He;for(He|=4,de=t.current;de!==null;){var o=de,s=o.child;if(de.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:hs(8,f,o)}var d=f.child;if(d!==null)d.return=f,de=d;else for(;de!==null;){f=de;var h=f.sibling,p=f.return;if(Jv(f),f===u){de=null;break}if(h!==null){h.return=p,de=h;break}de=p}}}var v=o.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}de=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,de=s;else e:for(;de!==null;){if(o=de,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hs(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,de=c;break e}de=o.return}}var g=t.current;for(de=g;de!==null;){s=de;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,de=_;else e:for(s=g;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(C){St(a,a.return,C)}if(a===s){de=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,de=x;break e}de=a.return}}if(He=r,sr(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot($l,t)}catch{}i=!0}return i}finally{Ze=n,Rn.transition=e}}return!1}function Up(t,e,n){e=bo(n,e),e=Vv(t,e,1),t=$i(t,e,1),e=qt(),t!==null&&(Hs(t,1,e),on(t,e))}function St(t,e,n){if(t.tag===3)Up(t,t,n);else for(;e!==null;){if(e.tag===3){Up(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=bo(n,t),t=Gv(e,t,1),e=$i(e,t,1),t=qt(),e!==null&&(Hs(e,1,t),on(e,t));break}}e=e.return}}function Ix(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Ft&n)===n&&(bt===4||bt===3&&(Ft&130023424)===Ft&&500>Et()-Kd?Rr(t,0):qd|=n),on(t,e)}function u_(t,e){e===0&&(t.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var n=qt();t=Si(t,e),t!==null&&(Hs(t,e,n),on(t,n))}function Ux(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),u_(t,n)}function Fx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),u_(t,n)}var c_;c_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,Mx(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ct&&e.flags&1048576&&pv(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sl(t,e),t=e.pendingProps;var r=wo(e,Gt.current);xo(e,n),r=Gd(null,e,i,t,r,n);var o=Wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(o=!0,Rl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kd(e),r.updater=eu,e.stateNode=r,r._reactInternals=e,af(e,i,t,n),e=cf(null,e,i,!0,o,n)):(e.tag=0,ct&&o&&Ld(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=kx(i),t=Un(i,t),r){case 0:e=uf(null,e,i,t,n);break e;case 1:e=wp(null,e,i,t,n);break e;case 11:e=Mp(null,e,i,t,n);break e;case 14:e=Tp(null,e,i,Un(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),uf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),wp(t,e,i,r,n);case 3:e:{if($v(e),t===null)throw Error(te(387));i=e.pendingProps,o=e.memoizedState,r=o.element,yv(t,e),Dl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=bo(Error(te(423)),e),e=Ap(t,e,i,n,r);break e}else if(i!==r){r=bo(Error(te(424)),e),e=Ap(t,e,i,n,r);break e}else for(pn=ji(e.stateNode.containerInfo.firstChild),mn=e,ct=!0,On=null,n=_v(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ao(),i===r){e=Ei(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return Sv(e),t===null&&rf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Qc(i,r)?s=null:o!==null&&Qc(i,o)&&(e.flags|=32),jv(t,e),Yt(t,e,s,n),e.child;case 6:return t===null&&rf(e),null;case 13:return Yv(t,e,n);case 4:return zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ro(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Mp(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,it(Pl,i._currentValue),i._currentValue=s,o!==null)if(Wn(o.value,s)){if(o.children===r.children&&!nn.current){e=Ei(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=vi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),of(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(te(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),of(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xo(e,n),r=Cn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Tp(t,e,i,r,n);case 15:return Wv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),sl(t,e),e.tag=1,rn(i)?(t=!0,Rl(e)):t=!1,xo(e,n),Hv(e,i,r),af(e,i,r,n),cf(null,e,i,!0,t,n);case 19:return qv(t,e,n);case 22:return Xv(t,e,n)}throw Error(te(156,e.tag))};function f_(t,e){return kg(t,e)}function Ox(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new Ox(t,e,n,i)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kx(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===yd)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")eh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case no:return Cr(n.children,r,o,e);case _d:s=8,r|=8;break;case Pc:return t=An(12,n,e,r|2),t.elementType=Pc,t.lanes=o,t;case Lc:return t=An(13,n,e,r),t.elementType=Lc,t.lanes=o,t;case Dc:return t=An(19,n,e,r),t.elementType=Dc,t.lanes=o,t;case Sg:return iu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xg:s=10;break e;case yg:s=9;break e;case xd:s=11;break e;case yd:s=14;break e;case Fi:s=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=An(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Cr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function iu(t,e,n,i){return t=An(22,t,i,e),t.elementType=Sg,t.lanes=n,t.stateNode={isHidden:!1},t}function Xu(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function ju(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function th(t,e,n,i,r,o,s,a,l){return t=new zx(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=An(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(o),t}function Bx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:to,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function d_(t){if(!t)return tr;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(rn(n))return dv(t,n,e)}return e}function h_(t,e,n,i,r,o,s,a,l){return t=th(n,i,!0,t,r,o,s,a,l),t.context=d_(null),n=t.current,i=qt(),r=qi(n),o=vi(i,r),o.callback=e??null,$i(n,o,r),t.current.lanes=r,Hs(t,r,i),on(t,i),t}function ru(t,e,n,i){var r=e.current,o=qt(),s=qi(r);return n=d_(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,s),t!==null&&(Hn(t,r,s,o),il(t,r,s)),s}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nh(t,e){Fp(t,e),(t=t.alternate)&&Fp(t,e)}function Hx(){return null}var p_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ih(t){this._internalRoot=t}ou.prototype.render=ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));ru(t,e,null,null)};ou.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){ru(null,t,null,null)}),e[yi]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&$g(t)}};function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Op(){}function Vx(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Bl(s);o.call(u)}}var s=h_(e,i,t,0,null,!1,!1,"",Op);return t._reactRootContainer=s,t[yi]=s.current,As(t.nodeType===8?t.parentNode:t),Nr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Bl(l);a.call(u)}}var l=th(t,0,!1,null,null,!1,!1,"",Op);return t._reactRootContainer=l,t[yi]=l.current,As(t.nodeType===8?t.parentNode:t),Nr(function(){ru(e,l,n,i)}),l}function au(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Bl(s);a.call(l)}}ru(e,s,t,r)}else s=Vx(n,e,t,r,i);return Bl(s)}Gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rs(e.pendingLanes);n!==0&&(Md(e,n|1),on(e,Et()),!(He&6)&&(Po=Et()+500,sr()))}break;case 13:Nr(function(){var i=Si(t,1);if(i!==null){var r=qt();Hn(i,t,1,r)}}),nh(t,1)}};Td=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=qt();Hn(e,t,134217728,n)}nh(t,134217728)}};Wg=function(t){if(t.tag===13){var e=qi(t),n=Si(t,e);if(n!==null){var i=qt();Hn(n,t,e,i)}nh(t,e)}};Xg=function(){return Ze};jg=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Vc=function(t,e,n){switch(e){case"input":if(Uc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zl(i);if(!r)throw Error(te(90));Mg(i),Uc(i,r)}}}break;case"textarea":wg(t,n);break;case"select":e=n.value,e!=null&&mo(t,!!n.multiple,e,!1)}};Dg=Zd;Ng=Nr;var Gx={usingClientEntryPoint:!1,Events:[Gs,so,Zl,Pg,Lg,Zd]},Zo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wx={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fg(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||Hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{$l=Ea.inject(Wx),Qn=Ea}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gx;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(e))throw Error(te(200));return Bx(t,e,null,n)};vn.createRoot=function(t,e){if(!rh(t))throw Error(te(299));var n=!1,i="",r=p_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=th(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,As(t.nodeType===8?t.parentNode:t),new ih(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Fg(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Nr(t)};vn.hydrate=function(t,e,n){if(!su(e))throw Error(te(200));return au(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!rh(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=p_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=h_(e,null,t,1,n??null,r,!1,o,s),t[yi]=e.current,As(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ou(e)};vn.render=function(t,e,n){if(!su(e))throw Error(te(200));return au(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!su(t))throw Error(te(40));return t._reactRootContainer?(Nr(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};vn.unstable_batchedUpdates=Zd;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return au(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function m_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m_)}catch(t){console.error(t)}}m_(),mg.exports=vn;var g_=mg.exports,kp=g_;Cc.createRoot=kp.createRoot,Cc.hydrateRoot=kp.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="178",Xx=0,zp=1,jx=2,v_=1,$x=2,li=3,nr=0,sn=1,fi=2,Zi=0,So=1,Bp=2,Hp=3,Vp=4,Yx=5,yr=100,qx=101,Kx=102,Zx=103,Qx=104,Jx=200,ey=201,ty=202,ny=203,Ef=204,Mf=205,iy=206,ry=207,oy=208,sy=209,ay=210,ly=211,uy=212,cy=213,fy=214,Tf=0,wf=1,Af=2,Lo=3,Rf=4,Cf=5,bf=6,Pf=7,__=0,dy=1,hy=2,Qi=0,py=1,my=2,gy=3,vy=4,_y=5,xy=6,yy=7,x_=300,Do=301,No=302,Lf=303,Df=304,lu=306,Nf=1e3,wr=1001,If=1002,Vn=1003,Sy=1004,Ma=1005,Kn=1006,$u=1007,Ar=1008,Mi=1009,y_=1010,S_=1011,Us=1012,sh=1013,Ir=1014,pi=1015,Xs=1016,ah=1017,lh=1018,Fs=1020,E_=35902,M_=1021,T_=1022,zn=1023,Os=1026,ks=1027,w_=1028,uh=1029,A_=1030,ch=1031,fh=1033,cl=33776,fl=33777,dl=33778,hl=33779,Uf=35840,Ff=35841,Of=35842,kf=35843,zf=36196,Bf=37492,Hf=37496,Vf=37808,Gf=37809,Wf=37810,Xf=37811,jf=37812,$f=37813,Yf=37814,qf=37815,Kf=37816,Zf=37817,Qf=37818,Jf=37819,ed=37820,td=37821,pl=36492,nd=36494,id=36495,R_=36283,rd=36284,od=36285,sd=36286,Ey=3200,My=3201,Ty=0,wy=1,Bi="",En="srgb",Io="srgb-linear",Hl="linear",Je="srgb",Br=7680,Gp=519,Ay=512,Ry=513,Cy=514,C_=515,by=516,Py=517,Ly=518,Dy=519,Wp=35044,Xp="300 es",mi=2e3,Vl=2001;class zo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jp=1234567;const gs=Math.PI/180,zs=180/Math.PI;function Bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Be(t,e,n){return Math.max(e,Math.min(n,t))}function dh(t,e){return(t%e+e)%e}function Ny(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Iy(t,e,n){return t!==e?(n-t)/(e-t):0}function vs(t,e,n){return(1-n)*t+n*e}function Uy(t,e,n,i){return vs(t,e,1-Math.exp(-n*i))}function Fy(t,e=1){return e-Math.abs(dh(t,e*2)-e)}function Oy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function ky(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function zy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function By(t,e){return t+Math.random()*(e-t)}function Hy(t){return t*(.5-Math.random())}function Vy(t){t!==void 0&&(jp=t);let e=jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gy(t){return t*gs}function Wy(t){return t*zs}function Xy(t){return(t&t-1)===0&&t!==0}function jy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function $y(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Yy(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),f=s((e+i)/2),d=o((e-i)/2),h=s((e-i)/2),p=o((i-e)/2),v=s((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*f,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*f,a*u);break;case"XZX":t.set(a*f,l*v,l*p,a*u);break;case"YXY":t.set(l*p,a*f,l*v,a*u);break;case"ZYZ":t.set(l*v,l*p,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Yu={DEG2RAD:gs,RAD2DEG:zs,generateUUID:Bo,clamp:Be,euclideanModulo:dh,mapLinear:Ny,inverseLerp:Iy,lerp:vs,damp:Uy,pingpong:Fy,smoothstep:Oy,smootherstep:ky,randInt:zy,randFloat:By,randFloatSpread:Hy,seededRandom:Vy,degToRad:Gy,radToDeg:Wy,isPowerOfTwo:Xy,ceilPowerOfTwo:jy,floorPowerOfTwo:$y,setQuaternionFromProperEuler:Yy,normalize:jt,denormalize:eo};class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Be(this.x,e.x,n.x),this.y=Be(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Be(this.x,e,n),this.y=Be(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class js{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=o[s+0],p=o[s+1],v=o[s+2],S=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=S;return}if(d!==S||l!==h||u!==p||f!==v){let m=1-a;const c=l*h+u*p+f*v+d*S,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const C=Math.sqrt(_),A=Math.atan2(C,c*g);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const x=a*g;if(l=l*m+h*x,u=u*m+p*x,f=f*m+v*x,d=d*m+S*x,m===1-a){const C=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=C,u*=C,f*=C,d*=C}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=o[s],h=o[s+1],p=o[s+2],v=o[s+3];return e[n]=a*v+f*d+l*p-u*h,e[n+1]=l*v+f*h+u*d-a*p,e[n+2]=u*v+f*p+a*h-l*d,e[n+3]=f*v-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(o/2),h=l(i/2),p=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=h*f*d+u*p*v,this._y=u*p*d-h*f*v,this._z=u*f*v+h*p*d,this._w=u*f*d-h*p*v;break;case"YXZ":this._x=h*f*d+u*p*v,this._y=u*p*d-h*f*v,this._z=u*f*v-h*p*d,this._w=u*f*d+h*p*v;break;case"ZXY":this._x=h*f*d-u*p*v,this._y=u*p*d+h*f*v,this._z=u*f*v+h*p*d,this._w=u*f*d-h*p*v;break;case"ZYX":this._x=h*f*d-u*p*v,this._y=u*p*d+h*f*v,this._z=u*f*v-h*p*d,this._w=u*f*d+h*p*v;break;case"YZX":this._x=h*f*d+u*p*v,this._y=u*p*d+h*f*v,this._z=u*f*v-h*p*d,this._w=u*f*d-h*p*v;break;case"XZY":this._x=h*f*d-u*p*v,this._y=u*p*d-h*f*v,this._z=u*f*v+h*p*d,this._w=u*f*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*a+r*u-o*l,this._y=r*f+s*l+o*a-i*u,this._z=o*f+s*u+i*l-r*a,this._w=s*f-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),f=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*f,this.y=i+l*f+a*u-o*d,this.z=r+l*d+o*f-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Be(this.x,e.x,n.x),this.y=Be(this.y,e.y,n.y),this.z=Be(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Be(this.x,e,n),this.y=Be(this.y,e,n),this.z=Be(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qu=new k,$p=new js;class Ue{constructor(e,n,i,r,o,s,a,l,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],p=i[5],v=i[8],S=r[0],m=r[3],c=r[6],g=r[1],_=r[4],x=r[7],C=r[2],A=r[5],w=r[8];return o[0]=s*S+a*g+l*C,o[3]=s*m+a*_+l*A,o[6]=s*c+a*x+l*w,o[1]=u*S+f*g+d*C,o[4]=u*m+f*_+d*A,o[7]=u*c+f*x+d*w,o[2]=h*S+p*g+v*C,o[5]=h*m+p*_+v*A,o[8]=h*c+p*x+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*a*u-i*o*f+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*s-a*u,h=a*l-f*o,p=u*o-s*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=d*S,e[1]=(r*u-f*i)*S,e[2]=(a*i-r*s)*S,e[3]=h*S,e[4]=(f*n-r*l)*S,e[5]=(r*o-a*n)*S,e[6]=p*S,e[7]=(i*l-u*n)*S,e[8]=(s*n-i*o)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ku.makeScale(e,n)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new Ue;function b_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Gl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qy(){const t=Gl("canvas");return t.style.display="block",t}const Yp={};function Eo(t){t in Yp||(Yp[t]=!0,console.warn(t))}function Ky(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function Zy(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qy(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qp=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kp=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jy(){const t={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Je&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Je&&(r.r=Mo(r.r),r.g=Mo(r.g),r.b=Mo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bi?Hl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Io]:{primaries:e,whitePoint:i,transfer:Hl,toXYZ:qp,fromXYZ:Kp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:qp,fromXYZ:Kp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),t}const Xe=Jy();function _i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Mo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class eS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=Gl("canvas")),Hr.width=e.width,Hr.height=e.height;const r=Hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=_i(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_i(n[i]/255)*255):n[i]=_i(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tS=0;class hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Zu(r[s].image)):o.push(Zu(r[s]))}else o=Zu(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nS=0;const Qu=new k;class an extends zo{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=wr,r=wr,o=Kn,s=Ar,a=zn,l=Mi,u=an.DEFAULT_ANISOTROPY,f=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Bo(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qu).x}get height(){return this.source.getSize(Qu).y}get depth(){return this.source.getSize(Qu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nf:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case If:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nf:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case If:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=x_;an.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],p=l[5],v=l[9],S=l[2],m=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+S)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,x=(p+1)/2,C=(c+1)/2,A=(f+h)/4,w=(d+S)/4,b=(v+m)/4;return _>x&&_>C?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=A/i,o=w/i):x>C?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=A/r,o=b/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=w/o,r=b/o),this.set(i,r,o,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-S)*(d-S)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-S)/g,this.z=(h-f)/g,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Be(this.x,e.x,n.x),this.y=Be(this.y,e.y,n.y),this.z=Be(this.z,e.z,n.z),this.w=Be(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Be(this.x,e,n),this.y=Be(this.y,e,n),this.z=Be(this.z,e,n),this.w=Be(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iS extends zo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:i.depth},o=new an(r);this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new hh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends iS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class P_ extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rS extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Dn):Dn.fromBufferAttribute(o,s),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),wa.subVectors(this.max,Qo),Vr.subVectors(e.a,Qo),Gr.subVectors(e.b,Qo),Wr.subVectors(e.c,Qo),Ci.subVectors(Gr,Vr),bi.subVectors(Wr,Gr),ur.subVectors(Vr,Wr);let n=[0,-Ci.z,Ci.y,0,-bi.z,bi.y,0,-ur.z,ur.y,Ci.z,0,-Ci.x,bi.z,0,-bi.x,ur.z,0,-ur.x,-Ci.y,Ci.x,0,-bi.y,bi.x,0,-ur.y,ur.x,0];return!Ju(n,Vr,Gr,Wr,wa)||(n=[1,0,0,0,1,0,0,0,1],!Ju(n,Vr,Gr,Wr,wa))?!1:(Aa.crossVectors(Ci,bi),n=[Aa.x,Aa.y,Aa.z],Ju(n,Vr,Gr,Wr,wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ii=[new k,new k,new k,new k,new k,new k,new k,new k],Dn=new k,Ta=new $s,Vr=new k,Gr=new k,Wr=new k,Ci=new k,bi=new k,ur=new k,Qo=new k,wa=new k,Aa=new k,cr=new k;function Ju(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){cr.fromArray(t,o);const a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),u=n.dot(cr),f=i.dot(cr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const oS=new $s,Jo=new k,ec=new k;class uu{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const n=Jo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(ec)),this.expandByPoint(Jo.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ri=new k,tc=new k,Ra=new k,Pi=new k,nc=new k,Ca=new k,ic=new k;class L_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tc.copy(e).add(n).multiplyScalar(.5),Ra.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(tc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ra),a=Pi.dot(this.direction),l=-Pi.dot(Ra),u=Pi.lengthSq(),f=Math.abs(1-s*s);let d,h,p,v;if(f>0)if(d=s*l-a,h=s*a-l,v=o*f,d>=0)if(h>=-v)if(h<=v){const S=1/f;d*=S,h*=S,p=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(tc).addScaledVector(Ra,h),p}intersectSphere(e,n){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(o=(e.min.y-h.y)*f,s=(e.max.y-h.y)*f):(o=(e.max.y-h.y)*f,s=(e.min.y-h.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,r,o){nc.subVectors(n,e),Ca.subVectors(i,e),ic.crossVectors(nc,Ca);let s=this.direction.dot(ic),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Ca.crossVectors(Pi,Ca));if(l<0)return null;const u=a*this.direction.dot(nc.cross(Pi));if(u<0||l+u>s)return null;const f=-a*Pi.dot(ic);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,o,s,a,l,u,f,d,h,p,v,S,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,f,d,h,p,v,S,m)}set(e,n,i,r,o,s,a,l,u,f,d,h,p,v,S,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=p,c[7]=v,c[11]=S,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),o=1/Xr.setFromMatrixColumn(e,1).length(),s=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*f,p=s*d,v=a*f,S=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=p+v*u,n[5]=h-S*u,n[9]=-a*l,n[2]=S-h*u,n[6]=v+p*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,v=u*f,S=u*d;n[0]=h+S*a,n[4]=v*a-p,n[8]=s*u,n[1]=s*d,n[5]=s*f,n[9]=-a,n[2]=p*a-v,n[6]=S+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,v=u*f,S=u*d;n[0]=h-S*a,n[4]=-s*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=s*f,n[9]=S-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*f,p=s*d,v=a*f,S=a*d;n[0]=l*f,n[4]=v*u-p,n[8]=h*u+S,n[1]=l*d,n[5]=S*u+h,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,v=a*l,S=a*u;n[0]=l*f,n[4]=S-h*d,n[8]=v*d+p,n[1]=d,n[5]=s*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*d+v,n[10]=h-S*d}else if(e.order==="XZY"){const h=s*l,p=s*u,v=a*l,S=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+S,n[5]=s*f,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*f,n[10]=S*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sS,e,aS)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Li.crossVectors(i,fn),Li.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Li.crossVectors(i,fn)),Li.normalize(),ba.crossVectors(fn,Li),r[0]=Li.x,r[4]=ba.x,r[8]=fn.x,r[1]=Li.y,r[5]=ba.y,r[9]=fn.y,r[2]=Li.z,r[6]=ba.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],p=i[13],v=i[2],S=i[6],m=i[10],c=i[14],g=i[3],_=i[7],x=i[11],C=i[15],A=r[0],w=r[4],b=r[8],T=r[12],E=r[1],L=r[5],V=r[9],B=r[13],Y=r[2],q=r[6],j=r[10],Q=r[14],N=r[3],W=r[7],K=r[11],oe=r[15];return o[0]=s*A+a*E+l*Y+u*N,o[4]=s*w+a*L+l*q+u*W,o[8]=s*b+a*V+l*j+u*K,o[12]=s*T+a*B+l*Q+u*oe,o[1]=f*A+d*E+h*Y+p*N,o[5]=f*w+d*L+h*q+p*W,o[9]=f*b+d*V+h*j+p*K,o[13]=f*T+d*B+h*Q+p*oe,o[2]=v*A+S*E+m*Y+c*N,o[6]=v*w+S*L+m*q+c*W,o[10]=v*b+S*V+m*j+c*K,o[14]=v*T+S*B+m*Q+c*oe,o[3]=g*A+_*E+x*Y+C*N,o[7]=g*w+_*L+x*q+C*W,o[11]=g*b+_*V+x*j+C*K,o[15]=g*T+_*B+x*Q+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],p=e[14],v=e[3],S=e[7],m=e[11],c=e[15];return v*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*p-i*l*p)+S*(+n*l*p-n*u*h+o*s*h-r*s*p+r*u*f-o*l*f)+m*(+n*u*d-n*a*p-o*s*d+i*s*p+o*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*s*d-i*s*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],p=e[11],v=e[12],S=e[13],m=e[14],c=e[15],g=d*m*u-S*h*u+S*l*p-a*m*p-d*l*c+a*h*c,_=v*h*u-f*m*u-v*l*p+s*m*p+f*l*c-s*h*c,x=f*S*u-v*d*u+v*a*p-s*S*p-f*a*c+s*d*c,C=v*d*l-f*S*l-v*a*h+s*S*h+f*a*m-s*d*m,A=n*g+i*_+r*x+o*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=g*w,e[1]=(S*h*o-d*m*o-S*r*p+i*m*p+d*r*c-i*h*c)*w,e[2]=(a*m*o-S*l*o+S*r*u-i*m*u-a*r*c+i*l*c)*w,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(f*m*o-v*h*o+v*r*p-n*m*p-f*r*c+n*h*c)*w,e[6]=(v*l*o-s*m*o-v*r*u+n*m*u+s*r*c-n*l*c)*w,e[7]=(s*h*o-f*l*o+f*r*u-n*h*u-s*r*p+n*l*p)*w,e[8]=x*w,e[9]=(v*d*o-f*S*o-v*i*p+n*S*p+f*i*c-n*d*c)*w,e[10]=(s*S*o-v*a*o+v*i*u-n*S*u-s*i*c+n*a*c)*w,e[11]=(f*a*o-s*d*o-f*i*u+n*d*u+s*i*p-n*a*p)*w,e[12]=C*w,e[13]=(f*S*r-v*d*r+v*i*h-n*S*h-f*i*m+n*d*m)*w,e[14]=(v*a*r-s*S*r-v*i*l+n*S*l+s*i*m-n*a*m)*w,e[15]=(s*d*r-f*a*r+f*i*l-n*d*l-s*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,f=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*s,0,u*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,f=s+s,d=a+a,h=o*u,p=o*f,v=o*d,S=s*f,m=s*d,c=a*d,g=l*u,_=l*f,x=l*d,C=i.x,A=i.y,w=i.z;return r[0]=(1-(S+c))*C,r[1]=(p+x)*C,r[2]=(v-_)*C,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(h+c))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+_)*w,r[9]=(m-g)*w,r[10]=(1-(h+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Xr.set(r[0],r[1],r[2]).length();const s=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/o,f=1/s,d=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,n.setFromRotationMatrix(Nn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=mi){const l=this.elements,u=2*o/(n-e),f=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===mi)p=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Vl)p=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=mi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(s-o),h=(n+e)*u,p=(i+r)*f;let v,S;if(a===mi)v=(s+o)*d,S=-2*d;else if(a===Vl)v=o*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new k,Nn=new Tt,sS=new k(0,0,0),aS=new k(1,1,1),Li=new k,ba=new k,fn=new k,Zp=new Tt,Qp=new js;class Ti{constructor(e=0,n=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Be(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class D_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lS=0;const Jp=new k,jr=new js,oi=new Tt,Pa=new k,es=new k,uS=new k,cS=new js,em=new k(1,0,0),tm=new k(0,1,0),nm=new k(0,0,1),im={type:"added"},fS={type:"removed"},$r={type:"childadded",child:null},rc={type:"childremoved",child:null};class ln extends zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new k,n=new Ti,i=new js,r=new k(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ue}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,n){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Pa.copy(e):Pa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(es,Pa,this.up):oi.lookAt(Pa,es,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(oi),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(im),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fS),rc.child=e,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(im),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,cS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),v=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new k(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new k,si=new k,oc=new k,ai=new k,Yr=new k,qr=new k,rm=new k,sc=new k,ac=new k,lc=new k,uc=new Mt,cc=new Mt,fc=new Mt;class kn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){In.subVectors(r,n),si.subVectors(i,n),oc.subVectors(e,n);const s=In.dot(In),a=In.dot(si),l=In.dot(oc),u=si.dot(si),f=si.dot(oc),d=s*u-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,p=(u*l-a*f)*h,v=(s*f-a*l)*h;return o.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ai.x),l.addScaledVector(s,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return uc.setScalar(0),cc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,i),fc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(uc,o.x),s.addScaledVector(cc,o.y),s.addScaledVector(fc,o.z),s}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),si.subVectors(e,n),In.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),si.subVectors(this.a,this.b),In.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Yr.subVectors(r,i),qr.subVectors(o,i),sc.subVectors(e,i);const l=Yr.dot(sc),u=qr.dot(sc);if(l<=0&&u<=0)return n.copy(i);ac.subVectors(e,r);const f=Yr.dot(ac),d=qr.dot(ac);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(Yr,s);lc.subVectors(e,o);const p=Yr.dot(lc),v=qr.dot(lc);if(v>=0&&p<=v)return n.copy(o);const S=p*u-l*v;if(S<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(qr,a);const m=f*v-p*d;if(m<=0&&d-f>=0&&p-v>=0)return rm.subVectors(o,r),a=(d-f)/(d-f+(p-v)),n.copy(r).addScaledVector(rm,a);const c=1/(m+S+h);return s=S*c,a=h*c,n.copy(i).addScaledVector(Yr,s).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},La={h:0,s:0,l:0};function dc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=dh(e,1),n=Be(n,0,1),i=Be(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=dc(s,o,e+1/3),this.g=dc(s,o,e),this.b=dc(s,o,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=En){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=N_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Xe.workingToColorSpace(Ht.copy(this),e),Math.round(Be(Ht.r*255,0,255))*65536+Math.round(Be(Ht.g*255,0,255))*256+Math.round(Be(Ht.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,o=Ht.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const f=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=f<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=En){Xe.workingToColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(La);const i=vs(Di.h,La.h,n),r=vs(Di.s,La.s,n),o=vs(Di.l,La.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ke;Ke.NAMES=N_;let dS=0;class Ys extends zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=So,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=Mf,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ef&&(i.blendSrc=this.blendSrc),this.blendDst!==Mf&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class I_ extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=__,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new k,Da=new et;let hS=0;class ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wp,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Da.fromBufferAttribute(this,n),Da.applyMatrix3(e),this.setXY(n,Da.x,Da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),o=jt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class U_ extends ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class F_ extends ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ji extends ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pS=0;const Sn=new Tt,hc=new ln,Kr=new k,dn=new $s,ts=new $s,Dt=new k;class Ai extends zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b_(e)?F_:U_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ue().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ji(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];dn.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(dn.min,ts.min),dn.expandByPoint(Dt),Dt.addVectors(dn.max,ts.max),dn.expandByPoint(Dt)):(dn.expandByPoint(ts.min),dn.expandByPoint(ts.max))}dn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Dt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Dt.fromBufferAttribute(a,u),l&&(Kr.fromBufferAttribute(e,u),Dt.add(Kr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new k,l[b]=new k;const u=new k,f=new k,d=new k,h=new et,p=new et,v=new et,S=new k,m=new k;function c(b,T,E){u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,E),h.fromBufferAttribute(o,b),p.fromBufferAttribute(o,T),v.fromBufferAttribute(o,E),f.sub(u),d.sub(u),p.sub(h),v.sub(h);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(S.copy(f).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(L),a[b].add(S),a[T].add(S),a[E].add(S),l[b].add(m),l[T].add(m),l[E].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,T=g.length;b<T;++b){const E=g[b],L=E.start,V=E.count;for(let B=L,Y=L+V;B<Y;B+=3)c(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new k,x=new k,C=new k,A=new k;function w(b){C.fromBufferAttribute(r,b),A.copy(C);const T=a[b];_.copy(T),_.sub(C.multiplyScalar(C.dot(T))).normalize(),x.crossVectors(A,T);const L=x.dot(l[b])<0?-1:1;s.setXYZW(b,_.x,_.y,_.z,L)}for(let b=0,T=g.length;b<T;++b){const E=g[b],L=E.start,V=E.count;for(let B=L,Y=L+V;B<Y;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,o=new k,s=new k,a=new k,l=new k,u=new k,f=new k,d=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,S),s.fromBufferAttribute(n,m),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let p=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*f;for(let c=0;c<f;c++)h[v++]=u[p++]}return new ei(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ai,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const o=e.morphAttributes;for(const u in o){const f=[],d=o[u];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,f=s.length;u<f;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new Tt,fr=new L_,Na=new uu,sm=new k,Ia=new k,Ua=new k,Fa=new k,pc=new k,Oa=new k,am=new k,ka=new k;class gi extends ln{constructor(e=new Ai,n=new I_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Oa.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const f=a[l],d=o[l];f!==0&&(pc.fromBufferAttribute(d,e),s?Oa.addScaledVector(pc,f):Oa.addScaledVector(pc.sub(n),f))}n.add(Oa)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(o),fr.copy(e.ray).recast(e.near),!(Na.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Na,sm)===null||fr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(om.copy(o).invert(),fr.copy(e.ray).applyMatrix4(om),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,f=o.attributes.uv1,d=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,S=h.length;v<S;v++){const m=h[v],c=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,C=_;x<C;x+=3){const A=a.getX(x),w=a.getX(x+1),b=a.getX(x+2);r=za(this,c,e,i,u,f,d,A,w,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=v,c=S;m<c;m+=3){const g=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);r=za(this,s,e,i,u,f,d,g,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,S=h.length;v<S;v++){const m=h[v],c=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,C=_;x<C;x+=3){const A=x,w=x+1,b=x+2;r=za(this,c,e,i,u,f,d,A,w,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,c=S;m<c;m+=3){const g=m,_=m+1,x=m+2;r=za(this,s,e,i,u,f,d,g,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mS(t,e,n,i,r,o,s,a){let l;if(e.side===sn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===nr,a),l===null)return null;ka.copy(a),ka.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ka);return u<n.near||u>n.far?null:{distance:u,point:ka.clone(),object:t}}function za(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Ia),t.getVertexPosition(l,Ua),t.getVertexPosition(u,Fa);const f=mS(t,e,n,i,Ia,Ua,Fa,am);if(f){const d=new k;kn.getBarycoord(am,Ia,Ua,Fa,d),r&&(f.uv=kn.getInterpolatedAttribute(r,a,l,u,d,new et)),o&&(f.uv1=kn.getInterpolatedAttribute(o,a,l,u,d,new et)),s&&(f.normal=kn.getInterpolatedAttribute(s,a,l,u,d,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new k,materialIndex:0};kn.getNormal(Ia,Ua,Fa,h.normal),f.face=h,f.barycoord=d}return f}class qs extends Ai{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],f=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,s,o,0),v("z","y","x",1,-1,i,n,-e,s,o,1),v("x","z","y",1,1,e,i,n,r,s,2),v("x","z","y",1,-1,e,i,-n,r,s,3),v("x","y","z",1,-1,e,n,i,r,o,4),v("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Ji(u,3)),this.setAttribute("normal",new Ji(f,3)),this.setAttribute("uv",new Ji(d,2));function v(S,m,c,g,_,x,C,A,w,b,T){const E=x/w,L=C/b,V=x/2,B=C/2,Y=A/2,q=w+1,j=b+1;let Q=0,N=0;const W=new k;for(let K=0;K<j;K++){const oe=K*L-B;for(let Se=0;Se<q;Se++){const Ve=Se*E-V;W[S]=Ve*g,W[m]=oe*_,W[c]=Y,u.push(W.x,W.y,W.z),W[S]=0,W[m]=0,W[c]=A>0?1:-1,f.push(W.x,W.y,W.z),d.push(Se/w),d.push(1-K/b),Q+=1}}for(let K=0;K<b;K++)for(let oe=0;oe<w;oe++){const Se=h+oe+q*K,Ve=h+oe+q*(K+1),G=h+(oe+1)+q*(K+1),re=h+(oe+1)+q*K;l.push(Se,Ve,re),l.push(Ve,G,re),N+=6}a.addGroup(p,N,T),p+=N,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Uo(t[n]);for(const r in i)e[r]=i[r]}return e}function gS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function O_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const vS={clone:Uo,merge:$t};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class k_ extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new k,lm=new et,um=new et;class wn extends k_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,lm,um),n.subVectors(um,lm)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Qr=1;class yS extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Zr,Qr,e,n);r.layers=this.layers,this.add(r);const o=new wn(Zr,Qr,e,n);o.layers=this.layers,this.add(o);const s=new wn(Zr,Qr,e,n);s.layers=this.layers,this.add(s);const a=new wn(Zr,Qr,e,n);a.layers=this.layers,this.add(a);const l=new wn(Zr,Qr,e,n);l.layers=this.layers,this.add(l);const u=new wn(Zr,Qr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class z_ extends an{constructor(e=[],n=Do,i,r,o,s,a,l,u,f){super(e,n,i,r,o,s,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SS extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new z_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qs(5,5,5),o=new ir({name:"CubemapFromEquirect",uniforms:Uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Zi});o.uniforms.tEquirect.value=n;const s=new gi(r,o),a=n.minFilter;return n.minFilter===Ar&&(n.minFilter=Kn),new yS(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}class Ba extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ES={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),c=this._getHandJoint(u,S);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ES)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class MS extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const gc=new k,TS=new k,wS=new Ue;class _r{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=gc.subVectors(i,n).cross(TS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(gc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wS.getNormalMatrix(e),r=this.coplanarPoint(gc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new uu,AS=new et(.5,.5),Ha=new k;class B_{constructor(e=new _r,n=new _r,i=new _r,r=new _r,o=new _r,s=new _r){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],p=r[8],v=r[9],S=r[10],m=r[11],c=r[12],g=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-o,h-u,m-p,x-c).normalize(),i[1].setComponents(l+o,h+u,m+p,x+c).normalize(),i[2].setComponents(l+s,h+f,m+v,x+g).normalize(),i[3].setComponents(l-s,h-f,m-v,x-g).normalize(),i[4].setComponents(l-a,h-d,m-S,x-_).normalize(),n===mi)i[5].setComponents(l+a,h+d,m+S,x+_).normalize();else if(n===Vl)i[5].setComponents(a,d,S,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const n=AS.distanceTo(e.center);return dr.radius=.7071067811865476+n,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H_ extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cm=new Tt,ad=new L_,Va=new uu,Ga=new k;class RS extends ln{constructor(e=new Ai,n=new H_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Va.radius+=o,e.ray.intersectsSphere(Va)===!1)return;cm.copy(r).invert(),ad.copy(e.ray).applyMatrix4(cm);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let v=h,S=p;v<S;v++){const m=u.getX(v);Ga.fromBufferAttribute(d,m),fm(Ga,m,l,r,e,n,this)}}else{const h=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let v=h,S=p;v<S;v++)Ga.fromBufferAttribute(d,v),fm(Ga,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function fm(t,e,n,i,r,o,s){const a=ad.distanceSqToPoint(t);if(a<n){const l=new k;ad.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class V_ extends an{constructor(e,n,i=Ir,r,o,s,a=Vn,l=Vn,u,f=Os,d=1){if(f!==Os&&f!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,o,s,a,l,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cu extends Ai{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,p=[],v=[],S=[],m=[];for(let c=0;c<f;c++){const g=c*h-s;for(let _=0;_<u;_++){const x=_*d-o;v.push(x,-g,0),S.push(0,0,1),m.push(_/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,x=g+u*(c+1),C=g+1+u*(c+1),A=g+1+u*c;p.push(_,x,A),p.push(x,C,A)}this.setIndex(p),this.setAttribute("position",new Ji(v,3)),this.setAttribute("normal",new Ji(S,3)),this.setAttribute("uv",new Ji(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class CS extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bS extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class PS extends k_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class LS extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function dm(t,e,n,i){const r=DS(i);switch(n){case M_:return t*e;case w_:return t*e/r.components*r.byteLength;case uh:return t*e/r.components*r.byteLength;case A_:return t*e*2/r.components*r.byteLength;case ch:return t*e*2/r.components*r.byteLength;case T_:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case fh:return t*e*4/r.components*r.byteLength;case cl:case fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dl:case hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ff:case kf:return Math.max(t,16)*Math.max(e,8)/4;case Uf:case Of:return Math.max(t,8)*Math.max(e,8)/2;case zf:case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case jf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ed:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case td:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pl:case nd:case id:return Math.ceil(t/4)*Math.ceil(e/4)*16;case R_:case rd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case od:case sd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function DS(t){switch(t){case Mi:case y_:return{byteLength:1,components:1};case Us:case S_:case Xs:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case Ir:case sh:case pi:return{byteLength:4,components:1};case E_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function NS(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const f=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,f);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],S=d[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const S=d[p];t.bufferSubData(u,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}var IS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,US=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,GS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$S=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cE="gl_FragColor = linearToOutputTexel( gl_FragColor );",fE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ME=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_M=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:IS,alphahash_pars_fragment:US,alphamap_fragment:FS,alphamap_pars_fragment:OS,alphatest_fragment:kS,alphatest_pars_fragment:zS,aomap_fragment:BS,aomap_pars_fragment:HS,batching_pars_vertex:VS,batching_vertex:GS,begin_vertex:WS,beginnormal_vertex:XS,bsdfs:jS,iridescence_fragment:$S,bumpmap_pars_fragment:YS,clipping_planes_fragment:qS,clipping_planes_pars_fragment:KS,clipping_planes_pars_vertex:ZS,clipping_planes_vertex:QS,color_fragment:JS,color_pars_fragment:eE,color_pars_vertex:tE,color_vertex:nE,common:iE,cube_uv_reflection_fragment:rE,defaultnormal_vertex:oE,displacementmap_pars_vertex:sE,displacementmap_vertex:aE,emissivemap_fragment:lE,emissivemap_pars_fragment:uE,colorspace_fragment:cE,colorspace_pars_fragment:fE,envmap_fragment:dE,envmap_common_pars_fragment:hE,envmap_pars_fragment:pE,envmap_pars_vertex:mE,envmap_physical_pars_fragment:AE,envmap_vertex:gE,fog_vertex:vE,fog_pars_vertex:_E,fog_fragment:xE,fog_pars_fragment:yE,gradientmap_pars_fragment:SE,lightmap_pars_fragment:EE,lights_lambert_fragment:ME,lights_lambert_pars_fragment:TE,lights_pars_begin:wE,lights_toon_fragment:RE,lights_toon_pars_fragment:CE,lights_phong_fragment:bE,lights_phong_pars_fragment:PE,lights_physical_fragment:LE,lights_physical_pars_fragment:DE,lights_fragment_begin:NE,lights_fragment_maps:IE,lights_fragment_end:UE,logdepthbuf_fragment:FE,logdepthbuf_pars_fragment:OE,logdepthbuf_pars_vertex:kE,logdepthbuf_vertex:zE,map_fragment:BE,map_pars_fragment:HE,map_particle_fragment:VE,map_particle_pars_fragment:GE,metalnessmap_fragment:WE,metalnessmap_pars_fragment:XE,morphinstance_vertex:jE,morphcolor_vertex:$E,morphnormal_vertex:YE,morphtarget_pars_vertex:qE,morphtarget_vertex:KE,normal_fragment_begin:ZE,normal_fragment_maps:QE,normal_pars_fragment:JE,normal_pars_vertex:eM,normal_vertex:tM,normalmap_pars_fragment:nM,clearcoat_normal_fragment_begin:iM,clearcoat_normal_fragment_maps:rM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:sM,opaque_fragment:aM,packing:lM,premultiplied_alpha_fragment:uM,project_vertex:cM,dithering_fragment:fM,dithering_pars_fragment:dM,roughnessmap_fragment:hM,roughnessmap_pars_fragment:pM,shadowmap_pars_fragment:mM,shadowmap_pars_vertex:gM,shadowmap_vertex:vM,shadowmask_pars_fragment:_M,skinbase_vertex:xM,skinning_pars_vertex:yM,skinning_vertex:SM,skinnormal_vertex:EM,specularmap_fragment:MM,specularmap_pars_fragment:TM,tonemapping_fragment:wM,tonemapping_pars_fragment:AM,transmission_fragment:RM,transmission_pars_fragment:CM,uv_pars_fragment:bM,uv_pars_vertex:PM,uv_vertex:LM,worldpos_vertex:DM,background_vert:NM,background_frag:IM,backgroundCube_vert:UM,backgroundCube_frag:FM,cube_vert:OM,cube_frag:kM,depth_vert:zM,depth_frag:BM,distanceRGBA_vert:HM,distanceRGBA_frag:VM,equirect_vert:GM,equirect_frag:WM,linedashed_vert:XM,linedashed_frag:jM,meshbasic_vert:$M,meshbasic_frag:YM,meshlambert_vert:qM,meshlambert_frag:KM,meshmatcap_vert:ZM,meshmatcap_frag:QM,meshnormal_vert:JM,meshnormal_frag:e2,meshphong_vert:t2,meshphong_frag:n2,meshphysical_vert:i2,meshphysical_frag:r2,meshtoon_vert:o2,meshtoon_frag:s2,points_vert:a2,points_frag:l2,shadow_vert:u2,shadow_frag:c2,sprite_vert:f2,sprite_frag:d2},ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},$n={basic:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:$t([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:$t([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:$t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:$t([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:$t([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:$t([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:$t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:$t([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:$t([ae.common,ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:$t([ae.lights,ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};$n.physical={uniforms:$t([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Wa={r:0,b:0,g:0},hr=new Ti,h2=new Tt;function p2(t,e,n,i,r,o,s){const a=new Ke(0);let l=o===!0?0:1,u,f,d=null,h=0,p=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function S(_){let x=!1;const C=v(_);C===null?c(a,l):C&&C.isColor&&(c(C,1),x=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,x){const C=v(x);C&&(C.isCubeTexture||C.mapping===lu)?(f===void 0&&(f=new gi(new qs(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:Uo($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),hr.copy(x.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(h2.makeRotationFromEuler(hr)),f.material.toneMapped=Xe.getTransfer(C.colorSpace)!==Je,(d!==C||h!==C.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new gi(new cu(2,2),new ir({name:"BackgroundMaterial",uniforms:Uo($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Xe.getTransfer(C.colorSpace)!==Je,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function c(_,x){_.getRGB(Wa,O_(t)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,x,s)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,c(a,l)},render:S,addToRenderList:m,dispose:g}}function m2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(E,L,V,B,Y){let q=!1;const j=d(B,V,L);o!==j&&(o=j,u(o.object)),q=p(E,B,V,Y),q&&v(E,B,V,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,x(E,L,V,B),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(E){return t.bindVertexArray(E)}function f(E){return t.deleteVertexArray(E)}function d(E,L,V){const B=V.wireframe===!0;let Y=i[E.id];Y===void 0&&(Y={},i[E.id]=Y);let q=Y[L.id];q===void 0&&(q={},Y[L.id]=q);let j=q[B];return j===void 0&&(j=h(l()),q[B]=j),j}function h(E){const L=[],V=[],B=[];for(let Y=0;Y<n;Y++)L[Y]=0,V[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:B,object:E,attributes:{},index:null}}function p(E,L,V,B){const Y=o.attributes,q=L.attributes;let j=0;const Q=V.getAttributes();for(const N in Q)if(Q[N].location>=0){const K=Y[N];let oe=q[N];if(oe===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;j++}return o.attributesNum!==j||o.index!==B}function v(E,L,V,B){const Y={},q=L.attributes;let j=0;const Q=V.getAttributes();for(const N in Q)if(Q[N].location>=0){let K=q[N];K===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(K=E.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),Y[N]=oe,j++}o.attributes=Y,o.attributesNum=j,o.index=B}function S(){const E=o.newAttributes;for(let L=0,V=E.length;L<V;L++)E[L]=0}function m(E){c(E,0)}function c(E,L){const V=o.newAttributes,B=o.enabledAttributes,Y=o.attributeDivisors;V[E]=1,B[E]===0&&(t.enableVertexAttribArray(E),B[E]=1),Y[E]!==L&&(t.vertexAttribDivisor(E,L),Y[E]=L)}function g(){const E=o.newAttributes,L=o.enabledAttributes;for(let V=0,B=L.length;V<B;V++)L[V]!==E[V]&&(t.disableVertexAttribArray(V),L[V]=0)}function _(E,L,V,B,Y,q,j){j===!0?t.vertexAttribIPointer(E,L,V,Y,q):t.vertexAttribPointer(E,L,V,B,Y,q)}function x(E,L,V,B){S();const Y=B.attributes,q=V.getAttributes(),j=L.defaultAttributeValues;for(const Q in q){const N=q[Q];if(N.location>=0){let W=Y[Q];if(W===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(W=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(W=E.instanceColor)),W!==void 0){const K=W.normalized,oe=W.itemSize,Se=e.get(W);if(Se===void 0)continue;const Ve=Se.buffer,G=Se.type,re=Se.bytesPerElement,me=G===t.INT||G===t.UNSIGNED_INT||W.gpuType===sh;if(W.isInterleavedBufferAttribute){const le=W.data,Te=le.stride,je=W.offset;if(le.isInstancedInterleavedBuffer){for(let Pe=0;Pe<N.locationSize;Pe++)c(N.location+Pe,le.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Pe=0;Pe<N.locationSize;Pe++)m(N.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Pe=0;Pe<N.locationSize;Pe++)_(N.location+Pe,oe/N.locationSize,G,K,Te*re,(je+oe/N.locationSize*Pe)*re,me)}else{if(W.isInstancedBufferAttribute){for(let le=0;le<N.locationSize;le++)c(N.location+le,W.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let le=0;le<N.locationSize;le++)m(N.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let le=0;le<N.locationSize;le++)_(N.location+le,oe/N.locationSize,G,K,oe*re,oe/N.locationSize*le*re,me)}}else if(j!==void 0){const K=j[Q];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(N.location,K);break;case 3:t.vertexAttrib3fv(N.location,K);break;case 4:t.vertexAttrib4fv(N.location,K);break;default:t.vertexAttrib1fv(N.location,K)}}}}g()}function C(){b();for(const E in i){const L=i[E];for(const V in L){const B=L[V];for(const Y in B)f(B[Y].object),delete B[Y];delete L[V]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const V in L){const B=L[V];for(const Y in B)f(B[Y].object),delete B[Y];delete L[V]}delete i[E.id]}function w(E){for(const L in i){const V=i[L];if(V[E.id]===void 0)continue;const B=V[E.id];for(const Y in B)f(B[Y].object),delete B[Y];delete V[E.id]}}function b(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function g2(t,e,n){let i;function r(u){i=u}function o(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function s(u,f,d){d!==0&&(t.drawArraysInstanced(i,u,f,d),n.update(f,i,d))}function a(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let p=0;for(let v=0;v<d;v++)p+=f[v];n.update(p,i,1)}function l(u,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)s(u[v],f[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,d);let v=0;for(let S=0;S<d;S++)v+=f[S]*h[S];n.update(v,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function v2(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Mi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==pi&&!b)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function _2(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new _r,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,c=t.get(d);if(!r||v===null||v.length===0||o&&!m)o?f(null):u();else{const g=o?0:i,_=g*4;let x=c.clippingState||null;l.value=x,x=f(v,h,_,p);for(let C=0;C!==_;++C)x[C]=n[C];c.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,v){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const c=p+S*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let _=0,x=p;_!==S;++_,x+=4)s.copy(d[_]).applyMatrix4(g,a),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function x2(t){let e=new WeakMap;function n(s,a){return a===Lf?s.mapping=Do:a===Df&&(s.mapping=No),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Lf||a===Df)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new SS(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const po=4,hm=[.125,.215,.35,.446,.526,.582],Sr=20,vc=new PS,pm=new Ke;let _c=null,xc=0,yc=0,Sc=!1;const xr=(1+Math.sqrt(5))/2,Jr=1/xr,mm=[new k(-xr,Jr,0),new k(xr,Jr,0),new k(-Jr,0,xr),new k(Jr,0,xr),new k(0,xr,-Jr),new k(0,xr,Jr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],y2=new k;class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=y2}=o;_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,xc,yc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Do||e.mapping===No?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Xs,format:zn,colorSpace:Io,depthBuffer:!1},r=vm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S2(o)),this._blurMaterial=E2(o,e,n)}return r}_compileMaterial(e){const n=new gi(this._lodPlanes[0],e);this._renderer.compile(n,vc)}_sceneToCubeUV(e,n,i,r,o){const l=new wn(90,1,n,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(pm),d.toneMapping=Qi,d.autoClear=!1;const v=new I_({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),S=new gi(new qs,v);let m=!1;const c=e.background;c?c.isColor&&(v.color.copy(c),e.background=null,m=!0):(v.color.copy(pm),m=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(l.up.set(0,u[g],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+f[g],o.y,o.z)):_===1?(l.up.set(0,0,u[g]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+f[g],o.z)):(l.up.set(0,u[g],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+f[g]));const x=this._cubeSize;Xa(r,_*x,g>2?x:0,x,x),d.setRenderTarget(r),m&&d.render(S,l),d.render(e,l)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=c}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Do||e.mapping===No;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new gi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Xa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,vc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=mm[(r-o-1)%mm.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new gi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),S=o/v,m=isFinite(o)?1+Math.floor(f*S):Sr;m>Sr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const c=[];let g=0;for(let w=0;w<Sr;++w){const b=w/S,T=Math.exp(-b*b/2);c.push(T),w===0?g+=T:w<m&&(g+=2*T)}for(let w=0;w<c.length;w++)c[w]=c[w]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const x=this._sizeLods[r],C=3*x*(r>_-po?r-_+po:0),A=4*(this._cubeSize-x);Xa(n,C,A,3*x,2*x),l.setRenderTarget(n),l.render(d,vc)}}function S2(t){const e=[],n=[],i=[];let r=t;const o=t-po+1+hm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-po?l=hm[s-t+po-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,v=6,S=3,m=2,c=1,g=new Float32Array(S*v*p),_=new Float32Array(m*v*p),x=new Float32Array(c*v*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,b=A>2?0:-1,T=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];g.set(T,S*v*A),_.set(h,m*v*A);const E=[A,A,A,A,A,A];x.set(E,c*v*A)}const C=new Ai;C.setAttribute("position",new ei(g,S)),C.setAttribute("uv",new ei(_,m)),C.setAttribute("faceIndex",new ei(x,c)),e.push(C),r>po&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vm(t,e,n){const i=new Ur(t,e,n);return i.texture.mapping=lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function E2(t,e,n){const i=new Float32Array(Sr),r=new k(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function _m(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function xm(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Lf||l===Df,f=l===Do||l===No;if(u||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new gm(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new gm(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function T2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Eo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function w2(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function u(d){const h=[],p=d.index,v=d.attributes.position;let S=0;if(p!==null){const g=p.array;S=p.version;for(let _=0,x=g.length;_<x;_+=3){const C=g[_+0],A=g[_+1],w=g[_+2];h.push(C,A,A,w,w,C)}}else if(v!==void 0){const g=v.array;S=v.version;for(let _=0,x=g.length/3-1;_<x;_+=3){const C=_+0,A=_+1,w=_+2;h.push(C,A,A,w,w,C)}}else return;const m=new(b_(h)?F_:U_)(h,1);m.version=S;const c=o.get(d);c&&e.remove(c),o.set(d,m)}function f(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function A2(t,e,n){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(i,p,o,h*s),n.update(p,i,1)}function u(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,o,h*s,v),n.update(p,i,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,h,0,v);let m=0;for(let c=0;c<v;c++)m+=p[c];n.update(m,i,1)}function d(h,p,v,S){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<h.length;c++)u(h[c]/s,p[c],S[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,h,0,S,0,v);let c=0;for(let g=0;g<v;g++)c+=p[g]*S[g];n.update(c,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function R2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function C2(t,e,n){const i=new WeakMap,r=new Mt;function o(s,a,l){const u=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let E=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*A*4*d),b=new P_(w,C,A,d);b.type=pi,b.needsUpdate=!0;const T=x*4;for(let L=0;L<d;L++){const V=c[L],B=g[L],Y=_[L],q=C*A*4*L;for(let j=0;j<V.count;j++){const Q=j*T;v===!0&&(r.fromBufferAttribute(V,j),w[q+Q+0]=r.x,w[q+Q+1]=r.y,w[q+Q+2]=r.z,w[q+Q+3]=0),S===!0&&(r.fromBufferAttribute(B,j),w[q+Q+4]=r.x,w[q+Q+5]=r.y,w[q+Q+6]=r.z,w[q+Q+7]=0),m===!0&&(r.fromBufferAttribute(Y,j),w[q+Q+8]=r.x,w[q+Q+9]=r.y,w[q+Q+10]=r.z,w[q+Q+11]=Y.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new et(C,A)},i.set(a,h),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function b2(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const W_=new an,ym=new V_(1,1),X_=new P_,j_=new rS,$_=new z_,Sm=[],Em=[],Mm=new Float32Array(16),Tm=new Float32Array(9),wm=new Float32Array(4);function Ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Sm[r];if(o===void 0&&(o=new Float32Array(r),Sm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fu(t,e){let n=Em[e];n===void 0&&(n=new Int32Array(e),Em[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function P2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function L2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function D2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function N2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function I2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;wm.set(i),t.uniformMatrix2fv(this.addr,!1,wm),Lt(n,i)}}function U2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Tm.set(i),t.uniformMatrix3fv(this.addr,!1,Tm),Lt(n,i)}}function F2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Mm.set(i),t.uniformMatrix4fv(this.addr,!1,Mm),Lt(n,i)}}function O2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function H2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function V2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function G2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function W2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function X2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(ym.compareFunction=C_,o=ym):o=W_,n.setTexture2D(e||o,r)}function j2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||j_,r)}function $2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$_,r)}function Y2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||X_,r)}function q2(t){switch(t){case 5126:return P2;case 35664:return L2;case 35665:return D2;case 35666:return N2;case 35674:return I2;case 35675:return U2;case 35676:return F2;case 5124:case 35670:return O2;case 35667:case 35671:return k2;case 35668:case 35672:return z2;case 35669:case 35673:return B2;case 5125:return H2;case 36294:return V2;case 36295:return G2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return X2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return Y2}}function K2(t,e){t.uniform1fv(this.addr,e)}function Z2(t,e){const n=Ho(e,this.size,2);t.uniform2fv(this.addr,n)}function Q2(t,e){const n=Ho(e,this.size,3);t.uniform3fv(this.addr,n)}function J2(t,e){const n=Ho(e,this.size,4);t.uniform4fv(this.addr,n)}function eT(t,e){const n=Ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tT(t,e){const n=Ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nT(t,e){const n=Ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iT(t,e){t.uniform1iv(this.addr,e)}function rT(t,e){t.uniform2iv(this.addr,e)}function oT(t,e){t.uniform3iv(this.addr,e)}function sT(t,e){t.uniform4iv(this.addr,e)}function aT(t,e){t.uniform1uiv(this.addr,e)}function lT(t,e){t.uniform2uiv(this.addr,e)}function uT(t,e){t.uniform3uiv(this.addr,e)}function cT(t,e){t.uniform4uiv(this.addr,e)}function fT(t,e,n){const i=this.cache,r=e.length,o=fu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||W_,o[s])}function dT(t,e,n){const i=this.cache,r=e.length,o=fu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||j_,o[s])}function hT(t,e,n){const i=this.cache,r=e.length,o=fu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||$_,o[s])}function pT(t,e,n){const i=this.cache,r=e.length,o=fu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||X_,o[s])}function mT(t){switch(t){case 5126:return K2;case 35664:return Z2;case 35665:return Q2;case 35666:return J2;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return rT;case 35668:case 35672:return oT;case 35669:case 35673:return sT;case 5125:return aT;case 36294:return lT;case 36295:return uT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}class gT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=q2(n.type)}}class vT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mT(n.type)}}class _T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function Am(t,e){t.seq.push(e),t.map[e.id]=e}function xT(t,e,n){const i=t.name,r=i.length;for(Ec.lastIndex=0;;){const o=Ec.exec(i),s=Ec.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Am(n,u===void 0?new gT(a,t,e):new vT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new _T(a),Am(n,d)),n=d}}}class ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);xT(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Rm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yT=37297;let ST=0;function ET(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Cm=new Ue;function MT(t){Xe._getMatrix(Cm,Xe.workingColorSpace,t);const e=`mat3( ${Cm.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Hl:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+ET(t.getShaderSource(e),s)}else return r}function TT(t,e){const n=MT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wT(t,e){let n;switch(e){case py:n="Linear";break;case my:n="Reinhard";break;case gy:n="Cineon";break;case vy:n="ACESFilmic";break;case xy:n="AgX";break;case yy:n="Neutral";break;case _y:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ja=new k;function AT(){Xe.getLuminanceCoefficients(ja);const t=ja.x.toFixed(4),e=ja.y.toFixed(4),n=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function CT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ss(t){return t!==""}function Pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(t){return t.replace(PT,DT)}const LT=new Map;function DT(t,e){let n=Oe[e];if(n===void 0){const i=LT.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ld(n)}const NT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(t){return t.replace(NT,IT)}function IT(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Nm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$x?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function FT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Do:case No:e="ENVMAP_TYPE_CUBE";break;case lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case No:e="ENVMAP_MODE_REFRACTION";break}return e}function kT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case __:e="ENVMAP_BLENDING_MULTIPLY";break;case dy:e="ENVMAP_BLENDING_MIX";break;case hy:e="ENVMAP_BLENDING_ADD";break}return e}function zT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BT(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=UT(n),u=FT(n),f=OT(n),d=kT(n),h=zT(n),p=RT(n),v=CT(o),S=r.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ss).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ss).join(`
`),c.length>0&&(c+=`
`)):(m=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),c=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Qi?wT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,TT("linearToOutputTexel",n.outputColorSpace),AT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ss).join(`
`)),s=ld(s),s=Pm(s,n),s=Lm(s,n),a=ld(a),a=Pm(a,n),a=Lm(a,n),s=Dm(s),a=Dm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+m+s,x=g+c+a,C=Rm(r,r.VERTEX_SHADER,_),A=Rm(r,r.FRAGMENT_SHADER,x);r.attachShader(S,C),r.attachShader(S,A),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(L){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(S).trim(),B=r.getShaderInfoLog(C).trim(),Y=r.getShaderInfoLog(A).trim();let q=!0,j=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,C,A);else{const Q=bm(r,C,"vertex"),N=bm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+Q+`
`+N)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||Y==="")&&(j=!1);j&&(L.diagnostics={runnable:q,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:c}})}r.deleteShader(C),r.deleteShader(A),b=new ml(r,S),T=bT(r,S)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(S,yT)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ST++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=A,this}let HT=0;class VT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new GT(e),n.set(e,i)),i}}class GT{constructor(e){this.id=HT++,this.code=e,this.usedTimes=0}}function WT(t,e,n,i,r,o,s){const a=new D_,l=new VT,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,E,L,V,B){const Y=V.fog,q=B.geometry,j=T.isMeshStandardMaterial?V.environment:null,Q=(T.isMeshStandardMaterial?n:e).get(T.envMap||j),N=Q&&Q.mapping===lu?Q.image.height:null,W=v[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const K=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=K!==void 0?K.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let Ve,G,re,me;if(W){const qe=$n[W];Ve=qe.vertexShader,G=qe.fragmentShader}else Ve=T.vertexShader,G=T.fragmentShader,l.update(T),re=l.getVertexShaderID(T),me=l.getFragmentShaderID(T);const le=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),je=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,ft=!!T.map,dt=!!T.matcap,$e=!!Q,P=!!T.aoMap,Wt=!!T.lightMap,Ye=!!T.bumpMap,nt=!!T.normalMap,ye=!!T.displacementMap,Ge=!!T.emissiveMap,Ae=!!T.metalnessMap,Fe=!!T.roughnessMap,Rt=T.anisotropy>0,R=T.clearcoat>0,y=T.dispersion>0,F=T.iridescence>0,X=T.sheen>0,Z=T.transmission>0,H=Rt&&!!T.anisotropyMap,Ee=R&&!!T.clearcoatMap,ue=R&&!!T.clearcoatNormalMap,xe=R&&!!T.clearcoatRoughnessMap,Me=F&&!!T.iridescenceMap,J=F&&!!T.iridescenceThicknessMap,he=X&&!!T.sheenColorMap,be=X&&!!T.sheenRoughnessMap,Ce=!!T.specularMap,se=!!T.specularColorMap,Ne=!!T.specularIntensityMap,D=Z&&!!T.transmissionMap,ce=Z&&!!T.thicknessMap,ee=!!T.gradientMap,ge=!!T.alphaMap,ne=T.alphaTest>0,$=!!T.alphaHash,ve=!!T.extensions;let Ie=Qi;T.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ie=t.toneMapping);const rt={shaderID:W,shaderType:T.type,shaderName:T.name,vertexShader:Ve,fragmentShader:G,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:je,instancingColor:je&&B.instanceColor!==null,instancingMorph:je&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Io,alphaToCoverage:!!T.alphaToCoverage,map:ft,matcap:dt,envMap:$e,envMapMode:$e&&Q.mapping,envMapCubeUVHeight:N,aoMap:P,lightMap:Wt,bumpMap:Ye,normalMap:nt,displacementMap:h&&ye,emissiveMap:Ge,normalMapObjectSpace:nt&&T.normalMapType===wy,normalMapTangentSpace:nt&&T.normalMapType===Ty,metalnessMap:Ae,roughnessMap:Fe,anisotropy:Rt,anisotropyMap:H,clearcoat:R,clearcoatMap:Ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:xe,dispersion:y,iridescence:F,iridescenceMap:Me,iridescenceThicknessMap:J,sheen:X,sheenColorMap:he,sheenRoughnessMap:be,specularMap:Ce,specularColorMap:se,specularIntensityMap:Ne,transmission:Z,transmissionMap:D,thicknessMap:ce,gradientMap:ee,opaque:T.transparent===!1&&T.blending===So&&T.alphaToCoverage===!1,alphaMap:ge,alphaTest:ne,alphaHash:$,combine:T.combine,mapUv:ft&&S(T.map.channel),aoMapUv:P&&S(T.aoMap.channel),lightMapUv:Wt&&S(T.lightMap.channel),bumpMapUv:Ye&&S(T.bumpMap.channel),normalMapUv:nt&&S(T.normalMap.channel),displacementMapUv:ye&&S(T.displacementMap.channel),emissiveMapUv:Ge&&S(T.emissiveMap.channel),metalnessMapUv:Ae&&S(T.metalnessMap.channel),roughnessMapUv:Fe&&S(T.roughnessMap.channel),anisotropyMapUv:H&&S(T.anisotropyMap.channel),clearcoatMapUv:Ee&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:ue&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:J&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:he&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:be&&S(T.sheenRoughnessMap.channel),specularMapUv:Ce&&S(T.specularMap.channel),specularColorMapUv:se&&S(T.specularColorMap.channel),specularIntensityMapUv:Ne&&S(T.specularIntensityMap.channel),transmissionMapUv:D&&S(T.transmissionMap.channel),thicknessMapUv:ce&&S(T.thicknessMap.channel),alphaMapUv:ge&&S(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(nt||Rt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(ft||ge),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ft&&T.map.isVideoTexture===!0&&Xe.getTransfer(T.map.colorSpace)===Je,decodeVideoTextureEmissive:Ge&&T.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(T.emissiveMap.colorSpace)===Je,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fi,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ve&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&T.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return rt.vertexUv1s=u.has(1),rt.vertexUv2s=u.has(2),rt.vertexUv3s=u.has(3),u.clear(),rt}function c(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)E.push(L),E.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(g(E,T),_(E,T),E.push(t.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function g(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function _(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const E=v[T.type];let L;if(E){const V=$n[E];L=vS.clone(V.uniforms)}else L=T.uniforms;return L}function C(T,E){let L;for(let V=0,B=f.length;V<B;V++){const Y=f[V];if(Y.cacheKey===E){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new BT(t,E,T,o),f.push(L)),L}function A(T){if(--T.usedTimes===0){const E=f.indexOf(T);f[E]=f[f.length-1],f.pop(),T.destroy()}}function w(T){l.remove(T)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:f,dispose:b}}function XT(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function jT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Um(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,p,v,S,m){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:S,group:m},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=p,c.groupOrder=v,c.renderOrder=d.renderOrder,c.z=S,c.group=m),e++,c}function a(d,h,p,v,S,m){const c=s(d,h,p,v,S,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(d,h,p,v,S,m){const c=s(d,h,p,v,S,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||jT),i.length>1&&i.sort(h||Im),r.length>1&&r.sort(h||Im)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:u}}function $T(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Um,t.set(i,[s])):r>=o.length?(s=new Um,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function YT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ke};break;case"SpotLight":n={position:new k,direction:new k,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function qT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let KT=0;function ZT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QT(t){const e=new YT,n=qT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,o=new Tt,s=new Tt;function a(u){let f=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,S=0,m=0,c=0,g=0,_=0,x=0,C=0,A=0,w=0;u.sort(ZT);for(let T=0,E=u.length;T<E;T++){const L=u[T],V=L.color,B=L.intensity,Y=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=V.r*B,d+=V.g*B,h+=V.b*B;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],B);w++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,N=n.get(L);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=j,p++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(V).multiplyScalar(B),j.distance=Y,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[S]=j;const Q=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,Q.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[S]=Q.matrix,L.castShadow){const N=n.get(L);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.spotShadow[S]=N,i.spotShadowMap[S]=q,x++}S++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(V).multiplyScalar(B),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const Q=L.shadow,N=n.get(L);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,N.shadowCameraNear=Q.camera.near,N.shadowCameraFar=Q.camera.far,i.pointShadow[v]=N,i.pointShadowMap[v]=q,i.pointShadowMatrix[v]=L.shadow.matrix,_++}i.point[v]=j,v++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(B),j.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[c]=j,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==S||b.rectAreaLength!==m||b.hemiLength!==c||b.numDirectionalShadows!==g||b.numPointShadows!==_||b.numSpotShadows!==x||b.numSpotMaps!==C||b.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,b.directionalLength=p,b.pointLength=v,b.spotLength=S,b.rectAreaLength=m,b.hemiLength=c,b.numDirectionalShadows=g,b.numPointShadows=_,b.numSpotShadows=x,b.numSpotMaps=C,b.numLightProbes=w,i.version=KT++)}function l(u,f){let d=0,h=0,p=0,v=0,S=0;const m=f.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const _=u[c];if(_.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),s.identity(),o.copy(_.matrixWorld),o.premultiply(m),s.extractRotation(o),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),v++}else if(_.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const x=i.hemi[S];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function Fm(t){const e=new QT(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function o(f){n.push(f)}function s(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function JT(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Fm(t),e.set(r,[a])):o>=s.length?(a=new Fm(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nw(t,e,n){let i=new B_;const r=new et,o=new et,s=new Mt,a=new CS({depthPacking:My}),l=new bS,u={},f=n.maxTextureSize,d={[nr]:sn,[sn]:nr,[fi]:fi},h=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:ew,fragmentShader:tw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ai;v.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new gi(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v_;let c=this.type;this.render=function(A,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),E=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Zi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=c!==li&&this.type===li,Y=c===li&&this.type!==li;for(let q=0,j=A.length;q<j;q++){const Q=A[q],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const W=N.getFrameExtents();if(r.multiply(W),o.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/W.x),r.x=o.x*W.x,N.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/W.y),r.y=o.y*W.y,N.mapSize.y=o.y)),N.map===null||B===!0||Y===!0){const oe=this.type!==li?{minFilter:Vn,magFilter:Vn}:{};N.map!==null&&N.map.dispose(),N.map=new Ur(r.x,r.y,oe),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const K=N.getViewportCount();for(let oe=0;oe<K;oe++){const Se=N.getViewport(oe);s.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),V.viewport(s),N.updateMatrices(Q,oe),i=N.getFrustum(),x(w,b,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===li&&g(N,b),N.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(T,E,L)};function g(A,w){const b=e.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ur(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,b,h,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,b,p,S,null)}function _(A,w,b,T){let E=null;const L=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)E=L;else if(E=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const V=E.uuid,B=w.uuid;let Y=u[V];Y===void 0&&(Y={},u[V]=Y);let q=Y[B];q===void 0&&(q=E.clone(),Y[B]=q,w.addEventListener("dispose",C)),E=q}if(E.visible=w.visible,E.wireframe=w.wireframe,T===li?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:d[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=t.properties.get(E);V.light=b}return E}function x(A,w,b,T,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===li)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const B=e.update(A),Y=A.material;if(Array.isArray(Y)){const q=B.groups;for(let j=0,Q=q.length;j<Q;j++){const N=q[j],W=Y[N.materialIndex];if(W&&W.visible){const K=_(A,W,T,E);A.onBeforeShadow(t,A,w,b,B,K,N),t.renderBufferDirect(b,null,B,K,A,N),A.onAfterShadow(t,A,w,b,B,K,N)}}}else if(Y.visible){const q=_(A,Y,T,E);A.onBeforeShadow(t,A,w,b,B,q,null),t.renderBufferDirect(b,null,B,q,A,null),A.onAfterShadow(t,A,w,b,B,q,null)}}const V=A.children;for(let B=0,Y=V.length;B<Y;B++)x(V[B],w,b,T,E)}function C(A){A.target.removeEventListener("dispose",C);for(const b in u){const T=u[b],E=A.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const iw={[Tf]:wf,[Af]:bf,[Rf]:Pf,[Lo]:Cf,[wf]:Tf,[bf]:Af,[Pf]:Rf,[Cf]:Lo};function rw(t,e){function n(){let D=!1;const ce=new Mt;let ee=null;const ge=new Mt(0,0,0,0);return{setMask:function(ne){ee!==ne&&!D&&(t.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){D=ne},setClear:function(ne,$,ve,Ie,rt){rt===!0&&(ne*=Ie,$*=Ie,ve*=Ie),ce.set(ne,$,ve,Ie),ge.equals(ce)===!1&&(t.clearColor(ne,$,ve,Ie),ge.copy(ce))},reset:function(){D=!1,ee=null,ge.set(-1,0,0,0)}}}function i(){let D=!1,ce=!1,ee=null,ge=null,ne=null;return{setReversed:function($){if(ce!==$){const ve=e.get("EXT_clip_control");$?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ce=$;const Ie=ne;ne=null,this.setClear(Ie)}},getReversed:function(){return ce},setTest:function($){$?le(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function($){ee!==$&&!D&&(t.depthMask($),ee=$)},setFunc:function($){if(ce&&($=iw[$]),ge!==$){switch($){case Tf:t.depthFunc(t.NEVER);break;case wf:t.depthFunc(t.ALWAYS);break;case Af:t.depthFunc(t.LESS);break;case Lo:t.depthFunc(t.LEQUAL);break;case Rf:t.depthFunc(t.EQUAL);break;case Cf:t.depthFunc(t.GEQUAL);break;case bf:t.depthFunc(t.GREATER);break;case Pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=$}},setLocked:function($){D=$},setClear:function($){ne!==$&&(ce&&($=1-$),t.clearDepth($),ne=$)},reset:function(){D=!1,ee=null,ge=null,ne=null,ce=!1}}}function r(){let D=!1,ce=null,ee=null,ge=null,ne=null,$=null,ve=null,Ie=null,rt=null;return{setTest:function(qe){D||(qe?le(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(qe){ce!==qe&&!D&&(t.stencilMask(qe),ce=qe)},setFunc:function(qe,Pn,ni){(ee!==qe||ge!==Pn||ne!==ni)&&(t.stencilFunc(qe,Pn,ni),ee=qe,ge=Pn,ne=ni)},setOp:function(qe,Pn,ni){($!==qe||ve!==Pn||Ie!==ni)&&(t.stencilOp(qe,Pn,ni),$=qe,ve=Pn,Ie=ni)},setLocked:function(qe){D=qe},setClear:function(qe){rt!==qe&&(t.clearStencil(qe),rt=qe)},reset:function(){D=!1,ce=null,ee=null,ge=null,ne=null,$=null,ve=null,Ie=null,rt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let f={},d={},h=new WeakMap,p=[],v=null,S=!1,m=null,c=null,g=null,_=null,x=null,C=null,A=null,w=new Ke(0,0,0),b=0,T=!1,E=null,L=null,V=null,B=null,Y=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Q=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=Q>=1):N.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=Q>=2);let W=null,K={};const oe=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Ve=new Mt().fromArray(oe),G=new Mt().fromArray(Se);function re(D,ce,ee,ge){const ne=new Uint8Array(4),$=t.createTexture();t.bindTexture(D,$),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ve=0;ve<ee;ve++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(ce+ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return $}const me={};me[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(t.DEPTH_TEST),s.setFunc(Lo),Ye(!1),nt(zp),le(t.CULL_FACE),P(Zi);function le(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function Te(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function je(D,ce){return d[D]!==ce?(t.bindFramebuffer(D,ce),d[D]=ce,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(D,ce){let ee=p,ge=!1;if(D){ee=h.get(ce),ee===void 0&&(ee=[],h.set(ce,ee));const ne=D.textures;if(ee.length!==ne.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let $=0,ve=ne.length;$<ve;$++)ee[$]=t.COLOR_ATTACHMENT0+$;ee.length=ne.length,ge=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ee)}function ft(D){return v!==D?(t.useProgram(D),v=D,!0):!1}const dt={[yr]:t.FUNC_ADD,[qx]:t.FUNC_SUBTRACT,[Kx]:t.FUNC_REVERSE_SUBTRACT};dt[Zx]=t.MIN,dt[Qx]=t.MAX;const $e={[Jx]:t.ZERO,[ey]:t.ONE,[ty]:t.SRC_COLOR,[Ef]:t.SRC_ALPHA,[ay]:t.SRC_ALPHA_SATURATE,[oy]:t.DST_COLOR,[iy]:t.DST_ALPHA,[ny]:t.ONE_MINUS_SRC_COLOR,[Mf]:t.ONE_MINUS_SRC_ALPHA,[sy]:t.ONE_MINUS_DST_COLOR,[ry]:t.ONE_MINUS_DST_ALPHA,[ly]:t.CONSTANT_COLOR,[uy]:t.ONE_MINUS_CONSTANT_COLOR,[cy]:t.CONSTANT_ALPHA,[fy]:t.ONE_MINUS_CONSTANT_ALPHA};function P(D,ce,ee,ge,ne,$,ve,Ie,rt,qe){if(D===Zi){S===!0&&(Te(t.BLEND),S=!1);return}if(S===!1&&(le(t.BLEND),S=!0),D!==Yx){if(D!==m||qe!==T){if((c!==yr||x!==yr)&&(t.blendEquation(t.FUNC_ADD),c=yr,x=yr),qe)switch(D){case So:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bp:t.blendFunc(t.ONE,t.ONE);break;case Hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case So:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Hp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,_=null,C=null,A=null,w.set(0,0,0),b=0,m=D,T=qe}return}ne=ne||ce,$=$||ee,ve=ve||ge,(ce!==c||ne!==x)&&(t.blendEquationSeparate(dt[ce],dt[ne]),c=ce,x=ne),(ee!==g||ge!==_||$!==C||ve!==A)&&(t.blendFuncSeparate($e[ee],$e[ge],$e[$],$e[ve]),g=ee,_=ge,C=$,A=ve),(Ie.equals(w)===!1||rt!==b)&&(t.blendColor(Ie.r,Ie.g,Ie.b,rt),w.copy(Ie),b=rt),m=D,T=!1}function Wt(D,ce){D.side===fi?Te(t.CULL_FACE):le(t.CULL_FACE);let ee=D.side===sn;ce&&(ee=!ee),Ye(ee),D.blending===So&&D.transparent===!1?P(Zi):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),o.setMask(D.colorWrite);const ge=D.stencilWrite;a.setTest(ge),ge&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(D){E!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),E=D)}function nt(D){D!==Xx?(le(t.CULL_FACE),D!==L&&(D===zp?t.cullFace(t.BACK):D===jx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),L=D}function ye(D){D!==V&&(j&&t.lineWidth(D),V=D)}function Ge(D,ce,ee){D?(le(t.POLYGON_OFFSET_FILL),(B!==ce||Y!==ee)&&(t.polygonOffset(ce,ee),B=ce,Y=ee)):Te(t.POLYGON_OFFSET_FILL)}function Ae(D){D?le(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function Fe(D){D===void 0&&(D=t.TEXTURE0+q-1),W!==D&&(t.activeTexture(D),W=D)}function Rt(D,ce,ee){ee===void 0&&(W===null?ee=t.TEXTURE0+q-1:ee=W);let ge=K[ee];ge===void 0&&(ge={type:void 0,texture:void 0},K[ee]=ge),(ge.type!==D||ge.texture!==ce)&&(W!==ee&&(t.activeTexture(ee),W=ee),t.bindTexture(D,ce||me[D]),ge.type=D,ge.texture=ce)}function R(){const D=K[W];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{t.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{t.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(D){Ve.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ve.copy(D))}function be(D){G.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function Ce(D,ce){let ee=u.get(ce);ee===void 0&&(ee=new WeakMap,u.set(ce,ee));let ge=ee.get(D);ge===void 0&&(ge=t.getUniformBlockIndex(ce,D.name),ee.set(D,ge))}function se(D,ce){const ge=u.get(ce).get(D);l.get(ce)!==ge&&(t.uniformBlockBinding(ce,ge,D.__bindingPointIndex),l.set(ce,ge))}function Ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},W=null,K={},d={},h=new WeakMap,p=[],v=null,S=!1,m=null,c=null,g=null,_=null,x=null,C=null,A=null,w=new Ke(0,0,0),b=0,T=!1,E=null,L=null,V=null,B=null,Y=null,Ve.set(0,0,t.canvas.width,t.canvas.height),G.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:le,disable:Te,bindFramebuffer:je,drawBuffers:Pe,useProgram:ft,setBlending:P,setMaterial:Wt,setFlipSided:Ye,setCullFace:nt,setLineWidth:ye,setPolygonOffset:Ge,setScissorTest:Ae,activeTexture:Fe,bindTexture:Rt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:Me,texImage3D:J,updateUBOMapping:Ce,uniformBlockBinding:se,texStorage2D:ue,texStorage3D:xe,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:H,compressedTexSubImage3D:Ee,scissor:he,viewport:be,reset:Ne}}function ow(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return p?new OffscreenCanvas(R,y):Gl("canvas")}function S(R,y,F){let X=1;const Z=Rt(R);if((Z.width>F||Z.height>F)&&(X=F/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const H=Math.floor(X*Z.width),Ee=Math.floor(X*Z.height);d===void 0&&(d=v(H,Ee));const ue=y?v(H,Ee):d;return ue.width=H,ue.height=Ee,ue.getContext("2d").drawImage(R,0,0,H,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+Ee+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function c(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,y,F,X,Z=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let H=y;if(y===t.RED&&(F===t.FLOAT&&(H=t.R32F),F===t.HALF_FLOAT&&(H=t.R16F),F===t.UNSIGNED_BYTE&&(H=t.R8)),y===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(H=t.R8UI),F===t.UNSIGNED_SHORT&&(H=t.R16UI),F===t.UNSIGNED_INT&&(H=t.R32UI),F===t.BYTE&&(H=t.R8I),F===t.SHORT&&(H=t.R16I),F===t.INT&&(H=t.R32I)),y===t.RG&&(F===t.FLOAT&&(H=t.RG32F),F===t.HALF_FLOAT&&(H=t.RG16F),F===t.UNSIGNED_BYTE&&(H=t.RG8)),y===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(H=t.RG8UI),F===t.UNSIGNED_SHORT&&(H=t.RG16UI),F===t.UNSIGNED_INT&&(H=t.RG32UI),F===t.BYTE&&(H=t.RG8I),F===t.SHORT&&(H=t.RG16I),F===t.INT&&(H=t.RG32I)),y===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(H=t.RGB8UI),F===t.UNSIGNED_SHORT&&(H=t.RGB16UI),F===t.UNSIGNED_INT&&(H=t.RGB32UI),F===t.BYTE&&(H=t.RGB8I),F===t.SHORT&&(H=t.RGB16I),F===t.INT&&(H=t.RGB32I)),y===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(H=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(H=t.RGBA16UI),F===t.UNSIGNED_INT&&(H=t.RGBA32UI),F===t.BYTE&&(H=t.RGBA8I),F===t.SHORT&&(H=t.RGBA16I),F===t.INT&&(H=t.RGBA32I)),y===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),y===t.RGBA){const Ee=Z?Hl:Xe.getTransfer(X);F===t.FLOAT&&(H=t.RGBA32F),F===t.HALF_FLOAT&&(H=t.RGBA16F),F===t.UNSIGNED_BYTE&&(H=Ee===Je?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(R,y){let F;return R?y===null||y===Ir||y===Fs?F=t.DEPTH24_STENCIL8:y===pi?F=t.DEPTH32F_STENCIL8:y===Us&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ir||y===Fs?F=t.DEPTH_COMPONENT24:y===pi?F=t.DEPTH_COMPONENT32F:y===Us&&(F=t.DEPTH_COMPONENT16),F}function C(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vn&&R.minFilter!==Kn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),b(y),y.isVideoTexture&&f.delete(y)}function w(R){const y=R.target;y.removeEventListener("dispose",w),E(y)}function b(R){const y=i.get(R);if(y.__webglInit===void 0)return;const F=R.source,X=h.get(F);if(X){const Z=X[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(R),Object.keys(X).length===0&&h.delete(F)}i.remove(R)}function T(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const F=R.source,X=h.get(F);delete X[y.__cacheKey],s.memory.textures--}function E(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let Z=0;Z<y.__webglFramebuffer[X].length;Z++)t.deleteFramebuffer(y.__webglFramebuffer[X][Z]);else t.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)t.deleteFramebuffer(y.__webglFramebuffer[X]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=R.textures;for(let X=0,Z=F.length;X<Z;X++){const H=i.get(F[X]);H.__webglTexture&&(t.deleteTexture(H.__webglTexture),s.memory.textures--),i.remove(F[X])}i.remove(R)}let L=0;function V(){L=0}function B(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function Y(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function q(R,y){const F=i.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const X=R.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(F,R,y);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+y)}function j(R,y){const F=i.get(R);if(R.version>0&&F.__version!==R.version){me(F,R,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+y)}function Q(R,y){const F=i.get(R);if(R.version>0&&F.__version!==R.version){me(F,R,y);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+y)}function N(R,y){const F=i.get(R);if(R.version>0&&F.__version!==R.version){le(F,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+y)}const W={[Nf]:t.REPEAT,[wr]:t.CLAMP_TO_EDGE,[If]:t.MIRRORED_REPEAT},K={[Vn]:t.NEAREST,[Sy]:t.NEAREST_MIPMAP_NEAREST,[Ma]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[$u]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},oe={[Ay]:t.NEVER,[Dy]:t.ALWAYS,[Ry]:t.LESS,[C_]:t.LEQUAL,[Cy]:t.EQUAL,[Ly]:t.GEQUAL,[by]:t.GREATER,[Py]:t.NOTEQUAL};function Se(R,y){if(y.type===pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Kn||y.magFilter===$u||y.magFilter===Ma||y.magFilter===Ar||y.minFilter===Kn||y.minFilter===$u||y.minFilter===Ma||y.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,W[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,W[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,W[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vn||y.minFilter!==Ma&&y.minFilter!==Ar||y.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ve(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const X=y.source;let Z=h.get(X);Z===void 0&&(Z={},h.set(X,Z));const H=Y(y);if(H!==R.__cacheKey){Z[H]===void 0&&(Z[H]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Z[H].usedTimes++;const Ee=Z[R.__cacheKey];Ee!==void 0&&(Z[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(y)),R.__cacheKey=H,R.__webglTexture=Z[H].texture}return F}function G(R,y,F){return Math.floor(Math.floor(R/F)/y)}function re(R,y,F,X){const H=R.updateRanges;if(H.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,F,X,y.data);else{H.sort((J,he)=>J.start-he.start);let Ee=0;for(let J=1;J<H.length;J++){const he=H[Ee],be=H[J],Ce=he.start+he.count,se=G(be.start,y.width,4),Ne=G(he.start,y.width,4);be.start<=Ce+1&&se===Ne&&G(be.start+be.count-1,y.width,4)===se?he.count=Math.max(he.count,be.start+be.count-he.start):(++Ee,H[Ee]=be)}H.length=Ee+1;const ue=t.getParameter(t.UNPACK_ROW_LENGTH),xe=t.getParameter(t.UNPACK_SKIP_PIXELS),Me=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let J=0,he=H.length;J<he;J++){const be=H[J],Ce=Math.floor(be.start/4),se=Math.ceil(be.count/4),Ne=Ce%y.width,D=Math.floor(Ce/y.width),ce=se,ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Ne,D,ce,ee,F,X,y.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Me)}}function me(R,y,F){let X=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=t.TEXTURE_3D);const Z=Ve(R,y),H=y.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+F);const Ee=i.get(H);if(H.version!==Ee.__version||Z===!0){n.activeTexture(t.TEXTURE0+F);const ue=Xe.getPrimaries(Xe.workingColorSpace),xe=y.colorSpace===Bi?null:Xe.getPrimaries(y.colorSpace),Me=y.colorSpace===Bi||ue===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let J=S(y.image,!1,r.maxTextureSize);J=Fe(y,J);const he=o.convert(y.format,y.colorSpace),be=o.convert(y.type);let Ce=_(y.internalFormat,he,be,y.colorSpace,y.isVideoTexture);Se(X,y);let se;const Ne=y.mipmaps,D=y.isVideoTexture!==!0,ce=Ee.__version===void 0||Z===!0,ee=H.dataReady,ge=C(y,J);if(y.isDepthTexture)Ce=x(y.format===ks,y.type),ce&&(D?n.texStorage2D(t.TEXTURE_2D,1,Ce,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Ce,J.width,J.height,0,he,be,null));else if(y.isDataTexture)if(Ne.length>0){D&&ce&&n.texStorage2D(t.TEXTURE_2D,ge,Ce,Ne[0].width,Ne[0].height);for(let ne=0,$=Ne.length;ne<$;ne++)se=Ne[ne],D?ee&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,se.width,se.height,he,be,se.data):n.texImage2D(t.TEXTURE_2D,ne,Ce,se.width,se.height,0,he,be,se.data);y.generateMipmaps=!1}else D?(ce&&n.texStorage2D(t.TEXTURE_2D,ge,Ce,J.width,J.height),ee&&re(y,J,he,be)):n.texImage2D(t.TEXTURE_2D,0,Ce,J.width,J.height,0,he,be,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Ce,Ne[0].width,Ne[0].height,J.depth);for(let ne=0,$=Ne.length;ne<$;ne++)if(se=Ne[ne],y.format!==zn)if(he!==null)if(D){if(ee)if(y.layerUpdates.size>0){const ve=dm(se.width,se.height,y.format,y.type);for(const Ie of y.layerUpdates){const rt=se.data.subarray(Ie*ve/se.data.BYTES_PER_ELEMENT,(Ie+1)*ve/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Ie,se.width,se.height,1,he,rt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,se.width,se.height,J.depth,he,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Ce,se.width,se.height,J.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,se.width,se.height,J.depth,he,be,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Ce,se.width,se.height,J.depth,0,he,be,se.data)}else{D&&ce&&n.texStorage2D(t.TEXTURE_2D,ge,Ce,Ne[0].width,Ne[0].height);for(let ne=0,$=Ne.length;ne<$;ne++)se=Ne[ne],y.format!==zn?he!==null?D?ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,se.width,se.height,he,se.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Ce,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ee&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,se.width,se.height,he,be,se.data):n.texImage2D(t.TEXTURE_2D,ne,Ce,se.width,se.height,0,he,be,se.data)}else if(y.isDataArrayTexture)if(D){if(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Ce,J.width,J.height,J.depth),ee)if(y.layerUpdates.size>0){const ne=dm(J.width,J.height,y.format,y.type);for(const $ of y.layerUpdates){const ve=J.data.subarray($*ne/J.data.BYTES_PER_ELEMENT,($+1)*ne/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,he,be,ve)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,be,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,J.width,J.height,J.depth,0,he,be,J.data);else if(y.isData3DTexture)D?(ce&&n.texStorage3D(t.TEXTURE_3D,ge,Ce,J.width,J.height,J.depth),ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,be,J.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,J.width,J.height,J.depth,0,he,be,J.data);else if(y.isFramebufferTexture){if(ce)if(D)n.texStorage2D(t.TEXTURE_2D,ge,Ce,J.width,J.height);else{let ne=J.width,$=J.height;for(let ve=0;ve<ge;ve++)n.texImage2D(t.TEXTURE_2D,ve,Ce,ne,$,0,he,be,null),ne>>=1,$>>=1}}else if(Ne.length>0){if(D&&ce){const ne=Rt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,ge,Ce,ne.width,ne.height)}for(let ne=0,$=Ne.length;ne<$;ne++)se=Ne[ne],D?ee&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,he,be,se):n.texImage2D(t.TEXTURE_2D,ne,Ce,he,be,se);y.generateMipmaps=!1}else if(D){if(ce){const ne=Rt(J);n.texStorage2D(t.TEXTURE_2D,ge,Ce,ne.width,ne.height)}ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,be,J)}else n.texImage2D(t.TEXTURE_2D,0,Ce,he,be,J);m(y)&&c(X),Ee.__version=H.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function le(R,y,F){if(y.image.length!==6)return;const X=Ve(R,y),Z=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+F);const H=i.get(Z);if(Z.version!==H.__version||X===!0){n.activeTexture(t.TEXTURE0+F);const Ee=Xe.getPrimaries(Xe.workingColorSpace),ue=y.colorSpace===Bi?null:Xe.getPrimaries(y.colorSpace),xe=y.colorSpace===Bi||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!Me&&!J?he[$]=S(y.image[$],!0,r.maxCubemapSize):he[$]=J?y.image[$].image:y.image[$],he[$]=Fe(y,he[$]);const be=he[0],Ce=o.convert(y.format,y.colorSpace),se=o.convert(y.type),Ne=_(y.internalFormat,Ce,se,y.colorSpace),D=y.isVideoTexture!==!0,ce=H.__version===void 0||X===!0,ee=Z.dataReady;let ge=C(y,be);Se(t.TEXTURE_CUBE_MAP,y);let ne;if(Me){D&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ne,be.width,be.height);for(let $=0;$<6;$++){ne=he[$].mipmaps;for(let ve=0;ve<ne.length;ve++){const Ie=ne[ve];y.format!==zn?Ce!==null?D?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Ie.width,Ie.height,Ce,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Ie.width,Ie.height,Ce,se,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Ne,Ie.width,Ie.height,0,Ce,se,Ie.data)}}}else{if(ne=y.mipmaps,D&&ce){ne.length>0&&ge++;const $=Rt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ne,$.width,$.height)}for(let $=0;$<6;$++)if(J){D?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Ce,se,he[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,he[$].width,he[$].height,0,Ce,se,he[$].data);for(let ve=0;ve<ne.length;ve++){const rt=ne[ve].image[$].image;D?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,rt.width,rt.height,Ce,se,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Ne,rt.width,rt.height,0,Ce,se,rt.data)}}else{D?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,se,he[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,Ce,se,he[$]);for(let ve=0;ve<ne.length;ve++){const Ie=ne[ve];D?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,Ce,se,Ie.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Ne,Ce,se,Ie.image[$])}}}m(y)&&c(t.TEXTURE_CUBE_MAP),H.__version=Z.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Te(R,y,F,X,Z,H){const Ee=o.convert(F.format,F.colorSpace),ue=o.convert(F.type),xe=_(F.internalFormat,Ee,ue,F.colorSpace),Me=i.get(y),J=i.get(F);if(J.__renderTarget=y,!Me.__hasExternalTextures){const he=Math.max(1,y.width>>H),be=Math.max(1,y.height>>H);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,H,xe,he,be,y.depth,0,Ee,ue,null):n.texImage2D(Z,H,xe,he,be,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ge(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Z,J.__webglTexture,0,ye(y)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Z,J.__webglTexture,H),n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(R,y,F){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const X=y.depthTexture,Z=X&&X.isDepthTexture?X.type:null,H=x(y.stencilBuffer,Z),Ee=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=ye(y);Ge(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,H,y.width,y.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,H,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,H,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,R)}else{const X=y.textures;for(let Z=0;Z<X.length;Z++){const H=X[Z],Ee=o.convert(H.format,H.colorSpace),ue=o.convert(H.type),xe=_(H.internalFormat,Ee,ue,H.colorSpace),Me=ye(y);F&&Ge(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,xe,y.width,y.height):Ge(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,xe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,xe,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);const Z=X.__webglTexture,H=ye(y);if(y.depthTexture.format===Os)Ge(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(y.depthTexture.format===ks)Ge(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ft(R){const y=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=X}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=R.texture.mipmaps;X&&X.length>0?Pe(y.__webglFramebuffer[0],R):Pe(y.__webglFramebuffer,R)}else if(F){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=t.createRenderbuffer(),je(y.__webglDepthbuffer[X],R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,H),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,H)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),je(y.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,H),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,H)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(R,y,F){const X=i.get(R);y!==void 0&&Te(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&ft(R)}function $e(R){const y=R.texture,F=i.get(R),X=i.get(y);R.addEventListener("dispose",w);const Z=R.textures,H=R.isWebGLCubeRenderTarget===!0,Ee=Z.length>1;if(Ee||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=y.version,s.memory.textures++),H){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let xe=0;xe<y.mipmaps.length;xe++)F.__webglFramebuffer[ue][xe]=t.createFramebuffer()}else F.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)F.__webglFramebuffer[ue]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,xe=Z.length;ue<xe;ue++){const Me=i.get(Z[ue]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&Ge(R)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const xe=Z[ue];F.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const Me=o.convert(xe.format,xe.colorSpace),J=o.convert(xe.type),he=_(xe.internalFormat,Me,J,xe.colorSpace,R.isXRRenderTarget===!0),be=ye(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),je(F.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(H){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Se(t.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)Te(F.__webglFramebuffer[ue][xe],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else Te(F.__webglFramebuffer[ue],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(y)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,xe=Z.length;ue<xe;ue++){const Me=Z[ue],J=i.get(Me);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),Se(t.TEXTURE_2D,Me),Te(F.__webglFramebuffer,R,Me,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Me)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,X.__webglTexture),Se(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)Te(F.__webglFramebuffer[xe],R,y,t.COLOR_ATTACHMENT0,ue,xe);else Te(F.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,ue,0);m(y)&&c(ue),n.unbindTexture()}R.depthBuffer&&ft(R)}function P(R){const y=R.textures;for(let F=0,X=y.length;F<X;F++){const Z=y[F];if(m(Z)){const H=g(R),Ee=i.get(Z).__webglTexture;n.bindTexture(H,Ee),c(H),n.unbindTexture()}}}const Wt=[],Ye=[];function nt(R){if(R.samples>0){if(Ge(R)===!1){const y=R.textures,F=R.width,X=R.height;let Z=t.COLOR_BUFFER_BIT;const H=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(R),ue=y.length>1;if(ue)for(let Me=0;Me<y.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const xe=R.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const J=i.get(y[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,F,X,0,0,F,X,Z,t.NEAREST),l===!0&&(Wt.length=0,Ye.length=0,Wt.push(t.COLOR_ATTACHMENT0+Me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Wt.push(H),Ye.push(H),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Wt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Me=0;Me<y.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const J=i.get(y[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,J,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function ye(R){return Math.min(r.maxSamples,R.samples)}function Ge(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(R){const y=s.render.frame;f.get(R)!==y&&(f.set(R,y),R.update())}function Fe(R,y){const F=R.colorSpace,X=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Io&&F!==Bi&&(Xe.getTransfer(F)===Je?(X!==zn||Z!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=N,this.rebindTextures=dt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ge}function sw(t,e){function n(i,r=Bi){let o;const s=Xe.getTransfer(r);if(i===Mi)return t.UNSIGNED_BYTE;if(i===ah)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===E_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===y_)return t.BYTE;if(i===S_)return t.SHORT;if(i===Us)return t.UNSIGNED_SHORT;if(i===sh)return t.INT;if(i===Ir)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===Xs)return t.HALF_FLOAT;if(i===M_)return t.ALPHA;if(i===T_)return t.RGB;if(i===zn)return t.RGBA;if(i===Os)return t.DEPTH_COMPONENT;if(i===ks)return t.DEPTH_STENCIL;if(i===w_)return t.RED;if(i===uh)return t.RED_INTEGER;if(i===A_)return t.RG;if(i===ch)return t.RG_INTEGER;if(i===fh)return t.RGBA_INTEGER;if(i===cl||i===fl||i===dl||i===hl)if(s===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===cl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===cl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uf||i===Ff||i===Of||i===kf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Uf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ff)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Of)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zf||i===Bf||i===Hf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===zf||i===Bf)return s===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Hf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vf||i===Gf||i===Wf||i===Xf||i===jf||i===$f||i===Yf||i===qf||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Vf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$f)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jf)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ed)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===td)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pl||i===nd||i===id)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===pl)return s===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===id)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===R_||i===rd||i===od||i===sd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===pl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===rd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===od)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ir({vertexShader:aw,fragmentShader:lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new cu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cw extends zo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,p=null,v=null;const S=new uw,m=n.getContextAttributes();let c=null,g=null;const _=[],x=[],C=new et;let A=null;const w=new wn;w.viewport=new Mt;const b=new wn;b.viewport=new Mt;const T=[w,b],E=new LS;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let re=_[G];return re===void 0&&(re=new mc,_[G]=re),re.getTargetRaySpace()},this.getControllerGrip=function(G){let re=_[G];return re===void 0&&(re=new mc,_[G]=re),re.getGripSpace()},this.getHand=function(G){let re=_[G];return re===void 0&&(re=new mc,_[G]=re),re.getHandSpace()};function B(G){const re=x.indexOf(G.inputSource);if(re===-1)return;const me=_[re];me!==void 0&&(me.update(G.inputSource,G.frame,u||s),me.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let G=0;G<_.length;G++){const re=x[G];re!==null&&(x[G]=null,_[G].disconnect(re))}L=null,V=null,S.reset(),e.setRenderTarget(c),p=null,h=null,d=null,r=null,g=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,le=null,Te=null;m.depth&&(Te=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=m.stencil?ks:Os,le=m.stencil?Fs:Ir);const je={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(je),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Ur(h.textureWidth,h.textureHeight,{format:zn,type:Mi,depthTexture:new V_(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Ur(p.framebufferWidth,p.framebufferHeight,{format:zn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(G){for(let re=0;re<G.removed.length;re++){const me=G.removed[re],le=x.indexOf(me);le>=0&&(x[le]=null,_[le].disconnect(me))}for(let re=0;re<G.added.length;re++){const me=G.added[re];let le=x.indexOf(me);if(le===-1){for(let je=0;je<_.length;je++)if(je>=x.length){x.push(me),le=je;break}else if(x[je]===null){x[je]=me,le=je;break}if(le===-1)break}const Te=_[le];Te&&Te.connect(me)}}const j=new k,Q=new k;function N(G,re,me){j.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const le=j.distanceTo(Q),Te=re.projectionMatrix.elements,je=me.projectionMatrix.elements,Pe=Te[14]/(Te[10]-1),ft=Te[14]/(Te[10]+1),dt=(Te[9]+1)/Te[5],$e=(Te[9]-1)/Te[5],P=(Te[8]-1)/Te[0],Wt=(je[8]+1)/je[0],Ye=Pe*P,nt=Pe*Wt,ye=le/(-P+Wt),Ge=ye*-P;if(re.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ge),G.translateZ(ye),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Te[10]===-1)G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ae=Pe+ye,Fe=ft+ye,Rt=Ye-Ge,R=nt+(le-Ge),y=dt*ft/Fe*Ae,F=$e*ft/Fe*Ae;G.projectionMatrix.makePerspective(Rt,R,y,F,Ae,Fe),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function W(G,re){re===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(re.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let re=G.near,me=G.far;S.texture!==null&&(S.depthNear>0&&(re=S.depthNear),S.depthFar>0&&(me=S.depthFar)),E.near=b.near=w.near=re,E.far=b.far=w.far=me,(L!==E.near||V!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,V=E.far),w.layers.mask=G.layers.mask|2,b.layers.mask=G.layers.mask|4,E.layers.mask=w.layers.mask|b.layers.mask;const le=G.parent,Te=E.cameras;W(E,le);for(let je=0;je<Te.length;je++)W(Te[je],le);Te.length===2?N(E,w,b):E.projectionMatrix.copy(w.projectionMatrix),K(G,E,le)};function K(G,re,me){me===null?G.matrix.copy(re.matrixWorld):(G.matrix.copy(me.matrixWorld),G.matrix.invert(),G.matrix.multiply(re.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=zs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let oe=null;function Se(G,re){if(f=re.getViewerPose(u||s),v=re,f!==null){const me=f.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let le=!1;me.length!==E.cameras.length&&(E.cameras.length=0,le=!0);for(let Pe=0;Pe<me.length;Pe++){const ft=me[Pe];let dt=null;if(p!==null)dt=p.getViewport(ft);else{const P=d.getViewSubImage(h,ft);dt=P.viewport,Pe===0&&(e.setRenderTargetTextures(g,P.colorTexture,P.depthStencilTexture),e.setRenderTarget(g))}let $e=T[Pe];$e===void 0&&($e=new wn,$e.layers.enable(Pe),$e.viewport=new Mt,T[Pe]=$e),$e.matrix.fromArray(ft.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ft.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(dt.x,dt.y,dt.width,dt.height),Pe===0&&(E.matrix.copy($e.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),le===!0&&E.cameras.push($e)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Pe=d.getDepthInformation(me[0]);Pe&&Pe.isValid&&Pe.texture&&S.init(e,Pe,r.renderState)}}for(let me=0;me<_.length;me++){const le=x[me],Te=_[me];le!==null&&Te!==void 0&&Te.update(le,re,u||s)}oe&&oe(G,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const Ve=new G_;Ve.setAnimationLoop(Se),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}}const pr=new Ti,fw=new Tt;function dw(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,O_(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,_,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(m,c):c.isMeshToonMaterial?(o(m,c),d(m,c)):c.isMeshPhongMaterial?(o(m,c),f(m,c)):c.isMeshStandardMaterial?(o(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,x)):c.isMeshMatcapMaterial?(o(m,c),v(m,c)):c.isMeshDepthMaterial?o(m,c):c.isMeshDistanceMaterial?(o(m,c),S(m,c)):c.isMeshNormalMaterial?o(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,g,_):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===sn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===sn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c),_=g.envMap,x=g.envMapRotation;_&&(m.envMap.value=_,pr.copy(x),pr.x*=-1,pr.y*=-1,pr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(pr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,_){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=_*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===sn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,c){c.matcap&&(m.matcap.value=c.matcap)}function S(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hw(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const x=_.program;i.uniformBlockBinding(g,x)}function u(g,_){let x=r[g.id];x===void 0&&(v(g),x=f(g),r[g.id]=x,g.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(g,C);const A=e.render.frame;o[g.id]!==A&&(h(g),o[g.id]=A)}function f(g){const _=d();g.__bindingPointIndex=_;const x=t.createBuffer(),C=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function d(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],x=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,w=x.length;A<w;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,E=b.length;T<E;T++){const L=b[T];if(p(L,A,T,C)===!0){const V=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let q=0;q<B.length;q++){const j=B[q],Q=S(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,V+Y,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,x,C){const A=g.value,w=_+"_"+x;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const b=C[w];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return C[w]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function v(g){const _=g.uniforms;let x=0;const C=16;for(let w=0,b=_.length;w<b;w++){const T=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,L=T.length;E<L;E++){const V=T[E],B=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,q=B.length;Y<q;Y++){const j=B[Y],Q=S(j),N=x%C,W=N%Q.boundary,K=N+W;x+=W,K!==0&&C-K<Q.storage&&(x+=C-K),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=Q.storage}}}const A=x%C;return A>0&&(x+=C-A),g.__size=x,g.__cache={},this}function S(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const x=s.indexOf(_.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}class pw{constructor(e={}){const{canvas:n=qy(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const v=new Uint32Array(4),S=new Int32Array(4);let m=null,c=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let C=!1;this._outputColorSpace=En;let A=0,w=0,b=null,T=-1,E=null;const L=new Mt,V=new Mt;let B=null;const Y=new Ke(0);let q=0,j=n.width,Q=n.height,N=1,W=null,K=null;const oe=new Mt(0,0,j,Q),Se=new Mt(0,0,j,Q);let Ve=!1;const G=new B_;let re=!1,me=!1;const le=new Tt,Te=new Tt,je=new k,Pe=new Mt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function $e(){return b===null?N:1}let P=i;function Wt(M,I){return n.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${oh}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",$,!1),P===null){const I="webgl2";if(P=Wt(I,M),P===null)throw Wt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ye,nt,ye,Ge,Ae,Fe,Rt,R,y,F,X,Z,H,Ee,ue,xe,Me,J,he,be,Ce,se,Ne,D;function ce(){Ye=new T2(P),Ye.init(),se=new sw(P,Ye),nt=new v2(P,Ye,e,se),ye=new rw(P,Ye),nt.reverseDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),Ge=new R2(P),Ae=new XT,Fe=new ow(P,Ye,ye,Ae,nt,se,Ge),Rt=new x2(x),R=new M2(x),y=new NS(P),Ne=new m2(P,y),F=new w2(P,y,Ge,Ne),X=new b2(P,F,y,Ge),he=new C2(P,nt,Fe),xe=new _2(Ae),Z=new WT(x,Rt,R,Ye,nt,Ne,xe),H=new dw(x,Ae),Ee=new $T,ue=new JT(Ye),J=new p2(x,Rt,R,ye,X,p,l),Me=new nw(x,X,nt),D=new hw(P,Ge,nt,ye),be=new g2(P,Ye,Ge),Ce=new A2(P,Ye,Ge),Ge.programs=Z.programs,x.capabilities=nt,x.extensions=Ye,x.properties=Ae,x.renderLists=Ee,x.shadowMap=Me,x.state=ye,x.info=Ge}ce();const ee=new cw(x,P);this.xr=ee,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(j,Q,!1))},this.getSize=function(M){return M.set(j,Q)},this.setSize=function(M,I,O=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,Q=I,n.width=Math.floor(M*N),n.height=Math.floor(I*N),O===!0&&(n.style.width=M+"px",n.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(j*N,Q*N).floor()},this.setDrawingBufferSize=function(M,I,O){j=M,Q=I,N=O,n.width=Math.floor(M*O),n.height=Math.floor(I*O),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(oe)},this.setViewport=function(M,I,O,z){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,I,O,z),ye.viewport(L.copy(oe).multiplyScalar(N).round())},this.getScissor=function(M){return M.copy(Se)},this.setScissor=function(M,I,O,z){M.isVector4?Se.set(M.x,M.y,M.z,M.w):Se.set(M,I,O,z),ye.scissor(V.copy(Se).multiplyScalar(N).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(M){ye.setScissorTest(Ve=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,O=!0){let z=0;if(M){let U=!1;if(b!==null){const ie=b.texture.format;U=ie===fh||ie===ch||ie===uh}if(U){const ie=b.texture.type,fe=ie===Mi||ie===Ir||ie===Us||ie===Fs||ie===ah||ie===lh,_e=J.getClearColor(),pe=J.getClearAlpha(),Le=_e.r,De=_e.g,we=_e.b;fe?(v[0]=Le,v[1]=De,v[2]=we,v[3]=pe,P.clearBufferuiv(P.COLOR,0,v)):(S[0]=Le,S[1]=De,S[2]=we,S[3]=pe,P.clearBufferiv(P.COLOR,0,S))}else z|=P.COLOR_BUFFER_BIT}I&&(z|=P.DEPTH_BUFFER_BIT),O&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",$,!1),J.dispose(),Ee.dispose(),ue.dispose(),Ae.dispose(),Rt.dispose(),R.dispose(),X.dispose(),Ne.dispose(),D.dispose(),Z.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Mh),ee.removeEventListener("sessionend",Th),ar.stop()};function ge(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=Ge.autoReset,I=Me.enabled,O=Me.autoUpdate,z=Me.needsUpdate,U=Me.type;ce(),Ge.autoReset=M,Me.enabled=I,Me.autoUpdate=O,Me.needsUpdate=z,Me.type=U}function $(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ve(M){const I=M.target;I.removeEventListener("dispose",ve),Ie(I)}function Ie(M){rt(M),Ae.remove(M)}function rt(M){const I=Ae.get(M).programs;I!==void 0&&(I.forEach(function(O){Z.releaseProgram(O)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,O,z,U,ie){I===null&&(I=ft);const fe=U.isMesh&&U.matrixWorld.determinant()<0,_e=x0(M,I,O,z,U);ye.setMaterial(z,fe);let pe=O.index,Le=1;if(z.wireframe===!0){if(pe=F.getWireframeAttribute(O),pe===void 0)return;Le=2}const De=O.drawRange,we=O.attributes.position;let ze=De.start*Le,Qe=(De.start+De.count)*Le;ie!==null&&(ze=Math.max(ze,ie.start*Le),Qe=Math.min(Qe,(ie.start+ie.count)*Le)),pe!==null?(ze=Math.max(ze,0),Qe=Math.min(Qe,pe.count)):we!=null&&(ze=Math.max(ze,0),Qe=Math.min(Qe,we.count));const xt=Qe-ze;if(xt<0||xt===1/0)return;Ne.setup(U,z,_e,O,pe);let ot,tt=be;if(pe!==null&&(ot=y.get(pe),tt=Ce,tt.setIndex(ot)),U.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*$e()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(U.isLine){let Re=z.linewidth;Re===void 0&&(Re=1),ye.setLineWidth(Re*$e()),U.isLineSegments?tt.setMode(P.LINES):U.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else U.isPoints?tt.setMode(P.POINTS):U.isSprite&&tt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Re=U._multiDrawStarts,ht=U._multiDrawCounts,We=U._multiDrawCount,un=pe?y.get(pe).bytesPerElement:1,kr=Ae.get(z).currentProgram.getUniforms();for(let cn=0;cn<We;cn++)kr.setValue(P,"_gl_DrawID",cn),tt.render(Re[cn]/un,ht[cn])}else if(U.isInstancedMesh)tt.renderInstances(ze,xt,U.count);else if(O.isInstancedBufferGeometry){const Re=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ht=Math.min(O.instanceCount,Re);tt.renderInstances(ze,xt,ht)}else tt.render(ze,xt)};function qe(M,I,O){M.transparent===!0&&M.side===fi&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,ra(M,I,O),M.side=nr,M.needsUpdate=!0,ra(M,I,O),M.side=fi):ra(M,I,O)}this.compile=function(M,I,O=null){O===null&&(O=M),c=ue.get(O),c.init(I),_.push(c),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(c.pushLight(U),U.castShadow&&c.pushShadow(U))}),M!==O&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(c.pushLight(U),U.castShadow&&c.pushShadow(U))}),c.setupLights();const z=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const _e=ie[fe];qe(_e,O,U),z.add(_e)}else qe(ie,O,U),z.add(ie)}),c=_.pop(),z},this.compileAsync=function(M,I,O=null){const z=this.compile(M,I,O);return new Promise(U=>{function ie(){if(z.forEach(function(fe){Ae.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){U(M);return}setTimeout(ie,10)}Ye.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Pn=null;function ni(M){Pn&&Pn(M)}function Mh(){ar.stop()}function Th(){ar.start()}const ar=new G_;ar.setAnimationLoop(ni),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(M){Pn=M,ee.setAnimationLoop(M),M===null?ar.stop():ar.start()},ee.addEventListener("sessionstart",Mh),ee.addEventListener("sessionend",Th),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(I),I=ee.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,b),c=ue.get(M,_.length),c.init(I),_.push(c),Te.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(Te),me=this.localClippingEnabled,re=xe.init(this.clippingPlanes,me),m=Ee.get(M,g.length),m.init(),g.push(m),ee.enabled===!0&&ee.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&xu(ie,I,-1/0,x.sortObjects)}xu(M,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(W,K),dt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,dt&&J.addToRenderList(m,M),this.info.render.frame++,re===!0&&xe.beginShadows();const O=c.state.shadowsArray;Me.render(O,M,I),re===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(c.setupLights(),I.isArrayCamera){const ie=I.cameras;if(U.length>0)for(let fe=0,_e=ie.length;fe<_e;fe++){const pe=ie[fe];Ah(z,U,M,pe)}dt&&J.render(M);for(let fe=0,_e=ie.length;fe<_e;fe++){const pe=ie[fe];wh(m,M,pe,pe.viewport)}}else U.length>0&&Ah(z,U,M,I),dt&&J.render(M),wh(m,M,I);b!==null&&w===0&&(Fe.updateMultisampleRenderTarget(b),Fe.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(x,M,I),Ne.resetDefaultState(),T=-1,E=null,_.pop(),_.length>0?(c=_[_.length-1],re===!0&&xe.setGlobalState(x.clippingPlanes,c.state.camera)):c=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function xu(M,I,O,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)c.pushLight(M),M.castShadow&&c.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||G.intersectsSprite(M)){z&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const fe=X.update(M),_e=M.material;_e.visible&&m.push(M,fe,_e,O,Pe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||G.intersectsObject(M))){const fe=X.update(M),_e=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Pe.copy(fe.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(Te)),Array.isArray(_e)){const pe=fe.groups;for(let Le=0,De=pe.length;Le<De;Le++){const we=pe[Le],ze=_e[we.materialIndex];ze&&ze.visible&&m.push(M,fe,ze,O,Pe.z,we)}}else _e.visible&&m.push(M,fe,_e,O,Pe.z,null)}}const ie=M.children;for(let fe=0,_e=ie.length;fe<_e;fe++)xu(ie[fe],I,O,z)}function wh(M,I,O,z){const U=M.opaque,ie=M.transmissive,fe=M.transparent;c.setupLightsView(O),re===!0&&xe.setGlobalState(x.clippingPlanes,O),z&&ye.viewport(L.copy(z)),U.length>0&&ia(U,I,O),ie.length>0&&ia(ie,I,O),fe.length>0&&ia(fe,I,O),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ah(M,I,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[z.id]===void 0&&(c.state.transmissionRenderTarget[z.id]=new Ur(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Xs:Mi,minFilter:Ar,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ie=c.state.transmissionRenderTarget[z.id],fe=z.viewport||L;ie.setSize(fe.z*x.transmissionResolutionScale,fe.w*x.transmissionResolutionScale);const _e=x.getRenderTarget(),pe=x.getActiveCubeFace(),Le=x.getActiveMipmapLevel();x.setRenderTarget(ie),x.getClearColor(Y),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),dt&&J.render(O);const De=x.toneMapping;x.toneMapping=Qi;const we=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),c.setupLightsView(z),re===!0&&xe.setGlobalState(x.clippingPlanes,z),ia(M,O,z),Fe.updateMultisampleRenderTarget(ie),Fe.updateRenderTargetMipmap(ie),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Qe=0,xt=I.length;Qe<xt;Qe++){const ot=I[Qe],tt=ot.object,Re=ot.geometry,ht=ot.material,We=ot.group;if(ht.side===fi&&tt.layers.test(z.layers)){const un=ht.side;ht.side=sn,ht.needsUpdate=!0,Rh(tt,O,z,Re,ht,We),ht.side=un,ht.needsUpdate=!0,ze=!0}}ze===!0&&(Fe.updateMultisampleRenderTarget(ie),Fe.updateRenderTargetMipmap(ie))}x.setRenderTarget(_e,pe,Le),x.setClearColor(Y,q),we!==void 0&&(z.viewport=we),x.toneMapping=De}function ia(M,I,O){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ie=M.length;U<ie;U++){const fe=M[U],_e=fe.object,pe=fe.geometry,Le=fe.group;let De=fe.material;De.allowOverride===!0&&z!==null&&(De=z),_e.layers.test(O.layers)&&Rh(_e,I,O,pe,De,Le)}}function Rh(M,I,O,z,U,ie){M.onBeforeRender(x,I,O,z,U,ie),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,I,O,z,M,ie),U.transparent===!0&&U.side===fi&&U.forceSinglePass===!1?(U.side=sn,U.needsUpdate=!0,x.renderBufferDirect(O,I,z,U,M,ie),U.side=nr,U.needsUpdate=!0,x.renderBufferDirect(O,I,z,U,M,ie),U.side=fi):x.renderBufferDirect(O,I,z,U,M,ie),M.onAfterRender(x,I,O,z,U,ie)}function ra(M,I,O){I.isScene!==!0&&(I=ft);const z=Ae.get(M),U=c.state.lights,ie=c.state.shadowsArray,fe=U.state.version,_e=Z.getParameters(M,U.state,ie,I,O),pe=Z.getProgramCacheKey(_e);let Le=z.programs;z.environment=M.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(M.isMeshStandardMaterial?R:Rt).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",ve),Le=new Map,z.programs=Le);let De=Le.get(pe);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===fe)return bh(M,_e),De}else _e.uniforms=Z.getUniforms(M),M.onBeforeCompile(_e,x),De=Z.acquireProgram(_e,pe),Le.set(pe,De),z.uniforms=_e.uniforms;const we=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=xe.uniform),bh(M,_e),z.needsLights=S0(M),z.lightsStateVersion=fe,z.needsLights&&(we.ambientLightColor.value=U.state.ambient,we.lightProbe.value=U.state.probe,we.directionalLights.value=U.state.directional,we.directionalLightShadows.value=U.state.directionalShadow,we.spotLights.value=U.state.spot,we.spotLightShadows.value=U.state.spotShadow,we.rectAreaLights.value=U.state.rectArea,we.ltc_1.value=U.state.rectAreaLTC1,we.ltc_2.value=U.state.rectAreaLTC2,we.pointLights.value=U.state.point,we.pointLightShadows.value=U.state.pointShadow,we.hemisphereLights.value=U.state.hemi,we.directionalShadowMap.value=U.state.directionalShadowMap,we.directionalShadowMatrix.value=U.state.directionalShadowMatrix,we.spotShadowMap.value=U.state.spotShadowMap,we.spotLightMatrix.value=U.state.spotLightMatrix,we.spotLightMap.value=U.state.spotLightMap,we.pointShadowMap.value=U.state.pointShadowMap,we.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function Ch(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=ml.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function bh(M,I){const O=Ae.get(M);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function x0(M,I,O,z,U){I.isScene!==!0&&(I=ft),Fe.resetTextureUnits();const ie=I.fog,fe=z.isMeshStandardMaterial?I.environment:null,_e=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Io,pe=(z.isMeshStandardMaterial?R:Rt).get(z.envMap||fe),Le=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,De=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!O.morphAttributes.position,ze=!!O.morphAttributes.normal,Qe=!!O.morphAttributes.color;let xt=Qi;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(xt=x.toneMapping);const ot=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tt=ot!==void 0?ot.length:0,Re=Ae.get(z),ht=c.state.lights;if(re===!0&&(me===!0||M!==E)){const Xt=M===E&&z.id===T;xe.setState(z,M,Xt)}let We=!1;z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ht.state.version||Re.outputColorSpace!==_e||U.isBatchedMesh&&Re.batching===!1||!U.isBatchedMesh&&Re.batching===!0||U.isBatchedMesh&&Re.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Re.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Re.instancing===!1||!U.isInstancedMesh&&Re.instancing===!0||U.isSkinnedMesh&&Re.skinning===!1||!U.isSkinnedMesh&&Re.skinning===!0||U.isInstancedMesh&&Re.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Re.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Re.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Re.instancingMorph===!1&&U.morphTexture!==null||Re.envMap!==pe||z.fog===!0&&Re.fog!==ie||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==xe.numPlanes||Re.numIntersection!==xe.numIntersection)||Re.vertexAlphas!==Le||Re.vertexTangents!==De||Re.morphTargets!==we||Re.morphNormals!==ze||Re.morphColors!==Qe||Re.toneMapping!==xt||Re.morphTargetsCount!==tt)&&(We=!0):(We=!0,Re.__version=z.version);let un=Re.currentProgram;We===!0&&(un=ra(z,I,U));let kr=!1,cn=!1,Go=!1;const lt=un.getUniforms(),xn=Re.uniforms;if(ye.useProgram(un.program)&&(kr=!0,cn=!0,Go=!0),z.id!==T&&(T=z.id,cn=!0),kr||E!==M){ye.buffers.depth.getReversed()?(le.copy(M.projectionMatrix),Zy(le),Qy(le),lt.setValue(P,"projectionMatrix",le)):lt.setValue(P,"projectionMatrix",M.projectionMatrix),lt.setValue(P,"viewMatrix",M.matrixWorldInverse);const Jt=lt.map.cameraPosition;Jt!==void 0&&Jt.setValue(P,je.setFromMatrixPosition(M.matrixWorld)),nt.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,cn=!0,Go=!0)}if(U.isSkinnedMesh){lt.setOptional(P,U,"bindMatrix"),lt.setOptional(P,U,"bindMatrixInverse");const Xt=U.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),lt.setValue(P,"boneTexture",Xt.boneTexture,Fe))}U.isBatchedMesh&&(lt.setOptional(P,U,"batchingTexture"),lt.setValue(P,"batchingTexture",U._matricesTexture,Fe),lt.setOptional(P,U,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",U._indirectTexture,Fe),lt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",U._colorsTexture,Fe));const yn=O.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&he.update(U,O,un),(cn||Re.receiveShadow!==U.receiveShadow)&&(Re.receiveShadow=U.receiveShadow,lt.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(xn.envMap.value=pe,xn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(xn.envMapIntensity.value=I.environmentIntensity),cn&&(lt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&y0(xn,Go),ie&&z.fog===!0&&H.refreshFogUniforms(xn,ie),H.refreshMaterialUniforms(xn,z,N,Q,c.state.transmissionRenderTarget[M.id]),ml.upload(P,Ch(Re),xn,Fe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ml.upload(P,Ch(Re),xn,Fe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(P,"center",U.center),lt.setValue(P,"modelViewMatrix",U.modelViewMatrix),lt.setValue(P,"normalMatrix",U.normalMatrix),lt.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Xt=z.uniformsGroups;for(let Jt=0,yu=Xt.length;Jt<yu;Jt++){const lr=Xt[Jt];D.update(lr,un),D.bind(lr,un)}}return un}function y0(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function S0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,I,O){const z=Ae.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ae.get(M.texture).__webglTexture=I,Ae.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:O,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const O=Ae.get(M);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0};const E0=P.createFramebuffer();this.setRenderTarget=function(M,I=0,O=0){b=M,A=I,w=O;let z=!0,U=null,ie=!1,fe=!1;if(M){const pe=Ae.get(M);if(pe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(pe.__webglFramebuffer===void 0)Fe.setupRenderTarget(M);else if(pe.__hasExternalTextures)Fe.rebindTextures(M,Ae.get(M.texture).__webglTexture,Ae.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const we=M.depthTexture;if(pe.__boundDepthTexture!==we){if(we!==null&&Ae.has(we)&&(M.width!==we.image.width||M.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);const De=Ae.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[I])?U=De[I][O]:U=De[I],ie=!0):M.samples>0&&Fe.useMultisampledRTT(M)===!1?U=Ae.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[O]:U=De,L.copy(M.viewport),V.copy(M.scissor),B=M.scissorTest}else L.copy(oe).multiplyScalar(N).floor(),V.copy(Se).multiplyScalar(N).floor(),B=Ve;if(O!==0&&(U=E0),ye.bindFramebuffer(P.FRAMEBUFFER,U)&&z&&ye.drawBuffers(M,U),ye.viewport(L),ye.scissor(V),ye.setScissorTest(B),ie){const pe=Ae.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,O)}else if(fe){const pe=Ae.get(M.texture),Le=I;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,pe.__webglTexture,O,Le)}else if(M!==null&&O!==0){const pe=Ae.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pe.__webglTexture,O)}T=-1},this.readRenderTargetPixels=function(M,I,O,z,U,ie,fe,_e=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(pe=pe[fe]),pe){ye.bindFramebuffer(P.FRAMEBUFFER,pe);try{const Le=M.textures[_e],De=Le.format,we=Le.type;if(!nt.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&O>=0&&O<=M.height-U&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+_e),P.readPixels(I,O,z,U,se.convert(De),se.convert(we),ie))}finally{const Le=b!==null?Ae.get(b).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,I,O,z,U,ie,fe,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(pe=pe[fe]),pe)if(I>=0&&I<=M.width-z&&O>=0&&O<=M.height-U){ye.bindFramebuffer(P.FRAMEBUFFER,pe);const Le=M.textures[_e],De=Le.format,we=Le.type;if(!nt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+_e),P.readPixels(I,O,z,U,se.convert(De),se.convert(we),0);const Qe=b!==null?Ae.get(b).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Qe);const xt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ky(P,xt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(ze),P.deleteSync(xt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,O=0){const z=Math.pow(2,-O),U=Math.floor(M.image.width*z),ie=Math.floor(M.image.height*z),fe=I!==null?I.x:0,_e=I!==null?I.y:0;Fe.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,fe,_e,U,ie),ye.unbindTexture()};const M0=P.createFramebuffer(),T0=P.createFramebuffer();this.copyTextureToTexture=function(M,I,O=null,z=null,U=0,ie=null){ie===null&&(U!==0?(Eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=U,U=0):ie=0);let fe,_e,pe,Le,De,we,ze,Qe,xt;const ot=M.isCompressedTexture?M.mipmaps[ie]:M.image;if(O!==null)fe=O.max.x-O.min.x,_e=O.max.y-O.min.y,pe=O.isBox3?O.max.z-O.min.z:1,Le=O.min.x,De=O.min.y,we=O.isBox3?O.min.z:0;else{const yn=Math.pow(2,-U);fe=Math.floor(ot.width*yn),_e=Math.floor(ot.height*yn),M.isDataArrayTexture?pe=ot.depth:M.isData3DTexture?pe=Math.floor(ot.depth*yn):pe=1,Le=0,De=0,we=0}z!==null?(ze=z.x,Qe=z.y,xt=z.z):(ze=0,Qe=0,xt=0);const tt=se.convert(I.format),Re=se.convert(I.type);let ht;I.isData3DTexture?(Fe.setTexture3D(I,0),ht=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Fe.setTexture2DArray(I,0),ht=P.TEXTURE_2D_ARRAY):(Fe.setTexture2D(I,0),ht=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const We=P.getParameter(P.UNPACK_ROW_LENGTH),un=P.getParameter(P.UNPACK_IMAGE_HEIGHT),kr=P.getParameter(P.UNPACK_SKIP_PIXELS),cn=P.getParameter(P.UNPACK_SKIP_ROWS),Go=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we);const lt=M.isDataArrayTexture||M.isData3DTexture,xn=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const yn=Ae.get(M),Xt=Ae.get(I),Jt=Ae.get(yn.__renderTarget),yu=Ae.get(Xt.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Jt.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,yu.__webglFramebuffer);for(let lr=0;lr<pe;lr++)lt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.get(M).__webglTexture,U,we+lr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.get(I).__webglTexture,ie,xt+lr)),P.blitFramebuffer(Le,De,fe,_e,ze,Qe,fe,_e,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||Ae.has(M)){const yn=Ae.get(M),Xt=Ae.get(I);ye.bindFramebuffer(P.READ_FRAMEBUFFER,M0),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,T0);for(let Jt=0;Jt<pe;Jt++)lt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yn.__webglTexture,U,we+Jt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yn.__webglTexture,U),xn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Xt.__webglTexture,ie,xt+Jt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xt.__webglTexture,ie),U!==0?P.blitFramebuffer(Le,De,fe,_e,ze,Qe,fe,_e,P.COLOR_BUFFER_BIT,P.NEAREST):xn?P.copyTexSubImage3D(ht,ie,ze,Qe,xt+Jt,Le,De,fe,_e):P.copyTexSubImage2D(ht,ie,ze,Qe,Le,De,fe,_e);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else xn?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(ht,ie,ze,Qe,xt,fe,_e,pe,tt,Re,ot.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(ht,ie,ze,Qe,xt,fe,_e,pe,tt,ot.data):P.texSubImage3D(ht,ie,ze,Qe,xt,fe,_e,pe,tt,Re,ot):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ie,ze,Qe,fe,_e,tt,Re,ot.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ie,ze,Qe,ot.width,ot.height,tt,ot.data):P.texSubImage2D(P.TEXTURE_2D,ie,ze,Qe,fe,_e,tt,Re,ot);P.pixelStorei(P.UNPACK_ROW_LENGTH,We),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,un),P.pixelStorei(P.UNPACK_SKIP_PIXELS,kr),P.pixelStorei(P.UNPACK_SKIP_ROWS,cn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Go),ie===0&&I.generateMipmaps&&P.generateMipmap(ht),ye.unbindTexture()},this.copyTextureToTexture3D=function(M,I,O=null,z=null,U=0){return Eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,O,z,U)},this.initRenderTarget=function(M){Ae.get(M).__webglFramebuffer===void 0&&Fe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Fe.setTextureCube(M,0):M.isData3DTexture?Fe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Fe.setTexture2DArray(M,0):Fe.setTexture2D(M,0),ye.unbindTexture()},this.resetState=function(){A=0,w=0,b=null,ye.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}const mw=()=>{const t=Gn.useRef(null);return Gn.useEffect(()=>{const e=t.current,n=new MS,i=new wn(75,e.clientWidth/e.clientHeight,.1,1e3),r=new pw({alpha:!0});r.setSize(e.clientWidth,e.clientHeight),e.appendChild(r.domElement);const o=new Ai,s=1e3,a=[];for(let d=0;d<s;d++){const h=Yu.randFloatSpread(600),p=Yu.randFloatSpread(600),v=Yu.randFloatSpread(600);a.push(h,p,v)}o.setAttribute("position",new Ji(a,3));const l=new H_({color:16777215}),u=new RS(o,l);n.add(u),i.position.z=5;const f=()=>{requestAnimationFrame(f),r.render(n,i)};return f(),()=>{e.removeChild(r.domElement)}},[]),React.createElement("section",{id:"hero",className:"relative h-screen bg-black text-white flex items-center justify-center overflow-hidden"},React.createElement("div",{ref:t,className:"absolute top-0 left-0 w-full h-full -z-10"}),React.createElement("div",{className:"container mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4"},React.createElement("div",{className:"flex-shrink-0 flex justify-center md:justify-end w-full md:w-1/2 mb-8 md:mb-0"},React.createElement("div",{className:"relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center shadow-lg",style:{background:"radial-gradient(circle at center, #ff3131 60%, #000 100%)"}},React.createElement("img",{src:"/src/assets/WhatsApp Image 2025-07-21 at 17.38.43_df50f27d.jpg",alt:"Profile",className:"w-56 h-56 object-cover rounded-full border-4 border-neon-pink shadow-neon-pink"}))),React.createElement("div",{className:"flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left"},React.createElement("h1",{className:"text-5xl font-bold mb-2"},"Hi, It's ",React.createElement("span",{className:"text-neon-pink"},"Alex")),React.createElement("h2",{className:"text-3xl font-semibold mb-4"},"I'm a ",React.createElement("span",{className:"text-neon-cyan"},"Web Developer")),React.createElement("p",{className:"text-lg mb-6 max-w-md"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eaque quasi veritatis illum placeat natus, laudantium temporibus voluptatum sint voluptatibus ad vitae ullam sequi velit molestiae voluptate est porro nostrum eveniet culpa?"),React.createElement("div",{className:"flex gap-4 mb-6"},React.createElement("a",{href:"#contact",className:"bg-neon-pink px-6 py-2 rounded-full text-white hover:scale-105 transition"},"Hire Me"),React.createElement("a",{href:"#projects",className:"border border-neon-pink px-6 py-2 rounded-full hover:bg-neon-pink hover:text-white transition"},"View Projects")),React.createElement("div",{className:"flex gap-4 text-2xl"},React.createElement("a",{href:"https://www.linkedin.com/in/ratul-banik1204/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-neon-pink transition"},"in"),React.createElement("a",{href:"https://github.com/rbanik1204",target:"_blank",rel:"noopener noreferrer",className:"hover:text-neon-pink transition"},"gh"),React.createElement("a",{href:"#",className:"hover:text-neon-pink transition"},"ig"),React.createElement("a",{href:"#",className:"hover:text-neon-pink transition"},"x")))))},gw=()=>React.createElement("section",{id:"about",className:"min-h-screen bg-gray-900 text-white p-8"},React.createElement("h2",{className:"text-4xl font-bold mb-6 text-center"},"About Me"),React.createElement("div",{className:"grid md:grid-cols-3 gap-6"},React.createElement("div",{className:"bg-white/10 p-4 rounded-xl shadow-md"},React.createElement("h3",{className:"text-xl font-semibold mb-2"},"Education"),React.createElement("p",null,"B.Tech in Computer Science (Final Year) – Passionate about AI/ML & Web Dev.")),React.createElement("div",{className:"bg-white/10 p-4 rounded-xl shadow-md"},React.createElement("h3",{className:"text-xl font-semibold mb-2"},"Skills Summary"),React.createElement("p",null,"AI/ML, React.js, Tailwind CSS, Python, C, Django, SQL, Git")),React.createElement("div",{className:"bg-white/10 p-4 rounded-xl shadow-md"},React.createElement("h3",{className:"text-xl font-semibold mb-2"},"Hobbies"),React.createElement("p",null,"Tech blogging, Hackathons, Designing futuristic UIs, Coding challenges"))));var Y_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Om=Zn.createContext&&Zn.createContext(Y_),vw=["attr","size","title"];function _w(t,e){if(t==null)return{};var n=xw(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function xw(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function Wl(){return Wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Wl.apply(this,arguments)}function km(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Xl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?km(Object(n),!0).forEach(function(i){yw(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):km(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function yw(t,e,n){return e=Sw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Sw(t){var e=Ew(t,"string");return typeof e=="symbol"?e:e+""}function Ew(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function q_(t){return t&&t.map((e,n)=>Zn.createElement(e.tag,Xl({key:n},e.attr),q_(e.child)))}function Qt(t){return e=>Zn.createElement(Mw,Wl({attr:Xl({},t.attr)},e),q_(t.child))}function Mw(t){var e=n=>{var{attr:i,size:r,title:o}=t,s=_w(t,vw),a=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Zn.createElement("svg",Wl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:l,style:Xl(Xl({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Zn.createElement("title",null,o),t.children)};return Om!==void 0?Zn.createElement(Om.Consumer,null,n=>e(n)):e(Y_)}function Tw(t){return Qt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function ww(t){return Qt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(t)}function Aw(t){return Qt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(t)}function Rw(t){return Qt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(t)}function Cw(t){return Qt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"},child:[]}]})(t)}function K_(t){return Qt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(t)}function bw(t){return Qt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(t)}function Pw(t){return Qt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(t)}function Lw(t){return Qt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(t)}function Dw(t){return Qt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"},child:[]}]})(t)}function Nw(t){return Qt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"},child:[]}]})(t)}function Iw(t){return Qt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"},child:[]}]})(t)}function Uw(t){return Qt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"},child:[]}]})(t)}function Fw(t){return Qt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"},child:[]}]})(t)}function Ow(t){return Qt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(t)}const kw=[{icon:React.createElement(Aw,null),name:"Python"},{icon:React.createElement(ww,null),name:"Java"},{icon:React.createElement(Iw,null),name:"C"},{icon:React.createElement(Fw,null),name:"SQL"},{icon:React.createElement(Uw,null),name:"Django"},{icon:React.createElement(Rw,null),name:"React.js"},{icon:React.createElement(Ow,null),name:"Tailwind CSS"}],zw=()=>React.createElement("section",{id:"skills",className:"min-h-[400px] bg-black text-white p-8"},React.createElement("h2",{className:"text-4xl font-bold mb-6 text-center"},"Skills"),React.createElement("div",{className:"flex flex-wrap justify-center gap-6 text-5xl"},kw.map((t,e)=>React.createElement("div",{key:e,className:"flex flex-col items-center hover:text-neon-pink transition"},t.icon,React.createElement("span",{className:"text-base mt-2"},t.name))))),Bw=[{title:"Smart Waste Segregator",description:"An AI-powered system using sensors to segregate dry, wet, and metallic waste with live monitoring.",tech:["Arduino","TensorFlow","React","IoT"],github:"https://github.com/yourusername/waste-segregator",live:""},{title:"Personal Portfolio",description:"A 3D animated, neon-themed portfolio built with React, Three.js and Tailwind CSS.",tech:["React","Three.js","Tailwind"],github:"https://github.com/yourusername/portfolio",live:"https://ratulbanik.vercel.app"},{title:"AI Help Bot",description:"An AI chatbot that helps students with career guidance using OpenAI and Node.js backend.",tech:["OpenAI","React","Node.js"],github:"https://github.com/yourusername/ai-help-bot",live:""}],Hw=()=>React.createElement("section",{id:"projects",className:"min-h-screen bg-black text-white px-6 py-20"},React.createElement("h2",{className:"text-4xl font-bold text-neon-cyan text-center mb-10"},React.createElement(K_,{className:"inline-block mr-3 text-neon-pink animate-pulse"}),"Projects"),React.createElement("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-10"},Bw.map((t,e)=>React.createElement("div",{key:e,className:"bg-[#111] border border-neon-pink rounded-xl p-6 shadow-xl hover:shadow-neon-pink/50 transition-all duration-300"},React.createElement("h3",{className:"text-2xl font-semibold text-neon-green mb-2"},t.title),React.createElement("p",{className:"text-sm text-gray-300 mb-4"},t.description),React.createElement("div",{className:"flex flex-wrap gap-2 mb-4"},t.tech.map((n,i)=>React.createElement("span",{key:i,className:"bg-neon-green/20 text-neon-green text-xs px-2 py-1 rounded-full"},n))),React.createElement("div",{className:"flex gap-4 text-neon-cyan text-xl"},t.github&&React.createElement("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"hover:text-neon-pink transition"},React.createElement(Tw,null)),t.live&&React.createElement("a",{href:t.live,target:"_blank",rel:"noopener noreferrer",className:"hover:text-neon-pink transition"},React.createElement(Pw,null))))))),Vw=()=>React.createElement("section",{id:"resume",className:"min-h-screen flex flex-col justify-center items-center p-8 bg-black text-white"},React.createElement("h2",{className:"text-4xl font-bold mb-6 text-neon-cyan"},"📄 Resume"),React.createElement("p",{className:"text-center max-w-xl text-lg mb-6"},"Here you can download or view my resume. It highlights my technical skills, education, and experience in web development and AI/ML."),React.createElement("div",{className:"flex gap-4"},React.createElement("a",{href:"/src/assets/resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"bg-neon-green px-6 py-3 rounded-lg text-black font-semibold hover:scale-105 transition"},"Download Resume"),React.createElement("a",{href:"/src/assets/resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"border border-neon-green px-6 py-3 rounded-lg text-neon-green font-semibold hover:bg-neon-green hover:text-black transition"},"View Online"))),Gw=()=>{const[t,e]=Gn.useState({name:"",email:"",message:""}),n=r=>{e({...t,[r.target.name]:r.target.value})},i=r=>{r.preventDefault(),alert("Message sent! (This is a mock submission)"),e({name:"",email:"",message:""})};return React.createElement("section",{id:"contact",className:"min-h-screen flex flex-col justify-center items-center p-8 bg-black text-white"},React.createElement("h2",{className:"text-4xl font-bold mb-8 text-neon-green"},"Let's Connect"),React.createElement("form",{onSubmit:i,className:"w-full max-w-lg space-y-6"},React.createElement("input",{className:"w-full p-3 rounded-lg bg-gray-800 text-white border border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green",type:"text",name:"name",placeholder:"Your Name",value:t.name,onChange:n,required:!0}),React.createElement("input",{className:"w-full p-3 rounded-lg bg-gray-800 text-white border border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green",type:"email",name:"email",placeholder:"Your Email",value:t.email,onChange:n,required:!0}),React.createElement("textarea",{className:"w-full p-3 rounded-lg bg-gray-800 text-white border border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green",name:"message",placeholder:"Your Message",rows:"6",value:t.message,onChange:n,required:!0}),React.createElement("button",{type:"submit",className:"w-full bg-neon-green text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transition duration-200"},"✉️ Send Message"),React.createElement("div",{className:"flex justify-center gap-6 mt-4 text-2xl"},React.createElement("a",{href:"https://www.linkedin.com/in/ratul-banik/",target:"_blank",rel:"noreferrer",className:"hover:text-neon-pink transition"},"🔗 LinkedIn"),React.createElement("a",{href:"https://discord.com/",target:"_blank",rel:"noreferrer",className:"hover:text-neon-pink transition"},"💬 Discord"))))};var yt={},mh={},Ks={},Zs={},Z_="Expected a function",zm=NaN,Ww="[object Symbol]",Xw=/^\s+|\s+$/g,jw=/^[-+]0x[0-9a-f]+$/i,$w=/^0b[01]+$/i,Yw=/^0o[0-7]+$/i,qw=parseInt,Kw=typeof oa=="object"&&oa&&oa.Object===Object&&oa,Zw=typeof self=="object"&&self&&self.Object===Object&&self,Qw=Kw||Zw||Function("return this")(),Jw=Object.prototype,e3=Jw.toString,t3=Math.max,n3=Math.min,Mc=function(){return Qw.Date.now()};function i3(t,e,n){var i,r,o,s,a,l,u=0,f=!1,d=!1,h=!0;if(typeof t!="function")throw new TypeError(Z_);e=Bm(e)||0,jl(n)&&(f=!!n.leading,d="maxWait"in n,o=d?t3(Bm(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h);function p(A){var w=i,b=r;return i=r=void 0,u=A,s=t.apply(b,w),s}function v(A){return u=A,a=setTimeout(c,e),f?p(A):s}function S(A){var w=A-l,b=A-u,T=e-w;return d?n3(T,o-b):T}function m(A){var w=A-l,b=A-u;return l===void 0||w>=e||w<0||d&&b>=o}function c(){var A=Mc();if(m(A))return g(A);a=setTimeout(c,S(A))}function g(A){return a=void 0,h&&i?p(A):(i=r=void 0,s)}function _(){a!==void 0&&clearTimeout(a),u=0,i=l=r=a=void 0}function x(){return a===void 0?s:g(Mc())}function C(){var A=Mc(),w=m(A);if(i=arguments,r=this,l=A,w){if(a===void 0)return v(l);if(d)return a=setTimeout(c,e),p(l)}return a===void 0&&(a=setTimeout(c,e)),s}return C.cancel=_,C.flush=x,C}function r3(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(Z_);return jl(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),i3(t,e,{leading:i,maxWait:e,trailing:r})}function jl(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function o3(t){return!!t&&typeof t=="object"}function s3(t){return typeof t=="symbol"||o3(t)&&e3.call(t)==Ww}function Bm(t){if(typeof t=="number")return t;if(s3(t))return zm;if(jl(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=jl(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Xw,"");var n=$w.test(t);return n||Yw.test(t)?qw(t.slice(2),n?2:8):jw.test(t)?zm:+t}var a3=r3,Qs={};Object.defineProperty(Qs,"__esModule",{value:!0});Qs.addPassiveEventListener=function(e,n,i){var r=i.name;r||(r=n,console.warn("Listener must be a named function.")),gl.has(n)||gl.set(n,new Set);var o=gl.get(n);if(!o.has(r)){var s=function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,l)}catch{}return a}();e.addEventListener(n,i,s?{passive:!0}:!1),o.add(r)}};Qs.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),gl.get(n).delete(i.name||n)};var gl=new Map;Object.defineProperty(Zs,"__esModule",{value:!0});var l3=a3,u3=c3(l3),Hm=Qs;function c3(t){return t&&t.__esModule?t:{default:t}}var f3=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,u3.default)(e,n)},pt={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=f3(function(r){pt.scrollHandler(e)},n);return pt.scrollSpyContainers.push(e),(0,Hm.addPassiveEventListener)(e,"scroll",i),function(){(0,Hm.removePassiveEventListener)(e,"scroll",i),pt.scrollSpyContainers.splice(pt.scrollSpyContainers.indexOf(e),1)}}return function(){}},isMounted:function(e){return pt.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.scrollY!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.scrollX:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.scrollX!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.scrollY:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=pt.scrollSpyContainers[pt.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(pt.currentPositionX(e),pt.currentPositionY(e))})},addStateHandler:function(e){pt.spySetState.push(e)},addSpyHandler:function(e,n){var i=pt.scrollSpyContainers[pt.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e)},updateStates:function(){pt.spySetState.forEach(function(e){return e()})},unmount:function(e,n){pt.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),pt.spySetState&&pt.spySetState.length&&pt.spySetState.indexOf(e)>-1&&pt.spySetState.splice(pt.spySetState.indexOf(e),1),document.removeEventListener("scroll",pt.scrollHandler)},update:function(){return pt.scrollSpyContainers.forEach(function(e){return pt.scrollHandler(e)})}};Zs.default=pt;var Vo={},Js={};Object.defineProperty(Js,"__esModule",{value:!0});var d3=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",o=window&&window.location,s=r?o.pathname+o.search+r:o.pathname+o.search;n?history.pushState(history.state,"",s):history.replaceState(history.state,"",s)},h3=function(){return window.location.hash.replace(/^#/,"")},p3=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},m3=function(e){return getComputedStyle(e).position!=="static"},Tc=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},g3=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(m3(e)){if(n.offsetParent!==e){var r=function(f){return f===e||f===document},o=Tc(n,r),s=o.offsetTop,a=o.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return s}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(f){return f===document};return Tc(n,l).offsetTop-Tc(e,l).offsetTop};Js.default={updateHash:d3,getHash:h3,filterElementInContainer:p3,scrollOffset:g3};var du={},gh={};Object.defineProperty(gh,"__esModule",{value:!0});gh.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var vh={};Object.defineProperty(vh,"__esModule",{value:!0});var v3=Qs,_3=["mousedown","wheel","touchmove","keydown"];vh.default={subscribe:function(e){return typeof document<"u"&&_3.forEach(function(n){return(0,v3.addPassiveEventListener)(document,n,e)})}};var ea={};Object.defineProperty(ea,"__esModule",{value:!0});var ud={registered:{},scrollEvent:{register:function(e,n){ud.registered[e]=n},remove:function(e){ud.registered[e]=null}}};ea.default=ud;Object.defineProperty(du,"__esModule",{value:!0});var x3=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},y3=Js;hu(y3);var S3=gh,Vm=hu(S3),E3=vh,M3=hu(E3),T3=ea,Yn=hu(T3);function hu(t){return t&&t.__esModule?t:{default:t}}var Q_=function(e){return Vm.default[e.smooth]||Vm.default.defaultEasing},w3=function(e){return typeof e=="function"?e:function(){return e}},A3=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},cd=function(){return A3()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),J_=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},e0=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},t0=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},R3=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},C3=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},b3=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){Yn.default.registered.end&&Yn.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var o=t.bind(null,e,n);cd.call(window,o);return}Yn.default.registered.end&&Yn.default.registered.end(r.to,r.target,r.currentPosition)},_h=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},ta=function(e,n,i,r){n.data=n.data||J_(),window.clearTimeout(n.data.delayTimeout);var o=function(){n.data.cancel=!0};if(M3.default.subscribe(o),_h(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?e0(n):t0(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Yn.default.registered.end&&Yn.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=w3(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var s=Q_(n),a=b3.bind(null,s,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Yn.default.registered.begin&&Yn.default.registered.begin(n.data.to,n.data.target),cd.call(window,a)},n.delay);return}Yn.default.registered.begin&&Yn.default.registered.begin(n.data.to,n.data.target),cd.call(window,a)},pu=function(e){return e=x3({},e),e.data=e.data||J_(),e.absolute=!0,e},P3=function(e){ta(0,pu(e))},L3=function(e,n){ta(e,pu(n))},D3=function(e){e=pu(e),_h(e),ta(e.horizontal?R3(e):C3(e),e)},N3=function(e,n){n=pu(n),_h(n);var i=n.horizontal?e0(n):t0(n);ta(e+i,n)};du.default={animateTopScroll:ta,getAnimationType:Q_,scrollToTop:P3,scrollToBottom:D3,scrollTo:L3,scrollMore:N3};Object.defineProperty(Vo,"__esModule",{value:!0});var I3=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},U3=Js,F3=xh(U3),O3=du,k3=xh(O3),z3=ea,$a=xh(z3);function xh(t){return t&&t.__esModule?t:{default:t}}var Ya={},Gm=void 0;Vo.default={unmount:function(){Ya={}},register:function(e,n){Ya[e]=n},unregister:function(e){delete Ya[e]},get:function(e){return Ya[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return Gm=e},getActiveLink:function(){return Gm},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=I3({},n,{absolute:!1});var r=n.containerId,o=n.container,s=void 0;r?s=document.getElementById(r):o&&o.nodeType?s=o:s=document,n.absolute=!0;var a=n.horizontal,l=F3.default.scrollOffset(s,i,a)+(n.offset||0);if(!n.smooth){$a.default.registered.begin&&$a.default.registered.begin(e,i),s===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):s.scrollTop=l,$a.default.registered.end&&$a.default.registered.end(e,i);return}k3.default.animateTopScroll(l,n,e,i)}};var n0={exports:{}},B3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H3=B3,V3=H3;function i0(){}function r0(){}r0.resetWarningCache=i0;var G3=function(){function t(i,r,o,s,a,l){if(l!==V3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r0,resetWarningCache:i0};return n.PropTypes=n,n};n0.exports=G3();var mu=n0.exports,gu={};Object.defineProperty(gu,"__esModule",{value:!0});var W3=Js,wc=X3(W3);function X3(t){return t&&t.__esModule?t:{default:t}}var j3={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var o=this.containers[e]||document;i.scrollTo(e,{container:o})}},getHash:function(){return wc.default.getHash()},changeHash:function(e,n){this.isInitialized()&&wc.default.getHash()!==e&&wc.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};gu.default=j3;Object.defineProperty(Ks,"__esModule",{value:!0});var qa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$3=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Y3=Gn,Wm=na(Y3),q3=Zs,Ka=na(q3),K3=Vo,Z3=na(K3),Q3=mu,ut=na(Q3),J3=gu,Ii=na(J3);function na(t){return t&&t.__esModule?t:{default:t}}function eA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tA(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function nA(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Xm={to:ut.default.string.isRequired,containerId:ut.default.string,container:ut.default.object,activeClass:ut.default.string,activeStyle:ut.default.object,spy:ut.default.bool,horizontal:ut.default.bool,smooth:ut.default.oneOfType([ut.default.bool,ut.default.string]),offset:ut.default.number,delay:ut.default.number,isDynamic:ut.default.bool,onClick:ut.default.func,duration:ut.default.oneOfType([ut.default.number,ut.default.func]),absolute:ut.default.bool,onSetActive:ut.default.func,onSetInactive:ut.default.func,ignoreCancelEvents:ut.default.bool,hashSpy:ut.default.bool,saveHashHistory:ut.default.bool,spyThrottle:ut.default.number};Ks.default=function(t,e){var n=e||Z3.default,i=function(o){nA(s,o);function s(a){eA(this,s);var l=tA(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,a));return r.call(l),l.state={active:!1},l.beforeUnmountCallbacks=[],l}return $3(s,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();if(!Ka.default.isMounted(l)){var u=Ka.default.mount(l,this.props.spyThrottle);this.beforeUnmountCallbacks.push(u)}this.props.hashSpy&&(Ii.default.isMounted()||Ii.default.mount(n),Ii.default.mapContainer(this.props.to,l)),Ka.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Ka.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(l){return l()})}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=qa({},this.props.style,this.props.activeStyle):u=qa({},this.props.style);var f=qa({},this.props);for(var d in Xm)f.hasOwnProperty(d)&&delete f[d];return f.className=l,f.style=u,f.onClick=this.handleClick,Wm.default.createElement(t,f)}}]),s}(Wm.default.PureComponent),r=function(){var s=this;this.scrollTo=function(a,l){n.scrollTo(a,qa({},s.state,l))},this.handleClick=function(a){s.props.onClick&&s.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),s.scrollTo(s.props.to,s.props)},this.spyHandler=function(a,l){var u=s.getScrollSpyContainer();if(!(Ii.default.isMounted()&&!Ii.default.isInitialized())){var f=s.props.horizontal,d=s.props.to,h=null,p=void 0,v=void 0;if(f){var S=0,m=0,c=0;if(u.getBoundingClientRect){var g=u.getBoundingClientRect();c=g.left}if(!h||s.props.isDynamic){if(h=n.get(d),!h)return;var _=h.getBoundingClientRect();S=_.left-c+a,m=S+_.width}var x=a-s.props.offset;p=x>=Math.floor(S)&&x<Math.floor(m),v=x<Math.floor(S)||x>=Math.floor(m)}else{var C=0,A=0,w=0;if(u.getBoundingClientRect){var b=u.getBoundingClientRect();w=b.top}if(!h||s.props.isDynamic){if(h=n.get(d),!h)return;var T=h.getBoundingClientRect();C=T.top-w+l,A=C+T.height}var E=l-s.props.offset;p=E>=Math.floor(C)&&E<Math.floor(A),v=E<Math.floor(C)||E>=Math.floor(A)}var L=n.getActiveLink();if(v){if(d===L&&n.setActiveLink(void 0),s.props.hashSpy&&Ii.default.getHash()===d){var V=s.props.saveHashHistory,B=V===void 0?!1:V;Ii.default.changeHash("",B)}s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive(d,h))}if(p&&(L!==d||s.state.active===!1)){n.setActiveLink(d);var Y=s.props.saveHashHistory,q=Y===void 0?!1:Y;s.props.hashSpy&&Ii.default.changeHash(d,q),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(d,h))}}}};return i.propTypes=Xm,i.defaultProps={offset:0},i};Object.defineProperty(mh,"__esModule",{value:!0});var iA=Gn,jm=o0(iA),rA=Ks,oA=o0(rA);function o0(t){return t&&t.__esModule?t:{default:t}}function sA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $m(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function aA(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var lA=function(t){aA(e,t);function e(){var n,i,r,o;sA(this,e);for(var s=arguments.length,a=Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=(i=(r=$m(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),r),r.render=function(){return jm.default.createElement("a",r.props,r.props.children)},i),$m(r,o)}return e}(jm.default.Component);mh.default=(0,oA.default)(lA);var yh={};Object.defineProperty(yh,"__esModule",{value:!0});var uA=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),cA=Gn,Ym=s0(cA),fA=Ks,dA=s0(fA);function s0(t){return t&&t.__esModule?t:{default:t}}function hA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pA(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function mA(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var gA=function(t){mA(e,t);function e(){return hA(this,e),pA(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return uA(e,[{key:"render",value:function(){return Ym.default.createElement("button",this.props,this.props.children)}}]),e}(Ym.default.Component);yh.default=(0,dA.default)(gA);var Sh={},vu={};Object.defineProperty(vu,"__esModule",{value:!0});var vA=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_A=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),xA=Gn,qm=_u(xA),yA=g_;_u(yA);var SA=Vo,Km=_u(SA),EA=mu,Zm=_u(EA);function _u(t){return t&&t.__esModule?t:{default:t}}function MA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function TA(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function wA(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}vu.default=function(t){var e=function(n){wA(i,n);function i(r){MA(this,i);var o=TA(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o.childBindings={domNode:null},o}return _A(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Km.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){Km.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return qm.default.createElement(t,vA({},this.props,{parentBindings:this.childBindings}))}}]),i}(qm.default.Component);return e.propTypes={name:Zm.default.string,id:Zm.default.string},e};Object.defineProperty(Sh,"__esModule",{value:!0});var Qm=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},AA=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),RA=Gn,Jm=Eh(RA),CA=vu,bA=Eh(CA),PA=mu,eg=Eh(PA);function Eh(t){return t&&t.__esModule?t:{default:t}}function LA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function DA(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function NA(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a0=function(t){NA(e,t);function e(){return LA(this,e),DA(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return AA(e,[{key:"render",value:function(){var i=this,r=Qm({},this.props);return delete r.name,r.parentBindings&&delete r.parentBindings,Jm.default.createElement("div",Qm({},r,{ref:function(s){i.props.parentBindings.domNode=s}}),this.props.children)}}]),e}(Jm.default.Component);a0.propTypes={name:eg.default.string,id:eg.default.string};Sh.default=(0,bA.default)(a0);var Ac=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tg=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function ng(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ig(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function rg(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Za=Gn,mr=Zs,Rc=Vo,mt=mu,Ui=gu,og={to:mt.string.isRequired,containerId:mt.string,container:mt.object,activeClass:mt.string,spy:mt.bool,smooth:mt.oneOfType([mt.bool,mt.string]),offset:mt.number,delay:mt.number,isDynamic:mt.bool,onClick:mt.func,duration:mt.oneOfType([mt.number,mt.func]),absolute:mt.bool,onSetActive:mt.func,onSetInactive:mt.func,ignoreCancelEvents:mt.bool,hashSpy:mt.bool,spyThrottle:mt.number},IA={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||Rc,r=function(s){rg(a,s);function a(l){ng(this,a);var u=ig(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return o.call(u),u.state={active:!1},u}return tg(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,f=this.props.container;return u?document.getElementById(u):f&&f.nodeType?f:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();mr.isMounted(u)||mr.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Ui.isMounted()||Ui.mount(i),Ui.mapContainer(this.props.to,u)),this.props.spy&&mr.addStateHandler(this.stateHandler),mr.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){mr.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var f=Ac({},this.props);for(var d in og)f.hasOwnProperty(d)&&delete f[d];return f.className=u,f.onClick=this.handleClick,Za.createElement(e,f)}}]),a}(Za.Component),o=function(){var a=this;this.scrollTo=function(l,u){i.scrollTo(l,Ac({},a.state,u))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){i.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var u=a.getScrollSpyContainer();if(!(Ui.isMounted()&&!Ui.isInitialized())){var f=a.props.to,d=null,h=0,p=0,v=0;if(u.getBoundingClientRect){var S=u.getBoundingClientRect();v=S.top}if(!d||a.props.isDynamic){if(d=i.get(f),!d)return;var m=d.getBoundingClientRect();h=m.top-v+l,p=h+m.height}var c=l-a.props.offset,g=c>=Math.floor(h)&&c<Math.floor(p),_=c<Math.floor(h)||c>=Math.floor(p),x=i.getActiveLink();if(_)return f===x&&i.setActiveLink(void 0),a.props.hashSpy&&Ui.getHash()===f&&Ui.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),mr.updateStates();if(g&&x!==f)return i.setActiveLink(f),a.props.hashSpy&&Ui.changeHash(f),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(f)),mr.updateStates()}}};return r.propTypes=og,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){rg(r,i);function r(o){ng(this,r);var s=ig(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return s.childBindings={domNode:null},s}return tg(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Rc.unregister(this.props.name)}},{key:"registerElems",value:function(s){Rc.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return Za.createElement(e,Ac({},this.props,{parentBindings:this.childBindings}))}}]),r}(Za.Component);return n.propTypes={name:mt.string,id:mt.string},n}},UA=IA;Object.defineProperty(yt,"__esModule",{value:!0});yt.Helpers=yt.ScrollElement=yt.ScrollLink=yt.animateScroll=yt.scrollSpy=yt.Events=yt.scroller=yt.Element=yt.Button=_0=yt.Link=void 0;var FA=mh,l0=ti(FA),OA=yh,u0=ti(OA),kA=Sh,c0=ti(kA),zA=Vo,f0=ti(zA),BA=ea,d0=ti(BA),HA=Zs,h0=ti(HA),VA=du,p0=ti(VA),GA=Ks,m0=ti(GA),WA=vu,g0=ti(WA),XA=UA,v0=ti(XA);function ti(t){return t&&t.__esModule?t:{default:t}}var _0=yt.Link=l0.default;yt.Button=u0.default;yt.Element=c0.default;yt.scroller=f0.default;yt.Events=d0.default;yt.scrollSpy=h0.default;yt.animateScroll=p0.default;yt.ScrollLink=m0.default;yt.ScrollElement=g0.default;yt.Helpers=v0.default;yt.default={Link:l0.default,Button:u0.default,Element:c0.default,scroller:f0.default,Events:d0.default,scrollSpy:h0.default,animateScroll:p0.default,ScrollLink:m0.default,ScrollElement:g0.default,Helpers:v0.default};const jA=()=>React.createElement("nav",{className:"fixed top-0 left-0 w-full bg-black/70 backdrop-blur text-white py-4 px-8 flex justify-between z-50"},React.createElement("div",{className:"font-bold text-neon-cyan text-xl"},"Ratul"),React.createElement("div",{className:"flex gap-6"},["hero","about","skills","projects","resume","contact"].map(t=>React.createElement(_0,{key:t,to:t,smooth:!0,duration:500,className:"cursor-pointer hover:text-neon-pink capitalize"},t)))),$A=[{icon:React.createElement(Dw,null),title:"Graphic Designer",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo eligendi aspernatur dolorem officiis vero suscipit ipsam, perferendis nemo error."},{icon:React.createElement(K_,null),title:"Frontend Development",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fugit nam, iste reiciendis doloremque veritatis dicta commodi animi suscipit, obcaecati iure ad autem repellendus!"},{icon:React.createElement(Nw,null),title:"UI / UX Design",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fugit nam, iste reiciendis doloremque veritatis dicta commodi animi suscipit, obcaecati iure ad autem repellendus!"},{icon:React.createElement(bw,null),title:"Content Manager",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fugit nam, iste reiciendis doloremque veritatis dicta commodi animi suscipit, obcaecati iure ad autem repellendus!"},{icon:React.createElement(Cw,null),title:"Software Tester",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fugit nam, iste reiciendis doloremque veritatis dicta commodi animi suscipit, obcaecati iure ad autem repellendus!"},{icon:React.createElement(Lw,null),title:"ISO Developer",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fugit nam, iste reiciendis doloremque veritatis dicta commodi animi suscipit, obcaecati iure ad autem repellendus!"}],YA=()=>React.createElement("section",{id:"services",className:"min-h-screen bg-black text-white px-6 py-20"},React.createElement("h2",{className:"text-4xl font-bold text-neon-pink text-center mb-10"},"Services"),React.createElement("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-10"},$A.map((t,e)=>React.createElement("div",{key:e,className:"bg-[#ff3131] bg-opacity-80 rounded-xl p-6 shadow-xl text-black hover:scale-105 transition-all duration-300 flex flex-col items-center"},React.createElement("div",{className:"text-4xl mb-4 text-neon-pink"},t.icon),React.createElement("h3",{className:"text-2xl font-semibold mb-2"},t.title),React.createElement("p",{className:"text-sm text-white mb-2 text-center"},t.description))))),qA=[{type:"education",title:"High School",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur ad corrupti recusandae cumque amet."},{type:"education",title:"University",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur ad corrupti recusandae cumque amet."},{type:"experience",title:"Internship",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur ad corrupti recusandae cumque amet."},{type:"experience",title:"Job-1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur ad corrupti recusandae cumque amet."},{type:"experience",title:"Job-2",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur ad corrupti recusandae cumque amet."},{type:"experience",title:"Job-3",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur ad corrupti recusandae cumque amet."}],KA=()=>React.createElement("section",{id:"timeline",className:"min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center"},React.createElement("h2",{className:"text-4xl font-bold text-neon-cyan mb-10"},"My Education & Experience"),React.createElement("div",{className:"relative w-full max-w-4xl"},React.createElement("div",{className:"absolute left-1/2 top-0 h-full w-1 bg-neon-pink -translate-x-1/2 z-0"}),React.createElement("div",{className:"flex flex-col gap-10 z-10 relative"},qA.map((t,e)=>React.createElement("div",{key:e,className:`flex ${e%2===0?"justify-start":"justify-end"} w-full`},React.createElement("div",{className:"w-1/2 flex flex-col items-${idx % 2 === 0 ? 'start' : 'end'}"},React.createElement("div",{className:"bg-[#ff3131] bg-opacity-80 rounded-xl p-6 shadow-xl text-black min-w-[220px] max-w-xs"},React.createElement("h3",{className:"text-xl font-bold mb-2"},t.title),React.createElement("p",{className:"text-sm text-white"},t.description)))))))),ZA=()=>React.createElement("footer",{className:"bg-[#ff3131] bg-opacity-90 text-black py-8 mt-12"},React.createElement("div",{className:"container mx-auto flex flex-col items-center justify-center"},React.createElement("div",{className:"flex gap-6 text-2xl mb-4"},React.createElement("a",{href:"https://www.linkedin.com/in/ratul-banik1204/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-neon-pink transition"},"in"),React.createElement("a",{href:"#",className:"hover:text-neon-pink transition"},"ig"),React.createElement("a",{href:"https://github.com/rbanik1204",target:"_blank",rel:"noopener noreferrer",className:"hover:text-neon-pink transition"},"gh"),React.createElement("a",{href:"#",className:"hover:text-neon-pink transition"},"x")),React.createElement("div",{className:"flex gap-6 mb-2 text-sm"},React.createElement("a",{href:"#",className:"hover:underline"},"FAQ"),React.createElement("a",{href:"#services",className:"hover:underline"},"Service"),React.createElement("a",{href:"#about",className:"hover:underline"},"About"),React.createElement("a",{href:"#contact",className:"hover:underline"},"Contact"),React.createElement("a",{href:"#",className:"hover:underline"},"Privacy Policies")),React.createElement("div",{className:"text-xs"},"© Alex | All Rights Reserved"))),QA=()=>React.createElement(React.Fragment,null,React.createElement(jA,null),React.createElement(mw,null),React.createElement(gw,null),React.createElement(YA,null),React.createElement(zw,null),React.createElement(Hw,null),React.createElement(KA,null),React.createElement(Vw,null),React.createElement(Gw,null),React.createElement(ZA,null));function JA(){return React.createElement(QA,null)}Cc.createRoot(document.getElementById("root")).render(Zn.createElement(Zn.StrictMode,null,Zn.createElement(JA,null)));
