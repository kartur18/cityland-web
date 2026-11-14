"use client";

import { useCotizador } from "@/components/viaja-a-madrid/CotizadorContexto";
import { MESES_VIAJE } from "@/lib/viaja-a-madrid";

// Control segmentado: tres meses en una pastilla gris; el elegido se llena de azul marino. Elegirlo es el primer compromiso.
export default function SelectorMes() {
  const { mes, poner } = useCotizador();
  return (
    <div role="radiogroup" aria-label="¿Cuándo quieres viajar?" className="grid grid-cols-3 gap-1.5 rounded-2xl bg-slate-100 p-1.5">
      {MESES_VIAJE.map((m) => {
        const [nombre, anio] = m.split(" ");
        const activo = mes === m;
        return (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={activo}
            onClick={() => poner("mes", activo ? "" : m)}
            className={`flex min-h-[60px] flex-col items-center justify-center rounded-xl px-2 py-2 transition-all duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628] ${
              activo ? "bg-[#0a1628] text-white shadow-lg" : "text-[#0a1628] hover:bg-white"
            }`}
          >
            <span className="text-lg font-extrabold leading-none">{nombre}</span>
            <span className={`mt-1 text-xs font-semibold ${activo ? "text-white/70" : "text-slate-500"}`}>{anio}</span>
          </button>
        );
      })}
    </div>
  );
}
