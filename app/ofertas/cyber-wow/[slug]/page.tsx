import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OfertaCyberWowPagina, { metadataOfertaCyberWow } from "@/components/OfertaCyberWowPagina";
import { buscarOfertaCyberWow, OFERTAS_CYBER_WOW } from "@/lib/ofertas-cyber-wow";

export const dynamicParams = false;
export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return OFERTAS_CYBER_WOW.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const o = buscarOfertaCyberWow((await params).slug);
  return o ? metadataOfertaCyberWow(o) : {};
}

export default async function OfertaCyberWowRoute({ params }: Props) {
  const o = buscarOfertaCyberWow((await params).slug);
  if (!o) notFound();
  return <OfertaCyberWowPagina o={o} />;
}
