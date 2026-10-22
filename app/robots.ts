import type { MetadataRoute } from "next";
import { IDS_SITEMAP, urlSitemap } from "@/lib/sitemap-urls";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    // Índice + todos los sitemaps hijos que existen en app/.
    sitemap: [`${URL_BASE_SEO}/sitemap.xml`, ...IDS_SITEMAP.map(urlSitemap)],
  };
}
