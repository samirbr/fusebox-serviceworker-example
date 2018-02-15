import * as qs from 'querystring';


const q: Record<string, any> = qs.parse(location.search.substr(1));

self.addEventListener('install', function (event: InstallEvent) {
    (<ServiceWorkerGlobalScope>self).skipWaiting();
});

self.addEventListener('activate', async (event: ExtendableEvent): Promise<void> => {
    console.log('activated %O', q);
});

self.addEventListener('fetch', (event: FetchEvent): void => {
    console.log('Handling fetch event for', event.request.url);

    event.respondWith((async (): Promise<Response> => {
        return fetch(event.request.url);
    })());
});