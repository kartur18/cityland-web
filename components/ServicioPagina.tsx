import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { BarraConfianza, CtaFinal, HeroVenta } from "@/components/paquetes-armados/Venta";
import { absoluta } from "@/lib/paquetes-armados/fotos";
import {
  IMG_AEROPUERTO_INTERNACIONAL,
  IMG_FAMILIA_VIAJE,
  IMG_GRUPO_ESTUDIANTES,
  IMG_HOTEL_LUJO_PISCINA,
  IMG_PASAPORTE_VIAJE,
  obtenerGaleriaPorTexto,
} from "@/lib/imagenes-destinos";
import { OFICINAS, buildWaUrl } from "@/components/constantes";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";
import type { ServicioCityland } from "@/lib/servicios";

export function metadataServicio(s: ServicioCityland): Metadata {
  const url = `${URL_BASE_SEO}${s.ruta}`;
  return {
    title: `${s.tituloSeo} | Cityland`,
    description: optimizarMetaDescriptionSEO(s.descripcion),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: s.h1,
      description: s.descripcion,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [absoluta(fotoServicio(s), URL_BASE_SEO)],
    },
  };
}

// Foto de portada por servicio; los que no están en la lista toman la del destino que nombra su título.
const FOTOS: Record<string, string> = {
  "/hoteles": IMG_HOTEL_LUJO_PISCINA,
  "/traslados": IMG_AEROPUERTO_INTERNACIONAL,
  "/institutos": IMG_GRUPO_ESTUDIANTES,
  "/viajes-adultos-mayores": IMG_FAMILIA_VIAJE,
  "/visa-americana": IMG_PASAPORTE_VIAJE,
  "/retorno-gestionado-que-es": IMG_PASAPORTE_VIAJE,
  "/visa-de-trabajo-para-espana": IMG_PASAPORTE_VIAJE,
  "/visa-de-estudios-para-espana": IMG_PASAPORTE_VIAJE,
  "/pasajes-de-espana-a-peru": "/images/destinos/lima-plaza-mayor.jpg",
  "/tours": obtenerGaleriaPorTexto("machu picchu cusco")[0],
  "/full-days": obtenerGaleriaPorTexto("paracas")[0],
  "/feriados-largos": obtenerGaleriaPorTexto("mancora playa")[0],
};

function fotoServicio(s: ServicioCityland): string {
  return FOTOS[s.ruta] ?? obtenerGaleriaPorTexto(s.h1)[0];
}

const CHECK = (
  <span className="text-emerald-600 font-extrabold" aria-hidden="true">
    ✓
  </span>
);

// Página de servicio: qué cotizamos, cómo funciona, ejemplos reales del catálogo, preguntas y WhatsApp con su Ref Web.
export default function ServicioPagina({ servicio: s }: { servicio: ServicioCityland }) {
  const url = `${URL_BASE_SEO}${s.ruta}`;
  const wa = buildWaUrl({ categoria: "general", mensajePersonalizado: s.mensajeWhatsApp, refWeb: `citylandtravel.com${s.ruta}` });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: s.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: s.h1 }]} />
            <HeroVenta
              foto={fotoServicio(s)}
              alt={s.h1}
              marca="Cityland Travel"
              sello="Agencia en Los Olivos"
              titulo={s.h1}
              bajada={s.intro}
              chips={s.queCotizamos.slice(0, 4).map((q) => q.titulo)}
              etiquetaPrecio="Te cotizamos por WhatsApp en minutos"
              wa={wa}
              boton="Cotizar por WhatsApp"
              nota="Atención de lunes a sábado, de 9:00 a. m. a 7:00 p. m."
            />
          </div>

          <BarraConfianza />

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Qué te cotizamos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {s.queCotizamos.map((q) => (
                <div key={q.titulo} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-extrabold text-[#0a1628]">{q.titulo}</h3>
                  <p className="text-[15px] text-slate-600 mt-1">{q.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Cómo funciona</h2>
            <ol className="space-y-3 text-[15px] text-slate-700">
              {s.pasos.map((p, i) => (
                <li key={p} className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#0a1628] text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{p}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">{s.ejemplosTitulo}</h2>
            <div className="flex flex-wrap gap-2.5">
              {s.ejemplos.map((e) => (
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

          <section className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 space-y-3">
            <h2 className="text-xl font-extrabold text-[#0a1628]">Atención en persona en Los Olivos</h2>
            <ul className="space-y-2 text-[15px] text-slate-700">
              {OFICINAS.map((o) => (
                <li key={o.ruc} className="flex gap-2">
                  {CHECK}
                  <span>
                    {o.direccion} · {o.razonSocial}, RUC {o.ruc}
                  </span>
                </li>
              ))}
              <li className="flex gap-2">
                {CHECK}
                <span>Lunes a sábado, de 9:00 a. m. a 7:00 p. m.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Preguntas frecuentes</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {s.faqs.map((f) => (
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

          <CtaFinal titulo={s.h1} wa={wa} boton="Cotizar por WhatsApp" />

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-[#0a1628]">También te puede servir</h2>
            <div className="flex flex-wrap gap-2.5">
              {s.relacionados.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="inline-flex items-center min-h-[44px] px-4 rounded-xl border border-slate-300 text-sm font-bold text-[#0a1628] hover:bg-slate-50"
                >
                  {r.texto}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} />
    </>
  );
}
