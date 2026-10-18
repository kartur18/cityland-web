import type { Metadata } from "next";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";

export const metadata: Metadata = {
  title: "Agencia de Viajes para Comas — Vuelos, Caribe y Europa | Cityland Travel",
  description:
    "Atención para viajeros de Comas en nuestra sede de Lima Norte (RUC 20614914239). Paquetes a Punta Cana, Cancún, Cartagena, Cusco y vuelos a España. Separa con 50%.",
  alternates: { canonical: "https://citylandtravel.com/agencia-de-viajes-comas" },
};

const CONFIG = obtenerConfigAgenciaOficial("Comas y Lima Norte");

export default function AgenciaComasPage() {
  return <AirlineLandingTemplate config={CONFIG} />;
}
