import AnimateOnScroll from "@/components/AnimateOnScroll";
import { WA_LINK } from "@/components/constantes";

const PASOS = [
  { num: 1, titulo: "Escríbenos por WhatsApp", desc: "Dinos tu destino, fechas y número de personas. ¡Gratis y sin compromiso!" },
  { num: 2, titulo: "Recibe tu cotización en 2h", desc: "Un asesor experto te envía el paquete personalizado con el mejor precio." },
  { num: 3, titulo: "Confirma y paga fácil", desc: "Yape, Plin, transferencia, tarjeta o efectivo. También en cuotas." },
  { num: 4, titulo: "¡Viaja sin preocupaciones!", desc: "Te acompañamos antes, durante y después. Seguro de viaje incluido." },
];
export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[11px] font-extrabold tracking-[3px] uppercase text-[#d30000] mb-2">Así de fácil</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,54px)] text-[#0c3265] tracking-wide leading-none">TU VIAJE EN 4 PASOS</h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PASOS.map((p) => (
            <AnimateOnScroll key={p.num} stagger={p.num}>
              <div className="text-center relative">
                <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#d30000] to-[#FF7A59] text-white shadow-[0_4px_16px_rgba(232,64,37,.35)] font-[family-name:var(--font-bebas)] text-2xl flex items-center justify-center mx-auto mb-4">{p.num}</div>
                <h3 className="text-sm font-extrabold text-[#0c3265] mb-2">{p.titulo}</h3>
                <p className="text-[13px] text-[#64748b] leading-relaxed">{p.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={WA_LINK} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gradient-to-br from-[#d30000] to-[#e52020] text-white px-8 py-4 rounded-full text-[15px] font-extrabold shadow-[0_6px_28px_rgba(232,64,37,.45)] hover:-translate-y-0.5 transition">Empezar ahora — Es GRATIS →</a>
        </div>
      </div>
    </section>
  );
}
