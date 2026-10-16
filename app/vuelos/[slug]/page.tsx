import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { RUTAS_VUELOS_SEO, buscarRutaVuelo } from "@/lib/rutas-vuelos";

export function generateStaticParams() {
  return RUTAS_VUELOS_SEO.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ruta = buscarRutaVuelo(slug);
  if (!ruta) return { title: "Ruta no encontrada" };

  const canonicalUrl = `https://citylandtravel.com/vuelos/${ruta.slug}`;
  return {
    title: ruta.metaTitle,
    description: ruta.metaDescription,
    keywords: ruta.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: ruta.metaTitle,
      description: ruta.metaDescription,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [
        {
          url: ruta.config.vitrina.img,
          width: 1200,
          height: 630,
          alt: ruta.config.vitrina.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ruta.metaTitle,
      description: ruta.metaDescription,
      images: [ruta.config.vitrina.img],
    },
  };
}

export default async function RutaVueloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ruta = buscarRutaVuelo(slug);
  if (!ruta) notFound();

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
            name: `Vuelos de ${ruta.origen} a ${ruta.destino}`,
            item: `https://citylandtravel.com/vuelos/${ruta.slug}`,
          },
        ],
      },
      {
        "@type": "Product",
        name: `Vuelos y Paquetes de ${ruta.origen} (${ruta.codigoOrigen}) a ${ruta.destino} (${ruta.codigoDestino})`,
        description: ruta.metaDescription,
        image: ruta.config.vitrina.img,
        brand: { "@type": "Brand", name: "Cityland Travel" },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: String(ruta.precioDesdeUSD),
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: `https://citylandtravel.com/vuelos/${ruta.slug}`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: ruta.faqs.map((f) => ({
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
      <AirlineLandingTemplate config={ruta.config} />
    </>
  );
}
