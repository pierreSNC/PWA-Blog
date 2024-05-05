import { precacheAndRoute } from "workbox-precaching";

const PREFIX = 'V8';
const CACHES_ASSETS = [
    '/',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    '/static/css/main.chunk.css',
    '/favicon.ico',
    '/logo192.png',
    '/img/newsletter.png',
    '/img/footer-light.png',
    '/img/footer-dark.png',
    '/img/favicon.png',
    'http://localhost:3000/posts',
    'http://localhost:3000/category/2',
    'http://localhost:3000/category/3',
    'http://localhost:3000/category/4',
    'http://localhost:3000/category/5',
    'http://localhost:3000/category/6',
    'http://localhost:3000/category/7',
    'http://localhost:3000/category/8',
    'http://localhost:3000/category/9',
    'http://localhost:3000/category/10',
    'https://pixelgrade.com/wp-content/uploads/2020/05/Bistro-La-Noi-Website.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e1faf831e0b0b52a7c997b4/1603307748935-P5YU2P75JDDGMLTN65RH/Jennifer+Estacio+Flipp+Family',
    'https://pixelgrade.com/wp-content/uploads/2020/02/Creating-true-fluid-web-typography-to-improve-our-processes.jpg',
    // 'https://assets-global.website-files.com/649d7588109f54a3920257c1/64bf7c2f97b2db57fab04c32_5fda0332fe4b4b144dd329b8_modern-man-working-remotely-on-a-computer-from-hom-KCVNRZB-min.jpeg',
    // 'https://ideat.fr/wp-content/thumbnails/uploads/sites/3/2023/02/96-singulier_octobre_2022-24102022-05143-enhanced-2-scaled-tt-width-768-height-492-crop-1-bgcolor-ffffff.jpg',
    // 'https://www.buchmesse.de/files/styles/crop_image/public/media/image/MHillmer-JKlaus_%C2%A9Gregor-Thorand_catchingsmiles-net_2000.jpg?itok=Ev3OYV4x'

];

/* eslint-disable-next-line no-restricted-globals */
precacheAndRoute(self.__WB_MANIFEST);

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', event => {
    console.log(`sw ${PREFIX} installing…`);

    event.waitUntil(
        caches.open(PREFIX)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(CACHES_ASSETS);
            })
            .catch(error => {
                console.error('Failed to open cache', error);
            })
    );

    /* eslint-disable-next-line no-restricted-globals */
    self.skipWaiting();
});


/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('activate', event => {
    console.log(`sw ${PREFIX} now ready to handle fetches!`);
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }


                // http://localhost:3000/posts

                // let img = 'https://pixelgrade.com/wp-content/uploads/2020/05/Bistro-La-Noi-Website.jpg';
                // caches.open(PREFIX)
                //     .then(cache => {
                //         console.log('Opened cache');
                //         console.log('test')
                //         console.log(event.request.url);
                //         // return cache.add(img);
                //     })
                //     .catch(error => {
                //         console.error('Failed to open cache', error);
                //     })
                return fetch(event.request);
                // .catch(() => {
                //     console.log(event.request.mode);
                //     if (event.request.mode === 'navigate' || event.request.headers.get("accept").includes("text/html")) {
                //         return caches.match('/');
                //     } else if (event.request.destination === 'style') {
                //         return caches.match('/static/css/main.chunk.css');
                //     } else if (event.request.destination === 'script') {
                //         return caches.match('/static/js/main.chunk.js');
                //     }
                //     // Retourne une réponse 404 générique pour les autres cas non gérés
                //     return new Response('Resource not available', { status: 404 });
                // });
            })
    );
});


/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Push Received...");
    /* eslint-disable-next-line no-restricted-globals */
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: "http://image.ibb.co/frYOFd/tmlogo.png",
        data: { url: data.url }
    });
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("notificationclick", (event) => {
    console.log("On notification click:");
    event.waitUntil(
        /* eslint-disable-next-line no-restricted-globals */
        self.clients.matchAll({ type: "window" })
            .then((clientList) => {
                for (const client of clientList) {
                    if (client.url === "/" && "focus" in client) return client.focus();
                }
                /* eslint-disable-next-line no-restricted-globals */
                if (self.clients.openWindow) return self.clients.openWindow(event.notification.data.url);
            })
    );
});
