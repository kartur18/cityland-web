import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import { buildWhatsAppHref } from "@/components/constantes";
import {
  URL_BASE_SEO,
  SCHEMA_ORGANIZACION_CITYLAND,
  construirSchemaLandingSEO,
} from "@/lib/seo-arquitectura";

export const metadata: Metadata = {
  title:
    "Paquetes Migratorios a Francia 2026 (París, Lyon, Marsella, Niza) desde $699 USD | Cityland Travel",
  description:
    "Viaja desde Perú a París, Lyon, Marsella, Niza y Toulouse con nuestro Paquete Migratorio desde $699 USD. Incluye pasaje de ida + boleto de regreso reservado para Migraciones + hotel + seguro Schengen 30.000€ + check-in 24h antes.",
  alternates: {
    canonical: `${URL_BASE_SEO}/francia`,
  },
};

const PLANES_FRANCIA = [
  {
    id: "promo-699",
    nombre: "Plan Promo",
    temporada: "Fines de Febrero · Marzo · Abril · Mayo",
    precio: 699,
    separaCon: 350,
    tag: "Temporada Promo",
    tagColor: "bg-emerald-600 text-white",
    destacado: false,
    detalle: "Ideal si programas tu viaje a París o Francia con anticipación.",
    waTexto: "Elegir Plan Promo",
  },
  {
    id: "smart-799",
    nombre: "Plan Smart",
    temporada: "Junio · Septiembre · Octubre · Noviembre",
    precio: 799,
    separaCon: 400,
    tag: "⭐ El Más Pedido",
    tagColor: "bg-amber-400 text-slate-950",
    destacado: true,
    detalle: "Incluye guía Attestation d'accueil y preparación 1 a 1 para tu escala.",
    waTexto: "Elegir Plan Smart",
  },
  {
    id: "plus-899",
    nombre: "Plan Plus",
    temporada: "Enero · 1ra Quincena Feb · Conexiones",
    precio: 899,
    separaCon: 450,
    tag: "Salidas Cercanas",
    tagColor: "bg-blue-600 text-white",
    destacado: false,
    detalle: "Para salidas cercanas o conexión a Lyon, Marsella, Niza o Toulouse.",
    waTexto: "Elegir Plan Plus",
  },
  {
    id: "full-999",
    nombre: "Plan Full 23 kg",
    temporada: "Diciembre · Julio · Agosto · Bodega 23 kg",
    precio: 999,
    separaCon: 500,
    tag: "Alta + Maleta 23 kg",
    tagColor: "bg-red-600 text-white",
    destacado: false,
    detalle: "Temporada alta o incluye maleta grande de 23 kg en bodega.",
    waTexto: "Elegir Plan Full",
  },
];

const CIUDADES_FRANCIA = [
  {
    ciudad: "París",
    aeropuerto: "Charles de Gaulle (CDG) / Orly (ORY)",
    aerolineas: "Air France, KLM, Iberia y Air Europa",
    descripcion: "Principal puerta de entrada a Francia con trenes TGV directos a todo el país.",
    slugLanding: "paquete-migratorio-paris-desde-699",
  },
  {
    ciudad: "Lyon",
    aeropuerto: "Lyon-Saint Exupéry (LYS)",
    aerolineas: "Iberia, Air France y KLM",
    descripcion: "Segundo polo económico de Francia con amplia demanda en servicios y gastronomía.",
    slugLanding: "paquete-migratorio-lyon-desde-699",
  },
  {
    ciudad: "Marsella",
    aeropuerto: "Marsella-Provenza (MRS)",
    aerolineas: "Iberia y Air France",
    descripcion: "Principal puerto del Mediterráneo francés con clima cálido todo el año.",
    slugLanding: "paquete-migratorio-marsella-desde-699",
  },
  {
    ciudad: "Niza",
    aeropuerto: "Niza Costa Azul (NCE)",
    aerolineas: "Iberia, Air France y KLM",
    descripcion: "Capital de la Costa Azul con alta actividad en hotelería y turismo.",
    slugLanding: "paquete-migratorio-niza-desde-699",
  },
  {
    ciudad: "Toulouse",
    aeropuerto: "Toulouse-Blagnac (TLS)",
    aerolineas: "Iberia y Air France",
    descripcion: "Ciudad del suroeste francés muy cercana a España y de gran calidad de vida.",
    slugLanding: "paquete-migratorio-toulouse-desde-699",
  },
];

export default function FranciaPage() {
  const msgHero =
    "¡Hola! Quiero más información del paquete migratorio a Francia (París / Lyon / Marsella) desde $699.\n📍 Ref Web: citylandtravel.com/francia [Hero Principal]";

  const schemaFrancia = construirSchemaLandingSEO({
    url: `${URL_BASE_SEO}/francia`,
    titulo:
      "Paquetes Migratorios a Francia (París, Lyon, Marsella, Niza, Toulouse) desde $699 USD",
    descripcion:
      "Viaja desde Perú a Francia con tus 5 documentos en regla: pasaje de avión de ida, boleto de regreso reservado para Migraciones, reserva de hotel, seguro Schengen 30.000€ y check-in 24h antes.",
    precioDesdeUSD: 699,
    cantidadOfertas: 4,
    destinoOPais: "Francia",
    imagenUrl: `${URL_BASE_SEO}/images/destinos/paris.webp`,
    migas: [
      { nombre: "Inicio", url: URL_BASE_SEO },
      {
        nombre: "Paquetes Migratorios",
        url: `${URL_BASE_SEO}/paquetes-migratorios`,
      },
      { nombre: "Francia", url: `${URL_BASE_SEO}/francia` },
    ],
    faqs: [
      {
        q: "¿Qué documentos piden a los peruanos para entrar a Francia?",
        a: "Te solicitan: 1) Pasaporte peruano vigente, 2) Pasaje de ida + boleto de regreso dentro de los 90 días, 3) Reserva de hotel confirmada o Attestation d'accueil tramitada en la alcaldía francesa por tu familiar, y 4) Seguro médico Schengen de 30.000€.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFrancia) }}
      />

      <Navbar />

      {/* 1. HERO SIMÉTRICO FRANCIA */}
      <section className="bg-gradient-to-br from-[#09152b] via-[#13254a] to-[#0a1628] text-white pt-10 pb-14 sm:pt-14 sm:pb-18 border-b-4 border-sky-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 bg-sky-400/15 border border-sky-400/35 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-sky-200 mb-5">
                <FlagIcon pais="Francia" className="w-4 h-3" />
                <span>Especialistas en Ruta Lima → París, Lyon, Marsella y Niza</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-4">
                Paquete Migratorio a{" "}
                <span className="text-amber-400">Francia desde $699 USD</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-7">
                Viaja a París, Lyon, Marsella, Niza o Toulouse con todos los documentos que piden en Lima y al ingresar a Francia, sin gastar el doble en un regreso cerrado. Separa hoy con el{" "}
                <strong className="text-white">50% de inicial</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
                <a
                  href={buildWhatsAppHref(msgHero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold px-7 py-4 rounded-2xl text-sm sm:text-base shadow-xl whitespace-nowrap transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Cotizar por WhatsApp</span>
                </a>
                <a
                  href="#tarifas-francia"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-4 rounded-2xl text-sm sm:text-base whitespace-nowrap transition-all"
                >
                  <span>Ver los 4 planes por fecha ↓</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-4 border-t border-white/15">
                <span>✓ Agencia Formal RUC 20614914239</span>
                <span>✓ Oficina en Av. Antúnez de Mayolo 814, Los Olivos</span>
              </div>
            </div>

            {/* Derecha: Foto de París + 5 Documentos */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative h-48 sm:h-52 w-full bg-slate-900">
                  <Image
                    src="/images/destinos/paris.webp"
                    alt="París, Francia — Paquete Migratorio"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-black/45 px-3 py-1 rounded-full">
                      <FlagIcon pais="Francia" className="w-4 h-3" />
                      París (CDG / Orly) · Lyon · Marsella
                    </span>
                    <span className="bg-sky-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full">
                      Carpeta Completa
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h2 className="text-base sm:text-lg font-black text-[#0a1628] mb-3">
                    ¿Qué incluye tu Paquete Migratorio a Francia?
                  </h2>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {[
                      "1. Pasaje de avión de ida emitido desde Lima hacia París o tu ciudad en Francia.",
                      "2. Boleto de regreso reservado en sistema para presentar en Migraciones.",
                      "3. Reserva de hotel confirmada en Francia (o cuadre con tu Attestation d'accueil).",
                      "4. Seguro médico Schengen de 30.000€ sin deducible.",
                      "5. Check-in hecho 24h antes y guía paso a paso para tu escala o llegada.",
                    ].map((punto) => (
                      <div
                        key={punto}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 font-medium text-slate-700"
                      >
                        <span className="text-emerald-600 font-black">✓</span>
                        <span>{punto}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOS 4 PLANES OFICIALES FRANCIA */}
      <section id="tarifas-francia" className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 block mb-1.5">
              Tarifas Oficiales según Temporada
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0a1628] tracking-tight">
              Elige tu Plan a Francia según tu Fecha
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Separa hoy con el 50% y completa el pago en cuotas antes de tu vuelo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PLANES_FRANCIA.map((plan) => {
              const msg = `¡Hola! Quiero más información del ${plan.nombre} a Francia desde $${plan.precio}.\n📍 Ref Web: citylandtravel.com/francia [${plan.nombre} $${plan.precio}]`;
              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-6 flex flex-col justify-between h-full transition-shadow hover:shadow-lg ${
                    plan.destacado
                      ? "bg-white border-2 border-amber-400 shadow-md"
                      : "bg-slate-50/70 border border-slate-200 shadow-xs"
                  }`}
                >
                  <div>
                    <span
                      className={`inline-block text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-3 ${plan.tagColor}`}
                    >
                      {plan.tag}
                    </span>
                    <h3 className="text-xl font-black text-[#0a1628]">
                      {plan.nombre}
                    </h3>
                    <p className="text-xs font-semibold text-sky-700 mt-1 min-h-[34px] flex items-center">
                      📅 {plan.temporada}
                    </p>

                    <div className="my-4 p-3.5 rounded-2xl bg-white border border-slate-200">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-slate-500">Desde</span>
                        <span className="text-3xl font-black text-[#0a1628]">
                          ${plan.precio}
                        </span>
                        <span className="text-xs font-bold text-slate-500">USD</span>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700 block mt-1">
                        ✓ Separa con el 50% (${plan.separaCon} USD)
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {plan.detalle}
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppHref(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-xs sm:text-sm whitespace-nowrap transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{plan.waTexto}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DESTINOS PRINCIPALES EN FRANCIA */}
      <section className="py-14 sm:py-18 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Ciudades de Destino en Francia
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Vuelos con Air France, KLM, Iberia y Air Europa saliendo desde Lima.
              </p>
            </div>
            <Link
              href="/paquetes-migratorios"
              className="text-xs font-extrabold text-sky-700 hover:underline"
            >
              Ver catálogo completo de Europa →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CIUDADES_FRANCIA.map((c) => {
              const msgCiudad = `¡Hola! Quiero más información del paquete migratorio a ${c.ciudad}, Francia desde $699.\n📍 Ref Web: citylandtravel.com/francia [Ciudad ${c.ciudad}]`;
              return (
                <div
                  key={c.ciudad}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
                >
                  <div>
                    <span className="text-xs font-bold text-sky-700 block mb-1">
                      ✈️ {c.aeropuerto}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mb-2">
                      Lima → {c.ciudad}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {c.descripcion}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-500 mb-5">
                      Aerolíneas: {c.aerolineas}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <Link
                      href={`/paquetes-migratorios/${c.slugLanding}`}
                      className="flex-1 text-center py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold whitespace-nowrap"
                    >
                      Ver Paquete
                    </Link>
                    <a
                      href={buildWhatsAppHref(msgCiudad)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-extrabold whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
