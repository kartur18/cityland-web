import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.mexico;

export const metadata = metadataHub(HUB);

export default function PaquetesMexicoPage() {
  return <HubPaisPagina hub={HUB} />;
}
