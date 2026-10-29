import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { BloqueSeccion, Cubrir, Portada } from "@/components/seguros/Bloques";
import { CierreSeguro, DudaSeguro, PreguntaSeguro, waSeguro } from "@/components/seguros/Ctas";
import CotizadorSeguro from "@/components/seguros/CotizadorSeguro";
import { absoluta } from "@/lib/paquetes-armados/fotos";
import { tituloSeo } from "@/lib/paquetes-armados/comun";
import { CONSULTADO } from "@/lib/seguros/comun";
import { LANDINGS_SEGUROS, NOMBRE_GRUPO_SEGURO, rutaLandingSeguro } from "@/lib/seguros/landings";
import type { LandingSeguro } from "@/lib/seguros/tipos";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

// Plantilla de /seguros/<slug>: portada con la «póliza» del destino, lo que debe cubrir, el detalle de la búsqueda,
// el cotizador que arma el WhatsApp y las páginas hermanas al final.

export function metadataLandingSeguro(l: LandingSeguro): Metadata {
  const url = `${URL_BASE_SEO}${rutaLandingSeguro(l)}`;
  const titulo = tituloSeo(l.tituloSeo);
  return {
    title: { absolute: titulo },
    description: l.descripcion,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: titulo, description: l.descripcion, siteName: "Cityland Travel", locale: "es_PE", images: [absoluta(l.foto, URL_BASE_SEO)] },
  };
}

const migasDe = (l: LandingSeguro) => [{ nombre: "Inicio", href: "/" }, { nombre: "Seguros de viaje", href: "/seguros" }, { nombre: l.migas }];

function esquema(l: LandingSeguro, url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: migasDe(l).map((m, i) => ({ "@type": "ListItem", position: i + 1, name: m.nombre, item: m.href ? `${URL_BASE_SEO}${m.href === "/" ? "" : m.href}` : url })),
      },
      { "@type": "FAQPage", mainEntity: l.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      // Sin precio: no hay tarifa propia publicada, se cotiza por WhatsApp.
      {
        "@type": "Service",
        name: l.h1,
        description: l.descripcion,
        serviceType: "Seguro de viaje",
        image: absoluta(l.foto, URL_BASE_SEO),
        url,
        ...(l.destino ? { areaServed: l.destino } : {}),
        provider: { "@type": "TravelAgency", name: "Cityland Travel", url: URL_BASE_SEO },
      },
    ],
  };
}

const CHIP = "inline-flex items-center min-h-[44px] px-4 rounded-full border border-slate-200 bg-white hover:border-[#0f2e2c] text-sm font-bold text-[#0f2e2c]";

export default function PaginaSeguro({ landing: l }: { landing: LandingSeguro }) {
  const ruta = rutaLandingSeguro(l);
  const url = `${URL_BASE_SEO}${ruta}`;
  const enlaces = l.enlaces.filter((e) => e.href !== ruta);
  const hermanas = LANDINGS_SEGUROS.filter((x) => x.slug !== l.slug && x.grupo === l.grupo);
  const otras = LANDINGS_SEGUROS.filter((x) => x.grupo !== l.grupo && !enlaces.some((e) => e.href === rutaLandingSeguro(x)));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(esquema(l, url)) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          <div className="space-y-3">
            <Migas items={migasDe(l)} />
            <Portada l={l} wa={waSeguro(ruta, l.mensaje, "Portada")} />
          </div>

          <Cubrir items={l.cubrir} />

          {l.secciones.map((s) => (
            <BloqueSeccion key={s.id} s={s} />
          ))}

          <div id="cotizador" className="scroll-mt-28">
            <CotizadorSeguro ruta={ruta} destino={l.destino} />
          </div>

          <PreguntaSeguro ruta={ruta} pregunta={l.pregunta} />

          <section className="space-y-4" aria-labelledby="faq">
            <h2 id="faq" className="text-2xl sm:text-3xl font-extrabold text-[#0f2e2c]">
              Preguntas frecuentes
            </h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {l.faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-bold text-lg text-[#0f2e2c] flex justify-between gap-4 min-h-[44px] items-center">
                    {f.q}
                    <span className="text-[#ff6a3d] group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="text-base leading-relaxed text-slate-600 mt-2">{f.a}</p>
                  <DudaSeguro ruta={ruta} pregunta={f.q} />
                </details>
              ))}
            </div>
          </section>

          {l.fuentes.length > 0 && (
            <section className="space-y-3" aria-labelledby="fuentes">
              <h2 id="fuentes" className="text-lg font-extrabold text-[#0f2e2c]">
                Fuentes
              </h2>
              <ul className="space-y-2 text-sm">
                {l.fuentes.map((f) => (
                  <li key={f.url}>
                    <a href={f.url} target="_blank" rel="noopener" className="font-semibold text-[#0f766e] hover:underline">
                      {f.texto}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500">
                Consultadas el {CONSULTADO}. Las reglas de cada país y las condiciones de cada póliza pueden cambiar: confírmalas con tu asesora antes de
                viajar.
              </p>
            </section>
          )}

          <CierreSeguro ruta={ruta} titulo={`${l.h1}: cotízalo hoy`} mensaje={l.mensaje} />

          <section className="space-y-5" aria-labelledby="mas">
            <h2 id="mas" className="text-xl font-extrabold text-[#0f2e2c]">
              Sigue leyendo
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {enlaces.map((e) => (
                <Link key={e.href} href={e.href} className={CHIP}>
                  {e.texto}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">{NOMBRE_GRUPO_SEGURO[l.grupo]}</h3>
              <div className="flex flex-wrap gap-2.5">
                {hermanas.map((x) => (
                  <Link key={x.slug} href={rutaLandingSeguro(x)} className={CHIP}>
                    {x.migas}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {otras.map((x) => (
                <Link key={x.slug} href={rutaLandingSeguro(x)} className={CHIP}>
                  {x.migas}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={waSeguro(ruta, l.mensaje, "Barra móvil")} titulo={`Seguro de viaje · ${l.migas}`} subtitulo="Te responde una asesora por WhatsApp" />
    </>
  );
}
