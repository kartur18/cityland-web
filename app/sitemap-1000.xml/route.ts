import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";
import { FECHA_ESTABLE_SITEMAP } from "@/lib/seo-arquitectura";

export const revalidate = 86400;

export async function GET() {
  const items = sitemap();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${FECHA_ESTABLE_SITEMAP}</lastmod>
    <changefreq>${item.changeFrequency || "weekly"}</changefreq>
    <priority>${item.priority ?? 0.8}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
