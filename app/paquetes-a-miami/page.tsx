import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.miami;

export const metadata = metadataHub(HUB);

export default function PaquetesMiamiPage() {
  return <HubPaisPagina hub={HUB} />;
}
