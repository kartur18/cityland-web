import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { TEMPORADAS_RIO } from "@/lib/temporadas-rio";

const TEMPORADA = TEMPORADAS_RIO.cuandoIr;

export const metadata = metadataTemporada(TEMPORADA);

export default function CuandoViajarRioPage() {
  return <TemporadaEspanaPagina temporada={TEMPORADA} />;
}
