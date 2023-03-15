const staticCacheName = 'site-static';
const assets = [
    "/",
    "/index.html",
    "/js/app.js",
    "/js/scripts.js",
    "/js/materialize.css",
    "/css/style.css",
    "/css/materialize.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://code.jquery.com/jquery-2.1.1.min.js",
    "/images/canon.jpg",
    "/images/epson.jpg",
    "/images/scan.jpg",
    "/images/dammykeys04_logo.png",
    "/images/dammykeys04.png",
];

//instal service worker
self.addEventListener("install", evt => {
    evt.waitUntil(
        //create cache called dynamic
        caches.open(staticCacheName).then(cache => {
            //upload into cache
            cache.addAll(assets);
            // .then(() => self.skipWaiting());
        })
    );
    console.log('wetin be this');
});

self.addEventListener("fetch", e => {
    e.respondWith(
        //create cache called dynamic
        caches.match(e.request).then(response => {
            //upload into cache
            return response || fetch(e.request);
        })
    );
});