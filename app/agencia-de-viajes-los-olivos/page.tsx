import type { Metadata } from "next";
import AirlineLandingTemplate, {
  type ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Agencia de Viajes en Los Olivos, Lima (Oficina en Av. Antúnez de Mayolo 814) | Cityland Travel",
  description:
    "Cityland Travel E.I.R.L. (RUC 20614914239): Agencia de viajes física y formal en Los Olivos, Lima (Av. Antúnez de Mayolo N. 814). Paquetes al Caribe, Cusco, Europa, boletos aéreos y trámite de visas. Separa con el 50% de inicial.",
  keywords: [
    "agencia de viajes en los olivos",
    "agencias de viajes en los olivos lima",
    "agencia de viajes antunez de mayolo los olivos",
    "paquetes turisticos en los olivos",
    "venta de pasajes aereos en los olivos",
    "cityland travel los olivos",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/agencia-de-viajes-los-olivos",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/agencia-de-viajes-los-olivos",
    title:
      "Agencia de Viajes en Los Olivos — Oficina Física en Av. Antúnez de Mayolo 814 | Cityland Travel",
    description:
      "Visítanos en nuestra oficina de Los Olivos o cotiza por WhatsApp. Vuelos a España, paquetes Todo Incluido a Punta Cana, Cancún, Cartagena, Cusco y visas.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_LOS_OLIVOS: ConfiguracionLandingAerolinea = {
  badgeHero: "Oficina Física en Los Olivos · Av. Antúnez de Mayolo N. 814 · RUC 20614914239",
  banderasHero: ["Perú", "España", "República Dominicana", "Colombia"],
  tituloHero: "Tu Agencia de Viajes Formal en",
  tituloDestacadoHero: "Los Olivos, Lima",
  descripcionHero:
    "Atención presencial en nuestra oficina de Av. Antúnez de Mayolo N. 814 (a minutos de la Municipalidad de Los Olivos, MegaPlaza y Plaza Norte) y atención inmediata por WhatsApp.",
  negritaHero:
    "Emitimos boletos aéreos, paquetes Todo Incluido, carpeta migratoria a España y visas.",
  ctaPrincipalTexto: "Consultar o agendar cita por WhatsApp",
  waPrincipalNumero: "51983882504",
  waPrincipalMensaje:
    "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en Los Olivos. Quiero cotizar un viaje o visitar su oficina en Av. Antúnez de Mayolo 814. ¿Me pueden ayudar?",
  checksHero: [
    "Oficina física en Av. Antúnez de Mayolo 814",
    "RUC 20614914239 · Boleta y Factura SUNAT",
    "Separa tu viaje con el 50% de inicial",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "Sede Los Olivos",
    etiquetaDer: "Lun–Sáb 9am a 7pm",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    alt: "Agencia de Viajes Cityland Travel en Los Olivos, Lima",
    sobretitulo: "Av. Antúnez de Mayolo N. 814, Los Olivos — Lima",
    titulo: "Viaja con el respaldo de una Agencia Física y Formal",
    labelPrecio: "Paquetes nacionales e internacionales",
    precio: "$399",
    moneda: "USD",
    notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
    waNumero: "51942086698",
    waMensaje:
      "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y tarifas en su oficina de Los Olivos.",
  },
  seccionCatalogo: {
    sobretitulo: "Servicios en nuestra Sede Los Olivos",
    titulo: "¿Qué puedes reservar hoy en nuestra oficina o por WhatsApp?",
    filtros: [
      { id: "todos", label: "Todos los servicios" },
      { id: "europa", label: "España y Europa" },
      { id: "caribe", label: "Caribe y Sudamérica" },
      { id: "peru", label: "Cusco y Perú" },
    ],
  },
  items: [
    {
      id: "olivos-espana",
      titulo: "Vuelos y Paquetes Migratorios a España y Europa",
      pais: "España",
      filtro: "europa",
      subtitulo: "Madrid, Barcelona, Roma y París con carpeta migratoria lista",
      precioPrincipal: "$890",
      precioSecundario: "$445",
      notaPrecio: "Paquete a España · Incluye impuestos (Verif. Oct 2026)",
      tag: "Especialidad",
      tagBg: "bg-red-600",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a España desde Los Olivos",
      resumenCorto: "Incluye Seguro Schengen 30.000€ y Carpeta Impresa",
      checks: [
        "Boleto aéreo confirmado en Iberia, Air Europa, Plus Ultra o LATAM",
        "Seguro médico Schengen de 30.000€ y reserva de hotel verificable",
        "Entrega física de tu carpeta migratoria impresa en nuestra oficina de Los Olivos",
      ],
      waNumber: "51906450098",
      waMensaje:
        "Hola, encontré su agencia en Los Olivos por Google. Quiero consultar por el paquete a España (Desde $890 USD). ¿Me pueden ayudar?",
    },
    {
      id: "olivos-caribe",
      titulo: "Paquetes Todo Incluido al Caribe y Sudamérica",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "Punta Cana, Cancún, Cartagena, Medellín, Río y Miami",
      precioPrincipal: "$679",
      precioSecundario: "$340",
      notaPrecio: "Paquete turístico · Incluye impuestos",
      tag: "All Inclusive",
      tagBg: "bg-blue-700",
      img: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?auto=format&fit=crop&w=900&q=85",
      alt: "Paquetes al Caribe en Los Olivos",
      resumenCorto: "Resorts 4★ y 5★ con comidas y bebidas ilimitadas",
      checks: [
        "Vuelos ida y vuelta desde Lima + traslados aeropuerto-hotel",
        "Alojamiento en resorts frente al mar o cerca de la playa",
        "Facilidad de separar con el 50% de inicial en oficina o transferencia",
      ],
      waNumber: "51944280151",
      waMensaje:
        "Hola, encontré su agencia en Los Olivos por Google. Quiero cotizar un paquete al Caribe o Sudamérica (Desde $679 USD). ¿Me pueden ayudar?",
    },
    {
      id: "olivos-cusco",
      titulo: "Paquetes a Cusco, Machu Picchu y Playas del Norte",
      pais: "Perú",
      filtro: "peru",
      subtitulo: "Salidas diarias a Cusco, Punta Sal, Máncora y Tarapoto",
      precioPrincipal: "$399",
      precioSecundario: "$200",
      notaPrecio: "Paquete turístico · Incluye impuestos",
      tag: "Turismo Nacional",
      tagBg: "bg-emerald-700",
      img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=85",
      alt: "Paquetes a Cusco en Los Olivos",
      resumenCorto: "Incluye vuelos + hotel + tren y entradas",
      checks: [
        "Vuelos Lima – Cusco – Lima + hotel + tren turístico a Machu Picchu",
        "Entradas oficiales garantizadas y guías profesionales en español",
        "Opciones Todo Incluido en Punta Sal, Máncora y selva de Tarapoto",
      ],
      waNumber: "51938845086",
      waMensaje:
        "Hola, encontré su agencia en Los Olivos por Google. Quiero cotizar un paquete a Cusco o Playas del Norte (Desde $399 USD). ¿Me pueden ayudar?",
    },
  ],
  pilares: [
    { titulo: "+10 Años en Los Olivos", sub: "Av. Antúnez de Mayolo N. 814" },
    { titulo: "+5,000 Viajeros", sub: "Familias y empresas atendidas con éxito" },
    { titulo: "100% Formal SUNAT", sub: "Cityland Travel E.I.R.L. · RUC 20614914239" },
    { titulo: "Lunes a Sábado", sub: "Atención presencial de 9:00 am a 7:00 pm" },
  ],
  bannerFinal: {
    sobretitulo: "Av. Antúnez de Mayolo N. 814 · Los Olivos",
    titulo: "Ven a nuestra oficina en Los Olivos o cotiza ahora por WhatsApp",
    descripcion:
      "Atendemos de lunes a sábado de 9:00 am a 7:00 pm. Si prefieres, escríbenos por WhatsApp y un asesor te enviará la cotización en minutos.",
    ctaTexto: "Hablar con un asesor por WhatsApp",
    waNumero: "51906642487",
    waMensaje:
      "Hola, encontré Cityland Travel en Google. Quiero consultar por un viaje o agendar atención en su oficina de Los Olivos.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    alt: "Oficina Cityland Travel en Los Olivos",
  },
  waFlotante: {
    numero: "51944031724",
    texto: "WhatsApp Sede Los Olivos",
    mensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Los Olivos. ¿Me pueden ayudar?",
  },
};

export default function AgenciaLosOlivosPage() {
  return <AirlineLandingTemplate config={CONFIG_LOS_OLIVOS} />;
}
