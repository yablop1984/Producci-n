
const CACHE_NAME = "bugel-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/empleados.csv",
  "/proyectos.csv",
  "/rutas_maquinas.csv"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
