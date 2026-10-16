import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cityland Travel — Agencia de Viajes",
    short_name: "Cityland",
    description: "Paquetes migratorios y turísticos desde Lima. Cotización inmediata por WhatsApp en menos de 2 minutos.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1628",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
