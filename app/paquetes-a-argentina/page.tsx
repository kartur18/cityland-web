import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.argentina;

export const metadata = metadataHub(HUB);

export default function PaquetesArgentinaPage() {
  return <HubPaisPagina hub={HUB} />;
}
