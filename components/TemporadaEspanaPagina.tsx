import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { BarraConfianza, CtaFinal, HeroVenta, TarjetaRutaFoto } from "@/components/paquetes-armados/Venta";
import { absoluta } from "@/lib/paquetes-armados/fotos";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import PorQueCityland from "@/components/PorQueCityland";
import { buildWaUrl } from "@/components/constantes";
import { buscarRutaVuelo, type RutaVueloSEO } from "@/lib/rutas-vuelos";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";
import type { TemporadaEspana } from "@/lib/temporadas-espana";
import { NAV_MESES_ESPANA } from "@/lib/meses-espana";

export function metadataTemporada(t: TemporadaEspana): Metadata {
  const url = `${URL_BASE_SEO}${t.ruta}`;
  return {
    title: `${t.tituloSeo} | Cityland`,
    description: optimizarMetaDescriptionSEO(t.descripcion),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: t.h1,
      description: t.descripcion,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [absoluta(obtenerGaleriaPorTexto(t.fuera?.destino ?? "madrid espana")[0], URL_BASE_SEO)],
    },
  };
}

const ENLACE = "inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]";

// Página de temporada para España: fechas, clima, qué hacer, cuándo comprar y las rutas con su precio.
export default function TemporadaEspanaPagina({ temporada: t }: { temporada: TemporadaEspana }) {
  const url = `${URL_BASE_SEO}${t.ruta}`;
  const rutas = t.rutas.map((s) => buscarRutaVuelo(s)).filter((r): r is RutaVueloSEO => Boolean(r));
  const miga = t.fuera?.miga ?? { nombre: "Pasajes a España", href: "/pasajes-a-espana" };
  const enlacesFijos = t.fuera?.enlaces ?? [
    { texto: "Todas las rutas a España", href: "/pasajes-a-espana" },
    { texto: "Paquete migratorio a España", href: "/espana" },
  ];
  const foto = obtenerGaleriaPorTexto(t.fuera?.destino ?? "madrid espana")[0];
  const desde = rutas.length ? Math.min(...rutas.map((x) => x.precioDesdeUSD)) : undefined;
  const wa = buildWaUrl({
    categoria: t.fuera ? "general" : "europa",
    mensajePersonalizado: t.mensajeWhatsApp,
    refWeb: `citylandtravel.com${t.ruta}`,
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: miga.nombre, item: `${URL_BASE_SEO}${miga.href}` },
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
      <main id="main-content" className="bg-slate-50/60 pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-3">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: miga.nombre, href: miga.href }, { nombre: t.h1 }]} />
            <HeroVenta
              foto={foto}
              alt={t.h1}
              marca="Pasajes"
              sello={t.fuera?.destino ?? "España"}
              titulo={t.h1}
              bajada={t.intro}
              chips={t.fechas.slice(0, 3).map((x) => x.cuando)}
              etiquetaPrecio={desde !== undefined ? "Pasajes desde, por persona" : "Te cotizamos tu fecha por WhatsApp"}
              precio={desde}
              detallePrecio={desde !== undefined ? "Precio en temporada baja; te damos el de tu fecha." : undefined}
              wa={wa}
              boton="Cotizar por WhatsApp"
              nota="Te damos el precio exacto de tu fecha por WhatsApp"
            />
          </div>

          <BarraConfianza />

          <section className="space-y-4" aria-labelledby="rutas">
            <h2 id="rutas" className="text-2xl font-extrabold text-[#0a1628]">
              Pasajes para estas fechas
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rutas.map((r) => (
                <TarjetaRutaFoto key={r.slug} r={r} />
              ))}
            </ul>
            <p className="text-xs text-slate-500">
              {t.notaPrecio ??
                "Precios referenciales en temporada baja; en estas fechas suelen ser más altos. Te damos el precio exacto de tu fecha."}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Fechas clave</h2>
            <ul className="space-y-3">
              {t.fechas.map((f) => (
                <li key={f.cuando} className="rounded-2xl border border-slate-200 bg-white p-4">
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

          {!t.fuera && (
            <nav aria-labelledby="meses" className="space-y-3">
              <h2 id="meses" className="text-lg font-extrabold text-[#0a1628]">
                España mes a mes
              </h2>
              <div className="flex flex-wrap gap-2">
                {NAV_MESES_ESPANA.map((m) =>
                  m.href === t.ruta ? (
                    <span
                      key={m.href}
                      aria-current="page"
                      className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-[#0a1628] text-white text-sm font-bold"
                    >
                      {m.texto}
                    </span>
                  ) : (
                    <Link key={m.href} href={m.href} className={ENLACE}>
                      {m.texto}
                    </Link>
                  ),
                )}
              </div>
            </nav>
          )}

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

          <CtaFinal titulo={t.h1} precio={desde} wa={wa} boton="Cotizar por WhatsApp" />

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-[#0a1628]">También te puede servir</h2>
            <div className="flex flex-wrap gap-2.5">
              {t.destinos.map((d) => (
                <Link key={d.href} href={d.href} className={ENLACE}>
                  {d.texto}
                </Link>
              ))}
              {enlacesFijos.map((d) => (
                <Link key={d.href} href={d.href} className={ENLACE}>
                  {d.texto}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <PorQueCityland destino={t.fuera?.destino ?? "España"} />
      <Footer />
      <WhatsAppFloat href={wa} />
    </>
  );
}
