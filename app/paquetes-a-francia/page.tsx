import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.francia;

export const metadata = metadataHub(HUB);

export default function PaquetesFranciaPage() {
  return <HubPaisPagina hub={HUB} />;
}
