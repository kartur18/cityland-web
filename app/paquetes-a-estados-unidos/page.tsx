import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.estadosUnidos;

export const metadata = metadataHub(HUB);

export default function PaquetesEstadosUnidosPage() {
  return <HubPaisPagina hub={HUB} />;
}
