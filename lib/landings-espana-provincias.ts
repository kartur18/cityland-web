import {
  ATAJOS_MESES,
  DETALLE_IDA_VUELTA,
  PRECIO_IDA_VUELTA_MADRID,
  type LandingEspana,
  type PuntoLanding,
} from "@/lib/landings-espana-tipos";

// Pasajes de cada ciudad del Perú a Madrid con conexión en Lima (todos los vuelos a España salen del Jorge Chávez).
// El precio es el de Lima–Madrid más lo que suele sumar el tramo nacional en el mismo boleto.

interface Provincia {
  ciudad: string;
  slug: string;
  codigo: string;
  aeropuerto: string;
  duracion: string;
  // Lo que suele sumar el vuelo nacional al Lima–Madrid, en US$.
  recargo: number;
  consejo: PuntoLanding;
  faqExtra: { q: string; a: string };
  // Por qué se llenan antes los vuelos de esa ciudad (va en el cierre).
  urgencia: string;
  foto: string;
  fotoAlt?: string;
}

const URGENCIA_COMUN = "en julio y diciembre los asientos baratos se venden primero, en el vuelo nacional y en el de Madrid.";

const PROVINCIAS: Provincia[] = [
  {
    ciudad: "Arequipa",
    slug: "arequipa",
    codigo: "AQP",
    aeropuerto: "Aeropuerto Rodríguez Ballón",
    duracion: "1 h 30 min",
    recargo: 100,
    consejo: {
      t: "Sal temprano de Arequipa",
      d: "Los vuelos a Europa salen de Lima por la tarde o la noche. Un vuelo de Arequipa en la mañana te deja en el Jorge Chávez con tiempo de sobra para la conexión.",
    },
    faqExtra: {
      q: "¿Hay vuelo directo de Arequipa a Madrid?",
      a: "No. Todos los vuelos a España salen del Jorge Chávez de Lima. Desde Arequipa vuelas primero a Lima (1 h 30 min) y ahí tomas el vuelo a Madrid, de unas 12 horas.",
    },
    urgencia: `Arequipa tiene muchos vuelos a Lima, pero ${URGENCIA_COMUN}`,
    foto: "/images/espana/palacio-real.jpg",
  },
  {
    ciudad: "Trujillo",
    slug: "trujillo",
    codigo: "TRU",
    aeropuerto: "Aeropuerto Carlos Martínez de Pinillos",
    duracion: "1 h 10 min",
    recargo: 100,
    consejo: {
      t: "Vuelo o bus hasta Lima",
      d: "Desde Trujillo también se llega a Lima en bus (unas 9 horas). Si prefieres el bus, te armamos el pasaje a Madrid desde Lima y te decimos a qué hora tienes que estar en el aeropuerto.",
    },
    faqExtra: {
      q: "¿Me conviene ir en bus de Trujillo a Lima y volar desde ahí?",
      a: "Puede salir más barato, pero llegas cansado y sin margen si el bus se retrasa. Si vas en bus, llega a Lima el día anterior. Con el vuelo nacional en el mismo boleto, la aerolínea te protege la conexión.",
    },
    urgencia: `Desde Trujillo, ${URGENCIA_COMUN}`,
    foto: "/images/espana/puerta-de-alcala.jpg",
  },
  {
    ciudad: "Chiclayo",
    slug: "chiclayo",
    codigo: "CIX",
    aeropuerto: "Aeropuerto José Quiñones",
    duracion: "1 h 20 min",
    recargo: 120,
    consejo: {
      t: "Pocas frecuencias: reserva con tiempo",
      d: "Chiclayo tiene menos vuelos diarios a Lima que Arequipa o Cusco. En julio y diciembre se llenan rápido: cotiza el tramo nacional junto con el de Madrid.",
    },
    faqExtra: {
      q: "¿Puedo regresar de Madrid directo a Chiclayo?",
      a: "Sí, en un solo boleto Madrid–Lima–Chiclayo. Pasas Migraciones y Aduanas en Lima, y si el boleto es uno solo tu maleta sigue hasta Chiclayo.",
    },
    urgencia: "Chiclayo tiene pocos vuelos diarios a Lima: en julio y diciembre son los primeros que se llenan.",
    foto: "/images/espana/cibeles.jpg",
  },
  {
    ciudad: "Piura",
    slug: "piura",
    codigo: "PIU",
    aeropuerto: "Aeropuerto Guillermo Concha Iberico",
    duracion: "1 h 40 min",
    recargo: 140,
    consejo: {
      t: "Piura o Talara",
      d: "Si vives en Sullana, Paita o Talara, también puedes salir del aeropuerto de Talara. Te cotizamos los dos y eliges el que te queda mejor por precio y horario.",
    },
    faqExtra: {
      q: "¿Cuánto dura el viaje de Piura a Madrid?",
      a: "Entre 16 y 20 horas en total: 1 h 40 min de Piura a Lima, la espera de la conexión y unas 12 horas de Lima a Madrid.",
    },
    urgencia: `Desde Piura, ${URGENCIA_COMUN}`,
    foto: "/images/espana/gran-via-metropolis.jpg",
  },
  {
    ciudad: "Cusco",
    slug: "cusco",
    codigo: "CUZ",
    aeropuerto: "Aeropuerto Alejandro Velasco Astete",
    duracion: "1 h 20 min",
    recargo: 100,
    consejo: {
      t: "En Cusco solo se vuela de día",
      d: "El aeropuerto de Cusco no opera de noche y en la tarde puede haber demoras por el clima. Por eso te buscamos un vuelo nacional de la mañana, con varias horas de margen en Lima.",
    },
    faqExtra: {
      q: "¿Qué pasa si se retrasa mi vuelo de Cusco?",
      a: "Si Cusco–Lima y Lima–Madrid están en el mismo boleto, la aerolínea te reacomoda en el siguiente vuelo sin costo. Con boletos separados, el retraso corre por tu cuenta: por eso dejamos un margen amplio.",
    },
    urgencia: "Los vuelos de la mañana de Cusco a Lima, que son los que mejor conectan con Madrid, se llenan primero en julio y diciembre.",
    foto: "/images/destinos/madrid.webp",
  },
  {
    ciudad: "Iquitos",
    slug: "iquitos",
    codigo: "IQT",
    aeropuerto: "Aeropuerto Francisco Secada Vignetta",
    duracion: "1 h 45 min",
    recargo: 140,
    consejo: {
      t: "Desde Iquitos solo se sale en avión",
      d: "Iquitos no tiene carretera a Lima: el vuelo nacional es obligatorio. Por eso conviene que vaya en el mismo boleto que el de Madrid, así la aerolínea responde si se retrasa.",
    },
    faqExtra: {
      q: "¿Puedo llevar productos de la selva a España?",
      a: "No lleves carne, leche, queso ni otros productos de origen animal: no se pueden entrar a la Unión Europea desde fuera. Frutas y plantas también tienen reglas; si dudas, mejor no las lleves.",
    },
    urgencia: "Como de Iquitos solo se sale en avión, los vuelos a Lima se llenan antes en julio, Fiestas Patrias y diciembre.",
    foto: "/images/destinos/tenerife.jpg",
    fotoAlt: "Tenerife, en las islas Canarias de España",
  },
  {
    ciudad: "Tarapoto",
    slug: "tarapoto",
    codigo: "TPP",
    aeropuerto: "Aeropuerto Guillermo del Castillo Paredes",
    duracion: "1 h 15 min",
    recargo: 120,
    consejo: {
      t: "Vuelo de la mañana a Lima",
      d: "Los vuelos a Madrid salen de Lima por la tarde o la noche. Con un vuelo de Tarapoto en la mañana llegas con horas de margen y sin correr en el Jorge Chávez.",
    },
    faqExtra: {
      q: "¿Me conviene viajar en bus de Tarapoto a Lima?",
      a: "Son más de 20 horas de carretera. Si igual prefieres el bus, llega a Lima el día anterior a tu vuelo a Madrid. En avión, con el mismo boleto, tu conexión queda protegida.",
    },
    urgencia: `Desde Tarapoto, ${URGENCIA_COMUN}`,
    foto: "/images/destinos/valladolid.jpg",
    fotoAlt: "Valladolid, España",
  },
  {
    ciudad: "Tacna",
    slug: "tacna",
    codigo: "TCQ",
    aeropuerto: "Aeropuerto Carlos Ciriani Santa Rosa",
    duracion: "1 h 35 min",
    recargo: 140,
    consejo: {
      t: "Tu maleta va de Tacna a Madrid",
      d: "En un solo boleto despachas tu maleta en Tacna y la recoges en Barajas. En Lima solo cambias de avión y pasas Migraciones antes de embarcar.",
    },
    faqExtra: {
      q: "¿Cuántas horas de conexión tengo en Lima?",
      a: "Por lo general, entre 3 y 6 horas, según el vuelo de Tacna que elijas. Te mandamos las opciones con la hora de llegada a Lima y la de salida a Madrid.",
    },
    urgencia: `Desde Tacna, ${URGENCIA_COMUN}`,
    foto: "/images/destinos/a-coruna.jpg",
    fotoAlt: "A Coruña, en Galicia, España",
  },
  {
    ciudad: "Juliaca",
    slug: "juliaca",
    codigo: "JUL",
    aeropuerto: "Aeropuerto Inca Manco Cápac",
    duracion: "1 h 30 min",
    recargo: 140,
    consejo: {
      t: "Si vives en Puno, sales por Juliaca",
      d: "El aeropuerto de Juliaca queda a menos de una hora de Puno. Sal con tiempo por la carretera: te buscamos un vuelo a Lima que deje varias horas de margen para el de Madrid.",
    },
    faqExtra: {
      q: "¿Hay vuelos de Puno a Madrid?",
      a: "Puno no tiene aeropuerto propio: sales por Juliaca, vuelas a Lima y ahí tomas el vuelo a Madrid. Te armamos todo en un solo boleto.",
    },
    urgencia: "Juliaca tiene pocos vuelos diarios a Lima: en julio y diciembre los que conectan con Madrid se llenan primero.",
    foto: "/images/destinos/oviedo.jpg",
    fotoAlt: "Oviedo, en Asturias, España",
  },
  {
    ciudad: "Cajamarca",
    slug: "cajamarca",
    codigo: "CJA",
    aeropuerto: "Aeropuerto Armando Revoredo Iglesias",
    duracion: "1 h 20 min",
    recargo: 140,
    consejo: {
      t: "Pocos vuelos al día: cotiza todo junto",
      d: "Cajamarca tiene pocas salidas diarias a Lima. Si separas el vuelo nacional y el de Madrid en el mismo boleto, tu asiento en los dos queda asegurado.",
    },
    faqExtra: {
      q: "¿Qué pasa si se cancela mi vuelo de Cajamarca por el clima?",
      a: "Si Cajamarca–Lima y Lima–Madrid están en el mismo boleto, la aerolínea te reacomoda sin costo en el siguiente vuelo. Con boletos separados, el riesgo es tuyo.",
    },
    urgencia: "Con pocas salidas diarias de Cajamarca a Lima, en julio y diciembre esos asientos son los primeros en acabarse.",
    foto: "/images/destinos/cajamarca-peru.jpg",
    fotoAlt: "Cajamarca, Perú",
  },
  {
    ciudad: "Pucallpa",
    slug: "pucallpa",
    codigo: "PCL",
    aeropuerto: "Aeropuerto David Abensur Rengifo",
    duracion: "1 h",
    recargo: 120,
    consejo: {
      t: "Una hora a Lima",
      d: "El vuelo de Pucallpa a Lima dura cerca de una hora. Te buscamos el horario que deje un margen cómodo para la conexión a Madrid.",
    },
    faqExtra: {
      q: "¿Puedo volver de Madrid directo a Pucallpa?",
      a: "Sí, en un solo boleto Madrid–Lima–Pucallpa. Pasas Migraciones y Aduanas en Lima y tomas el vuelo nacional a Pucallpa.",
    },
    urgencia: `Desde Pucallpa, ${URGENCIA_COMUN}`,
    foto: "/images/destinos/vigo.jpg",
    fotoAlt: "Vigo, en Galicia, España",
  },
  {
    ciudad: "Ayacucho",
    slug: "ayacucho",
    codigo: "AYP",
    aeropuerto: "Aeropuerto Alfredo Mendívil Duarte",
    duracion: "1 h",
    recargo: 140,
    consejo: {
      t: "Ojo con Semana Santa",
      d: "En Semana Santa los vuelos de Ayacucho a Lima se llenan con semanas de anticipación. Si vas a España en esas fechas, cotiza los dos tramos con tiempo.",
    },
    faqExtra: {
      q: "¿Me conviene ir en bus de Ayacucho a Lima?",
      a: "Son unas 9 horas de carretera. Si vas en bus, llega a Lima el día anterior a tu vuelo. En avión es una hora y, en el mismo boleto, la conexión queda protegida.",
    },
    urgencia: "En Semana Santa, Fiestas Patrias y diciembre los vuelos de Ayacucho a Lima se llenan con semanas de anticipación.",
    foto: "/images/destinos/ayacucho-peru.jpg",
    fotoAlt: "Ayacucho, Perú",
  },
  {
    ciudad: "Tumbes",
    slug: "tumbes",
    codigo: "TBP",
    aeropuerto: "Aeropuerto Pedro Canga Rodríguez",
    duracion: "1 h 50 min",
    recargo: 160,
    consejo: {
      t: "Tumbes o Piura",
      d: "Tumbes tiene pocos vuelos a Lima. Si el de tu fecha no calza, te cotizamos también desde Piura, a unas 4 horas por carretera, y eliges lo que te conviene.",
    },
    faqExtra: {
      q: "¿Cuánto dura el viaje de Tumbes a Madrid?",
      a: "Entre 17 y 21 horas en total: casi 2 horas de Tumbes a Lima, la conexión y unas 12 horas de Lima a Madrid.",
    },
    urgencia: "Tumbes tiene pocos vuelos a Lima por día: en julio y diciembre se acaban antes que los de Madrid.",
    foto: "/images/destinos/cartagena-espana.jpg",
    fotoAlt: "Cartagena, en Murcia, España",
  },
  {
    ciudad: "Puerto Maldonado",
    slug: "puerto-maldonado",
    codigo: "PEM",
    aeropuerto: "Aeropuerto Padre José Aldámiz",
    duracion: "1 h 40 min",
    recargo: 160,
    consejo: {
      t: "Algunos vuelos paran en Cusco",
      d: "Hay vuelos de Puerto Maldonado a Lima sin escalas y otros que paran en Cusco. Te mostramos los dos y te recomendamos el que deja más margen para el vuelo a Madrid.",
    },
    faqExtra: {
      q: "Si mi vuelo para en Cusco, ¿tengo que bajar del avión?",
      a: "Depende del vuelo; te lo decimos en la cotización. En un solo boleto tu maleta sigue hasta Madrid igual.",
    },
    urgencia: "Puerto Maldonado tiene pocas salidas diarias: en julio y diciembre se llenan antes que el vuelo a Madrid.",
    foto: "/images/destinos/gijon.jpg",
    fotoAlt: "Gijón, en Asturias, España",
  },
  {
    ciudad: "Jaén",
    slug: "jaen",
    codigo: "JAE",
    aeropuerto: "Aeropuerto de Shumba",
    duracion: "1 h 20 min",
    recargo: 180,
    consejo: {
      t: "Jaén o Chiclayo",
      d: "Jaén tiene pocos vuelos a la semana. Si no hay el día que necesitas, te cotizamos desde Chiclayo, a unas 6 horas por carretera, con más salidas a Lima.",
    },
    faqExtra: {
      q: "¿Hay vuelos todos los días de Jaén a Lima?",
      a: "No siempre: la frecuencia cambia según la temporada. Te decimos qué días hay vuelo y, si no calza, te armamos la salida por Chiclayo.",
    },
    urgencia: "Con pocos vuelos a la semana desde Jaén, cada asiento cuenta: en julio y diciembre se acaban primero.",
    foto: "/images/destinos/pamplona.jpg",
    fotoAlt: "Pamplona, en Navarra, España",
  },
  {
    ciudad: "Talara",
    slug: "talara",
    codigo: "TYL",
    aeropuerto: "Aeropuerto Víctor Montes Arias",
    duracion: "1 h 40 min",
    recargo: 160,
    consejo: {
      t: "Talara, Máncora y Los Órganos",
      d: "Si vives en Talara, Máncora o Los Órganos, sales por aquí. Si el vuelo de tu fecha no calza, te cotizamos también desde Piura, a unas 2 horas por carretera.",
    },
    faqExtra: {
      q: "¿Qué me conviene, salir de Talara o de Piura?",
      a: "Depende del día: Piura tiene más vuelos a Lima y Talara te queda más cerca. Te cotizamos los dos y eliges por precio y horario.",
    },
    urgencia: "Talara tiene pocas salidas diarias a Lima: en julio y diciembre se acaban antes que los vuelos a Madrid.",
    foto: "/images/destinos/vitoria.jpg",
    fotoAlt: "Vitoria-Gasteiz, en el País Vasco, España",
  },
  {
    ciudad: "Huánuco",
    slug: "huanuco",
    codigo: "HUU",
    aeropuerto: "Aeropuerto David Figueroa Fernandini",
    duracion: "1 h",
    recargo: 160,
    consejo: {
      t: "Un vuelo corto y pocas frecuencias",
      d: "El vuelo de Huánuco a Lima dura cerca de una hora, pero hay pocas salidas. Si vas en bus (unas 8 horas), llega a Lima el día anterior a tu vuelo a Madrid.",
    },
    faqExtra: {
      q: "¿Puedo comprar el vuelo de Huánuco aparte?",
      a: "Se puede, pero con dos boletos la conexión no está protegida y tienes que recoger tu maleta en Lima. Deja al menos 5 horas entre los dos vuelos.",
    },
    urgencia: "Con pocas salidas de Huánuco a Lima, en julio y diciembre esos asientos se acaban antes que los de Madrid.",
    foto: "/images/destinos/jerez.jpg",
    fotoAlt: "Jerez de la Frontera, en Andalucía, España",
  },
];

export const PRECIO_DESDE_PROVINCIAS = PRECIO_IDA_VUELTA_MADRID + Math.min(...PROVINCIAS.map((p) => p.recargo));

export const CIUDADES_PROVINCIA = PROVINCIAS.map((p) => p.ciudad);

function landingProvincia(p: Provincia): LandingEspana {
  const precio = PRECIO_IDA_VUELTA_MADRID + p.recargo;
  const precioTexto = precio.toLocaleString("en-US");
  return {
    slug: `pasajes-${p.slug}-madrid`,
    tituloSeo: `Pasajes ${p.ciudad} a Madrid vía Lima`,
    descripcion: `Pasajes de ${p.ciudad} a Madrid con conexión en Lima, en un solo boleto y con tu maleta hasta Barajas. Desde US$ ${precioTexto} ida y vuelta. Separa con el 50%.`,
    migas: `Pasajes ${p.ciudad}–Madrid`,
    sello: `${p.ciudad} → Lima → Madrid`,
    h1: `${p.ciudad} a Madrid vía Lima`,
    bajada: `Sales del ${p.aeropuerto} (${p.codigo}), haces la conexión en Lima y llegas a Madrid-Barajas. Te armamos los dos vuelos en un solo boleto, con tu maleta despachada hasta España.`,
    chips: ["Un solo boleto", "Maleta hasta Madrid", "Vuelta a " + p.ciudad],
    foto: p.foto,
    fotoAlt: p.fotoAlt,
    tema: "provincia",
    etiquetaPrecio: `${p.ciudad}–Madrid, ida y vuelta desde`,
    precio,
    detallePrecio: DETALLE_IDA_VUELTA,
    boton: "Cotizar mi pasaje",
    mensaje: `¡Hola Cityland Travel! Quiero cotizar un pasaje de ${p.ciudad} a Madrid.`,
    pregunta: `¿Qué vuelo de ${p.ciudad} conecta mejor con Madrid y cuánto sale ida y vuelta?`,
    atajosTitulo: `¿Cuándo quieres viajar de ${p.ciudad}?`,
    atajos: ATAJOS_MESES(p.ciudad),
    urgencia: p.urgencia,
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
      "Tu DNI para el vuelo nacional",
      "Tu pasaje ida y vuelta, impreso o en el celular",
      "Dinero para tu estadía: unos 122 € por día, con un mínimo de 1.098,90 €",
      "La dirección donde te vas a quedar en España",
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
        a: `Ida y vuelta desde unos US$ ${precioTexto} por persona, con impuestos. Julio, agosto y diciembre son los meses más caros; febrero y noviembre, los más baratos.`,
      },
      {
        q: "¿Puedo comprar solo la ida?",
        a: "Sí, si tienes visado de estudios o de residencia. Si viajas como turista, te vendemos el pasaje ida y vuelta.",
      },
      { q: "¿Cómo separo mi pasaje?", a: "Con el 50% del precio. El saldo lo pagas antes de la emisión y te mandamos el boleto por WhatsApp." },
    ],
    enlaces: [
      { href: "/vuelos/lima-madrid", texto: "Vuelos Lima–Madrid" },
      { href: "/espana/pasajes-a-madrid-desde-provincias", texto: "Pasajes desde otras ciudades" },
      { href: "/espana/llegada-aeropuerto-madrid-barajas", texto: "Tu llegada a Barajas" },
    ],
  };
}

export const LANDINGS_PROVINCIAS: LandingEspana[] = PROVINCIAS.map(landingProvincia);
