import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.feriados;

export const metadata = metadataServicio(SERVICIO);

export default function FeriadosLargosPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
