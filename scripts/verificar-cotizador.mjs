// Verifica el mensaje del cotizador rápido: una frase natural con destino, pasajeros y mes, y los meses en hora de Lima.
// Uso: node --import ./scripts/_registrar-loader.mjs scripts/verificar-cotizador.mjs
const { armarMensajeCotizacion, proximosMesesLima } = await import(new URL("../lib/cotizador.ts", import.meta.url).href);

const casos = [
  [{ destino: "", mes: "", pasajeros: "" }, "¡Hola Cityland Travel! Quiero cotizar un viaje."],
  [{ destino: "  Madrid ", mes: "diciembre de 2026", pasajeros: "2" }, "¡Hola Cityland Travel! Quiero cotizar un viaje a Madrid para 2 personas en diciembre de 2026."],
  [{ destino: "Punta Cana", mes: "aun-no-se", pasajeros: "1" }, "¡Hola Cityland Travel! Quiero cotizar un viaje a Punta Cana para 1 persona y aún no tengo fecha."],
  [{ destino: "Cusco y Machu Picchu", mes: "", pasajeros: "10 o más" }, "¡Hola Cityland Travel! Quiero cotizar un viaje a Cusco y Machu Picchu para 10 personas o más."],
];
let fallas = 0;
for (const [entrada, esperado] of casos) {
  const real = armarMensajeCotizacion(entrada);
  if (real !== esperado) { fallas++; console.log("FALLA", JSON.stringify(entrada), "\n  esperado:", esperado, "\n  real:    ", real); }
}

// 31-dic 23:30 en Lima ya es 1-ene en UTC: el primer mes debe seguir siendo diciembre.
const meses = proximosMesesLima(new Date("2027-01-01T04:30:00Z"));
if (meses[0] !== "diciembre de 2026" || meses[1] !== "enero de 2027" || meses.length !== 12) {
  fallas++;
  console.log("FALLA meses en Lima:", meses.slice(0, 3));
}

console.log(fallas ? `${fallas} FALLAS` : "Todo OK");
process.exit(fallas ? 1 : 0);
