import type { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Agencia de Viajes para Independencia — Vuelos y Paquetes | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Atención para viajeros de Independencia muy cerca de Plaza Norte y MegaPlaza (RUC 20614914239). Paquetes a Punta Cana, Cancún, Cusco y vuelos a España. Separa con 50%."),
  alternates: { canonical: "https://citylandtravel.com/agencia-de-viajes-independencia" },
};

const CONFIG = obtenerConfigAgenciaOficial("Independencia y Lima Norte");

export default function AgenciaIndependenciaPage() {
  return <AirlineLandingTemplate config={CONFIG} />;
}
