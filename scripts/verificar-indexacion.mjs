// Verifica contra un servidor local (next start) que el meta robots y el sitemap sigan la misma regla.
// Uso: node scripts/verificar-indexacion.mjs [http://localhost:3100]
const BASE = process.argv[2] || "http://localhost:3100";

const DEBEN_INDEXARSE = [
  "/",
  "/espana",
  "/hoteles",
  "/vuelos/lima-madrid",
  "/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje",
  "/destinos/medellin",
  "/viajes/requisitos-viajar-a-espana-desde-peru",
  "/ofertas/estadia-hotel-ghl-sunrise-san-andres-viaje-adultos-mayores-relax",
  "/ofertas/tour-futbol-madrid-y-barcelona-salida-desde-lima",
  "/agencia/ventanilla",
  "/vuelos/lima-miami",
];

const NO_DEBEN_INDEXARSE = [
  "/madrid/servicio-maleta-adicional-23kg-bodega-madrid-junio-atencion-whatsapp-24-7",
  "/madrid/plan-plan-individual-1-pasajero-vuelo-ida-vuelta-madrid-pago-bcp-bbva-interbank-yape",
  "/paquetes-migratorios/espana-barcelona-plan-promo-699",
  "/viajes/primer-viaje-a-madrid",
  "/vuelos/lima-florencia",
  "/ofertas/europa-2026-salamanca-visita-familiar-carta-invitacion-vuelo-confirmado-pnr",
];

const metaRobots = (html) => (html.match(/<meta name="robots" content="([^"]*)"/i) || [])[1] ?? "";

let fallas = 0;
async function revisar(ruta, debeIndexarse) {
  const r = await fetch(BASE + ruta, { redirect: "manual" });
  const robots = metaRobots(await r.text());
  const noindex = robots.includes("noindex");
  const ok = r.status === 200 && noindex !== debeIndexarse;
  if (!ok) fallas++;
  console.log(`${ok ? "OK  " : "FALLA"} ${r.status} robots="${robots}" ${ruta}`);
}

for (const ruta of DEBEN_INDEXARSE) await revisar(ruta, true);
for (const ruta of NO_DEBEN_INDEXARSE) await revisar(ruta, false);

// Ninguna URL del sitemap puede llevar noindex.
const indice = await (await fetch(`${BASE}/sitemap.xml`)).text();
const hijos = [...indice.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
let total = 0;
const muestra = [];
for (const hijo of hijos) {
  const xml = await (await fetch(BASE + hijo)).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  total += urls.length;
  muestra.push(...urls.filter((_, i) => i % 40 === 0));
}
console.log(`sitemap: ${hijos.length} hijos, ${total} URLs; revisando ${muestra.length} al azar`);
for (const ruta of muestra) await revisar(ruta, true);

console.log(fallas ? `\n${fallas} FALLAS` : "\nTodo OK");
process.exit(fallas ? 1 : 0);
