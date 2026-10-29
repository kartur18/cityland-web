import Link from "next/link";
import { formatoUSD } from "@/lib/formato-precio";
import { BotonMes } from "@/components/landing-italia/Ctas";
import type { LandingItalia, PaqueteEnlace, PrecioMes, Seccion, Tramo } from "@/lib/italia/tipos";

// Bloques del cuerpo de las landings de Italia: tramos del viaje, precio por mes, secciones de texto,
// paquetes del mayorista y fuentes oficiales.

const H2 = "text-2xl sm:text-3xl font-extrabold text-[#0a1628]";

export function Tramos({ tramos }: { tramos: Tramo[] }) {
  return (
    <section className="space-y-5" aria-labelledby="tramos">
      <h2 id="tramos" className={H2}>
        Así es el viaje, tramo por tramo
      </h2>
      <ol className="relative space-y-4 border-l-2 border-dashed border-sky-300 pl-6 sm:pl-8">
        {tramos.map((t, i) => (
          <li key={t.ruta} className="relative rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <span className="absolute -left-[37px] sm:-left-[45px] top-4 flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-xs font-extrabold text-white">
              {i + 1}
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-lg font-extrabold text-[#0a1628]">{t.ruta}</p>
              <p className="rounded-full bg-sky-50 px-3 py-0.5 text-sm font-bold text-sky-800">{t.duracion}</p>
            </div>
            <p className="mt-1 text-base text-slate-600">{t.detalle}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// Barras horizontales: el mes más barato se marca en verde.
export function PreciosPorMes({ meses, titulo, ruta, mensaje }: { meses: PrecioMes[]; titulo: string; ruta: string; mensaje: string }) {
  const max = Math.max(...meses.map((m) => m.precio));
  const min = Math.min(...meses.map((m) => m.precio));
  return (
    <section className="space-y-4" aria-labelledby="meses">
      <h2 id="meses" className={H2}>
        {titulo}
      </h2>
      <p className="text-base text-slate-600">Precio «desde» por persona, en dólares, con impuestos. Cambia según el día y los asientos que queden.</p>
      <ul className="space-y-2">
        {meses.map((m) => (
          <li key={m.mes} className="grid grid-cols-[92px_1fr_auto] items-center gap-3">
            <span className="text-sm font-bold text-[#0a1628]">{m.mes}</span>
            <span className="relative h-9 rounded-lg bg-slate-100">
              <span
                className={`absolute inset-y-0 left-0 rounded-lg ${m.precio === min ? "bg-emerald-200" : "bg-sky-200"}`}
                style={{ width: `${Math.round((m.precio / max) * 100)}%` }}
              />
              <span className="absolute inset-0 flex items-center gap-2 px-3 text-sm font-extrabold text-[#0a1628]">
                desde {formatoUSD(m.precio)}
                {m.nota && <span className="rounded-full bg-white/90 px-2 text-xs font-bold text-slate-600">{m.nota}</span>}
              </span>
            </span>
            <BotonMes ruta={ruta} mensaje={mensaje} mes={m.mes.toLowerCase()} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function BloqueSeccion({ s }: { s: Seccion }) {
  const caja =
    s.estilo === "aviso" ? "rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 space-y-3" : "space-y-4";
  return (
    <section className={caja} aria-labelledby={s.id}>
      <h2 id={s.id} className={s.estilo === "aviso" ? "text-xl font-extrabold text-[#0a1628]" : H2}>
        {s.titulo}
      </h2>
      {s.texto?.map((p) => (
        <p key={p} className="text-base leading-relaxed text-slate-700">
          {p}
        </p>
      ))}
      {s.lista &&
        (s.estilo === "tarjetas" ? (
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {s.lista.map((x) => {
              const [t, ...d] = x.split(": ");
              return (
                <li key={x} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-lg font-extrabold text-[#0a1628]">{d.length ? t : x}</p>
                  {d.length > 0 && <p className="mt-1 text-base text-slate-600">{d.join(": ")}</p>}
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className="space-y-2.5">
            {s.lista.map((x) => (
              <li key={x} className="flex gap-3 text-base text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        ))}
      {s.tabla && (
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[520px] text-left text-sm sm:text-base">
            <thead className="bg-slate-50">
              <tr>
                {s.tabla.cab.map((c) => (
                  <th key={c} scope="col" className="px-4 py-3 font-extrabold text-[#0a1628]">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {s.tabla.filas.map((f) => (
                <tr key={f.join("|")}>
                  {f.map((c, i) => (
                    <td key={`${i}-${c}`} className={`px-4 py-3 ${i === 0 ? "font-bold text-[#0a1628]" : "text-slate-700"}`}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export function Paquetes({ paquetes, titulo }: { paquetes: PaqueteEnlace[]; titulo: string }) {
  return (
    <section className="space-y-4" aria-labelledby="paquetes">
      <h2 id="paquetes" className={H2}>
        {titulo}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {paquetes.map((p) => (
          <li key={p.href}>
            <Link href={p.href} className="flex h-full min-h-[44px] flex-col justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0a1628] hover:shadow-md">
              <span>
                <span className="block text-lg font-extrabold text-[#0a1628]">{p.nombre}</span>
                <span className="mt-1 block text-sm text-slate-600">{p.detalle}</span>
              </span>
              <span className="text-sm font-extrabold text-sky-700">{p.precio ? `Desde ${formatoUSD(p.precio)} · Ver programa →` : "Ver programa →"}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Fuentes({ l }: { l: LandingItalia }) {
  if (!l.fuentes?.length) return null;
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 space-y-2" aria-labelledby="fuentes">
      <h2 id="fuentes" className="text-lg font-extrabold text-[#0a1628]">
        Fuentes oficiales
      </h2>
      <ul className="space-y-1.5 text-sm text-slate-600">
        {l.fuentes.map((f) => (
          <li key={f.url}>
            <a href={f.url} target="_blank" rel="noopener noreferrer" className="font-bold text-sky-800 underline underline-offset-2 break-words">
              {f.texto}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
