import { PRECIO_SOLO_IDA_TOPE_CERCANO, mesesSoloIda, precioSoloIdaDesde } from "@/lib/precios-solo-ida";

// Piezas comunes de todas las páginas de solo ida (rutas, textos y la urgencia que sale de la tabla de precios).

export const RUTA_SOLO_IDA = "/espana/solo-ida";
export const SECCION = { nombre: "Solo ida", href: RUTA_SOLO_IDA };
export const usd = (n: number) => `US$ ${n.toLocaleString("en-US")}`;
export const og = (slug: string) => `/og/solo-ida/${slug}`;

export const DETALLE = "Solo ida con impuestos, para viajeros con residencia, visado o pasaporte europeo. Precio referencial.";

// Para quién es el solo ida (va en todas las páginas generales).
export const QUIENES = [
  "Residentes en España con TIE vigente que vuelven de sus vacaciones en el Perú",
  "Familiares con visado de reagrupación familiar",
  "Estudiantes con visado de estudios",
  "Peruanos con nacionalidad española o doble nacionalidad",
  "Peruanos con pasaporte de un país de la Unión Europea (italiano, por ejemplo)",
];

export const AVISO_TURISMO = {
  titulo: "¿Viajas de turismo?",
  texto: "Si vas de visita o de vacaciones sin residencia ni visado, lo tuyo es el pasaje ida y vuelta, con el regreso a tu nombre. Te lo cotizamos igual de rápido.",
};

export const ENLACES_BASE = [
  { href: RUTA_SOLO_IDA, texto: "Solo ida: quién puede viajar" },
  { href: "/pasaje-ida-y-vuelta-a-espana", texto: "Pasaje ida y vuelta a España" },
  { href: "/espana/llegada-aeropuerto-madrid-barajas", texto: "Tu llegada a Barajas" },
];

// Lo que se repite en todas las páginas de solo ida y no cambia por familia.
export function base(hoy: string) {
  const desde = precioSoloIdaDesde(hoy);
  const [cercano] = mesesSoloIda(1, hoy);
  return {
    desde,
    urgencia: `El precio del solo ida sube mientras más cerca es la fecha: en ${cercano.nombre} puede llegar a ${usd(PRECIO_SOLO_IDA_TOPE_CERCANO)}, y en los meses lejanos sale desde ${usd(desde)}.`,
  };
}
