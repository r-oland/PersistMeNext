if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-4d0bff02"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"AOW4oYLFAzbg65_SSJm6h"},{url:"/_next/static/AOW4oYLFAzbg65_SSJm6h/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/AOW4oYLFAzbg65_SSJm6h/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/AOW4oYLFAzbg65_SSJm6h/pages/_app.js",revision:"73b24e08b135e7ed16329f68d9b5b31d"},{url:"/_next/static/AOW4oYLFAzbg65_SSJm6h/pages/_error.js",revision:"8709edf8444794a470eb1cb29fb13af9"},{url:"/_next/static/AOW4oYLFAzbg65_SSJm6h/pages/index.js",revision:"7ba6cac1e6c14cc0d72e2d8eef24f4ea"},{url:"/_next/static/AOW4oYLFAzbg65_SSJm6h/pages/login.js",revision:"f7b418bed1fd4bd116397a15ead64eef"},{url:"/_next/static/AOW4oYLFAzbg65_SSJm6h/pages/progress.js",revision:"c82efe84acef1595f945e7d3aed7df3b"},{url:"/_next/static/AOW4oYLFAzbg65_SSJm6h/pages/settings.js",revision:"f03b1abb98bf7fa6fcd809505a1f8928"},{url:"/_next/static/AOW4oYLFAzbg65_SSJm6h/pages/week.js",revision:"6ed0e1a0d80f0dbc3792776d5f26af82"},{url:"/_next/static/chunks/05d954cf.abc409cfc3477fbd3d73.js",revision:"e5d176b31ed4d12002d09c87e7548e61"},{url:"/_next/static/chunks/484bcb1e.4240ce3b63dbd7e350a1.js",revision:"fbb747a9f3f0a28e67d859d8aeb57a11"},{url:"/_next/static/chunks/64477fdae2781aaf5655a9032cf52833ccd25bd6.129fa91bdc7d903eece3.js",revision:"7141c0e70ceaa209995d926bb08864be"},{url:"/_next/static/chunks/67bd2a796e0fe1f7afd942593167988d5d656392.30eb5ea15ef35b7071f2.js",revision:"d3d9bd1d9be27678e2ad26028bab3cce"},{url:"/_next/static/chunks/73d33925d08de7a5f338662ec4f4665e4614bd7d.3efb637492db07a6a340.js",revision:"31e99c214a2c8af9c52ab851934b2e28"},{url:"/_next/static/chunks/9eeafdb0c5fe49856485a5b2b841d7b4db60763f.38ed4438bd2ce771266a.js",revision:"b51a7ac67712fe52a20337537dbfc3eb"},{url:"/_next/static/chunks/ff239f9d.b6636129e35dd5ef1303.js",revision:"5ece5d7bfebc23242241e7ac22da98ec"},{url:"/_next/static/chunks/framework.c6faae2799416a6da8e8.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/runtime/main-3718e5520335b96c580e.js",revision:"ca733a5f2222dbad88b9c77b26b05d28"},{url:"/_next/static/runtime/polyfills-f500672a22b5a3a6edae.js",revision:"b90027b8c6dbfffa74ab23adcdfcbebe"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/icons/android-chrome-192x192.png",revision:"706ded21dd6b85daeb806a452a3b92c4"},{url:"/icons/apple-touch-icon.png",revision:"2184d11d09cbad67e8ec6c647f8fa9be"},{url:"/icons/favicon.ico",revision:"88d508b02c4bdc0ce5dda661e8ea4b5e"},{url:"/icons/icon-512x512.png",revision:"09fb7abd17fcc004d61e6bc8dfe7ef0a"},{url:"/manifest.json",revision:"dab821abf4ad9d9551e46ff8ca709820"},{url:"/navDesktop/calendar.svg",revision:"ac11f83a44e3360c7a4b543664138d23"},{url:"/navDesktop/progress.svg",revision:"59d8a9a98b0036003f729856c036b380"},{url:"/navDesktop/settings.svg",revision:"345243342f5926134ae33d78329d8ccd"},{url:"/navMobile/calendar.svg",revision:"c105781b51f4f168d127d9ea4e100b09"},{url:"/navMobile/progress.svg",revision:"7a1b7c569a904e8822deb9666923c6e5"},{url:"/navMobile/settings.svg",revision:"ea4375b98a7defe568c7185dd297a508"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
