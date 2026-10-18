import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import ModuloSeguridadYCalculadoraEuropa from "@/components/ModuloSeguridadYCalculadoraEuropa";
import {
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
} from "@/lib/seo-arquitectura";

const rawTitle = "Guía Viajar a España e Italia desde Perú 2026 | Cityland Travel";
const rawDesc =
  "Vuelos y paquetes a España e Italia desde Perú: calculadora BOE (122,10 €/día), Carta de Invitación, EES 2026, Visado D (RD 1155/2024) y verificación PNR.";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO(rawTitle),
  description: optimizarMetaDescriptionSEO(rawDesc),
  keywords: [
    "viajar a espana desde peru requisitos 2026",
    "viajar a italia desde peru requisitos 2026",
    "bolsa de viaje espana 2026 boe 122 euros",
    "carta de invitacion espana peru",
    "dichiarazione di ospitalita italia 48 horas",
    "sistema ees europa peruanos 2026",
    "verificar codigo pnr boleto 13 digitos iata",
    "vuelos lima madrid 2 maletas 23 kg",
    "vuelos madrid lima para residentes peruanos",
    "cityland travel europa",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/guia-europa",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/guia-europa",
    title: optimizarMetaTitleSEO(rawTitle),
    description: optimizarMetaDescriptionSEO(rawDesc),
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Guía Oficial de Vuelos y Requisitos a España e Italia — Cityland Travel",
      },
    ],
  },
};

const AEROLINEAS_EUROPA = [
  {
    nombre: "Iberia",
    prefijoIata: "075",
    rutaPrincipal: "Lima (LIM) ↔ Madrid (MAD) Directo + Conexiones a Barcelona, Roma, Milán y París",
    terminalMadrid: "Terminal 4 / Satélite T4S (Tren subterráneo 4 min)",
    equipajeBase: "Cabina 10 kg + 1 o 2 maletas de 23 kg según familia tarifaria",
    ventajaClave:
      "Hasta 2 vuelos diarios en Airbus A350. El equipaje va facturado hasta tu destino final en España o Italia en un solo PNR.",
    slugUrl: "/viajes/aerolinea-iberia-lima-madrid",
    precioRef: "$1,120",
  },
  {
    nombre: "Air Europa",
    prefijoIata: "996",
    rutaPrincipal: "Lima (LIM) ↔ Madrid (MAD) Directo + Conexiones a Barcelona, Milán y Roma",
    terminalMadrid: "Terminal 1 (T1) para internacional y T2 para doméstico/Schengen",
    equipajeBase: "Cabina 10 kg + opciones promocionales con 1 o 2 maletas de 23 kg",
    ventajaClave:
      "Vuelo nocturno en Boeing 787 Dreamliner que aterriza por la mañana en Madrid, ideal para conectar el mismo día.",
    slugUrl: "/viajes/aerolinea-air-europa-lima-madrid",
    precioRef: "$1,095",
  },
  {
    nombre: "Plus Ultra Líneas Aéreas",
    prefijoIata: "649",
    rutaPrincipal: "Lima (LIM) ↔ Madrid (MAD) Directo y conexión a Tenerife",
    terminalMadrid: "Terminal 1 (T1) Aeropuerto Madrid-Barajas",
    equipajeBase: "Frecuentes promociones con 2 maletas de 23 kg (46 kg en bodega) + 10 kg en mano",
    ventajaClave:
      "La favorita para largas estadías, estudiantes, reagrupación familiar y residentes que viajan con alto volumen de equipaje.",
    slugUrl: "/viajes/aerolinea-plus-ultra-lima-madrid",
    precioRef: "$1,090",
  },
  {
    nombre: "LATAM Airlines",
    prefijoIata: "045",
    rutaPrincipal: "Lima (LIM) ↔ Madrid (MAD) Directo + Conexión protegida desde 18 provincias del Perú",
    terminalMadrid: "Terminal 4 Satélite (T4S) Aeropuerto Madrid-Barajas",
    equipajeBase: "Cabina 10 kg + 1 o 2 piezas de 23 kg en bodega",
    ventajaClave:
      "Mejor integración en un solo boleto electrónico saliendo desde Arequipa, Trujillo, Chiclayo, Piura, Cusco o Iquitos.",
    slugUrl: "/viajes/aerolinea-latam-lima-madrid",
    precioRef: "$1,140",
  },
  {
    nombre: "KLM / Air France",
    prefijoIata: "074 / 057",
    rutaPrincipal: "Lima (LIM) ↔ Ámsterdam (AMS) / París (CDG) → Milán, Turín, Roma, Bolonia y Florencia",
    terminalMadrid: "Hub Schiphol (AMS) o Charles de Gaulle (CDG)",
    equipajeBase: "Cabina 12 kg + 1 o 2 maletas de 23 kg en bodega",
    ventajaClave:
      "Ruta preferida por la comunidad peruana que viaja directo al norte y centro de Italia (Milán-Linate/Malpensa, Turín y Bolonia).",
    slugUrl: "/viajes/aerolinea-klm-lima-amsterdam",
    precioRef: "$1,180",
  },
];

const PERFILES_LEGALES = [
  {
    numero: "01",
    badge: "Exención de Visa Corta Duración",
    titulo: "Turismo y Viajes Culturales (< 90 días)",
    color: "border-red-200 bg-red-50/40",
    badgeColor: "bg-red-600 text-white",
    normativa: "Reglamento (UE) 2018/1806 · Orden PRE/1282/2007 (BOE España)",
    resumen:
      "Para viajeros peruanos que visitan Madrid, Barcelona, Roma, Milán o París por vacaciones. No requiere visa consular para estancias de hasta 90 días en un periodo de 180 días.",
    requisitos: [
      "Pasaporte peruano biométrico con vigencia mínima de 3 meses posteriores a la fecha prevista de salida de Europa.",
      "Boleto aéreo de ida y vuelta confirmado con código PNR y E-Ticket de 13 dígitos (retorno dentro de los 90 días).",
      "Reserva de hotel verificable por todas las noches del viaje (paquetes con hotel desde $1,350 y carpeta migratoria desde $1,090).",
      "Seguro médico internacional Schengen de 30.000€ sin deducible ni copago y con repatriación sanitaria.",
      "Medios económicos (Bolsa de Viaje BOE 2026): en España se exige acreditar 122,10 € por persona y día, con un mínimo obligatorio de 1.098,90 € por persona.",
    ],
    enlaces: [
      { texto: "Paquetes a España con Carpeta Completa ($1,090)", href: "/espana" },
      { texto: "Paquetes a Italia: Milán, Roma y Turín ($1,150)", href: "/italia" },
      { texto: "Primer Viaje a Madrid paso a paso", href: "/viajes/primer-viaje-a-madrid" },
      { texto: "Primer Viaje a Roma paso a paso", href: "/viajes/primer-viaje-a-roma" },
    ],
  },
  {
    numero: "02",
    badge: "Alojamiento con Familiar o Amigo",
    titulo: "Visita Familiar con Carta de Invitación / Ospitalità",
    color: "border-blue-200 bg-blue-50/40",
    badgeColor: "bg-blue-700 text-white",
    normativa: "Comisaría de Policía Nacional (España) · Art. 7 D.Lgs. 286/1998 (Italia)",
    resumen:
      "Si te hospedarás en casa de un familiar o amigo residente legal en España o Italia, no necesitas gastar en hotel: cotizamos únicamente tu boleto ida y vuelta + tu Seguro Schengen de 30.000€.",
    requisitos: [
      "En España: Carta de Invitación original tramitada por tu anfitrión en la Comisaría de Policía Nacional de su localidad y enviada físicamente a Perú antes de tu vuelo.",
      "En Italia: Formulario de Dichiarazione di Alloggio / Lettera di Invito firmado por el anfitrión adjuntando copia de su Permesso di Soggiorno o Carta d'Identità.",
      "Regla de las 48 horas en Italia: una vez que llegues a Italia, tu anfitrión debe presentar la Dichiarazione di Ospitalità ante la Questura o Commissariato local dentro de las 48 horas.",
      "Importante: La Carta de Invitación acredita el alojamiento, pero NO exime de demostrar la solvencia económica mínima (1.098,90 € en España) ni el boleto de retorno.",
    ],
    enlaces: [
      { texto: "Guía Carta de Invitación España", href: "/viajes/requisitos-carta-de-invitacion-espana-peru" },
      { texto: "Diferencia entre Hotel y Carta de Invitación", href: "/blog/diferencia-reserva-hotel-y-carta-invitacion-espana" },
      { texto: "Especial Italia: Lettera di Invito y Ospitalità 48h", href: "/italia" },
      { texto: "Seguro Schengen 30.000€ Oficial ($65)", href: "/viajes/seguro-schengen-espana-30000-euros" },
    ],
  },
  {
    numero: "03",
    badge: "Reforma RD 1155/2024 & Decreto Flussi",
    titulo: "Titulares de Visado Nacional Tipo D, Estudios, Trabajo o Reagrupación",
    color: "border-emerald-200 bg-emerald-50/40",
    badgeColor: "bg-emerald-700 text-white",
    normativa: "Real Decreto 1155/2024 (España, en vigor desde mayo 2025) · Decreto Flussi / SUI (Italia)",
    resumen:
      "Atención especializada para peruanos que ya obtuvieron su Visado Nacional Tipo D (estudios superiores, reagrupación familiar, estatuto de familiar de ciudadano español o Nulla Osta al lavoro en Italia).",
    requisitos: [
      "Eximir boleto de retorno: Con Visado Tipo D vigente en el pasaporte o tarjeta TIE / Permesso di Soggiorno en vigor, estás legalmente autorizado a embarcar con boleto de SOLO IDA (One-Way).",
      "Franquicia de 2 maletas de 23 kg: Emitimos tarifas estudiantiles y de larga estadía con 46 kg en bodega + 10 kg en cabina.",
      "Pre-reserva aérea verificable para expediente consular (BLS / Consulado de España o Embajada de Italia en Lima) antes de emitir el boleto definitivo.",
      "Seguro médico anual sin copagos, sin carencias y con cobertura integral exigido por el nuevo Reglamento de Extranjería RD 1155/2024.",
    ],
    enlaces: [
      { texto: "Vuelos Visado Estudios España (RD 1155/2024)", href: "/viajes/vuelos-estudiantes-espana-visado-rd-1155-2024" },
      { texto: "Vuelos Reagrupación Familiar España e Italia", href: "/viajes/vuelos-reagrupacion-familiar-espana-italia" },
      { texto: "Vuelos Decreto Flussi / Nulla Osta Italia", href: "/viajes/vuelos-decreto-flussi-italia-nulla-osta-peru" },
      { texto: "Quiénes pueden volar Solo Ida (One-Way)", href: "/blog/comprar-pasaje-solo-ida-espana-italia-quienes-pueden" },
    ],
  },
  {
    numero: "04",
    badge: "Comunidad Peruana en Europa",
    titulo: "Residentes en España e Italia: Vuelos a Perú y Compra para Familiares",
    color: "border-amber-200 bg-amber-50/40",
    badgeColor: "bg-amber-600 text-white",
    normativa: "Emisión IATA Bidireccional Europa ↔ Perú · Asistencia SSR WCHR Adulto Mayor",
    resumen:
      "Con más de 320,000 peruanos en España y 130,000 en Italia, facilitamos tanto tus vacaciones de regreso al Perú como la compra segura desde Europa de pasajes para tus padres, hijos o pareja que salen de Lima o provincias.",
    requisitos: [
      "Rutas inversas directas y con conexión: Madrid → Lima, Barcelona → Lima, Milán → Lima, Roma → Lima, Turín → Lima y Valencia → Lima.",
      "Compra a distancia para familiares en Perú: Pagas con facilidad y nosotros entregamos la carpeta impresa a tu familiar en nuestra oficina de Los Olivos o por courier nacional.",
      "Asistencia gratuita de Silla de Ruedas (código SSR WCHR) y acompañamiento en mostrador y conexiones en Lima y Madrid-Barajas para padres y adultos mayores.",
      "Conexión en un solo PNR con Lima hacia Arequipa, Trujillo, Chiclayo, Piura, Cusco, Huancayo/Jauja, Cajamarca e Iquitos.",
    ],
    enlaces: [
      { texto: "Comprar Pasajes desde Europa para Familiares", href: "/viajes/comprar-pasajes-desde-espana-italia-para-familiares-peru" },
      { texto: "Asistencia Adulto Mayor Silla de Ruedas (SSR WCHR)", href: "/viajes/vuelos-adulto-mayor-silla-de-ruedas-lima-madrid-roma" },
      { texto: "Vuelos Madrid a Lima con 2 Maletas", href: "/viajes/vuelos-con-2-maletas-madrid-lima" },
      { texto: "Vuelos Barcelona a Lima con 2 Maletas", href: "/viajes/vuelos-con-2-maletas-barcelona-lima" },
    ],
  },
];

const CLUSTERS_DIRECTORIO_EUROPA = [
  {
    titulo: "1. Vuelos Perú ↔ España (Rutas Troncales y Provincias)",
    enlaces: [
      { nombre: "Vuelos Lima a Madrid Directo", href: "/vuelos/lima-madrid" },
      { nombre: "Vuelos Lima a Barcelona", href: "/vuelos/lima-barcelona" },
      { nombre: "Vuelos Lima a Valencia", href: "/vuelos/lima-valencia" },
      { nombre: "Vuelos Lima a Sevilla", href: "/vuelos/lima-sevilla" },
      { nombre: "Vuelos Lima a Bilbao", href: "/vuelos/lima-bilbao" },
      { nombre: "Vuelos Lima a Málaga", href: "/vuelos/lima-malaga" },
      { nombre: "Vuelos Lima a Palma de Mallorca", href: "/vuelos/lima-palma-de-mallorca" },
      { nombre: "Vuelos Madrid a Lima (Retorno)", href: "/vuelos/madrid-lima" },
      { nombre: "Vuelos Barcelona a Lima (Retorno)", href: "/vuelos/barcelona-lima" },
      { nombre: "Vuelos Valencia a Lima (Retorno)", href: "/vuelos/valencia-lima" },
      { nombre: "Vuelos Arequipa a Madrid (1 PNR)", href: "/vuelos/arequipa-madrid" },
      { nombre: "Vuelos Trujillo a Madrid (1 PNR)", href: "/vuelos/trujillo-madrid" },
    ],
  },
  {
    titulo: "2. Vuelos Perú ↔ Italia y Resto de Europa Schengen",
    enlaces: [
      { nombre: "Especial Italia: Milán, Roma y Turín ($1,150)", href: "/italia" },
      { nombre: "Vuelos Lima a Roma (Fiumicino)", href: "/vuelos/lima-roma" },
      { nombre: "Vuelos Lima a Milán (Malpensa/Linate)", href: "/vuelos/lima-milan" },
      { nombre: "Vuelos Lima a Turín", href: "/vuelos/lima-turin" },
      { nombre: "Vuelos Lima a Florencia", href: "/vuelos/lima-florencia" },
      { nombre: "Vuelos Lima a Bolonia", href: "/vuelos/lima-bolonia" },
      { nombre: "Vuelos Lima a Génova", href: "/vuelos/lima-genova" },
      { nombre: "Vuelos Milán a Lima (Retorno)", href: "/vuelos/milan-lima" },
      { nombre: "Vuelos Roma a Lima (Retorno)", href: "/vuelos/roma-lima" },
      { nombre: "Vuelos Turín a Lima (Retorno)", href: "/vuelos/turin-lima" },
      { nombre: "Vuelos Florencia a Lima (Retorno)", href: "/vuelos/florencia-lima" },
      { nombre: "Vuelos Bolonia a Lima (Retorno)", href: "/vuelos/bolonia-lima" },
    ],
  },
  {
    titulo: "3. Paquetes Primer Viaje, Estudios RD 1155/2024 y Decreto Flussi",
    enlaces: [
      { nombre: "Especial España Salidas Mensuales ($1,090)", href: "/espana" },
      { nombre: "Especial Italia Salidas Mensuales ($1,150)", href: "/italia" },
      { nombre: "Circuitos Europa y Turquía Sin Visa", href: "/europa-turquia" },
      { nombre: "Primer Viaje a Madrid con Carpeta", href: "/viajes/primer-viaje-a-madrid" },
      { nombre: "Primer Viaje a Barcelona con Carpeta", href: "/viajes/primer-viaje-a-barcelona" },
      { nombre: "Primer Viaje a Roma con Carpeta", href: "/viajes/primer-viaje-a-roma" },
      { nombre: "Primer Viaje a Milán con Carpeta", href: "/viajes/primer-viaje-a-milan" },
      { nombre: "Primer Viaje a Turín con Carpeta", href: "/viajes/primer-viaje-a-turin" },
      { nombre: "Visado Estudios España (RD 1155/2024)", href: "/viajes/vuelos-estudiantes-espana-visado-rd-1155-2024" },
      { nombre: "Reagrupación Familiar España e Italia", href: "/viajes/vuelos-reagrupacion-familiar-espana-italia" },
      { nombre: "Visado Trabajo Italia (Decreto Flussi)", href: "/viajes/vuelos-decreto-flussi-italia-nulla-osta-peru" },
      { nombre: "Comprar desde Europa para Familiares", href: "/viajes/comprar-pasajes-desde-espana-italia-para-familiares-peru" },
    ],
  },
  {
    titulo: "4. Equipaje 2 Maletas 23 kg, Seguridad Aérea y Normativa 2026",
    enlaces: [
      { nombre: "Vuelos 2 Maletas 23 kg Lima – Madrid", href: "/viajes/vuelos-con-2-maletas-lima-madrid" },
      { nombre: "Vuelos 2 Maletas 23 kg Madrid – Lima", href: "/viajes/vuelos-con-2-maletas-madrid-lima" },
      { nombre: "Vuelos 2 Maletas 23 kg Lima – Barcelona", href: "/viajes/vuelos-con-2-maletas-lima-barcelona" },
      { nombre: "Vuelos 2 Maletas 23 kg Lima – Roma", href: "/viajes/vuelos-con-2-maletas-lima-roma" },
      { nombre: "Vuelos 2 Maletas 23 kg Lima – Milán", href: "/viajes/vuelos-con-2-maletas-lima-milan" },
      { nombre: "Bolsa de Viaje BOE 2026 (122,10 €/día)", href: "/blog/bolsa-de-viaje-espana-2026-boe-122-euros-calculo" },
      { nombre: "Dichiarazione di Ospitalità 48h Italia", href: "/blog/dichiarazione-di-ospitalita-italia-48-horas-questura" },
      { nombre: "Regla del No-Show en Vuelos a Europa", href: "/blog/regla-no-show-vuelos-europa-perder-tramo-ida" },
      { nombre: "Guía Conexión Madrid-Barajas T4S/T4/T1", href: "/blog/guia-conexion-madrid-barajas-t4-t4s-t1-peruanos" },
      { nombre: "Quiénes Pueden Volar Solo Ida (One-Way)", href: "/blog/comprar-pasaje-solo-ida-espana-italia-quienes-pueden" },
      { nombre: "Sistema Biométrico EES 2026 y ETIAS", href: "/viajes/sistema-ees-etias-europa-requisitos-peruanos" },
      { nombre: "Cómo Verificar Código PNR y Boleto IATA", href: "/blog/como-verificar-codigo-reserva-pnr-aerolinea" },
    ],
  },
];

const FAQS_GUIA_EUROPA = [
  {
    q: "¿Cuánto es la bolsa de viaje obligatoria para España en 2026 según el BOE?",
    a: "De acuerdo con la Orden PRE/1282/2007 del Boletín Oficial del Estado (BOE) y el SMI vigente en España, los viajeros deben acreditar 122,10 € por persona y día de estancia, con un mínimo obligatorio de 1.098,90 € por persona (incluso si el viaje dura menos de 9 días). Se puede demostrar mediante efectivo en euros, tarjetas bancarias internacionales o cheques certificados.",
  },
  {
    q: "¿Ya están funcionando los sistemas EES y ETIAS para los peruanos que viajan a Europa?",
    a: "El Sistema de Entradas y Salidas (EES) ya está plenamente operativo desde el 10 de abril de 2026: registra digitalmente la foto facial y huellas dactilares en el aeropuerto europeo (gratuito y sin trámite previo). En cambio, la autorización ETIAS AÚN NO ESTÁ EN VIGOR en 2026 según el portal oficial de la Unión Europea (travel-europe.europa.eu/etias).",
  },
  {
    q: "¿Cuándo puedo viajar a España o Italia con pasaje de Solo Ida (One-Way)?",
    a: "Únicamente pueden embarcar desde Lima con boleto de solo ida quienes posean Pasaporte Europeo, Tarjeta de Residencia vigente (TIE en España o Permesso di Soggiorno en Italia) o un Visado Nacional de Larga Duración Tipo D estampado en su pasaporte peruano (por estudios RD 1155/2024, trabajo Decreto Flussi o reagrupación familiar). Quienes viajan sin visa hasta 90 días deben presentar obligatoriamente pasaje de ida y vuelta.",
  },
  {
    q: "¿Cómo verifico que mi boleto aéreo a Madrid, Barcelona, Roma o Milán está realmente emitido?",
    a: "Toda emisión formal genera dos códigos: el Código de Reserva PNR de 6 caracteres alfanuméricos y el Número de Boleto Electrónico (E-Ticket) de 13 dígitos numéricos con el prefijo IATA de la aerolínea (075 Iberia, 996 Air Europa, 649 Plus Ultra, 045 LATAM, 074 KLM). Con el PNR y tu apellido puedes comprobar tu asiento en 'Gestionar mi reserva' en la web oficial de la aerolínea.",
  },
  {
    q: "¿Qué es la Dichiarazione di Ospitalità de 48 horas si visito familiares en Italia?",
    a: "Conforme al Artículo 7 del Decreto Legislativo 286/1998 de Italia, cuando un ciudadano extracomunitario se aloja en la vivienda de un familiar o amigo en Italia (Milán, Turín, Roma, Florencia, etc.), el anfitrión tiene la obligación legal de comunicar el alojamiento (Dichiarazione di Ospitalità) ante la Questura o Commissariato de Policía local dentro de las 48 horas posteriores a la llegada.",
  },
  {
    q: "¿Un residente peruano en España o Italia puede comprar en Cityland Travel el pasaje para su familiar que vive en Perú?",
    a: "Sí. Atendemos a diario a residentes peruanos en Madrid, Barcelona, Milán, Turín y Roma que compran el boleto o paquete para sus padres, hijos o cónyuges en Perú. Emitimos el boleto desde Lima o conectando desde provincias en un solo PNR, gestionamos asistencia gratuita de silla de ruedas (SSR WCHR) para adultos mayores y entregamos la carpeta impresa en nuestra oficina de Los Olivos o por courier.",
  },
];

const JSON_LD_GUIA_EUROPA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://citylandtravel.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guía Europa 2026: Vuelos, Requisitos BOE y Seguridad Aérea",
          item: "https://citylandtravel.com/guia-europa",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS_GUIA_EUROPA.map((f) => ({
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

export default function GuiaEuropaPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_GUIA_EUROPA) }}
      />
      <Navbar />

      {/* 1. HERO EDITORIAL + COMERCIAL MODERNO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#102240] to-[#1a335c] text-white pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Migas de pan */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-semibold">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="text-slate-500">/</li>
              <li className="text-amber-300 font-bold">
                Centro Oficial Europa: España, Italia & Espacio Schengen
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-5">
                <FlagIcon pais="España" className="w-4 h-3" />
                <FlagIcon pais="Italia" className="w-4 h-3" />
                <FlagIcon pais="Francia" className="w-4 h-3" />
                <span>6 Años de Experiencia en Ruta Lima–Madrid · 12 Asesores Especialistas</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] mb-4">
                Vuelos, Paquetes y Requisitos Oficiales para Viajar a{" "}
                <span className="text-amber-400">España e Italia desde Perú</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-7 max-w-2xl">
                Todo el respaldo técnico y comercial en un solo lugar: calcula tu{" "}
                <strong className="text-white">bolsa de viaje oficial BOE 2026 (122,10 €/día)</strong>,
                compara aerolíneas con <strong className="text-white">2 maletas de 23 kg</strong>, verifica
                tu código <strong className="text-white">PNR y boleto IATA de 13 dígitos</strong> y cotiza
                según tu modalidad legal de viaje (Turismo, Carta de Invitación, Visado Tipo D o Residente).
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                <a
                  href="#herramienta-europa"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-2xl text-sm font-extrabold shadow-lg transition-all cursor-pointer"
                >
                  <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2" />
                  <span>Usar Calculadora BOE & Pre-Calificador ↓</span>
                </a>
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent(
                    "¡Hola Cityland Travel! Estoy en la Guía Oficial de Europa (/guia-europa) y deseo cotizar mi viaje a España / Italia con un asesor especialista.\n\n📍 Ref Web: citylandtravel.com/guia-europa [Hero]"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-4 rounded-2xl text-sm font-extrabold shadow-lg cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Hablar con Mesa Europa (+51 944 103 890)</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 block">
                    Solvencia BOE 2026
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">122,10 € / día</span>
                  <span className="text-[11px] text-slate-300 block">Mín. 1.098,90 € / pers.</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 block">
                    Fronteras UE 2026
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">EES Activo</span>
                  <span className="text-[11px] text-slate-300 block">ETIAS aún no vigente</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-300 block">
                    Seguro Schengen
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">30.000 €</span>
                  <span className="text-[11px] text-slate-300 block">Sin copago ni deducible</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-300 block">
                    Agencia Formal
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">Desde $1,090</span>
                  <span className="text-[11px] text-slate-300 block">RUC 20614914239 · Lima</span>
                </div>
              </div>
            </div>

            {/* Tarjeta Derecha: Resumen Rápido de los 4 Perfiles */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[#0a1628] rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-600 block">
                      Atención Diferenciada por Perfil
                    </span>
                    <h2 className="text-lg sm:text-xl font-black text-[#0a1628]">
                      ¿Cuál es el motivo de tu viaje a Europa?
                    </h2>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2.5 py-1 rounded-full shrink-0">
                    Separa con 50%
                  </span>
                </div>

                <div className="space-y-3 mb-5">
                  <a
                    href="#perfiles-legales"
                    className="block p-3.5 rounded-2xl border border-slate-200 hover:border-red-400 hover:bg-red-50/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#0a1628]">
                        1. Turismo con Reserva de Hotel (&lt; 90 días)
                      </span>
                      <span className="text-xs font-black text-red-600">Desde $1,350</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Vuelo I/V + Reserva Hotel verificable + Seguro 30.000€ + Guía Barajas/Fiumicino
                    </p>
                  </a>

                  <a
                    href="#perfiles-legales"
                    className="block p-3.5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#0a1628]">
                        2. Visita Familiar (Carta de Invitación / Ospitalità)
                      </span>
                      <span className="text-xs font-black text-blue-700">Desde $1,090</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Vuelo I/V coincidente con tu Carta + Seguro Schengen 30.000€ + Checklist 48h Italia
                    </p>
                  </a>

                  <a
                    href="#perfiles-legales"
                    className="block p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#0a1628]">
                        3. Visado Tipo D (Estudios RD 1155/2024, Trabajo o TIE)
                      </span>
                      <span className="text-xs font-black text-emerald-700">Solo Ida + 46 kg</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Boleto One-Way permitido con Visado D / TIE + 2 maletas de 23 kg + Seguro sin copago
                    </p>
                  </a>

                  <a
                    href="#perfiles-legales"
                    className="block p-3.5 rounded-2xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#0a1628]">
                        4. Residente en Europa (Vuelo a Perú o Compra Familiar)
                      </span>
                      <span className="text-xs font-black text-amber-700">Europa ↔ Perú</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Vuelos desde Madrid/Barcelona/Milán/Roma a Lima o compra para tus padres en Perú
                    </p>
                  </a>
                </div>

                <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold">
                  <span>📍 Av. Antúnez de Mayolo 814, Los Olivos</span>
                  <Link href="/espana" className="text-red-600 font-extrabold hover:underline">
                    Ver Salidas Mensuales España →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MÓDULO INTERACTIVO: PRE-CALIFICADOR + CALCULADORA BOE 2026 + VERIFICADOR PNR/IATA */}
      <div id="herramienta-europa">
        <ModuloSeguridadYCalculadoraEuropa destinoInicial="Madrid, Barcelona, Roma y Milán" />
      </div>

      {/* 3. LOS 4 PERFILES LEGALES EXPLICADOS CON RIGOR OFICIAL */}
      <section id="perfiles-legales" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
              Transparencia Normativa y Documental
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1628] tracking-tight leading-tight mb-3">
              Las 4 Modalidades Legales para Viajar entre Perú, España e Italia
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              No todos los pasajeros necesitan el mismo paquete. Diferenciamos claramente los requisitos de{" "}
              <strong>turismo sin visa</strong>, <strong>visita familiar con Carta de Invitación</strong>,{" "}
              <strong>traslado con Visado Nacional Tipo D (RD 1155/2024 / Decreto Flussi)</strong> y{" "}
              <strong>viajes de residentes peruanos en Europa</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PERFILES_LEGALES.map((p) => (
              <article
                key={p.numero}
                className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between ${p.color}`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full ${p.badgeColor}`}>
                      Perfil {p.numero} · {p.badge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">
                      {p.normativa}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0a1628] tracking-tight mb-2.5">
                    {p.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5">
                    {p.resumen}
                  </p>

                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 mb-5">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3">
                      Requisitos y Gestión Documental Verificada:
                    </h4>
                    <ul className="space-y-2">
                      {p.requisitos.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                    Páginas y Servicios Recomendados para este Perfil:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {p.enlaces.map((enl) => (
                      <Link
                        key={enl.href}
                        href={enl.href}
                        className="text-xs font-bold text-[#0a1628] hover:text-red-600 bg-white hover:bg-red-50 border border-slate-200/90 px-3 py-1.5 rounded-xl transition-colors"
                      >
                        {enl.texto} →
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARATIVA TÉCNICA DE AEROLÍNEAS PERÚ ↔ EUROPA */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
                Comparativa de Emisión IATA · Prefijos Oficiales y Terminales
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1628] tracking-tight leading-tight">
                Las 5 Aerolíneas Clave para Volar entre Perú, España e Italia
              </h2>
            </div>
            <Link
              href="/blog/vuelos-directos-lima-madrid-comparativa-aerolineas"
              className="text-xs sm:text-sm font-extrabold text-red-600 hover:underline shrink-0"
            >
              Leer análisis completo de aerolíneas →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AEROLINEAS_EUROPA.map((aero) => (
              <div
                key={aero.nombre}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-slate-900 text-white text-xs font-extrabold px-3 py-1 rounded-full">
                      Prefijo IATA: {aero.prefijoIata}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Desde {aero.precioRef}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#0a1628] mb-1.5">{aero.nombre}</h3>
                  <p className="text-xs font-bold text-slate-500 mb-4">{aero.rutaPrincipal}</p>

                  <div className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-3.5 mb-5">
                    <div>
                      <strong className="text-[#0a1628] block">Terminal / Hub Europeo:</strong>
                      <span>{aero.terminalMadrid}</span>
                    </div>
                    <div>
                      <strong className="text-[#0a1628] block">Franquicia de Equipaje:</strong>
                      <span>{aero.equipajeBase}</span>
                    </div>
                    <div>
                      <strong className="text-[#0a1628] block">Por qué elegirla:</strong>
                      <span>{aero.ventajaClave}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  <Link
                    href={aero.slugUrl}
                    className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-[#0a1628] text-xs font-extrabold py-2.5 px-3 rounded-xl transition-colors"
                  >
                    Ver Ruta y Equipaje
                  </Link>
                  <a
                    href={`https://wa.me/51944103890?text=${encodeURIComponent(
                      `¡Hola Cityland Travel! Deseo cotizar vuelos en ${aero.nombre} (Desde ${aero.precioRef}) para viajar a Europa.\n\n📍 Ref Web: citylandtravel.com/guia-europa [Aerolínea ${aero.nombre}]`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-extrabold py-2.5 px-3 rounded-xl transition-colors"
                  >
                    <WhatsAppIcon size={14} />
                    <span>Cotizar</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PREGUNTAS FRECUENTES OFICIALES (BOE, EES, ETIAS, OSPITALITÀ, PNR) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
              Respuestas Verificadas con Fuentes Oficiales 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] tracking-tight">
              Preguntas Frecuentes sobre Vuelos, Solvencia BOE y Migraciones en Europa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAQS_GUIA_EUROPA.map((f) => (
              <div
                key={f.q}
                className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/90"
              >
                <h3 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-2">
                  {f.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DIRECTORIO DEL SILO EUROPA (ENLAZADO INTERNO ESTRUCTURADO) */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
              Arquitectura de Contenidos y Rutas Europeas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] tracking-tight mb-2">
              Explora Todas Nuestras Rutas, Paquetes y Guías hacia España, Italia y Europa
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Selecciona tu ciudad de destino, ruta aérea desde Lima o provincias, franquicia de 2 maletas de 23 kg o guía documental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLUSTERS_DIRECTORIO_EUROPA.map((cluster) => (
              <div
                key={cluster.titulo}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs"
              >
                <h3 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-4 pb-2.5 border-b border-slate-100">
                  {cluster.titulo}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cluster.enlaces.map((enl) => (
                    <Link
                      key={enl.href}
                      href={enl.href}
                      className="text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-50 hover:bg-red-50/60 border border-slate-200/70 px-3 py-2 rounded-xl transition-colors flex items-center justify-between gap-2"
                    >
                      <span className="truncate">{enl.nombre}</span>
                      <span className="text-slate-400 shrink-0">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
