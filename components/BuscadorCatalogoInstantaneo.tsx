"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import NotaPrecio from "@/components/NotaPrecio";

interface ItemResultado {
  slug: string;
  url: string;
  titulo: string;
  destinoOPais: string;
  cluster: string;
  clusterNombre: string;
  precioDesdeUSD: number;
  img?: string;
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
  { id: "todos", label: "Modalidad: Todas (Salida Lima LIM)" },
  { id: "paquete migratorio", label: "Paquete Migratorio + RF 24h" },
  { id: "carpeta migratoria", label: "Solo Carpeta Migratoria" },
  { id: "carta de invitacion", label: "Con Carta de Invitación" },
  { id: "ida y vuelta", label: "Vuelo Ida y Vuelta Cerrado" },
  { id: "2 maletas", label: "Con 2 Maletas de 23 kg" },
  { id: "iberia", label: "Vuelo Iberia (Barajas T4)" },
  { id: "air europa", label: "Vuelo Air Europa (Barajas T1)" },
  { id: "todo incluido", label: "Resort Todo Incluido" },
  { id: "50", label: "Separa con 50% Inicial" },
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

const ATAJOS_RAPIDOS: { label: string; q: string; flag?: string }[] = [
  { label: "Madrid", q: "madrid", flag: "España" },
  { label: "Barcelona", q: "barcelona", flag: "España" },
  { label: "Roma y Vaticano", q: "roma", flag: "Italia" },
  { label: "Venecia y Florencia", q: "venecia", flag: "Italia" },
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
            🔍 Buscador Inteligente en Vivo · +40,000 Páginas Oficiales
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight">
            Encuentra cualquier Destino, Paquete a Madrid, Hotel 5★ o Mes de Viaje
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Escribe el destino, modalidad o nombre del hotel (ej. <em>Madrid paquete migratorio</em>, <em>Barcelona julio</em>, <em>Hard Rock</em>, <em>Lopesan</em>) saliendo del Aeropuerto Internacional Jorge Chávez (LIM).
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
            placeholder="Ej: Madrid paquete migratorio, Barcelona julio, Roma 12 días, Hard Rock..."
            aria-label="Buscar destino, hotel, modalidad o temporada"
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
            aria-label="Filtrar por modalidad de viaje"
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
              className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                activo
                  ? "bg-[#0a1628] text-white border-[#0a1628] shadow-xs"
                  : "bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-red-600 border-slate-200/80"
              }`}
            >
              {at.flag && <FlagIcon pais={at.flag} className="w-3.5 h-2.5 mr-1.5" />}
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
            Ver todos los programas
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => {
              const inicial50 = Math.round(item.precioDesdeUSD * 0.5);
              const waHref =
                "https://wa.me/51944103890?text=" +
                encodeURIComponent(
                  `¡Hola! Quiero más información del programa "${item.titulo}" desde $${item.precioDesdeUSD.toLocaleString("en-US")} USD.\n\n📍 Ref Web: citylandtravel.com${item.url}`
                );
              const imgUrl =
                item.img ||
                "/images/espana/gran-via-metropolis.jpg";

              return (
                <div
                  key={item.slug}
                  className="group bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 overflow-hidden transition-all hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <Link
                      href={item.url}
                      className="relative block h-48 w-full bg-slate-100 overflow-hidden"
                    >
                      <Image
                        src={imgUrl}
                        alt={item.titulo}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider text-white bg-[#0a1628]/90 px-3 py-1 rounded-full shadow-xs">
                        {item.clusterNombre}
                      </span>
                    </Link>

                    <div className="p-5 pb-4 space-y-2.5">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-bold text-slate-500 truncate">
                          📍 {item.destinoOPais}
                        </span>
                        <span className="font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-lg text-[11px] shrink-0 whitespace-nowrap">
                          Separa desde ${inicial50.toLocaleString("en-US")}
                        </span>
                      </div>

                      <Link
                        href={item.url}
                        className="text-base font-extrabold text-[#0a1628] group-hover:text-red-600 transition-colors leading-snug block"
                      >
                        {item.titulo}
                      </Link>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-extrabold text-red-600 uppercase tracking-wider block">
                        Desde
                      </span>
                      <span className="text-xl font-black text-[#0a1628] leading-none">
                        ${item.precioDesdeUSD.toLocaleString("en-US")}{" "}
                        <span className="text-[11px] font-bold text-slate-500">USD</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href={item.url}
                        className="inline-flex items-center justify-center text-xs font-extrabold text-[#0a1628] bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
                      >
                        Ver Detalles
                      </Link>

                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa-pulse inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-xl text-xs font-extrabold transition-colors whitespace-nowrap shadow-xs"
                      >
                        <WhatsAppIcon className="w-4 h-4 shrink-0" />
                        <span>Cotizar</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <NotaPrecio className="mt-5 text-center" />

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
