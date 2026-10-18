import type { Metadata } from "next";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";

export const metadata: Metadata = {
  title: "Agencia de Viajes en Los Olivos — Sede Central Cityland Travel",
  description:
    "Sede principal de Cityland Travel en Av. Antúnez de Mayolo N. 814, Los Olivos (RUC 20614914239). Paquetes a Punta Cana, Cancún, Cartagena, Cusco y vuelos a España desde $1,290 USD.",
  alternates: { canonical: "https://citylandtravel.com/agencia-de-viajes-los-olivos" },
};

const CONFIG = obtenerConfigAgenciaOficial("Los Olivos");

export default function AgenciaLosOlivosPage() {
  return <AirlineLandingTemplate config={CONFIG} />;
}
