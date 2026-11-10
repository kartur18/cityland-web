import { DESTINOS_HOTEL, destinosConHoteles } from "@/lib/hoteles-turbo";
import { destinosConTraslados } from "@/lib/traslados-turbo";
import { DESTINOS_TOUR, destinosConTours } from "@/lib/tours-turbo";
import { paisesConPaquetes } from "@/lib/paquetes-turisticos";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { buscarLandingSeguro, rutaLandingSeguro } from "@/lib/seguros/landings";

// Una misma ciudad tiene páginas en varias secciones (vuelos, paquetes, hoteles, traslados, tours) que no se enlazaban
// entre sí: las indexadas no le presentaban a Google las nuevas, y el cliente no veía lo demás que podía comprar.
// 4-nov-2026.

export type Seccion = "vuelos" | "destino" | "paquetes" | "hoteles" | "traslados" | "tours" | "seguros";

export interface EnlaceDestino {
  seccion: Seccion;
  texto: string;
  href: string;
}

// Página de /destinos que corresponde a cada ciudad (su slug no siempre es el nombre de la ciudad).
const PAGINA_DESTINO: Record<string, string> = {
  cancun: "cancun",
  "punta-cana": "punta-cana",
  cartagena: "cartagena",
  "san-andres": "san-andres",
  aruba: "aruba",
  miami: "miami-orlando",
  orlando: "orlando-parques-disney-universal",
  "nueva-york": "nueva-york-gran-manzana",
  madrid: "madrid",
  barcelona: "barcelona-espana",
  sevilla: "sevilla-andalucia",
  paris: "paris",
  roma: "roma-italia",
  venecia: "venecia-florencia-roma",
  florencia: "venecia-florencia-roma",
  milan: "milan",
  londres: "londres-reino-unido",
  lisboa: "lisboa-fatima-oporto",
  amsterdam: "amsterdam-paises-bajos",
  atenas: "grecia-atenas-santorini-mykonos",
  estambul: "turquia",
  dubai: "dubai-emiratos",
  "el-cairo": "egipto-cairo-crucero-nilo",
  "rio-de-janeiro": "rio-de-janeiro",
  "buenos-aires": "buenos-aires",
  "santiago-de-chile": "santiago-chile",
  bogota: "bogota-medellin-eje-cafetero",
  medellin: "medellin",
  cusco: "cusco-magico",
};

// Seguro de viaje de cada ciudad (10-nov-2026): hoteles y seguros recibían ~25 enlaces, casi todos de su propia
// sección, y salían en la posición 35 y 50 de Google. Solo destinos con página de seguro propia.
const SEGURO_DE_CIUDAD: Record<string, string> = {
  madrid: "espana", barcelona: "espana", sevilla: "espana",
  roma: "italia", milan: "italia", venecia: "italia", florencia: "italia",
  paris: "francia",
  londres: "europa", lisboa: "europa", amsterdam: "europa", atenas: "europa",
  "punta-cana": "punta-cana", cancun: "mexico",
  miami: "estados-unidos", orlando: "estados-unidos", "nueva-york": "estados-unidos",
  "buenos-aires": "argentina", "rio-de-janeiro": "brasil",
  bogota: "colombia", medellin: "colombia", cartagena: "colombia", "san-andres": "colombia",
};

const RUTA_VUELO: Record<string, string> = { "santiago-de-chile": "lima-santiago" };

// País del segundo proveedor (paquetes turísticos) de cada ciudad de hoteles que no lo trae en su ficha.
const PAIS_PAQUETE: Record<string, string> = {
  cancun: "mexico",
  miami: "estados-unidos",
  orlando: "estados-unidos",
  "nueva-york": "estados-unidos",
};

const nombreDe = (clave: string) => DESTINOS_HOTEL[clave]?.nombre ?? DESTINOS_TOUR[clave]?.nombre ?? clave;

let indice: Map<string, EnlaceDestino[]> | undefined;

function armarIndice(): Map<string, EnlaceDestino[]> {
  const hoteles = new Set(destinosConHoteles().map((d) => d.slug));
  const traslados = new Set(destinosConTraslados().map((d) => d.slug));
  const tours = new Set(destinosConTours().map((d) => d.slug));
  const paises = new Set(paisesConPaquetes().map((p) => p.slug));
  const vuelos = new Set(RUTAS_VUELOS_SEO.map((r) => r.slug));
  const claves = new Set([...hoteles, ...traslados, ...tours]);
  const out = new Map<string, EnlaceDestino[]>();
  for (const k of claves) {
    const n = nombreDe(k);
    const l: EnlaceDestino[] = [];
    const vuelo = RUTA_VUELO[k] ?? `lima-${k}`;
    if (vuelos.has(vuelo)) l.push({ seccion: "vuelos", texto: `Vuelos Lima–${n}`, href: `/vuelos/${vuelo}` });
    if (PAGINA_DESTINO[k]) l.push({ seccion: "destino", texto: `Viaje a ${n}`, href: `/destinos/${PAGINA_DESTINO[k]}` });
    const pais = DESTINOS_TOUR[k]?.paisTuristico ?? PAIS_PAQUETE[k];
    if (pais && paises.has(pais)) l.push({ seccion: "paquetes", texto: `Paquetes a ${DESTINOS_HOTEL[k]?.pais ?? DESTINOS_TOUR[k]?.pais}`, href: `/paquetes-turisticos/${pais}` });
    const seg = SEGURO_DE_CIUDAD[k] ? buscarLandingSeguro(`seguro-de-viaje-${SEGURO_DE_CIUDAD[k]}`) : undefined;
    if (seg) l.push({ seccion: "seguros", texto: `Seguro de viaje a ${DESTINOS_HOTEL[k]?.pais ?? nombreDe(k)}`, href: rutaLandingSeguro(seg) });
    if (hoteles.has(k)) l.push({ seccion: "hoteles", texto: `Hoteles en ${n}`, href: `/hoteles-en/${k}` });
    if (traslados.has(k)) l.push({ seccion: "traslados", texto: `Traslado aeropuerto–hotel en ${n}`, href: `/traslados-en/${k}` });
    if (tours.has(k)) l.push({ seccion: "tours", texto: `Tours en ${n}`, href: `/tours-y-actividades/${k}` });
    out.set(k, l);
  }
  return out;
}

// Enlaces de la ciudad, sin la sección en la que ya está la persona. Menos de 2 no vale la pena mostrar.
export function enlacesDeCiudad(clave: string, sinSeccion?: Seccion): { nombre: string; enlaces: EnlaceDestino[] } | null {
  indice ??= armarIndice();
  const enlaces = (indice.get(clave) ?? []).filter((e) => e.seccion !== sinSeccion);
  return enlaces.length >= 2 ? { nombre: nombreDe(clave), enlaces } : null;
}

// Desde una página de /destinos o /vuelos, a qué ciudad corresponde.
export function ciudadDeDestino(slugDestino: string): string | undefined {
  return Object.keys(PAGINA_DESTINO).find((k) => PAGINA_DESTINO[k] === slugDestino);
}

export function ciudadDeVuelo(slugVuelo: string): string | undefined {
  const k = slugVuelo.replace(/^lima-/, "");
  if (Object.values(RUTA_VUELO).includes(slugVuelo)) return Object.keys(RUTA_VUELO).find((c) => RUTA_VUELO[c] === slugVuelo);
  indice ??= armarIndice();
  return indice.has(k) ? k : undefined;
}

// Palabras completas del slug: «roma» no debe atrapar «romantica».
const palabra = (...p: string[]) => new RegExp(`(?:^|-)(?:${p.join("|")})(?:-|$)`);
const CIUDAD_EN_SLUG: readonly (readonly [RegExp, string])[] = [
  [palabra("san-andres"), "san-andres"], [palabra("punta-cana", "bavaro"), "punta-cana"],
  [palabra("cancun", "riviera-maya", "tulum", "xcaret"), "cancun"], [palabra("orlando", "disney"), "orlando"],
  [palabra("miami"), "miami"], [palabra("nueva-york"), "nueva-york"], [palabra("aruba"), "aruba"],
  [palabra("cartagena"), "cartagena"], [palabra("medellin"), "medellin"], [palabra("bogota"), "bogota"],
  [palabra("rio-de-janeiro"), "rio-de-janeiro"], [palabra("buenos-aires"), "buenos-aires"],
  [palabra("santiago-de-chile", "santiago-chile"), "santiago-de-chile"],
  [palabra("madrid"), "madrid"], [palabra("barcelona"), "barcelona"], [palabra("roma"), "roma"],
  [palabra("milan"), "milan"], [palabra("venecia"), "venecia"], [palabra("florencia"), "florencia"],
  [palabra("paris"), "paris"], [palabra("londres"), "londres"], [palabra("lisboa"), "lisboa"],
  [palabra("amsterdam"), "amsterdam"], [palabra("estambul"), "estambul"], [palabra("dubai"), "dubai"],
  [palabra("cusco", "machu-picchu"), "cusco"],
];

// Ciudad de una página por su slug («estadia-hotel-ghl-sunrise-san-andres-…» → san-andres). Si el viaje junta dos
// ciudades se usa la primera que aparece; si no hay ninguna, undefined.
export function ciudadDeSlug(slug: string): string | undefined {
  const s = slug.toLowerCase();
  const hallada = CIUDAD_EN_SLUG.filter(([re]) => re.test(s)).map(([, c]) => c);
  return hallada[0];
}
