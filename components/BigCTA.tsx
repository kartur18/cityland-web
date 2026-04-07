import { WA_LINK, WA_SVG, TELEFONO } from "@/components/constantes";

export default function BigCTA() {
  return (
    <section className="bg-gradient-to-br from-[#0D1F3C] via-[#1A3560] to-[#152B50] text-center py-20 px-5 relative overflow-hidden" id="cotizar">
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-amber-500/8 animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute -bottom-15 -left-15 w-[240px] h-[240px] rounded-full bg-red-500/7 animate-[float_7s_ease-in-out_infinite_reverse]" />
      <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(40px,6vw,70px)] text-white tracking-wide leading-none mb-4 relative z-1">COTIZA GRATIS<br/><em className="not-italic text-amber-300">AHORA MISMO</em></h2>
      <p className="text-white/65 text-base max-w-[500px] mx-auto mb-7 leading-relaxed relative z-1">Un asesor experto te responde en menos de 2 horas con el mejor precio personalizado. Sin compromiso, sin costo.</p>
      <div className="flex justify-center gap-6 mb-8 flex-wrap relative z-1">
        {[["⚡","Respuesta en 2h"],["💰","Mejor precio garantizado"],["📱","100% por WhatsApp"],["💳","Paga en cuotas"]].map(([icon,text])=>(
          <div key={text} className="flex items-center gap-1.5 text-white/85 text-sm font-semibold"><div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[13px]">{icon}</div>{text}</div>
        ))}
      </div>
      <div className="flex justify-center gap-3.5 flex-wrap relative z-1">
        <a href={WA_LINK} target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 bg-[#059669] text-white px-10 py-4.5 rounded-full text-base font-extrabold shadow-[0_6px_28px_rgba(22,163,74,.45)] hover:-translate-y-0.5 transition animate-[pulse_2.5s_infinite]">
          <span dangerouslySetInnerHTML={{ __html: WA_SVG(20) }} />Cotizar por WhatsApp — GRATIS
        </a>
        <a href={`tel:${TELEFONO}`} className="inline-flex items-center gap-2 bg-white/12 text-white px-7 py-4 rounded-full text-[15px] font-bold border-[1.5px] border-white/25 hover:bg-white/20 transition">📞 +51 941 551 530</a>
      </div>
      <p className="text-xs text-white/40 mt-4 relative z-1"><span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse mr-1"/>Asesores disponibles ahora · Lun–Sáb 9am–7pm · WhatsApp 24/7</p>
    </section>
  );
}
