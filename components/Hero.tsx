"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WA_LINK, waLink } from "@/components/constantes";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const destinosOpciones = [
  { label: "Madrid", flag: "🇪🇸", value: "Madrid" },
  { label: "Barcelona", flag: "🇪🇸", value: "Barcelona" },
  { label: "Roma", flag: "🇮🇹", value: "Roma" },
  { label: "Milán", flag: "🇮🇹", value: "Milán" },
  { label: "Punta Cana", flag: "🇩🇴", value: "Punta Cana" },
  { label: "Cancún", flag: "🇲🇽", value: "Cancún" },
  { label: "Cartagena", flag: "🇨🇴", value: "Cartagena" },
  { label: "Río de Janeiro", flag: "🇧🇷", value: "Río de Janeiro" },
];

export default function Hero() {
  const [destino, setDestino] = useState("");
  const [tipo, setTipo] = useState<"migratorio" | "turistico">("migratorio");
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [fecha, setFecha] = useState("");
  const [pasajeros, setPasajeros] = useState(1);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!menuAbierto) return;
    const cerrar = () => setMenuAbierto(false);
    document.addEventListener("click", cerrar);
    return () => document.removeEventListener("click", cerrar);
  }, [menuAbierto]);

  const enlaceCotizar = destino
    ? waLink(`Hola Cityland Travel, quiero cotizar un paquete ${tipo} a ${destino}.${fecha ? ` Fecha: ${fecha}.` : ""}${pasajeros > 1 ? ` Pasajeros: ${pasajeros}.` : " Pasajeros: 1."}`)
    : WA_LINK;

  const labelSelected = destinosOpciones.find(d => d.value === destino);

  return (
    <header className="relative">
      {/* Hero image */}
      <div className="relative min-h-[560px] lg:min-h-[680px] flex flex-col justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90"
          alt="Viajes internacionales desde Lima - Cityland Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#0a1628]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pb-36 pt-8">
          <div className={`inline-flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full text-white/80 text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            Agencia de viajes en Lima, Perú
          </div>

          <h1 className={`font-[family-name:var(--font-bebas)] text-[clamp(48px,9vw,88px)] leading-[0.95] text-white tracking-tight mb-5 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            VUELOS Y PAQUETES<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">AL MEJOR PRECIO</span>
          </h1>

          <p className={`text-lg md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Paquetes migratorios y turísticos desde <span className="font-bold text-white">$799</span>
            <span className="mx-2 text-white/30">|</span>
            Cotización gratis en 2 horas
          </p>
        </div>
      </div>

      {/* Search widget */}
      <div className="relative z-20 max-w-[1040px] mx-auto px-5 -mt-20">
        <AnimateOnScroll direction="up">
          <div className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,.18)] p-5 md:p-6 border border-gray-100/80">
            {/* Tabs */}
            <div className="flex gap-1 mb-5 bg-gray-50 rounded-lg p-1 w-fit">
              <button
                onClick={() => setTipo("migratorio")}
                className={`px-4 py-2 rounded-md text-[13px] font-semibold transition-all ${tipo === "migratorio" ? "bg-white text-[#0a1628] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
              >
                Paquete Migratorio
              </button>
              <button
                onClick={() => setTipo("turistico")}
                className={`px-4 py-2 rounded-md text-[13px] font-semibold transition-all ${tipo === "turistico" ? "bg-white text-[#0a1628] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
              >
                Paquete Turístico
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-stretch gap-3">
              {/* Origen */}
              <div className="flex-1 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50">
                <span className="block text-[10px] uppercase font-semibold text-gray-400 mb-0.5 tracking-wider">Origen</span>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <span className="text-[15px] text-[#0a1628] font-semibold">Lima (LIM)</span>
                </div>
              </div>

              {/* Destino */}
              <div className="relative flex-1">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setMenuAbierto(!menuAbierto); }}
                  className="w-full border border-gray-200 hover:border-gray-300 focus:border-[#dc2626] focus:ring-2 focus:ring-[#dc2626]/10 rounded-xl px-4 py-3 bg-white text-left transition-all outline-none"
                >
                  <span className="block text-[10px] uppercase font-semibold text-[#dc2626] mb-0.5 tracking-wider">Destino</span>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
                    <span className={`text-[15px] ${destino ? "text-[#0a1628] font-semibold" : "text-gray-400"}`}>
                      {labelSelected ? `${labelSelected.flag} ${labelSelected.label}` : "¿A dónde viajas?"}
                    </span>
                  </div>
                </button>

                {menuAbierto && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 overflow-hidden max-h-[280px] overflow-y-auto">
                    {destinosOpciones.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => { setDestino(d.value); setMenuAbierto(false); }}
                        className={`w-full text-left px-4 py-3 text-[14px] transition-colors flex items-center gap-3 ${destino === d.value ? "bg-red-50 text-[#dc2626] font-semibold" : "text-gray-700 hover:bg-gray-50 font-medium"}`}
                      >
                        <span className="text-base">{d.flag}</span>
                        {d.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Fechas */}
              <div className="hidden lg:flex flex-1 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 items-center">
                <div className="w-full">
                  <span className="block text-[10px] uppercase font-semibold text-gray-400 mb-0.5 tracking-wider">Fechas</span>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 fill-none stroke-current stroke-2 shrink-0" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <input
                      type="date"
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      className="text-[15px] text-[#0a1628] font-semibold bg-transparent border-none outline-none w-full cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      placeholder="Flexibles"
                    />
                  </div>
                </div>
              </div>

              {/* Pasajeros */}
              <div className="hidden lg:flex flex-1 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 items-center">
                <div className="w-full">
                  <span className="block text-[10px] uppercase font-semibold text-gray-400 mb-0.5 tracking-wider">Pasajeros</span>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 fill-none stroke-current stroke-2 shrink-0" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setPasajeros((p) => Math.max(1, p - 1))}
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#dc2626] hover:text-[#dc2626] transition-colors text-sm font-bold"
                      >
                        &minus;
                      </button>
                      <span className="text-[15px] text-[#0a1628] font-semibold min-w-[16px] text-center">{pasajeros}</span>
                      <button
                        type="button"
                        onClick={() => setPasajeros((p) => Math.min(10, p + 1))}
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#dc2626] hover:text-[#dc2626] transition-colors text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={enlaceCotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3 md:py-0 rounded-xl text-[15px] font-bold shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all min-h-[56px]"
              >
                Buscar vuelos
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5">
          {[
            { icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>, text: "+5,000 viajes" },
            { icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-amber-500"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, text: "4.9/5 Google" },
            { icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: "Respuesta en 2h" },
            { icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: "Seguro incluido" },
          ].map((b) => (
            <span key={b.text} className="text-[12px] text-gray-400 flex items-center gap-1.5 font-medium">
              {b.icon}
              {b.text}
            </span>
          ))}
        </div>
      </div>

      <div className="h-12" />
    </header>
  );
}
