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
      <div className="relative min-h-[600px] lg:min-h-[720px] flex flex-col justify-center overflow-hidden pt-10">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90"
          alt="Viajes internacionales desde Lima - Cityland Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
          style={{ animation: "none" }}
        />
        {/* Sleek Enterprise Gradient overlays */}
        <div className="absolute inset-0 bg-[#001e43]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001e43]/95 via-[#001e43]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent h-48" />

        {/* Texto centrado */}
        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto pb-32">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-[12px] font-bold tracking-[0.2em] uppercase mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Conectando Perú con el mundo
          </div>
          <h1
            className={`font-sans font-black text-[clamp(44px,8vw,80px)] leading-[1.05] text-white tracking-tighter mb-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            TU VIAJE AL MUNDO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">EMPIEZA AQUÍ</span>
          </h1>
          <p className={`text-xl md:text-[26px] font-light text-gray-200 max-w-2xl mx-auto leading-snug transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Paquetes migratorios y turísticos desde <strong className="font-extrabold text-white border-b-2 border-[#e3000f]">$799</strong>
          </p>
        </div>
      </div>

      {/* ── Widget de cotización (Airline Engine Style) ── */}
      <div className="relative z-20 max-w-[1060px] mx-auto px-5 -mt-24">
        <AnimateOnScroll direction="up">
          <div className="bg-white rounded-[24px] shadow-[0_30px_100px_rgba(0,30,67,.25)] p-6 md:p-8 border border-gray-100">
            {/* UI Tabs (Simuladas visualmente) */}
            <div className="flex border-b border-gray-100 mb-6 gap-6 overflow-x-auto select-none">
              <button 
                onClick={() => setTipo("migratorio")}
                className={`pb-3 text-[14px] font-bold transition-colors whitespace-nowrap outline-none ${tipo === "migratorio" ? "text-[#001e43] border-b-2 border-[#e3000f]" : "text-gray-400 hover:text-gray-600 border-b-2 border-transparent"}`}
              >
                ✈️ Paquete Migratorio
              </button>
              <button 
                onClick={() => setTipo("turistico")}
                className={`pb-3 text-[14px] font-bold transition-colors whitespace-nowrap outline-none ${tipo === "turistico" ? "text-[#001e43] border-b-2 border-[#e3000f]" : "text-gray-400 hover:text-gray-600 border-b-2 border-transparent"}`}
              >
                🌴 Paquete Turístico
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 relative">
              {/* Origen Falso (UI Sugar) */}
              <div className="w-full md:flex-1 border border-gray-300 hover:border-gray-400 rounded-xl px-4 py-3 bg-white text-left transition-colors cursor-default">
                <span className="block text-[10px] uppercase font-bold text-gray-400 mb-0.5 tracking-wider">Origen</span>
                <span className="text-[17px] text-[#001e43] font-bold truncate">Lima (LIM)</span>
              </div>

              {/* Selector de destino */}
              <div className="relative w-full md:flex-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuAbierto(!menuAbierto);
                  }}
                  className="w-full border border-gray-300 hover:border-gray-400 focus:border-[#001e43] focus:ring-1 focus:ring-[#001e43] rounded-xl px-4 py-3 bg-white text-left transition-all outline-none"
                >
                  <span className="block text-[10px] uppercase font-bold text-[#e3000f] mb-0.5 tracking-wider">Destino</span>
                  <span className={`text-[17px] block truncate ${destino ? "text-[#001e43] font-bold" : "text-gray-400 font-medium"}`}>
                    {labelSelected || "¿A dónde viajas?"}
                  </span>
                </button>

                {menuAbierto && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden max-h-[300px] overflow-y-auto">
                    {destinosOpciones.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => {
                          setDestino(d.value);
                          setMenuAbierto(false);
                        }}
                        className={`w-full text-left px-5 py-3.5 text-[15px] transition-colors ${destino === d.value ? "bg-[#001e43]/5 text-[#001e43] font-extrabold border-l-4 border-l-[#e3000f]" : "text-gray-700 hover:bg-gray-50 border-l-4 border-l-transparent font-medium"}`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Fechas y Pasajeros Falsos (UI Sugar) */}
              <div className="hidden lg:block w-full md:flex-1 border border-gray-300 rounded-xl px-4 py-3 bg-white text-left opacity-70">
                <span className="block text-[10px] uppercase font-bold text-gray-400 mb-0.5 tracking-wider">Fechas</span>
                <span className="text-[17px] text-gray-500 font-medium select-none truncate">Abril 2026</span>
              </div>
              <div className="hidden lg:block w-full md:w-[130px] border border-gray-300 rounded-xl px-4 py-3 bg-white text-left opacity-70">
                <span className="block text-[10px] uppercase font-bold text-gray-400 mb-0.5 tracking-wider">Pasajeros</span>
                <span className="text-[17px] text-gray-500 font-medium select-none">1 Adulto</span>
              </div>

              {/* CTA Oficial */}
              <a
                href={enlaceCotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto h-[74px] inline-flex items-center justify-center gap-2 bg-[#e3000f] hover:bg-[#b0000a] text-white px-10 rounded-xl text-[16px] font-black shadow-lg hover:-translate-y-0.5 transition-all outline-none"
              >
                Buscar
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
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
