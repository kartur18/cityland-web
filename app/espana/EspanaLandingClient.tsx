"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";

export const PAQUETES_ESPANA = [
  {
    id: "promo-699",
    nombre: "Plan Promo",
    temporada: "Fines de Febrero · Marzo · Abril · Mayo",
    precio: 699,
    separaCon: 350,
    tag: "Temporada Promo",
    tagColor: "bg-emerald-600 text-white",
    destacado: false,
    img: "/images/espana/palacio-real.jpg",
    lugar: "Madrid · Barcelona · Valencia",
    beneficioExtra: "Ideal si programas tu viaje con anticipación",
    waTexto: "Elegir Plan Promo",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent(
      "¡Hola! Quiero más información del paquete a Madrid desde $699.\n\n📍 Ref Web: citylandtravel.com/espana [Plan Promo $699]"
    )}`,
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
    img: "/images/espana/gran-via-metropolis.jpg",
    lugar: "Madrid · Barcelona · Sevilla",
    beneficioExtra: "Incluye asesoría personalizada 1 a 1 para Barajas",
    waTexto: "Elegir Plan Smart",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent(
      "¡Hola! Quiero más información del paquete Smart a Madrid desde $799.\n\n📍 Ref Web: citylandtravel.com/espana [Plan Smart $799]"
    )}`,
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
    img: "/images/espana/cibeles.jpg",
    lugar: "Madrid + Conexión en España",
    beneficioExtra: "Para viajar pronto o conectar a otra ciudad española",
    waTexto: "Elegir Plan Plus",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent(
      "¡Hola! Quiero más información del paquete Plus a España desde $899.\n\n📍 Ref Web: citylandtravel.com/espana [Plan Plus $899]"
    )}`,
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
    img: "/images/espana/puerta-de-alcala.jpg",
    lugar: "Toda España · Temporada Alta",
    beneficioExtra: "Incluye maleta grande de 23 kg en bodega + 10 kg mano",
    waTexto: "Elegir Plan Full",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent(
      "¡Hola! Quiero más información del paquete Full a España con maleta de 23 kg desde $999.\n\n📍 Ref Web: citylandtravel.com/espana [Plan Full $999]"
    )}`,
  },
];

const DOCUMENTOS_CARPETA = [
  {
    numero: "01",
    titulo: "Pasaje de avión de ida emitido",
    detalle: "Boleto oficial a tu nombre desde Lima hacia Madrid, Barcelona o tu ciudad de destino.",
  },
  {
    numero: "02",
    titulo: "Boleto de regreso reservado para Migraciones",
    detalle: "Reserva activa en sistema el día de tu vuelo para acreditar tu retorno sin pagar el doble.",
  },
  {
    numero: "03",
    titulo: "Reserva de hotel confirmada (o cuadre con tu Carta)",
    detalle: "Alojamiento verificable por tus días de viaje o sincronizado con tu Carta de Invitación.",
  },
  {
    numero: "04",
    titulo: "Seguro médico Schengen de 30.000€",
    detalle: "Póliza internacional obligatoria con 0€ de deducible y cobertura médica completa.",
  },
  {
    numero: "05",
    titulo: "Check-in 24h antes y guía para el aeropuerto",
    detalle: "Entregamos tus pases de abordar listos y te explicamos paso a paso cómo pasar el control.",
  },
];

const FAQS_ESPANA = [
  {
    q: "¿Por qué conviene el Paquete Migratorio en vez de comprar un vuelo ida y vuelta tradicional?",
    a: "Si viajas a España para quedarte, trabajar o reencontrarte con tu familia, un pasaje redondo tradicional cuesta entre $1,500 y $1,800 USD y terminas perdiendo el tramo de vuelta. Con nuestro Paquete Migratorio viajas con tu pasaje de ida emitido y tu boleto de regreso reservado en sistema para cumplir con el requisito del aeropuerto y Migraciones, ahorrando más de $700 USD.",
  },
  {
    q: "¿De qué depende que me aplique el plan de $699, $799, $899 o $999?",
    a: "Depende únicamente de la fecha en que desees volar y si llevas maleta de bodega: el Plan Promo ($699) aplica de fines de febrero a mayo; el Plan Smart ($799) en junio, septiembre, octubre y noviembre; el Plan Plus ($899) para salidas cercanas o con conexión interna; y el Plan Full ($999) para temporada alta (diciembre, julio y agosto) o con maleta de 23 kg en bodega.",
  },
  {
    q: "¿Qué pasa si un familiar en España me envía Carta de Invitación?",
    a: "Si ya cuentas con Carta de Invitación Policial tramitada en España, no necesitas reserva de hotel. Nosotros cuadramos las fechas exactas de tu pasaje, tu boleto de regreso para Migraciones y tu seguro Schengen de 30.000€ con los días autorizados en tu Carta.",
  },
  {
    q: "¿Cómo puedo separar mi paquete y dónde queda la oficina?",
    a: "Puedes separar cualquiera de los 4 planes con el 50% y pagar el saldo en cuotas antes de tu viaje. Te atendemos en nuestra oficina de Av. Antúnez de Mayolo 814, Los Olivos (Lima) o 100% por WhatsApp con contrato formal y RUC 20614914239.",
  },
];

export default function EspanaLandingClient() {
  const [diasViaje, setDiasViaje] = useState(10);
  const montoBoe = Math.max(1098.9, Math.round(diasViaje * 122.1 * 100) / 100);

  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════════════
          1. HERO LIMPIO, ORDENADO Y SIN REPETICIONES
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-14 sm:pt-12 sm:pb-18 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Izquierda: Mensaje claro + 2 botones de 1 sola línea */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-5">
                <FlagIcon pais="España" className="w-4 h-3" />
                <span>Especialistas en Ruta Lima → Madrid y Barcelona</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] tracking-tight leading-[1.1] mb-4">
                Paquete Migratorio a{" "}
                <span className="text-red-600">España desde $699 USD</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7">
                Viaja tranquilo con toda tu carpeta lista para presentar en Lima y en Madrid-Barajas. No pagues el doble por un retorno que no vas a usar: armamos tu expediente completo y puedes separar tu cupo con el{" "}
                <strong className="text-[#0a1628]">50% de inicial</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent(
                    "¡Hola! Quiero más información del paquete a Madrid desde $699.\n\n📍 Ref Web: citylandtravel.com/espana [Hero Principal]"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb858] text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-extrabold shadow-md whitespace-nowrap cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Cotizar por WhatsApp</span>
                </a>

                <a
                  href="#tarifas"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all whitespace-nowrap cursor-pointer"
                >
                  <span>Ver los 4 planes por fecha ↓</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-600 pt-5 border-t border-slate-200">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-black">✓</span> Agencia Formal RUC 20614914239
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-black">✓</span> Oficina en Av. Antúnez de Mayolo 814, Los Olivos
                </span>
              </div>
            </div>

            {/* Derecha: Tarjeta Visual con los 5 Documentos Incluidos (Sin repetir precios ni botones) */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/espana/plaza-mayor.jpg"
                    alt="Plaza Mayor de Madrid España - Cityland Travel"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full">
                      <FlagIcon pais="España" className="w-3.5 h-2.5" />
                      Madrid · Barajas T4 / T1
                    </span>
                    <span className="bg-red-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                      Carpeta Completa
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h2 className="text-base sm:text-lg font-extrabold text-[#0a1628] mb-3.5">
                    ¿Qué incluye tu Paquete Migratorio a España?
                  </h2>
                  <div className="space-y-2.5">
                    {DOCUMENTOS_CARPETA.map((doc) => (
                      <div
                        key={doc.numero}
                        className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"
                      >
                        <span className="w-6 h-6 rounded-lg bg-red-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          {doc.numero}
                        </span>
                        <div>
                          <h3 className="text-xs sm:text-sm font-extrabold text-[#0a1628] leading-snug">
                            {doc.titulo}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {doc.detalle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          2. LOS 4 PLANES OFICIALES (SIMÉTRICOS, ALINEADOS Y SIN REPETIR DATOS)
         ═══════════════════════════════════════════════════════════════════════ */}
      <section id="tarifas" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
              Tarifas Oficiales según Temporada
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0a1628] tracking-tight">
              Elige tu Plan según tu Fecha de Viaje
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Todos los planes incluyen los 5 documentos de tu carpeta migratoria y facilidades de pago en cuotas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PAQUETES_ESPANA.map((p) => (
              <article
                key={p.id}
                className={`bg-white rounded-3xl overflow-hidden flex flex-col justify-between h-full transition-shadow hover:shadow-lg ${
                  p.destacado
                    ? "border-2 border-amber-400 shadow-md ring-2 ring-amber-400/20"
                    : "border border-slate-200 shadow-xs"
                }`}
              >
                <div>
                  {/* Imagen con 1 sola etiqueta limpia */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={p.img}
                      alt={`${p.nombre} a España`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs ${p.tagColor}`}
                      >
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  {/* Cuerpo simétrico */}
                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      {p.lugar}
                    </span>
                    <h3 className="text-xl font-black text-[#0a1628] mt-0.5">
                      {p.nombre}
                    </h3>

                    <p className="text-xs font-semibold text-red-600 mt-1 min-h-[34px] flex items-center">
                      📅 {p.temporada}
                    </p>

                    {/* Bloque único de precio */}
                    <div className="my-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-slate-500">Desde</span>
                        <span className="text-3xl font-black text-[#0a1628] tracking-tight">
                          ${p.precio}
                        </span>
                        <span className="text-xs font-bold text-slate-500">USD</span>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700 block mt-1">
                        ✓ Separa con el 50% (${p.separaCon} USD)
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed min-h-[36px]">
                      {p.beneficioExtra}
                    </p>
                  </div>
                </div>

                {/* Botón de 1 sola línea (nunca se deforma) */}
                <div className="px-5 pb-5 pt-2">
                  <a
                    href={p.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb858] text-white py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>{p.waTexto}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          3. GUÍA PRÁCTICA: HOTEL VS CARTA DE INVITACIÓN + CALCULADORA BOE SIMPLE
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Izquierda: ¿Viajas con Hotel o con Carta de Invitación? */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                  Adaptamos tu Carpeta a tu Caso
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0a1628] mb-4">
                  ¿Viajas con Reserva de Hotel o tienes Carta de Invitación?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-2xl p-5 border border-slate-200">
                    <span className="inline-block text-[11px] font-extrabold uppercase bg-red-50 text-red-700 px-2.5 py-1 rounded-md mb-2">
                      Opción A · Sin Carta
                    </span>
                    <h3 className="text-base font-extrabold text-[#0a1628] mb-1.5">
                      Con Reserva de Hotel
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Si no tienes quien te tramite la Carta Policial en España, emitimos tu reserva de hotel verificable cuadrando exactamente con los días de tu vuelo y tu bolsa de viaje.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200">
                    <span className="inline-block text-[11px] font-extrabold uppercase bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md mb-2">
                      Opción B · Con Familiar
                    </span>
                    <h3 className="text-base font-extrabold text-[#0a1628] mb-1.5">
                      Con Carta de Invitación
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Si tu familiar en España te envió la Carta original, no gastas en hotel: sincronizamos tu pasaje, tu regreso reservado y tu seguro 30.000€ con las fechas exactas de tu Carta.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-extrabold text-[#0a1628] block">
                    ¿Ya compraste tu pasaje de avión por tu cuenta?
                  </span>
                  <span className="text-xs text-slate-600">
                    También armamos <strong>Solo tu Carpeta Migratoria</strong> (regreso reservado + hotel + seguro + check-in) desde <strong>$85 USD</strong>.
                  </span>
                </div>
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent(
                    "¡Hola! Ya tengo mi pasaje y quiero contratar Solo la Carpeta Migratoria para España ($85 USD).\n\n📍 Ref Web: citylandtravel.com/espana [Solo Carpeta]"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-extrabold text-white bg-[#0a1628] hover:bg-slate-800 px-4 py-2.5 rounded-xl whitespace-nowrap shrink-0"
                >
                  Pedir Solo Carpeta →
                </a>
              </div>
            </div>

            {/* Derecha: Calculadora Simple de Bolsa de Viaje España (BOE) */}
            <div className="lg:col-span-5 bg-[#0a1628] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-amber-400/20 text-amber-300 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-3">
                  Requisito BOE España 2026
                </span>
                <h3 className="text-xl sm:text-2xl font-black mb-2">
                  Calculadora Rápida de Bolsa de Viaje
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  En Madrid-Barajas piden acreditar <strong>122,10 € por día</strong> (con un mínimo fijo de <strong>1.098,90 €</strong> si tu viaje dura de 1 a 9 días). Por eso armamos tu carpeta por 8 a 10 días para que pases con el mínimo legal:
                </p>

                <div className="bg-white/10 rounded-2xl p-4 border border-white/15 mb-5">
                  <div className="flex items-center justify-between text-xs font-bold mb-2">
                    <span>Días declarados en tu carpeta:</span>
                    <span className="text-amber-300 text-sm font-black">{diasViaje} días</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    value={diasViaje}
                    onChange={(e) => setDiasViaje(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>5 días</span>
                    <span>9 días (Ideal)</span>
                    <span>30 días</span>
                  </div>
                </div>

                <div className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 mb-5">
                  <span className="text-xs text-emerald-200 block">
                    Bolsa de viaje a demostrar (efectivo o tarjeta):
                  </span>
                  <span className="text-3xl font-black text-white">
                    {montoBoe.toLocaleString("es-ES", { minimumFractionDigits: 2 })} €
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/51944103890?text=${encodeURIComponent(
                  `¡Hola! Quiero asesoría para mi paquete a España (calculé ${diasViaje} días de estadía).\n\n📍 Ref Web: citylandtravel.com/espana [Calculadora BOE]`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb858] text-white py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap"
              >
                <WhatsAppIcon size={16} />
                <span>Consultar mi caso por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          4. PREGUNTAS FRECUENTES CLARAS + DESTINOS EN ESPAÑA
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628]">
              Preguntas Frecuentes sobre el Paquete a España
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {FAQS_ESPANA.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs"
              >
                <h3 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Enlaces limpios por ciudad */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 block">
                Salidas a toda España y Europa
              </span>
              <p className="text-sm font-bold text-[#0a1628]">
                Madrid · Barcelona · Valencia · Sevilla · Málaga · Bilbao · Zaragoza
              </p>
            </div>
            <Link
              href="/paquetes-migratorios"
              className="text-xs font-extrabold text-white bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl whitespace-nowrap shrink-0"
            >
              Ver catálogo de destinos →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
