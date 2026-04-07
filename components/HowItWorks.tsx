import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WA_LINK } from "@/components/constantes";

const PASOS = [
  {
    num: 1,
    icon: "💬",
    titulo: "Escríbenos por WhatsApp",
    desc: "Dinos tu destino, fechas y número de personas. ¡Gratis y sin compromiso!",
    color: "from-[#d30000] to-[#FF4D2E]",
  },
  {
    num: 2,
    icon: "📋",
    titulo: "Recibe tu cotización en 2h",
    desc: "Un asesor experto te envía el paquete personalizado con el mejor precio.",
    color: "from-[#0c3265] to-[#1a4a8a]",
  },
  {
    num: 3,
    icon: "💳",
    titulo: "Confirma y paga fácil",
    desc: "Yape, Plin, transferencia, tarjeta o efectivo. También en cuotas.",
    color: "from-[#059669] to-[#10B981]",
  },
  {
    num: 4,
    icon: "✈️",
    titulo: "¡Viaja sin preocupaciones!",
    desc: "Te acompañamos antes, durante y después. Seguro de viaje incluido.",
    color: "from-[#F59E0B] to-[#FBBF24]",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#f1f5f9] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-100/50 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-red-100/40 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1200px] mx-auto px-5 relative">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-[12px] font-extrabold tracking-[3px] uppercase text-[#d30000] mb-2">Así de fácil</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,54px)] text-[#0c3265] tracking-wide leading-none">
              TU VIAJE EN 4 PASOS
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#d30000] via-[#0c3265] via-[#059669] to-[#F59E0B] opacity-20" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PASOS.map((p, i) => (
              <AnimateOnScroll key={p.num} stagger={Math.min(i + 1, 4)}>
                <div className="text-center relative group">
                  {/* Number bubble */}
                  <div className={`w-[60px] h-[60px] rounded-2xl bg-gradient-to-br ${p.color} text-white shadow-[0_8px_24px_rgba(0,0,0,.15)] flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_16px_32px_rgba(0,0,0,.2)]`}>
                    <span className="text-[26px]">{p.icon}</span>
                  </div>
                  {/* Step number badge */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 translate-x-5 -translate-y-1 w-5 h-5 rounded-full bg-gradient-to-br ${p.color} text-white text-[10px] font-extrabold flex items-center justify-center shadow-sm`}>
                    {p.num}
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0c3265] mb-2 leading-snug">{p.titulo}</h3>
                  <p className="text-[13px] text-[#64748b] leading-relaxed">{p.desc}</p>
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
            className="btn-glow inline-flex items-center gap-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full text-[15px] font-extrabold shadow-[0_6px_28px_rgba(37,211,102,.4)]"
          >
            <WhatsAppIcon size={18} />
            Empezar ahora — Es GRATIS
          </a>
        </div>
      </div>
    </section>
  );
}
