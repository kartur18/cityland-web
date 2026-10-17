import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import {
  MIL_LANDINGS_COMERCIALES_SEO,
  buscarLandingComercial,
} from "@/lib/catalogo-mil-landings-comerciales";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return MIL_LANDINGS_COMERCIALES_SEO.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = buscarLandingComercial(slug);
  if (!item) return {};

  const url = `https://citylandtravel.com/ofertas/${item.slug}`;
  const imgUrl = item.config.vitrina.img.startsWith("http")
    ? item.config.vitrina.img
    : `https://citylandtravel.com${item.config.vitrina.img}`;

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    keywords: item.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: item.metaTitle,
      description: item.metaDescription,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [
        {
          url: imgUrl,
          width: 1200,
          height: 630,
          alt: item.titulo,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.metaTitle,
      description: item.metaDescription,
      images: [imgUrl],
    },
    other: {
      "geo.region": "PE-LIM",
      "geo.placename": "Los Olivos, Lima, Perú",
    },
  };
}

export default async function OfertaComercialPage({ params }: Props) {
  const { slug } = await params;
  const item = buscarLandingComercial(slug);

  if (!item) {
    notFound();
  }

  const listaCluster = MIL_LANDINGS_COMERCIALES_SEO.filter(
    (x) => x.cluster === item.cluster
  );
  const idxCluster = listaCluster.findIndex((x) => x.slug === item.slug);
  const relacionadosCluster = Array.from(
    { length: Math.min(12, Math.max(0, listaCluster.length - 1)) },
    (_, i) => listaCluster[(Math.max(0, idxCluster) + i + 1) % listaCluster.length]
  ).filter((x) => x && x.slug !== item.slug);

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
            name: item.clusterNombre,
            item: "https://citylandtravel.com/directorio",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.titulo,
            item: `https://citylandtravel.com/ofertas/${item.slug}`,
          },
        ],
      },
      {
        "@type": "Product",
        name: item.titulo,
        description: item.metaDescription,
        brand: {
          "@type": "Brand",
          name: "Cityland Travel",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: String(item.precioDesdeUSD),
          offerCount: String(item.config.items.length),
          availability: "https://schema.org/InStock",
          url: `https://citylandtravel.com/ofertas/${item.slug}`,
          seller: {
            "@type": "TravelAgency",
            name: "Cityland Travel E.I.R.L.",
          },
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AirlineLandingTemplate config={item.config}>
        {item.faqs.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight mb-6">
                Preguntas Frecuentes: {item.titulo}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.faqs.map((f) => (
                  <div
                    key={f.q}
                    className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs"
                  >
                    <h3 className="text-sm font-extrabold text-[#0a1628] mb-2">
                      {f.q}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-10 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3">
              Más Ofertas en {item.clusterNombre}
            </h2>
            <div className="flex flex-wrap gap-2">
              {relacionadosCluster.map((r) => (
                <Link
                  key={r.slug}
                  href={`/ofertas/${r.slug}`}
                  className="text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-50 hover:bg-red-50 border border-slate-200/80 px-3 py-1.5 rounded-full transition-colors"
                >
                  {r.titulo} (Desde ${r.precioDesdeUSD} USD)
                </Link>
              ))}
              <Link
                href="/directorio"
                className="text-xs font-bold text-red-600 hover:underline px-3 py-1.5"
              >
                Ver catálogo completo de 2,000 destinos y ofertas →
              </Link>
            </div>
          </div>
        </section>
      </AirlineLandingTemplate>
    </>
  );
}
