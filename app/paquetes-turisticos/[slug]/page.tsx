import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import PaquetePagina, { metadataPaqueteTuristico } from "@/components/paquetes-turisticos/PaquetePagina";
import PaisPagina, { metadataPais } from "@/components/paquetes-turisticos/PaisPagina";
import { PAISES, buscarPaqueteTuristico, paisesConPaquetes, paquetesTuristicos } from "@/lib/paquetes-turisticos";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...paisesConPaquetes().map((x) => ({ slug: x.slug })), ...paquetesTuristicos().map((p) => ({ slug: p.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pais = PAISES[slug];
  if (pais && paisesConPaquetes().some((x) => x.slug === slug)) return metadataPais(pais);
  const p = buscarPaqueteTuristico(slug);
  return p ? metadataPaqueteTuristico(p) : {};
}

// Un mismo segmento sirve a la página del país (/paquetes-turisticos/colombia) y a la de cada paquete; si el paquete ya
// no está en el catálogo, lleva a la vitrina.
export default async function PaqueteTuristicoPage({ params }: Props) {
  const { slug } = await params;
  const pais = PAISES[slug];
  if (pais && paisesConPaquetes().some((x) => x.slug === slug)) return <PaisPagina pais={pais} />;
  const p = buscarPaqueteTuristico(slug);
  if (!p) permanentRedirect("/paquetes-turisticos");
  return <PaquetePagina paquete={p} />;
}
