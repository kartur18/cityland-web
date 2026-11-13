"use client";

import { useCotizador } from "@/components/viaja-a-madrid/CotizadorContexto";
import { MESES_VIAJE } from "@/lib/viaja-a-madrid";

// Primer paso de la cotización, ya en el hero: elegir el mes es un compromiso mínimo y el botón de WhatsApp lo recuerda.
export default function SelectorMes() {
  const { mes, poner } = useCotizador();
  return (
    <div role="radiogroup" aria-label="¿Cuándo quieres viajar?" className="grid grid-cols-3 gap-2.5 sm:max-w-md">
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
            className={`flex min-h-[64px] flex-col items-center justify-center rounded-xl border px-2 py-2 transition-all duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              activo ? "border-white bg-white text-[#0a1628]" : "border-white/25 text-white hover:border-white/60 hover:bg-white/5"
            }`}
          >
            <span className="text-lg font-extrabold leading-none">{nombre}</span>
            <span className={`mt-1 text-xs font-semibold ${activo ? "text-[#e30613]" : "text-white/60"}`}>{anio}</span>
          </button>
        );
      })}
    </div>
  );
}
