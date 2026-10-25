import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.adultosMayores;

export const metadata = metadataServicio(SERVICIO);

export default function ViajesAdultosMayoresPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
