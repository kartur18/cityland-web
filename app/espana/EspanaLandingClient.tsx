"use client";

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

export default function EspanaLandingClient() {
  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      
      {/* 1. Barra Superior Corporativa */}
      <div className="bg-[#0a1628] text-white/90 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Agencia Formal SUNAT · RUC 20614914239
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-slate-300">
              Av. Antúnez de Mayolo N. 814, Los Olivos, Lima
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs text-slate-300 hover:text-white transition-colors underline"
            >
              Ir a Web Principal
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Header con Logotipo Oficial Cityland Travel y Botón Directo a Asesora Lucero (Línea 1: 983 882 504) */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 py-3 sm:py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" aria-label="Cityland Travel - Inicio" className="flex items-center group">
            <div className="relative h-14 sm:h-18 lg:h-20 w-48 sm:w-60 lg:w-68 flex items-center transition-transform group-hover:scale-[1.01]">
              <Image
                src="/logo-transparent.png"
                alt="Cityland Travel - Agencia de Viajes"
                fill
                priority
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 240px, 272px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Botón Header -> Asesora Lucero (983 882 504) */}
          <a
            href={`https://wa.me/51983882504?text=${encodeURIComponent("¡Hola Lucero! Te contacto desde la web de España. Deseo información de paquetes migratorios.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 cursor-pointer"
          >
            <WhatsAppIcon size={16} />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>
      </header>

      {/* 3. Hero Section (Fiel al Flyer Oficial con Logotipo y Datos Corporativos) */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100/60 pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna de Texto: Titular del Flyer */}
            <div className="lg:col-span-7 text-left">
              
              {/* Badge con Logotipo Oficial en el Hero */}
              <div className="inline-flex items-center gap-3 bg-white border border-slate-200/90 rounded-2xl p-2 pr-4 shadow-2xs mb-4">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center shrink-0">
                  <Image
                    src="/logo-oficial.png"
                    alt="Cityland Travel"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-black text-red-600 uppercase tracking-wider block leading-tight">
                    Cityland Travel · Agencia de Viajes
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold block leading-tight flex items-center gap-1.5">
                    <FlagIcon pais="España" className="w-3 h-2" />
                    Ruta Especializada Madrid & Barcelona 2026
                  </span>
                </div>
              </div>

              {/* Título Principal Idéntico al Flyer */}
              <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-6xl lg:text-7xl text-[#0a1628] tracking-tight leading-[0.94] mb-2">
                PAQUETES MIGRATORIOS A<br />
                <span className="text-red-600 relative inline-block">
                  ESPAÑA
                  <span className="absolute -bottom-1.5 left-0 right-0 h-1.5 rounded-full bg-gradient-to-r from-red-600 via-amber-400 to-red-600" />
                </span>
              </h1>

              <p className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl text-slate-600 tracking-wide mt-2 mb-4">
                Tu oportunidad en España
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl font-normal">
                Viaja a Europa con la carpeta completa: boleto aéreo confirmado con equipaje, seguro médico Schengen de 30.000€, sustento de hospedaje y asesoría personalizada para pasar el control migratorio de Barajas.
              </p>

              {/* Botón Principal Hero -> Asesora Línea 1 (906 450 098) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                <a
                  href={`https://wa.me/51906450098?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo reservar el Paquete Migratorio a España con el 50% de inicial.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-2xl text-sm sm:text-base font-bold shadow-lg shadow-red-500/25 hover:shadow-xl transition-all cursor-pointer"
                >
                  <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2" />
                  <span>RESERVA AHORA</span>
                  <span className="text-xs bg-black/20 px-2 py-0.5 rounded-lg">
                    Separa con 50%
                  </span>
                </a>

                <a
                  href="#tarifas"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-5 py-3.5 rounded-2xl text-sm font-bold shadow-2xs transition-all cursor-pointer"
                >
                  <span>Ver Fechas y Precios</span>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
                </a>
              </div>

              {/* Barra de 3 Pilares Idénticos al Flyer */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Asesoría personalizada
                  </span>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Seguridad y confianza
                  </span>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Acompañamiento en todo el proceso
                  </span>
                </div>
              </div>

            </div>

            {/* Columna Derecha: Tarjeta Visual de Madrid con Plaza Mayor Real y Botón -> Asesora Línea 2 (942 086 698) */}
            <div className="lg:col-span-5">
              <div className="card-interactive group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/espana/plaza-mayor.jpg"
                    alt="Plaza Mayor de Madrid España - Cityland Travel"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Badges superiores con logo de marca */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                      <FlagIcon pais="España" className="w-3.5 h-2.5" />
                      Plaza Mayor · Madrid
                    </span>
                    <span className="bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      Tarifa desde $695
                    </span>
                  </div>

                  {/* Info inferior */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <span className="text-xs uppercase tracking-wider font-bold text-amber-300 block mb-1">
                      Asistencia Total al Viajero
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm">
                      Tu llegada a España con todo resuelto
                    </h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Separa tu cupo con 50% de inicial y viaja con tranquilidad.
                    </p>
                  </div>
                </div>

                {/* Botón de la tarjeta derecha -> Asesora Línea 2 (942 086 698) */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-slate-700">
                    ¿Deseas verificar tus fechas?
                  </span>
                  <a
                    href={`https://wa.me/51942086698?text=${encodeURIComponent("¡Hola! Deseo verificar disponibilidad para viajar a España.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
                  >
                    <WhatsAppIcon size={14} />
                    <span>Cotizar por WhatsApp</span>
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
              Tarifas Oficiales según Flyer
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-5xl text-[#0a1628] tracking-tight leading-none mb-3">
              ELIGE TU FECHA DE SALIDA A ESPAÑA
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Precios por persona en dólares americanos (USD). Incluyen boleto IATA, seguro Schengen 30.000€, hotel de tránsito y asesoría.{" "}
              <strong className="text-slate-900 font-bold">Separa con el 50% de inicial</strong>.
            </p>
          </div>

          {/* Grilla de las 4 Tarjetas: Cada botón va a una asesora distinta */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAQUETES_ESPANA.map((p) => {
              return (
                <div
                  key={p.id}
                  className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 flex flex-col justify-between"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-sm ${p.tagColor}`}>
                          {p.tag}
                        </span>
                        <span className="text-[10px] font-bold bg-black/60 text-white backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
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
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <span>PAQUETE MIGRATORIO EN</span>
                      </div>

                      <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#0a1628] leading-tight mb-0.5">
                        {p.mes}
                      </h3>
                      <p className="text-[11px] text-slate-500 mb-4">
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
                      <div className="border-t border-slate-100 pt-3.5 mb-4">
                        <span className="text-[10px] font-black uppercase text-red-600 block leading-tight">
                          PRECIO PROMOCIONAL
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-[family-name:var(--font-bebas)] text-4xl font-black text-[#0a1628] leading-none">
                            ${p.precio}
                          </span>
                          <span className="text-xs font-bold text-slate-500">USD</span>
                        </div>
                        <span className="text-[11px] text-slate-500 block mt-1">
                          Separa con ${(p.precio * 0.5).toFixed(0)} USD (50%)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Botón Directo con Número Diferente para Cada Tarjeta:
                      - Noviembre -> 51944280151
                      - Diciembre -> 51938845086
                      - Enero     -> 51906642487
                      - Feb-Mar-Abr -> 51944031724
                  */}
                  <div className="p-5 pt-0">
                    <a
                      href={p.waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 cursor-pointer"
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

      {/* 5. ¿QUÉ INCLUYE EL PAQUETE MIGRATORIO? (Sin relleno, con botón al final -> Asesora Lucero 983 882 504) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2.5">
              Cobertura Total
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-2">
              ¿QUÉ INCLUYE TU PAQUETE A ESPAÑA?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Todo lo exigido por el Espacio Schengen resuelto en una sola gestión.
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
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
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
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11"/></svg>
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
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
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
                className="btn-wa-pulse shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>Consultar con Asesora Lucero</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Footer Corporativo con RUC y Oficina */}
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
            © {new Date().getFullYear()} Cityland Travel E.I.R.L. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* 7. Botón Flotante Permanente -> Asesora Línea 2 (942 086 698) */}
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
