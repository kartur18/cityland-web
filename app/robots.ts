import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: [
      "https://citylandtravel.com/sitemap.xml",
      "https://citylandtravel.com/sitemap-europa.xml",
      "https://citylandtravel.com/sitemap-ofertas.xml",
      "https://citylandtravel.com/sitemap-vuelos.xml",
      "https://citylandtravel.com/sitemap-destinos.xml",
    ],
  };
}
