/* Biology Platform — Service Worker
 * Strategy:
 *   - Precache the app shell (index.html + manifest + icons) on install
 *     so the app is fully usable offline after the first visit.
 *   - Cache-first with network-fallback for same-origin GET requests so the
 *     student can relaunch from the home screen even without a connection.
 *   - Bump CACHE_VERSION whenever index.html is updated; on activation the
 *     old caches are purged.
 */
const CACHE_VERSION = 'biology-v325';
const APP_SHELL = [
  './',
  './index.html',
  './curriculum.js',
  './questions.js',
  './labs.js',
  './s1_content.js',
  './s1_exams_2526.js',
  './s1_figq_2526.js',
  './s1_diagrams.js',
  './s1_extras.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './icon-192.svg',
  './icon-512.svg',
  './icon-512-maskable.svg',
  './school-logo.png',
  // الدروس التفاعليَّة (Reveal.js) — يستوردان Reveal.js و Cairo من CDN في الـ runtime
  // الديوراما التعليميَّة (three.js + الخط محليّان حتى تعمل دون اتِّصال)
  './diorama/view.html',
  './diorama/diorama.css',
  './diorama/diorama_core.js',
  './diorama/three.min.js',
  './diorama/Tajawal-Bold.ttf',
  './diorama/Tajawal-Medium.ttf',
  './diorama/dna.js',
  './diorama/transcription.js',
  './diorama/translation.js',
  './diorama/thumbs/dna.jpg',
  './diorama/thumbs/transcription.jpg',
  './diorama/thumbs/translation.jpg',
  './diorama/sickle_cell.js',
  './diorama/thumbs/sickle_cell.jpg',
  './diorama/gel_electrophoresis.js',
  './diorama/thumbs/gel_electrophoresis.jpg',
  './diorama/recombinant_dna.js',
  './diorama/thumbs/recombinant_dna.jpg',
  './diorama/sarcomere.js',
  './diorama/thumbs/sarcomere.jpg',
  './diorama/meiosis.js',
  './diorama/thumbs/meiosis.jpg',
  './diorama/action_potential.js',
  './diorama/thumbs/action_potential.jpg',
  './diorama/glucose.js',
  './diorama/thumbs/glucose.jpg',
  './diorama/pcr.js',
  './diorama/thumbs/pcr.jpg',
  './diorama/lac_operon.js',
  './diorama/thumbs/lac_operon.jpg',
  './diorama/synapse.js',
  './diorama/thumbs/synapse.jpg',
  './diorama/stomata.js',
  './diorama/thumbs/stomata.jpg',
  './diorama/nephron.js',
  './diorama/thumbs/nephron.jpg',
  './lessons/lesson-7-1.html',
  './diagrams/chloroplast-structure.svg',
  './diagrams/chloroplast-vs-mitochondrion.svg',
  // Tajawal font stylesheet (the font files themselves are cached at runtime
  // because their URLs vary per browser/user-agent).
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap'
];
const REQUIRED = new Set(['./index.html', './curriculum.js', './questions.js', './labs.js']);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      // Use { cache: 'reload' } so install never reuses a stale browser cache.
      // The page and its question bank are required: if either fails, install
      // fails and the browser retries later, so offline never gets a bankless page.
      Promise.all(
        APP_SHELL.map((url) => {
          const p = cache.add(new Request(url, { cache: 'reload' }));
          return REQUIRED.has(url) ? p : p.catch((err) => console.warn('[sw] precache failed:', url, err));
        })
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Navigation requests: try network first (to get updates) then fall back to
  // the cached copy of the same page (ignoring ?query, e.g. diorama/view.html?d=dna
  // inside the diorama iframe), and only then to the cached app shell.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true })
          .then((m) => m || caches.match('./index.html'))
          .then((m) => m || caches.match('./')))
    );
    return;
  }

  // Static assets: cache-first. A hit needs no network: every publish bumps
  // CACHE_VERSION, which purges the cache, so a cached copy is never out of date.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && (url.origin === location.origin || req.destination === 'font' || req.destination === 'style')) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
        }
        return res;
      });
    })
  );
});
