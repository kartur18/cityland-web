import { TELEFONO_FORMATEADO, FAQS, PAQUETES_COMPLETOS } from "@/components/constantes";

// La organización y el sitio web ya los publica el layout (SCHEMA_ORGANIZACION_CITYLAND); aquí solo va lo propio del inicio.

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.pregunta.replace("+51 944 103 890", TELEFONO_FORMATEADO),
    acceptedAnswer: {
      "@type": "Answer",
      text: f.respuesta.replace("+51 944 103 890", TELEFONO_FORMATEADO),
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
      "@type": "TouristTrip",
      name: `${paquete.tituloComercial} (${paquete.duracion})`,
      description: paquete.resaltado,
      image: paquete.img.startsWith("http")
        ? paquete.img
        : `https://citylandtravel.com${paquete.img}`,
      provider: { "@id": "https://citylandtravel.com/#organization" },
      offers: {
        "@type": "AggregateOffer",
        offerCount: "1",
        priceCurrency: "USD",
        lowPrice: String(paquete.precioUSD),
        availability: "https://schema.org/InStock",
        url: `https://citylandtravel.com/destinos/${paquete.slug}`,
      },
    },
  })),
};

export default function SchemaOrg() {
  return (
    <>
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
