// Calcula el <lastmod> real de cada sitemap hijo: la fecha del último commit que tocó los archivos que generan sus URLs.
// Escribe lib/fechas-sitemap.json (se sube al repo). Correr en un clon con la historia completa, antes de publicar contenido nuevo:
//   node scripts/fechas-sitemap.mjs
// Antes el lastmod era una constante fija (19-oct-2026) en los 18 sitemaps: Google ignora un lastmod que nunca cambia.
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

// Por cada id de sitemap (lib/sitemap-urls.ts), los archivos o carpetas de los que salen sus URLs.
const FUENTES = {
  prueba: ["lib/prueba-reapertura.ts"],
  recuperadas: ["lib/paginas-recuperadas.ts"],
  migratorios: ["lib/catalogo-paquetes-migratorios-1000.ts", "lib/contenido-migratorios.ts", "lib/precios-migratorio.ts"],
  madrid: ["lib/catalogo-madrid-10k.ts", "lib/contenido-madrid.ts", "lib/planes-madrid.ts"],
  ofertas: ["lib/catalogo-mil-landings-comerciales.ts", "lib/ofertas-cyber-wow.ts", "lib/ofertas-de-pilar.ts"],
  vuelos: ["lib/rutas-vuelos.ts", "lib/rutas-vuelos-lote2.ts", "lib/rutas-vuelos-lote3.ts", "lib/rutas-vuelos-lote4.ts", "lib/catalogo-vuelos-masivo.ts"],
  destinos: [
    "components/constantes.tsx", "components/constantes.ts", "lib/catalogo-destinos-masivo.ts", "lib/catalogo-viajes-especializados.ts",
    "lib/catalogo-agencias-locales.ts", "lib/catalogo-blog-masivo.ts", "lib/circuitos.ts", "lib/circuitos-datos.json", "lib/hubs-ciudades.ts",
  ],
  "espana-rutas": ["lib/landings-espana-rutas.ts", "lib/landings-espana-practico.ts"],
  europa: ["lib/landings-espana.ts", "lib/landings-solo-ida.ts", "lib/landings-solo-ida-b.ts", "lib/landings-solo-ida-guias.ts", "app/espana/page.tsx"],
  "1000": ["lib/landings-cusco-practico.ts", "lib/landings-cusco-tipos.ts", "app/page.tsx"],
  "paquetes-armados": ["lib/paquetes-armados", "lib/salidas.ts", "lib/salidas-datos.json"],
  "paquetes-turisticos": ["lib/paquetes-turisticos"],
  tours: ["lib/tours-turbo"],
  hoteles: ["lib/hoteles-turbo"],
  traslados: ["lib/traslados-turbo"],
  italia: ["lib/italia"],
  seguros: ["lib/seguros"],
  visas: ["lib/guias-visas-pais.ts", "lib/guias-visas-pais-datos.ts", "lib/guia-visas.ts"],
};

const git = (...args) => execFileSync("git", args, { encoding: "utf8" }).trim();

if (git("rev-parse", "--is-shallow-repository") === "true") {
  console.error("Este clon es superficial (shallow): las fechas saldrían todas iguales. Corre el script en un clon con la historia completa.");
  process.exit(1);
}

const salida = {};
for (const [id, rutas] of Object.entries(FUENTES)) {
  // `git log -1` con rutas que no existen simplemente no devuelve nada: se ignoran.
  const fecha = git("log", "-1", "--format=%cI", "--", ...rutas);
  if (!fecha) {
    console.error(`Sin historia para «${id}» (${rutas.join(", ")}): revisa las rutas.`);
    process.exit(1);
  }
  salida[id] = fecha;
  console.log(id.padEnd(20), fecha);
}
writeFileSync("lib/fechas-sitemap.json", JSON.stringify(salida, null, 2) + "\n");
console.log("\nEscrito lib/fechas-sitemap.json");
