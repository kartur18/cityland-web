import CircuitosHubPagina, { metadataHubCircuitos } from "@/components/CircuitosHubPagina";
import { buscarHubCircuitos } from "@/lib/hubs-circuitos";

export const revalidate = 86400;

const HUB = buscarHubCircuitos("/paquetes-a-china");

export const metadata = metadataHubCircuitos(HUB);

export default function PaquetesAChinaPage() {
  return <CircuitosHubPagina hub={HUB} />;
}
