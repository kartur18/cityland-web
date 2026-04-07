import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WA_LINK } from "@/components/constantes";

const PASOS = [
  {
    num: 1,
    titulo: "Escríbenos por WhatsApp",
    desc: "Cuéntanos tu destino, fechas y pasajeros. Sin compromiso.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    color: "from-[#dc2626] to-[#ef4444]",
  },
  {
    num: 2,
    titulo: "Recibe tu cotización en 2h",
    desc: "Un asesor experto te envía opciones personalizadas.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white stroke-2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    color: "from-[#0a1628] to-[#162544]",
  },
  {
    num: 3,
    titulo: "Confirma y paga fácil",
    desc: "Yape, Plin, transferencia, tarjeta o cuotas sin interés.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white stroke-2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    color: "from-[#059669] to-[#10B981]",
  },
  {
    num: 4,
    titulo: "Viaja tranquilo",
    desc: "Soporte 24/7 y seguro de viaje incluido en tu paquete.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>,
    color: "from-[#F59E0B] to-[#FBBF24]",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-[1100px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold tracking-[3px] uppercase text-[#dc2626] mb-3">Cómo funciona</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,54px)] text-[#0a1628] tracking-wide leading-none">
              TU VIAJE EN 4 PASOS
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[30px] left-[12.5%] right-[12.5%] h-px bg-gray-200" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {PASOS.map((p, i) => (
              <AnimateOnScroll key={p.num} stagger={Math.min(i + 1, 4)}>
                <div className="text-center relative group">
                  <div className={`w-[60px] h-[60px] rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mx-auto mb-5 shadow-lg transition-transform duration-300 group-hover:-translate-y-1`}>
                    {p.icon}
                  </div>
                  <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Paso {p.num}</div>
                  <h3 className="text-[14px] font-bold text-[#0a1628] mb-2 leading-snug">{p.titulo}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="btn-hover inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1fb855] text-white px-7 py-3.5 rounded-xl text-[14px] font-bold shadow-lg shadow-emerald-500/25"
          >
            <WhatsAppIcon size={18} />
            Empezar ahora — Es gratis
          </a>
        </div>
      </div>
    </section>
  );
}
