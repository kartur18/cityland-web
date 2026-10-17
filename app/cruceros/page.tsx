import { Metadata } from "next";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Cruceros Todo Incluido Sin Visa desde Panamá, Cartagena, Miami y Europa | Cityland Travel",
  description:
    "Cruceros Royal Caribbean, MSC y Norwegian saliendo desde Lima: Crucero Caribe Sur sin visa americana (saliendo de Panamá o Cartagena) desde $1,190 USD, Bahamas desde Miami y Mediterráneo por Europa. Separa con el 50% en Cityland Travel (RUC 20614914239).",
  keywords: [
    "cruceros sin visa para peruanos 2026",
    "crucero por el caribe desde panama y cartagena",
    "royal caribbean desde lima peru precios",
    "cruceros todo incluido msc caribe y europa",
    "viajes en crucero desde peru",
    "agencia de viajes cruceros en lima los olivos",
    "cityland travel cruceros",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/cruceros",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/cruceros",
    title:
      "Cruceros Todo Incluido Sin Visa por el Caribe y Europa — Cityland Travel",
    description:
      "Navega por Aruba, Curazao, Bonaire, Cartagena y Panamá sin necesidad de visa americana. Cabina, comidas ilimitadas, shows y vuelos desde Lima.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cruceros Todo Incluido desde Perú — Cityland Travel",
      },
    ],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const CONFIG_CRUCEROS: ConfiguracionLandingAerolinea = {
  badgeHero: "Royal Caribbean · MSC · Norwegian · Con y Sin Visa",
  banderasHero: ["Panamá", "Colombia", "Estados Unidos", "España"],
  tituloHero: "CRUCEROS TODO INCLUIDO POR EL",
  tituloDestacadoHero: "CARIBE, BAHAMAS Y EUROPA",
  descripcionHero:
    "Despierta cada mañana en un país distinto con restaurantes buffet y a la carta, piscinas, teatro estilo Broadway y vuelos desde Lima.",
  negritaHero: "Viaja sin visa americana saliendo desde Panamá o Cartagena y separa con el 50%",
  ctaPrincipalTexto: "Cotizar mi Crucero por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Vi su página de Cruceros y deseo cotizar un Crucero Todo Incluido saliendo desde Lima.",
  checksHero: [
    "Rutas Sin Visa Americana (Panamá y Cartagena)",
    "Pensión Completa + Shows a Bordo",
    "Separa tu Cabina con el 50%",
  ],
  vitrina: {
    pais: "Panamá",
    etiquetaIzq: "Caribe Sur · 8 Días / 7 Noches",
    etiquetaDer: "Sin Visa USA",
    img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=85",
    alt: "Crucero Todo Incluido por el Caribe Sur sin Visa desde Panamá y Cartagena",
    sobretitulo: "Panamá · Cartagena · Aruba · Curazao · Bonaire",
    titulo: "Crucero Caribe Sur Todo Incluido",
    labelPrecio: "Cabina + Impuestos desde",
    precio: "$1,190",
    moneda: "USD",
    notaInferior: "Separa hoy con 50% ($595 USD)",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar el Crucero Caribe Sur Sin Visa (Panamá, Cartagena, Aruba y Curazao) desde $1,190 USD.",
  },
  seccionCatalogo: {
    sobretitulo: "Rutas Marítimas Confirmadas 2026 – 2027",
    titulo: "ELIGE TU RUTA DE CRUCERO",
    filtros: [
      { id: "todos", label: "Todos los Cruceros (6)" },
      { id: "sin-visa", label: "Sin Visa Americana (Caribe & Sudamérica)" },
      { id: "miami", label: "Desde Miami & Bahamas (Con Visa USA)" },
      { id: "europa", label: "Mediterráneo & Europa" },
    ],
  },
  items: [
    {
      id: "crucero-caribe-sur-sin-visa",
      titulo: "Caribe Sur: Panamá, Cartagena, Aruba & Curazao",
      pais: "Panamá",
      filtro: "sin-visa",
      subtitulo: "8 Días / 7 Noches · Royal Caribbean",
      precioPrincipal: "$1,190",
      precioSecundario: "USD",
      notaPrecio: "Sin Visa USA · Separa con $595 USD",
      tag: "#1 Sin Visa USA",
      tagBg: "bg-red-600 text-white",
      img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=85",
      alt: "Crucero Royal Caribbean desde Panamá y Cartagena sin visa",
      resumenCorto:
        "Embarca en Colón (Panamá) o Cartagena (Colombia) y recorre las islas ABC (Aruba, Bonaire y Curazao) con todas las comidas y entretenimiento a bordo.",
      checks: ["No pide Visa Americana", "Comidas ilimitadas 24h", "4 Países en 1 solo viaje"],
      waNumber: "51944103890",
    },
    {
      id: "crucero-brasil-argentina-uruguay",
      titulo: "Crucero Sudamérica: Río, Búzios, Punta del Este & Buenos Aires",
      pais: "Brasil",
      filtro: "sin-visa",
      subtitulo: "8 Días / 7 Noches · MSC Cruceros",
      precioPrincipal: "$1,090",
      precioSecundario: "USD",
      notaPrecio: "Viaja solo con DNI · Separa con 50%",
      tag: "Viaja Solo con DNI",
      tagBg: "bg-emerald-600 text-white",
      img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=1200&q=85",
      alt: "Crucero por Brasil, Uruguay y Argentina solo con DNI",
      resumenCorto:
        "Navega por las playas de Brasil (Río de Janeiro, Ilhabela y Búzios), Punta del Este y Buenos Aires viajando únicamente con tu DNI peruano vigente.",
      checks: ["Solo DNI (Sin Pasaporte)", "Pensión completa a bordo", "Shows y piscinas incluidas"],
      waNumber: "51944103890",
    },
    {
      id: "crucero-bahamas-coco-cay",
      titulo: "Miami, Bahamas & Isla Privada Perfect Day at CocoCay",
      pais: "Estados Unidos",
      filtro: "miami",
      subtitulo: "5 Días / 4 Noches · Royal Caribbean",
      precioPrincipal: "$890",
      precioSecundario: "USD",
      notaPrecio: "Requiere Visa USA · Separa con $445 USD",
      tag: "Isla Privada CocoCay",
      tagBg: "bg-sky-600 text-white",
      img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=85",
      alt: "Crucero a las Bahamas y CocoCay saliendo desde Miami",
      resumenCorto:
        "Zarpa desde Miami hacia Nassau (Bahamas) y disfruta del parque acuático más grande del Caribe en la isla privada de Royal Caribbean.",
      checks: ["Salida desde Miami", "Isla Privada CocoCay", "Ideal para familias y parejas"],
      waNumber: "51944103890",
    },
    {
      id: "crucero-mediterraneo-europa",
      titulo: "Mediterráneo Clásico: Barcelona, Francia & Italia",
      pais: "España",
      filtro: "europa",
      subtitulo: "8 Días / 7 Noches · MSC / Costa",
      precioPrincipal: "$1,390",
      precioSecundario: "USD",
      notaPrecio: "Sin Visa Consular · Separa con 50%",
      tag: "Europa en Crucero",
      tagBg: "bg-amber-600 text-white",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85",
      alt: "Crucero por el Mediterráneo Barcelona, Marsella, Roma y Nápoles",
      resumenCorto:
        "Embarca en Barcelona y conoce Marsella, Génova, Roma (Civitavecchia), Palermo y Mallorca en un hotel flotante de 5 estrellas.",
      checks: ["España, Francia e Italia", "Pensión completa buffet", "Sin cambiar de maleta"],
      waNumber: "51944103890",
    },
    {
      id: "crucero-caribe-occidental-cozumel",
      titulo: "Caribe Occidental: Miami, Cozumel, Roatán & Costa Maya",
      pais: "Estados Unidos",
      filtro: "miami",
      subtitulo: "7 Días / 6 Noches · Icon / Wonder of the Seas",
      precioPrincipal: "$1,390",
      precioSecundario: "USD",
      notaPrecio: "Los barcos más grandes del mundo",
      tag: "Barco Gigante",
      tagBg: "bg-blue-600 text-white",
      img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
      alt: "Crucero por el Caribe Occidental en el barco más grande del mundo",
      resumenCorto:
        "Navega en los barcos más modernos del planeta con pista de patinaje sobre hielo, simulador de surf, parque acuático y playas de México y Honduras.",
      checks: ["Barcos clase Oasis / Icon", "Todo Incluido a bordo", "Playas del Caribe Mexicano"],
      waNumber: "51944103890",
    },
    {
      id: "crucero-islas-griegas",
      titulo: "Islas Griegas: Santorini, Mykonos, Atenas & Italia",
      pais: "Europa",
      filtro: "europa",
      subtitulo: "8 Días / 7 Noches · Temporada Europea",
      precioPrincipal: "$1,490",
      precioSecundario: "USD",
      notaPrecio: "No pide Visa Schengen a peruanos",
      tag: "Santorini & Mykonos",
      tagBg: "bg-sky-700 text-white",
      img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=85",
      alt: "Crucero por las Islas Griegas Santorini y Mykonos desde Perú",
      resumenCorto:
        "El viaje más romántico de Europa: recorre las cúpulas azules de Santorini, los molinos de Mykonos, Atenas y la costa italiana.",
      checks: ["Santorini y Mykonos", "Gastronomía internacional", "Asesoría completa desde Lima"],
      waNumber: "51944103890",
    },
  ],
  pilares: [
    {
      titulo: "Comidas Ilimitadas",
      sub: "Desayunos, almuerzos, cenas de gala, pizzería y snacks incluidos",
    },
    {
      titulo: "Rutas Sin Visa USA",
      sub: "Salidas desde Panamá, Cartagena, Brasil y Barcelona solo con pasaporte o DNI",
    },
    {
      titulo: "Vuelos + Cabina",
      sub: "Armamos tu paquete completo con boleto aéreo Lima–Puerto–Lima",
    },
    {
      titulo: "Separa con 50%",
      sub: "Elige tu cabina interior, vista al mar o con balcón y congela tu tarifa",
    },
  ],
  bannerFinal: {
    sobretitulo: "Especialistas en Cruceros Internacionales",
    titulo: "¿ES TU PRIMERA VEZ EN UN CRUCERO? TE ASESORAMOS EN TODO",
    descripcion:
      "Te ayudamos a elegir el barco ideal, la ubicación exacta de tu cabina (interior, ventana o balcón), los vuelos de conexión desde Lima y el paquete de bebidas para que viajes con cero preocupaciones.",
    ctaTexto: "Hablar con Especialista en Cruceros",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Quisiera asesoría para elegir un Crucero Todo Incluido saliendo desde Perú.",
    img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=85",
    alt: "Asesoría de Cruceros en Lima Perú - Cityland Travel",
  },
  waFlotante: {
    numero: "51944103890",
    mensaje: "¡Hola Cityland Travel! Deseo cotizar un Crucero Todo Incluido.",
    texto: "Cotizar Crucero",
  },
};

const JSON_LD_CRUCEROS = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://citylandtravel.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cruceros Todo Incluido Sin Visa y por el Mundo",
          item: "https://citylandtravel.com/cruceros",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Cruceros Todo Incluido desde Perú (Caribe, Sudamérica, Miami y Europa)",
      numberOfItems: CONFIG_CRUCEROS.items.length,
      itemListElement: CONFIG_CRUCEROS.items.map((c, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristTrip",
          name: c.titulo,
          description: c.resumenCorto,
          image: c.img,
          provider: { "@type": "TravelAgency", name: "Cityland Travel" },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: c.precioPrincipal.replace(/[^0-9]/g, ""),
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/cruceros",
          },
        },
      })),
    },
  ],
};

export default function CrucerosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_CRUCEROS) }}
      />
      <AirlineLandingTemplate config={CONFIG_CRUCEROS} />
    </>
  );
}
