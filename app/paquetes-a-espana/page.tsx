import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.espana;

export const metadata = metadataHub(HUB);

export default function PaquetesAEspanaPage() {
  return <HubPaisPagina hub={HUB} />;
}
