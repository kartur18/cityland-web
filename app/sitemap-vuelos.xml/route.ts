import { NextResponse } from "next/server";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { FECHA_ESTABLE_SITEMAP, URL_BASE_SEO } from "@/lib/seo-arquitectura";

export const revalidate = 86400;

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${URL_BASE_SEO}/vuelos</loc>
    <lastmod>${FECHA_ESTABLE_SITEMAP}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.98</priority>
  </url>
${RUTAS_VUELOS_SEO.map(
  (r) => `  <url>
    <loc>${URL_BASE_SEO}/vuelos/${r.slug}</loc>
    <lastmod>${FECHA_ESTABLE_SITEMAP}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>`
).join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
