import {precacheAndRoute} from "workbox-precaching";

const VERSION = 'V2';

/* eslint-disable-next-line no-restricted-globals */
precacheAndRoute(self.__WB_MANIFEST);

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', event => {
    console.log(`sw ${VERSION} installing…`);
    /* eslint-disable-next-line no-restricted-globals */
    self.skipWaiting();
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('activate', event => {
    console.log(`sw ${VERSION} now ready to handle fetches!`);
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Push Recieved...");
    /* eslint-disable-next-line no-restricted-globals */
    self.registration.showNotification(data.title, {
        body: "Notified by Traversy Media!",
        icon: "http://image.ibb.co/frYOFd/tmlogo.png",
        data: {
            url: 'http://localhost/notification/client/'
        }
    });
});