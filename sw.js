// Brandon Media Service Worker - Performance Optimization
// Cyberpunk-themed caching strategy for faster deployment

const CACHE_NAME = 'brandon-media-v1.2';
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/images/brenda-profile.jpg',
  '/images/brenda.jpg'
];

const EXTENDED_RESOURCES = [
  '/images/Media campaigns.jpeg',
  '/images/branding.jpeg',
  '/images/Social-Media-Management-Tools.png',
  '/images/podcast.jpeg',
  '/images/Cooperate MC Services.jpeg',
  '/images/social-Media.jpeg',
  '/images/branding.png',
  '/images/podcast 1.jpeg'
];

// Install event - Cache critical resources
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('💾 Caching critical resources');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        console.log('⚡ Service Worker installed successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Service Worker installation failed:', error);
      })
  );
});

// Activate event - Clean old caches
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('🗑️ Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - Serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip external domains
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from cache
          return cachedResponse;
        }
        
        // Network request with caching
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone response for caching
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Offline fallback
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Background sync for enhanced performance
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-cache') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.addAll(EXTENDED_RESOURCES);
        })
        .then(() => {
          console.log('🔄 Background caching completed');
        })
    );
  }
});

// Push notifications (for future features)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Brandon Media Update Available',
    icon: '/images/brenda-profile.jpg',
    badge: '/images/brenda-profile.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/images/brenda-profile.jpg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/images/brenda-profile.jpg'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Brandon Media', options)
  );
});

console.log('🌟 Brandon Media Service Worker loaded - Cyberpunk caching active!');