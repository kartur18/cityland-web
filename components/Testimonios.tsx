"use client";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";
import { TESTIMONIOS } from "@/components/constantes";

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#dc2626] mb-3">Testimonios</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0a1628] tracking-wide leading-tight">
              Lo que dicen nuestros viajeros
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="text-amber-400 text-[16px] tracking-wider">★★★★★</span>
              <span className="text-[13px] font-semibold text-[#0a1628]">4.9/5</span>
              <span className="text-[12px] text-gray-400">· +500 reseñas en Google</span>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-5 px-5 no-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none lg:mx-0 lg:px-0 lg:pb-0">
          {TESTIMONIOS.map((t, index) => (
            <AnimateOnScroll key={t.nombre} stagger={Math.min(index + 1, 4)} className="snap-start shrink-0 w-[85vw] sm:w-[320px] lg:w-auto lg:shrink">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group h-full">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} viewBox="0 0 24 24" className="w-4 h-4 fill-amber-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5">
                  &ldquo;{t.texto}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full shrink-0 relative overflow-hidden bg-gray-100">
                    {'foto' in t && t.foto ? (
                      <Image
                        src={t.foto as string}
                        alt={t.nombre}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-[11px] font-bold" style={{ backgroundColor: t.color }}>
                        {t.iniciales}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-[#0a1628]">{t.nombre}</p>
                    <p className="text-[11px] text-gray-400">{t.ruta}</p>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-500">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-[10px] font-semibold">Verificado</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
