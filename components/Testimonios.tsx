import AnimateOnScroll from "@/components/AnimateOnScroll";
import { TESTIMONIOS } from "@/components/constantes";

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-[#F4F6FB]">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#FF4D2E] mb-2">TESTIMONIOS</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0D1F3C] tracking-wide leading-tight">LO QUE DICEN NUESTROS VIAJEROS</h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIOS.map((t, index) => (
            <AnimateOnScroll key={t.nombre} stagger={index + 1}>
              <div className="gradient-border bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,.1)] transition">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-amber-400 text-[18px]">★</span>
                  ))}
                </div>
                <p className="text-[14px] text-[#4B5680] leading-relaxed mb-5 italic relative pl-5">
                  <span className="absolute left-0 top-0 text-[28px] text-[#0D1F3C]/15 font-serif leading-none">&ldquo;</span>
                  {t.texto}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-bold" style={{ backgroundColor: t.color }}>
                    {t.iniciales}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#0D1F3C]">{t.nombre}</p>
                    <p className="text-[12px] text-[#4B5680]">{t.ruta}</p>
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
