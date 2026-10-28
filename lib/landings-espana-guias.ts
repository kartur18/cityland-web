import { DETALLE_IDA_VUELTA, PRECIO_IDA_VUELTA_MADRID, type LandingEspana } from "@/lib/landings-espana-tipos";

// Guías prácticas de España: lo que pasa el día del viaje, contado para quien sale de Lima.

const LLEGADA_BARAJAS: LandingEspana = {
  slug: "llegada-aeropuerto-madrid-barajas",
  tituloSeo: "Llegada a Barajas desde Lima: guía 2026",
  descripcion: `Qué hacer al aterrizar en Madrid-Barajas desde Lima: terminal de tu aerolínea, registro de huellas, cómo llegar al centro y qué hacer si se pierde tu maleta. Pasajes desde US$ ${PRECIO_IDA_VUELTA_MADRID.toLocaleString("en-US")}.`,
  migas: "Llegada a Barajas",
  sello: "Madrid-Barajas · Guía de llegada",
  h1: "Tu llegada al aeropuerto de Madrid-Barajas",
  bajada:
    "Doce horas después de salir de Lima aterrizas en Barajas. Te contamos a qué terminal llegas, qué registro te toman la primera vez, cómo salir al centro de Madrid y qué hacer si tu maleta no aparece.",
  chips: ["T4 y T1", "Huellas y foto", "Metro, bus o taxi"],
  foto: "/images/espana/barajas.jpg",
  fotoAlt: "Terminal del aeropuerto Adolfo Suárez Madrid-Barajas",
  tema: "guia",
  etiquetaPrecio: "Lima–Madrid, ida y vuelta desde",
  precio: PRECIO_IDA_VUELTA_MADRID,
  detallePrecio: DETALLE_IDA_VUELTA,
  boton: "Cotizar mi pasaje",
  mensaje: "¡Hola Cityland Travel! Leí la guía de llegada a Barajas y quiero cotizar un pasaje Lima–Madrid.",
  pregunta: "¿A qué terminal de Barajas llega mi vuelo y cómo voy de ahí al centro?",
  atajosTitulo: "Pregúntale a tu asesora",
  atajos: [
    { texto: "Mi familia me recoge", mensaje: "¡Hola Cityland Travel! Mi familia me va a recoger en Barajas. ¿Qué datos del vuelo les paso?" },
    { texto: "Llego de noche", mensaje: "¡Hola Cityland Travel! Llego de noche a Barajas. ¿Cómo salgo al centro de Madrid?" },
    { texto: "Sigo a otra ciudad", mensaje: "¡Hola Cityland Travel! Llego a Madrid y sigo a otra ciudad de España. ¿Me cotizan la conexión?" },
    { texto: "Viajo con niños", mensaje: "¡Hola Cityland Travel! Llego a Barajas con niños. ¿Qué tengo que saber?" },
  ],
  urgencia:
    "Si viajas en diciembre o en julio, los vuelos que llegan a Madrid por la mañana, los más cómodos para salir al centro, son los primeros que se llenan.",
  puntosTitulo: "Paso a paso al aterrizar",
  puntos: [
    {
      t: "1. A qué terminal llegas",
      d: "Iberia y LATAM llegan a la T4 (a veces a su satélite, la T4S, que se une a la T4 con un tren interno). Air Europa y Plus Ultra llegan a la T1. En tu itinerario va la terminal.",
    },
    {
      t: "2. Control de pasaportes y registro",
      d: "Desde abril de 2026 la Unión Europea ya no sella el pasaporte: la primera vez te toman 4 huellas y una foto en el sistema de entradas y salidas (EES). En los siguientes viajes solo verifican tus datos.",
    },
    {
      t: "3. Recoges tu maleta",
      d: "Las pantallas de la sala de equipajes dicen en qué cinta sale tu vuelo de Lima. Si viniste de provincia en un solo boleto, tu maleta llega aquí directo.",
    },
    {
      t: "4. Aduana y salida",
      d: "Sigues por el canal verde si no tienes nada que declarar. No lleves carne, leche, queso ni otros alimentos de origen animal: no se pueden entrar a la Unión Europea desde fuera.",
    },
  ],
  listaTitulo: "Antes de salir del aeropuerto",
  lista: [
    "Ten tu pasaporte a la mano hasta salir a la sala de llegadas",
    "Si tu maleta no sale, ve al mostrador de tu aerolínea en la misma sala, antes de salir",
    "Pide el parte de equipaje (PIR) y guarda el número",
    "Escríbele a tu familia por el wifi gratis del aeropuerto",
    "Guarda los tickets si compras algo por la maleta demorada",
  ],
  tabla: {
    titulo: "Cómo llegar al centro de Madrid",
    columnas: ["Cómo", "Precio aproximado", "Tiempo"],
    filas: [
      ["Metro, línea 8", "Unos 5 € con el suplemento del aeropuerto", "Unos 25 min a Nuevos Ministerios"],
      ["Bus Exprés Aeropuerto", "5 €, funciona las 24 horas", "Unos 40 min a Cibeles o Atocha"],
      ["Tren Cercanías C1 (desde la T4)", "Unos 3 €", "Unos 25 min a Chamartín o Atocha"],
      ["Taxi", "Tarifa fija de unos 33 € dentro de la M-30", "De 25 a 40 min, según el tráfico"],
    ],
    nota: "Precios de referencia de 2026; pueden cambiar. De noche, el bus Exprés y el taxi son las opciones que siguen funcionando.",
  },
  faqs: [
    {
      q: "¿Cuánto dura el vuelo de Lima a Madrid?",
      a: "Unas 12 horas en vuelo directo. Por la diferencia horaria, si sales de Lima en la noche llegas a Madrid a la tarde del día siguiente.",
    },
    {
      q: "¿Qué hago si no llega mi maleta?",
      a: "Antes de salir de la sala de equipajes, ve al mostrador de tu aerolínea y pide el parte de equipaje (PIR). Si la maleta llega con demora, tienes 21 días para reclamar los gastos; si llega dañada, 7 días.",
    },
    {
      q: "¿Mi familia puede esperarme dentro del aeropuerto?",
      a: "Te esperan en la sala de llegadas de tu terminal, a la salida de la aduana. Pásales tu número de vuelo y la terminal; te los mandamos con tu boleto.",
    },
    {
      q: "¿Qué es el registro de huellas (EES)?",
      a: "Es el nuevo sistema de la Unión Europea para registrar las entradas y salidas de quienes no son europeos. La primera vez te toman 4 huellas y una foto; reemplaza al sello del pasaporte.",
    },
    {
      q: "¿Puedo seguir a otra ciudad de España el mismo día?",
      a: "Sí. Te podemos cotizar el vuelo o el tren de Madrid a Barcelona, Valencia, Sevilla u otra ciudad. Deja al menos 3 horas después de aterrizar.",
    },
  ],
  enlaces: [
    { href: "/vuelos/lima-madrid", texto: "Vuelos Lima–Madrid" },
    { href: "/espana/primer-viaje-a-espana", texto: "Tu primer viaje a España" },
    { href: "/espana/pasajes-a-madrid-desde-provincias", texto: "Pasajes desde provincias" },
  ],
};

export const LANDINGS_GUIAS: LandingEspana[] = [LLEGADA_BARAJAS];
