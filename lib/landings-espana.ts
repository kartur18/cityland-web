// Landings de España bajo /espana/<slug>: cada una responde una búsqueda real de Search Console (pasajes desde
// provincias, viajar a visitar a la familia, con niños, adultos mayores, estudiantes…) con contenido propio.
// Cityland vende pasajes y viajes: ninguna página ofrece ni promete trabajo en España. 28-oct-2026.

export interface PuntoLanding {
  t: string;
  d: string;
}

export interface LandingEspana {
  slug: string;
  tituloSeo: string;
  descripcion: string;
  migas: string;
  sello: string;
  h1: string;
  bajada: string;
  chips: string[];
  // Cada página lleva una foto distinta de las demás.
  foto: string;
  etiquetaPrecio: string;
  precio: number;
  detallePrecio: string;
  boton: string;
  mensaje: string;
  puntosTitulo: string;
  puntos: PuntoLanding[];
  listaTitulo: string;
  lista: string[];
  tabla?: { titulo: string; columnas: string[]; filas: string[][]; nota?: string };
  aviso?: { titulo: string; texto: string };
  faqs: { q: string; a: string }[];
  enlaces: { href: string; texto: string }[];
}

// Referencias de precio por persona (ida y vuelta Lima–Madrid de lib/rutas-vuelos.ts; solo ida con visado).
export const PRECIO_IDA_VUELTA_MADRID = 1090;
export const PRECIO_SOLO_IDA_MADRID = 690;

const DETALLE_IDA_VUELTA = "Ida y vuelta con impuestos. Precio referencial; te damos el de tu fecha.";

interface Provincia {
  ciudad: string;
  slug: string;
  codigo: string;
  aeropuerto: string;
  duracion: string;
  precio: number;
  consejo: PuntoLanding;
  faqExtra: { q: string; a: string };
  foto: string;
}

// Vuelos nacionales a Lima: LATAM, Sky y JetSMART operan estas cinco rutas todo el año.
const PROVINCIAS: Provincia[] = [
  {
    ciudad: "Arequipa",
    slug: "arequipa",
    codigo: "AQP",
    aeropuerto: "Aeropuerto Rodríguez Ballón",
    duracion: "1 h 30 min",
    precio: 1190,
    consejo: {
      t: "Sal temprano de Arequipa",
      d: "Los vuelos a Europa salen de Lima por la tarde o la noche. Un vuelo de Arequipa en la mañana te deja en el Jorge Chávez con tiempo de sobra para la conexión.",
    },
    faqExtra: {
      q: "¿Hay vuelo directo de Arequipa a Madrid?",
      a: "No. Todos los vuelos a España salen del Jorge Chávez de Lima. Desde Arequipa vuelas primero a Lima (1 h 30 min) y ahí tomas el vuelo a Madrid, de unas 12 horas.",
    },
    foto: "/images/espana/palacio-real.jpg",
  },
  {
    ciudad: "Trujillo",
    slug: "trujillo",
    codigo: "TRU",
    aeropuerto: "Aeropuerto Carlos Martínez de Pinillos",
    duracion: "1 h 10 min",
    precio: 1190,
    consejo: {
      t: "Vuelo o bus hasta Lima",
      d: "Desde Trujillo también se llega a Lima en bus (unas 9 horas). Si prefieres el bus, te armamos el pasaje a Madrid desde Lima y te decimos a qué hora tienes que estar en el aeropuerto.",
    },
    faqExtra: {
      q: "¿Me conviene ir en bus de Trujillo a Lima y volar desde ahí?",
      a: "Puede salir más barato, pero llegas cansado y sin margen si el bus se retrasa. Si vas en bus, llega a Lima el día anterior. Con el vuelo nacional en el mismo boleto, la aerolínea te protege la conexión.",
    },
    foto: "/images/espana/puerta-de-alcala.jpg",
  },
  {
    ciudad: "Chiclayo",
    slug: "chiclayo",
    codigo: "CIX",
    aeropuerto: "Aeropuerto José Quiñones",
    duracion: "1 h 20 min",
    precio: 1210,
    consejo: {
      t: "Pocas frecuencias: reserva con tiempo",
      d: "Chiclayo tiene menos vuelos diarios a Lima que Arequipa o Cusco. En julio y diciembre se llenan rápido: cotiza el tramo nacional junto con el de Madrid.",
    },
    faqExtra: {
      q: "¿Puedo regresar de Madrid directo a Chiclayo?",
      a: "Sí, en un solo boleto Madrid–Lima–Chiclayo. Pasas Migraciones y Aduanas en Lima, y si el boleto es uno solo tu maleta sigue hasta Chiclayo.",
    },
    foto: "/images/espana/cibeles.jpg",
  },
  {
    ciudad: "Piura",
    slug: "piura",
    codigo: "PIU",
    aeropuerto: "Aeropuerto Guillermo Concha Iberico",
    duracion: "1 h 40 min",
    precio: 1230,
    consejo: {
      t: "Piura o Talara",
      d: "Si vives en Sullana, Paita o Talara, también puedes salir del aeropuerto de Talara. Te cotizamos los dos y eliges el que te queda mejor por precio y horario.",
    },
    faqExtra: {
      q: "¿Cuánto dura el viaje de Piura a Madrid?",
      a: "Entre 16 y 20 horas en total: 1 h 40 min de Piura a Lima, la espera de la conexión y unas 12 horas de Lima a Madrid.",
    },
    foto: "/images/espana/gran-via-metropolis.jpg",
  },
  {
    ciudad: "Cusco",
    slug: "cusco",
    codigo: "CUZ",
    aeropuerto: "Aeropuerto Alejandro Velasco Astete",
    duracion: "1 h 20 min",
    precio: 1190,
    consejo: {
      t: "En Cusco solo se vuela de día",
      d: "El aeropuerto de Cusco no opera de noche y en la tarde puede haber demoras por el clima. Por eso te buscamos un vuelo nacional de la mañana, con varias horas de margen en Lima.",
    },
    faqExtra: {
      q: "¿Qué pasa si se retrasa mi vuelo de Cusco?",
      a: "Si Cusco–Lima y Lima–Madrid están en el mismo boleto, la aerolínea te reacomoda en el siguiente vuelo sin costo. Con boletos separados, el retraso corre por tu cuenta: por eso dejamos un margen amplio.",
    },
    foto: "/images/destinos/madrid.webp",
  },
];

function landingProvincia(p: Provincia): LandingEspana {
  return {
    slug: `pasajes-${p.slug}-madrid`,
    tituloSeo: `Pasajes de ${p.ciudad} a Madrid ida y vuelta`,
    descripcion: `Pasajes de ${p.ciudad} a Madrid con conexión en Lima, en un solo boleto y con tu maleta hasta Barajas. Desde US$ ${p.precio.toLocaleString("en-US")} ida y vuelta. Separa con el 50%.`,
    migas: `Pasajes ${p.ciudad}–Madrid`,
    sello: `${p.ciudad} → Lima → Madrid`,
    h1: `Pasajes de ${p.ciudad} a Madrid`,
    bajada: `Sales del ${p.aeropuerto} (${p.codigo}), haces la conexión en Lima y llegas a Madrid-Barajas. Te armamos los dos vuelos en un solo boleto, con tu maleta despachada hasta España.`,
    chips: ["Un solo boleto", "Maleta hasta Madrid", "Vuelta a " + p.ciudad],
    foto: p.foto,
    etiquetaPrecio: `${p.ciudad}–Madrid, ida y vuelta desde`,
    precio: p.precio,
    detallePrecio: DETALLE_IDA_VUELTA,
    boton: "Cotizar mi pasaje",
    mensaje: `¡Hola Cityland Travel! Quiero cotizar un pasaje de ${p.ciudad} a Madrid.`,
    puntosTitulo: `Cómo es el viaje de ${p.ciudad} a Madrid`,
    puntos: [
      {
        t: "Un solo boleto, una sola maleta",
        d: `Con ${p.ciudad}–Lima–Madrid en la misma reserva, despachas tu maleta en ${p.ciudad} y la recoges recién en Madrid. No sales del aeropuerto de Lima ni vuelves a hacer cola en el mostrador.`,
      },
      {
        t: "La aerolínea cuida tu conexión",
        d: "Si el vuelo nacional se retrasa y pierdes el de Madrid, la aerolínea te reacomoda sin costo porque es el mismo boleto. Con dos boletos separados, ese riesgo es tuyo.",
      },
      p.consejo,
      {
        t: "Migraciones en Lima, no en provincia",
        d: `En ${p.ciudad} haces un vuelo nacional. El control migratorio de salida del Perú lo pasas en el Jorge Chávez, antes de embarcar a Madrid.`,
      },
    ],
    listaTitulo: "Lo que tienes que llevar",
    lista: [
      "Pasaporte vigente (para turismo no necesitas visa)",
      "Pasaje de regreso, reserva de hotel o carta de invitación",
      "Dinero para tu estadía: unos 122 € por día, con un mínimo de 1.098,90 €",
      "Seguro de viaje con cobertura mínima de 30.000 €",
      "Tu DNI para el vuelo nacional",
    ],
    tabla: {
      titulo: "Tu itinerario, tramo por tramo",
      columnas: ["Tramo", "Duración aproximada", "Dónde"],
      filas: [
        [`${p.ciudad} → Lima`, p.duracion, `${p.codigo} → LIM, vuelo nacional`],
        ["Conexión en Lima", "De 3 a 6 horas", "Aeropuerto Jorge Chávez"],
        ["Lima → Madrid", "Unas 12 horas", "LIM → MAD, vuelo directo"],
      ],
      nota: "Las horas exactas dependen de la aerolínea y de tu fecha; te las mandamos con la cotización.",
    },
    faqs: [
      p.faqExtra,
      {
        q: `¿Cuánto cuesta el pasaje de ${p.ciudad} a Madrid?`,
        a: `Ida y vuelta desde unos US$ ${p.precio.toLocaleString("en-US")} por persona, con impuestos. Julio, agosto y diciembre son los meses más caros; febrero y noviembre, los más baratos.`,
      },
      {
        q: "¿Puedo comprar solo la ida?",
        a: "Sí. Si tienes visado de estudios o de residencia te vendemos el pasaje solo de ida. Si viajas como turista, en migración te pueden pedir el regreso: te explicamos tus opciones.",
      },
      { q: "¿Cómo separo mi pasaje?", a: "Con el 50% del precio. El saldo lo pagas antes de la emisión y te mandamos el boleto por WhatsApp." },
    ],
    enlaces: [
      { href: "/vuelos/lima-madrid", texto: "Vuelos Lima–Madrid" },
      { href: "/espana/pasajes-a-madrid-desde-provincias", texto: "Pasajes desde otras ciudades" },
      { href: "/vuelos/madrid-lima", texto: "Vuelos Madrid–Lima" },
    ],
  };
}

const HUB_PROVINCIAS: LandingEspana = {
  slug: "pasajes-a-madrid-desde-provincias",
  tituloSeo: "Pasajes a Madrid desde provincias del Perú",
  descripcion:
    "Pasajes a Madrid desde Arequipa, Trujillo, Chiclayo, Piura, Cusco y otras ciudades del Perú, con conexión en Lima en un solo boleto. Separa con el 50%.",
  migas: "Pasajes desde provincias",
  sello: "Tu ciudad → Lima → Madrid",
  h1: "Pasajes a Madrid desde provincias",
  bajada:
    "Vives fuera de Lima y quieres viajar a España. Te armamos el vuelo de tu ciudad a Lima y el de Lima a Madrid en un solo boleto, para que tu maleta llegue contigo y tu conexión esté protegida.",
  chips: ["Un solo boleto", "Conexión protegida", "Atención por WhatsApp"],
  foto: "/images/espana/barajas.jpg",
  etiquetaPrecio: "Desde provincias, ida y vuelta desde",
  precio: Math.min(...PROVINCIAS.map((p) => p.precio)),
  detallePrecio: DETALLE_IDA_VUELTA,
  boton: "Cotizar desde mi ciudad",
  mensaje: "¡Hola Cityland Travel! Vivo en provincia y quiero cotizar un pasaje a Madrid.",
  puntosTitulo: "Por qué conviene un solo boleto",
  puntos: [
    { t: "Tu maleta va directo", d: "La despachas en tu ciudad y la recoges en Madrid. En Lima no tienes que salir a recogerla ni volver a despacharla." },
    { t: "Conexión protegida", d: "Si se retrasa el vuelo nacional, la aerolínea te pone en el siguiente vuelo a Madrid sin cobrarte." },
    { t: "Un solo pago y un solo código", d: "Todo el viaje queda en una reserva. Tu asesora la sigue de principio a fin y te avisa de cualquier cambio." },
    { t: "Vuelta hasta tu casa", d: "El regreso también puede ser Madrid–Lima–tu ciudad: pasas Migraciones en Lima y sigues viaje." },
  ],
  listaTitulo: "Otras ciudades desde las que te cotizamos",
  lista: ["Iquitos", "Tarapoto", "Tacna", "Juliaca y Puno", "Cajamarca", "Pucallpa", "Ayacucho", "Tumbes", "Puerto Maldonado"],
  aviso: {
    titulo: "¿Y si compro el vuelo nacional aparte?",
    texto:
      "Se puede, pero con dos boletos la conexión no está protegida y tienes que recoger y volver a despachar tu maleta en Lima. Si lo haces así, deja al menos 5 horas entre un vuelo y otro, o llega a Lima el día anterior.",
  },
  faqs: [
    { q: "¿Hay vuelos directos de provincia a España?", a: "No. Todos los vuelos a España salen del aeropuerto Jorge Chávez de Lima. Desde provincia siempre haces conexión en Lima." },
    { q: "¿Cuánto tiempo de conexión necesito en Lima?", a: "En un solo boleto, la aerolínea fija un mínimo seguro. Con boletos separados, recomendamos 5 horas o más, porque tienes que recoger la maleta y volver a despacharla." },
    { q: "¿Tengo que ir a la oficina de Lima?", a: "No. Te atendemos por WhatsApp, separas con el 50% y te mandamos el boleto a tu celular." },
  ],
  enlaces: [
    { href: "/vuelos/lima-madrid", texto: "Vuelos Lima–Madrid" },
    { href: "/pasajes-a-espana", texto: "Pasajes a toda España" },
    { href: "/blog/como-viajar-de-provincias-peru-a-espana-boleto-unico", texto: "Guía: de provincias a España" },
  ],
};

const VISITAR_FAMILIA: LandingEspana = {
  slug: "viajar-a-espana-a-visitar-familia",
  tituloSeo: "Viajar a España a visitar a tu familia",
  descripcion:
    "Viaja a Madrid a visitar a tu familia: pasaje ida y vuelta, carta de invitación, bolsa de viaje y seguro explicados. Desde US$ 1,090. Separa con el 50%.",
  migas: "Visitar a tu familia",
  sello: "Lima → Madrid · Visita familiar",
  h1: "Viajar a España a visitar a tu familia",
  bajada:
    "Tu hija, tu hermano o tus papás te esperan en España. Te vendemos el pasaje ida y vuelta y te explicamos qué preparar con tu familia: la carta de invitación, el dinero que te pueden pedir y el seguro.",
  chips: ["Ida y vuelta", "Carta de invitación", "Seguro Schengen"],
  foto: "/images/destinos/malaga.jpg",
  etiquetaPrecio: "Lima–Madrid, ida y vuelta desde",
  precio: PRECIO_IDA_VUELTA_MADRID,
  detallePrecio: DETALLE_IDA_VUELTA,
  boton: "Cotizar mi viaje",
  mensaje: "¡Hola Cityland Travel! Quiero viajar a España a visitar a mi familia.",
  puntosTitulo: "Lo que tu familia en España puede hacer por ti",
  puntos: [
    {
      t: "La carta de invitación",
      d: "Si te vas a quedar en su casa, tu familiar la tramita en la comisaría de la Policía Nacional de su ciudad, con cita previa. Reemplaza a la reserva de hotel.",
    },
    {
      t: "Comprarte el pasaje desde España",
      d: "Tu familiar nos escribe por WhatsApp desde España, paga con tarjeta o transferencia y tú recibes el itinerario en Lima.",
    },
    {
      t: "Recogerte en Barajas",
      d: "Te pasamos el número de vuelo y la terminal para que tu familia te espere en la salida. Iberia llega a la T4; Air Europa y Plus Ultra, a la T1.",
    },
    {
      t: "Elegir la fecha que le conviene",
      d: "Si tu familiar trabaja, viaja cuando tenga vacaciones o fines de semana largos. Te mostramos las fechas más baratas cerca de esos días.",
    },
  ],
  listaTitulo: "Lo que te pueden pedir al llegar",
  lista: [
    "Pasaporte vigente",
    "Pasaje de regreso a Lima",
    "Carta de invitación original de tu familiar (o reserva de hotel)",
    "Dinero para tu estadía: unos 122 € por día, con un mínimo de 1.098,90 €, aunque te alojes con tu familia",
    "Seguro de viaje de 30.000 € como mínimo",
  ],
  aviso: {
    titulo: "Somos agencia de viajes",
    texto: "Vendemos pasajes y te ayudamos a preparar tu viaje. No ofrecemos trabajo ni trámites de empleo en España.",
  },
  faqs: [
    { q: "¿Cuánto tiempo puedo quedarme visitando a mi familia?", a: "Como turista, hasta 90 días dentro de cualquier periodo de 180 días. Tu pasaje de regreso tiene que estar dentro de ese plazo." },
    { q: "Si tengo carta de invitación, ¿igual necesito dinero?", a: "Sí. La carta reemplaza al hotel, pero en migración te pueden pedir que demuestres dinero para tu estadía y tu seguro de viaje." },
    { q: "¿Mi familiar puede pagar mi pasaje desde España?", a: "Sí. Nos escribe por WhatsApp, paga desde allá y el boleto sale a tu nombre." },
    { q: "¿Qué pasa si quiero cambiar la fecha de regreso?", a: "Depende de la tarifa. Al cotizar te decimos cuánto cuesta el cambio en cada opción para que elijas con calma." },
  ],
  enlaces: [
    { href: "/blog/carta-invitacion-espana-peru-requisitos", texto: "Carta de invitación paso a paso" },
    { href: "/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje", texto: "Bolsa de viaje: cuánto llevar" },
    { href: "/pasaje-ida-y-vuelta-a-espana", texto: "Pasaje ida y vuelta a España" },
  ],
};

const CON_NINOS: LandingEspana = {
  slug: "viajar-a-espana-con-ninos",
  tituloSeo: "Viajar a España con niños desde Perú",
  descripcion:
    "Pasajes a Madrid para viajar con niños: tarifa de bebé y de niño, permiso notarial si viaja con un solo padre, pasaporte del menor y seguro. Separa con el 50%.",
  migas: "Viajar con niños",
  sello: "Lima → Madrid · En familia",
  h1: "Viajar a España con niños desde Perú",
  bajada:
    "Doce horas de vuelo con niños se preparan con tiempo. Te ayudamos a elegir el horario, pedir la cuna o los asientos juntos, y a no olvidar el permiso de viaje si el menor no viaja con sus dos padres.",
  chips: ["Tarifa de bebé y de niño", "Asientos juntos", "Permiso de viaje"],
  foto: "/images/destinos/barcelona.webp",
  etiquetaPrecio: "Lima–Madrid por adulto, ida y vuelta desde",
  precio: PRECIO_IDA_VUELTA_MADRID,
  detallePrecio: "Los niños pagan tarifa de niño y los bebés en brazos, tarifa de bebé. Precio referencial.",
  boton: "Cotizar viaje en familia",
  mensaje: "¡Hola Cityland Travel! Quiero cotizar un viaje a España con niños.",
  puntosTitulo: "Lo que cambia cuando viajas con niños",
  puntos: [
    { t: "Bebés menores de 2 años", d: "Viajan en brazos con tarifa de bebé, sin asiento propio. En vuelos largos se puede pedir la cuna del avión, sujeta a disponibilidad." },
    { t: "Niños de 2 a 11 años", d: "Pagan su asiento, con tarifa de niño según la aerolínea. Te reservamos los asientos juntos para que no viajen separados." },
    { t: "Vuelo de noche", d: "Muchos padres prefieren el vuelo nocturno: los niños duermen buena parte del viaje y llegan a Madrid por la mañana o al mediodía." },
    { t: "Cada niño, su pasaporte", d: "El menor necesita su propio pasaporte vigente, aunque sea bebé. Sácalo con tiempo en Migraciones." },
  ],
  listaTitulo: "Documentos del menor",
  lista: [
    "Pasaporte propio y vigente",
    "Permiso notarial de viaje si viaja con uno solo de sus padres o con otra persona",
    "Si viaja con papá y mamá, no necesita permiso",
    "Seguro de viaje a su nombre",
    "Dinero para su estadía: la bolsa de viaje se cuenta por cada viajero",
  ],
  faqs: [
    { q: "¿Qué permiso necesita un menor para salir del Perú?", a: "Si viaja con uno solo de sus padres, necesita la autorización notarial del otro. Si viaja sin sus padres, la de los dos. Con papá y mamá juntos no necesita permiso." },
    { q: "¿Cuánto paga un bebé?", a: "Un bebé menor de 2 años viaja en brazos con tarifa de bebé, mucho más barata que la de un adulto. Te damos el precio exacto en la cotización." },
    { q: "¿Puedo llevar el coche del bebé?", a: "Sí. La mayoría de aerolíneas te deja llevar el coche hasta la puerta del avión sin costo. Te confirmamos la regla de tu aerolínea." },
    { q: "¿Mi hijo puede viajar solo a España a ver a su papá o mamá?", a: "Sí, con el servicio de menor no acompañado de la aerolínea y la autorización notarial. Tiene un costo extra; te lo cotizamos." },
  ],
  enlaces: [
    { href: "/blog/viajar-a-espana-con-ninos-desde-peru", texto: "Guía completa: España con niños" },
    { href: "/espana/viajar-a-espana-a-visitar-familia", texto: "Visitar a tu familia en España" },
    { href: "/seguros", texto: "Seguro de viaje" },
  ],
};

const ADULTOS_MAYORES: LandingEspana = {
  slug: "viajar-a-espana-adultos-mayores",
  tituloSeo: "Viajar a España con adultos mayores",
  descripcion:
    "Pasajes a Madrid para papás y abuelos: vuelo directo, silla de ruedas en el aeropuerto, seguro según la edad y check-in hecho por tu asesora. Separa con el 50%.",
  migas: "Adultos mayores",
  sello: "Lima → Madrid · Viaje tranquilo",
  h1: "Viajes a España para adultos mayores",
  bajada:
    "Tus papás o abuelos van a España a ver a la familia. Les buscamos el vuelo directo, pedimos la silla de ruedas si la necesitan y hacemos el check-in por ellos, para que solo se preocupen de llegar.",
  chips: ["Vuelo directo", "Silla de ruedas", "Check-in por tu asesora"],
  foto: "/images/destinos/sevilla.jpg",
  etiquetaPrecio: "Lima–Madrid, ida y vuelta desde",
  precio: PRECIO_IDA_VUELTA_MADRID,
  detallePrecio: DETALLE_IDA_VUELTA,
  boton: "Cotizar para mis papás",
  mensaje: "¡Hola Cityland Travel! Quiero cotizar un pasaje a España para un adulto mayor.",
  puntosTitulo: "Cómo cuidamos su viaje",
  puntos: [
    { t: "Vuelo directo Lima–Madrid", d: "Unas 12 horas sin escalas, sin cambiar de avión ni de terminal. Es lo más cómodo para una persona mayor." },
    { t: "Asistencia en el aeropuerto", d: "La silla de ruedas o el acompañamiento en el aeropuerto no cuestan. Lo pedimos a la aerolínea con al menos 48 horas de anticipación." },
    { t: "Asiento cómodo", d: "Te sugerimos pasillo, cerca del baño. Si la tarifa no lo incluye, te decimos cuánto cuesta elegirlo." },
    { t: "Check-in y tarjeta de embarque", d: "Tu asesora hace el check-in y les manda la tarjeta de embarque al WhatsApp de la familia." },
  ],
  listaTitulo: "Antes de viajar",
  lista: [
    "Pasaporte vigente",
    "Seguro de viaje que cubra su edad (algunos seguros cobran más desde los 70 o 75 años)",
    "Medicinas en su envase original, con la receta, en el equipaje de mano",
    "Carta de invitación de la familia o reserva de hotel",
    "Dinero para la estadía y el pasaje de regreso",
  ],
  faqs: [
    { q: "¿Hay edad máxima para viajar a España?", a: "No. Lo que cambia con la edad es el seguro de viaje: algunos tienen límite de edad o cuestan más. Te cotizamos uno que cubra a tu papá o mamá." },
    { q: "¿La silla de ruedas en el aeropuerto se paga?", a: "No. Es un servicio gratuito de la aerolínea y del aeropuerto. Solo hay que pedirlo con anticipación; lo hacemos nosotros al emitir el boleto." },
    { q: "¿Pueden viajar solos?", a: "Sí. Con la asistencia pedida, el personal del aeropuerto los acompaña en Lima y en Madrid hasta la salida, donde los espera la familia." },
  ],
  enlaces: [
    { href: "/blog/vuelos-adulto-mayor-silla-de-ruedas-lima-madrid-roma", texto: "Guía: silla de ruedas en el vuelo" },
    { href: "/viajes-adultos-mayores", texto: "Viajes para adultos mayores" },
    { href: "/espana/viajar-a-espana-a-visitar-familia", texto: "Visitar a la familia en España" },
  ],
};

const PRIMER_VIAJE: LandingEspana = {
  slug: "primer-viaje-a-espana",
  tituloSeo: "Tu primer viaje a España desde Lima",
  descripcion:
    "Primera vez que viajas a España: te acompañamos del pasaje al aeropuerto de Barajas, con lista de documentos, check-in y asesora por WhatsApp. Separa con el 50%.",
  migas: "Primer viaje",
  sello: "Lima → Madrid · Primera vez",
  h1: "Tu primer viaje a España, acompañado",
  bajada:
    "Si nunca has viajado a Europa, es normal tener dudas: qué llevar, a qué hora llegar al aeropuerto, qué te preguntan en Barajas. Tu asesora te guía paso a paso desde la cotización hasta que aterrizas.",
  chips: ["Lista de documentos", "Check-in incluido", "Asesora por WhatsApp"],
  foto: "/images/destinos/granada.jpg",
  etiquetaPrecio: "Lima–Madrid, ida y vuelta desde",
  precio: PRECIO_IDA_VUELTA_MADRID,
  detallePrecio: DETALLE_IDA_VUELTA,
  boton: "Empezar mi viaje",
  mensaje: "¡Hola Cityland Travel! Es mi primer viaje a España y quiero cotizar.",
  puntosTitulo: "Tu viaje, paso a paso",
  puntos: [
    { t: "1. Pasaporte", d: "Revisa que esté vigente. Si no tienes, sácalo en Migraciones antes de comprar: el pasaje sale con tu nombre tal cual figura en él." },
    { t: "2. Pasaje y documentos", d: "Eliges tu fecha, separas con el 50% y te mandamos la lista de documentos para tu carpeta de viaje." },
    { t: "3. El día del vuelo", d: "Llega al Jorge Chávez 3 horas antes. Tu asesora ya hizo el check-in: solo despachas tu maleta y pasas Migraciones." },
    { t: "4. Llegada a Barajas", d: "Pasas el control de pasaportes: la primera vez te registran las huellas y la foto. Luego recoges tu maleta y sales." },
  ],
  listaTitulo: "Tu carpeta de viaje",
  lista: [
    "Pasaporte vigente",
    "Pasaje de regreso impreso",
    "Reserva de hotel o carta de invitación",
    "Seguro de viaje de 30.000 € o más",
    "Dinero para tu estadía en efectivo o en tarjeta",
    "Plan de lo que vas a hacer: lugares que vas a visitar",
  ],
  faqs: [
    { q: "¿Qué me preguntan en Migraciones de Barajas?", a: "Por lo general, a qué vas, cuántos días te quedas, dónde te alojas y si tienes regreso. Responde con calma y ten tu carpeta a la mano." },
    { q: "¿Cuánta maleta puedo llevar?", a: "Depende de la tarifa: casi todas a Madrid incluyen una maleta de 23 kg y equipaje de mano. Te lo confirmamos en la cotización." },
    { q: "¿Necesito euros en efectivo?", a: "Lleva una parte en efectivo y el resto en tarjeta. Lo importante es que puedas demostrar el dinero para tu estadía si te lo piden." },
  ],
  enlaces: [
    { href: "/blog/que-preguntan-en-migraciones-espana-barajas", texto: "Qué te preguntan en Barajas" },
    { href: "/viajes/requisitos-viajar-a-espana-desde-peru", texto: "Requisitos para viajar a España" },
    { href: "/blog/viajar-a-espana-por-primera-vez-desde-peru", texto: "Guía del primer viaje" },
  ],
};

const ESTUDIANTES: LandingEspana = {
  slug: "pasajes-para-estudiantes-a-espana",
  tituloSeo: "Pasajes para estudiantes a España",
  descripcion:
    "Pasajes a Madrid para estudiar en España: solo ida con visado de estudios, maleta extra y fecha según tu matrícula. Desde US$ 690 solo ida. Separa con el 50%.",
  migas: "Estudiantes",
  sello: "Lima → Madrid · Estudios",
  h1: "Pasajes para estudiantes a España",
  bajada:
    "Te aceptaron en un máster, un grado o un curso en España. Te vendemos el pasaje solo de ida si ya tienes tu visado de estudios, con la maleta extra para tu año allá y la fecha que calza con tu matrícula.",
  chips: ["Solo ida con visado", "Maleta extra", "Fecha según tu curso"],
  foto: "/images/destinos/bilbao-guggenheim.jpg",
  etiquetaPrecio: "Lima–Madrid, solo ida desde",
  precio: PRECIO_SOLO_IDA_MADRID,
  detallePrecio: "Solo ida con impuestos, para viajeros con visado. Precio referencial.",
  boton: "Cotizar mi pasaje",
  mensaje: "¡Hola Cityland Travel! Voy a estudiar a España y quiero cotizar mi pasaje.",
  puntosTitulo: "Lo que tienes que saber",
  puntos: [
    { t: "Curso de más de 90 días", d: "Necesitas el visado de estudios del Consulado de España en Lima antes de viajar. Con el visado, puedes ir solo de ida." },
    { t: "Curso de hasta 90 días", d: "Puedes entrar como turista, sin visado, pero con pasaje de regreso dentro de esos 90 días." },
    { t: "Compra después del visado", d: "Te recomendamos emitir el boleto cuando ya tengas el visado en tu pasaporte. Mientras, podemos separarte la tarifa." },
    { t: "Maleta para todo el año", d: "Te cotizamos la maleta adicional de 23 kg al comprar el pasaje, que sale más barata que pagarla en el aeropuerto." },
  ],
  listaTitulo: "Para tu viaje de estudios",
  lista: [
    "Pasaporte con el visado de estudios (si tu curso dura más de 90 días)",
    "Carta de admisión o matrícula del centro de estudios",
    "Seguro médico que pide el visado",
    "Dirección donde vas a vivir en España",
  ],
  faqs: [
    { q: "¿Puedo comprar solo la ida si voy a estudiar?", a: "Sí, si tienes visado de estudios. Si tu curso dura 90 días o menos y vas sin visado, necesitas pasaje de regreso." },
    { q: "¿Ustedes tramitan el visado de estudios?", a: "Te orientamos con la carpeta y los requisitos; el visado lo otorga el Consulado de España en Lima." },
    { q: "¿Qué fecha me conviene?", a: "Una o dos semanas antes del inicio de clases, para instalarte. Septiembre es temporada media; cotiza con dos meses de anticipación." },
  ],
  enlaces: [
    { href: "/visa-de-estudios-para-espana", texto: "Visa de estudios para España" },
    { href: "/blog/visa-de-estudios-espana-desde-peru", texto: "Guía: visado de estudios" },
    { href: "/pasaje-solo-ida-a-espana", texto: "Pasaje solo de ida" },
  ],
};

const REAGRUPACION: LandingEspana = {
  slug: "pasaje-reagrupacion-familiar-espana",
  tituloSeo: "Pasaje para reagrupación familiar en España",
  descripcion:
    "Tu familia en España ya te reagrupó: pasaje solo de ida Lima–Madrid con tu visado de residencia, maletas extra y fecha dentro de la vigencia del visado.",
  migas: "Reagrupación familiar",
  sello: "Lima → Madrid · Reencuentro",
  h1: "Pasaje para reunirte con tu familia en España",
  bajada:
    "Tu esposo, tu esposa o tus papás ya hicieron el trámite de reagrupación y el Consulado te dio el visado. Te vendemos el pasaje solo de ida, con las maletas que necesitas para empezar tu vida allá.",
  chips: ["Solo ida con visado", "2 maletas de 23 kg", "Viaje de toda la familia"],
  foto: "/images/destinos/valencia-artes.jpg",
  etiquetaPrecio: "Lima–Madrid, solo ida desde",
  precio: PRECIO_SOLO_IDA_MADRID,
  detallePrecio: "Solo ida con impuestos, para viajeros con visado. Precio referencial.",
  boton: "Cotizar mi pasaje",
  mensaje: "¡Hola Cityland Travel! Tengo visado de reagrupación familiar y quiero cotizar mi pasaje a España.",
  puntosTitulo: "Cómo funciona",
  puntos: [
    { t: "1. Tu familiar inicia el trámite", d: "El familiar que vive en España pide la autorización de reagrupación en la Oficina de Extranjería de su provincia." },
    { t: "2. Tú pides el visado en Lima", d: "Con la autorización aprobada, solicitas el visado de residencia en el Consulado de España en Lima." },
    { t: "3. Viajas solo de ida", d: "Con el visado en tu pasaporte, compras el pasaje solo de ida y entras a España dentro de la vigencia del visado." },
    { t: "4. Tu tarjeta en España", d: "Ya en España, tramitas tu tarjeta de identidad de extranjero (TIE) en el plazo que te indican." },
  ],
  listaTitulo: "Para tu viaje",
  lista: [
    "Pasaporte con el visado de residencia por reagrupación",
    "Copia de la autorización de reagrupación",
    "Dirección y teléfono de tu familiar en España",
    "Partidas o documentos apostillados que te pidieron en el trámite",
  ],
  aviso: {
    titulo: "Somos agencia de viajes",
    texto:
      "Vendemos el pasaje y te ayudamos a organizar tu viaje. El trámite de reagrupación lo hace tu familiar en España y el visado lo da el Consulado. No ofrecemos trabajo ni contratos en España.",
  },
  faqs: [
    { q: "¿Puedo viajar solo de ida con visado de reagrupación?", a: "Sí. El visado de residencia te permite entrar sin pasaje de regreso. Viaja dentro de las fechas de validez del visado." },
    { q: "¿Viajan también mis hijos?", a: "Si los incluyeron en la reagrupación y tienen su visado, sí. Te armamos la reserva de toda la familia en el mismo vuelo." },
    { q: "¿Mi familiar puede pagar el pasaje desde España?", a: "Sí. Nos escribe por WhatsApp, paga desde allá y el boleto sale a tu nombre." },
    { q: "¿Ustedes hacen el trámite de reagrupación?", a: "No. Lo hace tu familiar en la Oficina de Extranjería en España. Nosotros te vendemos el pasaje y te orientamos con el viaje." },
  ],
  enlaces: [
    { href: "/blog/reagrupacion-familiar-espana-desde-peru", texto: "Guía: reagrupación familiar" },
    { href: "/blog/vuelos-reagrupacion-familiar-espana-italia", texto: "Vuelos para reagrupación" },
    { href: "/pasaje-solo-ida-a-espana", texto: "Pasaje solo de ida a España" },
  ],
};

const MAS_BARATO: LandingEspana = {
  slug: "pasajes-baratos-lima-madrid",
  tituloSeo: "Pasajes baratos Lima Madrid: cuándo comprar",
  descripcion:
    "Cuándo están más baratos los pasajes Lima–Madrid: meses de temporada baja, alta y media, con cuánta anticipación comprar y cómo separar con el 50%.",
  migas: "Pasajes baratos",
  sello: "Lima → Madrid · Mejor precio",
  h1: "Pasajes baratos de Lima a Madrid",
  bajada:
    "El mismo vuelo puede costar varios cientos de dólares más según el mes. Te mostramos cuándo es temporada baja, cuánto antes comprar y te separamos la tarifa con el 50% para que no se te escape.",
  chips: ["Temporada baja", "Separa con el 50%", "Precio de tu fecha"],
  foto: "/images/espana/plaza-mayor.jpg",
  etiquetaPrecio: "Lima–Madrid, ida y vuelta desde",
  precio: PRECIO_IDA_VUELTA_MADRID,
  detallePrecio: "En temporada baja, con impuestos. Precio referencial; te damos el de tu fecha.",
  boton: "Buscar mi mejor precio",
  mensaje: "¡Hola Cityland Travel! Quiero el pasaje más barato de Lima a Madrid.",
  puntosTitulo: "Cómo pagar menos",
  puntos: [
    { t: "Viaja en temporada baja", d: "Febrero, noviembre y la segunda quincena de enero son los meses más baratos para volar Lima–Madrid." },
    { t: "Compra con anticipación", d: "Para temporada alta (julio, agosto y diciembre), cotiza con 3 a 4 meses. Para el resto del año, con 1 a 2 meses." },
    { t: "Mueve tu fecha unos días", d: "Salir un martes o un miércoles, o correr la fecha una semana, a veces baja bastante el precio. Te mostramos las fechas cercanas." },
    { t: "Compara con la maleta incluida", d: "Una tarifa barata sin maleta puede salir más cara. Te comparamos las opciones con el equipaje que de verdad vas a llevar." },
  ],
  listaTitulo: "Temporada alta: compra con tiempo",
  lista: ["Julio y agosto (vacaciones de verano en Europa)", "Diciembre y la primera semana de enero", "Semana Santa", "Fiestas Patrias en el Perú"],
  tabla: {
    titulo: "Precio del pasaje Lima–Madrid, mes a mes",
    columnas: ["Mes", "Temporada", "Cuándo cotizar"],
    filas: [
      ["Enero", "Alta hasta Reyes, luego baja", "1 a 2 meses antes"],
      ["Febrero", "Baja", "1 mes antes"],
      ["Marzo y abril", "Media (alta en Semana Santa)", "2 meses antes"],
      ["Mayo y junio", "Media", "2 meses antes"],
      ["Julio y agosto", "Alta", "3 a 4 meses antes"],
      ["Septiembre y octubre", "Media", "1 a 2 meses antes"],
      ["Noviembre", "Baja", "1 mes antes"],
      ["Diciembre", "Alta", "3 a 4 meses antes"],
    ],
    nota: "Es la tendencia de cada año; el precio exacto depende de la fecha, la aerolínea y los asientos que queden.",
  },
  faqs: [
    { q: "¿Cuál es el mes más barato para viajar a Madrid?", a: "Por lo general, febrero y noviembre. También la segunda quincena de enero, después del Día de Reyes." },
    { q: "¿Cómo aseguro el precio que me cotizaron?", a: "Separando con el 50%. Las tarifas cambian todos los días: mientras antes separes, más fácil es mantener el precio de tu cotización." },
    { q: "¿Es más barato comprar a última hora?", a: "Casi nunca en esta ruta. Los asientos baratos se venden primero y lo que queda al final suele ser más caro." },
  ],
  enlaces: [
    { href: "/viajar-a-espana-en-febrero", texto: "Viajar a España en febrero" },
    { href: "/viajar-a-espana-en-noviembre", texto: "Viajar a España en noviembre" },
    { href: "/vuelos/lima-madrid", texto: "Vuelos Lima–Madrid" },
  ],
};

export const LANDINGS_ESPANA: readonly LandingEspana[] = [
  HUB_PROVINCIAS,
  ...PROVINCIAS.map(landingProvincia),
  VISITAR_FAMILIA,
  CON_NINOS,
  ADULTOS_MAYORES,
  PRIMER_VIAJE,
  ESTUDIANTES,
  REAGRUPACION,
  MAS_BARATO,
];

export function buscarLandingEspana(slug: string): LandingEspana | undefined {
  return LANDINGS_ESPANA.find((l) => l.slug === slug);
}

export const rutaLandingEspana = (l: LandingEspana) => `/espana/${l.slug}`;
