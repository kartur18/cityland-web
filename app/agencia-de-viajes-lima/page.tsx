import type { Metadata } from "next";
import AirlineLandingTemplate, {
  type ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Agencia de Viajes en Lima, Perú (RUC 20614914239 · Vuelos, Paquetes y Visas) | Cityland Travel",
  description:
    "Cityland Travel E.I.R.L. (RUC 20614914239): Agencia de viajes formal y confiable en Lima, Perú. Especialistas en vuelos a España y Europa, paquetes Todo Incluido a Punta Cana, Cancún, Cartagena, Cusco y trámite de visas. Separa con el 50%.",
  keywords: [
    "agencia de viajes en lima",
    "agencias de viajes en lima peru",
    "agencias de viajes confiables en lima",
    "mejor agencia de viajes en lima",
    "paquetes turisticos desde lima",
    "cityland travel lima",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/agencia-de-viajes-lima",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/agencia-de-viajes-lima",
    title:
      "Agencia de Viajes en Lima, Perú — Vuelos, Paquetes y Visas | Cityland Travel",
    description:
      "Reserva tus vuelos y paquetes con una agencia de viajes formal en Lima (RUC 20614914239). Separa hoy con el 50% de inicial.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_LIMA: ConfiguracionLandingAerolinea = {
  badgeHero: "Cityland Travel E.I.R.L. · RUC 20614914239 · Agencia Formal en Lima, Perú",
  banderasHero: ["Perú", "España", "República Dominicana", "Estados Unidos"],
  tituloHero: "Agencia de Viajes Formal en",
  tituloDestacadoHero: "Lima, Perú",
  descripcionHero:
    "Más de 10 años conectando a viajeros, familias, colegios y empresas de todo Lima y el Perú con el mundo.",
  negritaHero:
    "Boletos aéreos confirmados con código PNR, paquetes Todo Incluido, carpeta migratoria a Europa y asesoría de visas.",
  ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en Lima. Quiero consultar disponibilidad y precios. ¿Me pueden ayudar?",
  checksHero: [
    "RUC 20614914239 · Boleta y Factura SUNAT",
    "Oficina física en Lima y atención nacional",
    "Separa tu paquete con el 50% de inicial",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "Agencia Formal",
    etiquetaDer: "+5,000 Viajeros",
    img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",
    alt: "Agencia de Viajes en Lima Cityland Travel",
    sobretitulo: "Salidas Diarias desde el Aeropuerto Internacional Jorge Chávez (LIM)",
    titulo: "Vuelos, Paquetes Turísticos, Cruceros y Visas en Lima",
    labelPrecio: "Paquetes nacionales e internacionales",
    precio: "$399",
    moneda: "USD",
    notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
    waNumero: "51944103890",
    waMensaje:
      "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en Lima. Quiero cotizar un viaje.",
  },
  seccionCatalogo: {
    sobretitulo: "Nuestras Líneas de Servicio en Lima",
    titulo: "Todo lo que necesitas para viajar seguro desde el Perú",
    filtros: [
      { id: "todos", label: "Todos los servicios" },
      { id: "europa", label: "España y Europa" },
      { id: "caribe", label: "Caribe y Sudamérica" },
      { id: "peru", label: "Cusco y Perú" },
    ],
  },
  items: [
    {
      id: "lima-espana-migratorio",
      titulo: "Vuelos y Paquetes Migratorios a España y Europa",
      pais: "España",
      filtro: "europa",
      subtitulo: "Madrid, Barcelona, Roma, París y circuitos europeos",
      precioPrincipal: "$890",
      precioSecundario: "$445",
      notaPrecio: "Paquete turístico/migratorio · Incluye impuestos",
      tag: "Líderes en Europa",
      tagBg: "bg-red-600",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a España desde Lima",
      resumenCorto: "Vuelo + Seguro Schengen 30.000€ + Reserva Hotel",
      checks: [
        "Boleto aéreo con equipaje en Iberia, Air Europa, Plus Ultra o LATAM",
        "Seguro médico Schengen obligatorio con cobertura de 30.000€",
        "Asesoría paso a paso para pasar el control migratorio sin estrés",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, encontré su agencia en Lima por Google. Quiero consultar el paquete a España (Desde $890 USD). ¿Me pueden ayudar?",
    },
    {
      id: "lima-caribe-allinclusive",
      titulo: "Resorts Todo Incluido en Punta Cana, Cancún y Cartagena",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "Vacaciones familiares, parejas, grupos y quinceañeras",
      precioPrincipal: "$699",
      precioSecundario: "$350",
      notaPrecio: "Paquete turístico · Incluye impuestos",
      tag: "Todo Incluido",
      tagBg: "bg-blue-700",
      img: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?auto=format&fit=crop&w=900&q=85",
      alt: "Paquetes al Caribe desde Lima",
      resumenCorto: "Vuelos + Hotel + Alimentación + Traslados",
      checks: [
        "Boleto aéreo ida y vuelta desde el Aeropuerto Jorge Chávez",
        "Alojamiento en resorts seleccionados frente a las mejores playas",
        "Congela tu tarifa hoy con el 50% de inicial y paga en cuotas",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, encontré su agencia en Lima por Google. Quiero cotizar un paquete al Caribe (Desde $699 USD). ¿Me pueden ayudar?",
    },
    {
      id: "lima-cusco-nacional",
      titulo: "Cusco, Machu Picchu y Playas del Norte del Perú",
      pais: "Perú",
      filtro: "peru",
      subtitulo: "Salidas diarias a Cusco, Punta Sal, Máncora y Tarapoto",
      precioPrincipal: "$399",
      precioSecundario: "$200",
      notaPrecio: "Paquete turístico · Incluye impuestos",
      tag: "Perú Todo el Año",
      tagBg: "bg-emerald-700",
      img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=85",
      alt: "Paquetes a Cusco desde Lima",
      resumenCorto: "Vuelos + Hotel + Tren Turístico + Machu Picchu",
      checks: [
        "Boletos aéreos Lima – Cusco – Lima con impuestos incluidos",
        "Hotel con desayunos + Tren Expedition/Voyager + Bus Consettur",
        "Entradas oficiales garantizadas a Machu Picchu con guía profesional",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, encontré su agencia en Lima por Google. Quiero consultar el paquete a Cusco (Desde $399 USD). ¿Me pueden ayudar?",
    },
  ],
  pilares: [
    { titulo: "RUC 20614914239", sub: "Cityland Travel E.I.R.L. · Empresa formal" },
    { titulo: "Oficina Física", sub: "Av. Antúnez de Mayolo N. 814, Los Olivos, Lima" },
    { titulo: "Separa con 50%", sub: "Facilidades de pago sin intereses" },
    { titulo: "Soporte 24/7", sub: "Acompañamiento antes y durante tu viaje" },
  ],
  bannerFinal: {
    sobretitulo: "Atención en toda Lima Metropolitana y el Perú",
    titulo: "Cotiza tu próximo viaje con un asesor especializado hoy mismo",
    descripcion:
      "Atendemos presencialmente en nuestra sede de Lima y de forma inmediata por WhatsApp Business para todos los distritos de Lima y provincias.",
    ctaTexto: "Consultar disponibilidad por WhatsApp",
    waNumero: "51944103890",
    waMensaje:
      "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en Lima. ¿Me pueden ayudar?",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    alt: "Agencia de Viajes en Lima Cityland Travel",
  },
  waFlotante: {
    numero: "51944103890",
    texto: "Cotizar con Agencia Lima",
    mensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Lima. ¿Me pueden ayudar?",
  },
};

export default function AgenciaLimaPage() {
  return <AirlineLandingTemplate config={CONFIG_LIMA} />;
}
