"use client";
import { useEffect, useRef } from "react";

function AnimNum({ texto, suffix = "" }: { texto: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || el.dataset.done) return;
      el.dataset.done = "1";
      const num = parseInt(texto.replace(/[^0-9]/g, ""));
      if (isNaN(num)) { el.textContent = texto; return; }
      const extra = texto.replace(/[0-9,]/g, "");
      const step = Math.max(1, Math.ceil(num / 50));
      let cur = 0;
      const tick = () => {
        cur = Math.min(cur + step, num);
        el.textContent = cur.toLocaleString() + extra;
        if (cur < num) requestAnimationFrame(tick);
      };
      tick();
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [texto]);
  return (
    <span
      ref={ref}
      className="font-[family-name:var(--font-bebas)] text-[38px] text-[#0c3265] tracking-wide leading-none"
    >
      {texto}
    </span>
  );
}

const STATS = [
  { texto: "+5,000", label: "Viajes realizados", sub: "desde 2015" },
  { texto: "+70", label: "Destinos", sub: "a todo el mundo" },
  { texto: "+10", label: "Años de experiencia", sub: "en el mercado" },
  { rating: true, label: "Rating en Google", sub: "+500 reseñas verificadas" },
];

export default function ProofBar() {
  return (
    <div className="bg-gradient-to-r from-[#f8fafc] via-white to-[#f8fafc] py-8 border-y border-black/6">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-center gap-0 flex-wrap">
        {STATS.map((s, i) => (
          <div key={i} className="flex items-center">
            <div className="px-8 md:px-12 text-center">
              {s.rating ? (
                <div className="text-center">
                  <div className="text-amber-400 text-[20px] tracking-wider leading-none">★★★★★</div>
                  <div className="font-[family-name:var(--font-bebas)] text-[38px] text-[#0c3265] tracking-wide leading-tight">4.9/5</div>
                  <div className="font-extrabold text-[#0c3265] text-xs mt-0.5">{s.label}</div>
                  <div className="text-xs text-[#64748b]">{s.sub}</div>
                </div>
              ) : (
                <div className="text-center">
                  <AnimNum texto={s.texto!} />
                  <div className="font-extrabold text-[#0c3265] text-xs mt-0.5">{s.label}</div>
                  <div className="text-xs text-[#64748b]">{s.sub}</div>
                </div>
              )}
            </div>
            {i < STATS.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-gray-200 to-transparent shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
