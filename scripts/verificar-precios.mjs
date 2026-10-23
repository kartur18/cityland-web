// Verifica precios y tipos de producto en las landings /madrid/[slug] renderizando la pagina real.
// Falla (exit 1) si un tipo no migratorio muestra planes migratorios, si "Desde" queda bajo el piso del tipo,
// si el JSON-LD no coincide con el minimo visible o si un servicio suelto se presenta como paquete.
// Uso: node --import ./scripts/_registrar-loader.mjs scripts/verificar-precios.mjs [--n=1500|todas] [--seed=7] [--detalle=5]
import { renderToStaticMarkup } from "react-dom/server";

const arg = (k, d = "") => (process.argv.find((a) => a.startsWith(`--${k}=`)) || `--${k}=${d}`).slice(k.length + 3);
const N = arg("n", "1500");
const SEED = Number(arg("seed", "7"));
const DETALLE = Number(arg("detalle", "5"));

const imp = (p) => import(new URL("../" + p, import.meta.url).href);
const { INDICE_MADRID_10K, buscarLandingMadrid10k } = await imp("lib/catalogo-madrid-10k.ts");
const pagina = (await imp("app/madrid/[slug]/page.tsx")).default;
const generateMetadata = (await imp("app/madrid/[slug]/page.tsx")).generateMetadata;

// Piso de precio "Desde" por tipo (USD). Si el generador baja de aqui, el defecto volvio.
const PISOS = { MIGRATORIO: 699, IDA_Y_VUELTA: 960, RETORNO_MAD_LIM: 650, SOLO_IDA_VISA: 699, SERVICIO: 35 };
const PLANES_MIGRATORIOS = /Plan (Promo|Smart|Plus|Full)\b/;

// Oraculo independiente del generador: deduce el tipo solo desde el slug del catalogo.
const SERVICIOS_SLUG = [
  "reserva-retorno-rf-24h", "reserva-hotel-verificable", "carpeta-migratoria-completa-sin-vuelo", "seguro-medico-schengen",
  "maleta-adicional", "checkin-y-asignacion", "reprogramacion-cambio-fecha",
];
function tipoOraculo(slug) {
  if (slug.startsWith("servicio-")) {
    const s = slug.slice(9);
    if (SERVICIOS_SLUG.some((x) => s.startsWith(x))) return "SERVICIO";
    if (s.startsWith("boleto-madrid-a-lima-solo-ida")) return "RETORNO_MAD_LIM";
    if (s.startsWith("boleto-madrid-lima-madrid-ida-vuelta")) return "IDA_Y_VUELTA";
    if (s.startsWith("pasaje-lima-madrid-con-visa") || s.startsWith("pasaje-lima-madrid-reagrupacion")) return "SOLO_IDA_VISA";
    return "MIGRATORIO";
  }
  if (slug.startsWith("plan-")) {
    if (slug.includes("-solo-carpeta-migratoria-madrid-") || slug.includes("-seguro-schengen-y-hotel-madrid-")) return "SERVICIO";
    if (slug.includes("-boleto-solo-ida-madrid-")) return "SOLO_IDA_VISA";
    if (slug.includes("-vuelo-ida-vuelta-madrid-")) return "IDA_Y_VUELTA";
    if (slug.includes("-vuelo-madrid-a-lima-retorno-")) return "RETORNO_MAD_LIM";
    return "MIGRATORIO";
  }
  if (slug.startsWith("ruta-")) {
    if (slug.endsWith("-boleto-solo-ida-madrid-visa")) return "SOLO_IDA_VISA";
    if (slug.endsWith("-vuelo-ida-vuelta-madrid")) return "IDA_Y_VUELTA";
    return "MIGRATORIO";
  }
  if (slug.startsWith("destino-")) {
    if (slug.includes("-solo-reserva-hotel-y-retorno-rf-")) return "SERVICIO";
    if (slug.includes("-estudiantes-y-master-en-madrid-") || slug.includes("-trabajadores-con-contrato-visa-")) return "SOLO_IDA_VISA";
    return "MIGRATORIO";
  }
  // silo 1: zona-modalidad-aerolinea
  if (slug.includes("-boleto-solo-ida-visa-residencia-")) return "SOLO_IDA_VISA";
  if (slug.includes("-vuelo-retorno-madrid-a-lima-")) return "RETORNO_MAD_LIM";
  if (slug.includes("-vuelo-ida-y-vuelta-cerrado-")) return "IDA_Y_VUELTA";
  return "MIGRATORIO";
}

function prng(seed) {
  let s = seed >>> 0;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
}
function muestra(arr, n, seed) {
  const r = prng(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

const aNumero = (t) => Number(String(t).replace(/[^0-9]/g, ""));
const quitarTags = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

function nodosJsonLd(html) {
  const salida = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const j = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
      salida.push(...(j["@graph"] ?? [j]));
    } catch {
      // JSON-LD roto: se reporta abajo como "sin oferta"
    }
  }
  return salida;
}

const conteo = { paginas: 0, fallosRender: 0, A_planesMigratoriosEnNoMigratorio: 0, B_desdeBajoPiso: 0, C_jsonLdDistintoDelMinimoVisible: 0, D_textoDePaqueteEnNoMigratorio: 0, E_tipoJsonLdIncorrecto: 0, F_tipoDistintoDelOraculo: 0, G_paquetesBajo699: 0, desdeBajo699Total: 0 };
const porTipo = {};
const ejemplos = {};
const anotar = (clave, slug, detalle) => {
  conteo[clave]++;
  (ejemplos[clave] ??= []);
  if (ejemplos[clave].length < DETALLE) ejemplos[clave].push(`${slug} :: ${detalle}`);
};

const elegidos = N === "todas" ? INDICE_MADRID_10K.map((x) => x.slug) : muestra(INDICE_MADRID_10K.map((x) => x.slug), Number(N), SEED);
const t0 = Date.now();

for (const slug of elegidos) {
  let html;
  let meta;
  try {
    const params = Promise.resolve({ slug });
    html = renderToStaticMarkup(await pagina({ params }));
    meta = await generateMetadata({ params });
  } catch (e) {
    conteo.fallosRender++;
    if (conteo.fallosRender < 3) console.error("render", slug, String(e).slice(0, 300));
    continue;
  }
  conteo.paginas++;

  const tipo = tipoOraculo(slug);
  porTipo[tipo] = (porTipo[tipo] ?? 0) + 1;
  const datos = buscarLandingMadrid10k(slug);
  if (datos?.tipo !== undefined && datos.tipo !== tipo) anotar("F_tipoDistintoDelOraculo", slug, `generador=${datos.tipo} oraculo=${tipo}`);

  // Precios de las tarjetas de plan (lo que ve el visitante en #planes-madrid).
  const seccion = html.match(/<section id="planes-madrid"[\s\S]*?<\/section>/)?.[0] ?? "";
  const tarjetas = [...seccion.matchAll(/<article[\s\S]*?<\/article>/g)].map((m) => m[0]);
  const preciosVisibles = tarjetas.map((a) => aNumero(a.match(/[Dd]esde<\/span><span[^>]*>\$([\d,]+)/)?.[1] ?? "")).filter(Boolean);
  const minVisible = preciosVisibles.length ? Math.min(...preciosVisibles) : null;

  // "Desde" del titular (h1), que es el precio de pagina.
  const h1 = html.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? "";
  const desde = aNumero(quitarTags(h1).match(/Desde \$([\d,]+)/)?.[1] ?? "");

  if (tipo !== "MIGRATORIO" && (tarjetas.length > 1 || PLANES_MIGRATORIOS.test(quitarTags(seccion)))) {
    anotar("A_planesMigratoriosEnNoMigratorio", slug, `${tipo} con ${tarjetas.length} tarjetas ${JSON.stringify(preciosVisibles)}`);
  }
  if (desde && desde < PISOS[tipo]) anotar("B_desdeBajoPiso", slug, `${tipo} Desde $${desde} < piso ${PISOS[tipo]}`);
  if (desde && desde < 699) {
    conteo.desdeBajo699Total++;
    if (tipo !== "SERVICIO" && tipo !== "RETORNO_MAD_LIM") anotar("G_paquetesBajo699", slug, `${tipo} Desde $${desde}`);
  }

  // JSON-LD: precio ofertado debe ser el minimo visible.
  const nodos = nodosJsonLd(html);
  const principal = nodos.find((n) => n.offers);
  const ofertado = principal ? aNumero(principal.offers.lowPrice ?? principal.offers.price ?? "") : null;
  if (minVisible === null || ofertado !== minVisible) {
    anotar("C_jsonLdDistintoDelMinimoVisible", slug, `${tipo} JSON-LD=${ofertado} minimoVisible=${minVisible} Desde(h1)=${desde}`);
  }
  const tipoLd = [].concat(principal?.["@type"] ?? []);
  const esService = tipoLd.includes("Service");
  if ((tipo === "SERVICIO") !== esService) anotar("E_tipoJsonLdIncorrecto", slug, `${tipo} -> @type ${JSON.stringify(tipoLd)}`);

  // Un tipo no migratorio no puede presentarse como "Paquete Migratorio ... incluye PNR, retorno, hotel, seguro".
  if (tipo !== "MIGRATORIO") {
    const visible = quitarTags(html);
    const desc = String(meta?.description ?? "");
    const titulo = typeof meta?.title === "string" ? meta.title : "";
    const malo =
      /Incluye PNR, retorno RF/i.test(desc) ||
      /Paquete Migratorio/i.test(desc) ||
      (tipo === "SERVICIO" && /Paquete Migratorio/i.test(titulo)) ||
      /documentos incluidos en tu Paquete Migratorio/i.test(visible) ||
      /Ver los 4 planes/i.test(visible) ||
      /¿Qué incluye el Paquete Migratorio/i.test(visible);
    if (malo) anotar("D_textoDePaqueteEnNoMigratorio", slug, `${tipo} desc="${desc.slice(0, 90)}"`);
  }
}

console.log(`Paginas verificadas: ${conteo.paginas} de ${elegidos.length} (${((Date.now() - t0) / 1000).toFixed(1)} s)`);
console.log("Por tipo (oraculo):", JSON.stringify(porTipo));
console.table(conteo);
for (const [k, v] of Object.entries(ejemplos)) {
  console.log(`\n${k}:`);
  for (const e of v) console.log("  ", e);
}

const violaciones =
  conteo.fallosRender +
  conteo.A_planesMigratoriosEnNoMigratorio +
  conteo.B_desdeBajoPiso +
  conteo.C_jsonLdDistintoDelMinimoVisible +
  conteo.D_textoDePaqueteEnNoMigratorio +
  conteo.E_tipoJsonLdIncorrecto +
  conteo.F_tipoDistintoDelOraculo +
  conteo.G_paquetesBajo699;
if (violaciones > 0) {
  console.error(`\nFALLA: ${violaciones} violaciones.`);
  process.exit(1);
}
console.log("\nOK: sin violaciones.");
