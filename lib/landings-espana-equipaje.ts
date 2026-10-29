import { DETALLE_IDA_VUELTA, PRECIO_IDA_VUELTA_MADRID, type LandingEspana } from "@/lib/landings-espana-tipos";

// Equipaje por aerolínea para volar entre Lima y España, en clase económica. Datos de la web de cada aerolínea
// consultados el 28 de octubre de 2026; las aerolíneas los cambian, por eso cada página dice la fecha.

const FECHA = "28 de octubre de 2026";
const usd = (n: number) => `US$ ${n.toLocaleString("en-US")}`;

interface Aerolinea {
  slug: string;
  nombre: string;
  ruta: string;
  mano: string;
  filas: string[][];
  extra: string;
  notas: { t: string; d: string }[];
  faq: { q: string; a: string };
  foto: string;
  fotoAlt: string;
}

const AEROLINEAS: Aerolinea[] = [
  {
    slug: "iberia",
    nombre: "Iberia",
    ruta: "Lima–Madrid directo",
    mano: "Maleta de mano de unos 56 × 40 × 25 cm y 10 kg, más un bolso personal. Te confirmamos las medidas de tu tarifa.",
    filas: [
      ["Basic", "Mano + bolso", "Sin maleta (se compra aparte)"],
      ["Optima", "Mano + bolso", "1 maleta de 23 kg"],
      ["Comfort", "Mano + bolso", "1 maleta de 23 kg"],
    ],
    extra: "Cada maleta hasta 23 kg y 158 cm (alto + ancho + largo). Se puede llevar hasta 32 kg pagando exceso.",
    notas: [
      { t: "La tarifa Basic no trae maleta", d: "Es la más barata, pero solo incluye el equipaje de mano. Si llevas maleta, compara con Optima." },
      { t: "Desde junio de 2026 cambiaron los nombres", d: "Iberia llama ahora «equipaje de mano personal» al bolso y «equipaje de mano» a la maleta de cabina. Las medidas siguen iguales." },
      { t: "Compra la maleta con el pasaje", d: "Agregarla al emitir suele salir más barato que pagarla en el aeropuerto." },
    ],
    faq: { q: "¿Iberia incluye maleta de Lima a Madrid?", a: "En las tarifas Optima y Comfort, sí: 1 maleta de 23 kg. En Basic solo va el equipaje de mano." },
    foto: "/images/espana/barajas.jpg",
    fotoAlt: "Aeropuerto de Madrid-Barajas",
  },
  {
    slug: "air-europa",
    nombre: "Air Europa",
    ruta: "Lima–Madrid directo",
    mano: "Maleta de mano de 55 × 35 × 25 cm y 10 kg, más un bolso que va debajo del asiento, en todas las tarifas.",
    filas: [
      ["Lite", "Mano + bolso", "Sin maleta (se paga aparte)"],
      ["Standard", "Mano + bolso", "1 maleta de 23 kg"],
      ["Flex", "Mano + bolso", "1 maleta de 23 kg"],
    ],
    extra: "La maleta extra y el exceso de peso dependen de la ruta; te los cotizamos con el pasaje.",
    notas: [
      { t: "Lite es solo con mano", d: "Si viajas con maleta grande, compara Lite más la maleta contra Standard: a veces Standard sale igual o más barato." },
      { t: "Mano de 10 kg", d: "La maleta de cabina es de 55 × 35 × 25 cm y hasta 10 kg." },
      { t: "Conexiones en España", d: "Air Europa conecta desde Madrid con muchas ciudades de España en el mismo boleto." },
    ],
    faq: { q: "¿Air Europa cobra la maleta en la tarifa Lite?", a: "Sí. En Lite solo va el equipaje de mano y el bolso; la maleta de bodega se paga aparte." },
    foto: "/images/espana/puerta-de-alcala.jpg",
    fotoAlt: "Puerta de Alcalá, Madrid",
  },
  {
    slug: "latam",
    nombre: "LATAM",
    ruta: "Lima–Madrid directo",
    mano: "Un bolso pequeño y una maleta de mano de 12 kg (55 × 35 × 25 cm) en todas las tarifas.",
    filas: [
      ["Light", "Mano de 12 kg + bolso", "Sin maleta (se paga aparte)"],
      ["Standard", "Mano de 12 kg + bolso", "1 maleta de 23 kg"],
      ["Full", "Mano de 12 kg + bolso", "1 maleta de 23 kg"],
    ],
    extra: "Con origen o destino en Europa se acepta sobrepeso hasta 32 kg por maleta, pagando.",
    notas: [
      { t: "La mano es de 12 kg", d: "Más que en otras aerolíneas: si viajas ligero, la tarifa Light te puede bastar." },
      { t: "Desde provincias", d: "LATAM vuela a casi todo el Perú: tu maleta va de tu ciudad a Madrid en el mismo boleto." },
      { t: "Vuelo de noche", d: "Sale de Lima a las 23:00 y llega a Madrid en la tarde del día siguiente." },
    ],
    faq: { q: "¿Cuánto pesa la maleta de mano en LATAM a Europa?", a: "Hasta 12 kg, con medidas de 55 × 35 × 25 cm, más un bolso pequeño." },
    foto: "/images/espana/gran-via-metropolis.jpg",
    fotoAlt: "Gran Vía de Madrid",
  },
  {
    slug: "plus-ultra",
    nombre: "Plus Ultra",
    ruta: "Lima–Madrid directo",
    mano: "10 kg en total: una maleta de 55 × 40 × 20 cm y un bolso personal de 35 × 30 × 20 cm.",
    filas: [
      ["Ligera", "10 kg (maleta + bolso)", "1 maleta de 15 kg"],
      ["Flash", "10 kg (maleta + bolso)", "1 maleta de 23 kg"],
      ["Básica", "10 kg (maleta + bolso)", "1 o 2 maletas de 23 kg, según la clase"],
      ["Full", "10 kg (maleta + bolso)", "2 maletas de 23 kg"],
      ["Flexible", "10 kg (maleta + bolso)", "3 maletas de 23 kg"],
    ],
    extra: "Sobrepeso de 23 a 32 kg: 110 USD por web o 130 USD en el aeropuerto. Maleta extra: desde 150 USD. Precios de Plus Ultra sin impuestos.",
    notas: [
      { t: "Hasta 3 maletas incluidas", d: "La tarifa Flexible trae 3 maletas de 23 kg: buena opción si te mudas o llevas encargos." },
      { t: "La Ligera trae 15 kg", d: "Es la más barata e incluye una maleta pequeña de 15 kg." },
      { t: "Paga el exceso por web", d: "El sobrepeso sale más barato comprándolo antes que en el aeropuerto." },
    ],
    faq: { q: "¿Cuántas maletas incluye Plus Ultra?", a: "Depende de la tarifa: de 1 maleta de 15 kg en Ligera hasta 3 de 23 kg en Flexible." },
    foto: "/images/espana/cibeles.jpg",
    fotoAlt: "Palacio de Cibeles, Madrid",
  },
  {
    slug: "klm-air-france",
    nombre: "KLM y Air France",
    ruta: "Lima–España con escala en Ámsterdam o París",
    mano: "Un bolso de 40 × 30 × 15 cm y una maleta de 55 × 35 × 25 cm, con 12 kg en total.",
    filas: [
      ["Light", "Mano + bolso, 12 kg", "Sin maleta (se paga aparte)"],
      ["Standard", "Mano + bolso, 12 kg", "1 maleta de 23 kg"],
      ["Flex", "Mano + bolso, 12 kg", "1 maleta de 23 kg"],
    ],
    extra: "Cada maleta hasta 23 kg y 158 cm. Datos de KLM; Air France usa el mismo esquema de tarifas.",
    notas: [
      { t: "Vuelan con escala", d: "KLM conecta por Ámsterdam y Air France por París: buena opción para llegar a Barcelona, Valencia, Málaga o Bilbao." },
      { t: "Light sin maleta", d: "Si llevas maleta, compara Light más la maleta contra Standard." },
      { t: "Tu maleta sigue", d: "En el mismo boleto, la maleta va de Lima a tu ciudad de destino sin recogerla en la escala." },
    ],
    faq: { q: "¿KLM incluye maleta a España?", a: "En Standard y Flex, sí: 1 maleta de 23 kg. En Light solo va el equipaje de mano." },
    foto: "/images/espana/palacio-real.jpg",
    fotoAlt: "Palacio Real de Madrid",
  },
  {
    slug: "avianca",
    nombre: "Avianca",
    ruta: "Lima–España con escala en Bogotá",
    mano: "El bolso personal va en todas las tarifas; en Basic la maleta de mano de 10 kg se compra aparte.",
    filas: [
      ["Basic", "Bolso personal", "Sin maleta (1.ª maleta desde USD 95)"],
      ["Classic", "Bolso + mano de 10 kg", "1 maleta de 23 kg"],
      ["Flex", "Bolso + mano de 10 kg", "1 maleta de 23 kg"],
    ],
    extra: "Segunda maleta desde USD 150 y tercera desde USD 180, comprando con más de 48 horas. Hasta 32 kg pagando, desde o hacia Europa.",
    notas: [
      { t: "En Basic la mano se paga", d: "La tarifa más barata solo incluye el bolso personal. Revisa qué llevas antes de elegirla." },
      { t: "Escala en Bogotá", d: "Avianca vuela a Madrid y Barcelona por Bogotá; tu maleta sigue hasta España en el mismo boleto." },
      { t: "Compra la maleta antes", d: "Comprarla con más de 48 horas sale más barato." },
    ],
    faq: { q: "¿Avianca incluye maleta a Europa?", a: "En Classic y Flex, sí: 1 maleta de 23 kg. En Basic, la primera maleta cuesta desde USD 95." },
    foto: "/images/destinos/madrid.webp",
    fotoAlt: "Madrid, España",
  },
];

function landing(a: Aerolinea): LandingEspana {
  return {
    slug: `equipaje-${a.slug}-lima-espana`,
    tema: "equipaje",
    tituloSeo: `Equipaje ${a.nombre} a España desde Lima`,
    descripcion: `Equipaje de ${a.nombre} en vuelos Lima–España: mano, maleta incluida por tarifa, peso y extras. Datos de ${a.nombre} al ${FECHA}. Pasaje desde ${usd(PRECIO_IDA_VUELTA_MADRID)}.`,
    migas: `Equipaje ${a.nombre}`,
    sello: `${a.nombre} · ${a.ruta}`,
    h1: `Equipaje de ${a.nombre} para viajar a España`,
    bajada: `Qué maleta incluye cada tarifa de ${a.nombre} entre Lima y España, cuánto pesa el equipaje de mano y cuánto cuesta lo extra. Te cotizamos la tarifa con el equipaje que de verdad llevas.`,
    chips: [a.nombre, "Por tarifa", `Al ${FECHA}`],
    foto: a.foto,
    fotoAlt: a.fotoAlt,
    etiquetaPrecio: "Lima–Madrid, ida y vuelta desde",
    precio: PRECIO_IDA_VUELTA_MADRID,
    detallePrecio: DETALLE_IDA_VUELTA,
    boton: `Cotizar con ${a.nombre}`,
    mensaje: `¡Hola Cityland Travel! Quiero cotizar un pasaje a España con ${a.nombre}, con maleta incluida.`,
    pregunta: `Llevo 2 maletas: ¿qué tarifa de ${a.nombre} me conviene para ir a España?`,
    atajosTitulo: "¿Cuánto equipaje llevas?",
    atajos: [
      { texto: "Solo mano", mensaje: `¡Hola Cityland Travel! Viajo solo con equipaje de mano a España. ¿Qué tarifa de ${a.nombre} me conviene?` },
      { texto: "1 maleta", mensaje: `¡Hola Cityland Travel! Viajo a España con 1 maleta. ¿Qué tarifa de ${a.nombre} me conviene?` },
      { texto: "2 o más maletas", mensaje: `¡Hola Cityland Travel! Viajo a España con 2 o más maletas. ¿Qué tarifa me conviene?` },
    ],
    ctaMedio: {
      titulo: "La más barata no siempre lo es",
      texto: "Una tarifa sin maleta más la maleta aparte puede salir más cara que la siguiente. Te comparamos las dos con tu equipaje.",
      boton: "Comparar tarifas",
      mensaje: `¡Hola Cityland Travel! Quiero comparar las tarifas de ${a.nombre} con mi equipaje para ir a España.`,
    },
    puntosTitulo: "Lo que tienes que saber",
    puntos: [{ t: "Equipaje de mano", d: a.mano }, ...a.notas],
    listaTitulo: "Antes de hacer tu maleta",
    lista: [a.extra, "Lo de valor y los documentos van en el equipaje de mano", "No lleves carne, leche ni queso: no entran a la Unión Europea", "Pesa tu maleta en casa antes de ir al aeropuerto"],
    tabla: { titulo: `Equipaje de ${a.nombre} por tarifa`, columnas: ["Tarifa", "En cabina", "En bodega"], filas: a.filas, nota: `Datos de ${a.nombre} consultados el ${FECHA}. Pueden cambiar: te confirmamos por escrito lo que incluye tu tarifa.` },
    faqs: [
      a.faq,
      { q: "¿Cuánto puede pesar una maleta?", a: "La maleta normal es de 23 kg. Pagando exceso, ninguna pieza puede pasar de 32 kg." },
      { q: "¿Me confirman la maleta antes de pagar?", a: "Sí. En la cotización te decimos por escrito qué equipaje incluye cada opción." },
    ],
    enlaces: [
      { href: "/blog/equipaje-permitido-iberia-air-europa-plus-ultra", texto: "Comparación de equipaje" },
      { href: "/espana/solo-ida/equipaje-para-mudarte-a-espana", texto: "Equipaje para mudarte" },
      { href: "/vuelos/lima-madrid", texto: "Vuelos Lima–Madrid" },
    ],
  };
}

export const LANDINGS_EQUIPAJE: LandingEspana[] = AEROLINEAS.map(landing);
