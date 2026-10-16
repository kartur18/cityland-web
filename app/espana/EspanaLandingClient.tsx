"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";
import FlagIcon from "@/components/icons/FlagIcon";

// ── 4 Tarjetas de Salidas Oficiales del Flyer con Monumentos Reales de Madrid y WhatsApp Individual ──
export const PAQUETES_ESPANA = [
  {
    id: "noviembre",
    mes: "NOVIEMBRE",
    subtitulo: "Salidas programadas 2026",
    precio: 695,
    tag: "Precio Promocional",
    tagColor: "bg-blue-600 text-white",
    bordeTop: "border-t-4 border-t-blue-600",
    img: "/images/espana/gran-via-metropolis.jpg",
    monumento: "Gran Vía & Edificio Metrópolis · Madrid",
    inclusiones: [
      "Boleto aéreo confirmado con equipaje",
      "Seguro Schengen obligatorio 30.000€",
      "Voucher de hospedaje para control fronterizo",
      "Asesoría migratoria 1 a 1 antes del viaje",
    ],
    // Asignado a Asesora Línea 3
    waUrl: `https://wa.me/51944280151?text=${encodeURIComponent("¡Hola! Deseo cotizar el Paquete Migratorio a España para NOVIEMBRE ($695 USD). Quisiera separar con el 50% de inicial.")}`,
  },
  {
    id: "diciembre",
    mes: "DICIEMBRE",
    subtitulo: "Temporada Navideña & Fin de Año",
    precio: 875,
    tag: "Alta Demanda",
    tagColor: "bg-red-600 text-white",
    bordeTop: "border-t-4 border-t-red-600",
    img: "/images/espana/puerta-de-alcala.jpg",
    monumento: "Puerta de Alcalá · Madrid",
    inclusiones: [
      "Boleto aéreo confirmado con equipaje",
      "Seguro Schengen obligatorio 30.000€",
      "Voucher de hospedaje para control fronterizo",
      "Asesoría migratoria 1 a 1 antes del viaje",
    ],
    // Asignado a Asesora Línea 4
    waUrl: `https://wa.me/51938845086?text=${encodeURIComponent("¡Hola! Deseo cotizar el Paquete Migratorio a España para DICIEMBRE ($875 USD). Quisiera separar con el 50% de inicial.")}`,
  },
  {
    id: "enero",
    mes: "ENERO",
    subtitulo: "Inicio de Año 2027",
    precio: 875,
    tag: "Cupos Limitados",
    tagColor: "bg-amber-600 text-white",
    bordeTop: "border-t-4 border-t-amber-500",
    img: "/images/espana/cibeles.jpg",
    monumento: "Plaza de Cibeles & Madrid Skyline",
    inclusiones: [
      "Boleto aéreo confirmado con equipaje",
      "Seguro Schengen obligatorio 30.000€",
      "Voucher de hospedaje para control fronterizo",
      "Asesoría migratoria 1 a 1 antes del viaje",
    ],
    // Asignado a Asesora Línea 5
    waUrl: `https://wa.me/51906642487?text=${encodeURIComponent("¡Hola! Deseo cotizar el Paquete Migratorio a España para ENERO ($875 USD). Quisiera separar con el 50% de inicial.")}`,
  },
  {
    id: "mar-abr-may",
    mes: "MARZO • ABRIL • MAYO",
    subtitulo: "Primavera Europea 2027",
    precio: 699,
    tag: "Mejor Tarifa",
    tagColor: "bg-emerald-600 text-white",
    bordeTop: "border-t-4 border-t-emerald-600",
    img: "/images/espana/palacio-real.jpg",
    monumento: "Palacio Real de Madrid & Almudena",
    inclusiones: [
      "Boleto aéreo confirmado con equipaje",
      "Seguro Schengen obligatorio 30.000€",
      "Voucher de hospedaje para control fronterizo",
      "Asesoría migratoria 1 a 1 antes del viaje",
    ],
    // Asignado a Asesora Línea 6
    waUrl: `https://wa.me/51944031724?text=${encodeURIComponent("¡Hola! Deseo cotizar el Paquete Migratorio a España para MARZO/ABRIL/MAYO ($699 USD). Quisiera separar con el 50% de inicial.")}`,
  },
];

const CHECKLIST_BARAJAS = [
  {
    paso: "01",
    titulo: "Pasaporte Peruano Vigente",
    detalle: "Con vigencia mínima de 3 meses posteriores a tu fecha de retorno programada. No necesitas visa consular.",
  },
  {
    paso: "02",
    titulo: "Boleto Aéreo Ida y Vuelta Confirmado",
    detalle: "Emitido con código de reserva real (PNR verificable en Iberia, Air Europa o LATAM) y equipaje incluido.",
  },
  {
    paso: "03",
    titulo: "Seguro Médico Schengen 30.000€",
    detalle: "Cobertura médica internacional obligatoria sin deducible para todo el Espacio Europeo y repatriación.",
  },
  {
    paso: "04",
    titulo: "Sustento de Alojamiento + Simulacro 1 a 1",
    detalle: "Voucher de reserva de hotel verificable o guía de carta de invitación, más preparación para las preguntas en Barajas.",
  },
];

const TESTIMONIOS_ESPANA = [
  {
    nombre: "Carlos & Mariana R.",
    ruta: "Lima ➔ Madrid (Barajas T4)",
    texto: "Pasamos el control migratorio de Barajas en menos de 5 minutos. Nos revisaron la reserva de hotel, el seguro Schengen y el boleto de retorno que nos armó Cityland. Todo impecable.",
    iniciales: "CM",
  },
  {
    nombre: "Rosaura Paredes",
    ruta: "Lima ➔ Madrid ➔ Barcelona",
    texto: "Separé mi paquete con el 50% en la oficina de Los Olivos. La asesora me preparó con todas las preguntas del aeropuerto y viajé súper tranquila.",
    iniciales: "RP",
  },
  {
    nombre: "Jorge Luis Huamán",
    ruta: "Lima ➔ Madrid (Vuelo Directo)",
    texto: "100% formales, me entregaron mi boleta electrónica con RUC y mis vouchers verificables en la aerolínea desde el primer día. Totalmente recomendados.",
    iniciales: "JH",
  },
];

const FAQS_ESPANA = [
  {
    q: "¿Los peruanos necesitamos visa para viajar a España en 2026?",
    a: "No. Los ciudadanos peruanos están exentos de visa consular para ingresar a España y a todo el Espacio Schengen por estancias de hasta 90 días. Lo indispensable es llevar la carpeta migratoria completa (boleto de ida y vuelta, seguro Schengen de 30.000€, reserva de hospedaje y sustento económico).",
  },
  {
    q: "¿Cómo funciona la separación con el 50% de inicial?",
    a: "Puedes congelar tu tarifa promocional ($695 USD en noviembre o $699 USD en marzo-abril-mayo) abonando el 50% de inicial en nuestra oficina de Los Olivos o mediante cuentas corporativas de Cityland Travel E.I.R.L. El saldo restante se cancela antes de tu fecha de vuelo.",
  },
  {
    q: "¿Qué aerolíneas operan los vuelos de los paquetes a España?",
    a: "Trabajamos exclusivamente con aerolíneas formales IATA en la ruta Lima – Madrid / Barcelona: Iberia, Air Europa, LATAM Airlines y Plus Ultra, con equipaje incluido según la tarifa elegida.",
  },
  {
    q: "¿Puedo atenderme presencialmente en Lima?",
    a: "¡Por supuesto! Nuestra oficina física está en Av. Antúnez de Mayolo N. 814, Los Olivos, Lima (RUC 20614914239). Atendemos de lunes a sábado de 9:00 am a 7:00 pm y emitimos boleta o factura electrónica SUNAT.",
  },
];

export default function EspanaLandingClient() {
  const [faqAbierto, setFaqAbierto] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      {/* 1. Barra Superior Corporativa */}
      <div className="bg-[#0a1628] text-white/90 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Agencia Formal SUNAT · RUC 20614914239
            </span>
            <span className="hidden md:inline text-white/25">|</span>
            <span className="hidden md:inline text-slate-300">
              Av. Antúnez de Mayolo N. 814, Los Olivos, Lima
            </span>
            <span className="hidden lg:inline text-white/25">|</span>
            <span className="hidden lg:inline text-amber-400 font-bold">
              ★ 4.9/5 en Google (+500 viajeros)
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-200 hover:text-white transition-colors underline"
            >
              ← Ver todos los destinos
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Header Sticky con Navegación Rápida + Botón Directo a Asesora Lucero (Línea 1: 983 882 504) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 sm:py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link href="/" aria-label="Cityland Travel - Inicio" className="flex items-center group shrink-0">
            <div className="relative h-12 sm:h-14 lg:h-16 w-40 sm:w-48 lg:w-56 flex items-center transition-transform group-hover:scale-[1.01]">
              <Image
                src="/logo-transparent.png"
                alt="Cityland Travel - Agencia de Viajes en Lima"
                fill
                priority
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Navegación interna de la Landing España */}
          <nav aria-label="Secciones de España" className="hidden lg:flex items-center gap-1">
            {[
              { label: "Salidas y Precios", href: "#tarifas" },
              { label: "Qué Incluye", href: "#incluye" },
              { label: "Requisitos Barajas", href: "#requisitos" },
              { label: "Testimonios", href: "#testimonios-espana" },
              { label: "Preguntas Frecuentes", href: "#faq-espana" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-bold text-slate-700 hover:text-red-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botón Header -> Asesora Lucero (983 882 504) */}
          <a
            href={`https://wa.me/51983882504?text=${encodeURIComponent("¡Hola Lucero! Te contacto desde la web de España. Deseo información de paquetes migratorios.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold shadow-md shadow-emerald-500/20 cursor-pointer shrink-0"
          >
            <WhatsAppIcon size={16} />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>
      </header>

      {/* 3. Hero Section de Alto Impacto Comercial */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100/70 pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0a1628]/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Columna Izquierda: Propuesta de Valor y Salidas */}
            <div className="lg:col-span-7 text-left">
              {/* Badge con Logotipo Oficial + Sello Schengen */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-2xl p-1.5 pr-3.5 shadow-2xs">
                  <div className="relative w-8 h-8 rounded-xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center shrink-0">
                    <Image
                      src="/logo-oficial.png"
                      alt="Cityland Travel"
                      width={34}
                      height={34}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-wider block leading-tight">
                      Cityland Travel · Especialistas en Europa
                    </span>
                    <span className="text-[11px] text-slate-600 font-bold flex items-center gap-1.5 leading-tight">
                      <FlagIcon pais="España" className="w-3 h-2" />
                      Ruta Madrid & Barcelona 2026–2027
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-extrabold">
                  ✓ Sin Visa Consular (Peruanos)
                </span>
              </div>

              {/* Título Principal H1 */}
              <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-6xl lg:text-[68px] text-[#0a1628] tracking-tight leading-[0.93] mb-2">
                PAQUETES MIGRATORIOS A{" "}
                <span className="text-red-600 relative inline-block">
                  ESPAÑA
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 rounded-full bg-gradient-to-r from-red-600 via-amber-400 to-red-600" />
                </span>
              </h1>

              <p className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl text-slate-700 tracking-wide mt-2 mb-3">
                TU OPORTUNIDAD EN ESPAÑA CON CARPETA COMPLETA DESDE LIMA
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 max-w-2xl font-medium">
                Viaja seguro con todos los requisitos exigidos por migraciones en el Aeropuerto de Barajas:{" "}
                <strong className="text-[#0a1628] font-bold">
                  boleto aéreo confirmado con equipaje, seguro médico Schengen de 30.000€, reserva de hospedaje y asesoría 1 a 1
                </strong>
                .
              </p>

              {/* Tira Rápida de Tarifas por Temporada */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {PAQUETES_ESPANA.map((item) => (
                  <a
                    key={item.id}
                    href="#tarifas"
                    className="group bg-white hover:bg-red-50/50 border border-slate-200/90 hover:border-red-300 rounded-xl p-2.5 transition-all shadow-2xs"
                  >
                    <span className="block text-[10px] font-extrabold uppercase text-slate-500 group-hover:text-red-600 truncate">
                      {item.mes}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-[family-name:var(--font-bebas)] text-2xl font-black text-[#0a1628] leading-none">
                        ${item.precio}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500">USD</span>
                    </div>
                    <span className="block text-[10px] font-semibold text-emerald-700 mt-0.5">
                      Inicial ${(item.precio * 0.5).toFixed(0)} USD
                    </span>
                  </a>
                ))}
              </div>

              {/* Botón Principal Hero -> Asesora Línea 1 (906 450 098) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <a
                  href={`https://wa.me/51906450098?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo reservar el Paquete Migratorio a España con el 50% de inicial.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-extrabold shadow-lg shadow-red-500/25 hover:shadow-xl transition-all cursor-pointer"
                >
                  <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2" />
                  <span>RESERVA AHORA</span>
                  <span className="text-xs bg-black/20 px-2.5 py-0.5 rounded-lg font-bold">
                    Separa con 50%
                  </span>
                </a>

                <a
                  href="#tarifas"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-[#162544] text-white px-6 py-4 rounded-2xl text-sm font-bold shadow-sm transition-all cursor-pointer"
                >
                  <span>Ver Fechas y Precios</span>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                  </svg>
                </a>
              </div>

              {/* Barra de 3 Pilares Idénticos al Flyer */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-slate-200">
                <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-slate-900 leading-tight">
                      Asesoría 1 a 1
                    </span>
                    <span className="block text-[10px] text-slate-500 leading-tight">
                      Simulacro Barajas
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-slate-900 leading-tight">
                      Agencia Formal
                    </span>
                    <span className="block text-[10px] text-slate-500 leading-tight">
                      RUC 20614914239
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-slate-900 leading-tight">
                      Acompañamiento
                    </span>
                    <span className="block text-[10px] text-slate-500 leading-tight">
                      Hasta tu llegada
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Ejecutiva de Madrid con Desglose Completo + Botón -> Asesora Línea 2 (942 086 698) */}
            <div className="lg:col-span-5">
              <div className="card-interactive group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(10,22,40,0.16)]">
                {/* Franja Superior Azul Marino */}
                <div className="bg-[#0a1628] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Carpeta Migratoria Completa
                  </span>
                  <span className="text-[11px] font-bold text-slate-300">
                    Lima ➔ Madrid / Barcelona
                  </span>
                </div>

                {/* Imagen de Plaza Mayor */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/espana/plaza-mayor.jpg"
                    alt="Plaza Mayor de Madrid España - Paquetes Migratorios Cityland Travel"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                  {/* Badges superiores */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      <FlagIcon pais="España" className="w-3.5 h-2.5" />
                      Plaza Mayor · Madrid
                    </span>
                    <span className="bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      Desde $695 USD
                    </span>
                  </div>

                  {/* Info inferior */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-300 block mb-0.5">
                      Asistencia Total al Viajero Peruano
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold leading-tight drop-shadow-sm">
                      Tu llegada a España con todo resuelto
                    </h2>
                  </div>
                </div>

                {/* Desglose Comercial y Botón Directo */}
                <div className="p-4 sm:p-5">
                  <div className="space-y-1.5 mb-4 text-xs text-slate-700">
                    {[
                      "Boleto aéreo confirmado con equipaje (Iberia / Air Europa / LATAM)",
                      "Seguro médico internacional Schengen de 30.000€",
                      "Voucher de reserva de hotel verificable para migraciones",
                      "Asesoría personalizada 1 a 1 para pasar control en Barajas",
                    ].map((inc) => (
                      <div key={inc} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="font-medium text-slate-800 leading-snug">{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-600 block leading-none mb-1">
                        TARIFA PROMOCIONAL DESDE
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl font-black text-[#0a1628] leading-none">
                          $695
                        </span>
                        <span className="text-xs font-extrabold text-slate-500">USD</span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 block mt-0.5">
                        Separa con $348 USD (50%) · Saldo antes de volar
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-block bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg">
                        50% Inicial
                      </span>
                      <span className="block text-[10px] font-semibold text-slate-500 mt-1">
                        Atención inmediata
                      </span>
                    </div>
                  </div>

                  {/* Botón de la tarjeta derecha -> Asesora Línea 2 (942 086 698) */}
                  <a
                    href={`https://wa.me/51942086698?text=${encodeURIComponent("¡Hola! Deseo verificar disponibilidad para viajar a España.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold cursor-pointer"
                  >
                    <WhatsAppIcon size={17} />
                    <span>Verificar Fechas por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN CALENDARIO DE PRECIOS: CADA TARJETA TIENE SU PROPIO NÚMERO DE ASESORA */}
      <section id="tarifas" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2.5">
              Tarifas Oficiales 2026 – 2027
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-5xl text-[#0a1628] tracking-tight leading-none mb-3">
              ELIGE TU FECHA DE SALIDA A ESPAÑA
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Precios por persona en dólares americanos (USD). Incluyen boleto IATA, seguro Schengen 30.000€, reserva de hotel y asesoría.{" "}
              <strong className="text-slate-900 font-bold">Separa hoy con el 50% de inicial</strong>.
            </p>
          </div>

          {/* Grilla de las 4 Tarjetas: Cada botón va a una asesora distinta */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAQUETES_ESPANA.map((p) => {
              return (
                <div
                  key={p.id}
                  className={`card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 flex flex-col justify-between shadow-sm ${p.bordeTop}`}
                >
                  <div>
                    {/* Foto del Monumento */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={p.img}
                        alt={`Paquete Migratorio a España ${p.mes}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-sm ${p.tagColor}`}>
                          {p.tag}
                        </span>
                        <span className="text-[10px] font-bold bg-black/65 text-white backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          50% Inicial
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-3 right-3 z-10 text-white">
                        <span className="text-[10px] font-semibold text-amber-300 block">
                          {p.monumento}
                        </span>
                      </div>
                    </div>

                    {/* Contenido Comercial Directo */}
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-red-600 font-bold mb-1">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>PAQUETE MIGRATORIO EN</span>
                      </div>

                      <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#0a1628] leading-tight mb-0.5">
                        {p.mes}
                      </h3>
                      <p className="text-[11px] font-medium text-slate-500 mb-4">
                        {p.subtitulo}
                      </p>

                      {/* Inclusiones Cortas */}
                      <div className="space-y-1.5 mb-5 text-xs text-slate-600">
                        {p.inclusiones.map((inc, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span className="leading-snug">{inc}</span>
                          </div>
                        ))}
                      </div>

                      {/* Precio Gigante */}
                      <div className="border-t border-slate-100 pt-3.5 mb-4 flex items-end justify-between">
                        <div>
                          <span className="text-[10px] font-black uppercase text-red-600 block leading-tight">
                            PRECIO PROMOCIONAL
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="font-[family-name:var(--font-bebas)] text-4xl font-black text-[#0a1628] leading-none">
                              ${p.precio}
                            </span>
                            <span className="text-xs font-bold text-slate-500">USD</span>
                          </div>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-lg">
                          Inicial ${(p.precio * 0.5).toFixed(0)} USD
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Botón Directo con Número Diferente para Cada Tarjeta */}
                  <div className="p-5 pt-0">
                    <a
                      href={p.waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold shadow-md shadow-emerald-500/20 cursor-pointer"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Cotizar {p.mes.split(" ")[0]}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ¿QUÉ INCLUYE EL PAQUETE MIGRATORIO? */}
      <section id="incluye" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2.5">
              Cobertura Total
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-2">
              ¿QUÉ INCLUYE TU PAQUETE A ESPAÑA?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Todo lo exigido por el Espacio Schengen resuelto en una sola gestión formal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <div className="card-interactive bg-slate-50/70 p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3">
                <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                Boleto Aéreo Confirmado
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Emisión formal IATA con Iberia, Air Europa o LATAM con equipaje de bodega incluido.
              </p>
            </div>

            <div className="card-interactive bg-slate-50/70 p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                Seguro Schengen 30.000€
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Póliza médica internacional obligatoria para control migratorio de la Unión Europea.
              </p>
            </div>

            <div className="card-interactive bg-slate-50/70 p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                Sustento de Hospedaje
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Voucher de reserva de hotel formal para justificar estancia ante la policía fronteriza.
              </p>
            </div>

            <div className="card-interactive bg-slate-50/70 p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                Asesoría Migratoria 1 a 1
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Simulacro de preguntas frecuentes en Barajas, carpeta documentaria y verificación de fondos.
              </p>
            </div>
          </div>

          {/* Banner CTA intermedio con Foto Real de Barajas T4 -> Asesora Lucero (983 882 504) */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-950 text-white">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/espana/barajas.jpg"
                alt="Aeropuerto Adolfo Suárez Madrid-Barajas Terminal 4"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/50" />
            </div>

            <div className="relative z-10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-white/10">
                  <PlaneIcon className="w-3.5 h-3.5 fill-none stroke-current stroke-2" />
                  Control Migratorio Aeropuerto Barajas (Madrid)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                  ¿Tienes dudas sobre el control en el aeropuerto de Barajas?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Viaja con seguridad total. Te preparamos con la carpeta exacta que solicita la Policía Nacional de España: solvencia económica, reserva de hotel y seguro Schengen de 30.000€.
                </p>
              </div>

              <a
                href={`https://wa.me/51983882504?text=${encodeURIComponent("¡Hola Lucero! Deseo asesoría sobre las preguntas de migraciones en Barajas.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold shadow-lg shadow-emerald-500/25 cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>Consultar con Asesora Lucero</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NUEVA SECCIÓN SEO & CONFIANZA: CHECKLIST DE REQUISITOS MIGRATORIOS EN BARAJAS */}
      <section id="requisitos" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2.5">
              Guía Oficial 2026 para Viajeros Peruanos
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-2">
              4 REQUISITOS CLAVE PARA INGRESAR A ESPAÑA SIN OBSERVACIONES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Así preparamos tu expediente en Cityland Travel para que pases el control migratorio con total tranquilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CHECKLIST_BARAJAS.map((item) => (
              <div
                key={item.paso}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#0a1628] text-amber-400 font-[family-name:var(--font-bebas)] text-xl font-bold mb-3">
                    {item.paso}
                  </span>
                  <h3 className="text-sm font-extrabold text-[#0a1628] mb-1.5">
                    {item.titulo}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.detalle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <span>✓</span>
                  <span>Incluido en tu asesoría Cityland</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIOS VERIFICADOS DE PASAJEROS A ESPAÑA */}
      <section id="testimonios-espana" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5">
              ★★★★★ 4.9 / 5.0 en Google
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-2">
              PERUANOS QUE YA VIAJARON A ESPAÑA CON NOSOTROS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Experiencias reales de pasajeros atendidos en nuestra oficina de Los Olivos y por WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIOS_ESPANA.map((t) => (
              <div
                key={t.nombre}
                className="card-interactive bg-slate-50/70 rounded-2xl p-5 border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-amber-500 text-xs font-bold tracking-wider">★★★★★</span>
                    <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      ✓ Viaje Verificado
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    &ldquo;{t.texto}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/70 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#0a1628] text-white flex items-center justify-center text-xs font-extrabold shrink-0">
                    {t.iniciales}
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-[#0a1628]">{t.nombre}</p>
                    <p className="text-[11px] text-slate-500">{t.ruta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PREGUNTAS FRECUENTES DE ESPAÑA (Acordeón SEO) */}
      <section id="faq-espana" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2.5">
              Dudas Frecuentes sobre España
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-2">
              PREGUNTAS FRECUENTES ANTES DE VIAJAR A MADRID O BARCELONA
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_ESPANA.map((item, idx) => {
              const abierto = faqAbierto === idx;
              return (
                <div
                  key={item.q}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setFaqAbierto(abierto ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={abierto}
                  >
                    <span className="text-xs sm:text-sm font-extrabold text-[#0a1628]">
                      {item.q}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        abierto ? "bg-red-600 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {abierto ? "−" : "+"}
                    </span>
                  </button>
                  {abierto && (
                    <div className="px-5 pb-4 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Footer Corporativo con RUC y Oficina */}
      <footer className="bg-[#0a1628] text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-white/10 pb-8 mb-8">
            <div>
              <div className="bg-white p-2.5 rounded-2xl inline-block mb-3 shadow-md">
                <div className="relative h-12 w-44">
                  <Image
                    src="/logo-transparent.png"
                    alt="Cityland Travel - Agencia de Viajes"
                    fill
                    sizes="176px"
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Agencia formal de viajes en Lima especializada en rutas a Europa y turismo internacional.
              </p>
            </div>

            <div className="text-xs text-slate-300 space-y-1.5">
              <p><strong className="text-white">Razón Social:</strong> Cityland Travel E.I.R.L.</p>
              <p><strong className="text-white">RUC:</strong> 20614914239</p>
              <p><strong className="text-white">Oficina:</strong> Av. Antúnez de Mayolo N. 814, Los Olivos, Lima</p>
              <p><strong className="text-white">Horario:</strong> Lunes a Sábado: 9:00 am – 7:00 pm</p>
            </div>

            <div className="flex flex-col sm:items-end gap-3">
              {/* Botón Footer -> Asesora Línea 1 (906 450 098) */}
              <a
                href={`https://wa.me/51906450098?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo cotizar mi viaje a España.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>Contactar por WhatsApp</span>
              </a>
              <Link href="/" className="text-xs text-slate-400 hover:text-white underline">
                Volver a la portada principal
              </Link>
            </div>
          </div>

          <div className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Cityland Travel E.I.R.L. · RUC 20614914239 · Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* 10. Botón Flotante Permanente -> Asesora Línea 2 (942 086 698) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/51942086698?text=${encodeURIComponent("¡Hola! Deseo cotizar el Paquete Migratorio a España.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl shadow-emerald-500/30 cursor-pointer"
          aria-label="Chatear por WhatsApp"
        >
          <WhatsAppIcon size={24} />
          <span className="hidden sm:inline font-bold text-xs sm:text-sm">
            Cotizar por WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
