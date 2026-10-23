"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import NotaPrecio from "@/components/NotaPrecio";
import { quitarPrecioDeTitulo } from "@/lib/formato-precio";
import { buildWhatsAppHref } from "@/components/constantes";
import {
  PLANES_MIGRATORIOS_OFICIALES,
  type SiloMigratorioId,
} from "@/lib/catalogo-paquetes-migratorios-1000";

export interface ItemResumenSuperLanding {
  slug: string;
  siloId: SiloMigratorioId;
  siloNombre: string;
  paisDestino: string;
  ciudadDestino: string;
  banderaPais: string;
  intencionNombre: string;
  h1Principal: string;
  subtituloDorado: string;
  imagenHero: string;
  aerolineaSugerida: string;
  aeropuertoLlegada: string;
  precioDesdeUSD: number;
}

const PESTAÑAS_SILO: {
  id: "todos" | SiloMigratorioId;
  etiqueta: string;
  bandera?: string;
}[] = [
  { id: "todos", etiqueta: "Todas las rutas (1,000)", bandera: "Europa" },
  { id: "espana", etiqueta: "España (400)", bandera: "España" },
  { id: "italia", etiqueta: "Italia (250)", bandera: "Italia" },
  { id: "francia-europa", etiqueta: "Francia y Europa (150)", bandera: "Francia" },
  { id: "salidas-peru", etiqueta: "Salidas Perú (100)", bandera: "Perú" },
  { id: "guias-dudas", etiqueta: "Guías Migratorias (100)" },
];

function limpiarNombrePlan(nombre: string): string {
  return nombre.replace(/\s*\$\d+/g, "").trim();
}

export default function BuscadorPaquetesMigratoriosClient({
  items,
}: {
  items: ItemResumenSuperLanding[];
}) {
  const [busqueda, setBusqueda] = useState("");
  const [siloActivo, setSiloActivo] = useState<"todos" | SiloMigratorioId>("todos");
  const [limiteVisible, setLimiteVisible] = useState(24);
  const [copiadoSlug, setCopiadoSlug] = useState<string | null>(null);

  const itemsFiltrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return items.filter((item) => {
      if (siloActivo !== "todos" && item.siloId !== siloActivo) return false;
      if (!q) return true;
      return (
        item.h1Principal.toLowerCase().includes(q) ||
        item.ciudadDestino.toLowerCase().includes(q) ||
        item.paisDestino.toLowerCase().includes(q) ||
        item.intencionNombre.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q)
      );
    });
  }, [items, busqueda, siloActivo]);

  const itemsMostrados = itemsFiltrados.slice(0, limiteVisible);

  const copiarEnlace = async (slug: string) => {
    const url = `https://www.citylandtravel.com/paquetes-migratorios/${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiadoSlug(slug);
      setTimeout(() => setCopiadoSlug(null), 2200);
    } catch {
      // Silencioso en caso de navegador sin permisos
    }
  };

  return (
    <div className="space-y-14">
      {/* Bloque 1: Los 4 Planes Oficiales (Sin cajas dentro de cajas) */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
            Escala Oficial según Temporada
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Elige tu Plan según tu Fecha de Viaje
          </h2>
          <p className="text-slate-600 text-sm mt-1.5">
            Separa tu cupo con el 50% y completa el pago en cuotas antes de tu vuelo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANES_MIGRATORIOS_OFICIALES.map((plan) => {
            const nombreLimpio = limpiarNombrePlan(plan.nombre);
            const msgPlan = `${plan.mensajeWhatsAppBase} a Europa.\n📍 Ref Web: citylandtravel.com/paquetes-migratorios [${nombreLimpio} $${plan.precioUSD}]`;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 flex flex-col justify-between h-full bg-white transition-shadow hover:shadow-lg ${
                  plan.destacado
                    ? "border-2 border-amber-400 shadow-md"
                    : "border border-slate-200 shadow-xs"
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${
                      plan.destacado
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {plan.etiqueta}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    {nombreLimpio}
                  </h3>
                  <p className="text-xs text-red-600 font-semibold mt-1 min-h-[34px] flex items-center">
                    📅 {plan.temporada}
                  </p>

                  <div className="my-4 py-3.5 border-y border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-slate-500">Desde</span>
                      <span className="text-3xl font-black text-slate-900">
                        ${plan.precioUSD}
                      </span>
                      <span className="text-xs font-bold text-slate-500">USD</span>
                    </div>
                    <span className="text-xs font-extrabold text-emerald-700 block mt-1">
                      ✓ Separa con 50% (desde ${plan.separaConUSD} USD)
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600 mb-6">
                    {plan.incluye.slice(0, 3).map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={buildWhatsAppHref(msgPlan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-xs sm:text-sm whitespace-nowrap transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Elegir {nombreLimpio}</span>
                </a>
              </div>
            );
          })}
        </div>
        <NotaPrecio className="mt-5 text-center" />
      </div>

      {/* Bloque 2: Buscador Instantáneo con Fotos Únicas por Ciudad */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Catálogo por Ciudad y Destino en Europa
            </h2>
            <p className="text-sm text-slate-600 mt-0.5">
              Cada ciudad cuenta con su ruta e itinerario personalizado saliendo desde Perú.
            </p>
          </div>
          <div className="relative w-full md:w-96">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
                setLimiteVisible(24);
              }}
              placeholder="Buscar ciudad: Madrid, Milán, Roma, París, Lyon..."
              className="w-full pl-4 pr-10 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
            {busqueda && (
              <button
                type="button"
                onClick={() => setBusqueda("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Pestañas por Silo */}
        <div className="flex flex-wrap gap-2 mb-6">
          {PESTAÑAS_SILO.map((tab) => {
            const activo = siloActivo === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSiloActivo(tab.id);
                  setLimiteVisible(24);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  activo
                    ? "bg-slate-900 text-amber-400 shadow-xs"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {tab.bandera && (
                  <FlagIcon pais={tab.bandera} className="w-4 h-3 shrink-0" />
                )}
                <span>{tab.etiqueta}</span>
              </button>
            );
          })}
        </div>

        {/* Grilla de tarjetas simétricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {itemsMostrados.map((item) => {
            const msgCard = `¡Hola! Quiero más información del paquete a ${item.ciudadDestino} desde $${item.precioDesdeUSD}.\n📍 Ref Web: citylandtravel.com/paquetes-migratorios/${item.slug} [Catálogo ${item.ciudadDestino}]`;
            return (
              <article
                key={item.slug}
                className="group bg-white rounded-3xl border border-slate-200 hover:border-amber-400 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={item.imagenHero}
                      alt={item.h1Principal}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-slate-900/90 text-white text-[11px] font-extrabold px-3 py-1 rounded-full">
                        <FlagIcon
                          pais={item.paisDestino}
                          className="w-3.5 h-2.5 shrink-0"
                        />
                        <span>
                          {item.ciudadDestino}, {item.paisDestino}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                      {item.intencionNombre}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug line-clamp-2 mt-0.5 mb-3 min-h-[44px]">
                      {quitarPrecioDeTitulo(item.h1Principal)}
                    </h3>
                    <div className="flex items-baseline justify-between pt-3 border-t border-slate-100">
                      <div>
                        <span className="text-[11px] text-slate-500 mr-1">Desde</span>
                        <span className="text-2xl font-black text-slate-900">
                          ${item.precioDesdeUSD}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500 ml-1">USD</span>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700">
                        ✓ Separa con 50%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 flex items-center gap-2">
                  <Link
                    href={`/paquetes-migratorios/${item.slug}`}
                    className="flex-1 text-center py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold whitespace-nowrap transition-colors"
                  >
                    Ver Detalles
                  </Link>
                  <a
                    href={buildWhatsAppHref(msgCard)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-extrabold whitespace-nowrap transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Cotizar</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copiarEnlace(item.slug)}
                    title="Copiar enlace"
                    className="py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {copiadoSlug === item.slug ? "✓" : "🔗"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {limiteVisible < itemsFiltrados.length && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setLimiteVisible((prev) => prev + 36)}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-2xl text-sm shadow-xs transition-all cursor-pointer"
            >
              Ver más destinos ({itemsFiltrados.length - limiteVisible} disponibles)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
