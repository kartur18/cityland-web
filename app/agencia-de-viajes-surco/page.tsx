import type { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Agencia de viajes en Surco | Cityland"),
  description: optimizarMetaDescriptionSEO("Agencia de viajes formal en Lima (RUC 20614914239). Paquetes Todo Incluido a Punta Cana, Cancún, Cartagena, Cusco y vuelos a España con carpeta migratoria. Separa con el 50%."),
  alternates: { canonical: "https://citylandtravel.com/agencia-de-viajes-surco" },
};

const CONFIG = obtenerConfigAgenciaOficial("Surco, San Borja y La Molina");

export default function AgenciaSurcoPage() {
  return <AirlineLandingTemplate config={CONFIG} />;
}
