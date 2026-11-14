"use client";

import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import { useCotizador } from "@/components/viaja-a-madrid/CotizadorContexto";
import { MESES_VIAJE, PRECIO_ANTICIPADO } from "@/lib/viaja-a-madrid";

const MAX_ADULTOS = 9;

// Buscador en una sola fila: ruta fija, mes de salida, pasajeros y total con el botón. Lo que eliges arma el mensaje de WhatsApp.
export default function Buscador() {
  const { mes, adultos, poner } = useCotizador();
  const total = PRECIO_ANTICIPADO * adultos;
  const etiqueta = "mb-1.5 block text-xs font-bold text-slate-500";
  const paso =
    "flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#0a1628] text-xl font-bold leading-none transition-colors hover:bg-[#0a1628] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]";

  return (
    <div
      id="cotiza"
      className="relative z-10 -mt-10 scroll-mt-24 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_30px_60px_-30px_rgba(10,22,40,0.45)] md:-mt-12 md:grid-cols-[auto_1.5fr_auto_auto] md:items-end md:gap-7 md:p-5"
    >
      <div>
        <span className={etiqueta}>Tu viaje</span>
        <p className="text-lg font-extrabold leading-tight">
          Lima <span className="font-medium text-slate-400">→</span> Madrid
        </p>
        <p className="text-xs font-semibold text-slate-500">Ida y vuelta</p>
      </div>

      <div>
        <span className={etiqueta}>¿Cuándo viajas? (2027)</span>
        <div role="radiogroup" aria-label="Mes de salida" className="grid grid-cols-3 gap-1.5">
          {MESES_VIAJE.map((m) => {
            const activo = mes === m;
            return (
              <button
                key={m}
                type="button"
                role="radio"
                aria-checked={activo}
                onClick={() => poner("mes", activo ? "" : m)}
                className={`min-h-[44px] rounded-lg border-[1.5px] text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628] ${
                  activo ? "border-[#0a1628] bg-[#0a1628] text-white" : "border-slate-200 bg-white text-[#0a1628] hover:border-[#0a1628]"
                }`}
              >
                {m.split(" ")[0]}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <span className={etiqueta}>¿Cuántos viajan?</span>
        <div className="flex items-center gap-3">
          <button type="button" aria-label="Un adulto menos" disabled={adultos <= 1} onClick={() => poner("adultos", Math.max(1, adultos - 1))} className={paso}>
            –
          </button>
          <p className="min-w-[4.5rem] text-center text-base font-extrabold leading-tight">
            {adultos}
            <span className="block text-xs font-semibold text-slate-500">{adultos === 1 ? "adulto" : "adultos"}</span>
          </p>
          <button type="button" aria-label="Un adulto más" disabled={adultos >= MAX_ADULTOS} onClick={() => poner("adultos", Math.min(MAX_ADULTOS, adultos + 1))} className={paso}>
            +
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 border-t border-slate-200 pt-4 md:border-t-0 md:pt-0">
        <p className="shrink-0 leading-tight">
          <span className="block text-xs font-semibold text-slate-500">Total estimado</span>
          <b className="text-2xl font-extrabold tracking-tight">US$ {total.toLocaleString("en-US")}</b>
        </p>
        <BotonCotizar zona="Buscador" adaptable texto="Cotizar por WhatsApp" className="flex-1 md:flex-none" />
      </div>
    </div>
  );
}
