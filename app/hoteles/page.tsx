import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.hoteles;

export const metadata = metadataServicio(SERVICIO);

export default function HotelesPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
