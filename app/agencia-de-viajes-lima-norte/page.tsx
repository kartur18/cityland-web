import type { Metadata } from "next";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";

export const metadata: Metadata = {
  title: "Agencia de Viajes en Lima Norte — Cityland Travel | Vuelos, Caribe y Europa",
  description:
    "Agencia de viajes formal en Lima Norte (RUC 20614914239 · Av. Antúnez de Mayolo 814, Los Olivos). Paquetes Todo Incluido a Punta Cana, Cancún, Cartagena y vuelos a España desde $890 USD.",
  alternates: { canonical: "https://citylandtravel.com/agencia-de-viajes-lima-norte" },
};

const CONFIG = obtenerConfigAgenciaOficial("Lima Norte");

export default function AgenciaLimaNortePage() {
  return <AirlineLandingTemplate config={CONFIG} />;
}
