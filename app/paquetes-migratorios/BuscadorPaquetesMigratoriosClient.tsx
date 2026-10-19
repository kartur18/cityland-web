"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
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

const PESTAÑAS_SILO: { id: "todos" | SiloMigratorioId; etiqueta: string; cantidad: number }[] = [
  { id: "todos", etiqueta: "Todas las rutas (1,000)", cantidad: 1000 },
  { id: "espana", etiqueta: "🇪🇸 España (400)", cantidad: 400 },
  { id: "italia", etiqueta: "🇮🇹 Italia (250)", cantidad: 250 },
  { id: "francia-europa", etiqueta: "🇫🇷 Francia y Europa (150)", cantidad: 150 },
  { id: "salidas-peru", etiqueta: "🇵🇪 Salidas Lima y Provincias (100)", cantidad: 100 },
  { id: "guias-dudas", etiqueta: "🛡️ Guías y Dudas Migratorias (100)", cantidad: 100 },
];

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
      {/* Bloque 1: Los 4 Planes Oficiales ($699, $799, $899, $999) */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            Escala Oficial 2026 según tu Fecha de Viaje
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            4 Planes de Paquete Migratorio a España, Italia, Francia y Europa
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Separa hoy tu cupo con el <strong>50%</strong> y termina de pagar en cuotas antes de tu vuelo. Todos incluyen tus <strong>5 documentos listos para viajar</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANES_MIGRATORIOS_OFICIALES.map((plan) => {
            const msgPlan = `${plan.mensajeWhatsAppBase} a Europa.\n📍 Ref Web: citylandtravel.com/paquetes-migratorios [${plan.nombre} $${plan.precioUSD}]`;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-5 flex flex-col justify-between border transition-all ${
                  plan.destacado
                    ? "bg-gradient-to-b from-slate-800 to-slate-900 border-amber-400 ring-2 ring-amber-400/30"
                    : "bg-slate-800/70 border-slate-700"
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
                      plan.destacado
                        ? "bg-amber-400 text-slate-950"
                        : "bg-white/10 text-slate-200"
                    }`}
                  >
                    {plan.etiqueta}
                  </span>
                  <h3 className="text-lg font-extrabold text-white">{plan.nombre}</h3>
                  <p className="text-xs text-amber-300 font-semibold mt-0.5 mb-3">
                    📅 {plan.temporada}
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-3xl font-black text-white">${plan.precioUSD}</span>
                    <span className="text-xs font-bold text-slate-400">USD</span>
                  </div>
                  <div className="bg-emerald-500/15 border border-emerald-500/30 rounded-lg px-3 py-1.5 text-xs font-bold text-emerald-300 mb-4">
                    💳 Separa con 50%: <strong>${plan.separaConUSD} USD</strong>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 mb-5">
                    {plan.incluye.map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={buildWhatsAppHref(msgPlan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-extrabold text-xs transition-all ${
                    plan.destacado
                      ? "bg-amber-400 hover:bg-amber-300 text-slate-950"
                      : "bg-[#25D366] hover:bg-[#1ebe5d] text-white"
                  }`}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Quiero el {plan.nombre} (${plan.precioUSD})
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bloque 2: Buscador Instantáneo y Filtros por Silo */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Explora las 1,000 Super-Landings de Paquetes Migratorios
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Filtra por país, ciudad de destino en Europa, distrito de salida en Perú o duda migratoria.
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
              placeholder="Ej: Madrid, Milán, París, Carta de invitación, Los Olivos..."
              className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
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
        <div className="flex flex-wrap gap-2 mb-8">
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
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  activo
                    ? "bg-slate-900 text-amber-400 shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.etiqueta}
              </button>
            );
          })}
        </div>

        {/* Contador de resultados */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-5">
          <span>
            Mostrando {itemsMostrados.length} de {itemsFiltrados.length} páginas especializadas
          </span>
          {busqueda && (
            <button
              type="button"
              onClick={() => setBusqueda("")}
              className="text-amber-700 hover:underline"
            >
              Limpiar filtro
            </button>
          )}
        </div>

        {/* Grilla de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsMostrados.map((item) => {
            const msgCard = `¡Hola! Quiero más información del paquete a ${item.ciudadDestino} desde $${item.precioDesdeUSD} (${item.intencionNombre}).\n📍 Ref Web: citylandtravel.com/paquetes-migratorios/${item.slug} [Paquete ${item.ciudadDestino} $${item.precioDesdeUSD}]`;
            return (
              <article
                key={item.slug}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-amber-400 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={item.imagenHero}
                      alt={item.h1Principal}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full">
                        {item.banderaPais} {item.ciudadDestino}, {item.paisDestino}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow">
                      Desde ${item.precioDesdeUSD} USD
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                        {item.intencionNombre}
                      </span>
                      <h3 className="text-base font-extrabold text-white leading-snug line-clamp-2">
                        {item.h1Principal}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                      {item.subtituloDorado} · Pasaje de ida + boleto de regreso reservado para Migraciones + hotel + seguro 30.000€ + check-in.
                    </p>
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-500">
                      <span className="bg-slate-100 px-2 py-0.5 rounded font-medium">
                        ✈️ {item.aeropuertoLlegada}
                      </span>
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">
                        Separa con $350 (50%)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center gap-2">
                  <Link
                    href={`/paquetes-migratorios/${item.slug}`}
                    className="flex-1 text-center py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold transition-colors"
                  >
                    Ver Paquete
                  </Link>
                  <a
                    href={buildWhatsAppHref(msgCard)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-extrabold transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    Cotizar
                  </a>
                  <button
                    type="button"
                    onClick={() => copiarEnlace(item.slug)}
                    title="Copiar enlace para enviar al cliente"
                    className="py-2.5 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {copiadoSlug === item.slug ? "✓" : "🔗"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Botón Cargar Más */}
        {limiteVisible < itemsFiltrados.length && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setLimiteVisible((prev) => prev + 36)}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-2xl text-sm shadow-md transition-all cursor-pointer"
            >
              Ver más páginas ({itemsFiltrados.length - limiteVisible} restantes)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
