import { Metadata } from "next";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Paquetes de Luna de Miel, Bodas en la Playa y Viajes de 15 Años desde Lima | Cityland Travel",
  description:
    "Paquetes románticos de Luna de Miel Todo Incluido en Resorts 5★ Solo Adultos (Punta Cana, Cancún, Cartagena y Santorini) y Viajes de Quinceañeras a Disney Orlando, Crucero y Europa. Separa con el 50% en Cityland Travel (RUC 20614914239).",
  keywords: [
    "paquetes de luna de miel todo incluido desde lima",
    "viajes para parejas resorts solo adultos punta cana cancun",
    "viajes de 15 anos a disney orlando y europa desde peru",
    "bodas simbolicas en la playa caribe peru",
    "agencia de viajes luna de miel en lima",
    "cityland travel luna de miel quinceaneras",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/luna-de-miel",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/luna-de-miel",
    title:
      "Paquetes de Luna de Miel 5★ y Viajes de Quinceañeras — Cityland Travel",
    description:
      "Resorts 5★ Solo Adultos frente al mar con cena romántica en la playa y programas exclusivos de 15 años a Disney, Crucero y Europa.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Luna de Miel y Viajes de Quinceañeras — Cityland Travel",
      },
    ],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const CONFIG_LUNA_DE_MIEL: ConfiguracionLandingAerolinea = {
  badgeHero: "Resorts 5★ Solo Adultos · Atención VIP para Novios y Quinceañeras",
  banderasHero: ["República Dominicana", "México", "Colombia", "Estados Unidos"],
  tituloHero: "Luna de Miel Soñada y Viajes de",
  tituloDestacadoHero: "Quinceañeras Todo Incluido",
  descripcionHero:
    "Celebramos los momentos más importantes de tu vida con habitaciones de lujo frente al mar, atenciones románticas para recién casados y programas inolvidables de 15 años.",
  negritaHero: "Separa hoy con el 50% de inicial y congela tu tarifa de temporada",
  ctaPrincipalTexto: "Cotizar con Asesora VIP",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Deseo cotizar un paquete especial de Luna de Miel / Viaje de 15 Años.",
  checksHero: [
    "Resorts 5★ Solo Adultos (Adults Only)",
    "Cortesías para Recién Casados",
    "Programas Quinceañeras Disney & Crucero",
  ],
  vitrina: {
    pais: "República Dominicana",
    etiquetaIzq: "Punta Cana Luxury · 5 Días / 4 Noches",
    etiquetaDer: "Solo Adultos 5★",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=85",
    alt: "Paquete de Luna de Miel en Punta Cana Resort 5 Estrellas Solo Adultos",
    sobretitulo: "Suite Romántica + Todo Incluido 24h + Cena en la Playa",
    titulo: "Luna de Miel en Punta Cana 5★",
    labelPrecio: "Por persona en base doble",
    precio: "$1,090",
    moneda: "USD",
    notaInferior: "Incluye amenidades de recién casados",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar el paquete de Luna de Miel en Punta Cana Resort 5★ Solo Adultos desde $1,090 USD.",
  },
  seccionCatalogo: {
    sobretitulo: "Experiencias Románticas y Celebraciones",
    titulo: "Elige tu Viaje de Luna de Miel o 15 Años",
    filtros: [
      { id: "todos", label: "Todos los Programas (6)" },
      { id: "novios", label: "Luna de Miel & Parejas (Solo Adultos)" },
      { id: "quinceaneras", label: "Viajes de 15 Años (Disney, Crucero & Europa)" },
    ],
  },
  items: [
    {
      id: "luna-miel-punta-cana-adults-only",
      titulo: "Punta Cana Luxury · Resort 5★ Solo Adultos",
      pais: "República Dominicana",
      filtro: "novios",
      subtitulo: "5 Días / 4 Noches · Todo Incluido 24h",
      precioPrincipal: "$1,090",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% · Incluye botella de espumante",
      tag: "#1 Recién Casados",
      tagBg: "bg-red-600 text-white",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
      alt: "Luna de miel en Punta Cana Resort 5 estrellas solo adultos",
      resumenCorto:
        "Vuelo I/V + Resort 5★ exclusivo para mayores de 18 años en Playa Bávaro, restaurantes gourmet a la carta sin límite, decoración en habitación y catamarán a Isla Saona.",
      checks: ["Resort 5★ Solo Adultos", "Cena romántica a la carta", "Vuelos + Traslados VIP"],
      waNumber: "51944103890",
    },
    {
      id: "luna-miel-cancun-riviera-maya",
      titulo: "Riviera Maya & Cancún · Suite Frente al Mar",
      pais: "México",
      filtro: "novios",
      subtitulo: "5 Días / 4 Noches · Todo Incluido 24h",
      precioPrincipal: "$1,090",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% ($545 USD)",
      tag: "Romántico & Playa",
      tagBg: "bg-sky-600 text-white",
      img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
      alt: "Luna de miel en Cancún y Riviera Maya desde Lima",
      resumenCorto:
        "Combina el mar turquesa del Caribe mexicano, piscinas infinity frente a la playa, spa para parejas y nado en cenotes cristalinos.",
      checks: ["Vuelo I/V desde Lima", "Resort 5★ Todo Incluido", "Cenote Sagrado + Chichén Itzá"],
      waNumber: "51944103890",
    },
    {
      id: "luna-miel-cartagena-boutique",
      titulo: "Cartagena Romántica & Islas del Rosario",
      pais: "Colombia",
      filtro: "novios",
      subtitulo: "4 Días / 3 Noches · Viaja Solo con DNI",
      precioPrincipal: "$649",
      precioSecundario: "USD",
      notaPrecio: "Sin pasaporte · Vuelo directo desde Lima",
      tag: "Escapada de Parejas",
      tagBg: "bg-emerald-600 text-white",
      img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
      alt: "Escapada romántica y luna de miel en Cartagena de Indias",
      resumenCorto:
        "Atardeceres frente al mar en la Ciudad Amurallada, hotel con piscina en la terraza y día de playa en club privado de Islas del Rosario.",
      checks: ["Vuelo directo I/V", "Día de playa Islas del Rosario", "Solo requiere DNI vigente"],
      waNumber: "51944103890",
    },
    {
      id: "quinceanera-disney-orlando-miami",
      titulo: "Quinceañera Mágica: Disney, Universal & Miami",
      pais: "Estados Unidos",
      filtro: "quinceaneras",
      subtitulo: "8 Días / 7 Noches · Programa Especial 15 Años",
      precioPrincipal: "$1,790",
      precioSecundario: "USD",
      notaPrecio: "Viaja con mamá/papá o en grupo",
      tag: "Sueño de 15 Años",
      tagBg: "bg-blue-600 text-white",
      img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
      alt: "Viaje de 15 años a Disney Orlando y Miami desde Perú",
      resumenCorto:
        "El regalo inolvidable de 15 años: parques Magic Kingdom, Universal Studios, día de compras en Outlets de Orlando y playas de Miami Beach.",
      checks: ["Vuelos + Hoteles en Orlando/Miami", "Pases a Parques Temáticos", "Tour de Compras + Traslados"],
      waNumber: "51944103890",
    },
    {
      id: "quinceanera-crucero-caribe-sin-visa",
      titulo: "Quinceañera en Crucero por el Caribe (Sin Visa USA)",
      pais: "Panamá",
      filtro: "quinceaneras",
      subtitulo: "8 Días / 7 Noches · Royal Caribbean",
      precioPrincipal: "$1,290",
      precioSecundario: "USD",
      notaPrecio: "No pide Visa Americana · Todo Incluido",
      tag: "Crucero 15 Años",
      tagBg: "bg-amber-600 text-white",
      img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=85",
      alt: "Crucero de 15 años por el Caribe sin visa americana",
      resumenCorto:
        "Celebra sus 15 años a bordo de un crucero de lujo visitando Panamá, Cartagena, Aruba y Curazao con cenas de gala, fiestas juveniles y shows.",
      checks: ["Sin Visa Americana", "Comidas y bebidas a bordo", "Fiesta y fotos de gala"],
      waNumber: "51944103890",
    },
    {
      id: "luna-miel-quince-europa",
      titulo: "Tour Soñado por Europa: Madrid, París, Venecia & Roma",
      pais: "Europa",
      filtro: "quinceaneras",
      subtitulo: "15 Días / 14 Noches · Sin Visa Consular",
      precioPrincipal: "$2,590",
      precioSecundario: "USD",
      notaPrecio: "Ideal para Luna de Miel o 15 Años",
      tag: "París & Italia",
      tagBg: "bg-red-600 text-white",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85",
      alt: "Viaje de Luna de Miel y 15 años a Europa: Madrid, París, Venecia y Roma",
      resumenCorto:
        "Fotos frente a la Torre Eiffel en París, paseo en góndola por Venecia, el Coliseo de Roma y Madrid con vuelos, hoteles 4★ y guía en español.",
      checks: ["Vuelo I/V + 14 Noches Hotel", "Guía en español todo el viaje", "Seguro Schengen 30.000€"],
      waNumber: "51944103890",
    },
  ],
  pilares: [
    {
      titulo: "Atención VIP a Novios",
      sub: "Gestionamos upgrade de habitación, cama King y detalles románticos en el resort",
    },
    {
      titulo: "Resorts Solo Adultos",
      sub: "Tranquilidad absoluta, playas privadas y restaurantes gourmet sin colas",
    },
    {
      titulo: "Viajes de 15 Años Seguros",
      sub: "Acompañamiento completo para quinceañeras que viajan con su familia",
    },
    {
      titulo: "Pagos con el 50%",
      sub: "Separa con anticipación tu fecha de boda o cumpleaños y paga en partes",
    },
  ],
  bannerFinal: {
    sobretitulo: "Planificación a Medida con Asesora Especializada",
    titulo: "¿Planeando tu boda, aniversario o el viaje de 15 años de tu hija?",
    descripcion:
      "Te ayudamos a comparar los mejores resorts y rutas según el mes de tu celebración para que tengan clima soleado garantizado y beneficios exclusivos.",
    ctaTexto: "Hablar con Asesora de Luna de Miel / 15 Años",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Quisiera asesoría personalizada para planificar una Luna de Miel / Viaje de 15 Años.",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=85",
    alt: "Planificación de Luna de Miel y Quinceañeras en Lima - Cityland Travel",
  },
  waFlotante: {
    numero: "51944103890",
    mensaje: "¡Hola Cityland Travel! Deseo cotizar un paquete de Luna de Miel / 15 Años.",
    texto: "Cotizar Viaje VIP",
  },
};

const JSON_LD_LUNA_MIEL = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://citylandtravel.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Paquetes de Luna de Miel y Viajes de 15 Años",
          item: "https://citylandtravel.com/luna-de-miel",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Paquetes de Luna de Miel y Quinceañeras desde Lima",
      numberOfItems: CONFIG_LUNA_DE_MIEL.items.length,
      itemListElement: CONFIG_LUNA_DE_MIEL.items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristTrip",
          name: item.titulo,
          description: item.resumenCorto,
          image: item.img,
          provider: { "@type": "TravelAgency", name: "Cityland Travel" },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: item.precioPrincipal.replace(/[^0-9]/g, ""),
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/luna-de-miel",
          },
        },
      })),
    },
  ],
};

export default function LunaDeMielPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_LUNA_MIEL) }}
      />
      <AirlineLandingTemplate config={CONFIG_LUNA_DE_MIEL} />
    </>
  );
}
