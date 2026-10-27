import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PorQueCityland from "@/components/PorQueCityland";
import TarjetaCircuito from "@/components/TarjetaCircuito";
import { circuitosVigentes } from "@/lib/circuitos";
import { DESTINOS_CARIBE, DESTINOS_EUROPA, buildWaUrl, type Destino } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { formatoUSD } from "@/lib/formato-precio";
import type { HubPais } from "@/lib/hubs-pais";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const TODOS: Destino[] = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS];

function destinosDe(h: HubPais): Destino[] {
  const vistos = new Set<string>();
  return TODOS.filter((d) => (h.slugs ? h.slugs.includes(d.slug) : h.paises.includes(d.pais)) && !vistos.has(d.slug) && vistos.add(d.slug)).sort(
    (a, b) => a.turistico - b.turistico
  );
}

export function metadataHub(h: HubPais): Metadata {
  const url = `${URL_BASE_SEO}${h.ruta}`;
  return {
    title: `${h.tituloSeo} | Cityland`,
    description: optimizarMetaDescriptionSEO(h.descripcion),
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: h.h1, description: h.descripcion, siteName: "Cityland Travel", locale: "es_PE" },
  };
}

// Página por país: todos los paquetes del catálogo de ese país, documentos, preguntas y WhatsApp con su Ref Web.
export default function HubPaisPagina({ hub: h }: { hub: HubPais }) {
  const url = `${URL_BASE_SEO}${h.ruta}`;
  const destinos = destinosDe(h);
  const desde = destinos[0]?.turistico;
  const circuitos = h.paises.length
    ? circuitosVigentes()
        .filter((c) => {
          const re = h.ciudadesCircuitos;
          return re ? c.ciudades.some((x) => re.test(x)) : c.paises.some((p) => h.paises.includes(p));
        })
        .sort((a, b) => a.desde - b.desde)
    : [];
  const wa = buildWaUrl({ categoria: "general", mensajePersonalizado: h.mensajeWhatsApp, refWeb: `citylandtravel.com${h.ruta}` });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: h.h1, item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: h.h1,
        itemListElement: destinos.map((d, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: d.ciudad,
          url: `${URL_BASE_SEO}/destinos/${d.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: h.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <header className="space-y-4 max-w-3xl">
            <nav aria-label="Migas de pan" className="text-xs text-slate-500">
              <Link href="/" className="hover:underline">
                Inicio
              </Link>{" "}
              / {h.h1}
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              {h.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-600">{h.intro}</p>
            {desde !== undefined && (
              <p className="text-[15px] text-slate-700">
                {destinos.length} paquetes, desde <strong>{formatoUSD(desde)}</strong> por persona.
              </p>
            )}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold"
            >
              <WhatsAppIcon size={18} />
              Cotizar por WhatsApp
            </a>
          </header>

          <section className="space-y-4" aria-labelledby="paquetes">
            <h2 id="paquetes" className="text-2xl font-extrabold text-[#0a1628]">
              Elige tu paquete
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {destinos.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destinos/${d.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[4/3] bg-slate-100">
                      <Image
                        src={d.img}
                        alt={d.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <h3 className="font-extrabold text-[#0a1628] leading-snug">{d.ciudad}</h3>
                      {d.duracion && <p className="text-sm text-slate-500">{d.duracion}</p>}
                      <p className="text-[15px] text-slate-700">
                        Desde <strong className="text-[#0a1628]">{formatoUSD(d.turistico)}</strong> por persona
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500">
              Precios referenciales por persona; el precio final depende de la fecha, el hotel y cuántos viajan.
            </p>
          </section>

          {circuitos.length > 0 && (
            <section className="space-y-4" aria-labelledby="circuitos">
              <h2 id="circuitos" className="text-2xl font-extrabold text-[#0a1628]">
                Programas con salidas confirmadas
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {circuitos.map((c) => (
                  <TarjetaCircuito key={c.slug} c={c} />
                ))}
              </ul>
            </section>
          )}

          <section className="rounded-2xl bg-sky-50 border border-sky-100 p-5 sm:p-6 space-y-2">
            <h2 className="text-xl font-extrabold text-[#0a1628]">Qué documento necesitas</h2>
            <p className="text-[15px] text-slate-700">{h.documentos}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Preguntas frecuentes</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {h.faqs.map((f) => (
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
            <h2 className="text-lg font-extrabold text-[#0a1628]">También te puede servir</h2>
            <div className="flex flex-wrap gap-2.5">
              {h.enlaces.map((e) => (
                <Link
                  key={e.href}
                  href={e.href}
                  className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]"
                >
                  {e.texto}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <PorQueCityland destino={h.nombre} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
