import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import CircuitoPagina, { metadataCircuito } from "@/components/CircuitoPagina";
import { buscarCircuito, circuitosVigentes } from "@/lib/circuitos";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return circuitosVigentes().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = buscarCircuito((await params).slug);
  return c ? metadataCircuito(c) : {};
}

// Un circuito cuya última salida ya pasó lleva a la vitrina de circuitos.
export default async function CircuitoPage({ params }: Props) {
  const c = buscarCircuito((await params).slug);
  if (!c) permanentRedirect("/circuitos");
  return <CircuitoPagina circuito={c} />;
}
