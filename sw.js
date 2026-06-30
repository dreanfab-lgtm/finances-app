/* Service Worker — Finances PWA
   Stratégie : cache-first pour l'app shell, network-first pour les CDN
*/

const CACHE_VERSION = 'finances-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json'
];

// Install : mise en cache de l'app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate : nettoyage des vieux caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch : cache-first pour le shell, network-first pour le reste
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Ignore non-GET
  if (event.request.method !== 'GET') return;

  // App shell : cache-first
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          // Cache la réponse pour les prochaines fois
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => caches.match('./index.html'));
      })
    );
    return;
  }

  // CDN (Chart.js, fonts) : network-first avec fallback cache
  event.respondWith(
    fetch(event.request).then((response) => {
      if (response && response.status === 200) {
        const clone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => caches.match(event.request))
  );
});
