import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingEspanaPagina, { metadataLandingEspana } from "@/components/LandingEspanaPagina";
import { LANDINGS_ESPANA, buscarLandingEspana } from "@/lib/landings-espana";

export const dynamicParams = false;

// Estudiantes y reagrupación muestran el precio del solo ida, que cambia por mes.
export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LANDINGS_ESPANA.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = buscarLandingEspana((await params).slug);
  return l ? metadataLandingEspana(l) : {};
}

export default async function LandingEspanaPage({ params }: Props) {
  const l = buscarLandingEspana((await params).slug);
  if (!l) notFound();
  return <LandingEspanaPagina landing={l} />;
}
