"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import { textoPrecio } from "@/lib/formato-precio";
import NotaPrecio from "@/components/NotaPrecio";
import AvisoRegresoReservado from "@/components/AvisoRegresoReservado";
import GuiasEspana from "@/components/GuiasEspana";

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
    beneficioExtra: "Ideal si programas tu viaje con anticipación.",
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
    beneficioExtra: "Incluye asesoría personalizada 1 a 1 para Barajas.",
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
    beneficioExtra: "Para viajar pronto o conectar a otra ciudad española.",
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
    beneficioExtra: "Incluye maleta grande de 23 kg en bodega + 10 kg mano.",
    waTexto: "Elegir Plan Full",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent(
      "¡Hola! Quiero más información del paquete Full a España con maleta de 23 kg desde $999.\n\n📍 Ref Web: citylandtravel.com/espana [Plan Full $999]"
    )}`,
  },
];

const CIUDADES_ESPANA = [
  {
    ciudad: "Madrid",
    region: "Comunidad de Madrid · Aeropuerto Barajas (T4 / T1)",
    img: "/images/destinos/madrid.webp",
    detalle: "Vuelos directos de 11 horas desde Lima con Iberia, Air Europa, Plus Ultra y LATAM.",
    href: "/paquetes-migratorios/paquete-migratorio-madrid-desde-699",
  },
  {
    ciudad: "Barcelona",
    region: "Cataluña · Aeropuerto El Prat (BCN)",
    img: "/images/destinos/barcelona.webp",
    detalle: "Llegada a Barcelona-El Prat o conexión en tren AVE de alta velocidad desde Madrid.",
    href: "/paquetes-migratorios/paquete-migratorio-barcelona-desde-699",
  },
  {
    ciudad: "Valencia",
    region: "Comunidad Valenciana · Aeropuerto de Manises (VLC)",
    img: "/images/destinos/valencia-artes.jpg",
    detalle: "Conexión aérea directa desde Barajas o tren AVE en 1 hora y 50 minutos.",
    href: "/paquetes-migratorios/paquete-migratorio-valencia-desde-699",
  },
  {
    ciudad: "Sevilla",
    region: "Andalucía · Aeropuerto de San Pablo (SVQ)",
    img: "/images/destinos/sevilla.jpg",
    detalle: "Rutas conectadas hasta Sevilla con reserva de hotel verificable o Carta de Invitación.",
    href: "/paquetes-migratorios/paquete-migratorio-sevilla-desde-699",
  },
  {
    ciudad: "Zaragoza",
    region: "Aragón · Eje Madrid - Barcelona",
    img: "/images/destinos/zaragoza.jpg",
    detalle: "A solo 1 hora y 15 minutos en tren AVE desde Madrid-Puerta de Atocha.",
    href: "/paquetes-migratorios/paquete-migratorio-zaragoza-desde-699",
  },
  {
    ciudad: "Málaga",
    region: "Costa del Sol · Aeropuerto Málaga (AGP)",
    img: "/images/destinos/malaga.jpg",
    detalle: "Alta demanda en hotelería y servicios durante todo el año en Andalucía.",
    href: "/paquetes-migratorios/paquete-migratorio-malaga-desde-699",
  },
];

const FAQS_ESPANA = [
  {
    q: "¿Qué diferencia hay entre el paquete migratorio y un pasaje de ida y vuelta?",
    a: "El pasaje de ida y vuelta lleva los dos vuelos emitidos. El paquete migratorio lleva tu pasaje de ida emitido y una reserva del vuelo de regreso, además de hotel, seguro y check-in. Si quieres viajar con el regreso emitido, elige ida y vuelta.",
  },
  {
    q: "¿De qué depende que me aplique el plan de $699, $799, $899 o $999?",
    a: "Depende únicamente de la fecha en que desees volar y si llevas maleta de bodega: el Plan Promo ($699) aplica de fines de febrero a mayo; el Plan Smart ($799) en junio, septiembre, octubre y noviembre; el Plan Plus ($899) para salidas cercanas o con conexión interna; y el Plan Full ($999) para temporada alta (diciembre, julio y agosto) o con maleta de 23 kg en bodega.",
  },
  {
    q: "¿Qué pasa si un familiar en España me envía Carta de Invitación?",
    a: "Si ya cuentas con Carta de Invitación Policial tramitada en España, no necesitas reserva de hotel. Nosotros cuadramos las fechas exactas de tu pasaje, tu reserva de regreso y tu seguro Schengen de 30.000€ con los días autorizados en tu Carta.",
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

      {/* 1. HERO LIMPIO, ORDENADO Y SIN CAJAS ANIDADAS */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-14 sm:pt-12 sm:pb-18 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Izquierda */}
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
                Pagas tu pasaje de ida y te armamos la carpeta del viaje: reserva de regreso, hotel, seguro y check-in. Puedes separar tu cupo con el{" "}
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

            {/* Derecha: Fotografía limpia + lista sin recuadros internos */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
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
                  <h2 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-3">
                    Los 5 documentos incluidos en tu paquete a España:
                  </h2>
                  <ul className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                    <li className="py-2 flex items-center gap-2.5">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        <strong>1. Pasaje de avión de ida</strong> emitido a tu nombre desde Lima.
                      </span>
                    </li>
                    <li className="py-2 flex items-center gap-2.5">
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>
                        <strong>2. Reserva del vuelo de regreso</strong> (no es un boleto emitido).
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
                        <strong>5. Check-in hecho 24h antes</strong> y preparación para el aeropuerto.
                      </span>
                    </li>
                  </ul>
                  <AvisoRegresoReservado className="mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOS 4 PLANES OFICIALES (SIN CAJAS INTERNAS) */}
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
                    ? "border-2 border-amber-400 shadow-md"
                    : "border border-slate-200 shadow-xs"
                }`}
              >
                <div>
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

                    <div className="my-4 py-3.5 border-y border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-slate-500">Desde</span>
                        <span className="text-3xl font-black text-[#0a1628] tracking-tight">
                          ${p.precio}
                        </span>
                        <span className="text-xs font-bold text-slate-500">USD</span>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700 block mt-1">
                        ✓ Separa con el 50% (desde ${p.separaCon} USD)
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed min-h-[36px]">
                      {p.beneficioExtra}
                    </p>
                  </div>
                </div>

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
          <NotaPrecio className="mt-6 text-center" />
        </div>
      </section>

      {/* 3. PRINCIPALES CIUDADES DE DESTINO EN ESPAÑA (CADA UNA CON SU FOTO REAL ÚNICA) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Destinos en España desde Lima
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628]">
                Principales Ciudades de Llegada en España
              </h2>
            </div>
            <Link
              href="/paquetes-migratorios"
              className="text-xs font-extrabold text-red-600 hover:underline"
            >
              Ver las 25 ciudades de España →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {CIUDADES_ESPANA.map((c) => (
              <div
                key={c.ciudad}
                className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-2xs hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-100">
                    <Image
                      src={c.img}
                      alt={`Paquete Migratorio a ${c.ciudad}, España`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#0a1628] text-[11px] font-extrabold px-2.5 py-1 rounded-full">
                        <FlagIcon pais="España" className="w-3.5 h-2.5" />
                        <span>Lima → {c.ciudad}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase text-red-600 block">
                      {c.region}
                    </span>
                    <h3 className="text-xl font-black text-[#0a1628] mt-0.5 mb-2">
                      Paquete a {c.ciudad}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {c.detalle}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={c.href}
                    className="text-xs font-extrabold text-slate-700 hover:text-red-600 underline"
                  >
                    Ver ruta a {c.ciudad} →
                  </Link>
                  <a
                    href={`https://wa.me/51944103890?text=${encodeURIComponent(
                      `¡Hola! Quiero más información del paquete migratorio a ${c.ciudad}, España desde $699.\n\n📍 Ref Web: citylandtravel.com/espana [Ciudad ${c.ciudad}]`
                    )}`}
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

      {/* 4. MODALIDADES Y CALCULADORA BOE (TARJETAS DE 1 NIVEL SIN ANIDAR) */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-extrabold uppercase bg-red-50 text-red-700 px-3 py-1 rounded-full mb-3">
                  Opción A · Sin Carta
                </span>
                <h3 className="text-xl font-black text-[#0a1628] mb-2">
                  Viaje con Reserva de Hotel
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Si no tienes quien te tramite la Carta Policial en España, emitimos tu reserva de hotel verificable cuadrando exactamente con los días de tu vuelo y tu bolsa de viaje.
                </p>
              </div>
              <p className="text-xs font-bold text-emerald-700 pt-3 border-t border-slate-100">
                ✓ Incluido en todos nuestros planes desde $699 USD
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-extrabold uppercase bg-blue-50 text-blue-700 px-3 py-1 rounded-full mb-3">
                  Opción B · Con Familiar
                </span>
                <h3 className="text-xl font-black text-[#0a1628] mb-2">
                  Viaje con Carta de Invitación
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Si tu familiar en España te envió la Carta original, no gastas en hotel: sincronizamos tu pasaje, tu regreso reservado y tu seguro 30.000€ con las fechas exactas de tu Carta.
                </p>
              </div>
              <a
                href={`https://wa.me/51944103890?text=${encodeURIComponent(
                  "¡Hola! Ya tengo mi pasaje y quiero contratar Solo la Carpeta Migratoria para España ($85 USD).\n\n📍 Ref Web: citylandtravel.com/espana [Solo Carpeta]"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-extrabold text-red-600 hover:underline pt-3 border-t border-slate-100 block"
              >
                ¿Ya tienes pasaje? Pide Solo Carpeta desde $85 USD →
              </a>
            </div>

            {/* Calculadora Simple de Bolsa de Viaje España (BOE) */}
            <div className="bg-[#0a1628] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-amber-400/20 text-amber-300 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-3">
                  Calculadora BOE España 2026
                </span>
                <h3 className="text-xl font-black mb-1.5">
                  Bolsa de Viaje según tus Días
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  122,10 € por día (mínimo 1.098,90 € de 1 a 9 días).
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                    <span>Días en tu carpeta:</span>
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
                </div>

                <div className="py-3 border-t border-white/15 mb-4">
                  <span className="text-xs text-emerald-300 block">
                    Monto oficial a acreditar:
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white">
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
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb858] text-white py-3 px-4 rounded-xl text-xs font-extrabold whitespace-nowrap"
              >
                <WhatsAppIcon size={15} />
                <span>Consultar mi caso por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <GuiasEspana />

      {/* 5. PREGUNTAS FRECUENTES */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628]">
              Preguntas Frecuentes sobre el Paquete a España
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS_ESPANA.map((faq) => (
              <div
                key={faq.q}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-2">
                  {textoPrecio(faq.q)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {textoPrecio(faq.a)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
