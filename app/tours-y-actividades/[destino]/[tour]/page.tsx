import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import TourPagina, { metadataTour } from "@/components/tours-turbo/TourPagina";
import { buscarTour, destinosConTours, toursDe } from "@/lib/tours-turbo";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ destino: string; tour: string }> };

// Son más de 3,000 fichas: en el build solo se arma el tour más barato de cada destino; el resto se genera la primera
// vez que alguien (o Google) lo pide y queda en caché un día.
export function generateStaticParams() {
  return destinosConTours().map((d) => ({ destino: d.slug, tour: toursDe(d.slug)[0].s }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { destino, tour } = await params;
  const t = buscarTour(destino, tour);
  return t ? metadataTour(t) : {};
}

export default async function TourPage({ params }: Props) {
  const { destino, tour } = await params;
  const t = buscarTour(destino, tour);
  if (!t) permanentRedirect(`/tours-y-actividades/${destino}`);
  return <TourPagina tour={t} />;
}
