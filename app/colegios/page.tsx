import { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import ColegiosLandingClient from "./ColegiosLandingClient";
import { PAQUETES_COLEGIOS } from "./datos";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Viajes de Promoción y Graduación Todo Incluido (Cusco, Punta Sal, Tarapoto, Cartagena y Punta Cana) | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Agencia especializada en viajes de promoción para colegios (primaria y secundaria), institutos y universidades en Lima. Paquetes Todo Incluido a Tarapoto desde $319 USD, Cusco desde $369 USD, Punta Sal desde $489 USD, Cartagena desde $649 USD y Punta Cana desde $1,090 USD. Contrato formal y pagos en cuotas (RUC 20614914239)."),
  keywords: [
    "viajes de promocion escolar todo incluido lima peru",
    "paquetes de viajes de promocion a cusco 2026",
    "viajes de promocion a punta sal y mancora",
    "viajes de promocion a cartagena y punta cana",
    "viajes de graduacion universidades institutos peru",
    "agencia de viajes para colegios en lima norte los olivos",
    "cityland travel promociones escolares",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/colegios",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/colegios",
    title:
      "Viajes de Promoción y Graduación Todo Incluido — Cityland Travel",
    description:
      "Cusco, Punta Sal, Tarapoto, Cartagena, Punta Cana y Cancún Todo Incluido desde $319 USD. Contrato formal, seguro médico grupal y pagos en cuotas.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Viajes de Promoción para Colegios, Institutos y Universidades — Cityland Travel",
      },
    ],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const JSON_LD_COLEGIOS = {
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
          name: "Viajes de Promoción para Colegios, Institutos y Universidades",
          item: "https://citylandtravel.com/colegios",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Programas de Viajes de Promoción y Graduación en Perú",
      numberOfItems: PAQUETES_COLEGIOS.length,
      itemListElement: PAQUETES_COLEGIOS.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristTrip",
          name: `Viaje de Promoción: ${p.titulo} (${p.duracion})`,
          description: p.resumenCorto,
          image: p.img,
          provider: {
            "@type": "TravelAgency",
            name: "Cityland Travel",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: String(p.precioNumeroUSD),
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/colegios",
          },
        },
      })),
    },
  ],
};

export default function ColegiosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_COLEGIOS) }}
      />
      <ColegiosLandingClient />
    </>
  );
}
