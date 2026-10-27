import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { TEMPORADAS_ESPANA } from "@/lib/temporadas-espana";

const TEMPORADA = TEMPORADAS_ESPANA.semanaSanta;

export const metadata = metadataTemporada(TEMPORADA);

export default function SemanaSantaEspanaPage() {
  return <TemporadaEspanaPagina temporada={TEMPORADA} />;
}
