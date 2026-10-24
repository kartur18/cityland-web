import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.institutos;

export const metadata = metadataServicio(SERVICIO);

export default function InstitutosPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
