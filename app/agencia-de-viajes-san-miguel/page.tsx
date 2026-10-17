import type { Metadata } from "next";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";

export const metadata: Metadata = {
  title: "Agencia de Viajes Cityland Travel — Paquetes al Caribe, España y Cusco",
  description:
    "Agencia de viajes formal en Lima (RUC 20614914239). Paquetes Todo Incluido a Punta Cana, Cancún, Cartagena, Cusco y vuelos a España con carpeta migratoria. Separa con el 50%.",
  alternates: { canonical: "https://citylandtravel.com/agencia-de-viajes-san-miguel" },
};

const CONFIG = obtenerConfigAgenciaOficial("San Miguel, Pueblo Libre y Magdalena");

export default function AgenciaSanMiguelPage() {
  return <AirlineLandingTemplate config={CONFIG} />;
}
