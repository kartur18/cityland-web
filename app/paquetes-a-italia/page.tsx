import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";
import IndiceItalia from "@/components/landing-italia/IndiceItalia";

const HUB = HUBS_PAIS.italia;

// Sin esto la página quedaba fija al día del despliegue y seguía mostrando salidas ya pasadas.
export const revalidate = 86400;

export const metadata = metadataHub(HUB);

export default function PaquetesItaliaPage() {
  return <HubPaisPagina hub={HUB} extra={<IndiceItalia />} />;
}
