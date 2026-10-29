import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import HotelPagina, { metadataHotel } from "@/components/hoteles-turbo/HotelPagina";
import { buscarHotel, destinosConHoteles, hotelesDe } from "@/lib/hoteles-turbo";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ destino: string; hotel: string }> };

// Son ~1,500 fichas: en el build solo se arma el mejor hotel de cada destino; el resto se genera la primera vez que
// alguien (o Google) lo pide y queda en caché un día.
export function generateStaticParams() {
  return destinosConHoteles().map((d) => ({ destino: d.slug, hotel: hotelesDe(d.slug)[0].s }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { destino, hotel } = await params;
  const h = buscarHotel(destino, hotel);
  return h ? metadataHotel(h) : {};
}

export default async function HotelPage({ params }: Props) {
  const { destino, hotel } = await params;
  const h = buscarHotel(destino, hotel);
  if (!h) permanentRedirect(`/hoteles-en/${destino}`);
  return <HotelPagina hotel={h} />;
}
