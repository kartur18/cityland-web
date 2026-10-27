import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("octubre");

export const metadata = metadataTemporada(MES);

export default function EspanaOctubrePage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
