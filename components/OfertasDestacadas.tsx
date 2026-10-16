"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { buildWaUrl, PAQUETES_COMPLETOS } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function OfertasDestacadas() {
  // Tomamos los 6 paquetes comerciales más fuertes
  const ofertas = PAQUETES_COMPLETOS.slice(0, 6);

  return (
    <section id="paquetes" className="bg-white py-20 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-extrabold uppercase tracking-widest mb-3">
              ⚡ Salidas Confirmadas 2026
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5.5vw,60px)] text-[#0a1628] tracking-wide leading-none mb-4">
              Los Paquetes Más Solicitados por Peruanos
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed">
              Tarifas aéreas y hoteleras bloqueadas con anticipación para garantizarte el mejor precio de Lima. <strong className="text-slate-900 font-bold">Separa hoy con el 50% de inicial</strong> y asegura tu fecha.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {ofertas.map((oferta, index) => {
            const waHref = buildWaUrl({
              categoria: oferta.categoria,
              destino: oferta.ciudad,
              tipo: oferta.tituloComercial,
              precioUSD: oferta.precioUSD,
              duracion: oferta.duracion,
            });

            return (
              <AnimateOnScroll key={oferta.id} stagger={Math.min(index + 1, 6)}>
                <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_4px_20px_-4px_rgba(10,22,40,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(10,22,40,0.14)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group">
                  
                  {/* Image Header */}
                  <div className="relative h-[210px] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={oferta.img}
                      alt={oferta.alt}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                        {oferta.bandera} {oferta.pais}
                      </span>
                      <span className="bg-amber-400 text-slate-900 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-sm">
                        Separa con 50%
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                      <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                        {oferta.duracion}
                      </span>
                      <h3 className="text-xl font-bold leading-tight drop-shadow-sm">
                        {oferta.tituloComercial}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    
                    {/* Highlight Box */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <span className="text-blue-600">✨</span>
                      <span className="truncate">{oferta.resaltado}</span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 mb-6 flex-1 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Vuelos ida y vuelta desde Lima con equipaje</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span className="truncate">{oferta.inclusiones.hotel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span className="truncate">{oferta.inclusiones.alimentacion}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span className="truncate">{oferta.inclusiones.tour}</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-slate-100 pt-3.5 mb-4 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                          Precio Total Referencial
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-[#0a1628]">
                            ${oferta.precioUSD}
                          </span>
                          <span className="text-xs font-bold text-slate-500">USD</span>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500">
                          aprox. S/ {oferta.precioSoles.toLocaleString("es-PE")}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block">Inicial sugerida:</span>
                        <span className="text-sm font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          ${Math.round(oferta.precioUSD * 0.5)} USD
                        </span>
                      </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white py-3 px-4 rounded-xl text-xs sm:text-[13px] font-bold shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all cursor-pointer"
                    >
                      <WhatsAppIcon size={16} />
                      Cotizar por WhatsApp
                    </a>

                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
