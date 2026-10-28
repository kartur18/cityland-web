import { IMG_FAMILIA_VIAJE, IMG_OFICINA_CORPORATIVA, IMG_PASAPORTE_VIAJE, IMG_VIAJERO_MALETA } from "@/lib/imagenes-destinos";
import { DETALLE, ENLACES_BASE, RUTA_SOLO_IDA, SECCION, base, og } from "@/lib/solo-ida-comun";
import type { LandingEspana, PuntoLanding } from "@/lib/landings-espana-tipos";

// Guías prácticas para quien se va a vivir a España o vuelve a su casa allá. Solo temas con datos confirmados
// en fuentes oficiales (Policía Nacional, Migraciones del Perú, normas de la UE); lo que cambia se dice con «suele».

interface Guia {
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
  medio: { titulo: string; texto: string; boton: string };
  puntosTitulo: string;
  puntos: PuntoLanding[];
  listaTitulo: string;
  lista: string[];
  faqs: { q: string; a: string }[];
  enlaces?: { href: string; texto: string }[];
}

const GUIAS: Guia[] = [
  {
    slug: "equipaje-para-mudarte-a-espana",
    tituloSeo: "Equipaje para mudarte a España desde Perú",
    descripcion: "Cuántas maletas llevar si te mudas a España: tarifas con 1 o 2 maletas de 23 kg, peso máximo, qué va en la de mano y cómo ahorrar en la maleta extra.",
    migas: "Equipaje para mudarte",
    h1: "Equipaje para mudarte a España",
    bajada: "Te vas con tu vida en las maletas. Te ayudamos a elegir la tarifa con las maletas que de verdad necesitas, porque comprarlas después sale más caro.",
    chips: ["Maletas de 23 kg", "Máximo 32 kg", "Documentos en la de mano"],
    foto: IMG_VIAJERO_MALETA,
    fotoAlt: "Viajero con maleta en el aeropuerto",
    pregunta: "Me mudo a España: ¿qué tarifa me conviene si llevo 2 maletas grandes?",
    medio: { titulo: "¿Cuántas maletas llevas?", texto: "Dinos cuántas y te comparamos la tarifa que ya las incluye con la de comprarlas aparte.", boton: "Comparar con mis maletas" },
    puntosTitulo: "Lo que tienes que saber",
    puntos: [
      { t: "La tarifa más barata no trae maleta", d: "En las tarifas básicas de Iberia o Air Europa solo va el equipaje de mano. Para mudarte, conviene una tarifa con 1 o 2 maletas de 23 kg." },
      { t: "23 kg por maleta, 32 kg como máximo", d: "La maleta normal es de 23 kg. Una sola pieza no puede pasar de 32 kg aunque pagues exceso: si llevas más, reparte en dos." },
      { t: "Lo importante va contigo", d: "Pasaporte, documentos de residencia, partidas y títulos apostillados, medicinas y algo de ropa van en el equipaje de mano." },
      { t: "Compra la maleta con el pasaje", d: "Agregar una maleta al emitir el boleto suele salir más barato que pagarla en el aeropuerto." },
    ],
    listaTitulo: "En tu equipaje de mano",
    lista: ["Pasaporte y TIE o visado", "Documentos originales apostillados", "Medicinas con su receta", "Cargador y una muda de ropa", "Copia digital de todos tus documentos"],
    faqs: [
      { q: "¿Cuántos kilos puedo llevar a España?", a: "Depende de la tarifa: lo normal es 1 o 2 maletas de 23 kg más el equipaje de mano. Te lo confirmamos por escrito en la cotización." },
      { q: "¿Puedo llevar una maleta de 30 kg?", a: "Sí, pagando exceso de peso, pero ninguna pieza puede pasar de 32 kg. Suele salir más a cuenta llevar una segunda maleta." },
      { q: "¿Qué no puedo llevar a España?", a: "Carne, leche, queso ni otros productos de origen animal: no se pueden entrar a la Unión Europea desde fuera." },
    ],
  },
  {
    slug: "viajar-con-mascota-de-peru-a-espana",
    tituloSeo: "Viajar con tu mascota de Perú a España",
    descripcion: "Requisitos para llevar tu perro o gato de Perú a España: microchip, vacuna antirrábica, análisis de anticuerpos, 3 meses de espera y certificado de SENASA.",
    migas: "Viajar con mascota",
    h1: "Viajar con tu mascota de Perú a España",
    bajada: "Tu perro o tu gato también se muda. Para entrar a la Unión Europea necesita varios pasos que toman al menos 3 meses: empieza con tiempo y te armamos el vuelo que acepte mascotas.",
    chips: ["Microchip", "Rabia y anticuerpos", "3 meses de espera"],
    foto: IMG_FAMILIA_VIAJE,
    fotoAlt: "Familia preparándose para viajar",
    pregunta: "Quiero llevar a mi perro a España: ¿qué aerolínea acepta mascotas en la ruta?",
    medio: { titulo: "¿Viaja en cabina o en bodega?", texto: "Depende del peso con su transportín y de la aerolínea. Mándanos el peso y te decimos qué vuelo te sirve.", boton: "Consultar con mi asesora" },
    puntosTitulo: "Los pasos, en orden",
    puntos: [
      { t: "1. Microchip", d: "Primero el microchip ISO. Todo lo demás se hace después del chip, si no, no vale." },
      { t: "2. Vacuna contra la rabia", d: "Se pone después del microchip, con tu veterinario." },
      { t: "3. Análisis de anticuerpos", d: "Al menos 30 días después de la vacuna se toma la muestra para la titulación de anticuerpos (debe salir 0,5 UI/ml o más)." },
      { t: "4. Esperar 3 meses", d: "Desde la toma de muestra hay que esperar 3 meses antes de viajar. Por eso conviene empezar con mucha anticipación." },
      { t: "5. Certificado de SENASA", d: "El certificado sanitario de exportación de SENASA se pide pocos días antes del vuelo (al menos 72 horas antes)." },
    ],
    listaTitulo: "Lo que llevas el día del vuelo",
    lista: ["Certificado sanitario de exportación de SENASA", "Carné de vacunas con la de rabia", "Resultado del análisis de anticuerpos", "Transportín aprobado por la aerolínea"],
    faqs: [
      { q: "¿Cuánto tiempo antes tengo que empezar?", a: "Al menos 4 meses antes del viaje: entre la vacuna, el análisis y los 3 meses de espera no se puede hacer más rápido." },
      { q: "¿Mi mascota puede ir en cabina?", a: "Solo si es pequeña y la aerolínea lo permite en la ruta. Las más grandes van en bodega. Te confirmamos la regla de cada aerolínea." },
      { q: "¿Se paga aparte?", a: "Sí, la mascota tiene su propia tarifa según la aerolínea y el peso. Te la sumamos en la cotización." },
    ],
  },
  {
    slug: "menor-viaja-con-un-solo-padre-a-espana",
    tituloSeo: "Menor viaja a España con un solo padre",
    descripcion: "Tu hijo viaja a España contigo pero sin el otro padre: permiso notarial de viaje, qué hacer si el otro padre vive fuera y cuándo decide un juez.",
    migas: "Menor con un solo padre",
    h1: "Tu hijo viaja a España con uno solo de sus padres",
    bajada: "Para salir del Perú, un menor que viaja con uno solo de sus padres necesita el permiso del otro. Te contamos cómo sacarlo y te armamos la reserva de los dos.",
    chips: ["Permiso notarial", "Permiso consular", "Juez de familia"],
    foto: IMG_PASAPORTE_VIAJE,
    fotoAlt: "Pasaporte y mapa de viaje",
    pregunta: "Viajo a España con mi hijo y su papá vive fuera del Perú: ¿qué permiso necesito?",
    medio: { titulo: "¿El otro padre no puede firmar?", texto: "Cuéntanos tu caso antes de comprar. Te decimos qué documento te piden y cuándo conviene emitir el boleto.", boton: "Contar mi caso" },
    puntosTitulo: "Cómo funciona",
    puntos: [
      { t: "Permiso notarial", d: "El padre o la madre que no viaja firma la autorización de viaje ante notario en el Perú." },
      { t: "Si el otro padre vive fuera", d: "La autorización se firma en el consulado del Perú donde vive. Sirve para un viaje y tiene un plazo de vigencia: revísalo antes de comprar." },
      { t: "Si no responde", d: "Cuando el otro padre no da el permiso, el caso lo decide un juez de familia. Desde 2024 la ley prevé algunos casos en que basta la firma de un solo padre." },
      { t: "Con los dos padres", d: "Si viajan papá y mamá con el menor, no necesita permiso." },
    ],
    listaTitulo: "Documentos del menor",
    lista: ["Pasaporte propio y vigente", "Autorización notarial o consular del padre que no viaja", "Su TIE o visado si va a vivir en España", "Partida de nacimiento, por si te la piden"],
    faqs: [
      { q: "¿El permiso notarial sirve para varios viajes?", a: "Depende de cómo se redacte. Lo más común es que sirva para un viaje: pídelo con las fechas y el destino." },
      { q: "¿Mi hijo puede viajar solo?", a: "Sí, con el servicio de menor no acompañado de la aerolínea y la autorización de los dos padres. Tiene un costo extra." },
      { q: "¿Qué pasa si el permiso no está bien?", a: "En el aeropuerto no lo dejan salir del Perú. Por eso conviene revisarlo antes de emitir el boleto." },
    ],
    enlaces: [{ href: "/blog/permiso-notarial-viaje-menores-peru-requisitos", texto: "Permiso notarial paso a paso" }],
  },
  {
    slug: "autorizacion-de-regreso-a-espana",
    tituloSeo: "Autorización de regreso a España: qué es",
    descripcion: "Tu TIE está vencida y en renovación y quieres viajar al Perú: la autorización de regreso (EX-13, tasa 790-052) te deja volver a España. Vale hasta 90 días.",
    migas: "Autorización de regreso",
    h1: "Autorización de regreso para volver a España",
    bajada: "Si tu TIE venció y ya pediste la renovación, puedes viajar al Perú y volver con la autorización de regreso. Se pide en España antes de salir.",
    chips: ["EX-13", "Tasa 790-052", "Hasta 90 días"],
    foto: IMG_OFICINA_CORPORATIVA,
    fotoAlt: "Oficina de atención con escritorio",
    pregunta: "Tengo la autorización de regreso hasta una fecha: ¿qué vuelo me deja volver a tiempo?",
    medio: { titulo: "Vuelve antes de que venza", texto: "Mándanos la fecha de tu autorización y te buscamos el vuelo que llegue a España con margen.", boton: "Buscar mi vuelo" },
    puntosTitulo: "Lo que tienes que saber",
    puntos: [
      { t: "Para quién es", d: "Para residentes cuya TIE está vencida y que ya presentaron la renovación, y que necesitan salir de España mientras la resuelven." },
      { t: "Dónde se pide", d: "En la comisaría de la Policía Nacional, con cita previa, con el formulario EX-13 y la tasa 790-052." },
      { t: "Cuánto vale", d: "Te deja salir y volver a entrar dentro de su plazo, que es de 90 días como máximo." },
      { t: "Pídela antes de viajar", d: "Se tramita en España. Si ya estás en el Perú sin ella, consulta con el Consulado de España en Lima antes de comprar." },
    ],
    listaTitulo: "Para pedirla",
    lista: ["Formulario EX-13", "Tasa 790-052 pagada", "Pasaporte y tu TIE vencida", "Justificante de que pediste la renovación"],
    faqs: [
      { q: "¿Puedo volver a España con la TIE vencida?", a: "Solo si tienes la autorización de regreso vigente, que se pide en España antes de salir, con la renovación ya presentada." },
      { q: "¿Cuántos días tengo para volver?", a: "Lo que diga tu autorización, con un máximo de 90 días. Compra el vuelo de vuelta dentro de ese plazo y con margen." },
      { q: "¿Me sirve el resguardo de la renovación para volar?", a: "No basta para volver a entrar. Lo que te permite el regreso es la autorización de regreso." },
    ],
  },
  {
    slug: "renovar-la-tie-antes-de-viajar",
    tituloSeo: "Renovar la TIE antes de viajar al Perú",
    descripcion: "Vas de vacaciones al Perú y tu TIE vence pronto: cuándo puedes presentar la renovación, la cita de huellas y qué pasa si vence mientras estás fuera.",
    migas: "Renovar la TIE",
    h1: "Renovar tu TIE antes de viajar al Perú",
    bajada: "Si tu tarjeta de residencia vence cerca de tu viaje, organiza la renovación antes de salir de España. Así vuelves sin sustos y compras tu pasaje con la fecha que te conviene.",
    chips: ["60 días antes", "Cita de huellas", "Autorización de regreso"],
    foto: "/images/destinos/madrid.webp",
    fotoAlt: "Madrid, España",
    pregunta: "Mi TIE vence en dos meses y quiero ir al Perú: ¿cuándo me conviene viajar?",
    medio: { titulo: "Arma tu viaje con la fecha de tu TIE", texto: "Dinos cuándo vence tu tarjeta y te sugerimos fechas de ida y de regreso que encajen.", boton: "Planear mi viaje" },
    puntosTitulo: "Cómo organizarlo",
    puntos: [
      { t: "Cuándo renovar", d: "La renovación se puede presentar desde 60 días antes de que venza la TIE y hasta 90 días después. Lo más seguro es hacerlo antes." },
      { t: "La cita de huellas", d: "Cuando la aprueban, pides cita para la toma de huellas en la sede de cita previa de extranjería de tu provincia." },
      { t: "Si viajas en medio", d: "Si tu TIE vence durante el viaje, pide la autorización de regreso antes de salir de España." },
      { t: "Compra con anticipación", d: "Con la fecha clara, el solo ida de regreso sale más barato si lo separas con tiempo." },
    ],
    listaTitulo: "Antes de salir de España",
    lista: ["Revisa la fecha de vencimiento de tu TIE", "Presenta la renovación a tiempo", "Si vence en el viaje: autorización de regreso", "Guarda copia de todo en el celular"],
    faqs: [
      { q: "¿Puedo renovar la TIE desde el Perú?", a: "La renovación se presenta en España. Si vas a estar fuera cuando vence, organízala antes de viajar." },
      { q: "¿Qué pasa si vuelvo con la TIE vencida?", a: "Sin autorización de regreso te pueden negar el embarque o la entrada. Pídela antes de salir de España." },
    ],
    enlaces: [{ href: `${RUTA_SOLO_IDA}/autorizacion-de-regreso-a-espana`, texto: "Autorización de regreso" }],
  },
  {
    slug: "primer-mes-en-espana-con-visado",
    tituloSeo: "Tu primer mes en España con visado",
    descripcion: "Llegas a España con visado de reagrupación o de estudios: empadronamiento, cita para la TIE dentro del primer mes y qué documentos tener a mano.",
    migas: "Primer mes con visado",
    h1: "Tu primer mes en España con visado",
    bajada: "Llegaste con tu visado de reagrupación o de estudios. Tienes un mes para pedir tu TIE: te contamos el orden de los trámites para que no se te pase el plazo.",
    chips: ["TIE en 1 mes", "Empadronamiento", "Cita previa"],
    foto: "/images/destinos/granada.jpg",
    fotoAlt: "Granada, España",
    pregunta: "Llego a España con visado de estudios: ¿qué fecha me conviene para tener tiempo de pedir mi TIE?",
    medio: { titulo: "Llega con tiempo", texto: "Si empiezas clases o trámites en una fecha fija, te buscamos un vuelo que te deje unos días para instalarte.", boton: "Elegir mi fecha" },
    puntosTitulo: "El orden de los trámites",
    puntos: [
      { t: "1. Empadrónate", d: "Inscríbete en el padrón del ayuntamiento donde vas a vivir, con tu pasaporte y tu contrato de alquiler o un documento de tu domicilio." },
      { t: "2. Pide cita para la TIE", d: "Si tu visado de reagrupación o tu curso duran más de 6 meses, tienes 1 mes desde que entras para pedir la TIE en persona." },
      { t: "3. Toma de huellas", d: "La cita se pide en la sede de cita previa de extranjería de tu provincia. Ve con tu pasaporte, el visado y la tasa pagada." },
      { t: "4. Recoge tu tarjeta", d: "Unas semanas después recoges tu TIE. Guárdala con tu pasaporte: la necesitas para volver a entrar a España si viajas." },
    ],
    listaTitulo: "Ten a la mano",
    lista: ["Pasaporte con el visado", "Certificado de empadronamiento", "Fotos tamaño carné", "Tasa de la TIE pagada", "Carta de admisión o resolución de reagrupación"],
    faqs: [
      { q: "¿Cuánto tiempo tengo para pedir la TIE?", a: "Un mes desde que entras a España, si tu autorización dura más de 6 meses." },
      { q: "¿Y si mi visado de estudios es de menos de 6 meses?", a: "En ese caso no se pide TIE; el visado te sirve durante tu estadía." },
    ],
    enlaces: [
      { href: "/espana/pasaje-reagrupacion-familiar-espana", texto: "Pasaje para reagrupación" },
      { href: "/espana/pasajes-para-estudiantes-a-espana", texto: "Pasajes para estudiantes" },
    ],
  },
  {
    slug: "documentos-apostillados-para-mudarte-a-espana",
    tituloSeo: "Documentos apostillados para mudarte a España",
    descripcion: "Qué documentos del Perú llevar apostillados si te mudas a España: partidas, títulos y antecedentes. Dónde se apostillan y por qué llevar los originales.",
    migas: "Documentos apostillados",
    h1: "Documentos apostillados para mudarte a España",
    bajada: "En España te pueden pedir tus partidas, títulos o antecedentes del Perú con la apostilla. Sácalos antes de viajar: desde allá es más difícil.",
    chips: ["Apostilla de La Haya", "Originales", "Antes de viajar"],
    foto: "/images/destinos/lima-plaza-mayor.jpg",
    fotoAlt: "Plaza Mayor de Lima",
    pregunta: "Tengo que apostillar documentos antes de viajar: ¿con cuánta anticipación compro mi solo ida?",
    medio: { titulo: "Compra cuando tengas todo listo", texto: "Si tus documentos aún están en trámite, te separamos la tarifa con el 50% y emitimos cuando estén.", boton: "Separar mi tarifa" },
    puntosTitulo: "Lo que tienes que saber",
    puntos: [
      { t: "Qué es la apostilla", d: "Es el sello que hace valer un documento peruano en España, porque los dos países son parte del Convenio de La Haya." },
      { t: "Dónde se apostilla", d: "En el Ministerio de Relaciones Exteriores del Perú. Revisa en gob.pe si tu documento se puede apostillar en línea." },
      { t: "Qué suelen pedir", d: "Partida de nacimiento, de matrimonio, títulos y certificados de estudios, y certificado de antecedentes penales, según tu trámite." },
      { t: "Lleva los originales", d: "Van en tu equipaje de mano, nunca en la maleta que despachas. Guarda una copia escaneada en el celular." },
    ],
    listaTitulo: "Documentos que conviene llevar",
    lista: ["Partida de nacimiento apostillada", "Partida de matrimonio, si aplica", "Títulos y certificados de estudios", "Certificado de antecedentes penales", "Copia digital de todo"],
    faqs: [
      { q: "¿Puedo apostillar desde España?", a: "Es más difícil: el trámite se hace en el Perú. Por eso conviene hacerlo antes de viajar." },
      { q: "¿Los documentos necesitan traducción?", a: "No, si están en español. Los que estén en otro idioma pueden necesitar traducción jurada." },
    ],
  },
  {
    slug: "empadronamiento-al-llegar-a-espana",
    tituloSeo: "Empadronamiento al llegar a España",
    descripcion: "Qué es el empadronamiento, dónde se hace y qué llevar: el primer trámite al llegar a España, que te piden para la TIE, la salud y el colegio.",
    migas: "Empadronamiento",
    h1: "El empadronamiento al llegar a España",
    bajada: "Es el primer trámite cuando llegas a vivir a España: te inscribe en el ayuntamiento de tu ciudad. Sin él se traban la TIE, la tarjeta sanitaria y la matrícula de los niños.",
    chips: ["En el ayuntamiento", "Con tu domicilio", "Primer trámite"],
    foto: "/images/espana/barajas.jpg",
    fotoAlt: "Aeropuerto de Madrid-Barajas",
    pregunta: "Llego a España en unas semanas: ¿qué fecha me conviene para tener tiempo de empadronarme?",
    medio: { titulo: "Llega un día hábil", texto: "Si llegas en fin de semana o feriado, los trámites esperan. Te buscamos un vuelo que te deje días hábiles al llegar.", boton: "Ver fechas" },
    puntosTitulo: "Cómo se hace",
    puntos: [
      { t: "Dónde", d: "En el ayuntamiento de la ciudad donde vas a vivir. En las ciudades grandes se pide cita por internet o por teléfono." },
      { t: "Qué llevas", d: "Tu pasaporte o NIE y un documento de tu domicilio: el contrato de alquiler o una autorización del dueño de la vivienda." },
      { t: "Para qué sirve", d: "Te lo piden para la TIE, la tarjeta sanitaria, el colegio de los niños y muchos otros trámites." },
      { t: "Renuévalo", d: "Si no eres de la Unión Europea y no tienes residencia de larga duración, el padrón se renueva cada 2 años." },
    ],
    listaTitulo: "Para empadronarte",
    lista: ["Pasaporte o NIE", "Contrato de alquiler o autorización del propietario", "Cita previa del ayuntamiento, si la piden"],
    faqs: [
      { q: "¿Puedo empadronarme en casa de un familiar?", a: "Sí, con la autorización del titular de la vivienda y su documento. Cada ayuntamiento tiene su formulario." },
      { q: "¿Cuánto cuesta?", a: "El empadronamiento es gratuito." },
    ],
  },
];

export function landingsSoloIdaGuias(hoy: string): LandingEspana[] {
  const { desde, urgencia } = base(hoy);
  return GUIAS.map((g) => ({
    slug: g.slug,
    ruta: `${RUTA_SOLO_IDA}/${g.slug}`,
    ogImagen: og(g.slug),
    seccion: SECCION,
    tema: "soloGuia",
    tituloSeo: g.tituloSeo,
    descripcion: g.descripcion,
    migas: g.migas,
    sello: "Guía · Solo ida a España",
    h1: g.h1,
    bajada: g.bajada,
    chips: g.chips,
    foto: g.foto,
    fotoAlt: g.fotoAlt,
    etiquetaPrecio: "Lima–Madrid, solo ida desde",
    precio: desde,
    detallePrecio: DETALLE,
    calendario: { origen: "Lima", destino: "Madrid", recargo: 0 },
    boton: "Cotizar mi solo ida",
    mensaje: `¡Hola Cityland Travel! Leí la guía «${g.migas}» y quiero cotizar un pasaje solo ida a España.`,
    pregunta: g.pregunta,
    ctaMedio: { ...g.medio, mensaje: `¡Hola Cityland Travel! Leí la guía «${g.migas}» y quiero que me ayuden con mi caso.` },
    urgencia,
    puntosTitulo: g.puntosTitulo,
    puntos: g.puntos,
    listaTitulo: g.listaTitulo,
    lista: g.lista,
    faqs: g.faqs,
    enlaces: [...(g.enlaces ?? []), ...ENLACES_BASE],
  }));
}
