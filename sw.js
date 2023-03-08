//instal service worker
self.addEventListener("install", e => {
    e.waitUntil(
        //create cache called dynamic
        caches.open("dynamic").then(cache => {
            //upload into cache
            return cache.addAll([
                "./",
                "./css/style.css",
                "./js/init.js",
                "./images/canon.jpg",
                "./images/epson.jpg",
                "./images/scan.jpg",
                "./images/dammykeys04_logo.png",
                "./images/dammykeys04.png",
                "./src/receipt.html"
            ]).then(() => self.skipWaiting());
        })
    );
})

self.addEventListener("fetch", e => {
    e.respondWith(
        //create cache called dynamic
        caches.match(e.request).then(response => {
            //upload into cache
            return response || fetch(e.request);
        })
    );
})