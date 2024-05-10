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
    `${process.env.REACT_APP_API_URL}posts`,
    `${process.env.REACT_APP_API_URL}category/2`,
    `${process.env.REACT_APP_API_URL}category/3`,
    `${process.env.REACT_APP_API_URL}category/4`,
    `${process.env.REACT_APP_API_URL}category/5`,
    `${process.env.REACT_APP_API_URL}category/6`,
    `${process.env.REACT_APP_API_URL}category/7`,
    `${process.env.REACT_APP_API_URL}category/8`,
    `${process.env.REACT_APP_API_URL}category/9`,
    `${process.env.REACT_APP_API_URL}category/10`,
    'https://pixelgrade.com/wp-content/uploads/2020/05/Bistro-La-Noi-Website.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e1faf831e0b0b52a7c997b4/1603307748935-P5YU2P75JDDGMLTN65RH/Jennifer+Estacio+Flipp+Family',
    'https://pixelgrade.com/wp-content/uploads/2020/02/Creating-true-fluid-web-typography-to-improve-our-processes.jpg',
    "https://starter.pixelgrade.com/julialt/wp-content/uploads/sites/6/2021/11/julia_about_photo_2.png",
    "https://starter.pixelgrade.com/julia-lt/wp-content/uploads/sites/6/2022/04/26197193421_c89aefafb5_o.jpg",
    "https://starter.pixelgrade.com/julia-lt/wp-content/uploads/sites/6/2022/04/26170990602_781f7fcea0_o.jpg"
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

                return fetch(event.request);
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
        icon: "http://45.155.169.51/PWA-Blog/logo192.png",
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
