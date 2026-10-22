import { VistaCatalogoHub } from "../directorio/page";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Vuelos y Pasajes Aéreos Nacionales e Internacionales desde Lima | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Cotiza boletos aéreos económicos o corporativos desde Lima a Madrid, Barcelona, Miami, Punta Cana, Cancún, Cartagena, Cusco y todo el mundo con impuestos incluidos."),
  alternates: {
    canonical: "https://citylandtravel.com/vuelos",
  },
};

export default function VuelosIndexPage() {
  return <VistaCatalogoHub modoHub="vuelos" />;
}
