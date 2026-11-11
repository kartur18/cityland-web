import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";
import { buildWaUrl } from "@/components/constantes";
import TodoElDestino from "@/components/TodoElDestino";

// Ciudades cuyo vuelo, hotel y seguro se muestran en la guía del país (solo donde vendemos esas páginas).
const CIUDADES_DE_PAIS: Record<string, string[]> = {
  "México": ["cancun"],
  "Estados Unidos": ["miami", "nueva-york", "orlando"],
  "Reino Unido": ["londres"],
};
import { GUIAS_VISA, NOMBRE_TIPO_VISA, rutaGuiaVisa, type GuiaVisa } from "@/lib/guias-visas-pais";

// Formato de guía: respuesta corta, el detalle por secciones, preguntas y fuentes oficiales; al final, la asesoría.
export default function GuiaVisaPagina({ guia }: { guia: GuiaVisa }) {
  const url = `${URL_BASE_SEO}${rutaGuiaVisa(guia)}`;
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: guia.mensajeWhatsApp,
    refWeb: `citylandtravel.com${rutaGuiaVisa(guia)} [Guía de visa]`,
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guia.h1,
        description: guia.descripcion,
        dateModified: guia.fechaIso,
        inLanguage: "es-PE",
        mainEntityOfPage: url,
        author: { "@id": `${URL_BASE_SEO}/#organization` },
        publisher: { "@id": `${URL_BASE_SEO}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: guia.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Visas", item: `${URL_BASE_SEO}/visas` },
          { "@type": "ListItem", position: 3, name: guia.h1, item: url },
        ],
      },
    ],
  };

  const mismoPais = GUIAS_VISA.filter((g) => g.pais === guia.pais && g.slug !== guia.slug);
  const otrosPaises = GUIAS_VISA.filter((g) => g.pais !== guia.pais && g.tipo === guia.tipo);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <header className="space-y-3">
            <nav aria-label="Migas de pan" className="text-xs text-slate-500">
              <Link href="/" className="hover:underline">
                Inicio
              </Link>{" "}
              /{" "}
              <Link href="/visas" className="hover:underline">
                Visas
              </Link>{" "}
              / {guia.pais}
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">{guia.h1}</h1>
            <p className="text-sm text-slate-500">Actualizado el {guia.actualizado} · Revisado con fuentes oficiales</p>
          </header>

          <section aria-label="La respuesta corta" className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <h2 className="text-lg font-extrabold text-[#0a1628] mb-3">La respuesta corta</h2>
            <ul className="space-y-2 text-[15px] text-slate-700">
              {guia.respuestaCorta.map((linea) => (
                <li key={linea} className="flex gap-2">
                  <span className="text-emerald-600 font-extrabold" aria-hidden="true">
                    ✓
                  </span>
                  <span>{linea}</span>
                </li>
              ))}
            </ul>
          </section>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[56px] items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 text-center text-base font-extrabold text-white shadow-md hover:bg-[#20ba5a]"
          >
            Quiero orientación sobre la visa de {NOMBRE_TIPO_VISA[guia.tipo].toLowerCase()} a {guia.pais}
          </a>

          {guia.secciones.map((s) => (
            <section key={s.titulo} className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">{s.titulo}</h2>
              {s.parrafos?.map((p) => (
                <p key={p} className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
              {s.lista && (
                <ul className="list-disc space-y-2 pl-5 text-[15px] text-slate-700">
                  {s.lista.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              )}
              {s.pasos && (
                <ol className="list-decimal space-y-2 pl-5 text-[15px] text-slate-700">
                  {s.pasos.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-2">
            <h2 className="text-lg font-extrabold text-[#0a1628]">Cómo te ayudamos</h2>
            <p className="text-[15px] text-slate-700">
              Te orientamos con la información oficial de esta guía y, cuando tengas tu visa o tu fecha de viaje, te cotizamos lo que sí vendemos:
              pasajes, seguro de viaje, hoteles y traslados. La solicitud de la visa la presentas tú en el sitio oficial o con un representante
              autorizado por {guia.pais}. La decisión de darla la toma siempre la autoridad migratoria: nadie puede garantizarla ni adelantar tu cita.
            </p>
          </section>

          <section className="space-y-4">
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
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-[#0a1628]">Fuentes oficiales</h2>
            <ul className="space-y-2 text-sm">
              {guia.fuentes.map((f) => (
                <li key={f.url}>
                  <a href={f.url} target="_blank" rel="noopener" className="text-emerald-700 font-semibold hover:underline">
                    {f.nombre}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500">
              Los requisitos, costos y plazos los fija cada país y pueden cambiar sin aviso. Revisamos esta guía con las fuentes de arriba
              el {guia.actualizado}; antes de pagar o viajar, confírmalos en el sitio oficial o con tu asesora.
            </p>
          </section>

          {(CIUDADES_DE_PAIS[guia.pais] ?? []).map((c) => (
            <TodoElDestino key={c} ciudad={c} />
          ))}

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-[#0a1628]">Otras visas</h2>
            <div className="flex flex-wrap gap-2.5">
              {[...mismoPais, ...otrosPaises].map((g) => (
                <Link
                  key={g.slug}
                  href={rutaGuiaVisa(g)}
                  className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]"
                >
                  {NOMBRE_TIPO_VISA[g.tipo]} · {g.pais}
                </Link>
              ))}
              <Link href="/visas" className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]">
                Todas las visas
              </Link>
              <Link href="/seguros" className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]">
                Seguro de viaje
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`Visa de ${NOMBRE_TIPO_VISA[guia.tipo].toLowerCase()} a ${guia.pais}`} subtitulo="Te orientamos por WhatsApp" />
    </>
  );
}
