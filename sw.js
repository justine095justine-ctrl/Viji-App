// VIJI SERVICE WORKER - Ili ifanye kazi bila net
const CACHE_NAME = "viji-cache-v1";
const filesToCache = [
  "index.html",
  "viji-play.html", 
  "viji-talent.html",
  "viji-sheria.html",
  "viji-system.js",
  "manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(filesToCache)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});
