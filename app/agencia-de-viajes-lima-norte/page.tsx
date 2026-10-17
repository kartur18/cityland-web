import type { Metadata } from "next";
import AirlineLandingTemplate, {
  type ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Agencia de Viajes en Lima Norte (Los Olivos, Independencia, Comas, SMP) | Cityland Travel",
  description:
    "La agencia de viajes líder en Lima Norte (RUC 20614914239). Sede central en Av. Antúnez de Mayolo 814, Los Olivos (a minutos de MegaPlaza y Plaza Norte). Vuelos a España, paquetes a Punta Cana, Cancún, Cartagena, Cusco y visas.",
  keywords: [
    "agencia de viajes en lima norte",
    "agencia de viajes cerca de megaplaza",
    "agencia de viajes cerca de plaza norte",
    "agencia de viajes en comas",
    "agencia de viajes en san martin de porres",
    "agencia de viajes en independencia lima",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/agencia-de-viajes-lima-norte",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/agencia-de-viajes-lima-norte",
    title:
      "Agencia de Viajes en Lima Norte — Vuelos, Paquetes y Visas | Cityland Travel",
    description:
      "Atención presencial en Lima Norte (Av. Antúnez de Mayolo 814, Los Olivos) y cotizaciones por WhatsApp. Separa tu viaje con el 50% de inicial.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_LIMA_NORTE: ConfiguracionLandingAerolinea = {
  badgeHero:
    "Sede Central de Lima Norte · A minutos de Plaza Norte y MegaPlaza · RUC 20614914239",
  banderasHero: ["Perú", "República Dominicana", "México", "España"],
  tituloHero: "La Agencia de Viajes de",
  tituloDestacadoHero: "Lima Norte",
  descripcionHero:
    "Atendemos a viajeros, familias, colegios y empresas de Los Olivos, Independencia, San Martín de Porres, Comas, Carabayllo y Puente Piedra.",
  negritaHero:
    "Reserva tus vuelos y paquetes con el respaldo de una oficina física real.",
  ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en Lima Norte. Quiero consultar disponibilidad y precios. ¿Me pueden ayudar?",
  checksHero: [
    "Sede en Av. Antúnez de Mayolo 814, Los Olivos",
    "Precios en US$ con impuestos incluidos",
    "Separa tu paquete con el 50% de inicial",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "Lima Norte",
    etiquetaDer: "Separa con 50%",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
    alt: "Agencia de Viajes en Lima Norte Cityland Travel",
    sobretitulo: "Los Olivos · Independencia · SMP · Comas · Carabayllo · Puente Piedra",
    titulo: "Tus Vacaciones y Vuelos Internacionales cerca de casa",
    labelPrecio: "Paquetes turísticos verificados",
    precio: "$399",
    moneda: "USD",
    notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
    waNumero: "51944103890",
    waMensaje:
      "Hola, encontré Cityland Travel en Google (Lima Norte). Quiero cotizar un viaje con un asesor.",
  },
  seccionCatalogo: {
    sobretitulo: "Destinos Más Pedidos en Lima Norte",
    titulo: "Vuelos y Paquetes con salida desde el Aeropuerto Jorge Chávez",
    filtros: [
      { id: "todos", label: "Todos los destinos" },
      { id: "caribe", label: "Caribe All Inclusive" },
      { id: "europa", label: "España y Europa" },
      { id: "sudamerica", label: "Colombia y Brasil" },
    ],
  },
  items: [
    {
      id: "limanorte-caribe",
      titulo: "Punta Cana y Cancún Todo Incluido (5D / 4N)",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "Vuelos + Resort All Inclusive + Traslados + Impuestos",
      precioPrincipal: "$1,049",
      precioSecundario: "$525",
      notaPrecio: "Paquete All Inclusive · Incluye impuestos",
      tag: "Todo Incluido",
      tagBg: "bg-blue-700",
      img: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a Punta Cana desde Lima Norte",
      resumenCorto: "Comidas, bebidas y snacks ilimitados frente al mar",
      checks: [
        "Boleto aéreo ida y vuelta desde el Aeropuerto Jorge Chávez",
        "4 noches en Resort Todo Incluido en Punta Cana o Cancún",
        "Traslados aeropuerto-hotel-aeropuerto y asistencia permanente",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de Lima Norte y encontré Cityland Travel en Google. Quiero cotizar un paquete Todo Incluido a Cancún o Punta Cana (Desde $1,049 USD). ¿Me pueden ayudar?",
    },
    {
      id: "limanorte-espana",
      titulo: "Vuelos y Carpeta Migratoria a España (Madrid / Barcelona)",
      pais: "España",
      filtro: "europa",
      subtitulo: "Salidas confirmadas con Seguro Schengen de 30.000€",
      precioPrincipal: "$890",
      precioSecundario: "$445",
      notaPrecio: "Paquete a España · Incluye impuestos",
      tag: "Ruta Europa",
      tagBg: "bg-red-600",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a España en Lima Norte",
      resumenCorto: "Asesoría migratoria presencial en Lima Norte",
      checks: [
        "Boleto aéreo con equipaje en Iberia, Air Europa, Plus Ultra o LATAM",
        "Seguro médico Schengen obligatorio con cobertura de 30.000€",
        "Reserva de hospedaje y simulacro migratorio en nuestra oficina",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de Lima Norte y encontré Cityland Travel en Google. Quiero información para viajar a España (Desde $890 USD). ¿Me pueden ayudar?",
    },
    {
      id: "limanorte-colombia",
      titulo: "Cartagena y Medellín Solo con tu DNI (5D / 4N)",
      pais: "Colombia",
      filtro: "sudamerica",
      subtitulo: "El primer viaje internacional ideal sin visa ni pasaporte",
      precioPrincipal: "$679",
      precioSecundario: "$340",
      notaPrecio: "Paquete turístico · Incluye impuestos",
      tag: "Solo con DNI",
      tagBg: "bg-emerald-700",
      img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=900&q=85",
      alt: "Paquetes a Cartagena y Medellín en Lima Norte",
      resumenCorto: "Vuelo + Hotel + Desayunos + Tours",
      checks: [
        "Vuelos ida y vuelta desde Lima + alojamiento con desayunos",
        "Tours incluidos (Isla Barú en Cartagena o Guatapé en Medellín)",
        "Viaja presentando únicamente tu DNI peruano vigente",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de Lima Norte y encontré Cityland Travel en Google. Quiero consultar los paquetes a Colombia solo con DNI (Desde $679 USD). ¿Me pueden ayudar?",
    },
  ],
  pilares: [
    { titulo: "Cerca de MegaPlaza", sub: "A 8 minutos de Plaza Norte y MegaPlaza" },
    { titulo: "A 20 min del Aeropuerto", sub: "Conexión rápida con el Jorge Chávez" },
    { titulo: "Separa con 50%", sub: "Reserva hoy y paga en cuotas antes de viajar" },
    { titulo: "RUC 20614914239", sub: "Cityland Travel E.I.R.L. · Agencia formal" },
  ],
  bannerFinal: {
    sobretitulo: "Sede Central Lima Norte · Av. Antúnez de Mayolo 814",
    titulo: "Cotiza por WhatsApp o visítanos hoy en Los Olivos",
    descripcion:
      "Escríbenos ahora mismo para asignarte un asesor especializado y enviarte las mejores tarifas vigentes.",
    ctaTexto: "Consultar disponibilidad por WhatsApp",
    waNumero: "51944103890",
    waMensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Lima Norte. ¿Me pueden ayudar con una cotización?",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    alt: "Agencia de Viajes en Lima Norte",
  },
  waFlotante: {
    numero: "51944103890",
    texto: "WhatsApp Lima Norte",
    mensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Lima Norte. ¿Me pueden ayudar?",
  },
};

export default function AgenciaLimaNortePage() {
  return <AirlineLandingTemplate config={CONFIG_LIMA_NORTE} />;
}
