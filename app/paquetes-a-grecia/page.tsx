import CircuitosHubPagina, { metadataHubCircuitos } from "@/components/CircuitosHubPagina";
import { buscarHubCircuitos } from "@/lib/hubs-circuitos";

export const revalidate = 86400;

const HUB = buscarHubCircuitos("/paquetes-a-grecia");

export const metadata = metadataHubCircuitos(HUB);

export default function PaquetesAGreciaPage() {
  return <CircuitosHubPagina hub={HUB} />;
}
