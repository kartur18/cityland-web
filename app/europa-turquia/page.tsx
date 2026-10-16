import { Metadata } from "next";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Tours y Circuitos a Europa, Turquía (Capadocia) y Dubái Sin Visa desde Lima | Cityland Travel",
  description:
    "Viaja sin visa consular desde Lima: Turquía (Estambul y Capadocia en Globo) 10 Días desde $1,790 USD, Circuito Europa Clásica 15 Días (Madrid, París, Venecia y Roma) desde $2,890 USD y Dubái + Turquía desde $2,590 USD. Separa con el 50% en Cityland Travel (RUC 20614914239).",
  keywords: [
    "tours a turquia desde lima sin visa 2026",
    "paquete estambul y capadocia desde peru precios",
    "circuito por europa 15 dias desde lima",
    "viajes a madrid paris roma todo incluido peru",
    "tours a dubai y turquia desde lima",
    "cityland travel europa turquia",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/europa-turquia",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/europa-turquia",
    title:
      "Circuitos a Europa, Turquía (Capadocia) y Dubái Sin Visa — Cityland Travel",
    description:
      "Vuelos internacionales + Hoteles 4★ y 5★ + Guía en Español + Seguro Schengen 30.000€. Peruanos viajan a Europa y Turquía solo con pasaporte.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Circuitos a Europa y Turquía desde Lima — Cityland Travel",
      },
    ],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const CONFIG_EUROPA_TURQUIA: ConfiguracionLandingAerolinea = {
  badgeHero: "Peruanos Viajan Sin Visa Consular a Europa y Turquía",
  banderasHero: ["Turquía", "España", "Francia", "Italia"],
  tituloHero: "CIRCUITOS A EUROPA, TURQUÍA Y",
  tituloDestacadoHero: "CAPADOCIA CON TODO ORGANIZADO",
  descripcionHero:
    "Conoce la Torre Eiffel, el Coliseo Romano, Madrid o vuela en globo sobre Capadocia con boletos aéreos confirmados, hoteles seleccionados y guía en español durante todo el recorrido.",
  negritaHero: "Solo necesitas tu pasaporte peruano vigente y separas con el 50%",
  ctaPrincipalTexto: "Cotizar Circuito por WhatsApp",
  waPrincipalNumero: "51903212007",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Vi su página de Europa y Turquía y deseo cotizar un circuito organizado desde Lima.",
  checksHero: [
    "Sin Visa para Peruanos (Solo Pasaporte)",
    "Hoteles 4★ y 5★ + Guía en Español",
    "Seguro Schengen 30.000€ Incluido",
  ],
  vitrina: {
    pais: "Turquía",
    etiquetaIzq: "Estambul & Capadocia · 10 Días",
    etiquetaDer: "Sin Visa",
    img: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
    alt: "Paquete a Turquía Estambul y Capadocia desde Lima sin visa",
    sobretitulo: "Vuelos + Hoteles 4★/5★ + Crucero Bósforo + Capadocia",
    titulo: "Turquía Mágica & Capadocia",
    labelPrecio: "Circuito completo",
    precio: "$1,790",
    moneda: "USD",
    notaInferior: "Separa hoy con 50% ($895 USD)",
    waNumero: "51903212007",
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar el paquete a Turquía (Estambul y Capadocia · 10 Días) desde $1,790 USD.",
  },
  seccionCatalogo: {
    sobretitulo: "Grandes Viajes con Salidas desde Lima",
    titulo: "ELIGE TU CIRCUITO POR EUROPA, TURQUÍA O DUBÁI",
    filtros: [
      { id: "todos", label: "Todos los Circuitos (6)" },
      { id: "turquia-dubai", label: "Turquía & Dubái (Exóticos Sin Visa)" },
      { id: "europa", label: "Circuitos por Europa (España, Francia & Italia)" },
    ],
  },
  items: [
    {
      id: "turquia-estambul-capadocia-10d",
      titulo: "Turquía de Ensueño: Estambul, Capadocia & Pamukkale",
      pais: "Turquía",
      filtro: "turquia-dubai",
      subtitulo: "10 Días / 9 Noches · No Requiere Visa",
      precioPrincipal: "$1,790",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% ($895 USD)",
      tag: "#1 Exótico Sin Visa",
      tagBg: "bg-red-600 text-white",
      img: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
      alt: "Viaje a Turquía Estambul y Capadocia desde Lima sin visa",
      resumenCorto:
        "Vuelos I/V + Hoteles 4★ y 5★ con desayunos y cenas + Crucero por el Bósforo, Éfeso, piscinas blancas de Pamukkale y los valles de Capadocia.",
      checks: ["Vuelo Internacional I/V", "Hoteles 4★ y 5★ + Cenas", "Guía en español todo el tour"],
      waNumber: "51983891157",
    },
    {
      id: "europa-clasica-15d",
      titulo: "Europa Soñada: Madrid, París, Venecia, Florencia & Roma",
      pais: "Europa",
      filtro: "europa",
      subtitulo: "15 Días / 14 Noches · Circuito Completo",
      precioPrincipal: "$2,890",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% · Incluye Seguro 30.000€",
      tag: "3 Países · 15 Días",
      tagBg: "bg-blue-600 text-white",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85",
      alt: "Circuito por Europa 15 días España, Francia e Italia desde Lima",
      resumenCorto:
        "Conoce lo mejor de España, Francia e Italia en un solo viaje organizado con vuelos desde Lima, autocar de lujo, hoteles 4★ y guía en español.",
      checks: ["Vuelo I/V + 14 Noches Hotel", "Madrid, París, Venecia y Roma", "Seguro Schengen 30.000€"],
      waNumber: "51944031724",
    },
    {
      id: "espana-madrid-barcelona-8d",
      titulo: "España Imprescindible: Madrid, Toledo & Barcelona",
      pais: "España",
      filtro: "europa",
      subtitulo: "8 Días / 7 Noches · Tren Alta Velocidad AVE",
      precioPrincipal: "$1,490",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% ($745 USD)",
      tag: "Madrid + Barcelona",
      tagBg: "bg-red-600 text-white",
      img: "/images/espana/gran-via-metropolis.jpg",
      alt: "Paquete turístico a Madrid y Barcelona 8 días desde Lima",
      resumenCorto:
        "Vuelo Lima–Madrid + Hoteles céntricos con desayuno + Tren rápido AVE a Barcelona + Visita a Puerta del Sol, Sagrada Familia y Seguro 30.000€.",
      checks: ["Vuelo I/V desde Lima", "Tren AVE Madrid–Barcelona", "Seguro Schengen 30.000€"],
      waNumber: "51907451255",
    },
    {
      id: "dubai-turquia-combinado-14d",
      titulo: "Gran Combinado: Turquía, Capadocia & Dubái",
      pais: "Emiratos Árabes",
      filtro: "turquia-dubai",
      subtitulo: "14 Días / 13 Noches · Lujo Oriental",
      precioPrincipal: "$2,590",
      precioSecundario: "USD",
      notaPrecio: "Incluye Safari 4x4 por el Desierto",
      tag: "Turquía + Dubái",
      tagBg: "bg-amber-600 text-white",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
      alt: "Circuito combinado Turquía y Dubái desde Lima",
      resumenCorto:
        "Une la historia milenaria de Estambul y los globos de Capadocia con la modernidad de Dubái, el Burj Khalifa, Safari en el desierto y Mezquita de Abu Dhabi.",
      checks: ["Vuelos Internacionales + Internos", "Estambul + Capadocia + Dubái", "Safari en el Desierto con Cena"],
      waNumber: "51983269950",
    },
    {
      id: "italia-completa-roma-venecia-10d",
      titulo: "Italia Imperial: Roma, Vaticano, Florencia & Venecia",
      pais: "Italia",
      filtro: "europa",
      subtitulo: "10 Días / 9 Noches · Arte, Fe y Gastronomía",
      precioPrincipal: "$2,090",
      precioSecundario: "USD",
      notaPrecio: "Ideal para Año Jubilar y Turismo Cultural",
      tag: "Roma & Vaticano",
      tagBg: "bg-emerald-600 text-white",
      img: "/images/espana/palacio-real.jpg",
      alt: "Tour por Italia Roma, Vaticano, Florencia y Venecia desde Lima",
      resumenCorto:
        "Recorre el Coliseo Romano, la Basílica de San Pedro en el Vaticano, la cuna del Renacimiento en Florencia y los canales de Venecia.",
      checks: ["Vuelos I/V desde Lima", "Hoteles 4★ con Desayuno", "Guía en Español + Traslados"],
      waNumber: "51913637476",
    },
    {
      id: "paquete-migratorio-espana-carpeta",
      titulo: "Carpeta Migratoria a España · Salidas Mensuales",
      pais: "España",
      filtro: "europa",
      subtitulo: "Noviembre ($890) · Dic/Ene ($1,090) · Primavera ($899)",
      precioPrincipal: "$890",
      precioSecundario: "USD",
      notaPrecio: "Separa hoy con $445 USD (50%)",
      tag: "Especial Barajas",
      tagBg: "bg-red-600 text-white",
      img: "/images/espana/plaza-mayor.jpg",
      alt: "Paquete Migratorio a España desde $890 USD - Cityland Travel",
      resumenCorto:
        "Boleto aéreo confirmado IATA + Seguro Schengen 30.000€ + Reserva de hotel verificable y preparación personalizada 1 a 1 para tu ingreso en Madrid-Barajas.",
      checks: ["Boleto Aéreo Confirmado", "Seguro Schengen 30.000€", "Asesoría 1 a 1 Barajas"],
      waNumber: "51903212007",
    },
  ],
  pilares: [
    {
      titulo: "Sin Visa Consular",
      sub: "Peruanos ingresan a España, Francia, Italia y Turquía solo con pasaporte",
    },
    {
      titulo: "Guías en Español",
      sub: "Acompañamiento permanente en tu idioma en cada ciudad y monumento",
    },
    {
      titulo: "Hoteles 4★ y 5★",
      sub: "Alojamiento verificado con desayunos buffet y traslados en autocar de lujo",
    },
    {
      titulo: "Reserva con el 50%",
      sub: "Congela tu cupo aéreo hoy en nuestra oficina de Los Olivos",
    },
  ],
  bannerFinal: {
    sobretitulo: "Especialistas en Europa y Medio Oriente",
    titulo: "¿QUIERES RECIBIR EL ITINERARIO DÍA POR DÍA EN PDF?",
    descripcion:
      "Escríbenos por WhatsApp qué circuito te interesa (Turquía, Europa 15 Días o Dubái) y un asesor te enviará el programa detallado con fechas de salida y hoteles.",
    ctaTexto: "Solicitar Itinerario en PDF",
    waNumero: "51903212007",
    waMensaje:
      "¡Hola Cityland Travel! Deseo recibir el itinerario en PDF de sus circuitos a Europa / Turquía.",
    img: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
    alt: "Circuitos a Europa y Turquía desde Lima - Cityland Travel",
  },
  waFlotante: {
    numero: "51903212007",
    mensaje: "¡Hola Cityland Travel! Deseo cotizar un viaje a Europa / Turquía.",
    texto: "Europa & Turquía",
  },
};

const JSON_LD_EUROPA_TURQUIA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://citylandtravel.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Circuitos a Europa, Turquía y Dubái Sin Visa",
          item: "https://citylandtravel.com/europa-turquia",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Circuitos a Europa, Turquía y Dubái desde Lima",
      numberOfItems: CONFIG_EUROPA_TURQUIA.items.length,
      itemListElement: CONFIG_EUROPA_TURQUIA.items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristTrip",
          name: item.titulo,
          description: item.resumenCorto,
          image: item.img.startsWith("http") ? item.img : `https://citylandtravel.com${item.img}`,
          provider: { "@type": "TravelAgency", name: "Cityland Travel" },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: item.precioPrincipal.replace(/[^0-9]/g, ""),
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/europa-turquia",
          },
        },
      })),
    },
  ],
};

export default function EuropaTurquiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_EUROPA_TURQUIA) }}
      />
      <AirlineLandingTemplate config={CONFIG_EUROPA_TURQUIA} />
    </>
  );
}
