import type { MetadataRoute } from "next";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, BLOG_POSTS } from "@/components/constantes";

const BASE = "https://citylandtravel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const destinos = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE].map((d) => ({
    url: `${BASE}/destinos/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blog = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/espana`, lastModified: new Date(), changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE}/caribe`, lastModified: new Date(), changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE}/visas`, lastModified: new Date(), changeFrequency: "daily", priority: 0.97 },
    { url: `${BASE}/cusco`, lastModified: new Date(), changeFrequency: "daily", priority: 0.97 },
    { url: `${BASE}/cruceros`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/seguros`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/europa-turquia`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/peru`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/luna-de-miel`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/colegios`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/empresas`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/promociones`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/quinceaneras`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/nacionales`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/paquetes`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.92 },
    { url: `${BASE}/paquetes/panama-medellin`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...destinos,
    ...blog,
    { url: `${BASE}/politicas`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
