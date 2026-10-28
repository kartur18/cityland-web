import { PRECIO_IDA_VUELTA_MADRID_DESDE } from "@/components/constantes";
import { precioSoloIdaDesde } from "@/lib/precios-solo-ida";

// Tipos y precios comunes de las landings de España (/espana/<slug>).

export interface PuntoLanding {
  t: string;
  d: string;
}

// Cada grupo de páginas tiene su propio diseño (color, portada y orden de bloques).
export type TemaEspana =
  | "provincia"
  | "perfil"
  | "ciudad"
  | "guia"
  // Familias del solo ida: cada una con su color y su orden de bloques.
  | "soloPerfil"
  | "soloMes"
  | "soloOrigen"
  | "soloDestino"
  | "soloAerolinea"
  | "soloGuia";

// Calendario de precios por mes (solo ida): lo que suma esta página sobre el Lima–Madrid de la tabla.
export interface CalendarioLanding {
  origen: string;
  destino: string;
  recargo: number;
  titulo?: string;
}

export interface AtajoWhatsApp {
  texto: string;
  mensaje: string;
}

export interface LandingEspana {
  slug: string;
  // Ruta propia cuando la página no vive en /espana/<slug> (las de solo ida van en /espana/solo-ida/...).
  ruta?: string;
  // Paso intermedio de las migas (p. ej. «Solo ida»).
  seccion?: { nombre: string; href: string };
  calendario?: CalendarioLanding;
  // Imagen para compartir propia (si no, se usa la foto).
  ogImagen?: string;
  // Mes de salida que la página resalta en el calendario.
  mesDestacado?: number;
  // Llamado a mitad de página, con su propio texto.
  ctaMedio?: { titulo: string; texto: string; boton: string; mensaje: string };
  tituloSeo: string;
  descripcion: string;
  migas: string;
  sello: string;
  h1: string;
  bajada: string;
  chips: string[];
  // Cada página lleva una foto distinta de las demás.
  foto: string;
  // Qué se ve en la foto, cuando no es Madrid (para no rotular Vigo como «Iquitos a Madrid»).
  fotoAlt?: string;
  tema?: TemaEspana;
  etiquetaPrecio: string;
  precio: number;
  detallePrecio: string;
  boton: string;
  mensaje: string;
  // Pregunta lista para mandar desde la tarjeta de chat.
  pregunta?: string;
  // Botones cortos (meses, ciudades, casos) que abren WhatsApp con su propio mensaje.
  atajosTitulo?: string;
  atajos?: AtajoWhatsApp[];
  // Urgencia real del cierre: temporada, frecuencias o cupos que de verdad se acaban.
  urgencia?: string;
  puntosTitulo: string;
  puntos: PuntoLanding[];
  listaTitulo: string;
  lista: string[];
  tabla?: { titulo: string; columnas: string[]; filas: string[][]; nota?: string };
  aviso?: { titulo: string; texto: string };
  faqs: { q: string; a: string }[];
  enlaces: { href: string; texto: string }[];
}

// Referencias de precio por persona (ida y vuelta Lima–Madrid de components/constantes.ts).
export const PRECIO_IDA_VUELTA_MADRID = PRECIO_IDA_VUELTA_MADRID_DESDE;
// El solo ida sale de la tabla por mes (lib/precios-solo-ida.ts): aquí, el «desde» de los próximos 12 meses.
export const PRECIO_SOLO_IDA_MADRID = precioSoloIdaDesde();

export const DETALLE_IDA_VUELTA = "Ida y vuelta con impuestos. Precio referencial; te damos el de tu fecha.";

// Meses que más preguntan (temporada alta de julio y diciembre, y los dos más baratos).
export const ATAJOS_MESES = (origen: string): AtajoWhatsApp[] => [
  { texto: "Diciembre", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a Madrid en diciembre. ¿Qué precio hay?` },
  { texto: "Febrero (más barato)", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a Madrid en febrero, que es más barato.` },
  { texto: "Julio o agosto", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a Madrid en julio o agosto.` },
  { texto: "Noviembre (más barato)", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a Madrid en noviembre.` },
  { texto: "Aún no sé la fecha", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a Madrid y aún no tengo fecha. ¿Cuándo sale más barato?` },
];
