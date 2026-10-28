import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { waEspana } from "@/components/landing-espana/CtasWhatsApp";
import { formatoUSD } from "@/lib/formato-precio";
import { PRECIO_SOLO_IDA_TOPE_CERCANO, mesesSoloIda } from "@/lib/precios-solo-ida";
import type { CalendarioLanding } from "@/lib/landings-espana-tipos";

// Calendario de precios del solo ida por mes de salida: cada mes es un botón que abre WhatsApp con ese mes.
// Los dos primeros (mes en curso y el siguiente) llevan el aviso de que el precio sube mientras más cerca.
export default function CalendarioSoloIda({ ruta, c, destacado }: { ruta: string; c: CalendarioLanding; destacado?: number }) {
  const meses = mesesSoloIda(12);
  const minimo = Math.min(...meses.map((m) => m.desde));
  return (
    <section className="space-y-4" aria-labelledby="calendario">
      <div className="space-y-1">
        <h2 id="calendario" className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
          {c.titulo ?? `Precio del solo ida ${c.origen}–${c.destino}, mes a mes`}
        </h2>
        <p className="text-base text-slate-600">Mientras antes compres, más barato. Toca tu mes y te cotizamos esa fecha.</p>
      </div>
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {meses.map((m) => {
          const precio = m.desde + c.recargo;
          const barato = m.desde === minimo;
          const elegido = destacado === m.mes;
          const etiqueta = `${m.nombre} ${m.anio}`;
          return (
            <li key={m.clave}>
              <a
                href={waEspana(
                  ruta,
                  `¡Hola Cityland Travel! Quiero un pasaje solo ida ${c.origen}–${c.destino} para ${etiqueta}. ¿Qué precio hay?`,
                  `Calendario: ${etiqueta}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-full min-h-[96px] flex-col justify-between rounded-2xl border p-3.5 transition-colors ${
                  elegido
                    ? "border-[#0a1628] bg-[#0a1628] text-white"
                    : m.cercano
                      ? "border-rose-200 bg-rose-50 hover:border-rose-400"
                      : barato
                        ? "border-emerald-300 bg-emerald-50 hover:border-emerald-500"
                        : "border-slate-200 bg-white hover:border-slate-400"
                }`}
              >
                <span className="flex items-start justify-between gap-1">
                  <strong className="text-sm capitalize">{etiqueta}</strong>
                  <WhatsAppIcon size={14} />
                </span>
                <span className="text-xl font-extrabold">{formatoUSD(precio)}</span>
                <span className={`text-xs font-bold ${elegido ? "text-slate-200" : m.cercano ? "text-rose-700" : barato ? "text-emerald-700" : "text-slate-500"}`}>
                  {m.cercano ? `Sube mientras más cerca · hasta ${formatoUSD(PRECIO_SOLO_IDA_TOPE_CERCANO + c.recargo)}` : barato ? "Mejor precio" : "Desde, por persona"}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="text-sm text-slate-500">
        Precios «desde» por persona, solo ida, con impuestos. Cambian según los asientos que quedan; te damos el de tu fecha exacta.
      </p>
    </section>
  );
}
