import type { GrupoSeguro, LandingSeguro } from "@/lib/seguros/tipos";
import { landingsDestinos } from "@/lib/seguros/destinos";
import { landingsPerfiles } from "@/lib/seguros/perfiles";
import { landingsDudas } from "@/lib/seguros/dudas";

// Todas las páginas de seguros de viaje (/seguros/<slug>). Cada familia vive en su propio archivo.

export const NOMBRE_GRUPO_SEGURO: Record<GrupoSeguro, string> = {
  destino: "Seguro por destino",
  perfil: "Seguro según quién viaja",
  duda: "Dudas del seguro",
};

export const LANDINGS_SEGUROS: readonly LandingSeguro[] = [...landingsDestinos(), ...landingsPerfiles(), ...landingsDudas()];

export const rutaLandingSeguro = (l: Pick<LandingSeguro, "slug">) => `/seguros/${l.slug}`;

export function buscarLandingSeguro(slug: string): LandingSeguro | undefined {
  return LANDINGS_SEGUROS.find((l) => l.slug === slug);
}

// Guía de requisitos (/viajes/<slug>) → su página de seguro, para enlazarlas.
export const SEGURO_DE_GUIA: Record<string, string> = {
  "requisitos-viajar-a-espana-desde-peru": "seguro-de-viaje-espana",
  "requisitos-viajar-a-italia-desde-peru": "seguro-de-viaje-italia",
  "requisitos-viajar-a-francia-desde-peru": "seguro-de-viaje-francia",
  "requisitos-viajar-a-curazao-desde-peru": "seguro-de-viaje-curazao",
  "requisitos-viajar-a-punta-cana-desde-peru": "seguro-de-viaje-punta-cana",
  "requisitos-viajar-a-dubai-desde-peru": "seguro-de-viaje-es-obligatorio",
};
