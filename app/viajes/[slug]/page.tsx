import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  VIAJES_ESPECIALIZADOS_SEO,
  buscarViajeEspecializado,
} from "@/lib/catalogo-viajes-especializados";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const dynamicParams = false;

export function generateStaticParams() {
  return VIAJES_ESPECIALIZADOS_SEO.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = buscarViajeEspecializado(slug);
  if (!item) return { title: "Página no encontrada | Cityland Travel" };

  const canonical = `https://citylandtravel.com/viajes/${item.slug}`;
  return {
    title: item.metaTitle,
    description: item.metaDescription,
    keywords: item.keywords,
    alternates: { canonical },
    openGraph: {
      title: item.metaTitle,
      description: item.metaDescription,
      url: canonical,
      type: "website",
      locale: "es_PE",
      siteName: "Cityland Travel",
    },
    twitter: {
      card: "summary_large_image",
      title: item.metaTitle,
      description: item.metaDescription,
    },
  };
}

export default async function ViajeEspecializadoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = buscarViajeEspecializado(slug);
  if (!item) notFound();

  const waUrl = `https://wa.me/51983882504?text=${encodeURIComponent(item.waMensaje)}`;
  const canonicalUrl = `https://citylandtravel.com/viajes/${item.slug}`;
  const relacionados = VIAJES_ESPECIALIZADOS_SEO.filter(
    (v) => v.categoria === item.categoria && v.slug !== item.slug
  ).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio — Cityland Travel",
            item: "https://citylandtravel.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Directorio de Viajes",
            item: "https://citylandtravel.com/directorio",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.titulo,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "TouristTrip",
        name: item.titulo,
        description: item.metaDescription,
        provider: { "@type": "TravelAgency", name: "Cityland Travel" },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: String(item.precioDesdeUSD),
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: item.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-slate-900 to-[#112240] text-white pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-200 px-3.5 py-1 rounded-full text-xs font-semibold mb-4">
            <span>✈️ {item.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            {item.titulo}
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mb-8 leading-relaxed">
            {item.subtitulo}
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-emerald-300 font-bold mb-1">
                {item.etiquetaPrecio}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-slate-300 font-medium">Desde</span>
                <span className="text-4xl sm:text-5xl font-black text-white">
                  ${item.precioDesdeUSD}
                </span>
                <span className="text-lg font-bold text-amber-400">USD</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Impuestos y cargos obligatorios incluidos · Tarifa sujeta a disponibilidad y condiciones aplicables
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all text-sm sm:text-base"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detalle Principal */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              Información verificada para {item.destinoOPais}
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
              {item.resumenEjecutivo}
            </p>

            <h3 className="text-base font-bold text-slate-900 mb-3">
              ¿Qué incluye nuestro servicio en Cityland Travel?
            </h3>
            <ul className="space-y-2.5">
              {item.incluye.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Preguntas frecuentes sobre {item.destinoOPais}
            </h2>
            <div className="space-y-4">
              {item.faqs.map((f) => (
                <div key={f.q} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">
                    {f.q}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Lateral de Confianza y Conversión */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Ventajas de reservar con Cityland Travel
            </h3>
            {item.beneficiosClave.map((b) => (
              <div key={b.titulo} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="font-bold text-sm text-slate-900 mb-1">{b.titulo}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}

            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3.5 rounded-xl transition-colors text-sm"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Hablar con un asesor especializado</span>
              </a>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Cityland Travel E.I.R.L. · RUC 20614914239 · Av. Antúnez de Mayolo 814, Los Olivos
              </p>
            </div>
          </div>

          {relacionados.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Opciones relacionadas
              </h3>
              <div className="space-y-2">
                {relacionados.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/viajes/${rel.slug}`}
                    className="block text-xs sm:text-sm text-slate-700 hover:text-red-600 py-1.5 border-b border-slate-100 last:border-0"
                  >
                    → {rel.titulo} (Desde ${rel.precioDesdeUSD} USD)
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
