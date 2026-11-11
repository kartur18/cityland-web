import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuiaVisaPagina from "@/components/GuiaVisaPagina";
import { GUIAS_VISA, buscarGuiaVisa, rutaGuiaVisa } from "@/lib/guias-visas-pais";
import { optimizarMetaDescriptionSEO, URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { robotsSegunRuta } from "@/lib/indexacion";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIAS_VISA.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = buscarGuiaVisa(slug);
  if (!g) return {};
  const url = `${URL_BASE_SEO}${rutaGuiaVisa(g)}`;
  const description = optimizarMetaDescriptionSEO(g.descripcion);
  return {
    title: g.tituloSeo,
    description,
    robots: robotsSegunRuta(rutaGuiaVisa(g)),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: g.tituloSeo,
      description,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [{ url: `${URL_BASE_SEO}/opengraph-image`, width: 1200, height: 630, alt: g.h1 }],
    },
    twitter: { card: "summary_large_image", title: g.tituloSeo, description, images: [`${URL_BASE_SEO}/opengraph-image`] },
  };
}

export default async function VisaGuiaPage({ params }: Props) {
  const { slug } = await params;
  const guia = buscarGuiaVisa(slug);
  if (!guia) notFound();
  return <GuiaVisaPagina guia={guia} />;
}
