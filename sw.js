/** An empty service worker! */
self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open('the-magic-cache').then(function(cache){
            return cache.addAll([
                '/index.html',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});