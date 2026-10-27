import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.soloIdaEspana;

export const metadata = metadataServicio(SERVICIO);

export default function PasajeSoloIdaEspanaPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
