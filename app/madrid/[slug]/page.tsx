import type { Metadata } from "next";
import { robotsSegunRuta } from "@/lib/indexacion";
import { notFound } from "next/navigation";
import MadridMigratorioTemplate from "@/components/MadridMigratorioTemplate";
import {
  INDICE_MADRID_10K,
  buscarLandingMadrid10k,
} from "@/lib/catalogo-madrid-10k";
import { enriquecerLandingMadrid } from "@/lib/contenido-madrid";
import {
  URL_BASE_SEO,
  construirSchemaLandingSEO,
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
} from "@/lib/seo-arquitectura";
import { precioMinimoVisible } from "@/lib/tipo-producto-madrid";

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

  const title = optimizarMetaTitleSEO(datos.metaTitle);
  const description = optimizarMetaDescriptionSEO(datos.metaDescription);
  const urlCanonica = `${URL_BASE_SEO}/madrid/${datos.slug}`;

  return {
    title,
    description,
    keywords: datos.keywords,
    robots: robotsSegunRuta(`/madrid/${datos.slug}`),
    alternates: {
      canonical: urlCanonica,
    },
    openGraph: {
      type: "website",
      locale: "es_PE",
      url: urlCanonica,
      siteName: "Cityland Travel",
      title,
      description,
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
      title,
      description,
      images: [datos.imagenHero],
    },
  };
}

export default async function MadridSlugPage({ params }: Props) {
  const { slug } = await params;
  const base = buscarLandingMadrid10k(slug);
  if (!base) notFound();
  const datos = enriquecerLandingMadrid(base);

  const urlActual = `${URL_BASE_SEO}/madrid/${datos.slug}`;

  const schemaLanding = construirSchemaLandingSEO({
    url: urlActual,
    titulo: `${datos.tituloPrincipal} ${datos.subtituloDorado}`,
    descripcion: datos.metaDescription,
    // El JSON-LD declara el menor precio que el visitante ve en las tarjetas, no el "Desde" del titular.
    precioDesdeUSD: precioMinimoVisible(datos.planesReales, datos.precioDesdeUSD),
    precioMaximoUSD: Math.max(...datos.planesReales.map((p) => p.precioUSD)),
    cantidadOfertas: datos.planesReales.length,
    tipoSchema:
      datos.tipo === "SERVICIO" ? "servicio" : datos.tipo === "MIGRATORIO" ? "paquete" : "producto",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLanding) }}
      />

      <MadridMigratorioTemplate datos={datos} />
    </>
  );
}
