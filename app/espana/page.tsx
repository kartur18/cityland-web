import { Metadata } from "next";
import EspanaLandingClient from "./EspanaLandingClient";
import {
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
} from "@/lib/seo-arquitectura";
import { textoPrecio } from "@/lib/formato-precio";

const rawTitle =
  "Paquetes Migratorios a España y Madrid Desde $699 USD | Cityland Travel";
const rawDesc =
  "Paquete migratorio a España desde Lima ($699, $799, $899 y $999 según fecha): pasaje de avión de ida + boleto de regreso reservado para Migraciones + hotel + seguro Schengen 30.000€ + check-in 24h antes.";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO(rawTitle),
  description: optimizarMetaDescriptionSEO(rawDesc),
  keywords: [
    "paquetes migratorios a espana desde lima",
    "paquete migratorio madrid 699",
    "paquete migratorio madrid 799",
    "viajar a espana desde peru 2026",
    "paquete migratorio espana precio dolares",
    "requisitos para viajar a espana peruanos 2026",
    "bolsa de viaje espana 2026 boe 122 euros",
    "carta de invitacion espana vuelos",
    "seguro schengen 30000 euros lima peru",
    "cityland travel espana",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/espana",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/espana",
    title: optimizarMetaTitleSEO(rawTitle),
    description: optimizarMetaDescriptionSEO(rawDesc),
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/images/espana/plaza-mayor.jpg",
        width: 1200,
        height: 630,
        alt: "Paquetes Migratorios a España desde $699 USD - Cityland Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: optimizarMetaTitleSEO(rawTitle),
    description: optimizarMetaDescriptionSEO(rawDesc),
    images: ["https://citylandtravel.com/images/espana/plaza-mayor.jpg"],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const JSON_LD_ESPANA = {
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
          name: "Paquetes Migratorios a España desde $699 USD",
          item: "https://citylandtravel.com/espana",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Paquete Migratorio a España desde Lima (5 Documentos Completos)",
      image: "https://citylandtravel.com/images/espana/plaza-mayor.jpg",
      description:
        "Paquete migratorio formal a España con pasaje de avión de ida, boleto de regreso reservado en sistema para Migraciones, reserva de hotel confirmada, seguro Schengen 30.000€ y check-in 24h antes.",
      provider: {
        "@type": "TravelAgency",
        name: "Cityland Travel",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "699",
        highPrice: "999",
        offerCount: "4",
        offers: [
          {
            "@type": "Offer",
            name: "Plan Promo España — Fines de Febrero, Marzo, Abril y Mayo",
            priceSpecification: { "@type": "PriceSpecification", minPrice: "699", priceCurrency: "USD" },
            priceCurrency: "USD",
            priceValidUntil: "2027-05-31",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
          {
            "@type": "Offer",
            name: "Plan Smart España — Junio, Septiembre, Octubre y Noviembre",
            priceSpecification: { "@type": "PriceSpecification", minPrice: "799", priceCurrency: "USD" },
            priceCurrency: "USD",
            priceValidUntil: "2026-11-30",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
          {
            "@type": "Offer",
            name: "Plan Plus España — Salidas cercanas Enero / 1ra quincena Febrero",
            priceSpecification: { "@type": "PriceSpecification", minPrice: "899", priceCurrency: "USD" },
            priceCurrency: "USD",
            priceValidUntil: "2027-02-15",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
          {
            "@type": "Offer",
            name: "Plan Full 23kg España — Temporada Alta Diciembre / Julio / Agosto",
            priceSpecification: { "@type": "PriceSpecification", minPrice: "999", priceCurrency: "USD" },
            priceCurrency: "USD",
            priceValidUntil: "2026-12-31",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
        ],
      },
    },
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      name: "Cityland Travel",
      legalName: "Cityland Group E.I.R.L.",
      url: "https://citylandtravel.com",
      taxID: "20614914239",
      telephone: "+51944103890",
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
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿El paquete a España desde $699 USD es ida y vuelta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: textoPrecio("Si viajas a España para quedarte, no tiene sentido gastar $1,500 en un avión de regreso al que no te vas a subir. Por eso nuestro Paquete Migratorio incluye tu pasaje de avión de ida emitido + tu boleto de regreso reservado en sistema para presentar en el aeropuerto y en Migraciones + tu reserva de hotel + tu seguro Schengen de 30.000€ + tu check-in hecho 24h antes."),
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta el paquete a España según el mes de viaje y cómo se separa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: textoPrecio("Contamos con 4 planes oficiales según tu fecha de viaje: Plan Promo $699 USD (fines de Feb, Mar, Abr, May — separa con $350), Plan Smart $799 USD (Jun, Sep, Oct, Nov — separa con $400), Plan Plus $899 USD (salidas cercanas Ene/1ra quincena Feb — separa con $450) y Plan Full $999 USD (temporada alta Dic/Jul/Ago o con maleta de 23 kg en bodega — separa con $500)."),
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
