import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https" as const, hostname: "images.unsplash.com" },
      { protocol: "https" as const, hostname: "logo.clearbit.com" },
      { protocol: "https" as const, hostname: "viaje.b-cdn.net" },
    ],
  },
};

export default nextConfig;
