const OFFLINE_VERSION = 1;

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "bsccsitnepal-offline-pages";

const OFFLINE_URL = "offline/index.html";

self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
});

self.addEventListener('install', async (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE);
            // Setting {cache: 'reload'} in the new request ensures that the
            // response isn't fulfilled from the HTTP cache; i.e., it will be
            // from the network.
            await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
        })()
    );
    // Force the waiting service worker to become the active service worker.
    // self.skipWaiting();
});

if (workbox.navigationPreload.isSupported()) {
    workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
    new RegExp('/*'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: CACHE
    })
);


self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            // Enable navigation preload if it's supported.
            // See https://developers.google.com/web/updates/2017/02/navigation-preload
            if ("navigationPreload" in self.registration) {
                await self.registration.navigationPreload.enable();
            }
        })()
    );

    // Tell the active service worker to take control of the page immediately.
    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    // Only call event.respondWith() if this is a navigation request
    // for an HTML page.
    if (event.request.mode === "navigate") {
        event.respondWith(
            (async () => {
                try {
                    // First, try to use the navigation preload response if it's
                    // supported.
                    const preloadResponse = await event.preloadResponse;
                    if (preloadResponse) {
                        return preloadResponse;
                    }

                    // Always try the network first.
                    const networkResponse = await fetch(event.request);
                    return networkResponse;
                } catch (error) {
                    // catch is only triggered if an exception is thrown, which is
                    // likely due to a network error.
                    // If fetch() returns a valid HTTP response with a response code in
                    // the 4xx or 5xx range, the catch() will NOT be called.
                    console.log("Fetch failed; returning offline page instead.", error);

                    const cache = await caches.open(CACHE);
                    const cachedResponse = await cache.match(OFFLINE_URL);
                    return cachedResponse;
                }
            })()
        );
    }
});


// self.addEventListener('fetch', (event) => {
//     if (event.request.mode === 'navigate') {
//         event.respondWith((async () => {
//             try {
//                 const preloadResp = await event.preloadResponse;

//                 if (preloadResp) {
//                     return preloadResp;
//                 }

//                 const networkResp = await fetch(event.request);
//                 return networkResp;
//             } catch (error) {
//                 const cache = await caches.open(CACHE);
//                 const cachedResp = await cache.match(offlineFallbackPage);
//                 return cachedResp;
//             }
//         })());
//     }
// });