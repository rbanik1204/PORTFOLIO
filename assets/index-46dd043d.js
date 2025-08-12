(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qm={exports:{}},Hl={},Jm={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),x1=Symbol.for("react.portal"),y1=Symbol.for("react.fragment"),S1=Symbol.for("react.strict_mode"),M1=Symbol.for("react.profiler"),E1=Symbol.for("react.provider"),w1=Symbol.for("react.context"),T1=Symbol.for("react.forward_ref"),A1=Symbol.for("react.suspense"),b1=Symbol.for("react.memo"),C1=Symbol.for("react.lazy"),Yf=Symbol.iterator;function R1(t){return t===null||typeof t!="object"?null:(t=Yf&&t[Yf]||t["@@iterator"],typeof t=="function"?t:null)}var e0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t0=Object.assign,n0={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=n0,this.updater=n||e0}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i0(){}i0.prototype=Ns.prototype;function Nd(t,e,n){this.props=t,this.context=e,this.refs=n0,this.updater=n||e0}var Dd=Nd.prototype=new i0;Dd.constructor=Nd;t0(Dd,Ns.prototype);Dd.isPureReactComponent=!0;var qf=Array.isArray,r0=Object.prototype.hasOwnProperty,Ud={current:null},s0={key:!0,ref:!0,__self:!0,__source:!0};function a0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)r0.call(e,i)&&!s0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ia,type:t,key:s,ref:a,props:r,_owner:Ud.current}}function P1(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Id(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function L1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kf=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?L1(""+t.key):e.toString(36)}function Yo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ia:case x1:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+xc(a,0):i,qf(r)?(n="",t!=null&&(n=t.replace(Kf,"$&/")+"/"),Yo(r,e,n,"",function(c){return c})):r!=null&&(Id(r)&&(r=P1(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Kf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",qf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+xc(s,o);a+=Yo(s,e,n,l,r)}else if(l=R1(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+xc(s,o++),a+=Yo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function eo(t,e,n){if(t==null)return t;var i=[],r=0;return Yo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function N1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},qo={transition:null},D1={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:qo,ReactCurrentOwner:Ud};function o0(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:eo,forEach:function(t,e,n){eo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return eo(t,function(){e++}),e},toArray:function(t){return eo(t,function(e){return e})||[]},only:function(t){if(!Id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Ns;ze.Fragment=y1;ze.Profiler=M1;ze.PureComponent=Nd;ze.StrictMode=S1;ze.Suspense=A1;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;ze.act=o0;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=t0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ud.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)r0.call(e,l)&&!s0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:a}};ze.createContext=function(t){return t={$$typeof:w1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:E1,_context:t},t.Consumer=t};ze.createElement=a0;ze.createFactory=function(t){var e=a0.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:T1,render:t}};ze.isValidElement=Id;ze.lazy=function(t){return{$$typeof:C1,_payload:{_status:-1,_result:t},_init:N1}};ze.memo=function(t,e){return{$$typeof:b1,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=qo.transition;qo.transition={};try{t()}finally{qo.transition=e}};ze.unstable_act=o0;ze.useCallback=function(t,e){return Qt.current.useCallback(t,e)};ze.useContext=function(t){return Qt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Qt.current.useEffect(t,e)};ze.useId=function(){return Qt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Qt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};ze.useRef=function(t){return Qt.current.useRef(t)};ze.useState=function(t){return Qt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Qt.current.useTransition()};ze.version="18.3.1";Jm.exports=ze;var mt=Jm.exports;const ki=_1(mt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1=mt,I1=Symbol.for("react.element"),O1=Symbol.for("react.fragment"),F1=Object.prototype.hasOwnProperty,k1=U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z1={key:!0,ref:!0,__self:!0,__source:!0};function l0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)F1.call(e,i)&&!z1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:I1,type:t,key:s,ref:a,props:r,_owner:k1.current}}Hl.Fragment=O1;Hl.jsx=l0;Hl.jsxs=l0;Qm.exports=Hl;var x=Qm.exports,bu={},c0={exports:{}},_n={},u0={exports:{}},d0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,V){var B=I.length;I.push(V);e:for(;0<B;){var L=B-1>>>1,O=I[L];if(0<r(O,V))I[L]=V,I[B]=O,B=L;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var V=I[0],B=I.pop();if(B!==V){I[0]=B;e:for(var L=0,O=I.length,oe=O>>>1;L<oe;){var le=2*(L+1)-1,he=I[le],ve=le+1,Le=I[ve];if(0>r(he,B))ve<O&&0>r(Le,he)?(I[L]=Le,I[ve]=B,L=ve):(I[L]=he,I[le]=B,L=le);else if(ve<O&&0>r(Le,B))I[L]=Le,I[ve]=B,L=ve;else break e}}return V}function r(I,V){var B=I.sortIndex-V.sortIndex;return B!==0?B:I.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=I)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function S(I){if(y=!1,g(I),!_)if(n(l)!==null)_=!0,q(T);else{var V=n(c);V!==null&&Y(S,V.startTime-I)}}function T(I,V){_=!1,y&&(y=!1,u(D),D=-1),m=!0;var B=f;try{for(g(V),h=n(l);h!==null&&(!(h.expirationTime>V)||I&&!X());){var L=h.callback;if(typeof L=="function"){h.callback=null,f=h.priorityLevel;var O=L(h.expirationTime<=V);V=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&i(l),g(V)}else i(l);h=n(l)}if(h!==null)var oe=!0;else{var le=n(c);le!==null&&Y(S,le.startTime-V),oe=!1}return oe}finally{h=null,f=B,m=!1}}var C=!1,b=null,D=-1,E=5,A=-1;function X(){return!(t.unstable_now()-A<E)}function K(){if(b!==null){var I=t.unstable_now();A=I;var V=!0;try{V=b(!0,I)}finally{V?Z():(C=!1,b=null)}}else C=!1}var Z;if(typeof v=="function")Z=function(){v(K)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,j=N.port2;N.port1.onmessage=K,Z=function(){j.postMessage(null)}}else Z=function(){p(K,0)};function q(I){b=I,C||(C=!0,Z())}function Y(I,V){D=p(function(){I(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,q(T))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var B=f;f=V;try{return I()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=f;f=I;try{return V()}finally{f=B}},t.unstable_scheduleCallback=function(I,V,B){var L=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?L+B:L):B=L,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=B+O,I={id:d++,callback:V,priorityLevel:I,startTime:B,expirationTime:O,sortIndex:-1},B>L?(I.sortIndex=B,e(c,I),n(l)===null&&I===n(c)&&(y?(u(D),D=-1):y=!0,Y(S,B-L))):(I.sortIndex=O,e(l,I),_||m||(_=!0,q(T))),I},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(I){var V=f;return function(){var B=f;f=V;try{return I.apply(this,arguments)}finally{f=B}}}})(d0);u0.exports=d0;var B1=u0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1=mt,vn=B1;function Q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f0=new Set,ma={};function Dr(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(ma[t]=e,t=0;t<e.length;t++)f0.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=Object.prototype.hasOwnProperty,V1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zf={},Qf={};function G1(t){return Cu.call(Qf,t)?!0:Cu.call(Zf,t)?!1:V1.test(t)?Qf[t]=!0:(Zf[t]=!0,!1)}function W1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j1(t,e,n,i){if(e===null||typeof e>"u"||W1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function Fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Od,Fd);Ot[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Od,Fd);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Od,Fd);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(j1(e,n,r,i)&&(n=null),i||r===null?G1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=H1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),zd=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),h0=Symbol.for("react.provider"),p0=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),m0=Symbol.for("react.offscreen"),Jf=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=Jf&&t[Jf]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,yc;function Qs(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var Sc=!1;function Mc(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function X1(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Ru:return"Profiler";case zd:return"StrictMode";case Pu:return"Suspense";case Lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case p0:return(t.displayName||"Context")+".Consumer";case h0:return(t._context.displayName||"Context")+".Provider";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:Nu(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return Nu(t(e))}catch{}}return null}function $1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(e);case 8:return e===zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function g0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y1(t){var e=g0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function no(t){t._valueTracker||(t._valueTracker=Y1(t))}function v0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=g0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Du(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function eh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _0(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function Uu(t,e){_0(t,e);var n=Qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Iu(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Iu(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Q(92));if(Js(n)){if(1<n.length)throw Error(Q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function x0(t,e){var n=Qi(e.value),i=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var io,S0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q1=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){q1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function M0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function E0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=M0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var K1=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(t,e){if(e){if(K1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bu=null;function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hu=null,ps=null,ms=null;function rh(t){if(t=ka(t)){if(typeof Hu!="function")throw Error(Q(280));var e=t.stateNode;e&&(e=Xl(e),Hu(t.stateNode,t.type,e))}}function w0(t){ps?ms?ms.push(t):ms=[t]:ps=t}function T0(){if(ps){var t=ps,e=ms;if(ms=ps=null,rh(t),e)for(t=0;t<e.length;t++)rh(e[t])}}function A0(t,e){return t(e)}function b0(){}var Ec=!1;function C0(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return A0(t,e,n)}finally{Ec=!1,(ps!==null||ms!==null)&&(b0(),T0())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var i=Xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var Vu=!1;if(pi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Vu=!1}function Z1(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ra=!1,ul=null,dl=!1,Gu=null,Q1={onError:function(t){ra=!0,ul=t}};function J1(t,e,n,i,r,s,a,o,l){ra=!1,ul=null,Z1.apply(Q1,arguments)}function e_(t,e,n,i,r,s,a,o,l){if(J1.apply(this,arguments),ra){if(ra){var c=ul;ra=!1,ul=null}else throw Error(Q(198));dl||(dl=!0,Gu=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sh(t){if(Ur(t)!==t)throw Error(Q(188))}function t_(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sh(r),t;if(s===i)return sh(r),e;s=s.sibling}throw Error(Q(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function P0(t){return t=t_(t),t!==null?L0(t):null}function L0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L0(t);if(e!==null)return e;t=t.sibling}return null}var N0=vn.unstable_scheduleCallback,ah=vn.unstable_cancelCallback,n_=vn.unstable_shouldYield,i_=vn.unstable_requestPaint,vt=vn.unstable_now,r_=vn.unstable_getCurrentPriorityLevel,Gd=vn.unstable_ImmediatePriority,D0=vn.unstable_UserBlockingPriority,fl=vn.unstable_NormalPriority,s_=vn.unstable_LowPriority,U0=vn.unstable_IdlePriority,Vl=null,Kn=null;function a_(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:c_,o_=Math.log,l_=Math.LN2;function c_(t){return t>>>=0,t===0?32:31-(o_(t)/l_|0)|0}var ro=64,so=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ea(o):(s&=a,s!==0&&(i=ea(s)))}else a=n&~r,a!==0?i=ea(a):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function u_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Hn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=u_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I0(){var t=ro;return ro<<=1,!(ro&4194240)&&(ro=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function f_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Wd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function O0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var F0,jd,k0,z0,B0,ju=!1,ao=[],zi=null,Bi=null,Hi=null,_a=new Map,xa=new Map,Li=[],h_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&jd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function p_(t,e,n,i,r){switch(e){case"focusin":return zi=Vs(zi,t,e,n,i,r),!0;case"dragenter":return Bi=Vs(Bi,t,e,n,i,r),!0;case"mouseover":return Hi=Vs(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _a.set(s,Vs(_a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,xa.set(s,Vs(xa.get(s)||null,t,e,n,i,r)),!0}return!1}function H0(t){var e=_r(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=R0(n),e!==null){t.blockedOn=e,B0(t.priority,function(){k0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bu=i,n.target.dispatchEvent(i),Bu=null}else return e=ka(n),e!==null&&jd(e),t.blockedOn=n,!1;e.shift()}return!0}function lh(t,e,n){Ko(t)&&n.delete(e)}function m_(){ju=!1,zi!==null&&Ko(zi)&&(zi=null),Bi!==null&&Ko(Bi)&&(Bi=null),Hi!==null&&Ko(Hi)&&(Hi=null),_a.forEach(lh),xa.forEach(lh)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,ju||(ju=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,m_)))}function ya(t){function e(r){return Gs(r,t)}if(0<ao.length){Gs(ao[0],t);for(var n=1;n<ao.length;n++){var i=ao[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&Gs(zi,t),Bi!==null&&Gs(Bi,t),Hi!==null&&Gs(Hi,t),_a.forEach(e),xa.forEach(e),n=0;n<Li.length;n++)i=Li[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)H0(n),n.blockedOn===null&&Li.shift()}var gs=xi.ReactCurrentBatchConfig,pl=!0;function g_(t,e,n,i){var r=$e,s=gs.transition;gs.transition=null;try{$e=1,Xd(t,e,n,i)}finally{$e=r,gs.transition=s}}function v_(t,e,n,i){var r=$e,s=gs.transition;gs.transition=null;try{$e=4,Xd(t,e,n,i)}finally{$e=r,gs.transition=s}}function Xd(t,e,n,i){if(pl){var r=Xu(t,e,n,i);if(r===null)Uc(t,e,i,ml,n),oh(t,i);else if(p_(r,t,e,n,i))i.stopPropagation();else if(oh(t,i),e&4&&-1<h_.indexOf(t)){for(;r!==null;){var s=ka(r);if(s!==null&&F0(s),s=Xu(t,e,n,i),s===null&&Uc(t,e,i,ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var ml=null;function Xu(t,e,n,i){if(ml=null,t=Vd(i),t=_r(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ml=t,null}function V0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r_()){case Gd:return 1;case D0:return 4;case fl:case s_:return 16;case U0:return 536870912;default:return 16}default:return 16}}var Di=null,$d=null,Zo=null;function G0(){if(Zo)return Zo;var t,e=$d,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Zo=r.slice(t,1<i?1-i:void 0)}function Qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function ch(){return!1}function xn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oo:ch,this.isPropagationStopped=ch,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=xn(Ds),Fa=ct({},Ds,{view:0,detail:0}),__=xn(Fa),Tc,Ac,Ws,Gl=ct({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(Tc=t.screenX-Ws.screenX,Ac=t.screenY-Ws.screenY):Ac=Tc=0,Ws=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),uh=xn(Gl),x_=ct({},Gl,{dataTransfer:0}),y_=xn(x_),S_=ct({},Fa,{relatedTarget:0}),bc=xn(S_),M_=ct({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),E_=xn(M_),w_=ct({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T_=xn(w_),A_=ct({},Ds,{data:0}),dh=xn(A_),b_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R_[t])?!!e[t]:!1}function qd(){return P_}var L_=ct({},Fa,{key:function(t){if(t.key){var e=b_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qd,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N_=xn(L_),D_=ct({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=xn(D_),U_=ct({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qd}),I_=xn(U_),O_=ct({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),F_=xn(O_),k_=ct({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z_=xn(k_),B_=[9,13,27,32],Kd=pi&&"CompositionEvent"in window,sa=null;pi&&"documentMode"in document&&(sa=document.documentMode);var H_=pi&&"TextEvent"in window&&!sa,W0=pi&&(!Kd||sa&&8<sa&&11>=sa),hh=String.fromCharCode(32),ph=!1;function j0(t,e){switch(t){case"keyup":return B_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function V_(t,e){switch(t){case"compositionend":return X0(e);case"keypress":return e.which!==32?null:(ph=!0,hh);case"textInput":return t=e.data,t===hh&&ph?null:t;default:return null}}function G_(t,e){if(ns)return t==="compositionend"||!Kd&&j0(t,e)?(t=G0(),Zo=$d=Di=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W0&&e.locale!=="ko"?null:e.data;default:return null}}var W_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!W_[t.type]:e==="textarea"}function $0(t,e,n,i){w0(i),e=gl(e,"onChange"),0<e.length&&(n=new Yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,Sa=null;function j_(t){rg(t,0)}function Wl(t){var e=ss(t);if(v0(e))return t}function X_(t,e){if(t==="change")return e}var Y0=!1;if(pi){var Cc;if(pi){var Rc="oninput"in document;if(!Rc){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Rc=typeof gh.oninput=="function"}Cc=Rc}else Cc=!1;Y0=Cc&&(!document.documentMode||9<document.documentMode)}function vh(){aa&&(aa.detachEvent("onpropertychange",q0),Sa=aa=null)}function q0(t){if(t.propertyName==="value"&&Wl(Sa)){var e=[];$0(e,Sa,t,Vd(t)),C0(j_,e)}}function $_(t,e,n){t==="focusin"?(vh(),aa=e,Sa=n,aa.attachEvent("onpropertychange",q0)):t==="focusout"&&vh()}function Y_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Sa)}function q_(t,e){if(t==="click")return Wl(e)}function K_(t,e){if(t==="input"||t==="change")return Wl(e)}function Z_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:Z_;function Ma(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cu.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function _h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xh(t,e){var n=_h(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_h(n)}}function K0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?K0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z0(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function Zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Q_(t){var e=Z0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&K0(n.ownerDocument.documentElement,n)){if(i!==null&&Zd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=xh(n,s);var a=xh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var J_=pi&&"documentMode"in document&&11>=document.documentMode,is=null,$u=null,oa=null,Yu=!1;function yh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||is==null||is!==cl(i)||(i=is,"selectionStart"in i&&Zd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oa&&Ma(oa,i)||(oa=i,i=gl($u,"onSelect"),0<i.length&&(e=new Yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Pc={},Q0={};pi&&(Q0=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function jl(t){if(Pc[t])return Pc[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Q0)return Pc[t]=e[n];return t}var J0=jl("animationend"),eg=jl("animationiteration"),tg=jl("animationstart"),ng=jl("transitionend"),ig=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){ig.set(t,e),Dr(e,[t])}for(var Lc=0;Lc<Sh.length;Lc++){var Nc=Sh[Lc],ex=Nc.toLowerCase(),tx=Nc[0].toUpperCase()+Nc.slice(1);tr(ex,"on"+tx)}tr(J0,"onAnimationEnd");tr(eg,"onAnimationIteration");tr(tg,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(ng,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Mh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,e_(i,e,void 0,t),t.currentTarget=null}function rg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Mh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Mh(r,o,c),s=l}}}if(dl)throw t=Gu,dl=!1,Gu=null,t}function et(t,e){var n=e[Ju];n===void 0&&(n=e[Ju]=new Set);var i=t+"__bubble";n.has(i)||(sg(e,t,2,!1),n.add(i))}function Dc(t,e,n){var i=0;e&&(i|=4),sg(n,t,i,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[co]){t[co]=!0,f0.forEach(function(n){n!=="selectionchange"&&(nx.has(n)||Dc(n,!1,t),Dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,Dc("selectionchange",!1,e))}}function sg(t,e,n,i){switch(V0(e)){case 1:var r=g_;break;case 4:r=v_;break;default:r=Xd}n=r.bind(null,e,n,t),r=void 0,!Vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=_r(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}C0(function(){var c=s,d=Vd(n),h=[];e:{var f=ig.get(t);if(f!==void 0){var m=Yd,_=t;switch(t){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":m=N_;break;case"focusin":_="focus",m=bc;break;case"focusout":_="blur",m=bc;break;case"beforeblur":case"afterblur":m=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=I_;break;case J0:case eg:case tg:m=E_;break;case ng:m=F_;break;case"scroll":m=__;break;case"wheel":m=z_;break;case"copy":case"cut":case"paste":m=T_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fh}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,u!==null&&(S=va(v,u),S!=null&&y.push(wa(v,S,g)))),p)break;v=v.return}0<y.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Bu&&(_=n.relatedTarget||n.fromElement)&&(_r(_)||_[mi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?_r(_):null,_!==null&&(p=Ur(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=uh,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=fh,S="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?f:ss(m),g=_==null?f:ss(_),f=new y(S,v+"leave",m,n,d),f.target=p,f.relatedTarget=g,S=null,_r(d)===c&&(y=new y(u,v+"enter",_,n,d),y.target=g,y.relatedTarget=p,S=y),p=S,m&&_)t:{for(y=m,u=_,v=0,g=y;g;g=Ir(g))v++;for(g=0,S=u;S;S=Ir(S))g++;for(;0<v-g;)y=Ir(y),v--;for(;0<g-v;)u=Ir(u),g--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Ir(y),u=Ir(u)}y=null}else y=null;m!==null&&Eh(h,f,m,y,!1),_!==null&&p!==null&&Eh(h,p,_,y,!0)}}e:{if(f=c?ss(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var T=X_;else if(mh(f))if(Y0)T=K_;else{T=Y_;var C=$_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=q_);if(T&&(T=T(t,c))){$0(h,T,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Iu(f,"number",f.value)}switch(C=c?ss(c):window,t){case"focusin":(mh(C)||C.contentEditable==="true")&&(is=C,$u=c,oa=null);break;case"focusout":oa=$u=is=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,yh(h,n,d);break;case"selectionchange":if(J_)break;case"keydown":case"keyup":yh(h,n,d)}var b;if(Kd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ns?j0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(W0&&n.locale!=="ko"&&(ns||D!=="onCompositionStart"?D==="onCompositionEnd"&&ns&&(b=G0()):(Di=d,$d="value"in Di?Di.value:Di.textContent,ns=!0)),C=gl(c,D),0<C.length&&(D=new dh(D,t,null,n,d),h.push({event:D,listeners:C}),b?D.data=b:(b=X0(n),b!==null&&(D.data=b)))),(b=H_?V_(t,n):G_(t,n))&&(c=gl(c,"onBeforeInput"),0<c.length&&(d=new dh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=b))}rg(h,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=va(t,n),s!=null&&i.unshift(wa(t,s,r)),s=va(t,e),s!=null&&i.push(wa(t,s,r))),t=t.return}return i}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Eh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=va(n,s),l!=null&&a.unshift(wa(n,l,o))):r||(l=va(n,s),l!=null&&a.push(wa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ix=/\r\n?/g,rx=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(ix,`
`).replace(rx,"")}function uo(t,e,n){if(e=wh(e),wh(t)!==e&&n)throw Error(Q(425))}function vl(){}var qu=null,Ku=null;function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(t){return Th.resolve(null).then(t).catch(ox)}:Qu;function ox(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ya(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),qn="__reactFiber$"+Us,Ta="__reactProps$"+Us,mi="__reactContainer$"+Us,Ju="__reactEvents$"+Us,lx="__reactListeners$"+Us,cx="__reactHandles$"+Us;function _r(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ah(t);t!==null;){if(n=t[qn])return n;t=Ah(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[qn]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Q(33))}function Xl(t){return t[Ta]||null}var ed=[],as=-1;function nr(t){return{current:t}}function nt(t){0>as||(t.current=ed[as],ed[as]=null,as--)}function Je(t,e){as++,ed[as]=t.current,t.current=e}var Ji={},Gt=nr(Ji),nn=nr(!1),Ar=Ji;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function _l(){nt(nn),nt(Gt)}function bh(t,e,n){if(Gt.current!==Ji)throw Error(Q(168));Je(Gt,e),Je(nn,n)}function ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,$1(t)||"Unknown",r));return ct({},n,i)}function xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Ar=Gt.current,Je(Gt,t),Je(nn,nn.current),!0}function Ch(t,e,n){var i=t.stateNode;if(!i)throw Error(Q(169));n?(t=ag(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,nt(nn),nt(Gt),Je(Gt,t)):nt(nn),Je(nn,n)}var li=null,$l=!1,Oc=!1;function og(t){li===null?li=[t]:li.push(t)}function ux(t){$l=!0,og(t)}function ir(){if(!Oc&&li!==null){Oc=!0;var t=0,e=$e;try{var n=li;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,$l=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),N0(Gd,ir),r}finally{$e=e,Oc=!1}}return null}var os=[],ls=0,yl=null,Sl=0,Mn=[],En=0,br=null,ui=1,di="";function dr(t,e){os[ls++]=Sl,os[ls++]=yl,yl=t,Sl=e}function lg(t,e,n){Mn[En++]=ui,Mn[En++]=di,Mn[En++]=br,br=t;var i=ui;t=di;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ui=1<<32-Hn(e)+r|n<<r|i,di=s+t}else ui=1<<s|n<<r|i,di=t}function Qd(t){t.return!==null&&(dr(t,1),lg(t,1,0))}function Jd(t){for(;t===yl;)yl=os[--ls],os[ls]=null,Sl=os[--ls],os[ls]=null;for(;t===br;)br=Mn[--En],Mn[En]=null,di=Mn[--En],Mn[En]=null,ui=Mn[--En],Mn[En]=null}var mn=null,pn=null,rt=!1,Fn=null;function cg(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:ui,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(rt){var e=pn;if(e){var n=e;if(!Rh(t,e)){if(td(t))throw Error(Q(418));e=Vi(n.nextSibling);var i=mn;e&&Rh(t,e)?cg(i,n):(t.flags=t.flags&-4097|2,rt=!1,mn=t)}}else{if(td(t))throw Error(Q(418));t.flags=t.flags&-4097|2,rt=!1,mn=t}}}function Ph(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function fo(t){if(t!==mn)return!1;if(!rt)return Ph(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zu(t.type,t.memoizedProps)),e&&(e=pn)){if(td(t))throw ug(),Error(Q(418));for(;e;)cg(t,e),e=Vi(e.nextSibling)}if(Ph(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Vi(t.stateNode.nextSibling):null;return!0}function ug(){for(var t=pn;t;)t=Vi(t.nextSibling)}function Es(){pn=mn=null,rt=!1}function ef(t){Fn===null?Fn=[t]:Fn.push(t)}var dx=xi.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var i=n.stateNode}if(!i)throw Error(Q(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lh(t){var e=t._init;return e(t._payload)}function dg(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Xi(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,g,S){return v===null||v.tag!==6?(v=Gc(g,u.mode,S),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,S){var T=g.type;return T===ts?d(u,v,g.props.children,S,g.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ri&&Lh(T)===v.type)?(S=r(v,g.props),S.ref=js(u,v,g),S.return=u,S):(S=sl(g.type,g.key,g.props,null,u.mode,S),S.ref=js(u,v,g),S.return=u,S)}function c(u,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Wc(g,u.mode,S),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,S,T){return v===null||v.tag!==7?(v=Mr(g,u.mode,S,T),v.return=u,v):(v=r(v,g),v.return=u,v)}function h(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Gc(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case to:return g=sl(v.type,v.key,v.props,null,u.mode,g),g.ref=js(u,null,v),g.return=u,g;case es:return v=Wc(v,u.mode,g),v.return=u,v;case Ri:var S=v._init;return h(u,S(v._payload),g)}if(Js(v)||Bs(v))return v=Mr(v,u.mode,g,null),v.return=u,v;ho(u,v)}return null}function f(u,v,g,S){var T=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:o(u,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case to:return g.key===T?l(u,v,g,S):null;case es:return g.key===T?c(u,v,g,S):null;case Ri:return T=g._init,f(u,v,T(g._payload),S)}if(Js(g)||Bs(g))return T!==null?null:d(u,v,g,S,null);ho(u,g)}return null}function m(u,v,g,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(g)||null,o(v,u,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case to:return u=u.get(S.key===null?g:S.key)||null,l(v,u,S,T);case es:return u=u.get(S.key===null?g:S.key)||null,c(v,u,S,T);case Ri:var C=S._init;return m(u,v,g,C(S._payload),T)}if(Js(S)||Bs(S))return u=u.get(g)||null,d(v,u,S,T,null);ho(v,S)}return null}function _(u,v,g,S){for(var T=null,C=null,b=v,D=v=0,E=null;b!==null&&D<g.length;D++){b.index>D?(E=b,b=null):E=b.sibling;var A=f(u,b,g[D],S);if(A===null){b===null&&(b=E);break}t&&b&&A.alternate===null&&e(u,b),v=s(A,v,D),C===null?T=A:C.sibling=A,C=A,b=E}if(D===g.length)return n(u,b),rt&&dr(u,D),T;if(b===null){for(;D<g.length;D++)b=h(u,g[D],S),b!==null&&(v=s(b,v,D),C===null?T=b:C.sibling=b,C=b);return rt&&dr(u,D),T}for(b=i(u,b);D<g.length;D++)E=m(b,u,D,g[D],S),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?D:E.key),v=s(E,v,D),C===null?T=E:C.sibling=E,C=E);return t&&b.forEach(function(X){return e(u,X)}),rt&&dr(u,D),T}function y(u,v,g,S){var T=Bs(g);if(typeof T!="function")throw Error(Q(150));if(g=T.call(g),g==null)throw Error(Q(151));for(var C=T=null,b=v,D=v=0,E=null,A=g.next();b!==null&&!A.done;D++,A=g.next()){b.index>D?(E=b,b=null):E=b.sibling;var X=f(u,b,A.value,S);if(X===null){b===null&&(b=E);break}t&&b&&X.alternate===null&&e(u,b),v=s(X,v,D),C===null?T=X:C.sibling=X,C=X,b=E}if(A.done)return n(u,b),rt&&dr(u,D),T;if(b===null){for(;!A.done;D++,A=g.next())A=h(u,A.value,S),A!==null&&(v=s(A,v,D),C===null?T=A:C.sibling=A,C=A);return rt&&dr(u,D),T}for(b=i(u,b);!A.done;D++,A=g.next())A=m(b,u,D,A.value,S),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?D:A.key),v=s(A,v,D),C===null?T=A:C.sibling=A,C=A);return t&&b.forEach(function(K){return e(u,K)}),rt&&dr(u,D),T}function p(u,v,g,S){if(typeof g=="object"&&g!==null&&g.type===ts&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case to:e:{for(var T=g.key,C=v;C!==null;){if(C.key===T){if(T=g.type,T===ts){if(C.tag===7){n(u,C.sibling),v=r(C,g.props.children),v.return=u,u=v;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ri&&Lh(T)===C.type){n(u,C.sibling),v=r(C,g.props),v.ref=js(u,C,g),v.return=u,u=v;break e}n(u,C);break}else e(u,C);C=C.sibling}g.type===ts?(v=Mr(g.props.children,u.mode,S,g.key),v.return=u,u=v):(S=sl(g.type,g.key,g.props,null,u.mode,S),S.ref=js(u,v,g),S.return=u,u=S)}return a(u);case es:e:{for(C=g.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Wc(g,u.mode,S),v.return=u,u=v}return a(u);case Ri:return C=g._init,p(u,v,C(g._payload),S)}if(Js(g))return _(u,v,g,S);if(Bs(g))return y(u,v,g,S);ho(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Gc(g,u.mode,S),v.return=u,u=v),a(u)):n(u,v)}return p}var ws=dg(!0),fg=dg(!1),Ml=nr(null),El=null,cs=null,tf=null;function nf(){tf=cs=El=null}function rf(t){var e=Ml.current;nt(Ml),t._currentValue=e}function id(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){El=t,tf=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(tf!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(El===null)throw Error(Q(308));cs=t,El.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var xr=null;function sf(t){xr===null?xr=[t]:xr.push(t)}function hg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function Jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wd(t,n)}}function Nh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(f=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=ct({},h,f);break e;case 2:Pi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rr|=a,t.lanes=a,t.memoizedState=h}}function Dh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var za={},Zn=nr(za),Aa=nr(za),ba=nr(za);function yr(t){if(t===za)throw Error(Q(174));return t}function of(t,e){switch(Je(ba,e),Je(Aa,t),Je(Zn,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fu(e,t)}nt(Zn),Je(Zn,e)}function Ts(){nt(Zn),nt(Aa),nt(ba)}function mg(t){yr(ba.current);var e=yr(Zn.current),n=Fu(e,t.type);e!==n&&(Je(Aa,t),Je(Zn,n))}function lf(t){Aa.current===t&&(nt(Zn),nt(Aa))}var ot=nr(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function cf(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var el=xi.ReactCurrentDispatcher,kc=xi.ReactCurrentBatchConfig,Cr=0,lt=null,Mt=null,Rt=null,Al=!1,la=!1,Ca=0,fx=0;function kt(){throw Error(Q(321))}function uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function df(t,e,n,i,r,s){if(Cr=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?gx:vx,t=n(i,r),la){s=0;do{if(la=!1,Ca=0,25<=s)throw Error(Q(301));s+=1,Rt=Mt=null,e.updateQueue=null,el.current=_x,t=n(i,r)}while(la)}if(el.current=bl,e=Mt!==null&&Mt.next!==null,Cr=0,Rt=Mt=lt=null,Al=!1,e)throw Error(Q(300));return t}function ff(){var t=Ca!==0;return Ca=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?lt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Pn(){if(Mt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?lt.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(Q(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?lt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Ra(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Cr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,lt.lanes|=d,Rr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Gn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,Rr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Gn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function gg(){}function vg(t,e){var n=lt,i=Pn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,hf(yg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Pa(9,xg.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(Q(349));Cr&30||_g(n,e,r)}return r}function _g(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xg(t,e,n,i){e.value=n,e.getSnapshot=i,Sg(e)&&Mg(t)}function yg(t,e,n){return n(function(){Sg(e)&&Mg(t)})}function Sg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function Mg(t){var e=gi(t,1);e!==null&&Vn(e,t,1,-1)}function Uh(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=mx.bind(null,lt,t),[e.memoizedState,t]}function Pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Eg(){return Pn().memoizedState}function tl(t,e,n,i){var r=Xn();lt.flags|=t,r.memoizedState=Pa(1|e,n,void 0,i===void 0?null:i)}function Yl(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&uf(i,a.deps)){r.memoizedState=Pa(e,n,s,i);return}}lt.flags|=t,r.memoizedState=Pa(1|e,n,s,i)}function Ih(t,e){return tl(8390656,8,t,e)}function hf(t,e){return Yl(2048,8,t,e)}function wg(t,e){return Yl(4,2,t,e)}function Tg(t,e){return Yl(4,4,t,e)}function Ag(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bg(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,Ag.bind(null,e,t),n)}function pf(){}function Cg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&uf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Rg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&uf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Pg(t,e,n){return Cr&21?(Gn(n,e)||(n=I0(),lt.lanes|=n,Rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function hx(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{$e=n,kc.transition=i}}function Lg(){return Pn().memoizedState}function px(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ng(t))Dg(e,n);else if(n=hg(t,e,n,i),n!==null){var r=Zt();Vn(n,t,i,r),Ug(n,e,i)}}function mx(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ng(t))Dg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Gn(o,a)){var l=e.interleaved;l===null?(r.next=r,sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=hg(t,e,r,i),n!==null&&(r=Zt(),Vn(n,t,i,r),Ug(n,e,i))}}function Ng(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function Dg(t,e){la=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ug(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wd(t,n)}}var bl={readContext:Rn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},gx={readContext:Rn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Ih,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,Ag.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=px.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Uh,useDebugValue:pf,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Uh(!1),e=t[0];return t=hx.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=Xn();if(rt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),Pt===null)throw Error(Q(349));Cr&30||_g(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ih(yg.bind(null,i,s,t),[t]),i.flags|=2048,Pa(9,xg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Pt.identifierPrefix;if(rt){var n=di,i=ui;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vx={readContext:Rn,useCallback:Cg,useContext:Rn,useEffect:hf,useImperativeHandle:bg,useInsertionEffect:wg,useLayoutEffect:Tg,useMemo:Rg,useReducer:zc,useRef:Eg,useState:function(){return zc(Ra)},useDebugValue:pf,useDeferredValue:function(t){var e=Pn();return Pg(e,Mt.memoizedState,t)},useTransition:function(){var t=zc(Ra)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:gg,useSyncExternalStore:vg,useId:Lg,unstable_isNewReconciler:!1},_x={readContext:Rn,useCallback:Cg,useContext:Rn,useEffect:hf,useImperativeHandle:bg,useInsertionEffect:wg,useLayoutEffect:Tg,useMemo:Rg,useReducer:Bc,useRef:Eg,useState:function(){return Bc(Ra)},useDebugValue:pf,useDeferredValue:function(t){var e=Pn();return Mt===null?e.memoizedState=t:Pg(e,Mt.memoizedState,t)},useTransition:function(){var t=Bc(Ra)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:gg,useSyncExternalStore:vg,useId:Lg,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=ji(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Vn(e,t,r,i),Jo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=ji(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Vn(e,t,r,i),Jo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=ji(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(t,r,i),e!==null&&(Vn(e,t,i,n),Jo(e,t,i))}};function Oh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,i)||!Ma(r,s):!0}function Ig(t,e,n){var i=!1,r=Ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=rn(e)?Ar:Gt.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):Ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},af(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=rn(e)?Ar:Gt.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ql.enqueueReplaceState(r,r.state,null),wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=X1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function Og(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,gd=i),ad(t,e)},n}function Fg(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ad(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function kh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Dx.bind(null,t,e,n),e.then(t,t))}function zh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Gi(n,e,1))),n.lanes|=1),t)}var yx=xi.ReactCurrentOwner,tn=!1;function Yt(t,e,n,i){e.child=t===null?fg(e,null,n,i):ws(e,t.child,n,i)}function Hh(t,e,n,i,r){n=n.render;var s=e.ref;return vs(e,r),i=df(t,e,n,i,s,r),n=ff(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(rt&&n&&Qd(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Vh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Mf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kg(t,e,s,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(a,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function kg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ma(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return od(t,e,n,i,r)}function zg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(ds,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Je(ds,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Je(ds,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Je(ds,hn),hn|=i;return Yt(t,e,r,n),e.child}function Bg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,i,r){var s=rn(n)?Ar:Gt.current;return s=Ms(e,s),vs(e,r),n=df(t,e,n,i,s,r),i=ff(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(rt&&i&&Qd(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Gh(t,e,n,i,r){if(rn(n)){var s=!0;xl(e)}else s=!1;if(vs(e,r),e.stateNode===null)nl(t,e),Ig(e,n,i),sd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=rn(n)?Ar:Gt.current,c=Ms(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Fh(e,a,i,c),Pi=!1;var f=e.memoizedState;a.state=f,wl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||nn.current||Pi?(typeof d=="function"&&(rd(e,n,d,i),l=e.memoizedState),(o=Pi||Oh(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,pg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:In(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=rn(n)?Ar:Gt.current,l=Ms(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&Fh(e,a,i,l),Pi=!1,f=e.memoizedState,a.state=f,wl(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||nn.current||Pi?(typeof m=="function"&&(rd(e,n,m,i),_=e.memoizedState),(c=Pi||Oh(e,n,c,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ld(t,e,n,i,s,r)}function ld(t,e,n,i,r,s){Bg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ch(e,n,!1),vi(t,e,s);i=e.stateNode,yx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,o,s)):Yt(t,e,o,s),e.memoizedState=i.state,r&&Ch(e,n,!0),e.child}function Hg(t){var e=t.stateNode;e.pendingContext?bh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bh(t,e.context,!1),of(t,e.containerInfo)}function Wh(t,e,n,i,r){return Es(),ef(r),e.flags|=256,Yt(t,e,n,i),e.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vg(t,e,n){var i=e.pendingProps,r=ot.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Je(ot,r&1),t===null)return nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ql(a,i,0,null),t=Mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ud(n),e.memoizedState=cd,t):mf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Sx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Xi(o,s):(s=Mr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ud(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=cd,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function mf(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function po(t,e,n,i){return i!==null&&ef(i),ws(e,t.child,null,n),t=mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Hc(Error(Q(422))),po(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ws(e,t.child,null,a),e.child.memoizedState=ud(a),e.memoizedState=cd,s);if(!(e.mode&1))return po(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(Q(419)),i=Hc(s,i,void 0),po(t,e,a,i)}if(o=(a&t.childLanes)!==0,tn||o){if(i=Pt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),Vn(i,t,r,-1))}return Sf(),i=Hc(Error(Q(421))),po(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ux.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Vi(r.nextSibling),mn=e,rt=!0,Fn=null,t!==null&&(Mn[En++]=ui,Mn[En++]=di,Mn[En++]=br,ui=t.id,di=t.overflow,br=e),e=mf(e,i.children),e.flags|=4096,e)}function jh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),id(t.return,e,n)}function Vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Gg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jh(t,n,e);else if(t.tag===19)jh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Je(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mx(t,e,n){switch(e.tag){case 3:Hg(e),Es();break;case 5:mg(e);break;case 1:rn(e.type)&&xl(e);break;case 4:of(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Je(Ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Je(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?Vg(t,e,n):(Je(ot,ot.current&1),t=vi(t,e,n),t!==null?t.sibling:null);Je(ot,ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Gg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Je(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,zg(t,e,n)}return vi(t,e,n)}var Wg,dd,jg,Xg;Wg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dd=function(){};jg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(Zn.current);var s=null;switch(n){case"input":r=Du(t,r),i=Du(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=Ou(t,r),i=Ou(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vl)}ku(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&et("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Xg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xs(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ex(t,e,n){var i=e.pendingProps;switch(Jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return rn(e.type)&&_l(),zt(e),null;case 3:return i=e.stateNode,Ts(),nt(nn),nt(Gt),cf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(xd(Fn),Fn=null))),dd(t,e),zt(e),null;case 5:lf(e);var r=yr(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)jg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return zt(e),null}if(t=yr(Zn.current),fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[Ta]=s,t=(e.mode&1)!==0,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)et(ta[r],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":eh(i,s),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},et("invalid",i);break;case"textarea":nh(i,s),et("invalid",i)}ku(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",""+o]):ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&et("scroll",i)}switch(n){case"input":no(i),th(i,s,!0);break;case"textarea":no(i),ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[qn]=e,t[Ta]=i,Wg(t,e,!1,!1),e.stateNode=t;e:{switch(a=zu(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)et(ta[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":eh(t,i),r=Du(t,i),et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),et("invalid",t);break;case"textarea":nh(t,i),r=Ou(t,i),et("invalid",t);break;default:r=i}ku(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?E0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&S0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&et("scroll",t):l!=null&&kd(t,s,l,a))}switch(n){case"input":no(t),th(t,i,!1);break;case"textarea":no(t),ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Xg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(n=yr(ba.current),yr(Zn.current),fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:uo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return zt(e),null;case 13:if(nt(ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&pn!==null&&e.mode&1&&!(e.flags&128))ug(),Es(),e.flags|=98560,s=!1;else if(s=fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[qn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Fn!==null&&(xd(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?Et===0&&(Et=3):Sf())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ts(),dd(t,e),t===null&&Ea(e.stateNode.containerInfo),zt(e),null;case 10:return rf(e.type._context),zt(e),null;case 17:return rn(e.type)&&_l(),zt(e),null;case 19:if(nt(ot),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Xs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Tl(t),a!==null){for(e.flags|=128,Xs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Je(ot,ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>bs&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!rt)return zt(e),null}else 2*vt()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ot.current,Je(ot,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return yf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function wx(t,e){switch(Jd(e),e.tag){case 1:return rn(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),nt(nn),nt(Gt),cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lf(e),null;case 13:if(nt(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(ot),null;case 4:return Ts(),null;case 10:return rf(e.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var mo=!1,Vt=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,fe=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function fd(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Xh=!1;function Ax(t,e){if(qu=pl,t=Z0(),Zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:t,selectionRange:n},pl=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:In(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(S){pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=Xh,Xh=!1,_}function ca(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fd(e,n,s)}r=r.next}while(r!==i)}}function Kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $g(t){var e=t.alternate;e!==null&&(t.alternate=null,$g(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Ta],delete e[Ju],delete e[lx],delete e[cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yg(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vl));else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}var Nt=null,On=!1;function Si(t,e,n){for(n=n.child;n!==null;)qg(t,e,n),n=n.sibling}function qg(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:Vt||us(n,e);case 6:var i=Nt,r=On;Nt=null,Si(t,e,n),Nt=i,On=r,Nt!==null&&(On?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(On?(t=Nt,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),ya(t)):Ic(Nt,n.stateNode));break;case 4:i=Nt,r=On,Nt=n.stateNode.containerInfo,On=!0,Si(t,e,n),Nt=i,On=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&fd(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Vt&&(us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Si(t,e,n),Vt=i):Si(t,e,n);break;default:Si(t,e,n)}}function Yh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tx),e.forEach(function(i){var r=Ix.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Nt=o.stateNode,On=!1;break e;case 3:Nt=o.stateNode.containerInfo,On=!0;break e;case 4:Nt=o.stateNode.containerInfo,On=!0;break e}o=o.return}if(Nt===null)throw Error(Q(160));qg(s,a,r),Nt=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kg(e,t),e=e.sibling}function Kg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),jn(t),i&4){try{ca(3,t,t.return),Kl(3,t)}catch(y){pt(t,t.return,y)}try{ca(5,t,t.return)}catch(y){pt(t,t.return,y)}}break;case 1:Ln(e,t),jn(t),i&512&&n!==null&&us(n,n.return);break;case 5:if(Ln(e,t),jn(t),i&512&&n!==null&&us(n,n.return),t.flags&32){var r=t.stateNode;try{ga(r,"")}catch(y){pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&_0(r,s),zu(o,a);var c=zu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?E0(r,h):d==="dangerouslySetInnerHTML"?S0(r,h):d==="children"?ga(r,h):kd(r,d,h,c)}switch(o){case"input":Uu(r,s);break;case"textarea":x0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?hs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ta]=s}catch(y){pt(t,t.return,y)}}break;case 6:if(Ln(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(Q(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){pt(t,t.return,y)}}break;case 3:if(Ln(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(y){pt(t,t.return,y)}break;case 4:Ln(e,t),jn(t);break;case 13:Ln(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_f=vt())),i&4&&Yh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||d,Ln(e,t),Vt=c):Ln(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(fe=t,d=t.child;d!==null;){for(h=fe=d;fe!==null;){switch(f=fe,m=f.child,f.tag){case 0:case 11:case 14:case 15:ca(4,f,f.return);break;case 1:us(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){pt(i,n,y)}}break;case 5:us(f,f.return);break;case 22:if(f.memoizedState!==null){Kh(h);continue}}m!==null?(m.return=f,fe=m):Kh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=M0("display",a))}catch(y){pt(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){pt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ln(e,t),jn(t),i&4&&Yh(t);break;case 21:break;default:Ln(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yg(n)){var i=n;break e}n=n.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=$h(t);md(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=$h(t);pd(t,o,a);break;default:throw Error(Q(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bx(t,e,n){fe=t,Zg(t)}function Zg(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||mo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Vt;o=mo;var c=Vt;if(mo=a,(Vt=l)&&!c)for(fe=r;fe!==null;)a=fe,l=a.child,a.tag===22&&a.memoizedState!==null?Zh(r):l!==null?(l.return=a,fe=l):Zh(r);for(;s!==null;)fe=s,Zg(s),s=s.sibling;fe=r,mo=o,Vt=c}qh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):qh(t)}}function qh(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ya(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Vt||e.flags&512&&hd(e)}catch(f){pt(e,e.return,f)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Kh(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Zh(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kl(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{hd(e)}catch(l){pt(e,s,l)}break;case 5:var a=e.return;try{hd(e)}catch(l){pt(e,a,l)}}}catch(l){pt(e,e.return,l)}if(e===t){fe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,fe=o;break}fe=e.return}}var Cx=Math.ceil,Cl=xi.ReactCurrentDispatcher,gf=xi.ReactCurrentOwner,Cn=xi.ReactCurrentBatchConfig,Ve=0,Pt=null,St=null,It=0,hn=0,ds=nr(0),Et=0,La=null,Rr=0,Zl=0,vf=0,ua=null,en=null,_f=0,bs=1/0,oi=null,Rl=!1,gd=null,Wi=null,go=!1,Ui=null,Pl=0,da=0,vd=null,il=-1,rl=0;function Zt(){return Ve&6?vt():il!==-1?il:il=vt()}function ji(t){return t.mode&1?Ve&2&&It!==0?It&-It:dx.transition!==null?(rl===0&&(rl=I0()),rl):(t=$e,t!==0||(t=window.event,t=t===void 0?16:V0(t.type)),t):1}function Vn(t,e,n,i){if(50<da)throw da=0,vd=null,Error(Q(185));Oa(t,n,i),(!(Ve&2)||t!==Pt)&&(t===Pt&&(!(Ve&2)&&(Zl|=n),Et===4&&Ni(t,It)),sn(t,i),n===1&&Ve===0&&!(e.mode&1)&&(bs=vt()+500,$l&&ir()))}function sn(t,e){var n=t.callbackNode;d_(t,e);var i=hl(t,t===Pt?It:0);if(i===0)n!==null&&ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ah(n),e===1)t.tag===0?ux(Qh.bind(null,t)):og(Qh.bind(null,t)),ax(function(){!(Ve&6)&&ir()}),n=null;else{switch(O0(i)){case 1:n=Gd;break;case 4:n=D0;break;case 16:n=fl;break;case 536870912:n=U0;break;default:n=fl}n=sv(n,Qg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qg(t,e){if(il=-1,rl=0,Ve&6)throw Error(Q(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var i=hl(t,t===Pt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ll(t,i);else{e=i;var r=Ve;Ve|=2;var s=ev();(Pt!==t||It!==e)&&(oi=null,bs=vt()+500,Sr(t,e));do try{Lx();break}catch(o){Jg(t,o)}while(1);nf(),Cl.current=s,Ve=r,St!==null?e=0:(Pt=null,It=0,e=Et)}if(e!==0){if(e===2&&(r=Wu(t),r!==0&&(i=r,e=_d(t,r))),e===1)throw n=La,Sr(t,0),Ni(t,i),sn(t,vt()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!Rx(r)&&(e=Ll(t,i),e===2&&(s=Wu(t),s!==0&&(i=s,e=_d(t,s))),e===1))throw n=La,Sr(t,0),Ni(t,i),sn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:fr(t,en,oi);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=_f+500-vt(),10<e)){if(hl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Qu(fr.bind(null,t,en,oi),e);break}fr(t,en,oi);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Hn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cx(i/1960))-i,10<i){t.timeoutHandle=Qu(fr.bind(null,t,en,oi),i);break}fr(t,en,oi);break;case 5:fr(t,en,oi);break;default:throw Error(Q(329))}}}return sn(t,vt()),t.callbackNode===n?Qg.bind(null,t):null}function _d(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=en,en=n,e!==null&&xd(e)),t}function xd(t){en===null?en=t:en.push.apply(en,t)}function Rx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~vf,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function Qh(t){if(Ve&6)throw Error(Q(327));_s();var e=hl(t,0);if(!(e&1))return sn(t,vt()),null;var n=Ll(t,e);if(t.tag!==0&&n===2){var i=Wu(t);i!==0&&(e=i,n=_d(t,i))}if(n===1)throw n=La,Sr(t,0),Ni(t,e),sn(t,vt()),n;if(n===6)throw Error(Q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,en,oi),sn(t,vt()),null}function xf(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(bs=vt()+500,$l&&ir())}}function Pr(t){Ui!==null&&Ui.tag===0&&!(Ve&6)&&_s();var e=Ve;Ve|=1;var n=Cn.transition,i=$e;try{if(Cn.transition=null,$e=1,t)return t()}finally{$e=i,Cn.transition=n,Ve=e,!(Ve&6)&&ir()}}function yf(){hn=ds.current,nt(ds)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Jd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:Ts(),nt(nn),nt(Gt),cf();break;case 5:lf(i);break;case 4:Ts();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:rf(i.type._context);break;case 22:case 23:yf()}n=n.return}if(Pt=t,St=t=Xi(t.current,null),It=hn=e,Et=0,La=null,vf=Zl=Rr=0,en=ua=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}xr=null}return t}function Jg(t,e){do{var n=St;try{if(nf(),el.current=bl,Al){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Al=!1}if(Cr=0,Rt=Mt=lt=null,la=!1,Ca=0,gf.current=null,n===null||n.return===null){Et=1,La=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=It,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=zh(a);if(m!==null){m.flags&=-257,Bh(m,a,o,s,e),m.mode&1&&kh(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){kh(s,c,e),Sf();break e}l=Error(Q(426))}}else if(rt&&o.mode&1){var p=zh(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Bh(p,a,o,s,e),ef(As(l,o));break e}}s=l=As(l,o),Et!==4&&(Et=2),ua===null?ua=[s]:ua.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Og(s,l,e);Nh(s,u);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Wi===null||!Wi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Fg(s,o,e);Nh(s,S);break e}}s=s.return}while(s!==null)}nv(n)}catch(T){e=T,St===n&&n!==null&&(St=n=n.return);continue}break}while(1)}function ev(){var t=Cl.current;return Cl.current=bl,t===null?bl:t}function Sf(){(Et===0||Et===3||Et===2)&&(Et=4),Pt===null||!(Rr&268435455)&&!(Zl&268435455)||Ni(Pt,It)}function Ll(t,e){var n=Ve;Ve|=2;var i=ev();(Pt!==t||It!==e)&&(oi=null,Sr(t,e));do try{Px();break}catch(r){Jg(t,r)}while(1);if(nf(),Ve=n,Cl.current=i,St!==null)throw Error(Q(261));return Pt=null,It=0,Et}function Px(){for(;St!==null;)tv(St)}function Lx(){for(;St!==null&&!n_();)tv(St)}function tv(t){var e=rv(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?nv(t):St=e,gf.current=null}function nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=Ex(n,e,hn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function fr(t,e,n){var i=$e,r=Cn.transition;try{Cn.transition=null,$e=1,Nx(t,e,n,i)}finally{Cn.transition=r,$e=i}return null}function Nx(t,e,n,i){do _s();while(Ui!==null);if(Ve&6)throw Error(Q(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(f_(t,s),t===Pt&&(St=Pt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,sv(fl,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var a=$e;$e=1;var o=Ve;Ve|=4,gf.current=null,Ax(t,n),Kg(n,t),Q_(Ku),pl=!!qu,Ku=qu=null,t.current=n,bx(n),i_(),Ve=o,$e=a,Cn.transition=s}else t.current=n;if(go&&(go=!1,Ui=t,Pl=r),s=t.pendingLanes,s===0&&(Wi=null),a_(n.stateNode),sn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=gd,gd=null,t;return Pl&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===vd?da++:(da=0,vd=t):da=0,ir(),null}function _s(){if(Ui!==null){var t=O0(Pl),e=Cn.transition,n=$e;try{if(Cn.transition=null,$e=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,Pl=0,Ve&6)throw Error(Q(331));var r=Ve;for(Ve|=4,fe=t.current;fe!==null;){var s=fe,a=s.child;if(fe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(fe=c;fe!==null;){var d=fe;switch(d.tag){case 0:case 11:case 15:ca(8,d,s)}var h=d.child;if(h!==null)h.return=d,fe=h;else for(;fe!==null;){d=fe;var f=d.sibling,m=d.return;if($g(d),d===c){fe=null;break}if(f!==null){f.return=m,fe=f;break}fe=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}fe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,fe=a;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,fe=u;break e}fe=s.return}}var v=t.current;for(fe=v;fe!==null;){a=fe;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,fe=g;else e:for(a=v;fe!==null;){if(o=fe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Kl(9,o)}}catch(T){pt(o,o.return,T)}if(o===a){fe=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,fe=S;break e}fe=o.return}}if(Ve=r,ir(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Vl,t)}catch{}i=!0}return i}finally{$e=n,Cn.transition=e}}return!1}function Jh(t,e,n){e=As(n,e),e=Og(t,e,1),t=Gi(t,e,1),e=Zt(),t!==null&&(Oa(t,1,e),sn(t,e))}function pt(t,e,n){if(t.tag===3)Jh(t,t,n);else for(;e!==null;){if(e.tag===3){Jh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=As(n,t),t=Fg(e,t,1),e=Gi(e,t,1),t=Zt(),e!==null&&(Oa(e,1,t),sn(e,t));break}}e=e.return}}function Dx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(It&n)===n&&(Et===4||Et===3&&(It&130023424)===It&&500>vt()-_f?Sr(t,0):vf|=n),sn(t,e)}function iv(t,e){e===0&&(t.mode&1?(e=so,so<<=1,!(so&130023424)&&(so=4194304)):e=1);var n=Zt();t=gi(t,e),t!==null&&(Oa(t,e,n),sn(t,n))}function Ux(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iv(t,n)}function Ix(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),iv(t,n)}var rv;rv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,Mx(t,e,n);tn=!!(t.flags&131072)}else tn=!1,rt&&e.flags&1048576&&lg(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nl(t,e),t=e.pendingProps;var r=Ms(e,Gt.current);vs(e,n),r=df(null,e,i,t,r,n);var s=ff();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,af(e),r.updater=ql,e.stateNode=r,r._reactInternals=e,sd(e,i,t,n),e=ld(null,e,i,!0,s,n)):(e.tag=0,rt&&s&&Qd(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fx(i),t=In(i,t),r){case 0:e=od(null,e,i,t,n);break e;case 1:e=Gh(null,e,i,t,n);break e;case 11:e=Hh(null,e,i,t,n);break e;case 14:e=Vh(null,e,i,In(i.type,t),n);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Gh(t,e,i,r,n);case 3:e:{if(Hg(e),t===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,pg(t,e),wl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(Q(423)),e),e=Wh(t,e,i,n,r);break e}else if(i!==r){r=As(Error(Q(424)),e),e=Wh(t,e,i,n,r);break e}else for(pn=Vi(e.stateNode.containerInfo.firstChild),mn=e,rt=!0,Fn=null,n=fg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=vi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return mg(e),t===null&&nd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Zu(i,r)?a=null:s!==null&&Zu(i,s)&&(e.flags|=32),Bg(t,e),Yt(t,e,a,n),e.child;case 6:return t===null&&nd(e),null;case 13:return Vg(t,e,n);case 4:return of(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ws(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Hh(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Je(Ml,i._currentValue),i._currentValue=a,s!==null)if(Gn(s.value,a)){if(s.children===r.children&&!nn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),id(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(Q(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),id(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vs(e,n),r=Rn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),Vh(t,e,i,r,n);case 15:return kg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),nl(t,e),e.tag=1,rn(i)?(t=!0,xl(e)):t=!1,vs(e,n),Ig(e,i,r),sd(e,i,r,n),ld(null,e,i,!0,t,n);case 19:return Gg(t,e,n);case 22:return zg(t,e,n)}throw Error(Q(156,e.tag))};function sv(t,e){return N0(t,e)}function Ox(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new Ox(t,e,n,i)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fx(t){if(typeof t=="function")return Mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bd)return 11;if(t===Hd)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Mf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ts:return Mr(n.children,r,s,e);case zd:a=8,r|=8;break;case Ru:return t=bn(12,n,e,r|2),t.elementType=Ru,t.lanes=s,t;case Pu:return t=bn(13,n,e,r),t.elementType=Pu,t.lanes=s,t;case Lu:return t=bn(19,n,e,r),t.elementType=Lu,t.lanes=s,t;case m0:return Ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h0:a=10;break e;case p0:a=9;break e;case Bd:a=11;break e;case Hd:a=14;break e;case Ri:a=16,i=null;break e}throw Error(Q(130,t==null?t:typeof t,""))}return e=bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function Ql(t,e,n,i){return t=bn(22,t,i,e),t.elementType=m0,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ef(t,e,n,i,r,s,a,o,l){return t=new kx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(s),t}function zx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function av(t){if(!t)return Ji;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(Q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(t.tag===1){var n=t.type;if(rn(n))return ag(t,n,e)}return e}function ov(t,e,n,i,r,s,a,o,l){return t=Ef(n,i,!0,t,r,s,a,o,l),t.context=av(null),n=t.current,i=Zt(),r=ji(n),s=hi(i,r),s.callback=e??null,Gi(n,s,r),t.current.lanes=r,Oa(t,r,i),sn(t,i),t}function Jl(t,e,n,i){var r=e.current,s=Zt(),a=ji(r);return n=av(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gi(r,e,a),t!==null&&(Vn(t,r,a,s),Jo(t,r,a)),a}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wf(t,e){ep(t,e),(t=t.alternate)&&ep(t,e)}function Bx(){return null}var lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tf(t){this._internalRoot=t}ec.prototype.render=Tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));Jl(t,e,null,null)};ec.prototype.unmount=Tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){Jl(null,t,null,null)}),e[mi]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Li.length&&e!==0&&e<Li[n].priority;n++);Li.splice(n,0,t),n===0&&H0(t)}};function Af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tp(){}function Hx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Nl(a);s.call(c)}}var a=ov(e,i,t,0,null,!1,!1,"",tp);return t._reactRootContainer=a,t[mi]=a.current,Ea(t.nodeType===8?t.parentNode:t),Pr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Nl(l);o.call(c)}}var l=Ef(t,0,!1,null,null,!1,!1,"",tp);return t._reactRootContainer=l,t[mi]=l.current,Ea(t.nodeType===8?t.parentNode:t),Pr(function(){Jl(e,l,n,i)}),l}function nc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Nl(a);o.call(l)}}Jl(e,a,t,r)}else a=Hx(n,e,t,r,i);return Nl(a)}F0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(Wd(e,n|1),sn(e,vt()),!(Ve&6)&&(bs=vt()+500,ir()))}break;case 13:Pr(function(){var i=gi(t,1);if(i!==null){var r=Zt();Vn(i,t,1,r)}}),wf(t,1)}};jd=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=Zt();Vn(e,t,134217728,n)}wf(t,134217728)}};k0=function(t){if(t.tag===13){var e=ji(t),n=gi(t,e);if(n!==null){var i=Zt();Vn(n,t,e,i)}wf(t,e)}};z0=function(){return $e};B0=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};Hu=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xl(i);if(!r)throw Error(Q(90));v0(i),Uu(i,r)}}}break;case"textarea":x0(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};A0=xf;b0=Pr;var Vx={usingClientEntryPoint:!1,Events:[ka,ss,Xl,w0,T0,xf]},$s={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gx={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=P0(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{Vl=vo.inject(Gx),Kn=vo}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vx;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Af(e))throw Error(Q(200));return zx(t,e,null,n)};_n.createRoot=function(t,e){if(!Af(t))throw Error(Q(299));var n=!1,i="",r=lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ef(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,Ea(t.nodeType===8?t.parentNode:t),new Tf(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=P0(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Pr(t)};_n.hydrate=function(t,e,n){if(!tc(e))throw Error(Q(200));return nc(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Af(t))throw Error(Q(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=lv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ov(e,null,t,1,n??null,r,!1,s,a),t[mi]=e.current,Ea(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ec(e)};_n.render=function(t,e,n){if(!tc(e))throw Error(Q(200));return nc(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!tc(t))throw Error(Q(40));return t._reactRootContainer?(Pr(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};_n.unstable_batchedUpdates=xf;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tc(n))throw Error(Q(200));if(t==null||t._reactInternals===void 0)throw Error(Q(38));return nc(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv)}catch(t){console.error(t)}}cv(),c0.exports=_n;var uv=c0.exports,np=uv;bu.createRoot=np.createRoot,bu.hydrateRoot=np.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bf="158",Wx=0,ip=1,jx=2,dv=1,Xx=2,ai=3,er=0,an=1,ci=2,$i=0,xs=1,rp=2,sp=3,ap=4,$x=5,gr=100,Yx=101,qx=102,op=103,lp=104,Kx=200,Zx=201,Qx=202,Jx=203,yd=204,Sd=205,e2=206,t2=207,n2=208,i2=209,r2=210,s2=211,a2=212,o2=213,l2=214,c2=0,u2=1,d2=2,Dl=3,f2=4,h2=5,p2=6,m2=7,fv=0,g2=1,v2=2,Yi=0,_2=1,x2=2,y2=3,S2=4,M2=5,hv=300,Cs=301,Rs=302,Md=303,Ed=304,ic=306,wd=1e3,zn=1001,Td=1002,qt=1003,cp=1004,jc=1005,wn=1006,E2=1007,Na=1008,qi=1009,w2=1010,T2=1011,Cf=1012,pv=1013,Ii=1014,Oi=1015,Da=1016,mv=1017,gv=1018,Er=1020,A2=1021,Bn=1023,b2=1024,C2=1025,wr=1026,Ps=1027,R2=1028,vv=1029,P2=1030,_v=1031,xv=1033,Xc=33776,$c=33777,Yc=33778,qc=33779,up=35840,dp=35841,fp=35842,hp=35843,L2=36196,pp=37492,mp=37496,gp=37808,vp=37809,_p=37810,xp=37811,yp=37812,Sp=37813,Mp=37814,Ep=37815,wp=37816,Tp=37817,Ap=37818,bp=37819,Cp=37820,Rp=37821,Kc=36492,Pp=36494,Lp=36495,N2=36283,Np=36284,Dp=36285,Up=36286,yv=3e3,Tr=3001,D2=3200,U2=3201,I2=0,O2=1,An="",Dt="srgb",_i="srgb-linear",Rf="display-p3",rc="display-p3-linear",Ul="linear",tt="srgb",Il="rec709",Ol="p3",Or=7680,Ip=519,F2=512,k2=513,z2=514,B2=515,H2=516,V2=517,G2=518,W2=519,Op=35044,Fp="300 es",Ad=1035,fi=2e3,Fl=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kp=1234567;const fa=Math.PI/180,Ua=180/Math.PI;function Os(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function Pf(t,e){return(t%e+e)%e}function j2(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function X2(t,e,n){return t!==e?(n-t)/(e-t):0}function ha(t,e,n){return(1-n)*t+n*e}function $2(t,e,n,i){return ha(t,e,1-Math.exp(-n*i))}function Y2(t,e=1){return e-Math.abs(Pf(t,e*2)-e)}function q2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function K2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Z2(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Q2(t,e){return t+Math.random()*(e-t)}function J2(t){return t*(.5-Math.random())}function ey(t){t!==void 0&&(kp=t);let e=kp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ty(t){return t*fa}function ny(t){return t*Ua}function bd(t){return(t&t-1)===0&&t!==0}function iy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function kl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ry(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*h,l*f,o*c);break;case"YZY":t.set(l*f,o*d,l*h,o*c);break;case"ZXZ":t.set(l*h,l*f,o*d,o*c);break;case"XZX":t.set(o*d,l*_,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*_,o*c);break;case"ZYZ":t.set(l*_,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Zc={DEG2RAD:fa,RAD2DEG:Ua,generateUUID:Os,clamp:Kt,euclideanModulo:Pf,mapLinear:j2,inverseLerp:X2,lerp:ha,damp:$2,pingpong:Y2,smoothstep:q2,smootherstep:K2,randInt:Z2,randFloat:Q2,randFloatSpread:J2,seededRandom:ey,degToRad:ty,radToDeg:ny,isPowerOfTwo:bd,ceilPowerOfTwo:iy,floorPowerOfTwo:kl,setQuaternionFromProperEuler:ry,normalize:Xt,denormalize:Qr};class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],y=r[0],p=r[3],u=r[6],v=r[1],g=r[4],S=r[7],T=r[2],C=r[5],b=r[8];return s[0]=a*y+o*v+l*T,s[3]=a*p+o*g+l*C,s[6]=a*u+o*S+l*b,s[1]=c*y+d*v+h*T,s[4]=c*p+d*g+h*C,s[7]=c*u+d*S+h*b,s[2]=f*y+m*v+_*T,s[5]=f*p+m*g+_*C,s[8]=f*u+m*S+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,m=c*s-a*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Qc.makeScale(e,n)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qc=new ke;function Sv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sy(){const t=zl("canvas");return t.style.display="block",t}const zp={};function pa(t){t in zp||(zp[t]=!0,console.warn(t))}const Bp=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hp=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_o={[_i]:{transfer:Ul,primaries:Il,toReference:t=>t,fromReference:t=>t},[Dt]:{transfer:tt,primaries:Il,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[rc]:{transfer:Ul,primaries:Ol,toReference:t=>t.applyMatrix3(Hp),fromReference:t=>t.applyMatrix3(Bp)},[Rf]:{transfer:tt,primaries:Ol,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Hp),fromReference:t=>t.applyMatrix3(Bp).convertLinearToSRGB()}},ay=new Set([_i,rc]),qe={enabled:!0,_workingColorSpace:_i,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ay.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=_o[e].toReference,r=_o[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return _o[t].primaries},getTransfer:function(t){return t===An?Ul:_o[t].transfer}};function ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class Mv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=zl("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ys(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oy=0;class Ev{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Os(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(eu(r[a].image)):s.push(eu(r[a]))}else s=eu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Mv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ly=0;class gn extends Is{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=zn,r=zn,s=wn,a=Na,o=Bn,l=qi,c=gn.DEFAULT_ANISOTROPY,d=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Os(),this.name="",this.source=new Ev(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Tr?Dt:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Tr:yv}set encoding(e){pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Tr?Dt:An}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=hv;gn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(m+1)/2,T=(u+1)/2,C=(d+f)/4,b=(h+y)/4,D=(_+p)/4;return g>S&&g>T?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=b/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=D/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=b/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-y)/v,this.z=(f-d)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cy extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(pa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Tr?Dt:An),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ev(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends cy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class wv extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uy extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==f||c!==m||d!==_){let p=1-o;const u=l*f+c*m+d*_+h*y,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const T=Math.sqrt(g),C=Math.atan2(T,u*v);p=Math.sin(p*C)/T,o=Math.sin(o*C)/T}const S=o*v;if(l=l*p+f*S,c=c*p+m*S,d=d*p+_*S,h=h*p+y*S,p===1-o){const T=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=T,c*=T,d*=T,h*=T}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-o*m,e[n+2]=c*_+d*m+o*f-l*h,e[n+3]=d*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tu=new z,Vp=new Ba;class Ha{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),yo.subVectors(this.max,Ys),kr.subVectors(e.a,Ys),zr.subVectors(e.b,Ys),Br.subVectors(e.c,Ys),Mi.subVectors(zr,kr),Ei.subVectors(Br,zr),ar.subVectors(kr,Br);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-ar.z,ar.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,ar.z,0,-ar.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-ar.y,ar.x,0];return!nu(n,kr,zr,Br,yo)||(n=[1,0,0,0,1,0,0,0,1],!nu(n,kr,zr,Br,yo))?!1:(So.crossVectors(Mi,Ei),n=[So.x,So.y,So.z],nu(n,kr,zr,Br,yo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new z,new z,new z,new z,new z,new z,new z,new z],Nn=new z,xo=new Ha,kr=new z,zr=new z,Br=new z,Mi=new z,Ei=new z,ar=new z,Ys=new z,yo=new z,So=new z,or=new z;function nu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){or.fromArray(t,s);const o=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),d=i.dot(or);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const dy=new Ha,qs=new z,iu=new z;class sc{constructor(e=new z,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):dy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(iu)),this.expandByPoint(qs.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new z,ru=new z,Mo=new z,wi=new z,su=new z,Eo=new z,au=new z;class Tv{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ru.copy(e).add(n).multiplyScalar(.5),Mo.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(ru);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Mo),o=wi.dot(this.direction),l=-wi.dot(Mo),c=wi.lengthSq(),d=Math.abs(1-a*a);let h,f,m,_;if(d>0)if(h=a*l-o,f=a*o-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const y=1/d;h*=y,f*=y,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ru).addScaledVector(Mo,f),m}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){su.subVectors(n,e),Eo.subVectors(i,e),au.crossVectors(su,Eo);let a=this.direction.dot(au),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,e);const l=o*this.direction.dot(Eo.crossVectors(wi,Eo));if(l<0)return null;const c=o*this.direction.dot(su.cross(wi));if(c<0||l+c>a)return null;const d=-o*wi.dot(au);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,a,o,l,c,d,h,f,m,_,y,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,y,p)}set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,_=o*d,y=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,y=c*h;n[0]=f+y*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,y=c*h;n[0]=f-y*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=y-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,_=o*d,y=o*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=y-f*h,n[8]=_*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-y*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=a*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,hy)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ti.crossVectors(i,dn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ti.crossVectors(i,dn)),Ti.normalize(),wo.crossVectors(dn,Ti),r[0]=Ti.x,r[4]=wo.x,r[8]=dn.x,r[1]=Ti.y,r[5]=wo.y,r[9]=dn.y,r[2]=Ti.z,r[6]=wo.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],y=i[6],p=i[10],u=i[14],v=i[3],g=i[7],S=i[11],T=i[15],C=r[0],b=r[4],D=r[8],E=r[12],A=r[1],X=r[5],K=r[9],Z=r[13],N=r[2],j=r[6],q=r[10],Y=r[14],I=r[3],V=r[7],B=r[11],L=r[15];return s[0]=a*C+o*A+l*N+c*I,s[4]=a*b+o*X+l*j+c*V,s[8]=a*D+o*K+l*q+c*B,s[12]=a*E+o*Z+l*Y+c*L,s[1]=d*C+h*A+f*N+m*I,s[5]=d*b+h*X+f*j+m*V,s[9]=d*D+h*K+f*q+m*B,s[13]=d*E+h*Z+f*Y+m*L,s[2]=_*C+y*A+p*N+u*I,s[6]=_*b+y*X+p*j+u*V,s[10]=_*D+y*K+p*q+u*B,s[14]=_*E+y*Z+p*Y+u*L,s[3]=v*C+g*A+S*N+T*I,s[7]=v*b+g*X+S*j+T*V,s[11]=v*D+g*K+S*q+T*B,s[15]=v*E+g*Z+S*Y+T*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+y*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*d-s*l*d)+p*(+n*c*h-n*o*m-s*a*h+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*h+n*o*f+r*a*h-i*a*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],y=e[13],p=e[14],u=e[15],v=h*p*c-y*f*c+y*l*m-o*p*m-h*l*u+o*f*u,g=_*f*c-d*p*c-_*l*m+a*p*m+d*l*u-a*f*u,S=d*y*c-_*h*c+_*o*m-a*y*m-d*o*u+a*h*u,T=_*h*l-d*y*l-_*o*f+a*y*f+d*o*p-a*h*p,C=n*v+i*g+r*S+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=v*b,e[1]=(y*f*s-h*p*s-y*r*m+i*p*m+h*r*u-i*f*u)*b,e[2]=(o*p*s-y*l*s+y*r*c-i*p*c-o*r*u+i*l*u)*b,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*b,e[4]=g*b,e[5]=(d*p*s-_*f*s+_*r*m-n*p*m-d*r*u+n*f*u)*b,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*b,e[7]=(a*f*s-d*l*s+d*r*c-n*f*c-a*r*m+n*l*m)*b,e[8]=S*b,e[9]=(_*h*s-d*y*s-_*i*m+n*y*m+d*i*u-n*h*u)*b,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*b,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*m-n*o*m)*b,e[12]=T*b,e[13]=(d*y*r-_*h*r+_*i*f-n*y*f-d*i*p+n*h*p)*b,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*p-n*o*p)*b,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*f+n*o*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,m=s*d,_=s*h,y=a*d,p=a*h,u=o*h,v=l*c,g=l*d,S=l*h,T=i.x,C=i.y,b=i.z;return r[0]=(1-(y+u))*T,r[1]=(m+S)*T,r[2]=(_-g)*T,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(f+u))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(_+g)*b,r[9]=(p-v)*b,r[10]=(1-(f+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/s,d=1/a,h=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=d,Dn.elements[5]*=d,Dn.elements[6]*=d,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,n.setFromRotationMatrix(Dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(o===fi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Fl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(a-s),f=(n+e)*c,m=(i+r)*d;let _,y;if(o===fi)_=(a+s)*h,y=-2*h;else if(o===Fl)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new z,Dn=new Lt,fy=new z(0,0,0),hy=new z(1,1,1),Ti=new z,wo=new z,dn=new z,Gp=new Lt,Wp=new Ba;class ac{constructor(e=0,n=0,i=0,r=ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ac.DEFAULT_ORDER="XYZ";class Av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let py=0;const jp=new z,Vr=new Ba,ii=new Lt,To=new z,Ks=new z,my=new z,gy=new Ba,Xp=new z(1,0,0),$p=new z(0,1,0),Yp=new z(0,0,1),vy={type:"added"},_y={type:"removed"};class on extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new z,n=new ac,i=new Ba,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ke}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis($p,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis($p,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?To.copy(e):To.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ks,To,this.up):ii.lookAt(To,Ks,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ii),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_y)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,my),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new z(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new z,ri=new z,ou=new z,si=new z,Gr=new z,Wr=new z,qp=new z,lu=new z,cu=new z,uu=new z;let Ao=!1;class kn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ri.subVectors(i,n),ou.subVectors(e,n);const a=Un.dot(Un),o=Un.dot(ri),l=Un.dot(ou),c=ri.dot(ri),d=ri.dot(ou),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si),si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,n,i,r,s,a,o,l){return Ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ao=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,si),l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ri.subVectors(e,n),Un.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Un.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ao=!0),kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Gr.subVectors(r,i),Wr.subVectors(s,i),lu.subVectors(e,i);const l=Gr.dot(lu),c=Wr.dot(lu);if(l<=0&&c<=0)return n.copy(i);cu.subVectors(e,r);const d=Gr.dot(cu),h=Wr.dot(cu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Gr,a);uu.subVectors(e,s);const m=Gr.dot(uu),_=Wr.dot(uu);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Wr,o);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return qp.subVectors(s,r),o=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(qp,o);const u=1/(p+y+f);return a=y*u,o=f*u,n.copy(i).addScaledVector(Gr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},bo={h:0,s:0,l:0};function du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=Pf(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=du(a,s,e+1/3),this.g=du(a,s,e),this.b=du(a,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dt){const i=bv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Jc(e.r),this.g=Jc(e.g),this.b=Jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return qe.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Kt(Ht.r*255,0,255))*65536+Math.round(Kt(Ht.g*255,0,255))*256+Math.round(Kt(Ht.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Dt){qe.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Dt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(bo);const i=ha(Ai.h,bo.h,n),r=ha(Ai.s,bo.s,n),s=ha(Ai.l,bo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Xe;Xe.NAMES=bv;let xy=0;class Va extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=xs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=Sd,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yd&&(i.blendSrc=this.blendSrc),this.blendDst!==Sd&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ip&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cv extends Va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new z,Co=new Ze;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Op,this.updateRange={offset:0,count:-1},this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Co.fromBufferAttribute(this,n),Co.applyMatrix3(e),this.setXY(n,Co.x,Co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Rv extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Pv extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ki extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let yy=0;const Sn=new Lt,fu=new on,jr=new z,fn=new Ha,Zs=new Ha,Ct=new z;class yi extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sv(e)?Pv:Rv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ki(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(fn.min,Zs.min),fn.expandByPoint(Ct),Ct.addVectors(fn.max,Zs.max),fn.expandByPoint(Ct)):(fn.expandByPoint(Zs.min),fn.expandByPoint(Zs.max))}fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ct.fromBufferAttribute(o,c),l&&(jr.fromBufferAttribute(e,c),Ct.add(jr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let A=0;A<o;A++)c[A]=new z,d[A]=new z;const h=new z,f=new z,m=new z,_=new Ze,y=new Ze,p=new Ze,u=new z,v=new z;function g(A,X,K){h.fromArray(r,A*3),f.fromArray(r,X*3),m.fromArray(r,K*3),_.fromArray(a,A*2),y.fromArray(a,X*2),p.fromArray(a,K*2),f.sub(h),m.sub(h),y.sub(_),p.sub(_);const Z=1/(y.x*p.y-p.x*y.y);isFinite(Z)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(Z),v.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(Z),c[A].add(u),c[X].add(u),c[K].add(u),d[A].add(v),d[X].add(v),d[K].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,X=S.length;A<X;++A){const K=S[A],Z=K.start,N=K.count;for(let j=Z,q=Z+N;j<q;j+=3)g(i[j+0],i[j+1],i[j+2])}const T=new z,C=new z,b=new z,D=new z;function E(A){b.fromArray(s,A*3),D.copy(b);const X=c[A];T.copy(X),T.sub(b.multiplyScalar(b.dot(X))).normalize(),C.crossVectors(D,X);const Z=C.dot(d[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=Z}for(let A=0,X=S.length;A<X;++A){const K=S[A],Z=K.start,N=K.count;for(let j=Z,q=Z+N;j<q;j+=3)E(i[j+0]),E(i[j+1]),E(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,d=new z,h=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Qn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new Lt,lr=new Tv,Ro=new sc,Zp=new z,Xr=new z,$r=new z,Yr=new z,hu=new z,Po=new z,Lo=new Ze,No=new Ze,Do=new Ze,Qp=new z,Jp=new z,em=new z,Uo=new z,Io=new z;class Fi extends on{constructor(e=new yi,n=new Cv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(hu.fromBufferAttribute(h,e),a?Po.addScaledVector(hu,d):Po.addScaledVector(hu.sub(n),d))}n.add(Po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(Ro.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Ro,Zp)===null||lr.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Kp.copy(s).invert(),lr.copy(e.ray).applyMatrix4(Kp),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const p=f[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,T=g;S<T;S+=3){const C=o.getX(S),b=o.getX(S+1),D=o.getX(S+2);r=Oo(this,u,e,i,c,d,h,C,b,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const v=o.getX(p),g=o.getX(p+1),S=o.getX(p+2);r=Oo(this,a,e,i,c,d,h,v,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const p=f[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,T=g;S<T;S+=3){const C=S,b=S+1,D=S+2;r=Oo(this,u,e,i,c,d,h,C,b,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const v=p,g=p+1,S=p+2;r=Oo(this,a,e,i,c,d,h,v,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Sy(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===er,o),l===null)return null;Io.copy(o),Io.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Io);return c<n.near||c>n.far?null:{distance:c,point:Io.clone(),object:t}}function Oo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Xr),t.getVertexPosition(l,$r),t.getVertexPosition(c,Yr);const d=Sy(t,e,n,i,Xr,$r,Yr,Uo);if(d){r&&(Lo.fromBufferAttribute(r,o),No.fromBufferAttribute(r,l),Do.fromBufferAttribute(r,c),d.uv=kn.getInterpolation(Uo,Xr,$r,Yr,Lo,No,Do,new Ze)),s&&(Lo.fromBufferAttribute(s,o),No.fromBufferAttribute(s,l),Do.fromBufferAttribute(s,c),d.uv1=kn.getInterpolation(Uo,Xr,$r,Yr,Lo,No,Do,new Ze),d.uv2=d.uv1),a&&(Qp.fromBufferAttribute(a,o),Jp.fromBufferAttribute(a,l),em.fromBufferAttribute(a,c),d.normal=kn.getInterpolation(Uo,Xr,$r,Yr,Qp,Jp,em,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};kn.getNormal(Xr,$r,Yr,h.normal),d.face=h}return d}class Ga extends yi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(d,3)),this.setAttribute("uv",new Ki(h,2));function _(y,p,u,v,g,S,T,C,b,D,E){const A=S/b,X=T/D,K=S/2,Z=T/2,N=C/2,j=b+1,q=D+1;let Y=0,I=0;const V=new z;for(let B=0;B<q;B++){const L=B*X-Z;for(let O=0;O<j;O++){const oe=O*A-K;V[y]=oe*v,V[p]=L*g,V[u]=N,c.push(V.x,V.y,V.z),V[y]=0,V[p]=0,V[u]=C>0?1:-1,d.push(V.x,V.y,V.z),h.push(O/b),h.push(1-B/D),Y+=1}}for(let B=0;B<D;B++)for(let L=0;L<b;L++){const O=f+L+j*B,oe=f+L+j*(B+1),le=f+(L+1)+j*(B+1),he=f+(L+1)+j*B;l.push(O,oe,he),l.push(oe,le,he),I+=6}o.addGroup(m,I,E),m+=I,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Ls(t[n]);for(const r in i)e[r]=i[r]}return e}function My(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lv(t){return t.getRenderTarget()===null?t.outputColorSpace:qe.workingColorSpace}const Ey={clone:Ls,merge:$t};var wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends Va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wy,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=My(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Nv extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tn extends Nv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,Kr=1;class Ay extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(qr,Kr,e,n);r.layers=this.layers,this.add(r);const s=new Tn(qr,Kr,e,n);s.layers=this.layers,this.add(s);const a=new Tn(qr,Kr,e,n);a.layers=this.layers,this.add(a);const o=new Tn(qr,Kr,e,n);o.layers=this.layers,this.add(o);const l=new Tn(qr,Kr,e,n);l.layers=this.layers,this.add(l);const c=new Tn(qr,Kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Dv extends gn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Cs,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class by extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(pa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Tr?Dt:An),this.texture=new Dv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ga(5,5,5),s=new Nr({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:$i});s.uniforms.tEquirect.value=n;const a=new Fi(r,s),o=n.minFilter;return n.minFilter===Na&&(n.minFilter=wn),new Ay(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const pu=new z,Cy=new z,Ry=new ke;class hr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pu.subVectors(i,n).cross(Cy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ry.getNormalMatrix(e),r=this.coplanarPoint(pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new sc,Fo=new z;class Uv{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],y=r[10],p=r[11],u=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-m,S-u).normalize(),i[1].setComponents(l+s,f+c,p+m,S+u).normalize(),i[2].setComponents(l+a,f+d,p+_,S+v).normalize(),i[3].setComponents(l-a,f-d,p-_,S-v).normalize(),i[4].setComponents(l-o,f-h,p-y,S-g).normalize(),n===fi)i[5].setComponents(l+o,f+h,p+y,S+g).normalize();else if(n===Fl)i[5].setComponents(o,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Py(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,m=t.createBuffer();t.bindBuffer(d,m),t.bufferData(d,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,d,h){const f=d.array,m=d.updateRange;t.bindBuffer(h,c),m.count===-1?t.bufferSubData(h,0,f):(n?t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,d)):h.version<c.version&&(s(h.buffer,c,d),h.version=c.version)}return{get:a,remove:o,update:l}}class Lf extends yi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,m=[],_=[],y=[],p=[];for(let u=0;u<d;u++){const v=u*f-a;for(let g=0;g<c;g++){const S=g*h-s;_.push(S,-v,0),y.push(0,0,1),p.push(g/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const g=v+c*u,S=v+c*(u+1),T=v+1+c*(u+1),C=v+1+c*u;m.push(g,S,C),m.push(S,T,C)}this.setIndex(m),this.setAttribute("position",new Ki(_,3)),this.setAttribute("normal",new Ki(y,3)),this.setAttribute("uv",new Ki(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ny=`#ifdef USE_ALPHAHASH
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
#endif`,Dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
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
#endif`,ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,By=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vy=`#ifdef USE_IRIDESCENCE
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
#endif`,Gy=`#ifdef USE_BUMPMAP
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
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qy=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Jy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,eS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,oS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,lS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cS=`#ifdef USE_ENVMAP
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
#endif`,uS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
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
#endif`,fS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gS=`#ifdef USE_GRADIENTMAP
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
}`,vS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SS=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,MS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,ES=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bS=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,CS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,RS=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,PS=`#if defined( RE_IndirectDiffuse )
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
#endif`,LS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,IS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,OS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zS=`#if defined( USE_POINTS_UV )
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
#endif`,BS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,WS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,XS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$S=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZS=`#ifdef USE_NORMALMAP
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
#endif`,QS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,rM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,_M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SM=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MM=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RM=`uniform sampler2D t2D;
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,IM=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,OM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,FM=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VM=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,GM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,WM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,jM=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,XM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,$M=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,YM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qM=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,ZM=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,QM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,JM=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,eE=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,tE=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,nE=`uniform float size;
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
}`,iE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,sE=`uniform vec3 color;
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
}`,aE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,oE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,De={alphahash_fragment:Ly,alphahash_pars_fragment:Ny,alphamap_fragment:Dy,alphamap_pars_fragment:Uy,alphatest_fragment:Iy,alphatest_pars_fragment:Oy,aomap_fragment:Fy,aomap_pars_fragment:ky,begin_vertex:zy,beginnormal_vertex:By,bsdfs:Hy,iridescence_fragment:Vy,bumpmap_pars_fragment:Gy,clipping_planes_fragment:Wy,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:Xy,clipping_planes_vertex:$y,color_fragment:Yy,color_pars_fragment:qy,color_pars_vertex:Ky,color_vertex:Zy,common:Qy,cube_uv_reflection_fragment:Jy,defaultnormal_vertex:eS,displacementmap_pars_vertex:tS,displacementmap_vertex:nS,emissivemap_fragment:iS,emissivemap_pars_fragment:rS,colorspace_fragment:sS,colorspace_pars_fragment:aS,envmap_fragment:oS,envmap_common_pars_fragment:lS,envmap_pars_fragment:cS,envmap_pars_vertex:uS,envmap_physical_pars_fragment:MS,envmap_vertex:dS,fog_vertex:fS,fog_pars_vertex:hS,fog_fragment:pS,fog_pars_fragment:mS,gradientmap_pars_fragment:gS,lightmap_fragment:vS,lightmap_pars_fragment:_S,lights_lambert_fragment:xS,lights_lambert_pars_fragment:yS,lights_pars_begin:SS,lights_toon_fragment:ES,lights_toon_pars_fragment:wS,lights_phong_fragment:TS,lights_phong_pars_fragment:AS,lights_physical_fragment:bS,lights_physical_pars_fragment:CS,lights_fragment_begin:RS,lights_fragment_maps:PS,lights_fragment_end:LS,logdepthbuf_fragment:NS,logdepthbuf_pars_fragment:DS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:IS,map_fragment:OS,map_pars_fragment:FS,map_particle_fragment:kS,map_particle_pars_fragment:zS,metalnessmap_fragment:BS,metalnessmap_pars_fragment:HS,morphcolor_vertex:VS,morphnormal_vertex:GS,morphtarget_pars_vertex:WS,morphtarget_vertex:jS,normal_fragment_begin:XS,normal_fragment_maps:$S,normal_pars_fragment:YS,normal_pars_vertex:qS,normal_vertex:KS,normalmap_pars_fragment:ZS,clearcoat_normal_fragment_begin:QS,clearcoat_normal_fragment_maps:JS,clearcoat_pars_fragment:eM,iridescence_pars_fragment:tM,opaque_fragment:nM,packing:iM,premultiplied_alpha_fragment:rM,project_vertex:sM,dithering_fragment:aM,dithering_pars_fragment:oM,roughnessmap_fragment:lM,roughnessmap_pars_fragment:cM,shadowmap_pars_fragment:uM,shadowmap_pars_vertex:dM,shadowmap_vertex:fM,shadowmask_pars_fragment:hM,skinbase_vertex:pM,skinning_pars_vertex:mM,skinning_vertex:gM,skinnormal_vertex:vM,specularmap_fragment:_M,specularmap_pars_fragment:xM,tonemapping_fragment:yM,tonemapping_pars_fragment:SM,transmission_fragment:MM,transmission_pars_fragment:EM,uv_pars_fragment:wM,uv_pars_vertex:TM,uv_vertex:AM,worldpos_vertex:bM,background_vert:CM,background_frag:RM,backgroundCube_vert:PM,backgroundCube_frag:LM,cube_vert:NM,cube_frag:DM,depth_vert:UM,depth_frag:IM,distanceRGBA_vert:OM,distanceRGBA_frag:FM,equirect_vert:kM,equirect_frag:zM,linedashed_vert:BM,linedashed_frag:HM,meshbasic_vert:VM,meshbasic_frag:GM,meshlambert_vert:WM,meshlambert_frag:jM,meshmatcap_vert:XM,meshmatcap_frag:$M,meshnormal_vert:YM,meshnormal_frag:qM,meshphong_vert:KM,meshphong_frag:ZM,meshphysical_vert:QM,meshphysical_frag:JM,meshtoon_vert:eE,meshtoon_frag:tE,points_vert:nE,points_frag:iE,shadow_vert:rE,shadow_frag:sE,sprite_vert:aE,sprite_frag:oE},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},$n={basic:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:$t([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:$t([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:$t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:$t([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:$t([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:$t([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:$t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:$t([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:$t([ae.common,ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:$t([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};$n.physical={uniforms:$t([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ko={r:0,b:0,g:0};function lE(t,e,n,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(p,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?y(o,l):g&&g.isColor&&(y(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ic)?(d===void 0&&(d=new Fi(new Ga(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:Ls($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=qe.getTransfer(g.colorSpace)!==tt,(h!==g||f!==g.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=g,f=g.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Fi(new Lf(2,2),new Nr({name:"BackgroundMaterial",uniforms:Ls($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=qe.getTransfer(g.colorSpace)!==tt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(ko,Lv(t)),i.buffers.color.setClear(ko.r,ko.g,ko.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:_}}function cE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,d=!1;function h(N,j,q,Y,I){let V=!1;if(a){const B=y(Y,q,j);c!==B&&(c=B,m(c.object)),V=u(N,Y,q,I),V&&v(N,Y,q,I)}else{const B=j.wireframe===!0;(c.geometry!==Y.id||c.program!==q.id||c.wireframe!==B)&&(c.geometry=Y.id,c.program=q.id,c.wireframe=B,V=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(V||d)&&(d=!1,D(N,j,q,Y),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function y(N,j,q){const Y=q.wireframe===!0;let I=o[N.id];I===void 0&&(I={},o[N.id]=I);let V=I[j.id];V===void 0&&(V={},I[j.id]=V);let B=V[Y];return B===void 0&&(B=p(f()),V[Y]=B),B}function p(N){const j=[],q=[],Y=[];for(let I=0;I<r;I++)j[I]=0,q[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:q,attributeDivisors:Y,object:N,attributes:{},index:null}}function u(N,j,q,Y){const I=c.attributes,V=j.attributes;let B=0;const L=q.getAttributes();for(const O in L)if(L[O].location>=0){const le=I[O];let he=V[O];if(he===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),le===void 0||le.attribute!==he||he&&le.data!==he.data)return!0;B++}return c.attributesNum!==B||c.index!==Y}function v(N,j,q,Y){const I={},V=j.attributes;let B=0;const L=q.getAttributes();for(const O in L)if(L[O].location>=0){let le=V[O];le===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(le=N.instanceColor));const he={};he.attribute=le,le&&le.data&&(he.data=le.data),I[O]=he,B++}c.attributes=I,c.attributesNum=B,c.index=Y}function g(){const N=c.newAttributes;for(let j=0,q=N.length;j<q;j++)N[j]=0}function S(N){T(N,0)}function T(N,j){const q=c.newAttributes,Y=c.enabledAttributes,I=c.attributeDivisors;q[N]=1,Y[N]===0&&(t.enableVertexAttribArray(N),Y[N]=1),I[N]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,j),I[N]=j)}function C(){const N=c.newAttributes,j=c.enabledAttributes;for(let q=0,Y=j.length;q<Y;q++)j[q]!==N[q]&&(t.disableVertexAttribArray(q),j[q]=0)}function b(N,j,q,Y,I,V,B){B===!0?t.vertexAttribIPointer(N,j,q,I,V):t.vertexAttribPointer(N,j,q,Y,I,V)}function D(N,j,q,Y){if(i.isWebGL2===!1&&(N.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=Y.attributes,V=q.getAttributes(),B=j.defaultAttributeValues;for(const L in V){const O=V[L];if(O.location>=0){let oe=I[L];if(oe===void 0&&(L==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),L==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),oe!==void 0){const le=oe.normalized,he=oe.itemSize,ve=n.get(oe);if(ve===void 0)continue;const Le=ve.buffer,Ae=ve.type,Ne=ve.bytesPerElement,ut=i.isWebGL2===!0&&(Ae===t.INT||Ae===t.UNSIGNED_INT||oe.gpuType===pv);if(oe.isInterleavedBufferAttribute){const Ie=oe.data,F=Ie.stride,ln=oe.offset;if(Ie.isInstancedInterleavedBuffer){for(let _e=0;_e<O.locationSize;_e++)T(O.location+_e,Ie.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let _e=0;_e<O.locationSize;_e++)S(O.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let _e=0;_e<O.locationSize;_e++)b(O.location+_e,he/O.locationSize,Ae,le,F*Ne,(ln+he/O.locationSize*_e)*Ne,ut)}else{if(oe.isInstancedBufferAttribute){for(let Ie=0;Ie<O.locationSize;Ie++)T(O.location+Ie,oe.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ie=0;Ie<O.locationSize;Ie++)S(O.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Ie=0;Ie<O.locationSize;Ie++)b(O.location+Ie,he/O.locationSize,Ae,le,he*Ne,he/O.locationSize*Ie*Ne,ut)}}else if(B!==void 0){const le=B[L];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(O.location,le);break;case 3:t.vertexAttrib3fv(O.location,le);break;case 4:t.vertexAttrib4fv(O.location,le);break;default:t.vertexAttrib1fv(O.location,le)}}}}C()}function E(){K();for(const N in o){const j=o[N];for(const q in j){const Y=j[q];for(const I in Y)_(Y[I].object),delete Y[I];delete j[q]}delete o[N]}}function A(N){if(o[N.id]===void 0)return;const j=o[N.id];for(const q in j){const Y=j[q];for(const I in Y)_(Y[I].object),delete Y[I];delete j[q]}delete o[N.id]}function X(N){for(const j in o){const q=o[j];if(q[N.id]===void 0)continue;const Y=q[N.id];for(const I in Y)_(Y[I].object),delete Y[I];delete q[N.id]}}function K(){Z(),d=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:Z,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:X,initAttributes:g,enableAttribute:S,disableUnusedAttributes:C}}function uE(t,e,n,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,d){t.drawArrays(s,c,d),n.update(d,s,1)}function l(c,d,h){if(h===0)return;let f,m;if(r)f=t,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,d,h),n.update(d,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function dE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,S=a||e.has("OES_texture_float"),T=g&&S,C=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:C}}function fE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new hr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,g=v*4;let S=u.clippingState||null;l.value=S,S=d(_,f,g,m);for(let T=0;T!==g;++T)S[T]=n[T];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=m+y*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,S=m;g!==y;++g,S+=4)a.copy(h[g]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function hE(t){let e=new WeakMap;function n(a,o){return o===Md?a.mapping=Cs:o===Ed&&(a.mapping=Rs),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Md||o===Ed)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new by(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pE extends Nv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,tm=[.125,.215,.35,.446,.526,.582],vr=20,mu=new pE,nm=new Xe;let gu=null,vu=0,_u=0;const pr=(1+Math.sqrt(5))/2,Zr=1/pr,im=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,pr,Zr),new z(0,pr,-Zr),new z(Zr,0,pr),new z(-Zr,0,pr),new z(pr,Zr,0),new z(-pr,Zr,0)];class rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,vu,_u),e.scissorTest=!1,zo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Da,format:Bn,colorSpace:_i,depthBuffer:!1},r=sm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mE(s)),this._blurMaterial=gE(s,e,n)}return r}_compileMaterial(e){const n=new Fi(this._lodPlanes[0],e);this._renderer.compile(n,mu)}_sceneToCubeUV(e,n,i,r){const o=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(nm),d.toneMapping=Yi,d.autoClear=!1;const m=new Cv({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new Fi(new Ga,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(nm),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;zo(r,v*g,u>2?g:0,g,g),d.setRenderTarget(r),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Cs||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Fi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;zo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,mu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=im[(r-1)%im.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Fi(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vr-1),y=s/_,p=isFinite(s)?1+Math.floor(d*y):vr;p>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vr}`);const u=[];let v=0;for(let b=0;b<vr;++b){const D=b/y,E=Math.exp(-D*D/2);u.push(E),b===0?v+=E:b<p&&(v+=2*E)}for(let b=0;b<u.length;b++)u[b]=u[b]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const S=this._sizeLods[r],T=3*S*(r>g-fs?r-g+fs:0),C=4*(this._cubeSize-S);zo(n,T,C,3*S,2*S),l.setRenderTarget(n),l.render(h,mu)}}function mE(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+tm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-fs?l=tm[a-t+fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,y=3,p=2,u=1,v=new Float32Array(y*_*m),g=new Float32Array(p*_*m),S=new Float32Array(u*_*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,D=C>2?0:-1,E=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];v.set(E,y*_*C),g.set(f,p*_*C);const A=[C,C,C,C,C,C];S.set(A,u*_*C)}const T=new yi;T.setAttribute("position",new Qn(v,y)),T.setAttribute("uv",new Qn(g,p)),T.setAttribute("faceIndex",new Qn(S,u)),e.push(T),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function sm(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gE(t,e,n){const i=new Float32Array(vr),r=new z(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function am(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function om(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Nf(){return`

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
	`}function vE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Md||l===Ed,d=l===Cs||l===Rs;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new rm(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new rm(t));const f=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function _E(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xE(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let g=0,S=v.length;g<S;g+=3){const T=v[g+0],C=v[g+1],b=v[g+2];f.push(T,C,C,b,b,T)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const T=g+0,C=g+1,b=g+2;f.push(T,C,C,b,b,T)}}else return;const p=new(Sv(f)?Pv:Rv)(f,1);p.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function yE(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function d(f,m){t.drawElements(s,m,o,f*l),n.update(m,s,1)}function h(f,m,_){if(_===0)return;let y,p;if(r)y=t,p="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[p](s,m,o,f*l,_),n.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=h}function SE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ME(t,e){return t[0]-e[0]}function EE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function wE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(d);if(p===void 0||p.count!==y){let j=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",j)};var m=j;p!==void 0&&p.texture.dispose();const g=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let E=0;g===!0&&(E=1),S===!0&&(E=2),T===!0&&(E=3);let A=d.attributes.position.count*E,X=1;A>e.maxTextureSize&&(X=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const K=new Float32Array(A*X*4*y),Z=new wv(K,A,X,y);Z.type=Oi,Z.needsUpdate=!0;const N=E*4;for(let q=0;q<y;q++){const Y=C[q],I=b[q],V=D[q],B=A*X*4*q;for(let L=0;L<Y.count;L++){const O=L*N;g===!0&&(a.fromBufferAttribute(Y,L),K[B+O+0]=a.x,K[B+O+1]=a.y,K[B+O+2]=a.z,K[B+O+3]=0),S===!0&&(a.fromBufferAttribute(I,L),K[B+O+4]=a.x,K[B+O+5]=a.y,K[B+O+6]=a.z,K[B+O+7]=0),T===!0&&(a.fromBufferAttribute(V,L),K[B+O+8]=a.x,K[B+O+9]=a.y,K[B+O+10]=a.z,K[B+O+11]=V.itemSize===4?a.w:1)}}p={count:y,texture:Z,size:new Ze(A,X)},s.set(d,p),d.addEventListener("dispose",j)}let u=0;for(let g=0;g<f.length;g++)u+=f[g];const v=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[d.id]=y}for(let S=0;S<_;S++){const T=y[S];T[0]=S,T[1]=f[S]}y.sort(EE);for(let S=0;S<8;S++)S<_&&y[S][1]?(o[S][0]=y[S][0],o[S][1]=y[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(ME);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const T=o[S],C=T[0],b=T[1];C!==Number.MAX_SAFE_INTEGER&&b?(p&&d.getAttribute("morphTarget"+S)!==p[C]&&d.setAttribute("morphTarget"+S,p[C]),u&&d.getAttribute("morphNormal"+S)!==u[C]&&d.setAttribute("morphNormal"+S,u[C]),r[S]=b,v+=b):(p&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const g=d.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function TE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const Ov=new gn,Fv=new wv,kv=new uy,zv=new Dv,lm=[],cm=[],um=new Float32Array(16),dm=new Float32Array(9),fm=new Float32Array(4);function Fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=lm[r];if(s===void 0&&(s=new Float32Array(r),lm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function oc(t,e){let n=cm[e];n===void 0&&(n=new Int32Array(e),cm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function AE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function PE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;fm.set(i),t.uniformMatrix2fv(this.addr,!1,fm),Tt(n,i)}}function LE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;dm.set(i),t.uniformMatrix3fv(this.addr,!1,dm),Tt(n,i)}}function NE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;um.set(i),t.uniformMatrix4fv(this.addr,!1,um),Tt(n,i)}}function DE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Ov,r)}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||kv,r)}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zv,r)}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Fv,r)}function jE(t){switch(t){case 5126:return AE;case 35664:return bE;case 35665:return CE;case 35666:return RE;case 35674:return PE;case 35675:return LE;case 35676:return NE;case 5124:case 35670:return DE;case 35667:case 35671:return UE;case 35668:case 35672:return IE;case 35669:case 35673:return OE;case 5125:return FE;case 36294:return kE;case 36295:return zE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return HE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return WE}}function XE(t,e){t.uniform1fv(this.addr,e)}function $E(t,e){const n=Fs(e,this.size,2);t.uniform2fv(this.addr,n)}function YE(t,e){const n=Fs(e,this.size,3);t.uniform3fv(this.addr,n)}function qE(t,e){const n=Fs(e,this.size,4);t.uniform4fv(this.addr,n)}function KE(t,e){const n=Fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZE(t,e){const n=Fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QE(t,e){const n=Fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JE(t,e){t.uniform1iv(this.addr,e)}function e3(t,e){t.uniform2iv(this.addr,e)}function t3(t,e){t.uniform3iv(this.addr,e)}function n3(t,e){t.uniform4iv(this.addr,e)}function i3(t,e){t.uniform1uiv(this.addr,e)}function r3(t,e){t.uniform2uiv(this.addr,e)}function s3(t,e){t.uniform3uiv(this.addr,e)}function a3(t,e){t.uniform4uiv(this.addr,e)}function o3(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Ov,s[a])}function l3(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||kv,s[a])}function c3(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||zv,s[a])}function u3(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Fv,s[a])}function d3(t){switch(t){case 5126:return XE;case 35664:return $E;case 35665:return YE;case 35666:return qE;case 35674:return KE;case 35675:return ZE;case 35676:return QE;case 5124:case 35670:return JE;case 35667:case 35671:return e3;case 35668:case 35672:return t3;case 35669:case 35673:return n3;case 5125:return i3;case 36294:return r3;case 36295:return s3;case 36296:return a3;case 35678:case 36198:case 36298:case 36306:case 35682:return o3;case 35679:case 36299:case 36307:return l3;case 35680:case 36300:case 36308:case 36293:return c3;case 36289:case 36303:case 36311:case 36292:return u3}}class f3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=jE(n.type)}}class h3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=d3(n.type)}}class p3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const xu=/(\w+)(\])?(\[|\.)?/g;function hm(t,e){t.seq.push(e),t.map[e.id]=e}function m3(t,e,n){const i=t.name,r=i.length;for(xu.lastIndex=0;;){const s=xu.exec(i),a=xu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){hm(n,c===void 0?new f3(o,t,e):new h3(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new p3(o),hm(n,h)),n=h}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);m3(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function pm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const g3=37297;let v3=0;function _3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function x3(t){const e=qe.getPrimaries(qe.workingColorSpace),n=qe.getPrimaries(t);let i;switch(e===n?i="":e===Ol&&n===Il?i="LinearDisplayP3ToLinearSRGB":e===Il&&n===Ol&&(i="LinearSRGBToLinearDisplayP3"),t){case _i:case rc:return[i,"LinearTransferOETF"];case Dt:case Rf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_3(t.getShaderSource(e),a)}else return r}function y3(t,e){const n=x3(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function S3(t,e){let n;switch(e){case _2:n="Linear";break;case x2:n="Reinhard";break;case y2:n="OptimizedCineon";break;case S2:n="ACESFilmic";break;case M2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function M3(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(na).join(`
`)}function E3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function w3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function na(t){return t!==""}function gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(t){return t.replace(T3,b3)}const A3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function b3(t,e){let n=De[e];if(n===void 0){const i=A3.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cd(n)}const C3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(t){return t.replace(C3,R3)}function R3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Xx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function L3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Cs:case Rs:e="ENVMAP_TYPE_CUBE";break;case ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function D3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fv:e="ENVMAP_BLENDING_MULTIPLY";break;case g2:e="ENVMAP_BLENDING_MIX";break;case v2:e="ENVMAP_BLENDING_ADD";break}return e}function U3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function I3(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=P3(n),c=L3(n),d=N3(n),h=D3(n),f=U3(n),m=n.isWebGL2?"":M3(n),_=E3(s),y=r.createProgram();let p,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(na).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(na).join(`
`),u.length>0&&(u+=`
`)):(p=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),u=[m,xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?De.tonemapping_pars_fragment:"",n.toneMapping!==Yi?S3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,y3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(na).join(`
`)),a=Cd(a),a=gm(a,n),a=vm(a,n),o=Cd(o),o=gm(o,n),o=vm(o,n),a=_m(a),o=_m(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+p+a,S=v+u+o,T=pm(r,r.VERTEX_SHADER,g),C=pm(r,r.FRAGMENT_SHADER,S);r.attachShader(y,T),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(X){if(t.debug.checkShaderErrors){const K=r.getProgramInfoLog(y).trim(),Z=r.getShaderInfoLog(T).trim(),N=r.getShaderInfoLog(C).trim();let j=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,T,C);else{const Y=mm(r,T,"vertex"),I=mm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+Y+`
`+I)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Z===""||N==="")&&(q=!1);q&&(X.diagnostics={runnable:j,programLog:K,vertexShader:{log:Z,prefix:p},fragmentShader:{log:N,prefix:u}})}r.deleteShader(T),r.deleteShader(C),D=new al(r,y),E=w3(r,y)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(y,g3)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=v3++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=C,this}let O3=0;class F3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new k3(e),n.set(e,i)),i}}class k3{constructor(e){this.id=O3++,this.code=e,this.usedTimes=0}}function z3(t,e,n,i,r,s,a){const o=new Av,l=new F3,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function p(E,A,X,K,Z){const N=K.fog,j=Z.geometry,q=E.isMeshStandardMaterial?K.environment:null,Y=(E.isMeshStandardMaterial?n:e).get(E.envMap||q),I=Y&&Y.mapping===ic?Y.image.height:null,V=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const B=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,L=B!==void 0?B.length:0;let O=0;j.morphAttributes.position!==void 0&&(O=1),j.morphAttributes.normal!==void 0&&(O=2),j.morphAttributes.color!==void 0&&(O=3);let oe,le,he,ve;if(V){const _t=$n[V];oe=_t.vertexShader,le=_t.fragmentShader}else oe=E.vertexShader,le=E.fragmentShader,l.update(E),he=l.getVertexShaderID(E),ve=l.getFragmentShaderID(E);const Le=t.getRenderTarget(),Ae=Z.isInstancedMesh===!0,Ne=!!E.map,ut=!!E.matcap,Ie=!!Y,F=!!E.aoMap,ln=!!E.lightMap,_e=!!E.bumpMap,be=!!E.normalMap,Te=!!E.displacementMap,dt=!!E.emissiveMap,Oe=!!E.metalnessMap,Fe=!!E.roughnessMap,Ke=E.anisotropy>0,At=E.clearcoat>0,Ft=E.iridescence>0,R=E.sheen>0,M=E.transmission>0,k=Ke&&!!E.anisotropyMap,te=At&&!!E.clearcoatMap,J=At&&!!E.clearcoatNormalMap,ne=At&&!!E.clearcoatRoughnessMap,me=Ft&&!!E.iridescenceMap,se=Ft&&!!E.iridescenceThicknessMap,ue=R&&!!E.sheenColorMap,Me=R&&!!E.sheenRoughnessMap,We=!!E.specularMap,ee=!!E.specularColorMap,Ye=!!E.specularIntensityMap,Ce=M&&!!E.transmissionMap,Ee=M&&!!E.thicknessMap,xe=!!E.gradientMap,pe=!!E.alphaMap,He=E.alphaTest>0,P=!!E.alphaHash,ce=!!E.extensions,ie=!!j.attributes.uv1,$=!!j.attributes.uv2,re=!!j.attributes.uv3;let ye=Yi;return E.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(ye=t.toneMapping),{isWebGL2:d,shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:le,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:Ae,instancingColor:Ae&&Z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:_i,map:Ne,matcap:ut,envMap:Ie,envMapMode:Ie&&Y.mapping,envMapCubeUVHeight:I,aoMap:F,lightMap:ln,bumpMap:_e,normalMap:be,displacementMap:f&&Te,emissiveMap:dt,normalMapObjectSpace:be&&E.normalMapType===O2,normalMapTangentSpace:be&&E.normalMapType===I2,metalnessMap:Oe,roughnessMap:Fe,anisotropy:Ke,anisotropyMap:k,clearcoat:At,clearcoatMap:te,clearcoatNormalMap:J,clearcoatRoughnessMap:ne,iridescence:Ft,iridescenceMap:me,iridescenceThicknessMap:se,sheen:R,sheenColorMap:ue,sheenRoughnessMap:Me,specularMap:We,specularColorMap:ee,specularIntensityMap:Ye,transmission:M,transmissionMap:Ce,thicknessMap:Ee,gradientMap:xe,opaque:E.transparent===!1&&E.blending===xs,alphaMap:pe,alphaTest:He,alphaHash:P,combine:E.combine,mapUv:Ne&&y(E.map.channel),aoMapUv:F&&y(E.aoMap.channel),lightMapUv:ln&&y(E.lightMap.channel),bumpMapUv:_e&&y(E.bumpMap.channel),normalMapUv:be&&y(E.normalMap.channel),displacementMapUv:Te&&y(E.displacementMap.channel),emissiveMapUv:dt&&y(E.emissiveMap.channel),metalnessMapUv:Oe&&y(E.metalnessMap.channel),roughnessMapUv:Fe&&y(E.roughnessMap.channel),anisotropyMapUv:k&&y(E.anisotropyMap.channel),clearcoatMapUv:te&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:J&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:se&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&y(E.sheenRoughnessMap.channel),specularMapUv:We&&y(E.specularMap.channel),specularColorMapUv:ee&&y(E.specularColorMap.channel),specularIntensityMapUv:Ye&&y(E.specularIntensityMap.channel),transmissionMapUv:Ce&&y(E.transmissionMap.channel),thicknessMapUv:Ee&&y(E.thicknessMap.channel),alphaMapUv:pe&&y(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(be||Ke),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:$,vertexUv3s:re,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(Ne||pe),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:O,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:ye,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ne&&E.map.isVideoTexture===!0&&qe.getTransfer(E.map.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ci,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ce&&E.extensions.derivatives===!0,extensionFragDepth:ce&&E.extensions.fragDepth===!0,extensionDrawBuffers:ce&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)A.push(X),A.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(v(A,E),g(A,E),A.push(t.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function v(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function g(E,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),E.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){const A=_[E.type];let X;if(A){const K=$n[A];X=Ey.clone(K.uniforms)}else X=E.uniforms;return X}function T(E,A){let X;for(let K=0,Z=c.length;K<Z;K++){const N=c[K];if(N.cacheKey===A){X=N,++X.usedTimes;break}}return X===void 0&&(X=new I3(t,A,E,s),c.push(X)),X}function C(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:T,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:D}}function B3(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function H3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,m,_,y,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:y,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=y,u.group=p),e++,u}function o(h,f,m,_,y,p){const u=a(h,f,m,_,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,y,p){const u=a(h,f,m,_,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||H3),i.length>1&&i.sort(f||ym),r.length>1&&r.sort(f||ym)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function V3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Sm,t.set(i,[a])):r>=s.length?(a=new Sm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function G3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Xe};break;case"SpotLight":n={position:new z,direction:new z,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function W3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let j3=0;function X3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $3(t,e){const n=new G3,i=W3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new z);const s=new z,a=new Lt,o=new Lt;function l(d,h){let f=0,m=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let y=0,p=0,u=0,v=0,g=0,S=0,T=0,C=0,b=0,D=0,E=0;d.sort(X3);const A=h===!0?Math.PI:1;for(let K=0,Z=d.length;K<Z;K++){const N=d[K],j=N.color,q=N.intensity,Y=N.distance,I=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=j.r*q*A,m+=j.g*q*A,_+=j.b*q*A;else if(N.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(N.sh.coefficients[V],q);E++}else if(N.isDirectionalLight){const V=n.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const B=N.shadow,L=i.get(N);L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,r.directionalShadow[y]=L,r.directionalShadowMap[y]=I,r.directionalShadowMatrix[y]=N.shadow.matrix,S++}r.directional[y]=V,y++}else if(N.isSpotLight){const V=n.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(j).multiplyScalar(q*A),V.distance=Y,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,r.spot[u]=V;const B=N.shadow;if(N.map&&(r.spotLightMap[b]=N.map,b++,B.updateMatrices(N),N.castShadow&&D++),r.spotLightMatrix[u]=B.matrix,N.castShadow){const L=i.get(N);L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,r.spotShadow[u]=L,r.spotShadowMap[u]=I,C++}u++}else if(N.isRectAreaLight){const V=n.get(N);V.color.copy(j).multiplyScalar(q),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=V,v++}else if(N.isPointLight){const V=n.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*A),V.distance=N.distance,V.decay=N.decay,N.castShadow){const B=N.shadow,L=i.get(N);L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,L.shadowCameraNear=B.camera.near,L.shadowCameraFar=B.camera.far,r.pointShadow[p]=L,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=N.shadow.matrix,T++}r.point[p]=V,p++}else if(N.isHemisphereLight){const V=n.get(N);V.skyColor.copy(N.color).multiplyScalar(q*A),V.groundColor.copy(N.groundColor).multiplyScalar(q*A),r.hemi[g]=V,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const X=r.hash;(X.directionalLength!==y||X.pointLength!==p||X.spotLength!==u||X.rectAreaLength!==v||X.hemiLength!==g||X.numDirectionalShadows!==S||X.numPointShadows!==T||X.numSpotShadows!==C||X.numSpotMaps!==b||X.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+b-D,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=E,X.directionalLength=y,X.pointLength=p,X.spotLength=u,X.rectAreaLength=v,X.hemiLength=g,X.numDirectionalShadows=S,X.numPointShadows=T,X.numSpotShadows=C,X.numSpotMaps=b,X.numLightProbes=E,r.version=j3++)}function c(d,h){let f=0,m=0,_=0,y=0,p=0;const u=h.matrixWorldInverse;for(let v=0,g=d.length;v<g;v++){const S=d[v];if(S.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),f++}else if(S.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const T=r.rectArea[y];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Mm(t,e){const n=new $3(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Y3(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Mm(t,e),n.set(s,[l])):a>=o.length?(l=new Mm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class q3 extends Va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K3 extends Va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q3=`uniform sampler2D shadow_pass;
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
}`;function J3(t,e,n){let i=new Uv;const r=new Ze,s=new Ze,a=new Ut,o=new q3({depthPacking:U2}),l=new K3,c={},d=n.maxTextureSize,h={[er]:an,[an]:er,[ci]:ci},f=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Z3,fragmentShader:Q3}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new yi;_.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Fi(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dv;let u=this.type;this.render=function(T,C,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const D=t.getRenderTarget(),E=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),X=t.state;X.setBlending($i),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const K=u!==ai&&this.type===ai,Z=u===ai&&this.type!==ai;for(let N=0,j=T.length;N<j;N++){const q=T[N],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const I=Y.getFrameExtents();if(r.multiply(I),s.copy(Y.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/I.x),r.x=s.x*I.x,Y.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/I.y),r.y=s.y*I.y,Y.mapSize.y=s.y)),Y.map===null||K===!0||Z===!0){const B=this.type!==ai?{minFilter:qt,magFilter:qt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Lr(r.x,r.y,B),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const V=Y.getViewportCount();for(let B=0;B<V;B++){const L=Y.getViewport(B);a.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),X.viewport(a),Y.updateMatrices(q,B),i=Y.getFrustum(),S(C,b,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===ai&&v(Y,b),Y.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(D,E,A)};function v(T,C){const b=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Lr(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,b,f,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,b,m,y,null)}function g(T,C,b,D){let E=null;const A=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)E=A;else if(E=b.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=E.uuid,K=C.uuid;let Z=c[X];Z===void 0&&(Z={},c[X]=Z);let N=Z[K];N===void 0&&(N=E.clone(),Z[K]=N),E=N}if(E.visible=C.visible,E.wireframe=C.wireframe,D===ai?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const X=t.properties.get(E);X.light=b}return E}function S(T,C,b,D,E){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===ai)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const K=e.update(T),Z=T.material;if(Array.isArray(Z)){const N=K.groups;for(let j=0,q=N.length;j<q;j++){const Y=N[j],I=Z[Y.materialIndex];if(I&&I.visible){const V=g(T,I,D,E);t.renderBufferDirect(b,null,K,V,T,Y)}}}else if(Z.visible){const N=g(T,Z,D,E);t.renderBufferDirect(b,null,K,N,T,null)}}const X=T.children;for(let K=0,Z=X.length;K<Z;K++)S(X[K],C,b,D,E)}}function ew(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ce=new Ut;let ie=null;const $=new Ut(0,0,0,0);return{setMask:function(re){ie!==re&&!P&&(t.colorMask(re,re,re,re),ie=re)},setLocked:function(re){P=re},setClear:function(re,ye,je,_t,yn){yn===!0&&(re*=_t,ye*=_t,je*=_t),ce.set(re,ye,je,_t),$.equals(ce)===!1&&(t.clearColor(re,ye,je,_t),$.copy(ce))},reset:function(){P=!1,ie=null,$.set(-1,0,0,0)}}}function s(){let P=!1,ce=null,ie=null,$=null;return{setTest:function(re){re?Ne(t.DEPTH_TEST):ut(t.DEPTH_TEST)},setMask:function(re){ce!==re&&!P&&(t.depthMask(re),ce=re)},setFunc:function(re){if(ie!==re){switch(re){case c2:t.depthFunc(t.NEVER);break;case u2:t.depthFunc(t.ALWAYS);break;case d2:t.depthFunc(t.LESS);break;case Dl:t.depthFunc(t.LEQUAL);break;case f2:t.depthFunc(t.EQUAL);break;case h2:t.depthFunc(t.GEQUAL);break;case p2:t.depthFunc(t.GREATER);break;case m2:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=re}},setLocked:function(re){P=re},setClear:function(re){$!==re&&(t.clearDepth(re),$=re)},reset:function(){P=!1,ce=null,ie=null,$=null}}}function a(){let P=!1,ce=null,ie=null,$=null,re=null,ye=null,je=null,_t=null,yn=null;return{setTest:function(Qe){P||(Qe?Ne(t.STENCIL_TEST):ut(t.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!P&&(t.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,Wt,Wn){(ie!==Qe||$!==Wt||re!==Wn)&&(t.stencilFunc(Qe,Wt,Wn),ie=Qe,$=Wt,re=Wn)},setOp:function(Qe,Wt,Wn){(ye!==Qe||je!==Wt||_t!==Wn)&&(t.stencilOp(Qe,Wt,Wn),ye=Qe,je=Wt,_t=Wn)},setLocked:function(Qe){P=Qe},setClear:function(Qe){yn!==Qe&&(t.clearStencil(Qe),yn=Qe)},reset:function(){P=!1,ce=null,ie=null,$=null,re=null,ye=null,je=null,_t=null,yn=null}}}const o=new r,l=new s,c=new a,d=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,y=[],p=null,u=!1,v=null,g=null,S=null,T=null,C=null,b=null,D=null,E=new Xe(0,0,0),A=0,X=!1,K=null,Z=null,N=null,j=null,q=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,V=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),I=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),I=V>=2);let L=null,O={};const oe=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),he=new Ut().fromArray(oe),ve=new Ut().fromArray(le);function Le(P,ce,ie,$){const re=new Uint8Array(4),ye=t.createTexture();t.bindTexture(P,ye),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<ie;je++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,$,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(ce+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return ye}const Ae={};Ae[t.TEXTURE_2D]=Le(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=Le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[t.TEXTURE_2D_ARRAY]=Le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=Le(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(t.DEPTH_TEST),l.setFunc(Dl),Oe(!1),Fe(ip),Ne(t.CULL_FACE),Te($i);function Ne(P){f[P]!==!0&&(t.enable(P),f[P]=!0)}function ut(P){f[P]!==!1&&(t.disable(P),f[P]=!1)}function Ie(P,ce){return m[P]!==ce?(t.bindFramebuffer(P,ce),m[P]=ce,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ce),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function F(P,ce){let ie=y,$=!1;if(P)if(ie=_.get(ce),ie===void 0&&(ie=[],_.set(ce,ie)),P.isWebGLMultipleRenderTargets){const re=P.texture;if(ie.length!==re.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let ye=0,je=re.length;ye<je;ye++)ie[ye]=t.COLOR_ATTACHMENT0+ye;ie.length=re.length,$=!0}}else ie[0]!==t.COLOR_ATTACHMENT0&&(ie[0]=t.COLOR_ATTACHMENT0,$=!0);else ie[0]!==t.BACK&&(ie[0]=t.BACK,$=!0);$&&(n.isWebGL2?t.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function ln(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const _e={[gr]:t.FUNC_ADD,[Yx]:t.FUNC_SUBTRACT,[qx]:t.FUNC_REVERSE_SUBTRACT};if(i)_e[op]=t.MIN,_e[lp]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(_e[op]=P.MIN_EXT,_e[lp]=P.MAX_EXT)}const be={[Kx]:t.ZERO,[Zx]:t.ONE,[Qx]:t.SRC_COLOR,[yd]:t.SRC_ALPHA,[r2]:t.SRC_ALPHA_SATURATE,[n2]:t.DST_COLOR,[e2]:t.DST_ALPHA,[Jx]:t.ONE_MINUS_SRC_COLOR,[Sd]:t.ONE_MINUS_SRC_ALPHA,[i2]:t.ONE_MINUS_DST_COLOR,[t2]:t.ONE_MINUS_DST_ALPHA,[s2]:t.CONSTANT_COLOR,[a2]:t.ONE_MINUS_CONSTANT_COLOR,[o2]:t.CONSTANT_ALPHA,[l2]:t.ONE_MINUS_CONSTANT_ALPHA};function Te(P,ce,ie,$,re,ye,je,_t,yn,Qe){if(P===$i){u===!0&&(ut(t.BLEND),u=!1);return}if(u===!1&&(Ne(t.BLEND),u=!0),P!==$x){if(P!==v||Qe!==X){if((g!==gr||C!==gr)&&(t.blendEquation(t.FUNC_ADD),g=gr,C=gr),Qe)switch(P){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rp:t.blendFunc(t.ONE,t.ONE);break;case sp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ap:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case sp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ap:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,T=null,b=null,D=null,E.set(0,0,0),A=0,v=P,X=Qe}return}re=re||ce,ye=ye||ie,je=je||$,(ce!==g||re!==C)&&(t.blendEquationSeparate(_e[ce],_e[re]),g=ce,C=re),(ie!==S||$!==T||ye!==b||je!==D)&&(t.blendFuncSeparate(be[ie],be[$],be[ye],be[je]),S=ie,T=$,b=ye,D=je),(_t.equals(E)===!1||yn!==A)&&(t.blendColor(_t.r,_t.g,_t.b,yn),E.copy(_t),A=yn),v=P,X=!1}function dt(P,ce){P.side===ci?ut(t.CULL_FACE):Ne(t.CULL_FACE);let ie=P.side===an;ce&&(ie=!ie),Oe(ie),P.blending===xs&&P.transparent===!1?Te($i):Te(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const $=P.stencilWrite;c.setTest($),$&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),At(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ne(t.SAMPLE_ALPHA_TO_COVERAGE):ut(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){K!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),K=P)}function Fe(P){P!==Wx?(Ne(t.CULL_FACE),P!==Z&&(P===ip?t.cullFace(t.BACK):P===jx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ut(t.CULL_FACE),Z=P}function Ke(P){P!==N&&(I&&t.lineWidth(P),N=P)}function At(P,ce,ie){P?(Ne(t.POLYGON_OFFSET_FILL),(j!==ce||q!==ie)&&(t.polygonOffset(ce,ie),j=ce,q=ie)):ut(t.POLYGON_OFFSET_FILL)}function Ft(P){P?Ne(t.SCISSOR_TEST):ut(t.SCISSOR_TEST)}function R(P){P===void 0&&(P=t.TEXTURE0+Y-1),L!==P&&(t.activeTexture(P),L=P)}function M(P,ce,ie){ie===void 0&&(L===null?ie=t.TEXTURE0+Y-1:ie=L);let $=O[ie];$===void 0&&($={type:void 0,texture:void 0},O[ie]=$),($.type!==P||$.texture!==ce)&&(L!==ie&&(t.activeTexture(ie),L=ie),t.bindTexture(P,ce||Ae[P]),$.type=P,$.texture=ce)}function k(){const P=O[L];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(P){he.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),he.copy(P))}function Ee(P){ve.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ve.copy(P))}function xe(P,ce){let ie=h.get(ce);ie===void 0&&(ie=new WeakMap,h.set(ce,ie));let $=ie.get(P);$===void 0&&($=t.getUniformBlockIndex(ce,P.name),ie.set(P,$))}function pe(P,ce){const $=h.get(ce).get(P);d.get(ce)!==$&&(t.uniformBlockBinding(ce,$,P.__bindingPointIndex),d.set(ce,$))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},L=null,O={},m={},_=new WeakMap,y=[],p=null,u=!1,v=null,g=null,S=null,T=null,C=null,b=null,D=null,E=new Xe(0,0,0),A=0,X=!1,K=null,Z=null,N=null,j=null,q=null,he.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:ut,bindFramebuffer:Ie,drawBuffers:F,useProgram:ln,setBlending:Te,setMaterial:dt,setFlipSided:Oe,setCullFace:Fe,setLineWidth:Ke,setPolygonOffset:At,setScissorTest:Ft,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:te,compressedTexImage3D:J,texImage2D:ee,texImage3D:Ye,updateUBOMapping:xe,uniformBlockBinding:pe,texStorage2D:Me,texStorage3D:We,texSubImage2D:ne,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:Ce,viewport:Ee,reset:He}}function tw(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return u?new OffscreenCanvas(R,M):zl("canvas")}function g(R,M,k,te){let J=1;if((R.width>te||R.height>te)&&(J=te/Math.max(R.width,R.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ne=M?kl:Math.floor,me=ne(J*R.width),se=ne(J*R.height);y===void 0&&(y=v(me,se));const ue=k?v(me,se):y;return ue.width=me,ue.height=se,ue.getContext("2d").drawImage(R,0,0,me,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+me+"x"+se+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return bd(R.width)&&bd(R.height)}function T(R){return o?!1:R.wrapS!==zn||R.wrapT!==zn||R.minFilter!==qt&&R.minFilter!==wn}function C(R,M){return R.generateMipmaps&&M&&R.minFilter!==qt&&R.minFilter!==wn}function b(R){t.generateMipmap(R)}function D(R,M,k,te,J=!1){if(o===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=M;if(M===t.RED&&(k===t.FLOAT&&(ne=t.R32F),k===t.HALF_FLOAT&&(ne=t.R16F),k===t.UNSIGNED_BYTE&&(ne=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(ne=t.R8UI),k===t.UNSIGNED_SHORT&&(ne=t.R16UI),k===t.UNSIGNED_INT&&(ne=t.R32UI),k===t.BYTE&&(ne=t.R8I),k===t.SHORT&&(ne=t.R16I),k===t.INT&&(ne=t.R32I)),M===t.RG&&(k===t.FLOAT&&(ne=t.RG32F),k===t.HALF_FLOAT&&(ne=t.RG16F),k===t.UNSIGNED_BYTE&&(ne=t.RG8)),M===t.RGBA){const me=J?Ul:qe.getTransfer(te);k===t.FLOAT&&(ne=t.RGBA32F),k===t.HALF_FLOAT&&(ne=t.RGBA16F),k===t.UNSIGNED_BYTE&&(ne=me===tt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(R,M,k){return C(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){return R===qt||R===cp||R===jc?t.NEAREST:t.LINEAR}function X(R){const M=R.target;M.removeEventListener("dispose",X),Z(M),M.isVideoTexture&&_.delete(M)}function K(R){const M=R.target;M.removeEventListener("dispose",K),j(M)}function Z(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,te=p.get(k);if(te){const J=te[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(R),Object.keys(te).length===0&&p.delete(k)}i.remove(R)}function N(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const k=R.source,te=p.get(k);delete te[M.__cacheKey],a.memory.textures--}function j(R){const M=R.texture,k=i.get(R),te=i.get(M);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(k.__webglFramebuffer[J]))for(let ne=0;ne<k.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(k.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(k.__webglFramebuffer[J]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[J])}else{if(Array.isArray(k.__webglFramebuffer))for(let J=0;J<k.__webglFramebuffer.length;J++)t.deleteFramebuffer(k.__webglFramebuffer[J]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let J=0;J<k.__webglColorRenderbuffer.length;J++)k.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[J]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let J=0,ne=M.length;J<ne;J++){const me=i.get(M[J]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(M[J])}i.remove(M),i.remove(R)}let q=0;function Y(){q=0}function I(){const R=q;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),q+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function B(R,M){const k=i.get(R);if(R.isVideoTexture&&At(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(k,R,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function L(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Ne(k,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function O(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Ne(k,R,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function oe(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){ut(k,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const le={[wd]:t.REPEAT,[zn]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},he={[qt]:t.NEAREST,[cp]:t.NEAREST_MIPMAP_NEAREST,[jc]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[E2]:t.LINEAR_MIPMAP_NEAREST,[Na]:t.LINEAR_MIPMAP_LINEAR},ve={[F2]:t.NEVER,[W2]:t.ALWAYS,[k2]:t.LESS,[B2]:t.LEQUAL,[z2]:t.EQUAL,[G2]:t.GEQUAL,[H2]:t.GREATER,[V2]:t.NOTEQUAL};function Le(R,M,k){if(k?(t.texParameteri(R,t.TEXTURE_WRAP_S,le[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,le[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,le[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,he[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,he[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==zn||M.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,A(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==qt&&M.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===qt||M.minFilter!==jc&&M.minFilter!==Na||M.type===Oi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Ae(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",X));const te=M.source;let J=p.get(te);J===void 0&&(J={},p.set(te,J));const ne=V(M);if(ne!==R.__cacheKey){J[ne]===void 0&&(J[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[ne].usedTimes++;const me=J[R.__cacheKey];me!==void 0&&(J[R.__cacheKey].usedTimes--,me.usedTimes===0&&N(M)),R.__cacheKey=ne,R.__webglTexture=J[ne].texture}return k}function Ne(R,M,k){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const J=Ae(R,M),ne=M.source;n.bindTexture(te,R.__webglTexture,t.TEXTURE0+k);const me=i.get(ne);if(ne.version!==me.__version||J===!0){n.activeTexture(t.TEXTURE0+k);const se=qe.getPrimaries(qe.workingColorSpace),ue=M.colorSpace===An?null:qe.getPrimaries(M.colorSpace),Me=M.colorSpace===An||se===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const We=T(M)&&S(M.image)===!1;let ee=g(M.image,We,!1,d);ee=Ft(M,ee);const Ye=S(ee)||o,Ce=s.convert(M.format,M.colorSpace);let Ee=s.convert(M.type),xe=D(M.internalFormat,Ce,Ee,M.colorSpace,M.isVideoTexture);Le(te,M,Ye);let pe;const He=M.mipmaps,P=o&&M.isVideoTexture!==!0,ce=me.__version===void 0||J===!0,ie=E(M,ee,Ye);if(M.isDepthTexture)xe=t.DEPTH_COMPONENT,o?M.type===Oi?xe=t.DEPTH_COMPONENT32F:M.type===Ii?xe=t.DEPTH_COMPONENT24:M.type===Er?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:M.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===wr&&xe===t.DEPTH_COMPONENT&&M.type!==Cf&&M.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ii,Ee=s.convert(M.type)),M.format===Ps&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,M.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Er,Ee=s.convert(M.type))),ce&&(P?n.texStorage2D(t.TEXTURE_2D,1,xe,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,xe,ee.width,ee.height,0,Ce,Ee,null));else if(M.isDataTexture)if(He.length>0&&Ye){P&&ce&&n.texStorage2D(t.TEXTURE_2D,ie,xe,He[0].width,He[0].height);for(let $=0,re=He.length;$<re;$++)pe=He[$],P?n.texSubImage2D(t.TEXTURE_2D,$,0,0,pe.width,pe.height,Ce,Ee,pe.data):n.texImage2D(t.TEXTURE_2D,$,xe,pe.width,pe.height,0,Ce,Ee,pe.data);M.generateMipmaps=!1}else P?(ce&&n.texStorage2D(t.TEXTURE_2D,ie,xe,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Ce,Ee,ee.data)):n.texImage2D(t.TEXTURE_2D,0,xe,ee.width,ee.height,0,Ce,Ee,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){P&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,xe,He[0].width,He[0].height,ee.depth);for(let $=0,re=He.length;$<re;$++)pe=He[$],M.format!==Bn?Ce!==null?P?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,ee.depth,Ce,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,xe,pe.width,pe.height,ee.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,ee.depth,Ce,Ee,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,xe,pe.width,pe.height,ee.depth,0,Ce,Ee,pe.data)}else{P&&ce&&n.texStorage2D(t.TEXTURE_2D,ie,xe,He[0].width,He[0].height);for(let $=0,re=He.length;$<re;$++)pe=He[$],M.format!==Bn?Ce!==null?P?n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,pe.width,pe.height,Ce,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,$,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?n.texSubImage2D(t.TEXTURE_2D,$,0,0,pe.width,pe.height,Ce,Ee,pe.data):n.texImage2D(t.TEXTURE_2D,$,xe,pe.width,pe.height,0,Ce,Ee,pe.data)}else if(M.isDataArrayTexture)P?(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,xe,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ce,Ee,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,ee.width,ee.height,ee.depth,0,Ce,Ee,ee.data);else if(M.isData3DTexture)P?(ce&&n.texStorage3D(t.TEXTURE_3D,ie,xe,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ce,Ee,ee.data)):n.texImage3D(t.TEXTURE_3D,0,xe,ee.width,ee.height,ee.depth,0,Ce,Ee,ee.data);else if(M.isFramebufferTexture){if(ce)if(P)n.texStorage2D(t.TEXTURE_2D,ie,xe,ee.width,ee.height);else{let $=ee.width,re=ee.height;for(let ye=0;ye<ie;ye++)n.texImage2D(t.TEXTURE_2D,ye,xe,$,re,0,Ce,Ee,null),$>>=1,re>>=1}}else if(He.length>0&&Ye){P&&ce&&n.texStorage2D(t.TEXTURE_2D,ie,xe,He[0].width,He[0].height);for(let $=0,re=He.length;$<re;$++)pe=He[$],P?n.texSubImage2D(t.TEXTURE_2D,$,0,0,Ce,Ee,pe):n.texImage2D(t.TEXTURE_2D,$,xe,Ce,Ee,pe);M.generateMipmaps=!1}else P?(ce&&n.texStorage2D(t.TEXTURE_2D,ie,xe,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Ee,ee)):n.texImage2D(t.TEXTURE_2D,0,xe,Ce,Ee,ee);C(M,Ye)&&b(te),me.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ut(R,M,k){if(M.image.length!==6)return;const te=Ae(R,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const ne=i.get(J);if(J.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const me=qe.getPrimaries(qe.workingColorSpace),se=M.colorSpace===An?null:qe.getPrimaries(M.colorSpace),ue=M.colorSpace===An||me===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Me=M.isCompressedTexture||M.image[0].isCompressedTexture,We=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let $=0;$<6;$++)!Me&&!We?ee[$]=g(M.image[$],!1,!0,c):ee[$]=We?M.image[$].image:M.image[$],ee[$]=Ft(M,ee[$]);const Ye=ee[0],Ce=S(Ye)||o,Ee=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),pe=D(M.internalFormat,Ee,xe,M.colorSpace),He=o&&M.isVideoTexture!==!0,P=ne.__version===void 0||te===!0;let ce=E(M,Ye,Ce);Le(t.TEXTURE_CUBE_MAP,M,Ce);let ie;if(Me){He&&P&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,pe,Ye.width,Ye.height);for(let $=0;$<6;$++){ie=ee[$].mipmaps;for(let re=0;re<ie.length;re++){const ye=ie[re];M.format!==Bn?Ee!==null?He?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,0,0,ye.width,ye.height,Ee,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,0,0,ye.width,ye.height,Ee,xe,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,pe,ye.width,ye.height,0,Ee,xe,ye.data)}}}else{ie=M.mipmaps,He&&P&&(ie.length>0&&ce++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,pe,ee[0].width,ee[0].height));for(let $=0;$<6;$++)if(We){He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ee[$].width,ee[$].height,Ee,xe,ee[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pe,ee[$].width,ee[$].height,0,Ee,xe,ee[$].data);for(let re=0;re<ie.length;re++){const je=ie[re].image[$].image;He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,0,0,je.width,je.height,Ee,xe,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,pe,je.width,je.height,0,Ee,xe,je.data)}}else{He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ee,xe,ee[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pe,Ee,xe,ee[$]);for(let re=0;re<ie.length;re++){const ye=ie[re];He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,0,0,Ee,xe,ye.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,pe,Ee,xe,ye.image[$])}}}C(M,Ce)&&b(t.TEXTURE_CUBE_MAP),ne.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ie(R,M,k,te,J,ne){const me=s.convert(k.format,k.colorSpace),se=s.convert(k.type),ue=D(k.internalFormat,me,se,k.colorSpace);if(!i.get(M).__hasExternalTextures){const We=Math.max(1,M.width>>ne),ee=Math.max(1,M.height>>ne);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ne,ue,We,ee,M.depth,0,me,se,null):n.texImage2D(J,ne,ue,We,ee,0,me,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ke(M)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,i.get(k).__webglTexture,0,Fe(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,i.get(k).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(R,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let te=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||Ke(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===Oi?te=t.DEPTH_COMPONENT32F:J.type===Ii&&(te=t.DEPTH_COMPONENT24));const ne=Fe(M);Ke(M)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,te,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,te,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const te=Fe(M);k&&Ke(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,M.width,M.height):Ke(M)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<te.length;J++){const ne=te[J],me=s.convert(ne.format,ne.colorSpace),se=s.convert(ne.type),ue=D(ne.internalFormat,me,se,ne.colorSpace),Me=Fe(M);k&&Ke(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ue,M.width,M.height):Ke(M)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,ue,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ue,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ln(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,J=Fe(M);if(M.depthTexture.format===wr)Ke(M)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===Ps)Ke(M)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function _e(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ln(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),F(M.__webglDepthbuffer[te],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),F(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(R,M,k){const te=i.get(R);M!==void 0&&Ie(te.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&_e(R)}function Te(R){const M=R.texture,k=i.get(R),te=i.get(M);R.addEventListener("dispose",K),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,a.memory.textures++);const J=R.isWebGLCubeRenderTarget===!0,ne=R.isWebGLMultipleRenderTargets===!0,me=S(R)||o;if(J){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let ue=0;ue<M.mipmaps.length;ue++)k.__webglFramebuffer[se][ue]=t.createFramebuffer()}else k.__webglFramebuffer[se]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)k.__webglFramebuffer[se]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const se=R.texture;for(let ue=0,Me=se.length;ue<Me;ue++){const We=i.get(se[ue]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ke(R)===!1){const se=ne?M:[M];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const Me=se[ue];k.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const We=s.convert(Me.format,Me.colorSpace),ee=s.convert(Me.type),Ye=D(Me.internalFormat,We,ee,Me.colorSpace,R.isXRRenderTarget===!0),Ce=Fe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Ye,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),F(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Le(t.TEXTURE_CUBE_MAP,M,me);for(let se=0;se<6;se++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)Ie(k.__webglFramebuffer[se][ue],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else Ie(k.__webglFramebuffer[se],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);C(M,me)&&b(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const se=R.texture;for(let ue=0,Me=se.length;ue<Me;ue++){const We=se[ue],ee=i.get(We);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Le(t.TEXTURE_2D,We,me),Ie(k.__webglFramebuffer,R,We,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),C(We,me)&&b(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?se=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,te.__webglTexture),Le(se,M,me),o&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)Ie(k.__webglFramebuffer[ue],R,M,t.COLOR_ATTACHMENT0,se,ue);else Ie(k.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,se,0);C(M,me)&&b(se),n.unbindTexture()}R.depthBuffer&&_e(R)}function dt(R){const M=S(R)||o,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,J=k.length;te<J;te++){const ne=k[te];if(C(ne,M)){const me=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=i.get(ne).__webglTexture;n.bindTexture(me,se),b(me),n.unbindTexture()}}}function Oe(R){if(o&&R.samples>0&&Ke(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,te=R.height;let J=t.COLOR_BUFFER_BIT;const ne=[],me=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(R),ue=R.isWebGLMultipleRenderTargets===!0;if(ue)for(let Me=0;Me<M.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){ne.push(t.COLOR_ATTACHMENT0+Me),R.depthBuffer&&ne.push(me);const We=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(We===!1&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ue&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[Me]),We===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[me])),ue){const ee=i.get(M[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,k,te,0,0,k,te,J,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Me=0;Me<M.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,se.__webglColorRenderbuffer[Me]);const We=i.get(M[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Fe(R){return Math.min(h,R.samples)}function Ke(R){const M=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(R){const M=a.render.frame;_.get(R)!==M&&(_.set(R,M),R.update())}function Ft(R,M){const k=R.colorSpace,te=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ad||k!==_i&&k!==An&&(qe.getTransfer(k)===tt?o===!1?e.has("EXT_sRGB")===!0&&te===Bn?(R.format=Ad,R.minFilter=wn,R.generateMipmaps=!1):M=Mv.sRGBToLinear(M):(te!==Bn||J!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=I,this.resetTextureUnits=Y,this.setTexture2D=B,this.setTexture2DArray=L,this.setTexture3D=O,this.setTextureCube=oe,this.rebindTextures=be,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ke}function nw(t,e,n){const i=n.isWebGL2;function r(s,a=An){let o;const l=qe.getTransfer(a);if(s===qi)return t.UNSIGNED_BYTE;if(s===mv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===gv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===w2)return t.BYTE;if(s===T2)return t.SHORT;if(s===Cf)return t.UNSIGNED_SHORT;if(s===pv)return t.INT;if(s===Ii)return t.UNSIGNED_INT;if(s===Oi)return t.FLOAT;if(s===Da)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===A2)return t.ALPHA;if(s===Bn)return t.RGBA;if(s===b2)return t.LUMINANCE;if(s===C2)return t.LUMINANCE_ALPHA;if(s===wr)return t.DEPTH_COMPONENT;if(s===Ps)return t.DEPTH_STENCIL;if(s===Ad)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===R2)return t.RED;if(s===vv)return t.RED_INTEGER;if(s===P2)return t.RG;if(s===_v)return t.RG_INTEGER;if(s===xv)return t.RGBA_INTEGER;if(s===Xc||s===$c||s===Yc||s===qc)if(l===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Xc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Xc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===up||s===dp||s===fp||s===hp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===up)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===L2)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===pp||s===mp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===pp)return l===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===mp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gp||s===vp||s===_p||s===xp||s===yp||s===Sp||s===Mp||s===Ep||s===wp||s===Tp||s===Ap||s===bp||s===Cp||s===Rp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===gp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_p)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ep)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Tp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ap)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rp)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kc||s===Pp||s===Lp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Kc)return l===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===N2||s===Np||s===Dp||s===Up)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Kc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Np)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Up)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Er?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class iw extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bo extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rw={type:"move"};class yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Bo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class sw extends gn{constructor(e,n,i,r,s,a,o,l,c,d){if(d=d!==void 0?d:wr,d!==wr&&d!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===wr&&(i=Ii),i===void 0&&d===Ps&&(i=Er),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class aw extends Is{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const y=n.getContextAttributes();let p=null,u=null;const v=[],g=[],S=new Tn;S.layers.enable(1),S.viewport=new Ut;const T=new Tn;T.layers.enable(2),T.viewport=new Ut;const C=[S,T],b=new iw;b.layers.enable(1),b.layers.enable(2);let D=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let O=v[L];return O===void 0&&(O=new yu,v[L]=O),O.getTargetRaySpace()},this.getControllerGrip=function(L){let O=v[L];return O===void 0&&(O=new yu,v[L]=O),O.getGripSpace()},this.getHand=function(L){let O=v[L];return O===void 0&&(O=new yu,v[L]=O),O.getHandSpace()};function A(L){const O=g.indexOf(L.inputSource);if(O===-1)return;const oe=v[O];oe!==void 0&&(oe.update(L.inputSource,L.frame,c||a),oe.dispatchEvent({type:L.type,data:L.inputSource}))}function X(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",K);for(let L=0;L<v.length;L++){const O=g[L];O!==null&&(g[L]=null,v[L].disconnect(O))}D=null,E=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,u=null,B.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",X),r.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:m}),u=new Lr(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let O=null,oe=null,le=null;y.depth&&(le=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=y.stencil?Ps:wr,oe=y.stencil?Er:Ii);const he={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(he),r.updateRenderState({layers:[f]}),u=new Lr(f.textureWidth,f.textureHeight,{format:Bn,type:qi,depthTexture:new sw(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ve=e.properties.get(u);ve.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),B.setContext(r),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(L){for(let O=0;O<L.removed.length;O++){const oe=L.removed[O],le=g.indexOf(oe);le>=0&&(g[le]=null,v[le].disconnect(oe))}for(let O=0;O<L.added.length;O++){const oe=L.added[O];let le=g.indexOf(oe);if(le===-1){for(let ve=0;ve<v.length;ve++)if(ve>=g.length){g.push(oe),le=ve;break}else if(g[ve]===null){g[ve]=oe,le=ve;break}if(le===-1)break}const he=v[le];he&&he.connect(oe)}}const Z=new z,N=new z;function j(L,O,oe){Z.setFromMatrixPosition(O.matrixWorld),N.setFromMatrixPosition(oe.matrixWorld);const le=Z.distanceTo(N),he=O.projectionMatrix.elements,ve=oe.projectionMatrix.elements,Le=he[14]/(he[10]-1),Ae=he[14]/(he[10]+1),Ne=(he[9]+1)/he[5],ut=(he[9]-1)/he[5],Ie=(he[8]-1)/he[0],F=(ve[8]+1)/ve[0],ln=Le*Ie,_e=Le*F,be=le/(-Ie+F),Te=be*-Ie;O.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Te),L.translateZ(be),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const dt=Le+be,Oe=Ae+be,Fe=ln-Te,Ke=_e+(le-Te),At=Ne*Ae/Oe*dt,Ft=ut*Ae/Oe*dt;L.projectionMatrix.makePerspective(Fe,Ke,At,Ft,dt,Oe),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function q(L,O){O===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(O.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;b.near=T.near=S.near=L.near,b.far=T.far=S.far=L.far,(D!==b.near||E!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,E=b.far);const O=L.parent,oe=b.cameras;q(b,O);for(let le=0;le<oe.length;le++)q(oe[le],O);oe.length===2?j(b,S,T):b.projectionMatrix.copy(S.projectionMatrix),Y(L,b,O)};function Y(L,O,oe){oe===null?L.matrix.copy(O.matrixWorld):(L.matrix.copy(oe.matrixWorld),L.matrix.invert(),L.matrix.multiply(O.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(O.projectionMatrix),L.projectionMatrixInverse.copy(O.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Ua*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=L)};let I=null;function V(L,O){if(d=O.getViewerPose(c||a),_=O,d!==null){const oe=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let le=!1;oe.length!==b.cameras.length&&(b.cameras.length=0,le=!0);for(let he=0;he<oe.length;he++){const ve=oe[he];let Le=null;if(m!==null)Le=m.getViewport(ve);else{const Ne=h.getViewSubImage(f,ve);Le=Ne.viewport,he===0&&(e.setRenderTargetTextures(u,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(u))}let Ae=C[he];Ae===void 0&&(Ae=new Tn,Ae.layers.enable(he),Ae.viewport=new Ut,C[he]=Ae),Ae.matrix.fromArray(ve.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ve.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Le.x,Le.y,Le.width,Le.height),he===0&&(b.matrix.copy(Ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),le===!0&&b.cameras.push(Ae)}}for(let oe=0;oe<v.length;oe++){const le=g[oe],he=v[oe];le!==null&&he!==void 0&&he.update(le,O,c||a)}I&&I(L,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),_=null}const B=new Iv;B.setAnimationLoop(V),this.setAnimationLoop=function(L){I=L},this.dispose=function(){}}}function ow(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Lv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===an&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===an&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lw(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=r[v.id];S===void 0&&(_(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",p));const T=g.program;i.updateUBOMapping(v,T);const C=e.render.frame;s[v.id]!==C&&(f(v),s[v.id]=C)}function d(v){const g=h();v.__bindingPointIndex=g;const S=t.createBuffer(),T=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],S=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,b=S.length;C<b;C++){const D=S[C];if(m(D,C,T)===!0){const E=D.__offset,A=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let K=0;K<A.length;K++){const Z=A[K],N=y(Z);typeof Z=="number"?(D.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,E+X,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=Z.elements[0],D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=Z.elements[0],D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=Z.elements[0]):(Z.toArray(D.__data,X),X+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,E,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,S){const T=v.value;if(S[g]===void 0){if(typeof T=="number")S[g]=T;else{const C=Array.isArray(T)?T:[T],b=[];for(let D=0;D<C.length;D++)b.push(C[D].clone());S[g]=b}return!0}else if(typeof T=="number"){if(S[g]!==T)return S[g]=T,!0}else{const C=Array.isArray(S[g])?S[g]:[S[g]],b=Array.isArray(T)?T:[T];for(let D=0;D<C.length;D++){const E=C[D];if(E.equals(b[D])===!1)return E.copy(b[D]),!0}}return!1}function _(v){const g=v.uniforms;let S=0;const T=16;let C=0;for(let b=0,D=g.length;b<D;b++){const E=g[b],A={boundary:0,storage:0},X=Array.isArray(E.value)?E.value:[E.value];for(let K=0,Z=X.length;K<Z;K++){const N=X[K],j=y(N);A.boundary+=j.boundary,A.storage+=j.storage}if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=S,b>0){C=S%T;const K=T-C;C!==0&&K-A.boundary<0&&(S+=T-C,E.__offset=S)}S+=A.storage}return C=S%T,C>0&&(S+=T-C),v.__size=S,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const S=a.indexOf(g.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Bv{constructor(e={}){const{canvas:n=sy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const g=this;let S=!1,T=0,C=0,b=null,D=-1,E=null;const A=new Ut,X=new Ut;let K=null;const Z=new Xe(0);let N=0,j=n.width,q=n.height,Y=1,I=null,V=null;const B=new Ut(0,0,j,q),L=new Ut(0,0,j,q);let O=!1;const oe=new Uv;let le=!1,he=!1,ve=null;const Le=new Lt,Ae=new Ze,Ne=new z,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return b===null?Y:1}let F=i;function ln(w,U){for(let H=0;H<w.length;H++){const G=w[H],W=n.getContext(G,U);if(W!==null)return W}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bf}`),n.addEventListener("webglcontextlost",He,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",ce,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),F=ln(U,w),F===null)throw ln(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let _e,be,Te,dt,Oe,Fe,Ke,At,Ft,R,M,k,te,J,ne,me,se,ue,Me,We,ee,Ye,Ce,Ee;function xe(){_e=new _E(F),be=new dE(F,_e,e),_e.init(be),Ye=new nw(F,_e,be),Te=new ew(F,_e,be),dt=new SE(F),Oe=new B3,Fe=new tw(F,_e,Te,Oe,be,Ye,dt),Ke=new hE(g),At=new vE(g),Ft=new Py(F,be),Ce=new cE(F,_e,Ft,be),R=new xE(F,Ft,dt,Ce),M=new TE(F,R,Ft,dt),Me=new wE(F,be,Fe),me=new fE(Oe),k=new z3(g,Ke,At,_e,be,Ce,me),te=new ow(g,Oe),J=new V3,ne=new Y3(_e,be),ue=new lE(g,Ke,At,Te,M,f,l),se=new J3(g,M,be),Ee=new lw(F,dt,be,Te),We=new uE(F,_e,dt,be),ee=new yE(F,_e,dt,be),dt.programs=k.programs,g.capabilities=be,g.extensions=_e,g.properties=Oe,g.renderLists=J,g.shadowMap=se,g.state=Te,g.info=dt}xe();const pe=new aw(g,F);this.xr=pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(j,q,!1))},this.getSize=function(w){return w.set(j,q)},this.setSize=function(w,U,H=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,q=U,n.width=Math.floor(w*Y),n.height=Math.floor(U*Y),H===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(j*Y,q*Y).floor()},this.setDrawingBufferSize=function(w,U,H){j=w,q=U,Y=H,n.width=Math.floor(w*H),n.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,U,H,G){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,U,H,G),Te.viewport(A.copy(B).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(L)},this.setScissor=function(w,U,H,G){w.isVector4?L.set(w.x,w.y,w.z,w.w):L.set(w,U,H,G),Te.scissor(X.copy(L).multiplyScalar(Y).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(w){Te.setScissorTest(O=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){V=w},this.getClearColor=function(w){return w.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(w=!0,U=!0,H=!0){let G=0;if(w){let W=!1;if(b!==null){const de=b.texture.format;W=de===xv||de===_v||de===vv}if(W){const de=b.texture.type,ge=de===qi||de===Ii||de===Cf||de===Er||de===mv||de===gv,Se=ue.getClearColor(),we=ue.getClearAlpha(),Ue=Se.r,Re=Se.g,Pe=Se.b;ge?(m[0]=Ue,m[1]=Re,m[2]=Pe,m[3]=we,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Ue,_[1]=Re,_[2]=Pe,_[3]=we,F.clearBufferiv(F.COLOR,0,_))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT),H&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",He,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),J.dispose(),ne.dispose(),Oe.dispose(),Ke.dispose(),At.dispose(),M.dispose(),Ce.dispose(),Ee.dispose(),k.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",yn),pe.removeEventListener("sessionend",Qe),ve&&(ve.dispose(),ve=null),Wt.stop()};function He(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=dt.autoReset,U=se.enabled,H=se.autoUpdate,G=se.needsUpdate,W=se.type;xe(),dt.autoReset=w,se.enabled=U,se.autoUpdate=H,se.needsUpdate=G,se.type=W}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){const U=w.target;U.removeEventListener("dispose",ie),$(U)}function $(w){re(w),Oe.remove(w)}function re(w){const U=Oe.get(w).programs;U!==void 0&&(U.forEach(function(H){k.releaseProgram(H)}),w.isShaderMaterial&&k.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,G,W,de){U===null&&(U=ut);const ge=W.isMesh&&W.matrixWorld.determinant()<0,Se=p1(w,U,H,G,W);Te.setMaterial(G,ge);let we=H.index,Ue=1;if(G.wireframe===!0){if(we=R.getWireframeAttribute(H),we===void 0)return;Ue=2}const Re=H.drawRange,Pe=H.attributes.position;let gt=Re.start*Ue,cn=(Re.start+Re.count)*Ue;de!==null&&(gt=Math.max(gt,de.start*Ue),cn=Math.min(cn,(de.start+de.count)*Ue)),we!==null?(gt=Math.max(gt,0),cn=Math.min(cn,we.count)):Pe!=null&&(gt=Math.max(gt,0),cn=Math.min(cn,Pe.count));const bt=cn-gt;if(bt<0||bt===1/0)return;Ce.setup(W,G,Se,H,we);let ei,ft=We;if(we!==null&&(ei=Ft.get(we),ft=ee,ft.setIndex(ei)),W.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*Ie()),ft.setMode(F.LINES)):ft.setMode(F.TRIANGLES);else if(W.isLine){let Be=G.linewidth;Be===void 0&&(Be=1),Te.setLineWidth(Be*Ie()),W.isLineSegments?ft.setMode(F.LINES):W.isLineLoop?ft.setMode(F.LINE_LOOP):ft.setMode(F.LINE_STRIP)}else W.isPoints?ft.setMode(F.POINTS):W.isSprite&&ft.setMode(F.TRIANGLES);if(W.isInstancedMesh)ft.renderInstances(gt,bt,W.count);else if(H.isInstancedBufferGeometry){const Be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,mc=Math.min(H.instanceCount,Be);ft.renderInstances(gt,bt,mc)}else ft.render(gt,bt)};function ye(w,U,H){w.transparent===!0&&w.side===ci&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Qa(w,U,H),w.side=er,w.needsUpdate=!0,Qa(w,U,H),w.side=ci):Qa(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),p=ne.get(H),p.init(),v.push(p),H.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),w!==H&&w.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(g._useLegacyLights);const G=new Set;return w.traverse(function(W){const de=W.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const Se=de[ge];ye(Se,H,W),G.add(Se)}else ye(de,H,W),G.add(de)}),v.pop(),p=null,G},this.compileAsync=function(w,U,H=null){const G=this.compile(w,U,H);return new Promise(W=>{function de(){if(G.forEach(function(ge){Oe.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){W(w);return}setTimeout(de,10)}_e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let je=null;function _t(w){je&&je(w)}function yn(){Wt.stop()}function Qe(){Wt.start()}const Wt=new Iv;Wt.setAnimationLoop(_t),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(w){je=w,pe.setAnimationLoop(w),w===null?Wt.stop():Wt.start()},pe.addEventListener("sessionstart",yn),pe.addEventListener("sessionend",Qe),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,U,b),p=ne.get(w,v.length),p.init(),v.push(p),Le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),oe.setFromProjectionMatrix(Le),he=this.localClippingEnabled,le=me.init(this.clippingPlanes,he),y=J.get(w,u.length),y.init(),u.push(y),Wn(w,U,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(I,V),this.info.render.frame++,le===!0&&me.beginShadows();const H=p.state.shadowsArray;if(se.render(H,w,U),le===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(y,w),p.setupLights(g._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let W=0,de=G.length;W<de;W++){const ge=G[W];Vf(y,w,ge,ge.viewport)}}else Vf(y,w,U);b!==null&&(Fe.updateMultisampleRenderTarget(b),Fe.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(g,w,U),Ce.resetDefaultState(),D=-1,E=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Wn(w,U,H,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||oe.intersectsSprite(w)){G&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Le);const ge=M.update(w),Se=w.material;Se.visible&&y.push(w,ge,Se,H,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||oe.intersectsObject(w))){const ge=M.update(w),Se=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ne.copy(ge.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(Le)),Array.isArray(Se)){const we=ge.groups;for(let Ue=0,Re=we.length;Ue<Re;Ue++){const Pe=we[Ue],gt=Se[Pe.materialIndex];gt&&gt.visible&&y.push(w,ge,gt,H,Ne.z,Pe)}}else Se.visible&&y.push(w,ge,Se,H,Ne.z,null)}}const de=w.children;for(let ge=0,Se=de.length;ge<Se;ge++)Wn(de[ge],U,H,G)}function Vf(w,U,H,G){const W=w.opaque,de=w.transmissive,ge=w.transparent;p.setupLightsView(H),le===!0&&me.setGlobalState(g.clippingPlanes,H),de.length>0&&h1(W,de,U,H),G&&Te.viewport(A.copy(G)),W.length>0&&Za(W,U,H),de.length>0&&Za(de,U,H),ge.length>0&&Za(ge,U,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function h1(w,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const de=be.isWebGL2;ve===null&&(ve=new Lr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Da:qi,minFilter:Na,samples:de?4:0})),g.getDrawingBufferSize(Ae),de?ve.setSize(Ae.x,Ae.y):ve.setSize(kl(Ae.x),kl(Ae.y));const ge=g.getRenderTarget();g.setRenderTarget(ve),g.getClearColor(Z),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const Se=g.toneMapping;g.toneMapping=Yi,Za(w,H,G),Fe.updateMultisampleRenderTarget(ve),Fe.updateRenderTargetMipmap(ve);let we=!1;for(let Ue=0,Re=U.length;Ue<Re;Ue++){const Pe=U[Ue],gt=Pe.object,cn=Pe.geometry,bt=Pe.material,ei=Pe.group;if(bt.side===ci&&gt.layers.test(G.layers)){const ft=bt.side;bt.side=an,bt.needsUpdate=!0,Gf(gt,H,G,cn,bt,ei),bt.side=ft,bt.needsUpdate=!0,we=!0}}we===!0&&(Fe.updateMultisampleRenderTarget(ve),Fe.updateRenderTargetMipmap(ve)),g.setRenderTarget(ge),g.setClearColor(Z,N),g.toneMapping=Se}function Za(w,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,de=w.length;W<de;W++){const ge=w[W],Se=ge.object,we=ge.geometry,Ue=G===null?ge.material:G,Re=ge.group;Se.layers.test(H.layers)&&Gf(Se,U,H,we,Ue,Re)}}function Gf(w,U,H,G,W,de){w.onBeforeRender(g,U,H,G,W,de),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(g,U,H,G,w,de),W.transparent===!0&&W.side===ci&&W.forceSinglePass===!1?(W.side=an,W.needsUpdate=!0,g.renderBufferDirect(H,U,G,W,w,de),W.side=er,W.needsUpdate=!0,g.renderBufferDirect(H,U,G,W,w,de),W.side=ci):g.renderBufferDirect(H,U,G,W,w,de),w.onAfterRender(g,U,H,G,W,de)}function Qa(w,U,H){U.isScene!==!0&&(U=ut);const G=Oe.get(w),W=p.state.lights,de=p.state.shadowsArray,ge=W.state.version,Se=k.getParameters(w,W.state,de,U,H),we=k.getProgramCacheKey(Se);let Ue=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?At:Ke).get(w.envMap||G.environment),Ue===void 0&&(w.addEventListener("dispose",ie),Ue=new Map,G.programs=Ue);let Re=Ue.get(we);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===ge)return jf(w,Se),Re}else Se.uniforms=k.getUniforms(w),w.onBuild(H,Se,g),w.onBeforeCompile(Se,g),Re=k.acquireProgram(Se,we),Ue.set(we,Re),G.uniforms=Se.uniforms;const Pe=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=me.uniform),jf(w,Se),G.needsLights=g1(w),G.lightsStateVersion=ge,G.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMap.value=W.state.directionalShadowMap,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotShadowMap.value=W.state.spotShadowMap,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMap.value=W.state.pointShadowMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),G.currentProgram=Re,G.uniformsList=null,Re}function Wf(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=al.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function jf(w,U){const H=Oe.get(w);H.outputColorSpace=U.outputColorSpace,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function p1(w,U,H,G,W){U.isScene!==!0&&(U=ut),Fe.resetTextureUnits();const de=U.fog,ge=G.isMeshStandardMaterial?U.environment:null,Se=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:_i,we=(G.isMeshStandardMaterial?At:Ke).get(G.envMap||ge),Ue=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Re=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!H.morphAttributes.position,gt=!!H.morphAttributes.normal,cn=!!H.morphAttributes.color;let bt=Yi;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(bt=g.toneMapping);const ei=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=ei!==void 0?ei.length:0,Be=Oe.get(G),mc=p.state.lights;if(le===!0&&(he===!0||w!==E)){const un=w===E&&G.id===D;me.setState(G,w,un)}let xt=!1;G.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==mc.state.version||Be.outputColorSpace!==Se||W.isInstancedMesh&&Be.instancing===!1||!W.isInstancedMesh&&Be.instancing===!0||W.isSkinnedMesh&&Be.skinning===!1||!W.isSkinnedMesh&&Be.skinning===!0||W.isInstancedMesh&&Be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Be.instancingColor===!1&&W.instanceColor!==null||Be.envMap!==we||G.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==me.numPlanes||Be.numIntersection!==me.numIntersection)||Be.vertexAlphas!==Ue||Be.vertexTangents!==Re||Be.morphTargets!==Pe||Be.morphNormals!==gt||Be.morphColors!==cn||Be.toneMapping!==bt||be.isWebGL2===!0&&Be.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,Be.__version=G.version);let rr=Be.currentProgram;xt===!0&&(rr=Qa(G,U,W));let Xf=!1,zs=!1,gc=!1;const jt=rr.getUniforms(),sr=Be.uniforms;if(Te.useProgram(rr.program)&&(Xf=!0,zs=!0,gc=!0),G.id!==D&&(D=G.id,zs=!0),Xf||E!==w){jt.setValue(F,"projectionMatrix",w.projectionMatrix),jt.setValue(F,"viewMatrix",w.matrixWorldInverse);const un=jt.map.cameraPosition;un!==void 0&&un.setValue(F,Ne.setFromMatrixPosition(w.matrixWorld)),be.logarithmicDepthBuffer&&jt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&jt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,zs=!0,gc=!0)}if(W.isSkinnedMesh){jt.setOptional(F,W,"bindMatrix"),jt.setOptional(F,W,"bindMatrixInverse");const un=W.skeleton;un&&(be.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),jt.setValue(F,"boneTexture",un.boneTexture,Fe),jt.setValue(F,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vc=H.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0&&be.isWebGL2===!0)&&Me.update(W,H,rr),(zs||Be.receiveShadow!==W.receiveShadow)&&(Be.receiveShadow=W.receiveShadow,jt.setValue(F,"receiveShadow",W.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(sr.envMap.value=we,sr.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),zs&&(jt.setValue(F,"toneMappingExposure",g.toneMappingExposure),Be.needsLights&&m1(sr,gc),de&&G.fog===!0&&te.refreshFogUniforms(sr,de),te.refreshMaterialUniforms(sr,G,Y,q,ve),al.upload(F,Wf(Be),sr,Fe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(al.upload(F,Wf(Be),sr,Fe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&jt.setValue(F,"center",W.center),jt.setValue(F,"modelViewMatrix",W.modelViewMatrix),jt.setValue(F,"normalMatrix",W.normalMatrix),jt.setValue(F,"modelMatrix",W.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const un=G.uniformsGroups;for(let _c=0,v1=un.length;_c<v1;_c++)if(be.isWebGL2){const $f=un[_c];Ee.update($f,rr),Ee.bind($f,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function m1(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function g1(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,U,H){Oe.get(w.texture).__webglTexture=U,Oe.get(w.depthTexture).__webglTexture=H;const G=Oe.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const H=Oe.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){b=w,T=U,C=H;let G=!0,W=null,de=!1,ge=!1;if(w){const we=Oe.get(w);we.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):we.__webglFramebuffer===void 0?Fe.setupRenderTarget(w):we.__hasExternalTextures&&Fe.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ge=!0);const Re=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?W=Re[U][H]:W=Re[U],de=!0):be.isWebGL2&&w.samples>0&&Fe.useMultisampledRTT(w)===!1?W=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?W=Re[H]:W=Re,A.copy(w.viewport),X.copy(w.scissor),K=w.scissorTest}else A.copy(B).multiplyScalar(Y).floor(),X.copy(L).multiplyScalar(Y).floor(),K=O;if(Te.bindFramebuffer(F.FRAMEBUFFER,W)&&be.drawBuffers&&G&&Te.drawBuffers(w,W),Te.viewport(A),Te.scissor(X),Te.setScissorTest(K),de){const we=Oe.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,H)}else if(ge){const we=Oe.get(w.texture),Ue=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,H||0,Ue)}D=-1},this.readRenderTargetPixels=function(w,U,H,G,W,de,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){Te.bindFramebuffer(F.FRAMEBUFFER,Se);try{const we=w.texture,Ue=we.format,Re=we.type;if(Ue!==Bn&&Ye.convert(Ue)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===Da&&(_e.has("EXT_color_buffer_half_float")||be.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==qi&&Ye.convert(Re)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Oi&&(be.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&H>=0&&H<=w.height-W&&F.readPixels(U,H,G,W,Ye.convert(Ue),Ye.convert(Re),de)}finally{const we=b!==null?Oe.get(b).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(w,U,H=0){const G=Math.pow(2,-H),W=Math.floor(U.image.width*G),de=Math.floor(U.image.height*G);Fe.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,w.x,w.y,W,de),Te.unbindTexture()},this.copyTextureToTexture=function(w,U,H,G=0){const W=U.image.width,de=U.image.height,ge=Ye.convert(H.format),Se=Ye.convert(H.type);Fe.setTexture2D(H,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,w.x,w.y,W,de,ge,Se,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,ge,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,w.x,w.y,ge,Se,U.image),G===0&&H.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H,G,W=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=w.max.x-w.min.x+1,ge=w.max.y-w.min.y+1,Se=w.max.z-w.min.z+1,we=Ye.convert(G.format),Ue=Ye.convert(G.type);let Re;if(G.isData3DTexture)Fe.setTexture3D(G,0),Re=F.TEXTURE_3D;else if(G.isDataArrayTexture)Fe.setTexture2DArray(G,0),Re=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Pe=F.getParameter(F.UNPACK_ROW_LENGTH),gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),cn=F.getParameter(F.UNPACK_SKIP_PIXELS),bt=F.getParameter(F.UNPACK_SKIP_ROWS),ei=F.getParameter(F.UNPACK_SKIP_IMAGES),ft=H.isCompressedTexture?H.mipmaps[0]:H.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),H.isDataTexture||H.isData3DTexture?F.texSubImage3D(Re,W,U.x,U.y,U.z,de,ge,Se,we,Ue,ft.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Re,W,U.x,U.y,U.z,de,ge,Se,we,ft.data)):F.texSubImage3D(Re,W,U.x,U.y,U.z,de,ge,Se,we,Ue,ft),F.pixelStorei(F.UNPACK_ROW_LENGTH,Pe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,cn),F.pixelStorei(F.UNPACK_SKIP_ROWS,bt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ei),W===0&&G.generateMipmaps&&F.generateMipmap(Re),Te.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Fe.setTextureCube(w,0):w.isData3DTexture?Fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Fe.setTexture2DArray(w,0):Fe.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){T=0,C=0,b=null,Te.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Rf?"display-p3":"srgb",n.unpackColorSpace=qe.workingColorSpace===rc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Tr:yv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Tr?Dt:_i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cw extends Bv{}cw.prototype.isWebGL1Renderer=!0;class uw extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Hv extends Va{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Em=new Lt,Rd=new Tv,Ho=new sc,Vo=new z;class dw extends on{constructor(e=new yi,n=new Hv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;Em.copy(r).invert(),Rd.copy(e.ray).applyMatrix4(Em);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,y=m;_<y;_++){const p=c.getX(_);Vo.fromBufferAttribute(h,p),wm(Vo,p,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,y=m;_<y;_++)Vo.fromBufferAttribute(h,_),wm(Vo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wm(t,e,n,i,r,s,a){const o=Rd.distanceSqToPoint(t);if(o<n){const l=new z;Rd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bf);const fw=()=>{const t=mt.useRef(null);return mt.useEffect(()=>{const e=t.current;if(!e)return;const n=new uw,i=new Tn(75,e.clientWidth/e.clientHeight,.1,1e3),r=new Bv({alpha:!0,antialias:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(e.clientWidth,e.clientHeight),e.appendChild(r.domElement);const s=new yi,a=window.innerWidth<768?400:800,o=[];for(let f=0;f<a;f++){const m=Zc.randFloatSpread(600),_=Zc.randFloatSpread(600),y=Zc.randFloatSpread(600);o.push(m,_,y)}s.setAttribute("position",new Ki(o,3));const l=new Hv({color:16777215,size:window.innerWidth<768?1:1.5,transparent:!0,opacity:.8}),c=new dw(s,l);n.add(c),i.position.z=400;const d=()=>{e&&(i.aspect=e.clientWidth/e.clientHeight,i.updateProjectionMatrix(),r.setSize(e.clientWidth,e.clientHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)))};window.addEventListener("resize",d);function h(){requestAnimationFrame(h),c.rotation.y+=window.innerWidth<768?1e-4:3e-4,r.render(n,i)}return h(),()=>{window.removeEventListener("resize",d),e&&r.domElement&&e.removeChild(r.domElement),r.dispose()}},[]),x.jsxs("section",{className:"relative w-full min-h-[100vh] sm:min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden",children:[x.jsx("div",{ref:t,className:"absolute inset-0 w-full h-full z-0"}),x.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 gap-8 sm:gap-12 lg:gap-20",children:[x.jsx("div",{className:"flex-shrink-0 flex items-center justify-center order-2 lg:order-1",children:x.jsxs("div",{className:"relative group",children:[x.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"}),x.jsxs("div",{className:"relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-gray-300/30 shadow-2xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden backdrop-blur-sm",children:[x.jsx("div",{className:"w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold",children:"RB"}),x.jsx("div",{className:"absolute inset-0 bg-black/20"})]})]})}),x.jsxs("div",{className:"flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2",children:[x.jsxs("div",{className:"mb-4 sm:mb-6",children:[x.jsxs("h1",{className:"text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight",children:["Hi, I'm ",x.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400",children:"Ratul Banik"})]}),x.jsx("h2",{className:"text-lg sm:text-xl lg:text-2xl font-medium text-gray-300 mb-4 sm:mb-6",children:"Full Stack Developer & AI/ML Engineer"})]}),x.jsx("p",{className:"text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed px-2 sm:px-0",children:"I craft modern, scalable web applications and develop intelligent AI solutions. Passionate about creating impactful technology that solves real-world problems."}),x.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto",children:[x.jsxs("a",{href:"https://www.linkedin.com/in/ratul-banik1204/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto",children:[x.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5",fill:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),x.jsx("span",{className:"hidden sm:inline",children:"Connect on LinkedIn"}),x.jsx("span",{className:"sm:hidden",children:"LinkedIn"})]}),x.jsxs("a",{href:"https://github.com/rbanik1204",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-3 px-4 sm:px-6 py-3 border-2 border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto",children:[x.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5",fill:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),x.jsx("span",{className:"hidden sm:inline",children:"View GitHub"}),x.jsx("span",{className:"sm:hidden",children:"GitHub"})]})]}),x.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-400",children:[x.jsxs("span",{className:"flex items-center gap-2",children:[x.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full"}),x.jsx("span",{className:"hidden sm:inline",children:"Available for opportunities"}),x.jsx("span",{className:"sm:hidden",children:"Available"})]}),x.jsxs("span",{className:"flex items-center gap-2",children:[x.jsx("div",{className:"w-2 h-2 bg-blue-400 rounded-full"}),x.jsx("span",{className:"hidden sm:inline",children:"Based in India"}),x.jsx("span",{className:"sm:hidden",children:"India"})]})]})]})]})]})},hw=()=>x.jsxs("section",{id:"about",className:"min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 pt-20 pb-24 relative overflow-hidden",children:[x.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"}),x.jsxs("div",{className:"w-full max-w-6xl mx-auto z-10 relative",children:[x.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-16 text-center text-white",children:x.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400",children:"About Me"})}),x.jsxs("div",{className:"grid lg:grid-cols-3 gap-12 items-start",children:[x.jsxs("div",{className:"lg:col-span-1 space-y-8",children:[x.jsx("div",{className:"flex justify-center",children:x.jsxs("div",{className:"relative group",children:[x.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"}),x.jsxs("div",{className:"relative w-64 h-64 rounded-2xl border-2 border-gray-300/30 shadow-2xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden backdrop-blur-sm",children:[x.jsx("div",{className:"w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold",children:"RB"}),x.jsx("div",{className:"absolute inset-0 bg-black/20"})]})]})}),x.jsxs("div",{className:"space-y-4",children:[x.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full"}),x.jsx("span",{className:"text-green-400 font-semibold text-lg",children:"B.Tech CSE"})]}),x.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"YGPA: 8.94"})]}),x.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"w-3 h-3 bg-blue-400 rounded-full"}),x.jsx("span",{className:"text-blue-400 font-semibold text-lg",children:"Full Stack Developer"})]}),x.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Web & Software Development"})]}),x.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"w-3 h-3 bg-purple-400 rounded-full"}),x.jsx("span",{className:"text-purple-400 font-semibold text-lg",children:"AI/ML Engineer"})]}),x.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Data Analysis & Python"})]}),x.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"w-3 h-3 bg-yellow-400 rounded-full"}),x.jsx("span",{className:"text-yellow-400 font-semibold text-lg",children:"Problem Solver"})]}),x.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Competitive Programming"})]})]})]}),x.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[x.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl",children:[x.jsx("h3",{className:"text-2xl font-semibold text-white mb-4",children:"Professional Background"}),x.jsxs("p",{className:"text-gray-300 leading-relaxed mb-6",children:["I'm ",x.jsx("span",{className:"text-green-400 font-semibold",children:"Ratul Banik"}),", a passionate Computer Science student currently pursuing my ",x.jsx("span",{className:"text-blue-400 font-semibold",children:"B.Tech in Computer Science and Engineering"})," with a strong academic record (YGPA: 8.94). I'm actively seeking opportunities as a ",x.jsx("span",{className:"text-purple-400 font-semibold",children:"Full Stack Developer, Software Developer, or AI/ML Intern"})," where I can contribute to meaningful projects."]}),x.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[x.jsxs("div",{children:[x.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Technical Expertise"}),x.jsxs("ul",{className:"space-y-2 text-gray-300 text-sm",children:[x.jsx("li",{children:"• Frontend: React.js, HTML5, CSS3, JavaScript"}),x.jsx("li",{children:"• Backend: Django, Node.js, Python"}),x.jsx("li",{children:"• Languages: Python, Java, C++, C"}),x.jsx("li",{children:"• AI/ML: TensorFlow, Data Analysis, SQL"}),x.jsx("li",{children:"• Tools: Git, GitHub, Docker"})]})]}),x.jsxs("div",{children:[x.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Key Projects"}),x.jsxs("ul",{className:"space-y-2 text-gray-300 text-sm",children:[x.jsx("li",{children:"• AI Help Bot for MOSDAC Portal"}),x.jsx("li",{children:"• Smart Waste Segregation System"}),x.jsx("li",{children:"• Custom RC Car with ESP8266"}),x.jsx("li",{children:"• 200+ Hours of Competitive Programming"})]})]})]})]}),x.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl",children:[x.jsx("h3",{className:"text-2xl font-semibold text-white mb-4",children:"What Drives Me"}),x.jsxs("p",{className:"text-gray-300 leading-relaxed mb-4",children:["I thrive on ",x.jsx("span",{className:"text-green-400 font-semibold",children:"solving real-world problems through innovative technology"}),". My passion lies in exploring intelligent systems and creating solutions that make a difference. Whether it's building AI-powered applications, developing IoT solutions, or crafting elegant web experiences, I approach each challenge with creativity and technical rigor."]}),x.jsxs("p",{className:"text-gray-300 leading-relaxed",children:["I believe in ",x.jsx("span",{className:"text-blue-400 font-semibold",children:"continuous learning and collaboration"}),". My experience in hackathons, competitive programming, and hands-on projects has taught me the value of deep work, attention to detail, and the importance of user-centered design. I'm always excited to learn new technologies and contribute to innovative projects."]})]})]})]})]})]});var Vv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tm=ki.createContext&&ki.createContext(Vv),Zi=globalThis&&globalThis.__assign||function(){return Zi=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Zi.apply(this,arguments)},pw=globalThis&&globalThis.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function Gv(t){return t&&t.map(function(e,n){return ki.createElement(e.tag,Zi({key:n},e.attr),Gv(e.child))})}function Ge(t){return function(e){return ki.createElement(mw,Zi({attr:Zi({},t.attr)},e),Gv(t.child))}}function mw(t){var e=function(n){var i=t.attr,r=t.size,s=t.title,a=pw(t,["attr","size","title"]),o=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ki.createElement("svg",Zi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:l,style:Zi(Zi({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&ki.createElement("title",null,s),t.children)};return Tm!==void 0?ki.createElement(Tm.Consumer,null,function(n){return e(n)}):e(Vv)}function gw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"}}]})(t)}function vw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"}}]})(t)}function Df(t){return Ge({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(t)}function _w(t){return Ge({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"}}]})(t)}function xw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"}}]})(t)}function Am(t){return Ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"}}]})(t)}function Wv(t){return Ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(t)}function Su(t){return Ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"}}]})(t)}function yw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(t)}function jv(t){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(t)}function bm(t){return Ge({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"}}]})(t)}function Cm(t){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"}}]})(t)}function ol(t){return Ge({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}}]})(t)}function Sw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"}}]})(t)}function Mw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(t)}function Ew(t){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(t)}function ww(t){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}}]})(t)}function Rm(t){return Ge({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"}}]})(t)}function Tw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(t)}function Aw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(t)}function bw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"}}]})(t)}function Cw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(t)}function Pm(t){return Ge({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"}}]})(t)}function Rw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"}}]})(t)}function Pw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"}}]})(t)}function Lw(t){return Ge({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"}}]})(t)}function Nw(t){return Ge({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"}}]})(t)}function Dw(t){return Ge({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"}}]})(t)}function Uw(t){return Ge({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"}}]})(t)}function Iw(t){return Ge({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"}}]})(t)}function Ow(t){return Ge({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"}}]})(t)}function Fw(t){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M265.344 17.5l-4.188 25.313c-17.994-.1-35.62 2.066-52.562 6.28l-9.438-25.062-55.125 20.75 9.907 26.282c-15.008 8.587-28.96 18.95-41.5 30.876L90 83.53l-37.375 45.5L75.75 148c-8.54 14.428-15.47 30.036-20.5 46.594l-30.063-4.97-9.593 58.095L46 252.75c-.374 17.218 1.313 34.127 4.906 50.438L22 314.063l20.75 55.125 28.625-10.782c8.07 15.027 17.91 29.046 29.28 41.75L81.688 423.25l45.532 37.344 18.343-22.344c14.386 9.118 30.04 16.577 46.687 22.125l-4.53 27.5 58.093 9.594 4.343-26.283c18.046.874 35.764-.54 52.875-4.03l8.97 23.78 55.094-20.75-8.53-22.656c16.126-8.343 31.134-18.683 44.655-30.78l17.936 14.72 37.344-45.533-17.188-14.093c9.733-15.35 17.606-32.125 23.25-50.03l21.407 3.53 9.56-58.094-21.06-3.47c.608-18.84-1.282-37.305-5.408-55.06l19.844-7.47-20.75-55.125-20.187 7.594c-8.89-16.114-19.817-31.033-32.5-44.376l14.155-17.25-45.5-37.375-14.72 17.936c-15.396-9.116-32.13-16.37-49.936-21.47l3.967-24.092-58.093-9.594zm-8.03 47.938c11.136-.15 22.437.685 33.81 2.562C395.113 85.164 465.665 183.606 448.5 287.594 431.336 391.58 332.894 462.134 228.906 444.97 124.92 427.803 54.366 329.36 71.53 225.374c15.02-90.99 92.292-156.386 181.032-159.813 1.585-.06 3.16-.103 4.75-.124zm.217 18.687c-1.437.018-2.88.04-4.31.094-80.154 3.037-149.672 61.917-163.25 144.186-15.52 94.022 47.977 182.606 142 198.125 94.02 15.52 182.573-47.977 198.093-142 15.52-94.02-47.947-182.573-141.97-198.092-10.283-1.698-20.496-2.44-30.562-2.313zm.408 18.156c9-.116 18.145.546 27.343 2.064 84.096 13.88 140.85 93.092 126.97 177.187-13.88 84.096-93.06 140.85-177.156 126.97-25.808-4.26-49.03-14.68-68.438-29.5l109.688-133.625 52.844 43.375 58.437-71.188-108.22-88.78-101.842 35.53 71 58.25L140.78 353.938c-26.985-33.066-40.165-77.126-32.655-122.625 12.146-73.583 74.283-126.223 145.97-128.937 1.28-.048 2.557-.077 3.843-.094z"}}]})(t)}const kw=[{label:"Programming Languages",icon:"💻",skills:[{icon:x.jsx(ol,{}),name:"C",level:"Advanced"},{icon:x.jsx(Lw,{}),name:"C++",level:"Advanced"},{icon:x.jsx(Su,{}),name:"Python",level:"Expert"},{icon:x.jsx(xw,{}),name:"Java",level:"Intermediate"},{icon:x.jsx(Am,{}),name:"JavaScript",level:"Advanced"}]},{label:"Web Development",icon:"🌐",skills:[{icon:x.jsx(_w,{}),name:"HTML5",level:"Expert"},{icon:x.jsx(gw,{}),name:"CSS3",level:"Advanced"},{icon:x.jsx(Am,{}),name:"JavaScript",level:"Advanced"},{icon:x.jsx(yw,{}),name:"React.js",level:"Advanced"},{icon:x.jsx(Nw,{}),name:"Django",level:"Intermediate"},{icon:x.jsx(Iw,{}),name:"Tailwind CSS",level:"Advanced"}]},{label:"AI & Machine Learning",icon:"🤖",skills:[{icon:x.jsx(Ow,{}),name:"TensorFlow",level:"Intermediate"},{icon:x.jsx(Su,{}),name:"Data Analysis",level:"Advanced"},{icon:x.jsx(Sw,{}),name:"SQL",level:"Intermediate"},{icon:x.jsx(Su,{}),name:"Pandas",level:"Advanced"}]},{label:"Tools & Practices",icon:"⚙️",skills:[{icon:x.jsx(vw,{}),name:"Git & GitHub",level:"Advanced"},{icon:x.jsx(Dw,{}),name:"Docker",level:"Basic"},{icon:x.jsx(Uw,{}),name:"MongoDB",level:"Intermediate"},{icon:x.jsx(Fw,{}),name:"OOP",level:"Advanced"}]}],zw=()=>x.jsxs("section",{id:"skills",className:"min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 relative overflow-hidden",children:[x.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"}),x.jsxs("div",{className:"w-full max-w-7xl mx-auto z-10 relative",children:[x.jsxs("div",{className:"text-center mb-16",children:[x.jsx("h2",{className:"text-4xl lg:text-5xl font-bold text-white mb-4",children:x.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400",children:"Technical Skills"})}),x.jsx("p",{className:"text-gray-400 text-lg max-w-2xl mx-auto",children:"A comprehensive overview of my technical expertise and proficiency levels across various technologies."})]}),x.jsx("div",{className:"space-y-16",children:kw.map((t,e)=>x.jsxs("div",{className:"glass-card rounded-2xl p-8 lg:p-12",children:[x.jsxs("div",{className:"text-center mb-12",children:[x.jsx("div",{className:"text-4xl mb-4",children:t.icon}),x.jsx("h3",{className:"text-2xl lg:text-3xl font-bold text-white mb-2",children:t.label}),x.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"})]}),x.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",children:t.skills.map((n,i)=>x.jsx("div",{className:"group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer",children:x.jsxs("div",{className:"flex flex-col items-center text-center",children:[x.jsx("div",{className:"w-16 h-16 mb-4 flex items-center justify-center text-3xl text-blue-400 group-hover:text-blue-300 transition-colors",children:n.icon}),x.jsx("h4",{className:"font-semibold text-white mb-2 text-sm lg:text-base",children:n.name}),x.jsx("span",{className:"text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full",children:n.level})]})},i))})]},e))}),x.jsx("div",{className:"mt-20 text-center",children:x.jsxs("div",{className:"glass-card rounded-2xl p-8 max-w-4xl mx-auto",children:[x.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Additional Competencies"}),x.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:["Problem Solving","Data Structures","Algorithms","System Design","API Development","Responsive Design","Performance Optimization","Testing & Debugging"].map((t,e)=>x.jsx("div",{className:"bg-white/5 rounded-lg p-3 text-sm text-gray-300 hover:text-white transition-colors",children:t},e))})]})})]})]}),Bw=[{title:"Smart Waste Segregator",description:"An intelligent IoT system that uses computer vision and sensors to automatically segregate dry, wet, and metallic waste. Features real-time monitoring dashboard and mobile app integration.",tech:["Arduino","TensorFlow","React","IoT","Python"],github:"https://github.com/rbanik1204/smart-waste-segregator",live:"",icon:x.jsx(Rw,{className:"text-2xl text-blue-400"}),category:"IoT & AI"},{title:"AI Career Guidance Bot",description:"An intelligent chatbot powered by OpenAI that provides personalized career guidance to students. Integrates with educational databases and offers tailored recommendations.",tech:["OpenAI API","React","Node.js","MongoDB","NLP"],github:"https://github.com/rbanik1204/ai-career-bot",live:"",icon:x.jsx(Pm,{className:"text-2xl text-purple-400"}),category:"AI/ML"},{title:"Personal Portfolio",description:"A modern, responsive portfolio website built with React and Three.js. Features 3D animations, smooth scrolling, and professional design showcasing my skills and projects.",tech:["React","Three.js","Tailwind CSS","Vite","Framer Motion"],github:"https://github.com/rbanik1204/portfolio",live:"https://ratulbanik.vercel.app",icon:x.jsx(ol,{className:"text-2xl text-green-400"}),category:"Web Development"},{title:"E-Commerce Platform",description:"A full-stack e-commerce solution with user authentication, payment integration, admin dashboard, and responsive design. Built with modern web technologies.",tech:["React","Django","PostgreSQL","Stripe","Docker"],github:"https://github.com/rbanik1204/ecommerce-platform",live:"",icon:x.jsx(ol,{className:"text-2xl text-yellow-400"}),category:"Full Stack"},{title:"Data Analysis Dashboard",description:"Interactive dashboard for analyzing business metrics and KPIs. Features real-time data visualization, custom charts, and export functionality.",tech:["Python","Pandas","Plotly","Streamlit","SQL"],github:"https://github.com/rbanik1204/data-dashboard",live:"",icon:x.jsx(Pm,{className:"text-2xl text-cyan-400"}),category:"Data Science"},{title:"Task Management App",description:"A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Built for productivity and team efficiency.",tech:["React","Node.js","Socket.io","MongoDB","JWT"],github:"https://github.com/rbanik1204/task-manager",live:"",icon:x.jsx(ol,{className:"text-2xl text-pink-400"}),category:"Web App"}],Hw=()=>x.jsxs("section",{id:"projects",className:"min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 relative overflow-hidden",children:[x.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"}),x.jsxs("div",{className:"w-full max-w-7xl mx-auto z-10 relative",children:[x.jsxs("div",{className:"text-center mb-16",children:[x.jsx("h2",{className:"text-4xl lg:text-5xl font-bold text-white mb-4",children:x.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400",children:"Featured Projects"})}),x.jsx("p",{className:"text-gray-400 text-lg max-w-2xl mx-auto",children:"Here are some of my recent projects that showcase my skills in web development, AI/ML, and problem-solving."})]}),x.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:Bw.map((t,e)=>x.jsxs("div",{className:"group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]",children:[x.jsx("div",{className:"flex items-start justify-between mb-4",children:x.jsxs("div",{className:"flex items-center gap-3",children:[t.icon,x.jsx("span",{className:"text-xs font-medium text-gray-400 bg-white/10 px-2 py-1 rounded-full",children:t.category})]})}),x.jsx("h3",{className:"text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors",children:t.title}),x.jsx("p",{className:"text-gray-300 text-sm leading-relaxed mb-4",children:t.description}),x.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:t.tech.map((n,i)=>x.jsx("span",{className:"bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30",children:n},i))}),x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsxs("div",{className:"flex gap-3",children:[t.github&&x.jsxs("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm",children:[x.jsx(Df,{className:"text-lg"}),"Code"]}),t.live&&x.jsxs("a",{href:t.live,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm",children:[x.jsx(ww,{className:"text-lg"}),"Live Demo"]})]}),!t.live&&x.jsx("span",{className:"text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full",children:"Demo Coming Soon"})]})]},e))}),x.jsx("div",{className:"text-center mt-16",children:x.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl max-w-2xl mx-auto",children:[x.jsx("h3",{className:"text-2xl font-semibold text-white mb-4",children:"Interested in Working Together?"}),x.jsx("p",{className:"text-gray-300 mb-6",children:"I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation."}),x.jsx("a",{href:"#contact",className:"inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg",children:"Let's Connect"})]})})]})]}),Vw=[{title:"Smart India Hackathon Finalist",description:"Reached final round in national-level hackathon",icon:x.jsx(Pw,{className:"text-2xl text-yellow-400"}),category:"Competition"},{title:"AI/ML Help Bot Winner",description:"Developed innovative AI solution for MOSDAC portal",icon:x.jsx(bm,{className:"text-2xl text-blue-400"}),category:"Innovation"},{title:"React Development Certified",description:"Completed advanced React.js development course",icon:x.jsx(Cm,{className:"text-2xl text-green-400"}),category:"Certification"},{title:"IoT RC Car Innovation",description:"Built custom RC car with ESP8266 and sensors",icon:x.jsx(bm,{className:"text-2xl text-purple-400"}),category:"Hardware"},{title:"AWS AI/ML Certificate",description:"Certified in AWS machine learning services",icon:x.jsx(Cm,{className:"text-2xl text-orange-400"}),category:"Cloud"},{title:"Web Dev Bootcamp Topper",description:"Achieved top position in web development program",icon:x.jsx(Tw,{className:"text-2xl text-cyan-400"}),category:"Education"}],Gw=()=>{const[t,e]=mt.useState(!1),[n,i]=mt.useState("");mt.useEffect(()=>{i(`/PORTFOLIO/ratul_resume.pdf?t=${Date.now()}`)},[]);const r=()=>{e(!0)};return x.jsxs("section",{id:"resume",className:"min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 relative overflow-hidden",children:[x.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"}),x.jsxs("div",{className:"w-full max-w-6xl mx-auto z-10 relative",children:[x.jsxs("div",{className:"text-center mb-16",children:[x.jsx("h2",{className:"text-4xl lg:text-5xl font-bold text-white mb-4",children:x.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400",children:"Resume & Achievements"})}),x.jsx("p",{className:"text-gray-400 text-lg max-w-2xl mx-auto",children:"Download my resume and explore my academic achievements, certifications, and notable accomplishments."})]}),x.jsxs("div",{className:"glass-card rounded-2xl p-8 lg:p-12 mb-12",children:[x.jsxs("div",{className:"text-center mb-8",children:[x.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Professional Resume"}),x.jsx("p",{className:"text-gray-400",children:"Click below to download or view my detailed resume"})]}),x.jsx("div",{className:"w-full max-w-4xl h-[600px] mb-8 shadow-2xl rounded-xl overflow-hidden border border-white/10 mx-auto bg-white/5",children:!t&&n?x.jsx("iframe",{src:n,title:"Ratul Banik Resume",className:"w-full h-full",onError:r,onLoad:()=>e(!1)}):x.jsx("div",{className:"w-full h-full flex items-center justify-center",children:x.jsxs("div",{className:"text-center",children:[x.jsx(Rm,{className:"text-6xl text-gray-400 mx-auto mb-4"}),x.jsx("p",{className:"text-gray-400 mb-2",children:"PDF could not be loaded"}),x.jsx("p",{className:"text-sm text-gray-500",children:"Please use the download button below"})]})})}),x.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[x.jsxs("a",{href:"/PORTFOLIO/ratul_resume.pdf",download:"Ratul_Banik_Resume.pdf",className:"inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg",children:[x.jsx(Mw,{className:"text-lg"}),"Download Resume"]}),x.jsxs("a",{href:"/PORTFOLIO/ratul_resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105",children:[x.jsx(Rm,{className:"text-lg"}),"View Fullscreen"]})]})]}),x.jsxs("div",{className:"glass-card rounded-2xl p-8 lg:p-12",children:[x.jsxs("div",{className:"text-center mb-12",children:[x.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Key Achievements"}),x.jsx("p",{className:"text-gray-400",children:"Highlights of my academic and professional accomplishments"})]}),x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Vw.map((s,a)=>x.jsx("div",{className:"group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer",children:x.jsxs("div",{className:"flex items-start gap-4",children:[x.jsx("div",{className:"flex-shrink-0",children:s.icon}),x.jsxs("div",{className:"flex-1",children:[x.jsx("h4",{className:"font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors",children:s.title}),x.jsx("p",{className:"text-sm text-gray-400 mb-3",children:s.description}),x.jsx("span",{className:"inline-block text-xs text-gray-500 bg-white/10 px-2 py-1 rounded-full",children:s.category})]})]})},a))})]}),x.jsx("div",{className:"text-center mt-16",children:x.jsxs("div",{className:"glass-card rounded-2xl p-8 max-w-2xl mx-auto",children:[x.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Work Together?"}),x.jsx("p",{className:"text-gray-300 mb-6",children:"I'm actively seeking new opportunities and would love to discuss how I can contribute to your team or project."}),x.jsx("a",{href:"#contact",className:"inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg",children:"Let's Discuss Opportunities"})]})})]})]})},Ww=()=>{const[t,e]=mt.useState(!1),[n,i]=mt.useState({name:"",email:"",message:""}),[r,s]=mt.useState(!1),[a,o]=mt.useState(!1),[l,c]=mt.useState(""),h=`${("https://portfolio-gh2m.onrender.com".trim()||"http://localhost:5000").replace(/\/$/,"")}/api/contact`,f=_=>{i({...n,[_.target.name]:_.target.value}),c("")},m=async _=>{_.preventDefault(),o(!0),c("");try{const p=await(await fetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();p.success?(s(!0),i({name:"",email:"",message:""}),e(!1),setTimeout(()=>s(!1),4e3)):c(p.message||"Failed to send message")}catch{c("Network error. Please check your connection and try again.")}finally{o(!1)}};return x.jsxs("section",{id:"contact",className:"-mt-2 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden",children:[x.jsx("div",{className:"pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black via-black/60 to-transparent"}),x.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_55%)]"}),x.jsxs("div",{className:"w-full max-w-6xl mx-auto z-10 relative",children:[x.jsxs("div",{className:"text-center mb-12 sm:mb-16",children:[x.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4",children:x.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400",children:"Let's Connect"})}),x.jsx("p",{className:"text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0",children:"Interested in collaborating, have a project idea, or just want to say hi? I'd love to hear from you and discuss how we can work together."})]}),x.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 sm:gap-12 items-start",children:[x.jsx("div",{className:"space-y-6 sm:space-y-8",children:x.jsxs("div",{className:"glass-card rounded-2xl p-6 sm:p-8",children:[x.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6",children:"Get In Touch"}),x.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[x.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[x.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0",children:x.jsx(Ew,{className:"text-lg sm:text-xl text-blue-400"})}),x.jsxs("div",{className:"min-w-0 flex-1",children:[x.jsx("p",{className:"text-gray-300 text-xs sm:text-sm",children:"Email"}),x.jsx("a",{href:"mailto:ratulbanik1204@gmail.com",className:"text-white hover:text-blue-400 transition-colors font-medium text-sm sm:text-base break-all",children:"ratulbanik1204@gmail.com"})]})]}),x.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[x.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0",children:x.jsx(bw,{className:"text-lg sm:text-xl text-purple-400"})}),x.jsxs("div",{className:"min-w-0 flex-1",children:[x.jsx("p",{className:"text-gray-300 text-xs sm:text-sm",children:"Location"}),x.jsx("p",{className:"text-white font-medium text-sm sm:text-base",children:"India"})]})]}),x.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[x.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0",children:x.jsx(Cw,{className:"text-lg sm:text-xl text-green-400"})}),x.jsxs("div",{className:"min-w-0 flex-1",children:[x.jsx("p",{className:"text-gray-300 text-xs sm:text-sm",children:"Status"}),x.jsx("p",{className:"text-white font-medium text-sm sm:text-base",children:"Available for opportunities"})]})]})]}),x.jsxs("div",{className:"mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10",children:[x.jsx("h4",{className:"text-sm sm:text-base font-medium text-gray-300 mb-3 sm:mb-4",children:"Follow Me"}),x.jsxs("div",{className:"flex gap-3 sm:gap-4",children:[x.jsx("a",{href:"https://www.linkedin.com/in/ratul-banik1204/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300",children:x.jsx(Wv,{className:"text-lg sm:text-xl"})}),x.jsx("a",{href:"https://github.com/rbanik1204",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 sm:w-12 sm:h-12 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-300 transition-all duration-300",children:x.jsx(Df,{className:"text-lg sm:text-xl"})}),x.jsx("a",{href:"https://twitter.com/ratulbanik1204",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 sm:w-12 sm:h-12 bg-blue-400/20 hover:bg-blue-400/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300",children:x.jsx(jv,{className:"text-lg sm:text-xl"})})]})]})]})}),x.jsxs("div",{className:"glass-card rounded-2xl p-6 sm:p-8",children:[x.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6",children:"Send a Message"}),l&&x.jsx("div",{className:"mb-4 sm:mb-6 p-3 sm:p-4 bg-red-500/20 border border-red-500/30 rounded-lg",children:x.jsx("p",{className:"text-red-400 text-sm",children:l})}),x.jsxs("form",{onSubmit:m,className:"space-y-4 sm:space-y-6",children:[x.jsxs("div",{children:[x.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-2",children:"Name"}),x.jsx("input",{id:"name",className:"w-full p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base",type:"text",name:"name",placeholder:"Your Name",value:n.name,onChange:f,required:!0,disabled:a})]}),x.jsxs("div",{children:[x.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-2",children:"Email"}),x.jsx("input",{id:"email",className:"w-full p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base",type:"email",name:"email",placeholder:"your.email@example.com",value:n.email,onChange:f,required:!0,disabled:a})]}),x.jsxs("div",{children:[x.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300 mb-2",children:"Message"}),x.jsx("textarea",{id:"message",className:"w-full p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-base",name:"message",placeholder:"Tell me about your project or how I can help...",rows:"5",value:n.message,onChange:f,required:!0,disabled:a})]}),x.jsx("button",{type:"submit",disabled:a,className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base",children:a?x.jsxs("span",{className:"flex items-center justify-center gap-2",children:[x.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):"Send Message"})]})]})]}),r&&x.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:x.jsxs("div",{className:"glass-card rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 text-center animate-fade-in-up",children:[x.jsx("div",{className:"text-3xl sm:text-4xl mb-3 sm:mb-4",children:"🎉"}),x.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mb-2",children:"Thank you!"}),x.jsx("p",{className:"text-gray-300 text-sm sm:text-base",children:"Your message has been sent successfully. I'll get back to you soon!"})]})})]})]})},jw=()=>{const t=new Date().getFullYear();return x.jsxs("footer",{className:"bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 relative overflow-hidden -mt-px",children:[x.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_55%)]"}),x.jsxs("div",{className:"w-full max-w-6xl mx-auto px-6 z-10 relative",children:[x.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-12",children:[x.jsxs("div",{className:"md:col-span-2",children:[x.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[x.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg",children:"RB"}),x.jsx("span",{className:"text-xl font-bold text-white",children:"Ratul Banik"})]}),x.jsx("p",{className:"text-gray-400 mb-6 max-w-md",children:"Full Stack Developer and AI/ML Engineer passionate about creating innovative solutions and building impactful technology."}),x.jsxs("div",{className:"flex gap-4",children:[x.jsx("a",{href:"https://www.linkedin.com/in/ratul-banik1204/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300",title:"LinkedIn",children:x.jsx(Wv,{className:"text-lg"})}),x.jsx("a",{href:"https://github.com/rbanik1204",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-gray-600/20 hover:bg-gray-600/40 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-300 transition-all duration-300",title:"GitHub",children:x.jsx(Df,{className:"text-lg"})}),x.jsx("a",{href:"https://x.com/ratulbanik1204",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300",title:"X (Twitter)",children:x.jsx(jv,{className:"text-lg"})})]})]}),x.jsxs("div",{children:[x.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Quick Links"}),x.jsxs("ul",{className:"space-y-3",children:[x.jsx("li",{children:x.jsx("a",{href:"#about",className:"text-gray-400 hover:text-white transition-colors",children:"About"})}),x.jsx("li",{children:x.jsx("a",{href:"#skills",className:"text-gray-400 hover:text-white transition-colors",children:"Skills"})}),x.jsx("li",{children:x.jsx("a",{href:"#projects",className:"text-gray-400 hover:text-white transition-colors",children:"Projects"})}),x.jsx("li",{children:x.jsx("a",{href:"#resume",className:"text-gray-400 hover:text-white transition-colors",children:"Resume"})}),x.jsx("li",{children:x.jsx("a",{href:"#contact",className:"text-gray-400 hover:text-white transition-colors",children:"Contact"})})]})]}),x.jsxs("div",{children:[x.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Contact"}),x.jsxs("ul",{className:"space-y-3",children:[x.jsxs("li",{className:"text-gray-400",children:[x.jsx("span",{className:"block text-sm",children:"Email"}),x.jsx("a",{href:"mailto:ratulbanik1204@gmail.com",className:"text-white hover:text-blue-400 transition-colors",children:"ratulbanik1204@gmail.com"})]}),x.jsxs("li",{className:"text-gray-400",children:[x.jsx("span",{className:"block text-sm",children:"Location"}),x.jsx("span",{className:"text-white",children:"India"})]}),x.jsxs("li",{className:"text-gray-400",children:[x.jsx("span",{className:"block text-sm",children:"Status"}),x.jsx("span",{className:"text-green-400",children:"Available for opportunities"})]})]})]})]}),x.jsx("div",{className:"pt-8 border-t border-white/10",children:x.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[x.jsxs("div",{className:"text-gray-400 text-sm",children:["© ",t," Ratul Banik. All rights reserved."]}),x.jsxs("div",{className:"flex items-center gap-4 text-sm",children:[x.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors",children:"Privacy Policy"}),x.jsx("span",{className:"text-gray-600",children:"•"}),x.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors",children:"Terms of Service"})]}),x.jsxs("div",{className:"flex items-center gap-2 text-gray-400 text-sm",children:["Made with ",x.jsx(Aw,{className:"text-red-400"})," in India"]})]})})]})]})};var ht={},Uf={},Wa={},ja={},Xv="Expected a function",Lm=0/0,Xw="[object Symbol]",$w=/^\s+|\s+$/g,Yw=/^[-+]0x[0-9a-f]+$/i,qw=/^0b[01]+$/i,Kw=/^0o[0-7]+$/i,Zw=parseInt,Qw=typeof Ja=="object"&&Ja&&Ja.Object===Object&&Ja,Jw=typeof self=="object"&&self&&self.Object===Object&&self,eT=Qw||Jw||Function("return this")(),tT=Object.prototype,nT=tT.toString,iT=Math.max,rT=Math.min,Mu=function(){return eT.Date.now()};function sT(t,e,n){var i,r,s,a,o,l,c=0,d=!1,h=!1,f=!0;if(typeof t!="function")throw new TypeError(Xv);e=Nm(e)||0,Bl(n)&&(d=!!n.leading,h="maxWait"in n,s=h?iT(Nm(n.maxWait)||0,e):s,f="trailing"in n?!!n.trailing:f);function m(C){var b=i,D=r;return i=r=void 0,c=C,a=t.apply(D,b),a}function _(C){return c=C,o=setTimeout(u,e),d?m(C):a}function y(C){var b=C-l,D=C-c,E=e-b;return h?rT(E,s-D):E}function p(C){var b=C-l,D=C-c;return l===void 0||b>=e||b<0||h&&D>=s}function u(){var C=Mu();if(p(C))return v(C);o=setTimeout(u,y(C))}function v(C){return o=void 0,f&&i?m(C):(i=r=void 0,a)}function g(){o!==void 0&&clearTimeout(o),c=0,i=l=r=o=void 0}function S(){return o===void 0?a:v(Mu())}function T(){var C=Mu(),b=p(C);if(i=arguments,r=this,l=C,b){if(o===void 0)return _(l);if(h)return o=setTimeout(u,e),m(l)}return o===void 0&&(o=setTimeout(u,e)),a}return T.cancel=g,T.flush=S,T}function aT(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(Xv);return Bl(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),sT(t,e,{leading:i,maxWait:e,trailing:r})}function Bl(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function oT(t){return!!t&&typeof t=="object"}function lT(t){return typeof t=="symbol"||oT(t)&&nT.call(t)==Xw}function Nm(t){if(typeof t=="number")return t;if(lT(t))return Lm;if(Bl(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Bl(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace($w,"");var n=qw.test(t);return n||Kw.test(t)?Zw(t.slice(2),n?2:8):Yw.test(t)?Lm:+t}var cT=aT,Xa={};Object.defineProperty(Xa,"__esModule",{value:!0});Xa.addPassiveEventListener=function(e,n,i){var r=i.name;r||(r=n,console.warn("Listener must be a named function.")),ll.has(n)||ll.set(n,new Set);var s=ll.get(n);if(!s.has(r)){var a=function(){var o=!1;try{var l=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,l)}catch{}return o}();e.addEventListener(n,i,a?{passive:!0}:!1),s.add(r)}};Xa.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),ll.get(n).delete(i.name||n)};var ll=new Map;Object.defineProperty(ja,"__esModule",{value:!0});var uT=cT,dT=fT(uT),Dm=Xa;function fT(t){return t&&t.__esModule?t:{default:t}}var hT=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,dT.default)(e,n)},st={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=hT(function(r){st.scrollHandler(e)},n);return st.scrollSpyContainers.push(e),(0,Dm.addPassiveEventListener)(e,"scroll",i),function(){(0,Dm.removePassiveEventListener)(e,"scroll",i),st.scrollSpyContainers.splice(st.scrollSpyContainers.indexOf(e),1)}}return function(){}},isMounted:function(e){return st.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.scrollY!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.scrollX:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.scrollX!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.scrollY:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=st.scrollSpyContainers[st.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(st.currentPositionX(e),st.currentPositionY(e))})},addStateHandler:function(e){st.spySetState.push(e)},addSpyHandler:function(e,n){var i=st.scrollSpyContainers[st.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e)},updateStates:function(){st.spySetState.forEach(function(e){return e()})},unmount:function(e,n){st.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),st.spySetState&&st.spySetState.length&&st.spySetState.indexOf(e)>-1&&st.spySetState.splice(st.spySetState.indexOf(e),1),document.removeEventListener("scroll",st.scrollHandler)},update:function(){return st.scrollSpyContainers.forEach(function(e){return st.scrollHandler(e)})}};ja.default=st;var ks={},$a={};Object.defineProperty($a,"__esModule",{value:!0});var pT=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",s=window&&window.location,a=r?s.pathname+s.search+r:s.pathname+s.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},mT=function(){return window.location.hash.replace(/^#/,"")},gT=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},vT=function(e){return getComputedStyle(e).position!=="static"},Eu=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},_T=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(vT(e)){if(n.offsetParent!==e){var r=function(d){return d===e||d===document},s=Eu(n,r),a=s.offsetTop,o=s.offsetParent;if(o!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(d){return d===document};return Eu(n,l).offsetTop-Eu(e,l).offsetTop};$a.default={updateHash:pT,getHash:mT,filterElementInContainer:gT,scrollOffset:_T};var lc={},If={};Object.defineProperty(If,"__esModule",{value:!0});If.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Of={};Object.defineProperty(Of,"__esModule",{value:!0});var xT=Xa,yT=["mousedown","wheel","touchmove","keydown"];Of.default={subscribe:function(e){return typeof document<"u"&&yT.forEach(function(n){return(0,xT.addPassiveEventListener)(document,n,e)})}};var Ya={};Object.defineProperty(Ya,"__esModule",{value:!0});var Pd={registered:{},scrollEvent:{register:function(e,n){Pd.registered[e]=n},remove:function(e){Pd.registered[e]=null}}};Ya.default=Pd;Object.defineProperty(lc,"__esModule",{value:!0});var ST=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},MT=$a;cc(MT);var ET=If,Um=cc(ET),wT=Of,TT=cc(wT),AT=Ya,Yn=cc(AT);function cc(t){return t&&t.__esModule?t:{default:t}}var $v=function(e){return Um.default[e.smooth]||Um.default.defaultEasing},bT=function(e){return typeof e=="function"?e:function(){return e}},CT=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Ld=function(){return CT()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),Yv=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},qv=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},Kv=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},RT=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},PT=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},LT=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){Yn.default.registered.end&&Yn.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var s=t.bind(null,e,n);Ld.call(window,s);return}Yn.default.registered.end&&Yn.default.registered.end(r.to,r.target,r.currentPosition)},Ff=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},qa=function(e,n,i,r){n.data=n.data||Yv(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(TT.default.subscribe(s),Ff(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?qv(n):Kv(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Yn.default.registered.end&&Yn.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=bT(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var a=$v(n),o=LT.bind(null,a,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Yn.default.registered.begin&&Yn.default.registered.begin(n.data.to,n.data.target),Ld.call(window,o)},n.delay);return}Yn.default.registered.begin&&Yn.default.registered.begin(n.data.to,n.data.target),Ld.call(window,o)},uc=function(e){return e=ST({},e),e.data=e.data||Yv(),e.absolute=!0,e},NT=function(e){qa(0,uc(e))},DT=function(e,n){qa(e,uc(n))},UT=function(e){e=uc(e),Ff(e),qa(e.horizontal?RT(e):PT(e),e)},IT=function(e,n){n=uc(n),Ff(n);var i=n.horizontal?qv(n):Kv(n);qa(e+i,n)};lc.default={animateTopScroll:qa,getAnimationType:$v,scrollToTop:NT,scrollToBottom:UT,scrollTo:DT,scrollMore:IT};Object.defineProperty(ks,"__esModule",{value:!0});var OT=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},FT=$a,kT=kf(FT),zT=lc,BT=kf(zT),HT=Ya,Go=kf(HT);function kf(t){return t&&t.__esModule?t:{default:t}}var Wo={},Im=void 0;ks.default={unmount:function(){Wo={}},register:function(e,n){Wo[e]=n},unregister:function(e){delete Wo[e]},get:function(e){return Wo[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return Im=e},getActiveLink:function(){return Im},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=OT({},n,{absolute:!1});var r=n.containerId,s=n.container,a=void 0;r?a=document.getElementById(r):s&&s.nodeType?a=s:a=document,n.absolute=!0;var o=n.horizontal,l=kT.default.scrollOffset(a,i,o)+(n.offset||0);if(!n.smooth){Go.default.registered.begin&&Go.default.registered.begin(e,i),a===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):a.scrollTop=l,Go.default.registered.end&&Go.default.registered.end(e,i);return}BT.default.animateTopScroll(l,n,e,i)}};var Zv={exports:{}},VT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",GT=VT,WT=GT;function Qv(){}function Jv(){}Jv.resetWarningCache=Qv;var jT=function(){function t(i,r,s,a,o,l){if(l!==WT){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Jv,resetWarningCache:Qv};return n.PropTypes=n,n};Zv.exports=jT();var dc=Zv.exports,fc={};Object.defineProperty(fc,"__esModule",{value:!0});var XT=$a,wu=$T(XT);function $T(t){return t&&t.__esModule?t:{default:t}}var YT={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var s=this.containers[e]||document;i.scrollTo(e,{container:s})}},getHash:function(){return wu.default.getHash()},changeHash:function(e,n){this.isInitialized()&&wu.default.getHash()!==e&&wu.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};fc.default=YT;Object.defineProperty(Wa,"__esModule",{value:!0});var jo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qT=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),KT=mt,Om=Ka(KT),ZT=ja,Xo=Ka(ZT),QT=ks,JT=Ka(QT),e4=dc,it=Ka(e4),t4=fc,bi=Ka(t4);function Ka(t){return t&&t.__esModule?t:{default:t}}function n4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i4(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function r4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Fm={to:it.default.string.isRequired,containerId:it.default.string,container:it.default.object,activeClass:it.default.string,activeStyle:it.default.object,spy:it.default.bool,horizontal:it.default.bool,smooth:it.default.oneOfType([it.default.bool,it.default.string]),offset:it.default.number,delay:it.default.number,isDynamic:it.default.bool,onClick:it.default.func,duration:it.default.oneOfType([it.default.number,it.default.func]),absolute:it.default.bool,onSetActive:it.default.func,onSetInactive:it.default.func,ignoreCancelEvents:it.default.bool,hashSpy:it.default.bool,saveHashHistory:it.default.bool,spyThrottle:it.default.number};Wa.default=function(t,e){var n=e||JT.default,i=function(s){r4(a,s);function a(o){n4(this,a);var l=i4(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,o));return r.call(l),l.state={active:!1},l.beforeUnmountCallbacks=[],l}return qT(a,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,c=this.props.container;return l&&!c?document.getElementById(l):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();if(!Xo.default.isMounted(l)){var c=Xo.default.mount(l,this.props.spyThrottle);this.beforeUnmountCallbacks.push(c)}this.props.hashSpy&&(bi.default.isMounted()||bi.default.mount(n),bi.default.mapContainer(this.props.to,l)),Xo.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Xo.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(l){return l()})}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var c={};this.state&&this.state.active?c=jo({},this.props.style,this.props.activeStyle):c=jo({},this.props.style);var d=jo({},this.props);for(var h in Fm)d.hasOwnProperty(h)&&delete d[h];return d.className=l,d.style=c,d.onClick=this.handleClick,Om.default.createElement(t,d)}}]),a}(Om.default.PureComponent),r=function(){var a=this;this.scrollTo=function(o,l){n.scrollTo(o,jo({},a.state,l))},this.handleClick=function(o){a.props.onClick&&a.props.onClick(o),o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(o,l){var c=a.getScrollSpyContainer();if(!(bi.default.isMounted()&&!bi.default.isInitialized())){var d=a.props.horizontal,h=a.props.to,f=null,m=void 0,_=void 0;if(d){var y=0,p=0,u=0;if(c.getBoundingClientRect){var v=c.getBoundingClientRect();u=v.left}if(!f||a.props.isDynamic){if(f=n.get(h),!f)return;var g=f.getBoundingClientRect();y=g.left-u+o,p=y+g.width}var S=o-a.props.offset;m=S>=Math.floor(y)&&S<Math.floor(p),_=S<Math.floor(y)||S>=Math.floor(p)}else{var T=0,C=0,b=0;if(c.getBoundingClientRect){var D=c.getBoundingClientRect();b=D.top}if(!f||a.props.isDynamic){if(f=n.get(h),!f)return;var E=f.getBoundingClientRect();T=E.top-b+l,C=T+E.height}var A=l-a.props.offset;m=A>=Math.floor(T)&&A<Math.floor(C),_=A<Math.floor(T)||A>=Math.floor(C)}var X=n.getActiveLink();if(_){if(h===X&&n.setActiveLink(void 0),a.props.hashSpy&&bi.default.getHash()===h){var K=a.props.saveHashHistory,Z=K===void 0?!1:K;bi.default.changeHash("",Z)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(h,f))}if(m&&(X!==h||a.state.active===!1)){n.setActiveLink(h);var N=a.props.saveHashHistory,j=N===void 0?!1:N;a.props.hashSpy&&bi.default.changeHash(h,j),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(h,f))}}}};return i.propTypes=Fm,i.defaultProps={offset:0},i};Object.defineProperty(Uf,"__esModule",{value:!0});var s4=mt,km=e1(s4),a4=Wa,o4=e1(a4);function e1(t){return t&&t.__esModule?t:{default:t}}function l4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function zm(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function c4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u4=function(t){c4(e,t);function e(){var n,i,r,s;l4(this,e);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return s=(i=(r=zm(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o))),r),r.render=function(){return km.default.createElement("a",r.props,r.props.children)},i),zm(r,s)}return e}(km.default.Component);Uf.default=(0,o4.default)(u4);var zf={};Object.defineProperty(zf,"__esModule",{value:!0});var d4=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),f4=mt,Bm=t1(f4),h4=Wa,p4=t1(h4);function t1(t){return t&&t.__esModule?t:{default:t}}function m4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g4(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function v4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _4=function(t){v4(e,t);function e(){return m4(this,e),g4(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return d4(e,[{key:"render",value:function(){return Bm.default.createElement("button",this.props,this.props.children)}}]),e}(Bm.default.Component);zf.default=(0,p4.default)(_4);var Bf={},hc={};Object.defineProperty(hc,"__esModule",{value:!0});var x4=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},y4=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),S4=mt,Hm=pc(S4),M4=uv;pc(M4);var E4=ks,Vm=pc(E4),w4=dc,Gm=pc(w4);function pc(t){return t&&t.__esModule?t:{default:t}}function T4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A4(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function b4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}hc.default=function(t){var e=function(n){b4(i,n);function i(r){T4(this,i);var s=A4(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return s.childBindings={domNode:null},s}return y4(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Vm.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){Vm.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return Hm.default.createElement(t,x4({},this.props,{parentBindings:this.childBindings}))}}]),i}(Hm.default.Component);return e.propTypes={name:Gm.default.string,id:Gm.default.string},e};Object.defineProperty(Bf,"__esModule",{value:!0});var Wm=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},C4=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),R4=mt,jm=Hf(R4),P4=hc,L4=Hf(P4),N4=dc,Xm=Hf(N4);function Hf(t){return t&&t.__esModule?t:{default:t}}function D4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U4(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function I4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var n1=function(t){I4(e,t);function e(){return D4(this,e),U4(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return C4(e,[{key:"render",value:function(){var i=this,r=Wm({},this.props);return delete r.name,r.parentBindings&&delete r.parentBindings,jm.default.createElement("div",Wm({},r,{ref:function(a){i.props.parentBindings.domNode=a}}),this.props.children)}}]),e}(jm.default.Component);n1.propTypes={name:Xm.default.string,id:Xm.default.string};Bf.default=(0,L4.default)(n1);var Tu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$m=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function Ym(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qm(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Km(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var $o=mt,ur=ja,Au=ks,at=dc,Ci=fc,Zm={to:at.string.isRequired,containerId:at.string,container:at.object,activeClass:at.string,spy:at.bool,smooth:at.oneOfType([at.bool,at.string]),offset:at.number,delay:at.number,isDynamic:at.bool,onClick:at.func,duration:at.oneOfType([at.number,at.func]),absolute:at.bool,onSetActive:at.func,onSetInactive:at.func,ignoreCancelEvents:at.bool,hashSpy:at.bool,spyThrottle:at.number},O4={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||Au,r=function(a){Km(o,a);function o(l){Ym(this,o);var c=qm(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,l));return s.call(c),c.state={active:!1},c}return $m(o,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,d=this.props.container;return c?document.getElementById(c):d&&d.nodeType?d:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();ur.isMounted(c)||ur.mount(c,this.props.spyThrottle),this.props.hashSpy&&(Ci.isMounted()||Ci.mount(i),Ci.mapContainer(this.props.to,c)),this.props.spy&&ur.addStateHandler(this.stateHandler),ur.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){ur.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var d=Tu({},this.props);for(var h in Zm)d.hasOwnProperty(h)&&delete d[h];return d.className=c,d.onClick=this.handleClick,$o.createElement(e,d)}}]),o}($o.Component),s=function(){var o=this;this.scrollTo=function(l,c){i.scrollTo(l,Tu({},o.state,c))},this.handleClick=function(l){o.props.onClick&&o.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),o.scrollTo(o.props.to,o.props)},this.stateHandler=function(){i.getActiveLink()!==o.props.to&&(o.state!==null&&o.state.active&&o.props.onSetInactive&&o.props.onSetInactive(),o.setState({active:!1}))},this.spyHandler=function(l){var c=o.getScrollSpyContainer();if(!(Ci.isMounted()&&!Ci.isInitialized())){var d=o.props.to,h=null,f=0,m=0,_=0;if(c.getBoundingClientRect){var y=c.getBoundingClientRect();_=y.top}if(!h||o.props.isDynamic){if(h=i.get(d),!h)return;var p=h.getBoundingClientRect();f=p.top-_+l,m=f+p.height}var u=l-o.props.offset,v=u>=Math.floor(f)&&u<Math.floor(m),g=u<Math.floor(f)||u>=Math.floor(m),S=i.getActiveLink();if(g)return d===S&&i.setActiveLink(void 0),o.props.hashSpy&&Ci.getHash()===d&&Ci.changeHash(),o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive()),ur.updateStates();if(v&&S!==d)return i.setActiveLink(d),o.props.hashSpy&&Ci.changeHash(d),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(d)),ur.updateStates()}}};return r.propTypes=Zm,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){Km(r,i);function r(s){Ym(this,r);var a=qm(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,s));return a.childBindings={domNode:null},a}return $m(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Au.unregister(this.props.name)}},{key:"registerElems",value:function(a){Au.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return $o.createElement(e,Tu({},this.props,{parentBindings:this.childBindings}))}}]),r}($o.Component);return n.propTypes={name:at.string,id:at.string},n}},F4=O4;Object.defineProperty(ht,"__esModule",{value:!0});ht.Helpers=ht.ScrollElement=ht.ScrollLink=ht.animateScroll=ht.scrollSpy=ht.Events=ht.scroller=mr=ht.Element=ht.Button=Jr=ht.Link=void 0;var k4=Uf,i1=Jn(k4),z4=zf,r1=Jn(z4),B4=Bf,s1=Jn(B4),H4=ks,a1=Jn(H4),V4=Ya,o1=Jn(V4),G4=ja,l1=Jn(G4),W4=lc,c1=Jn(W4),j4=Wa,u1=Jn(j4),X4=hc,d1=Jn(X4),$4=F4,f1=Jn($4);function Jn(t){return t&&t.__esModule?t:{default:t}}var Jr=ht.Link=i1.default;ht.Button=r1.default;var mr=ht.Element=s1.default;ht.scroller=a1.default;ht.Events=o1.default;ht.scrollSpy=l1.default;ht.animateScroll=c1.default;ht.ScrollLink=u1.default;ht.ScrollElement=d1.default;ht.Helpers=f1.default;ht.default={Link:i1.default,Button:r1.default,Element:s1.default,scroller:a1.default,Events:o1.default,scrollSpy:l1.default,animateScroll:c1.default,ScrollLink:u1.default,ScrollElement:d1.default,Helpers:f1.default};const Y4=()=>{const[t,e]=mt.useState(!1),[n,i]=mt.useState(!1);mt.useEffect(()=>{const a=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const r=()=>{i(!1)},s=[{name:"Home",to:"hero"},{name:"About",to:"about"},{name:"Skills",to:"skills"},{name:"Projects",to:"projects"},{name:"Resume",to:"resume"},{name:"Contact",to:"contact"}];return x.jsx("nav",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${t?"bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl":"bg-transparent"}`,children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex items-center justify-between h-16 lg:h-20",children:[x.jsxs(Jr,{to:"hero",smooth:!0,duration:500,className:"flex items-center gap-2 sm:gap-3 cursor-pointer group",onClick:r,children:[x.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm sm:text-lg lg:text-xl shadow-lg group-hover:shadow-xl transition-all duration-300",children:"RB"}),x.jsx("span",{className:"text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors",children:"Ratul Banik"})]}),x.jsx("div",{className:"hidden md:flex items-center gap-8",children:s.map(a=>x.jsxs(Jr,{to:a.to,smooth:!0,duration:500,className:"relative cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base group",children:[a.name,x.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"})]},a.name))}),x.jsx("div",{className:"hidden md:block",children:x.jsxs(Jr,{to:"contact",smooth:!0,duration:500,className:"inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer",children:[x.jsx("span",{children:"Get In Touch"}),x.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})}),x.jsx("div",{className:"md:hidden",children:x.jsx("button",{className:"text-gray-300 hover:text-white transition-colors p-2",onClick:()=>i(!n),"aria-label":"Toggle mobile menu",children:n?x.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):x.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]}),x.jsx("div",{className:`md:hidden transition-all duration-300 ease-in-out ${n?"max-h-96 opacity-100 visible":"max-h-0 opacity-0 invisible"}`,children:x.jsxs("div",{className:"py-4 space-y-2 border-t border-white/10",children:[s.map(a=>x.jsx(Jr,{to:a.to,smooth:!0,duration:500,className:"block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium cursor-pointer",onClick:r,children:a.name},a.name)),x.jsx("div",{className:"px-4 pt-2",children:x.jsx(Jr,{to:"contact",smooth:!0,duration:500,className:"block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer",onClick:r,children:"Get In Touch"})})]})})]})})},q4=()=>x.jsxs("div",{className:"bg-black text-white",children:[x.jsx(Y4,{}),x.jsx(mr,{name:"hero",children:x.jsx(fw,{})}),x.jsx(mr,{name:"about",children:x.jsx(hw,{})}),x.jsx(mr,{name:"skills",children:x.jsx(zw,{})}),x.jsx(mr,{name:"projects",children:x.jsx(Hw,{})}),x.jsx(mr,{name:"resume",children:x.jsx(Gw,{})}),x.jsx(mr,{name:"contact",children:x.jsx(Ww,{})}),x.jsx(jw,{})]});function K4(){return x.jsx(q4,{})}bu.createRoot(document.getElementById("root")).render(x.jsx(ki.StrictMode,{children:x.jsx(K4,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{const t="/PORTFOLIO/sw.js";navigator.serviceWorker.register(t).catch(()=>{})});
