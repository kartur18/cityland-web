"use client";

import { useCotizador } from "@/components/viaja-a-madrid/CotizadorContexto";
import { MESES_VIAJE } from "@/lib/viaja-a-madrid";

// Cada mes con su color (primavera en Madrid): verde, coral y sol. Elegirlo es el primer compromiso de la cotización.
const COLORES: Record<string, { punto: string; activo: string }> = {
  Abril: { punto: "bg-emerald-500", activo: "border-emerald-500 bg-emerald-500 text-white shadow-[0_8px_24px_-10px_rgba(16,185,129,0.9)]" },
  Mayo: { punto: "bg-rose-500", activo: "border-rose-500 bg-rose-500 text-white shadow-[0_8px_24px_-10px_rgba(244,63,94,0.9)]" },
  Junio: { punto: "bg-amber-400", activo: "border-amber-400 bg-amber-400 text-[#3d2c00] shadow-[0_8px_24px_-10px_rgba(251,191,36,0.9)]" },
};

export default function SelectorMes() {
  const { mes, poner } = useCotizador();
  return (
    <div role="radiogroup" aria-label="¿Cuándo quieres viajar?" className="grid grid-cols-3 gap-2.5 sm:max-w-md">
      {MESES_VIAJE.map((m) => {
        const [nombre, anio] = m.split(" ");
        const activo = mes === m;
        const color = COLORES[nombre];
        return (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={activo}
            onClick={() => poner("mes", activo ? "" : m)}
            className={`relative flex min-h-[68px] flex-col items-center justify-center rounded-xl border-2 px-2 py-2 transition-all duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628] ${
              activo ? color.activo : "border-slate-200 bg-white text-[#0a1628] shadow-sm hover:border-slate-400"
            }`}
          >
            <span aria-hidden="true" className={`absolute right-2 top-2 h-2.5 w-2.5 rounded-full ${activo ? "bg-white/80" : color.punto}`} />
            <span className="text-lg font-extrabold leading-none">{nombre}</span>
            <span className={`mt-1 text-xs font-semibold ${activo ? "opacity-80" : "text-slate-500"}`}>{anio}</span>
          </button>
        );
      })}
    </div>
  );
}
