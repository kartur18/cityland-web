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
    <span ref={ref} className="font-[family-name:var(--font-bebas)] text-[36px] md:text-[42px] text-[#0a1628] tracking-wide leading-none">
      {texto}
    </span>
  );
}

const STATS = [
  { texto: "+5,000", label: "Viajes realizados", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#dc2626] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg> },
  { texto: "+70", label: "Destinos internacionales", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#dc2626] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { texto: "+10", label: "Años de experiencia", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#dc2626] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
  { rating: true, label: "Rating en Google", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#dc2626] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg> },
];

export default function ProofBar() {
  return (
    <div className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <div key={i} className="text-center">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-3">
              {s.icon}
            </div>
            {s.rating ? (
              <>
                <div className="text-amber-400 text-[14px] tracking-wide leading-none mb-1">★★★★★</div>
                <div className="font-[family-name:var(--font-bebas)] text-[36px] md:text-[42px] text-[#0a1628] tracking-wide leading-none">4.9/5</div>
              </>
            ) : (
              <AnimNum texto={s.texto!} />
            )}
            <div className="text-[12px] font-semibold text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
