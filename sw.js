const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/script.js',
    '/css/materialize.css',
    '/css/style.css',
    '/js/materialize.js',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://code.jquery.com/jquery-2.1.1.min.js',
    '/images/canon.jpg',
    '/images/epson.jpg',
    '/images/scan.jpg',
    '/images/dammykeys04_logo.png',
    '/images/dammykeys04.png',
    '/images/WhatsApp.png',
    '/images/email.png',
    '/images/twitter.png',
    '/manifest.json',
    '/src/receipt.html',
    '/games/index.html',
    '/games/Numberguessinggamesyle.css',
    '/games/Numberguessinggamescript.js'
];

//instal service worker
self.addEventListener("install", evt => {
    // evt.waitUntil(
    //     //create cache called site-static
    //     caches.open(staticCacheName).then(cache => {
    //         //upload into cache
    //         console.log('caching assets' + ' ' + assets);
    //         cache.addAll(assets).then(() => self.skipWaiting());
    //     })
    // );



    evt.waitUntil(caches.open(staticCacheName).then(async (cache) => {
        let ok = [];

        // console.log('ServiceWorker: Caching files:', assets.length, assets);
        try {
            ok = await cache.addAll(assets);
        } catch (err) {
            for await (let i of assets) {
                try {
                    ok = await cache.add(i);
                } catch (err) {
                }
            }
        }

        return ok;
    }));
});

self.addEventListener("fetch", e => {
    e.respondWith(
        //create cache called site-static
        caches.match(e.request).then(response => {
            //upload into cache
            return response || fetch(e.request);
        })
    );
});