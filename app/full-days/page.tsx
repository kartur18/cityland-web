import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.fullDays;

export const metadata = metadataServicio(SERVICIO);

export default function FullDaysPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
