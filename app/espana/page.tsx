import { Metadata } from "next";
import EspanaLandingClient from "./EspanaLandingClient";

export const metadata: Metadata = {
  title:
    "Paquetes Migratorios a España desde $890 USD | Vuelos, Seguro Schengen y Asesoría Barajas — Cityland Travel",
  description:
    "Paquetes migratorios completos a España desde Lima con Cityland Travel (RUC 20614914239 · Los Olivos). Boleto aéreo confirmado, seguro Schengen 30.000€, reserva de hotel y asesoría 1 a 1 para pasar control migratorio en Barajas desde $890 USD. Separa con 50% de inicial.",
  keywords: [
    "paquetes migratorios a espana desde lima",
    "viajar a espana desde peru 2026",
    "paquete migratorio espana precio dolares",
    "requisitos para viajar a espana peruanos 2026",
    "seguro schengen 30000 euros lima peru",
    "vuelos lima madrid con equipaje",
    "asesoria migratoria barajas madrid peru",
    "agencia de viajes en los olivos espana",
    "cityland travel espana",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/espana",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/espana",
    title: "Paquetes Migratorios a España desde $890 USD — Cityland Travel",
    description:
      "Tu viaje a España con carpeta completa desde Lima: Noviembre (Desde $890 USD), Diciembre (Desde $1,090 USD), Enero (Desde $1,050 USD) y Primavera (Desde $899 USD). Separa con el 50% de inicial.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/images/espana/plaza-mayor.jpg",
        width: 1200,
        height: 630,
        alt: "Paquetes Migratorios a España desde Lima - Cityland Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paquetes Migratorios a España desde $890 USD — Cityland Travel",
    description:
      "Vuelos confirmados, seguro Schengen 30.000€, reserva de hotel y asesoría migratoria en Lima. Separa con 50%.",
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
          name: "Paquetes Migratorios a España desde $890 USD",
          item: "https://citylandtravel.com/espana",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Paquete Migratorio a España desde Lima (Carpeta Completa)",
      image: "https://citylandtravel.com/images/espana/plaza-mayor.jpg",
      description:
        "Paquete migratorio formal a España con boleto aéreo confirmado (Iberia, Air Europa o LATAM), seguro Schengen 30.000€, reserva de hotel y asesoría 1 a 1 para pasar el control migratorio de Barajas.",
      provider: {
        "@type": "TravelAgency",
        name: "Cityland Travel",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "890",
        highPrice: "1090",
        offerCount: "4",
        offers: [
          {
            "@type": "Offer",
            name: "Paquete Migratorio España — Salida Noviembre",
            price: "890",
            priceCurrency: "USD",
            priceValidUntil: "2026-11-30",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
          {
            "@type": "Offer",
            name: "Paquete Migratorio España — Salida Diciembre",
            price: "1090",
            priceCurrency: "USD",
            priceValidUntil: "2026-12-31",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
          {
            "@type": "Offer",
            name: "Paquete Migratorio España — Salida Enero",
            price: "1050",
            priceCurrency: "USD",
            priceValidUntil: "2027-01-31",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
          {
            "@type": "Offer",
            name: "Paquete Migratorio España — Salidas Marzo · Abril · Mayo",
            price: "899",
            priceCurrency: "USD",
            priceValidUntil: "2027-05-31",
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/espana",
          },
        ],
      },
    },
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      name: "Cityland Travel",
      legalName: "Cityland Travel E.I.R.L.",
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
          name: "¿Los peruanos necesitamos visa para viajar a España en 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Los ciudadanos peruanos están exentos de visa consular para ingresar a España y a todo el Espacio Schengen por estancias de hasta 90 días. Lo indispensable es llevar la carpeta migratoria completa (boleto de ida y vuelta, seguro Schengen de 30.000€, reserva de hospedaje y sustento económico).",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué incluye el Paquete Migratorio a España de Cityland Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Incluye boleto aéreo confirmado con aerolíneas oficiales (Iberia, Air Europa o LATAM) con equipaje, seguro médico internacional Schengen de 30.000€ obligatorio, voucher de hotel para control fronterizo y asesoría migratoria personalizada 1 a 1 para pasar Barajas sin problemas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta el paquete a España y cómo se separa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las tarifas promocionales según mes de salida son: Noviembre Desde $890 USD, Diciembre Desde $1,090 USD, Enero Desde $1,050 USD y Marzo/Abril/Mayo Desde $899 USD. Se separa hoy con el 50% de inicial y el saldo se cancela antes del vuelo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde está ubicada la oficina de Cityland Travel en Lima?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nuestra oficina física está en Av. Antúnez de Mayolo N. 814, Los Olivos, Lima (Cityland Travel E.I.R.L. · RUC 20614914239). Atendemos de lunes a sábado de 9:00 am a 7:00 pm y emitimos boleta o factura electrónica SUNAT.",
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
