if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,i,n)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return c;case"module":return f;default:return e(a)}})).then(e=>{const a=n(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/128x128.png",revision:"6279697217e3c152f8ea063a250d4dfe"},{url:"/16x16.png",revision:"fc13456cbfe3534140316e35647a6de5"},{url:"/256x256.png",revision:"aa4439f2af909406e90dd70402b957e3"},{url:"/32x32.png",revision:"24131273ce6b729c8df6d070c912e7bd"},{url:"/512x512.png",revision:"a98fbcecac50865ad71db780d85830e8"},{url:"/64x64.png",revision:"0d41ae6ffc221e4afd8b782fb2b2b706"},{url:"/_next/static/G8_rGrVH0undGcKOf3snp/_buildManifest.js",revision:"421957e06387ac67106d9f971d067f38"},{url:"/_next/static/G8_rGrVH0undGcKOf3snp/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.a09a9accc747a2e3b5af.js",revision:"4f6c32c6c70539bb1052798531d8f8d4"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.5b0e2dcf17bbc268feff.js",revision:"c9a5a8472d75b4b2b410a3f7e411f402"},{url:"/_next/static/chunks/framework.cb9d4afe4d07c46063c3.js",revision:"3307a0e03685c6c8c2162b0f54ef78b9"},{url:"/_next/static/chunks/main-c7081a45bcf9228e3a83.js",revision:"ba79c0044c75d3b82798e43eb2cf018f"},{url:"/_next/static/chunks/pages/_app-a8be39be76c9649de13d.js",revision:"0250130fd62948c5e76f07e45cb05c6d"},{url:"/_next/static/chunks/pages/_error-4f0601949c71cd429f69.js",revision:"273dcac8fdda1fa392833a393033de36"},{url:"/_next/static/chunks/pages/index-5ce70ce9ea53dca32d01.js",revision:"0831e87a31575b7fdc764a5b72d042be"},{url:"/_next/static/chunks/polyfills-72582ec57bbe34c511dc.js",revision:"66e31ef2328be7fae18408e3263d7995"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/c160eb5d29a4dea33588.css",revision:"8fd803ff10a72e22e5d5d697b10cebae"},{url:"/_next/static/media/blinker-latin-100.1a88db2ab1b62ed11c6ee81d970c4705.woff",revision:"a24d6c9d021ed490cafe20adf264f420"},{url:"/_next/static/media/blinker-latin-100.ba6b271a5ce146d88157c761d63356d4.woff2",revision:"95c26b6ec827222454fabd5a66f0fa71"},{url:"/_next/static/media/blinker-latin-200.13f317805d6bb357abebf905be528371.woff2",revision:"1c71c98610acc95eec80c209ef43cde7"},{url:"/_next/static/media/blinker-latin-200.219868adfdc88f173443ff80e83ecea8.woff",revision:"cc6f412732270395bce9cd06fb0cd07c"},{url:"/_next/static/media/blinker-latin-300.5d9e17ff3adad84aab867f2a27abbdc0.woff",revision:"6f81dc2a376a2ff0fd2a494cfcfd1e2b"},{url:"/_next/static/media/blinker-latin-300.9ea2c044fda5aba9f5d61f30a6b4089b.woff2",revision:"8c382bfe75c1f06b270ffbde3f9325e7"},{url:"/_next/static/media/blinker-latin-400.c4c0758e823647310bc16d271d325e77.woff",revision:"43fed278d5e756a61ff77e256de46434"},{url:"/_next/static/media/blinker-latin-400.ccf9af914748f2e75e4adf1f505ad9b8.woff2",revision:"212224059d066d4eb5a3711796168879"},{url:"/_next/static/media/blinker-latin-600.460d1bbb5ca1d4a345d65c26b1a78626.woff",revision:"29a3dec4c4c7becebf88034173124a15"},{url:"/_next/static/media/blinker-latin-600.5a9d45f9460614806574e2ff43e4e29a.woff2",revision:"eb41bde39268827b4f69de032fbbffea"},{url:"/_next/static/media/blinker-latin-700.3d0a6a0ad8a375365f5f2e9f953402f0.woff",revision:"ff7ddc0b432e64ff74dbe5d2b1b6cca5"},{url:"/_next/static/media/blinker-latin-700.6448dcdd9772837e05c2fdf6f9eeb966.woff2",revision:"fe067d08f60169a998a868a72317a18e"},{url:"/_next/static/media/blinker-latin-800.1c6019b59590e157ba0377cfc39377f1.woff",revision:"e8c9ec11929c37b11e892670752cc5b2"},{url:"/_next/static/media/blinker-latin-800.99cf2abc9409803cf29756dc47d2ec1f.woff2",revision:"ff0edc4238e37c74afa23a4278e5a84b"},{url:"/_next/static/media/blinker-latin-900.3a67b11b3056442b6fd2e66d8bb396af.woff",revision:"d27cafa0621682886be089dde4781a5d"},{url:"/_next/static/media/blinker-latin-900.980819d564a903cafdaa223bebfa4f13.woff2",revision:"12c1a7df6690638f4bf917f71165ed1b"},{url:"/manifest.json",revision:"efa82f68381ef395a61a6db573b6df73"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
