import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";
import {
  AGENCIAS_LOCALES_SEO,
  buscarAgenciaLocal,
} from "@/lib/catalogo-agencias-locales";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return AGENCIAS_LOCALES_SEO.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agencia = buscarAgenciaLocal(slug);
  if (!agencia) return {};

  const url = `https://citylandtravel.com/agencia/${agencia.slug}`;

  return {
    title: agencia.metaTitle,
    description: agencia.metaDescription,
    keywords: agencia.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: agencia.metaTitle,
      description: agencia.metaDescription,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [
        {
          url: "https://citylandtravel.com/opengraph-image",
          width: 1200,
          height: 630,
          alt: agencia.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: agencia.metaTitle,
      description: agencia.metaDescription,
      images: ["https://citylandtravel.com/opengraph-image"],
    },
    other: {
      "geo.region": "PE-LIM",
      "geo.placename": `${agencia.zona}, ${agencia.region}, Perú`,
    },
  };
}

export default async function AgenciaLocalSlugPage({ params }: Props) {
  const { slug } = await params;
  const agencia = buscarAgenciaLocal(slug);
  if (!agencia) notFound();

  const config = obtenerConfigAgenciaOficial(agencia.zona);

  const idxActual = AGENCIAS_LOCALES_SEO.findIndex((a) => a.slug === agencia.slug);
  const agenciasCercanas = Array.from({ length: 12 }, (_, i) => {
    const idx = (Math.max(0, idxActual) + i + 1) % AGENCIAS_LOCALES_SEO.length;
    return AGENCIAS_LOCALES_SEO[idx];
  }).filter((a) => a && a.slug !== agencia.slug);

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
            name: "Cobertura Nacional y Distrital",
            item: "https://citylandtravel.com/agencia",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Agencia de Viajes para ${agencia.zona}`,
            item: `https://citylandtravel.com/agencia/${agencia.slug}`,
          },
        ],
      },
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        name: `Cityland Travel — Atención para ${agencia.zona}`,
        legalName: "Cityland Travel E.I.R.L.",
        taxID: "20614914239",
        url: `https://citylandtravel.com/agencia/${agencia.slug}`,
        telephone: "+51944103890",
        priceRange: "$$",
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${agencia.zona}, ${agencia.region}, Perú`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Antúnez de Mayolo N. 814",
          addressLocality: "Los Olivos",
          addressRegion: "Lima",
          postalCode: "15304",
          addressCountry: "PE",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AirlineLandingTemplate config={config}>
        <section className="py-10 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3">
              Cobertura de Cityland Travel en Otros Distritos y Ciudades del Perú
            </h2>
            <div className="flex flex-wrap gap-2">
              {agenciasCercanas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/agencia/${a.slug}`}
                  className="text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-50 hover:bg-red-50 border border-slate-200/80 px-3 py-1.5 rounded-full transition-colors"
                >
                  Agencia de Viajes en {a.zona}
                </Link>
              ))}
              <Link
                href="/directorio"
                className="text-xs font-bold text-red-600 hover:underline px-3 py-1.5"
              >
                Ver catálogo completo de destinos y vuelos →
              </Link>
            </div>
          </div>
        </section>
      </AirlineLandingTemplate>
    </>
  );
}

