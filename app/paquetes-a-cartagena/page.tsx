import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.cartagena;

export const metadata = metadataHub(HUB);

export default function PaquetesCartagenaPage() {
  return <HubPaisPagina hub={HUB} />;
}
