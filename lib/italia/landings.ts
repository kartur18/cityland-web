import type { GrupoItalia, LandingItalia } from "@/lib/italia/tipos";
import { landingsRutasIda } from "@/lib/italia/rutas-ida";
import { landingsRegreso } from "@/lib/italia/rutas-regreso";
import { landingsGuias } from "@/lib/italia/guias";
import { landingsTramites } from "@/lib/italia/guias-tramites";
import { landingsMeses } from "@/lib/italia/meses";
import { landingsFiestas } from "@/lib/italia/fiestas";
import { landingsCombinados } from "@/lib/italia/combinados";

// Todas las landings de Italia (/italia/<slug>). Cada familia vive en su propio archivo.

export const NOMBRE_GRUPO: Record<GrupoItalia, string> = {
  ida: "Pasajes de Lima a Italia",
  provincia: "Desde tu ciudad a Italia",
  regreso: "Pasajes de Italia a Lima",
  regresoTema: "Volver a Perú desde Italia",
  guia: "Guías y requisitos",
  mes: "Italia mes a mes",
  fiesta: "Fiestas de Italia",
  combinado: "Italia con otros países",
};

export const LANDINGS_ITALIA: readonly LandingItalia[] = [
  ...landingsRutasIda(),
  ...landingsRegreso(),
  ...landingsGuias(),
  ...landingsTramites(),
  ...landingsMeses(),
  ...landingsFiestas(),
  ...landingsCombinados(),
];

const POR_SLUG = new Map(LANDINGS_ITALIA.map((l) => [l.slug, l]));

export function buscarLandingItalia(slug: string): LandingItalia | undefined {
  return POR_SLUG.get(slug);
}

export function rutaLandingItalia(l: Pick<LandingItalia, "slug">): string {
  return `/italia/${l.slug}`;
}
