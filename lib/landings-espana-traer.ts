import { BOLSA_MINIMO, BOLSA_POR_DIA, TASA_CARTA_TOTAL, VIGENCIA_CARTA_MESES, euros } from "@/lib/datos-viaje-espana";
import { DETALLE_IDA_VUELTA, PRECIO_IDA_VUELTA_MADRID, type LandingEspana } from "@/lib/landings-espana-tipos";

// Traer a un familiar del Perú a España DE VISITA: viaja como turista, con regreso a su nombre, y vuelve al Perú.
// Quien quiera que su familiar viva con él en España necesita la reagrupación familiar, que es otro trámite.
// La guía general («traer a tu mamá o a un familiar») ya está en el blog; aquí van los casos que cambian de verdad.

const usd = (n: number) => `US$ ${n.toLocaleString("en-US")}`;

const comun = {
  tema: "traer" as const,
  etiquetaPrecio: "Lima–Madrid, ida y vuelta desde",
  precio: PRECIO_IDA_VUELTA_MADRID,
  detallePrecio: DETALLE_IDA_VUELTA,
  boton: "Cotizar su pasaje",
};

const AVISO_VISITA = {
  titulo: "Esta página es para una visita",
  texto:
    "Tu familiar viaja como turista, con su pasaje de regreso a su nombre, y vuelve al Perú dentro de los 90 días. Si quieres que viva contigo en España, eso es la reagrupación familiar, un trámite distinto que haces tú en la Oficina de Extranjería.",
};

const CARTA = {
  t: "La carta de invitación la haces tú",
  d: `Si vive contigo, la pides en la comisaría de la Policía Nacional de tu ciudad, con tu residencia legal o tu nacionalidad española. La tasa es de ${euros(TASA_CARTA_TOTAL)} y la carta vale ${VIGENCIA_CARTA_MESES} meses.`,
};
const BOLSA = {
  t: "Su bolsa de viaje",
  d: `Aunque se quede en tu casa, puede tener que demostrar dinero para su estadía: ${euros(BOLSA_POR_DIA)} por día, con un mínimo de ${euros(BOLSA_MINIMO)} por persona.`,
};
const PAGO = {
  t: "Le pagas el pasaje desde España",
  d: "Nos escribes por WhatsApp desde España, pagas desde allá y el boleto sale a su nombre. Tu familiar lo recibe en Lima.",
};

const ENLACES = [
  { href: "/blog/traer-familiar-de-peru-a-espana-de-visita", texto: "Guía: traer a un familiar de visita" },
  { href: "/espana/carta-de-invitacion-espana-quien-puede-invitar", texto: "Quién puede invitar" },
  { href: "/espana/pasaje-reagrupacion-familiar-espana", texto: "Si quieres que viva contigo: reagrupación" },
];

export const LANDINGS_TRAER: LandingEspana[] = [
  {
    ...comun,
    slug: "traer-a-mis-padres-a-espana-de-visita",
    tituloSeo: "Traer a tus padres de Perú a España de visita",
    descripcion: `Quieres que tus papás te visiten en España: carta de invitación (${euros(TASA_CARTA_TOTAL)}), bolsa de viaje, asistencia en el aeropuerto y pasaje ida y vuelta desde ${usd(PRECIO_IDA_VUELTA_MADRID)}.`,
    migas: "Traer a tus padres",
    sello: "Lima → Madrid · Tus papás te visitan",
    h1: "Traer a tus padres de Perú a España de visita",
    bajada:
      "Vives en España y quieres que tus papás pasen unas semanas contigo. Te ayudamos con lo que preparas tú (la carta de invitación) y con lo que llevan ellos, y les compramos el pasaje con la silla de ruedas si la necesitan.",
    chips: ["Carta de invitación", "Silla de ruedas gratis", "Pagas desde España"],
    foto: "/images/destinos/sevilla.jpg",
    fotoAlt: "Sevilla, España",
    mensaje: "¡Hola Cityland Travel! Vivo en España y quiero traer a mis papás de visita. ¿Me cotizan su pasaje?",
    pregunta: "Mis papás son mayores y viajan solos: ¿les piden la silla de ruedas en Lima y en Madrid?",
    ctaMedio: {
      titulo: "¿Viajan solos por primera vez?",
      texto: "Les pedimos la asistencia en los dos aeropuertos y les hacemos el check-in. Tú solo los esperas en la salida.",
      boton: "Cotizar con asistencia",
      mensaje: "¡Hola Cityland Travel! Mis papás viajan solos a España. Quiero su pasaje con asistencia en el aeropuerto.",
    },
    puntosTitulo: "Lo que preparas tú y lo que llevan ellos",
    puntos: [
      CARTA,
      BOLSA,
      { t: "Asistencia en el aeropuerto", d: "La silla de ruedas o el acompañamiento no se pagan. Lo pedimos a la aerolínea al emitir el boleto, con al menos 48 horas de anticipación." },
      PAGO,
    ],
    listaTitulo: "Lo que llevan tus papás",
    lista: [
      "Pasaporte vigente de cada uno",
      "Su pasaje ida y vuelta a su nombre",
      "La carta de invitación original",
      "Dinero para su estadía (bolsa de viaje de cada uno)",
      "Medicinas en su envase, con receta, en el equipaje de mano",
      "Seguro de viaje que cubra su edad (recomendado)",
    ],
    aviso: AVISO_VISITA,
    faqs: [
      { q: "¿Puedo traer a mis padres a España de visita?", a: "Sí. Viajan como turistas, sin visa, hasta 90 días. Tú les haces la carta de invitación y ellos llevan su pasaporte, su pasaje de regreso y su bolsa de viaje." },
      { q: "¿Y si quiero que se queden a vivir conmigo?", a: "Eso es la reagrupación de ascendientes, un trámite con requisitos propios que pides en la Oficina de Extranjería. No se hace con una visita." },
      { q: "¿Una sola carta sirve para los dos?", a: "Una carta puede incluir a varias personas, con los datos de cada una. Consúltalo en la comisaría al pedirla." },
      { q: "¿Siendo español es distinto?", a: "Para una visita, no: tú los invitas igual con la carta y ellos viajan como turistas." },
    ],
    enlaces: [...ENLACES, { href: "/espana/viajar-a-espana-adultos-mayores", texto: "Viajes para adultos mayores" }],
  },
  {
    ...comun,
    slug: "traer-a-mis-hijos-de-peru-a-espana-de-visita",
    tituloSeo: "Traer a tus hijos de Perú a España de visita",
    descripcion: "Tus hijos viven en el Perú y quieres que te visiten en España: permiso de viaje del menor, menor no acompañado, carta de invitación y pasaje ida y vuelta.",
    migas: "Traer a tus hijos",
    sello: "Lima → Madrid · Tus hijos te visitan",
    h1: "Traer a tus hijos de Perú a España de visita",
    bajada:
      "Tus hijos se quedaron en el Perú y quieres que pasen las vacaciones contigo. Si son menores, lo más importante es el permiso de viaje: sin él no salen del Perú. Te explicamos cada caso.",
    chips: ["Permiso de viaje", "Menor no acompañado", "Vacaciones con papá o mamá"],
    foto: "/images/destinos/malaga.jpg",
    fotoAlt: "Málaga, España",
    mensaje: "¡Hola Cityland Travel! Vivo en España y quiero que mis hijos vengan de visita en vacaciones. ¿Me cotizan?",
    pregunta: "Mi hijo tiene 12 años y viajaría solo de Lima a Madrid: ¿cómo funciona el menor no acompañado?",
    ctaMedio: {
      titulo: "¿Viaja solo o con un familiar?",
      texto: "Cuéntanos con quién viaja y su edad, y te decimos qué permiso necesita y qué servicio de la aerolínea le conviene.",
      boton: "Contar mi caso",
      mensaje: "¡Hola Cityland Travel! Quiero traer a mi hijo menor a España de visita. ¿Qué necesita?",
    },
    puntosTitulo: "Según con quién viaja",
    puntos: [
      { t: "Con su otro padre o madre", d: "Si viaja con uno solo de sus padres, necesita la autorización notarial del que no viaja. Si tú vives en España, la firmas en el consulado del Perú de tu ciudad." },
      { t: "Con un tío o un abuelo", d: "Necesita la autorización de los dos padres para viajar con esa persona." },
      { t: "Solo", d: "Con el servicio de menor no acompañado de la aerolínea, que tiene un costo extra, y la autorización de los dos padres." },
      { t: "Su carta y su bolsa", d: "Puedes incluirlo en tu carta de invitación. La bolsa de viaje se cuenta también por cada niño." },
    ],
    listaTitulo: "Lo que lleva tu hijo",
    lista: [
      "Su pasaporte propio y vigente",
      "La autorización de viaje del menor (notarial o consular)",
      "Su pasaje ida y vuelta",
      "La carta de invitación con sus datos",
      "Los datos de quien lo recoge en Madrid",
    ],
    aviso: AVISO_VISITA,
    faqs: [
      { q: "¿Mi hijo puede viajar solo a España?", a: "Sí, con el servicio de menor no acompañado de la aerolínea y la autorización de viaje de los dos padres. Te cotizamos el servicio con el pasaje." },
      { q: "¿Dónde firmo el permiso si vivo en España?", a: "En el consulado del Perú de tu ciudad en España. El padre o la madre que está en el Perú la firma ante notario." },
      { q: "¿Y si quiero que se quede a vivir conmigo?", a: "Eso es la reagrupación familiar de hijos, que pides tú en la Oficina de Extranjería. Para eso no sirve una visita." },
    ],
    enlaces: [...ENLACES, { href: "/espana/solo-ida/menor-viaja-con-un-solo-padre-a-espana", texto: "Menor con un solo padre" }],
  },
  {
    ...comun,
    slug: "traer-a-mi-pareja-de-peru-a-espana-de-visita",
    tituloSeo: "Traer a tu pareja de Perú a España de visita",
    descripcion: `Tu enamorado o enamorada está en el Perú y quieres que te visite en España: carta de invitación, bolsa de viaje y pasaje ida y vuelta desde ${usd(PRECIO_IDA_VUELTA_MADRID)}.`,
    migas: "Traer a tu pareja",
    sello: "Lima → Madrid · Te visita tu pareja",
    h1: "Traer a tu pareja de Perú a España de visita",
    bajada:
      "Tu pareja está en el Perú y quieres que pase unas semanas contigo. Viaja como turista con su pasaje de regreso: tú le haces la carta de invitación y le compras el pasaje desde España.",
    chips: ["Carta de invitación", "Ida y vuelta", "Pagas desde España"],
    foto: "/images/destinos/granada.jpg",
    fotoAlt: "Granada, España",
    mensaje: "¡Hola Cityland Travel! Quiero que mi pareja me visite en España. ¿Me cotizan su pasaje?",
    pregunta: "Quiero comprarle el pasaje a mi pareja desde España: ¿cómo pago y cómo le llega el boleto?",
    ctaMedio: {
      titulo: "Dale la sorpresa",
      texto: "Pagas desde España y el boleto le llega a su WhatsApp en Lima, con su nombre y la fecha de regreso.",
      boton: "Comprarle el pasaje",
      mensaje: "¡Hola Cityland Travel! Quiero comprarle un pasaje a mi pareja desde España.",
    },
    puntosTitulo: "Lo que tienes que saber",
    puntos: [
      { ...CARTA, d: `${CARTA.d} En la solicitud declaras el vínculo que tienes con tu pareja.` },
      BOLSA,
      PAGO,
      { t: "Hasta 90 días", d: "Como turista puede estar hasta 90 días dentro de cada periodo de 180. Su pasaje de regreso va dentro de ese plazo." },
    ],
    listaTitulo: "Lo que lleva tu pareja",
    lista: ["Pasaporte vigente", "Su pasaje ida y vuelta a su nombre", "La carta de invitación original", "Dinero para su estadía (bolsa de viaje)"],
    aviso: AVISO_VISITA,
    faqs: [
      { q: "¿Puedo invitar a mi enamorado si no estamos casados?", a: "Sí. La carta de invitación la puede pedir quien tiene residencia legal o nacionalidad española, y en la solicitud declaras el vínculo." },
      { q: "¿Y si queremos vivir juntos en España?", a: "Eso no se hace con una visita: hay trámites de pareja (matrimonio o pareja de hecho) y de reagrupación con requisitos propios." },
      { q: "¿Puedo pagarle el pasaje desde España?", a: "Sí. Nos escribes por WhatsApp, pagas desde allá y el boleto sale a su nombre." },
    ],
    enlaces: ENLACES,
  },
];
