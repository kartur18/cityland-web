import Image from "next/image";
import { BotonPortada } from "@/components/seguros/Ctas";
import { CONSULTADO } from "@/lib/seguros/comun";
import type { Exigencia, LandingSeguro, Seccion } from "@/lib/seguros/tipos";

// Bloques de las páginas de seguros: portada con la «póliza» del destino, lista de coberturas y secciones.

const ESTADO: Record<Exigencia, { etiqueta: string; clase: string; punto: string }> = {
  obligatorio: { etiqueta: "Obligatorio", clase: "bg-rose-50 text-rose-800 ring-rose-200", punto: "bg-rose-500" },
  declarar: { etiqueta: "Se declara", clase: "bg-violet-50 text-violet-800 ring-violet-200", punto: "bg-violet-500" },
  recomendado: { etiqueta: "Recomendado", clase: "bg-amber-50 text-amber-800 ring-amber-200", punto: "bg-amber-500" },
  "no-obligatorio": { etiqueta: "No obligatorio", clase: "bg-sky-50 text-sky-800 ring-sky-200", punto: "bg-sky-500" },
};

export function Portada({ l, wa }: { l: LandingSeguro; wa: string }) {
  const v = l.veredicto;
  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-5">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#0f2e2c]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0f2e2c]">
          <span className="h-2 w-2 rounded-full bg-[#ff6a3d]" aria-hidden="true" />
          {l.sello}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f2e2c] text-balance">{l.h1}</h1>
        <p className="text-lg leading-relaxed text-slate-600 max-w-2xl">{l.bajada}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <BotonPortada href={wa} texto="Cotizar mi seguro" />
          <a href="#cotizador" className="inline-flex min-h-[44px] items-center text-sm font-bold text-[#0f2e2c] underline decoration-[#ff6a3d] decoration-2 underline-offset-4">
            Armar la cotización con mis datos
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image src={l.foto} alt={l.fotoAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
        </div>
        {/* La «póliza»: tarjeta que resume si el destino lo exige. */}
        <div className="relative -mt-16 mx-3 sm:mx-6 rounded-2xl border border-dashed border-[#0f2e2c]/25 bg-white p-4 sm:p-5 shadow-xl">
          <div className="flex items-center justify-between gap-3 border-b border-dashed border-slate-200 pb-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{l.destino ? `Viajas a ${l.destino}` : "Seguro de viaje"}</p>
            {v && (
              <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-extrabold ring-1 ${ESTADO[v.estado].clase}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${ESTADO[v.estado].punto}`} aria-hidden="true" />
                {ESTADO[v.estado].etiqueta}
              </span>
            )}
          </div>
          {v ? (
            <div className="pt-3 space-y-1.5">
              <p className="text-lg font-extrabold text-[#0f2e2c]">{v.titular}</p>
              <p className="text-sm leading-relaxed text-slate-600">{v.detalle}</p>
            </div>
          ) : (
            <ul className="pt-3 space-y-1.5 text-sm text-slate-700">
              {l.cubrir.slice(0, 3).map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-[#ff6a3d] font-black" aria-hidden="true">
                    ✓
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-3 text-[11px] text-slate-400">Revisado con fuentes oficiales el {CONSULTADO}</p>
        </div>
      </div>
    </section>
  );
}

export function Cubrir({ items }: { items: string[] }) {
  return (
    <section className="space-y-5" aria-labelledby="cubrir">
      <h2 id="cubrir" className="text-2xl sm:text-3xl font-extrabold text-[#0f2e2c]">
        Lo que tiene que cubrir tu seguro
      </h2>
      <ol className="grid gap-3 sm:grid-cols-2">
        {items.map((c, i) => (
          <li key={c} className="flex items-start gap-3 rounded-2xl bg-[#fbf7f1] p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2e2c] text-sm font-extrabold text-white">{i + 1}</span>
            <span className="text-[15px] font-semibold leading-snug text-slate-800 pt-1">{c}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function BloqueSeccion({ s }: { s: Seccion }) {
  const aviso = s.estilo === "aviso";
  return (
    <section className={aviso ? "rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5 sm:p-6 space-y-3" : "space-y-4"} aria-labelledby={s.id}>
      <h2 id={s.id} className={aviso ? "text-xl font-extrabold text-amber-900" : "text-2xl font-extrabold text-[#0f2e2c]"}>
        {s.titulo}
      </h2>
      {s.tabla && (
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[480px] text-left text-[15px]">
            <thead className="bg-[#0f2e2c] text-white">
              <tr>
                {s.tabla.cab.map((c) => (
                  <th key={c} scope="col" className="px-4 py-3 font-bold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {s.tabla.filas.map((f) => (
                <tr key={f[0]} className="even:bg-slate-50">
                  {f.map((c, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "font-bold text-slate-900" : "text-slate-600"}`}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {s.texto?.map((t) => (
        <p key={t} className="text-base leading-relaxed text-slate-600 max-w-3xl">
          {t}
        </p>
      ))}
      {s.lista &&
        (s.estilo === "pasos" ? (
          <ol className="space-y-2.5 max-w-3xl">
            {s.lista.map((x, i) => (
              <li key={x} className="flex items-start gap-3 text-base text-slate-700">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#ff6a3d] text-sm font-extrabold text-white">{i + 1}</span>
                {x}
              </li>
            ))}
          </ol>
        ) : (
          <ul className="space-y-2 max-w-3xl">
            {s.lista.map((x) => (
              <li key={x} className={`flex gap-2.5 text-base ${aviso ? "text-amber-900" : "text-slate-700"}`}>
                <span className={aviso ? "text-amber-500" : "text-[#ff6a3d]"} aria-hidden="true">
                  ●
                </span>
                {x}
              </li>
            ))}
          </ul>
        ))}
    </section>
  );
}
