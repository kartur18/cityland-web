import { GUIAS_VISA_DATOS } from "@/lib/guias-visas-pais-datos";

// Guías de visa por país y tipo (turismo, estudios, trabajo) para peruanos. Cada dato sale de una fuente oficial del
// país (listada en cada guía) y lleva su fecha de consulta: los requisitos de visa cambian y la gente decide viajes
// y dinero con ellos. Creadas el 10-nov-2026.

export type TipoVisa = "turismo" | "estudios" | "trabajo";

export const NOMBRE_TIPO_VISA: Record<TipoVisa, string> = {
  turismo: "Turismo",
  estudios: "Estudios",
  trabajo: "Trabajo",
};

export interface SeccionGuiaVisa {
  titulo: string;
  parrafos?: string[];
  lista?: string[];
  pasos?: string[];
}

export interface GuiaVisa {
  slug: string;
  pais: string;
  tipo: TipoVisa;
  h1: string;
  // Título para Google: ≤ 48 caracteres para que quepa con la marca.
  tituloSeo: string;
  descripcion: string;
  actualizado: string;
  fechaIso: string;
  respuestaCorta: string[];
  secciones: SeccionGuiaVisa[];
  faqs: { q: string; a: string }[];
  fuentes: { nombre: string; url: string }[];
  mensajeWhatsApp: string;
}

export const GUIAS_VISA: readonly GuiaVisa[] = GUIAS_VISA_DATOS;

export const rutaGuiaVisa = (g: Pick<GuiaVisa, "slug">) => `/visas/${g.slug}`;

export function buscarGuiaVisa(slug: string): GuiaVisa | undefined {
  return GUIAS_VISA.find((g) => g.slug === slug);
}

// Países en el orden en que aparecen en el índice de /visas.
export function guiasVisaPorPais(): { pais: string; guias: GuiaVisa[] }[] {
  const orden: string[] = [];
  for (const g of GUIAS_VISA) if (!orden.includes(g.pais)) orden.push(g.pais);
  const tipos: TipoVisa[] = ["turismo", "estudios", "trabajo"];
  return orden.map((pais) => ({
    pais,
    guias: GUIAS_VISA.filter((g) => g.pais === pais).sort((a, b) => tipos.indexOf(a.tipo) - tipos.indexOf(b.tipo)),
  }));
}
