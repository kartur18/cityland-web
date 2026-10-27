import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.panama;

export const metadata = metadataHub(HUB);

export default function PaquetesPanamaPage() {
  return <HubPaisPagina hub={HUB} />;
}
