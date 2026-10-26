import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.colombia;

export const metadata = metadataHub(HUB);

export default function PaquetesColombiaPage() {
  return <HubPaisPagina hub={HUB} />;
}
