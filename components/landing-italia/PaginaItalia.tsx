import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas } from "@/components/paquetes-armados/Bloques";
import Portada from "@/components/landing-italia/Portada";
import { BloqueSeccion, Fuentes, Paquetes, PreciosPorMes, Tramos } from "@/components/landing-italia/Bloques";
import { Cierre, DudaFaq, PreguntaLista, waItalia } from "@/components/landing-italia/Ctas";
import { formatoUSD } from "@/lib/formato-precio";
import { absoluta } from "@/lib/paquetes-armados/fotos";
import { tituloSeo } from "@/lib/paquetes-armados/comun";
import { LANDINGS_ITALIA, NOMBRE_GRUPO, rutaLandingItalia } from "@/lib/italia/landings";
import type { GrupoItalia, LandingItalia } from "@/lib/italia/tipos";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

// Plantilla de /italia/<slug>: portada propia de cada familia, el contenido propio de la búsqueda al medio
// y las páginas hermanas al final.

export function metadataLandingItalia(l: LandingItalia): Metadata {
  const url = `${URL_BASE_SEO}${rutaLandingItalia(l)}`;
  const titulo = tituloSeo(l.tituloSeo);
  return {
    title: { absolute: titulo },
    description: l.descripcion,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: titulo, description: l.descripcion, siteName: "Cityland Travel", locale: "es_PE", images: [absoluta(l.foto, URL_BASE_SEO)] },
  };
}

const migasDe = (l: LandingItalia) => [{ nombre: "Inicio", href: "/" }, { nombre: "Italia", href: "/paquetes-a-italia" }, { nombre: l.migas }];

function esquema(l: LandingItalia, url: string) {
  const grafo: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: migasDe(l).map((m, i) => ({ "@type": "ListItem", position: i + 1, name: m.nombre, item: m.href ? `${URL_BASE_SEO}${m.href === "/" ? "" : m.href}` : url })),
    },
    { "@type": "FAQPage", mainEntity: l.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  if (l.precio !== undefined) {
    grafo.push({
      "@type": "Product",
      name: l.h1,
      description: l.descripcion,
      image: absoluta(l.foto, URL_BASE_SEO),
      brand: { "@type": "Brand", name: "Cityland Travel" },
      // Precio «desde»: AggregateOffer con lowPrice, nunca un Offer de precio fijo (scripts/verificar-desde.mjs).
      offers: { "@type": "AggregateOffer", url, priceCurrency: "USD", lowPrice: l.precio, offerCount: l.meses?.length ?? 1, availability: "https://schema.org/InStock", seller: { "@type": "TravelAgency", name: "Cityland Travel", url: URL_BASE_SEO } },
    });
  }
  return { "@context": "https://schema.org", "@graph": grafo };
}

// Orden del medio según la familia: así cada grupo se lee distinto.
type Bloque = "tramos" | "meses" | "secciones" | "pregunta" | "paquetes" | "fuentes";
const ORDEN: Record<GrupoItalia, Bloque[]> = {
  ida: ["tramos", "meses", "secciones", "pregunta", "paquetes"],
  provincia: ["tramos", "secciones", "meses", "pregunta", "paquetes"],
  regreso: ["meses", "secciones", "pregunta", "tramos"],
  regresoTema: ["secciones", "meses", "pregunta"],
  guia: ["secciones", "fuentes", "pregunta", "paquetes"],
  mes: ["secciones", "meses", "paquetes", "pregunta", "fuentes"],
  fiesta: ["secciones", "paquetes", "pregunta", "fuentes"],
  combinado: ["paquetes", "secciones", "pregunta"],
};

const CHIP = "inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]";
const URGENCIA = "Las tarifas más baratas de cada vuelo se venden primero. Cotiza con tiempo y separa con el 50% para no perder el precio.";

export default function PaginaItalia({ landing: l }: { landing: LandingItalia }) {
  const ruta = rutaLandingItalia(l);
  const url = `${URL_BASE_SEO}${ruta}`;
  const hermanas = LANDINGS_ITALIA.filter((x) => x.slug !== l.slug && x.grupo === l.grupo);
  const otrosGrupos = [...new Set(LANDINGS_ITALIA.map((x) => x.grupo))].filter((g) => g !== l.grupo);
  const bloques: Record<Bloque, ReactNode> = {
    tramos: l.tramos && <Tramos tramos={l.tramos} />,
    meses: l.meses && <PreciosPorMes meses={l.meses} titulo={l.tituloMeses ?? "Precio por mes"} ruta={ruta} mensaje={l.mensaje} />,
    secciones: l.secciones.map((s) => <BloqueSeccion key={s.id} s={s} />),
    pregunta: l.pregunta && <PreguntaLista ruta={ruta} pregunta={l.pregunta} />,
    paquetes: l.paquetes && l.paquetes.length > 0 && <Paquetes paquetes={l.paquetes} titulo="Viajes armados que pasan por aquí" />,
    fuentes: <Fuentes l={l} />,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(esquema(l, url)) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-14">
          <div className="space-y-3">
            <Migas items={migasDe(l)} />
            <Portada l={l} wa={waItalia(ruta, l.mensaje, "Precio")} />
          </div>

          {ORDEN[l.grupo].map((b) => (
            <Fragment key={b}>{bloques[b]}</Fragment>
          ))}

          <section className="space-y-4" aria-labelledby="faq">
            <h2 id="faq" className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
              Preguntas frecuentes
            </h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {l.faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-bold text-lg text-[#0a1628] flex justify-between gap-4 min-h-[44px] items-center">
                    {f.q}
                    <span className="text-slate-400 group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="text-base leading-relaxed text-slate-600 mt-2">{f.a}</p>
                  <DudaFaq ruta={ruta} pregunta={f.q} />
                </details>
              ))}
            </div>
          </section>

          <Cierre ruta={ruta} titulo={`${l.h1}: cotiza hoy`} precio={l.precio} texto={URGENCIA} mensaje={l.mensaje} />

          <section className="space-y-4" aria-labelledby="mas">
            <h2 id="mas" className="text-xl font-extrabold text-[#0a1628]">
              Más para tu viaje a Italia
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {l.enlaces.map((e) => (
                <Link key={e.href} href={e.href} className={CHIP}>
                  {e.texto}
                </Link>
              ))}
            </div>
            {hermanas.length > 0 && (
              <div className="flex flex-wrap gap-2.5">
                {hermanas.map((x) => (
                  <Link key={x.slug} href={rutaLandingItalia(x)} className={CHIP}>
                    {x.migas}
                  </Link>
                ))}
              </div>
            )}
            {otrosGrupos.length > 0 && (
              <div className="flex flex-wrap gap-2.5">
                {otrosGrupos.map((g) => {
                  const primera = LANDINGS_ITALIA.find((x) => x.grupo === g);
                  return primera ? (
                    <Link key={g} href={rutaLandingItalia(primera)} className={CHIP}>
                      {NOMBRE_GRUPO[g]}
                    </Link>
                  ) : null;
                })}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat
        href={waItalia(ruta, l.mensaje, "Barra móvil")}
        titulo={l.precio !== undefined ? `${l.migas} · desde ${formatoUSD(l.precio)}` : l.migas}
        subtitulo="Te responde una asesora por WhatsApp"
      />
    </>
  );
}
