import type { Metadata } from "next";
import PanamaMedellinLanding from "./PanamaMedellinLanding";

export const metadata: Metadata = {
  title: "Paquete Panamá + Medellín desde $799 | Cityland Travel",
  description:
    "Viaja a Panamá y Medellín 7 días todo incluido desde $799. Vuelos Copa Airlines, hoteles, desayunos, traslados y tours. Junio 2026.",
  openGraph: {
    title: "Paquete Panamá + Medellín desde $799 | Cityland Travel",
    description:
      "Viaja a Panamá y Medellín 7 días todo incluido desde $799. Vuelos Copa Airlines, hoteles, desayunos, traslados y tours. Junio 2026.",
    type: "website",
    locale: "es_PE",
    siteName: "Cityland Travel",
    images: [
      {
        url: "/images/paquetes/panama-medellin/hero-panama.png",
        width: 1200,
        height: 630,
        alt: "Paquete Panamá + Medellín — Cityland Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paquete Panamá + Medellín desde $799 | Cityland Travel",
    description:
      "Viaja a Panamá y Medellín 7 días todo incluido desde $799. Vuelos Copa Airlines, hoteles, desayunos, traslados y tours.",
    images: ["/images/paquetes/panama-medellin/hero-panama.png"],
  },
};

export default function PanamaMedellinPage() {
  return <PanamaMedellinLanding />;
}
