import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.puntaCana;

export const metadata = metadataHub(HUB);

export default function PaquetesPuntaCanaPage() {
  return <HubPaisPagina hub={HUB} />;
}
