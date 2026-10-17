import { Metadata } from "next";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Promociones y Ofertas de Viajes 2026 desde Lima (Separa con 50%) | Cityland Travel",
  description:
    "Aprovecha nuestras promociones de viajes y preventas 2026 desde Lima: Paquetes a Europa desde $890 USD, Punta Cana y Cancún Todo Incluido desde $899 USD, Cartagena desde $599 USD y Cusco desde $299 USD. Separa con el 50% en Cityland Travel (RUC 20614914239).",
  keywords: [
    "promociones de viajes desde lima",
    "ofertas paquetes turisticos 2026 peru",
    "viajes en oferta punta cana cancun europa",
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
      "Tarifas promocionales en dólares con impuestos incluidos a Europa, Caribe, Sudamérica y Perú. Separa hoy con el 50%.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_PROMOCIONES: ConfiguracionLandingAerolinea = {
  badgeHero: "Campaña Preventa 2026 · Cupos Aéreos Confirmados desde Lima",
  banderasHero: ["España", "República Dominicana", "México", "Colombia", "Perú"],
  tituloHero: "Promociones y Ofertas de",
  tituloDestacadoHero: "Viajes Todo Incluido desde Lima",
  descripcionHero:
    "Congela tu tarifa promocional en dólares con impuestos incluidos para viajar a Europa, el Caribe, Sudamérica o el interior del Perú con respaldo de agencia formal.",
  negritaHero: "Separa cualquiera de nuestras promociones con el 50% de inicial y paga en cuotas sin intereses",
  ctaPrincipalTexto: "Consultar Promociones por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Quiero consultar las Promociones y Preventas de Viajes vigentes saliendo desde Lima.",
  checksHero: [
    "Tarifas en USD con impuestos incluidos",
    "Separa con 50% y congela tu precio",
    "Atención en oficina física en Los Olivos y por WhatsApp",
  ],
  vitrina: {
    pais: "República Dominicana",
    etiquetaIzq: "Promo Caribe · 5 Días / 4 Noches",
    etiquetaDer: "All Inclusive 24h",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
    alt: "Promoción Punta Cana Todo Incluido desde Lima — Cityland Travel",
    sobretitulo: "Vuelo + Resort Todo Incluido + Traslados + Seguro",
    titulo: "Promo Punta Cana o Cancún All Inclusive",
    labelPrecio: "Tarifa promocional por persona",
    precio: "$899",
    moneda: "USD",
    notaInferior: "Separa hoy con $450 USD (50% inicial)",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Me interesa la Promoción de Punta Cana / Cancún Todo Incluido desde $899 USD.",
  },
  seccionCatalogo: {
    sobretitulo: "Catálogo de Ofertas y Preventas Vigentes",
    titulo: "Elige tu Destino en Promoción",
    filtros: [
      { id: "todos", label: "Todas las Promos" },
      { id: "caribe", label: "Caribe & Sudamérica" },
      { id: "europa", label: "Europa & Exóticos" },
      { id: "peru", label: "Nacionales Perú" },
    ],
  },
  items: [
    {
      id: "promo-madrid-migratorio",
      titulo: "Promo Madrid Vuelo + Carpeta Migratoria",
      pais: "España",
      filtro: "europa",
      subtitulo: "Salidas confirmadas · Iberia / Air Europa / Plus Ultra",
      precioPrincipal: "$890",
      precioSecundario: "USD",
      notaPrecio: "Separa con $445 (50% inicial)",
      tag: "Más Pedido",
      tagBg: "bg-red-600 text-white",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=85",
      alt: "Promoción viaje a Madrid desde Lima",
      resumenCorto:
        "Boleto aéreo desde Lima + Reserva de alojamiento verificada + Seguro Schengen 30.000€ + Asesoría personalizada de ingreso.",
      checks: ["Boleto aéreo con impuestos", "Seguro Schengen 30.000€", "Reserva verificable y asesoría"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Promo Madrid desde $890 USD.",
    },
    {
      id: "promo-punta-cana-all-inclusive",
      titulo: "Promo Punta Cana Resort Todo Incluido",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "5 Días / 4 Noches · Sin Visa para Peruanos",
      precioPrincipal: "$899",
      precioSecundario: "USD",
      notaPrecio: "Separa con $450 (50% inicial)",
      tag: "Todo Incluido",
      tagBg: "bg-emerald-600 text-white",
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85",
      alt: "Promoción Punta Cana Todo Incluido",
      resumenCorto:
        "Vuelos Lima – Punta Cana – Lima, 4 noches en Resort frente a Playa Bávaro con comidas y bebidas ilimitadas 24h y traslados.",
      checks: ["Vuelo ida y vuelta desde Lima", "Resort Todo Incluido 24h", "Traslados y seguro médico"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Promo Punta Cana Todo Incluido desde $899 USD.",
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
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Promo Cartagena desde $599 USD.",
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
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=85",
      alt: "Promoción Panamá y Medellín desde Lima",
      resumenCorto:
        "Vuela con Copa Airlines y conoce el Canal de Panamá, compras y la eterna primavera de Medellín con hoteles, desayunos y tours incluidos.",
      checks: ["Vuelos Copa Airlines incluidos", "Hoteles con desayuno en ambas ciudades", "City Tour Panamá + Chiva en Medellín"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar el Combinado Panamá + Medellín desde $799 USD.",
    },
    {
      id: "promo-europa-clasica-15d",
      titulo: "Promo Gran Tour de Europa (España, Francia e Italia)",
      pais: "Europa",
      filtro: "europa",
      subtitulo: "12 a 15 Días · Circuito Completo con Guía en Español",
      precioPrincipal: "$1,850",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% y paga en cuotas",
      tag: "Circuito Europeo",
      tagBg: "bg-purple-700 text-white",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
      alt: "Promoción Circuito por Europa desde Lima",
      resumenCorto:
        "Recorre Madrid, Barcelona, París, Venecia, Florencia y Roma con vuelos desde Lima, hoteles con desayuno, traslados europeos y seguro Schengen.",
      checks: ["Vuelos Lima – Europa – Lima", "Hoteles con desayuno y guía en español", "Seguro médico Schengen 30.000€"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Promo Circuito Europeo desde $1,850 USD.",
    },
    {
      id: "promo-cusco-machu-picchu",
      titulo: "Promo Cusco Imperial, Valle Sagrado & Machu Picchu",
      pais: "Perú",
      filtro: "peru",
      subtitulo: "4 Días / 3 Noches · Todo Organizado desde Lima",
      precioPrincipal: "$299",
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
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Promo Cusco y Machu Picchu desde $299 USD.",
    },
  ],
  pilares: [
    {
      titulo: "Precios Finales en USD",
      sub: "Con impuestos aeroportuarios y tasas obligatorias incluidas",
    },
    {
      titulo: "Separa con 50%",
      sub: "Asegura tu cupo aéreo hoy y abona el saldo antes de tu viaje",
    },
    {
      titulo: "Reservas Verificables",
      sub: "Código PNR de aerolínea y vouchers de hotel reales al instante",
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
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
    alt: "Promociones de viajes Cityland Travel",
  },
  waFlotante: {
    numero: "51944103890",
    mensaje: "¡Hola Cityland Travel! Quiero consultar las promociones de viajes vigentes.",
    texto: "Promociones 2026",
  },
};

export default function PromocionesPage() {
  return <AirlineLandingTemplate config={CONFIG_PROMOCIONES} />;
}
