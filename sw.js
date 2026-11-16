/* APP SUMMER · funcionamiento sin conexión
   - La app (esta carpeta): primero la red, para recibir las actualizaciones; sin conexión, la copia guardada.
   - Pictogramas de ARASAAC y tipografía: primero la copia guardada.
   - GitHub y el buscador de ARASAAC: siempre por la red (no se guardan). */
const V = "summer-v0.10.0";
const PICTOS = "summer-pictos-v1", FONTS = "summer-fonts-v1";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "plantillas/plantilla-asignatura.xlsx"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith("summer-v") && k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const timeout = (p, ms) => new Promise((res, rej) => { const t = setTimeout(() => rej(new Error("timeout")), ms); p.then(v => { clearTimeout(t); res(v); }, err => { clearTimeout(t); rej(err); }); });

async function appFile(req){
  const cache = await caches.open(V);
  try {
    const r = await timeout(fetch(req.mode === "navigate" ? new Request(req.url, { cache: "no-cache" }) : req), 5000);
    if (r.ok) cache.put(req.mode === "navigate" ? "index.html" : req, r.clone());
    return r;
  } catch(err){
    return (await cache.match(req, { ignoreSearch: true })) || (req.mode === "navigate" ? await cache.match("index.html") : null) || Response.error();
  }
}
async function cacheFirst(req, name, cors){
  const cache = await caches.open(name);
  const hit = await cache.match(req.url);
  if (hit) return hit;
  let r;
  try { r = cors ? await fetch(req.url, { mode: "cors" }) : await fetch(req); }
  catch(err){ r = await fetch(req); }
  if (r.ok || r.type === "opaque") cache.put(req.url, r.clone());
  return r;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) e.respondWith(appFile(req));
  else if (url.hostname === "static.arasaac.org") e.respondWith(cacheFirst(req, PICTOS, true));
  else if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") e.respondWith(cacheFirst(req, FONTS, false));
});
