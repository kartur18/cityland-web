import type { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import PanamaMedellinLanding from "./PanamaMedellinLanding";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Paquete Panamá + Medellín 7 Días desde $799 USD (Salidas desde Lima) | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Viaja a Panamá y Medellín 7 días / 6 noches desde $799 USD con Cityland Travel (RUC 20614914239). Vuelos Copa Airlines desde Lima, hoteles, desayunos, traslados y tours (Canal de Panamá, Comuna 13 y Chiva Rumbera). Separa con el 50%."),
  keywords: [
    "paquete panama y medellin desde lima",
    "viaje a panama y medellin 2026",
    "tours panama medellin copa airlines",
    "agencia de viajes en lima colombia panama",
    "cityland travel panama medellin",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/paquetes/panama-medellin",
  },
  openGraph: {
    title: "Paquete Panamá + Medellín 7 Días desde $799 USD | Cityland Travel",
    description:
      "Viaja a Panamá y Medellín 7 días desde $799 USD. Vuelos Copa Airlines, hoteles, desayunos, traslados y tours. Separa con 50%.",
    url: "https://citylandtravel.com/paquetes/panama-medellin",
    type: "website",
    locale: "es_PE",
    siteName: "Cityland Travel",
    images: [
      {
        url: "https://citylandtravel.com/images/paquetes/panama-medellin/hero-panama.jpg",
        width: 1200,
        height: 630,
        alt: "Paquete Panamá + Medellín — Cityland Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paquete Panamá + Medellín desde $799 USD | Cityland Travel",
    description:
      "Viaja a Panamá y Medellín 7 días desde $799 USD. Vuelos Copa Airlines, hoteles, desayunos, traslados y tours.",
    images: ["https://citylandtravel.com/images/paquetes/panama-medellin/hero-panama.jpg"],
  },
};

const JSON_LD_PANAMA_MEDELLIN = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio — Cityland Travel",
          item: "https://citylandtravel.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Paquete Panamá + Medellín desde $799 USD",
          item: "https://citylandtravel.com/paquetes/panama-medellin",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Paquete Combinado Panamá + Medellín (7 Días / 6 Noches) desde Lima",
      description:
        "Paquete turístico a Ciudad de Panamá y Medellín con vuelos Copa Airlines desde Lima, hoteles con desayuno, traslados y tours incluidos.",
      image: "https://citylandtravel.com/images/paquetes/panama-medellin/hero-panama.jpg",
      provider: { "@type": "TravelAgency", name: "Cityland Travel" },
      offers: {
        "@type": "AggregateOffer",
        offerCount: "1",
        priceCurrency: "USD",
        lowPrice: "799",
        highPrice: "799",
        availability: "https://schema.org/InStock",
        url: "https://citylandtravel.com/paquetes/panama-medellin",
      },
    },
  ],
};

export default function PanamaMedellinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_PANAMA_MEDELLIN) }}
      />
      <PanamaMedellinLanding />
    </>
  );
}
