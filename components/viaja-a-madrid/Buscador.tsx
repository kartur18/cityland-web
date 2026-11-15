"use client";

import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import { useCotizador } from "@/components/viaja-a-madrid/CotizadorContexto";
import { evento } from "@/lib/analitica-landing";
import { MAX_ADULTOS, MAX_MENORES, MAX_RETORNO, MAX_SALIDA, MESES_VIAJE, MIN_SALIDA, PRECIO_ANTICIPADO } from "@/lib/viaja-a-madrid";

const ETIQUETA = "mb-1.5 block text-xs font-bold text-slate-500";
const PASO =
  "flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#0a1628] text-xl font-bold leading-none transition-colors hover:bg-[#0a1628] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]";

function Contador({ etiqueta, unidad, plural, valor, min, max, onCambio }: { etiqueta: string; unidad: string; plural: string; valor: number; min: number; max: number; onCambio: (n: number) => void }) {
  return (
    <div>
      <span className={ETIQUETA}>{etiqueta}</span>
      <div className="flex items-center gap-3">
        <button type="button" aria-label={`Quitar ${unidad}`} disabled={valor <= min} onClick={() => onCambio(valor - 1)} className={PASO}>
          –
        </button>
        <p className="min-w-[4.5rem] text-center text-base font-extrabold leading-tight" aria-live="polite">
          {valor}
          <span className="block text-xs font-semibold text-slate-500">{valor === 1 ? unidad : plural}</span>
        </p>
        <button type="button" aria-label={`Agregar ${unidad}`} disabled={valor >= max} onClick={() => onCambio(valor + 1)} className={PASO}>
          +
        </button>
      </div>
    </div>
  );
}

// Cotizador: ruta fija, mes, adultos, menores (opcional) y fechas aproximadas (opcional). Lo que eliges arma el mensaje de WhatsApp.
// No calcula totales: la tarifa se muestra como referencial «desde» por persona y el precio final lo confirma el asesor.
export default function Buscador() {
  const { mes, adultos, menores, salida, retorno, poner } = useCotizador();

  function cambiarMes(m: string) {
    poner("mes", m);
    if (m) evento("month_selected", { mes: m, origen: "cotizador" });
  }

  function cambiarPasajeros(tipo: "adultos" | "menores", n: number) {
    poner(tipo, n);
    evento("passengers_changed", { tipo, adultos: tipo === "adultos" ? n : adultos, menores: tipo === "menores" ? n : menores });
  }

  return (
    <div
      id="cotiza"
      className="relative z-10 -mt-10 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_24px_50px_-30px_rgba(10,22,40,0.4)] md:-mt-12 md:p-5"
    >
      <div className="grid gap-4 md:grid-cols-[auto_1.5fr_auto_auto] md:items-end md:gap-7">
        <div>
          <span className={ETIQUETA}>Tu viaje</span>
          <p className="text-lg font-extrabold leading-tight">
            Lima <span className="font-medium text-slate-400">→</span> Madrid
          </p>
          <p className="text-xs font-semibold text-slate-500">Ida y vuelta</p>
        </div>

        <div>
          <span className={ETIQUETA} id="etq-mes">
            ¿Cuándo viajas? (2027)
          </span>
          <div role="radiogroup" aria-labelledby="etq-mes" className="grid grid-cols-3 gap-1.5">
            {MESES_VIAJE.map((m) => {
              const activo = mes === m;
              return (
                <button
                  key={m}
                  type="button"
                  role="radio"
                  aria-checked={activo}
                  onClick={() => cambiarMes(activo ? "" : m)}
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

        <Contador etiqueta="Adultos" unidad="adulto" plural="adultos" valor={adultos} min={1} max={MAX_ADULTOS} onCambio={(n) => cambiarPasajeros("adultos", n)} />
        <Contador etiqueta="Menores (opcional)" unidad="menor" plural="menores" valor={menores} min={0} max={MAX_MENORES} onCambio={(n) => cambiarPasajeros("menores", n)} />
      </div>

      <details className="group mt-3 border-t border-slate-200 pt-3">
        <summary className="inline-flex min-h-[44px] cursor-pointer list-none items-center gap-2 text-sm font-bold text-[#0a1628] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]">
          <span aria-hidden="true" className="text-lg font-light text-[#2563eb] transition-transform duration-200 group-open:rotate-45">
            +
          </span>
          Agregar fechas aproximadas (opcional)
        </summary>
        <div className="mt-2 grid gap-3 sm:grid-cols-2 md:max-w-xl">
          <label className="block">
            <span className={ETIQUETA}>Salida aproximada</span>
            <input
              type="date"
              id="fecha-salida"
              value={salida}
              min={MIN_SALIDA}
              max={MAX_SALIDA}
              onChange={(e) => poner("salida", e.target.value)}
              className="min-h-[44px] w-full rounded-lg border-[1.5px] border-slate-200 px-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]"
            />
          </label>
          <label className="block">
            <span className={ETIQUETA}>Retorno aproximado</span>
            <input
              type="date"
              id="fecha-retorno"
              value={retorno}
              min={salida || MIN_SALIDA}
              max={MAX_RETORNO}
              onChange={(e) => poner("retorno", e.target.value)}
              className="min-h-[44px] w-full rounded-lg border-[1.5px] border-slate-200 px-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]"
            />
          </label>
        </div>
      </details>

      <div className="mt-3 flex flex-col gap-3 border-t border-slate-200 pt-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-snug text-slate-600">
          Tarifa referencial <b className="text-[#0a1628]">desde US$ {PRECIO_ANTICIPADO} por persona</b>.
          <span className="block text-xs text-slate-500">Sujeta a disponibilidad. El precio final se confirma al cotizar.</span>
        </p>
        <BotonCotizar zona="Cotizador" principal className="w-full md:w-auto md:min-w-[300px]" />
      </div>
    </div>
  );
}
