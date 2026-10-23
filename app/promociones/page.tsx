import { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";
import BuscadorCatalogoInstantaneo from "@/components/BuscadorCatalogoInstantaneo";
import { INDICE_PAQUETES_MIGRATORIOS_1000 } from "@/lib/catalogo-paquetes-migratorios-1000";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Promociones y Ofertas de Viajes 2026 desde Lima (Separa con 50%) | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Aprovecha nuestras promociones de viajes y preventas 2026 desde Lima: Paquetes Migratorios a Europa desde $699 USD (solo ida), Punta Cana y Cancún Todo Incluido desde $999 USD, Cartagena desde $599 USD y Cusco desde $329 USD. Separa con el 50% en Cityland Travel (RUC 20614914239)."),
  keywords: [
    "promociones de viajes desde lima",
    "ofertas paquetes turisticos 2026 peru",
    "paquete migratorio espana desde 699",
    "preventa de viajes cityland travel",
    "agencia de viajes promociones los olivos lima",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/promociones",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/promociones",
    title: "Promociones y Preventa de Viajes 2026 — Cityland Travel",
    description:
      "Tarifas promocionales en dólares (impuestos y tasas según fecha y aerolínea) a Europa desde $699, Caribe, Sudamérica y Perú. Separa hoy con el 50%.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_PROMOCIONES: ConfiguracionLandingAerolinea = {
  badgeHero: "Campaña Preventa 2026 · Cupos Aéreos Confirmados desde Lima",
  banderasHero: ["España", "Italia", "República Dominicana", "México", "Perú"],
  tituloHero: "Promociones y Ofertas de",
  tituloDestacadoHero: "Viajes a Europa y el Caribe desde Lima",
  descripcionHero:
    "Congela tu tarifa promocional en dólares para viajar a España, Italia o Francia desde $699 USD (solo ida), o disfrutar de vacaciones Todo Incluido en el Caribe y el Perú con respaldo de agencia formal.",
  negritaHero: "Separa cualquiera de nuestras promociones con el 50% de inicial",
  ctaPrincipalTexto: "Consultar Promociones por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Quiero consultar las Promociones y Preventas de Viajes vigentes saliendo desde Lima.",
  checksHero: [
    "Paquetes Migratorios a Europa (solo ida): $699 · $799 · $899 · $999",
    "Separa con el 50% y congela tu precio",
    "Atención en oficina física en Los Olivos y por WhatsApp",
  ],
  vitrina: {
    pais: "España",
    etiquetaIzq: "Promo Europa · Salidas Confirmadas",
    etiquetaDer: "#1 Más Vendido",
    img: "/images/espana/gran-via-metropolis.jpg",
    alt: "Promoción Paquete Migratorio a España e Italia desde $699 USD (solo ida) — Cityland Travel",
    sobretitulo: "Pasaje + Boleto de Regreso Reservado + Hotel + Seguro 30.000€",
    titulo: "Promo Paquete Migratorio a España, Italia y Francia",
    labelPrecio: "Planes de solo ida $699 · $799 · $899 · $999",
    precio: "$699",
    moneda: "USD",
    notaInferior: "Separa hoy con $350 (50% inicial)",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola! Quiero más información del paquete migratorio a Europa desde $699.",
  },
  seccionCatalogo: {
    sobretitulo: "Catálogo de Ofertas y Preventas Vigentes",
    titulo: "Elige tu Destino en Promoción",
    filtros: [
      { id: "todos", label: "Todas las Promos" },
      { id: "europa", label: "España, Italia & Europa" },
      { id: "caribe", label: "Caribe & Sudamérica" },
      { id: "peru", label: "Nacionales Perú" },
    ],
  },
  items: [
    {
      id: "promo-madrid-migratorio",
      titulo: "Promo Madrid y Barcelona + Carpeta Migratoria",
      pais: "España",
      filtro: "europa",
      subtitulo: "Planes de solo ida según tu fecha: $699 · $799 · $899 · $999",
      precioPrincipal: "$699",
      precioSecundario: "USD",
      notaPrecio: "Separa con $350 (50% inicial)",
      tag: "Más Pedido",
      tagBg: "bg-red-600 text-white",
      img: "/images/espana/puerta-de-alcala.jpg",
      alt: "Promoción viaje a Madrid desde Lima",
      resumenCorto:
        "Pasaje de avión de ida emitido + Boleto de regreso reservado 24h antes + Reserva de hotel confirmada + Seguro Schengen 30.000€ + Check-in.",
      checks: [
        "Pasaje de ida + Retorno reservado",
        "Seguro Schengen 30.000€",
        "Hotel confirmado y check-in 24h antes",
      ],
      waNumber: "51944103890",
      waMensaje: "¡Hola! Quiero más información del paquete migratorio a España desde $699.",
    },
    {
      id: "promo-italia-migratorio",
      titulo: "Promo Milán, Roma y Turín + Carpeta Migratoria",
      pais: "Italia",
      filtro: "europa",
      subtitulo: "Planes de solo ida según tu fecha: $699 · $799 · $899 · $999",
      precioPrincipal: "$699",
      precioSecundario: "USD",
      notaPrecio: "Separa con $350 (50% inicial)",
      tag: "Ruta Italia",
      tagBg: "bg-emerald-600 text-white",
      img: "/images/destinos/milan.webp",
      alt: "Promoción viaje a Milán y Roma desde Lima",
      resumenCorto:
        "Pasaje hacia Milán, Roma o Turín + Boleto de regreso reservado + Reserva de hotel o formato Ospitalità 48h + Seguro médico de 30.000€.",
      checks: [
        "Pasaje de ida + Retorno reservado",
        "Hotel confirmado o guía Ospitalità",
        "Seguro médico 30.000€ + Check-in",
      ],
      waNumber: "51944103890",
      waMensaje: "¡Hola! Quiero más información del paquete migratorio a Italia desde $699.",
    },
    {
      id: "promo-punta-cana-all-inclusive",
      titulo: "Promo Punta Cana Resort Todo Incluido",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "5 Días / 4 Noches · Sin Visa para Peruanos",
      precioPrincipal: "$1,049",
      precioSecundario: "USD",
      notaPrecio: "Separa con $525 (50% inicial)",
      tag: "Todo Incluido",
      tagBg: "bg-teal-600 text-white",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
      alt: "Promoción Punta Cana Todo Incluido",
      resumenCorto:
        "Vuelos Lima – Punta Cana – Lima, 4 noches en Resort frente a Playa Bávaro con comidas y bebidas ilimitadas 24h y traslados.",
      checks: ["Vuelo ida y vuelta desde Lima", "Resort Todo Incluido 24h", "Traslados y seguro médico"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Promo Punta Cana Todo Incluido desde $1,049.",
    },
    {
      id: "promo-cartagena-colombia",
      titulo: "Promo Cartagena de Indias + Islas del Rosario",
      pais: "Colombia",
      filtro: "caribe",
      subtitulo: "5 Días / 4 Noches · Viaja solo con DNI",
      precioPrincipal: "$599",
      precioSecundario: "USD",
      notaPrecio: "Separa con $300 (50% inicial)",
      tag: "Solo con DNI",
      tagBg: "bg-amber-600 text-white",
      img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
      alt: "Promoción Cartagena desde Lima",
      resumenCorto:
        "Escapada caribeña a Cartagena con vuelos desde Lima, hotel en Bocagrande con desayuno, traslados y excursión a Playa Blanca / Islas del Rosario.",
      checks: ["Vuelos desde Lima incluidos", "Hotel en Bocagrande + desayunos", "Excursión a Playa Blanca"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Promo Cartagena desde $599.",
    },
    {
      id: "promo-panama-medellin",
      titulo: "Promo Combinado Panamá + Medellín (7 Días)",
      pais: "Panamá",
      filtro: "caribe",
      subtitulo: "3 Noches Panamá + 3 Noches Medellín · Copa Airlines",
      precioPrincipal: "$799",
      precioSecundario: "USD",
      notaPrecio: "2 países en 1 solo viaje",
      tag: "2x1 Destinos",
      tagBg: "bg-blue-600 text-white",
      img: "/images/paquetes/panama-medellin/hero-panama.jpg",
      alt: "Promoción Panamá y Medellín desde Lima",
      resumenCorto:
        "Vuela con Copa Airlines y conoce el Canal de Panamá, compras y la eterna primavera de Medellín con hoteles, desayunos y tours incluidos.",
      checks: ["Vuelos Copa Airlines incluidos", "Hoteles con desayuno en ambas ciudades", "City Tour Panamá + Chiva en Medellín"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar el Combinado Panamá + Medellín desde $799.",
    },
    {
      id: "promo-cusco-machu-picchu",
      titulo: "Promo Cusco Imperial, Valle Sagrado & Machu Picchu",
      pais: "Perú",
      filtro: "peru",
      subtitulo: "4 Días / 3 Noches · Todo Organizado desde Lima",
      precioPrincipal: "$329",
      precioSecundario: "USD",
      notaPrecio: "Incluye Vuelos + Tren + Entrada Machu Picchu",
      tag: "Nacional Top",
      tagBg: "bg-rose-600 text-white",
      img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
      alt: "Promoción Cusco y Machu Picchu desde Lima",
      resumenCorto:
        "Vuelos Lima – Cusco – Lima, hotel 3★ con desayuno, City Tour, Valle Sagrado y excursión completa a Machu Picchu en tren turístico.",
      checks: ["Boleto aéreo Lima – Cusco – Lima", "Tren turístico + Bus + Entrada a Machu Picchu", "Hoteles, desayunos y traslados"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Promo Cusco y Machu Picchu desde $329.",
    },
  ],
  pilares: [
    {
      titulo: "Solo ida desde $699 USD",
      sub: "Paquetes migratorios a España, Italia y Francia con todo en regla",
    },
    {
      titulo: "Separa con 50%",
      sub: "Asegura tu cupo aéreo hoy y abona el saldo antes de tu viaje",
    },
    {
      titulo: "Reservas Verificables",
      sub: "Código PNR de aerolínea y vouchers de hotel reales",
    },
    {
      titulo: "RUC 20614914239",
      sub: "Atención presencial en Av. Antúnez de Mayolo 814, Los Olivos",
    },
  ],
  bannerFinal: {
    sobretitulo: "Campaña Preventa 2026",
    titulo: "¿Buscas una promoción para tu fecha exacta de viaje?",
    descripcion:
      "Escríbenos a nuestro WhatsApp oficial +51 944 103 890 indicando el destino, mes de viaje y cantidad de pasajeros para enviarte las ofertas disponibles hoy.",
    ctaTexto: "Ver Ofertas por WhatsApp",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Quiero consultar qué promociones tienen disponibles para mis fechas de viaje.",
    img: "/images/espana/palacio-real.jpg",
    alt: "Promociones de viajes Cityland Travel",
  },
  waFlotante: {
    numero: "51944103890",
    mensaje: "¡Hola Cityland Travel! Quiero consultar las promociones de viajes vigentes.",
    texto: "Promociones 2026",
  },
};

export default function PromocionesPage() {
  const iniciales = INDICE_PAQUETES_MIGRATORIOS_1000.slice(0, 24).map((pm) => ({
    slug: `pm-${pm.slug}`,
    url: `/paquetes-migratorios/${pm.slug}`,
    titulo: pm.titulo,
    destinoOPais: `${pm.ciudadDestino}, ${pm.pais}`,
    cluster: "mundiales",
    clusterNombre: pm.siloNombre,
    precioDesdeUSD: pm.precioPromo,
    img: pm.imagenHero,
  }));

  return (
    <AirlineLandingTemplate config={CONFIG_PROMOCIONES}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <BuscadorCatalogoInstantaneo
          itemsIniciales={iniciales}
          totalInicial={31017}
        />
      </div>
    </AirlineLandingTemplate>
  );
}
