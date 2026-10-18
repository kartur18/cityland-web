import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MadridMigratorioTemplate from "@/components/MadridMigratorioTemplate";
import {
  INDICE_MADRID_10K,
  buscarLandingMadrid10k,
} from "@/lib/catalogo-madrid-10k";
import {
  URL_BASE_SEO,
  SCHEMA_ORGANIZACION_CITYLAND,
  construirSchemaLandingSEO,
} from "@/lib/seo-arquitectura";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 86400;
export const dynamicParams = true;

export function generateStaticParams() {
  return INDICE_MADRID_10K.slice(0, 150).map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const datos = buscarLandingMadrid10k(slug);
  if (!datos) return {};

  const urlCanonica = `${URL_BASE_SEO}/madrid/${datos.slug}`;

  return {
    title: datos.metaTitle,
    description: datos.metaDescription,
    keywords: datos.keywords,
    alternates: {
      canonical: urlCanonica,
    },
    openGraph: {
      type: "website",
      locale: "es_PE",
      url: urlCanonica,
      siteName: "Cityland Travel",
      title: datos.metaTitle,
      description: datos.metaDescription,
      images: [
        {
          url: datos.imagenHero,
          width: 1200,
          height: 630,
          alt: `${datos.tituloPrincipal} — Cityland Travel`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: datos.metaTitle,
      description: datos.metaDescription,
      images: [datos.imagenHero],
    },
  };
}

export default async function MadridSlugPage({ params }: Props) {
  const { slug } = await params;
  const datos = buscarLandingMadrid10k(slug);
  if (!datos) notFound();

  const urlActual = `${URL_BASE_SEO}/madrid/${datos.slug}`;

  const schemaLanding = construirSchemaLandingSEO({
    url: urlActual,
    titulo: `${datos.tituloPrincipal} ${datos.subtituloDorado}`,
    descripcion: datos.metaDescription,
    precioDesdeUSD: datos.precioDesdeUSD,
    cantidadOfertas: 4,
    destinoOPais: "España",
    imagenUrl: datos.imagenHero,
    migas: [
      { nombre: "Inicio", url: URL_BASE_SEO },
      { nombre: "España", url: `${URL_BASE_SEO}/espana` },
      { nombre: "Especialistas Madrid", url: `${URL_BASE_SEO}/madrid` },
      { nombre: datos.tituloPrincipal, url: urlActual },
    ],
    faqs: datos.faqs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SCHEMA_ORGANIZACION_CITYLAND),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLanding) }}
      />

      <MadridMigratorioTemplate datos={datos} />
    </>
  );
}
