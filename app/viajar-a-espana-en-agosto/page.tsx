import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("agosto");

export const metadata = metadataTemporada(MES);

export default function EspanaAgostoPage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
