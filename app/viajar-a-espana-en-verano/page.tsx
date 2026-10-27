import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { TEMPORADAS_ESPANA } from "@/lib/temporadas-espana";

const TEMPORADA = TEMPORADAS_ESPANA.verano;

export const metadata = metadataTemporada(TEMPORADA);

export default function VeranoEspanaPage() {
  return <TemporadaEspanaPagina temporada={TEMPORADA} />;
}
