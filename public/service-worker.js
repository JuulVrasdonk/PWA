const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const CORE_ASSETS = [
  '/offline',
  '/js/script.js',
  '/style.css',
  '/assets/Nachtwacht.jpeg',
  '/assets/fonts/Rijksmuseum-Normal.woff',
  '/assets/fonts/Rijksmuseum-Bold.woff',
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request
  // console.log("Fetching:" + req.url)
  
  // show cached request from cache
  event.respondWith(
      caches.match(req)
          .then(cachedRes => { 
              if (cachedRes) {
                  return cachedRes
              }
              return fetch(req)
                  .then((fetchRes) =>  fetchRes)
                  .catch((err) => {
                      return caches.open(PRECACHE)
                      .then(cache => cache.match('/offline'))})
      })
  )
})