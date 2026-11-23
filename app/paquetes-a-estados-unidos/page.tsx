import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

const HUB = HUBS_PAIS.estadosUnidos;

// Sin esto la página quedaba fija al día del despliegue y seguía mostrando salidas ya pasadas.
export const revalidate = 86400;

export const metadata = metadataHub(HUB);

export default function PaquetesEstadosUnidosPage() {
  return <HubPaisPagina hub={HUB} />;
}
