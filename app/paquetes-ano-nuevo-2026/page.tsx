import CircuitosHubPagina, { metadataHubCircuitos } from "@/components/CircuitosHubPagina";
import { buscarHubCircuitos } from "@/lib/hubs-circuitos";

export const revalidate = 86400;

const HUB = buscarHubCircuitos("/paquetes-ano-nuevo-2026");

export const metadata = metadataHubCircuitos(HUB);

export default function PaquetesAnoNuevoPage() {
  return <CircuitosHubPagina hub={HUB} />;
}
