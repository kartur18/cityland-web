import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
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
    "Viaja seguro desde Perú a Madrid, Barcelona, Milán, Roma, París y toda Europa desde $699 USD. Incluye pasaje de ida + boleto de regreso reservado para Migraciones + hotel + seguro 30.000€ + check-in 24h antes.",
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
      "Pasaje de ida + boleto de regreso reservado para Migraciones + reserva de hotel + seguro Schengen 30.000€ + check-in 24h antes. Separa con el 50%.",
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

export default function PaquetesMigratoriosHubPage() {
  const resumenItems: ItemResumenSuperLanding[] =
    INDICE_PAQUETES_MIGRATORIOS_1000.map((item) => ({
      slug: item.slug,
      siloId: item.silo,
      siloNombre: item.siloNombre,
      paisDestino: item.pais,
      ciudadDestino: item.ciudadDestino,
      banderaPais: item.pais,
      intencionNombre: item.siloNombre,
      h1Principal: item.titulo,
      subtituloDorado: item.subtitulo,
      imagenHero: item.imagenHero,
      aerolineaSugerida: "Iberia · Air Europa · KLM · Air France · LATAM",
      aeropuertoLlegada: `${item.ciudadDestino}, ${item.pais}`,
      precioDesdeUSD: item.precioPromo,
    }));

  const msgHero =
    "¡Hola! Quiero más información del paquete migratorio a Europa desde $699.\n📍 Ref Web: citylandtravel.com/paquetes-migratorios [Hub Principal]";

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
        q: "¿Qué incluye el Paquete Migratorio a Europa?",
        a: "Incluye los 5 documentos que te piden en el aeropuerto: 1) Pasaje de avión de ida emitido, 2) Boleto de regreso reservado en sistema para Migraciones, 3) Reserva de hotel confirmada, 4) Seguro médico de 30.000€ y 5) Check-in hecho 24h antes.",
      },
      {
        q: "¿Cuáles son los planes según la fecha de viaje?",
        a: "Contamos con 4 planes oficiales según temporada: Plan Promo ($699 USD), Plan Smart ($799 USD), Plan Plus ($899 USD) y Plan Full con maleta de 23 kg ($999 USD). Todos se separan con el 50%.",
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

      {/* HERO LIMPIO Y ORDENADO (SIN CAJAS METIDAS DENTRO DE CAJAS) */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-18 bg-[#0a1628] text-white overflow-hidden border-b-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex flex-wrap items-center gap-2 bg-amber-400/15 border border-amber-400/35 px-4 py-1.5 rounded-full text-xs font-extrabold text-amber-300 mb-5">
                <span className="inline-flex items-center gap-1.5">
                  <FlagIcon pais="España" className="w-3.5 h-2.5" />
                  <span>España</span>
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <FlagIcon pais="Italia" className="w-3.5 h-2.5" />
                  <span>Italia</span>
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <FlagIcon pais="Francia" className="w-3.5 h-2.5" />
                  <span>Francia</span>
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <FlagIcon pais="Europa" className="w-3.5 h-2.5" />
                  <span>Europa</span>
                </span>
                <span>•</span>
                <span>RUC 20614914239</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-4">
                Paquetes Migratorios a Europa{" "}
                <span className="text-amber-400">desde $699 USD</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-7">
                Viaja tranquilo desde Lima y provincias con toda tu carpeta lista para el aeropuerto y Migraciones, sin pagar el doble por un retorno cerrado que no vas a utilizar. Separa tu cupo con el{" "}
                <strong className="text-white">50% de inicial</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href={buildWhatsAppHref(msgHero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold px-6 py-4 rounded-2xl text-sm sm:text-base shadow-xl whitespace-nowrap transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Cotizar por WhatsApp</span>
                </a>
                <Link
                  href="/espana"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-5 py-4 rounded-2xl text-sm whitespace-nowrap transition-all"
                >
                  <FlagIcon pais="España" className="w-4 h-3" />
                  <span>España</span>
                </Link>
                <Link
                  href="/italia"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-5 py-4 rounded-2xl text-sm whitespace-nowrap transition-all"
                >
                  <FlagIcon pais="Italia" className="w-4 h-3" />
                  <span>Italia</span>
                </Link>
                <Link
                  href="/francia"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-5 py-4 rounded-2xl text-sm whitespace-nowrap transition-all"
                >
                  <FlagIcon pais="Francia" className="w-4 h-3" />
                  <span>Francia</span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-4 border-t border-white/15">
                <span>✓ Agencia Formal RUC 20614914239</span>
                <span>✓ Oficina en Av. Antúnez de Mayolo 814, Los Olivos</span>
              </div>
            </div>

            {/* Derecha: Foto limpia + Los 5 documentos sin cajas anidadas */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative h-56 sm:h-64 w-full bg-slate-900">
                  <Image
                    src="/images/destinos/madrid.webp"
                    alt="Madrid, Milán y París — Paquetes Migratorios a Europa"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-black/55 px-3 py-1 rounded-full">
                      <FlagIcon pais="España" className="w-3.5 h-2.5" />
                      <span>Madrid</span>
                      <span>·</span>
                      <FlagIcon pais="Italia" className="w-3.5 h-2.5" />
                      <span>Milán</span>
                      <span>·</span>
                      <FlagIcon pais="Francia" className="w-3.5 h-2.5" />
                      <span>París</span>
                    </span>
                    <span className="bg-amber-400 text-slate-950 text-[11px] font-black uppercase px-3 py-1 rounded-full">
                      Carpeta Completa
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h2 className="text-sm sm:text-base font-black text-[#0a1628] mb-3">
                    Los 5 documentos incluidos en tu paquete:
                  </h2>
                  <ul className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                    <li className="py-2 flex items-center gap-2.5">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        <strong>1. Pasaje de avión de ida</strong> emitido a tu nombre.
                      </span>
                    </li>
                    <li className="py-2 flex items-center gap-2.5">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        <strong>2. Boleto de regreso reservado</strong> en sistema para Migraciones.
                      </span>
                    </li>
                    <li className="py-2 flex items-center gap-2.5">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        <strong>3. Reserva de hotel confirmada</strong> (o cuadre con Carta de Invitación).
                      </span>
                    </li>
                    <li className="py-2 flex items-center gap-2.5">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        <strong>4. Seguro médico Schengen de 30.000€</strong> sin deducible.
                      </span>
                    </li>
                    <li className="pt-2 flex items-center gap-2.5">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        <strong>5. Check-in 24h antes</strong> y preparación 1 a 1 para tu viaje.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES Y BUSCADOR DE LAS 1,000 RUTAS */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <BuscadorPaquetesMigratoriosClient items={resumenItems} />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
