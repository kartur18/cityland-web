"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WA_LINK, waLink } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const destinosOpciones = [
  { label: "Madrid 🇪🇸", value: "Madrid" },
  { label: "Barcelona 🇪🇸", value: "Barcelona" },
  { label: "Roma 🇮🇹", value: "Roma" },
  { label: "Milán 🇮🇹", value: "Milán" },
  { label: "Punta Cana 🇩🇴", value: "Punta Cana" },
  { label: "Cancún 🇲🇽", value: "Cancún" },
  { label: "Cartagena 🇨🇴", value: "Cartagena" },
  { label: "Río de Janeiro 🇧🇷", value: "Río de Janeiro" },
];

const insignias = [
  { icono: "✈️", texto: "+5,000 viajes" },
  { icono: "⭐", texto: "4.9/5 Google" },
  { icono: "⚡", texto: "Respuesta en 2h" },
  { icono: "🛡️", texto: "Seguro incluido" },
  { icono: "💳", texto: "Pago en cuotas" },
];

export default function Hero() {
  const [destino, setDestino] = useState("");
  const [tipo, setTipo] = useState<"migratorio" | "turistico">("migratorio");
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  /* Cerrar dropdown al hacer click fuera */
  useEffect(() => {
    if (!menuAbierto) return;
    const cerrar = () => setMenuAbierto(false);
    document.addEventListener("click", cerrar);
    return () => document.removeEventListener("click", cerrar);
  }, [menuAbierto]);

  const enlaceCotizar = destino
    ? waLink(`Hola Cityland Travel, quiero cotizar un paquete ${tipo} a ${destino}.`)
    : WA_LINK;

  const labelSelected = destinosOpciones.find(d => d.value === destino)?.label;

  return (
    <header className="relative">
      {/* ── Hero image ── */}
      <div className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90"
          alt="Viajes internacionales desde Lima - Cityland Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
          style={{ animation: "none" }}
        />
        {/* Multi-layer gradient for depth - Enterprise dark blue to red */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001e43]/95 via-[#001e43]/70 to-[#e3000f]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 md:from-black/60 via-transparent to-transparent" />

        {/* Texto centrado */}
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pb-28">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-[13px] font-bold tracking-widest uppercase mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Vuelos Internacionales y Paquetes · Desde 2015
          </div>
          <h1
            className={`font-sans font-extrabold text-[clamp(40px,7vw,70px)] leading-[1.05] text-white tracking-tight mb-8 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            TU VIAJE AL MUNDO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">EMPIEZA AQUÍ</span>
          </h1>
          <p className={`text-xl md:text-2xl font-medium text-gray-200 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Paquetes migratorios desde <strong className="text-white bg-[#e3000f] px-2 py-0.5 rounded ml-1">$799</strong>
          </p>
        </div>
      </div>

      {/* ── Widget de cotización ── */}
      <div className="relative z-20 max-w-4xl mx-auto px-5 -mt-20">
        <AnimateOnScroll direction="up">
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,.18)] p-5 md:p-6 border border-white/50">
            <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#64748b] mb-3">
              Cotiza tu viaje GRATIS — Respuesta en menos de 2 horas
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              {/* Selector de destino */}
              <div className="relative flex-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuAbierto(!menuAbierto);
                  }}
                  className="w-full flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3.5 text-left hover:border-[#001e43]/50 transition-colors focus:outline-none focus:border-[#001e43]/80 bg-gray-50/50"
                >
                  <span className="text-xl opacity-70">🌍</span>
                  <span className={`text-[15px] flex-1 ${destino ? "text-[#001e43] font-bold" : "text-gray-500 font-medium"}`}>
                    {labelSelected || "¿Hacia dónde vuelas?"}
                  </span>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${menuAbierto ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </button>

                {menuAbierto && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,.12)] z-30 overflow-hidden">
                    {destinosOpciones.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => {
                          setDestino(d.value);
                          setMenuAbierto(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-[14px] transition-colors ${destino === d.value ? "bg-[#001e43]/5 text-[#001e43] font-bold" : "text-gray-700 hover:bg-gray-50"}`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Toggle tipo - Enterprise styles */}
              <div className="flex rounded-xl border border-gray-200 overflow-hidden flex-shrink-0 bg-gray-50 p-1">
                <button
                  type="button"
                  onClick={() => setTipo("migratorio")}
                  className={`px-5 py-2.5 text-sm font-bold rounded-lg transition-colors ${
                    tipo === "migratorio"
                      ? "bg-[#001e43] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  ✈ Migración
                </button>
                <button
                  type="button"
                  onClick={() => setTipo("turistico")}
                  className={`px-5 py-2.5 text-sm font-bold rounded-lg transition-colors ${
                    tipo === "turistico"
                      ? "bg-[#001e43] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  🌴 Turismo
                </button>
              </div>

              {/* CTA Corporativo */}
              <a
                href={enlaceCotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e3000f] hover:bg-[#b0000a] text-white px-8 py-3.5 rounded-xl text-[15px] font-bold shadow-lg transition-colors flex-shrink-0 w-full md:w-auto"
              >
                Buscar Vuelos
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Insignias de confianza */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5">
          {insignias.map((b) => (
            <span
              key={b.texto}
              className="text-[12px] text-gray-500 flex items-center gap-1.5 font-medium"
            >
              <span>{b.icono}</span>
              {b.texto}
            </span>
          ))}
        </div>
      </div>

      {/* Espaciador */}
      <div className="h-14" />
    </header>
  );
}
