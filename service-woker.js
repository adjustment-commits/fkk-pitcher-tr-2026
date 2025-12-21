const CACHE_NAME = "fkk-pitcher-vol01-v1";

const CACHE_FILES = [
"./",
"./index.html",
"./manifest.json",
"./service-worker.js",
"./icons/icon-192.png",
"./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHE_FILES))
);
});

self.addEventListener("activate", (event) => {
event.waitUntil(
caches.keys().then((keys) =>
Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
)
);
});

self.addEventListener("fetch", (event) => {
event.respondWith(
caches.match(event.request).then((res) => res || fetch(event.request))
);
})
