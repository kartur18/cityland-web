import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("septiembre");

export const metadata = metadataTemporada(MES);

export default function EspanaSeptiembrePage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
