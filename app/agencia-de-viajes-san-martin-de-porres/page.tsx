import type { Metadata } from "next";
import AirlineLandingTemplate, {
  type ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Agencia de Viajes para San Martín de Porres (SMP, Av. Perú, Habich, Fiori) | Cityland Travel",
  description:
    "Agencia de viajes cerca de San Martín de Porres y el Aeropuerto Jorge Chávez (RUC 20614914239). Visítanos a minutos de SMP en Av. Antúnez de Mayolo 814, Los Olivos. Vuelos a España, paquetes a Punta Cana, Cancún, Cartagena y Cusco.",
  keywords: [
    "agencia de viajes en san martin de porres",
    "agencia de viajes smp lima",
    "agencia de viajes av peru san martin de porres",
    "vuelos a espana en san martin de porres",
    "paquetes turisticos smp lima norte",
    "cityland travel san martin de porres",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/agencia-de-viajes-san-martin-de-porres",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/agencia-de-viajes-san-martin-de-porres",
    title:
      "Agencia de Viajes para San Martín de Porres (SMP) | Cityland Travel",
    description:
      "Sede física a minutos de San Martín de Porres y Plaza Norte. Vuelos a España, Caribe y Sudamérica separando con el 50% de inicial.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_SMP: ConfiguracionLandingAerolinea = {
  badgeHero:
    "Atención Presencial y por WhatsApp para San Martín de Porres · RUC 20614914239",
  banderasHero: ["Perú", "España", "República Dominicana", "Colombia"],
  tituloHero: "Tu Agencia de Viajes para",
  tituloDestacadoHero: "San Martín de Porres (SMP)",
  descripcionHero:
    "Atendemos a todos los vecinos de San Martín de Porres (Av. Perú, Habich, Ingeniería, Fiori, Tomás Valle, Angélica Gamarra y Universitaria) a solo minutos en nuestra sede de Av. Antúnez de Mayolo 814.",
  negritaHero:
    "Compra tus boletos aéreos y paquetes turísticos con contrato formal y oficina física real.",
  ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
  waPrincipalNumero: "51906450098",
  waPrincipalMensaje:
    "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en San Martín de Porres. Quiero consultar disponibilidad y precios. ¿Me pueden ayudar?",
  checksHero: [
    "Oficina física a minutos por Av. Universitaria / Izaguirre",
    "Precios en US$ con impuestos incluidos",
    "Separa tu paquete con el 50% de inicial",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "San Martín de Porres",
    etiquetaDer: "Separa con 50%",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=85",
    alt: "Agencia de Viajes para San Martín de Porres — Cityland Travel",
    sobretitulo: "SMP · Av. Perú · Habich · Tomás Valle · Universitaria · Plaza Norte",
    titulo: "Vuelos a Europa y Paquetes Todo Incluido cerca de ti",
    labelPrecio: "Paquetes verificados desde",
    precio: "$399",
    moneda: "USD",
    notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
    waNumero: "51944280151",
    waMensaje:
      "Hola, soy de San Martín de Porres y encontré Cityland Travel en Google. Quiero cotizar un viaje con un asesor.",
  },
  seccionCatalogo: {
    sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
    titulo: "Destinos más solicitados por viajeros de San Martín de Porres",
    filtros: [
      { id: "todos", label: "Todos los destinos" },
      { id: "europa", label: "España e Italia" },
      { id: "caribe", label: "Caribe Todo Incluido" },
      { id: "sudamerica", label: "Colombia y Cusco" },
    ],
  },
  items: [
    {
      id: "smp-espana",
      titulo: "Vuelos y Carpeta Migratoria a Madrid, Barcelona y Milán",
      pais: "España",
      filtro: "europa",
      subtitulo: "Boleto aéreo con maleta de 23 kg + Seguro Schengen 30.000€",
      precioPrincipal: "$890",
      precioSecundario: "$445",
      notaPrecio: "Vuelo / Paquete a Europa · Incluye impuestos (Verif. Oct 2026)",
      tag: "Ruta Europa",
      tagBg: "bg-red-600",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
      alt: "Vuelos a España para viajeros de San Martín de Porres",
      resumenCorto: "Todo listo para pasar migraciones en Europa",
      checks: [
        "Boleto confirmado en Iberia, Air Europa, Plus Ultra, KLM o LATAM",
        "Seguro médico Schengen 30.000€ y reserva de hotel o Carta de Invitación",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51938845086",
      waMensaje:
        "Hola, soy de San Martín de Porres y encontré Cityland Travel en Google. Quiero información para viajar a España / Italia (Desde $890 USD).",
    },
    {
      id: "smp-caribe",
      titulo: "Punta Cana y Cancún Todo Incluido (5D / 4N)",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "Vuelos + Resort All Inclusive + Traslados + Seguro",
      precioPrincipal: "$1,049",
      precioSecundario: "$525",
      notaPrecio: "Paquete Todo Incluido · Incluye impuestos (Verif. Oct 2026)",
      tag: "Todo Incluido",
      tagBg: "bg-blue-700",
      img: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a Punta Cana en San Martín de Porres",
      resumenCorto: "Resort frente al mar con comidas y bebidas 24h",
      checks: [
        "Boletos aéreos ida y vuelta desde el Aeropuerto Jorge Chávez",
        "4 noches de alojamiento Todo Incluido y traslados",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51906642487",
      waMensaje:
        "Hola, soy de San Martín de Porres y encontré Cityland Travel en Google. Quiero cotizar un paquete a Punta Cana o Cancún (Desde $1,049 USD).",
    },
    {
      id: "smp-colombia",
      titulo: "Cartagena, Medellín o San Andrés Solo con DNI",
      pais: "Colombia",
      filtro: "sudamerica",
      subtitulo: "Viaja al extranjero presentando únicamente tu DNI vigente",
      precioPrincipal: "$679",
      precioSecundario: "$340",
      notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
      tag: "Solo con DNI",
      tagBg: "bg-emerald-700",
      img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=900&q=85",
      alt: "Paquetes a Colombia en San Martín de Porres",
      resumenCorto: "Vuelos + Hotel + Desayunos + Excursión",
      checks: [
        "Boletos aéreos ida y vuelta + traslados aeropuerto-hotel",
        "Alojamiento con desayunos y excursión a Isla Barú o Guatapé",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944031724",
      waMensaje:
        "Hola, soy de San Martín de Porres y encontré Cityland Travel en Google. Quiero consultar los paquetes a Colombia solo con DNI (Desde $679 USD).",
    },
  ],
  pilares: [
    { titulo: "Cerca de SMP", sub: "Av. Antúnez de Mayolo 814, Los Olivos" },
    { titulo: "Cerca al Aeropuerto", sub: "A pocos minutos del Jorge Chávez" },
    { titulo: "Separa con 50%", sub: "Congela tu paquete y paga en cuotas" },
    { titulo: "RUC 20614914239", sub: "Agencia formal registrada en MINCETUR" },
  ],
  bannerFinal: {
    sobretitulo: "Atención para todo San Martín de Porres",
    titulo: "Cotiza por WhatsApp o visítanos en nuestra oficina",
    descripcion:
      "Atendemos de lunes a sábado de 9:00 a. m. a 7:00 p. m. con respaldo legal y emisión inmediata.",
    ctaTexto: "Consultar disponibilidad por WhatsApp",
    waNumero: "51983891157",
    waMensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en San Martín de Porres. ¿Me pueden ayudar con una cotización?",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    alt: "Agencia de Viajes San Martín de Porres",
  },
  waFlotante: {
    numero: "51907451255",
    texto: "WhatsApp SMP",
    mensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en San Martín de Porres. ¿Me pueden ayudar?",
  },
};

export default function AgenciaSanMartinDePorresPage() {
  return <AirlineLandingTemplate config={CONFIG_SMP} />;
}
