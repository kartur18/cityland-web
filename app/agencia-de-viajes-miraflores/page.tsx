import type { Metadata } from "next";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";

export const metadata: Metadata = {
  title: "Agencia de Viajes Cityland Travel — Vuelos, Resorts Todo Incluido y Europa",
  description:
    "Agencia de viajes formal en Lima (RUC 20614914239). Paquetes Todo Incluido a Punta Cana, Cancún, Cartagena, Cusco y vuelos a España con carpeta migratoria. Separa con el 50%.",
  alternates: { canonical: "https://citylandtravel.com/agencia-de-viajes-miraflores" },
};

const CONFIG = obtenerConfigAgenciaOficial("Miraflores y San Isidro");

export default function AgenciaMirafloresPage() {
  return <AirlineLandingTemplate config={CONFIG} />;
}
