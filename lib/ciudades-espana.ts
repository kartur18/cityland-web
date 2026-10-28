// Ciudades de España donde más peruanos viven, fuera de Madrid: cómo se llega desde Barajas, aeropuerto,
// consulado del Perú más cercano y temporada fuerte. Lo usan las páginas de solo ida por destino.
// Consulados: Málaga y Zaragoza cerraron con el DS 047-2024-RE; siguen Madrid, Barcelona, Valencia, Sevilla y Bilbao.

export interface TramoCiudad {
  como: string;
  tiempo: string;
  nota: string;
}

export interface CiudadEspana {
  ciudad: string;
  slug: string;
  region: string;
  aeropuerto: string;
  tramos: TramoCiudad[];
  consulado: string;
  // Lo que suma el solo ida sobre el Lima–Madrid, cuando hay dato de mercado. Sin dato, la página muestra el
  // precio hasta Madrid y el tramo final se cotiza aparte (no se inventa un número).
  recargoSoloIda?: number;
  llegada: { t: string; d: string };
  temporada: string;
  foto: string;
  fotoAlt: string;
}

const TREN_DESDE_BARAJAS = "Desde la T4 de Barajas sale el tren de Cercanías a Atocha y Chamartín, de donde salen los AVE.";

export const CIUDADES_ESPANA: CiudadEspana[] = [
  {
    ciudad: "Barcelona",
    slug: "barcelona",
    region: "Cataluña",
    aeropuerto: "El Prat (BCN)",
    tramos: [
      { como: "Vuelo directo Lima–Barcelona", tiempo: "Sin escalas", nota: "LEVEL vuela directo desde junio de 2026, unas 3 veces por semana" },
      { como: "Con conexión en Madrid", tiempo: "1 h 15 min de Madrid a Barcelona", nota: "Maleta hasta El Prat en un solo boleto" },
      { como: "Tren AVE desde Madrid", tiempo: "Unas 2 h 30 min", nota: "Llega a la estación de Sants" },
    ],
    consulado: "Barcelona tiene Consulado General del Perú.",
    recargoSoloIda: 0,
    llegada: {
      t: "El Prat tiene dos terminales",
      d: "Según la aerolínea llegas a la T1 o a la T2. La terminal va en tu itinerario; pásasela a quien te recoge.",
    },
    temporada: "En septiembre, por La Mercè, y en diciembre, los vuelos a Barcelona suben antes.",
    foto: "/images/destinos/barcelona.webp",
    fotoAlt: "Barcelona, España",
  },
  {
    ciudad: "Valencia",
    slug: "valencia",
    region: "Comunidad Valenciana",
    aeropuerto: "Manises (VLC)",
    tramos: [
      { como: "Con conexión en Madrid", tiempo: "Unos 55 min de Madrid a Valencia", nota: "Maleta despachada hasta Manises" },
      { como: "Tren AVE desde Madrid", tiempo: "Unas 1 h 50 min", nota: "Llega a la estación Joaquín Sorolla" },
    ],
    consulado: "Valencia tiene Consulado del Perú; también atiende a quienes viven en Alicante y Murcia.",
    llegada: {
      t: "El AVE es casi tan rápido como el avión",
      d: `De Madrid a Valencia el AVE tarda menos de 2 horas. ${TREN_DESDE_BARAJAS}`,
    },
    temporada: "En Fallas (del 15 al 19 de marzo) y en diciembre, los vuelos y los trenes a Valencia se llenan antes.",
    foto: "/images/destinos/valencia-artes.jpg",
    fotoAlt: "Ciudad de las Artes y las Ciencias, Valencia",
  },
  {
    ciudad: "Málaga",
    slug: "malaga",
    region: "Andalucía",
    aeropuerto: "Málaga-Costa del Sol (AGP)",
    tramos: [
      { como: "Con conexión en Madrid", tiempo: "Algo más de 1 h de Madrid a Málaga", nota: "Maleta despachada hasta Málaga" },
      { como: "Tren AVE desde Madrid", tiempo: "Unas 2 h 40 min", nota: "Llega a la estación María Zambrano" },
    ],
    consulado: "El consulado del Perú en Málaga cerró en 2024: el más cercano es el de Sevilla.",
    recargoSoloIda: 80,
    llegada: {
      t: "Si vas a la Costa del Sol",
      d: "Desde el aeropuerto sale el tren de Cercanías a Torremolinos, Benalmádena y Fuengirola.",
    },
    temporada: "En Semana Santa, en la Feria de agosto y en diciembre, los vuelos a Málaga se llenan antes.",
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
      { como: "Con conexión en Madrid", tiempo: "Algo más de 1 h de Madrid a Sevilla", nota: "Maleta despachada hasta Sevilla" },
    ],
    consulado: "Sevilla tiene Consulado del Perú, que también atiende a quienes viven en Málaga.",
    llegada: { t: "AVE varias veces al día", d: `Te deja en Santa Justa, cerca del centro. ${TREN_DESDE_BARAJAS}` },
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
      { como: "Con conexión en Madrid", tiempo: "Unos 55 min de Madrid a Bilbao", nota: "Lo más rápido: no hay AVE a Bilbao" },
      { como: "Bus desde Madrid", tiempo: "Unas 4 h 30 min", nota: "Sale de la estación de Avenida de América" },
    ],
    consulado: "Bilbao tiene Consulado del Perú.",
    recargoSoloIda: 120,
    llegada: {
      t: "A Bilbao conviene volar",
      d: "No hay AVE desde Madrid y el tren tarda unas 5 horas. Con Lima–Madrid–Bilbao en un solo boleto, tu maleta llega contigo.",
    },
    temporada: "En agosto, por la Semana Grande, y en diciembre, los vuelos de Madrid a Bilbao suben antes.",
    foto: "/images/destinos/bilbao-guggenheim.jpg",
    fotoAlt: "Museo Guggenheim de Bilbao",
  },
  {
    ciudad: "Murcia",
    slug: "murcia",
    region: "Región de Murcia",
    aeropuerto: "Región de Murcia (RMU)",
    tramos: [
      { como: "Tren AVE desde Madrid", tiempo: "Unas 3 h", nota: "Llega a la estación del Carmen" },
      { como: "Vuelo hasta Alicante", tiempo: "Algo más de 1 h, y 1 h por carretera", nota: "Alicante tiene más vuelos que Murcia" },
    ],
    consulado: "Murcia no tiene consulado del Perú: el más cercano es el de Valencia.",
    llegada: {
      t: "Murcia o Alicante",
      d: "El aeropuerto de Murcia tiene pocos vuelos. Muchos llegan por Alicante, a una hora por carretera, o en AVE desde Madrid.",
    },
    temporada: "En abril, por las Fiestas de Primavera, y en diciembre, los asientos baratos a Murcia y Alicante se acaban primero.",
    foto: "/images/destinos/murcia.jpg",
    fotoAlt: "Murcia, España",
  },
  {
    ciudad: "Alicante",
    slug: "alicante",
    region: "Comunidad Valenciana",
    aeropuerto: "Alicante-Elche (ALC)",
    tramos: [
      { como: "Con conexión en Madrid", tiempo: "Algo más de 1 h de Madrid a Alicante", nota: "El aeropuerto queda entre Alicante y Elche" },
      { como: "Tren AVE desde Madrid", tiempo: "Unas 2 h 15 min", nota: "Llega a la estación de Alicante" },
    ],
    consulado: "Alicante no tiene consulado del Perú: el más cercano es el de Valencia.",
    llegada: { t: "Una sola terminal", d: "El aeropuerto de Alicante-Elche tiene una sola terminal y queda a unos 15 minutos de Elche." },
    temporada: "En junio, por las Hogueras de San Juan, y en julio y agosto, los vuelos a Alicante suben por la playa.",
    foto: "/images/destinos/alicante.jpg",
    fotoAlt: "Alicante, España",
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
    consulado: "El consulado del Perú en Zaragoza cerró en 2024: los más cercanos son los de Madrid y Barcelona.",
    llegada: { t: "A Zaragoza se llega en tren", d: `Hay muy pocos vuelos a Zaragoza: lo práctico es volar a Madrid y seguir en AVE. ${TREN_DESDE_BARAJAS}` },
    temporada: "Para las Fiestas del Pilar (alrededor del 12 de octubre) y en diciembre, los trenes se llenan primero.",
    foto: "/images/destinos/zaragoza.jpg",
    fotoAlt: "Basílica del Pilar, Zaragoza",
  },
  {
    ciudad: "Palma de Mallorca",
    slug: "palma-de-mallorca",
    region: "Islas Baleares",
    aeropuerto: "Palma (PMI)",
    tramos: [
      { como: "Con conexión en Madrid", tiempo: "Unos 1 h 20 min de Madrid a Palma", nota: "Es una isla: hay que volar o ir en barco" },
      { como: "Barco desde Barcelona o Valencia", tiempo: "Unas 7 a 8 horas", nota: "Suele ser de noche" },
    ],
    consulado: "Te decimos qué consulado del Perú te corresponde según la isla donde vivas.",
    recargoSoloIda: 80,
    llegada: { t: "Todo en un solo boleto", d: "Con Lima–Madrid–Palma en la misma reserva, tu maleta llega contigo y la conexión queda protegida." },
    temporada: "De junio a septiembre Mallorca es temporada alta: los vuelos de Madrid a Palma se llenan primero.",
    foto: "/images/destinos/mallorca.jpg",
    fotoAlt: "Palma de Mallorca, España",
  },
];
