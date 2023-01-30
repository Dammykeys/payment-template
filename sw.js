//instal service worker
self.addEventListener("install", e => {
    e.waitUntil(
        //create cache called static
        caches.open("static").then(cache => {
            //upload into cache
            return cache.addAll([
                "./",
                "./css/style.css",
                "./js/init.js",
                "./images/background1.jpg",
                "./images/background2.jpg",
                "./images/background3.jpg",
                "./images/dammykeys04_logo.png",
                "./images/dammykeys04.png"
            ]).then(() => self.skipWaiting());
        })
    );
})

self.addEventListener("fetch", e => {
    e.respondWith(
        //create cache called static
        caches.match(e.request).then(response => {
            //upload into cache
            return response || fetch(e.request);
        })
    );
})