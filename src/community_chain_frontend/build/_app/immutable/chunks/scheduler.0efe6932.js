function k(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function M(){return Object.create(null)}function v(t){t.forEach(j)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function b(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t){let n;return b(t,e=>n=e)(),n}function A(t,n,e){t.$$.on_destroy.push(b(n,e))}function B(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function C(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],f=Math.max(n.dirty.length,r.length);for(let s=0;s<f;s+=1)a[s]=n.dirty[s]|r[s];return a}return n.dirty|r}return n.dirty}function D(t,n,e,o,r,a){if(r){const f=y(n,e,o,a);t.p(f,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){return t??""}let i;function _(t){i=t}function m(){if(!i)throw new Error("Function called outside component initialization");return i}function I(t){m().$$.on_mount.push(t)}function J(t){m().$$.after_update.push(t)}const l=[],p=[];let u=[];const g=[],x=Promise.resolve();let h=!1;function E(){h||(h=!0,x.then(q))}function K(){return E(),x}function O(t){u.push(t)}const d=new Set;let c=0;function q(){if(c!==0)return;const t=i;do{try{for(;c<l.length;){const n=l[c];c++,_(n),z(n.$$)}}catch(n){throw l.length=0,c=0,n}for(_(null),l.length=0,c=0;p.length;)p.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(l.length);for(;g.length;)g.pop()();h=!1,d.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function L(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{J as a,p as b,k as c,A as d,B as e,C as f,G as g,U as h,b as i,F as j,M as k,q as l,S as m,H as n,I as o,O as p,L as q,v as r,P as s,K as t,D as u,i as v,_ as w,j as x,l as y,E as z};
