import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.todoIncluido;

export const metadata = metadataHub(HUB);

export default function PaquetesTodoIncluidoPage() {
  return <HubPaisPagina hub={HUB} />;
}
