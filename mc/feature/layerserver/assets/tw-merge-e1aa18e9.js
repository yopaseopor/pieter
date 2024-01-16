var sr=Object.defineProperty;var lr=(r,e,t)=>e in r?sr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var j=(r,e,t)=>(lr(r,typeof e!="symbol"?e+"":e,t),t);import{U as cr}from"./Utils-498bb79d.js";import{B as dr}from"./index-3f10102a.js";class er extends dr{constructor(t,o=!1,i){super();j(this,"_src");j(this,"_rawSvg");j(this,"_options");if(t===void 0||t==="undefined")throw"Undefined src for image";this._src=t,this._rawSvg=o,this._options=i}static AsData(t){if(cr.runningFromConsole)return t;try{return`data:image/svg+xml;base64,${btoa(t)}`}catch(o){return console.error("Cannot create an image for",t.slice(0,100)),console.trace("Cannot create an image for the given source string due to ",o),""}}static AsImageElement(t,o="",i=""){return`<img class="${o}" style="${i}" alt="" src="${er.AsData(t)}">`}AsMarkdown(){if(this._rawSvg===!0){console.warn("Converting raw svgs to markdown is not supported");return}let t=this._src;return this._src.startsWith("./")&&(t="https://mapcomplete.org/"+t),"![]("+t+")"}InnerConstructElement(){const t=this;if(this._rawSvg){const i=document.createElement("div");return i.innerHTML=this._src,i}const o=document.createElement("img");return o.src=this._src,o.onload=()=>{o.style.opacity="1"},o.onerror=()=>{var i;if((i=t._options)!=null&&i.fallbackImage){if(o.src===t._options.fallbackImage)return;o.src=t._options.fallbackImage}},o}}function ur(){for(var r=0,e,t,o="";r<arguments.length;)(e=arguments[r++])&&(t=tr(e))&&(o&&(o+=" "),o+=t);return o}function tr(r){if(typeof r=="string")return r;for(var e,t="",o=0;o<r.length;o++)r[o]&&(e=tr(r[o]))&&(t&&(t+=" "),t+=e);return t}var B="-";function pr(r){var e=gr(r),t=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,i=o===void 0?{}:o;function s(a){var l=a.split(B);return l[0]===""&&l.length!==1&&l.shift(),or(l,e)||fr(a)}function n(a,l){var d=t[a]||[];return l&&i[a]?[].concat(d,i[a]):d}return{getClassGroupId:s,getConflictingClassGroupIds:n}}function or(r,e){var n;if(r.length===0)return e.classGroupId;var t=r[0],o=e.nextPart.get(t),i=o?or(r.slice(1),o):void 0;if(i)return i;if(e.validators.length!==0){var s=r.join(B);return(n=e.validators.find(function(a){var l=a.validator;return l(s)}))==null?void 0:n.classGroupId}}var Y=/^\[(.+)\]$/;function fr(r){if(Y.test(r)){var e=Y.exec(r)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function gr(r){var e=r.theme,t=r.prefix,o={nextPart:new Map,validators:[]},i=mr(Object.entries(r.classGroups),t);return i.forEach(function(s){var n=s[0],a=s[1];U(a,o,n,e)}),o}function U(r,e,t,o){r.forEach(function(i){if(typeof i=="string"){var s=i===""?e:D(e,i);s.classGroupId=t;return}if(typeof i=="function"){if(br(i)){U(i(o),e,t,o);return}e.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(function(n){var a=n[0],l=n[1];U(l,D(e,a),t,o)})})}function D(r,e){var t=r;return e.split(B).forEach(function(o){t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function br(r){return r.isThemeGetter}function mr(r,e){return e?r.map(function(t){var o=t[0],i=t[1],s=i.map(function(n){return typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(a){var l=a[0],d=a[1];return[e+l,d]})):n});return[o,s]}):r}function vr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,t=new Map,o=new Map;function i(s,n){t.set(s,n),e++,e>r&&(e=0,o=t,t=new Map)}return{get:function(n){var a=t.get(n);if(a!==void 0)return a;if((a=o.get(n))!==void 0)return i(n,a),a},set:function(n,a){t.has(n)?t.set(n,a):i(n,a)}}}var nr="!";function hr(r){var e=r.separator||":",t=e.length===1,o=e[0],i=e.length;return function(n){for(var a=[],l=0,d=0,f,u=0;u<n.length;u++){var g=n[u];if(l===0){if(g===o&&(t||n.slice(u,u+i)===e)){a.push(n.slice(d,u)),d=u+i;continue}if(g==="/"){f=u;continue}}g==="["?l++:g==="]"&&l--}var m=a.length===0?n:n.substring(d),h=m.startsWith(nr),b=h?m.substring(1):m,y=f&&f>d?f-d:void 0;return{modifiers:a,hasImportantModifier:h,baseClassName:b,maybePostfixModifierPosition:y}}}function yr(r){if(r.length<=1)return r;var e=[],t=[];return r.forEach(function(o){var i=o[0]==="[";i?(e.push.apply(e,t.sort().concat([o])),t=[]):t.push(o)}),e.push.apply(e,t.sort()),e}function wr(r){return{cache:vr(r.cacheSize),splitModifiers:hr(r),...pr(r)}}var xr=/\s+/;function Cr(r,e){var t=e.splitModifiers,o=e.getClassGroupId,i=e.getConflictingClassGroupIds,s=new Set;return r.trim().split(xr).map(function(n){var a=t(n),l=a.modifiers,d=a.hasImportantModifier,f=a.baseClassName,u=a.maybePostfixModifierPosition,g=o(u?f.substring(0,u):f),m=!!u;if(!g){if(!u)return{isTailwindClass:!1,originalClassName:n};if(g=o(f),!g)return{isTailwindClass:!1,originalClassName:n};m=!1}var h=yr(l).join(":"),b=d?h+nr:h;return{isTailwindClass:!0,modifierId:b,classGroupId:g,originalClassName:n,hasPostfixModifier:m}}).reverse().filter(function(n){if(!n.isTailwindClass)return!0;var a=n.modifierId,l=n.classGroupId,d=n.hasPostfixModifier,f=a+l;return s.has(f)?!1:(s.add(f),i(l,d).forEach(function(u){return s.add(a+u)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function kr(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o,i,s,n=a;function a(d){var f=e[0],u=e.slice(1),g=u.reduce(function(m,h){return h(m)},f());return o=wr(g),i=o.cache.get,s=o.cache.set,n=l,l(d)}function l(d){var f=i(d);if(f)return f;var u=Cr(d,o);return s(d,u),u}return function(){return n(ur.apply(null,arguments))}}function c(r){var e=function(o){return o[r]||[]};return e.isThemeGetter=!0,e}var ir=/^\[(?:([a-z-]+):)?(.+)\]$/i,Mr=/^\d+\/\d+$/,Ir=new Set(["px","full","screen"]),zr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ar=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,Sr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function w(r){return I(r)||Ir.has(r)||Mr.test(r)||M(r)}function M(r){return z(r,"length",jr)}function Gr(r){return z(r,"size",ar)}function Er(r){return z(r,"position",ar)}function Pr(r){return z(r,"url",Wr)}function W(r){return z(r,"number",I)}function I(r){return!Number.isNaN(Number(r))}function Rr(r){return r.endsWith("%")&&I(r.slice(0,-1))}function G(r){return rr(r)||z(r,"number",rr)}function p(r){return ir.test(r)}function E(){return!0}function k(r){return zr.test(r)}function Tr(r){return z(r,"",_r)}function z(r,e,t){var o=ir.exec(r);return o?o[1]?o[1]===e:t(o[2]):!1}function jr(r){return Ar.test(r)}function ar(){return!1}function Wr(r){return r.startsWith("url(")}function rr(r){return Number.isInteger(Number(r))}function _r(r){return Sr.test(r)}function Lr(){var r=c("colors"),e=c("spacing"),t=c("blur"),o=c("brightness"),i=c("borderColor"),s=c("borderRadius"),n=c("borderSpacing"),a=c("borderWidth"),l=c("contrast"),d=c("grayscale"),f=c("hueRotate"),u=c("invert"),g=c("gap"),m=c("gradientColorStops"),h=c("gradientColorStopPositions"),b=c("inset"),y=c("margin"),C=c("opacity"),x=c("padding"),V=c("saturate"),_=c("scale"),F=c("sepia"),q=c("skew"),Z=c("space"),H=c("translate"),L=function(){return["auto","contain","none"]},N=function(){return["auto","hidden","clip","visible","scroll"]},$=function(){return["auto",e]},J=function(){return["",w]},P=function(){return["auto",I,p]},X=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},R=function(){return["solid","dashed","dotted","double","none"]},K=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},O=function(){return["start","end","center","between","around","evenly","stretch"]},A=function(){return["","0",p]},Q=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},S=function(){return[I,W]},T=function(){return[I,p]};return{cacheSize:500,theme:{colors:[E],spacing:[w],blur:["none","",k,M],brightness:S(),borderColor:[r],borderRadius:["none","","full",k,M],borderSpacing:[e],borderWidth:J(),contrast:S(),grayscale:A(),hueRotate:T(),invert:A(),gap:[e],gradientColorStops:[r],gradientColorStopPositions:[Rr,M],inset:$(),margin:$(),opacity:S(),padding:[e],saturate:S(),scale:S(),sepia:A(),skew:T(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",p]}],container:["container"],columns:[{columns:[k]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(X(),[p])}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",G]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",p]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",G]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:[G]},p]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[G]},p]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",p]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",p]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal"].concat(O())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(O(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(O(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[Z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",w]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[k]},k,M]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",w]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",k,M]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",W]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",M]}],"line-clamp":[{"line-clamp":["none",I,W]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",w]}],"list-image":[{"list-image":["none",p]}],"list-style-type":[{list:["none","disc","decimal",p]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(R(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",w]}],"underline-offset":[{"underline-offset":["auto",w]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",M]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",p]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(X(),[Er])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Gr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Pr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[h]}],"gradient-via-pos":[{via:[h]}],"gradient-to-pos":[{to:[h]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[].concat(R(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:R()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(R())}],"outline-offset":[{"outline-offset":[w]}],"outline-w":[{outline:[w]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[w]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",k,Tr]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":K()}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",k,p]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[u]}],saturate:[{saturate:[V]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[V]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",p]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",p]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",p]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[_]}],"scale-x":[{"scale-x":[_]}],"scale-y":[{"scale-y":[_]}],rotate:[{rotate:[G,p]}],"translate-x":[{"translate-x":[H]}],"translate-y":[{"translate-y":[H]}],"skew-x":[{"skew-x":[q]}],"skew-y":[{"skew-y":[q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",p]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",p]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-ms":[{"scroll-ms":[e]}],"scroll-me":[{"scroll-me":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-ps":[{"scroll-ps":[e]}],"scroll-pe":[{"scroll-pe":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",p]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[w,W]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var Ur=kr(Lr);export{er as I,ur as a,Ur as t};
//# sourceMappingURL=tw-merge-e1aa18e9.js.map
