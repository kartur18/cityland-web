import {
  TELEFONO,
  TELEFONO_FORMATEADO,
  FAQS,
  PAQUETES_COMPLETOS,
} from "@/components/constantes";

const TRAVEL_AGENCY = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": "https://citylandtravel.com/#organization",
  name: "Cityland Travel",
  legalName: "Cityland Travel E.I.R.L.",
  url: "https://citylandtravel.com",
  logo: "https://citylandtravel.com/logo-oficial.png",
  image: "https://citylandtravel.com/images/espana/plaza-mayor.jpg",
  description:
    "Agencia de viajes formal en Lima (RUC 20614914239) especializada en paquetes migratorios a España y Europa, y paquetes turísticos Todo Incluido al Caribe, Sudamérica y Turquía.",
  telephone: TELEFONO,
  priceRange: "$$",
  taxID: "20614914239",
  foundingDate: "2015",
  areaServed: {
    "@type": "Country",
    name: "Perú",
  },
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/citylandtravel",
    "https://www.instagram.com/citylandtravel",
    "https://www.tiktok.com/@citylandtravel",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://citylandtravel.com/#website",
  url: "https://citylandtravel.com",
  name: "Cityland Travel — Agencia de Viajes en Lima",
  publisher: {
    "@id": "https://citylandtravel.com/#organization",
  },
  inLanguage: "es-PE",
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
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
      name: "Paquetes Migratorios a España desde $695",
      item: "https://citylandtravel.com/espana",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Paquete Panamá + Medellín desde $799",
      item: "https://citylandtravel.com/paquetes/panama-medellin",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.pregunta.replace("+51 906 450 098", TELEFONO_FORMATEADO),
    acceptedAnswer: {
      "@type": "Answer",
      text: f.respuesta.replace("+51 906 450 098", TELEFONO_FORMATEADO),
    },
  })),
};

const OFFERS = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Catálogo de Paquetes Turísticos y Migratorios 2026 desde Lima",
  itemListElement: PAQUETES_COMPLETOS.map((paquete, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: `${paquete.tituloComercial} (${paquete.duracion})`,
      description: paquete.resaltado,
      image: paquete.img.startsWith("http")
        ? paquete.img
        : `https://citylandtravel.com${paquete.img}`,
      brand: { "@type": "Brand", name: "Cityland Travel" },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: String(paquete.precioUSD),
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url:
          paquete.categoria === "europa"
            ? "https://citylandtravel.com/espana"
            : "https://citylandtravel.com/#paquetes",
      },
    },
  })),
};

export default function SchemaOrg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TRAVEL_AGENCY) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFERS) }}
      />
    </>
  );
}
