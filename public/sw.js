const VERSION = 1;
const STATIC_CACHE = 'offline-cache-v' + VERSION;

self.addEventListener('install', event => {
    console.log("SW Installed");
    event.waitUntil(
        fetch('/assets.json').then(res => {
            return res.json();
        }).then(links => {
            return caches.open(STATIC_CACHE).then(cache => {
                return cache.addAll(links);
            })
        })
    );
});

self.addEventListener('activate', event => {
    console.log("SW Activated");
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== STATIC_CACHE).map(name => {
                    return caches.delete(name);
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request).then(fetchRes => {
                return caches.open(STATIC_CACHE).then(cache => {
                    cache.put(event.request.url, fetchRes.clone());
                    return fetchRes;
                })
            });
        }).catch(() => {
            return caches.match('/offline');
        })
    );
});