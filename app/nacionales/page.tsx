import HubPaisPagina, { metadataHub } from "@/components/HubPaisPagina";
import { HUBS_PAIS } from "@/lib/hubs-pais";

// Antes repetía el contenido de /peru con otra URL; ahora es la página de todos los paquetes del Perú.
const HUB = HUBS_PAIS.peru;

// Sin esto la página quedaba fija al día del despliegue y seguía mostrando salidas ya pasadas.
export const revalidate = 86400;

export const metadata = metadataHub(HUB);

export default function NacionalesPage() {
  return <HubPaisPagina hub={HUB} />;
}
