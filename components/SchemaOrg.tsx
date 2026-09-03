import { TELEFONO, TELEFONO_FORMATEADO, FAQS, DESTINOS_EUROPA, DESTINOS_CARIBE } from "@/components/constantes";

const TRAVEL_AGENCY = {"@context":"https://schema.org","@type":"TravelAgency",name:"Cityland Travel",url:"https://citylandtravel.com",logo:"https://citylandtravel.com/logo.png",description:"Agencia de viajes en Lima especializada en paquetes migratorios a Europa y turísticos al Caribe, Sudamérica y todo el mundo.",telephone:TELEFONO,address:{"@type":"PostalAddress",streetAddress:"Av. Antúnez de Mayolo N. 814",addressLocality:"Los Olivos",addressRegion:"Lima",postalCode:"15304",addressCountry:"PE"},geo:{"@type":"GeoCoordinates",latitude:-11.9556,longitude:-77.0642},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],opens:"09:00",closes:"19:00"}],priceRange:"$$",aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"500",bestRating:"5"},sameAs:["https://www.facebook.com/citylandtravel","https://www.instagram.com/citylandtravel","https://www.tiktok.com/@citylandtravel"],foundingDate:"2015",taxID:"20614914239"};

// Generado desde FAQS (constantes.ts) para que nunca quede desincronizado de lo que se ve en la web.
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.pregunta.replace("+51 906 450 098", TELEFONO_FORMATEADO),
    acceptedAnswer: { "@type": "Answer", text: f.respuesta.replace("+51 906 450 098", TELEFONO_FORMATEADO) },
  })),
};

// Generado desde el catálogo real de destinos (constantes.ts) — mismo criterio que Destinos.tsx.
function ofertaDesde(destino: (typeof DESTINOS_EUROPA)[number], tipo: "Migratorio" | "Turístico", precio: number) {
  return {
    "@type": "ListItem",
    position: 0,
    item: {
      "@type": "Product",
      name: `Paquete ${tipo} Lima a ${destino.ciudad}`,
      description: destino.descripcion,
      brand: { "@type": "Brand", name: "Cityland Travel" },
      offers: { "@type": "Offer", priceCurrency: "USD", price: String(precio), availability: "https://schema.org/InStock" },
    },
  };
}

const OFFERS = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Paquetes de viaje populares",
  itemListElement: [
    ofertaDesde(DESTINOS_EUROPA[0], "Migratorio", DESTINOS_EUROPA[0].migratorio!),
    ofertaDesde(DESTINOS_CARIBE[0], "Turístico", DESTINOS_CARIBE[0].turistico),
    ofertaDesde(DESTINOS_EUROPA[1], "Migratorio", DESTINOS_EUROPA[1].migratorio!),
  ].map((item, i) => ({ ...item, position: i + 1 })),
};

export default function SchemaOrg() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(TRAVEL_AGENCY) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFERS) }} />
    </>
  );
}
