"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WA_LINK, cotLink } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const destinos = [
  { ciudad: "Madrid", tipo: "Migratorio", precio: 799, hot: true },
  { ciudad: "Punta Cana", tipo: "Turístico", precio: 799, hot: false },
  { ciudad: "Roma", tipo: "Turístico", precio: 1199, hot: false },
  { ciudad: "Cancún", tipo: "Turístico", precio: 749, hot: false },
];

const trustPills = [
  "✅ Sin visa para Europa",
  "⚡ Respuesta en 2h",
  "💳 Pago en cuotas",
  "🛡️ Seguro incluido",
];

const particles = [
  { size: 4, top: "10%", left: "5%", opacity: 0.15, animation: "particle-float-1", duration: "8s" },
  { size: 8, top: "25%", left: "80%", opacity: 0.1, animation: "particle-float-2", duration: "12s" },
  { size: 20, top: "60%", left: "15%", opacity: 0.08, animation: "particle-float-3", duration: "20s" },
  { size: 6, top: "75%", left: "70%", opacity: 0.12, animation: "particle-float-1", duration: "15s" },
  { size: 12, top: "40%", left: "50%", opacity: 0.1, animation: "particle-float-2", duration: "10s" },
  { size: 16, top: "85%", left: "90%", opacity: 0.07, animation: "particle-float-3", duration: "18s" },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative min-h-[calc(100vh-120px)] overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=85"
          alt="Vuelos internacionales desde Lima"
          fill
          priority
          className="object-cover opacity-12"
        />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            opacity: p.opacity,
            background: i % 2 === 0 ? "#f59e0b" : "#ffffff",
            animation: `${p.animation} ${p.duration} ease-in-out infinite`,
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-[1]" />

      {/* Wave divider */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-20 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 60%)" }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-center w-full pb-20">
        {/* Left column */}
        <AnimateOnScroll direction="up">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/40 px-4 py-1.5 rounded-full text-amber-300 text-[12.5px] font-bold tracking-wide uppercase mb-5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              Ofertas disponibles ahora
            </div>

            {/* Heading */}
            <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(52px,7vw,82px)] leading-[0.95] text-white tracking-wide mb-5">
              VUELA A{" "}
              <em className="not-italic text-shimmer">
                EUROPA, CARIBE Y SUDAMÉRICA
              </em>
            </h1>

            {/* Subtitle */}
            <p className="text-[17px] text-white/75 leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0">
              Paquetes migratorios desde{" "}
              <strong className="text-white font-bold">$799</strong> y
              turísticos a más de 70 destinos.
              <br />
              Cotización{" "}
              <strong className="text-white font-bold">GRATIS</strong> en menos
              de 2 horas por WhatsApp.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2.5 mb-10 justify-center lg:justify-start">
              {trustPills.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 bg-white/8 border border-white/18 px-4 py-1.5 rounded-full text-white/90 text-[12.5px] font-semibold backdrop-blur-sm hover:bg-white/14 transition"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 bg-gradient-to-br from-[#FF4D2E] to-[#FF6B4A] text-white px-8 py-4 rounded-full text-[15px] font-extrabold shadow-[0_6px_28px_rgba(232,64,37,.45)] hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(232,64,37,.55)] transition"
              >
                <WhatsAppIcon size={18} />
                Cotizar GRATIS ahora
              </a>
              <a
                href="#destinos"
                className="inline-flex items-center gap-2 bg-white/12 text-white px-7 py-4 rounded-full text-[15px] font-bold border-[1.5px] border-white/30 hover:bg-white/20 transition"
              >
                Ver destinos y precios →
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right column — Destination card */}
        <AnimateOnScroll direction="right" delay={200}>
          <div className="bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,.28)] p-7 relative animate-[floatcard_6s_ease-in-out_infinite] max-w-[480px] mx-auto lg:mx-0">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#4B5680]">
                🔥 Destinos populares
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-green-600">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Online
              </span>
            </div>

            <div className="flex flex-col gap-2.5 mb-5">
              {destinos.map((d) => (
                <button
                  key={d.ciudad}
                  onClick={() => window.open(cotLink(d.ciudad, d.tipo, d.precio), "_blank")}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition hover:scale-[1.02] w-full text-left ${
                    d.hot
                      ? "bg-gradient-to-br from-[#FFF4F2] to-[#FFE8E4] border border-[#FF4D2E]/15"
                      : "bg-[#F4F6FB] hover:bg-[#EFF6FF]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-[14px] text-[#0D1F3C]">
                      {d.ciudad}
                    </span>
                    {d.hot && (
                      <span className="bg-[#FF4D2E] text-white px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide">
                        MÁS VENDIDO
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] font-bold uppercase text-[#4B5680] opacity-60">
                      desde
                    </div>
                    <div className="text-[20px] font-extrabold text-[#0D1F3C] tabular-nums">
                      ${d.precio.toLocaleString()}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="w-full py-3.5 bg-[#059669] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-[#10B981] transition cursor-pointer"
            >
              <WhatsAppIcon size={16} />
              Obtener mi cotización GRATIS
            </a>

            <p className="text-center text-[11px] text-[#4B5680] mt-2.5">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse mr-1" />
              3 asesores disponibles ahora
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </header>
  );
}
