import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingEspanaPagina, { metadataLandingEspana } from "@/components/LandingEspanaPagina";
import { RUTA_SOLO_IDA, buscarLandingSoloIda, hermanasSoloIda, landingsSoloIda } from "@/lib/landings-solo-ida";

// Se regenera cada día: el calendario y el aviso de «fecha cercana» siguen la fecha de Lima.
export const revalidate = 86400;
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return landingsSoloIda()
    .filter((l) => l.ruta !== RUTA_SOLO_IDA)
    .map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = buscarLandingSoloIda((await params).slug);
  return l ? metadataLandingEspana(l) : {};
}

export default async function LandingSoloIdaPage({ params }: Props) {
  const l = buscarLandingSoloIda((await params).slug);
  if (!l || l.ruta === RUTA_SOLO_IDA) notFound();
  return <LandingEspanaPagina landing={l} hermanas={hermanasSoloIda()} />;
}
