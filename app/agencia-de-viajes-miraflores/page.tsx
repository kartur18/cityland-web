import type { Metadata } from "next";
import AirlineLandingTemplate, {
  type ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Agencia de Viajes para Miraflores, San Isidro y Barranco | Cityland Travel",
  description:
    "Cotiza vuelos a Europa, paquetes de lujo a Punta Cana, Cancún, Aruba, Dubái y cruceros desde Miraflores, San Isidro y Barranco con Cityland Travel (RUC 20614914239). Atención ejecutiva por WhatsApp y videollamada.",
  keywords: [
    "agencia de viajes en miraflores",
    "agencia de viajes san isidro",
    "agencia de viajes barranco",
    "paquetes turisticos miraflores lima",
    "viajes a europa y caribe miraflores",
    "cityland travel miraflores",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/agencia-de-viajes-miraflores",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/agencia-de-viajes-miraflores",
    title:
      "Agencia de Viajes para Miraflores, San Isidro y Barranco — Cityland Travel",
    description:
      "Atención personalizada en vuelos internacionales, resorts 5 estrellas, cruceros y circuitos por Europa. Precios en USD con impuestos incluidos.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_MIRAFLORES: ConfiguracionLandingAerolinea = {
  badgeHero:
    "Atención Ejecutiva para Miraflores, San Isidro y Barranco · RUC 20614914239",
  banderasHero: ["Perú", "España", "Europa", "Caribe"],
  tituloHero: "Agencia de Viajes para",
  tituloDestacadoHero: "Miraflores & San Isidro",
  descripcionHero:
    "Diseñamos viajes a medida a Europa, resorts 5 estrellas en el Caribe, cruceros y experiencias en Dubái y Turquía con atención inmediata por WhatsApp o videollamada.",
  negritaHero:
    "Tarifas transparentes en dólares con impuestos incluidos y emisión formal IATA / MINCETUR.",
  ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en Miraflores / San Isidro. Quiero consultar disponibilidad y precios. ¿Me pueden ayudar?",
  checksHero: [
    "Agencia acreditada en MINCETUR (RUC 20614914239)",
    "Hoteles 4★ y 5★ seleccionados y vuelos directos",
    "Separa tu paquete con el 50% de inicial",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "Miraflores · San Isidro",
    etiquetaDer: "Separa con 50%",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=85",
    alt: "Agencia de Viajes para Miraflores y San Isidro — Cityland Travel",
    sobretitulo: "Miraflores · San Isidro · Barranco · Lima Moderna",
    titulo: "Circuitos por Europa, Resorts 5★ y Cruceros Internacionales",
    labelPrecio: "Paquetes internacionales desde",
    precio: "$679",
    moneda: "USD",
    notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
    waNumero: "51944103890",
    waMensaje:
      "Hola, soy de Miraflores / San Isidro y encontré Cityland Travel en Google. Quiero cotizar un viaje con un asesor.",
  },
  seccionCatalogo: {
    sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
    titulo: "Experiencias más solicitadas en Miraflores y San Isidro",
    filtros: [
      { id: "todos", label: "Todos los destinos" },
      { id: "europa", label: "Circuitos Europa & Exóticos" },
      { id: "caribe", label: "Resorts 5★ Caribe" },
      { id: "usa", label: "Estados Unidos" },
    ],
  },
  items: [
    {
      id: "miraflores-europa",
      titulo: "Circuito Madrid, París & Roma o Turquía de Ensueño",
      pais: "Europa",
      filtro: "europa",
      subtitulo: "Vuelos + Hoteles 4★/5★ + Guía en Español + Seguro Schengen",
      precioPrincipal: "$1,490",
      precioSecundario: "$745",
      notaPrecio: "Circuito europeo · Incluye impuestos (Verif. Oct 2026)",
      tag: "Europa Premium",
      tagBg: "bg-red-600",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=85",
      alt: "Circuitos a Europa desde Miraflores",
      resumenCorto: "Vuelos + Hoteles céntricos + Traslados + Seguro 30.000€",
      checks: [
        "Boletos aéreos ida y vuelta desde Lima con equipaje de 23 kg",
        "Hoteles seleccionados con desayunos y guía en español",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de Miraflores / San Isidro y encontré Cityland Travel en Google. Quiero cotizar un circuito a Europa o Turquía (Desde $1,490 USD).",
    },
    {
      id: "miraflores-caribe",
      titulo: "Resorts 5★ en Punta Cana, Cancún, Aruba y Curazao",
      pais: "Caribe",
      filtro: "caribe",
      subtitulo: "5 Días / 4 Noches · Vuelos + Resort Frente al Mar + Traslados",
      precioPrincipal: "$1,049",
      precioSecundario: "$525",
      notaPrecio: "Paquete All Inclusive · Incluye impuestos (Verif. Oct 2026)",
      tag: "5 Estrellas",
      tagBg: "bg-amber-600",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85",
      alt: "Resorts 5 estrellas en el Caribe",
      resumenCorto: "Cadenas Riu, Iberostar, Barceló, Lopesan y Secrets",
      checks: [
        "Vuelos directos o con conexión corta desde Lima",
        "4 noches en Resort 5★ con alimentación y bebidas ilimitadas",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de Miraflores / San Isidro y encontré Cityland Travel en Google. Quiero cotizar un Resort 5 estrellas en el Caribe (Desde $1,049 USD).",
    },
    {
      id: "miraflores-usa",
      titulo: "Miami, Orlando & Nueva York a Medida",
      pais: "Estados Unidos",
      filtro: "usa",
      subtitulo: "Vuelos Directos + Hoteles + Asesoría de Visa B1/B2",
      precioPrincipal: "$1,190",
      precioSecundario: "$595",
      notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
      tag: "Norteamérica",
      tagBg: "bg-blue-700",
      img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a Estados Unidos desde Miraflores",
      resumenCorto: "Vuelos + Hotel en South Beach, Orlando o Manhattan",
      checks: [
        "Boletos aéreos ida y vuelta + alojamiento de primera categoría",
        "Seguro médico para Estados Unidos y traslados incluidos",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de Miraflores / San Isidro y encontré Cityland Travel en Google. Quiero cotizar un viaje a Miami, Orlando o Nueva York (Desde $1,190 USD).",
    },
  ],
  pilares: [
    { titulo: "Atención Ejecutiva", sub: "Por WhatsApp, videollamada o presencial" },
    { titulo: "Facturación RUC 20", sub: "Para viajes corporativos y familiares" },
    { titulo: "Separa con 50%", sub: "Congela tarifas promocionales en USD" },
    { titulo: "RUC 20614914239", sub: "Agencia formal registrada en MINCETUR" },
  ],
  bannerFinal: {
    sobretitulo: "Miraflores · San Isidro · Barranco",
    titulo: "Cotiza tu próximo viaje con un asesor especializado",
    descripcion:
      "Recibe en minutos una propuesta formal en dólares con vuelos, hoteles y seguros incluidos.",
    ctaTexto: "Consultar disponibilidad por WhatsApp",
    waNumero: "51944103890",
    waMensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Miraflores. ¿Me pueden ayudar con una cotización?",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80",
    alt: "Agencia de Viajes Miraflores",
  },
  waFlotante: {
    numero: "51944103890",
    texto: "WhatsApp Miraflores",
    mensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Miraflores. ¿Me pueden ayudar?",
  },
};

export default function AgenciaMirafloresPage() {
  return <AirlineLandingTemplate config={CONFIG_MIRAFLORES} />;
}
