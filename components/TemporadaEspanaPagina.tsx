import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PorQueCityland from "@/components/PorQueCityland";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { buscarRutaVuelo, type RutaVueloSEO } from "@/lib/rutas-vuelos";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";
import type { TemporadaEspana } from "@/lib/temporadas-espana";
import { NAV_MESES_ESPANA } from "@/lib/meses-espana";

export function metadataTemporada(t: TemporadaEspana): Metadata {
  const url = `${URL_BASE_SEO}${t.ruta}`;
  return {
    title: `${t.tituloSeo} | Cityland`,
    description: t.descripcion,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: t.h1, description: t.descripcion, siteName: "Cityland Travel", locale: "es_PE" },
  };
}

const ENLACE = "inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]";

// Página de temporada para España: fechas, clima, qué hacer, cuándo comprar y las rutas con su precio.
export default function TemporadaEspanaPagina({ temporada: t }: { temporada: TemporadaEspana }) {
  const url = `${URL_BASE_SEO}${t.ruta}`;
  const rutas = t.rutas.map((s) => buscarRutaVuelo(s)).filter((r): r is RutaVueloSEO => Boolean(r));
  const wa = buildWaUrl({ categoria: "europa", mensajePersonalizado: t.mensajeWhatsApp, refWeb: `citylandtravel.com${t.ruta}` });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Pasajes a España", item: `${URL_BASE_SEO}/pasajes-a-espana` },
          { "@type": "ListItem", position: 3, name: t.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          <header className="space-y-4 max-w-3xl">
            <nav aria-label="Migas de pan" className="text-xs text-slate-500">
              <Link href="/" className="hover:underline">
                Inicio
              </Link>{" "}
              /{" "}
              <Link href="/pasajes-a-espana" className="hover:underline">
                Pasajes a España
              </Link>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">{t.h1}</h1>
            <p className="text-base sm:text-lg text-slate-600">{t.intro}</p>
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

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Fechas clave</h2>
            <ul className="space-y-3">
              {t.fechas.map((f) => (
                <li key={f.cuando} className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-extrabold text-[#0a1628]">{f.cuando}</p>
                  <p className="text-[15px] text-slate-600 mt-1">{f.que}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 border border-sky-100 p-5 space-y-2">
              <h2 className="text-xl font-extrabold text-[#0a1628]">El clima</h2>
              <p className="text-[15px] text-slate-700">{t.clima}</p>
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-100 p-5 space-y-2">
              <h2 className="text-xl font-extrabold text-[#0a1628]">Cuándo comprar</h2>
              <p className="text-[15px] text-slate-700">{t.consejoCompra}</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Qué hacer</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-slate-700">
              {t.queHacer.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4" aria-labelledby="rutas">
            <h2 id="rutas" className="text-2xl font-extrabold text-[#0a1628]">
              Pasajes para estas fechas
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rutas.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/vuelos/${r.slug}`}
                    className="flex items-center justify-between gap-4 min-h-[56px] rounded-2xl border border-slate-200 px-5 py-4 hover:border-[#0a1628] transition-colors"
                  >
                    <span className="font-extrabold text-[#0a1628]">
                      {r.origen} → {r.destino}
                    </span>
                    <span className="text-[15px] text-slate-700 whitespace-nowrap">
                      desde <strong className="text-[#0a1628]">{formatoUSD(r.precioDesdeUSD)}</strong>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500">
              {t.notaPrecio ??
                "Precios referenciales en temporada baja; en estas fechas suelen ser más altos. Te damos el precio exacto de tu fecha."}
            </p>
          </section>

          <nav aria-labelledby="meses" className="space-y-3">
            <h2 id="meses" className="text-lg font-extrabold text-[#0a1628]">
              España mes a mes
            </h2>
            <div className="flex flex-wrap gap-2">
              {NAV_MESES_ESPANA.map((m) =>
                m.href === t.ruta ? (
                  <span key={m.href} aria-current="page" className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-[#0a1628] text-white text-sm font-bold">
                    {m.texto}
                  </span>
                ) : (
                  <Link key={m.href} href={m.href} className={ENLACE}>
                    {m.texto}
                  </Link>
                )
              )}
            </div>
          </nav>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Preguntas frecuentes</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {t.faqs.map((f) => (
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
              {t.destinos.map((d) => (
                <Link key={d.href} href={d.href} className={ENLACE}>
                  {d.texto}
                </Link>
              ))}
              <Link href="/pasajes-a-espana" className={ENLACE}>
                Todas las rutas a España
              </Link>
              <Link href="/espana" className={ENLACE}>
                Paquete migratorio a España
              </Link>
            </div>
          </section>
        </div>
      </main>
      <PorQueCityland destino="España" />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
