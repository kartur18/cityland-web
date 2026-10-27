import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.sanAndres;

export const metadata = metadataHub(HUB);

export default function PaquetesSanAndresPage() {
  return <HubPaisPagina hub={HUB} />;
}
