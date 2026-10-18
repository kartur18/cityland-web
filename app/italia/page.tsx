import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import ModuloSeguridadYCalculadoraEuropa from "@/components/ModuloSeguridadYCalculadoraEuropa";
import { SeoSiloFooter } from "@/components/SeoSiloFooter";
import {
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
  obtenerEnlacesCruzadosSEO,
} from "@/lib/seo-arquitectura";
import {
  EMPRESA_DIRECCION,
  EMPRESA_HORARIO,
  EMPRESA_RUC,
} from "@/components/constantes";

const rawTitle = "Paquetes y Vuelos a Italia Desde $1,150 | Cityland Travel";
const rawDesc =
  "Vuelos y paquetes a Milán, Roma, Turín, Florencia y Bolonia desde Lima (Desde $1,150): Seguro Schengen 30.000€, Lettera di Invito, Ospitalità 48h y Decreto Flussi.";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO(rawTitle),
  description: optimizarMetaDescriptionSEO(rawDesc),
  keywords: [
    "vuelos a italia desde lima peru",
    "paquetes a italia desde lima precio dolares",
    "vuelos lima milan malpensa linate",
    "vuelos lima roma fiumicino",
    "vuelos lima turin florencia bolonia",
    "requisitos para viajar a italia desde peru 2026",
    "lettera di invito italia peru",
    "dichiarazione di ospitalita 48 horas italia",
    "vuelos decreto flussi nulla osta italia peru",
    "cityland travel italia",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/italia",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/italia",
    title: optimizarMetaTitleSEO(rawTitle),
    description: optimizarMetaDescriptionSEO(rawDesc),
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Paquetes y Vuelos a Italia (Milán, Roma, Turín, Florencia) — Cityland Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: optimizarMetaTitleSEO(rawTitle),
    description: optimizarMetaDescriptionSEO(rawDesc),
    images: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

function waItalia(mensaje: string, seccion: string): string {
  const full = `${mensaje}\n\n📍 Ref Web: citylandtravel.com/italia [${seccion}]`;
  return `https://wa.me/51944103890?text=${encodeURIComponent(full)}`;
}

const MODALIDADES_ITALIA = [
  {
    id: "carpeta-visita-italia",
    badge: "Opción Más Solicitada · Carpeta o Visita Familiar",
    badgeBg: "bg-blue-700 text-white",
    borde: "border-blue-600/30 bg-blue-50/30",
    titulo: "Vuelo + Carpeta Migratoria Italia o Visita con Lettera di Invito",
    subtitulo: "Milán (MXP/LIN), Roma (FCO), Turín (TRN), Florencia (FLR), Bolonia (BLQ) y Génova (GOA)",
    precioUSD: 1150,
    inicial50: 575,
    etiquetaPrecio: "Desde $1,150 USD · Impuestos Incluidos",
    descripcion:
      "Ideal para peruanos que viajan por primera vez a Italia o visitan a un familiar residente con Lettera di Invito / Dichiarazione di Alloggio.",
    incluye: [
      "Boleto aéreo ida y vuelta confirmado desde Lima con código PNR y E-Ticket IATA de 13 dígitos.",
      "Seguro médico internacional Schengen de 30.000€ sin deducible ni copago.",
      "Sustento de alojamiento verificable o revisión de tu Lettera di Invito + documento del anfitrión en Italia.",
      "Guía oficial sobre la Dichiarazione di Ospitalità ante la Questura/Comisaría dentro de las 48 horas de llegada.",
      "Entrega de carpeta impresa ordenada para el control fronterizo (Madrid-Barajas, Ámsterdam-Schiphol, París-CDG o Roma-Fiumicino).",
    ],
    waMsg:
      "¡Hola Cityland Travel! Quiero cotizar la Modalidad Vuelo + Carpeta Italia / Visita Familiar con Lettera di Invito (Desde $1,150 USD, separando con el 50%).",
  },
  {
    id: "paquete-hotel-italia",
    badge: "Turismo y Vacaciones con Hotel",
    badgeBg: "bg-red-600 text-white",
    borde: "border-red-600/30 bg-red-50/25",
    titulo: "Paquete Turístico Italia con Hotel Confirmado (8D/7N o a Medida)",
    subtitulo: "Roma, Milán, Florencia y Venecia con estadía hotelera pagada",
    precioUSD: 1390,
    inicial50: 695,
    etiquetaPrecio: "Desde $1,390 USD · Vuelo + Hotel + Seguro",
    descripcion:
      "Para viajeros de vacaciones, parejas y familias que desean llegar a Italia con su hotel céntrico pagado, desayunos y traslados organizados.",
    incluye: [
      "Boleto aéreo ida y vuelta Lima ↔ Roma o Milán con equipaje de cabina 10 kg + bodega 23 kg.",
      "Estadía confirmada y pagada en hoteles 3★/4★ seleccionados con desayuno incluido.",
      "Seguro de asistencia Schengen por 30.000€ válido en toda la Unión Europea.",
      "Opciones de circuito conectado en tren de alta velocidad (Frecciarossa / Italo) entre Roma, Florencia, Venecia y Milán.",
      "Facilidad de pago: congela tu tarifa hoy con el 50% ($695 USD) y completa en cuotas antes de viajar.",
    ],
    waMsg:
      "¡Hola Cityland Travel! Quiero cotizar el Paquete Turístico a Italia con Hotel Confirmado (Desde $1,390 USD, separando con el 50%: $695 USD).",
  },
  {
    id: "visado-d-residentes-italia",
    badge: "Permesso di Soggiorno · Decreto Flussi · Ricongiungimento",
    badgeBg: "bg-emerald-700 text-white",
    borde: "border-emerald-600/30 bg-emerald-50/30",
    titulo: "Titulares de Visado Tipo D (Nulla Osta / Trabajo / Familia) y Residentes",
    subtitulo: "Boletos Solo Ida (One-Way) desde $740 USD o Ida y Vuelta con 2 Maletas de 23 kg",
    precioUSD: 740,
    inicial50: 370,
    etiquetaPrecio: "Solo Ida desde $740 USD · I/V 2 Maletas desde $1,240 USD",
    descripcion:
      "Tarifas especiales para quienes ya cuentan con Visado Nacional Tipo D estampado por la Embajada de Italia en Lima o Permesso / Carta di Soggiorno vigente.",
    incluye: [
      "Emisión legal de pasaje SOLO IDA (One-Way desde $740 USD) exclusivo para titulares de Visado D, Permesso di Soggiorno o pasaporte UE.",
      "Tarifas con 2 maletas de 23 kg (46 kg en bodega + 10 kg en mano) desde $1,240 USD para mudanza, trabajo o reagrupación familiar.",
      "Pre-reserva aérea verificable para expediente consular (Nulla Osta al lavoro, Ricongiungimento Familiare o estudios en Italia).",
      "Asistencia gratuita de silla de ruedas (código SSR WCHR) en Lima y en el aeropuerto de conexión para padres y adultos mayores.",
      "Compra a distancia desde Milán, Turín o Roma para tus familiares que salen desde Lima o provincias del Perú en un solo PNR.",
    ],
    waMsg:
      "¡Hola Cityland Travel! Cuento con Visado Tipo D / Permesso di Soggiorno (o compro desde Italia para un familiar) y deseo cotizar vuelo a Italia (Solo Ida desde $740 USD o con 2 maletas de 23 kg desde $1,240 USD).",
  },
];

const CIUDADES_ITALIA = [
  {
    ciudad: "Milán",
    region: "Lombardía (Capital de la comunidad peruana en Italia)",
    iata: "MXP / LIN",
    precioIdaVuelta: "$1,150",
    precioRetornoLima: "$1,120",
    aerolineas: "KLM (vía AMS), Air France (vía CDG), Iberia y Air Europa (vía MAD), LATAM",
    img: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=900&q=80",
    ventaja:
      "Llegada tanto a Milán-Malpensa (MXP) como al aeropuerto urbano de Milán-Linate (LIN, a 15 min del centro) con equipaje despachado desde Lima.",
    hrefIda: "/vuelos/lima-milan",
    hrefRetorno: "/vuelos/milan-lima",
    hrefPrimerViaje: "/viajes/primer-viaje-a-milan",
  },
  {
    ciudad: "Roma",
    region: "Lazio (Capital de Italia y El Vaticano)",
    iata: "FCO",
    precioIdaVuelta: "$1,150",
    precioRetornoLima: "$1,120",
    aerolineas: "Iberia, Air Europa, KLM, Air France y LATAM + ITA Airways",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80",
    ventaja:
      "Conexiones diarias de 1 sola escala hacia el Aeropuerto Internacional Leonardo da Vinci – Fiumicino (FCO) con tren Leonardo Express directo a Roma Termini.",
    hrefIda: "/vuelos/lima-roma",
    hrefRetorno: "/vuelos/roma-lima",
    hrefPrimerViaje: "/viajes/primer-viaje-a-roma",
  },
  {
    ciudad: "Turín",
    region: "Piamonte (Segunda mayor comunidad peruana en el norte de Italia)",
    iata: "TRN",
    precioIdaVuelta: "$1,180",
    precioRetornoLima: "$1,140",
    aerolineas: "KLM (vía Ámsterdam), Air France (vía París) e Iberia (vía Madrid)",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80",
    ventaja:
      "Aterriza directamente en el Aeropuerto de Turín-Caselle (TRN) en un solo boleto electrónico PNR sin tener que cargar maletas en tren desde Milán.",
    hrefIda: "/vuelos/lima-turin",
    hrefRetorno: "/vuelos/turin-lima",
    hrefPrimerViaje: "/viajes/primer-viaje-a-turin",
  },
  {
    ciudad: "Florencia",
    region: "Toscana (Florencia, Prato, Pisa y Livorno)",
    iata: "FLR / PSA",
    precioIdaVuelta: "$1,180",
    precioRetornoLima: "$1,140",
    aerolineas: "KLM, Air France e Iberia (conexión directa a Florencia-Peretola FLR)",
    img: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?auto=format&fit=crop&w=900&q=80",
    ventaja:
      "Ideal para la gran colonia peruana residente en Florencia y Prato. Tu equipaje de 23 kg o 46 kg llega directo al aeropuerto Amerigo Vespucci (FLR).",
    hrefIda: "/vuelos/lima-florencia",
    hrefRetorno: "/vuelos/florencia-lima",
    hrefPrimerViaje: "/viajes/requisitos-viajar-a-italia-desde-peru",
  },
  {
    ciudad: "Bolonia",
    region: "Emilia-Romaña (Bolonia, Módena, Parma y Rímini)",
    iata: "BLQ",
    precioIdaVuelta: "$1,175",
    precioRetornoLima: "$1,140",
    aerolineas: "Iberia, KLM y Air France hacia Bolonia Guglielmo Marconi (BLQ)",
    img: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=900&q=80",
    ventaja:
      "Nodo estratégico del centro-norte italiano con conexión de 7 minutos en Marconi Express hacia la estación central de Bologna Centrale.",
    hrefIda: "/vuelos/lima-bolonia",
    hrefRetorno: "/vuelos/bolonia-lima",
    hrefPrimerViaje: "/viajes/requisitos-viajar-a-italia-desde-peru",
  },
  {
    ciudad: "Génova",
    region: "Liguria (Génova, La Spezia y Savona)",
    iata: "GOA",
    precioIdaVuelta: "$1,180",
    precioRetornoLima: "$1,140",
    aerolineas: "KLM (vía AMS), Air France (vía CDG) e Iberia / ITA Airways",
    img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    ventaja:
      "Conexión protegida hasta el Aeropuerto de Génova-Cristoforo Colombo (GOA), histórico punto de encuentro de miles de familias peruanas en Liguria.",
    hrefIda: "/vuelos/lima-genova",
    hrefRetorno: "/vuelos/genova-lima",
    hrefPrimerViaje: "/viajes/requisitos-viajar-a-italia-desde-peru",
  },
];

const FAQS_ITALIA = [
  {
    q: "¿Cuáles son los requisitos para viajar a Italia desde Perú en 2026 sin visa?",
    a: "Para estancias cortas de hasta 90 días por turismo o visita familiar, los ciudadanos peruanos ingresan sin visa Schengen presentando: 1) Pasaporte peruano biométrico con vigencia mínima de 3 meses posteriores a la fecha de salida de Europa, 2) Boleto aéreo de ida y vuelta confirmado con código PNR, 3) Reserva de hotel o Lettera di Invito / Dichiarazione di Alloggio de un familiar residente en Italia, 4) Seguro médico Schengen con cobertura mínima de 30.000€, y 5) Sustento económico (bolsa de viaje).",
  },
  {
    q: "¿Qué es la Lettera di Invito y la regla de las 48 horas (Dichiarazione di Ospitalità) en Italia?",
    a: "A diferencia de España (donde la Carta de Invitación cuesta tasas policiales y demora semanas), en Italia el anfitrión llena y firma el formulario oficial de Dichiarazione di Alloggio / Lettera di Invito adjuntando copia de su Permesso di Soggiorno o Carta d'Identità y contrato de vivienda. Sin embargo, el Artículo 7 del Decreto Legislativo 286/1998 exige que, dentro de las 48 horas posteriores a tu llegada a Italia, el anfitrión declare tu presencia (Dichiarazione di Ospitalità) ante la Questura o Commissariato de Policía local.",
  },
  {
    q: "¿Cuánto dinero (bolsa de viaje) piden para entrar a Italia si hago escala en Madrid vs Ámsterdam/París?",
    a: "El control migratorio de entrada al Espacio Schengen se realiza en el primer aeropuerto europeo que pisas. Si tu vuelo Lima → Milán/Roma hace escala en Madrid-Barajas (con Iberia, Air Europa o LATAM), pasas migraciones en España y te aplica la regla del BOE español (122,10 €/día, mínimo obligatorio de 1.098,90 € por persona). Si vuelas vía Ámsterdam (KLM) o París (Air France), aplica la tabla de la Directiva del Ministerio del Interior de Italia (cuota fija de 206,58 € + 27,89 €/día para 6 a 10 días, o 51,64 € + 36,67 €/día para 11 a 20 días), aunque siempre recomendamos viajar con al menos 800 € a 1.100 € de respaldo.",
  },
  {
    q: "¿Puedo viajar con pasaje Solo Ida a Milán o Roma si tengo Nulla Osta (Decreto Flussi) o Ricongiungimento Familiare?",
    a: "Sí. Si la Embajada de Italia en Lima ya estampó en tu pasaporte tu Visado Nacional Tipo D (por trabajo subordinado del Decreto Flussi / Nulla Osta, Ricongiungimento Familiare o estudios) o si posees Permesso di Soggiorno vigente, estás exento de comprar boleto de retorno y podemos emitir tu pasaje Solo Ida (desde $740 USD) o con 2 maletas de 23 kg.",
  },
];

const JSON_LD_ITALIA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio — Cityland Travel",
          item: "https://citylandtravel.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guía Oficial Europa",
          item: "https://citylandtravel.com/guia-europa",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Paquetes y Vuelos a Italia desde $1,150 USD",
          item: "https://citylandtravel.com/italia",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Paquetes y Vuelos a Italia (Milán, Roma, Turín, Florencia y Bolonia) desde Lima",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
      description:
        "Vuelos y paquetes a Italia desde Lima con código PNR verificable, Seguro Schengen 30.000€, reserva de hotel o asesoría de Lettera di Invito / Dichiarazione di Ospitalità 48h.",
      provider: {
        "@type": "TravelAgency",
        name: "Cityland Travel",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "1150",
        highPrice: "1390",
        offerCount: "3",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS_ITALIA.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
};

export default function ItaliaLandingPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_ITALIA) }}
      />
      <Navbar />

      {/* 1. HERO BANDERA ITALIA (MILÁN, ROMA, TURÍN, FLORENCIA, BOLONIA, GÉNOVA) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#10243e] to-[#0f2e28] text-white pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-semibold">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="text-slate-500">/</li>
              <li>
                <Link href="/guia-europa" className="hover:text-white transition-colors">
                  Centro Europa
                </Link>
              </li>
              <li className="text-slate-500">/</li>
              <li className="text-emerald-300 font-bold">
                Especial Italia: Milán, Roma, Turín, Florencia y Bolonia
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Columna Izquierda (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-300 mb-5">
                <FlagIcon pais="Perú" className="w-4 h-3" />
                <FlagIcon pais="Italia" className="w-4 h-3" />
                <span>Especialistas en la Comunidad Peruana en Italia (+130,000 Residentes)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] mb-4">
                Vuelos y Paquetes a{" "}
                <span className="text-emerald-400">
                  Italia (Milán, Roma, Turín y Florencia)
                </span>{" "}
                desde Lima
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-2xl">
                Viaja a Italia con respaldo formal: emitimos tu boleto aéreo con{" "}
                <strong className="text-white">código PNR y E-Ticket IATA de 13 dígitos</strong>,{" "}
                <strong className="text-white">Seguro Schengen de 30.000€</strong>, reserva de hotel
                o preparación de tu{" "}
                <strong className="text-white">
                  Lettera di Invito y Dichiarazione di Ospitalità (48h)
                </strong>
                , además de tarifas con <strong className="text-white">2 maletas de 23 kg</strong>{" "}
                para Decreto Flussi y Reagrupación Familiar.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                <a
                  href={waItalia(
                    "¡Hola Cityland Travel! Estoy en la página de Italia (/italia) y deseo cotizar mi viaje a Milán / Roma / Turín con un asesor especialista.",
                    "Hero Principal"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-4 rounded-2xl text-sm font-extrabold shadow-lg cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Cotizar Viaje a Italia por WhatsApp</span>
                </a>
                <a
                  href="#modalidades-italia"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-2xl text-sm font-extrabold transition-all cursor-pointer"
                >
                  <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2" />
                  <span>Ver 3 Modalidades y Tarifas ↓</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 block">
                    Carpeta / Visita
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">Desde $1,150</span>
                  <span className="text-[11px] text-slate-300 block">Separa con 50% ($575)</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 block">
                    Paquete con Hotel
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">Desde $1,390</span>
                  <span className="text-[11px] text-slate-300 block">Separa con 50% ($695)</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-300 block">
                    Visado D / Permesso
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">Desde $740</span>
                  <span className="text-[11px] text-slate-300 block">Solo Ida / 2 Maletas</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-300 block">
                    Regla Italia
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">Ospitalità 48h</span>
                  <span className="text-[11px] text-slate-300 block">Art. 7 D.Lgs. 286/1998</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha — Tarjeta Vitrina Italia (Foto 100% limpia) */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[#0a1628] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative h-52 sm:h-56 w-full bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80"
                    alt="Roma y Milán — Vuelos y Paquetes a Italia desde Lima"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#0a1628] text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                      <FlagIcon pais="Italia" className="w-4 h-3" />
                      Milán · Roma · Turín · Florencia
                    </span>
                    <span className="bg-emerald-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                      Salidas Confirmadas
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                      KLM · Air France · Iberia · Air Europa · LATAM
                    </span>
                    <h2 className="text-lg sm:text-xl font-black text-[#0a1628] leading-snug mt-0.5">
                      Especial Italia 2026: Carpeta Completa o Paquete con Hotel
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3.5">
                      <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
                        Carpeta / Lettera Invito
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-black text-[#0a1628]">$1,150</span>
                        <span className="text-xs font-bold text-slate-500">USD</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                        Inicial 50%: $575 USD
                      </span>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3.5">
                      <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
                        Paquete con Hotel (8D/7N)
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-black text-[#0a1628]">$1,390</span>
                        <span className="text-xs font-bold text-slate-500">USD</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                        Inicial 50%: $695 USD
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-700 font-medium mb-5">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        Equipaje facturado desde Lima hasta Milán, Roma, Turín, Florencia o Bolonia
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        Seguro Schengen 30.000€ + Formato oficial de Lettera di Invito / Alloggio
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        Atención presencial en Los Olivos (RUC {EMPRESA_RUC}) y compra desde Italia
                      </span>
                    </li>
                  </ul>

                  <a
                    href={waItalia(
                      "¡Hola Cityland Travel! Quiero cotizar mi viaje a Italia (Carpeta Desde $1,150 USD / Paquete con Hotel Desde $1,390 USD).",
                      "Vitrina Hero"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-5 rounded-xl font-extrabold text-sm shadow-md cursor-pointer"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Consultar Cupos y Fechas a Italia</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LAS 3 MODALIDADES COMERCIALES PARA VIAJAR A ITALIA */}
      <section id="modalidades-italia" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
              Elige según tu Perfil de Viaje a Italia
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] tracking-tight mb-3">
              3 Modalidades Oficiales para Viajar a Italia desde Perú en 2026
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              No todos los pasajeros que vuelan a Milán o Roma necesitan los mismos documentos.
              Cotizamos exactamente lo que exige tu situación legal para que viajes seguro y sin
              pagar servicios innecesarios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {MODALIDADES_ITALIA.map((mod) => (
              <div
                key={mod.id}
                className={`rounded-3xl border-2 p-6 sm:p-7 flex flex-col justify-between bg-white shadow-xs ${mod.borde}`}
              >
                <div>
                  <span
                    className={`inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3.5 ${mod.badgeBg}`}
                  >
                    {mod.badge}
                  </span>
                  <h3 className="text-xl font-black text-[#0a1628] leading-snug mb-1.5">
                    {mod.titulo}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mb-3">{mod.subtitulo}</p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5">
                    {mod.descripcion}
                  </p>

                  <div className="bg-white/90 rounded-2xl p-4 border border-slate-200/80 mb-5">
                    <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
                      {mod.etiquetaPrecio}
                    </span>
                    <div className="flex items-baseline justify-between gap-2 mt-1">
                      <div>
                        <span className="text-3xl font-black text-[#0a1628]">
                          ${mod.precioUSD.toLocaleString("en-US")}
                        </span>
                        <span className="text-xs font-bold text-slate-500 ml-1">USD</span>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                        Separa con 50%: ${mod.inicial50}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                    {mod.incluye.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-600 font-black mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={waItalia(mod.waMsg, mod.titulo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-slate-800 text-white py-3.5 px-5 rounded-xl font-extrabold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>Cotizar esta Modalidad por WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LAS 6 CIUDADES CON MAYOR COMUNIDAD PERUANA EN ITALIA (FOTOS 100% LIMPIAS) */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-2">
                Boleto Único Conectado (Equipaje hasta Destino Final)
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] tracking-tight">
                Vuelos desde Lima hacia las 6 Ciudades Clave de Italia (y Retornos a Perú)
              </h2>
            </div>
            <Link
              href="/vuelos"
              className="text-xs font-extrabold text-red-600 hover:underline shrink-0"
            >
              Ver todas las rutas aéreas →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CIUDADES_ITALIA.map((c) => (
              <div
                key={c.ciudad}
                className="rounded-3xl border border-slate-200/90 overflow-hidden bg-white shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={c.img}
                      alt={`Vuelos Lima a ${c.ciudad} (${c.iata}) — Cityland Travel`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#0a1628] text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                        <FlagIcon pais="Italia" className="w-3.5 h-2.5" />
                        LIM ↔ {c.iata}
                      </span>
                      <span className="bg-emerald-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                        Desde {c.precioIdaVuelta} USD
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-extrabold uppercase text-emerald-700 block">
                      {c.region}
                    </span>
                    <h3 className="text-xl font-black text-[#0a1628] leading-tight mt-0.5 mb-2.5">
                      Lima ↔ {c.ciudad} ({c.iata})
                    </h3>
                    <p className="text-[11px] font-bold text-slate-500 mb-2">
                      Aerolíneas: <span className="text-[#0a1628]">{c.aerolineas}</span>
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{c.ventaja}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Link
                        href={c.hrefIda}
                        className="text-[11px] font-extrabold text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors"
                      >
                        ✈️ Lima → {c.ciudad} ({c.precioIdaVuelta})
                      </Link>
                      <Link
                        href={c.hrefRetorno}
                        className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1.5 rounded-lg transition-colors"
                      >
                        🔄 {c.ciudad} → Lima ({c.precioRetornoLima})
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={c.hrefPrimerViaje}
                    className="text-xs font-bold text-slate-600 hover:text-[#0a1628] underline"
                  >
                    Requisitos y guía
                  </Link>
                  <a
                    href={waItalia(
                      `¡Hola Cityland Travel! Quiero cotizar vuelos / paquete entre Lima y ${c.ciudad} (${c.iata}) (Desde ${c.precioIdaVuelta} USD).`,
                      `Ciudad ${c.ciudad}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-xl text-xs font-extrabold transition-colors"
                  >
                    <WhatsAppIcon size={14} />
                    <span>Cotizar {c.ciudad}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NORMATIVA ITALIA 2026: LETTERA DI INVITO, OSPITALITÀ 48H Y TABLA ECONÓMICA */}
      <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Columna Izquierda: Lettera di Invito + Ospitalità 48h */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Art. 7 D.Lgs. 286/1998 · Normativa Italiana
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0a1628] mb-3">
                ¿Cómo funciona la Lettera di Invito y la Dichiarazione di Ospitalità (48 horas)?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Si viajas a Milán, Roma, Turín, Florencia o Bolonia para alojarte en casa de un
                familiar o amigo residente legal en Italia, no necesitas pagar hotel si cumples estos
                dos pasos obligatorios:
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-extrabold text-[#0a1628] mb-1">
                    1. Antes de embarcar en Lima: Dichiarazione di Alloggio / Lettera di Invito
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tu anfitrión en Italia completa y firma el formulario oficial de invitación
                    indicando la dirección exacta del inmueble y las fechas de tu estadía, adjuntando
                    copia de su <strong>Permesso di Soggiorno</strong> (o Carta d&apos;Identità si es
                    ciudadano italiano) y documento de tenencia de la vivienda. En Cityland Travel te
                    entregamos la plantilla actualizada y revisamos que no tenga errores.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <h3 className="font-extrabold text-[#0a1628] mb-1">
                    2. Dentro de las 48 horas de llegar a Italia: Dichiarazione di Ospitalità
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Conforme al <strong>Artículo 7 del Testo Unico sull&apos;Immigrazione</strong>,
                    toda persona que aloje a un ciudadano extracomunitario en territorio italiano debe
                    presentar la <em>Comunicazione di Ospitalità</em> ante la{" "}
                    <strong>Questura, Commissariato di Polizia o Comune local</strong> dentro de las{" "}
                    <strong>48 horas</strong> desde tu ingreso (personalmente o por PEC/correo
                    certificado). Cumplir este plazo protege al anfitrión de multas administrativas y
                    deja constancia legal de tu estadía.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/blog/dichiarazione-di-ospitalita-italia-48-horas-questura"
                  className="text-xs font-extrabold text-emerald-700 hover:underline"
                >
                  Leer guía completa de la Ospitalità 48h →
                </Link>
                <Link
                  href="/viajes/requisitos-viajar-a-italia-desde-peru"
                  className="text-xs font-extrabold text-blue-700 hover:underline"
                >
                  Ver checklist de documentos para Italia →
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Tabla Oficial de Medios Económicos Italia vs Escala en Madrid */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <span className="inline-block bg-blue-100 text-blue-800 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Directiva Ministerio del Interior de Italia & Escala Schengen
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0a1628] mb-3">
                Tabla de Bolsa de Viaje para Italia según tu Aeropuerto de Escala
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Recuerda una regla clave de aviación europea:{" "}
                <strong className="text-[#0a1628]">
                  pasas el control migratorio de ingreso Schengen en el primer aeropuerto europeo que
                  pisas
                </strong>
                :
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-4">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#0a1628] text-white">
                      <th className="p-3 font-extrabold">Tramo / Duración</th>
                      <th className="p-3 font-extrabold">1 Pasajero (Directiva Italia)</th>
                      <th className="p-3 font-extrabold">2 o más Pasajeros (c/u)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-[#0a1628]">1 a 5 días</td>
                      <td className="p-3 text-slate-700">Cuota fija total: 269,60 €</td>
                      <td className="p-3 text-slate-700">Cuota fija total: 212,81 €</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 font-bold text-[#0a1628]">6 a 10 días</td>
                      <td className="p-3 text-slate-700">44,93 € / día</td>
                      <td className="p-3 text-slate-700">26,33 € / día</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-[#0a1628]">11 a 20 días</td>
                      <td className="p-3 text-slate-700">51,64 € fijos + 36,67 € / día</td>
                      <td className="p-3 text-slate-700">25,82 € fijos + 22,21 € / día</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 font-bold text-[#0a1628]">Más de 20 días</td>
                      <td className="p-3 text-slate-700">206,58 € fijos + 27,89 € / día</td>
                      <td className="p-3 text-slate-700">118,79 € fijos + 17,04 € / día</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-slate-700 leading-relaxed">
                <strong className="text-[#0a1628] block mb-1">
                  💡 Consejo Experto Cityland Travel (Vuelos vía Madrid vs Ámsterdam/París):
                </strong>
                Si tu vuelo a Milán o Roma hace escala en{" "}
                <strong>Madrid-Barajas (Iberia, Air Europa o LATAM)</strong>, la Policía Nacional de
                España realiza tu control de entrada bajo el parámetro BOE (
                <strong>122,10 €/día, mínimo 1.098,90 €</strong>). Por eso recomendamos siempre
                acreditar entre <strong>1.100 € y 1.500 €</strong> en efectivo y/o tarjetas para
                superar cualquier escala europea con total tranquilidad.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALCULADORA BOE + VERIFICADOR PNR + PRE-CALIFICADOR */}
      <ModuloSeguridadYCalculadoraEuropa destinoInicial="Milán / Roma (Italia)" />

      {/* 6. PREGUNTAS FRECUENTES OFICIALES SOBRE VIAJAR A ITALIA */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
              Respuestas Verificadas sinLetra Chica
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] tracking-tight">
              Preguntas Frecuentes sobre Vuelos y Paquetes a Italia 2026
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_ITALIA.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 sm:p-6"
              >
                <h3 className="text-base sm:text-lg font-extrabold text-[#0a1628] mb-2">
                  {f.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#0a1628] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 block mb-1">
                Atención Presencial y Virtual · RUC {EMPRESA_RUC}
              </span>
              <h3 className="text-xl sm:text-2xl font-black mb-1">
                ¿Listo para cotizar tu vuelo o paquete a Italia?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                📍 {EMPRESA_DIRECCION} · 🕒 {EMPRESA_HORARIO}
              </p>
            </div>
            <a
              href={waItalia(
                "¡Hola Cityland Travel! Deseo cotizar mi viaje a Italia o agendar atención en su oficina de Los Olivos.",
                "CTA Final FAQ"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-4 rounded-2xl text-sm font-extrabold shadow-lg shrink-0 cursor-pointer"
            >
              <WhatsAppIcon size={18} />
              <span>Hablar con Especialista Italia</span>
            </a>
          </div>
        </div>
      </section>

      <SeoSiloFooter
        enlaces={obtenerEnlacesCruzadosSEO("Italia Milán Roma Turín", "italia")}
        tituloContexto="Italia (Milán, Roma, Turín, Florencia y Bolonia)"
      />

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
