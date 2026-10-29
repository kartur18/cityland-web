import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import DestinoHotelesPagina, { metadataDestinoHoteles } from "@/components/hoteles-turbo/DestinoHotelesPagina";
import { DESTINOS_HOTEL, destinosConHoteles } from "@/lib/hoteles-turbo";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ destino: string }> };

export function generateStaticParams() {
  return destinosConHoteles().map((d) => ({ destino: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = DESTINOS_HOTEL[(await params).destino];
  return d ? metadataDestinoHoteles(d) : {};
}

export default async function DestinoHotelesPage({ params }: Props) {
  const d = DESTINOS_HOTEL[(await params).destino];
  if (!d || !destinosConHoteles().some((x) => x.slug === d.slug)) permanentRedirect("/hoteles-en");
  return <DestinoHotelesPagina destino={d} />;
}
