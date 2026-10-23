import Link from "next/link";
import type { EnlaceContextual, FaqUnica } from "@/lib/contenido-unico";

export interface GuiaRapida {
  titulo: string;
  intro: string[];
  pasos: { titulo: string; detalle: string }[];
  faqs: FaqUnica[];
  tituloEnlaces: string;
  enlaces: EnlaceContextual[];
}

// Bloque corto de contenido propio por landing: resumen, pasos, preguntas y enlaces a paginas hermanas.
export default function GuiaRapidaLanding({ guia }: { guia: GuiaRapida }) {
  return (
    <section className="py-10 sm:py-12 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-lg sm:text-xl font-extrabold text-[#0a1628] tracking-tight mb-3">
          {guia.titulo}
        </h2>
        <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
          {guia.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {guia.pasos.length > 0 && (
          <ol className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {guia.pasos.map((paso, i) => (
              <li
                key={paso.titulo}
                className="rounded-2xl border border-slate-200/90 bg-slate-50 px-4 py-3"
              >
                <span className="text-xs font-extrabold text-red-600">Paso {i + 1}</span>
                <h3 className="text-sm font-extrabold text-[#0a1628] mt-0.5">{paso.titulo}</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">{paso.detalle}</p>
              </li>
            ))}
          </ol>
        )}

        {guia.faqs.length > 0 && (
          <div className="mt-6 space-y-3">
            {guia.faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white rounded-2xl px-5 py-4 border border-slate-200/90 shadow-2xs transition-colors open:border-amber-400"
              >
                <summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-sm font-extrabold text-[#0a1628]">
                  <span>{f.q}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                    ▼
                  </span>
                </summary>
                <p className="mt-2.5 pt-2.5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        )}

        {guia.enlaces.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
              {guia.tituloEnlaces}
            </h3>
            <div className="flex flex-wrap gap-2">
              {guia.enlaces.map((e) => (
                <Link
                  key={e.href}
                  href={e.href}
                  className="text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-50 hover:bg-red-50 border border-slate-200/80 px-3 py-1.5 rounded-full transition-colors"
                >
                  {e.titulo}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
