import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import DestinoToursPagina, { metadataDestinoTours } from "@/components/tours-turbo/DestinoToursPagina";
import { DESTINOS_TOUR, destinosConTours } from "@/lib/tours-turbo";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ destino: string }> };

export function generateStaticParams() {
  return destinosConTours().map((d) => ({ destino: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = DESTINOS_TOUR[(await params).destino];
  return d ? metadataDestinoTours(d) : {};
}

export default async function DestinoToursPage({ params }: Props) {
  const d = DESTINOS_TOUR[(await params).destino];
  if (!d || !destinosConTours().some((x) => x.slug === d.slug)) permanentRedirect("/tours-y-actividades");
  return <DestinoToursPagina destino={d} />;
}
