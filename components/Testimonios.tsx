"use client";
import { useState, useEffect } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { TESTIMONIOS } from "@/components/constantes";

export default function Testimonios() {
  const [active, setActive] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % TESTIMONIOS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonios" className="py-20 bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#d30000] mb-2">Testimonios</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0c3265] tracking-wide leading-tight">
              Lo que dicen nuestros viajeros
            </h2>
            {/* Estrellas y conteo */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="text-amber-400 text-[20px] tracking-wider">★★★★★</span>
              <span className="text-sm font-bold text-[#0c3265]">4.9/5</span>
              <span className="text-[13px] text-[#64748b]">· +500 reseñas verificadas en Google</span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Grid 3 columnas en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIOS.map((t, index) => (
            <AnimateOnScroll key={t.nombre} stagger={Math.min(index + 1, 4)}>
              <div
                className={`bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,.10)] transition-all duration-300 border-l-4 relative overflow-hidden group`}
                style={{ borderColor: t.color }}
              >
                {/* Quote decorativa */}
                <span className="absolute top-4 right-5 text-[52px] text-gray-100 font-serif leading-none select-none group-hover:text-gray-200 transition-colors">❝</span>

                {/* Estrellas */}
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-amber-400 text-[16px]">★</span>
                  ))}
                </div>

                {/* Texto */}
                <p className="text-[14px] text-[#64748b] leading-relaxed mb-5 relative z-10">
                  {t.texto}
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-extrabold shrink-0 shadow-sm"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.iniciales}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#0c3265]">{t.nombre}</p>
                    <p className="text-[11px] text-[#64748b]">{t.ruta}</p>
                  </div>
                  {/* Verificado */}
                  <div className="ml-auto flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <span className="text-[#059669] text-[10px]">✓</span>
                    <span className="text-[10px] text-[#059669] font-bold">Verificado</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Dots navigation (decorativos) */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-[#d30000] w-6" : "bg-gray-300"}`}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
