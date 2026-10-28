import type { Metadata } from "next";
import LandingEspanaPagina, { metadataLandingEspana } from "@/components/LandingEspanaPagina";
import { hermanasSoloIda, landingsSoloIda } from "@/lib/landings-solo-ida";

// Se regenera cada día: el calendario y el aviso de «fecha cercana» siguen la fecha de Lima.
export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return metadataLandingEspana(landingsSoloIda()[0]);
}

export default function SoloIdaPage() {
  return <LandingEspanaPagina landing={landingsSoloIda()[0]} hermanas={hermanasSoloIda()} />;
}
