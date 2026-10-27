import CircuitosHubPagina, { metadataHubCircuitos } from "@/components/CircuitosHubPagina";
import { buscarHubCircuitos } from "@/lib/hubs-circuitos";

export const revalidate = 86400;

const HUB = buscarHubCircuitos("/circuitos-por-europa");

export const metadata = metadataHubCircuitos(HUB);

export default function CircuitosPorEuropaPage() {
  return <CircuitosHubPagina hub={HUB} />;
}
