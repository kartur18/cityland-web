"use client";
import { useState } from "react";
export default function UrgencyBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-gradient-to-r from-[#1a0000] via-[#B22222] to-[#1a0000] bg-[length:300%_100%] animate-[slidebg_5s_linear_infinite] text-white text-center py-2.5 px-4 text-[13px] font-semibold tracking-wide relative z-200 border-b-2 border-red-500/20">
      <strong className="text-amber-300">OFERTA FLASH:</strong> Paquete migratorio Madrid desde{" "}
      <strong className="text-amber-300">$799</strong> — Solo por tiempo limitado
      <button onClick={() => setVisible(false)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-white text-lg cursor-pointer opacity-70 hover:opacity-100" aria-label="Cerrar">×</button>
    </div>
  );
}
