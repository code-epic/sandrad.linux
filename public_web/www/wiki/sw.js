
self.addEventListener('install', e=>{
  e.waitUntil(caches.open('wiki-arch-v1').then(cache=>cache.addAll([
    '/index.html','/assets/css/style.css','/assets/js/app.js','/pages/index.html'
  ])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(resp=>resp||fetch(e.request)));
});
