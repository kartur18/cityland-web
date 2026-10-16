"use client";
import { useEffect, useRef } from "react";
import PlaneIcon from "@/components/icons/PlaneIcon";

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
    <span ref={ref} className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none">
      {texto}
    </span>
  );
}

const STATS = [
  {
    texto: "+10 Años",
    titulo: "Trayectoria Formal",
    sub: "Asesorando viajeros peruanos",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-600 fill-none stroke-current stroke-2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    texto: "+5,000",
    titulo: "Pasajeros Felices",
    sub: "Al Caribe, Europa y Sudamérica",
    icon: <PlaneIcon className="w-5 h-5 fill-none stroke-red-600 stroke-2" />,
  },
  {
    rating: true,
    titulo: "Calificación Google",
    sub: "4.9 / 5 estrellas (+500 reseñas)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-500 fill-current">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    texto: "100% Formal",
    titulo: "RUC 20614914239",
    sub: "Oficina física en Los Olivos",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-600 fill-none stroke-current stroke-2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function ProofBar() {
  return (
    <div className="bg-white py-8 sm:py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {STATS.map((s, i) => (
            <div key={i} className={`flex items-center gap-3.5 ${i > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
              <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0">
                {s.icon}
              </div>
              <div className="min-w-0">
                {s.rating ? (
                  <div className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none">
                    4.9 / 5.0
                  </div>
                ) : (
                  <AnimNum texto={s.texto!} />
                )}
                <strong className="block text-xs font-bold text-slate-800 leading-tight mt-0.5 truncate">
                  {s.titulo}
                </strong>
                <span className="block text-[11px] text-slate-500 leading-tight truncate">
                  {s.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
