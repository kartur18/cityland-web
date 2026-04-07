"use client";
import { useState, useEffect } from "react";

export default function UrgencyBar() {
  const [visible, setVisible] = useState(true);
  const [time, setTime] = useState({ h: 23, m: 47, s: 11 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-[#7f0000] via-[#c0392b] to-[#7f0000] bg-[length:200%] animate-[slidebg_4s_linear_infinite] text-white text-center relative z-[200]">
      <div className="px-4 py-2 flex items-center justify-center gap-2 flex-wrap text-[12px] sm:text-[13px] font-semibold">
        <span className="text-amber-300 font-extrabold">🔥 OFERTA LIMITADA:</span>
        <span>Paquete migratorio Madrid desde</span>
        <strong className="text-amber-300 text-[14px]">$799</strong>
        <span className="hidden sm:inline">·</span>
        <span className="flex items-center gap-1">
          Expira en:
          <span className="bg-black/30 px-2 py-0.5 rounded font-mono font-bold tracking-wider ml-1">
            {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
          </span>
        </span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-white/60 hover:text-white text-[18px] leading-none cursor-pointer transition-colors p-1"
        aria-label="Cerrar"
      >
        ×
      </button>
    </div>
  );
}
