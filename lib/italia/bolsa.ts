// Medios de subsistencia (bolsa de viaje) para entrar a Italia como turista: tabla del Ministerio de Asuntos
// Exteriores basada en la Direttiva del Ministero dell'Interno del 1-mar-2000 (consulta: 28-oct-2026).

export const FUENTE_BOLSA = {
  texto: "Ministero degli Affari Esteri: tabla de medios de subsistencia (Direttiva 1-mar-2000)",
  url: "https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/mezzi_finanziari/tabella_mezzi_sussistenza/",
};

// Venta del euro, BCRP, 27-oct-2026.
export const SOLES_POR_EURO = 3.874;

// Monto total por persona según los días de viaje. Para grupos de 2 o más no hay dato oficial del monto diario
// en viajes de más de 20 días: devuelve null.
export function bolsaItalia(dias: number, grupo = false): number | null {
  if (dias <= 5) return grupo ? 212.81 : 269.6;
  if (dias <= 10) return (grupo ? 26.33 : 44.93) * dias;
  if (dias <= 20) return grupo ? 25.82 + 22.21 * dias : 51.64 + 36.67 * dias;
  return grupo ? null : 206.58 + 27.89 * dias;
}

export const euros = (n: number) => `${n.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
export const soles = (n: number) => `S/ ${Math.round(n * SOLES_POR_EURO).toLocaleString("en-US")}`;

export function filaBolsa(dias: number, grupo = false): string[] {
  const m = bolsaItalia(dias, grupo);
  return [`${dias} días`, m === null ? "Sin dato oficial" : euros(m), m === null ? "—" : `aprox. ${soles(m)}`];
}
