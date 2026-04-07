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
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c3265]/85 via-[#0c3265]/50 to-[#d30000]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Floating particles */}
        <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-amber-400/60" style={{ animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div className="absolute top-32 right-[15%] w-3 h-3 rounded-full bg-white/30" style={{ animation: "particle-float-2 6s ease-in-out infinite" }} />
        <div className="absolute bottom-40 left-[20%] w-1.5 h-1.5 rounded-full bg-red-400/50" style={{ animation: "particle-float-3 10s ease-in-out infinite" }} />
        <div className="absolute top-1/3 right-[8%] w-4 h-4 rounded-full bg-amber-300/25" style={{ animation: "particle-float-1 12s ease-in-out infinite reverse" }} />

        {/* Texto centrado */}
        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pb-28">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-[12px] font-bold tracking-widest uppercase mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Agencia de viajes en Lima · Desde 2015
          </div>
          <h1
            className={`font-[family-name:var(--font-bebas)] text-[clamp(44px,6.5vw,80px)] leading-[0.95] text-white tracking-wide mb-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Descubre el mundo<br />
            <span className="text-amber-300">con los mejores precios</span>
          </h1>
          <p className={`text-lg text-white/80 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Paquetes migratorios desde <strong className="text-amber-300">$799</strong> · Turísticos a +70 destinos · Cotización gratis en 2 horas
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
                  className="w-full flex items-center gap-3 border-2 border-gray-100 rounded-xl px-4 py-3.5 text-left hover:border-[#0c3265]/30 transition-colors focus:outline-none focus:border-[#0c3265]/50"
                >
                  <span className="text-xl">🌍</span>
                  <span className={`text-sm flex-1 ${destino ? "text-gray-900 font-semibold" : "text-gray-400"}`}>
                    {labelSelected || "¿A dónde quieres viajar?"}
                  </span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${menuAbierto ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
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
                        className={`w-full text-left px-4 py-3 text-sm transition-colors ${destino === d.value ? "bg-blue-50 text-[#0c3265] font-semibold" : "text-gray-700 hover:bg-gray-50"}`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Toggle tipo */}
              <div className="flex rounded-xl border-2 border-gray-100 overflow-hidden flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setTipo("migratorio")}
                  className={`px-5 py-3.5 text-sm font-semibold transition-colors ${
                    tipo === "migratorio"
                      ? "bg-[#0c3265] text-white"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  ✈ Migratorio
                </button>
                <button
                  type="button"
                  onClick={() => setTipo("turistico")}
                  className={`px-5 py-3.5 text-sm font-semibold transition-colors ${
                    tipo === "turistico"
                      ? "bg-[#0c3265] text-white"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  🌴 Turístico
                </button>
              </div>

              {/* CTA WhatsApp */}
              <a
                href={enlaceCotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-7 py-3.5 rounded-xl text-sm font-extrabold flex-shrink-0 shadow-[0_4px_20px_rgba(37,211,102,.4)]"
              >
                <WhatsAppIcon size={16} />
                Cotizar GRATIS
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
