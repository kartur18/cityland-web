import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PaginaSeguro, { metadataLandingSeguro } from "@/components/seguros/PaginaSeguro";
import { LANDINGS_SEGUROS, buscarLandingSeguro } from "@/lib/seguros/landings";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LANDINGS_SEGUROS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = buscarLandingSeguro((await params).slug);
  return l ? metadataLandingSeguro(l) : {};
}

export default async function LandingSeguroPage({ params }: Props) {
  const l = buscarLandingSeguro((await params).slug);
  if (!l) notFound();
  return <PaginaSeguro landing={l} />;
}
