import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import NotaPrecio from "@/components/NotaPrecio";
import {
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
} from "@/lib/seo-arquitectura";

const rawTitle =
  "Paquetes Migratorios a Italia (Milán, Roma, Turín, Florencia) Desde $699 USD | Cityland Travel";
const rawDesc =
  "Paquetes migratorios a Milán, Roma, Turín, Florencia y Bolonia desde Lima: pasaje de ida + boleto de regreso reservado para Migraciones + hotel o Lettera di Invito + Seguro 30.000€ + check-in.";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO(rawTitle),
  description: optimizarMetaDescriptionSEO(rawDesc),
  alternates: {
    canonical: "https://citylandtravel.com/italia",
  },
};

function waItalia(mensaje: string, seccion: string): string {
  const full = `${mensaje}\n\n📍 Ref Web: citylandtravel.com/italia [${seccion}]`;
  return `https://wa.me/51944103890?text=${encodeURIComponent(full)}`;
}

const PLANES_ITALIA = [
  {
    id: "promo-699",
    nombre: "Plan Promo",
    temporada: "Fines de Febrero · Marzo · Abril · Mayo",
    precio: 699,
    separaCon: 350,
    tag: "Temporada Promo",
    tagColor: "bg-emerald-600 text-white",
    destacado: false,
    img: "/images/destinos/roma.jpg",
    lugar: "Roma · Milán",
    detalle: "Ideal si programas tu viaje con anticipación a Italia.",
    waTexto: "Elegir Plan Promo",
    waMsg: "¡Hola! Quiero más información del paquete migratorio a Italia desde $699.",
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
    img: "/images/destinos/milan.webp",
    lugar: "Milán · Roma · Turín",
    detalle: "Incluye formato de Lettera di Invito / Ospitalità 48h y asesoría VIP.",
    waTexto: "Elegir Plan Smart",
    waMsg: "¡Hola! Quiero más información del paquete Smart a Italia desde $799.",
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
    img: "/images/destinos/florencia.jpg",
    lugar: "Turín · Florencia · Bolonia · Génova",
    detalle: "Para salidas próximas o conexión hasta tu ciudad final en Italia.",
    waTexto: "Elegir Plan Plus",
    waMsg: "¡Hola! Quiero más información del paquete Plus a Italia desde $899.",
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
    img: "/images/destinos/venecia.jpg",
    lugar: "Toda Italia · Temporada Alta",
    detalle: "Incluye maleta grande de 23 kg en bodega despachada hasta destino final.",
    waTexto: "Elegir Plan Full",
    waMsg: "¡Hola! Quiero más información del paquete Full a Italia con maleta de 23 kg desde $999.",
  },
];

const CIUDADES_ITALIA = [
  {
    ciudad: "Milán",
    region: "Lombardía · Principal comunidad peruana en Italia",
    iata: "MXP / LIN",
    aerolineas: "KLM, Air France, Iberia, Air Europa y LATAM",
    img: "/images/destinos/milan.webp",
    ventaja: "Llegada a Milán-Malpensa (MXP) o Milán-Linate (LIN, a 15 minutos del centro).",
    href: "/paquetes-migratorios/paquete-migratorio-milan-desde-699",
  },
  {
    ciudad: "Roma",
    region: "Lazio · Capital de Italia",
    iata: "FCO",
    aerolineas: "Iberia, Air Europa, KLM, Air France y LATAM",
    img: "/images/destinos/roma.jpg",
    ventaja: "Conexiones de 1 sola escala hacia Roma-Fiumicino (FCO) con tren directo a Roma Termini.",
    href: "/paquetes-migratorios/paquete-migratorio-roma-desde-699",
  },
  {
    ciudad: "Turín",
    region: "Piamonte · Norte de Italia",
    iata: "TRN",
    aerolineas: "KLM, Air France e Iberia",
    img: "/images/destinos/turin.jpg",
    ventaja: "Aterriza directo en Turín-Caselle (TRN) con tu equipaje conectado desde Lima.",
    href: "/paquetes-migratorios/paquete-migratorio-turin-desde-699",
  },
  {
    ciudad: "Florencia",
    region: "Toscana · Florencia, Prato y Pisa",
    iata: "FLR",
    aerolineas: "KLM, Air France e Iberia",
    img: "/images/destinos/florencia.jpg",
    ventaja: "Conexión directa al aeropuerto Amerigo Vespucci (FLR) para residentes en Toscana.",
    href: "/paquetes-migratorios/paquete-migratorio-florencia-desde-699",
  },
  {
    ciudad: "Bolonia",
    region: "Emilia-Romaña · Bolonia, Módena y Parma",
    iata: "BLQ",
    aerolineas: "Iberia, KLM y Air France",
    img: "/images/destinos/bolonia.jpg",
    ventaja: "Conexión rápida en 7 minutos desde el aeropuerto (BLQ) hasta Bologna Centrale.",
    href: "/paquetes-migratorios/paquete-migratorio-bolonia-desde-699",
  },
  {
    ciudad: "Génova",
    region: "Liguria · Génova y La Spezia",
    iata: "GOA",
    aerolineas: "KLM, Air France e Iberia",
    img: "/images/destinos/genova.jpg",
    ventaja: "Llegada al Aeropuerto Cristoforo Colombo (GOA), histórico punto peruano en Liguria.",
    href: "/paquetes-migratorios/paquete-migratorio-genova-desde-699",
  },
];

const FAQS_ITALIA = [
  {
    q: "¿Qué incluye el Paquete Migratorio a Italia?",
    a: "Incluye los 5 documentos que te piden en Lima y al ingresar a Europa: 1) Pasaje de avión de ida emitido, 2) Boleto de regreso reservado en sistema para Migraciones, 3) Reserva de hotel confirmada o cuadre con tu Lettera di Invito, 4) Seguro médico Schengen de 30.000€ y 5) Check-in hecho 24h antes.",
  },
  {
    q: "¿Cómo funciona la Lettera di Invito y la declaración de 48 horas en Italia?",
    a: "Si te alojas con un familiar residente en Italia, él firma el formato de Lettera di Invito / Dichiarazione di Alloggio adjuntando su Permesso di Soggiorno. Una vez que llegas a Italia, tu familiar tiene 48 horas para registrar tu presencia (Dichiarazione di Ospitalità) en la Questura o Comisaría local.",
  },
  {
    q: "¿Cuánto dinero de bolsa de viaje piden al viajar a Italia?",
    a: "Recuerda que pasas Migraciones en tu primer aeropuerto europeo de escala. Si vuelas vía Madrid (Iberia/Air Europa/LATAM), aplica la tabla de España (mínimo 1.098,90 €). Si vuelas vía Ámsterdam o París (KLM/Air France), aplica la tabla de Italia (aprox. 45 €/día). Recomendamos llevar entre 900 € y 1.100 €.",
  },
  {
    q: "¿También emiten pasajes para quienes tienen Nulla Osta / Decreto Flussi o Visado D?",
    a: "Sí. Si ya tienes tu Visado Nacional Tipo D estampado por la Embajada de Italia en Lima o Permesso di Soggiorno vigente, emitimos tu pasaje con tarifas especiales de 1 o 2 maletas de 23 kg en bodega.",
  },
];

export default function ItaliaLandingPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      <Navbar />

      {/* 1. HERO SIMÉTRICO Y LIMPIO (SIN CAJAS ANIDADAS) */}
      <section className="bg-gradient-to-br from-[#071a14] via-[#0c2920] to-[#0a1628] text-white pt-10 pb-14 sm:pt-14 sm:pb-18 border-b-4 border-emerald-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 bg-emerald-400/15 border border-emerald-400/35 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-emerald-200 mb-5">
                <FlagIcon pais="Italia" className="w-4 h-3" />
                <span>Especialistas en Ruta Lima → Milán, Roma y Turín</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-4">
                Paquete Migratorio a{" "}
                <span className="text-emerald-400">Italia desde $699 USD</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-7">
                Viaja a Milán, Roma, Turín, Florencia o Bolonia con tus 5 documentos en regla para el aeropuerto y Migraciones, sin gastar el doble en un regreso cerrado. Separa hoy tu cupo con el{" "}
                <strong className="text-white">50% de inicial</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
                <a
                  href={waItalia(
                    "¡Hola! Quiero más información del paquete migratorio a Italia (Milán / Roma / Turín) desde $699.",
                    "Hero Principal"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb858] text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-extrabold shadow-lg whitespace-nowrap cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Cotizar por WhatsApp</span>
                </a>
                <a
                  href="#tarifas-italia"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-6 py-4 rounded-2xl text-sm sm:text-base font-bold whitespace-nowrap transition-all cursor-pointer"
                >
                  <span>Ver los 4 planes por fecha ↓</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-4 border-t border-white/15">
                <span>✓ Agencia Formal RUC 20614914239</span>
                <span>✓ Oficina en Av. Antúnez de Mayolo 814, Los Olivos</span>
              </div>
            </div>

            {/* Derecha: Foto limpia + 5 Documentos sin cajas anidadas */}
            <div className="lg:col-span-6">
              <div className="bg-white text-[#0a1628] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative h-56 sm:h-64 w-full bg-slate-900">
                  <Image
                    src="/images/destinos/milan.webp"
                    alt="Milán y Roma — Paquetes Migratorios a Italia"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-black/45 px-3 py-1 rounded-full">
                      <FlagIcon pais="Italia" className="w-4 h-3" />
                      Milán · Roma · Turín · Florencia
                    </span>
                    <span className="bg-emerald-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full">
                      Carpeta Completa
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h2 className="text-sm sm:text-base font-black text-[#0a1628] mb-3">
                    Los 5 documentos incluidos en tu paquete a Italia:
                  </h2>
                  <ul className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                    <li className="py-2 flex items-center gap-2.5">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        <strong>1. Pasaje de avión de ida</strong> emitido desde Lima hasta tu ciudad en Italia.
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
                        <strong>3. Reserva de hotel confirmada</strong> o formato Lettera di Invito / Ospitalità 48h.
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
                        <strong>5. Check-in hecho 24h antes</strong> y asesoría según tu escala.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOS 4 PLANES OFICIALES A ITALIA (FOTOS REALES DISTINTAS Y SIN CAJAS INTERNAS) */}
      <section id="tarifas-italia" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1.5">
              Tarifas Oficiales según Temporada
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0a1628] tracking-tight">
              Elige tu Plan a Italia según tu Fecha
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Separa cualquiera de los 4 planes con el 50% y paga el resto en cuotas antes de tu vuelo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PLANES_ITALIA.map((p) => (
              <article
                key={p.id}
                className={`bg-white rounded-3xl overflow-hidden flex flex-col justify-between h-full transition-shadow hover:shadow-lg ${
                  p.destacado
                    ? "border-2 border-amber-400 shadow-md"
                    : "border border-slate-200 shadow-xs"
                }`}
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={p.img}
                      alt={`${p.nombre} a Italia`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full ${p.tagColor}`}
                      >
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      {p.lugar}
                    </span>
                    <h3 className="text-xl font-black text-[#0a1628] mt-0.5">
                      {p.nombre}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-1 min-h-[34px] flex items-center">
                      📅 {p.temporada}
                    </p>

                    <div className="my-4 py-3.5 border-y border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-slate-500">Desde</span>
                        <span className="text-3xl font-black text-[#0a1628]">
                          ${p.precio}
                        </span>
                        <span className="text-xs font-bold text-slate-500">USD</span>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700 block mt-1">
                        ✓ Separa con el 50% (desde ${p.separaCon} USD)
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed min-h-[36px]">
                      {p.detalle}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <a
                    href={waItalia(p.waMsg, p.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb858] text-white py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-colors"
                  >
                    <WhatsAppIcon size={16} />
                    <span>{p.waTexto}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <NotaPrecio className="mt-6 text-center" />
        </div>
      </section>

      {/* 3. LAS 6 CIUDADES PRINCIPALES DE ITALIA (CADA UNA CON SU FOTO REAL ÚNICA) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1.5">
              Equipaje Conectado hasta tu Destino Final
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628]">
              Principales Destinos en Italia desde Lima
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {CIUDADES_ITALIA.map((c) => (
              <div
                key={c.ciudad}
                className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-2xs hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-100">
                    <Image
                      src={c.img}
                      alt={`Paquete a ${c.ciudad}, Italia`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#0a1628] text-[11px] font-extrabold px-2.5 py-1 rounded-full">
                        <FlagIcon pais="Italia" className="w-3.5 h-2.5" />
                        LIM ✈️ {c.iata}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase text-emerald-700 block">
                      {c.region}
                    </span>
                    <h3 className="text-xl font-black text-[#0a1628] mt-0.5 mb-2">
                      Lima → {c.ciudad}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {c.ventaja}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-500">
                      Aerolíneas: {c.aerolineas}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={c.href}
                    className="text-xs font-extrabold text-slate-700 hover:text-emerald-700 underline"
                  >
                    Ver ruta a {c.ciudad} →
                  </Link>
                  <a
                    href={waItalia(
                      `¡Hola! Quiero más información del paquete migratorio a ${c.ciudad} desde $699.`,
                      `Ciudad ${c.ciudad}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1fb858] text-white px-4 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap"
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

      {/* 4. PREGUNTAS FRECUENTES ITALIA */}
      <section className="py-14 sm:py-18 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] text-center mb-8">
            Preguntas Frecuentes sobre el Paquete a Italia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS_ITALIA.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-2">
                  {f.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
