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
