import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";
import IndiceItalia from "@/components/landing-italia/IndiceItalia";

const HUB = HUBS_PAIS.italia;

export const metadata = metadataHub(HUB);

export default function PaquetesItaliaPage() {
  return <HubPaisPagina hub={HUB} extra={<IndiceItalia />} />;
}
