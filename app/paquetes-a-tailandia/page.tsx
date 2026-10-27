import CircuitosHubPagina, { metadataHubCircuitos } from "@/components/CircuitosHubPagina";
import { buscarHubCircuitos } from "@/lib/hubs-circuitos";

export const revalidate = 86400;

const HUB = buscarHubCircuitos("/paquetes-a-tailandia");

export const metadata = metadataHubCircuitos(HUB);

export default function PaquetesATailandiaPage() {
  return <CircuitosHubPagina hub={HUB} />;
}
