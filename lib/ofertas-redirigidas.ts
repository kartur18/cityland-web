// Siguen en el catálogo pero next.config.ts las redirige (lo que no se vende): no se enlazan entre ofertas (10-nov-2026).
const REDIRIGIDAS_EN_CONFIG =
  /^(vuelo-mas-hotel-a-paracas|estadia-hotel-.*paracas.*-vuelo-incluido|(grupos|paquetes|cotizacion|organizacion|preventa)-viajes-para-(clubes-de-futbol-torneos|hinchas-partidos-y-mundial))$/;

export function ofertaRedirigida(slug: string): boolean {
  return REDIRIGIDAS_EN_CONFIG.test(slug);
}
