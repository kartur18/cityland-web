import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("enero");

export const metadata = metadataTemporada(MES);

export default function EspanaEneroPage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
