import TemporadaEspanaPagina, { metadataTemporada } from "@/components/TemporadaEspanaPagina";
import { buscarMesEspana } from "@/lib/meses-espana";

const MES = buscarMesEspana("marzo");

export const metadata = metadataTemporada(MES);

export default function EspanaMarzoPage() {
  return <TemporadaEspanaPagina temporada={MES} />;
}
