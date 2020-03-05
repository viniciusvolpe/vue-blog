const cacheName = "vue-blog";

self.addEventListener("install", event => {
  console.log("sw installed", event);
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        "/images/android-chrome-192x192.png",
        "/images/android-chrome-512x512.png",
        "/images/apple-touch-icon.png",
        "/images/favicon-16x16.png",
        "/images/favicon-32x32.png",
        "/images/favicon.ico",
        "/images/mstile-150x150.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(response => {
        return (
          response ||
          fetch(event.request).then(response => {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
