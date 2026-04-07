"use client";
import { useEffect, useState } from "react";

export default function UrgencyCountdown() {
  const [time, setTime] = useState({ h: 4, m: 47, s: 23 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 5; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="bg-gradient-to-r from-[#0D1F3C] via-[#1A3560] to-[#0D1F3C] py-7">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-4">
          <div className="text-4xl">⏰</div>
          <div><h3 className="text-lg font-extrabold text-white mb-1">Oferta por tiempo limitado</h3><p className="text-sm text-white/70">Los precios suben cuando el temporizador llega a cero</p></div>
        </div>
        <div className="flex gap-2 items-center">
          {[{val:pad(time.h),label:"Horas"},{val:pad(time.m),label:"Min"},{val:pad(time.s),label:"Seg"}].map((item,i)=>(
            <div key={item.label} className="flex items-center gap-2">
              {i>0&&<span className="text-3xl text-amber-400 font-extrabold">:</span>}
              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-center min-w-[64px]">
                <span className="font-[family-name:var(--font-bebas)] text-[32px] text-amber-300 leading-none block">{item.val}</span>
                <span className="text-[10px] text-white/60 uppercase tracking-wider font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
