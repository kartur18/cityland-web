"use client";
import { useEffect, useState } from "react";

export default function CookieBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { if (localStorage.getItem("cookiesAccepted")) return; const t = setTimeout(()=>setVisible(true),2000); return ()=>clearTimeout(t); }, []);
  const aceptar = () => { setVisible(false); localStorage.setItem("cookiesAccepted","1"); };
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] bg-[#0D1F3C] text-white/85 px-6 py-4 flex items-center justify-between gap-4 flex-wrap shadow-[0_-4px_20px_rgba(0,0,0,.2)] text-[13px]">
      <span>Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra <a href="#" className="text-amber-300 underline">política de privacidad</a>.</span>
      <button onClick={aceptar} className="bg-[#059669] text-white border-none px-6 py-2.5 rounded-full font-bold text-[13px] cursor-pointer hover:bg-[#10B981] transition shrink-0">Aceptar</button>
    </div>
  );
}
