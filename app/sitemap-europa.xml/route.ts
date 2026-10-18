import { NextResponse } from "next/server";
import { DESTINOS_EUROPA } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import { MIL_LANDINGS_COMERCIALES_SEO } from "@/lib/catalogo-mil-landings-comerciales";
import { FECHA_ESTABLE_SITEMAP, URL_BASE_SEO } from "@/lib/seo-arquitectura";

export const revalidate = 86400;

const REGEX_EUROPA =
  /espana|españa|madrid|barcelona|sevilla|valencia|granada|andaluc|ibiza|mallorca|italia|roma|venecia|florencia|milan|milán|vaticano|toscana|napoles|amalfi|europa|paris|parís|francia|suiza|londres|turquia|turquía|estambul|capadocia|schengen|lisboa|portugal|atenas|grecia|amsterdam/i;

export async function GET() {
  const urls: { loc: string; priority: string }[] = [
    { loc: `${URL_BASE_SEO}/espana`, priority: "0.99" },
    { loc: `${URL_BASE_SEO}/europa-turquia`, priority: "0.98" },
    { loc: `${URL_BASE_SEO}/seguros`, priority: "0.96" },
    { loc: `${URL_BASE_SEO}/visas`, priority: "0.96" },
  ];

  for (const d of [...DESTINOS_EUROPA, ...DESTINOS_MASIVOS]) {
    if (REGEX_EUROPA.test(`${d.slug} ${d.ciudad} ${d.pais}`)) {
      urls.push({ loc: `${URL_BASE_SEO}/destinos/${d.slug}`, priority: "0.92" });
    }
  }

  for (const r of RUTAS_VUELOS_SEO) {
    if (REGEX_EUROPA.test(`${r.slug} ${r.destino} ${r.config.vitrina.pais}`)) {
      urls.push({ loc: `${URL_BASE_SEO}/vuelos/${r.slug}`, priority: "0.92" });
    }
  }

  for (const o of MIL_LANDINGS_COMERCIALES_SEO) {
    if (REGEX_EUROPA.test(`${o.slug} ${o.titulo} ${o.destinoOPais}`)) {
      urls.push({ loc: `${URL_BASE_SEO}/ofertas/${o.slug}`, priority: "0.94" });
    }
  }

  for (const v of VIAJES_ESPECIALIZADOS_SEO) {
    if (REGEX_EUROPA.test(`${v.slug} ${v.titulo} ${v.destinoOPais}`)) {
      urls.push({ loc: `${URL_BASE_SEO}/viajes/${v.slug}`, priority: "0.90" });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${FECHA_ESTABLE_SITEMAP}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
