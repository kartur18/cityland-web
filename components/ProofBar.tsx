"use client";
import { useEffect, useRef } from "react";
function AnimNum({ texto }: { texto: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || el.dataset.done) return;
      el.dataset.done = "1";
      const num = parseInt(texto.replace(/[^0-9]/g, ""));
      const suffix = texto.replace(/[0-9,]/g, "");
      const step = Math.ceil(num / 60);
      let cur = 0;
      const count = () => { cur += step; if (cur >= num) { el.textContent = texto; return; } el.textContent = cur.toLocaleString() + suffix; requestAnimationFrame(count); };
      count();
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [texto]);
  return <span ref={ref} className="font-[family-name:var(--font-bebas)] text-[32px] text-[#0D1F3C] tracking-wide">{texto}</span>;
}
export default function ProofBar() {
  return (
    <div className="bg-white py-6 border-b border-black/6">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-center gap-10 flex-wrap">
        <div className="flex items-center gap-2.5 text-sm font-semibold text-[#4B5680]"><AnimNum texto="+5,000" /><div><div className="font-extrabold text-[#0D1F3C]">Viajes realizados</div><div className="text-xs">desde 2015</div></div></div>
        <div className="w-px h-10 bg-black/10 hidden sm:block" />
        <div className="flex items-center gap-2.5 text-sm font-semibold text-[#4B5680]"><AnimNum texto="+70" /><div><div className="font-extrabold text-[#0D1F3C]">Destinos</div><div className="text-xs">a todo el mundo</div></div></div>
        <div className="w-px h-10 bg-black/10 hidden sm:block" />
        <div className="flex items-center gap-2.5 text-sm font-semibold text-[#4B5680]"><AnimNum texto="12" /><div><div className="font-extrabold text-[#0D1F3C]">Asesores expertos</div><div className="text-xs">atención personalizada</div></div></div>
        <div className="w-px h-10 bg-black/10 hidden sm:block" />
        <div><div className="text-amber-400 text-[15px] tracking-widest">★★★★★</div><div className="font-extrabold text-[#0D1F3C] text-sm">4.9/5 Google</div><div className="text-xs text-[#4B5680]">+500 reseñas verificadas</div></div>
      </div>
    </div>
  );
}
