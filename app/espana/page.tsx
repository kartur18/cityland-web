import { Metadata } from "next";
import EspanaLandingClient from "./EspanaLandingClient";

export const metadata: Metadata = {
  title: "Paquetes Migratorios a España desde $695 USD | Vuelos y Asesoría — Cityland Travel",
  description:
    "Paquetes migratorios completos a España desde Lima con Cityland Travel (RUC 20614914239). Boleto aéreo confirmado, seguro Schengen 30.000€, hotel y asesoría 1 a 1 para pasar Barajas. Separa con 50% de inicial. Atención por WhatsApp con 7 asesores.",
  keywords:
    "paquetes migratorios espana lima, viajar a espana desde peru, paquete migratorio espana 695 dolares, vuelos lima madrid baratos, seguro schengen 30000 euros peru, requisitos para viajar a espana peruanos 2026, agencia de viajes lima espana, cityland travel espana",
  alternates: {
    canonical: "https://citylandtravel.com/espana",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/espana",
    title: "Paquetes Migratorios a España desde $695 USD — Cityland Travel",
    description:
      "Tu oportunidad en España. Salidas en Noviembre ($695), Diciembre ($875), Enero ($875) y Marzo-Abril-Mayo ($699). Separa con el 50% de inicial.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Paquetes Migratorios a España - Cityland Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paquetes Migratorios a España desde $695 USD — Cityland Travel",
    description:
      "Vuelos confirmados, seguro Schengen 30.000€ y asesoría migratoria en Lima. Separa con 50%.",
    images: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=630&q=85"],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima",
  },
};

const JSON_LD_ESPANA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Paquete Migratorio a España desde Lima",
      description:
        "Paquete migratorio formal a España con boleto aéreo confirmado, seguro Schengen 30.000€, hotel de tránsito y asesoría 1 a 1 para pasar el control migratorio de Barajas.",
      brand: {
        "@type": "Brand",
        name: "Cityland Travel",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "695",
        highPrice: "875",
        offerCount: "4",
        offers: [
          {
            "@type": "Offer",
            name: "Paquete Migratorio Noviembre",
            price: "695",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
          {
            "@type": "Offer",
            name: "Paquete Migratorio Diciembre",
            price: "875",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
          {
            "@type": "Offer",
            name: "Paquete Migratorio Enero",
            price: "875",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
          {
            "@type": "Offer",
            name: "Paquete Migratorio Marzo · Abril · Mayo",
            price: "699",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
        ],
      },
    },
    {
      "@type": "TravelAgency",
      name: "Cityland Travel",
      legalName: "Cityland Travel E.I.R.L.",
      url: "https://citylandtravel.com",
      taxID: "20614914239",
      telephone: "+51983882504",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Antúnez de Mayolo N. 814",
        addressLocality: "Los Olivos",
        addressRegion: "Lima",
        postalCode: "15304",
        addressCountry: "PE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -11.9556,
        longitude: -77.0642,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué incluye el Paquete Migratorio a España de Cityland Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Incluye boleto aéreo confirmado con aerolíneas IATA (Iberia, Air Europa o LATAM) con equipaje, seguro médico internacional Schengen de 30.000€ obligatorio, voucher de hotel para control fronterizo y asesoría migratoria personalizada 1 a 1 para pasar Barajas sin problemas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta el paquete a España?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las tarifas promocionales según mes de salida son: Noviembre desde $695 USD, Diciembre $875 USD, Enero $875 USD y Marzo/Abril/Mayo desde $699 USD. Se separa con el 50% de inicial.",
          },
        },
        {
          "@type": "Question",
          name: "¿Los peruanos necesitan visa para ingresar a España?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Los ciudadanos peruanos están exentos de visa consular de turismo para estadías de hasta 90 días en el Espacio Schengen. Solo deben presentar pasaporte vigente, pasaje de salida, seguro Schengen (30.000€) y justificación de estancia.",
          },
        },
      ],
    },
  ],
};

export default function EspanaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_ESPANA) }}
      />
      <EspanaLandingClient />
    </>
  );
}
