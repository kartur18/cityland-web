"use client";
import { useEffect, useState } from "react";

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("cookiesAccepted")) return;
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const aceptar = () => {
    setVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("cookiesAccepted", "1");
    }
  };

  if (!visible) return null;

  return (
    // En celular sube sobre la barra fija de WhatsApp (≈72 px) para no taparla.
    <div className="fixed bottom-[88px] left-3 right-3 z-[9990] animate-in fade-in slide-in-from-bottom-4 duration-300 md:bottom-4 md:left-4 md:right-auto md:max-w-xs">
      <div className="bg-slate-900/95 backdrop-blur-md text-slate-300 p-3.5 rounded-2xl shadow-2xl border border-slate-700/80 text-[11px] flex items-center justify-between gap-3">
        <span>
          Usamos cookies para mejorar tu experiencia en la web.
        </span>
        <button
          onClick={aceptar}
          className="bg-white hover:bg-slate-100 text-slate-900 px-3 py-1.5 rounded-xl font-bold text-[11px] transition shrink-0 cursor-pointer shadow-xs"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
