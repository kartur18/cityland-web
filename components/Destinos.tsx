"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PAQUETES_COMPLETOS, buildWaUrl } from "@/components/constantes";
import FlagIcon from "@/components/icons/FlagIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const CATEGORIAS = [
  { id: "all", label: "Todos" },
  { id: "caribe", label: "Caribe & Colombia" },
  { id: "europa", label: "España & Europa" },
  { id: "exoticos", label: "Turquía" },
  { id: "norteamerica", label: "Miami & Orlando" },
  { id: "sudamerica", label: "Sudamérica" },
] as const;

export default function Destinos() {
  const [catFiltro, setCatFiltro] = useState<string>("all");

  const paquetesFiltrados =
    catFiltro === "all"
      ? PAQUETES_COMPLETOS
      : PAQUETES_COMPLETOS.filter((p) => p.categoria === catFiltro);

  return (
    <section id="paquetes" className="bg-slate-50/70 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado limpio en una sola fila con los filtros */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
              Salidas desde Lima · Temporada 2026
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] tracking-tight leading-none">
              DESTINOS MÁS VENDIDOS
            </h2>
          </div>

          {/* Filtros limpios tipo aerolínea */}
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCatFiltro(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  catFiltro === cat.id
                    ? "bg-[#0a1628] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla Visual Estilo Aerolínea (Fotografía grande, cero párrafos de relleno) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paquetesFiltrados.map((paquete) => {
            const waHref = buildWaUrl({
              categoria: paquete.categoria,
              destino: paquete.ciudad,
              tipo: paquete.tituloComercial,
              precioUSD: paquete.precioUSD,
              duracion: paquete.duracion,
              mensajePersonalizado: `¡Hola Cityland Travel! Vi en su web el paquete a ${paquete.ciudad} (${paquete.duracion}) desde $${paquete.precioUSD} USD. Deseo cotizar separando con el 50%.`,
            });

            return (
              <article
                key={paquete.id}
                className="card-interactive group rounded-3xl overflow-hidden bg-white shadow-xs hover:shadow-xl transition-all flex flex-col"
              >
                {/* Fotografía Protagonista (h-64) */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={paquete.img}
                    alt={paquete.alt}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

                  {/* País + Etiqueta */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      <FlagIcon pais={paquete.pais} className="w-3.5 h-2.5" />
                      {paquete.pais}
                    </span>
                    <span className="bg-white/95 text-[#0a1628] text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-xs">
                      {paquete.duracion}
                    </span>
                  </div>

                  {/* Ciudad sobre la foto */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <h3 className="text-2xl font-extrabold leading-tight drop-shadow-sm">
                      {paquete.ciudad}
                    </h3>
                    <p className="text-xs text-slate-200 truncate mt-0.5">
                      {paquete.resaltado}
                    </p>
                  </div>
                </div>

                {/* Pie ultra limpio: 1 línea de iconos + Precio + Botón */}
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 border-b border-slate-100 pb-3">
                    <span>✈ Vuelo I/V Lima</span>
                    <span>•</span>
                    <span>🏨 Hotel incluido</span>
                    <span>•</span>
                    <span>🛡 Seguro médico</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                        Desde
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] leading-none">
                          ${paquete.precioUSD}
                        </span>
                        <span className="text-xs font-bold text-slate-500">USD</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                        Separa con 50% (${Math.round(paquete.precioUSD * 0.5)})
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa-pulse inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold cursor-pointer"
                      >
                        <WhatsAppIcon size={15} />
                        <span>Cotizar</span>
                      </a>
                      <Link
                        href={
                          paquete.slug === "madrid"
                            ? "/espana"
                            : `/destinos/${paquete.slug}`
                        }
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
      </div>
    </section>
  );
}
