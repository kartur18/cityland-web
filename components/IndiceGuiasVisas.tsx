import Link from "next/link";
import { NOMBRE_TIPO_VISA, guiasVisaPorPais, rutaGuiaVisa } from "@/lib/guias-visas-pais";

// Índice de /visas: una guía por país y tipo de visa (turismo, estudios, trabajo) para peruanos.
export default function IndiceGuiasVisas() {
  const paises = guiasVisaPorPais();
  if (!paises.length) return null;
  return (
    <section className="bg-[#fbf7f1] py-14 sm:py-20" aria-labelledby="indice-guias-visas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2 max-w-3xl">
          <h2 id="indice-guias-visas" className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0f2e2c]">
            Visas por país: turismo, estudios y trabajo
          </h2>
          <p className="text-base text-slate-600">Qué piden para peruanos, cómo se tramita y cuánto demora. Revisado con fuentes oficiales.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paises.map(({ pais, guias }) => (
            <div key={pais} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-extrabold text-[#0f2e2c] mb-3">{pais}</h3>
              <ul className="space-y-1">
                {guias.map((g) => (
                  <li key={g.slug}>
                    <Link href={rutaGuiaVisa(g)} className="flex min-h-[44px] items-center justify-between gap-3 rounded-lg px-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0f2e2c]">
                      <span>Visa de {NOMBRE_TIPO_VISA[g.tipo].toLowerCase()}</span>
                      <span aria-hidden="true" className="text-[#ff6a3d] font-black">→</span>
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
