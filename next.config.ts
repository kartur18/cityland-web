import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https" as const, hostname: "images.unsplash.com", pathname: "/photo-**" },
      { protocol: "https" as const, hostname: "viaje.b-cdn.net", pathname: "/megatravel-peru/**" },
    ],
  },
  async headers() {
    // CSP no incluido a propósito: el sitio depende de scripts inline de Google
    // Ads/Analytics para las conversiones, y una CSP mal armada podría cortar
    // ese tracking en silencio. Requiere probarse aparte antes de sumarla.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
};

export default nextConfig;
