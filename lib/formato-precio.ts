// Regla del dueno: todo precio publico dice "Desde" y deja claro que es referencial. Un solo lugar para formatearlo.

export const NOTA_PRECIO_REFERENCIAL = "Precio referencial por persona; varía según fecha y disponibilidad.";
// Para servicios o montos que no son "por persona" (seguro, check-in, grupos).
export const NOTA_PRECIO_REFERENCIAL_GENERAL = "Precio referencial; varía según fecha y disponibilidad.";
// Reemplaza a "Impuestos incluidos": solo afirma lo que sabemos.
export const NOTA_IMPUESTOS_REFERENCIAL = "Precio referencial; impuestos y tasas según fecha y aerolínea.";

// Monto en dolares con el estilo de la web: $1,090
export function formatoUSD(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

// "Desde $1,090" para etiquetas, tarjetas, barras fijas y enlaces.
export function precioDesde(n: number): string {
  return `Desde ${formatoUSD(n)}`;
}

// "desde $1,090" para frases corridas (metas, descripciones, mensajes de WhatsApp).
export function precioDesdeFrase(n: number): string {
  return `desde ${formatoUSD(n)}`;
}

// Un monto: "$699", "US$ 1,090" o "699 USD". Misma forma que usa scripts/verificar-desde.mjs.
const RE_MONTO = /(?:US\$|\$)\s?\d[\d.,]*(?:\s?USD)?|\d[\d.,]*\s?(?:USD|dólares|dolares)\b/gi;
const VENTANA_DESDE = 40;
// Cobertura de seguro o fondos (US$ 30,000 / 50,000): no es un precio de venta.
const MONTO_MAXIMO_DE_PRECIO = 10000;
function esMontoDeCobertura(monto: string): boolean {
  const n = Number(monto.replace(/[^\d.,]/g, "").replace(/,/g, ""));
  return Number.isFinite(n) && n >= MONTO_MAXIMO_DE_PRECIO;
}
// Entre dos montos de una misma lista ("$699, $799 y $899"; "de $699 a $999") el "desde" del primero cubre a los demas.
const UNION_DE_LISTA = /^[\s,;·|/–-]*(?:(?:y|o|e|a|hasta)\s+)?$/i;

// Red de seguridad para textos generados (metas, FAQ, descripciones): antepone "desde" a cada monto que no lo tenga.
// Los componentes y helpers dedicados ya usan precioDesde(); esto cubre las frases libres de los catalogos.
export function asegurarDesde(texto: string): string {
  if (!texto || !/\d/.test(texto)) return texto;
  let salida = "";
  let cursor = 0;
  let finCubierto = -1;

  for (const m of texto.matchAll(RE_MONTO)) {
    const idx = m.index ?? 0;
    if (esMontoDeCobertura(m[0])) continue;
    const antes = texto.slice(Math.max(0, idx - VENTANA_DESDE), idx);
    const pos = antes.toLowerCase().lastIndexOf("desde");
    const yaTieneDesde = pos >= 0 && !new RegExp(RE_MONTO.source, "i").test(antes.slice(pos + 5));
    const enLista = finCubierto >= 0 && UNION_DE_LISTA.test(texto.slice(finCubierto, idx));

    salida += texto.slice(cursor, idx);
    cursor = idx;
    finCubierto = idx + m[0].length;
    if (yaTieneDesde || enLista) continue;

    // "Separa con $350" -> "Separa desde $350"; "plan de $699" -> "plan desde $699"; el resto antepone "desde ".
    const reSepara = /(Separa(?:\s+hoy)?|separa(?:\s+hoy)?)\s+con\s+$/;
    if (reSepara.test(salida)) {
      salida = salida.replace(reSepara, "$1 desde ");
    } else if (/\b[Dd]e\s+$/.test(salida)) {
      salida = salida.replace(/\b([Dd])e(\s+)$/, (_t, d: string, e: string) => `${d}esde${e}`);
    } else {
      const iniciaFrase = /(^|[.!?¿¡:]\s+|\n\s*)$/.test(salida);
      salida += iniciaFrase ? "Desde " : "desde ";
    }
  }
  return salida + texto.slice(cursor);
}

// Para etiquetas de enlace que ya muestran el precio en una "chapa" aparte: quita "($899)" o "Desde $699" del titulo
// y, si queda otro monto en la frase, lo deja con "desde".
export function quitarPrecioDeTitulo(titulo: string): string {
  const limpio = titulo
    .replace(/\s*\((?:desde\s+)?(?:US\$|\$)\s?\d[\d.,]*(?:\s?USD)?\)/gi, "")
    .replace(/\s*[—–-]?\s*\bdesde\s+(?:US\$|\$)\s?\d[\d.,]*(?:\s?USD)?/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  return asegurarDesde(limpio);
}

// Cambia afirmaciones que suenan a monto definitivo por la forma referencial. No inventa inclusiones: solo las retira.
export function suavizarPromesaDePrecio(texto: string): string {
  return texto
    .replace(
      /Tarifa (?:por pasajero|promocional verificada)\s*(?:[·(-]\s*)*\(?\s*Impuestos incluidos\s*\)?/gi,
      NOTA_IMPUESTOS_REFERENCIAL.replace(/\.$/, "")
    )
    .replace(/Incluyen impuestos y cargos obligatorios según el programa detallado\./gi, `${NOTA_IMPUESTOS_REFERENCIAL}`)
    .replace(/\bimpuestos incluidos\b/gi, "impuestos y tasas según fecha y aerolínea")
    .replace(/Precio más bajo garantizado/gi, "Tarifa de preventa sujeta a disponibilidad");
}

// Texto de precio para pantalla, metas y JSON-LD: sin "USD" repetido, sin promesas de monto final y con "desde".
export function textoPrecio(texto: string): string {
  return asegurarDesde(suavizarPromesaDePrecio(texto.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")));
}
