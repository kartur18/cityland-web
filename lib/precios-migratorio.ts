// Tarifas del paquete migratorio (solo ida + gestión) por país. Único lugar donde se cambian; todo lo demás las lee de aquí.
import { formatoUSD } from "@/lib/formato-precio";

export interface TarifasMigratorio {
  promo: number;
  smart: number;
  plus: number;
  full: number;
}

export type NivelPlanMigratorio = keyof TarifasMigratorio;

// España y el resto de Europa (Alemania, Suiza, Portugal, Países Bajos, Bélgica).
export const TARIFAS_MIGRATORIO_BASE: TarifasMigratorio = { promo: 699, smart: 799, plus: 899, full: 999 };

// Decisión del dueño (oct-2026): el solo ida a Italia y Francia ya ronda US$ 550–660, por eso cada plan sube +150.
const TARIFAS_ITALIA_FRANCIA: TarifasMigratorio = { promo: 849, smart: 949, plus: 1049, full: 1149 };

export const TARIFAS_MIGRATORIO_POR_PAIS: Readonly<Record<string, TarifasMigratorio>> = {
  Italia: TARIFAS_ITALIA_FRANCIA,
  Francia: TARIFAS_ITALIA_FRANCIA,
};

export function tarifasMigratorio(pais: string): TarifasMigratorio {
  return TARIFAS_MIGRATORIO_POR_PAIS[pais] ?? TARIFAS_MIGRATORIO_BASE;
}

// Inicial para separar: la mitad redondeada hacia arriba (699 -> 350, 849 -> 425).
export function inicialSeparacion(precio: number): number {
  return Math.ceil(precio / 2);
}

// Referencia de un boleto redondo cerrado que se usa en los textos de ahorro.
const PASAJE_REDONDO_REFERENCIA_USD = 1500;

// Ahorro frente al redondo, redondeado hacia abajo a múltiplos de 50 (699 -> 800, 849 -> 650).
export function ahorroFrenteARedondo(precioPromo: number): number {
  return Math.floor((PASAJE_REDONDO_REFERENCIA_USD - precioPromo) / 50) * 50;
}

// "$699, $799, $899 y $999" para frases que ya llevan "desde" delante.
export function listaPreciosPlanes(t: TarifasMigratorio): string {
  return `${formatoUSD(t.promo)}, ${formatoUSD(t.smart)}, ${formatoUSD(t.plus)} y ${formatoUSD(t.full)}`;
}
