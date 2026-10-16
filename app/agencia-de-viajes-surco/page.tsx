import type { Metadata } from "next";
import AirlineLandingTemplate, {
  type ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Agencia de Viajes para Surco, San Borja y La Molina | Cityland Travel",
  description:
    "Cotiza paquetes familiares a Punta Cana, Cancún, Orlando, Europa, cruceros, quinceañeras y viajes de promoción desde Surco, San Borja y La Molina con Cityland Travel (RUC 20614914239).",
  keywords: [
    "agencia de viajes en surco",
    "agencia de viajes san borja",
    "agencia de viajes la molina",
    "paquetes turisticos santiago de surco",
    "viajes familiares y promociones escolares surco",
    "cityland travel surco",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/agencia-de-viajes-surco",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/agencia-de-viajes-surco",
    title:
      "Agencia de Viajes para Surco, San Borja y La Molina — Cityland Travel",
    description:
      "Especialistas en vacaciones familiares, Europa, Caribe All Inclusive, visas y promociones escolares con precios en USD e impuestos incluidos.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_SURCO: ConfiguracionLandingAerolinea = {
  badgeHero:
    "Atención para Santiago de Surco, San Borja y La Molina · RUC 20614914239",
  banderasHero: ["Perú", "República Dominicana", "Estados Unidos", "España"],
  tituloHero: "Tu Agencia de Viajes para",
  tituloDestacadoHero: "Surco, San Borja & La Molina",
  descripcionHero:
    "Organizamos vacaciones familiares a Disney/Orlando, resorts Todo Incluido en el Caribe, circuitos por Europa y viajes de promoción escolar con contrato formal.",
  negritaHero:
    "Atención personalizada por WhatsApp y videollamada, cerca a la Embajada de EE.UU. para asesoría de Visas.",
  ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
  waPrincipalNumero: "51983891157",
  waPrincipalMensaje:
    "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en Surco / San Borja. Quiero consultar disponibilidad y precios. ¿Me pueden ayudar?",
  checksHero: [
    "Agencia formal registrada en MINCETUR (RUC 20614914239)",
    "Precios en US$ con impuestos incluidos",
    "Separa tu paquete con el 50% de inicial",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "Surco · San Borja · La Molina",
    etiquetaDer: "Separa con 50%",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=85",
    alt: "Agencia de Viajes para Surco, San Borja y La Molina — Cityland Travel",
    sobretitulo: "Santiago de Surco · Chacarilla · Monterrico · San Borja · La Molina",
    titulo: "Vacaciones Familiares, Europa y Trámite de Visa Americana",
    labelPrecio: "Paquetes verificados desde",
    precio: "$399",
    moneda: "USD",
    notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
    waNumero: "51907451255",
    waMensaje:
      "Hola, soy de Surco / San Borja y encontré Cityland Travel en Google. Quiero cotizar un viaje con un asesor.",
  },
  seccionCatalogo: {
    sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
    titulo: "Viajes favoritos de familias en Surco, San Borja y La Molina",
    filtros: [
      { id: "todos", label: "Todos los destinos" },
      { id: "caribe", label: "Caribe Familiar" },
      { id: "europa", label: "España y Europa" },
      { id: "usa", label: "Orlando, Miami & Visas" },
    ],
  },
  items: [
    {
      id: "surco-caribe",
      titulo: "Punta Cana, Cancún & Aruba Todo Incluido (5D / 4N)",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "Vuelos + Resort 5★ Familiar + Parque Acuático y Playa",
      precioPrincipal: "$1,049",
      precioSecundario: "$525",
      notaPrecio: "Paquete All Inclusive · Incluye impuestos (Verif. Oct 2026)",
      tag: "Favorito Familias",
      tagBg: "bg-amber-600",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85",
      alt: "Vacaciones en Punta Cana para familias de Surco",
      resumenCorto: "Vuelos + 4 noches Resort 5★ + Comidas 24h + Traslados",
      checks: [
        "Boletos aéreos ida y vuelta desde Lima con impuestos",
        "4 noches en Resort Todo Incluido ideal para familias o parejas",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51983269950",
      waMensaje:
        "Hola, soy de Surco y encontré Cityland Travel en Google. Quiero cotizar un paquete familiar al Caribe (Desde $1,049 USD).",
    },
    {
      id: "surco-usa",
      titulo: "Orlando & Miami + Asesoría de Visa Americana B1/B2",
      pais: "Estados Unidos",
      filtro: "usa",
      subtitulo: "Parques Disney y Universal + Preparación para la Embajada en Surco",
      precioPrincipal: "$1,190",
      precioSecundario: "$595",
      notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
      tag: "Disney & Miami",
      tagBg: "bg-blue-700",
      img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a Orlando y Visa Americana en Surco",
      resumenCorto: "Paquetes a Florida y gestión experta del DS-160",
      checks: [
        "Vuelos + Hotel familiar en Orlando y Miami con traslados",
        "Asesoría integral si necesitas tramitar o renovar tu Visa en la Embajada de Surco",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51913637476",
      waMensaje:
        "Hola, soy de Surco y encontré Cityland Travel en Google. Quiero información sobre paquetes a Orlando/Miami o trámite de Visa B1/B2.",
    },
    {
      id: "surco-europa",
      titulo: "Vuelos y Circuitos a Madrid, Barcelona, París y Roma",
      pais: "España",
      filtro: "europa",
      subtitulo: "Boletos directos y circuitos guiados con Seguro Schengen",
      precioPrincipal: "$890",
      precioSecundario: "$445",
      notaPrecio: "Vuelo / Paquete a Europa · Incluye impuestos (Verif. Oct 2026)",
      tag: "Ruta Europa",
      tagBg: "bg-red-600",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a Europa desde Surco",
      resumenCorto: "Vuelos + Hoteles 4★ + Seguro Schengen 30.000€",
      checks: [
        "Salidas confirmadas en Iberia, Air Europa, Plus Ultra, KLM y LATAM",
        "Circuitos de 8 a 15 días o boletos con carpeta migratoria",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51903212007",
      waMensaje:
        "Hola, soy de Surco y encontré Cityland Travel en Google. Quiero cotizar un viaje a España / Europa (Desde $890 USD).",
    },
  ],
  pilares: [
    { titulo: "Vacaciones en Familia", sub: "Tarifas especiales para niños y grupos" },
    { titulo: "Colegios y Quinceañeras", sub: "Reuniones informativas con comités de aula" },
    { titulo: "Separa con 50%", sub: "Congela tu tarifa en dólares hoy" },
    { titulo: "RUC 20614914239", sub: "Agencia acreditada en MINCETUR" },
  ],
  bannerFinal: {
    sobretitulo: "Atención para Surco, San Borja y La Molina",
    titulo: "Planifica tus vacaciones con respaldo profesional",
    descripcion:
      "Escríbenos por WhatsApp para asignarte un asesor de viajes y enviarte tu cotización en minutos.",
    ctaTexto: "Consultar disponibilidad por WhatsApp",
    waNumero: "51983882504",
    waMensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Surco. ¿Me pueden ayudar con una cotización?",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    alt: "Agencia de Viajes Surco",
  },
  waFlotante: {
    numero: "51942086698",
    texto: "WhatsApp Surco",
    mensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Surco. ¿Me pueden ayudar?",
  },
};

export default function AgenciaSurcoPage() {
  return <AirlineLandingTemplate config={CONFIG_SURCO} />;
}
