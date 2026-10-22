import type { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Agencia de Viajes Cityland Travel — Paquetes Internacionales y Vuelos"),
  description: optimizarMetaDescriptionSEO("Agencia de viajes formal en Lima (RUC 20614914239). Paquetes Todo Incluido a Punta Cana, Cancún, Cartagena, Cusco y vuelos a España con carpeta migratoria. Separa con el 50%."),
  alternates: { canonical: "https://citylandtravel.com/agencia-de-viajes-san-martin-de-porres" },
};

const CONFIG = obtenerConfigAgenciaOficial("San Martín de Porres y Lima Norte");

export default function AgenciaSMPPage() {
  return <AirlineLandingTemplate config={CONFIG} />;
}
