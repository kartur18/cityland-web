"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import { PAQUETES_CUSCO } from "./datos";

export default function CuscoLandingClient() {
  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      <Navbar />

      {/* 2. Hero Luminoso Estilo Aerolínea */}
      <section className="bg-gradient-to-b from-sky-50/60 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-5">
                <FlagIcon pais="Perú" className="w-3.5 h-2.5" />
                <span>Salidas Diarias desde Lima · Entradas Oficiales Machu Picchu</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0a1628] tracking-tight leading-[1.12] mb-4">
                Paquetes Turísticos a{" "}
                <span className="text-red-600">Cusco y Machu Picchu</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
                Vuelos ida y vuelta + Hotel + Tren Turístico + Entradas a Machu Picchu, Valle Sagrado y Montaña de 7 Colores.{" "}
                <strong className="text-[#0a1628] font-bold">
                  Armamos el paquete a tu medida y separas con el 50% de inicial
                </strong>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo cotizar un paquete turístico a Cusco y Machu Picchu.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-md cursor-pointer"
                >
                  <WhatsAppIcon size={20} />
                  <span>Cotizar Cusco por WhatsApp</span>
                </a>

                <a
                  href="#paquetes-cusco"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer"
                >
                  <PlaneIcon className="w-4 h-4 fill-none stroke-current stroke-2 text-red-600" />
                  <span>Ver Programas de 3 a 6 Días ↓</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-700 pt-5 border-t border-slate-200/80">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Tren PeruRail / Inca Rail Garantizado
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Ingreso Oficial a Machu Picchu
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Separa con 50% de Inicial
                </span>
              </div>
            </div>

            {/* Derecha: Vitrina Cusco Clásico 4D/3N */}
            <div className="lg:col-span-5">
              <div className="card-interactive group bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85"
                    alt="Machu Picchu Cusco Paquete Completo desde Lima - Cityland Travel"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais="Perú" className="w-3.5 h-2.5" />
                      Cusco Clásico · 4 Días / 3 Noches
                    </span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      #1 Favorito
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      Vuelo I/V + Hotel + Tren + Valle Sagrado + Machu Picchu
                    </span>
                    <h2 className="text-xl font-extrabold leading-tight">
                      Todo resuelto desde tu llegada al Cusco
                    </h2>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Tarifa referencial
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                        Desde
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-[#0a1628] tracking-tight leading-none">
                        $499
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                      Separa con 50% ($250)
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Vi el paquete Cusco Clásico (4 Días / 3 Noches) desde $499 USD. Quisiera cotizar para mis fechas.")}`}
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

      {/* 3. Los 4 Programas Referenciales a Cusco */}
      <section id="paquetes-cusco" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Programas Todo Incluido desde Lima
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight">
                Elige la Duración de tu Viaje a Cusco
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">
              Personalizamos tu hotel (3★, 4★ o 5★) y tren según tu presupuesto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAQUETES_CUSCO.map((p) => {
              const inicialUSD = Math.round(p.precioUSD * 0.5);
              const waUrl = `https://wa.me/${p.waNumber}?text=${encodeURIComponent(
                `¡Hola Cityland Travel! Deseo cotizar el paquete ${p.titulo} (${p.duracion}) desde $${p.precioUSD} USD. ¿Me ayudan a armarlo para mis fechas?`
              )}`;

              return (
                <article
                  key={p.id}
                  className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col justify-between h-full"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${p.tagBg}`}>
                        {p.tag}
                      </span>
                      <span className="text-[10px] font-bold bg-white/95 text-[#0a1628] px-2.5 py-1 rounded-full shadow-2xs">
                        {p.duracion}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                      <h3 className="text-lg font-extrabold leading-tight drop-shadow-xs">
                        {p.titulo}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-700 leading-snug mb-3">
                        {p.resumenCorto}
                      </p>

                      <div className="space-y-1 text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
                        {p.checks.map((ck) => (
                          <div key={ck} className="flex items-center gap-1.5">
                            <span className="text-emerald-600 font-bold">✓</span> {ck}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3.5 border-t border-slate-100">
                      <div className="flex items-end justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-[10px] font-bold uppercase text-slate-400">
                              Regular
                            </span>
                            <span className="text-[11px] font-semibold text-slate-400 line-through">
                              ${p.precioRegularUSD}
                            </span>
                          </div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                              Desde
                            </span>
                            <span className="text-2xl sm:text-3xl font-black text-[#0a1628] tracking-tight leading-none">
                              ${p.precioUSD}
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-700">
                          Inicial ${inicialUSD}
                        </span>
                      </div>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                      >
                        <WhatsAppIcon size={16} />
                        <span>Cotizar por WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Sección Luminosa: Armamos tu Paquete a Medida */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-sky-50/60 via-white to-amber-50/30 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Atención 1 a 1 por WhatsApp o en Oficina
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight leading-snug mb-2">
                ¿Ya tienes vuelos o quieres armar un paquete especial a Cusco?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl">
                Indícanos cuántos adultos o niños viajan y en qué mes desean ir. Nuestro equipo bloquea tus entradas oficiales a Machu Picchu, tus boletos de tren y tu hotel ideal al instante.
              </p>

              <div>
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Quisiera que me armen un paquete a Cusco a medida.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Cotizar Paquete a Medida</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522409994346-2682217b9a3e?w=1200&q=85"
                alt="Laguna Humantay y Nevado Salkantay en Cusco - Cityland Travel"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 6. Botón Flotante */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo cotizar mi viaje a Cusco y Machu Picchu.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl cursor-pointer"
          aria-label="Cotizar Cusco por WhatsApp"
        >
          <WhatsAppIcon size={22} />
          <span className="hidden sm:inline font-bold text-xs sm:text-sm">
            Cotizar Cusco
          </span>
        </a>
      </div>
    </div>
  );
}
