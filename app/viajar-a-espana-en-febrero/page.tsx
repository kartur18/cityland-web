import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("febrero");

export const metadata = metadataTemporada(MES);

export default function EspanaFebreroPage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
