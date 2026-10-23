// Verifica que las galerías de imagenes-destinos.ts sean coherentes con la ciudad esperada.
// Uso: node --import ./scripts/_registrar-loader.mjs scripts/verificar-imagenes.mjs [--detalle]
// Sale con código 1 si algún caso conocido o algún slug real queda con foto de otra ciudad.
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DETALLE = process.argv.includes("--detalle");
const imp = (p) => import(new URL("../" + p, import.meta.url).href);

const { obtenerGaleriaPorTexto } = await imp("lib/imagenes-destinos.ts");

// Fotos de referencia (las mismas URLs que usa el archivo de galerías).
const F = {
  selva: /photo-1699575678956|photo-1620658927695|oxapampa-peru/,
  iquitos: /photo-1699575678956/,
  tarapoto: /photo-1620658927695/,
  cartagenaCo: /photo-1583531352515/,
  costaSur: /photo-1723134087756/,
  ayacucho: /ayacucho-peru\.jpg/,
  lima: /lima-plaza-mayor\.jpg/,
  quito: /\/destinos\/quito\.jpg/,
  roma: /\/destinos\/roma\.jpg/,
  paris: /\/destinos\/paris\.webp/,
  lyon: /\/destinos\/lyon\.jpg/,
  milan: /\/destinos\/milan\.webp/,
  asiaEste: /photo-1503899036084/,
  asiaSur: /photo-1528181304800/,
  montevideo: /\/destinos\/montevideo\.jpg/,
  caribeSanMartin: /photo-1580541631950|IMG|photo-1544551763/,
  madrid: /gran-via-metropolis\.jpg/,
};

// [texto que ve la función, regex que debe cumplir la foto 0, etiqueta]
const CASOS = [
  ["lima-iquitos", F.iquitos, "Iquitos no debe caer en Quito"],
  ["vuelos lima a iquitos selva amazonica", F.iquitos, "Iquitos (texto largo)"],
  ["cartagena-de-indias-colombia", F.cartagenaCo, "Cartagena de Indias no debe caer en India"],
  ["lima-cartagena", F.cartagenaCo, "Cartagena Colombia"],
  ["lima-huacachina", F.costaSur, "Huacachina no debe caer en China"],
  ["tour huacachina y paracas", F.costaSur, "Huacachina (texto largo)"],
  ["lima-ayacucho", F.ayacucho, "Ayacucho"],
  ["ayacucho colonial semana santa", F.ayacucho, "Ayacucho colonial no debe caer en Colonia (Uruguay)"],
  ["lima-tarapoto", F.tarapoto, "Tarapoto"],
  ["tarapoto region san martin", F.tarapoto, "Tarapoto / San Martin no debe caer en el Caribe"],
  ["colegio san martin de porres lima", F.lima, "San Martin de Porres es Lima"],
  ["tour coliseo romano y museos vaticanos", F.roma, "Coliseo romano / museos vaticanos = Roma"],
  ["viaje con conexion paris/lyon", F.paris, "Primera ciudad nombrada: Paris"],
  ["viaje roma-milan", F.roma, "Primera ciudad nombrada: Roma"],
  ["lima a madrid y roma", F.roma, "Combinadas: gana la ciudad europea distinta a Madrid"],
  ["hilton la romana bayahibe todo incluido", /photo-1540541338287/, "La Romana (Rep. Dominicana) no es Roma"],
  ["tour torre eiffel y crucero rio sena", F.paris, "Torre Eiffel / Sena = Paris"],
  ["lima-quito", F.quito, "Quito sigue siendo Quito"],
  ["cuenca ecuador", F.quito, "Cuenca Ecuador"],
  ["corea del sur seul", F.asiaEste, "Corea no cae dentro de otras palabras"],
  ["lima-madrid", F.madrid, "Madrid"],
  ["india taj mahal", F.asiaSur, "India sigue siendo India"],
  ["colonia del sacramento uruguay", F.montevideo, "Colonia (Uruguay) sigue en Uruguay"],
];

// Reglas por token del slug real: si el slug contiene el token, la foto 0 debe cumplir el regex.
const TOKENS = [
  [/(^|-)iquitos(-|$)/, F.iquitos, "iquitos"],
  [/^(?!.*(espana|crucero)).*(^|-)cartagena(-de-indias)?(-|$)/, F.cartagenaCo, "cartagena"],
  [/(^|-)huacachina(-|$)/, F.costaSur, "huacachina"],
  [/(^|-)ayacucho(-|$)/, F.ayacucho, "ayacucho"],
  [/(^|-)tarapoto(-|$)/, F.tarapoto, "tarapoto"],
  [/(^|-)coliseo-romano(-|$)|(^|-)vaticanos?(-|$)/, F.roma, "coliseo/vaticano"],
];

const RELLENOS = [/espana\/barajas\.jpg/, /photo-1566073771259/, /destinos\/milan\.webp/];

const FAMILIAS = {
  ofertas: async () => (await imp("lib/catalogo-mil-landings-comerciales.ts")).TODOS_LOS_RESUMENES_OFERTAS_SEO.map((x) => x.slug),
  madrid: async () => (await imp("lib/catalogo-madrid-10k.ts")).INDICE_MADRID_10K.map((x) => x.slug),
  vuelos: async () => (await imp("lib/rutas-vuelos.ts")).RUTAS_VUELOS_SEO.map((x) => x.slug),
  migratorios: async () => (await imp("lib/catalogo-paquetes-migratorios-1000.ts")).CATALOGO_PAQUETES_MIGRATORIOS_1000.map((x) => x.slug),
  viajes: async () => (await imp("lib/catalogo-viajes-especializados.ts")).VIAJES_ESPECIALIZADOS_SEO.map((x) => x.slug),
  destinos: async () => {
    const c = await imp("components/constantes.ts");
    const m = await imp("lib/catalogo-destinos-masivo.ts");
    return [...c.DESTINOS_EUROPA, ...c.DESTINOS_CARIBE, ...m.DESTINOS_MASIVOS].map((x) => x.slug);
  },
};

let malos = 0;

console.log("== Casos conocidos ==");
for (const [texto, esperado, etiqueta] of CASOS) {
  const hero = obtenerGaleriaPorTexto(texto)[0];
  const ok = esperado.test(hero);
  if (!ok) malos++;
  if (!ok || DETALLE) console.log(`${ok ? "ok " : "MAL"} ${etiqueta} | "${texto}" -> ${hero}`);
}
const malosCasos = malos;
console.log(`casos conocidos mal: ${malosCasos} de ${CASOS.length}`);

console.log("\n== Slugs reales por token ==");
let revisados = 0;
let malosSlugs = 0;
const conRelleno = { barajas: 0, hotel: 0, milan: 0 };
const todos = new Set();
for (const [nombre, cargar] of Object.entries(FAMILIAS)) {
  let slugs = [];
  try {
    slugs = await cargar();
  } catch (e) {
    console.log(`(no se pudo cargar ${nombre}: ${e.message})`);
  }
  for (const s of slugs) todos.add(s);
}
for (const slug of todos) {
  const g = obtenerGaleriaPorTexto(slug);
  for (const [re, esperado, et] of TOKENS) {
    // Servicios (corporativo, crucero, viaje de promoción a varios destinos) llevan su propia foto por diseño.
    if (re.test(slug) && !/corporativ|empresa|ejecutiv|convenio|crucero|san-andres|-lima$/.test(slug)) {
      revisados++;
      if (!esperado.test(g[0])) {
        malosSlugs++;
        if (DETALLE || malosSlugs <= 15) console.log(`MAL ${et}: ${slug} -> ${g[0]}`);
      }
    }
  }
  if (RELLENOS[0].test(g[4])) conRelleno.barajas++;
  if (RELLENOS[1].test(g[4])) conRelleno.hotel++;
  if (RELLENOS[2].test(g[4])) conRelleno.milan++;
}
console.log(`slugs únicos: ${todos.size}; revisados por token: ${revisados}; mal: ${malosSlugs}`);
console.log(`banner (posición 5) con relleno -> barajas: ${conRelleno.barajas}, hotel piscina: ${conRelleno.hotel}, milan: ${conRelleno.milan}`);

console.log("\n== Archivos locales de imagenes-destinos.ts ==");
const src = readFileSync(path.join(RAIZ, "lib/imagenes-destinos.ts"), "utf8");
const locales = [...new Set([...src.matchAll(/"(\/images\/[^"]+)"/g)].map((m) => m[1]))];
const faltan = locales.filter((p) => !existsSync(path.join(RAIZ, "public", p)));
console.log(`rutas locales: ${locales.length}; inexistentes: ${faltan.length}`);
for (const f of faltan) console.log("  falta " + f);

// Duplicados dentro de una misma galería (misma foto dos veces en la tupla).
const bloques = [...src.matchAll(/galeria:\s*\[([\s\S]*?)\]/g)].map((m) => m[1]);
let duplicadas = 0;
for (const b of bloques) {
  const items = b.split(",").map((x) => x.trim()).filter(Boolean);
  if (new Set(items).size !== items.length) duplicadas++;
}
console.log(`galerías con foto repetida dentro de la misma tupla: ${duplicadas} de ${bloques.length}`);

const total = malosCasos + malosSlugs + faltan.length;
console.log(`\nRESUMEN: casos mal ${malosCasos}, slugs mal ${malosSlugs}, rutas inexistentes ${faltan.length}, rellenos barajas/hotel/milan ${conRelleno.barajas}/${conRelleno.hotel}/${conRelleno.milan}, galerías con repetidas ${duplicadas}`);
process.exit(total > 0 ? 1 : 0);
