import{s as Ge,d as Se,o as Ke,n as Be,c as Z}from"../chunks/scheduler.0efe6932.js";import{S as Qe,i as Re,s as y,g as d,A as We,f as u,c as k,h as p,j as b,k as _,a as T,t as De,b as Xe,d as Ie,p as Ye,m as w,n as P,x as M,y as n,o as N,r as Ze,u as xe,v as $e,w as et,z as Je}from"../chunks/index.4ebdcf9a.js";import{p as tt}from"../chunks/stores.6eeb3a5d.js";import{a as Ae,b as st,c as lt}from"../chunks/activities.f28ac22d.js";import{i as at,c as nt}from"../chunks/auth.212dabd5.js";import{L as rt}from"../chunks/LoadingSpinner.cd21ff20.js";function it(o){let e,t,r,s,l,i=o[0].title+"",a,c,g,f=o[9](o[0].status)+"",m,D,V,E,I,j,H,le="場所:",x,h,Q=o[0].location+"",ae,ve,q,F,we="報酬:",he,J,$=o[0].reward+"",ne,me,be,O,G,Pe="作成日:",ge,R,ee=o[8](o[0].created_at)+"",re,Ce,B,K,Ve="活動内容",Ee,te,se=o[0].description+"",ie,ye,ke,L,oe,U,Ne="一覧に戻る",z=o[5]&&Ue(o),S=o[0].assignee&&Fe(o);function Te(v,C){if(v[7])return dt;if(v[6])return ft;if(v[1])return ut}let W=Te(o),A=W&&W(o);return{c(){z&&z.c(),e=y(),t=d("div"),r=d("div"),s=d("div"),l=d("h1"),a=w(i),c=y(),g=d("span"),m=w(f),V=y(),E=d("div"),I=d("div"),j=d("div"),H=d("span"),H.textContent=le,x=y(),h=d("span"),ae=w(Q),ve=y(),q=d("div"),F=d("span"),F.textContent=we,he=y(),J=d("span"),ne=w($),me=w(" ポイント"),be=y(),O=d("div"),G=d("span"),G.textContent=Pe,ge=y(),R=d("span"),re=w(ee),Ce=y(),B=d("div"),K=d("h3"),K.textContent=Ve,Ee=y(),te=d("p"),ie=w(se),ye=y(),S&&S.c(),ke=y(),L=d("div"),A&&A.c(),oe=y(),U=d("a"),U.textContent=Ne,this.h()},l(v){z&&z.l(v),e=k(v),t=p(v,"DIV",{class:!0});var C=b(t);r=p(C,"DIV",{class:!0});var je=b(r);s=p(je,"DIV",{class:!0});var ce=b(s);l=p(ce,"H1",{class:!0});var He=b(l);a=P(He,i),He.forEach(u),c=k(ce),g=p(ce,"SPAN",{class:!0});var Le=b(g);m=P(Le,f),Le.forEach(u),ce.forEach(u),je.forEach(u),V=k(C),E=p(C,"DIV",{class:!0});var X=b(E);I=p(X,"DIV",{class:!0});var Y=b(I);j=p(Y,"DIV",{class:!0});var ue=b(j);H=p(ue,"SPAN",{class:!0,"data-svelte-h":!0}),M(H)!=="svelte-wnzubp"&&(H.textContent=le),x=k(ue),h=p(ue,"SPAN",{class:!0});var Me=b(h);ae=P(Me,Q),Me.forEach(u),ue.forEach(u),ve=k(Y),q=p(Y,"DIV",{class:!0});var fe=b(q);F=p(fe,"SPAN",{class:!0,"data-svelte-h":!0}),M(F)!=="svelte-i7n1r6"&&(F.textContent=we),he=k(fe),J=p(fe,"SPAN",{class:!0});var ze=b(J);ne=P(ze,$),me=P(ze," ポイント"),ze.forEach(u),fe.forEach(u),be=k(Y),O=p(Y,"DIV",{class:!0});var de=b(O);G=p(de,"SPAN",{class:!0,"data-svelte-h":!0}),M(G)!=="svelte-1mqaybe"&&(G.textContent=Pe),ge=k(de),R=p(de,"SPAN",{class:!0});var qe=b(R);re=P(qe,ee),qe.forEach(u),de.forEach(u),Y.forEach(u),Ce=k(X),B=p(X,"DIV",{class:!0});var pe=b(B);K=p(pe,"H3",{class:!0,"data-svelte-h":!0}),M(K)!=="svelte-1jbv9dm"&&(K.textContent=Ve),Ee=k(pe),te=p(pe,"P",{});var Oe=b(te);ie=P(Oe,se),Oe.forEach(u),pe.forEach(u),ye=k(X),S&&S.l(X),X.forEach(u),ke=k(C),L=p(C,"DIV",{class:!0});var _e=b(L);A&&A.l(_e),oe=k(_e),U=p(_e,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(U)!=="svelte-1xjjkt9"&&(U.textContent=Ne),_e.forEach(u),C.forEach(u),this.h()},h(){_(l,"class","activity-title svelte-1cn0mdz"),_(g,"class",D=Be(`status status-${o[0].status}`)+" svelte-1cn0mdz"),_(s,"class","flex-between svelte-1cn0mdz"),_(r,"class","card-header"),_(H,"class","meta-label svelte-1cn0mdz"),_(h,"class","meta-value svelte-1cn0mdz"),_(j,"class","meta-item svelte-1cn0mdz"),_(F,"class","meta-label svelte-1cn0mdz"),_(J,"class","meta-value svelte-1cn0mdz"),_(q,"class","meta-item svelte-1cn0mdz"),_(G,"class","meta-label svelte-1cn0mdz"),_(R,"class","meta-value svelte-1cn0mdz"),_(O,"class","meta-item svelte-1cn0mdz"),_(I,"class","meta-info svelte-1cn0mdz"),_(K,"class","svelte-1cn0mdz"),_(B,"class","description svelte-1cn0mdz"),_(E,"class","card-body"),_(U,"href","/"),_(U,"class","btn btn-outline"),_(L,"class","card-footer svelte-1cn0mdz"),_(t,"class","card")},m(v,C){z&&z.m(v,C),T(v,e,C),T(v,t,C),n(t,r),n(r,s),n(s,l),n(l,a),n(s,c),n(s,g),n(g,m),n(t,V),n(t,E),n(E,I),n(I,j),n(j,H),n(j,x),n(j,h),n(h,ae),n(I,ve),n(I,q),n(q,F),n(q,he),n(q,J),n(J,ne),n(J,me),n(I,be),n(I,O),n(O,G),n(O,ge),n(O,R),n(R,re),n(E,Ce),n(E,B),n(B,K),n(B,Ee),n(B,te),n(te,ie),n(E,ye),S&&S.m(E,null),n(t,ke),n(t,L),A&&A.m(L,null),n(L,oe),n(L,U)},p(v,C){v[5]?z?z.p(v,C):(z=Ue(v),z.c(),z.m(e.parentNode,e)):z&&(z.d(1),z=null),C&1&&i!==(i=v[0].title+"")&&N(a,i),C&1&&f!==(f=v[9](v[0].status)+"")&&N(m,f),C&1&&D!==(D=Be(`status status-${v[0].status}`)+" svelte-1cn0mdz")&&_(g,"class",D),C&1&&Q!==(Q=v[0].location+"")&&N(ae,Q),C&1&&$!==($=v[0].reward+"")&&N(ne,$),C&1&&ee!==(ee=v[8](v[0].created_at)+"")&&N(re,ee),C&1&&se!==(se=v[0].description+"")&&N(ie,se),v[0].assignee?S?S.p(v,C):(S=Fe(v),S.c(),S.m(E,null)):S&&(S.d(1),S=null),W===(W=Te(v))&&A?A.p(v,C):(A&&A.d(1),A=W&&W(v),A&&(A.c(),A.m(L,oe)))},i:Z,o:Z,d(v){v&&(u(e),u(t)),z&&z.d(v),S&&S.d(),A&&A.d()}}}function ot(o){let e,t,r,s,l,i="一覧に戻る";return{c(){e=d("div"),t=d("p"),r=w(o[3]),s=y(),l=d("a"),l.textContent=i,this.h()},l(a){e=p(a,"DIV",{class:!0});var c=b(e);t=p(c,"P",{});var g=b(t);r=P(g,o[3]),g.forEach(u),s=k(c),l=p(c,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(l)!=="svelte-111jbnl"&&(l.textContent=i),c.forEach(u),this.h()},h(){_(l,"href","/"),_(l,"class","btn btn-primary"),_(e,"class","alert alert-danger")},m(a,c){T(a,e,c),n(e,t),n(t,r),n(e,s),n(e,l)},p(a,c){c&8&&N(r,a[3])},i:Z,o:Z,d(a){a&&u(e)}}}function ct(o){let e,t,r,s,l="活動データを読み込み中...",i;return t=new rt({}),{c(){e=d("div"),Ze(t.$$.fragment),r=y(),s=d("p"),s.textContent=l,this.h()},l(a){e=p(a,"DIV",{class:!0});var c=b(e);xe(t.$$.fragment,c),r=k(c),s=p(c,"P",{"data-svelte-h":!0}),M(s)!=="svelte-1cqsa8w"&&(s.textContent=l),c.forEach(u),this.h()},h(){_(e,"class","loading")},m(a,c){T(a,e,c),$e(t,e,null),n(e,r),n(e,s),i=!0},p:Z,i(a){i||(Ie(t.$$.fragment,a),i=!0)},o(a){De(t.$$.fragment,a),i=!1},d(a){a&&u(e),et(t)}}}function Ue(o){let e,t,r;return{c(){e=d("div"),t=d("p"),r=w(o[5]),this.h()},l(s){e=p(s,"DIV",{class:!0});var l=b(e);t=p(l,"P",{});var i=b(t);r=P(i,o[5]),i.forEach(u),l.forEach(u),this.h()},h(){_(e,"class","alert alert-success")},m(s,l){T(s,e,l),n(e,t),n(t,r)},p(s,l){l&32&&N(r,s[5])},d(s){s&&u(e)}}}function Fe(o){let e,t,r="参加者",s,l,i=o[0].assignee.toString()+"",a;return{c(){e=d("div"),t=d("h3"),t.textContent=r,s=y(),l=d("p"),a=w(i),this.h()},l(c){e=p(c,"DIV",{class:!0});var g=b(e);t=p(g,"H3",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-1l067dl"&&(t.textContent=r),s=k(g),l=p(g,"P",{class:!0});var f=b(l);a=P(f,i),f.forEach(u),g.forEach(u),this.h()},h(){_(t,"class","svelte-1cn0mdz"),_(l,"class","principal-id svelte-1cn0mdz"),_(e,"class","assignee svelte-1cn0mdz")},m(c,g){T(c,e,g),n(e,t),n(e,s),n(e,l),n(l,a)},p(c,g){g&1&&i!==(i=c[0].assignee.toString()+"")&&N(a,i)},d(c){c&&u(e)}}}function ut(o){let e,t="<span>あなたが作成した活動です</span>";return{c(){e=d("div"),e.innerHTML=t,this.h()},l(r){e=p(r,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-124bw4l"&&(e.innerHTML=t),this.h()},h(){_(e,"class","creator-badge svelte-1cn0mdz")},m(r,s){T(r,e,s)},p:Z,d(r){r&&u(e)}}}function ft(o){let e,t=o[4]?"処理中...":"活動完了を報告する",r,s,l;return{c(){e=d("button"),r=w(t),this.h()},l(i){e=p(i,"BUTTON",{class:!0});var a=b(e);r=P(a,t),a.forEach(u),this.h()},h(){_(e,"class","btn btn-success"),e.disabled=o[4]},m(i,a){T(i,e,a),n(e,r),s||(l=Je(e,"click",o[11]),s=!0)},p(i,a){a&16&&t!==(t=i[4]?"処理中...":"活動完了を報告する")&&N(r,t),a&16&&(e.disabled=i[4])},d(i){i&&u(e),s=!1,l()}}}function dt(o){let e,t=o[4]?"処理中...":"この活動に参加する",r,s,l;return{c(){e=d("button"),r=w(t),this.h()},l(i){e=p(i,"BUTTON",{class:!0});var a=b(e);r=P(a,t),a.forEach(u),this.h()},h(){_(e,"class","btn btn-primary"),e.disabled=o[4]},m(i,a){T(i,e,a),n(e,r),s||(l=Je(e,"click",o[10]),s=!0)},p(i,a){a&16&&t!==(t=i[4]?"処理中...":"この活動に参加する")&&N(r,t),a&16&&(e.disabled=i[4])},d(i){i&&u(e),s=!1,l()}}}function pt(o){let e,t,r,s,l,i;document.title=e=o[0]?`${o[0].title} - コミュニティチェーン`:"コミュニティチェーン";const a=[ct,ot,it],c=[];function g(f,m){return f[2]?0:f[3]?1:f[0]?2:-1}return~(s=g(o))&&(l=c[s]=a[s](o)),{c(){t=y(),r=d("section"),l&&l.c(),this.h()},l(f){We("svelte-1nhfm3l",document.head).forEach(u),t=k(f),r=p(f,"SECTION",{class:!0});var D=b(r);l&&l.l(D),D.forEach(u),this.h()},h(){_(r,"class","container")},m(f,m){T(f,t,m),T(f,r,m),~s&&c[s].m(r,null),i=!0},p(f,[m]){(!i||m&1)&&e!==(e=f[0]?`${f[0].title} - コミュニティチェーン`:"コミュニティチェーン")&&(document.title=e);let D=s;s=g(f),s===D?~s&&c[s].p(f,m):(l&&(Ye(),De(c[D],1,1,()=>{c[D]=null}),Xe()),~s?(l=c[s],l?l.p(f,m):(l=c[s]=a[s](f),l.c()),Ie(l,1),l.m(r,null)):l=null)},i(f){i||(Ie(l),i=!0)},o(f){De(l),i=!1},d(f){f&&(u(t),u(r)),~s&&c[s].d()}}}function _t(o,e,t){let r,s,l,i,a,c,g;Se(o,at,h=>t(13,a=h)),Se(o,nt,h=>t(14,c=h)),Se(o,tt,h=>t(15,g=h));const f=g.params.id;let m=null,D=!0,V=null,E=!1,I=null;const j=h=>new Date(Number(h)/1e6).toLocaleString("ja-JP"),H=h=>{switch(h){case"open":return"募集中";case"assigned":return"進行中";case"completed":return"完了";default:return h}};Ke(async()=>{try{const h=await Ae(f);h?t(0,m=h):t(3,V="指定された活動が見つかりません。")}catch(h){t(3,V="活動データの読み込みに失敗しました。"),console.error(h)}finally{t(2,D=!1)}});async function le(){if(!a){alert("参加するにはログインが必要です。");return}t(4,E=!0);try{await st(f)?(t(5,I="参加申請が受理されました！"),t(0,m=await Ae(f))):t(3,V="参加申請に失敗しました。")}catch(h){t(3,V="参加申請処理中にエラーが発生しました。"),console.error(h)}finally{t(4,E=!1)}}async function x(){if(!a){alert("活動を完了するにはログインが必要です。");return}t(4,E=!0);try{await lt(f)?(t(5,I="活動完了の報告が受理されました！"),t(0,m=await Ae(f))):t(3,V="活動完了の報告に失敗しました。")}catch(h){t(3,V="活動完了処理中にエラーが発生しました。"),console.error(h)}finally{t(4,E=!1)}}return o.$$.update=()=>{o.$$.dirty&16385&&t(1,r=m&&c.principal&&m.creator.toString()===c.principal),o.$$.dirty&16385&&t(12,s=m&&m.assignee&&c.principal&&m.assignee.toString()===c.principal),o.$$.dirty&8195&&t(7,l=a&&m&&m.status==="open"&&!r),o.$$.dirty&12289&&t(6,i=a&&m&&m.status==="assigned"&&s)},[m,r,D,V,E,I,i,l,j,H,le,x,s,a,c]}class Et extends Qe{constructor(e){super(),Re(this,e,_t,pt,Ge,{})}}export{Et as component};
