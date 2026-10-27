import type { LandingComercialSEO } from "@/lib/catalogo-mil-landings-comerciales";

// Las ~19 mil ofertas salen de catálogos con multiplicadores (temporada, duración, preventa) que dejaban precios por
// debajo de lo que de verdad cuesta el viaje y atraían consultas imposibles de cerrar. Aquí, en un solo punto, se
// aplican pisos del mercado de Lima (Nuevo Mundo, Costamar, Full Viajes; oct-2026) y se quitan promesas sin respaldo.

// Precio mínimo «desde» por persona con vuelo desde Lima.
const PISOS: [RegExp, number][] = [
  [/turqu[ií]a|estambul|capadocia|dub[aá]i|egipto|el.?cairo|tierra.?santa|jerusal[eé]n|jap[oó]n|tokio|tailandia|bangkok/i, 2490],
  [/punta.?cana|bayah[ií]be|saman[aá]|puerto.?plata|santo.?domingo|dominicana/i, 1150],
  [/miami|orlando|disney|universal|nueva.?york|las.?vegas|los.?[aá]ngeles|california|washington/i, 1250],
  [/canc[uú]n|riviera.?maya|tulum|xcaret|playa.?del.?carmen|los.?cabos/i, 1100],
  [/aruba|curaz/i, 1050],
  // Río: pasaje ida y vuelta desde ~US$600 (Copa, SKY, LATAM; oct-2026); Carnaval y Año Nuevo cuestan mucho más.
  [/carnaval.{0,40}r[ií]o|r[ií]o.{0,40}carnaval/i, 2490],
  [/(reveillon|a[ñn]o.?nuevo|fin.?de.?a[ñn]o).{0,60}r[ií]o|r[ií]o.{0,60}(reveillon|a[ñn]o.?nuevo|fin.?de.?a[ñn]o)/i, 1550],
  [/r[ií]o.?de.?janeiro|b[uú]zios|arraial/i, 1190],
  [/florian[oó]polis|cambori[uú]|salvador.?de.?bah|gramado|canela/i, 900],
  [/san.?andr[eé]s/i, 850],
  [/cartagena|bar[uú]/i, 850],
  [/buenos.?aires|bariloche|calafate|mendoza|patagonia/i, 750],
];

// Lo que no es un paquete con vuelo: no se le aplica piso.
const NO_PAQUETE = /seguro|visa|traslado|asesoria|tramite|reserva-pnr|pnr-verificable|^(oferta-)?tour-|solo-hotel|corporativ|empresa|incentivo|convenio/;

// `slug` decide si es paquete; `texto` (slug + título + país) decide el destino.
export function pisoMercado(slug: string, texto: string): number {
  if (NO_PAQUETE.test(slug)) return 0;
  return PISOS.find(([re]) => re.test(texto))?.[1] ?? 0;
}

// Destinos del Perú a los que solo se llega por carretera desde Lima.
const SOLO_POR_CARRETERA = /paracas|huacachina|oxapampa|pozuzo|lunahuan|churin|huancaya|caral/i;

function redondear10(n: number): number {
  return Math.round(n / 10) * 10;
}

function ajustarTexto(t: string, factor: number, porCarretera: boolean): string {
  let s = t;
  if (factor > 1) {
    s = s.replace(/\$\s?(\d{1,3}(?:,\d{3})+|\d+)/g, (_m, num: string) => {
      const valor = Number(num.replace(/,/g, ""));
      if (valor < 100) return `$${num}`;
      const nuevo = redondear10(valor * factor);
      return `$${num.includes(",") ? nuevo.toLocaleString("en-US") : nuevo}`;
    });
  }
  s = s
    .replace(/(?<![-\w])garantizad(o|a|os|as)(?![-\w])/g, "confirmad$1")
    .replace(/(?<![-\w])Garantizad(o|a|os|as)(?![-\w])/g, "Confirmad$1")
    .replace(/Ahorra hasta \d+\s?%/g, "Precio especial");
  if (porCarretera) {
    s = s
      .replace(/Vuelo \+ Hotel/g, "Bus + Hotel")
      .replace(/vuelos? y hotel/gi, "bus y hotel")
      .replace(/boletos? a[eé]reos? ida y vuelta/gi, "bus turístico ida y vuelta")
      .replace(/vuelos? (confirmados?|ida y vuelta) desde Lima/gi, "transporte desde Lima")
      .replace(/vuelos? del paquete/gi, "transporte del paquete");
  }
  return s;
}

function recorrer<T>(valor: T, f: (s: string) => string, factor: number, clave = ""): T {
  if (typeof valor === "string") return (clave === "slug" || clave === "href" || clave === "img" ? valor : f(valor)) as T;
  if (typeof valor === "number" && factor > 1 && /precio|price/i.test(clave) && valor >= 100)
    return redondear10(valor * factor) as T;
  if (Array.isArray(valor)) return valor.map((v) => recorrer(v, f, factor, clave)) as T;
  if (valor && typeof valor === "object") {
    const salida: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(valor)) salida[k] = recorrer(v, f, factor, k);
    return salida as T;
  }
  return valor;
}

export function precioConPiso(slug: string, texto: string, precio: number): number {
  const piso = pisoMercado(slug, texto);
  return precio > 0 && precio < piso ? piso : precio;
}

export function ajustarRealismo(l: LandingComercialSEO): LandingComercialSEO {
  const clave = `${l.slug} ${l.titulo} ${l.destinoOPais}`;
  const piso = pisoMercado(l.slug, clave);
  const factor = l.precioDesdeUSD > 0 && l.precioDesdeUSD < piso ? piso / l.precioDesdeUSD : 1;
  const porCarretera = SOLO_POR_CARRETERA.test(clave);
  const ajustada = recorrer(l, (s) => ajustarTexto(s, factor, porCarretera), factor);
  return { ...ajustada, slug: l.slug, precioDesdeUSD: factor > 1 ? piso : l.precioDesdeUSD };
}
