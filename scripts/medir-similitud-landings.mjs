// Mide similitud de texto visible entre landings de la misma familia (shingles de 5 palabras, Jaccard).
// Uso: node --import ./scripts/_registrar-loader.mjs scripts/medir-similitud-landings.mjs [--n=200] [--familia=madrid] [--dump=familia:slug]
import { renderToStaticMarkup } from "react-dom/server";

const arg = (k, d = "") => (process.argv.find((a) => a.startsWith(`--${k}=`)) || `--${k}=${d}`).slice(k.length + 3);
const N = Number(arg("n", "200"));
const DUMP = arg("dump");
const SOLO = arg("familia");

const imp = (p) => import(new URL("../" + p, import.meta.url).href);

const FAMILIAS = {
  ofertas: async () => ({
    pagina: (await imp("app/ofertas/[slug]/page.tsx")).default,
    slugs: (await imp("lib/catalogo-mil-landings-comerciales.ts")).TODOS_LOS_RESUMENES_OFERTAS_SEO.map((x) => x.slug),
  }),
  madrid: async () => ({
    pagina: (await imp("app/madrid/[slug]/page.tsx")).default,
    slugs: (await imp("lib/catalogo-madrid-10k.ts")).INDICE_MADRID_10K.map((x) => x.slug),
  }),
  vuelos: async () => ({
    pagina: (await imp("app/vuelos/[slug]/page.tsx")).default,
    slugs: (await imp("lib/rutas-vuelos.ts")).RUTAS_VUELOS_SEO.map((x) => x.slug),
  }),
  migratorios: async () => ({
    pagina: (await imp("app/paquetes-migratorios/[slug]/page.tsx")).default,
    slugs: (await imp("lib/catalogo-paquetes-migratorios-1000.ts")).CATALOGO_PAQUETES_MIGRATORIOS_1000.map((x) => x.slug),
  }),
  destinos: async () => {
    const c = await imp("components/constantes.ts");
    const m = await imp("lib/catalogo-destinos-masivo.ts");
    return {
      pagina: (await imp("app/destinos/[slug]/page.tsx")).default,
      slugs: [...c.DESTINOS_EUROPA, ...c.DESTINOS_CARIBE, ...m.DESTINOS_MASIVOS].map((x) => x.slug),
    };
  },
  viajes: async () => ({
    pagina: (await imp("app/viajes/[slug]/page.tsx")).default,
    slugs: (await imp("lib/catalogo-viajes-especializados.ts")).VIAJES_ESPECIALIZADOS_SEO.map((x) => x.slug),
  }),
};

function prng(seed) {
  let s = seed >>> 0;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
}
function muestra(arr, n, seed) {
  const r = prng(seed);
  const a = [...new Set(arr)];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

function textoVisible(html, sinMarco = false) {
  const alts = [];
  let h = sinMarco
    ? html.replace(/<header[\s\S]*?<\/header>/gi, " ").replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    : html;
  h = h
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<img[^>]*\salt="([^"]*)"[^>]*>/gi, (_, a) => {
      alts.push(a);
      return " ";
    });
  h = h.replace(/<[^>]+>/g, " ");
  h = h.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
  return (h + " " + alts.join(" ")).replace(/\s+/g, " ").trim();
}
const palabras = (t) => t.toLowerCase().replace(/[^\p{L}\p{N}$ ]+/gu, " ").split(/\s+/).filter(Boolean);
function shingles(t) {
  const w = palabras(t);
  const s = new Set();
  for (let i = 0; i + 5 <= w.length; i++) s.add(w.slice(i, i + 5).join(" "));
  return s;
}

const metricas = (sets) => {
  let suma = 0;
  let pares = 0;
  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      const [a, b] = sets[i].size < sets[j].size ? [sets[i], sets[j]] : [sets[j], sets[i]];
      let inter = 0;
      for (const x of a) if (b.has(x)) inter++;
      const uni = a.size + b.size - inter;
      suma += uni ? inter / uni : 0;
      pares++;
    }
  }
  const frec = new Map();
  for (const s of sets) for (const x of s) frec.set(x, (frec.get(x) || 0) + 1);
  let comp = 0;
  for (const s of sets) {
    let c = 0;
    for (const x of s) if (frec.get(x) > 1) c++;
    comp += s.size ? c / s.size : 0;
  }
  return {
    jaccard: +((100 * suma) / Math.max(1, pares)).toFixed(1),
    compartido: +((100 * comp) / Math.max(1, sets.length)).toFixed(1),
  };
};

const resultados = {};
for (const [fam, cargar] of Object.entries(FAMILIAS)) {
  if (SOLO && SOLO !== fam) continue;
  if (DUMP && !DUMP.startsWith(fam + ":")) continue;
  const { pagina, slugs } = await cargar();
  if (DUMP) {
    // "familia:#12" toma el slug en la posicion 12 del catalogo; --marco=no quita cabecera y pie
    const pedido = DUMP.split(":")[1];
    const slug = pedido.startsWith("#") ? slugs[Number(pedido.slice(1))] : pedido;
    console.log("SLUG:", slug);
    const el = await pagina({ params: Promise.resolve({ slug }) });
    console.log(textoVisible(renderToStaticMarkup(el), arg("marco") === "no"));
    continue;
  }
  const elegidos = muestra(slugs, N, 12345);
  const setsTodo = [];
  const setsMain = [];
  let palabrasTot = 0;
  let palabrasMain = 0;
  let fallos = 0;
  const t0 = Date.now();
  for (const slug of elegidos) {
    try {
      const el = await pagina({ params: Promise.resolve({ slug }) });
      const html = renderToStaticMarkup(el);
      const t = textoVisible(html);
      const tm = textoVisible(html, true);
      palabrasTot += palabras(t).length;
      palabrasMain += palabras(tm).length;
      setsTodo.push(shingles(t));
      setsMain.push(shingles(tm));
    } catch (e) {
      fallos++;
      if (fallos < 3) console.error(fam, slug, String(e).slice(0, 300));
    }
  }
  const a = metricas(setsTodo);
  const b = metricas(setsMain);
  const n = Math.max(1, setsTodo.length);
  resultados[fam] = {
    total: slugs.length,
    muestra: setsTodo.length,
    fallos,
    palabras: Math.round(palabrasTot / n),
    jaccardPct: a.jaccard,
    compartidoPct: a.compartido,
    palabrasSinMarco: Math.round(palabrasMain / n),
    jaccardSinMarcoPct: b.jaccard,
    compartidoSinMarcoPct: b.compartido,
    segundos: +((Date.now() - t0) / 1000).toFixed(1),
  };
  console.error(fam, JSON.stringify(resultados[fam]));
}
if (!DUMP) console.table(resultados);
