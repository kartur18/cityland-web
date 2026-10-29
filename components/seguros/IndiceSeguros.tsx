import Link from "next/link";
import { LANDINGS_SEGUROS, NOMBRE_GRUPO_SEGURO, SEGURO_DE_GUIA, buscarLandingSeguro, rutaLandingSeguro } from "@/lib/seguros/landings";
import type { Exigencia, GrupoSeguro } from "@/lib/seguros/tipos";

// Índice de /seguros: todas las páginas de seguro por destino, por perfil y dudas.

const MARCA: Record<Exigencia, string> = {
  obligatorio: "Obligatorio",
  declarar: "Se declara",
  recomendado: "Recomendado",
  "no-obligatorio": "No obligatorio",
};
const COLOR: Record<Exigencia, string> = {
  obligatorio: "bg-rose-100 text-rose-800",
  declarar: "bg-violet-100 text-violet-800",
  recomendado: "bg-amber-100 text-amber-800",
  "no-obligatorio": "bg-sky-100 text-sky-800",
};

const GRUPOS: GrupoSeguro[] = ["destino", "perfil", "duda"];

export default function IndiceSeguros() {
  return (
    <section className="bg-[#fbf7f1] py-14 sm:py-20" aria-labelledby="indice-seguros">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="space-y-2 max-w-3xl">
          <h2 id="indice-seguros" className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0f2e2c]">
            Tu seguro según a dónde vas y quién viaja
          </h2>
          <p className="text-base text-slate-600">
            Qué pide cada país, qué debe cubrir tu póliza y cómo cotizarla. Revisado con fuentes oficiales.
          </p>
        </div>
        {GRUPOS.map((g) => (
          <div key={g} className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#c2410c]">{NOMBRE_GRUPO_SEGURO[g]}</h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {LANDINGS_SEGUROS.filter((l) => l.grupo === g).map((l) => (
                <li key={l.slug}>
                  <Link
                    href={rutaLandingSeguro(l)}
                    className="flex h-full min-h-[64px] items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:border-[#0f2e2c] hover:shadow-md transition"
                  >
                    <span className="font-bold text-[#0f2e2c]">{l.migas}</span>
                    {g === "destino" && l.veredicto ? (
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-extrabold ${COLOR[l.veredicto.estado]}`}>{MARCA[l.veredicto.estado]}</span>
                    ) : (
                      <span className="text-[#ff6a3d] font-black" aria-hidden="true">
                        →
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// Aviso para las guías de requisitos (/viajes/<slug>): lleva a su página de seguro.
export function EnlaceSeguroGuia({ slugGuia, pais }: { slugGuia: string; pais: string }) {
  const l = buscarLandingSeguro(SEGURO_DE_GUIA[slugGuia] ?? "");
  if (!l) return null;
  return (
    <Link
      href={rutaLandingSeguro(l)}
      className="flex min-h-[64px] items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-[#0f2e2c]/25 bg-[#fbf7f1] px-5 py-4 hover:border-[#0f2e2c]"
    >
      <span>
        <span className="block text-xs font-bold uppercase tracking-wide text-[#c2410c]">Seguro de viaje</span>
        <span className="block font-extrabold text-[#0f2e2c]">
          {l.grupo === "duda"
            ? "¿Dónde es obligatorio el seguro de viaje? La lista país por país"
            : l.veredicto?.estado === "obligatorio"
              ? `Para ${pais} es obligatorio: mira qué debe cubrir`
              : `Seguro de viaje para ${pais}: qué cubrir y cuánto cuesta`}
        </span>
      </span>
      <span className="text-xl text-[#ff6a3d] font-black" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
