import{S,i as $,s as q,G as v,e as P,a as A,b as p,d as E,f as G,r as m,H as b,I as w,J as k,t as d,g as h,h as H,y as g,l as B,o as L,q as M,u as F,v as N,w as j,x as O,c as I,m as J,j as K,K as Q}from"./index-8d610534.js";import{t as C}from"./tw-merge-406b9d2a.js";const R=s=>({}),y=s=>({}),T=s=>({}),z=s=>({});function U(s){let e,a,t,n,r,_;const i=s[2].image,u=v(i,s,s[1],z),f=s[2].message,l=v(f,s,s[1],y);return{c(){e=P("button"),u&&u.c(),a=A(),l&&l.c(),p(e,"class",t=C(s[0].extraClasses,"secondary no-image-background"))},m(o,c){E(o,e,c),u&&u.m(e,null),G(e,a),l&&l.m(e,null),n=!0,r||(_=m(e,"click",s[3]),r=!0)},p(o,[c]){u&&u.p&&(!n||c&2)&&b(u,i,o,o[1],n?k(i,o[1],c,T):w(o[1]),z),l&&l.p&&(!n||c&2)&&b(l,f,o,o[1],n?k(f,o[1],c,R):w(o[1]),y),(!n||c&1&&t!==(t=C(o[0].extraClasses,"secondary no-image-background")))&&p(e,"class",t)},i(o){n||(d(u,o),d(l,o),n=!0)},o(o){h(u,o),h(l,o),n=!1},d(o){o&&H(e),u&&u.d(o),l&&l.d(o),r=!1,_()}}}function V(s,e,a){let{$$slots:t={},$$scope:n}=e,{options:r={}}=e;function _(i){g.call(this,s,i)}return s.$$set=i=>{"options"in i&&a(0,r=i.options),"$$scope"in i&&a(1,n=i.$$scope)},[r,n,t,_]}class W extends S{constructor(e){super(),$(this,e,V,U,q,{options:0})}}function X(s){let e,a,t,n,r;const _=s[2].default,i=v(_,s,s[1],null);let u=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 20 20"},{fill:"currentColor"},{"aria-hidden":"true"},s[0]],f={};for(let l=0;l<u.length;l+=1)f=B(f,u[l]);return{c(){e=L("svg"),i&&i.c(),a=L("path"),p(a,"fill-rule","evenodd"),p(a,"d","M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"),p(a,"clip-rule","evenodd"),M(e,f)},m(l,o){E(l,e,o),i&&i.m(e,null),G(e,a),t=!0,n||(r=[m(e,"click",s[3]),m(e,"mouseover",s[4]),m(e,"mouseenter",s[5]),m(e,"mouseleave",s[6]),m(e,"keydown",s[7])],n=!0)},p(l,[o]){i&&i.p&&(!t||o&2)&&b(i,_,l,l[1],t?k(_,l[1],o,null):w(l[1]),null),M(e,f=F(u,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 20 20"},{fill:"currentColor"},{"aria-hidden":"true"},o&1&&l[0]]))},i(l){t||(d(i,l),t=!0)},o(l){h(i,l),t=!1},d(l){l&&H(e),i&&i.d(l),n=!1,N(r)}}}function Y(s,e,a){const t=[];let n=j(e,t),{$$slots:r={},$$scope:_}=e;function i(c){g.call(this,s,c)}function u(c){g.call(this,s,c)}function f(c){g.call(this,s,c)}function l(c){g.call(this,s,c)}function o(c){g.call(this,s,c)}return s.$$set=c=>{e=B(B({},e),O(c)),a(0,n=j(e,t)),"$$scope"in c&&a(1,_=c.$$scope)},[n,_,r,i,u,f,l,o]}class Z extends S{constructor(e){super(),$(this,e,Y,X,q,{})}}const x=s=>({}),D=s=>({slot:"message"});function ee(s){let e,a;return e=new Z({props:{class:s[1]??"h-12 w-12",slot:"image"}}),{c(){I(e.$$.fragment)},m(t,n){J(e,t,n),a=!0},p(t,n){const r={};n&2&&(r.class=t[1]??"h-12 w-12"),e.$set(r)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){K(e,t)}}}function te(s){let e;const a=s[3].default,t=v(a,s,s[5],D);return{c(){t&&t.c()},m(n,r){t&&t.m(n,r),e=!0},p(n,r){t&&t.p&&(!e||r&32)&&b(t,a,n,n[5],e?k(a,n[5],r,x):w(n[5]),D)},i(n){e||(d(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function se(s){let e,a;return e=new W({props:{options:{extraClasses:C("flex items-center",s[0])},$$slots:{message:[te],image:[ee]},$$scope:{ctx:s}}}),e.$on("click",s[4]),{c(){I(e.$$.fragment)},m(t,n){J(e,t,n),a=!0},p(t,[n]){const r={};n&1&&(r.options={extraClasses:C("flex items-center",t[0])}),n&34&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){K(e,t)}}}function ne(s,e,a){let{$$slots:t={},$$scope:n}=e;const r=Q();let{clss:_=void 0}=e,{imageClass:i=void 0}=e;const u=()=>r("click");return s.$$set=f=>{"clss"in f&&a(0,_=f.clss),"imageClass"in f&&a(1,i=f.imageClass),"$$scope"in f&&a(5,n=f.$$scope)},[_,i,r,t,u,n]}class oe extends S{constructor(e){super(),$(this,e,ne,se,q,{clss:0,imageClass:1})}}export{oe as B,W as S};
//# sourceMappingURL=BackButton-df937b24.js.map
