const CACHE_NAME = "bugel-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/logo.png",
  "/manifest.json",
  "/empleados.csv",
  "/proyectos.csv",
  "/rutas_maquinas.csv"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});