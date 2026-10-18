"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface ItemResultado {
  slug: string;
  url: string;
  titulo: string;
  destinoOPais: string;
  cluster: string;
  clusterNombre: string;
  precioDesdeUSD: number;
}

const CATEGORIAS = [
  { id: "todos", label: "Todas las categorías (+10,000)" },
  { id: "mundiales", label: "🌍 Paquetes Mundiales, España e Italia" },
  { id: "all-inclusive", label: "🏖️ Resorts Todo Incluido & Hoteles 5★" },
  { id: "tours", label: "🚄 Circuitos Combinados y Tours" },
  { id: "cruceros", label: "🚢 Cruceros Internacionales y Sin Visa" },
  { id: "visas-seguros", label: "🛂 Visas, Pasaporte y Carpeta Migratoria" },
  { id: "empresas", label: "💼 Viajes Corporativos y Ferias (RUC 20)" },
  { id: "colegios-deportes", label: "🎓 Promociones Escolares y Clubes" },
  { id: "religiosos-eventos", label: "👑 Quinceañeras, Miel y Peregrinaciones" },
  { id: "vuelos", label: "✈️ Rutas de Vuelos y Boletos" },
];

const CIUDADES_ORIGEN = [
  { id: "todos", label: "Salida: Todo el Perú" },
  { id: "desde lima", label: "Salida desde Lima" },
  { id: "desde arequipa", label: "Salida desde Arequipa" },
  { id: "desde trujillo", label: "Salida desde Trujillo" },
  { id: "desde chiclayo", label: "Salida desde Chiclayo" },
  { id: "desde piura", label: "Salida desde Piura" },
  { id: "desde cusco", label: "Salida desde Cusco" },
  { id: "desde huancayo", label: "Salida desde Huancayo" },
  { id: "desde iquitos", label: "Salida desde Iquitos" },
  { id: "desde tacna", label: "Salida desde Tacna" },
  { id: "desde cajamarca", label: "Salida desde Cajamarca" },
  { id: "desde tarapoto", label: "Salida desde Tarapoto" },
  { id: "desde ica", label: "Salida desde Ica" },
  { id: "desde chimbote", label: "Salida desde Chimbote" },
  { id: "los olivos", label: "Atención en Los Olivos / Lima Norte" },
  { id: "miraflores", label: "Atención en Miraflores / San Isidro" },
  { id: "surco", label: "Atención en Surco / La Molina" },
];

const MESES_TEMPORADAS = [
  { id: "todos", label: "Cualquier mes o temporada" },
  { id: "en enero", label: "Enero" },
  { id: "en febrero", label: "Febrero" },
  { id: "en marzo", label: "Marzo" },
  { id: "en abril", label: "Abril" },
  { id: "en mayo", label: "Mayo" },
  { id: "en junio", label: "Junio" },
  { id: "en julio", label: "Julio / Fiestas Patrias" },
  { id: "en agosto", label: "Agosto / Verano Europeo" },
  { id: "en septiembre", label: "Septiembre" },
  { id: "en octubre", label: "Octubre" },
  { id: "en noviembre", label: "Noviembre" },
  { id: "en diciembre", label: "Diciembre / Año Nuevo" },
  { id: "semana santa", label: "Semana Santa" },
];

const ATAJOS_RAPIDOS = [
  { label: "🇪🇸 Madrid", q: "madrid" },
  { label: "🇪🇸 Barcelona", q: "barcelona" },
  { label: "🇮🇹 Roma y Vaticano", q: "roma" },
  { label: "🇮🇹 Venecia y Florencia", q: "venecia" },
  { label: "🚄 Madrid + Barcelona AVE", q: "madrid y barcelona tren ave" },
  { label: "🏖️ Punta Cana", q: "punta cana" },
  { label: "🏖️ Cancún y Riviera Maya", q: "cancun" },
  { label: "🏨 Hard Rock Hotel", q: "hard rock" },
  { label: "🏨 Hotel Riu", q: "riu" },
  { label: "🏨 Lopesan", q: "lopesan" },
  { label: "🚢 Crucero Sin Visa", q: "crucero sin visa" },
  { label: "🛂 Carpeta España", q: "carpeta" },
  { label: "⛰️ Cusco y Machu Picchu", q: "machu picchu" },
];

export default function BuscadorCatalogoInstantaneo({
  itemsIniciales = [],
  totalInicial = 10020,
}: {
  itemsIniciales?: ItemResultado[];
  totalInicial?: number;
}) {
  const [busqueda, setBusqueda] = useState("");
  const [cluster, setCluster] = useState("todos");
  const [origen, setOrigen] = useState("todos");
  const [mes, setMes] = useState("todos");
  const [items, setItems] = useState<ItemResultado[]>(itemsIniciales);
  const [totalMatches, setTotalMatches] = useState(totalInicial);
  const [cargando, setCargando] = useState(false);
  const [copiadoSlug, setCopiadoSlug] = useState<string | null>(null);
  const [copiadoResumenSlug, setCopiadoResumenSlug] = useState<string | null>(null);
  const [limite, setLimite] = useState(24);

  const consultarCatalogo = useCallback(
    async (qVal: string, clVal: string, orVal: string, mesVal: string, limVal: number) => {
      setCargando(true);
      try {
        const params = new URLSearchParams();
        if (qVal.trim()) params.set("q", qVal.trim());
        if (clVal !== "todos") params.set("cluster", clVal);
        if (orVal !== "todos") params.set("origen", orVal);
        if (mesVal !== "todos") params.set("mes", mesVal);
        params.set("limit", String(limVal));

        const res = await fetch(`/api/catalogo?${params.toString()}`);
        if (!res.ok) return;
        const data = await res.json();
        setItems(data.items || []);
        setTotalMatches(data.totalMatches ?? 0);
      } catch {
        // Silencioso en caso de cancelación
      } finally {
        setCargando(false);
      }
    },
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      consultarCatalogo(busqueda, cluster, origen, mes, limite);
    }, 140);
    return () => clearTimeout(timer);
  }, [busqueda, cluster, origen, mes, limite, consultarCatalogo]);

  const copiarEnlace = async (item: ItemResultado) => {
    const fullUrl = `https://citylandtravel.com${item.url}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopiadoSlug(item.slug);
      setTimeout(() => setCopiadoSlug(null), 2200);
    } catch {
      // Fallback
    }
  };

  const copiarResumenWhatsApp = async (item: ItemResultado) => {
    const fullUrl = `https://citylandtravel.com${item.url}`;
    const inicial50 = Math.round(item.precioDesdeUSD * 0.5);
    const texto = `✈️ *${item.titulo}*\n📍 Destino: ${item.destinoOPais}\n💰 Tarifa desde: *$${item.precioDesdeUSD} USD* (Separa hoy con el 50%: *$${inicial50} USD*)\n🏢 Cityland Travel E.I.R.L. · RUC 20614914239\n🔗 Ver programa oficial:\n${fullUrl}`;
    try {
      await navigator.clipboard.writeText(texto);
      setCopiadoResumenSlug(item.slug);
      setTimeout(() => setCopiadoResumenSlug(null), 2200);
    } catch {
      // Fallback
    }
  };

  const limpiarFiltros = () => {
    setBusqueda("");
    setCluster("todos");
    setOrigen("todos");
    setMes("todos");
    setLimite(24);
  };

  const hayFiltrosActivos =
    busqueda.trim() !== "" || cluster !== "todos" || origen !== "todos" || mes !== "todos";

  return (
    <section
      id="buscador"
      className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-5 sm:p-8 scroll-mt-24"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200/60 px-3 py-1 rounded-full mb-2">
            🔍 Buscador Inteligente en Vivo · +10,000 Páginas Oficiales
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight">
            Encuentra cualquier Destino, Hotel 5★, Mes o Ciudad de Salida
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Escribe el destino, nombre del hotel (ej. <em>Hard Rock</em>, <em>Riu</em>, <em>Lopesan</em>), mes o provincia (ej. <em>Madrid mayo</em>, <em>Barcelona desde Trujillo</em>) y abre la página o copia el enlace al instante.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-[#0a1628] text-white text-xs font-extrabold px-3.5 py-2 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{totalMatches.toLocaleString("es-PE")} páginas encontradas</span>
          </span>
          {hayFiltrosActivos && (
            <button
              type="button"
              onClick={limpiarFiltros}
              className="text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-xl transition-colors cursor-pointer"
            >
              Limpiar filtros ✕
            </button>
          )}
        </div>
      </div>

      {/* Barra de Búsqueda Principal + 3 Selectores */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-4">
        <div className="md:col-span-5 relative">
          <input
            type="search"
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              setLimite(24);
            }}
            placeholder="Ej: Barcelona julio, Roma 12 días, Hard Rock, Arequipa..."
            aria-label="Buscar destino, hotel, ciudad de salida o temporada"
            className="w-full h-12 pl-11 pr-4 rounded-2xl border-2 border-slate-200 focus:border-[#0a1628] focus:outline-none text-sm font-semibold text-[#0a1628] placeholder:text-slate-400 bg-slate-50/70 focus:bg-white transition-all"
          />
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 fill-none stroke-current stroke-2 pointer-events-none"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <div className="md:col-span-3">
          <select
            value={cluster}
            onChange={(e) => {
              setCluster(e.target.value);
              setLimite(24);
            }}
            aria-label="Filtrar por categoría"
            className="w-full h-12 px-3.5 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-white focus:border-[#0a1628] focus:outline-none text-xs sm:text-sm font-bold text-[#0a1628] cursor-pointer"
          >
            {CATEGORIAS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <select
            value={origen}
            onChange={(e) => {
              setOrigen(e.target.value);
              setLimite(24);
            }}
            aria-label="Filtrar por ciudad de salida en Perú"
            className="w-full h-12 px-3 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-white focus:border-[#0a1628] focus:outline-none text-xs sm:text-sm font-bold text-[#0a1628] cursor-pointer"
          >
            {CIUDADES_ORIGEN.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <select
            value={mes}
            onChange={(e) => {
              setMes(e.target.value);
              setLimite(24);
            }}
            aria-label="Filtrar por mes o temporada"
            className="w-full h-12 px-3 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-white focus:border-[#0a1628] focus:outline-none text-xs sm:text-sm font-bold text-[#0a1628] cursor-pointer"
          >
            {MESES_TEMPORADAS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Píldoras de Búsqueda Rápida de 1 Clic */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 no-scrollbar">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
          Populares:
        </span>
        {ATAJOS_RAPIDOS.map((at) => {
          const activo = busqueda.toLowerCase() === at.q.toLowerCase();
          return (
            <button
              key={at.q}
              type="button"
              onClick={() => {
                setBusqueda(activo ? "" : at.q);
                setLimite(24);
              }}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                activo
                  ? "bg-[#0a1628] text-white border-[#0a1628] shadow-xs"
                  : "bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-red-600 border-slate-200/80"
              }`}
            >
              {at.label}
            </button>
          );
        })}
      </div>

      {/* Grilla de Resultados */}
      {cargando && items.length === 0 ? (
        <div className="py-12 text-center text-sm font-bold text-slate-500">
          Buscando programas verificados...
        </div>
      ) : items.length === 0 ? (
        <div className="py-12 text-center bg-slate-50 rounded-2xl border border-slate-200/80 p-6">
          <p className="text-base font-extrabold text-[#0a1628] mb-1">
            No encontramos ese filtro exacto, pero podemos armarlo a tu medida
          </p>
          <p className="text-xs text-slate-600 mb-4">
            Limpia los filtros o escríbenos directo por WhatsApp para cotizar tu ruta personalizada.
          </p>
          <button
            type="button"
            onClick={limpiarFiltros}
            className="inline-flex items-center gap-2 bg-[#0a1628] text-white text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer"
          >
            Ver todos los +10,000 programas
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {items.map((item) => {
              const inicial50 = Math.round(item.precioDesdeUSD * 0.5);
              const waHref =
                "https://wa.me/51944103890?text=" +
                encodeURIComponent(
                  `¡Hola Cityland Travel! Vi en su buscador el programa "${item.titulo}" desde $${item.precioDesdeUSD} USD (separando con el 50%: $${inicial50} USD) y quiero cotizar mis fechas.`
                );
              const fueCopiado = copiadoSlug === item.slug;
              const fueResumenCopiado = copiadoResumenSlug === item.slug;

              return (
                <div
                  key={item.slug}
                  className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 p-4 transition-all hover:shadow-md flex flex-col justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full truncate">
                        {item.clusterNombre}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full shrink-0">
                        Separa con ${inicial50}
                      </span>
                    </div>

                    <Link
                      href={item.url}
                      className="text-sm font-extrabold text-[#0a1628] hover:text-red-600 transition-colors leading-snug line-clamp-2 block"
                    >
                      {item.titulo}
                    </Link>

                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-[11px] font-semibold text-slate-500 truncate pr-2">
                        📍 {item.destinoOPais}
                      </span>
                      <span className="text-base font-black text-[#0a1628] shrink-0">
                        Desde ${item.precioDesdeUSD}{" "}
                        <span className="text-[10px] font-bold text-slate-500">USD</span>
                      </span>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-200/70 flex items-center justify-between gap-1.5">
                    <Link
                      href={item.url}
                      className="flex-1 text-center text-[11px] font-extrabold text-white bg-[#0a1628] hover:bg-slate-800 px-2.5 py-2 rounded-xl transition-colors"
                    >
                      Abrir página →
                    </Link>

                    <button
                      type="button"
                      onClick={() => copiarEnlace(item)}
                      title="Copiar link directo de esta página"
                      className={`text-[11px] font-bold px-2.5 py-2 rounded-xl border transition-all cursor-pointer ${
                        fueCopiado
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {fueCopiado ? "✓ Link" : "🔗 Link"}
                    </button>

                    <button
                      type="button"
                      onClick={() => copiarResumenWhatsApp(item)}
                      title="Copiar cotización lista para pegar en WhatsApp"
                      className={`text-[11px] font-bold px-2.5 py-2 rounded-xl border transition-all cursor-pointer ${
                        fueResumenCopiado
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {fueResumenCopiado ? "✓ Texto" : "📋 Texto"}
                    </button>

                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Cotizar por WhatsApp"
                      className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-2 rounded-xl transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {totalMatches > items.length && limite < 96 && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setLimite((prev) => Math.min(96, prev + 24))}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0a1628] text-xs font-extrabold px-6 py-3 rounded-2xl transition-colors cursor-pointer"
              >
                <span>
                  Mostrar más páginas ({items.length} de {totalMatches.toLocaleString("es-PE")})
                </span>
                <span>↓</span>
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
