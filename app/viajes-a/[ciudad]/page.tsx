import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import CircuitosHubPagina, { metadataHubCircuitos } from "@/components/CircuitosHubPagina";
import { buscarHubCiudad, ciudadesConProgramas } from "@/lib/hubs-ciudades";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ ciudad: string }> };

export function generateStaticParams() {
  return ciudadesConProgramas().map((h) => ({ ciudad: h.ruta.split("/").pop() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const h = buscarHubCiudad((await params).ciudad);
  return h ? metadataHubCircuitos(h) : {};
}

// Ciudad sin página (o que se quedó sin programas vigentes): a la vitrina de circuitos.
export default async function ViajesACiudadPage({ params }: Props) {
  const h = buscarHubCiudad((await params).ciudad);
  if (!h || !ciudadesConProgramas().includes(h)) permanentRedirect("/circuitos");
  return <CircuitosHubPagina hub={h} />;
}
