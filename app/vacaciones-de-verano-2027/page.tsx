import CircuitosHubPagina, { metadataHubCircuitos } from "@/components/CircuitosHubPagina";
import { buscarHubCircuitos } from "@/lib/hubs-circuitos";

export const revalidate = 86400;

const HUB = buscarHubCircuitos("/vacaciones-de-verano-2027");

export const metadata = metadataHubCircuitos(HUB);

export default function VacacionesDeVeranoPage() {
  return <CircuitosHubPagina hub={HUB} />;
}
