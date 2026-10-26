import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.chile;

export const metadata = metadataHub(HUB);

export default function PaquetesChilePage() {
  return <HubPaisPagina hub={HUB} />;
}
