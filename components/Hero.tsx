"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  PAQUETES_COMPLETOS,
  buildWaUrl,
} from "@/components/constantes";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FlagIcon from "@/components/icons/FlagIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

type CategoriaPestana = "caribe" | "europa" | "vuelos" | "exoticos";

const TRENDING_PILLS = [
  { label: "Punta Cana All Inclusive", sub: "Desde $799", dest: "Punta Cana", cat: "caribe" },
  { label: "Madrid con Seguro Schengen", sub: "Desde $1,099", dest: "Madrid & Barcelona", cat: "europa" },
  { label: "Turquía Sin Visa", sub: "Desde $1,490", dest: "Estambul & Capadocia", cat: "exoticos" },
  { label: "Cartagena Vuelo Directo", sub: "Desde $489", dest: "Cartagena de Indias", cat: "caribe" },
  { label: "Cancún Todo Incluido", sub: "Desde $749", dest: "Cancún & Riviera Maya", cat: "caribe" },
];

export default function Hero() {
  const [tab, setTab] = useState<CategoriaPestana>("caribe");
  const [destinoSeleccionado, setDestinoSeleccionado] = useState<string>("Punta Cana");
  const [fechaViaje, setFechaViaje] = useState<string>("");
  const [pasajeros, setPasajeros] = useState<number>(2);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!menuAbierto) return;
    const cerrar = () => setMenuAbierto(false);
    document.addEventListener("click", cerrar);
    return () => document.removeEventListener("click", cerrar);
  }, [menuAbierto]);

  // Cambiar automáticamente destino predeterminado al cambiar pestaña
  const handleTabChange = (nuevaTab: CategoriaPestana) => {
    setTab(nuevaTab);
    if (nuevaTab === "caribe") setDestinoSeleccionado("Punta Cana");
    if (nuevaTab === "europa") setDestinoSeleccionado("Madrid & Barcelona");
    if (nuevaTab === "exoticos") setDestinoSeleccionado("Estambul & Capadocia");
    if (nuevaTab === "vuelos") setDestinoSeleccionado("Madrid");
  };

  const paqueteActivo = PAQUETES_COMPLETOS.find(
    (p) => p.ciudad.toLowerCase().includes(destinoSeleccionado.toLowerCase())
  ) || PAQUETES_COMPLETOS[0];

  const catActual = tab === "vuelos" ? (destinoSeleccionado.includes("Madrid") ? "europa" : "general") : tab;

  const enlaceCotizar = buildWaUrl({
    categoria: catActual,
    destino: destinoSeleccionado,
    tipo: tab === "caribe" ? "Todo Incluido" : tab === "europa" ? "Europa & Seguro" : tab === "exoticos" ? "Exótico" : "Vuelo Internacional",
    precioUSD: paqueteActivo?.precioUSD,
    duracion: paqueteActivo?.duracion,
    mensajePersonalizado: `¡Hola Cityland Travel! Deseo cotizar desde su web el paquete de ${tab === "vuelos" ? "Vuelo" : "Viaje"} a ${destinoSeleccionado} (${pasajeros} pasajeros${fechaViaje ? `, fecha estimada: ${fechaViaje}` : ""}). Deseo separar con el 50% de inicial y conocer opciones de pago.`,
  });

  return (
    <header className="relative">
      {/* Background Hero con Imagen de Alta Definición y Capas de Contraste */}
      <div className="relative min-h-[600px] lg:min-h-[720px] flex flex-col justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90"
          alt="Playas paradisíacas y viajes internacionales - Cityland Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105 transition-transform duration-1000"
        />
        {/* Overlays elegantes para máxima legibilidad y estética futurista */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/40" />

        {/* Content Box */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-10 pb-40">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Agencia Formal en Lima · RUC 20614914239 · Los Olivos
          </div>

          <h1 className={`font-[family-name:var(--font-bebas)] text-[clamp(44px,8.5vw,92px)] leading-[0.92] text-white tracking-tight mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,.7)] transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            PAQUETES TODO INCLUIDO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-200">
              AL MEJOR PRECIO DE PERÚ
            </span>
          </h1>

          <p className={`text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,.8)] mb-6 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Resorts 4★ y 5★ frente al mar, vuelos directos, traslados privados y seguro internacional. <strong className="text-amber-300 font-bold">Separa tu paquete con el 50% de inicial</strong> y cancela el saldo antes de viajar.
          </p>

          {/* Quick Trending Deals Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold text-white/70 uppercase tracking-wider hidden sm:inline">
              Tendencia:
            </span>
            {TRENDING_PILLS.map((pill, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setTab(pill.cat as CategoriaPestana);
                  setDestinoSeleccionado(pill.dest);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border transition-all cursor-pointer ${
                  destinoSeleccionado === pill.dest
                    ? "bg-amber-400 text-slate-900 border-amber-300 font-bold shadow-md shadow-amber-400/20 scale-105"
                    : "bg-white/10 text-white/90 border-white/20 hover:bg-white/20 hover:text-white"
                }`}
              >
                <span>{pill.label}</span>
                <span className="text-[10px] opacity-80 font-bold text-amber-200">({pill.sub})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Interactive Booking Search Card (Estilo TravelTech / Despegar / Hopper) */}
      <div className="relative z-20 max-w-[1120px] mx-auto px-4 sm:px-6 -mt-24 sm:-mt-28">
        <AnimateOnScroll direction="up">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(10,22,40,0.22)] p-5 sm:p-7 border border-slate-100">
            
            {/* Search Engine Category Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleTabChange("caribe")}
                  className={`px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    tab === "caribe"
                      ? "bg-[#0a1628] text-white shadow-md shadow-slate-900/20"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80"
                  }`}
                >
                  <span>🏖️</span>
                  <span>Caribe All Inclusive</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("europa")}
                  className={`px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    tab === "europa"
                      ? "bg-[#0a1628] text-white shadow-md shadow-slate-900/20"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80"
                  }`}
                >
                  <span>🏰</span>
                  <span>Europa & España</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("vuelos")}
                  className={`px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    tab === "vuelos"
                      ? "bg-[#0a1628] text-white shadow-md shadow-slate-900/20"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80"
                  }`}
                >
                  <span>✈️</span>
                  <span>Solo Vuelos</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("exoticos")}
                  className={`px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    tab === "exoticos"
                      ? "bg-[#0a1628] text-white shadow-md shadow-slate-900/20"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80"
                  }`}
                >
                  <span>🕌</span>
                  <span>Turquía & Exóticos</span>
                </button>
              </div>

              {/* Security Pill */}
              <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                Reserva segura con 50% de inicial
              </div>
            </div>

            {/* Form Fields Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
              
              {/* Field 1: Origen */}
              <div className="border border-slate-200 rounded-2xl p-3 bg-slate-50/60 hover:border-slate-300 transition-colors">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Origen
                </label>
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                  <span className="text-base">🛫</span>
                  <span className="truncate">Lima, Perú (LIM)</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Aeropuerto Jorge Chávez</span>
              </div>

              {/* Field 2: Destino (Custom Dropdown) */}
              <div className="relative border border-slate-200 rounded-2xl p-3 bg-white hover:border-slate-400 transition-colors focus-within:ring-2 focus-within:ring-navy/15">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Destino
                </label>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuAbierto(!menuAbierto);
                  }}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm truncate">
                    <span className="text-base">🛬</span>
                    <span className="truncate">{destinoSeleccionado}</span>
                  </div>
                  <span className="text-xs text-slate-400">▼</span>
                </button>
                <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">
                  {paqueteActivo ? `Paquete desde $${paqueteActivo.precioUSD} USD` : "Cupos confirmados"}
                </span>

                {/* Dropdown Menu */}
                {menuAbierto && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-72 overflow-y-auto z-50 p-2 space-y-1">
                    {PAQUETES_COMPLETOS.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          setDestinoSeleccionado(p.ciudad);
                          setMenuAbierto(false);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                          destinoSeleccionado === p.ciudad
                            ? "bg-slate-100 font-bold text-slate-900"
                            : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FlagIcon pais={p.pais} className="w-4 h-3 shrink-0" />
                          <span className="truncate font-semibold">{p.ciudad}</span>
                        </div>
                        <span className="font-extrabold text-slate-900 shrink-0 ml-2">
                          ${p.precioUSD} USD
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Field 3: Fechas Estimadas */}
              <div className="border border-slate-200 rounded-2xl p-3 bg-white hover:border-slate-400 transition-colors">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Fecha o Mes Estimado
                </label>
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                  <span className="text-base">📅</span>
                  <input
                    type="text"
                    placeholder="Ej. Noviembre / Vacaciones"
                    value={fechaViaje}
                    onChange={(e) => setFechaViaje(e.target.value)}
                    className="w-full text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 outline-none bg-transparent"
                  />
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Fechas flexibles disponibles</span>
              </div>

              {/* Field 4: Pasajeros */}
              <div className="border border-slate-200 rounded-2xl p-3 bg-white hover:border-slate-400 transition-colors">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Viajeros
                </label>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                    <span className="text-base">👥</span>
                    <span>{pasajeros} {pasajeros === 1 ? "Adulto" : "Pasajeros"}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setPasajeros(Math.max(1, pasajeros - 1))}
                      className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => setPasajeros(Math.min(10, pasajeros + 1))}
                      className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Tarifas grupales y familiares</span>
              </div>
            </div>

            {/* Action Bar & CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-3 text-xs text-slate-600 text-center sm:text-left">
                <span className="text-xl">✨</span>
                <span>
                  Reserva con <strong>50% de inicial</strong> · Asesoría personalizada en <strong>2 minutos</strong>
                </span>
              </div>

              <a
                href={enlaceCotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb855] text-white px-7 py-4 rounded-2xl text-sm font-extrabold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>Cotizar {destinoSeleccionado} por WhatsApp</span>
              </a>
            </div>

          </div>
        </AnimateOnScroll>
      </div>
    </header>
  );
}
