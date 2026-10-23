// Regla del dueno (oct-2026): el paquete migratorio a Italia y Francia es desde US$ 849 (planes 849 / 949 / 1,049 / 1,149);
// Espana sigue desde US$ 699 (699 / 799 / 899 / 999).
// Renderiza TODAS las landings /paquetes-migratorios de Italia, Francia y Espana, los hubs de pais y los hubs generales.
// Falla (exit 1) si:
//   1. Una landing de Italia/Francia muestra un monto de la escala de Espana (699/799/899/999) en el contenido, las metas,
//      el JSON-LD o los mensajes de WhatsApp; si su minimo visible no es 849; o si el JSON-LD no ofrece lowPrice 849.
//   2. Una landing de Espana deja de mostrar 699 como minimo (o muestra 849).
//   3. Los hubs /italia y /francia muestran la escala de Espana o no muestran 849; /espana deja de mostrar 699.
//   4. En cualquier pagina revisada, un enlace a /italia o /francia (Hero, Footer, guias) anuncia 699.
// El Navbar y el Footer se excluyen de la regla 1 (repiten "Europa desde $699", que sigue siendo cierto por Espana).
// Uso: node --import ./scripts/_registrar-loader.mjs scripts/verificar-precio-migratorio-pais.mjs [--detalle=5]
import { renderToStaticMarkup } from "react-dom/server";

const arg = (k, d = "") => (process.argv.find((a) => a.startsWith(`--${k}=`)) || `--${k}=${d}`).slice(k.length + 3);
const DETALLE = Number(arg("detalle", "5"));
const imp = (p) => import(new URL("../" + p, import.meta.url).href);

const ESCALA_ESPANA = [699, 799, 899, 999];
const MINIMO = { España: 699, Italia: 849, Francia: 849 };

const ENTIDADES = { "&amp;": "&", "&quot;": '"', "&#x27;": "'", "&#39;": "'", "&lt;": "<", "&gt;": ">", "&nbsp;": " " };
const decodificar = (s) => s.replace(/&(amp|quot|#x27|#39|lt|gt|nbsp);/g, (m) => ENTIDADES[m]);
const sinCromo = (html) => html.replace(/<header[\s\S]*?<\/header>/i, " ").replace(/<footer[\s\S]*?<\/footer>/i, " ");
function textoVisible(html) {
  const atributos = [...html.matchAll(/\s(?:alt|aria-label|title)="([^"]*)"/g)].map((m) => m[1]).join(" | ");
  const cuerpo = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/?(?:span|b|strong|em|i|small|sup|sub)\b[^>]*>/gi, "")
    .replace(/<[^>]+>/g, " ");
  return decodificar(`${cuerpo} | ${atributos}`).replace(/\s+/g, " ");
}
// Textos de los enlaces de WhatsApp (lo que el cliente envia).
function textosWhatsApp(html) {
  const salida = [];
  for (const m of html.matchAll(/href="(https:\/\/(?:wa\.me|api\.whatsapp\.com)[^"]*)"/g)) {
    try {
      const t = new URL(decodificar(m[1])).searchParams.get("text");
      if (t) salida.push(t);
    } catch {
      // URL rota: no aporta texto
    }
  }
  return salida;
}
// Montos en dolares ("$699", "US$ 1,049", "699 USD"). Los de 10,000 o mas son coberturas, no precios.
function montos(texto) {
  const salida = [];
  for (const m of texto.matchAll(/(?:US\$|\$)\s?(\d[\d,]*)|(\d[\d,]*)\s?(?:USD|dólares|dolares)\b/gi)) {
    const n = Number((m[1] ?? m[2]).replace(/,/g, ""));
    if (n > 0 && n < 10000) salida.push({ n, ctx: texto.slice(Math.max(0, m.index - 40), m.index + m[0].length + 8).trim() });
  }
  return salida;
}
function nodosJsonLd(html) {
  const salida = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const j = JSON.parse(decodificar(m[1]));
      salida.push(...(j["@graph"] ?? [j]));
    } catch {
      // JSON-LD roto: sin ofertas
    }
  }
  return salida;
}
function datosJsonLd(nodos) {
  const textos = [];
  const precios = [];
  const visitar = (n) => {
    if (Array.isArray(n)) return n.forEach(visitar);
    if (!n || typeof n !== "object") return;
    if (n.lowPrice !== undefined) precios.push(Number(n.lowPrice));
    for (const [k, v] of Object.entries(n)) {
      if (typeof v === "string" && /^(name|description|text|headline|abstract)$/.test(k)) textos.push(v);
      else visitar(v);
    }
  };
  visitar(nodos);
  return { textos, precios };
}
function textosMeta(meta) {
  if (!meta) return [];
  const t = (x) => (typeof x === "string" ? x : x && typeof x === "object" ? (x.absolute ?? x.default ?? "") : "");
  return [t(meta.title), meta.description, t(meta.openGraph?.title), meta.openGraph?.description, t(meta.twitter?.title), meta.twitter?.description, ...(meta.keywords ?? [])].filter(
    (x) => typeof x === "string" && x
  );
}
// Enlaces a /italia o /francia que anuncian un monto de la escala de Espana.
function enlacesPaisCon699(html) {
  const malos = [];
  for (const m of html.matchAll(/<a\b[^>]*href="\/(italia|francia)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const t = textoVisible(m[2]);
    if (montos(t).some((x) => ESCALA_ESPANA.includes(x.n))) malos.push(`/${m[1]} :: ${t.trim().slice(0, 80)}`);
  }
  return malos;
}

const conteo = {};
const ejemplos = {};
const fallo = (clave, etiqueta, detalle) => {
  conteo[clave] = (conteo[clave] ?? 0) + 1;
  (ejemplos[clave] ??= []);
  if (ejemplos[clave].length < DETALLE) ejemplos[clave].push(`${etiqueta} :: ${detalle}`);
};

async function renderizar(mod, params) {
  const p = { params: Promise.resolve(params), searchParams: Promise.resolve({}) };
  const meta = typeof mod.generateMetadata === "function" ? await mod.generateMetadata(p) : mod.metadata;
  const html = renderToStaticMarkup(await mod.default(p));
  return { meta, html };
}

// Revisa una pagina contra el minimo esperado de su pais.
function revisarPais(pais, etiqueta, html, meta, { exigirPlanes = true } = {}) {
  const contenido = sinCromo(html);
  const visibles = montos(textoVisible(contenido));
  const ld = datosJsonLd(nodosJsonLd(html));
  const todos = [
    ...visibles,
    ...textosMeta(meta).flatMap(montos),
    ...ld.textos.flatMap(montos),
    ...textosWhatsApp(contenido).flatMap(montos),
  ];
  const minimo = MINIMO[pais];
  if (pais !== "España") {
    const prohibido = todos.find((x) => ESCALA_ESPANA.includes(x.n));
    if (prohibido) fallo(`${pais}: muestra escala de España`, etiqueta, prohibido.ctx);
  } else if (todos.some((x) => x.n === MINIMO.Italia)) {
    fallo("España: muestra 849", etiqueta, todos.find((x) => x.n === MINIMO.Italia).ctx);
  }
  if (!visibles.some((x) => x.n === minimo)) fallo(`${pais}: no muestra ${minimo}`, etiqueta, "sin el minimo visible");
  if (exigirPlanes) {
    const seccion = html.match(/<section id="planes-precios"[\s\S]*?<\/section>/)?.[0] ?? "";
    const tarjetas = [...seccion.matchAll(/<article[\s\S]*?<\/article>/g)].map((m) => m[0]);
    const precios = tarjetas.map((a) => Number((a.match(/Desde<\/span><span[^>]*>\$([\d,]+)/)?.[1] ?? "").replace(/,/g, ""))).filter(Boolean);
    const min = precios.length ? Math.min(...precios) : null;
    if (min !== minimo) fallo(`${pais}: minimo de planes distinto`, etiqueta, `planes=${JSON.stringify(precios)}`);
  }
  if (ld.precios.length && Math.min(...ld.precios) !== minimo) fallo(`${pais}: JSON-LD lowPrice distinto`, etiqueta, `lowPrice=${JSON.stringify(ld.precios)}`);
  if (exigirPlanes && !ld.precios.length) fallo(`${pais}: JSON-LD sin lowPrice`, etiqueta, "-");
  for (const e of enlacesPaisCon699(html)) fallo("enlace a Italia/Francia con 699", etiqueta, e);
}

const t0 = Date.now();
const { INDICE_PAQUETES_MIGRATORIOS_1000 } = await imp("lib/catalogo-paquetes-migratorios-1000.ts");
const landing = await imp("app/paquetes-migratorios/[slug]/page.tsx");

// 1 y 2. Landings por pais (todas)
const paginasPorPais = {};
for (const item of INDICE_PAQUETES_MIGRATORIOS_1000) {
  if (!(item.pais in MINIMO)) continue;
  const f = (paginasPorPais[item.pais] ??= { paginas: 0, precioPromoIndice: new Set(), fallosRender: 0 });
  f.precioPromoIndice.add(item.precioPromo);
  if (item.precioPromo !== MINIMO[item.pais]) fallo(`${item.pais}: precioPromo del indice distinto`, item.slug, String(item.precioPromo));
  let r;
  try {
    r = await renderizar(landing, { slug: item.slug });
  } catch (e) {
    f.fallosRender++;
    fallo("render", item.slug, String(e).slice(0, 160));
    continue;
  }
  f.paginas++;
  revisarPais(item.pais, item.slug, r.html, r.meta);
}

// 3. Hubs de pais
for (const [ruta, pais] of [["app/italia/page.tsx", "Italia"], ["app/francia/page.tsx", "Francia"], ["app/espana/page.tsx", "España"]]) {
  const { meta, html } = await renderizar(await imp(ruta), {});
  revisarPais(pais, `/${ruta.split("/")[1]}`, html, meta, { exigirPlanes: false });
}

// 4. Hubs generales: ningun enlace a /italia o /francia anuncia 699 (Hero, Footer, guias).
for (const ruta of ["app/page.tsx", "app/guia-europa/page.tsx", "app/paquetes-migratorios/page.tsx", "app/ofertas/page.tsx", "app/promociones/page.tsx", "app/directorio/page.tsx"]) {
  const { html } = await renderizar(await imp(ruta), {});
  for (const e of enlacesPaisCon699(html)) fallo("enlace a Italia/Francia con 699", ruta, e);
}

console.log(`Precio migratorio por pais en ${((Date.now() - t0) / 1000).toFixed(1)} s`);
console.table(
  Object.fromEntries(
    Object.entries(paginasPorPais).map(([p, f]) => [p, { paginas: f.paginas, fallosRender: f.fallosRender, minimoEsperado: MINIMO[p], precioPromoIndice: [...f.precioPromoIndice].join("/") }])
  )
);
console.table(conteo);
for (const [k, v] of Object.entries(ejemplos)) {
  console.log(`\n${k}:`);
  for (const e of v) console.log("  ", e);
}
const violaciones = Object.values(conteo).reduce((a, b) => a + b, 0);
if (violaciones > 0) {
  console.error(`\nFALLA: ${violaciones} violaciones.`);
  process.exit(1);
}
console.log("\nOK: Italia y Francia desde $849, España desde $699.");
