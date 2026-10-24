"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PAQUETES_COMPLETOS, buildWaUrl } from "@/components/constantes";
import FlagIcon from "@/components/icons/FlagIcon";
import NotaPrecio from "@/components/NotaPrecio";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const CATEGORIAS = [
  { id: "all", label: "Todos los Destinos" },
  { id: "europa", label: "España, Italia & Europa" },
  { id: "caribe", label: "Caribe & Colombia" },
  { id: "sudamerica", label: "Perú & Sudamérica" },
  { id: "exoticos", label: "Turquía & Dubái" },
  { id: "norteamerica", label: "Miami & Orlando" },
] as const;

// En celular los 24 destinos sumaban ~11,000 px de scroll antes de llegar al resto del inicio.
const VISIBLES_AL_INICIO = 6;

export default function Destinos() {
  const [catFiltro, setCatFiltro] = useState<string>("all");
  const [verTodos, setVerTodos] = useState(false);

  const paquetesFiltrados =
    catFiltro === "all"
      ? PAQUETES_COMPLETOS
      : PAQUETES_COMPLETOS.filter((p) => p.categoria === catFiltro);

  return (
    <section id="paquetes" className="bg-slate-50/70 py-14 sm:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado limpio y alineado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
              Salidas desde Lima · Temporada 2026
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] tracking-tight leading-none">
              DESTINOS MÁS VENDIDOS
            </h2>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setCatFiltro(cat.id);
                  setVerTodos(cat.id !== "all");
                }}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  catFiltro === cat.id
                    ? "bg-[#0a1628] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla Luminosa y Simétrica */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paquetesFiltrados.map((paquete, indice) => {
            const esMigratorio = paquete.tipoViaje === "migratorio";
            const waHref = buildWaUrl({
              categoria: paquete.categoria,
              destino: paquete.ciudad,
              tipo: paquete.tituloComercial,
              precioUSD: paquete.precioUSD,
              duracion: paquete.duracion,
              mensajePersonalizado: esMigratorio
                ? `¡Hola! Quiero más información del paquete migratorio a ${paquete.ciudad} desde $${paquete.precioUSD}.`
                : `¡Hola Cityland Travel! Vi en su web el paquete a ${paquete.ciudad} (${paquete.duracion}) desde $${paquete.precioUSD} USD. Deseo cotizar separando con el 50%.`,
            });

            const detalleHref =
              paquete.slug === "madrid"
                ? "/espana"
                : paquete.slug === "milan"
                ? "/italia"
                : paquete.slug === "paris"
                ? "/francia"
                : `/destinos/${paquete.slug}`;

            // Las tarjetas ocultas siguen en el HTML (enlaces para Google); solo se muestran al pedir "Ver todos".
            const oculta = !verTodos && indice >= VISIBLES_AL_INICIO;
            return (
              <article
                key={paquete.id}
                className={`card-interactive group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs flex-col justify-between h-full ${oculta ? "hidden" : "flex"}`}
              >
                {/* Fotografía 100% Limpia */}
                <Link
                  href={detalleHref}
                  className="relative h-56 w-full overflow-hidden bg-slate-100 block"
                >
                  <Image
                    src={paquete.img}
                    alt={paquete.alt}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais={paquete.pais} className="w-3.5 h-2.5" />
                      {paquete.pais}
                    </span>
                    <span className="bg-[#0a1628]/90 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                      {paquete.duracion}
                    </span>
                  </div>
                </Link>

                {/* Cuerpo Blanco Limpio y Ordenado */}
                <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <Link href={detalleHref}>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1628] group-hover:text-red-600 transition-colors leading-tight mb-1.5">
                        {paquete.ciudad}
                      </h3>
                    </Link>
                    <p className="text-xs font-semibold text-slate-600 leading-snug mb-3">
                      {paquete.resaltado}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-600 font-bold">✓</span>{" "}
                        {esMigratorio ? "Pasaje + Retorno" : "Vuelo I/V"}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-600 font-bold">✓</span> Hotel
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-600 font-bold">✓</span> Seguro
                      </span>
                    </div>
                  </div>

                  {/* flex-wrap: con precio de 4 cifras o a 360 px el «Cotizar» se cortaba; ahora baja a otra fila. Sin «Antes desde»: no hay un precio anterior real. */}
                  <div className="pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600">
                          Desde
                        </span>
                        <span className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] leading-none">
                          ${paquete.precioUSD.toLocaleString("en-US")}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">USD</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                        Separa con 50% (desde ${Math.round(paquete.precioUSD * 0.5).toLocaleString("en-US")})
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href={detalleHref}
                        className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-[#0a1628] px-3.5 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-colors"
                      >
                        Ver Detalles
                      </Link>
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa-pulse inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap cursor-pointer shadow-xs"
                      >
                        <WhatsAppIcon size={15} />
                        <span>Cotizar</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {!verTodos && paquetesFiltrados.length > VISIBLES_AL_INICIO && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVerTodos(true)}
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-white border border-slate-300 text-sm font-extrabold text-[#0a1628] hover:bg-slate-100 cursor-pointer"
            >
              Ver los {paquetesFiltrados.length} destinos
            </button>
          </div>
        )}
        <NotaPrecio className="mt-6 text-center" />
      </div>
    </section>
  );
}
