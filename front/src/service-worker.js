import { precacheAndRoute } from "workbox-precaching";

const PREFIX = 'V6';
const CACHES_ASSETS = [
    '/', // alias pour index.html
    '/static/js/bundle.js', // Exemple pour un script compilé par Create React App
    '/static/js/0.chunk.js', // Autres dépendances
    '/static/js/main.chunk.js', // Script principal
    '/static/css/main.chunk.css', // CSS principal
    '/favicon.ico',
    '/logo192.png',
    'http://localhost:3000/posts',

    // Ajoutez d'autres ressources et routes nécessaires
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

                let img = 'https://pixelgrade.com/wp-content/uploads/2020/05/Bistro-La-Noi-Website.jpg';
                caches.open(PREFIX)
                    .then(cache => {
                        console.log('Opened cache');
                        console.log('test')
                        console.log(event.request.url);
                        return cache.add(img);
                    })
                    .catch(error => {
                        console.error('Failed to open cache', error);
                    })
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
