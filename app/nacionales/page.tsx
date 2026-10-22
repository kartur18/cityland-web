import PeruPage, { metadata as peruMetadata } from "../peru/page";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...peruMetadata,
  title: optimizarMetaTitleSEO("Viajes y Paquetes Nacionales por el Perú (Cusco, Máncora, Arequipa y Selva) | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Programas y paquetes turísticos nacionales desde Lima: Cusco, Machu Picchu, Punta Sal, Máncora, Tarapoto, Iquitos, Arequipa y Paracas con vuelos y hoteles incluidos."),
  alternates: {
    canonical: "https://citylandtravel.com/nacionales",
  },
};

export default PeruPage;
