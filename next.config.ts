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
      { protocol: "https" as const, hostname: "cdn.travelconline.com", pathname: "/images/**" },
    ],
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      // Videos del recorrido de los paquetes armados: los publica el mayorista en su CDN (28-oct-2026).
      "media-src 'self' https://viaje.b-cdn.net",
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
      // Lo que Cityland no vende o no existe (26-oct-2026): entradas a fútbol y F1, vuelos a ciudades sin vuelo
      // regular, circuitos lejanos de 4 a 8 días y «vuelo + hotel» a Paracas.
      { source: "/ofertas/:s(tour-futbol-madrid-y-barcelona.*|parque-warner-y-bernabeu-madrid.*|formula-1-gran-premio-espana.*)", destination: "/espana", permanent: true },
      { source: "/ofertas/:s(portaventura-y-camp-nou-barcelona.*|viaje-champions-league-europa.*)", destination: "/europa-turquia", permanent: true },
      { source: "/ofertas/:s(formula-1-gran-premio-brasil.*)", destination: "/paquetes-a-brasil", permanent: true },
      { source: "/ofertas/:s(formula-1-gran-premio-miami.*)", destination: "/paquetes-a-estados-unidos", permanent: true },
      { source: "/ofertas/:s(grupos|paquetes|cotizacion|organizacion|preventa)-viajes-para-hinchas-partidos-y-mundial", destination: "/", permanent: true },
      { source: "/vuelos/:r(.*huaraz.*)", destination: "/destinos/huaraz-laguna-69-pastoruri-chavin", permanent: true },
      { source: "/vuelos/:r(.*chachapoyas.*)", destination: "/destinos/chachapoyas-kuelap-catarata-gocta", permanent: true },
      { source: "/vuelos/:r(.*tingo-maria.*)", destination: "/nacionales", permanent: true },
      { source: "/ofertas/:s(estadia-hotel-.*paracas.*-vuelo-incluido)", destination: "/destinos/paracas-ica-huacachina-nazca", permanent: true },
      { source: "/ofertas/vuelo-mas-hotel-a-paracas", destination: "/destinos/paracas-ica-huacachina-nazca", permanent: true },
      { source: "/ofertas/:e(paquete|circuito|oferta)-:c(madrid-y-barcelona-tren-ave|madrid-barcelona-y-roma|madrid-paris-y-roma|roma-florencia-y-venecia|gran-tour-de-italia|espana-e-italia-completo|madrid-y-andalucia|barcelona-costa-azul-y-roma|santuarios-marianos-europa|espana-francia-suiza-italia|madrid-y-lisboa-fatima|paris-brujas-y-amsterdam|londres-paris-y-amsterdam|praga-viena-y-budapest-imperial|atenas-e-islas-griegas|estambul-capadocia-pamukkale|turquia-y-dubai-combinado|turquia-egipto-y-dubai|tierra-santa-y-roma|tokio-kioto-y-osaka)-:d(4-dias-3-noches|5-dias-4-noches|6-dias-5-noches|7-dias-6-noches|8-dias-7-noches)", destination: "/europa-turquia", permanent: true },
      // Eurotrips de menos de 17 días, recorridos regionales de menos de 15 y un solo país de menos de 12 (26-oct-2026).
      { source: "/ofertas/:e(paquete|circuito|oferta)-:c(madrid-barcelona-y-roma|madrid-paris-y-roma|espana-e-italia-completo|barcelona-costa-azul-y-roma|santuarios-marianos-europa|espana-francia-suiza-italia)-:d(10-dias-9-noches|12-dias-11-noches|15-dias-14-noches)", destination: "/ofertas/:e-:c-17-dias-16-noches", permanent: true },
      { source: "/ofertas/:e(paquete|circuito|oferta)-:c(paris-brujas-y-amsterdam|londres-paris-y-amsterdam|praga-viena-y-budapest-imperial|madrid-y-lisboa-fatima)-:d(10-dias-9-noches|12-dias-11-noches)", destination: "/ofertas/:e-:c-15-dias-14-noches", permanent: true },
      { source: "/ofertas/:e(paquete|circuito|oferta)-:c(madrid-y-barcelona-tren-ave|roma-florencia-y-venecia|gran-tour-de-italia|madrid-y-andalucia|atenas-e-islas-griegas)-:d(10-dias-9-noches)", destination: "/ofertas/:e-:c-12-dias-11-noches", permanent: true },
      { source: "/destinos/madrid-paris-roma-12-dias", destination: "/destinos/madrid-paris-roma-17-dias", permanent: true },
      // Páginas de relleno «paquetes a X desde Y» que ya no existen (2,918 en 404 en Search Console): van a la
      // página del país; la regla exige el destino exacto + «-desde-», así que no toca ofertas vivas (26-oct-2026).
      { source: "/ofertas/paquetes-a-:destino(punta-cana)-desde-:origen", destination: "/paquetes-a-punta-cana", permanent: true },
      { source: "/ofertas/paquetes-a-:destino(cancun|riviera-maya|mexico)-desde-:origen", destination: "/paquetes-a-mexico", permanent: true },
      { source: "/ofertas/paquetes-a-:destino(cartagena|san-andres|medellin|bogota|santa-marta|colombia)-desde-:origen", destination: "/paquetes-a-colombia", permanent: true },
      { source: "/ofertas/paquetes-a-:destino(rio-de-janeiro|brasil|florianopolis)-desde-:origen", destination: "/paquetes-a-brasil", permanent: true },
      { source: "/ofertas/paquetes-a-:destino(buenos-aires|bariloche|argentina)-desde-:origen", destination: "/paquetes-a-argentina", permanent: true },
      { source: "/ofertas/paquetes-a-:destino(santiago|chile)-desde-:origen", destination: "/paquetes-a-chile", permanent: true },
      { source: "/ofertas/paquetes-a-:destino(miami|orlando|nueva-york)-desde-:origen", destination: "/paquetes-a-estados-unidos", permanent: true },
      { source: "/ofertas/paquetes-a-:destino(cusco|tarapoto|iquitos|arequipa|puno-titicaca|mancora-punta-sal|huaraz|cajamarca)-desde-:origen", destination: "/nacionales", permanent: true },
      { source: "/ofertas/paquetes-a-:destino(madrid|barcelona|espana)-desde-:origen", destination: "/espana", permanent: true },
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

