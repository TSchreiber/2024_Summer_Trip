importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.routing.registerRoute(() => true, new workbox.strategies.CacheFirst());

const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/manifest.json',
    '/service-worker.js',
    '/resources/icons-192.png',
    '/resources/icons-512.png',
    'https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    '/style.css',
];

// install event
self.addEventListener('install', evt => {
    console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
});

