import * as qs from 'querystring';


if ('serviceWorker' in navigator) {
    const q: string = qs.stringify({
        timestamp: Date.now()
    });

    navigator['serviceWorker'].register(`worker.js?${q}`)
        .then(function (registration) {
            console.log('Service worker registration succeeded:', registration);
        }).catch(function (error) {
            console.log('Service worker registration failed:', error);
        });
}
