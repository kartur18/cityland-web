import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.aruba;

export const metadata = metadataHub(HUB);

export default function PaquetesArubaPage() {
  return <HubPaisPagina hub={HUB} />;
}
