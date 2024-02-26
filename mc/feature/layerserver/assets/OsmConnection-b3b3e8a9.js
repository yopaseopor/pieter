var $=Object.defineProperty;var y=(t,e,n)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var d=(t,e,n)=>(y(t,typeof e!="symbol"?e+"":e,n),n);import{c as commonjsGlobal,g as getDefaultExportFromCjs}from"./_commonjsHelpers-de833af9.js";import{U as UIEventSource,S as Stores}from"./UIEventSource-f4363691.js";import{U as Utils}from"./Utils-2916eb3d.js";import{L as LocalStorageSource}from"./LocalStorageSource-9ebd3b00.js";import{C as Constants}from"./Constants-cd9b8b66.js";var assign=make_assign(),create$1=make_create(),trim$1=make_trim(),Global$5=typeof window<"u"?window:commonjsGlobal,util$6={assign,create:create$1,trim:trim$1,bind:bind$1,slice:slice$1,each:each$7,map,pluck:pluck$1,isList:isList$1,isFunction:isFunction$1,isObject:isObject$1,Global:Global$5};function make_assign(){return Object.assign?Object.assign:function(e,n,r,a){for(var c=1;c<arguments.length;c++)each$7(Object(arguments[c]),function(s,o){e[o]=s});return e}}function make_create(){if(Object.create)return function(e,n,r,a){var c=slice$1(arguments,1);return assign.apply(this,[Object.create(e)].concat(c))};{let t=function(){};return function(n,r,a,c){var s=slice$1(arguments,1);return t.prototype=n,assign.apply(this,[new t].concat(s))}}}function make_trim(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function bind$1(t,e){return function(){return e.apply(t,Array.prototype.slice.call(arguments,0))}}function slice$1(t,e){return Array.prototype.slice.call(t,e||0)}function each$7(t,e){pluck$1(t,function(n,r){return e(n,r),!1})}function map(t,e){var n=isList$1(t)?[]:{};return pluck$1(t,function(r,a){return n[a]=e(r,a),!1}),n}function pluck$1(t,e){if(isList$1(t)){for(var n=0;n<t.length;n++)if(e(t[n],n))return t[n]}else for(var r in t)if(t.hasOwnProperty(r)&&e(t[r],r))return t[r]}function isList$1(t){return t!=null&&typeof t!="function"&&typeof t.length=="number"}function isFunction$1(t){return t&&{}.toString.call(t)==="[object Function]"}function isObject$1(t){return t&&{}.toString.call(t)==="[object Object]"}var util$5=util$6,slice=util$5.slice,pluck=util$5.pluck,each$6=util$5.each,bind=util$5.bind,create=util$5.create,isList=util$5.isList,isFunction=util$5.isFunction,isObject=util$5.isObject,storeEngine={createStore},storeAPI={version:"2.0.12",enabled:!1,get:function(t,e){var n=this.storage.read(this._namespacePrefix+t);return this._deserialize(n,e)},set:function(t,e){return e===void 0?this.remove(t):(this.storage.write(this._namespacePrefix+t,this._serialize(e)),e)},remove:function(t){this.storage.remove(this._namespacePrefix+t)},each:function(t){var e=this;this.storage.each(function(n,r){t.call(e,e._deserialize(n),(r||"").replace(e._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(t){return this._namespacePrefix=="__storejs_"+t+"_"},createStore:function(){return createStore.apply(this,arguments)},addPlugin:function(t){this._addPlugin(t)},namespace:function(t){return createStore(this.storage,this.plugins,t)}};function _warn(){var t=typeof console>"u"?null:console;if(t){var e=t.warn?t.warn:t.log;e.apply(t,arguments)}}function createStore(t,e,n){n||(n=""),t&&!isList(t)&&(t=[t]),e&&!isList(e)&&(e=[e]);var r=n?"__storejs_"+n+"_":"",a=n?new RegExp("^"+r):null,c=/^[a-zA-Z0-9_\-]*$/;if(!c.test(n))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var s={_namespacePrefix:r,_namespaceRegexp:a,_testStorage:function(i){try{var u="__storejs__test__";i.write(u,u);var l=i.read(u)===u;return i.remove(u),l}catch{return!1}},_assignPluginFnProp:function(i,u){var l=this[u];this[u]=function(){var g=slice(arguments,0),p=this;function v(){if(l)return each$6(arguments,function(b,m){g[m]=b}),l.apply(p,g)}var _=[v].concat(g);return i.apply(p,_)}},_serialize:function(i){return JSON.stringify(i)},_deserialize:function(i,u){if(!i)return u;var l="";try{l=JSON.parse(i)}catch{l=i}return l!==void 0?l:u},_addStorage:function(i){this.enabled||this._testStorage(i)&&(this.storage=i,this.enabled=!0)},_addPlugin:function(i){var u=this;if(isList(i)){each$6(i,function(g){u._addPlugin(g)});return}var l=pluck(this.plugins,function(g){return i===g});if(!l){if(this.plugins.push(i),!isFunction(i))throw new Error("Plugins must be function values that return objects");var h=i.call(this);if(!isObject(h))throw new Error("Plugins must return an object of function properties");each$6(h,function(g,p){if(!isFunction(g))throw new Error("Bad plugin property: "+p+" from plugin "+i.name+". Plugins should only return functions.");u._assignPluginFnProp(g,p)})}},addStorage:function(i){_warn("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(i)}},o=create(s,storeAPI,{plugins:[]});return o.raw={},each$6(o,function(i,u){isFunction(i)&&(o.raw[u]=bind(o,i))}),each$6(t,function(i){o._addStorage(i)}),each$6(e,function(i){o._addPlugin(i)}),o}var util$4=util$6,Global$4=util$4.Global,localStorage_1={name:"localStorage",read:read$5,write:write$5,each:each$5,remove:remove$5,clearAll:clearAll$5};function localStorage(){return Global$4.localStorage}function read$5(t){return localStorage().getItem(t)}function write$5(t,e){return localStorage().setItem(t,e)}function each$5(t){for(var e=localStorage().length-1;e>=0;e--){var n=localStorage().key(e);t(read$5(n),n)}}function remove$5(t){return localStorage().removeItem(t)}function clearAll$5(){return localStorage().clear()}var util$3=util$6,Global$3=util$3.Global,oldFFGlobalStorage={name:"oldFF-globalStorage",read:read$4,write:write$4,each:each$4,remove:remove$4,clearAll:clearAll$4},globalStorage=Global$3.globalStorage;function read$4(t){return globalStorage[t]}function write$4(t,e){globalStorage[t]=e}function each$4(t){for(var e=globalStorage.length-1;e>=0;e--){var n=globalStorage.key(e);t(globalStorage[n],n)}}function remove$4(t){return globalStorage.removeItem(t)}function clearAll$4(){each$4(function(t,e){delete globalStorage[t]})}var util$2=util$6,Global$2=util$2.Global,oldIEUserDataStorage={name:"oldIE-userDataStorage",write:write$3,read:read$3,each:each$3,remove:remove$3,clearAll:clearAll$3},storageName="storejs",doc$1=Global$2.document,_withStorageEl=_makeIEStorageElFunction(),disable=(Global$2.navigator?Global$2.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);function write$3(t,e){if(!disable){var n=fixKey(t);_withStorageEl(function(r){r.setAttribute(n,e),r.save(storageName)})}}function read$3(t){if(!disable){var e=fixKey(t),n=null;return _withStorageEl(function(r){n=r.getAttribute(e)}),n}}function each$3(t){_withStorageEl(function(e){for(var n=e.XMLDocument.documentElement.attributes,r=n.length-1;r>=0;r--){var a=n[r];t(e.getAttribute(a.name),a.name)}})}function remove$3(t){var e=fixKey(t);_withStorageEl(function(n){n.removeAttribute(e),n.save(storageName)})}function clearAll$3(){_withStorageEl(function(t){var e=t.XMLDocument.documentElement.attributes;t.load(storageName);for(var n=e.length-1;n>=0;n--)t.removeAttribute(e[n].name);t.save(storageName)})}var forbiddenCharsRegex=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function fixKey(t){return t.replace(/^\d/,"___$&").replace(forbiddenCharsRegex,"___")}function _makeIEStorageElFunction(){if(!doc$1||!doc$1.documentElement||!doc$1.documentElement.addBehavior)return null;var t="script",e,n,r;try{n=new ActiveXObject("htmlfile"),n.open(),n.write("<"+t+">document.w=window</"+t+'><iframe src="/favicon.ico"></iframe>'),n.close(),e=n.w.frames[0].document,r=e.createElement("div")}catch{r=doc$1.createElement("div"),e=doc$1.body}return function(a){var c=[].slice.call(arguments,0);c.unshift(r),e.appendChild(r),r.addBehavior("#default#userData"),r.load(storageName),a.apply(this,c),e.removeChild(r)}}var util$1=util$6,Global$1=util$1.Global,trim=util$1.trim,cookieStorage={name:"cookieStorage",read:read$2,write:write$2,each:each$2,remove:remove$2,clearAll:clearAll$2},doc=Global$1.document;function read$2(t){if(!t||!_has(t))return null;var e="(?:^|.*;\\s*)"+escape(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(doc.cookie.replace(new RegExp(e),"$1"))}function each$2(t){for(var e=doc.cookie.split(/; ?/g),n=e.length-1;n>=0;n--)if(trim(e[n])){var r=e[n].split("="),a=unescape(r[0]),c=unescape(r[1]);t(c,a)}}function write$2(t,e){t&&(doc.cookie=escape(t)+"="+escape(e)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function remove$2(t){!t||!_has(t)||(doc.cookie=escape(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function clearAll$2(){each$2(function(t,e){remove$2(e)})}function _has(t){return new RegExp("(?:^|;\\s*)"+escape(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(doc.cookie)}var util=util$6,Global=util.Global,sessionStorage_1={name:"sessionStorage",read:read$1,write:write$1,each:each$1,remove:remove$1,clearAll:clearAll$1};function sessionStorage(){return Global.sessionStorage}function read$1(t){return sessionStorage().getItem(t)}function write$1(t,e){return sessionStorage().setItem(t,e)}function each$1(t){for(var e=sessionStorage().length-1;e>=0;e--){var n=sessionStorage().key(e);t(read$1(n),n)}}function remove$1(t){return sessionStorage().removeItem(t)}function clearAll$1(){return sessionStorage().clear()}var memoryStorage_1={name:"memoryStorage",read,write,each,remove,clearAll},memoryStorage={};function read(t){return memoryStorage[t]}function write(t,e){memoryStorage[t]=e}function each(t){for(var e in memoryStorage)memoryStorage.hasOwnProperty(e)&&t(memoryStorage[e],e)}function remove(t){delete memoryStorage[t]}function clearAll(t){memoryStorage={}}var all=[localStorage_1,oldFFGlobalStorage,oldIEUserDataStorage,cookieStorage,sessionStorage_1,memoryStorage_1],json2$1={},hasRequiredJson2;function requireJson2(){return hasRequiredJson2||(hasRequiredJson2=1,typeof JSON!="object"&&(JSON={}),function(){var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(e){var n=meta[e];return typeof n=="string"?n:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var n,r,a,c,s=gap,o,i=e[t];switch(i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(t)),typeof rep=="function"&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,o=[],Object.prototype.toString.apply(i)==="[object Array]"){for(c=i.length,n=0;n<c;n+=1)o[n]=str(n,i)||"null";return a=o.length===0?"[]":gap?`[
`+gap+o.join(`,
`+gap)+`
`+s+"]":"["+o.join(",")+"]",gap=s,a}if(rep&&typeof rep=="object")for(c=rep.length,n=0;n<c;n+=1)typeof rep[n]=="string"&&(r=rep[n],a=str(r,i),a&&o.push(quote(r)+(gap?": ":":")+a));else for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(a=str(r,i),a&&o.push(quote(r)+(gap?": ":":")+a));return a=o.length===0?"{}":gap?`{
`+gap+o.join(`,
`+gap)+`
`+s+"}":"{"+o.join(",")+"}",gap=s,a}}typeof JSON.stringify!="function"&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,n){var r;if(gap="",indent="",typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);if(rep=e,e&&typeof e!="function"&&(typeof e!="object"||typeof e.length!="number"))throw new Error("JSON.stringify");return str("",{"":t})}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var n,r,a=t[e];if(a&&typeof a=="object")for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(r=walk(a,n),r!==void 0?a[n]=r:delete a[n]);return reviver.call(t,e,a)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()),json2$1}var json2=json2Plugin;function json2Plugin(){return requireJson2(),{}}var engine=storeEngine,storages=all,plugins=[json2],store_legacy=engine.createStore(storages,plugins);const store=getDefaultExportFromCjs(store_legacy);function osmAuth(t){var e={};e.authenticated=function(){return!!a("oauth2_access_token")},e.logout=function(){return a("oauth2_access_token",""),a("oauth_token",""),a("oauth_token_secret",""),a("oauth_request_token_secret",""),e},e.authenticate=function(s){if(e.authenticated()){s(null,e);return}e.logout(),_generatePkceChallenge(function(o){n(o,s)})},e.authenticateAsync=function(){return e.authenticated()?Promise.resolve(e):(e.logout(),new Promise((s,o)=>{var i=(u,l)=>{u?o(new Error(u)):s(l)};_generatePkceChallenge(u=>n(u,i))}))};function n(s,o){var i=generateState(),u=t.url+"/oauth2/authorize?"+utilQsString({client_id:t.client_id,redirect_uri:t.redirect_uri,response_type:"code",scope:t.scope,state:i,code_challenge:s.code_challenge,code_challenge_method:s.code_challenge_method});if(t.singlepage){if(!store.enabled){var l=new Error("local storage unavailable, but require in singlepage mode");l.status="pkce-localstorage-unavailable",o(l);return}var h=utilStringQs(window.location.search.slice(1));h.code?e.bootstrapToken(h.code,o):(a("oauth2_state",i),a("oauth2_pkce_code_verifier",s.code_verifier),window.location=u)}else{var g=600,p=550,v=[["width",g],["height",p],["left",window.screen.width/2-g/2],["top",window.screen.height/2-p/2]].map(function(m){return m.join("=")}).join(","),_=window.open("about:blank","oauth_window",v);e.popupWindow=_,_.location=u,_||(l=new Error("Popup was blocked"),l.status="popup-blocked",o(l))}window.authComplete=function(m){var w=utilStringQs(m.split("?")[1]);if(w.state!==i){l=new Error("Invalid state"),l.status="invalid-state",o(l);return}r(w.code,s.code_verifier,b),delete window.authComplete};function b(m,w){if(t.done(),m){o(m);return}var S=JSON.parse(w.response);a("oauth2_access_token",S.access_token),o(null,e)}}function r(s,o,i){var u=t.url+"/oauth2/token?"+utilQsString({client_id:t.client_id,redirect_uri:t.redirect_uri,grant_type:"authorization_code",code:s,code_verifier:o});e.rawxhr("POST",u,null,null,null,i),t.loading()}e.bringPopupWindowToFront=function(){var s=!1;try{e.popupWindow&&!e.popupWindow.closed&&(e.popupWindow.focus(),s=!0)}catch{}return s},e.bootstrapToken=function(s,o){var i=a("oauth2_state");a("oauth2_state","");var u=utilStringQs(window.location.search.slice(1));if(u.state!==i){var l=new Error("Invalid state");l.status="invalid-state",o(l);return}var h=a("oauth2_pkce_code_verifier");a("oauth2_pkce_code_verifier",""),r(s,h,g);function g(p,v){if(t.done(),p){o(p);return}var _=JSON.parse(v.response);a("oauth2_access_token",_.access_token),o(null,e)}},e.fetch=function(s,o){if(e.authenticated())return i();return t.auto?e.authenticateAsync().then(i):Promise.reject(new Error("not authenticated"));function i(){return o=o||{},o.headers||(o.headers={"Content-Type":"application/x-www-form-urlencoded"}),o.headers.Authorization="Bearer "+a("oauth2_access_token"),fetch(s,o)}},e.xhr=function(s,o){if(e.authenticated())return i();if(t.auto){e.authenticate(i);return}else{o("not authenticated",null);return}function i(){var l=s.prefix!==!1?t.url+s.path:s.path;return e.rawxhr(s.method,l,a("oauth2_access_token"),s.content,s.headers,u)}function u(l,h){l?o(l):h.responseXML?o(l,h.responseXML):o(l,h.response)}},e.rawxhr=function(s,o,i,u,l,h){l=l||{"Content-Type":"application/x-www-form-urlencoded"},i&&(l.Authorization="Bearer "+i);var g=new XMLHttpRequest;g.onreadystatechange=function(){g.readyState===4&&g.status!==0&&(/^20\d$/.test(g.status)?h(null,g):h(g,null))},g.onerror=function(v){h(v,null)},g.open(s,o,!0);for(var p in l)g.setRequestHeader(p,l[p]);return g.send(u),g},e.preauth=function(s){return s&&s.access_token&&a("oauth2_access_token",s.access_token),e},e.options=function(s){return arguments.length?(t=s,t.url=t.url||"https://www.openstreetmap.org",t.auto=t.auto||!1,t.singlepage=t.singlepage||!1,t.loading=t.loading||function(){},t.done=t.done||function(){},e.preauth(t)):t};var a;if(store.enabled)a=function(s,o){if(arguments.length===1)return store.get(t.url+s);if(arguments.length===2)return store.set(t.url+s,o)};else{var c={};a=function(s,o){if(arguments.length===1)return c[t.url+s];if(arguments.length===2)return c[t.url+s]=o}}return e.options(t),e}function utilQsString(t){return Object.keys(t).filter(function(e){return t[e]!==void 0}).sort().map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}function utilStringQs(t){for(var e=0;e<t.length&&(t[e]==="?"||t[e]==="#");)e++;return t=t.slice(e),t.split("&").reduce(function(n,r){var a=r.split("=");return a.length===2&&(n[a[0]]=decodeURIComponent(a[1])),n},{})}function supportsWebCryptoAPI(){return window&&window.crypto&&window.crypto.getRandomValues&&window.crypto.subtle&&window.crypto.subtle.digest}function _generatePkceChallenge(t){var e;if(supportsWebCryptoAPI()){var n=window.crypto.getRandomValues(new Uint8Array(32));e=base64(n.buffer);var r=Uint8Array.from(Array.from(e).map(function(s){return s.charCodeAt(0)}));window.crypto.subtle.digest("SHA-256",r).then(function(s){var o=base64(s);t({code_challenge:o,code_verifier:e,code_challenge_method:"S256"})})}else{var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";e="";for(var c=0;c<64;c++)e+=a[Math.floor(Math.random()*a.length)];t({code_verifier:e,code_challenge:e,code_challenge_method:"plain"})}}function generateState(){var t;if(supportsWebCryptoAPI()){var e=window.crypto.getRandomValues(new Uint8Array(32));t=base64(e.buffer)}else{var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";t="";for(var r=0;r<64;r++)t+=n[Math.floor(Math.random()*n.length)]}return t}function base64(t){return btoa(String.fromCharCode.apply(null,new Uint8Array(t))).replace(/\//g,"_").replace(/\+/g,"-").replace(/[=]/g,"")}class OsmPreferences{constructor(e,n){d(this,"preferences",LocalStorageSource.GetParsed("all-osm-preferences",{}));d(this,"preferenceSources",new Map);d(this,"auth");d(this,"userDetails");d(this,"longPreferences",{});this.auth=e,this.userDetails=n.userDetails;const r=this;n.OnLoggedIn(()=>(r.UpdatePreferences(!0),!0))}GetLongPreference(e,n="mapcomplete-"){if(this.longPreferences[n+e]!==void 0)return this.longPreferences[n+e];const r=new UIEventSource(void 0,"long-osm-preference:"+n+e);this.longPreferences[n+e]=r;const a=n+e+"-combined",c={prefix:""},s=this.GetPreference(a+"-length","",c);if((a+"-length").length>255)throw"This preference key is too long, it has "+e.length+" characters, but at most "+(255-7-9-n.length)+" characters are allowed";const o=this;r.addCallback(u=>{if(u===void 0||u==="")return;if(u===null){console.error("Deleting "+a);let h=parseInt(s.data);for(let g=0;g<h;g++)o.GetPreference(a+"-"+g,"",c).setData("");o.GetPreference(a+"-length","",c).setData("");return}let l=0;for(;u!=="";){if(u===void 0||u==="undefined")throw r.setData(void 0),"Got 'undefined' or a literal string containing 'undefined' for a long preference with name "+e;if(u==="undefined")throw r.setData(void 0),"Got a literal string containing 'undefined' for a long preference with name "+e;if(l>100)throw"This long preference is getting very long... ";o.GetPreference(a+"-"+l,"",c).setData(u.substr(0,255)),u=u.substr(255),l++}s.setData(""+l)});function i(u){if(Object.keys(o.preferences.data).length===0)return;const l=Number(u);if(l>100)throw"Length to long";let h="";for(let g=0;g<l;g++){const p=a+"-"+g;o.preferences.data[p]===void 0&&console.warn("Detected a broken combined preference:",p,"is undefined",o.preferences),h+=o.preferences.data[p]??""}r.setData(h)}return s.addCallback(u=>{i(Number(u))}),this.preferences.addCallbackAndRun(u=>{i(Number(s.data))}),r}GetPreference(e,n=void 0,r){const a=(r==null?void 0:r.prefix)??"mapcomplete-";if(e.startsWith(a)&&a!==""&&console.trace("A preference was requested which has a duplicate prefix in its key. This is probably a bug"),e=a+e,e=e.replace(/[:\\\/"' {}.%]/g,""),e.length>=255)throw"Preferences: key length to big";const c=this.preferenceSources.get(e);if(c!==void 0)return c;this.userDetails.data.loggedIn&&this.preferences.data[e]===void 0&&this.UpdatePreferences();const s=new UIEventSource(this.preferences.data[e]??n,"osm-preference:"+e);return s.addCallback(o=>{this.UploadPreference(e,o)}),this.preferences.addCallbackD(o=>{const i=o[e];i!==void 0&&s.setData(i)}),this.preferenceSources.set(e,s),s}ClearPreferences(){let e=!1;const n=this;this.preferences.addCallback(r=>{if(console.log("Cleaning preferences..."),Object.keys(r).length==0||e)return;e=!0;const a=["mapcomplete-"];for(const c in r)a.some(o=>c.startsWith(o))&&(console.log("Clearing ",c),n.GetPreference(c,"",{prefix:""}).setData(""));e=!1})}UpdatePreferences(e){const n=this;this.auth.xhr({method:"GET",path:"/api/0.6/user/preferences"},function(r,a){if(r){console.log("Could not load preferences",r);return}const c=a.getElementsByTagName("preference"),s=new Set;for(let o=0;o<c.length;o++){const i=c[o],u=i.getAttribute("k"),l=i.getAttribute("v");n.preferences.data[u]=l,s.add(u)}if(e)for(let o in n.preferences.data)s.has(o)||(console.log("Deleting key",o,"as we didn't find it upstream"),delete n.preferences.data[o]);n.preferenceSources.forEach((o,i)=>{const u=n.preferences.data[i];u===void 0&&o.data!==void 0?n.UploadPreference(i,o.data):o.setData(u)}),n.preferences.ping()})}UploadPreference(e,n){if(!this.userDetails.data.loggedIn){console.debug(`Not saving preference ${e}: user not logged in`);return}if(this.preferences.data[e]===n)return;const r=this;if(console.debug("Updating preference",e," to ",Utils.EllipsesAfter(n,15)),n===void 0||n===""){this.auth.xhr({method:"DELETE",path:"/api/0.6/user/preferences/"+encodeURIComponent(e),options:{header:{"Content-Type":"text/plain"}}},function(a){if(a){console.warn("Could not remove preference",a);return}delete r.preferences.data[e],r.preferences.ping(),console.debug("Preference ",e,"removed!")});return}this.auth.xhr({method:"PUT",path:"/api/0.6/user/preferences/"+encodeURIComponent(e),options:{header:{"Content-Type":"text/plain"}},content:n},function(a){if(a){console.warn(`Could not set preference "${e}"'`,a);return}r.preferences.data[e]=n,r.preferences.ping(),console.debug(`Preference ${e} written!`)})}removeAllWithPrefix(e){for(const n in this.preferences.data)n.startsWith(e)&&(this.GetPreference(n,"",{prefix:""}).setData(void 0),console.log("Clearing preference",n));this.preferences.ping()}}class UserDetails{constructor(e){d(this,"loggedIn",!1);d(this,"name","Not logged in");d(this,"uid");d(this,"csCount",0);d(this,"img");d(this,"unreadMessages",0);d(this,"totalMessages",0);d(this,"home");d(this,"backend");d(this,"account_created");d(this,"tracesCount",0);d(this,"description");d(this,"languages");this.backend=e}}class OsmConnection{constructor(e){d(this,"auth");d(this,"userDetails");d(this,"isLoggedIn");d(this,"gpxServiceIsOnline",new UIEventSource("unknown"));d(this,"apiIsOnline",new UIEventSource("unknown"));d(this,"loadingStatus",new UIEventSource("not-attempted"));d(this,"preferencesHandler");d(this,"_oauth_config");d(this,"_dryRun");d(this,"fakeUser");d(this,"_onLoggedIn",[]);d(this,"_iframeMode");d(this,"_singlePage");d(this,"isChecking",!1);d(this,"_userInfoCache",{});var r;if(e??(e={}),this.fakeUser=(e==null?void 0:e.fakeUser)??!1,this._singlePage=(e==null?void 0:e.singlePage)??!0,this._oauth_config=Constants.osmAuthConfig,console.debug("Using backend",this._oauth_config.url),this._iframeMode=Utils.runningFromConsole?!1:window!==window.top,{}.VITE_OSM_OAUTH_CLIENT_ID!==void 0&&{}.VITE_OSM_OAUTH_SECRET!==void 0&&(console.debug("Using environment variables for oauth config"),this._oauth_config.oauth_client_id={}.VITE_OSM_OAUTH_CLIENT_ID,this._oauth_config.oauth_secret={}.VITE_OSM_OAUTH_SECRET),this.userDetails=new UIEventSource(new UserDetails(this._oauth_config.url),"userDetails"),e.fakeUser){const a=this.userDetails.data;a.csCount=5678,a.uid=42,a.loggedIn=!0,a.unreadMessages=0,a.name="Fake user",a.totalMessages=42,a.languages=["en"]}const n=this;if(this.UpdateCapabilities(),this.isLoggedIn=this.userDetails.map(a=>a.loggedIn&&(n.apiIsOnline.data==="unknown"||n.apiIsOnline.data==="online"),[this.apiIsOnline]),this.isLoggedIn.addCallback(a=>{n.userDetails.data.loggedIn==!1&&a==!0&&n.AttemptLogin()}),this._dryRun=e.dryRun??new UIEventSource(!1),this.updateAuthObject(),this.preferencesHandler=new OsmPreferences(this.auth,this),((r=e.oauth_token)==null?void 0:r.data)!==void 0){console.log(e.oauth_token.data);const a=this;this.auth.bootstrapToken(e.oauth_token.data,(c,s)=>{console.log("Bootstrap token called back",c,s),a.AttemptLogin()}),e.oauth_token.setData(void 0)}this.auth.authenticated()&&e.attemptLogin!==!1?this.AttemptLogin():console.log("Not authenticated")}GetPreference(e,n=void 0,r){return this.preferencesHandler.GetPreference(e,n,r)}GetLongPreference(e,n="mapcomplete-"){return this.preferencesHandler.GetLongPreference(e,n)}OnLoggedIn(e){this._onLoggedIn.push(e)}LogOut(){this.auth.logout(),this.userDetails.data.loggedIn=!1,this.userDetails.data.csCount=0,this.userDetails.data.name="",this.userDetails.ping(),console.log("Logged out"),this.loadingStatus.setData("not-attempted"),this.preferencesHandler.preferences.setData(void 0)}Backend(){return this._oauth_config.url}AttemptLogin(){if(this.UpdateCapabilities(),this.loadingStatus.data!=="logged-in"&&this.loadingStatus.setData("loading"),this.fakeUser){this.loadingStatus.setData("logged-in"),console.log("AttemptLogin called, but ignored as fakeUser is set");return}const e=this;console.log("Trying to log in..."),this.updateAuthObject(),LocalStorageSource.Get("location_before_login").setData(Utils.runningFromConsole?void 0:window.location.href),this.auth.xhr({method:"GET",path:"/api/0.6/user/details"},function(n,r){var l;if(n!=null){console.log(n),e.loadingStatus.setData("error"),n.status==401&&(console.log("Clearing tokens..."),e.auth.logout(),e.LogOut());return}if(r==null){e.loadingStatus.setData("error");return}e.CheckForMessagesContinuously();let a=r.getElementsByTagName("user")[0],c=e.userDetails.data;c.loggedIn=!0,console.log("Login completed, userinfo is ",a),c.name=a.getAttribute("display_name"),c.account_created=a.getAttribute("account_created"),c.uid=Number(a.getAttribute("id")),c.languages=Array.from(a.getElementsByTagName("languages")[0].getElementsByTagName("lang")).map(h=>h.textContent),c.csCount=Number.parseInt(a.getElementsByTagName("changesets")[0].getAttribute("count")??"0"),c.tracesCount=Number.parseInt(a.getElementsByTagName("traces")[0].getAttribute("count")??"0"),c.img=void 0;const s=a.getElementsByTagName("img");s!==void 0&&s[0]!==void 0&&(c.img=s[0].getAttribute("href"));const o=a.getElementsByTagName("description");o!==void 0&&o[0]!==void 0&&(c.description=(l=o[0])==null?void 0:l.innerHTML);const i=a.getElementsByTagName("home");if(i!==void 0&&i[0]!==void 0){const h=parseFloat(i[0].getAttribute("lat")),g=parseFloat(i[0].getAttribute("lon"));c.home={lat:h,lon:g}}e.loadingStatus.setData("logged-in");const u=a.getElementsByTagName("messages")[0].getElementsByTagName("received")[0];c.unreadMessages=parseInt(u.getAttribute("unread")),c.totalMessages=parseInt(u.getAttribute("count")),e.userDetails.ping();for(const h of e._onLoggedIn)h(e.userDetails.data);e._onLoggedIn=[]})}async interact(e,n,r,a,c=!1){let s=this.auth;if(c&&!this.auth.authenticated()){const o=await Utils.downloadAdvanced(`${this.Backend()}/api/0.6/${e}`,r,n,a);if(o.content)return o.content;throw console.error(o),"Could not interact with OSM:"+o.error}return new Promise((o,i)=>{s.xhr({method:n,options:{header:r},content:a,path:`/api/0.6/${e}`},function(u,l){u!==null?i(u):o(l)})})}async post(e,n,r,a=!1){return await this.interact(e,"POST",r,n,a)}async put(e,n,r){return await this.interact(e,"PUT",r,n)}async get(e,n,r=!1){return await this.interact(e,"GET",n,void 0,r)}closeNote(e,n){let r="";return(n??"")!==""&&(r="?text="+encodeURIComponent(n)),this._dryRun.data?(console.warn("Dryrun enabled - not actually closing note ",e," with text ",n),new Promise(a=>{a()})):this.post(`notes/${e}/close${r}`)}reopenNote(e,n){if(this._dryRun.data)return console.warn("Dryrun enabled - not actually reopening note ",e," with text ",n),new Promise(a=>{a()});let r="";return(n??"")!==""&&(r="?text="+encodeURIComponent(n)),this.post(`notes/${e}/reopen${r}`)}async openNote(e,n,r){if(this._dryRun.data)return console.warn("Dryrun enabled - not actually opening note with text ",r),new Promise(i=>{window.setTimeout(()=>i({id:Math.floor(Math.random()*1e3)}),Math.random()*5e3)});const a=`lat=${e}&lon=${n}&text=${encodeURIComponent(r)}`,c=await this.post("notes.json",a,{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},!0),s=JSON.parse(c);console.log("Got result:",s);const o=s.properties;return console.log("OPENED NOTE",o),o}async uploadGpxTrack(e,n){var u;if(this._dryRun.data)return console.warn("Dryrun enabled - not actually uploading GPX ",e),new Promise(l=>{window.setTimeout(()=>l({id:Math.floor(Math.random()*1e3)}),Math.random()*5e3)});const r={file:e,description:n.description,tags:((u=n.labels)==null?void 0:u.join(","))??"",visibility:n.visibility};if(!r.description)throw"The description of a GPS-trace cannot be the empty string, undefined or null";const a={file:'; filename="'+(n.filename??"gpx_track_mapcomplete_"+new Date().toISOString())+`"\r
Content-Type: application/gpx+xml`},c="987654";let s="";for(const l in r)s+="--"+c+`\r
`,s+='Content-Disposition: form-data; name="'+l+'"',a[l]!==void 0&&(s+=a[l]),s+=`\r
\r
`,s+=r[l]+`\r
`;s+="--"+c+`--\r
`;const o=await this.post("gpx/create",s,{"Content-Type":"multipart/form-data; boundary="+c,"Content-Length":s.length}),i=JSON.parse(o);return console.log("Uploaded GPX track",i),{id:i}}addCommentToNote(e,n){if(this._dryRun.data)return console.warn("Dryrun enabled - not actually adding comment ",n,"to  note ",e),new Promise(r=>{r()});if((n??"")==="")throw"Invalid text!";return new Promise((r,a)=>{this.auth.xhr({method:"POST",path:`/api/0.6/notes/${e}/comment?text=${encodeURIComponent(n)}`},function(c,s){c!==null?a(c):r()})})}finishLogin(e){this.auth.authenticate(function(){console.log("Authentication successful!");const n=LocalStorageSource.Get("location_before_login");e(n.data)})}updateAuthObject(){let e=!1;try{(Utils.runningFromConsole||window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: fullscreen)").matches)&&(e=!0)}catch(r){console.warn("Detecting standalone mode failed",r,". Assuming in browser and not worrying furhter")}const n=this._iframeMode||e||!this._singlePage;this.auth=new osmAuth({client_id:this._oauth_config.oauth_client_id,url:this._oauth_config.url,scope:"read_prefs write_prefs write_api write_gpx write_notes openid",redirect_uri:Utils.runningFromConsole?"https://mapcomplete.org/land.html":window.location.protocol+"//"+window.location.host+"/land.html",singlepage:!n,auto:!0})}CheckForMessagesContinuously(){const e=this;this.isChecking||(this.isChecking=!0,Stores.Chronic(5*60*1e3).addCallback(n=>{e.isLoggedIn.data&&e.AttemptLogin()}))}UpdateCapabilities(){const e=this;this.fakeUser||this.FetchCapabilities().then(({api:n,gpx:r})=>{e.apiIsOnline.setData(n),e.gpxServiceIsOnline.setData(r)})}async getInformationAboutUser(e){if(e===void 0)return;if(this._userInfoCache[e])return this._userInfoCache[e];const n=await this.get("user/"+e+".json",{accepts:"application/json"},!0),r=JSON.parse(n).user;return this._userInfoCache[e]=r,r}async FetchCapabilities(){if(Utils.runningFromConsole)return{api:"online",gpx:"online"};const e=await Utils.downloadAdvanced(this.Backend()+"/api/0.6/capabilities");if(e.content===void 0)return console.log("Something went wrong:",e),{api:"unreachable",gpx:"unreachable"};const n=e.content,a=new DOMParser().parseFromString(n,"text/xml").getElementsByTagName("status")[0],c=a.getAttribute("api"),s=a.getAttribute("gpx");return{api:c,gpx:s}}}d(OsmConnection,"GpxTrackVisibility",["private","public","trackable","identifiable"]);export{OsmConnection as O};
//# sourceMappingURL=OsmConnection-b3b3e8a9.js.map