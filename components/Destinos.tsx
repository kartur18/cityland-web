"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  PAQUETES_COMPLETOS,
  buildWaUrl,
  type PaqueteTuristico,
} from "@/components/constantes";
import FlagIcon from "@/components/icons/FlagIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const TAG_STYLES: Record<string, string> = {
  hot: "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-sm",
  promo: "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm",
  new: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm",
  luxury: "bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-sm",
};

const CATEGORIAS = [
  { id: "all", label: "🌟 Todos los Paquetes" },
  { id: "caribe", label: "🏖️ Caribe Todo Incluido" },
  { id: "europa", label: "🏰 Europa & España" },
  { id: "exoticos", label: "🕌 Turquía & Exóticos" },
  { id: "norteamerica", label: "🗽 Miami & Orlando" },
  { id: "sudamerica", label: "🌴 Sudamérica & Brasil" },
] as const;

export default function Destinos() {
  const [catFiltro, setCatFiltro] = useState<string>("all");
  const [modalPaquete, setModalPaquete] = useState<PaqueteTuristico | null>(null);

  const paquetesFiltrados = catFiltro === "all"
    ? PAQUETES_COMPLETOS
    : PAQUETES_COMPLETOS.filter((p) => p.categoria === catFiltro);

  return (
    <section id="destinos" className="bg-[#f8fafc] py-20 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-[11px] font-extrabold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Paquetes Turísticos Todo Incluido 2026
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5.5vw,60px)] text-[#0a1628] tracking-wide leading-none mb-4">
              Viaja con Todo Resuelto y sin Preocupaciones
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed">
              Vuelos directos o con mejor conexión desde Lima, resorts frente a la playa con comidas y cócteles ilimitados, traslados privados y tours. <strong className="text-slate-900 font-bold">Separa tu cupo con el 50% de inicial</strong> y cancela el saldo antes de salir.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category Filter Tabs */}
        <div className="flex gap-2 justify-start sm:justify-center overflow-x-auto pb-3 mb-10 no-scrollbar">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCatFiltro(cat.id)}
              className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                catFiltro === cat.id
                  ? "bg-[#0a1628] text-white shadow-md shadow-slate-900/20 scale-[1.02]"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {paquetesFiltrados.map((paquete, index) => {
            const waHref = buildWaUrl({
              categoria: paquete.categoria,
              destino: paquete.ciudad,
              tipo: paquete.tituloComercial,
              precioUSD: paquete.precioUSD,
              duracion: paquete.duracion,
            });

            return (
              <AnimateOnScroll key={paquete.id} stagger={Math.min(index + 1, 6)}>
                <div className="group rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(10,22,40,0.08)] hover:shadow-[0_16px_40px_-8px_rgba(10,22,40,0.16)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full">
                  
                  {/* Photo Header */}
                  <div className="relative h-[220px] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={paquete.img}
                      alt={paquete.alt}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/15">
                        <FlagIcon pais={paquete.pais} className="w-3.5 h-2.5" />
                        {paquete.pais}
                      </span>
                      {paquete.tag && (
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${TAG_STYLES[paquete.tagColor] || TAG_STYLES.hot}`}>
                          {paquete.tag}
                        </span>
                      )}
                    </div>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-amber-300 mb-0.5">
                        {paquete.duracion}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm">
                        {paquete.ciudad}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col flex-1">
                    
                    {/* Commercial Highlight Banner */}
                    <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl px-3 py-2 text-[12px] font-semibold text-amber-900 mb-4 flex items-center gap-2">
                      <span className="text-base">✨</span>
                      <span className="truncate">{paquete.resaltado}</span>
                    </div>

                    {/* Inclusions Checklist */}
                    <div className="space-y-2 mb-5 flex-1">
                      <div className="flex items-start gap-2.5 text-[12.5px] text-slate-700">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span><strong>Vuelo:</strong> Boletos aéreos ida y vuelta desde Lima con equipaje</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-[12.5px] text-slate-700">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span><strong>Hotel:</strong> {paquete.inclusiones.hotel}</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-[12.5px] text-slate-700">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span><strong>Régimen:</strong> {paquete.inclusiones.alimentacion}</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-[12.5px] text-slate-700">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span><strong>Traslados:</strong> Aeropuerto ↔ Hotel ↔ Aeropuerto incluidos</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-[12.5px] text-slate-700">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span><strong>Tour:</strong> {paquete.inclusiones.tour}</span>
                      </div>
                    </div>

                    {/* Pricing & Booking Guarantee */}
                    <div className="border-t border-slate-100 pt-4 mb-4">
                      <div className="flex items-end justify-between gap-2">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                            Precio por persona
                          </span>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
                              ${paquete.precioUSD}
                            </span>
                            <span className="text-[12px] font-semibold text-slate-500">USD</span>
                          </div>
                          <span className="text-[11px] font-semibold text-slate-500 block">
                            aprox. S/ {paquete.precioSoles.toLocaleString("es-PE")}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wide">
                            Separa con el 50%
                          </span>
                          <span className="block text-[10px] text-slate-400 mt-1">
                            Saldo antes de viajar
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white py-3 px-4 rounded-xl text-[13px] font-bold shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all cursor-pointer"
                      >
                        <WhatsAppIcon size={16} />
                        Cotizar por WhatsApp con Asesor
                      </a>

                      <button
                        type="button"
                        onClick={() => setModalPaquete(paquete)}
                        className="w-full text-center py-1.5 text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                      >
                        Ver detalles completos e itinerario →
                      </button>
                    </div>

                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Trust Bottom Notice */}
        <div className="mt-14 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0">
              🛡️
            </span>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Garantía y Seriedad de Cityland Travel E.I.R.L. (RUC 20614914239)
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Oficina física en Los Olivos, Lima. Pagos seguros con Yape, Plin, BCP, BBVA y Tarjetas de Crédito en cuotas.
              </p>
            </div>
          </div>
          <a
            href={buildWaUrl({ categoria: "general", mensajePersonalizado: "Hola Cityland Travel, deseo armar un paquete personalizado a mi medida." })}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#0a1628] hover:bg-[#162544] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all"
          >
            Solicitar Paquete a Medida
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      {modalPaquete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
            <button
              onClick={() => setModalPaquete(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest block mb-1">
              {modalPaquete.pais} · {modalPaquete.duracion}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {modalPaquete.tituloComercial}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {modalPaquete.descripcion}
            </p>

            <div className="bg-slate-50 rounded-xl p-3.5 mb-4 border border-slate-200/80">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                📋 ¿Qué incluye tu paquete?
              </h4>
              <ul className="text-xs text-slate-700 space-y-1.5">
                <li>• ✈️ <strong>Vuelos:</strong> Boletos ida y vuelta desde Lima con equipaje</li>
                <li>• 🏨 <strong>Hospedaje:</strong> {modalPaquete.inclusiones.hotel}</li>
                <li>• 🍹 <strong>Alimentación:</strong> {modalPaquete.inclusiones.alimentacion}</li>
                <li>• 🚐 <strong>Traslados:</strong> Aeropuerto ↔ Hotel ↔ Aeropuerto</li>
                <li>• 🛡️ <strong>Asistencia:</strong> {modalPaquete.inclusiones.seguro}</li>
                <li>• 🏝️ <strong>Excursión:</strong> {modalPaquete.inclusiones.tour}</li>
              </ul>
            </div>

            <div className="mb-5">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                🗓️ Itinerario Sugerido:
              </h4>
              <ol className="text-xs text-slate-600 space-y-1.5 pl-3 border-l-2 border-amber-300">
                {modalPaquete.itinerario.map((paso, idx) => (
                  <li key={idx} className="pl-2">{paso}</li>
                ))}
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-semibold mb-5 flex items-center justify-between">
              <span>Tarifa referencial: <strong>${modalPaquete.precioUSD} USD</strong></span>
              <span className="bg-amber-200/70 text-amber-950 px-2 py-0.5 rounded font-bold">Separa con el 50%</span>
            </div>

            <a
              href={buildWaUrl({
                categoria: modalPaquete.categoria,
                destino: modalPaquete.ciudad,
                tipo: modalPaquete.tituloComercial,
                precioUSD: modalPaquete.precioUSD,
                duracion: modalPaquete.duracion,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white py-3 px-4 rounded-xl text-sm font-bold shadow-md cursor-pointer"
            >
              <WhatsAppIcon size={16} />
              Cotizar con Asesor Especialista
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
