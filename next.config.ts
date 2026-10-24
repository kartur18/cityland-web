import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      { protocol: "https" as const, hostname: "images.unsplash.com", pathname: "/photo-**" },
      { protocol: "https" as const, hostname: "viaje.b-cdn.net", pathname: "/megatravel-peru/**" },
    ],
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      // Google Ads (AW-18093363482) manda la conversión a ad.doubleclick.net y googleadservices: sin ellos la CSP la bloqueaba en cada carga (auditoría 23-oct).
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://ad.doubleclick.net https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      // El mapa de la oficina (inicio) es un iframe de Google Maps: sin frame-src la CSP lo bloqueaba.
      "frame-src https://www.google.com https://maps.google.com",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "0" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/admin/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "no-store, max-age=0" },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // /madrid y /espana vendían el mismo paquete y competían en Google: queda una sola página fuerte (24-oct-2026).
      { source: "/madrid", destination: "/espana", permanent: true },
      // Páginas que Google conocía (con apariciones o clics) y ya no existen: van a la más parecida (24-oct-2026).
      { source: "/ofertas/paquetes-a-barcelona-desde-huancayo", destination: "/destinos/barcelona-espana", permanent: true },
      { source: "/ofertas/paquetes-a-cajamarca-inca-desde-chimbote", destination: "/destinos/cajamarca-banos-del-inca-cumbemayo", permanent: true },
      { source: "/ofertas/paquetes-a-mancora-punta-sal-desde-cajamarca", destination: "/destinos/mancora-vichayito", permanent: true },
      { source: "/ofertas/paquetes-a-mancora-punta-sal-desde-piura", destination: "/destinos/mancora-vichayito", permanent: true },
      { source: "/vuelos/arequipa-cancun", destination: "/vuelos/lima-cancun", permanent: true },
      { source: "/vuelos/chiclayo-paris", destination: "/vuelos/lima-paris", permanent: true },
      { source: "/vuelos/iquitos-buenos-aires", destination: "/vuelos/lima-buenos-aires", permanent: true },
      { source: "/vuelos/juliaca-paris", destination: "/vuelos/lima-paris", permanent: true },
      { source: "/vuelos/tacna-punta-cana", destination: "/vuelos/lima-punta-cana", permanent: true },
      // Artículos del blog que competían con las guías de requisitos por la misma búsqueda (24-oct-2026).
      {
        source: "/blog/requisitos-viajar-espana-desde-peru-2026",
        destination: "/viajes/requisitos-viajar-a-espana-desde-peru",
        permanent: true,
      },
      {
        source: "/blog/requisitos-viajar-italia-roma-milan-peruanos",
        destination: "/viajes/requisitos-viajar-a-italia-desde-peru",
        permanent: true,
      },
      // Dos artículos competían por "bolsa de viaje para España": se juntaron en la guía que más aparecía en Google.
      {
        source: "/blog/bolsa-de-viaje-espana-2026-boe-122-euros-calculo",
        destination: "/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje",
        permanent: true,
      },
      {
        source: "/paquetes-migratorio",
        destination: "/paquetes-migratorios",
        permanent: true,
      },
      {
        source: "/paquetes-migratorio/:slug*",
        destination: "/paquetes-migratorios/:slug*",
        permanent: true,
      },
      {
        source: "/paquete-migratorio",
        destination: "/paquetes-migratorios",
        permanent: true,
      },
      {
        source: "/paquete-migratorio/:slug*",
        destination: "/paquetes-migratorios/:slug*",
        permanent: true,
      },
      {
        source: "/paquete-migratorios",
        destination: "/paquetes-migratorios",
        permanent: true,
      },
      {
        source: "/paquete-migratorios/:slug*",
        destination: "/paquetes-migratorios/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

