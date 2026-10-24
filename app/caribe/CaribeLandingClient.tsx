"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import NotaPrecio from "@/components/NotaPrecio";
import { DESTINOS_TOP_PERU } from "./datos";

const FILTROS = [
  { id: "todos", label: "Todos los Destinos (6)" },
  { id: "all-inclusive", label: "Todo Incluido 24h (Punta Cana & Cancún)" },
  { id: "solo-dni", label: "Viaja Solo con DNI (Colombia & Brasil)" },
  { id: "usa", label: "Estados Unidos (Miami)" },
] as const;

export default function CaribeLandingClient() {
  const [filtroActivo, setFiltroActivo] = useState<string>("todos");

  const destinosMostrados =
    filtroActivo === "todos"
      ? DESTINOS_TOP_PERU
      : DESTINOS_TOP_PERU.filter((d) => d.filtro === filtroActivo);

  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      <Navbar />

      {/* 2. Hero Luminoso, Blanco y Simétrico (Cero fondos negros, estilo aerolínea moderna) */}
      <section className="bg-gradient-to-b from-sky-50/60 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Columna Izquierda */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Salidas Confirmadas desde Lima · Temporada 2026 – 2027</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0a1628] tracking-tight leading-[1.12] mb-4">
                Paquetes al Caribe y América:{" "}
                <span className="text-red-600">Punta Cana, Cancún y Cartagena</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
                Paquetes completos con vuelos ida y vuelta, hoteles seleccionados, traslados y tours incluidos.{" "}
                <strong className="text-[#0a1628] font-bold">
                  Separa hoy tu viaje con solo el 50% de inicial
                </strong>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo cotizar un paquete turístico (Punta Cana, Cancún, Cartagena, Medellín, Río o Miami) separando con el 50% de inicial.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-md cursor-pointer"
                >
                  <WhatsAppIcon size={20} />
                  <span>Cotizar mi Viaje por WhatsApp</span>
                </a>

                <a
                  href="#destinos-top"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer"
                >
                  <PlaneIcon className="w-4 h-4 fill-none stroke-current stroke-2 text-red-600" />
                  <span>Ver los 6 Paquetes ↓</span>
                </a>
              </div>

              {/* 3 Puntos Clave Limpios en Línea */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-700 pt-5 border-t border-slate-200/80">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Colombia y Brasil solo con DNI
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Resorts Todo Incluido 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Oficina Física en Los Olivos
                </span>
              </div>
            </div>

            {/* Columna Derecha: Vitrina Destacada Punta Cana */}
            <div className="lg:col-span-5">
              <div className="card-interactive group bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=85"
                    alt="Punta Cana Resort 5 Estrellas Todo Incluido - Cityland Travel"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais="República Dominicana" className="w-3.5 h-2.5" />
                      Punta Cana · 5 Días / 4 Noches
                    </span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      #1 Más Vendido
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      Vuelo I/V + Resort 5★ + Comidas y Bebidas 24h
                    </span>
                    <h2 className="text-xl font-extrabold leading-tight">
                      Playa Bávaro & Excursión a Isla Saona
                    </h2>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Paquete Completo
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                        Desde
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-[#0a1628] tracking-tight leading-none">
                        $1,049
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                      Separa con 50% (desde $525)
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Vi en su web el paquete Todo Incluido a Punta Cana (5 Días / 4 Noches) desde $1,049 USD. Deseo cotizar separando con el 50%.\n\n📍 Ref Web: citylandtravel.com/caribe")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Cotizar Ahora</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Catálogo de los 6 Destinos Estrella (Tarjetas Blancas, Simétricas y Ordenadas) */}
      <section id="destinos-top" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Los 6 Destinos Favoritos de los Peruanos
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight">
                Elige tu Próximo Viaje desde Lima
              </h2>
            </div>

            {/* Filtros Rápidos Tipo Aerolínea */}
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {FILTROS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFiltroActivo(f.id)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filtroActivo === f.id
                      ? "bg-[#0a1628] text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grilla 3x2 Perfectamente Simétrica */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinosMostrados.map((d) => {
              const inicialUSD = Math.round(d.precioUSD * 0.5);
              const waUrl = `https://wa.me/${d.waNumber}?text=${encodeURIComponent(
                `¡Hola Cityland Travel! Vi su página web y deseo cotizar el paquete a ${d.ciudad} (${d.duracion}) desde $${d.precioUSD} USD separando con el 50% de inicial ($${inicialUSD} USD).`
              )}`;

              return (
                <article
                  key={d.id}
                  id={d.id}
                  className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col justify-between h-full scroll-mt-24"
                >
                  {/* Imagen Luminosa */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={d.img}
                      alt={d.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />

                    {/* Etiquetas Superiores */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        <FlagIcon pais={d.pais} className="w-3.5 h-2.5" />
                        {d.pais}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-xs ${d.tagBg}`}>
                        {d.tag}
                      </span>
                    </div>

                    {/* Ciudad y Duración en la Base de la Foto */}
                    <div className="absolute bottom-3 left-4 right-4 z-10 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[11px] font-semibold text-amber-300 block">
                          {d.duracion}
                        </span>
                        <h3 className="text-xl font-extrabold leading-tight drop-shadow-xs">
                          {d.ciudad}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Contenido Limpio sin Saturación */}
                  <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-700 leading-snug mb-3">
                        {d.resumenCorto}
                      </p>

                      {/* 3 Checks Directos */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
                        {d.checks.map((ck) => (
                          <span key={ck} className="flex items-center gap-1">
                            <span className="text-emerald-600 font-bold">✓</span> {ck}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Precio + Botón de WhatsApp Alineados */}
                    {/* Sin «Antes desde»: no hay un precio anterior real que mostrar. */}
                    <div className="pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                            Desde
                          </span>
                          <span className="text-2xl sm:text-3xl font-black text-[#0a1628] tracking-tight leading-none">
                            ${d.precioUSD.toLocaleString("en-US")}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                          Separa desde ${inicialUSD} (50%)
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-wa-pulse inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                        >
                          <WhatsAppIcon size={15} />
                          <span>Cotizar</span>
                        </a>
                        <Link
                          href={`/destinos/${d.slug}`}
                          className="text-[11px] font-semibold text-slate-400 hover:text-[#0a1628] transition-colors"
                        >
                          Ver itinerario →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <NotaPrecio className="mt-6 text-center" />
        </div>
      </section>

      {/* 4. Beneficios Claros + Sección Luminosa para Familias, Parejas y Grupos */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* 4 Pilares en Línea Limpia (Sin recuadros pesados) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-200/80">
            {[
              {
                titulo: "Vuelos Confirmados I/V",
                sub: "Salidas diarias desde Lima con LATAM, Copa, Avianca y Sky",
              },
              {
                titulo: "Hoteles Seleccionados",
                sub: "Resorts 5★ frente al mar y hoteles céntricos verificados",
              },
              {
                titulo: "Traslados y Tours",
                sub: "Recepción en aeropuerto, excursiones y seguro de viaje",
              },
              {
                titulo: "Reserva con el 50%",
                sub: "Congela tu tarifa hoy en oficina o cuenta empresarial",
              },
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

          {/* Tarjeta Luminosa Dividida: Cotización a Medida */}
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-sky-50/60 via-white to-emerald-50/40 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Atención Personalizada en Lima y Todo el Perú
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight leading-snug mb-2">
                ¿Viajas en pareja, en familia o en grupo?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl">
                Armamos tu cotización exacta según tus fechas de vacaciones, número de adultos o niños, y te atendemos en nuestra oficina de{" "}
                <strong className="text-[#0a1628]">Av. Antúnez de Mayolo 814, Los Olivos</strong> o por videollamada.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo una cotización personalizada para viajar en familia/pareja.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Hablar con un Asesor Ahora</span>
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-colors"
                >
                  <span>Ir a la Web Principal</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85"
                alt="Playas del Caribe Todo Incluido desde Lima - Cityland Travel"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 6. Botón Flotante de WhatsApp */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Vi su landing de Caribe y América y deseo cotizar mi viaje.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl cursor-pointer"
          aria-label="Cotizar por WhatsApp"
        >
          <WhatsAppIcon size={22} />
          <span className="hidden sm:inline font-bold text-xs sm:text-sm">
            Cotizar Paquete
          </span>
        </a>
      </div>
    </div>
  );
}
