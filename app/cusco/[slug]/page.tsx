import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CuscoLandingPagina, { metadataLandingCusco } from "@/components/CuscoLandingPagina";
import { LANDINGS_CUSCO, buscarLandingCusco } from "@/lib/landings-cusco-practico";

export const dynamicParams = false;
export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LANDINGS_CUSCO.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = buscarLandingCusco((await params).slug);
  return l ? metadataLandingCusco(l) : {};
}

export default async function LandingCuscoPage({ params }: Props) {
  const l = buscarLandingCusco((await params).slug);
  if (!l) notFound();
  return <CuscoLandingPagina landing={l} />;
}
