import type { MetadataRoute } from "next";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, BLOG_POSTS } from "@/components/constantes";

const BASE = "https://citylandtravelpe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const destinos = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE].map((d) => ({
    url: `${BASE}/destinos/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blog = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/politicas`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...destinos,
    ...blog,
  ];
}
