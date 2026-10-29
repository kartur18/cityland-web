import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CotizadorWhatsApp from "@/components/CotizadorWhatsApp";
import { EnlaceSeguroGuia } from "@/components/seguros/IndiceSeguros";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";
import { GUIAS_REQUISITOS, type GuiaRequisitos } from "@/lib/guias-requisitos";

const OTRAS_GUIAS = [
  { href: "/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje", texto: "Bolsa de viaje para España" },
  { href: "/blog/carta-invitacion-espana-peru-requisitos", texto: "Carta de invitación para España" },
  { href: "/blog/que-preguntan-en-migraciones-espana-barajas", texto: "Qué preguntan en migraciones de España" },
  { href: "/blog/cuanto-cuesta-viajar-a-espana-desde-peru", texto: "Cuánto cuesta viajar a España" },
];

// Formato de guía (no de venta): respuesta corta, cotizador con el destino, el detalle, preguntas y fuentes oficiales.
export default function GuiaRequisitosPagina({ guia }: { guia: GuiaRequisitos }) {
  const url = `${URL_BASE_SEO}/viajes/${guia.slug}`;
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
        mainEntity: guia.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Viajes", item: `${URL_BASE_SEO}/viajes` },
          { "@type": "ListItem", position: 3, name: guia.h1, item: url },
        ],
      },
    ],
  };

  const otrasGuias = [
    ...Object.values(GUIAS_REQUISITOS)
      .filter((g) => g.slug !== guia.slug)
      .map((g) => ({ href: `/viajes/${g.slug}`, texto: `Requisitos para viajar a ${g.pais}` })),
    ...OTRAS_GUIAS,
  ];

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
              <Link href="/viajes" className="hover:underline">
                Viajes
              </Link>{" "}
              / Requisitos para {guia.pais}
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              {guia.h1}
            </h1>
            <p className="text-sm text-slate-500">
              Actualizado el {guia.actualizado} · Revisado con fuentes oficiales
            </p>
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

          <CotizadorWhatsApp
            destinoInicial={guia.destinoCotizador}
            titulo={`¿Viajas a ${guia.pais}? Te cotizamos pasaje, hotel y seguro`}
            origen={`Guía requisitos ${guia.pais}`}
          />

          <article className="article-body min-w-0" dangerouslySetInnerHTML={{ __html: guia.contenido }} />

          {guia.productos && (
            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">¿Listo para viajar a {guia.pais}?</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {guia.productos.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-400 hover:shadow-md transition"
                  >
                    <p className="font-extrabold text-[#0a1628]">{p.titulo}</p>
                    <p className="text-sm text-slate-600 mt-1">{p.detalle}</p>
                    <p className="text-sm font-black text-[#e30613] mt-3">{p.precio} →</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <EnlaceSeguroGuia slugGuia={guia.slug} pais={guia.pais} />

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
              Los requisitos los fija cada país y pueden cambiar. Revisamos esta guía con las fuentes de arriba; antes de
              viajar, confírmalos con tu asesora.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-[#0a1628]">Otras guías</h2>
            <div className="flex flex-wrap gap-2.5">
              {otrasGuias.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]"
                >
                  {g.texto}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
