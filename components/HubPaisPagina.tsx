import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { BarraConfianza, CtaFinal, HeroVenta, PasosSeparar, proximaSalida } from "@/components/paquetes-armados/Venta";
import { portadaDe } from "@/lib/paquetes-armados/fotos";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { salidasDe } from "@/lib/salidas";
import PorQueCityland from "@/components/PorQueCityland";
import EnlacePaquetesTuristicos from "@/components/paquetes-turisticos/EnlacePaquetes";
import TarjetaCircuito from "@/components/TarjetaCircuito";
import { circuitosVigentes, precioCityland } from "@/lib/circuitos";
import { DESTINOS_CARIBE, DESTINOS_EUROPA, buildWaUrl, type Destino } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { formatoUSD } from "@/lib/formato-precio";
import type { HubPais } from "@/lib/hubs-pais";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { absoluta } from "@/lib/paquetes-armados/fotos";
import { safeJsonLd } from "@/lib/seguridad-http";

const TODOS: Destino[] = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS];

function destinosDe(h: HubPais): Destino[] {
  const vistos = new Set<string>();
  return TODOS.filter((d) => (h.slugs ? h.slugs.includes(d.slug) : h.paises.includes(d.pais)) && !vistos.has(d.slug) && vistos.add(d.slug)).sort(
    (a, b) => a.turistico - b.turistico,
  );
}

export function metadataHub(h: HubPais): Metadata {
  const url = `${URL_BASE_SEO}${h.ruta}`;
  return {
    title: `${h.tituloSeo} | Cityland`,
    description: optimizarMetaDescriptionSEO(h.descripcion),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: h.h1,
      description: h.descripcion,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [absoluta(destinosDe(h)[0]?.img ?? obtenerGaleriaPorTexto(h.nombre)[0], URL_BASE_SEO)],
    },
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
      <main id="main-content" className="bg-slate-50/60 pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-3">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: h.h1 }]} />
            <HeroVenta
              foto={destinos[0]?.img ?? (circuitos[0] ? portadaDe(circuitos[0]) : obtenerGaleriaPorTexto(h.nombre)[0])}
              alt={h.h1}
              marca="Paquetes"
              sello={`${destinos.length + circuitos.length} opciones · salidas desde Lima`}
              titulo={h.h1}
              bajada={h.intro}
              chips={["Vuelo + hotel", "Traslados", "Asesora por WhatsApp"]}
              etiquetaPrecio="Desde, por persona"
              precio={desde ?? (circuitos[0] ? precioCityland(circuitos[0]) : 0)}
              detallePrecio={`${destinos.length + circuitos.length} paquetes para elegir`}
              proxima={proximaSalida(circuitos.flatMap((c) => salidasDe(c.mt)))}
              wa={wa}
              boton="Cotizar por WhatsApp"
            />
          </div>

          <BarraConfianza />

          <section className="space-y-4" aria-labelledby="paquetes">
            <h2 id="paquetes" className="text-2xl font-extrabold text-[#0a1628]">
              Elige tu paquete
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {destinos.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destinos/${d.slug}`}
                    className="group block h-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-shadow"
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
                    <div className="p-5 space-y-2">
                      <h3 className="text-lg font-extrabold text-[#0a1628] leading-snug">{d.ciudad}</h3>
                      {d.duracion && <p className="text-sm text-slate-500">{d.duracion}</p>}
                      <p className="flex items-end justify-between gap-2 pt-2 text-xs text-slate-500">
                        <span>
                          desde <strong className="block text-2xl text-[#0a1628]">{formatoUSD(d.turistico)}</strong>
                        </span>
                        <span className="rounded-xl bg-[#25D366] px-3 py-2 text-sm font-extrabold text-white">Ver paquete</span>
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
                Paquetes armados con fecha fija
              </h2>
              <p className="text-slate-600">Viajes ya organizados con salida confirmada. Toca uno para ver su itinerario y sus fechas.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

          <PasosSeparar />
          {desde !== undefined && <CtaFinal titulo={`Cotiza hoy tu viaje a ${h.nombre}`} precio={desde} wa={wa} boton="Cotizar por WhatsApp" />}

          <EnlacePaquetesTuristicos ruta={h.ruta} />

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
      <WhatsAppFloat
        href={wa}
        titulo={desde !== undefined ? `${h.nombre} desde ${formatoUSD(desde)}` : undefined}
        subtitulo="Cotiza por WhatsApp y separa con el 50%"
      />
    </>
  );
}
