import Link from "next/link";
import { LANDINGS_ITALIA, NOMBRE_GRUPO, rutaLandingItalia } from "@/lib/italia/landings";
import type { GrupoItalia } from "@/lib/italia/tipos";

// Índice de todas las landings de Italia agrupadas por familia: va en /italia y /paquetes-a-italia.
export default function IndiceItalia({ titulo = "Pasajes y guías para viajar a Italia" }: { titulo?: string }) {
  const grupos = [...new Set(LANDINGS_ITALIA.map((l) => l.grupo))] as GrupoItalia[];
  return (
    <section className="py-14 sm:py-16 bg-white border-t border-slate-200" aria-labelledby="indice-italia">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <h2 id="indice-italia" className="text-2xl sm:text-3xl font-black text-[#0a1628]">
          {titulo}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grupos.map((g) => (
            <div key={g} className="rounded-2xl border border-slate-200 p-5 space-y-3">
              <h3 className="text-lg font-extrabold text-[#0a1628]">{NOMBRE_GRUPO[g]}</h3>
              <ul className="flex flex-wrap gap-2">
                {LANDINGS_ITALIA.filter((l) => l.grupo === g).map((l) => (
                  <li key={l.slug}>
                    <Link href={rutaLandingItalia(l)} className="inline-flex min-h-[44px] items-center rounded-xl bg-slate-100 px-3 text-sm font-bold text-[#0a1628] hover:bg-slate-200">
                      {l.migas}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
