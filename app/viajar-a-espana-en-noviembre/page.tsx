import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("noviembre");

export const metadata = metadataTemporada(MES);

export default function EspanaNoviembrePage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
