import { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Paquetes a Playas del Norte y Selva Peruana: Punta Sal, Máncora, Tarapoto, Iquitos y Arequipa | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Viajes nacionales Todo Incluido saliendo desde Lima: Royal Decameron Punta Sal desde $489 USD, Máncora desde $319 USD, Tarapoto y Laguna Azul desde $289 USD, Iquitos Río Amazonas desde $349 USD, Arequipa Cañón del Colca desde $289 USD y Paracas-Ica desde $229 USD. Separa con el 50% en Cityland Travel (RUC 20614914239)."),
  keywords: [
    "paquetes a punta sal todo incluido decameron desde lima",
    "viajes a tarapoto todo incluido precios 2026",
    "paquetes turisticos a mancora y punta sal en avion",
    "tours a iquitos y rio amazonas desde lima",
    "paquetes a arequipa y canon del colca",
    "cityland travel paquetes nacionales peru",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/peru",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/peru",
    title:
      "Paquetes a Punta Sal, Máncora, Tarapoto, Iquitos y Arequipa — Cityland Travel",
    description:
      "Escapadas por el Perú con vuelos ida y vuelta, resorts de playa y lodges en la selva desde $229 USD. Separa hoy con el 50% de inicial.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Paquetes Turísticos Nacionales por el Perú — Cityland Travel",
      },
    ],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const CONFIG_PERU: ConfiguracionLandingAerolinea = {
  badgeHero: "Playas del Norte, Selva Mágica y Sur del Perú · Salidas Diarias",
  banderasHero: ["Perú"],
  tituloHero: "Descubre lo Mejor del Perú:",
  tituloDestacadoHero: "Playas del Norte, Selva y Sur",
  descripcionHero:
    "Escápate del frío de Lima hacia las playas soleadas del norte, la selva de Tarapoto e Iquitos o los paisajes de Arequipa con vuelos confirmados, hoteles con piscina y tours incluidos.",
  negritaHero: "Separa hoy tu paquete nacional con el 50% de inicial",
  ctaPrincipalTexto: "Cotizar Destino Nacional",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Vi su página de Destinos Nacionales (Punta Sal, Máncora, Tarapoto, Iquitos, Arequipa) y deseo cotizar.",
  checksHero: [
    "Resorts Todo Incluido en Punta Sal",
    "Vuelos Directos desde Lima",
    "Ideal para Feriados y Vacaciones",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "Punta Sal · 4 Días / 3 Noches",
    etiquetaDer: "Todo Incluido",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85",
    alt: "Paquete a Punta Sal Resort Todo Incluido desde Lima - Cityland Travel",
    sobretitulo: "Vuelo Lima–Tumbes + Resort Frente al Mar + Comidas y Bebidas",
    titulo: "Punta Sal Sol & Playa Todo Incluido",
    labelPrecio: "Paquete Completo",
    precio: "$489",
    moneda: "USD",
    notaInferior: "Separa hoy con 50% ($245 USD)",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar el paquete Todo Incluido a Punta Sal (4 Días / 3 Noches) desde $489 USD.",
  },
  seccionCatalogo: {
    sobretitulo: "Sol Todo el Año y Naturaleza Increíble",
    titulo: "Los 6 Destinos Nacionales Más Solicitados",
    filtros: [
      { id: "todos", label: "Todos los Destinos (6)" },
      { id: "playas", label: "Playas del Norte (Punta Sal & Máncora)" },
      { id: "selva", label: "Selva Peruana (Tarapoto & Iquitos)" },
      { id: "sur", label: "Sur & Costa (Arequipa & Paracas–Ica)" },
    ],
  },
  items: [
    {
      id: "punta-sal-todo-incluido",
      titulo: "Punta Sal · Resort Todo Incluido Frente al Mar",
      pais: "Perú",
      filtro: "playas",
      subtitulo: "4 Días / 3 Noches · Tumbes",
      precioPrincipal: "$489",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% (desde $245 USD)",
      tag: "#1 Playa en Perú",
      tagBg: "bg-red-600 text-white",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85",
      alt: "Paquete Punta Sal Todo Incluido desde Lima",
      resumenCorto:
        "Vuelo Lima–Tumbes I/V + Traslados + 3 noches de alojamiento frente al mar con desayunos, almuerzos, cenas, snacks y bebidas ilimitadas.",
      checks: ["Vuelo I/V + Traslados", "Comidas y bebidas ilimitadas", "Playa de aguas cálidas"],
      waNumber: "51944103890",
    },
    {
      id: "mancora-vichayito-tortugas",
      titulo: "Máncora, Vichayito & Nado con Tortugas",
      pais: "Perú",
      filtro: "playas",
      subtitulo: "4 Días / 3 Noches · Sol Todo el Año",
      precioPrincipal: "$319",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% (desde $160 USD)",
      tag: "Sol & Relax",
      tagBg: "bg-sky-600 text-white",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
      alt: "Paquete a Máncora y Vichayito desde Lima con nado con tortugas",
      resumenCorto:
        "Vuelo I/V + Hotel frente al mar con piscina y desayunos + Tour de nado con tortugas marinas en El Ñuro y avistamiento de ballenas en temporada.",
      checks: ["Vuelo I/V desde Lima", "Hotel frente a la playa", "Tour Nado con Tortugas"],
      waNumber: "51944103890",
    },
    {
      id: "tarapoto-laguna-azul-cataratas",
      titulo: "Tarapoto Mágico: Laguna Azul, Ahuashiyacu & Lamas",
      pais: "Perú",
      filtro: "selva",
      subtitulo: "4 Días / 3 Noches · La Ciudad de las Palmeras",
      precioPrincipal: "$289",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% (desde $145 USD)",
      tag: "Top Ventas Selva",
      tagBg: "bg-emerald-600 text-white",
      img: "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?w=1200&q=85",
      alt: "Paquete a Tarapoto Todo Incluido Laguna Azul y Ahuashiyacu desde Lima",
      resumenCorto:
        "Vuelo Lima–Tarapoto I/V + Hotel con piscina y desayunos + Paseo en bote por la Laguna Azul con almuerzo amazónico, Cataratas de Ahuashiyacu y Lamas.",
      checks: ["Vuelo I/V + Traslados", "Hotel con piscina", "3 Tours con entradas"],
      waNumber: "51944103890",
    },
    {
      id: "iquitos-rio-amazonas-lodge",
      titulo: "Iquitos & Lodge en el Río Amazonas Todo Incluido",
      pais: "Perú",
      filtro: "selva",
      subtitulo: "4 Días / 3 Noches · Maravilla Natural del Mundo",
      precioPrincipal: "$349",
      precioSecundario: "USD",
      notaPrecio: "Incluye alimentación completa en el Lodge",
      tag: "Lodge Amazónico",
      tagBg: "bg-amber-600 text-white",
      img: "https://images.unsplash.com/photo-1699575678956-aefa714b67f0?w=1200&q=85",
      alt: "Paquete a Iquitos y Lodge en el Río Amazonas desde Lima",
      resumenCorto:
        "Vuelo Lima–Iquitos I/V + Noches en Lodge amazónico con pensión completa + Navegación por el Río Amazonas, delfines rosados y comunidades nativas.",
      checks: ["Vuelo I/V desde Lima", "Lodge + Pensión Completa", "Navegación Río Amazonas"],
      waNumber: "51944103890",
    },
    {
      id: "arequipa-canon-del-colca",
      titulo: "Arequipa Blanca, Ruta del Sillar & Cañón del Colca",
      pais: "Perú",
      filtro: "sur",
      subtitulo: "4 Días / 3 Noches · Cultura y Paisajes",
      precioPrincipal: "$289",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% (desde $145 USD)",
      tag: "Sur del Perú",
      tagBg: "bg-blue-600 text-white",
      img: "https://images.unsplash.com/photo-1787929759288-1b4aa7af30f6?w=1200&q=85",
      alt: "Paquete turístico a Arequipa y Cañón del Colca desde Lima",
      resumenCorto:
        "Vuelo Lima–Arequipa I/V + Hotel con desayunos + Campiña Arequipeña, Ruta del Sillar y excursión de 2 días al Valle y Cañón del Colca (Vuelo del Cóndor).",
      checks: ["Vuelo I/V + Traslados", "Hotel en Arequipa y Colca", "Mirador Cruz del Cóndor"],
      waNumber: "51944103890",
    },
    {
      id: "paracas-ica-huacachina-escapada",
      titulo: "Escapada de Sol: Paracas, Islas Ballestas & Huacachina",
      pais: "Perú",
      filtro: "sur",
      subtitulo: "3 Días / 2 Noches · Resort con Piscina",
      precioPrincipal: "$229",
      precioSecundario: "USD",
      notaPrecio: "Ideal para fines de semana y feriados",
      tag: "Cerca de Lima",
      tagBg: "bg-red-600 text-white",
      img: "https://images.unsplash.com/photo-1723134087756-3fdd46625a84?w=1200&q=85",
      alt: "Paquete a Paracas, Ica y Oasis de la Huacachina desde Lima",
      resumenCorto:
        "Bus Cruz del Sur VIP I/V + Hotel con piscina + Deslizador a Islas Ballestas, Reserva de Paracas, ruta de viñedos en Ica y tubulares en Huacachina.",
      checks: ["Bus Crucero I/V + Hotel", "Islas Ballestas + Paracas", "Tubulares en Huacachina"],
      waNumber: "51944103890",
    },
  ],
  pilares: [
    {
      titulo: "Vuelos + Hotel Resueltos",
      sub: "Coordinamos tus horarios de vuelo con los traslados en destino",
    },
    {
      titulo: "Operadores Oficiales",
      sub: "Excursiones seguras con guías locales certificados en cada región",
    },
    {
      titulo: "Todos los Medios de Pago",
      sub: "Paga por transferencia BCP, BBVA, Interbank, Yape, Plin o tarjeta",
    },
    {
      titulo: "Separa con 50%",
      sub: "Asegura tus cupos para feriados largos, vacaciones escolares o verano",
    },
  ],
  bannerFinal: {
    sobretitulo: "Turismo Nacional a tu Medida",
    titulo: "¿Buscas un paquete a Cusco o combinar varios destinos del Perú?",
    descripcion:
      "También tenemos nuestra página exclusiva de Cusco y Machu Picchu de 3 a 6 días, o armamos tu ruta personalizada para viajar en pareja, familia o amigos.",
    ctaTexto: "Armar mi Viaje por el Perú",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Deseo que me coticen un paquete nacional por el Perú.",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85",
    alt: "Paquetes Turísticos por el Perú - Cityland Travel",
  },
  waFlotante: {
    numero: "51944103890",
    mensaje: "¡Hola Cityland Travel! Deseo cotizar un paquete nacional (Playas / Selva / Sur).",
    texto: "Viajes por el Perú",
  },
};

const JSON_LD_PERU = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://citylandtravel.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Paquetes Nacionales: Punta Sal, Máncora, Tarapoto, Iquitos y Arequipa",
          item: "https://citylandtravel.com/peru",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Paquetes Turísticos Nacionales por el Perú desde Lima",
      numberOfItems: CONFIG_PERU.items.length,
      itemListElement: CONFIG_PERU.items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristTrip",
          name: item.titulo,
          description: item.resumenCorto,
          image: item.img,
          provider: { "@type": "TravelAgency", name: "Cityland Travel" },
          offers: {
            "@type": "AggregateOffer",
            offerCount: "1",
            priceCurrency: "USD",
            lowPrice: item.precioPrincipal.replace(/[^0-9]/g, ""),
            highPrice: item.precioPrincipal.replace(/[^0-9]/g, ""),
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/peru",
          },
        },
      })),
    },
  ],
};

export default function PeruPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_PERU) }}
      />
      <AirlineLandingTemplate config={CONFIG_PERU} />
    </>
  );
}
