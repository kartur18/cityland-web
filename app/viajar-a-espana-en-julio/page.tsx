import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("julio");

export const metadata = metadataTemporada(MES);

export default function EspanaJulioPage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
