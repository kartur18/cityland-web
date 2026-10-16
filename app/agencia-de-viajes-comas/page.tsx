import type { Metadata } from "next";
import AirlineLandingTemplate, {
  type ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Agencia de Viajes para Comas, Carabayllo y Puente Piedra | Cityland Travel",
  description:
    "La agencia de viajes más cercana y formal para Comas, Carabayllo y Puente Piedra (RUC 20614914239). Sede en Av. Antúnez de Mayolo 814, Los Olivos. Vuelos a España, paquetes a Punta Cana, Cancún, Cartagena y Cusco.",
  keywords: [
    "agencia de viajes en comas",
    "agencia de viajes en carabayllo",
    "agencia de viajes en puente piedra",
    "vuelos a espana en comas lima",
    "paquetes turisticos comas lima norte",
    "cityland travel comas",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/agencia-de-viajes-comas",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/agencia-de-viajes-comas",
    title:
      "Agencia de Viajes para Comas, Carabayllo y Puente Piedra | Cityland Travel",
    description:
      "Cotiza vuelos a Europa, Caribe y Sudamérica por WhatsApp o visítanos en nuestra oficina de Lima Norte. Separa con el 50% de inicial.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_COMAS: ConfiguracionLandingAerolinea = {
  badgeHero:
    "Atención Directa para Comas, Carabayllo y Puente Piedra · RUC 20614914239",
  banderasHero: ["Perú", "España", "República Dominicana", "México"],
  tituloHero: "Tu Agencia de Viajes para",
  tituloDestacadoHero: "Comas, Carabayllo & Puente Piedra",
  descripcionHero:
    "Viaja seguro con una agencia formal acreditada en MINCETUR, a solo unos minutos por la Av. Universitaria o Panamericana Norte.",
  negritaHero:
    "Especialistas en vuelos y carpetas migratorias a España, paquetes al Caribe y viajes de promoción escolar.",
  ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
  waPrincipalNumero: "51906450098",
  waPrincipalMensaje:
    "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en Comas / Lima Norte. Quiero consultar disponibilidad y precios. ¿Me pueden ayudar?",
  checksHero: [
    "Oficina física en Av. Antúnez de Mayolo 814, Los Olivos",
    "Tarifas en US$ con impuestos incluidos",
    "Separa tu viaje con el 50% de inicial",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "Comas · Carabayllo",
    etiquetaDer: "Separa con 50%",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=85",
    alt: "Agencia de Viajes para Comas y Carabayllo — Cityland Travel",
    sobretitulo: "Comas · Retablo · Santa Luzmila · Carabayllo · Puente Piedra",
    titulo: "Tus Vuelos y Vacaciones con Respaldo Legal en Lima Norte",
    labelPrecio: "Paquetes turísticos verificados desde",
    precio: "$399",
    moneda: "USD",
    notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
    waNumero: "51944280151",
    waMensaje:
      "Hola, soy de Comas / Carabayllo y encontré Cityland Travel en Google. Quiero cotizar un viaje con un asesor.",
  },
  seccionCatalogo: {
    sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
    titulo: "Opciones más cotizadas por viajeros de Comas y Carabayllo",
    filtros: [
      { id: "todos", label: "Todos los destinos" },
      { id: "europa", label: "Vuelos a España / Italia" },
      { id: "caribe", label: "Caribe Todo Incluido" },
      { id: "sudamerica", label: "Colombia y Cusco" },
    ],
  },
  items: [
    {
      id: "comas-espana",
      titulo: "Vuelos y Carpeta Migratoria a España e Italia",
      pais: "España",
      filtro: "europa",
      subtitulo: "Madrid, Barcelona, Valencia, Milán y Roma con Seguro Schengen",
      precioPrincipal: "$890",
      precioSecundario: "$445",
      notaPrecio: "Vuelo / Paquete a Europa · Incluye impuestos (Verif. Oct 2026)",
      tag: "Especial Europa",
      tagBg: "bg-red-600",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
      alt: "Vuelos a España para viajeros de Comas",
      resumenCorto: "Asesoría completa para tu ingreso al Espacio Schengen",
      checks: [
        "Boleto aéreo ida y vuelta con maleta de 23 kg en bodega",
        "Seguro Schengen 30.000€ y revisión de Carta de Invitación o reserva de hotel",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51938845086",
      waMensaje:
        "Hola, soy de Comas y encontré Cityland Travel en Google. Quiero información para viajar a España / Europa (Desde $890 USD).",
    },
    {
      id: "comas-caribe",
      titulo: "Punta Cana y Cancún Todo Incluido (5D / 4N)",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "Vuelos + Resort frente al mar + Comidas y bebidas ilimitadas",
      precioPrincipal: "$1,049",
      precioSecundario: "$525",
      notaPrecio: "Paquete Todo Incluido · Incluye impuestos (Verif. Oct 2026)",
      tag: "All Inclusive",
      tagBg: "bg-blue-700",
      img: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?auto=format&fit=crop&w=900&q=85",
      alt: "Paquetes a Punta Cana en Comas",
      resumenCorto: "Vacaciones familiares o en pareja sin gastos extra",
      checks: [
        "Boletos aéreos desde Lima + traslados aeropuerto-hotel",
        "4 noches en Resort Todo Incluido con alimentación 24 horas",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51906642487",
      waMensaje:
        "Hola, soy de Comas y encontré Cityland Travel en Google. Quiero cotizar un paquete Todo Incluido a Punta Cana o Cancún (Desde $1,049 USD).",
    },
    {
      id: "comas-cusco",
      titulo: "Cusco & Machu Picchu Todo Organizado (4D / 3N)",
      pais: "Perú",
      filtro: "sudamerica",
      subtitulo: "Vuelos + Hotel + Tren Turístico + Entradas a Machu Picchu",
      precioPrincipal: "$399",
      precioSecundario: "$200",
      notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
      tag: "Cusco Completo",
      tagBg: "bg-amber-600",
      img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=85",
      alt: "Paquete a Cusco y Machu Picchu en Comas",
      resumenCorto: "Vuelos + Hotel + Valle Sagrado + Machu Picchu",
      checks: [
        "Vuelos Lima – Cusco – Lima + traslados + 3 noches de hotel",
        "City Tour, Valle Sagrado y visita guiada a Machu Picchu en tren",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944031724",
      waMensaje:
        "Hola, soy de Comas y encontré Cityland Travel en Google. Quiero cotizar el paquete a Cusco y Machu Picchu (Desde $399 USD).",
    },
  ],
  pilares: [
    { titulo: "A minutos por Universitaria", sub: "Av. Antúnez de Mayolo 814, Los Olivos" },
    { titulo: "Atención por WhatsApp", sub: "Cotiza sin salir de casa o visítanos" },
    { titulo: "Separa con 50%", sub: "Congela tu paquete y paga en cuotas" },
    { titulo: "RUC 20614914239", sub: "Agencia formal registrada en MINCETUR" },
  ],
  bannerFinal: {
    sobretitulo: "Atención para Comas, Carabayllo y Puente Piedra",
    titulo: "Escríbenos por WhatsApp o visítanos en nuestra oficina",
    descripcion:
      "Te atendemos con total transparencia, contrato formal y precios verificados en dólares.",
    ctaTexto: "Consultar disponibilidad por WhatsApp",
    waNumero: "51983891157",
    waMensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Comas. ¿Me pueden ayudar con una cotización?",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    alt: "Agencia de Viajes Comas",
  },
  waFlotante: {
    numero: "51907451255",
    texto: "WhatsApp Comas",
    mensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Comas. ¿Me pueden ayudar?",
  },
};

export default function AgenciaComasPage() {
  return <AirlineLandingTemplate config={CONFIG_COMAS} />;
}
