import{S as O,i as M,s as N,l as T,d as b,t as _,o as q,g as m,p as F,h as p,q as W,e as w,c as k,b as u,m as d,j as h,n as y,r as E,a as z,f as A,u as B}from"./index-3f10102a.js";import{L,a as C,b as g}from"./Translation-5455689e.js";import{U as D}from"./Utils-498bb79d.js";function S(s){let t,e,l,n;const r=[I,G],i=[];function f(o,a){return o[1]?0:o[3]?1:-1}return~(t=f(s))&&(e=i[t]=r[t](s)),{c(){e&&e.c(),l=T()},m(o,a){~t&&i[t].m(o,a),b(o,l,a),n=!0},p(o,a){let c=t;t=f(o),t===c?~t&&i[t].p(o,a):(e&&(q(),m(i[c],1,1,()=>{i[c]=null}),F()),~t?(e=i[t],e?e.p(o,a):(e=i[t]=r[t](o),e.c()),_(e,1),e.m(l.parentNode,l)):e=null)},i(o){n||(_(e),n=!0)},o(o){m(e),n=!1},d(o){~t&&i[t].d(o),o&&p(l)}}}function G(s){let t,e,l,n;return e=new C({props:{class:"font-gray inline-block"}}),{c(){t=w("a"),k(e.$$.fragment),u(t,"href",l=g.hrefToWeblate(s[2],s[0])),u(t,"class","weblate-link hidden-on-mobile mx-1"),u(t,"target","_blank"),u(t,"tabindex","-1")},m(r,i){b(r,t,i),d(e,t,null),n=!0},p(r,i){(!n||i&5&&l!==(l=g.hrefToWeblate(r[2],r[0])))&&u(t,"href",l)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){m(e.$$.fragment,r),n=!1},d(r){r&&p(t),h(e)}}}function I(s){let t,e,l,n;return e=new C({props:{class:"font-gray"}}),{c(){t=w("a"),k(e.$$.fragment),u(t,"href",l=g.hrefToWeblate(s[2],s[0])),u(t,"target","_blank"),u(t,"class","weblate-link mx-1"),u(t,"tabindex","-1")},m(r,i){b(r,t,i),d(e,t,null),n=!0},p(r,i){(!n||i&5&&l!==(l=g.hrefToWeblate(r[2],r[0])))&&u(t,"href",l)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){m(e.$$.fragment,r),n=!1},d(r){r&&p(t),h(e)}}}function J(s){let t=!!s[0]&&s[0].indexOf(":")>0,e,l,n=t&&S(s);return{c(){n&&n.c(),e=T()},m(r,i){n&&n.m(r,i),b(r,e,i),l=!0},p(r,[i]){i&1&&(t=!!r[0]&&r[0].indexOf(":")>0),t?n?(n.p(r,i),i&1&&_(n,1)):(n=S(r),n.c(),_(n,1),n.m(e.parentNode,e)):n&&(q(),m(n,1,1,()=>{n=null}),F())},i(r){l||(_(n),l=!0)},o(r){m(n),l=!1},d(r){n&&n.d(r),r&&p(e)}}}function K(s,t,e){let l,n,r,{context:i}=t,f=L.showLinkToWeblate;W(s,f,c=>e(3,r=c));let o=L.showLinkOnMobile;W(s,o,c=>e(1,l=c));let a=L.language;return W(s,a,c=>e(2,n=c)),s.$$set=c=>{"context"in c&&e(0,i=c.context)},[i,l,n,r,f,o,a]}class P extends O{constructor(t){super(),M(this,t,K,J,N,{context:0})}}function U(s){let t;return{c(){t=w("span"),u(t,"class",s[1])},m(e,l){b(e,t,l),s[3](t)},p(e,l){l&2&&u(t,"class",e[1])},d(e){e&&p(t),s[3](null)}}}function Q(s){let t,e=s[0]!==void 0&&U(s);return{c(){e&&e.c(),t=T()},m(l,n){e&&e.m(l,n),b(l,t,n)},p(l,[n]){l[0]!==void 0?e?e.p(l,n):(e=U(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:y,o:y,d(l){e&&e.d(l),l&&p(t)}}}function R(s,t,e){let{src:l}=t,n,{clss:r=void 0}=t;function i(f){E[f?"unshift":"push"](()=>{n=f,e(2,n),e(0,l)})}return s.$$set=f=>{"src"in f&&e(0,l=f.src),"clss"in f&&e(1,r=f.clss)},s.$$.update=()=>{s.$$.dirty&5&&n&&e(2,n.innerHTML=D.purify(l),n)},[l,r,n,i]}class V extends O{constructor(t){super(),M(this,t,R,Q,N,{src:0,clss:1})}}function j(s){var i;let t,e,l,n,r;return e=new V({props:{src:s[3]}}),n=new P({props:{context:(i=s[0])==null?void 0:i.context}}),{c(){t=w("span"),k(e.$$.fragment),l=z(),k(n.$$.fragment),u(t,"class",s[1])},m(f,o){b(f,t,o),d(e,t,null),A(t,l),d(n,t,null),r=!0},p(f,o){var H;const a={};o&8&&(a.src=f[3]),e.$set(a);const c={};o&1&&(c.context=(H=f[0])==null?void 0:H.context),n.$set(c),(!r||o&2)&&u(t,"class",f[1])},i(f){r||(_(e.$$.fragment,f),_(n.$$.fragment,f),r=!0)},o(f){m(e.$$.fragment,f),m(n.$$.fragment,f),r=!1},d(f){f&&p(t),h(e),h(n)}}}function X(s){let t,e,l=s[3]&&j(s);return{c(){l&&l.c(),t=T()},m(n,r){l&&l.m(n,r),b(n,t,r),e=!0},p(n,[r]){n[3]?l?(l.p(n,r),r&8&&_(l,1)):(l=j(n),l.c(),_(l,1),l.m(t.parentNode,t)):l&&(q(),m(l,1,1,()=>{l=null}),F())},i(n){e||(_(l),e=!0)},o(n){m(l),e=!1},d(n){l&&l.d(n),n&&p(t)}}}function Y(s,t,e){let l,n=y,r=()=>(n(),n=B(o,a=>e(3,l=a)),o);s.$$.on_destroy.push(()=>n());let{t:i}=t,{cls:f=""}=t,o=i==null?void 0:i.current;return r(),s.$$set=a=>{"t"in a&&e(0,i=a.t),"cls"in a&&e(1,f=a.cls)},s.$$.update=()=>{s.$$.dirty&1&&r(e(2,o=i==null?void 0:i.current))},[i,f,o,l]}class v extends O{constructor(t){super(),M(this,t,Y,X,N,{t:0,cls:1})}}export{V as F,v as T,P as W};
//# sourceMappingURL=Tr-a1b201b7.js.map
