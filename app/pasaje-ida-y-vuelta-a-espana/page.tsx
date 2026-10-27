import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.idaVueltaEspana;

export const metadata = metadataServicio(SERVICIO);

export default function PasajeIdaVueltaEspanaPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
