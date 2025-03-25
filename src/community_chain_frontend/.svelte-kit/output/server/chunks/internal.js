import{c as x,s as k,v as f,m as v}from"./ssr.js";let _="",u=_;const h={base:_,assets:u};function U(){_=h.base,u=h.assets}function O(n){u=h.assets=n}let b={};function I(n){}function P(n){b=n}function S(){}const w=x((n,t,e,g)=>{let{stores:s}=t,{page:c}=t,{constructors:o}=t,{components:a=[]}=t,{form:l}=t,{data_0:d=null}=t,{data_1:m=null}=t;k("__svelte__",s),s.page.notify,t.stores===void 0&&e.stores&&s!==void 0&&e.stores(s),t.page===void 0&&e.page&&c!==void 0&&e.page(c),t.constructors===void 0&&e.constructors&&o!==void 0&&e.constructors(o),t.components===void 0&&e.components&&a!==void 0&&e.components(a),t.form===void 0&&e.form&&l!==void 0&&e.form(l),t.data_0===void 0&&e.data_0&&d!==void 0&&e.data_0(d),t.data_1===void 0&&e.data_1&&m!==void 0&&e.data_1(m);let i,p,y=n.head;do i=!0,n.head=y,s.page.set(c),p=`  ${o[1]?`${f(o[0]||v,"svelte:component").$$render(n,{data:d,this:a[0]},{this:r=>{a[0]=r,i=!1}},{default:()=>`${f(o[1]||v,"svelte:component").$$render(n,{data:m,form:l,this:a[1]},{this:r=>{a[1]=r,i=!1}},{})}`})}`:`${f(o[0]||v,"svelte:component").$$render(n,{data:d,form:l,this:a[0]},{this:r=>{a[0]=r,i=!1}},{})}`} `;while(!i);return p}),j={app_template_contains_nonce:!1,csp:{mode:"auto",directives:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1},reportOnly:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1}},csrf_check_origin:!0,track_server_fetches:!1,embedded:!1,env_public_prefix:"PUBLIC_",env_private_prefix:"",hooks:null,preload_strategy:"modulepreload",root:w,service_worker:!1,templates:{app:({head:n,body:t,assets:e,nonce:g,env:s})=>`<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>コミュニティチェーン - ICP活動管理アプリケーション</title>
  <link rel="icon" href="/favicon.ico">
  `+n+`
</head>
<body>
  <div>`+t+`</div>
</body>
</html>
`,error:({status:n,message:t})=>`<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>`+t+`</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">`+n+`</span>
			<div class="message">
				<h1>`+t+`</h1>
			</div>
		</div>
	</body>
</html>
`},version_hash:"n3pdoe"};function q(){return{}}export{u as a,_ as b,P as c,O as d,S as e,q as g,j as o,b as p,U as r,I as s};
