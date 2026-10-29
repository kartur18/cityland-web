import { buscarRutaVuelo } from "@/lib/rutas-vuelos";
import {
  DETALLE_IDA_VUELTA,
  PRECIO_IDA_VUELTA_MADRID,
  type LandingEspana,
  type PuntoLanding,
} from "@/lib/landings-espana-tipos";

// Viajar a visitar a la familia en las ciudades de España donde más peruanos viven (Madrid tiene su propia página:
// /espana/viajar-a-espana-a-visitar-familia). Cada ciudad cuenta cómo se llega desde Barajas y su temporada fuerte.

interface Tramo {
  como: string;
  tiempo: string;
  nota: string;
}

interface CiudadFamilia {
  ciudad: string;
  slug: string;
  region: string;
  aeropuerto: string;
  tramos: Tramo[];
  consejo: PuntoLanding;
  faqExtra: { q: string; a: string };
  // Fecha local que llena los vuelos (va en el cierre).
  temporada: string;
  foto: string;
  fotoAlt: string;
}

const TREN_DESDE_BARAJAS = "Desde la T4 de Barajas sale el tren de Cercanías a Atocha y Chamartín, de donde salen los AVE.";

const CIUDADES: CiudadFamilia[] = [
  {
    ciudad: "Barcelona",
    slug: "barcelona",
    region: "Cataluña",
    aeropuerto: "El Prat (BCN)",
    tramos: [
      { como: "Vuelo con conexión", tiempo: "1 h 15 min de Madrid a Barcelona", nota: "Tu maleta va de Lima hasta El Prat en un solo boleto" },
      { como: "Tren AVE desde Madrid", tiempo: "Unas 2 h 30 min", nota: "Llega a la estación de Sants, en la ciudad" },
    ],
    consejo: {
      t: "El Prat tiene dos terminales",
      d: "Según la aerolínea, llegas a la T1 o a la T2 de El Prat. Pásale a tu familia la terminal que va en tu itinerario para que te espere en la salida correcta.",
    },
    faqExtra: {
      q: "¿Hay vuelo directo de Lima a Barcelona?",
      a: "Por lo general se vuela con una conexión, en Madrid o en otra ciudad de Europa. Te mandamos las opciones con el tiempo total de viaje de cada una.",
    },
    temporada: "En septiembre, por La Mercè, y en diciembre, los vuelos a Barcelona son los primeros que suben.",
    foto: "/images/destinos/barcelona.webp",
    fotoAlt: "Barcelona, España",
  },
  {
    ciudad: "Valencia",
    slug: "valencia",
    region: "Comunidad Valenciana",
    aeropuerto: "Manises (VLC)",
    tramos: [
      { como: "Vuelo con conexión", tiempo: "Unos 55 min de Madrid a Valencia", nota: "Maleta despachada hasta Manises" },
      { como: "Tren AVE desde Madrid", tiempo: "Unas 1 h 50 min", nota: "Llega a la estación Joaquín Sorolla" },
    ],
    consejo: {
      t: "El AVE es casi tan rápido como el avión",
      d: `De Madrid a Valencia el AVE tarda menos de 2 horas. ${TREN_DESDE_BARAJAS} Si tu familia te recoge en Madrid, también pueden bajar juntos en tren.`,
    },
    faqExtra: {
      q: "¿Me conviene volar hasta Valencia o bajar en Madrid?",
      a: "Si llevas mucha maleta, el vuelo con conexión es más cómodo porque la recoges recién en Valencia. Si viajas ligero, el AVE desde Madrid es rápido y te deja en el centro.",
    },
    temporada: "En Fallas (del 15 al 19 de marzo) y en diciembre, los vuelos y los trenes a Valencia se llenan con semanas de anticipación.",
    foto: "/images/destinos/valencia-artes.jpg",
    fotoAlt: "Ciudad de las Artes y las Ciencias, Valencia",
  },
  {
    ciudad: "Alicante",
    slug: "alicante",
    region: "Comunidad Valenciana",
    aeropuerto: "Alicante-Elche (ALC)",
    tramos: [
      { como: "Vuelo con conexión", tiempo: "Algo más de 1 h de Madrid a Alicante", nota: "El aeropuerto queda entre Alicante y Elche" },
      { como: "Tren AVE desde Madrid", tiempo: "Unas 2 h 15 min", nota: "Llega a la estación de Alicante, en la ciudad" },
    ],
    consejo: {
      t: "Si tu familia vive en Elche",
      d: "El aeropuerto de Alicante-Elche queda a unos 15 minutos de Elche. Muchas familias de Elche, Orihuela o Benidorm reciben a los suyos ahí.",
    },
    faqExtra: {
      q: "¿Qué terminal tiene el aeropuerto de Alicante?",
      a: "Tiene una sola terminal, así que tu familia te espera en la sala de llegadas sin perderse. Te pasamos el número de vuelo para que vean la hora real de llegada.",
    },
    temporada: "En junio, por las Hogueras de San Juan, y en julio y agosto, los vuelos a Alicante suben por la playa.",
    foto: "/images/destinos/alicante.jpg",
    fotoAlt: "Alicante, España",
  },
  {
    ciudad: "Murcia",
    slug: "murcia",
    region: "Región de Murcia",
    aeropuerto: "Región de Murcia (RMU)",
    tramos: [
      { como: "Tren AVE desde Madrid", tiempo: "Unas 3 h", nota: "Llega a la estación del Carmen, en la ciudad" },
      { como: "Vuelo hasta Alicante", tiempo: "Algo más de 1 h, y 1 h por carretera", nota: "Alicante tiene más vuelos que el aeropuerto de Murcia" },
    ],
    consejo: {
      t: "Murcia o Alicante",
      d: "El aeropuerto de Murcia tiene pocos vuelos. Muchas familias recogen a los suyos en Alicante, a una hora de Murcia por carretera, o en Madrid para bajar juntos en AVE.",
    },
    faqExtra: {
      q: "¿Cuál es el aeropuerto más cercano a Murcia?",
      a: "El de la Región de Murcia, en Corvera. Como tiene pocos vuelos, te cotizamos también por Alicante y por Madrid con tren, y eliges lo que le acomoda a tu familia.",
    },
    temporada: "En abril, por las Fiestas de Primavera, y en diciembre, los asientos baratos a Murcia y Alicante se acaban primero.",
    foto: "/images/destinos/murcia.jpg",
    fotoAlt: "Murcia, España",
  },
  {
    ciudad: "Málaga",
    slug: "malaga",
    region: "Andalucía",
    aeropuerto: "Málaga-Costa del Sol (AGP)",
    tramos: [
      { como: "Vuelo con conexión", tiempo: "Algo más de 1 h de Madrid a Málaga", nota: "Maleta despachada hasta Málaga" },
      { como: "Tren AVE desde Madrid", tiempo: "Unas 2 h 40 min", nota: "Llega a la estación María Zambrano" },
    ],
    consejo: {
      t: "Si tu familia vive en la Costa del Sol",
      d: "Desde el aeropuerto de Málaga sale el tren de Cercanías a Torremolinos, Benalmádena y Fuengirola. Tu familia te puede esperar en su estación.",
    },
    faqExtra: {
      q: "¿Hace calor en Málaga cuando viajo?",
      a: "En julio y agosto hace mucho calor; en invierno el clima es templado, más que en Madrid. Si llevas a tus papás, la primavera y el otoño son más cómodos.",
    },
    temporada: "En Semana Santa, en la Feria de agosto y en diciembre, los vuelos a Málaga se llenan antes que el resto del año.",
    foto: "/images/destinos/malaga.jpg",
    fotoAlt: "Málaga, España",
  },
  {
    ciudad: "Sevilla",
    slug: "sevilla",
    region: "Andalucía",
    aeropuerto: "San Pablo (SVQ)",
    tramos: [
      { como: "Tren AVE desde Madrid", tiempo: "Unas 2 h 30 min", nota: "Llega a la estación de Santa Justa" },
      { como: "Vuelo con conexión", tiempo: "Algo más de 1 h de Madrid a Sevilla", nota: "Maleta despachada hasta Sevilla" },
    ],
    consejo: {
      t: "El AVE Madrid–Sevilla es el más antiguo de España",
      d: `Sale varias veces al día y te deja en Santa Justa, cerca del centro. ${TREN_DESDE_BARAJAS}`,
    },
    faqExtra: {
      q: "¿Cuándo es mejor visitar Sevilla?",
      a: "En primavera y en otoño. En julio y agosto el calor pasa los 40 grados. Semana Santa y la Feria de Abril son lindas, pero todo cuesta más y hay que reservar con tiempo.",
    },
    temporada: "En Semana Santa y la Feria de Abril, los trenes y los vuelos a Sevilla se agotan con semanas de anticipación.",
    foto: "/images/destinos/sevilla.jpg",
    fotoAlt: "Sevilla, España",
  },
  {
    ciudad: "Bilbao",
    slug: "bilbao",
    region: "País Vasco",
    aeropuerto: "Bilbao (BIO)",
    tramos: [
      { como: "Vuelo con conexión", tiempo: "Unos 55 min de Madrid a Bilbao", nota: "La forma más rápida: no hay AVE a Bilbao" },
      { como: "Bus desde Madrid", tiempo: "Unas 4 h 30 min", nota: "Sale de la estación de Avenida de América" },
    ],
    consejo: {
      t: "A Bilbao conviene volar",
      d: "Bilbao todavía no tiene AVE desde Madrid: el tren tarda unas 5 horas. Por eso te armamos Lima–Madrid–Bilbao en un solo boleto, con tu maleta hasta el final.",
    },
    faqExtra: {
      q: "¿Hace frío en Bilbao?",
      a: "Es más fresco y lluvioso que Madrid casi todo el año. Lleva casaca y paraguas, incluso en verano.",
    },
    temporada: "En agosto, por la Semana Grande, y en diciembre, los vuelos de Madrid a Bilbao suben antes.",
    foto: "/images/destinos/bilbao-guggenheim.jpg",
    fotoAlt: "Museo Guggenheim de Bilbao",
  },
  {
    ciudad: "Zaragoza",
    slug: "zaragoza",
    region: "Aragón",
    aeropuerto: "Zaragoza (ZAZ)",
    tramos: [
      { como: "Tren AVE desde Madrid", tiempo: "Unas 1 h 20 min", nota: "Llega a la estación Delicias" },
      { como: "Bus desde Madrid", tiempo: "Unas 3 h 45 min", nota: "Más barato y más lento" },
    ],
    consejo: {
      t: "A Zaragoza se llega mejor en tren",
      d: `Hay muy pocos vuelos a Zaragoza. Lo práctico es volar Lima–Madrid y seguir en AVE. ${TREN_DESDE_BARAJAS}`,
    },
    faqExtra: {
      q: "¿Me venden el tren de Madrid a Zaragoza?",
      a: "Te cotizamos el pasaje Lima–Madrid y te decimos qué tren te conviene según la hora de llegada. Deja al menos 3 horas entre el aterrizaje y la salida del tren.",
    },
    temporada: "Para las Fiestas del Pilar (alrededor del 12 de octubre) y en diciembre, los trenes y los vuelos se llenan primero.",
    foto: "/images/destinos/zaragoza.jpg",
    fotoAlt: "Basílica del Pilar, Zaragoza",
  },
  {
    ciudad: "Palma de Mallorca",
    slug: "palma-de-mallorca",
    region: "Islas Baleares",
    aeropuerto: "Palma (PMI)",
    tramos: [
      { como: "Vuelo con conexión", tiempo: "Unos 1 h 20 min de Madrid a Palma", nota: "Es una isla: hay que volar o ir en barco" },
      { como: "Barco desde Barcelona o Valencia", tiempo: "Unas 7 a 8 horas", nota: "Suele ser de noche" },
    ],
    consejo: {
      t: "Es una isla: todo en un solo boleto",
      d: "A Palma solo se llega en avión o en barco. Con Lima–Madrid–Palma en el mismo boleto, tu maleta llega contigo y la conexión queda protegida.",
    },
    faqExtra: {
      q: "¿Cuándo sube el precio de los vuelos a Mallorca?",
      a: "En verano, de junio a septiembre, porque es temporada de playa. De noviembre a marzo hay menos vuelos, pero más baratos.",
    },
    temporada: "De junio a septiembre, Mallorca es temporada alta: los vuelos de Madrid a Palma se llenan primero.",
    foto: "/images/destinos/mallorca.jpg",
    fotoAlt: "Palma de Mallorca, España",
  },
];

// El precio sale de la ruta de vuelo de esa ciudad cuando la hay; si no, del Lima–Madrid más la conexión.
function precioDe(c: CiudadFamilia): { precio: number; hasta: string } {
  const ruta = buscarRutaVuelo(`lima-${c.slug}`);
  if (ruta) return { precio: ruta.precioDesdeUSD, hasta: c.ciudad };
  if (c.slug === "palma-de-mallorca") return { precio: PRECIO_IDA_VUELTA_MADRID + 120, hasta: c.ciudad };
  return { precio: PRECIO_IDA_VUELTA_MADRID, hasta: "Madrid" };
}

function landingFamilia(c: CiudadFamilia): LandingEspana {
  const { precio, hasta } = precioDe(c);
  const precioTexto = precio.toLocaleString("en-US");
  const msj = (resto: string) => `¡Hola Cityland Travel! Quiero viajar a ${c.ciudad} a visitar a mi familia${resto}`;
  return {
    slug: `visitar-familia-en-${c.slug}`,
    tituloSeo: `Viajar a ${c.ciudad} a visitar a tu familia`,
    descripcion: `Viaja de Lima a ${c.ciudad} a ver a tu familia: cómo llegar desde Madrid, carta de invitación y bolsa de viaje. Pasaje desde US$ ${precioTexto} ida y vuelta.`,
    migas: `Familia en ${c.ciudad}`,
    sello: `Lima → ${c.ciudad} · Visita familiar`,
    h1: `Viajar a ${c.ciudad} a visitar a tu familia`,
    bajada: `Tu familia vive en ${c.ciudad} y te espera. Te vendemos el pasaje desde Lima, te decimos cómo llegar desde Madrid y qué tiene que preparar tu familiar para recibirte.`,
    chips: ["Ida y vuelta", `Hasta ${c.ciudad}`, "Carta de invitación"],
    foto: c.foto,
    fotoAlt: c.fotoAlt,
    tema: "ciudad",
    etiquetaPrecio: `Lima–${hasta}, ida y vuelta desde`,
    precio,
    detallePrecio: hasta === c.ciudad ? DETALLE_IDA_VUELTA : `Hasta Madrid; de ahí sigues en tren a ${c.ciudad}. Precio referencial.`,
    boton: "Cotizar mi viaje",
    mensaje: msj("."),
    pregunta: `Mi familia vive en ${c.ciudad}: ¿qué vuelo me conviene y cómo llego desde Madrid?`,
    atajosTitulo: "¿Con quién viajas?",
    atajos: [
      { texto: "Viajo solo", mensaje: msj(". Viajo solo.") },
      { texto: "Con mis hijos", mensaje: msj(" con mis hijos.") },
      { texto: "Con mis papás", mensaje: msj(" con mis papás.") },
      { texto: "Mi familia me paga el pasaje", mensaje: `¡Hola Cityland Travel! Mi familia vive en ${c.ciudad} y quiere pagarme el pasaje desde España.` },
    ],
    urgencia: c.temporada,
    puntosTitulo: `Tu viaje de Lima a ${c.ciudad}`,
    puntos: [
      {
        t: "Primero, Lima–Madrid",
        d: `Todos los vuelos de Lima a España llegan primero a Madrid-Barajas, en unas 12 horas. De ahí sigues a ${c.ciudad}.`,
      },
      c.consejo,
      {
        t: "La carta de invitación se pide en " + c.ciudad,
        d: `Si te vas a quedar en casa de tu familiar, la tramita en la comisaría de la Policía Nacional de ${c.ciudad} donde vive, con cita previa. Reemplaza a la reserva de hotel.`,
      },
      {
        t: "Tu familia te puede pagar el pasaje",
        d: "Tu familiar nos escribe por WhatsApp desde España, paga desde allá y el boleto sale a tu nombre. Tú lo recibes en Lima.",
      },
    ],
    listaTitulo: "Lo que llevas tú y lo que prepara tu familia",
    lista: [
      "Pasaporte vigente (para turismo no necesitas visa)",
      "Tu pasaje ida y vuelta",
      `Carta de invitación original de tu familiar en ${c.ciudad}`,
      "Dinero para tu estadía: unos 122 € por día, con un mínimo de 1.098,90 €",
      "Dirección y teléfono de tu familiar en España",
    ],
    tabla: {
      titulo: `Cómo llegar de Madrid a ${c.ciudad}`,
      columnas: ["Cómo", "Tiempo aproximado", "Lo que tienes que saber"],
      filas: c.tramos.map((t) => [t.como, t.tiempo, t.nota]),
      nota: `Aeropuerto de ${c.ciudad}: ${c.aeropuerto}. Los tiempos son de referencia y dependen del horario que elijas.`,
    },
    aviso: {
      titulo: "Somos agencia de viajes",
      texto: "Vendemos pasajes y te ayudamos a preparar tu viaje. No ofrecemos trabajo ni trámites de empleo en España.",
    },
    faqs: [
      c.faqExtra,
      {
        q: `¿Cuánto cuesta el pasaje de Lima a ${c.ciudad}?`,
        a: `Ida y vuelta desde unos US$ ${precioTexto} por persona, con impuestos${hasta === c.ciudad ? "" : ", hasta Madrid"}. Diciembre, julio y agosto son los meses más caros.`,
      },
      {
        q: "¿Cuánto tiempo puedo quedarme con mi familia?",
        a: "Como turista, hasta 90 días dentro de cualquier periodo de 180 días. Tu pasaje de regreso tiene que estar dentro de ese plazo.",
      },
      {
        q: "Si tengo carta de invitación, ¿igual necesito dinero?",
        a: "Sí. La carta reemplaza a la reserva de hotel, pero te pueden pedir que demuestres dinero para tu estadía.",
      },
    ],
    enlaces: [
      { href: "/espana/viajar-a-espana-a-visitar-familia", texto: "Visitar a tu familia en Madrid" },
      { href: "/blog/carta-invitacion-espana-peru-requisitos", texto: "Carta de invitación paso a paso" },
      { href: "/espana/llegada-aeropuerto-madrid-barajas", texto: "Tu llegada a Barajas" },
    ],
  };
}

export const LANDINGS_FAMILIA: LandingEspana[] = CIUDADES.map(landingFamilia);
