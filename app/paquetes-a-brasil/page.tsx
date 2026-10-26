import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.brasil;

export const metadata = metadataHub(HUB);

export default function PaquetesBrasilPage() {
  return <HubPaisPagina hub={HUB} />;
}
