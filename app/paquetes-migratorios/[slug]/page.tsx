import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SuperLandingMigratorioTemplate from "@/components/SuperLandingMigratorioTemplate";
import {
  INDICE_PAQUETES_MIGRATORIOS_1000,
  obtenerSuperLandingPorSlug,
} from "@/lib/catalogo-paquetes-migratorios-1000";
import { enriquecerLandingMigratorio } from "@/lib/contenido-migratorios";
import {
  URL_BASE_SEO,
  construirSchemaLandingSEO,
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
} from "@/lib/seo-arquitectura";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 86400;
export const dynamicParams = true;

export function generateStaticParams() {
  return INDICE_PAQUETES_MIGRATORIOS_1000.slice(0, 120).map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const datos = obtenerSuperLandingPorSlug(slug);
  if (!datos) return {};

  const title = optimizarMetaTitleSEO(datos.metaTitle);
  const description = optimizarMetaDescriptionSEO(datos.metaDescription);
  const urlCanonica = `${URL_BASE_SEO}/paquetes-migratorios/${datos.slug}`;
  const imagenAbsoluta = datos.imagenHero.startsWith("/")
    ? `${URL_BASE_SEO}${datos.imagenHero}`
    : datos.imagenHero;

  return {
    title,
    description,
    keywords: datos.keywords,
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
          url: imagenAbsoluta,
          width: 1200,
          height: 630,
          alt: `${datos.tituloH1} — Cityland Travel`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imagenAbsoluta],
    },
  };
}

export default async function PaqueteMigratorioSlugPage({ params }: Props) {
  const { slug } = await params;
  const base = obtenerSuperLandingPorSlug(slug);
  if (!base) notFound();
  const datos = enriquecerLandingMigratorio(base);

  const urlActual = `${URL_BASE_SEO}/paquetes-migratorios/${datos.slug}`;
  const imagenAbsoluta = datos.imagenHero.startsWith("/")
    ? `${URL_BASE_SEO}${datos.imagenHero}`
    : datos.imagenHero;

  const schemaLanding = construirSchemaLandingSEO({
    url: urlActual,
    titulo: `${datos.tituloH1} — ${datos.subtituloHero}`,
    descripcion: datos.metaDescription,
    precioDesdeUSD: datos.precioDesdeUSD,
    cantidadOfertas: 4,
    destinoOPais: datos.pais,
    imagenUrl: imagenAbsoluta,
    migas: [
      { nombre: "Inicio", url: URL_BASE_SEO },
      {
        nombre: "Paquetes Migratorios Europa",
        url: `${URL_BASE_SEO}/paquetes-migratorios`,
      },
      { nombre: datos.tituloH1, url: urlActual },
    ],
    faqs: datos.faqs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLanding) }}
      />

      <SuperLandingMigratorioTemplate datos={datos} />
    </>
  );
}
