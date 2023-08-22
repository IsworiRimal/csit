import { generateSW } from 'workbox-build';

const sw = await generateSW({
    globDirectory: 'dist/',
    globPatterns: [
        '**/*.{css,woff2,png,svg,jpg,js,html,json,ico,avif}'
    ],
    swDest: 'dist/sw.js',
    maximumFileSizeToCacheInBytes: 5000000,
    navigateFallback: '/offline/index.html',
    mode: 'production',
    runtimeCaching: [
        {
            urlPattern: new RegExp('.*'),
            handler: 'NetworkFirst',
        },
    ],
});

console.log(sw);

