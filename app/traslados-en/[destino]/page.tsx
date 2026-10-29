import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import DestinoTrasladoPagina, { metadataDestinoTraslado } from "@/components/traslados-turbo/DestinoTrasladoPagina";
import { buscarTraslado, destinosConTraslados } from "@/lib/traslados-turbo";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ destino: string }> };

export function generateStaticParams() {
  return destinosConTraslados().map((d) => ({ destino: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = buscarTraslado((await params).destino);
  return d ? metadataDestinoTraslado(d) : {};
}

export default async function DestinoTrasladoPage({ params }: Props) {
  const d = buscarTraslado((await params).destino);
  if (!d) permanentRedirect("/traslados-en");
  return <DestinoTrasladoPagina destino={d} />;
}
