"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useCotizador, useEnlaceWhatsApp } from "@/components/viaja-a-madrid/CotizadorContexto";
import { MAX_RETORNO, MAX_SALIDA, MESES_VIAJE, MIN_SALIDA, PRECIO_ANTICIPADO, PRECIO_OTRAS_FECHAS } from "@/lib/viaja-a-madrid";

const CAMPO =
  "mt-1.5 block min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-3.5 text-base text-[#0a1628] outline-none transition-colors focus:border-[#0a1628] focus:ring-2 focus:ring-[#0a1628]/15";
const ETIQUETA = "block text-sm font-bold text-[#0a1628]";

// Cotizador por fechas: no pide DNI, pasaporte ni teléfono; al presionar abre WhatsApp con el mensaje ya escrito.
export default function CotizadorFechas() {
  const c = useCotizador();
  const href = useEnlaceWhatsApp("Cotizador por fechas");
  const retornoMalo = Boolean(c.salida && c.retorno && c.retorno < c.salida);
  const total = c.adultos * PRECIO_ANTICIPADO;
  // Diferencia con la tarifa «desde» que la web publica para otras fechas (/vuelos/lima-madrid): solo si es a favor.
  const diferencia = c.adultos * (PRECIO_OTRAS_FECHAS - PRECIO_ANTICIPADO);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid gap-5 sm:grid-cols-2" aria-label="Cotiza tu viaje a Madrid por fechas">
      <div className="sm:col-span-2">
        <label htmlFor="mes" className={ETIQUETA}>
          Mes aproximado de salida
        </label>
        <select id="mes" value={c.mes} onChange={(e) => c.poner("mes", e.target.value)} className={CAMPO}>
          <option value="">Elige un mes</option>
          {MESES_VIAJE.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="salida" className={ETIQUETA}>
          Fecha de salida <span className="font-normal text-slate-500">(opcional)</span>
        </label>
        <input id="salida" type="date" min={MIN_SALIDA} max={MAX_SALIDA} value={c.salida} onChange={(e) => c.poner("salida", e.target.value)} className={CAMPO} />
      </div>
      <div>
        <label htmlFor="retorno" className={ETIQUETA}>
          Fecha de retorno <span className="font-normal text-slate-500">(opcional)</span>
        </label>
        <input
          id="retorno"
          type="date"
          min={c.salida || MIN_SALIDA}
          max={MAX_RETORNO}
          value={c.retorno}
          onChange={(e) => c.poner("retorno", e.target.value)}
          aria-invalid={retornoMalo}
          className={CAMPO}
        />
        {retornoMalo && <p className="mt-1.5 text-sm font-semibold text-[#e30613]">El retorno debe ser después de la salida.</p>}
      </div>

      <div>
        <label htmlFor="adultos" className={ETIQUETA}>
          Adultos
        </label>
        <select id="adultos" value={c.adultos} onChange={(e) => c.poner("adultos", Number(e.target.value))} className={CAMPO}>
          {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="menores" className={ETIQUETA}>
          Menores <span className="font-normal text-slate-500">(opcional)</span>
        </label>
        <select id="menores" value={c.menores} onChange={(e) => c.poner("menores", Number(e.target.value))} className={CAMPO}>
          {Array.from({ length: 7 }, (_, i) => i).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-xl bg-amber-50 px-4 py-3.5 ring-1 ring-amber-200 sm:col-span-2" aria-live="polite">
        <p className="text-sm text-slate-600">
          {c.adultos === 1 ? "1 adulto" : `${c.adultos} adultos`}, ida y vuelta, desde
        </p>
        <p className="text-3xl font-extrabold tracking-tight text-[#0a1628]">US$ {total.toLocaleString("en-US")}</p>
        {diferencia > 0 && (
          <p className="mt-1.5 inline-block rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
            US$ {diferencia.toLocaleString("en-US")} menos que la tarifa desde US$ {PRECIO_OTRAS_FECHAS.toLocaleString("en-US")} de otras fechas
          </p>
        )}
        <p className="mt-1 text-xs text-slate-500">
          Referencial según la tarifa «desde». {c.menores > 0 ? "Los menores se cotizan aparte. " : ""}El precio final depende de tus fechas y se confirma antes de comprar.
        </p>
      </div>

      <div className="sm:col-span-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-[60px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#16a34a] px-6 text-base font-extrabold text-white transition-all duration-200 hover:bg-[#15803d] hover:shadow-[0_8px_24px_-8px_rgba(14,143,78,0.8)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7a43]"
        >
          <WhatsAppIcon size={20} />
          Solicitar cotización por WhatsApp
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </a>
        <p className="mt-3 text-center text-sm text-slate-500">No pedimos DNI ni pasaporte para cotizar. Una asesora te responde con las opciones y el precio.</p>
      </div>
    </form>
  );
}
