import Link from "next/link";
import { safeJsonLd } from "@/lib/seguridad-http";
import type { GuiaServicio } from "@/lib/guias-servicios";

// Va al final de las páginas de servicio (antes del pie): texto que responde la búsqueda y preguntas con su schema.
export default function BloqueGuiaServicio({ guia }: { guia: GuiaServicio }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guia.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="bg-white py-12 sm:py-16 border-t border-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">{guia.titulo}</h2>
          {guia.parrafos.map((t) => (
            <p key={t} className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
              {t}
            </p>
          ))}
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#0a1628]">Preguntas frecuentes</h2>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {guia.faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none font-bold text-[#0a1628] flex justify-between gap-4 min-h-[44px] items-center">
                  {f.q}
                  <span className="text-slate-400 group-open:rotate-45 transition-transform" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-[15px] text-slate-600 mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-extrabold text-[#0a1628]">También te puede servir</h2>
          <div className="flex flex-wrap gap-2.5">
            {guia.enlaces.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]"
              >
                {e.texto}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
