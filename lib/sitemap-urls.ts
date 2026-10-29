import { DESTINOS_EUROPA, DESTINOS_CARIBE, BLOG_POSTS } from "@/components/constantes";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import { AGENCIAS_LOCALES_SEO } from "@/lib/catalogo-agencias-locales";
import { BLOG_POSTS_MASIVOS } from "@/lib/catalogo-blog-masivo";
import { TODOS_LOS_RESUMENES_OFERTAS_SEO } from "@/lib/catalogo-mil-landings-comerciales";
import { INDICE_MADRID_10K } from "@/lib/catalogo-madrid-10k";
import { CATALOGO_PAQUETES_MIGRATORIOS_1000 } from "@/lib/catalogo-paquetes-migratorios-1000";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { esIndexable } from "@/lib/indexacion";
import { circuitosVigentes } from "@/lib/circuitos";
import { ciudadesConProgramas } from "@/lib/hubs-ciudades";
import { mesesConSalidas, salidasVigentes } from "@/lib/salidas";
import { paginasCaribe } from "@/lib/paquetes-armados/paginas-caribe";
import { paisesConPaquetes, paquetesTuristicos } from "@/lib/paquetes-turisticos";
import { destinosConTours, todosLosTours } from "@/lib/tours-turbo";
import { destinosConHoteles, todosLosHoteles } from "@/lib/hoteles-turbo";
import { destinosConTraslados } from "@/lib/traslados-turbo";
import { LANDINGS_ESPANA, rutaLandingEspana } from "@/lib/landings-espana";
import { PRUEBA_REAPERTURA } from "@/lib/prueba-reapertura";
import { PAGINAS_RECUPERADAS } from "@/lib/paginas-recuperadas";
import { landingsSoloIda } from "@/lib/landings-solo-ida";
import { LANDINGS_ITALIA, rutaLandingItalia } from "@/lib/italia/landings";
import { LANDINGS_SEGUROS, rutaLandingSeguro } from "@/lib/seguros/landings";
import { LANDINGS_PRACTICO } from "@/lib/landings-espana-practico";
import { LANDINGS_RUTAS_BARCELONA, LANDINGS_RUTAS_PERU } from "@/lib/landings-espana-rutas";

// Fuente única de URLs indexables: cada URL vive en un solo sitemap hijo.
export const FECHA_SITEMAP = "2026-10-19T15:00:00.000Z";

export const IDS_SITEMAP = [
  // Primero: así las 300 de la prueba quedan solo en su sitemap y no en el de ofertas o vuelos.
  "prueba",
  "recuperadas",
  "migratorios",
  "madrid",
  "ofertas",
  "vuelos",
  "destinos",
  // Antes de «europa»: así las rutas Perú ↔ España de la tanda 5 quedan solo en su sitemap.
  "espana-rutas",
  "europa",
  "1000",
  "paquetes-armados",
  "paquetes-turisticos",
  "tours",
  "hoteles",
  "traslados",
  "italia",
  "seguros",
] as const;

export type IdSitemap = (typeof IDS_SITEMAP)[number];

const abs = (ruta: string) => `${URL_BASE_SEO}${ruta}`;

const GRUPOS: Record<IdSitemap, () => string[]> = {
  migratorios: () => [
    "/paquetes-migratorios",
    ...CATALOGO_PAQUETES_MIGRATORIOS_1000.map((p) => `/paquetes-migratorios/${p.slug}`),
  ],
  madrid: () => INDICE_MADRID_10K.map((m) => `/madrid/${m.slug}`),
  ofertas: () => ["/ofertas", ...TODOS_LOS_RESUMENES_OFERTAS_SEO.map((o) => `/ofertas/${o.slug}`)],
  vuelos: () => ["/vuelos", ...RUTAS_VUELOS_SEO.map((r) => `/vuelos/${r.slug}`)],
  destinos: () => [
    "/circuitos",
    "/viajes-a",
    ...ciudadesConProgramas().map((h) => h.ruta),
    "/paquetes-a-turquia",
    "/paquetes-a-egipto",
    "/paquetes-a-jordania",
    "/paquetes-a-dubai",
    "/paquetes-a-japon",
    "/paquetes-a-china",
    "/paquetes-a-india",
    "/paquetes-a-tailandia",
    "/paquetes-a-marruecos",
    "/paquetes-a-grecia",
    "/paquetes-a-costa-rica",
    "/paquetes-a-orlando-disney",
    "/circuitos-por-europa",
    "/paquetes-ano-nuevo-2026",
    "/vacaciones-de-verano-2027",
    ...circuitosVigentes().map((c) => `/circuitos/${c.slug}`),
    "/destinos",
    ...[...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS].map((d) => `/destinos/${d.slug}`),
    "/viajes",
    ...VIAJES_ESPECIALIZADOS_SEO.map((v) => `/viajes/${v.slug}`),
    "/agencia",
    ...AGENCIAS_LOCALES_SEO.map((a) => `/agencia/${a.slug}`),
    "/blog",
    ...[...BLOG_POSTS, ...BLOG_POSTS_MASIVOS].map((p) => `/blog/${p.slug}`),
  ],
  europa: () => [
    "/guia-europa",
    "/espana",
    // Landings de pasajes y viajes a España por búsqueda (28-oct-2026).
    ...LANDINGS_ESPANA.map(rutaLandingEspana),
    // Pasajes solo ida para quien tiene residencia, visado o pasaporte europeo.
    ...landingsSoloIda().map(rutaLandingEspana),
    "/italia",
    "/francia",
    "/europa-turquia",
    "/seguros",
    "/visas",
  ],
  // Páginas generales y de distrito; el id se conserva porque ya estaba publicado en robots.
  "1000": () => [
    "/",
    "/directorio",
    "/caribe",
    "/cusco",
    "/peru",
    "/cruceros",
    "/luna-de-miel",
    "/colegios",
    "/quinceaneras",
    "/nacionales",
    "/paquetes",
    "/paquetes/panama-medellin",
    "/promociones",
    "/empresas",
    "/hoteles",
    "/tours",
    "/traslados",
    "/institutos",
    "/viajes-adultos-mayores",
    "/full-days",
    "/feriados-largos",
    "/paquetes-a-punta-cana",
    "/paquetes-a-miami",
    "/paquetes-a-italia",
    "/paquetes-a-francia",
    "/visa-americana",
    "/machu-picchu-tours",
    "/paquetes-a-cartagena",
    "/paquetes-a-san-andres",
    "/paquetes-a-cancun",
    "/paquetes-a-aruba",
    "/paquetes-a-panama",
    "/paquetes-a-mexico",
    "/paquetes-a-colombia",
    "/paquetes-a-brasil",
    "/paquetes-a-argentina",
    "/paquetes-a-chile",
    "/paquetes-a-estados-unidos",
    "/paquetes-todo-incluido",
    "/pasajes-a-espana",
    "/paquetes-a-espana",
    "/pasajes-a-barcelona",
    "/viajar-a-espana-en-navidad",
    "/viajar-a-espana-en-verano",
    "/semana-santa-en-espana",
    "/pasaje-solo-ida-a-espana",
    "/pasaje-ida-y-vuelta-a-espana",
    "/retorno-gestionado-que-es",
    "/visa-de-trabajo-para-espana",
    "/visa-de-estudios-para-espana",
    "/pasajes-de-espana-a-peru",
    "/viajar-a-espana-en-enero",
    "/viajar-a-espana-en-febrero",
    "/viajar-a-espana-en-marzo",
    "/viajar-a-espana-en-abril",
    "/viajar-a-espana-en-mayo",
    "/viajar-a-espana-en-junio",
    "/viajar-a-espana-en-julio",
    "/viajar-a-espana-en-agosto",
    "/viajar-a-espana-en-septiembre",
    "/viajar-a-espana-en-octubre",
    "/viajar-a-espana-en-noviembre",
    "/viajar-a-espana-en-diciembre",
    "/carnaval-de-rio-2027",
    "/cuando-viajar-a-rio-de-janeiro",
    "/agencia-de-viajes-lima",
    "/agencia-de-viajes-los-olivos",
    "/agencia-de-viajes-lima-norte",
    "/agencia-de-viajes-san-miguel",
    "/agencia-de-viajes-independencia",
    "/agencia-de-viajes-comas",
    "/agencia-de-viajes-miraflores",
    "/agencia-de-viajes-surco",
    "/agencia-de-viajes-san-martin-de-porres",
    "/canales-oficiales",
    "/politicas",
  ],
  // Paquetes armados del mayorista: salidas con fecha, meses y páginas de playa (27-oct-2026).
  "paquetes-armados": () => [
    "/paquetes-armados",
    ...paginasCaribe().map((p) => `/paquetes-armados/${p.slug}`),
    "/salidas",
    ...mesesConSalidas().map((m) => `/salidas/${m.clave}`),
    ...salidasVigentes().map((s) => `/salidas/${s.slug}`),
  ],
  // Paquetes turísticos del segundo proveedor, con su página por país (28-oct-2026).
  "paquetes-turisticos": () => [
    "/paquetes-turisticos",
    ...paisesConPaquetes().map((x) => `/paquetes-turisticos/${x.slug}`),
    ...paquetesTuristicos().map((p) => `/paquetes-turisticos/${p.slug}`),
  ],
  // Tours y actividades del segundo proveedor, por destino (28-oct-2026).
  tours: () => [
    "/tours-y-actividades",
    ...destinosConTours().map((d) => `/tours-y-actividades/${d.slug}`),
    ...todosLosTours().map((t) => `/tours-y-actividades/${t.d}/${t.s}`),
  ],
  // Hoteles del segundo proveedor por destino, con fee del 20 % (29-oct-2026).
  hoteles: () => [
    "/hoteles-en",
    ...destinosConHoteles().map((d) => `/hoteles-en/${d.slug}`),
    ...todosLosHoteles().map((h) => `/hoteles-en/${h.d}/${h.s}`),
  ],
  // Traslados aeropuerto–hotel del segundo proveedor, con fee del 20 % (29-oct-2026).
  traslados: () => ["/traslados-en", ...destinosConTraslados().map((d) => `/traslados-en/${d.slug}`)],
  // Tandas 5 y 6 (29-oct-2026): rutas Perú ↔ España y dudas prácticas con búsqueda real, en su propio sitemap.
  "espana-rutas": () => [...LANDINGS_RUTAS_BARCELONA, ...LANDINGS_RUTAS_PERU, ...LANDINGS_PRACTICO].map((l) => `/espana/${l.slug}`),
  // Prueba de 4 semanas (28-oct-2026): su propio sitemap para medir en Search Console cuántas indexa Google.
  prueba: () => [...PRUEBA_REAPERTURA],
  // Ocultas el 24-oct que sí salían en búsquedas; vuelven el 29-oct-2026 (lib/paginas-recuperadas.ts).
  recuperadas: () => [...PAGINAS_RECUPERADAS],
  // Pasajes, guías y temporadas de Italia (29-oct-2026).
  italia: () => LANDINGS_ITALIA.map(rutaLandingItalia),
  // Seguros de viaje por destino, perfil y dudas (29-oct-2026).
  seguros: () => LANDINGS_SEGUROS.map(rutaLandingSeguro),
};

// Se anuncian a Google solo las páginas indexables (ver lib/indexacion.ts); el sitemap y el meta robots usan la misma regla.
export function urlsDeSitemap(id: IdSitemap): string[] {
  const vistas = new Set<string>();
  // Las URLs ya reclamadas por un sitemap anterior no se repiten en los siguientes.
  for (const previo of IDS_SITEMAP) {
    const lista = GRUPOS[previo]().filter(esIndexable).map((r) => (r === "/" ? URL_BASE_SEO : abs(r)));
    if (previo === id) return lista.filter((u) => !vistas.has(u) && vistas.add(u));
    lista.forEach((u) => vistas.add(u));
  }
  return [];
}

export function urlSitemap(id: IdSitemap): string {
  return abs(`/sitemap-${id}.xml`);
}

export function xmlUrlset(urls: string[]): string {
  const cuerpo = urls
    .map((u) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${FECHA_SITEMAP}</lastmod>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${cuerpo}\n</urlset>`;
}

export function xmlIndice(): string {
  const cuerpo = IDS_SITEMAP.map(
    (id) => `  <sitemap>\n    <loc>${urlSitemap(id)}</loc>\n    <lastmod>${FECHA_SITEMAP}</lastmod>\n  </sitemap>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${cuerpo}\n</sitemapindex>`;
}

export function respuestaXml(xml: string): Response {
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
