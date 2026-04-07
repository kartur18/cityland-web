"use client";
import { useEffect, useState, useCallback } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { waLink } from "@/components/constantes";

export default function ExitPopup() {
  const [visible, setVisible] = useState(false);
  const cerrar = useCallback(() => { setVisible(false); sessionStorage.setItem("exitShown","1"); }, []);
  const mostrar = useCallback(() => { if (sessionStorage.getItem("exitShown")) return; setVisible(true); sessionStorage.setItem("exitShown","1"); }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => { if (e.clientY < 5 && !e.relatedTarget) mostrar(); };
    let lastScroll = 0;
    const handleScroll = () => { const st = window.scrollY; if (st < lastScroll - 200 && st > 500) mostrar(); lastScroll = st; };
    document.addEventListener("mouseout", handleMouse);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { document.removeEventListener("mouseout", handleMouse); window.removeEventListener("scroll", handleScroll); };
  }, [mostrar]);

  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black/65 z-[10000] flex items-center justify-center backdrop-blur-sm" onClick={(e)=>{if(e.target===e.currentTarget)cerrar()}}>
      <div className="bg-white rounded-3xl max-w-[500px] w-[92%] p-10 text-center relative shadow-[0_32px_80px_rgba(0,0,0,.3)] animate-[popIn_.4s_cubic-bezier(.34,1.56,.64,1)]">
        <button onClick={cerrar} className="absolute top-3.5 right-3.5 bg-[#f8fafc] border-none w-8 h-8 rounded-full text-base cursor-pointer text-[#64748b] flex items-center justify-center hover:bg-[#0c3265] hover:text-white transition" aria-label="Cerrar">×</button>
        <div className="text-5xl mb-4">✈️</div>
        <h3 className="font-[family-name:var(--font-bebas)] text-4xl text-[#0c3265] mb-2 tracking-wide">¡ESPERA! NO TE VAYAS<br/>SIN TU COTIZACIÓN</h3>
        <p className="text-sm text-[#64748b] leading-relaxed mb-6">Un asesor te envía el mejor precio en <strong>menos de 2 horas</strong>. Es gratis y sin compromiso.</p>
        <div className="flex justify-center gap-4 mb-5 flex-wrap">
          {["✓ Sin costo","✓ Sin compromiso","✓ Mejor precio"].map((t)=>(<span key={t} className="text-xs font-semibold text-[#64748b]">{t}</span>))}
        </div>
        <a href={waLink("Hola, quiero cotizar un viaje (vi su página)")} target="_blank" rel="noopener" onClick={cerrar} className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#d30000] to-[#e52020] text-white px-8 py-4.5 rounded-full text-base font-extrabold shadow-[0_6px_28px_rgba(232,64,37,.45)] hover:-translate-y-0.5 transition">
          <WhatsAppIcon size={18} />Sí, quiero mi cotización GRATIS
        </a>
        <p className="text-[11px] text-[#64748b] mt-3">🔒 No spam. Solo tu cotización personalizada.</p>
      </div>
    </div>
  );
}
