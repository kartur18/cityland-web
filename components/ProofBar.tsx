"use client";
import { useEffect, useRef } from "react";
import PlaneIcon from "@/components/icons/PlaneIcon";

function AnimNum({ texto }: { texto: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || el.dataset.done) return;
        el.dataset.done = "1";
        const num = parseInt(texto.replace(/[^0-9]/g, ""));
        if (isNaN(num)) {
          el.textContent = texto;
          return;
        }
        const extra = texto.replace(/[0-9,]/g, "");
        const step = Math.max(1, Math.ceil(num / 50));
        let cur = 0;
        const tick = () => {
          cur = Math.min(cur + step, num);
          el.textContent = cur.toLocaleString() + extra;
          if (cur < num) requestAnimationFrame(tick);
        };
        tick();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [texto]);

  return (
    <span
      ref={ref}
      className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none"
    >
      {texto}
    </span>
  );
}

const STATS = [
  {
    texto: "10+ AÑOS",
    titulo: "Trayectoria Formal",
    sub: "Asesorando viajeros peruanos",
    accent: "bg-red-50 border-red-200/80 text-red-600",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    texto: "5000+",
    titulo: "Pasajeros Felices",
    sub: "Al Caribe, Europa y Sudamérica",
    accent: "bg-blue-50 border-blue-200/80 text-blue-600",
    icon: <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2" />,
  },
  {
    rating: true,
    titulo: "Calificación Google",
    sub: "4.9 / 5 estrellas (+500 reseñas)",
    accent: "bg-amber-50 border-amber-200/80 text-amber-500",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    texto: "100% FORMAL",
    titulo: "RUC 20614914239",
    sub: "Oficina física en Los Olivos, Lima",
    accent: "bg-emerald-50 border-emerald-200/80 text-emerald-600",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function ProofBar() {
  return (
    <section aria-label="Indicadores de trayectoria y respaldo legal" className="bg-white py-7 sm:py-9 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-2xs hover:bg-white hover:border-slate-300 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-2xs ${s.accent}`}
              >
                {s.icon}
              </div>
              <div className="min-w-0">
                {s.rating ? (
                  <div className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none flex items-center gap-1.5">
                    <span>4.9 / 5.0</span>
                  </div>
                ) : (
                  <AnimNum texto={s.texto!} />
                )}
                <strong className="block text-xs font-extrabold text-slate-900 leading-tight mt-0.5 truncate">
                  {s.titulo}
                </strong>
                <span className="block text-[11px] font-medium text-slate-500 leading-tight truncate">
                  {s.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cinta de Aerolíneas y Medios de Pago Oficiales */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-extrabold text-[#0a1628] uppercase tracking-wider text-[11px]">
              Aerolíneas que emitimos:
            </span>
            {["Iberia", "Air Europa", "LATAM Airlines", "Copa Airlines", "Avianca", "Sky Airline"].map((air) => (
              <span
                key={air}
                className="bg-slate-100 text-slate-700 font-bold text-[11px] px-2.5 py-0.5 rounded-md border border-slate-200/80"
              >
                {air}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-extrabold text-[#0a1628] uppercase tracking-wider text-[11px] mr-1">
              Pagos seguros:
            </span>
            {["BCP", "BBVA", "Interbank", "Yape / Plin", "Tarjetas Visa / MC"].map((pay) => (
              <span
                key={pay}
                className="bg-emerald-50/80 text-emerald-800 font-bold text-[11px] px-2 py-0.5 rounded-md border border-emerald-200/80"
              >
                {pay}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
