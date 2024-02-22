import{U as E}from"./Utils-498bb79d.js";import{S as P,i as T,s as q,e as b,a as L,O as v,d as k,f as m,g as U,C as F,t as M,P as O,h as g,D as j,A as H,c as J,m as R,n as N,j as y,N as z,b as S,k as B}from"./tw-merge-8b89dba1.js";import{U as G}from"./LocalStorageSource-78a030c5.js";import{L as K}from"./Loading-149f5a74.js";import{O as Q}from"./OsmConnection-6ebaacab.js";import"./store.legacy-58e2a55f.js";import"./Constants-203b4dea.js";function A(u,e,o){const t=u.slice();return t[6]=e[o],t}function V(u){let e,o;return e=new K({}),{c(){J(e.$$.fragment)},m(t,l){R(e,t,l),o=!0},p:N,i(t){o||(M(e.$$.fragment,t),o=!0)},o(t){U(e.$$.fragment,t),o=!1},d(t){y(e,t)}}}function W(u){let e,o,t,l,a=u[0].date+"",i,f=u[0].leaderboard,s=[];for(let n=0;n<f.length;n+=1)s[n]=D(A(u,f,n));return{c(){e=b("table"),o=b("tr"),o.innerHTML=`<th>Rank</th> 
      <th>Contributor</th> 
      <th>Number of images contributed</th>`,t=L();for(let n=0;n<s.length;n+=1)s[n].c();l=v(`
  Statistics generated on `),i=v(a)},m(n,_){k(n,e,_),m(e,o),m(e,t);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null);k(n,l,_),k(n,i,_)},p(n,_){if(_&3){f=n[0].leaderboard;let r;for(r=0;r<f.length;r+=1){const C=A(n,f,r);s[r]?s[r].p(C,_):(s[r]=D(C),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=f.length}_&1&&a!==(a=n[0].date+"")&&O(i,a)},i:N,o:N,d(n){n&&g(e),z(s,n),n&&g(l),n&&g(i)}}}function X(u){let e,o=u[6].name+"",t,l;return{c(){e=b("a"),t=v(o),S(e,"href",l=u[6].account)},m(a,i){k(a,e,i),m(e,t)},p(a,i){i&1&&o!==(o=a[6].name+"")&&O(t,o),i&1&&l!==(l=a[6].account)&&S(e,"href",l)},d(a){a&&g(e)}}}function Y(u){let e,o=u[6].name+"",t,l;return{c(){e=b("a"),t=v(o),S(e,"class","thanks"),S(e,"href",l=u[6].account)},m(a,i){k(a,e,i),m(e,t)},p(a,i){i&1&&o!==(o=a[6].name+"")&&O(t,o),i&1&&l!==(l=a[6].account)&&S(e,"href",l)},d(a){a&&g(e)}}}function D(u){let e,o,t=u[6].rank+"",l,a,i,f,s,n,_=u[6].nrOfImages+"",r,C,c;function d(p,I){return p[1]===p[6].name?Y:X}let w=d(u),h=w(u);return{c(){e=b("tr"),o=b("td"),l=v(t),a=L(),i=b("td"),h.c(),f=L(),s=b("td"),n=b("b"),r=v(_),C=v(`
          total images`),c=L()},m(p,I){k(p,e,I),m(e,o),m(o,l),m(e,a),m(e,i),h.m(i,null),m(e,f),m(e,s),m(s,n),m(n,r),m(s,C),m(e,c)},p(p,I){I&1&&t!==(t=p[6].rank+"")&&O(l,t),w===(w=d(p))&&h?h.p(p,I):(h.d(1),h=w(p),h&&(h.c(),h.m(i,null))),I&1&&_!==(_=p[6].nrOfImages+"")&&O(r,_)},d(p){p&&g(e),h.d()}}}function Z(u){let e,o,t,l,a,i,f,s,n;const _=[W,V],r=[];function C(c,d){return c[0]?0:1}return t=C(u),l=r[t]=_[t](u),{c(){e=b("h1"),e.textContent="Contributed images with MapComplete: leaderboard",o=L(),l.c(),a=L(),i=b("div"),f=v("Logged in as "),s=v(u[1])},m(c,d){k(c,e,d),k(c,o,d),r[t].m(c,d),k(c,a,d),k(c,i,d),m(i,f),m(i,s),n=!0},p(c,[d]){let w=t;t=C(c),t===w?r[t].p(c,d):(H(),U(r[w],1,1,()=>{r[w]=null}),F(),l=r[t],l?l.p(c,d):(l=r[t]=_[t](c),l.c()),M(l,1),l.m(a.parentNode,a)),(!n||d&2)&&O(s,c[1])},i(c){n||(M(l),n=!0)},o(c){U(l),n=!1},d(c){c&&g(e),c&&g(o),r[t].d(c),c&&g(a),c&&g(i)}}}function $(u,e,o){let t,l,i=new Q({attemptLogin:!0}).userDetails.map(n=>n.name);j(u,i,n=>o(1,l=n));let{source:f="https://raw.githubusercontent.com/pietervdvn/MapComplete-data/main/picture-leaderboard.json"}=e,s=G.FromPromise(E.downloadJsonCached(f));return j(u,s,n=>o(0,t=n)),u.$$set=n=>{"source"in n&&o(4,f=n.source)},[t,l,i,s,f]}class x extends P{constructor(e){super(),T(this,e,$,Z,q,{source:4})}}new B(x,{}).AttachTo("main");
//# sourceMappingURL=leaderboard-28745ca6.js.map