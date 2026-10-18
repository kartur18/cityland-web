import { NextResponse } from "next/server";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, BLOG_POSTS } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import { AGENCIAS_LOCALES_SEO } from "@/lib/catalogo-agencias-locales";
import { BLOG_POSTS_MASIVOS } from "@/lib/catalogo-blog-masivo";
import { FECHA_ESTABLE_SITEMAP, URL_BASE_SEO } from "@/lib/seo-arquitectura";

export const revalidate = 86400;

export async function GET() {
  const destinos = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS];
  const blogs = [...BLOG_POSTS, ...BLOG_POSTS_MASIVOS];

  const urls = [
    ...destinos.map((d) => ({ loc: `${URL_BASE_SEO}/destinos/${d.slug}`, priority: "0.88" })),
    ...VIAJES_ESPECIALIZADOS_SEO.map((v) => ({ loc: `${URL_BASE_SEO}/viajes/${v.slug}`, priority: "0.86" })),
    ...AGENCIAS_LOCALES_SEO.map((a) => ({ loc: `${URL_BASE_SEO}/agencia/${a.slug}`, priority: "0.84" })),
    ...blogs.map((b) => ({ loc: `${URL_BASE_SEO}/blog/${b.slug}`, priority: "0.78" })),
  ];

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
