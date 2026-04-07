import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { TELEFONO, waLink } from "@/components/constantes";

export default function BigCTA() {
  return (
    <section
      className="relative text-center py-24 px-5 overflow-hidden"
      id="cotizar"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #162544 50%, #0a1628 100%)" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative gradients */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-red-500/[0.06] blur-[100px]" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-blue-500/[0.04] blur-[100px]" />

      <AnimateOnScroll direction="scale">
        <div className="relative z-10 max-w-[560px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 px-3.5 py-1.5 rounded-lg text-white/50 text-[11px] font-semibold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Asesores disponibles ahora
          </div>

          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(44px,6vw,68px)] text-white tracking-wide leading-[0.95] mb-4">
            COTIZA GRATIS<br />
            <span className="text-amber-400">AHORA MISMO</span>
          </h2>
          <p className="text-white/50 text-[15px] max-w-[440px] mx-auto mb-8 leading-relaxed">
            Un asesor experto te responde en menos de <span className="text-white font-semibold">2 horas</span> con el mejor precio personalizado. Sin compromiso.
          </p>

          {/* Benefits */}
          <div className="flex justify-center gap-5 mb-8 flex-wrap">
            {[
              { icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: "Respuesta 2h" },
              { icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, text: "Mejor precio" },
              { icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>, text: "Paga en cuotas" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-white/50 text-[12px] font-medium">
                {icon}
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
              className="btn-hover inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1fb855] text-white px-7 py-3.5 rounded-xl text-[14px] font-bold shadow-lg shadow-emerald-500/30 transition-all"
            >
              <WhatsAppIcon size={18} />
              Cotizar por WhatsApp
            </a>
            <a
              href={`tel:${TELEFONO}`}
              className="inline-flex items-center gap-2 bg-white/[0.06] text-white/80 px-6 py-3.5 rounded-xl text-[14px] font-semibold border border-white/10 hover:bg-white/10 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              +51 941 551 530
            </a>
          </div>

          <p className="text-[11px] text-white/25 mt-5">
            Lun–Sáb 9am–7pm · WhatsApp 24/7
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
