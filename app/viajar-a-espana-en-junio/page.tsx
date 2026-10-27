import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("junio");

export const metadata = metadataTemporada(MES);

export default function EspanaJunioPage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
