import { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import CaribeLandingClient from "./CaribeLandingClient";
import { DESTINOS_TOP_PERU } from "./datos";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Paquetes a Punta Cana, Cancún, Cartagena, Medellín, Río de Janeiro y Miami desde Lima | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Paquetes turísticos Todo Incluido saliendo desde Lima: Medellín desde $589 USD, Cartagena desde $599 USD, Río de Janeiro desde $749 USD, Cancún desde $999 USD, Punta Cana desde $1,049 USD y Miami desde $999 USD. Separa hoy con el 50% de inicial en Cityland Travel (RUC 20614914239 · Los Olivos)."),
  keywords: [
    "paquetes turisticos punta cana todo incluido desde lima",
    "paquetes a cancun todo incluido desde lima peru",
    "viajes a cartagena desde lima todo incluido",
    "paquetes a medellin y guatape desde lima",
    "paquetes a rio de janeiro desde lima",
    "viajes a miami y orlando desde lima peru",
    "ofertas de viajes al caribe desde peru 2026",
    "agencia de viajes en lima norte los olivos",
    "cityland travel caribe",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/caribe",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/caribe",
    title:
      "Paquetes Todo Incluido: Punta Cana, Cancún, Colombia, Brasil y Miami desde Lima — Cityland Travel",
    description:
      "Vuelos ida y vuelta + Hoteles y Resorts 5★ + Traslados y Tours. Viaja a Colombia y Brasil solo con DNI. Separa con el 50% de inicial.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Paquetes Turísticos a Punta Cana, Cancún, Cartagena, Medellín, Río y Miami — Cityland Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Paquetes a Punta Cana, Cancún, Cartagena, Medellín, Río y Miami desde Lima — Cityland Travel",
    description:
      "Vuelos confirmados + Resorts All Inclusive + Tours y Traslados saliendo desde Lima. Separa hoy con el 50% de inicial.",
    images: ["https://citylandtravel.com/opengraph-image"],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const JSON_LD_CARIBE = {
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
          name: "Paquetes a Punta Cana, Cancún, Colombia, Brasil y Miami",
          item: "https://citylandtravel.com/caribe",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Los 6 Paquetes Turísticos Más Vendidos en Perú saliendo desde Lima",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: DESTINOS_TOP_PERU.length,
      itemListElement: DESTINOS_TOP_PERU.map((d, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristTrip",
          name: `Paquete Turístico a ${d.ciudad} (${d.duracion}) desde Lima`,
          description: `${d.resumenCorto}. Incluye: ${d.checks.join(", ")}.`,
          image: d.img.startsWith("http") ? d.img : `https://citylandtravel.com${d.img}`,
          provider: {
            "@type": "TravelAgency",
            name: "Cityland Travel E.I.R.L.",
          },
          offers: {
            "@type": "AggregateOffer",
            offerCount: "1",
            url: `https://citylandtravel.com/caribe#${d.id}`,
            priceCurrency: "USD",
            lowPrice: String(d.precioUSD),
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      name: "Cityland Travel",
      legalName: "Cityland Travel E.I.R.L.",
      url: "https://citylandtravel.com/caribe",
      taxID: "20614914239",
      telephone: "+51944103890",
      priceRange: "$$",
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
        latitude: -11.9912,
        longitude: -77.0785,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué destinos puedo viajar desde Perú solo con DNI sin pasaporte?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los ciudadanos peruanos pueden viajar a Cartagena de Indias, Medellín (Colombia) y Río de Janeiro (Brasil) únicamente con su DNI peruano vigente, sin necesidad de pasaporte ni visa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué incluyen los paquetes Todo Incluido a Punta Cana y Cancún?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Incluyen boletos aéreos ida y vuelta desde Lima, traslados aeropuerto-hotel-aeropuerto, alojamiento en resort frente al mar con desayunos, almuerzos, cenas, snacks y bebidas ilimitadas las 24 horas, seguro de asistencia médica y excursión destacada.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo separo mi paquete turístico en Cityland Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes congelar tu tarifa promocional hoy con el 50% de inicial en nuestra oficina física en Av. Antúnez de Mayolo N. 814, Los Olivos (Lima) o mediante cuentas bancarias empresariales de Cityland Travel E.I.R.L. (RUC 20614914239).",
          },
        },
      ],
    },
  ],
};

export default function CaribePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_CARIBE) }}
      />
      <CaribeLandingClient />
    </>
  );
}
