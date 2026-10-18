import type { MetadataRoute } from "next";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, BLOG_POSTS } from "@/components/constantes";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import { AGENCIAS_LOCALES_SEO } from "@/lib/catalogo-agencias-locales";
import { BLOG_POSTS_MASIVOS } from "@/lib/catalogo-blog-masivo";
import { MIL_LANDINGS_COMERCIALES_SEO } from "@/lib/catalogo-mil-landings-comerciales";

const BASE = "https://citylandtravel.com";
const FECHA_SITEMAP = new Date("2026-10-17T12:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = FECHA_SITEMAP;

  const ofertasComerciales = MIL_LANDINGS_COMERCIALES_SEO.map((o) => ({
    url: `${BASE}/ofertas/${o.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.92,
  }));

  const rutasVuelos = RUTAS_VUELOS_SEO.map((r) => ({
    url: `${BASE}/vuelos/${r.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const destinos = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS].map((d) => ({
    url: `${BASE}/destinos/${d.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  const viajesEspecializados = VIAJES_ESPECIALIZADOS_SEO.map((v) => ({
    url: `${BASE}/viajes/${v.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.86,
  }));

  const agenciasLocales = AGENCIAS_LOCALES_SEO.map((a) => ({
    url: `${BASE}/agencia/${a.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.84,
  }));

  const blog = [...BLOG_POSTS, ...BLOG_POSTS_MASIVOS].map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  return [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/directorio`, lastModified: now, changeFrequency: "daily", priority: 0.99 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE}/destinos`, lastModified: now, changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE}/vuelos`, lastModified: now, changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE}/ofertas`, lastModified: now, changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE}/viajes`, lastModified: now, changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE}/agencia`, lastModified: now, changeFrequency: "daily", priority: 0.97 },
    { url: `${BASE}/espana`, lastModified: now, changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE}/caribe`, lastModified: now, changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE}/visas`, lastModified: now, changeFrequency: "daily", priority: 0.97 },
    { url: `${BASE}/cusco`, lastModified: now, changeFrequency: "daily", priority: 0.97 },
    { url: `${BASE}/cruceros`, lastModified: now, changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/seguros`, lastModified: now, changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/europa-turquia`, lastModified: now, changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/peru`, lastModified: now, changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/luna-de-miel`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/colegios`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/quinceaneras`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/nacionales`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/paquetes`, lastModified: now, changeFrequency: "daily", priority: 0.96 },
    { url: `${BASE}/promociones`, lastModified: now, changeFrequency: "daily", priority: 0.96 },
    { url: `${BASE}/empresas`, lastModified: now, changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/agencia-de-viajes-lima`, lastModified: now, changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/agencia-de-viajes-los-olivos`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/agencia-de-viajes-lima-norte`, lastModified: now, changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/agencia-de-viajes-san-miguel`, lastModified: now, changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/agencia-de-viajes-independencia`, lastModified: now, changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/agencia-de-viajes-comas`, lastModified: now, changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/agencia-de-viajes-miraflores`, lastModified: now, changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/agencia-de-viajes-surco`, lastModified: now, changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/agencia-de-viajes-san-martin-de-porres`, lastModified: now, changeFrequency: "weekly", priority: 0.94 },
    { url: `${BASE}/paquetes/panama-medellin`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...ofertasComerciales,
    ...rutasVuelos,
    ...destinos,
    ...viajesEspecializados,
    ...agenciasLocales,
    ...blog,
    { url: `${BASE}/politicas`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
