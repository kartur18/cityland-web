import { NextResponse } from "next/server";
import { INDICE_MADRID_10K } from "@/lib/catalogo-madrid-10k";
import { FECHA_ESTABLE_SITEMAP, URL_BASE_SEO } from "@/lib/seo-arquitectura";

export const revalidate = 86400;

export async function GET() {
  const urls: { loc: string; priority: string }[] = [
    { loc: `${URL_BASE_SEO}/madrid`, priority: "1.00" },
  ];

  for (const item of INDICE_MADRID_10K) {
    urls.push({
      loc: `${URL_BASE_SEO}/madrid/${item.slug}`,
      priority: "0.95",
    });
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
