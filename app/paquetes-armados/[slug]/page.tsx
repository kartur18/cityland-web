import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import PaqueteCaribePagina, { metadataCaribe } from "@/components/paquetes-armados/PaqueteCaribePagina";
import { buscarPaginaCaribe, paginasCaribe } from "@/lib/paquetes-armados/paginas-caribe";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return paginasCaribe().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = buscarPaginaCaribe((await params).slug);
  return p ? metadataCaribe(p) : {};
}

// Si el último programa de la página venció, la página deja de existir y lleva a la vitrina de paquetes armados.
export default async function PaqueteArmadoPage({ params }: Props) {
  const p = buscarPaginaCaribe((await params).slug);
  if (!p) permanentRedirect("/paquetes-armados");
  return <PaqueteCaribePagina pagina={p} />;
}
