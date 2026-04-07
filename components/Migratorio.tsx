import AnimateOnScroll from "@/components/AnimateOnScroll";
import { waLink } from "@/components/constantes";

const items = [
  { titulo: "Boleto aéreo", desc: "Solo ida con aerolíneas de primera línea", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg> },
  { titulo: "Hotel tránsito", desc: "Alojamiento incluido en escalas", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"/></svg> },
  { titulo: "Seguro Schengen", desc: "Cobertura médica internacional", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { titulo: "Retorno flexible", desc: "Cambia tu fecha de regreso sin costo", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg> },
  { titulo: "Documentación", desc: "Asesoría completa con tus papeles", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { titulo: "Asesoría 24/7", desc: "Soporte antes, durante y después", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
];

export default function Migratorio() {
  return (
    <section id="migra" className="py-24 bg-[#0a1628] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-500/[0.04] blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-[1100px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        <AnimateOnScroll direction="left">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 px-3.5 py-1.5 rounded-lg text-white/60 text-[11px] font-semibold tracking-wider uppercase mb-6">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              El más vendido
            </div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(40px,5vw,60px)] tracking-wide leading-[0.95] mb-6">
              PAQUETE MIGRATORIO<br/>
              <span className="text-white/50">EUROPA DESDE</span>{" "}
              <span className="text-white bg-[#dc2626] px-3 py-0.5 rounded-lg">$799</span>
            </h2>
            <p className="text-[16px] text-white/55 leading-relaxed mb-4">
              Todo lo que necesitas para emigrar a Europa de forma segura y organizada. Vuelo, hotel de tránsito, seguro y asesoría personalizada.
            </p>
            <p className="text-[16px] text-white/55 leading-relaxed mb-8">
              Más de 3,000 peruanos ya viajaron con nosotros. Sin visa requerida para zona Schengen.
            </p>
            <a href={waLink("Quiero info del paquete migratorio $799")} target="_blank" rel="noopener" className="btn-hover inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3.5 rounded-xl text-[14px] font-bold shadow-lg shadow-red-600/25 transition-all">
              Explorar plan migratorio
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right">
          <div className="grid grid-cols-2 gap-3">
            {items.map((item, index) => (
              <AnimateOnScroll key={item.titulo} stagger={index + 1}>
                <div className="bg-white/[0.04] backdrop-blur-sm rounded-xl p-5 border border-white/[0.06] hover:bg-white/[0.08] transition group">
                  <div className="text-white/40 mb-3 group-hover:text-[#dc2626] transition-colors">{item.icon}</div>
                  <h3 className="text-[14px] font-semibold text-white mb-1">{item.titulo}</h3>
                  <p className="text-[12px] text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
