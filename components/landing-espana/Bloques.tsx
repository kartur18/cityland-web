import type { LandingEspana, TemaEspana } from "@/lib/landings-espana-tipos";

// Bloques de contenido de las landings de España. Cada grupo (provincia, perfil, guía) tiene su color y su forma.

const TEMAS: Record<TemaEspana, { caja: string; numero: string; borde: string }> = {
  provincia: { caja: "bg-sky-50/70 border-sky-100", numero: "bg-sky-600", borde: "border-sky-200" },
  perfil: { caja: "bg-emerald-50/60 border-emerald-100", numero: "bg-emerald-600", borde: "border-emerald-200" },
  guia: { caja: "bg-violet-50/60 border-violet-100", numero: "bg-violet-600", borde: "border-violet-200" },
  soloPerfil: { caja: "bg-teal-50/70 border-teal-100", numero: "bg-teal-600", borde: "border-teal-200" },
  soloMes: { caja: "bg-indigo-50/60 border-indigo-100", numero: "bg-indigo-600", borde: "border-indigo-200" },
  soloOrigen: { caja: "bg-cyan-50/70 border-cyan-100", numero: "bg-cyan-600", borde: "border-cyan-200" },
  soloDestino: { caja: "bg-orange-50/70 border-orange-100", numero: "bg-orange-500", borde: "border-orange-200" },
  soloAerolinea: { caja: "bg-blue-50/60 border-blue-100", numero: "bg-blue-700", borde: "border-blue-200" },
  soloGuia: { caja: "bg-lime-50/70 border-lime-100", numero: "bg-lime-600", borde: "border-lime-200" },
  dudaBolsa: { caja: "bg-emerald-50/70 border-emerald-100", numero: "bg-emerald-600", borde: "border-emerald-200" },
  dudaCosto: { caja: "bg-yellow-50/70 border-yellow-100", numero: "bg-yellow-500", borde: "border-yellow-200" },
  dudaCarta: { caja: "bg-pink-50/60 border-pink-100", numero: "bg-pink-600", borde: "border-pink-200" },
  dudaRequisito: { caja: "bg-slate-50 border-slate-200", numero: "bg-slate-700", borde: "border-slate-300" },
  traer: { caja: "bg-fuchsia-50/60 border-fuchsia-100", numero: "bg-fuchsia-600", borde: "border-fuchsia-200" },
  fiesta: { caja: "bg-red-50/60 border-red-100", numero: "bg-red-600", borde: "border-red-200" },
  equipaje: { caja: "bg-sky-50/70 border-sky-100", numero: "bg-sky-700", borde: "border-sky-200" },
  tramite: { caja: "bg-stone-50 border-stone-200", numero: "bg-stone-700", borde: "border-stone-300" },
  peru: { caja: "bg-rose-50/60 border-rose-100", numero: "bg-rose-600", borde: "border-rose-200" },
  rutaBarcelona: { caja: "bg-purple-50/60 border-purple-100", numero: "bg-purple-600", borde: "border-purple-200" },
  rutaPeru: { caja: "bg-green-50/60 border-green-100", numero: "bg-green-600", borde: "border-green-200" },
  practico: { caja: "bg-neutral-50 border-neutral-200", numero: "bg-cyan-700", borde: "border-neutral-300" },
  visado: { caja: "bg-teal-50/50 border-teal-100", numero: "bg-teal-700", borde: "border-teal-300" },
  ciudad: { caja: "bg-amber-50/70 border-amber-100", numero: "bg-amber-500", borde: "border-amber-200" },
};

export const temaDe = (l: LandingEspana) => TEMAS[l.tema ?? "perfil"];

const H2 = "text-2xl sm:text-3xl font-extrabold text-[#0a1628]";

export function Puntos({ l }: { l: LandingEspana }) {
  const t = temaDe(l);
  // La guía cuenta pasos en orden: va como línea de tiempo. El resto, en tarjetas.
  if (l.tema === "guia" || l.tema === "soloGuia" || l.tema === "dudaCarta") {
    return (
      <section className="space-y-5" aria-labelledby="puntos">
        <h2 id="puntos" className={H2}>
          {l.puntosTitulo}
        </h2>
        <ol className={`space-y-6 border-l-2 ${t.borde} pl-6`}>
          {l.puntos.map((p) => (
            <li key={p.t} className="relative">
              <span className={`absolute -left-[33px] top-1 h-4 w-4 rounded-full ${t.numero} ring-4 ring-white`} aria-hidden="true" />
              <strong className="block text-lg text-[#0a1628]">{p.t}</strong>
              <p className="mt-1 text-base leading-relaxed text-slate-600">{p.d}</p>
            </li>
          ))}
        </ol>
      </section>
    );
  }
  return (
    <section className="space-y-5" aria-labelledby="puntos">
      <h2 id="puntos" className={H2}>
        {l.puntosTitulo}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {l.puntos.map((p) => (
          <li key={p.t} className={`rounded-2xl border bg-white p-6 ${l.tema === "provincia" || l.tema?.startsWith("solo") || l.tema?.startsWith("duda") || ["traer", "fiesta", "equipaje", "tramite", "peru", "rutaBarcelona", "rutaPeru", "practico", "visado"].includes(l.tema ?? "") ? "border-l-4 " + t.borde : "border-slate-200"}`}>
            <strong className="block text-lg text-[#0a1628]">{p.t}</strong>
            <p className="mt-2 text-base leading-relaxed text-slate-600">{p.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// En provincias la tabla es el itinerario: se dibuja como tramos de una ruta.
function Tramos({ l }: { l: LandingEspana }) {
  const tabla = l.tabla;
  if (!tabla) return null;
  return (
    <section className="space-y-4" aria-labelledby="tabla">
      <h2 id="tabla" className={H2}>
        {tabla.titulo}
      </h2>
      <ol className="grid gap-3 sm:grid-cols-3">
        {tabla.filas.map((f, i) => (
          <li key={f[0]} className="rounded-2xl border border-slate-200 bg-white p-5">
            <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${temaDe(l).numero} text-sm font-extrabold text-white`}>{i + 1}</span>
            <strong className="mt-3 block text-lg text-[#0a1628]">{f[0]}</strong>
            <p className="text-base font-bold text-slate-700">{f[1]}</p>
            <p className="text-sm text-slate-500">{f[2]}</p>
          </li>
        ))}
      </ol>
      {tabla.nota && <p className="text-sm text-slate-500">{tabla.nota}</p>}
    </section>
  );
}

export function Tabla({ l }: { l: LandingEspana }) {
  const tabla = l.tabla;
  if (!tabla) return null;
  if (l.tema === "provincia" || l.tema === "soloOrigen" || l.tema === "ciudad" || l.tema === "rutaBarcelona" || l.tema === "rutaPeru") return <Tramos l={l} />;
  return (
    <section className="space-y-4" aria-labelledby="tabla">
      <h2 id="tabla" className={H2}>
        {tabla.titulo}
      </h2>
      <ul className="space-y-3 sm:hidden">
        {tabla.filas.map((f) => (
          <li key={f[0]} className="rounded-2xl border border-slate-200 p-4">
            <strong className="block text-base text-[#0a1628]">{f[0]}</strong>
            {f.slice(1).map((celda, i) => (
              <p key={i} className="mt-1 text-[15px] text-slate-700">
                <span className="text-slate-500">{tabla.columnas[i + 1]}:</span> {celda}
              </p>
            ))}
          </li>
        ))}
      </ul>
      <div className="hidden overflow-x-auto rounded-2xl border border-slate-200 sm:block">
        <table className="w-full text-left text-base">
          <thead className="bg-slate-50 text-sm text-slate-600">
            <tr>
              {tabla.columnas.map((c) => (
                <th key={c} scope="col" className="px-4 py-3 font-bold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {tabla.filas.map((f) => (
              <tr key={f[0]}>
                {f.map((celda, i) => (
                  <td key={i} className={`px-4 py-3 ${i === 0 ? "font-bold text-[#0a1628]" : "text-slate-700"}`}>
                    {celda}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {tabla.nota && <p className="text-sm text-slate-500">{tabla.nota}</p>}
    </section>
  );
}

export function Lista({ l }: { l: LandingEspana }) {
  return (
    <section className={`rounded-3xl border p-6 sm:p-8 space-y-4 ${temaDe(l).caja}`} aria-labelledby="lista">
      <h2 id="lista" className="text-2xl font-extrabold text-[#0a1628]">
        {l.listaTitulo}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {l.lista.map((x) => (
          <li key={x} className="flex items-start gap-2.5 text-base text-slate-700">
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className="mt-1 shrink-0 text-emerald-600">
              <path fill="currentColor" d="M8.1 14.6 3.5 10l1.4-1.4 3.2 3.2 7-7L16.5 6z" />
            </svg>
            {x}
          </li>
        ))}
      </ul>
    </section>
  );
}
