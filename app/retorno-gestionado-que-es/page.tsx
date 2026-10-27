import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.retornoGestionado;

export const metadata = metadataServicio(SERVICIO);

export default function RetornoGestionadoPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
