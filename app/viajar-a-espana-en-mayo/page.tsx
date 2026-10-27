import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("mayo");

export const metadata = metadataTemporada(MES);

export default function EspanaMayoPage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
