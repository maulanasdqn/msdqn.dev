const CACHE_NAME = 'personal-website-v3';
const STATIC_CACHE_NAME = 'static-v3';
const RUNTIME_CACHE_NAME = 'runtime-v3';
const IMAGES_CACHE_NAME = 'images-v3';

const STATIC_CACHE = [
  '/',
  '/favicon.svg',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
  '/resume.pdf'
];

const FONT_CACHE = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com'
];

const API_CACHE = [
  '/api/home',
  '/api/about',
  '/api/experience',
  '/api/project'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE_NAME)
        .then((cache) => cache.addAll(STATIC_CACHE)),
      caches.open(RUNTIME_CACHE_NAME)
        .then((cache) => cache.addAll(API_CACHE.map(url => new Request(url))))
    ]).then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const expectedCaches = [STATIC_CACHE_NAME, RUNTIME_CACHE_NAME, IMAGES_CACHE_NAME];
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => !expectedCaches.includes(cacheName))
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - implement stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  
  // Handle different types of requests with different strategies
  if (url.origin === self.location.origin) {
    // Static assets - cache first
    if (STATIC_CACHE.some(path => url.pathname === path)) {
      event.respondWith(cacheFirst(event.request, STATIC_CACHE_NAME));
      return;
    }
    
    // Images - cache first with long expiry
    if (event.request.destination === 'image') {
      event.respondWith(cacheFirst(event.request, IMAGES_CACHE_NAME));
      return;
    }
    
    // API requests - stale while revalidate
    if (url.pathname.startsWith('/api/')) {
      event.respondWith(staleWhileRevalidate(event.request, RUNTIME_CACHE_NAME));
      return;
    }
    
    // CSS and JS assets - cache first
    if (url.pathname.startsWith('/_astro/') || url.pathname.endsWith('.css') || url.pathname.endsWith('.js')) {
      event.respondWith(cacheFirst(event.request, STATIC_CACHE_NAME));
      return;
    }
    
    // Pages - network first with cache fallback
    if (event.request.destination === 'document') {
      event.respondWith(networkFirst(event.request, RUNTIME_CACHE_NAME));
      return;
    }
  }
  
  // Fonts - cache first
  if (FONT_CACHE.some(domain => url.origin.includes(domain))) {
    event.respondWith(cacheFirst(event.request, RUNTIME_CACHE_NAME));
    return;
  }
  
  // Default - network with cache fallback
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

// Cache first strategy
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return new Response('Offline', { status: 503 });
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);
  
  const fetchPromise = fetch(request).then(response => {
    if (response.status === 200) {
      const cache = caches.open(cacheName);
      cache.then(c => c.put(request, response.clone()));
    }
    return response;
  });
  
  return cached || fetchPromise;
}

// Network first strategy
async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    return cached || caches.match('/');
  }
} 