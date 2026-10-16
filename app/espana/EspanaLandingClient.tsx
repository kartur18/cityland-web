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
      {/* 1. Header Luminoso y Ordenado */}
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

      {/* 2. Hero Claro, Luminoso y Simétrico (Sin fondo negro ni saturación de cuadros) */}
      <section className="bg-gradient-to-b from-sky-50/50 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Izquierda: Limpia y directa */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-5">
                <FlagIcon pais="España" className="w-3.5 h-2.5" />
                <span>Ruta Especializada Madrid & Barcelona · Sin Visa Consular</span>
              </div>

              <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-6xl lg:text-[64px] text-[#0a1628] tracking-tight leading-[0.95] mb-3">
                PAQUETES MIGRATORIOS A{" "}
                <span className="text-red-600">ESPAÑA</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
                Boleto aéreo confirmado + Seguro Schengen de 30.000€ + Hotel y Asesoría Barajas.{" "}
                <strong className="text-[#0a1628] font-bold">
                  Separa hoy con el 50% de inicial
                </strong>
                .
              </p>

              {/* Botón Principal Hero -> Asesora Línea 1 (906 450 098) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <a
                  href={`https://wa.me/51906450098?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo reservar el Paquete Migratorio a España con el 50% de inicial.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-md cursor-pointer"
                >
                  <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2" />
                  <span>RESERVA AHORA · 50% Inicial</span>
                </a>

                <a
                  href="#tarifas"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer"
                >
                  <span>Ver Fechas y Precios ↓</span>
                </a>
              </div>

              {/* 3 Checks Limpios en Línea (Sin cajas) */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-700 pt-5 border-t border-slate-200/80">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Asesoría 1 a 1 Barajas
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Agencia Formal RUC 20614914239
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Oficina en Los Olivos
                </span>
              </div>
            </div>

            {/* Derecha: Tarjeta Luminosa de Madrid -> Asesora Línea 2 (942 086 698) */}
            <div className="lg:col-span-5">
              <div className="card-interactive group bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/espana/plaza-mayor.jpg"
                    alt="Plaza Mayor de Madrid España - Cityland Travel"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais="España" className="w-3.5 h-2.5" />
                      Plaza Mayor · Madrid
                    </span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      Carpeta Completa
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      Vuelo IATA + Seguro 30.000€ + Hotel + Asesoría
                    </span>
                    <h2 className="text-xl font-extrabold leading-tight">
                      Tu llegada a España con todo resuelto
                    </h2>
                  </div>
                </div>

                {/* Pie Blanco Limpio */}
                <div className="p-5 flex items-center justify-between gap-4 bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Tarifa desde
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-[family-name:var(--font-bebas)] text-4xl text-[#0a1628] leading-none">
                        $695
                      </span>
                      <span className="text-xs font-bold text-slate-500">USD</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                      Separa con 50% ($348 USD)
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/51942086698?text=${encodeURIComponent("¡Hola! Deseo verificar disponibilidad para viajar a España.")}`}
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
      </section>

      {/* 3. Las 4 Salidas Oficiales (Tarjetas Luminosas y Simétricas) */}
      <section id="tarifas" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
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
              Separa con el 50% de inicial y paga el saldo antes de volar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAQUETES_ESPANA.map((p) => (
              <article
                key={p.id}
                className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col justify-between h-full"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={p.img}
                    alt={`Paquete Migratorio a España ${p.mes}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${p.tagColor}`}>
                      {p.tag}
                    </span>
                    <span className="text-[10px] font-bold bg-white/95 text-[#0a1628] px-2.5 py-1 rounded-full shadow-2xs">
                      50% Inicial
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                    <span className="text-[10px] font-semibold text-amber-300 block">
                      {p.monumento}
                    </span>
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl text-white leading-none mt-0.5">
                      {p.mes}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 border-b border-slate-100 pb-3">
                    <span>✓ Vuelo I/V</span>
                    <span>✓ 30.000€</span>
                    <span>✓ Hotel + Guía</span>
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

      {/* 4. Sección Luminosa de Respaldo Barajas (Sin fondo negro) */}
      <section className="py-14 sm:py-20 bg-white">
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

          {/* Tarjeta Luminosa Dividida Barajas -> Asesora Lucero (983 882 504) */}
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-6 sm:p-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Control Migratorio Madrid-Barajas
              </span>
              <h3 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] leading-none mb-2">
                ¿DUDAS SOBRE REQUISITOS O EL INGRESO A ESPAÑA?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl">
                Te preparamos con la carpeta exacta que solicita migraciones en el aeropuerto: solvencia económica, reserva de hotel y seguro Schengen de 30.000€.
              </p>

              <a
                href={`https://wa.me/51983882504?text=${encodeURIComponent("¡Hola Lucero! Deseo asesoría sobre las preguntas de migraciones en Barajas.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>Hablar con Asesora Lucero</span>
              </a>
            </div>

            <div className="lg:col-span-5 relative h-56 sm:h-64 lg:h-full min-h-[240px] w-full">
              <Image
                src="/images/espana/barajas.jpg"
                alt="Aeropuerto Adolfo Suárez Madrid-Barajas Terminal 4"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer Corporativo */}
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
              className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
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

      {/* 6. Botón Flotante -> Asesora Línea 2 (942 086 698) */}
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
