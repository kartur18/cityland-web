import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.visaAmericana;

export const metadata = metadataServicio(SERVICIO);

export default function VisaAmericanaPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
