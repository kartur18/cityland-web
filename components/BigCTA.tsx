import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WA_LINK, TELEFONO, waLink } from "@/components/constantes";

const BENEFICIOS = [
  { icon: "⚡", text: "Respuesta en 2h" },
  { icon: "💰", text: "Mejor precio" },
  { icon: "📱", text: "100% WhatsApp" },
  { icon: "💳", text: "Paga en cuotas" },
];

export default function BigCTA() {
  return (
    <section
      className="relative text-center py-24 px-5 overflow-hidden"
      id="cotizar"
      style={{
        background: "linear-gradient(135deg, #0c3265 0%, #1a4a8a 40%, #0c3265 70%, #152B50 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-amber-500/8 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[320px] h-[320px] rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/2 blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <AnimateOnScroll direction="scale">
        <div className="relative z-10 max-w-[600px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/80 text-[11px] font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Asesores disponibles ahora
          </div>

          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(44px,6vw,72px)] text-white tracking-wide leading-[.95] mb-4">
            COTIZA GRATIS<br />
            <em className="not-italic text-amber-300">AHORA MISMO</em>
          </h2>
          <p className="text-white/70 text-base max-w-[480px] mx-auto mb-8 leading-relaxed">
            Un asesor experto te responde en menos de <strong className="text-white">2 horas</strong> con el mejor precio personalizado. Sin compromiso, sin costo.
          </p>

          {/* Beneficios */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {BENEFICIOS.map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-white/85 text-sm font-semibold">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[13px] shrink-0">
                  {icon}
                </div>
                {text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href={waLink("Hola, quiero cotizar un viaje GRATIS")}
              target="_blank"
              rel="noopener"
              className="btn-glow inline-flex items-center gap-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full text-base font-extrabold shadow-[0_6px_32px_rgba(37,211,102,.5)] hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(37,211,102,.6)] transition-all duration-300"
            >
              <WhatsAppIcon size={20} />
              Cotizar por WhatsApp — GRATIS
            </a>
            <a
              href={`tel:${TELEFONO}`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-7 py-4 rounded-full text-[15px] font-bold border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              📞 +51 941 551 530
            </a>
          </div>

          <p className="text-xs text-white/40 mt-5">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse mr-1.5" />
            Lun–Sáb 9am–7pm · WhatsApp 24/7 · Sin spam
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
