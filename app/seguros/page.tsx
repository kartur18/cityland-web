import { Metadata } from "next";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";

export const metadata: Metadata = {
  title:
    "Seguro de Viaje Internacional y Seguro Schengen 30.000€ Obligatorio en Perú | Cityland Travel",
  description:
    "Emisión inmediata de Seguro de Viaje Internacional en Lima: Seguro Schengen obligatorio de 30.000€ para España y Europa desde $65 USD, Asistencia Médica para Estados Unidos desde $75 USD, Caribe desde $49 USD, Embarazadas y Adultos Mayores. Póliza oficial en PDF en 5 minutos (RUC 20614914239).",
  keywords: [
    "seguro schengen 30000 euros precio peru",
    "seguro de viaje obligatorio para espana desde lima",
    "seguro medico internacional para viajar a europa",
    "seguro de viaje para estados unidos y caribe peru",
    "assist card universal assistance lima los olivos",
    "cityland travel seguros de viaje",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/seguros",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/seguros",
    title:
      "Seguro de Viaje Internacional y Seguro Schengen 30.000€ — Cityland Travel",
    description:
      "Recibe tu póliza oficial en PDF en 5 minutos por WhatsApp. Cobertura de 30.000€ para migraciones en Madrid-Barajas, EE.UU., Caribe y Sudamérica.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Seguro de Viaje Internacional y Seguro Schengen 30.000€ — Cityland Travel",
      },
    ],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const CONFIG_SEGUROS: ConfiguracionLandingAerolinea = {
  badgeHero: "Emisión Oficial en 5 Minutos · Válido para Control Migratorio",
  banderasHero: ["España", "Europa", "Estados Unidos", "Perú"],
  tituloHero: "SEGURO DE VIAJE INTERNACIONAL Y",
  tituloDestacadoHero: "SEGURO SCHENGEN 30.000€",
  descripcionHero:
    "Cumple con el requisito obligatorio de ingreso a España, Europa, Estados Unidos y el Caribe. Emitimos tu póliza oficial verificable al instante y te la enviamos en PDF lista para presentar en aeropuerto.",
  negritaHero: "Cobertura médica 24/7 sin deducible y pérdida de equipaje",
  ctaPrincipalTexto: "Emitir mi Seguro por WhatsApp",
  waPrincipalNumero: "51907451255",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Necesito cotizar y emitir un Seguro de Viaje Internacional / Seguro Schengen 30.000€.",
  checksHero: [
    "Válido para Migraciones Madrid-Barajas",
    "Entrega en PDF en 5 Minutos",
    "Sin Franquicia ni Deducible",
  ],
  vitrina: {
    pais: "España",
    etiquetaIzq: "Requisito Obligatorio Europa",
    etiquetaDer: "30.000€ Oficial",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
    alt: "Seguro Schengen 30.000 Euros obligatorio para viajar a España desde Perú",
    sobretitulo: "Cobertura Médica + Repatriación + Equipaje",
    titulo: "Seguro Schengen 30.000€ para España",
    labelPrecio: "Póliza Oficial",
    precio: "$65",
    moneda: "USD",
    notaInferior: "Emisión inmediata con tu pasaporte",
    waNumero: "51983269950",
    waMensaje:
      "¡Hola Cityland Travel! Deseo emitir mi Seguro Schengen de 30.000€ desde $65 USD para viajar a España.",
  },
  seccionCatalogo: {
    sobretitulo: "Coberturas Internacionales Verificables",
    titulo: "ELIGE EL SEGURO DE VIAJE PARA TU DESTINO",
    filtros: [
      { id: "todos", label: "Todos los Seguros (6)" },
      { id: "europa", label: "España & Espacio Schengen (30.000€)" },
      { id: "america", label: "Estados Unidos, Caribe & Sudamérica" },
      { id: "especiales", label: "Adultos Mayores, Embarazadas & Anual" },
    ],
  },
  items: [
    {
      id: "seguro-schengen-espana",
      titulo: "Seguro Schengen Obligatorio · 30.000€",
      pais: "España",
      filtro: "europa",
      subtitulo: "Válido en los 29 países de Europa",
      precioPrincipal: "$65",
      precioSecundario: "USD",
      notaPrecio: "Certificado oficial para Madrid-Barajas",
      tag: "#1 Requisito Barajas",
      tagBg: "bg-red-600 text-white",
      img: "/images/espana/barajas.jpg",
      alt: "Seguro Schengen 30.000 Euros obligatorio para ingresar a España por Barajas",
      resumenCorto:
        "Cumple al 100% con la normativa de la Unión Europea: mínimo 30.000€ en asistencia médica por accidente o enfermedad, repatriación sanitaria y cero deducible.",
      checks: ["30.000€ Cobertura Oficial", "Cero deducible ni copago", "Entrega inmediata en PDF"],
      waNumber: "51983891157",
    },
    {
      id: "seguro-estados-unidos-miami",
      titulo: "Asistencia Médica USA & Canadá · Alta Cobertura",
      pais: "Estados Unidos",
      filtro: "america",
      subtitulo: "Cobertura de $60,000 a $150,000 USD",
      precioPrincipal: "$75",
      precioSecundario: "USD",
      notaPrecio: "Atención médica en español 24/7",
      tag: "Miami, Orlando & NY",
      tagBg: "bg-blue-600 text-white",
      img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
      alt: "Seguro de viaje médico para Estados Unidos y Canadá desde Perú",
      resumenCorto:
        "La salud en EE.UU. es la más costosa del mundo. Viaja protegido ante urgencias médicas, odontológicas, medicamentos y demora o pérdida de maletas.",
      checks: ["Hasta $150,000 USD", "Medicamentos incluidos", "Compensación de equipaje"],
      waNumber: "51944031724",
    },
    {
      id: "seguro-caribe-sudamerica",
      titulo: "Seguro de Viaje Caribe & Sudamérica",
      pais: "República Dominicana",
      filtro: "america",
      subtitulo: "Punta Cana, Cancún, Colombia y Brasil",
      precioPrincipal: "$49",
      precioSecundario: "USD",
      notaPrecio: "Obligatorio para ingreso a varios destinos",
      tag: "Playas & Familia",
      tagBg: "bg-emerald-600 text-white",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
      alt: "Seguro de viaje para Punta Cana, Cancún, Cartagena y Brasil",
      resumenCorto:
        "Ideal para vacaciones familiares en resorts o escapadas a Colombia y Brasil. Incluye médico a domicilio en tu hotel, hospitalización y asistencia legal.",
      checks: ["Médico en tu hotel", "Cobertura en playas y tours", "Tarifa especial familiar"],
      waNumber: "51907451255",
    },
    {
      id: "seguro-adulto-mayor-preexistencias",
      titulo: "Seguro Senior (+70 años) & Preexistencias",
      pais: "España",
      filtro: "especiales",
      subtitulo: "Especial para Padres y Abuelos Viajeros",
      precioPrincipal: "$89",
      precioSecundario: "USD",
      notaPrecio: "Incluye estabilización de enfermedades crónicas",
      tag: "Adulto Mayor",
      tagBg: "bg-amber-600 text-white",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
      alt: "Seguro de viaje para adultos mayores con preexistencias en Perú",
      resumenCorto:
        "Diseñado para viajeros mayores de 70 y 85 años que visitan familiares en España, EE.UU. o el extranjero, con cobertura para hipertensión o diabetes.",
      checks: ["Cubre preexistencias", "Válido hasta 85+ años", "Aprobado por consulados"],
      waNumber: "51983269950",
    },
    {
      id: "seguro-embarazadas-maternidad",
      titulo: "Seguro de Viaje para Futuras Mamás",
      pais: "Estados Unidos",
      filtro: "especiales",
      subtitulo: "Cobertura obstétrica hasta la semana 32",
      precioPrincipal: "$79",
      precioSecundario: "USD",
      notaPrecio: "Ecografías y controles de urgencia",
      tag: "Maternidad Segura",
      tagBg: "bg-sky-600 text-white",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
      alt: "Seguro de viaje internacional para embarazadas en Perú",
      resumenCorto:
        "Viaja tranquila durante tu embarazo con asistencia médica especializada ante cualquier emergencia obstétrica o control de urgencia en el extranjero.",
      checks: ["Cubre hasta semana 32", "Urgencias obstétricas", "Atención prioritaria 24h"],
      waNumber: "51913637476",
    },
    {
      id: "seguro-multiviajes-anual",
      titulo: "Plan Anual Multiviajes · 365 Días",
      pais: "Europa",
      filtro: "especiales",
      subtitulo: "Para Viajeros Frecuentes y Ejecutivos",
      precioPrincipal: "$189",
      precioSecundario: "USD",
      notaPrecio: "Viajes ilimitados durante todo un año",
      tag: "Ahorro Anual",
      tagBg: "bg-slate-800 text-white",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
      alt: "Seguro de viaje anual multiviajes en Perú - Cityland Travel",
      resumenCorto:
        "Si viajas más de 2 veces al año por negocios o turismo, una sola póliza anual te cubre todos tus viajes internacionales a Europa, EE.UU. y el mundo.",
      checks: ["Válido por 365 días", "Cumple norma Schengen", "Factura electrónica RUC"],
      waNumber: "51903212007",
    },
  ],
  pilares: [
    {
      titulo: "Emisión en 5 Minutos",
      sub: "Solo envíanos foto de tu pasaporte y fechas de viaje por WhatsApp",
    },
    {
      titulo: "Certificado Oficial",
      sub: "Válido para presentar ante la Policía de Fronteras en Madrid-Barajas",
    },
    {
      titulo: "Atención 24/7 en Español",
      sub: "Central de emergencias por WhatsApp y teléfono en todo el mundo",
    },
    {
      titulo: "Indemnización de Maletas",
      sub: "Compensación económica en caso de pérdida de equipaje en aerolínea",
    },
  ],
  bannerFinal: {
    sobretitulo: "Emisión Inmediata por WhatsApp",
    titulo: "¿VIAJAS MAÑANA O ESTA SEMANA Y TE FALTA TU SEGURO?",
    descripcion:
      "Escríbenos cuántos días viajas y a qué país vas. Te cotizamos al instante la tarifa más económica y te enviamos tu póliza oficial en PDF lista para imprimir o llevar en el celular.",
    ctaTexto: "Cotizar mi Seguro en 1 Minuto",
    waNumero: "51907451255",
    waMensaje:
      "¡Hola Cityland Travel! Necesito cotizar un seguro de viaje urgente. Mis fechas son:",
    img: "/images/espana/barajas.jpg",
    alt: "Emisión inmediata de Seguro Schengen y Seguro de Viaje en Lima",
  },
  waFlotante: {
    numero: "51907451255",
    mensaje: "¡Hola Cityland Travel! Deseo cotizar mi Seguro de Viaje Internacional.",
    texto: "Seguro de Viaje",
  },
};

const JSON_LD_SEGUROS = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://citylandtravel.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Seguro de Viaje Internacional y Seguro Schengen 30.000€",
          item: "https://citylandtravel.com/seguros",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Seguros de Viaje Internacional y Seguro Schengen en Perú",
      numberOfItems: CONFIG_SEGUROS.items.length,
      itemListElement: CONFIG_SEGUROS.items.map((s, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Service",
          name: s.titulo,
          description: s.resumenCorto,
          image: s.img.startsWith("http") ? s.img : `https://citylandtravel.com${s.img}`,
          provider: { "@type": "TravelAgency", name: "Cityland Travel" },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: s.precioPrincipal.replace(/[^0-9]/g, ""),
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/seguros",
          },
        },
      })),
    },
  ],
};

export default function SegurosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SEGUROS) }}
      />
      <AirlineLandingTemplate config={CONFIG_SEGUROS} />
    </>
  );
}
