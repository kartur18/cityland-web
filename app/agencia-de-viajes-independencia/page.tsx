import type { Metadata } from "next";
import AirlineLandingTemplate, {
  type ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Agencia de Viajes en Independencia (Cerca a MegaPlaza y Plaza Norte) | Cityland Travel",
  description:
    "¿Buscas una agencia de viajes cerca de MegaPlaza o Plaza Norte en Independencia? Visita Cityland Travel (RUC 20614914239) a solo 8 minutos en Av. Antúnez de Mayolo 814. Vuelos a España, paquetes a Punta Cana, Cancún, Cartagena y Cusco.",
  keywords: [
    "agencia de viajes en independencia",
    "agencia de viajes megaplaza",
    "agencia de viajes plaza norte",
    "vuelos a espana megaplaza independencia",
    "paquetes turisticos independencia lima",
    "cityland travel independencia",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/agencia-de-viajes-independencia",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/agencia-de-viajes-independencia",
    title:
      "Agencia de Viajes cerca de MegaPlaza y Plaza Norte (Independencia) | Cityland Travel",
    description:
      "Atención presencial a minutos de MegaPlaza y Plaza Norte. Separa tus vuelos y paquetes con el 50% de inicial.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_INDEPENDENCIA: ConfiguracionLandingAerolinea = {
  badgeHero:
    "A solo 8 minutos de MegaPlaza y Plaza Norte · RUC 20614914239 · MINCETUR",
  banderasHero: ["Perú", "España", "República Dominicana", "Colombia"],
  tituloHero: "Agencia de Viajes para",
  tituloDestacadoHero: "Independencia (MegaPlaza / Plaza Norte)",
  descripcionHero:
    "Atendemos a todos los vecinos y comercios de Independencia, Tahuantinsuyo, Ermitaño y el eje comercial de MegaPlaza y Plaza Norte.",
  negritaHero:
    "Visítanos en nuestra oficina física de Av. Antúnez de Mayolo 814 o cotiza al instante por WhatsApp.",
  ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en Independencia / MegaPlaza. Quiero consultar disponibilidad y precios. ¿Me pueden ayudar?",
  checksHero: [
    "A 8 minutos de MegaPlaza y Plaza Norte",
    "Precios claros en US$ con impuestos incluidos",
    "Separa tu paquete con el 50% de inicial",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "Cerca a MegaPlaza",
    etiquetaDer: "Oficina Física",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=85",
    alt: "Agencia de Viajes en Independencia cerca de MegaPlaza — Cityland Travel",
    sobretitulo: "Independencia · MegaPlaza · Plaza Norte · Los Olivos",
    titulo: "Vuelos a Europa y Paquetes al Caribe con Contrato Formal",
    labelPrecio: "Paquetes verificados desde",
    precio: "$399",
    moneda: "USD",
    notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
    waNumero: "51944103890",
    waMensaje:
      "Hola, soy de Independencia y encontré Cityland Travel en Google. Quiero cotizar un viaje con un asesor.",
  },
  seccionCatalogo: {
    sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
    titulo: "Viajes más solicitados por nuestros clientes de Independencia",
    filtros: [
      { id: "todos", label: "Todos los destinos" },
      { id: "europa", label: "España y Europa" },
      { id: "caribe", label: "Caribe Todo Incluido" },
      { id: "sudamerica", label: "Colombia y Cusco" },
    ],
  },
  items: [
    {
      id: "indep-espana",
      titulo: "Vuelos y Carpeta Migratoria a Madrid y Barcelona",
      pais: "España",
      filtro: "europa",
      subtitulo: "Boleto confirmado + Seguro Schengen 30.000€ + Reserva Hotel",
      precioPrincipal: "$890",
      precioSecundario: "$445",
      notaPrecio: "Vuelo / Paquete a España · Incluye impuestos (Verif. Oct 2026)",
      tag: "Más Pedido",
      tagBg: "bg-red-600",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
      alt: "Vuelos a España en Independencia Lima",
      resumenCorto: "Todo listo para pasar migraciones en Barajas",
      checks: [
        "Vuelos en Iberia, Air Europa, Plus Ultra o LATAM con maleta 23 kg",
        "Seguro médico internacional Schengen de 30.000€ incluido",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de Independencia y encontré Cityland Travel en Google. Quiero información para viajar a España (Desde $890 USD).",
    },
    {
      id: "indep-caribe",
      titulo: "Punta Cana y Cancún Todo Incluido (5D / 4N)",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "Vuelos + Resort All Inclusive + Traslados + Seguro",
      precioPrincipal: "$1,049",
      precioSecundario: "$525",
      notaPrecio: "Paquete Todo Incluido · Incluye impuestos (Verif. Oct 2026)",
      tag: "All Inclusive",
      tagBg: "bg-blue-700",
      img: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?auto=format&fit=crop&w=900&q=85",
      alt: "Paquetes a Punta Cana en Independencia",
      resumenCorto: "Comidas y bebidas ilimitadas las 24 horas",
      checks: [
        "Boleto aéreo ida y vuelta desde Lima con impuestos",
        "4 noches de alojamiento frente al mar en plan Todo Incluido",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de Independencia y encontré Cityland Travel en Google. Quiero cotizar un paquete a Punta Cana o Cancún (Desde $1,049 USD).",
    },
    {
      id: "indep-colombia",
      titulo: "Cartagena, Medellín o San Andrés Solo con DNI",
      pais: "Colombia",
      filtro: "sudamerica",
      subtitulo: "Escapadas de 4 y 5 días sin pasaporte ni visa",
      precioPrincipal: "$679",
      precioSecundario: "$340",
      notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
      tag: "Solo con DNI",
      tagBg: "bg-emerald-700",
      img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a Colombia desde Independencia",
      resumenCorto: "Vuelo + Hotel + Desayunos + Excursión",
      checks: [
        "Boletos aéreos ida y vuelta + traslados en destino",
        "Alojamiento en zona turística con desayunos y tour principal",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de Independencia y encontré Cityland Travel en Google. Quiero consultar los paquetes a Colombia solo con DNI (Desde $679 USD).",
    },
  ],
  pilares: [
    { titulo: "A 8 min de MegaPlaza", sub: "Av. Antúnez de Mayolo 814, Los Olivos" },
    { titulo: "Contrato Formal", sub: "Emisión inmediata de PNR y vouchers" },
    { titulo: "Separa con 50%", sub: "Facilidades de pago antes de tu viaje" },
    { titulo: "RUC 20614914239", sub: "Registrados en MINCETUR Perú" },
  ],
  bannerFinal: {
    sobretitulo: "Cerca de MegaPlaza y Plaza Norte",
    titulo: "Agenda tu visita en oficina o cotiza por WhatsApp",
    descripcion:
      "Atendemos de lunes a sábado de 9:00 a. m. a 7:00 p. m. con asesores especializados en Europa, Caribe y Sudamérica.",
    ctaTexto: "Consultar disponibilidad por WhatsApp",
    waNumero: "51944103890",
    waMensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Independencia. ¿Me pueden ayudar con una cotización?",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    alt: "Agencia de Viajes Independencia",
  },
  waFlotante: {
    numero: "51944103890",
    texto: "WhatsApp Independencia",
    mensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en Independencia. ¿Me pueden ayudar?",
  },
};

export default function AgenciaIndependenciaPage() {
  return <AirlineLandingTemplate config={CONFIG_INDEPENDENCIA} />;
}
