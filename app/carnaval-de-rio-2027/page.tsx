import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { TEMPORADAS_RIO } from "@/lib/temporadas-rio";

const TEMPORADA = TEMPORADAS_RIO.carnaval;

export const metadata = metadataTemporada(TEMPORADA);

export default function CarnavalRioPage() {
  return <TemporadaEspanaPagina temporada={TEMPORADA} />;
}
