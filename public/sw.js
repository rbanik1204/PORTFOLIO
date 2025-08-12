const CACHE_NAME = 'ratul-portfolio-v2';
const urlsToCache = [
  '/PORTFOLIO/favicon.svg',
  '/PORTFOLIO/manifest.json',
  '/PORTFOLIO/ratul_resume.pdf'
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
        } catch (e) {}
      })
    );
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : Promise.resolve())));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const networkResp = await fetch(req);
      if (networkResp && networkResp.ok) cache.put(req, networkResp.clone()).catch(() => {});
      return networkResp;
    } catch (e) {
      const cached = await cache.match(req);
      if (cached) return cached;
      return cache.match('/PORTFOLIO/favicon.svg') || Response.error();
    }
  })());
});
