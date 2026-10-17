import type { Metadata } from "next";
import AirlineLandingTemplate, {
  type ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Agencia de Viajes para San Miguel, Pueblo Libre, Magdalena y Callao | Cityland Travel",
  description:
    "Cotiza vuelos a España, paquetes a Punta Cana, Cancún, Cartagena, Cusco y visas desde San Miguel, Pueblo Libre, Magdalena y Callao con Cityland Travel (RUC 20614914239). Atención por WhatsApp, videollamada o en nuestra oficina de Lima.",
  keywords: [
    "agencia de viajes en san miguel",
    "agencia de viajes pueblo libre",
    "agencia de viajes magdalena del mar",
    "agencia de viajes callao aeropuerto",
    "vuelos y paquetes turisticos san miguel lima",
    "cityland travel san miguel",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/agencia-de-viajes-san-miguel",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/agencia-de-viajes-san-miguel",
    title:
      "Agencia de Viajes para San Miguel, Pueblo Libre y Magdalena — Cityland Travel",
    description:
      "Vuelos internacionales, paquetes Todo Incluido y asesoría de visas con precios en USD e impuestos incluidos. Separa con el 50% de inicial.",
    siteName: "Cityland Travel",
    locale: "es_PE",
  },
};

const CONFIG_SAN_MIGUEL: ConfiguracionLandingAerolinea = {
  badgeHero:
    "Atención para San Miguel, Pueblo Libre, Magdalena y Callao · RUC 20614914239",
  banderasHero: ["Perú", "España", "República Dominicana", "México"],
  tituloHero: "Tu Agencia de Viajes cerca de",
  tituloDestacadoHero: "San Miguel & Pueblo Libre",
  descripcionHero:
    "Atendemos a familias, parejas y viajeros de San Miguel, Pueblo Libre, Magdalena, Jesús María y Bellavista con conexión rápida al Aeropuerto Jorge Chávez.",
  negritaHero:
    "Cotiza por WhatsApp o videollamada y separa tu paquete turístico con el 50% de inicial.",
  ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "Hola, encontré Cityland Travel en Google buscando una agencia de viajes en San Miguel. Quiero consultar disponibilidad y precios. ¿Me pueden ayudar?",
  checksHero: [
    "Agencia registrada en MINCETUR (RUC 20614914239)",
    "Tarifas en US$ con impuestos incluidos",
    "Atención por WhatsApp, videollamada o presencial",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "Lima Moderna & Callao",
    etiquetaDer: "Separa con 50%",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=85",
    alt: "Agencia de Viajes para San Miguel y Pueblo Libre — Cityland Travel",
    sobretitulo: "San Miguel · Pueblo Libre · Magdalena · Jesús María · Callao",
    titulo: "Vuelos y Paquetes Internacionales con Respaldo Formal",
    labelPrecio: "Paquetes turísticos verificados desde",
    precio: "$399",
    moneda: "USD",
    notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
    waNumero: "51944103890",
    waMensaje:
      "Hola, soy de San Miguel / Pueblo Libre y encontré Cityland Travel en Google. Quiero cotizar un viaje con un asesor.",
  },
  seccionCatalogo: {
    sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
    titulo: "Destinos favoritos de nuestros viajeros en San Miguel",
    filtros: [
      { id: "todos", label: "Todos los destinos" },
      { id: "caribe", label: "Caribe Todo Incluido" },
      { id: "europa", label: "España y Europa" },
      { id: "sudamerica", label: "Sudamérica y Perú" },
    ],
  },
  items: [
    {
      id: "sanmiguel-caribe",
      titulo: "Punta Cana y Cancún All Inclusive (5D / 4N)",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "Vuelos + Resort 5★ Frente al Mar + Alimentación 24h",
      precioPrincipal: "$1,049",
      precioSecundario: "$525",
      notaPrecio: "Paquete All Inclusive · Incluye impuestos (Verif. Oct 2026)",
      tag: "Todo Incluido",
      tagBg: "bg-amber-600",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a Punta Cana desde San Miguel Lima",
      resumenCorto: "Resort Todo Incluido + traslados + seguro de viaje",
      checks: [
        "Boleto aéreo Lima – Punta Cana o Cancún ida y vuelta",
        "4 noches en Resort Todo Incluido con comidas y bebidas 24h",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de San Miguel y encontré Cityland Travel en Google. Quiero cotizar un paquete Todo Incluido a Punta Cana o Cancún (Desde $1,049 USD).",
    },
    {
      id: "sanmiguel-espana",
      titulo: "Vuelos y Paquetes a Madrid y Barcelona",
      pais: "España",
      filtro: "europa",
      subtitulo: "Iberia, Air Europa, Plus Ultra y LATAM con Seguro Schengen",
      precioPrincipal: "$890",
      precioSecundario: "$445",
      notaPrecio: "Vuelo / Paquete a España · Incluye impuestos (Verif. Oct 2026)",
      tag: "Ruta Europa",
      tagBg: "bg-red-600",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
      alt: "Vuelos a España desde San Miguel Lima",
      resumenCorto: "Vuelo directo + equipaje 23 kg + carpeta migratoria",
      checks: [
        "Vuelos directos Lima – Madrid con equipaje completo",
        "Seguro médico Schengen cobertura 30.000€ sin deducible",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de San Miguel y encontré Cityland Travel en Google. Quiero información para viajar a España (Desde $890 USD).",
    },
    {
      id: "sanmiguel-cartagena",
      titulo: "Cartagena, Medellín o Río de Janeiro Solo con DNI",
      pais: "Colombia",
      filtro: "sudamerica",
      subtitulo: "Escapadas internacionales sin visa ni pasaporte",
      precioPrincipal: "$679",
      precioSecundario: "$340",
      notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
      tag: "Solo con DNI",
      tagBg: "bg-emerald-700",
      img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=900&q=85",
      alt: "Viajes a Cartagena desde San Miguel",
      resumenCorto: "Vuelos directos + Hotel + Desayunos + Excursión",
      checks: [
        "Boleto aéreo directo desde Lima + traslados aeropuerto-hotel",
        "Alojamiento con desayunos buffet y tour principal incluido",
        "Tarifa sujeta a disponibilidad y condiciones aplicables",
      ],
      waNumber: "51944103890",
      waMensaje:
        "Hola, soy de San Miguel y encontré Cityland Travel en Google. Quiero consultar los paquetes a Cartagena o Medellín (Desde $679 USD).",
    },
  ],
  pilares: [
    { titulo: "Atención Digital & Física", sub: "Cotiza por WhatsApp o visítanos en Lima" },
    { titulo: "Cerca al Aeropuerto", sub: "Conexión directa por Faucett y Costa Verde" },
    { titulo: "Separa con 50%", sub: "Congela tu tarifa en dólares y paga en cuotas" },
    { titulo: "RUC 20614914239", sub: "Agencia acreditada en MINCETUR" },
  ],
  bannerFinal: {
    sobretitulo: "Atención para San Miguel, Pueblo Libre y Magdalena",
    titulo: "Planifica tu próximo viaje con un asesor experto",
    descripcion:
      "Recibe tu cotización formal en dólares con impuestos incluidos directamente en tu WhatsApp.",
    ctaTexto: "Consultar disponibilidad por WhatsApp",
    waNumero: "51944103890",
    waMensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en San Miguel. ¿Me pueden ayudar con una cotización?",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    alt: "Agencia de Viajes San Miguel",
  },
  waFlotante: {
    numero: "51944103890",
    texto: "WhatsApp San Miguel",
    mensaje:
      "Hola, encontré Cityland Travel en Google buscando agencia de viajes en San Miguel. ¿Me pueden ayudar?",
  },
};

export default function AgenciaSanMiguelPage() {
  return <AirlineLandingTemplate config={CONFIG_SAN_MIGUEL} />;
}
