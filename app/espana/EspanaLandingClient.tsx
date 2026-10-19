"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import ModuloSeguridadYCalculadoraEuropa from "@/components/ModuloSeguridadYCalculadoraEuropa";

// ── 4 Planes Oficiales según Fecha de Viaje ($699, $799, $899, $999) ──
export const PAQUETES_ESPANA = [
  {
    id: "promo-699",
    mes: "PLAN PROMO $699",
    subtitulo: "Fines de Febrero · Marzo · Abril · Mayo",
    precio: 699,
    precioRegular: 1090,
    separaCon: 350,
    tag: "Tarifa Promo",
    tagColor: "bg-emerald-600 text-white",
    img: "/images/espana/palacio-real.jpg",
    monumento: "Palacio Real · Madrid",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent("¡Hola! Quiero más información del paquete a Madrid desde $699.\n\n📍 Ref Web: citylandtravel.com/espana [Plan Promo $699]")}`,
  },
  {
    id: "smart-799",
    mes: "PLAN SMART $799",
    subtitulo: "Junio · Septiembre · Octubre · Noviembre",
    precio: 799,
    precioRegular: 1190,
    separaCon: 400,
    tag: "⭐ El Más Pedido",
    tagColor: "bg-amber-500 text-slate-950",
    img: "/images/espana/gran-via-metropolis.jpg",
    monumento: "Gran Vía · Madrid",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent("¡Hola! Quiero más información del paquete Smart a Madrid desde $799.\n\n📍 Ref Web: citylandtravel.com/espana [Plan Smart $799]")}`,
  },
  {
    id: "plus-899",
    mes: "PLAN PLUS $899",
    subtitulo: "Enero · 1ra Quincena Febrero · Conexiones",
    precio: 899,
    precioRegular: 1290,
    separaCon: 450,
    tag: "Salidas Cercanas",
    tagColor: "bg-blue-600 text-white",
    img: "/images/espana/cibeles.jpg",
    monumento: "Plaza de Cibeles · Madrid",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent("¡Hola! Quiero más información del paquete Plus a España desde $899.\n\n📍 Ref Web: citylandtravel.com/espana [Plan Plus $899]")}`,
  },
  {
    id: "full-999",
    mes: "PLAN FULL $999",
    subtitulo: "Diciembre · Julio · Agosto · Maleta 23 kg",
    precio: 999,
    precioRegular: 1390,
    separaCon: 500,
    tag: "Alta + Bodega 23 kg",
    tagColor: "bg-red-600 text-white",
    img: "/images/espana/puerta-de-alcala.jpg",
    monumento: "Puerta de Alcalá · Madrid",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent("¡Hola! Quiero más información del paquete Full a España con maleta de 23 kg desde $999.\n\n📍 Ref Web: citylandtravel.com/espana [Plan Full $999]")}`,
  },
];

const MODALIDADES_ESPANA = [
  {
    id: "paquete-migratorio-hotel",
    badge: "Modalidad 1 · Viaje sin Carta de Invitación",
    badgeClass: "bg-red-600 text-white",
    titulo: "Paquete Migratorio Completo con Reserva de Hotel + Seguro 30.000€",
    subtitulo: "Ideal si viajas por tu cuenta y necesitas presentar alojamiento confirmado en el aeropuerto",
    etiquetaPrecio: "Desde $699 USD",
    detallePrecio: "Separa hoy con $350 (50% inicial)",
    puntos: [
      "Tu pasaje de avión de ida emitido a tu nombre (Lima → Madrid, Barcelona, Valencia, Sevilla, etc.).",
      "Tu boleto de regreso reservado en sistema el día de tu viaje para presentar tu ida y vuelta en el aeropuerto y en Migraciones.",
      "Tu reserva de hotel confirmada por los días declarados en tu viaje.",
      "Póliza de Seguro Médico Schengen por 30.000€ sin deducible + Check-in hecho 24h antes.",
    ],
    waTexto: "Cotizar Paquete con Hotel ($699)",
    waMensaje:
      "¡Hola! Quiero más información del paquete a Madrid desde $699 (Modalidad con Reserva de Hotel).\n\n📍 Ref Web: citylandtravel.com/espana [Modalidad Hotel $699]",
  },
  {
    id: "carta-invitacion",
    badge: "Modalidad 2 · Con Carta de Invitación Policial",
    badgeClass: "bg-blue-700 text-white",
    titulo: "Paquete Migratorio Sincronizado con tu Carta de Invitación",
    subtitulo: "Si un familiar o amigo en España ya te tramitó la Carta de Invitación en la Comisaría",
    etiquetaPrecio: "Desde $699 USD",
    detallePrecio: "Separa hoy con $350 (50% inicial)",
    puntos: [
      "No gastas en hotel innecesario: cuadramos las fechas exactas de tu salida, tu boleto de regreso para Migraciones y tu seguro con los días de tu Carta.",
      "Incluye Seguro Médico Schengen de 30.000€ sin deducible por exactamente el período de tu Carta de Invitación.",
      "Revisión de tu Carta original y cálculo exacto de tu bolsa de viaje obligatoria (BOE: 122,10 €/día, mínimo 1.098,90 €).",
      "Check-in hecho 24h antes + preparación 1 a 1 para responder con seguridad en Barajas.",
    ],
    waTexto: "Cotizar con Carta de Invitación",
    waMensaje:
      "¡Hola! Tengo Carta de Invitación para España y quiero más información del paquete desde $699.\n\n📍 Ref Web: citylandtravel.com/espana [Modalidad Carta Invitación $699]",
  },
  {
    id: "smart-asesoria-maleta",
    badge: "Modalidad 3 · Plan Smart $799 / Plan Full $999",
    badgeClass: "bg-emerald-700 text-white",
    titulo: "Paquete Smart ($799) o Full con Maleta de 23 kg en Bodega ($999)",
    subtitulo: "Para quienes viajan en temporada media/alta o llevan equipaje grande de 23 kg en bodega",
    etiquetaPrecio: "$799 / $999 USD",
    detallePrecio: "Separa con $400 o $500 (50%)",
    puntos: [
      "Plan Smart ($799 USD): salidas en junio, septiembre, octubre y noviembre con carpeta migratoria completa y asesoría VIP.",
      "Plan Full ($999 USD): salidas en temporada alta (diciembre, julio, agosto) o con maleta grande de 23 kg en bodega.",
      "También emitimos boletos para quienes ya tienen Visado Nacional Tipo D (estudios/trabajo) o tarjeta TIE.",
      "Pago en cuotas flexibles hasta antes de tu fecha de vuelo con contrato formal RUC 20614914239.",
    ],
    waTexto: "Cotizar Plan Smart $799 / Full $999",
    waMensaje:
      "¡Hola! Quiero más información del paquete Smart a Madrid desde $799.\n\n📍 Ref Web: citylandtravel.com/espana [Modalidad Smart $799 / Full $999]",
  },
];

export default function EspanaLandingClient() {
  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      <Navbar />

      {/* 1. Hero Claro, Luminoso y Simétrico */}
      <section className="bg-gradient-to-b from-sky-50/60 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Izquierda */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex flex-wrap items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-5">
                <FlagIcon pais="España" className="w-3.5 h-2.5" />
                <span>6 Años Especializados en Ruta Madrid & Barcelona · Salida Lima (LIM)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0a1628] tracking-tight leading-[1.12] mb-4">
                Paquete Migratorio a{" "}
                <span className="text-red-600">España desde $699 USD</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
                Viaja tranquilo con los <strong>5 documentos que te piden en el aeropuerto</strong>: tu pasaje de avión de ida + tu{" "}
                <strong className="text-[#0a1628]">boleto de regreso reservado en sistema para Migraciones</strong> + reserva de hotel + Seguro Schengen de 30.000€ + check-in 24h antes.{" "}
                <strong className="text-emerald-700 font-extrabold">
                  Separa hoy con el 50% ($350 USD)
                </strong>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola! Quiero más información del paquete a Madrid desde $699.\n\n📍 Ref Web: citylandtravel.com/espana [Hero $699]")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-md cursor-pointer"
                >
                  <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2" />
                  <span>COTIZAR PAQUETE DESDE $699 · Separa con $350</span>
                </a>

                <a
                  href="#tarifas"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer"
                >
                  <span>Ver Planes $699 · $799 · $899 · $999 ↓</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-700 pt-5 border-t border-slate-200/80">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Solvencia BOE: 122,10 €/día
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Agencia Formal RUC 20614914239
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Oficina en Av. Antúnez de Mayolo 814, Los Olivos
                </span>
              </div>
            </div>

            {/* Derecha: Tarjeta Luminosa de Madrid */}
            <div className="lg:col-span-5">
              <div className="card-interactive group bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/espana/plaza-mayor.jpg"
                    alt="Plaza Mayor de Madrid España - Cityland Travel"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais="España" className="w-3.5 h-2.5" />
                      Plaza Mayor · Madrid
                    </span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      5 Documentos Incluidos
                    </span>
                  </div>
                </div>

                {/* Pie Blanco Limpio */}
                <div className="p-5 bg-white space-y-3">
                  <div className="border-b border-slate-100 pb-2.5">
                    <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">
                      Pasaje Ida + Regreso Reservado + Hotel + Seguro 30.000€ + Check-in
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#0a1628] leading-tight mt-0.5">
                      Tu llegada a España con todo en regla
                    </h2>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                        Paquete Migratorio
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-extrabold uppercase text-red-600">Desde</span>
                        <span className="text-3xl sm:text-4xl font-black text-[#0a1628] tracking-tight leading-none">
                          $699
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                        Separa con 50% ($350 USD)
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola! Quiero más información del paquete a Madrid desde $699.\n\n📍 Ref Web: citylandtravel.com/espana [Tarjeta Principal $699]")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Cotizar $699</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE EXPLICATIVO EN SENCILLO PERUANO: ¿ES IDA Y VUELTA O ME ESTÁN ENGAÑANDO? */}
      <section className="py-12 sm:py-16 bg-amber-50/80 border-b border-amber-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-md">
            <div className="max-w-3xl mb-6">
              <span className="inline-block bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                La Verdad Clara · Sin Letra Chica
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
                ¿El Paquete es ida y vuelta? Así funciona para que no gastes el doble por gusto
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
                Si tú viajas a España para <strong>quedarte a trabajar, hacer tu vida allá o reencontrarte con tu familia</strong>, no tiene sentido que pagues $1,500 o $1,800 por un avión de regreso al que <strong>no te vas a subir</strong>. Pero como en el Aeropuerto Jorge Chávez y en Migraciones de Madrid-Barajas <strong>sí es obligatorio mostrar tu boleto de regreso</strong> para que te dejen viajar, nuestro Paquete Migratorio te entrega todo listo:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  num: "1",
                  titulo: "Pasaje de avión de ida",
                  desc: "Boleto oficial emitido a tu nombre para volar de Lima a España.",
                },
                {
                  num: "2",
                  titulo: "Boleto de regreso para Migraciones",
                  desc: "Reserva oficial activa en sistema el día de tu vuelo para demostrar tu retorno sin pagar doble.",
                },
                {
                  num: "3",
                  titulo: "Reserva de hotel confirmada",
                  desc: "Alojamiento verificable por los días declarados (o cuadre exacto con tu Carta de Invitación).",
                },
                {
                  num: "4",
                  titulo: "Seguro médico de 30.000€",
                  desc: "Póliza Schengen obligatoria sin deducible ni copago por todos los días de tu viaje.",
                },
                {
                  num: "5",
                  titulo: "Check-in 24h antes y guía",
                  desc: "Dejamos listos tus pases de abordar y te preparamos paso a paso para pasar Migraciones tranquilo.",
                },
              ].map((paso) => (
                <div
                  key={paso.num}
                  className="bg-slate-50 rounded-2xl p-4 border border-slate-200"
                >
                  <div className="w-8 h-8 rounded-xl bg-red-600 text-white font-black flex items-center justify-center text-sm mb-2.5">
                    {paso.num}
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0a1628] mb-1">
                    {paso.titulo}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {paso.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOS 4 PLANES OFICIALES POR TEMPORADA ($699, $799, $899, $999) */}
      <section id="tarifas" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Escala Oficial de Precios según tu Fecha de Viaje
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight">
                Elige tu Plan a España ($699 · $799 · $899 · $999)
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">
              Separa con el 50% y paga el resto en cuotas antes de tu vuelo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAQUETES_ESPANA.map((p) => (
              <article
                key={p.id}
                className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col justify-between h-full"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={p.img}
                    alt={`Paquete a España ${p.mes}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${p.tagColor}`}>
                      {p.tag}
                    </span>
                    <span className="text-[10px] font-bold bg-white/95 text-[#0a1628] px-2.5 py-1 rounded-full shadow-2xs">
                      Separa con ${p.separaCon}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 block">
                      {p.monumento}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0a1628] tracking-tight leading-tight mt-0.5 mb-1">
                      {p.mes}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mb-3">
                      {p.subtitulo}
                    </p>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 border-b border-slate-100 pb-3">
                      <span>✓ Ida + Regreso RF</span>
                      <span>✓ 30.000€</span>
                      <span>✓ Hotel + Guía</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[10px] font-extrabold uppercase text-red-600">
                          Desde
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 line-through">
                          ${p.precioRegular.toLocaleString("en-US")}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-black text-[#0a1628] tracking-tight leading-none">
                          ${p.precio.toLocaleString("en-US")}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700">
                      50%: ${p.separaCon} USD
                    </span>
                  </div>

                  <a
                    href={p.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Quiero el {p.mes}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LAS 3 MODALIDADES SEGÚN TU PERFIL DE VIAJE */}
      <section id="modalidades" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Soluciones Reales según tu Situación Documental
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight">
                3 Modalidades para Viajar a España desde Perú
              </h2>
            </div>
            <Link
              href="/paquetes-migratorios"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-red-600 hover:underline shrink-0"
            >
              <span>Ver las 1,000 Super-Landings de Paquetes Migratorios →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {MODALIDADES_ESPANA.map((m) => (
              <div
                key={m.id}
                className="rounded-3xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div>
                  <span className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3.5 ${m.badgeClass}`}>
                    {m.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1628] leading-snug mb-1.5">
                    {m.titulo}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4">{m.subtitulo}</p>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200/80 mb-5">
                    <div className="flex items-baseline justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                      <span className="text-xl font-black text-[#0a1628]">{m.etiquetaPrecio}</span>
                      <span className="text-[11px] font-bold text-emerald-700">{m.detallePrecio}</span>
                    </div>
                    <ul className="space-y-2">
                      {m.puntos.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                          <span className="text-emerald-600 font-extrabold shrink-0 mt-0.5">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent(m.waMensaje)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>{m.waTexto}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MÓDULO INTERACTIVO: CALCULADORA BOE 2026 + PRE-CALIFICADOR + VERIFICADOR PNR/IATA */}
      <ModuloSeguridadYCalculadoraEuropa
        destinoInicial="Madrid (España)"
        refWebRuta="/espana"
      />

      {/* 5. Sección Luminosa de Respaldo Barajas + Enlaces Rápidos a las Super-Landings */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch mb-10">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Control Migratorio Madrid-Barajas & Barcelona-El Prat
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight leading-snug mb-2">
                ¿Dudas sobre requisitos, Carta de Invitación o el sistema EES 2026?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl">
                Nuestro equipo de 12 asesores especialistas prepara contigo la carpeta exacta que solicita la Policía Nacional en el aeropuerto: solvencia económica BOE, reserva verificable o Carta de Invitación y seguro Schengen de 30.000€.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola! Quiero más información del paquete a Madrid desde $699 y asesoría para Barajas.\n\n📍 Ref Web: citylandtravel.com/espana [Asesoría Barajas]")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Hablar con Asesora Especialista</span>
                </a>
                <Link
                  href="/paquetes-migratorios"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-colors"
                >
                  <span>Explorar las 400 Super-Landings de España →</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] w-full overflow-hidden">
              <Image
                src="/images/espana/barajas.jpg"
                alt="Aeropuerto Adolfo Suárez Madrid-Barajas Terminal 4"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Enlaces Internos a las Super-Landings de Ciudades de España */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3">
              Super-Landings de Paquetes Migratorios por Ciudad en España (Desde $699 USD):
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇪🇸 Paquete Madrid desde $699", href: "/paquetes-migratorios/paquete-migratorio-madrid-desde-699" },
                { label: "🇪🇸 Paquete Smart Madrid $799", href: "/paquetes-migratorios/paquete-migratorio-madrid-smart-799" },
                { label: "🇪🇸 Paquete Barcelona desde $699", href: "/paquetes-migratorios/paquete-migratorio-barcelona-desde-699" },
                { label: "🇪🇸 Paquete Valencia desde $699", href: "/paquetes-migratorios/paquete-migratorio-valencia-desde-699" },
                { label: "🇪🇸 Paquete Sevilla desde $699", href: "/paquetes-migratorios/paquete-migratorio-sevilla-desde-699" },
                { label: "🇪🇸 Paquete Málaga desde $699", href: "/paquetes-migratorios/paquete-migratorio-malaga-desde-699" },
                { label: "🇪🇸 Paquete Bilbao desde $699", href: "/paquetes-migratorios/paquete-migratorio-bilbao-desde-699" },
                { label: "🇪🇸 Paquete Zaragoza desde $699", href: "/paquetes-migratorios/paquete-migratorio-zaragoza-desde-699" },
                { label: "🇪🇸 Paquete Alicante desde $699", href: "/paquetes-migratorios/paquete-migratorio-alicante-desde-699" },
                { label: "🇪🇸 Paquete Murcia desde $699", href: "/paquetes-migratorios/paquete-migratorio-murcia-desde-699" },
                { label: "🇪🇸 Paquete Palma de Mallorca desde $699", href: "/paquetes-migratorios/paquete-migratorio-palma-de-mallorca-desde-699" },
                { label: "🇮🇹 Paquetes Migratorios Italia", href: "/italia" },
                { label: "🇫🇷 Paquetes Migratorios Francia", href: "/francia" },
                { label: "📂 Ver las 1,000 Super-Landings", href: "/paquetes-migratorios" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold text-slate-700 hover:text-red-600 bg-white hover:bg-red-50 border border-slate-200/80 px-3 py-1.5 rounded-full transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 6. Botón Flotante */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola! Quiero más información del paquete a Madrid desde $699.\n\n📍 Ref Web: citylandtravel.com/espana [Botón Flotante]")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl cursor-pointer"
          aria-label="Chatear por WhatsApp"
        >
          <WhatsAppIcon size={22} />
          <span className="hidden sm:inline font-bold text-xs sm:text-sm">
            WhatsApp España ($699)
          </span>
        </a>
      </div>
    </div>
  );
}
