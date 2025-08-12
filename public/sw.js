const CACHE_NAME = 'ratul-portfolio-v2';
const urlsToCache = [
  // Cache only assets that actually exist
  '/portfolio/favicon.svg',
  '/portfolio/manifest.json',
  '/portfolio/ratul_resume.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(
      urlsToCache.map(async (url) => {
        try {
          const resp = await fetch(url, { cache: 'no-cache' });
          if (resp && resp.ok) {
            await cache.put(url, resp.clone());
          }
        } catch (e) {
          // Ignore individual failures so install doesn't crash
        }
      })
    );
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : Promise.resolve()))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) {
    return; // let non-GET or cross-origin requests pass through
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Try network first, then fall back to cache
    try {
      const networkResp = await fetch(req);
      // Optionally update cache for static files
      if (networkResp && networkResp.ok) {
        cache.put(req, networkResp.clone()).catch(() => {});
      }
      return networkResp;
    } catch (e) {
      const cached = await cache.match(req);
      if (cached) return cached;
      // Last resort: fallback to favicon to avoid total failure
      return cache.match('/portfolio/favicon.svg') || Response.error();
    }
  })());
});
