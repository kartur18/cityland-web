"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PAQUETES_COMPLETOS,
  buildWaUrl,
  type PaqueteTuristico,
} from "@/components/constantes";
import FlagIcon from "@/components/icons/FlagIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const TAG_STYLES: Record<string, string> = {
  hot: "bg-red-600 text-white",
  promo: "bg-amber-600 text-white",
  new: "bg-emerald-600 text-white",
  luxury: "bg-purple-700 text-white",
};

const CATEGORIAS = [
  { id: "all", label: "Todos los Paquetes" },
  { id: "caribe", label: "Caribe All Inclusive" },
  { id: "europa", label: "España & Europa" },
  { id: "exoticos", label: "Turquía Sin Visa" },
  { id: "norteamerica", label: "Miami & Orlando" },
  { id: "sudamerica", label: "Sudamérica" },
] as const;

export default function Destinos() {
  const [catFiltro, setCatFiltro] = useState<string>("all");
  const [modalPaquete, setModalPaquete] = useState<PaqueteTuristico | null>(null);

  const paquetesFiltrados = catFiltro === "all"
    ? PAQUETES_COMPLETOS
    : PAQUETES_COMPLETOS.filter((p) => p.categoria === catFiltro);

  return (
    <section id="paquetes" className="bg-[#f8fafc] py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado limpio, directo y comercial */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
            Catálogo Oficial 2026
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] tracking-tight leading-none mb-3">
            PAQUETES TURÍSTICOS MÁS VENDIDOS
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tarifas referenciales con vuelo ida y vuelta desde Lima, hoteles seleccionados y traslados.{" "}
            <strong className="text-slate-900 font-bold">Separa con el 50% de inicial</strong> y cancela el saldo antes de viajar.
          </p>
        </div>

        {/* Filtros por Categoría (Sin emojis, diseño píldora elegante) */}
        <div className="flex gap-2 justify-start sm:justify-center overflow-x-auto pb-3 mb-10 no-scrollbar">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCatFiltro(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                catFiltro === cat.id
                  ? "bg-[#0a1628] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grilla Limpia de Tarjetas de Paquetes (Superficie única, sin cajas dentro de cajas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {paquetesFiltrados.map((paquete) => {
            const waHref = buildWaUrl({
              categoria: paquete.categoria,
              destino: paquete.ciudad,
              tipo: paquete.tituloComercial,
              precioUSD: paquete.precioUSD,
              duracion: paquete.duracion,
              mensajePersonalizado: `¡Hola Cityland Travel! Vi en su web el paquete a ${paquete.ciudad} (${paquete.duracion}) por $${paquete.precioUSD} USD. Deseo cotizar con un asesor para viajar separando con el 50% de inicial.`,
            });

            return (
              <div
                key={paquete.id}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Imagen del Destino */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={paquete.img}
                    alt={paquete.alt}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                  {/* Etiquetas superiores */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                      <FlagIcon pais={paquete.pais} className="w-3.5 h-2.5" />
                      {paquete.pais}
                    </span>
                    {paquete.tag && (
                      <span className={`text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-xs ${TAG_STYLES[paquete.tagColor] || TAG_STYLES.hot}`}>
                        {paquete.tag.split("·")[0]}
                      </span>
                    )}
                  </div>

                  {/* Título sobre la imagen */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-amber-300 block mb-0.5">
                      {paquete.duracion}
                    </span>
                    <h3 className="text-xl font-bold leading-tight drop-shadow-sm">
                      {paquete.ciudad}
                    </h3>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-5 flex flex-col flex-1">
                  
                  {/* Resumen comercial directo (Sin envoltorio de caja pesada) */}
                  <p className="text-xs font-bold text-slate-800 border-l-2 border-red-500 pl-2.5 mb-3 leading-snug">
                    {paquete.resaltado}
                  </p>

                  {/* Puntos Clave estructurados con checks limpios */}
                  <div className="space-y-1.5 mb-4 text-xs text-slate-600 flex-1">
                    <p className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Vuelo ida y vuelta desde Lima con equipaje</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="truncate">{paquete.inclusiones.hotel}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="truncate">{paquete.inclusiones.alimentacion}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Traslados en destino y seguro de viaje</span>
                    </p>
                  </div>

                  {/* Precio y Condiciones Claras */}
                  <div className="border-t border-slate-100 pt-3.5 mb-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block leading-tight">
                          DESDE
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl sm:text-3xl font-black text-[#0a1628]">
                            ${paquete.precioUSD}
                          </span>
                          <span className="text-xs font-bold text-slate-500">USD</span>
                        </div>
                        <span className="text-[11px] font-medium text-slate-500 block">
                          aprox. S/ {paquete.precioSoles.toLocaleString("es-PE")} en hab. doble
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                          Separa con el 50%
                        </span>
                        <span className="block text-[10px] text-slate-400 mt-0.5">
                          Saldo antes de viajar
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="space-y-2">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Cotizar por WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setModalPaquete(paquete)}
                      className="w-full text-center py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      Ver itinerario detallado →
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Respaldo Institucional (Limpio, con icono formal SVG) */}
        <div className="mt-12 p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Atención presencial en Los Olivos: Av. Antúnez de Mayolo N. 814
              </p>
              <p className="text-xs text-slate-500">
                Cityland Travel E.I.R.L. · RUC: 20614914239 · Lunes a Sábado de 9:00 am a 7:00 pm
              </p>
            </div>
          </div>
          <a
            href={buildWaUrl({ categoria: "general", mensajePersonalizado: "Hola Cityland Travel, deseo una cotización personalizada de viaje." })}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-5 py-2.5 rounded-xl hover:bg-emerald-100 transition-colors cursor-pointer"
          >
            Hablar con un asesor ahora
          </a>
        </div>

      </div>

      {/* Modal Interactivo de Itinerario (100% Profesional y sin emojis) */}
      {modalPaquete && (
        <div
          className="fixed inset-0 z-[1000] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setModalPaquete(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalPaquete(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-lg cursor-pointer"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-1">
              {modalPaquete.pais} · {modalPaquete.duracion}
            </span>
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] mb-4">
              {modalPaquete.tituloComercial}
            </h3>

            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 mb-5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">
                Inclusiones del Paquete
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Vuelos:</strong> Boletos ida y vuelta desde Lima con equipaje</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Hospedaje:</strong> {modalPaquete.inclusiones.hotel}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Alimentación:</strong> {modalPaquete.inclusiones.alimentacion}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Traslados:</strong> Aeropuerto ↔ Hotel ↔ Aeropuerto en privado o compartido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Asistencia Médica:</strong> {modalPaquete.inclusiones.seguro}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Excursión:</strong> {modalPaquete.inclusiones.tour}</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">
                Itinerario sugerido día a día
              </h4>
              <div className="space-y-2 border-l-2 border-red-500 pl-4 text-xs text-slate-600">
                {modalPaquete.itinerario.map((dia, i) => (
                  <p key={i} className="leading-relaxed">{dia}</p>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-950 block">
                  Precio: ${modalPaquete.precioUSD} USD (~S/ {modalPaquete.precioSoles})
                </span>
                <span className="text-[11px] text-emerald-800">
                  Separa con el 50% de inicial y cancela el saldo antes de viajar
                </span>
              </div>
              <span className="text-xs font-bold bg-emerald-600 text-white px-2.5 py-1 rounded-lg">
                50% Inicial
              </span>
            </div>

            <a
              href={buildWaUrl({
                categoria: modalPaquete.categoria,
                destino: modalPaquete.ciudad,
                tipo: modalPaquete.tituloComercial,
                precioUSD: modalPaquete.precioUSD,
                duracion: modalPaquete.duracion,
                mensajePersonalizado: `¡Hola Cityland Travel! Me gustó el paquete a ${modalPaquete.ciudad} (${modalPaquete.duracion}) por $${modalPaquete.precioUSD} USD. Deseo cotizar con un asesor para viajar separando con el 50% de inicial.`,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-xl font-bold shadow-lg shadow-emerald-500/25 transition-all text-sm cursor-pointer"
            >
              <WhatsAppIcon size={18} />
              <span>Cotizar este paquete por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
