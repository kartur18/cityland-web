import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import SalidaPagina, { metadataSalida } from "@/components/paquetes-armados/SalidaPagina";
import SalidasMesPagina, { metadataMes } from "@/components/paquetes-armados/SalidasMesPagina";
import { buscarMes, buscarSalida, mesesConSalidas, salidasVigentes } from "@/lib/salidas";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...mesesConSalidas().map((m) => ({ slug: m.clave })), ...salidasVigentes().map((s) => ({ slug: s.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mes = buscarMes(slug);
  if (mes) return metadataMes(mes);
  const s = buscarSalida(slug);
  return s ? metadataSalida(s) : {};
}

// Un mes con salidas o una salida con fecha; cuando la fecha ya pasó, lleva al calendario de salidas.
export default async function SalidaPage({ params }: Props) {
  const { slug } = await params;
  const mes = buscarMes(slug);
  if (mes) return <SalidasMesPagina mes={mes} />;
  const s = buscarSalida(slug);
  if (!s) permanentRedirect("/salidas");
  return <SalidaPagina salida={s} />;
}
