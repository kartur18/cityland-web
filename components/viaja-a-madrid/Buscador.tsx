"use client";

import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import { useCotizador } from "@/components/viaja-a-madrid/CotizadorContexto";
import { MESES_VIAJE, PRECIO_ANTICIPADO } from "@/lib/viaja-a-madrid";

const MAX_ADULTOS = 9;

// Buscador estilo aerolínea: origen y destino fijos, mes de salida, pasajeros y total estimado. Lo que eliges arma el mensaje de WhatsApp.
export default function Buscador() {
  const { mes, adultos, poner } = useCotizador();
  const total = PRECIO_ANTICIPADO * adultos;
  const campo = "border-t border-slate-200 px-1 py-3 md:border-l md:border-t-0 md:py-1 md:pl-5 md:pr-1";
  const etiqueta = "block text-[11px] font-bold uppercase tracking-wider text-slate-500";

  return (
    <div id="cotiza" className="relative z-10 -mt-[120px] scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_40px_80px_-30px_rgba(10,22,40,0.5)] md:p-7">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-slate-200 pb-3">
        <span className="rounded-full bg-[#0a1628] px-3.5 py-1.5 text-sm font-bold text-white">Ida y vuelta</span>
        <span className="text-sm text-slate-500">Lima (LIM) → Madrid (MAD)</span>
      </div>

      <div className="mt-2 grid md:mt-4 md:grid-cols-[1fr_1fr_1.7fr_1.1fr]">
        <div className="px-1 py-3 md:py-1 md:pl-0">
          <span className={etiqueta}>Origen</span>
          <b className="text-lg font-extrabold">
            Lima <small className="ml-1 text-sm font-semibold text-slate-500">LIM</small>
          </b>
        </div>
        <div className={campo}>
          <span className={etiqueta}>Destino</span>
          <b className="text-lg font-extrabold">
            Madrid <small className="ml-1 text-sm font-semibold text-slate-500">MAD</small>
          </b>
        </div>
        <div className={campo}>
          <span className={etiqueta}>Mes de salida (2027)</span>
          <div role="radiogroup" aria-label="Mes de salida" className="mt-1 flex gap-1.5">
            {MESES_VIAJE.map((m) => {
              const activo = mes === m;
              return (
                <button
                  key={m}
                  type="button"
                  role="radio"
                  aria-checked={activo}
                  onClick={() => poner("mes", activo ? "" : m)}
                  className={`min-h-[44px] flex-1 rounded-lg border-[1.5px] text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628] ${
                    activo ? "border-[#e30613] bg-[#e30613] text-white" : "border-slate-200 bg-white text-[#0a1628] hover:border-[#0a1628]"
                  }`}
                >
                  {m.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>
        <div className={campo}>
          <span className={etiqueta}>Pasajeros</span>
          <div className="mt-0.5 flex items-center justify-between gap-3">
            <b className="text-lg font-extrabold">{adultos === 1 ? "1 adulto" : `${adultos} adultos`}</b>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Un adulto menos"
                disabled={adultos <= 1}
                onClick={() => poner("adultos", Math.max(1, adultos - 1))}
                className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#0a1628] text-xl font-bold transition-colors hover:bg-[#0a1628] hover:text-white disabled:opacity-30"
              >
                –
              </button>
              <button
                type="button"
                aria-label="Un adulto más"
                disabled={adultos >= MAX_ADULTOS}
                onClick={() => poner("adultos", Math.min(MAX_ADULTOS, adultos + 1))}
                className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#0a1628] text-xl font-bold transition-colors hover:bg-[#0a1628] hover:text-white disabled:opacity-30"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 border-t border-slate-200 pt-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-500">
          Total estimado
          <b className="block text-3xl font-extrabold tracking-tight text-[#0a1628]">US$ {total.toLocaleString("en-US")}</b>
        </p>
        <BotonCotizar zona="Buscador" adaptable className="w-full md:w-auto md:min-w-[300px]" />
      </div>
      <p className="mt-3 text-xs text-slate-500">Tarifa «desde» por persona, ida y vuelta, sujeta a disponibilidad. Cotizar es gratis y no pedimos DNI ni pasaporte.</p>
    </div>
  );
}
