import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ModuloSeguridadYCalculadoraEuropa from "@/components/ModuloSeguridadYCalculadoraEuropa";
import BuscadorPaquetesMigratoriosClient, {
  type ItemResumenSuperLanding,
} from "./BuscadorPaquetesMigratoriosClient";
import { INDICE_PAQUETES_MIGRATORIOS_1000 } from "@/lib/catalogo-paquetes-migratorios-1000";
import { buildWhatsAppHref } from "@/components/constantes";
import {
  URL_BASE_SEO,
  SCHEMA_ORGANIZACION_CITYLAND,
  construirSchemaLandingSEO,
} from "@/lib/seo-arquitectura";

export const metadata: Metadata = {
  title:
    "Paquetes Migratorios a España, Italia, Francia y Europa desde $699 USD | Cityland Travel",
  description:
    "Viaja seguro desde Perú a Madrid, Barcelona, Milán, Roma, París y toda Europa desde $699 USD (separa con $350). Incluye pasaje de ida + boleto de regreso reservado para Migraciones + hotel + seguro 30.000€ + check-in 24h antes.",
  keywords: [
    "paquete migratorio españa desde peru",
    "paquete migratorio madrid 699",
    "paquete migratorio italia desde peru",
    "paquete migratorio francia desde peru",
    "viajar a españa para quedarse desde peru",
    "requisitos migratorios españa peruanos 2026",
    "cityland travel paquetes migratorios",
  ],
  alternates: {
    canonical: `${URL_BASE_SEO}/paquetes-migratorios`,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${URL_BASE_SEO}/paquetes-migratorios`,
    siteName: "Cityland Travel",
    title:
      "Paquetes Migratorios a España, Italia, Francia y Europa desde $699 USD | Cityland Travel",
    description:
      "Pasaje de ida + boleto de regreso reservado para Migraciones + reserva de hotel + seguro Schengen 30.000€ + check-in 24h antes. Separa con el 50% ($350 USD).",
    images: [
      {
        url: `${URL_BASE_SEO}/images/destinos/madrid.webp`,
        width: 1200,
        height: 630,
        alt: "Paquetes Migratorios a Europa desde Perú — Cityland Travel",
      },
    ],
  },
};

function obtenerBanderaPorPais(pais: string): string {
  if (pais === "España") return "🇪🇸";
  if (pais === "Italia") return "🇮🇹";
  if (pais === "Francia") return "🇫🇷";
  if (pais === "Países Bajos") return "🇳🇱";
  if (pais === "Bélgica") return "🇧🇪";
  if (pais === "Portugal") return "🇵🇹";
  if (pais === "Alemania") return "🇩🇪";
  if (pais === "Suiza") return "🇨🇭";
  return "🇪🇺";
}

export default function PaquetesMigratoriosHubPage() {
  const resumenItems: ItemResumenSuperLanding[] =
    INDICE_PAQUETES_MIGRATORIOS_1000.map((item) => ({
      slug: item.slug,
      siloId: item.silo,
      siloNombre: item.siloNombre,
      paisDestino: item.pais,
      ciudadDestino: item.ciudadDestino,
      banderaPais: obtenerBanderaPorPais(item.pais),
      intencionNombre: item.siloNombre,
      h1Principal: item.titulo,
      subtituloDorado: item.subtitulo,
      imagenHero: item.imagenHero,
      aerolineaSugerida: "Iberia · Air Europa · KLM · Air France · LATAM",
      aeropuertoLlegada: `${item.ciudadDestino}, ${item.pais}`,
      precioDesdeUSD: item.precioPromo,
    }));

  const msgHero =
    "¡Hola! Quiero más información del paquete a Madrid desde $699.\n📍 Ref Web: citylandtravel.com/paquetes-migratorios [Hub Paquetes Migratorios $699]";

  const schemaHub = construirSchemaLandingSEO({
    url: `${URL_BASE_SEO}/paquetes-migratorios`,
    titulo:
      "Paquetes Migratorios a España, Italia, Francia y Europa desde $699 USD",
    descripcion:
      "Centro oficial de Paquetes Migratorios de Cityland Travel (RUC 20614914239). 1,000 rutas y guías especializadas para viajar desde Perú con los 5 documentos que piden en el aeropuerto.",
    precioDesdeUSD: 699,
    cantidadOfertas: 1000,
    destinoOPais: "Europa",
    imagenUrl: `${URL_BASE_SEO}/images/destinos/madrid.webp`,
    migas: [
      { nombre: "Inicio", url: URL_BASE_SEO },
      {
        nombre: "Paquetes Migratorios Europa",
        url: `${URL_BASE_SEO}/paquetes-migratorios`,
      },
    ],
    faqs: [
      {
        q: "¿El paquete migratorio es ida y vuelta? ¿Por qué cuesta desde $699 USD?",
        a: "Si viajas a Europa para quedarte, trabajar o hacer tu vida allá, no tiene sentido gastar $1,500 USD en un avión de regreso al que no te vas a subir. Pero como en el aeropuerto te exigen mostrar tu regreso para dejarte viajar, nuestro Paquete Migratorio incluye tu pasaje de avión de ida + tu boleto de regreso reservado en sistema para Migraciones + tu reserva de hotel + tu seguro médico de 30.000€ + tu check-in hecho 24h antes.",
      },
      {
        q: "¿Cuáles son los 4 precios según la fecha de viaje?",
        a: "Contamos con 4 planes oficiales: Plan Promo $699 USD (fines de Feb, Mar, Abr y May — separa con $350), Plan Smart $799 USD (Oct, Nov, Jun y Sep — separa con $400), Plan Plus $899 USD (salidas cercanas Ene/1ra quincena Feb o vuelos con conexión — separa con $450) y Plan Full $999 USD (temporada alta Dic/Jul/Ago o con maleta grande de 23 kg en bodega — separa con $500).",
      },
    ],
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SCHEMA_ORGANIZACION_CITYLAND),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHub) }}
      />

      <Navbar />

      {/* HERO PRINCIPAL */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/destinos/madrid.webp"
            alt="Paquetes Migratorios a España, Italia y Francia desde Perú"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex flex-wrap items-center gap-2 bg-amber-400/15 border border-amber-400/35 px-4 py-1.5 rounded-full text-xs font-extrabold text-amber-300 mb-5">
              <span>🇪🇸 España · 🇮🇹 Italia · 🇫🇷 Francia · 🇪🇺 Toda Europa</span>
              <span>•</span>
              <span>Agencia Peruana RUC 20614914239</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-5">
              Paquetes Migratorios a Europa desde{" "}
              <span className="text-amber-400">$699 USD</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed mb-6">
              Viaja tranquilo y con todos tus papeles en regla desde Lima y provincias. Incluye tu{" "}
              <strong className="text-white">pasaje de avión de ida</strong> + tu{" "}
              <strong className="text-amber-300">
                boleto de regreso reservado para Migraciones
              </strong>{" "}
              + <strong className="text-white">reserva de hotel</strong> +{" "}
              <strong className="text-white">seguro médico 30.000€</strong> +{" "}
              <strong className="text-white">check-in y preparación paso a paso</strong>.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={buildWhatsAppHref(msgHero)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-7 py-4 rounded-2xl text-sm sm:text-base shadow-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Cotizar Paquete desde $699 (Separa con $350)
              </a>
              <Link
                href="/espana"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-5 py-4 rounded-2xl text-sm transition-all"
              >
                🇪🇸 Ver España
              </Link>
              <Link
                href="/italia"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-5 py-4 rounded-2xl text-sm transition-all"
              >
                🇮🇹 Ver Italia
              </Link>
              <Link
                href="/francia"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-5 py-4 rounded-2xl text-sm transition-all"
              >
                🇫🇷 Ver Francia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLICACIÓN EN SENCILLO PERUANO: ¿ES IDA Y VUELTA O ME ESTÁN ENGAÑANDO? */}
      <section className="py-12 sm:py-16 bg-amber-50/70 border-b border-amber-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-lg">
            <div className="max-w-3xl mb-8">
              <span className="inline-block bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Hablemos claro y sin rodeos
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                ¿El Paquete Migratorio es ida y vuelta? Así funciona para que ahorres más de $800 USD
              </h2>
              <p className="text-slate-700 text-sm sm:text-base mt-3 leading-relaxed">
                Mucha gente nos pregunta: <em>«¿Por qué cuesta desde $699 si en otras agencias me cobran $1,500 o $1,800?»</em>. La respuesta es súper sencilla:
              </p>
              <p className="text-slate-800 text-sm sm:text-base mt-3 leading-relaxed font-medium bg-amber-50 p-4 rounded-2xl border border-amber-200">
                Si tú viajas a España, Italia o Francia para <strong>quedarte a trabajar, estudiar o reunirte con tu familia</strong>, no tiene sentido que pagues $1,500 por un avión de regreso al que <strong>no te vas a subir</strong>. Pero como en el Aeropuerto Jorge Chávez y en Migraciones de Europa <strong>sí te exigen mostrar tu boleto de regreso</strong> para dejarte subir al avión, nosotros armamos tu <strong>Paquete Migratorio Completo</strong> con los 5 documentos que te piden en el aeropuerto:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center mb-3">
                  1
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-1">
                  Tu pasaje de avión de ida
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Boleto oficial emitido a tu nombre para volar desde Lima a tu destino en Europa.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center mb-3">
                  2
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-1">
                  Tu boleto de regreso para Migraciones
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reserva oficial activa en sistema el día de tu viaje para que presentes tu ida y vuelta en el aeropuerto sin gastar el doble.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center mb-3">
                  3
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-1">
                  Tu reserva de hotel confirmada
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Alojamiento verificable por los días declarados (o cuadramos todo con las fechas de tu Carta de Invitación).
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center mb-3">
                  4
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-1">
                  Tu seguro médico obligatorio
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Póliza europea Schengen de 30.000 € sin deducible ni copago, obligatoria para ingresar a Europa.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center mb-3">
                  5
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-1">
                  Check-in y preparación 1 a 1
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hacemos tu check-in 24h antes, te entregamos tu carpeta impresa/PDF y te explicamos cómo responder en Migraciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORIO INTERACTIVO DE LAS 1,000 SUPER-LANDINGS + 4 PLANES */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <BuscadorPaquetesMigratoriosClient items={resumenItems} />
        </div>
      </section>

      {/* PLANIFICADOR Y CALCULADORA BOE */}
      <ModuloSeguridadYCalculadoraEuropa
        destinoInicial="Madrid (España)"
        refWebRuta="/paquetes-migratorios"
      />

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
