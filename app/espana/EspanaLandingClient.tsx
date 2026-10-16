"use client";

import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";
import FlagIcon from "@/components/icons/FlagIcon";

// ── 4 Salidas Oficiales con Fotografías Reales de Madrid y WhatsApp Individual ──
export const PAQUETES_ESPANA = [
  {
    id: "noviembre",
    mes: "NOVIEMBRE",
    subtitulo: "Salidas programadas 2026",
    precio: 695,
    tag: "Promoción",
    tagColor: "bg-blue-600 text-white",
    img: "/images/espana/gran-via-metropolis.jpg",
    monumento: "Gran Vía · Madrid",
    waUrl: `https://wa.me/51944280151?text=${encodeURIComponent("¡Hola! Deseo cotizar el Paquete Migratorio a España para NOVIEMBRE ($695 USD). Quisiera separar con el 50% de inicial.")}`,
  },
  {
    id: "diciembre",
    mes: "DICIEMBRE",
    subtitulo: "Navidad & Fin de Año",
    precio: 875,
    tag: "Alta Demanda",
    tagColor: "bg-red-600 text-white",
    img: "/images/espana/puerta-de-alcala.jpg",
    monumento: "Puerta de Alcalá · Madrid",
    waUrl: `https://wa.me/51938845086?text=${encodeURIComponent("¡Hola! Deseo cotizar el Paquete Migratorio a España para DICIEMBRE ($875 USD). Quisiera separar con el 50% de inicial.")}`,
  },
  {
    id: "enero",
    mes: "ENERO",
    subtitulo: "Inicio de Año 2027",
    precio: 875,
    tag: "Cupos Limitados",
    tagColor: "bg-amber-600 text-white",
    img: "/images/espana/cibeles.jpg",
    monumento: "Plaza de Cibeles · Madrid",
    waUrl: `https://wa.me/51906642487?text=${encodeURIComponent("¡Hola! Deseo cotizar el Paquete Migratorio a España para ENERO ($875 USD). Quisiera separar con el 50% de inicial.")}`,
  },
  {
    id: "mar-abr-may",
    mes: "MARZO • ABRIL • MAYO",
    subtitulo: "Primavera Europea 2027",
    precio: 699,
    tag: "Mejor Tarifa",
    tagColor: "bg-emerald-600 text-white",
    img: "/images/espana/palacio-real.jpg",
    monumento: "Palacio Real · Madrid",
    waUrl: `https://wa.me/51944031724?text=${encodeURIComponent("¡Hola! Deseo cotizar el Paquete Migratorio a España para MARZO/ABRIL/MAYO ($699 USD). Quisiera separar con el 50% de inicial.")}`,
  },
];

export default function EspanaLandingClient() {
  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      {/* 1. Header Limpio Estilo Aerolínea */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label="Cityland Travel - Inicio" className="flex items-center">
              <div className="relative h-12 sm:h-14 w-40 sm:w-48 flex items-center">
                <Image
                  src="/logo-transparent.png"
                  alt="Cityland Travel - Agencia de Viajes"
                  fill
                  priority
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 border-l border-slate-200 pl-4">
              RUC 20614914239 · Los Olivos, Lima
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-block text-xs font-bold text-slate-600 hover:text-[#0a1628] px-3 py-2"
            >
              Ver más destinos
            </Link>
            {/* Botón Header -> Asesora Lucero (983 882 504) */}
            <a
              href={`https://wa.me/51983882504?text=${encodeURIComponent("¡Hola Lucero! Te contacto desde la web de España. Deseo información de paquetes migratorios.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold cursor-pointer"
            >
              <WhatsAppIcon size={16} />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Cinemático de Madrid (Sin saturación de cuadros ni textos largos) */}
      <section className="relative bg-[#0a1628] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/espana/plaza-mayor.jpg"
            alt="Plaza Mayor de Madrid España - Cityland Travel"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/95 via-[#0a1628]/80 to-[#0a1628]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-transparent to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-white mb-5">
                <FlagIcon pais="España" className="w-4 h-3" />
                <span>Ruta Especializada Lima ➔ Madrid & Barcelona · Sin Visa</span>
              </div>

              <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.93] mb-3">
                PAQUETES MIGRATORIOS A{" "}
                <span className="text-amber-400">ESPAÑA</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-xl mb-7 font-normal">
                Boleto aéreo confirmado + Seguro Schengen 30.000€ + Hotel + Asesoría Barajas.{" "}
                <strong className="text-white font-bold underline decoration-amber-400 decoration-2 underline-offset-4">
                  Separa hoy con el 50%
                </strong>
                .
              </p>

              {/* Botón Principal Hero -> Asesora Línea 1 (906 450 098) */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={`https://wa.me/51906450098?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo reservar el Paquete Migratorio a España con el 50% de inicial.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-full text-sm sm:text-base font-extrabold shadow-xl cursor-pointer"
                >
                  <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2" />
                  <span>RESERVA AHORA · 50% Inicial</span>
                </a>

                <a
                  href="#tarifas"
                  className="inline-flex items-center justify-center gap-2 bg-white/12 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 px-6 py-4 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer"
                >
                  <span>Ver Fechas y Precios ↓</span>
                </a>
              </div>
            </div>

            {/* Tarjeta Flotante Minimalista Derecha -> Asesora Línea 2 (942 086 698) */}
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="bg-black/45 backdrop-blur-xl border border-white/15 rounded-3xl p-6 max-w-sm w-full shadow-2xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 block mb-1">
                  Tarifa Oficial Promocional
                </span>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-xs font-bold text-slate-300">DESDE</span>
                  <span className="font-[family-name:var(--font-bebas)] text-5xl text-white leading-none">
                    $695
                  </span>
                  <span className="text-sm font-bold text-slate-300">USD</span>
                </div>
                <p className="text-xs text-emerald-300 font-semibold mb-5">
                  Separa tu cupo con $348 USD (50%)
                </p>

                <a
                  href={`https://wa.me/51942086698?text=${encodeURIComponent("¡Hola! Deseo verificar disponibilidad para viajar a España.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-5 rounded-full text-xs sm:text-sm font-extrabold cursor-pointer"
                >
                  <WhatsAppIcon size={17} />
                  <span>Verificar Fechas por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Las 4 Salidas Oficiales (Tarjetas Visuales Limpias, Cero Textos Largos) */}
      <section id="tarifas" className="py-14 sm:py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Salidas Confirmadas desde Lima
              </span>
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] tracking-tight leading-none">
                ELIGE TU MES DE VIAJE A ESPAÑA
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">
              Incluye Vuelo IATA + Seguro Schengen 30.000€ + Hotel + Asesoría
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAQUETES_ESPANA.map((p) => (
              <article
                key={p.id}
                className="card-interactive group bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {/* Fotografía grande de Madrid (h-56) */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={p.img}
                    alt={`Paquete Migratorio a España ${p.mes}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${p.tagColor}`}>
                      {p.tag}
                    </span>
                    <span className="text-[10px] font-bold bg-black/55 text-white backdrop-blur-md px-2.5 py-1 rounded-full">
                      50% Inicial
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] font-medium text-amber-300 block">
                      {p.monumento}
                    </span>
                    <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-white leading-none mt-0.5">
                      {p.mes}
                    </h3>
                  </div>
                </div>

                {/* Pie limpio sin listas repetitivas */}
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 border-b border-slate-100 pb-3">
                    <span>✈ Vuelo I/V</span>
                    <span>•</span>
                    <span>🛡 30.000€</span>
                    <span>•</span>
                    <span>🏨 Hotel + Guía</span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block leading-none mb-1">
                        Tarifa
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-[family-name:var(--font-bebas)] text-4xl text-[#0a1628] leading-none">
                          ${p.precio}
                        </span>
                        <span className="text-xs font-bold text-slate-500">USD</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700">
                      Inicial ${(p.precio * 0.5).toFixed(0)} USD
                    </span>
                  </div>

                  <a
                    href={p.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-full text-xs sm:text-sm font-bold cursor-pointer"
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

      {/* 4. Franja Visual de Inclusiones (Sin cuadros recargados ni textos largos) + Banner Barajas */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-200/80">
            {[
              { titulo: "Boleto Aéreo IATA", sub: "Iberia, Air Europa o LATAM con equipaje" },
              { titulo: "Seguro 30.000€", sub: "Póliza médica oficial Espacio Schengen" },
              { titulo: "Reserva de Hotel", sub: "Sustento verificable para migraciones" },
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

          {/* Banner Barajas T4 -> Asesora Lucero (983 882 504) */}
          <div className="relative rounded-3xl overflow-hidden bg-[#0a1628] text-white shadow-xl">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/espana/barajas.jpg"
                alt="Aeropuerto Adolfo Suárez Madrid-Barajas Terminal 4"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/95 via-[#0a1628]/80 to-transparent" />
            </div>

            <div className="relative z-10 p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-1">
                  Control Migratorio Madrid-Barajas
                </span>
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-white leading-none mb-2">
                  ¿DUDAS SOBRE REQUISITOS O EL INGRESO A ESPAÑA?
                </h3>
                <p className="text-xs sm:text-sm text-slate-200">
                  Recibe asesoría directa de nuestra especialista en ruta Europa.
                </p>
              </div>

              <a
                href={`https://wa.me/51983882504?text=${encodeURIComponent("¡Hola Lucero! Deseo asesoría sobre las preguntas de migraciones en Barajas.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-extrabold cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>Hablar con Asesora Lucero</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer Corporativo Limpio */}
      <footer className="bg-[#0a1628] text-white py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-300 text-center sm:text-left space-y-1">
            <p className="font-bold text-white text-sm">Cityland Travel E.I.R.L. · RUC 20614914239</p>
            <p>Av. Antúnez de Mayolo N. 814, Los Olivos, Lima · Lun–Sáb 9:00 am – 7:00 pm</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Botón Footer -> Asesora Línea 1 (906 450 098) */}
            <a
              href={`https://wa.me/51906450098?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo cotizar mi viaje a España.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full text-xs font-bold cursor-pointer"
            >
              <WhatsAppIcon size={15} />
              <span>WhatsApp Oficial</span>
            </a>
            <Link href="/" className="text-xs text-slate-400 hover:text-white underline">
              Web Principal
            </Link>
          </div>
        </div>
      </footer>

      {/* 6. Botón Flotante Permanente -> Asesora Línea 2 (942 086 698) */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={`https://wa.me/51942086698?text=${encodeURIComponent("¡Hola! Deseo cotizar el Paquete Migratorio a España.")}`}
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
