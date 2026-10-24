import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.tours;

export const metadata = metadataServicio(SERVICIO);

export default function ToursPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
