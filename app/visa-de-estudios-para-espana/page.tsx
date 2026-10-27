import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.visaEstudiosEspana;

export const metadata = metadataServicio(SERVICIO);

export default function VisaEstudiosEspanaPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
