var __wpo = {"assets":{"main":["/crcmaker/main.css","/crcmaker/main.b9b76c5c6e0e9204a86c.js","/crcmaker/main.b9b76c5c6e0e9204a86c.js.LICENSE.txt","/crcmaker/"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"1bd2d3f58f5a47b6af450937a4f346d9ba26807f":"/crcmaker/main.css","bc6a1d5afb8586868c7a298e3db2d9074fb3f1f8":"/crcmaker/main.b9b76c5c6e0e9204a86c.js","cf5c173b4e3157722e44a0aed3f439ceefbcf095":"/crcmaker/main.b9b76c5c6e0e9204a86c.js.LICENSE.txt","77f9bcdf92f3fb0b5b351f1c672de8e1aeb65e29":"/crcmaker/"},"strategy":"changed","responseStrategy":"cache-first","version":"4/29/2022, 1:59:02 AM","name":"webpack-offline","pluginVersion":"5.1.0","relativePaths":false};

(()=>{var e={634:(e,n,t)=>{"use strict";var r,i,o;if(r=ExtendableEvent.prototype.waitUntil,i=FetchEvent.prototype.respondWith,o=new WeakMap,ExtendableEvent.prototype.waitUntil=function(e){var n=this,t=o.get(n);if(!t)return t=[Promise.resolve(e)],o.set(n,t),r.call(n,Promise.resolve().then((function e(){var r=t.length;return Promise.all(t.map((function(e){return e.catch((function(){}))}))).then((function(){return t.length!=r?e():(o.delete(n),Promise.all(t))}))})));t.push(Promise.resolve(e))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),i.call(this,e)},void 0===a)var a=!1;function u(e,n){return caches.match(e,{cacheName:n}).then((function(t){return s(t)?t:c(t).then((function(t){return caches.open(n).then((function(n){return n.put(e,t)})).then((function(){return t}))}))})).catch((function(){}))}function s(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function c(e){return s(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then((function(n){return new Response(n,{headers:e.headers,status:e.status})}))}function f(e,n){n.forEach((function(e){}))}!function(e,n){var t=n.cacheMaps,r=n.navigationPreload,i=e.strategy,o=e.responseStrategy,a=e.assets,s=e.hashesMap,h=e.externals,l=e.prefetchRequest||{credentials:"same-origin",mode:"cors"},d=e.name,v=e.version,p=d+":"+v,m=d+"$preload",g="__offline_webpack__data";Object.keys(a).forEach((function(e){a[e]=a[e].map((function(e){var n=new URL(e,location);return n.hash="",-1===h.indexOf(e)&&(n.search=""),n.toString()}))})),s=Object.keys(s).reduce((function(e,n){var t=new URL(s[n],location);return t.search="",t.hash="",e[n]=t.toString(),e}),{}),h=h.map((function(e){var n=new URL(e,location);return n.hash="",n.toString()}));var w=[].concat(a.main,a.additional,a.optional);function q(n){var t=a[n];return caches.open(p).then((function(r){return R(r,t,{bust:e.version,request:l,failAll:"main"===n})})).then((function(){f("Cached assets: "+n,t)})).catch((function(e){throw e}))}function P(n){return caches.keys().then((function(e){for(var n=e.length,t=void 0;n--&&0!==(t=e[n]).indexOf(d););if(t){var r=void 0;return caches.open(t).then((function(e){return r=e,e.match(new URL(g,location).toString())})).then((function(e){if(e)return Promise.all([r,r.keys(),e.json()])}))}})).then((function(t){if(!t)return q(n);var r=t[0],i=t[1],o=t[2],u=o.hashmap,c=o.version;if(!o.hashmap||c===e.version)return q(n);var h=Object.keys(u).map((function(e){return u[e]})),d=i.map((function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()})),v=a[n],m=[],g=v.filter((function(e){return-1===d.indexOf(e)||-1===h.indexOf(e)}));Object.keys(s).forEach((function(e){var n=s[e];if(-1!==v.indexOf(n)&&-1===g.indexOf(n)&&-1===m.indexOf(n)){var t=u[e];t&&-1!==d.indexOf(t)?m.push([t,n]):g.push(n)}})),f("Changed assets: "+n,g),f("Moved assets: "+n,m);var w=Promise.all(m.map((function(e){return r.match(e[0]).then((function(n){return[e[1],n]}))})));return caches.open(p).then((function(t){var r=w.then((function(e){return Promise.all(e.map((function(e){return t.put(e[0],e[1])})))}));return Promise.all([r,R(t,g,{bust:e.version,request:l,failAll:"main"===n,deleteFirst:"main"!==n})])}))}))}function x(){return caches.keys().then((function(e){var n=e.map((function(e){if(0===e.indexOf(d)&&0!==e.indexOf(p))return caches.delete(e)}));return Promise.all(n)}))}function y(){return caches.open(p).then((function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:s}));return n.put(new URL(g,location).toString(),t)}))}self.addEventListener("install",(function(e){var n=void 0;n="changed"===i?P("main"):q("main"),e.waitUntil(n)})),self.addEventListener("activate",(function(e){var n=function(){if(!a.additional.length)return Promise.resolve();var e=void 0;e="changed"===i?P("additional"):q("additional");return e.catch((function(e){}))}();n=(n=(n=n.then(y)).then(x)).then((function(){if(self.clients&&self.clients.claim)return self.clients.claim()})),r&&self.registration.navigationPreload&&(n=Promise.all([n,self.registration.navigationPreload.enable()])),e.waitUntil(n)})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method&&("only-if-cached"!==e.request.cache||"same-origin"===e.request.mode)){var n=new URL(e.request.url);n.hash="";var i=n.toString();-1===h.indexOf(i)&&(n.search="",i=n.toString());var a=-1!==w.indexOf(i),s=i;if(!a){var c=function(e){var n=e.url,r=new URL(n),i=void 0;i=function(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}(e)?"navigate":r.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<t.length;o++){var a=t[o];if(a&&(!a.requestTypes||-1!==a.requestTypes.indexOf(i))){var u=void 0;if((u="function"==typeof a.match?a.match(r,e):n.replace(a.match,a.to))&&u!==n)return u}}}(e.request);c&&(s=c,a=!0)}if(a){var f=void 0;f="network-first"===o?function(e,n,t){return O(e).then((function(e){if(e.ok)return e;throw e})).catch((function(e){return u(t,p).then((function(n){if(n)return n;if(e instanceof Response)return e;throw e}))}))}(e,0,s):function(e,n,t){return function(e){if(r&&"function"==typeof r.map&&e.preloadResponse&&"navigate"===e.request.mode){var n=r.map(new URL(e.request.url),e.request);n&&function(e,n){var t=new URL(e,location),r=n.preloadResponse;U.set(r,{url:t,response:r});var i=function(){return U.has(r)},o=r.then((function(e){if(e&&i()){var n=e.clone();return caches.open(m).then((function(e){if(i())return e.put(t,n).then((function(){if(!i())return caches.open(m).then((function(e){return e.delete(t)}))}))}))}}));n.waitUntil(o)}(n,e)}}(e),u(t,p).then((function(r){if(r)return r;var i=fetch(e.request).then((function(r){return r.ok?(t===n&&(i=r.clone(),o=caches.open(p).then((function(e){return e.put(n,i)})).then((function(){})),e.waitUntil(o)),r):r;var i,o}));return i}))}(e,i,s),e.respondWith(f)}else{if("navigate"===e.request.mode&&!0===r)return void e.respondWith(O(e));if(r){var l=function(e){var n=new URL(e.request.url);if(!(self.registration.navigationPreload&&r&&r.test&&r.test(n,e.request)))return;var t=function(e){if(!U)return;var n=void 0,t=void 0;if(U.forEach((function(r,i){r.url.href===e.href&&(n=r.response,t=i)})),n)return U.delete(t),n}(n),i=e.request;if(t)return e.waitUntil(caches.open(m).then((function(e){return e.delete(i)}))),t;return u(i,m).then((function(n){return n&&e.waitUntil(caches.open(m).then((function(e){return e.delete(i)}))),n||fetch(e.request)}))}(e);if(l)return void e.respondWith(l)}}}})),self.addEventListener("message",(function(e){var n=e.data;if(n&&"skipWaiting"===n.action)self.skipWaiting&&self.skipWaiting()}));var U=new Map;function R(e,n,t){n=n.slice();var r=t.bust,i=!1!==t.failAll,o=!0===t.deleteFirst,a=t.request||{credentials:"omit",mode:"cors"},u=Promise.resolve();return o&&(u=Promise.all(n.map((function(n){return e.delete(n).catch((function(){}))})))),Promise.all(n.map((function(e){var n,t,i;return r&&(t=r,i=-1!==(n=e).indexOf("?"),e=n+(i?"&":"?")+"__uncache="+encodeURIComponent(t)),fetch(e,a).then(c).then((function(e){return e.ok?{response:e}:{error:!0}}),(function(){return{error:!0}}))}))).then((function(t){return i&&t.some((function(e){return e.error}))?Promise.reject(new Error("Wrong response status")):(i||(t=t.filter((function(e,t){return!e.error||(n.splice(t,1),!1)}))),u.then((function(){var r=t.map((function(t,r){var i=t.response;return e.put(n[r],i)}));return Promise.all(r)})))}))}function O(e){return e.preloadResponse&&!0===r?e.preloadResponse.then((function(n){return n||fetch(e.request)})):fetch(e.request)}}(__wpo,{loaders:{},cacheMaps:[],navigationPreload:!1}),t(164)},164:()=>{}},n={};(function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports})(634)})();