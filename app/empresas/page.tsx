import { Metadata } from "next";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Agencia de Viajes Corporativos para Empresas en Lima · Factura Electrónica RUC | Cityland Travel",
  description:
    "Gestión integral de viajes corporativos y pasajes aéreos para empresas en Lima y todo el Perú. Emisión inmediata de vuelos nacionales e internacionales con Factura Electrónica (RUC 20614914239), hoteles ejecutivos, traslados y viajes de incentivos.",
  keywords: [
    "agencia de viajes corporativos en lima peru",
    "pasajes aereos para empresas con factura ruc",
    "viajes de negocios e incentivos para empresas peru",
    "reservas de hoteles ejecutivos y vuelos corporativos",
    "cityland travel empresas corporativo",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/empresas",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/empresas",
    title:
      "Viajes Corporativos y Atención a Empresas en Perú — Cityland Travel",
    description:
      "Emisión inmediata de boletos aéreos nacionales e internacionales, hoteles ejecutivos y viajes de incentivos con Factura Electrónica RUC 20614914239.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Viajes Corporativos para Empresas — Cityland Travel",
      },
    ],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const CONFIG_EMPRESAS: ConfiguracionLandingAerolinea = {
  badgeHero: "Facturación Electrónica SUNAT · RUC 20614914239 · Atención Ejecutiva",
  banderasHero: ["Perú", "Estados Unidos", "España", "Colombia"],
  tituloHero: "Gestión de Viajes Corporativos y",
  tituloDestacadoHero: "Vuelos para Empresas en Perú",
  descripcionHero:
    "Optimizamos el presupuesto de viajes de tu empresa con emisión inmediata de pasajes aéreos nacionales e internacionales, hoteles ejecutivos, cambios flexibles y facturación electrónica al instante.",
  negritaHero: "Asesor corporativo asignado 24/7 para tu equipo y gerencia",
  ctaPrincipalTexto: "Contactar Ejecutivo Corporativo",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Me comunico en representación de mi empresa para cotizar vuelos / servicios corporativos con Factura RUC.",
  checksHero: [
    "Factura Electrónica Deducción SUNAT",
    "Emisión y Cambios de Vuelos 24/7",
    "Viajes de Incentivos y Convenciones",
  ],
  vitrina: {
    pais: "Perú",
    etiquetaIzq: "Cuentas Corporativas B2B",
    etiquetaDer: "Factura RUC",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
    alt: "Agencia de viajes corporativos para empresas en Lima con Factura RUC",
    sobretitulo: "Vuelos + Hoteles + Traslados + Seguro Corporativo",
    titulo: "Tu Agencia Aliada para Viajes de Negocios",
    labelPrecio: "Vuelos Corporativos",
    precio: "$109",
    moneda: "USD · Con Factura",
    notaInferior: "Cityland Travel E.I.R.L. · RUC 20614914239",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Deseo afiliar a mi empresa para emisión de vuelos y hoteles corporativos con factura.",
  },
  seccionCatalogo: {
    sobretitulo: "Soluciones para Gerencias, RR.HH. y Logística",
    titulo: "Servicios Corporativos para tu Empresa",
    filtros: [
      { id: "todos", label: "Todos los Servicios (6)" },
      { id: "vuelos-hoteles", label: "Vuelos, Hoteles & Logística" },
      { id: "incentivos", label: "Viajes de Incentivos, Ferias & Eventos" },
    ],
  },
  items: [
    {
      id: "emision-vuelos-nacionales-internacionales",
      titulo: "Emisión de Pasajes Aéreos Nacionales e Internacionales",
      pais: "Perú",
      filtro: "vuelos-hoteles",
      subtitulo: "LATAM, Sky, JetSMART, Copa, Iberia, Avianca y American",
      precioPrincipal: "$109",
      precioSecundario: "USD",
      notaPrecio: "Factura electrónica inmediata por cada emisión",
      tag: "Vuelos con Factura",
      tagBg: "bg-red-600 text-white",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
      alt: "Emisión de pasajes aéreos para empresas con factura electrónica en Perú",
      resumenCorto:
        "Cotizamos y emitimos en minutos las rutas más convenientes para tu personal técnico, ventas o directorio en provincias y el extranjero, incluyendo equipaje y selección de asientos.",
      checks: ["Factura Electrónica RUC", "Gestión de check-in y maletas", "Soporte ante reprogramaciones"],
      waNumber: "51944103890",
    },
    {
      id: "hoteles-ejecutivos-traslados",
      titulo: "Hoteles Ejecutivos & Traslados Privados",
      pais: "Perú",
      filtro: "vuelos-hoteles",
      subtitulo: "Lima, Arequipa, Trujillo, Piura, Cusco y el Extranjero",
      precioPrincipal: "$99",
      precioSecundario: "USD",
      notaPrecio: "Desayuno buffet, Wi-Fi de alta velocidad y traslado",
      tag: "Hospedaje Ejecutivo",
      tagBg: "bg-sky-600 text-white",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85",
      alt: "Reserva de hoteles ejecutivos para empresas en Perú y el extranjero",
      resumenCorto:
        "Reservamos hoteles de cadena y ejecutivos cerca de zonas industriales o financieras, con recojo puntual en aeropuerto y facturación consolidada para tu contabilidad.",
      checks: ["Hoteles 3★, 4★ y 5★", "Movilidad privada segura", "Facturación unificada"],
      waNumber: "51944103890",
    },
    {
      id: "viajes-incentivos-premiacion",
      titulo: "Viajes de Incentivos para Fuerza de Ventas y Equipos",
      pais: "República Dominicana",
      filtro: "incentivos",
      subtitulo: "Punta Cana, Cartagena, Cancún, Cusco y Punta Sal",
      precioPrincipal: "$690",
      precioSecundario: "USD",
      notaPrecio: "Tarifas corporativas a partir de 10 pasajeros",
      tag: "Premiación & Metas",
      tagBg: "bg-emerald-600 text-white",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
      alt: "Viajes de incentivos y premiación para empresas en Perú",
      resumenCorto:
        "Premia a tus mejores vendedores o colaboradores con viajes Todo Incluido a Punta Cana, Cartagena o Cusco. Organizamos vuelos, salón de eventos y cenas corporativas.",
      checks: ["Bloqueo aéreo grupal", "Salas de reunión en resort", "100% deducible con factura"],
      waNumber: "51944103890",
    },
    {
      id: "ferias-congresos-internacionales",
      titulo: "Asistencia a Ferias, Congresos y Ruedas de Negocios",
      pais: "Estados Unidos",
      filtro: "incentivos",
      subtitulo: "EE.UU., España, China, Alemania, Colombia y Brasil",
      precioPrincipal: "$1,290",
      precioSecundario: "USD",
      notaPrecio: "Vuelos + Hotel cercano al recinto ferial + Seguro",
      tag: "Ferias & Congresos",
      tagBg: "bg-blue-600 text-white",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=85",
      alt: "Viajes a ferias y congresos internacionales para empresarios peruanos",
      resumenCorto:
        "Coordinamos el viaje de tu delegación empresarial a ferias internacionales en Miami, Madrid, Barcelona, São Paulo o Bogotá con hoteles a pasos del centro de convenciones.",
      checks: ["Vuelos + Hotel Estratégico", "Seguro Médico Corporativo", "Trámite de Visas de Negocios"],
      waNumber: "51944103890",
    },
    {
      id: "seguros-visas-ejecutivos",
      titulo: "Visas de Negocios (B1/B2) & Seguros Multiviajes Anuales",
      pais: "Estados Unidos",
      filtro: "vuelos-hoteles",
      subtitulo: "Para Directores, Gerentes y Personal Técnico",
      precioPrincipal: "$189",
      precioSecundario: "USD",
      notaPrecio: "Póliza anual multiviajes + Gestión consular",
      tag: "Visas & Seguros B2B",
      tagBg: "bg-amber-600 text-white",
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=85",
      alt: "Visas de negocios y seguros multiviajes para ejecutivos en Perú",
      resumenCorto:
        "Gestionamos las visas americanas, canadienses o mexicanas de tus ejecutivos y emitimos pólizas de asistencia médica anual para que viajen cubiertos los 365 días.",
      checks: ["Visa B1/B2 Negocios", "Seguro Anual 365 Días", "Atención preferencial"],
      waNumber: "51944103890",
    },
    {
      id: "convenciones-integracion-peru",
      titulo: "Convenciones Anuales & Full Days Corporativos",
      pais: "Perú",
      filtro: "incentivos",
      subtitulo: "Paracas, Valle Sagrado Cusco, Punta Sal y Cieneguilla",
      precioPrincipal: "$289",
      precioSecundario: "USD",
      notaPrecio: "Transporte privado, hotel, auditorio y alimentación",
      tag: "Eventos & Integración",
      tagBg: "bg-slate-800 text-white",
      img: "/images/destinos/lima-costa-verde.jpg",
      alt: "Convenciones y viajes de integración para empresas en Perú",
      resumenCorto:
        "Diseñamos convenciones de fin de año, aniversarios empresariales y jornadas de integración fuera de Lima con toda la logística resuelta.",
      checks: ["Movilidad + Alojamiento", "Auditorio y Coffee Break", "Coordinador en destino"],
      waNumber: "51944103890",
    },
  ],
  pilares: [
    {
      titulo: "Factura Electrónica RUC",
      sub: "Emitimos comprobantes formales de Cityland Travel E.I.R.L. (RUC 20614914239)",
    },
    {
      titulo: "Respuesta en Minutos",
      sub: "Cotizaciones rápidas por WhatsApp y correo para no perder tarifas aéreas",
    },
    {
      titulo: "Soporte ante Emergencias",
      sub: "Asistencia directa ante cambios de horario, huelgas o vuelos demorados",
    },
    {
      titulo: "Control de Costos",
      sub: "Comparamos todas las aerolíneas para darte siempre la ruta más eficiente",
    },
  ],
  bannerFinal: {
    sobretitulo: "Atención Corporativa Directa",
    titulo: "¿Necesitas cotizar vuelos o un viaje grupal para tu empresa hoy?",
    descripcion:
      "Escríbenos con el RUC de tu empresa y la ruta o fechas que necesitas. Te asignaremos un ejecutivo corporativo para atender tus requerimientos al instante.",
    ctaTexto: "Solicitar Cotización Corporativa",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Deseo solicitar una cotización corporativa con Factura RUC para mi empresa.",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85",
    alt: "Atención corporativa para empresas en Lima - Cityland Travel",
  },
  waFlotante: {
    numero: "51944103890",
    mensaje: "¡Hola Cityland Travel! Deseo atención corporativa para mi empresa.",
    texto: "Canal Empresas",
  },
};

const JSON_LD_EMPRESAS = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://citylandtravel.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Agencia de Viajes Corporativos para Empresas en Perú",
          item: "https://citylandtravel.com/empresas",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Gestión de Viajes Corporativos y Emisión de Pasajes para Empresas (Factura RUC)",
      provider: {
        "@type": "TravelAgency",
        name: "Cityland Travel E.I.R.L.",
        taxID: "20614914239",
      },
      areaServed: "PE",
      description:
        "Emisión de boletos aéreos nacionales e internacionales, reservas de hoteles ejecutivos, seguros corporativos y viajes de incentivos con Factura Electrónica.",
    },
  ],
};

export default function EmpresasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_EMPRESAS) }}
      />
      <AirlineLandingTemplate config={CONFIG_EMPRESAS} />
    </>
  );
}
