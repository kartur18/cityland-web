// Mensaje del cotizador rápido: una frase natural que la asesora y la IA leen igual que si la escribiera el cliente.

const MESES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export const PASAJEROS_OPCIONES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10 o más"] as const;

// Los próximos 12 meses en hora de Lima ("diciembre de 2026"), empezando por el actual.
export function proximosMesesLima(ahora: Date): string[] {
  const [anio, mes] = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Lima", year: "numeric", month: "2-digit" })
    .format(ahora)
    .split("-")
    .map(Number);
  return Array.from({ length: 12 }, (_, i) => {
    const indice = mes - 1 + i;
    return `${MESES[indice % 12]} de ${anio + Math.floor(indice / 12)}`;
  });
}

export function armarMensajeCotizacion({
  destino,
  mes,
  pasajeros,
}: {
  destino: string;
  mes: string;
  pasajeros: string;
}): string {
  const partes = ["¡Hola Cityland Travel! Quiero cotizar un viaje"];
  const lugar = destino.replace(/\s+/g, " ").trim();
  if (lugar) partes.push(`a ${lugar}`);
  if (pasajeros === "1") partes.push("para 1 persona");
  else if (pasajeros === "10 o más") partes.push("para 10 personas o más");
  else if (pasajeros) partes.push(`para ${pasajeros} personas`);
  if (mes === "aun-no-se") partes.push("y aún no tengo fecha");
  else if (mes) partes.push(`en ${mes}`);
  return `${partes.join(" ")}.`;
}
