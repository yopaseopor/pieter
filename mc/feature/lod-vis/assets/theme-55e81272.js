var F=Object.defineProperty;var I=(g,n,c)=>n in g?F(g,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):g[n]=c;var C=(g,n,c)=>(I(g,typeof n!="symbol"?n+"":n,c),c);import{U as A}from"./Utils-498bb79d.js";import{T as G,a as H,D as J}from"./ThemeViewGUI-9e36b26f.js";import{L as N,S as W}from"./Checkbox-6bf4d1d8.js";import{Q as D,H as Z,F as O,C as Q}from"./Tr-76fd307f.js";import{E as P,a0 as B}from"./TagRenderingAnswer-98234f50.js";import{L as z}from"./LocalStorageSource-78a030c5.js";import{g as q}from"./Constants-203b4dea.js";import{ac as K,ad as X,ae as Y,ab as _,l as $,a8 as j,al as V}from"./SubtleLink-5226aa3d.js";import{q as ee,a as te,c as ne,d as oe,D as ie}from"./questions-806d8c44.js";import{k as E}from"./tw-merge-8b89dba1.js";import"./OsmConnection-6ebaacab.js";import"./store.legacy-58e2a55f.js";import"./FeatureSwitchState-d0302020.js";import"./placeholder-5d2c6ced.js";import"./Loading-149f5a74.js";import"./preload-helper-487dfecc.js";import"./LanguagePicker-f52c4a90.js";import"./Dropdown-36835c5a.js";import"./SelectedElementView-2fc35bf3.js";import"./Eye-93582f22.js";import"./Img-422280ad.js";import"./Add-c0117c05.js";import"./Community-f6cf1553.js";import"./Filterview-2d859b10.js";import"./PrivacyPolicy-c6319196.js";import"./BackButton-7c5818f9.js";import"./Login-54314833.js";var M={exports:{}};M.exports;(function(g){var n=function(){var c=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",l={};function i(t,r){if(!l[t]){l[t]={};for(var f=0;f<t.length;f++)l[t][t.charAt(f)]=f}return l[t][r]}var m={compressToBase64:function(t){if(t==null)return"";var r=m._compress(t,6,function(f){return e.charAt(f)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:m._decompress(t.length,32,function(r){return i(e,t.charAt(r))})},compressToUTF16:function(t){return t==null?"":m._compress(t,15,function(r){return c(r+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:m._decompress(t.length,16384,function(r){return t.charCodeAt(r)-32})},compressToUint8Array:function(t){for(var r=m.compress(t),f=new Uint8Array(r.length*2),a=0,s=r.length;a<s;a++){var v=r.charCodeAt(a);f[a*2]=v>>>8,f[a*2+1]=v%256}return f},decompressFromUint8Array:function(t){if(t==null)return m.decompress(t);for(var r=new Array(t.length/2),f=0,a=r.length;f<a;f++)r[f]=t[f*2]*256+t[f*2+1];var s=[];return r.forEach(function(v){s.push(c(v))}),m.decompress(s.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":m._compress(t,6,function(r){return T.charAt(r)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),m._decompress(t.length,32,function(r){return i(T,t.charAt(r))}))},compress:function(t){return m._compress(t,16,function(r){return c(r)})},_compress:function(t,r,f){if(t==null)return"";var a,s,v={},b={},L="",x="",y="",R=2,w=3,h=2,u=[],o=0,p=0,d;for(d=0;d<t.length;d+=1)if(L=t.charAt(d),Object.prototype.hasOwnProperty.call(v,L)||(v[L]=w++,b[L]=!0),x=y+L,Object.prototype.hasOwnProperty.call(v,x))y=x;else{if(Object.prototype.hasOwnProperty.call(b,y)){if(y.charCodeAt(0)<256){for(a=0;a<h;a++)o=o<<1,p==r-1?(p=0,u.push(f(o)),o=0):p++;for(s=y.charCodeAt(0),a=0;a<8;a++)o=o<<1|s&1,p==r-1?(p=0,u.push(f(o)),o=0):p++,s=s>>1}else{for(s=1,a=0;a<h;a++)o=o<<1|s,p==r-1?(p=0,u.push(f(o)),o=0):p++,s=0;for(s=y.charCodeAt(0),a=0;a<16;a++)o=o<<1|s&1,p==r-1?(p=0,u.push(f(o)),o=0):p++,s=s>>1}R--,R==0&&(R=Math.pow(2,h),h++),delete b[y]}else for(s=v[y],a=0;a<h;a++)o=o<<1|s&1,p==r-1?(p=0,u.push(f(o)),o=0):p++,s=s>>1;R--,R==0&&(R=Math.pow(2,h),h++),v[x]=w++,y=String(L)}if(y!==""){if(Object.prototype.hasOwnProperty.call(b,y)){if(y.charCodeAt(0)<256){for(a=0;a<h;a++)o=o<<1,p==r-1?(p=0,u.push(f(o)),o=0):p++;for(s=y.charCodeAt(0),a=0;a<8;a++)o=o<<1|s&1,p==r-1?(p=0,u.push(f(o)),o=0):p++,s=s>>1}else{for(s=1,a=0;a<h;a++)o=o<<1|s,p==r-1?(p=0,u.push(f(o)),o=0):p++,s=0;for(s=y.charCodeAt(0),a=0;a<16;a++)o=o<<1|s&1,p==r-1?(p=0,u.push(f(o)),o=0):p++,s=s>>1}R--,R==0&&(R=Math.pow(2,h),h++),delete b[y]}else for(s=v[y],a=0;a<h;a++)o=o<<1|s&1,p==r-1?(p=0,u.push(f(o)),o=0):p++,s=s>>1;R--,R==0&&(R=Math.pow(2,h),h++)}for(s=2,a=0;a<h;a++)o=o<<1|s&1,p==r-1?(p=0,u.push(f(o)),o=0):p++,s=s>>1;for(;;)if(o=o<<1,p==r-1){u.push(f(o));break}else p++;return u.join("")},decompress:function(t){return t==null?"":t==""?null:m._decompress(t.length,32768,function(r){return t.charCodeAt(r)})},_decompress:function(t,r,f){var a=[],s=4,v=4,b=3,L="",x=[],y,R,w,h,u,o,p,d={val:f(0),position:r,index:1};for(y=0;y<3;y+=1)a[y]=y;for(w=0,u=Math.pow(2,2),o=1;o!=u;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=f(d.index++)),w|=(h>0?1:0)*o,o<<=1;switch(w){case 0:for(w=0,u=Math.pow(2,8),o=1;o!=u;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=f(d.index++)),w|=(h>0?1:0)*o,o<<=1;p=c(w);break;case 1:for(w=0,u=Math.pow(2,16),o=1;o!=u;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=f(d.index++)),w|=(h>0?1:0)*o,o<<=1;p=c(w);break;case 2:return""}for(a[3]=p,R=p,x.push(p);;){if(d.index>t)return"";for(w=0,u=Math.pow(2,b),o=1;o!=u;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=f(d.index++)),w|=(h>0?1:0)*o,o<<=1;switch(p=w){case 0:for(w=0,u=Math.pow(2,8),o=1;o!=u;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=f(d.index++)),w|=(h>0?1:0)*o,o<<=1;a[v++]=c(w),p=v-1,s--;break;case 1:for(w=0,u=Math.pow(2,16),o=1;o!=u;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=f(d.index++)),w|=(h>0?1:0)*o,o<<=1;a[v++]=c(w),p=v-1,s--;break;case 2:return x.join("")}if(s==0&&(s=Math.pow(2,b),b++),a[p])L=a[p];else if(p===v)L=R+R.charAt(0);else return null;x.push(L),a[v++]=R+L.charAt(0),s--,R=L,s==0&&(s=Math.pow(2,b),b++)}}};return m}();g!=null&&(g.exports=n)})(M);var re=M.exports;const k=q(re);class ae extends _{constructor(){super("Updates various attributes from the old data format to the new to provide backwards compatibility with the formats",["overpassTags","source.osmtags","tagRenderings[*].id","mapRendering"],"UpdateLegacyLayer")}convert(n,c){var T;if(typeof n=="string"||n.builtin!==void 0)return n;c=c.enter(n.id);let e={...n};e.overpassTags&&(e.source=e.source??{osmTags:e.overpassTags},e.source.osmTags=e.overpassTags,delete e.overpassTags);for(const l of e.presets??[]){const i=l.preciseInput;typeof i=="boolean"?delete l.preciseInput:i!==void 0&&(delete i.preferredBackground,l.snapToLayer=i.snapToLayer,delete i.snapToLayer,i.maxSnapDistance&&(l.maxSnapDistance=i.maxSnapDistance,delete i.maxSnapDistance),Object.keys(i).length==0&&delete l.preciseInput),typeof l.snapToLayer=="string"&&(l.snapToLayer=[l.snapToLayer])}if(e.tagRenderings!==void 0){let l=0;for(const i of e.tagRenderings)i&&(l++,!(typeof i=="string"||i.builtin!==void 0||i.rewrite!==void 0)&&i.id===void 0&&(i["#"]!==void 0?(i.id=i["#"],delete i["#"]):((T=i.freeform)==null?void 0:T.key)!==void 0?i.id=e.id+"-"+i.freeform.key:i.id="tr-"+l))}if(e.mapRendering===void 0&&e.pointRendering===void 0&&e.lineRendering===void 0){e.mapRendering=[];let l=["point"],i=e.wayHandling??0;if(i!==0&&(l=["point","centroid"]),e.icon??e.label!==void 0){const m={icon:e.icon,iconBadges:e.iconOverlays,label:e.label,iconSize:e.iconSize,location:l,rotation:e.rotation};e.mapRendering.push(m)}if(i!==1){const m={color:e.color,width:e.width,dashArray:e.dashArray};Object.keys(m).length>0&&e.mapRendering.push(m)}if(e.mapRendering.length===0)throw"Could not convert the legacy theme into a new theme: no renderings defined for layer "+e.id}delete e.color,delete e.width,delete e.dashArray,delete e.icon,delete e.iconOverlays,delete e.label,delete e.iconSize,delete e.rotation,delete e.wayHandling,delete e.hideUnderlayingFeaturesMinPercentage;for(const l of e.mapRendering??[]){l.iconOverlays!==void 0&&(l.iconBadges=l.iconOverlays);for(const i of l.iconBadges??[])i.badge!==!0&&c.enters("iconBadges","badge").warn("Non-overlay element"),delete i.badge}if(e.mapRendering){const l=[],i=[];for(const m of e.mapRendering)m.location?l.push(m):i.push(m);e.pointRendering=l,e.lineRendering=i,delete e.mapRendering}for(const l of e.pointRendering??[]){const i=l;if(i.icon)try{let t=i.icon;Object.keys(t).length===1&&t.render!==void 0&&(t=t.render);const r=A.NoEmpty(t.split(";"));i.marker=r.map(f=>{if(f.startsWith("http"))return{icon:f};const[a,s]=f.split(":");return{icon:a,color:s}}),delete i.icon}catch{console.error("Could not handle icon in",n.id),i.marker=[{icon:i.icon}],delete i.icon}let m=i.iconSize;if(m&&(Object.keys(i.iconSize).length===1&&i.iconSize.render!==void 0&&(m=i.iconSize.render),typeof m=="string"&&["bottom","center","top"].some(t=>m.endsWith(t)))){const t=m.split(",").map(r=>r.toLowerCase().trim());i.anchor=t.pop(),i.iconSize=t.join(",")}}if(e.pointRendering)for(const l of e.pointRendering)for(const i in l)l[i]&&typeof l[i].render=="string"&&Object.keys(l[i]).length===1&&(l[i]=l[i].render);if(e.lineRendering)for(const l of e.lineRendering)for(const i in l)l[i]&&typeof l[i].render=="string"&&Object.keys(l[i]).length===1&&(l[i]=l[i].render);return e}}class se extends _{constructor(){super("Small fixes in the theme config",["roamingRenderings"],"UpdateLegacyTheme")}convert(n,c){const e={...n};if(e.socialImage===""&&delete e.socialImage,typeof e.credits=="string"&&(e.credits=[e.credits]),e.roamingRenderings!==void 0)if(e.roamingRenderings.length==0)delete e.roamingRenderings;else return c.err("The theme contains roamingRenderings. These are not supported anymore"),null;return e.layers=A.NoNull(e.layers),delete e.language,delete e.version,e.startLat===0&&delete e.startLat,e.startLon===0&&delete e.startLon,e.startZoom<=2&&delete e.startZoom,e.maintainer!==void 0&&(e.credits===void 0?(e.credits=e.maintainer,delete e.maintainer):(e.maintainer.toLowerCase().trim()==="mapcomplete"||e.maintainer.toLowerCase().trim()==="")&&delete e.maintainer),e}}class ce extends K{constructor(){super("Fixes a legacy theme to the modern JSON format geared to humans. Syntactic sugars are kept (i.e. no tagRenderings are expandend, no dependencies are automatically gathered)",new se,new X("layers",new Y(new ae)))}}const S=class S{static getCustomDefinition(){const n=decodeURIComponent(S.loadCustomThemeParam.data);if(n.startsWith("http"))return n;if(n!=="false"){const c=Z.hash.data;try{return JSON.parse(atob(c)),atob(c)}catch{return JSON.parse(A.UnMinify(k.decompressFromBase64(c))),A.UnMinify(k.decompressFromBase64(c))}}}static async GetLayout(){const n=decodeURIComponent(S.loadCustomThemeParam.data);if(n.startsWith("http"))return await S.LoadRemoteTheme(n);if(n!=="false")return S.LoadLayoutFromHash(S.loadCustomThemeParam);let c;const e=window.location.pathname.split("/").slice(-1)[0];e!=="theme.html"&&e!==""&&(c=e,e.endsWith(".html")&&(c=e.substr(0,e.length-5)),console.log("Using layout",c)),c=D.GetQueryParameter("layout",c,"The layout to load into MapComplete").data;const T=P.allKnownLayouts.get(c==null?void 0:c.toLowerCase());if(T===void 0)throw"No builtin map theme with name "+c+" exists";return T}static LoadLayoutFromHash(n){var m,t;let c=location.hash.substr(1),e;const T=z.Get("user-layout-"+((m=n.data)==null?void 0:m.replace(" ","_")));((t=T.data)==null?void 0:t.length)<10&&T.setData(void 0);const l=z.Get("last-loaded-user-layout");c.length<10?c=T.data??l.data:(console.log("Saving hash to local storage"),l.setData(c),T.setData(c));try{e=JSON.parse(atob(c))}catch{e=JSON.parse(A.UnMinify(k.decompressFromBase64(c)))}const i=S.prepCustomTheme(e);return n.setData(i.id),i}static getSharedTagRenderings(){const n=new Map;for(const c of ee.tagRenderings)n.set(c.id,c);return n}static prepCustomTheme(n,c,e){if(n.layers===void 0&&n.tagRenderings!==void 0){const t=n.pointRendering.map(f=>{var a,s;return(s=(a=f==null?void 0:f.marker)==null?void 0:a.find(v=>v.icon!==void 0))==null?void 0:s.icon}).find(f=>f!==void 0)??"bug",r=new j(t).render.txt;n={id:n.id,description:n.description,descriptionTail:{en:"<div class='alert'>Layer only mode.</div> The loaded custom theme actually isn't a custom theme, but only contains a layer."},icon:r,title:n.name,layers:[n]}}const T=new Map;for(const m in B.layers){const t=B.layers[m];T.set(t.id,t)}const l={tagRenderings:S.getSharedTagRenderings(),sharedLayers:T,publicLayers:new Set};n=new ce().convertStrict(n);const i=n;return n=new V(S._knownImages).convertStrict(n),n.enableNoteImports=n.enableNoteImports??!1,n=new te(l).convertStrict(n),console.log("The layoutconfig is ",n),n.id=e??n.id,new ne().convertStrict(n),new oe(new ie(new Set,m=>!0),"",!1).convertStrict(n),new N(n,!1,{definitionRaw:JSON.stringify(i,null,"  "),definedAtUrl:c})}static async LoadRemoteTheme(n){console.log("Downloading map theme from ",n),new O(`Downloading the theme from the <a href="${n}">link</a>...`).AttachTo("maindiv");let c=await A.downloadJson(n),e=c.id;const T=new URL(n);return T.hostname==="localhost"||T.hostname==="127.0.0.1"||(e=n),console.log("Loaded remote link:",n),S.prepCustomTheme(c,n,e)}};C(S,"_knownImages",new Set(Array.from($).map(n=>n.path))),C(S,"loadCustomThemeParam",D.GetQueryParameter("userlayout","false",`If not 'false', a custom (non-official) theme is loaded. This custom layout can be done in multiple ways: 

- The hash of the URL contains a base64-encoded .json-file containing the theme definition
- The hash of the URL contains a lz-compressed .json-file, as generated by the custom theme generator
- The parameter itself is an URL, in which case that URL will be downloaded. It should point to a .json of a theme`));let U=S;function le(){try{const g=document.createElement("canvas");return!!window.WebGLRenderingContext&&(g.getContext("webgl")||g.getContext("experimental-webgl"))}catch{return!1}}try{if(!le())throw"WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.";U.GetLayout().then(g=>{const n=new G(g);new E(H,{state:n}).AttachTo("maindiv")}).catch(g=>{console.error("Error while initializing: ",g,g.stack);const n=U.getCustomDefinition();new Q([new O(g).SetClass("block alert"),(n==null?void 0:n.length)>0?new W(new E(J),"Download the raw file").onClick(()=>A.offerContentsAsDownloadableFile(U.getCustomDefinition(),"mapcomplete-theme.json",{mimetype:"application/json"})):void 0]).AttachTo("maindiv")})}catch(g){new O(g).SetClass("block alert").AttachTo("maindiv")}
//# sourceMappingURL=theme-55e81272.js.map
