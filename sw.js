if(!self.define){let e,r={};const i=(i,f)=>(i=new URL(i+".js",f).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(f,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let o={};const s=e=>i(e,t),c={module:{uri:t},exports:o,require:s};r[t]=Promise.all(f.map((e=>c[e]||s(e)))).then((e=>(n(...e),o)))}}define(["./workbox-72b3af16"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"angular10-project/3rdpartylicenses.txt",revision:"01513fef0aef2a89a36ffb205fbfefbc"},{url:"angular10-project/favicon.ico",revision:"1fbdf735a0dd3e8321c5e0828a45a4d5"},{url:"angular10-project/index.html",revision:"7bbd6d84b1ae1801933b8d782d6dcda2"},{url:"angular10-project/main.9fbc23a607e0e400.js",revision:"0426e9cd3c77f0f9a91493642e559272"},{url:"angular10-project/polyfills.a91e8e9b1488ad1e.js",revision:"6fc07f406659f55136f4e9128eb22d4e"},{url:"angular10-project/runtime.a0ca2679178db9f7.js",revision:"cf40f615dbb8b225e87998f12f7c038f"},{url:"angular10-project/styles.ef46db3751d8e999.css",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
