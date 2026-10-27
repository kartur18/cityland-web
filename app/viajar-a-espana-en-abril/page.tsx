import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("abril");

export const metadata = metadataTemporada(MES);

export default function EspanaAbrilPage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
