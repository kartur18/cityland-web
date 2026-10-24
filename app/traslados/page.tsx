import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.traslados;

export const metadata = metadataServicio(SERVICIO);

export default function TrasladosPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
