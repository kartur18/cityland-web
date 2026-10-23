// Verifica la regla "todo precio publico lleva 'Desde' y una nota de precio referencial".
// Renderiza muestras de cada familia de landings y TODOS los hubs, y revisa tres cosas:
//   1. Texto visible (y alt/aria-label/title): cada monto en dolares debe tener "desde" (sin importar mayusculas)
//      a menos de 40 caracteres antes y sin otro monto en medio (si no, el "desde" cubre a otro precio).
//   2. Metas (title, description, openGraph, twitter): mismo criterio.
//   3. JSON-LD: ningun Offer con precio fijo (usar AggregateOffer con lowPrice o priceSpecification.minPrice)
//      y los montos dentro de textos del JSON-LD (FAQ, descripciones) tambien llevan "desde".
// Ademas toda pagina con montos debe incluir la nota referencial ("referencial" + "fecha" + "disponibilidad").
// Uso: node --import ./scripts/_registrar-loader.mjs scripts/verificar-desde.mjs [--n=500|todas] [--seed=11] [--detalle=6]
import { renderToStaticMarkup } from "react-dom/server";
import { readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const arg = (k, d = "") => (process.argv.find((a) => a.startsWith(`--${k}=`)) || `--${k}=${d}`).slice(k.length + 3);
const N = arg("n", "500");
const SEED = Number(arg("seed", "11"));
const DETALLE = Number(arg("detalle", "6"));
const VENTANA = 40;

const RAIZ = process.cwd();
const imp = (p) => import(new URL("../" + p, import.meta.url).href);

// ---------- utilidades ----------
function prng(seed) {
  let s = seed >>> 0;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
}
function muestra(arr, n, seed) {
  if (n === "todas" || Number(n) >= arr.length) return [...arr];
  const r = prng(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Number(n));
}
const ENTIDADES = { "&amp;": "&", "&quot;": '"', "&#x27;": "'", "&#39;": "'", "&lt;": "<", "&gt;": ">", "&nbsp;": " " };
const decodificar = (s) => s.replace(/&(amp|quot|#x27|#39|lt|gt|nbsp);/g, (m) => ENTIDADES[m]);

// Texto visible + valores de alt/aria-label/title. Los <script> y <style> se descartan (el JSON-LD se revisa aparte).
function textoVisible(html) {
  const atributos = [...html.matchAll(/\s(?:alt|aria-label|title)="([^"]*)"/g)].map((m) => m[1]).join(" | ");
  const cuerpo = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/?(?:span|b|strong|em|i|small|sup|sub)\b[^>]*>/gi, "")
    .replace(/<[^>]+>/g, " ");
  return decodificar(`${cuerpo} | ${atributos}`).replace(/\s+/g, " ");
}

const RE_MONTO = /(?:US\$|\$)\s?(\d[\d.,]*)(?:\s?USD)?|(\d[\d.,]*)\s?(?:USD|dólares|dolares)\b/gi;

// Devuelve los montos sin "desde" valido. Un "desde" cubre al primer monto que le sigue y a los demas de la misma
// lista unidos solo por conectores ("desde $699, $799 y $899"); cualquier otro texto en medio corta la cobertura.
const UNION_LISTA = /^[\s,;·|/–-]*(?:(?:y|o|e|a|hasta)\s+)?$/i;
function montosSinDesde(texto) {
  const malos = [];
  let total = 0;
  let finCubierto = -1;
  for (const m of texto.matchAll(RE_MONTO)) {
    // Cobertura de seguro o fondos (US$ 30,000 / 50,000): no es un precio de venta.
    if (Number(m[0].replace(/[^\d.,]/g, "").replace(/,/g, "")) >= 10000) continue;
    total++;
    const idx = m.index;
    // "desde" debe estar justo antes del monto ("desde Lima: planes de $699" NO cubre ese monto).
    let ok = /desde[\s:]*$/i.test(texto.slice(Math.max(0, idx - VENTANA), idx));
    if (!ok && finCubierto >= 0 && UNION_LISTA.test(texto.slice(finCubierto, idx))) ok = true;
    if (ok) finCubierto = idx + m[0].length;
    else {
      finCubierto = -1;
      malos.push(texto.slice(Math.max(0, idx - 30), idx + m[0].length + 6).trim());
    }
  }
  return { total, malos };
}

const tieneNota = (texto) => /referencial[^.]{0,40}var[ií]a seg[uú]n fecha y disponibilidad/i.test(texto);

function nodosJsonLd(html) {
  const salida = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const j = JSON.parse(decodificar(m[1]));
      salida.push(...(j["@graph"] ?? [j]));
    } catch {
      // JSON-LD roto: no cuenta como oferta
    }
  }
  return salida;
}

// Recorre el JSON-LD: ofertas con precio fijo y textos con montos.
function revisarJsonLd(nodos) {
  const fijos = [];
  const textos = [];
  const visitar = (n, enAggregate = false) => {
    if (Array.isArray(n)) return n.forEach((x) => visitar(x, enAggregate));
    if (!n || typeof n !== "object") return;
    const tipos = [].concat(n["@type"] ?? []);
    const esAgg = tipos.includes("AggregateOffer");
    if (tipos.includes("Offer") && !esAgg && n.price !== undefined && !n.priceSpecification?.minPrice) {
      fijos.push(`Offer price=${n.price} ${n.name ?? ""}`.trim());
    }
    if (esAgg && n.lowPrice === undefined) fijos.push("AggregateOffer sin lowPrice");
    for (const [k, v] of Object.entries(n)) {
      if (typeof v === "string" && /^(name|description|text|headline|abstract)$/.test(k)) textos.push(v);
      else visitar(v, esAgg);
    }
  };
  visitar(nodos);
  return { fijos, textos };
}

function textosMeta(meta) {
  if (!meta) return [];
  const t = (x) => (typeof x === "string" ? x : x && typeof x === "object" ? (x.absolute ?? x.default ?? "") : "");
  return [
    t(meta.title),
    meta.description,
    t(meta.openGraph?.title),
    meta.openGraph?.description,
    t(meta.twitter?.title),
    meta.twitter?.description,
  ].filter((x) => typeof x === "string" && x);
}

// ---------- acumuladores ----------
const familias = {};
const ejemplos = {};
const detalleHubs = [];
const fam = (nombre) =>
  (familias[nombre] ??= { paginas: 0, fallos: 0, conPrecios: 0, montos: 0, montosSinDesde: 0, paginasConViolacion: 0, sinNota: 0, metaSinDesde: 0, offerFijo: 0, jsonldTextoSinDesde: 0, promesaPrecio: 0, metaLargo: 0 });
const anotar = (nombre, tipo, detalle) => {
  const k = `${nombre} / ${tipo}`;
  (ejemplos[k] ??= []);
  if (ejemplos[k].length < DETALLE) ejemplos[k].push(detalle);
};

async function revisar(nombre, etiqueta, mod, params, props = {}) {
  const f = fam(nombre);
  let html;
  let meta;
  try {
    const p = { params: Promise.resolve(params), searchParams: Promise.resolve({}), ...props };
    if (typeof mod.generateMetadata === "function") meta = await mod.generateMetadata(p);
    else if (mod.metadata) meta = mod.metadata;
    html = renderToStaticMarkup(await mod.default(p));
  } catch (e) {
    f.fallos++;
    if (f.fallos <= 2) console.error(`render ${nombre} ${etiqueta}:`, String(e).slice(0, 200));
    return;
  }
  f.paginas++;
  const texto = textoVisible(html);
  const { total, malos } = montosSinDesde(texto);
  // Sin el Navbar y el Footer, que repiten "solo ida desde $699" en todas las paginas y llevan su propia nota.
  const textoContenido = textoVisible(html.replace(/<header[\s\S]*?<\/header>/i, " ").replace(/<footer[\s\S]*?<\/footer>/i, " "));
  const montosContenido = montosSinDesde(textoContenido).total;
  let viol = 0;
  if (total > 0) {
    f.conPrecios++;
    f.montos += total;
    if (!tieneNota(montosContenido > 0 ? textoContenido : texto)) {
      f.sinNota++;
      viol++;
      anotar(nombre, "sin nota referencial", etiqueta);
    }
  }
  if (malos.length) {
    f.montosSinDesde += malos.length;
    viol++;
    for (const x of malos.slice(0, 2)) anotar(nombre, "monto visible sin Desde", `${etiqueta} :: ...${x}`);
  }
  for (const t of textosMeta(meta)) {
    const r = montosSinDesde(t);
    if (r.malos.length) {
      f.metaSinDesde += r.malos.length;
      viol++;
      anotar(nombre, "meta sin desde", `${etiqueta} :: ${t.slice(0, 110)}`);
    }
  }
  const ld = revisarJsonLd(nodosJsonLd(html));
  if (ld.fijos.length) {
    f.offerFijo += ld.fijos.length;
    viol++;
    anotar(nombre, "JSON-LD con precio fijo", `${etiqueta} :: ${ld.fijos[0]}`);
  }
  for (const t of ld.textos) {
    const r = montosSinDesde(t);
    if (r.malos.length) {
      f.jsonldTextoSinDesde += r.malos.length;
      viol++;
      anotar(nombre, "JSON-LD texto sin desde", `${etiqueta} :: ${r.malos[0]}`);
      break;
    }
  }
  // Promesas de monto definitivo (visible, metas y textos del JSON-LD)
  const PROMESA = /impuestos incluidos|precio final(?! ser[aá] confirmado)|tarifa final|precio fijo|oferta garantizada|precio garantizado|tarifa garantizada|garantizamos (?:el )?precio/i;
  for (const t of [texto, ...textosMeta(meta), ...ld.textos]) {
    const pm = t.match(PROMESA);
    if (pm) {
      f.promesaPrecio++;
      viol++;
      anotar(nombre, "promesa de monto definitivo", `${etiqueta} :: ...${t.slice(Math.max(0, pm.index - 40), pm.index + 50)}`);
      break;
    }
  }
  // Informativo (no falla): largos de title (60) y description (160) de las metas
  const mt = typeof meta?.title === "string" ? meta.title : meta?.title?.absolute ?? "";
  if (mt.length > 60 || String(meta?.description ?? "").length > 160) {
    f.metaLargo++;
    anotar(nombre, "meta fuera de largo (informativo)", `${etiqueta} :: title=${mt.length} desc=${String(meta?.description ?? "").length}`);
  }
  if (viol) f.paginasConViolacion++;
  if (nombre === "hubs") detalleHubs.push({ ruta: etiqueta, montos: total, sinDesde: malos.length, nota: total ? (tieneNota(texto) ? "si" : "NO") : "-", meta: textosMeta(meta).filter((t) => montosSinDesde(t).malos.length).length, offerFijo: ld.fijos.length });
}

// ---------- catalogos ----------
const t0 = Date.now();
const { INDICE_MADRID_10K } = await imp("lib/catalogo-madrid-10k.ts");
const { INDICE_PAQUETES_MIGRATORIOS_1000 } = await imp("lib/catalogo-paquetes-migratorios-1000.ts");
const { MIL_LANDINGS_COMERCIALES_SEO } = await imp("lib/catalogo-mil-landings-comerciales.ts");
const { RUTAS_VUELOS_SEO } = await imp("lib/rutas-vuelos.ts");
const { VIAJES_ESPECIALIZADOS_SEO } = await imp("lib/catalogo-viajes-especializados.ts");
const { DESTINOS_EUROPA, DESTINOS_CARIBE } = await imp("components/constantes.ts");
const { DESTINOS_MASIVOS } = await imp("lib/catalogo-destinos-masivo.ts");
const { AGENCIAS_LOCALES_SEO } = await imp("lib/catalogo-agencias-locales.ts");
const { BLOG_POSTS } = await imp("components/constantes.ts");
const { BLOG_POSTS_MASIVOS } = await imp("lib/catalogo-blog-masivo.ts");

const dinamicas = [
  ["madrid", "app/madrid/[slug]/page.tsx", INDICE_MADRID_10K.map((x) => x.slug)],
  ["migratorios", "app/paquetes-migratorios/[slug]/page.tsx", INDICE_PAQUETES_MIGRATORIOS_1000.map((x) => x.slug)],
  ["ofertas", "app/ofertas/[slug]/page.tsx", MIL_LANDINGS_COMERCIALES_SEO.map((x) => x.slug)],
  ["vuelos", "app/vuelos/[slug]/page.tsx", RUTAS_VUELOS_SEO.map((x) => x.slug)],
  ["viajes", "app/viajes/[slug]/page.tsx", VIAJES_ESPECIALIZADOS_SEO.map((x) => x.slug)],
  ["destinos", "app/destinos/[slug]/page.tsx", [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS].map((x) => x.slug)],
  ["agencia", "app/agencia/[slug]/page.tsx", AGENCIAS_LOCALES_SEO.map((x) => x.slug)],
  ["blog", "app/blog/[slug]/page.tsx", [...BLOG_POSTS, ...BLOG_POSTS_MASIVOS].map((x) => x.slug)],
];
const SOLO = arg("familia", "");

for (const [nombre, archivo, slugs] of dinamicas) {
  if (SOLO && SOLO !== nombre) continue;
  const mod = await imp(archivo);
  for (const slug of muestra([...new Set(slugs)], N, SEED)) await revisar(nombre, slug, mod, { slug });
}

// Hubs: todas las page.tsx sin segmento dinamico, salvo /admin.
function buscarPaginas(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = path.join(dir, e);
    if (statSync(p).isDirectory()) {
      if (e.startsWith("[") || e === "admin" || e === "api" || e.startsWith("_")) continue;
      buscarPaginas(p, acc);
    } else if (e === "page.tsx") acc.push(p);
  }
  return acc;
}
if (!SOLO || SOLO === "hubs") {
  for (const archivo of buscarPaginas(path.join(RAIZ, "app")).sort()) {
    const rel = path.relative(RAIZ, archivo).split(path.sep).join("/");
    await revisar("hubs", "/" + rel.replace(/^app\//, "").replace(/\/?page\.tsx$/, ""), await imp(rel), {});
  }
  // Metas de layouts (title/description globales)
  for (const rel of ["app/layout.tsx", "app/blog/layout.tsx", "app/destinos/layout.tsx"]) {
    if (!existsSync(path.join(RAIZ, rel))) continue;
    const mod = await imp(rel);
    const f = fam("hubs");
    for (const t of textosMeta(mod.metadata)) {
      const r = montosSinDesde(t);
      if (r.malos.length) {
        f.metaSinDesde += r.malos.length;
        f.paginasConViolacion++;
        anotar("hubs", "meta sin desde", `${rel} :: ${t.slice(0, 110)}`);
      }
    }
  }
}

// ---------- reporte ----------
console.log(`Verificacion "Desde" en ${((Date.now() - t0) / 1000).toFixed(1)} s (muestra n=${N}, seed=${SEED})`);
console.table(familias);
for (const [k, v] of Object.entries(ejemplos)) {
  console.log(`\n${k}:`);
  for (const e of v) console.log("  ", e);
}
if (detalleHubs.length) {
  console.log("\nHubs, pagina por pagina:");
  console.table(detalleHubs);
}
let violaciones = 0;
for (const f of Object.values(familias)) {
  violaciones += f.fallos + f.montosSinDesde + f.sinNota + f.metaSinDesde + f.offerFijo + f.jsonldTextoSinDesde + f.promesaPrecio;
}
if (violaciones > 0) {
  console.error(`\nFALLA: ${violaciones} violaciones.`);
  process.exit(1);
}
console.log("\nOK: todos los precios llevan 'Desde' y nota referencial.");
