const CACHE_NAME = "fusioner-cache-v1";
const urlsToCache = [ 
    '/index.html', 
    '/offline.html',
];

// Install Service Worker and Cache Files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching assets');
                return cache.addAll(urlsToCache);
            })
            .catch((error) => console.error('Failed to open cache:', error))
    );
    self.skipWaiting(); // Activate the service worker immediately after installation
});

// Listen for Fetch Events and Serve Cached Content
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return the cached response if found, otherwise fetch from the network
                return response || fetch(event.request);
            })
            .catch(() => caches.match('/offline.html')) // Serve offline page if fetch fails
    );
});

// Activate Service Worker and Remove Old Caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    
    event.waitUntil(
        caches.keys().then((cacheNames) => 
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
    self.clients.claim(); // Take control of all clients immediately
});
