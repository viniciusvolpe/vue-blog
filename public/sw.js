const assetCache = "static-cache";
const dataCache = "data-cache";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(assetCache).then(cache => {
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
  console.log(event.request.url);
  if (event.request.url.match("vuetutorial-34ed3")) {
    console.log("data");
    event.respondWith(
      caches.open(dataCache).then(cache => {
        return fetch(event.request)
          .then(response => {
            cache.put(event.request, response.clone());
            return response;
          })
          .catch(error => console.error(error));
      })
    );
  } else {
    console.log("assets");
    event.respondWith(
      caches.open(assetCache).then(cache => {
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
  }
});
