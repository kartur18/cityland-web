"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import ModuloSeguridadYCalculadoraEuropa from "@/components/ModuloSeguridadYCalculadoraEuropa";

// ── 4 Salidas Oficiales con Fotografías Reales de Madrid y Tarifas en Dólares (Desde $ USD) ──
export const PAQUETES_ESPANA = [
  {
    id: "noviembre",
    mes: "NOVIEMBRE",
    subtitulo: "Salidas programadas 2026",
    precio: 1090,
    precioRegular: 1290,
    tag: "Promoción",
    tagColor: "bg-blue-600 text-white",
    img: "/images/espana/gran-via-metropolis.jpg",
    monumento: "Gran Vía · Madrid",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo cotizar el Paquete a España para NOVIEMBRE (Desde $1,090). Quisiera separar con el 50% de inicial.\n\n📍 Ref Web: citylandtravel.com/espana [Noviembre]")}`,
  },
  {
    id: "diciembre",
    mes: "DICIEMBRE",
    subtitulo: "Navidad & Fin de Año",
    precio: 1290,
    precioRegular: 1490,
    tag: "Alta Demanda",
    tagColor: "bg-red-600 text-white",
    img: "/images/espana/puerta-de-alcala.jpg",
    monumento: "Puerta de Alcalá · Madrid",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo cotizar el Paquete a España para DICIEMBRE (Desde $1,290). Quisiera separar con el 50% de inicial.\n\n📍 Ref Web: citylandtravel.com/espana [Diciembre]")}`,
  },
  {
    id: "enero",
    mes: "ENERO",
    subtitulo: "Inicio de Año 2027",
    precio: 1190,
    precioRegular: 1390,
    tag: "Cupos Limitados",
    tagColor: "bg-amber-600 text-white",
    img: "/images/espana/cibeles.jpg",
    monumento: "Plaza de Cibeles · Madrid",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo cotizar el Paquete a España para ENERO (Desde $1,190). Quisiera separar con el 50% de inicial.\n\n📍 Ref Web: citylandtravel.com/espana [Enero]")}`,
  },
  {
    id: "mar-abr-may",
    mes: "MARZO • ABRIL • MAYO",
    subtitulo: "Primavera Europea 2027",
    precio: 1090,
    precioRegular: 1290,
    tag: "Mejor Tarifa",
    tagColor: "bg-emerald-600 text-white",
    img: "/images/espana/palacio-real.jpg",
    monumento: "Palacio Real · Madrid",
    waUrl: `https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo cotizar el Paquete a España para MARZO/ABRIL/MAYO (Desde $1,090). Quisiera separar con el 50% de inicial.\n\n📍 Ref Web: citylandtravel.com/espana [Primavera]")}`,
  },
];

const MODALIDADES_ESPANA = [
  {
    id: "con-hotel",
    badge: "Modalidad 1 · Turismo Sin Visa (< 90 días)",
    badgeClass: "bg-red-600 text-white",
    titulo: "Paquete con Reserva de Hotel Verificable + Seguro 30.000€",
    subtitulo: "Ideal si viajas por turismo y NO cuentas con Carta de Invitación policial",
    etiquetaPrecio: "Desde $1,350",
    detallePrecio: "Separa hoy con $675 (50% inicial)",
    puntos: [
      "Boleto aéreo Lima – Madrid / Barcelona (Ida y Vuelta dentro de 90 días) con PNR y E-Ticket IATA de 13 dígitos.",
      "Reserva de hotel verificable por todas las noches del viaje para control fronterizo en Barajas o El Prat.",
      "Póliza de Seguro Médico Schengen por 30.000€ sin deducible ni copago.",
      "Asesoría 1 a 1 sobre solvencia económica BOE 2026 (122,10 €/día · mínimo 1.098,90 €) y sistema biométrico EES.",
    ],
    waTexto: "Cotizar Paquete con Hotel",
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar la Modalidad 1: Paquete a España con Reserva de Hotel Verificable + Seguro 30.000€ (Desde $1,350).\n\n📍 Ref Web: citylandtravel.com/espana [Modalidad Hotel]",
  },
  {
    id: "carta-invitacion",
    badge: "Modalidad 2 · Visita Familiar en España",
    badgeClass: "bg-blue-700 text-white",
    titulo: "Vuelo Ida y Vuelta + Seguro 30.000€ (Con Carta de Invitación)",
    subtitulo: "Si ya tienes Carta de Invitación original tramitada en Comisaría de Policía en España",
    etiquetaPrecio: "Desde $1,090",
    detallePrecio: "Separa hoy con $545 (50% inicial)",
    puntos: [
      "No pagas hotel innecesario: ajustamos tu boleto de ida y vuelta exactamente al periodo autorizado en tu Carta de Invitación.",
      "Incluye Póliza de Seguro Schengen de 30.000€ sin deducible por los mismos días de tu estancia.",
      "Verificación documental de tu Carta original y orientación sobre la bolsa de viaje obligatoria (mínimo 1.098,90 €).",
      "Salidas desde el Aeropuerto Internacional Jorge Chávez (LIM) con check-in gestionado por tu asesor.",
    ],
    waTexto: "Cotizar con Carta de Invitación",
    waMensaje:
      "¡Hola Cityland Travel! Cuento con Carta de Invitación para España y deseo cotizar la Modalidad 2 (Vuelo Ida y Vuelta + Seguro Schengen 30.000€ sin hotel, Desde $1,090).\n\n📍 Ref Web: citylandtravel.com/espana [Modalidad Carta Invitación]",
  },
  {
    id: "visado-d-tie",
    badge: "Modalidad 3 · Estudios RD 1155/2024, Visado D o TIE",
    badgeClass: "bg-emerald-700 text-white",
    titulo: "Boleto Solo Ida (One-Way) o 2 Maletas de 23 kg (46 kg)",
    subtitulo: "Exclusivo para titulares de Visado Nacional Tipo D, TIE vigente o pasaporte europeo",
    etiquetaPrecio: "Desde $690 Solo Ida",
    detallePrecio: "O $1,180 I/V con 2 Maletas (46 kg)",
    puntos: [
      "Emisión legal de pasaje Solo Ida (One-Way desde $690) para estudiantes, reagrupación familiar, permiso de trabajo o residentes TIE.",
      "Tarifas especiales Ida y Vuelta con 2 maletas de 23 kg en bodega (total 46 kg) desde $1,180.",
      "Seguro médico internacional sin copagos ni carencias para trámites consulares (RD 1155/2024).",
      "También emitimos vuelos desde Madrid o Barcelona hacia Lima y compra desde España para familiares en Perú.",
    ],
    waTexto: "Cotizar Solo Ida / 2 Maletas",
    waMensaje:
      "¡Hola Cityland Travel! Tengo Visado Nacional Tipo D / TIE (o viajo con 2 maletas de 23 kg) y deseo cotizar la Modalidad 3 para España.\n\n📍 Ref Web: citylandtravel.com/espana [Modalidad Visado D / 2 Maletas]",
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
                Paquetes y Vuelos a{" "}
                <span className="text-red-600">España con Carpeta Migratoria</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
                Boleto aéreo confirmado (código PNR + E-Ticket IATA de 13 dígitos) + Seguro Schengen de 30.000€ + Reserva de Hotel o validación de Carta de Invitación.{" "}
                <strong className="text-[#0a1628] font-bold">
                  Separa hoy tu cupo con el 50% de inicial
                </strong>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo reservar el Paquete a España (Desde $1,090) separando con el 50% de inicial.\n\n📍 Ref Web: citylandtravel.com/espana [Hero CTA]")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-md cursor-pointer"
                >
                  <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2" />
                  <span>RESERVAR AHORA · 50% Inicial</span>
                </a>

                <a
                  href="#modalidades"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer"
                >
                  <span>Elegir Modalidad y Fechas ↓</span>
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

            {/* Derecha: Tarjeta Luminosa de Madrid (Foto 100% limpia sin textos encima) */}
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
                      Carpeta Completa
                    </span>
                  </div>
                </div>

                {/* Pie Blanco Limpio */}
                <div className="p-5 bg-white space-y-3">
                  <div className="border-b border-slate-100 pb-2.5">
                    <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">
                      Vuelo Confirmado + Seguro 30.000€ + Hotel + Asesoría
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#0a1628] leading-tight mt-0.5">
                      Tu llegada a España con todo resuelto
                    </h2>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                        Carpeta Migratoria
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-extrabold uppercase text-red-600">Desde</span>
                        <span className="text-3xl sm:text-4xl font-black text-[#0a1628] tracking-tight leading-none">
                          $1,090
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                        Separa con 50% ($545)
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo verificar disponibilidad de fechas para viajar a España (Desde $1,090).\n\n📍 Ref Web: citylandtravel.com/espana [Tarjeta Principal]")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Verificar Fechas</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NUEVA SECCIÓN: LAS 3 MODALIDADES SEGÚN TU PERFIL DE VIAJE */}
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
              href="/guia-europa"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-red-600 hover:underline shrink-0"
            >
              <span>Ver Guía Oficial Europa 2026 (BOE, EES y PNR) →</span>
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

      {/* 3. Las 4 Salidas Oficiales por Temporada */}
      <section id="tarifas" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Salidas Confirmadas desde Lima
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight">
                Elige tu Mes de Viaje a España
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">
              Todas las tarifas están expresadas en dólares americanos con impuestos incluidos
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
                      50% Inicial
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 block">
                      {p.monumento}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0a1628] tracking-tight leading-tight mt-0.5 mb-3">
                      {p.mes}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 border-b border-slate-100 pb-3">
                      <span>✓ Vuelo I/V</span>
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
                      Inicial ${Math.round(p.precio * 0.5).toLocaleString("en-US")}
                    </span>
                  </div>

                  <a
                    href={p.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Cotizar {p.mes.split(" ")[0]}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MÓDULO INTERACTIVO: CALCULADORA BOE 2026 + PRE-CALIFICADOR + VERIFICADOR PNR/IATA */}
      <ModuloSeguridadYCalculadoraEuropa destinoInicial="Madrid y Barcelona (España)" />

      {/* 5. Sección Luminosa de Respaldo Barajas + Enlaces Rápidos del Silo España */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-200/80">
            {[
              { titulo: "Boleto Aéreo Confirmado", sub: "Iberia (075), Air Europa (996), Plus Ultra (649) o LATAM (045)" },
              { titulo: "Seguro 30.000€", sub: "Póliza médica oficial sin deducible ni copago" },
              { titulo: "Solvencia BOE 2026", sub: "Cálculo exacto: 122,10 €/día (mín. 1.098,90 €)" },
              { titulo: "Asesoría Barajas 1 a 1", sub: "Preparación completa antes de tu vuelo" },
            ].map((item) => (
              <div key={item.titulo} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-[#0a1628]">{item.titulo}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

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
                  href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo asesoría especializada sobre los requisitos y preguntas de migraciones en Madrid-Barajas.\n\n📍 Ref Web: citylandtravel.com/espana [Asesoría Barajas]")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Hablar con Asesora Especialista</span>
                </a>
                <Link
                  href="/guia-europa"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-colors"
                >
                  <span>Abrir Guía Oficial Europa 2026 →</span>
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

          {/* Enlaces Internos del Silo España */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3">
              Rutas y Guías Más Consultadas para Viajar a España:
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Guía Oficial Europa 2026", href: "/guia-europa" },
                { label: "Vuelos Lima a Madrid", href: "/vuelos/lima-a-madrid" },
                { label: "Vuelos Lima a Barcelona", href: "/vuelos/lima-a-barcelona" },
                { label: "Vuelos con 2 Maletas 23 kg Lima – Madrid", href: "/viajes/vuelos-con-2-maletas-lima-madrid" },
                { label: "Vuelos Madrid a Lima (Residentes)", href: "/viajes/vuelos-con-2-maletas-madrid-lima" },
                { label: "Guía Carta de Invitación España", href: "/viajes/requisitos-carta-de-invitacion-espana-peru" },
                { label: "Vuelos Iberia Lima – Madrid", href: "/viajes/aerolinea-iberia-lima-madrid" },
                { label: "Vuelos Air Europa Lima – Madrid", href: "/viajes/aerolinea-air-europa-lima-madrid" },
                { label: "Vuelos Plus Ultra Lima – Madrid", href: "/viajes/aerolinea-plus-ultra-lima-madrid" },
                { label: "Verificar Código PNR y Boleto IATA", href: "/blog/como-verificar-codigo-reserva-pnr-aerolinea" },
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
          href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo cotizar el Paquete a España.\n\n📍 Ref Web: citylandtravel.com/espana [Botón Flotante]")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl cursor-pointer"
          aria-label="Chatear por WhatsApp"
        >
          <WhatsAppIcon size={22} />
          <span className="hidden sm:inline font-bold text-xs sm:text-sm">
            WhatsApp España
          </span>
        </a>
      </div>
    </div>
  );
}
