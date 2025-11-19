const CACHE_NAME = 'v20251120';
const urlsToCache = [
    '/',                // 缓存主页
    '/manifest.json',   // 缓存清单
    // 在这里添加你需要离线访问的 CSS 或 JS 路径
];

// 安装 Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// 拦截网络请求
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 如果缓存中有，直接返回缓存；否则发起网络请求
                return response || fetch(event.request);
            })
    );
});