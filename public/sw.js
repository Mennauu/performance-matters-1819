/*  Offline ServiceWorker
    Based on: https://developers.google.com/web/fundamentals/codelabs/offline/
         and: https://www.captechconsulting.com/blogs/my-experience-using-service-workers */
const staticCacheName = 'oba-cache-v1'
const filesToCache = [
  '/',
  '/styles-60bf7a2ac9.min.css',
  '/main.js',
  '/jquery-fdef21f018.min.js',
  '/images/favicon.png',
  '/images/coverlist1.webp',
  '/images/coverlist2.webp',
  '/images/coverlist3.webp',
  '/images/coverlist4.webp',
  '/images/coverlist5.webp',
  '/images/coverlist6.webp',
  '/images/coverlist7.webp',
  '/images/coverlist8.webp',
  '/images/coverlist9.webp',
  '/images/coverlist10.webp',
  '/images/coverlist11.webp',
  '/images/coverlist12.webp',
  '/images/coverlist13.webp',
  '/images/coverlist14.webp',
  '/images/coverlist15.webp',
  '/images/coverlist16.webp',
  '/images/coverlist17.webp',
  '/images/coverlist18.webp',
  '/images/coverlist19.webp',
  '/images/coverlist20.webp',
  '/images/coverlist21.webp',
  '/images/coverlist22.webp',
  '/images/coverlist23.webp',
  '/Sprookjes',
  '/Sprookjes/=9789048719341'
]

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(staticCacheName)
    .then(cache => cache.addAll(filesToCache))
    .then(() => console.log('WORKER: Install completed'))
  )
})

self.addEventListener('fetch', (event) => {
  console.log(event.request.url)

  event.respondWith(caches.match(event.request)
    .then((response) => {
      return response || fetch(event.request)
    })
  )
})