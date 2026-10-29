import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("diciembre");

export const metadata = metadataTemporada(MES);

export default function EspanaDiciembrePage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
