import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PaginaItalia, { metadataLandingItalia } from "@/components/landing-italia/PaginaItalia";
import { LANDINGS_ITALIA, buscarLandingItalia } from "@/lib/italia/landings";

export const dynamicParams = false;

// Los precios por mes se recalculan una vez al día.
export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LANDINGS_ITALIA.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = buscarLandingItalia((await params).slug);
  return l ? metadataLandingItalia(l) : {};
}

export default async function LandingItaliaPage({ params }: Props) {
  const l = buscarLandingItalia((await params).slug);
  if (!l) notFound();
  return <PaginaItalia landing={l} />;
}
