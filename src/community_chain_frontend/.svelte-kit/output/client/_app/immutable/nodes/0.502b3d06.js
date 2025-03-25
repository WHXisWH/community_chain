import{s as j,n as C,c as I,d as H,e as S,u as U,g as q,f as F,o as P}from"../chunks/scheduler.0efe6932.js";import{S as z,i as B,g as m,s as A,m as M,h as b,j as y,x,c as E,n as O,f as d,k as v,a as k,y as g,z as D,r as R,u as W,v as G,d as L,t as V,w as J}from"../chunks/index.4ebdcf9a.js";import{i as K,l as Q,a as X,b as Y}from"../chunks/auth.3feb8397.js";import{p as Z}from"../chunks/stores.0dad99b6.js";function tt(u){let t,r="ログイン",a,c;return{c(){t=m("button"),t.textContent=r,this.h()},l(e){t=b(e,"BUTTON",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-zomblp"&&(t.textContent=r),this.h()},h(){v(t,"class","btn btn-primary")},m(e,o){k(e,t,o),a||(c=D(t,"click",Q),a=!0)},p:I,d(e){e&&d(t),a=!1,c()}}}function et(u){let t,r,a,c,e,o,f,p,l,s="ログアウト",_,$;return{c(){t=m("a"),r=M("活動を作成"),c=A(),e=m("a"),o=M("マイページ"),p=A(),l=m("button"),l.textContent=s,this.h()},l(n){t=b(n,"A",{href:!0,class:!0});var i=y(t);r=O(i,"活動を作成"),i.forEach(d),c=E(n),e=b(n,"A",{href:!0,class:!0});var h=y(e);o=O(h,"マイページ"),h.forEach(d),p=E(n),l=b(n,"BUTTON",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-1sdha8n"&&(l.textContent=s),this.h()},h(){v(t,"href","/create"),v(t,"class",a=C(u[0]("/create"))+" svelte-1lgfdke"),v(e,"href","/dashboard"),v(e,"class",f=C(u[0]("/dashboard"))+" svelte-1lgfdke"),v(l,"class","btn btn-outline")},m(n,i){k(n,t,i),g(t,r),k(n,c,i),k(n,e,i),g(e,o),k(n,p,i),k(n,l,i),_||($=D(l,"click",X),_=!0)},p(n,i){i&1&&a!==(a=C(n[0]("/create"))+" svelte-1lgfdke")&&v(t,"class",a),i&1&&f!==(f=C(n[0]("/dashboard"))+" svelte-1lgfdke")&&v(e,"class",f)},d(n){n&&(d(t),d(c),d(e),d(p),d(l)),_=!1,$()}}}function st(u){let t,r,a,c="コミュニティチェーン",e,o,f,p,l,s;function _(i,h){return i[1]?et:tt}let $=_(u),n=$(u);return{c(){t=m("nav"),r=m("div"),a=m("a"),a.textContent=c,e=A(),o=m("div"),f=m("a"),p=M("活動一覧"),s=A(),n.c(),this.h()},l(i){t=b(i,"NAV",{class:!0});var h=y(t);r=b(h,"DIV",{class:!0});var T=y(r);a=b(T,"A",{href:!0,class:!0,"data-svelte-h":!0}),x(a)!=="svelte-1299cjf"&&(a.textContent=c),e=E(T),o=b(T,"DIV",{class:!0});var N=y(o);f=b(N,"A",{href:!0,class:!0});var w=y(f);p=O(w,"活動一覧"),w.forEach(d),s=E(N),n.l(N),N.forEach(d),T.forEach(d),h.forEach(d),this.h()},h(){v(a,"href","/"),v(a,"class","logo svelte-1lgfdke"),v(f,"href","/"),v(f,"class",l=C(u[0]("/"))+" svelte-1lgfdke"),v(o,"class","nav-links svelte-1lgfdke"),v(r,"class","container svelte-1lgfdke"),v(t,"class","navbar svelte-1lgfdke")},m(i,h){k(i,t,h),g(t,r),g(r,a),g(r,e),g(r,o),g(o,f),g(f,p),g(o,s),n.m(o,null)},p(i,[h]){h&1&&l!==(l=C(i[0]("/"))+" svelte-1lgfdke")&&v(f,"class",l),$===($=_(i))&&n?n.p(i,h):(n.d(1),n=$(i),n&&(n.c(),n.m(o,null)))},i:I,o:I,d(i){i&&d(t),n.d()}}}function at(u,t,r){let a,c,e;return H(u,Z,o=>r(2,c=o)),H(u,K,o=>r(1,e=o)),u.$$.update=()=>{u.$$.dirty&4&&r(0,a=o=>c.url.pathname===o?"active":"")},[a,e,c]}class lt extends z{constructor(t){super(),B(this,t,at,st,j,{})}}function nt(u){let t,r,a,c,e,o='<div class="container"><p>© 2025 コミュニティチェーン - ICP Hackathon Wave 4</p></div>',f;t=new lt({});const p=u[1].default,l=S(p,u,u[0],null);return{c(){R(t.$$.fragment),r=A(),a=m("main"),l&&l.c(),c=A(),e=m("footer"),e.innerHTML=o,this.h()},l(s){W(t.$$.fragment,s),r=E(s),a=b(s,"MAIN",{class:!0});var _=y(a);l&&l.l(_),_.forEach(d),c=E(s),e=b(s,"FOOTER",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-14o9t9h"&&(e.innerHTML=o),this.h()},h(){v(a,"class","svelte-11s9at1"),v(e,"class","svelte-11s9at1")},m(s,_){G(t,s,_),k(s,r,_),k(s,a,_),l&&l.m(a,null),k(s,c,_),k(s,e,_),f=!0},p(s,[_]){l&&l.p&&(!f||_&1)&&U(l,p,s,s[0],f?F(p,s[0],_,null):q(s[0]),null)},i(s){f||(L(t.$$.fragment,s),L(l,s),f=!0)},o(s){V(t.$$.fragment,s),V(l,s),f=!1},d(s){s&&(d(r),d(a),d(c),d(e)),J(t,s),l&&l.d(s)}}}function rt(u,t,r){let{$$slots:a={},$$scope:c}=t;return P(async()=>{await Y()}),u.$$set=e=>{"$$scope"in e&&r(0,c=e.$$scope)},[c,a]}class ft extends z{constructor(t){super(),B(this,t,rt,nt,j,{})}}export{ft as component};
