import { buscarRutaVuelo } from "@/lib/rutas-vuelos";
import { precioSoloIdaDesde } from "@/lib/precios-solo-ida";
import { DETALLE_IDA_VUELTA, type LandingEspana, type PuntoLanding } from "@/lib/landings-espana-tipos";

// Trámites que buscan los peruanos que viven en España y guías para viajar de España al Perú.
// Fuentes oficiales consultadas el 28-oct-2026: Ministerio de Justicia, BOE, DGT, Ministerio de Ciencia y
// Universidades, Interior, Migraciones del Perú y DGE-Minsa. Rematan con el pasaje: solo ida a España (residentes)
// o Madrid–Lima (quien viaja al Perú).

const FECHA = "28 de octubre de 2026";
const usd = (n: number) => `US$ ${n.toLocaleString("en-US")}`;
const SOLO_IDA = precioSoloIdaDesde();
const MADRID_LIMA = buscarRutaVuelo("madrid-lima")?.precioDesdeUSD ?? 1050;

interface Tramite {
  slug: string;
  tituloSeo: string;
  descripcion: string;
  migas: string;
  h1: string;
  bajada: string;
  chips: string[];
  foto: string;
  fotoAlt: string;
  pregunta: string;
  puntosTitulo: string;
  puntos: PuntoLanding[];
  listaTitulo: string;
  lista: string[];
  tabla?: { titulo: string; columnas: string[]; filas: string[][] };
  faqs: { q: string; a: string }[];
  fuente: string;
}

const TRAMITES: Tramite[] = [
  {
    slug: "nacionalidad-espanola-por-residencia-peruanos",
    tituloSeo: "Nacionalidad española para peruanos: 2 años",
    descripcion: "Nacionalidad española por residencia para peruanos: 2 años de residencia legal, sin examen de idioma (DELE) pero con el CCSE, tasa de 104,05 € y solicitud en línea.",
    migas: "Nacionalidad por residencia",
    h1: "Nacionalidad española por residencia para peruanos",
    bajada: "Como peruano, puedes pedir la nacionalidad española con solo 2 años de residencia legal y continuada, y sin perder la peruana. Te contamos los requisitos con la información del Ministerio de Justicia.",
    chips: ["2 años de residencia", "Sin DELE", "Tasa 104,05 €"],
    foto: "/images/destinos/madrid.webp",
    fotoAlt: "Madrid, España",
    pregunta: "Estoy tramitando mi nacionalidad española: ¿qué fecha me conviene para ir al Perú y volver?",
    puntosTitulo: "Los requisitos",
    puntos: [
      { t: "2 años de residencia legal", d: "Los peruanos, como los demás iberoamericanos, piden la nacionalidad con 2 años de residencia legal y continuada en España (artículo 22 del Código Civil)." },
      { t: "Sin examen de idioma", d: "Quien tiene la nacionalidad de un país de habla hispana no necesita el DELE A2." },
      { t: "Sí el examen de cultura", d: "El CCSE, sobre la Constitución y la cultura de España, sí hay que aprobarlo." },
      { t: "Tasa y solicitud", d: "La tasa es de 104,05 € (modelo 790-026) y la solicitud se presenta en línea, en la sede del Ministerio de Justicia." },
    ],
    listaTitulo: "Lo que sueles necesitar",
    lista: ["Tarjeta de residencia (TIE) y pasaporte vigentes", "Partida de nacimiento apostillada", "Certificado de antecedentes penales del Perú, apostillado", "Certificado de empadronamiento", "Diploma del examen CCSE"],
    faqs: [
      { q: "¿Pierdo la nacionalidad peruana?", a: "No. Por el convenio de doble nacionalidad de 1959, el peruano que se hace español conserva la peruana." },
      { q: "¿Tengo que dar el DELE?", a: "No, porque el Perú es un país de habla hispana. Sí tienes que aprobar el CCSE." },
    ],
    fuente: "Ministerio de Justicia de España y Real Decreto 1004/2015",
  },
  {
    slug: "doble-nacionalidad-peru-espana",
    tituloSeo: "Doble nacionalidad Perú–España: cómo funciona",
    descripcion: "El convenio de doble nacionalidad Perú–España de 1959: te haces español sin perder la nacionalidad peruana. Qué pasaporte usar y cómo entrar y salir de cada país.",
    migas: "Doble nacionalidad",
    h1: "Doble nacionalidad Perú–España",
    bajada: "Perú y España tienen un convenio de doble nacionalidad desde 1959: puedes ser español sin dejar de ser peruano. Te explicamos qué significa al viajar entre los dos países.",
    chips: ["Convenio de 1959", "Conservas la peruana", "Dos pasaportes"],
    foto: "/images/destinos/lima-plaza-mayor.jpg",
    fotoAlt: "Plaza Mayor de Lima",
    pregunta: "Tengo pasaporte peruano y español: ¿con cuál compro el pasaje Lima–Madrid?",
    puntosTitulo: "Lo que dice el convenio",
    puntos: [
      { t: "No pierdes tu nacionalidad", d: "El convenio de 1959 permite a peruanos y españoles tomar la otra nacionalidad sin perder la suya. La peruana solo se pierde por renuncia expresa." },
      { t: "Te inscribes en el Registro Civil", d: "El peruano que se hace español se inscribe en el Registro Civil español de su domicilio." },
      { t: "Pasaporte en los dos países", d: "El protocolo del 2000 permite sacar y renovar el pasaporte en cualquiera de los dos Estados." },
      { t: "Mismo documento al entrar y salir", d: "Migraciones del Perú pide salir del país con el mismo documento con que entraste." },
    ],
    listaTitulo: "Al viajar entre Perú y España",
    lista: ["Sal del Perú con el documento con que entraste", "Entra a España con tu pasaporte o DNI español", "Compra el boleto con el nombre del pasaporte que usarás en el check-in", "Lleva los dos pasaportes vigentes"],
    faqs: [
      { q: "¿El Perú acepta la doble nacionalidad con España?", a: "Sí, por el convenio de 1959 y su protocolo de 2000." },
      { q: "¿Con qué pasaporte entro al Perú?", a: "Si entras con el peruano, no tienes límite de estadía. Si entras con el español, eres turista con un plazo." },
    ],
    fuente: "Convenio de doble nacionalidad de 1959 (BOE 19-abr-1960), protocolo de 2000 y Migraciones del Perú",
  },
  {
    slug: "pasaporte-espanol-en-lima-y-en-espana",
    tituloSeo: "Pasaporte español: cómo sacarlo en España o Lima",
    descripcion: "Cómo sacar el pasaporte español siendo peruano nacionalizado: en una comisaría de la Policía Nacional en España o en el Consulado General de España en Lima. Vigencia de 5 o 10 años.",
    migas: "Pasaporte español",
    h1: "Cómo sacar el pasaporte español",
    bajada: "Ya eres español y necesitas tu pasaporte para viajar. Lo puedes sacar en España, en la Policía Nacional, o en Lima, en el Consulado General de España. Te contamos cómo.",
    chips: ["Policía Nacional", "Consulado en Lima", "5 o 10 años"],
    foto: "/images/espana/plaza-mayor.jpg",
    fotoAlt: "Plaza Mayor de Madrid",
    pregunta: "Ya tengo mi pasaporte español: ¿me cotizan el pasaje a Lima para ver a mi familia?",
    puntosTitulo: "Cómo se saca",
    puntos: [
      { t: "En España", d: "En las Unidades de Documentación de la Policía Nacional, con cita previa (teléfono 060 o citapreviadnie.es). Vas en persona y pagas la tasa." },
      { t: "En Lima", d: "En el Consulado General de España, con cita previa. Tener un viaje próximo no da derecho a una cita de urgencia." },
      { t: "Vigencia", d: "5 años si tienes menos de 30 años y 10 años desde los 30." },
      { t: "Con tiempo", d: "Pide la cita antes de comprar el pasaje: el nombre del boleto tiene que coincidir con el pasaporte." },
    ],
    listaTitulo: "Antes de viajar",
    lista: ["Revisa la vigencia de tu pasaporte español", "Pide la cita con anticipación", "Compra el boleto con el nombre exacto del pasaporte", "Lleva también tu documento peruano"],
    faqs: [
      { q: "¿Puedo sacar el pasaporte español en Lima?", a: "Sí, en el Consulado General de España en Lima, con cita previa." },
      { q: "¿Cuánto dura el pasaporte español?", a: "5 años si tienes menos de 30 años y 10 años desde los 30." },
    ],
    fuente: "Ministerio del Interior de España (Real Decreto 896/2003) y Consulado General de España en Lima",
  },
  {
    slug: "homologar-titulo-peruano-en-espana",
    tituloSeo: "Homologar tu título peruano en España (2026)",
    descripcion: "Cómo homologar o hacer equivaler tu título universitario peruano en España: Ministerio de Universidades, tasa de 166,50 € y plazo legal de 6 meses. También la secundaria.",
    migas: "Homologar título",
    h1: "Homologar tu título peruano en España",
    bajada: "Si estudiaste en el Perú y vas a vivir en España, puedes pedir que reconozcan tu título. Te explicamos la diferencia entre homologar y declarar la equivalencia, y dónde se tramita.",
    chips: ["Tasa 166,50 €", "Plazo legal 6 meses", "Universitario y secundaria"],
    foto: "/images/destinos/bilbao-guggenheim.jpg",
    fotoAlt: "Bilbao, España",
    pregunta: "Voy a homologar mi título en España: ¿qué documentos llevo apostillados desde el Perú?",
    puntosTitulo: "Cómo funciona",
    puntos: [
      { t: "Homologación o equivalencia", d: "La homologación sirve para ejercer una profesión regulada (medicina, enfermería, derecho…). La equivalencia solo reconoce el nivel académico." },
      { t: "Dónde se pide", d: "El título universitario se tramita en el Ministerio de Ciencia, Innovación y Universidades, en su portal en línea." },
      { t: "Tasa y plazo", d: "La tasa es de 166,50 € por solicitud (modelo 790-107). El plazo legal es de 6 meses, aunque en la práctica suele demorar más." },
      { t: "La secundaria", d: "El título de secundaria se homologa al Bachiller español en el Ministerio de Educación, con los certificados de estudios legalizados." },
    ],
    listaTitulo: "Lleva desde el Perú, apostillados",
    lista: ["Título universitario", "Certificado de notas con las horas de cada curso", "Plan de estudios o sílabos", "Certificados de secundaria, si homologas el colegio"],
    faqs: [
      { q: "¿Cuánto cuesta homologar un título peruano?", a: "La tasa del Ministerio es de 166,50 € por solicitud. A eso se suman las apostillas y traducciones, si hacen falta." },
      { q: "¿Cuánto demora?", a: "El plazo legal es de 6 meses, pero en la práctica muchas veces tarda más. Empieza con tiempo." },
    ],
    fuente: "Ministerio de Ciencia, Innovación y Universidades (Real Decreto 889/2022) y Ministerio de Educación de España",
  },
  {
    slug: "canjear-brevete-peruano-en-espana",
    tituloSeo: "Canjear tu brevete peruano en España (DGT)",
    descripcion: "El brevete peruano se canjea en España sin examen para auto y moto: tasa de 28,87 € en la DGT. Solo puedes manejar con el peruano 6 meses desde que eres residente.",
    migas: "Canjear brevete",
    h1: "Canjear tu brevete peruano en España",
    bajada: "Perú tiene convenio de canje con España: tu brevete de auto o moto se cambia por el español sin dar examen. Pero ojo con el plazo: solo puedes manejar con el peruano 6 meses desde que eres residente.",
    chips: ["Sin examen (A y B)", "Tasa 28,87 €", "6 meses de plazo"],
    foto: "/images/destinos/valladolid.jpg",
    fotoAlt: "Valladolid, España",
    pregunta: "Me mudo a España: ¿llevo mi brevete original para canjearlo allá?",
    puntosTitulo: "Cómo funciona el canje",
    puntos: [
      { t: "Perú tiene convenio", d: "Desde 2004 el brevete peruano se puede canjear en la DGT." },
      { t: "Auto y moto sin examen", d: "Las clases de auto y moto (A1, A, B y B+E) se canjean sin exámenes, con la tasa 2.3 de 28,87 €." },
      { t: "Camión y bus, con examen", d: "Las clases C y D piden examen práctico y la tasa 2.1 de 94,05 €." },
      { t: "Plazo de 6 meses", d: "Con el brevete peruano puedes manejar como máximo 6 meses desde que tienes residencia normal en España. Después, tienes que canjearlo." },
    ],
    listaTitulo: "Lo que piden",
    lista: ["Tarjeta de residencia (TIE) vigente", "Brevete peruano original y vigente", "Informe de aptitud psicofísica de un centro de reconocimiento", "Tasa de la DGT pagada", "Cita previa en la Jefatura de Tráfico"],
    faqs: [
      { q: "¿Puedo canjear mi brevete peruano en España?", a: "Sí, Perú tiene convenio con la DGT. El de auto y moto se canjea sin examen." },
      { q: "¿Sirve un brevete que saqué después de mudarme?", a: "No. Solo se canjea si lo sacaste antes de tener residencia legal en España." },
    ],
    fuente: "Dirección General de Tráfico (DGT)",
  },
];

function landingTramite(t: Tramite): LandingEspana {
  return {
    slug: t.slug,
    tema: "tramite",
    tituloSeo: t.tituloSeo,
    descripcion: t.descripcion,
    migas: t.migas,
    sello: "Residentes en España · Trámite",
    h1: t.h1,
    bajada: t.bajada,
    chips: t.chips,
    foto: t.foto,
    fotoAlt: t.fotoAlt,
    etiquetaPrecio: "Lima–Madrid, solo ida desde",
    precio: SOLO_IDA,
    detallePrecio: "Solo ida con impuestos, para residentes en España. Precio referencial.",
    calendario: { origen: "Lima", destino: "Madrid", recargo: 0, titulo: "Tu regreso a España: precio del solo ida por mes" },
    boton: "Cotizar mi pasaje",
    mensaje: `¡Hola Cityland Travel! Vivo en España (leí la guía «${t.migas}») y quiero cotizar un pasaje.`,
    pregunta: t.pregunta,
    ctaMedio: {
      titulo: "¿Vas al Perú por tus papeles?",
      texto: "Si tienes que sacar documentos en el Perú, te armamos la ida y vuelta o el regreso solo ida a España con la fecha que te calce.",
      boton: "Armar mi viaje",
      mensaje: `¡Hola Cityland Travel! Tengo que ir al Perú por un trámite (${t.migas}) y volver a España. ¿Me cotizan?`,
    },
    urgencia: "El solo ida de regreso a España sube mientras más cerca es la fecha: los meses lejanos son los más baratos.",
    puntosTitulo: t.puntosTitulo,
    puntos: t.puntos,
    listaTitulo: t.listaTitulo,
    lista: t.lista,
    tabla: t.tabla,
    faqs: [...t.faqs, { q: "¿Ustedes hacen el trámite?", a: "No: somos agencia de viajes. Te vendemos el pasaje y te contamos lo que dice la información oficial; el trámite lo haces en la oficina que corresponde." }],
    aviso: { titulo: "Fuente", texto: `${t.fuente}. Consultado el ${FECHA}. Antes de presentar, revisa la web oficial: los requisitos y las tasas pueden cambiar.` },
    enlaces: [
      { href: "/espana/solo-ida", texto: "Solo ida a España" },
      { href: "/espana/solo-ida/documentos-apostillados-para-mudarte-a-espana", texto: "Documentos apostillados" },
      { href: "/pasajes-de-espana-a-peru", texto: "Pasajes de España a Perú" },
    ],
  };
}

// ── Viajar de España al Perú ────────────────────────────────────────────────────────────────────────────────

const comunPeru = {
  tema: "peru" as const,
  etiquetaPrecio: "Madrid–Lima, ida y vuelta desde",
  precio: MADRID_LIMA,
  detallePrecio: DETALLE_IDA_VUELTA,
  boton: "Cotizar Madrid–Lima",
  enlaces: [
    { href: "/pasajes-de-espana-a-peru", texto: "Pasajes de España a Perú" },
    { href: "/vuelos/madrid-lima", texto: "Vuelos Madrid–Lima" },
    { href: "/vuelos/barcelona-lima", texto: "Vuelos Barcelona–Lima" },
  ],
};

const PERU: LandingEspana[] = [
  {
    ...comunPeru,
    slug: "requisitos-para-viajar-a-peru-desde-espana",
    tituloSeo: "Requisitos para viajar a Perú desde España",
    descripcion: `Requisitos para viajar a Perú desde España: españoles sin visa con pasaporte de 6 meses, peruanos con doble nacionalidad y residentes. Pasaje Madrid–Lima desde ${usd(MADRID_LIMA)}.`,
    migas: "Requisitos para ir a Perú",
    sello: "España → Perú · Requisitos",
    h1: "Requisitos para viajar a Perú desde España",
    bajada: "Vives en España y vas al Perú: de visita a tu familia o con amigos españoles. Te contamos lo que pide cada uno para entrar, según Migraciones del Perú.",
    chips: ["Españoles sin visa", "Pasaporte de 6 meses", "Doble nacionalidad"],
    foto: "/images/destinos/lima-costa-verde.jpg",
    fotoAlt: "Costa Verde de Lima",
    mensaje: "¡Hola Cityland Travel! Vivo en España y quiero cotizar un pasaje a Lima.",
    pregunta: "Viajo de Madrid a Lima con mi pareja española: ¿qué documentos necesita?",
    ctaMedio: {
      titulo: "¿Viajas con tu familia española?",
      texto: "Te cotizamos los pasajes de todos juntos y te decimos qué documento lleva cada uno.",
      boton: "Cotizar en familia",
      mensaje: "¡Hola Cityland Travel! Viajo de España a Perú con mi familia. ¿Me cotizan los pasajes?",
    },
    puntosTitulo: "Según quién viaja",
    puntos: [
      { t: "Ciudadanos españoles", d: "No necesitan visa para turismo. Necesitan pasaporte con al menos 6 meses de vigencia. Migraciones da hasta 183 días según lo que autorice al ingresar." },
      { t: "Peruanos", d: "Entran con su documento peruano, sin límite de estadía." },
      { t: "Con doble nacionalidad", d: "Entra y sal del Perú con el mismo documento. Si entras con el pasaporte español, eres turista con plazo." },
      { t: "Ya no sellan el pasaporte", d: "Desde 2023 Migraciones registra la entrada de forma digital: no hay sello." },
    ],
    listaTitulo: "Lo que llevas",
    lista: ["Pasaporte vigente (6 meses si eres español)", "Tu TIE para volver a España, si eres residente", "Tu pasaje de vuelta a España", "Si vas a la selva: la vacuna de la fiebre amarilla (recomendada)"],
    faqs: [
      { q: "¿Los españoles necesitan visa para ir a Perú?", a: "No para turismo. Necesitan pasaporte con al menos 6 meses de vigencia." },
      { q: "¿Cuánto tiempo puede quedarse un español en Perú?", a: "Hasta 183 días, según lo que autorice Migraciones al ingresar." },
    ],
  },
  {
    ...comunPeru,
    slug: "vacunas-para-viajar-a-peru",
    tituloSeo: "Vacunas para viajar a Perú: ¿cuáles son obligatorias?",
    descripcion: "Vacunas para viajar a Perú desde España: ninguna es obligatoria para entrar al país; la fiebre amarilla se recomienda si vas a la selva, al menos 10 días antes.",
    migas: "Vacunas para Perú",
    sello: "España → Perú · Vacunas",
    h1: "Vacunas para viajar a Perú",
    bajada: "Para entrar al Perú no te piden ninguna vacuna en general. Si vas a la selva, el Ministerio de Salud recomienda la de la fiebre amarilla. Te contamos lo que dice la información oficial.",
    chips: ["Ninguna obligatoria", "Fiebre amarilla: selva", "10 días antes"],
    foto: "/images/destinos/oxapampa-peru.jpg",
    fotoAlt: "Selva central del Perú",
    mensaje: "¡Hola Cityland Travel! Viajo de España a Perú y quiero ir a la selva. ¿Me cotizan?",
    pregunta: "Viajo de Madrid a Lima y luego a Iquitos: ¿me arman todo en un solo boleto?",
    ctaMedio: {
      titulo: "¿Vas a la selva?",
      texto: "Te armamos Madrid–Lima y el vuelo a Iquitos, Tarapoto o Puerto Maldonado en el mismo viaje.",
      boton: "Cotizar con la selva",
      mensaje: "¡Hola Cityland Travel! Viajo de España a Perú y quiero ir a la selva. ¿Me cotizan los vuelos?",
    },
    puntosTitulo: "Lo que dice la información oficial",
    puntos: [
      { t: "Para entrar, ninguna", d: "La vacuna de la fiebre amarilla no es un requisito general para entrar al Perú." },
      { t: "Fiebre amarilla en la selva", d: "La DGE del Ministerio de Salud la recomienda a quien viaja a la selva, al menos 10 días antes del viaje." },
      { t: "Consulta en España", d: "Antes de viajar, pide consejo en un centro de vacunación internacional de Sanidad Exterior." },
      { t: "Lima, Cusco y la costa", d: "Para la costa y la sierra no se recomienda la de fiebre amarilla. Ten al día tus vacunas de siempre." },
    ],
    listaTitulo: "Antes de viajar",
    lista: ["Revisa si vas a zonas de selva", "Vacúnate al menos 10 días antes, si vas a la selva", "Lleva tu certificado internacional de vacunación", "Lleva repelente y protector solar"],
    faqs: [
      { q: "¿Qué vacunas son obligatorias para entrar a Perú?", a: "Ninguna en general. La de fiebre amarilla se recomienda si vas a la selva." },
      { q: "¿Necesito la vacuna para ir a Machu Picchu?", a: "No es necesaria para Cusco ni Machu Picchu; se recomienda para la selva." },
    ],
  },
  {
    ...comunPeru,
    slug: "cuanto-cuesta-viajar-a-peru-desde-espana",
    tituloSeo: "Cuánto cuesta viajar a Perú desde España",
    descripcion: `Cuánto cuesta viajar a Perú desde España: pasaje Madrid–Lima desde ${usd(MADRID_LIMA)} ida y vuelta, temporadas y cómo pagar menos si vas a ver a tu familia.`,
    migas: "Costo de viajar a Perú",
    sello: "España → Perú · Presupuesto",
    h1: "Cuánto cuesta viajar a Perú desde España",
    bajada: "El pasaje es lo más caro del viaje. Te contamos desde cuánto sale Madrid–Lima, qué meses son los más baratos y cómo ahorrar si te alojas con tu familia.",
    chips: [`Desde ${usd(MADRID_LIMA)}`, "Temporadas", "Con tu familia"],
    foto: "/images/destinos/trujillo-peru.jpg",
    fotoAlt: "Trujillo, Perú",
    mensaje: "¡Hola Cityland Travel! Quiero viajar de España a Perú y saber cuánto cuesta el pasaje.",
    pregunta: "¿Qué mes sale más barato el pasaje de Madrid a Lima?",
    ctaMedio: {
      titulo: "Viaja en la fecha más barata",
      texto: "Dinos entre qué fechas puedes viajar y te buscamos la más barata, con la maleta incluida.",
      boton: "Buscar mi fecha",
      mensaje: "¡Hola Cityland Travel! Quiero el pasaje Madrid–Lima más barato. ¿Qué fechas me recomiendan?",
    },
    puntosTitulo: "Lo que cuesta",
    puntos: [
      { t: "El pasaje", d: `Madrid–Lima ida y vuelta desde ${usd(MADRID_LIMA)} por persona, con impuestos. Desde otras ciudades de España hay que sumar la conexión.` },
      { t: "Temporada alta", d: "Diciembre, julio y agosto son los meses más caros: muchos residentes viajan en Navidad y en verano." },
      { t: "Fuera de las fiestas", d: "Lejos de Navidad y del verano europeo los precios suelen bajar. Te mostramos las fechas más baratas cerca de las tuyas." },
      { t: "Con tu familia", d: "Si te alojas con ellos, el gasto en el Perú baja bastante: lo grande es el pasaje." },
    ],
    listaTitulo: "Para pagar menos",
    lista: ["Compra con 2 o 3 meses de anticipación", "Evita del 15 al 24 de diciembre", "Compara la tarifa con maleta incluida", "Separa con el 50%"],
    faqs: [
      { q: "¿Cuánto cuesta un pasaje de Madrid a Lima?", a: `Ida y vuelta desde ${usd(MADRID_LIMA)} por persona en temporada baja, con impuestos.` },
      { q: "¿Hay vuelos directos de España a Perú?", a: "Sí, de Madrid a Lima con Iberia, LATAM, Air Europa y Plus Ultra. Desde otras ciudades se hace conexión." },
    ],
  },
];

export const LANDINGS_TRAMITES: LandingEspana[] = TRAMITES.map(landingTramite);
export const LANDINGS_PERU: LandingEspana[] = PERU;
