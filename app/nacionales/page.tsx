import PeruPage, { metadata as peruMetadata } from "../peru/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...peruMetadata,
  title: "Viajes y Paquetes Nacionales por el Perú (Cusco, Máncora, Arequipa y Selva) | Cityland Travel",
  description:
    "Programas y paquetes turísticos nacionales desde Lima: Cusco, Machu Picchu, Punta Sal, Máncora, Tarapoto, Iquitos, Arequipa y Paracas con vuelos y hoteles incluidos.",
  alternates: {
    canonical: "https://citylandtravel.com/nacionales",
  },
};

export default PeruPage;
