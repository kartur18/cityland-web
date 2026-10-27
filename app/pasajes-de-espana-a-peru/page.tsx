import ServicioPagina, { metadataServicio } from "@/components/ServicioPagina";
import { SERVICIOS } from "@/lib/servicios";

const SERVICIO = SERVICIOS.volverAPeru;

export const metadata = metadataServicio(SERVICIO);

export default function PasajesEspanaPeruPage() {
  return <ServicioPagina servicio={SERVICIO} />;
}
