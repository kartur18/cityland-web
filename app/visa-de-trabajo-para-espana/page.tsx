import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.visaTrabajoEspana;

export const metadata = metadataServicio(SERVICIO);

export default function VisaTrabajoEspanaPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
