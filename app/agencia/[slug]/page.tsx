import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
    title: "Agencia de Viajes Cityland Travel — Vuelos, Caribe Todo Incluido y Europa",
    description:
      "Agencia de viajes formal en Lima (RUC 20614914239). Paquetes Todo Incluido a Punta Cana, Cancún, Cartagena, Cusco y vuelos a España con carpeta migratoria. Separa con el 50%.",
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: "Agencia de Viajes Cityland Travel — Vuelos, Caribe Todo Incluido y Europa",
      description:
        "Agencia de viajes formal en Lima (RUC 20614914239). Paquetes Todo Incluido a Punta Cana, Cancún, Cartagena, Cusco y vuelos a España con carpeta migratoria.",
      siteName: "Cityland Travel",
      locale: "es_PE",
    },
  };
}

export default async function AgenciaLocalSlugPage({ params }: Props) {
  const { slug } = await params;
  const agencia = buscarAgenciaLocal(slug);
  if (!agencia) notFound();

  const config = obtenerConfigAgenciaOficial(agencia.zona);
  return <AirlineLandingTemplate config={config} />;
}
