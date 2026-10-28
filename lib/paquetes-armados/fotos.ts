import MEDIOS from "@/lib/paquetes-armados/medios.json";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import type { Circuito } from "@/lib/circuitos";

// Fotos y videos de los paquetes armados. Cada programa del mayorista trae su portada (descargada en
// public/images/mt y comprimida) y algunos un video del recorrido en su CDN. Lo que falta se completa con la
// galería de la web por destino. Se quitaron las portadas que decían «2x1» (prometían una promo que no damos).
// Los flyers vienen de Café del mayorista (28-oct-2026), recortados arriba: arte y título sin su precio ni su código.

const PORTADAS = MEDIOS.portadas as Record<string, string>;
const VIDEOS = MEDIOS.videos as Record<string, string>;
const FLYERS = MEDIOS.flyers as Record<string, string>;

export function portadaDe(c: Circuito): string {
  return FLYERS[c.mt] ?? PORTADAS[c.mt] ?? obtenerGaleriaPorTexto(`${c.ciudades.slice(0, 3).join(" ")} ${c.paises.join(" ")}`)[0];
}

export function videoDe(c: Circuito): string | undefined {
  return VIDEOS[c.mt];
}

// Hasta `n` fotos sin repetir: primero los flyers y portadas de los programas, luego la galería del destino.
export function fotosPara(programas: Circuito[], texto: string, n = 5): string[] {
  const fotos: string[] = [];
  const sumar = (f: string | undefined) => {
    if (f && !fotos.includes(f) && fotos.length < n) fotos.push(f);
  };
  for (const c of programas) sumar(FLYERS[c.mt] ?? PORTADAS[c.mt]);
  for (const f of obtenerGaleriaPorTexto(texto)) sumar(f);
  for (const c of programas) for (const f of obtenerGaleriaPorTexto(`${c.ciudades.slice(0, 3).join(" ")} ${c.paises.join(" ")}`)) sumar(f);
  return fotos;
}

export function primerVideo(programas: Circuito[]): { url: string; circuito: Circuito } | undefined {
  const c = programas.find((x) => VIDEOS[x.mt]);
  return c ? { url: VIDEOS[c.mt], circuito: c } : undefined;
}

export const absoluta = (src: string, base: string) => (src.startsWith("http") ? src : `${base}${src}`);
