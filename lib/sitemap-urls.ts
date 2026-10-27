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

// Fuente única de URLs indexables: cada URL vive en un solo sitemap hijo.
export const FECHA_SITEMAP = "2026-10-19T15:00:00.000Z";

export const IDS_SITEMAP = [
  "migratorios",
  "madrid",
  "ofertas",
  "vuelos",
  "destinos",
  "europa",
  "1000",
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
    "/viajar-a-espana-en-enero",
    "/viajar-a-espana-en-febrero",
    "/viajar-a-espana-en-marzo",
    "/viajar-a-espana-en-abril",
    "/viajar-a-espana-en-mayo",
    "/viajar-a-espana-en-junio",
    "/viajar-a-espana-en-septiembre",
    "/viajar-a-espana-en-octubre",
    "/viajar-a-espana-en-noviembre",
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
