"use client";
import { useEffect, useState } from "react";

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookiesAccepted")) return;
    const t = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const aceptar = () => {
    setVisible(false);
    localStorage.setItem("cookiesAccepted", "1");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] max-md:bottom-[60px]">
      <div className="max-w-2xl mx-auto px-4 pb-4">
        <div className="bg-[#0a1628] text-white/70 px-5 py-3.5 rounded-xl flex items-center justify-between gap-4 flex-wrap shadow-2xl border border-white/5 text-[12px]">
          <span>
            Usamos cookies para mejorar tu experiencia.{" "}
            <a href="#" className="text-white/90 underline underline-offset-2">Política de privacidad</a>
          </span>
          <button
            onClick={aceptar}
            className="bg-white text-[#0a1628] px-4 py-1.5 rounded-lg font-semibold text-[12px] hover:bg-gray-100 transition shrink-0"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
