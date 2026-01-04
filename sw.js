const cacheName = 'mon-app-v1';
const assets = [
  './',
  './BGS_Travail_1.0.html',
  './style.css',
  './script.js',
  './icon-192.png'
];

// Installation : on met les fichiers en cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Utilisation : on sert les fichiers du cache si on est hors-ligne
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
