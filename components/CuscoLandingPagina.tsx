import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PorQueCityland from "@/components/PorQueCityland";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { BarraConfianza, HeroVenta, PasosSeparar } from "@/components/paquetes-armados/Venta";
import { buildWaUrl } from "@/components/constantes";
import { tituloSeo } from "@/lib/paquetes-armados/comun";
import { LANDINGS_CUSCO, rutaLandingCusco, type LandingCusco } from "@/lib/landings-cusco-practico";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

// Plantilla de las landings de apoyo de Cusco (/cusco/<slug>): calcada del patrón que ya funciona
// en España (ver components/LandingEspanaPagina.tsx), pero más simple porque Cusco no tiene solo
// ida, calculadoras de bolsa de viaje ni variantes por tema. Cada página enlaza a sus hermanas y
// al hub /cusco para mandarle autoridad temática. 3-nov-2026.

const PASOS_CUSCO = [
  { t: "Escríbenos tu fecha", d: "Por WhatsApp, con cuántos viajan y cuántos días quieren estar en Cusco." },
  { t: "Te armamos tu programa", d: "Vuelo, hotel, tren y entradas oficiales según los días que elijas." },
  { t: "Separa con un adelanto", d: "El saldo lo pagas antes de viajar. Te mandamos todo por escrito." },
];

export function waCusco(ruta: string, mensaje: string, fuente: string): string {
  return buildWaUrl({ categoria: "general", mensajePersonalizado: mensaje, refWeb: `citylandtravel.com${ruta} [${fuente}]` });
}

export function metadataLandingCusco(l: LandingCusco): Metadata {
  const url = `${URL_BASE_SEO}${rutaLandingCusco(l)}`;
  const titulo = tituloSeo(l.tituloSeo);
  const descripcion = optimizarMetaDescriptionSEO(l.descripcion);
  return {
    title: { absolute: titulo },
    description: descripcion,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: titulo,
      description: descripcion,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [{ url: l.foto, width: 1200, height: 630, alt: l.fotoAlt }],
    },
  };
}

function migasDe(l: LandingCusco) {
  return [{ nombre: "Inicio", href: "/" }, { nombre: "Cusco", href: "/cusco" }, { nombre: l.migas }];
}

function esquema(l: LandingCusco, url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: migasDe(l).map((m, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: m.nombre,
          item: m.href ? `${URL_BASE_SEO}${m.href === "/" ? "" : m.href}` : url,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: l.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

const CHIP = "inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]";

export default function CuscoLandingPagina({ landing: l, hermanas = LANDINGS_CUSCO }: { landing: LandingCusco; hermanas?: readonly LandingCusco[] }) {
  const ruta = rutaLandingCusco(l);
  const url = `${URL_BASE_SEO}${ruta}`;
  const wa = waCusco(ruta, l.mensaje, "Precio");
  const otras = hermanas.filter((x) => x.slug !== l.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(esquema(l, url)) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          <div className="space-y-3">
            <Migas items={migasDe(l)} />
            <HeroVenta
              foto={l.foto}
              alt={l.fotoAlt}
              marca="Cusco y Machu Picchu"
              sello="Lima → Cusco"
              titulo={l.h1}
              bajada={l.bajada}
              chips={l.chips}
              etiquetaPrecio="Programas desde"
              precio={499}
              detallePrecio="Vuelo ida y vuelta, hotel, tren y entradas oficiales según el programa."
              wa={wa}
              boton={l.boton}
              ancla="Ver lo que tienes que saber"
              nota="Separas con un adelanto y pagas el saldo antes de viajar"
            />
          </div>

          <BarraConfianza />

          <section className="space-y-5" aria-labelledby="puntos">
            <h2 id="puntos" className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
              {l.puntosTitulo}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {l.puntos.map((p) => (
                <li key={p.t} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <strong className="block text-lg text-[#0a1628]">{p.t}</strong>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{p.d}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-sky-100 bg-sky-50/70 p-6 sm:p-8 space-y-4" aria-labelledby="lista">
            <h2 id="lista" className="text-2xl font-extrabold text-[#0a1628]">
              {l.listaTitulo}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {l.lista.map((x) => (
                <li key={x} className="flex items-start gap-2.5 text-base text-slate-700">
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className="mt-1 shrink-0 text-emerald-600">
                    <path fill="currentColor" d="M8.1 14.6 3.5 10l1.4-1.4 3.2 3.2 7-7L16.5 6z" />
                  </svg>
                  {x}
                </li>
              ))}
            </ul>
          </section>

          <PasosSeparar pasos={PASOS_CUSCO} />

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
                </details>
              ))}
            </div>
          </section>

          <section className="space-y-4" aria-labelledby="mas">
            <h2 id="mas" className="text-xl font-extrabold text-[#0a1628]">
              Más para tu viaje a Cusco
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {l.enlaces.map((e) => (
                <Link key={e.href} href={e.href} className={CHIP}>
                  {e.texto}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {otras.map((x) => (
                <Link key={x.slug} href={rutaLandingCusco(x)} className={CHIP}>
                  {x.migas}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <PorQueCityland destino="Cusco" />
      <Footer />
      <WhatsAppFloat href={waCusco(ruta, l.mensaje, "Barra móvil")} titulo={l.migas} subtitulo="Separa con un adelanto por WhatsApp" />
    </>
  );
}
