import { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import CuscoLandingClient from "./CuscoLandingClient";
import { PAQUETES_CUSCO } from "./datos";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Paquetes Turísticos a Cusco y Machu Picchu Todo Incluido desde Lima | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Paquetes a Cusco y Machu Picchu saliendo desde Lima: 4 Días con Valle Sagrado desde $549, 5 Días con Montaña de 7 Colores desde $649 y 6 Días con Laguna Humantay desde $749, con vuelo desde Lima. Vuelos, hotel, tren y entradas oficiales en Cityland Travel (RUC 20614914239)."),
  keywords: [
    "paquetes turisticos a cusco todo incluido desde lima",
    "viajes a cusco y machu picchu precios 2026",
    "paquete cusco 4 dias 3 noches todo incluido",
    "tour machu picchu y montana de 7 colores desde lima",
    "ofertas de viajes a cusco en avion",
    "agencia de viajes a cusco en lima los olivos",
    "cityland travel cusco",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/cusco",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/cusco",
    title:
      "Paquetes Turísticos a Cusco y Machu Picchu Todo Incluido desde Lima — Cityland Travel",
    description:
      "Vuelos ida y vuelta + Hotel + Tren Turístico + Entradas a Machu Picchu, Valle Sagrado y Montaña de 7 Colores desde $499 USD. Separa hoy con el 50%.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Paquetes Turísticos a Cusco y Machu Picchu — Cityland Travel",
      },
    ],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const JSON_LD_CUSCO = {
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
          name: "Paquetes Turísticos a Cusco y Machu Picchu",
          item: "https://citylandtravel.com/cusco",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Paquetes Turísticos a Cusco y Machu Picchu desde Lima",
      numberOfItems: PAQUETES_CUSCO.length,
      itemListElement: PAQUETES_CUSCO.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristTrip",
          name: `${p.titulo} (${p.duracion}) desde Lima`,
          description: p.resumenCorto,
          image: p.img,
          provider: {
            "@type": "TravelAgency",
            name: "Cityland Travel",
          },
          offers: {
            "@type": "AggregateOffer",
            offerCount: "1",
            priceCurrency: "USD",
            lowPrice: String(p.precioUSD),
            highPrice: String(p.precioUSD),
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/cusco",
          },
        },
      })),
    },
  ],
};

export default function CuscoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_CUSCO) }}
      />
      <CuscoLandingClient />
    </>
  );
}
