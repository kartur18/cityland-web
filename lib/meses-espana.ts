import type { TemporadaEspana } from "@/lib/temporadas-espana";

// «Viajar a España en <mes>»: una página por mes con sus fiestas fijas, el clima y si es temporada alta o baja.
// Julio, agosto y diciembre ya tienen su página (verano y Navidad). Fechas 2027: Pascua 28-mar, Ceniza 10-feb. 26-oct-2026.

const DOCUMENTOS = {
  q: "¿Qué documentos necesito?",
  a: "Pasaporte vigente, sin visa, para turismo de hasta 90 días. En migración te pueden pedir el pasaje de regreso, el hotel o la carta de invitación, dinero para tu estadía y un seguro de viaje.",
};
const PAGO = { q: "¿Puedo separar mi pasaje?", a: "Sí. Separas con el 50% y pagas el resto antes de viajar." };
const PRECIO_BAJA = "Precios referenciales por persona. Este mes suele estar entre los más baratos del año; te damos el precio exacto de tu fecha.";
const PRECIO_MEDIA = "Precios referenciales por persona; cambian según la fecha y la aerolínea. Te damos el precio exacto de tu fecha.";

export interface MesEspana extends TemporadaEspana {
  mes: string;
  notaPrecio: string;
}

function mes(m: Omit<MesEspana, "ruta" | "h1" | "tituloSeo" | "mensajeWhatsApp"> & { tituloSeo?: string }): MesEspana {
  return {
    ...m,
    ruta: `/viajar-a-espana-en-${m.mes}`,
    h1: `Viajar a España en ${m.mes} desde Lima`,
    tituloSeo: m.tituloSeo ?? `Viajar a España en ${m.mes}: clima y pasajes`,
    mensajeWhatsApp: `¡Hola Cityland Travel! Quiero cotizar un viaje a España para ${m.mes}.`,
  };
}

export const MESES_ESPANA: readonly MesEspana[] = [
  mes({
    mes: "enero",
    descripcion:
      "Viajar a España en enero desde Lima: Reyes, rebajas de invierno, el frío de Madrid y el sol de Canarias. Después de Reyes bajan los pasajes. Separa con el 50%.",
    intro:
      "Enero empieza con fiesta y termina tranquilo: pasado el Día de Reyes los españoles vuelven al trabajo, bajan los precios de vuelos y hoteles, y empiezan las rebajas en las tiendas.",
    fechas: [
      { cuando: "1 de enero", que: "Año Nuevo: feriado en toda España." },
      { cuando: "5 y 6 de enero", que: "Cabalgata de Reyes y Día de Reyes, la fiesta de los regalos para los niños." },
      { cuando: "Desde el 7 de enero", que: "Rebajas de invierno en tiendas y centros comerciales." },
    ],
    clima:
      "Es pleno invierno: en Madrid las máximas rondan los 10 °C y en las noches puede helar. En Canarias se mantiene cerca de 20 °C. Lleva abrigo, gorro y guantes.",
    queHacer: [
      "Aprovechar las rebajas de enero en la Gran Vía de Madrid o el Paseo de Gracia de Barcelona.",
      "Ir a Tenerife o Gran Canaria si quieres sol en pleno invierno.",
      "Museos con menos colas: el Prado, el Reina Sofía y la Sagrada Familia.",
    ],
    consejoCompra:
      "Si tus fechas son flexibles, sal después del 7 de enero: termina la temporada de fiestas y los pasajes bajan. Volver a Lima antes de Reyes cuesta más.",
    rutas: ["lima-madrid", "lima-barcelona", "lima-tenerife", "lima-gran-canaria"],
    destinos: [
      { texto: "España en Navidad", href: "/viajar-a-espana-en-navidad" },
      { texto: "Pasajes a Barcelona", href: "/pasajes-a-barcelona" },
    ],
    faqs: [
      { q: "¿Enero es buen mes para viajar a España?", a: "Sí, si no te molesta el frío: después de Reyes hay menos gente y los pasajes y hoteles bajan. Para playa, mejor Canarias." },
      DOCUMENTOS,
      PAGO,
    ],
    notaPrecio: PRECIO_BAJA,
  }),
  mes({
    mes: "febrero",
    descripcion:
      "Viajar a España en febrero desde Lima: Carnaval de Tenerife y Cádiz, invierno suave en el sur y uno de los meses más baratos para volar. Separa con el 50%.",
    intro:
      "Febrero es temporada baja en España: hay pocos turistas, los precios están entre los más bajos del año y en 2027 el Carnaval cae a inicios de mes.",
    fechas: [
      { cuando: "Primera semana de febrero de 2027", que: "Carnaval: el Martes de Carnaval es el 9 y el Miércoles de Ceniza el 10 de febrero." },
      { cuando: "Todo el mes", que: "Temporada baja: menos gente en museos y monumentos." },
      { cuando: "14 de febrero", que: "San Valentín, buena fecha para un viaje en pareja." },
    ],
    clima:
      "Sigue el invierno: en Madrid las máximas rondan los 12 °C. El sur (Sevilla, Málaga) es más templado y Canarias está cerca de 20 °C.",
    queHacer: [
      "El Carnaval de Santa Cruz de Tenerife, uno de los más grandes del mundo, y el de Cádiz.",
      "Andalucía con menos calor y menos gente: Sevilla, Granada y Málaga.",
      "Un viaje en pareja por Madrid y Toledo.",
    ],
    consejoCompra:
      "Es de los meses más baratos para volar Lima–Madrid. Si viajas por el Carnaval, reserva el hotel en Tenerife con tiempo: se llena esos días.",
    rutas: ["lima-madrid", "lima-tenerife", "lima-sevilla", "lima-malaga"],
    destinos: [
      { texto: "Sevilla y Andalucía", href: "/destinos/sevilla-andalucia" },
      { texto: "Málaga y Costa del Sol", href: "/destinos/malaga-costa-del-sol" },
    ],
    faqs: [
      { q: "¿Cuándo es el Carnaval de Tenerife 2027?", a: "El Martes de Carnaval es el 9 de febrero de 2027; la fiesta dura varios días alrededor de esa fecha. Confirma el programa en la web oficial del Carnaval antes de comprar." },
      DOCUMENTOS,
      PAGO,
    ],
    notaPrecio: PRECIO_BAJA,
  }),
  mes({
    mes: "marzo",
    descripcion:
      "Viajar a España en marzo desde Lima: las Fallas de Valencia (15 al 19), Semana Santa 2027 del 21 al 28 y el inicio de la primavera. Separa con el 50%.",
    intro:
      "Marzo trae la primavera y dos de las fiestas más famosas de España: las Fallas de Valencia y, en 2027, la Semana Santa a fin de mes.",
    fechas: [
      { cuando: "15 al 19 de marzo", que: "Fallas de Valencia: monumentos gigantes, pirotecnia y la quema del 19 de marzo." },
      { cuando: "21 al 28 de marzo de 2027", que: "Semana Santa, con procesiones en Sevilla, Málaga y toda España." },
      { cuando: "Domingo 28 de marzo de 2027", que: "España adelanta una hora el reloj (horario de verano)." },
    ],
    clima: "Empieza la primavera: días templados, cerca de 18 °C en Madrid, y noches frescas. Lleva una casaca.",
    queHacer: [
      "Las Fallas en Valencia y la paella en su tierra.",
      "Las procesiones de Semana Santa en Sevilla y Málaga.",
      "Los parques de Madrid y Barcelona en primavera.",
    ],
    consejoCompra:
      "Las fechas de Fallas y Semana Santa se llenan: compra con dos o tres meses de anticipación. La primera quincena de marzo es más barata.",
    rutas: ["lima-madrid", "lima-valencia", "lima-sevilla", "lima-malaga"],
    destinos: [
      { texto: "Semana Santa en España", href: "/semana-santa-en-espana" },
      { texto: "Sevilla y Andalucía", href: "/destinos/sevilla-andalucia" },
    ],
    faqs: [
      { q: "¿Cuándo son las Fallas de Valencia?", a: "Todos los años del 15 al 19 de marzo; la noche del 19, día de San José, se queman las fallas." },
      DOCUMENTOS,
      PAGO,
    ],
    notaPrecio: PRECIO_MEDIA,
  }),
  mes({
    mes: "abril",
    descripcion:
      "Viajar a España en abril desde Lima: Feria de Abril de Sevilla, Sant Jordi en Barcelona, primavera y buen clima para recorrer. Separa con el 50%.",
    intro:
      "Abril es de los meses más bonitos para conocer España: clima agradable, parques en flor y fiestas como la Feria de Sevilla y Sant Jordi en Barcelona.",
    fechas: [
      { cuando: "Mediados de abril", que: "Feria de Abril de Sevilla: normalmente dos semanas después de Semana Santa. Confirma las fechas en la web oficial." },
      { cuando: "23 de abril", que: "Sant Jordi en Barcelona: las calles se llenan de puestos de libros y rosas." },
      { cuando: "Todo el mes", que: "Primavera: buen clima para caminar las ciudades." },
    ],
    clima: "Primavera templada: en Madrid las máximas rondan los 18 a 20 °C. Puede llover algunos días; lleva una casaca ligera.",
    queHacer: [
      "La Feria de Abril de Sevilla, con casetas, caballos y trajes de flamenca.",
      "Sant Jordi en Barcelona, el día del libro y la rosa.",
      "Granada y la Alhambra con temperaturas agradables.",
    ],
    consejoCompra:
      "Los hoteles de Sevilla suben mucho en la semana de la Feria: resérvalos con tiempo. Los vuelos de abril suelen costar menos que los de verano.",
    rutas: ["lima-madrid", "lima-sevilla", "lima-barcelona", "lima-granada"],
    destinos: [
      { texto: "Sevilla y Andalucía", href: "/destinos/sevilla-andalucia" },
      { texto: "Pasajes a Barcelona", href: "/pasajes-a-barcelona" },
    ],
    faqs: [
      { q: "¿Abril es buen mes para viajar a España?", a: "Sí: es primavera, el clima es agradable y todavía no llega la temporada alta del verano." },
      DOCUMENTOS,
      PAGO,
    ],
    notaPrecio: PRECIO_MEDIA,
  }),
  mes({
    mes: "mayo",
    descripcion:
      "Viajar a España en mayo desde Lima: San Isidro en Madrid, los Patios de Córdoba, días largos y buen clima antes del verano. Separa con el 50%.",
    intro:
      "Mayo es para muchos el mejor mes para viajar a España: hace buen tiempo, los días son largos y todavía no llegan los precios del verano.",
    fechas: [
      { cuando: "2 de mayo", que: "Fiesta de la Comunidad de Madrid." },
      { cuando: "Primera quincena de mayo", que: "Fiesta de los Patios de Córdoba: casas que abren sus patios llenos de flores." },
      { cuando: "15 de mayo", que: "San Isidro, el santo patrón de Madrid, con verbenas y fiestas populares." },
    ],
    clima: "Primavera cálida: en Madrid las máximas rondan los 24 °C. En el sur ya hace calor en las tardes.",
    queHacer: [
      "Las fiestas de San Isidro en Madrid.",
      "Córdoba y sus patios, a una hora y media de Sevilla en tren.",
      "Las primeras playas en la Costa del Sol y Valencia.",
    ],
    consejoCompra:
      "Mayo tiene precios de temporada media: más baratos que junio a agosto. Cotiza con dos meses de anticipación.",
    rutas: ["lima-madrid", "lima-sevilla", "lima-malaga", "lima-barcelona"],
    destinos: [
      { texto: "Sevilla y Andalucía", href: "/destinos/sevilla-andalucia" },
      { texto: "Málaga y Costa del Sol", href: "/destinos/malaga-costa-del-sol" },
    ],
    faqs: [
      { q: "¿Mayo es buen mes para viajar a España?", a: "Sí, es de los mejores: buen clima, días largos y precios más bajos que en el verano." },
      DOCUMENTOS,
      PAGO,
    ],
    notaPrecio: PRECIO_MEDIA,
  }),
  mes({
    mes: "junio",
    descripcion:
      "Viajar a España en junio desde Lima: la Noche de San Juan, las primeras playas, días larguísimos y el inicio de la temporada alta. Separa con el 50%.",
    intro:
      "En junio empieza el verano español: las playas se llenan, anochece pasadas las nueve y media, y a fin de mes suben los precios por la temporada alta.",
    fechas: [
      { cuando: "21 de junio", que: "Empieza el verano: el día más largo del año." },
      { cuando: "Noche del 23 de junio", que: "Noche de San Juan: hogueras y fiesta en las playas de Alicante, Barcelona y toda la costa." },
      { cuando: "Fin de mes", que: "Terminan las clases en España y empieza la temporada alta." },
    ],
    clima: "Hace calor: en Madrid las máximas pasan los 28 °C y en Sevilla los 32 °C. Lleva ropa ligera y protector solar.",
    queHacer: [
      "La Noche de San Juan en la playa de Alicante o de Barcelona.",
      "Mallorca e Ibiza antes de que lleguen las multitudes de julio y agosto.",
      "Las terrazas de Madrid hasta tarde, aprovechando los días largos.",
    ],
    consejoCompra:
      "La primera quincena de junio es más barata que la segunda. Si vas a la playa en las islas, reserva el hotel con tiempo.",
    rutas: ["lima-barcelona", "lima-alicante", "lima-palma-de-mallorca", "lima-madrid"],
    destinos: [
      { texto: "España en verano", href: "/viajar-a-espana-en-verano" },
      { texto: "Palma de Mallorca", href: "/destinos/mallorca-islas-baleares" },
    ],
    faqs: [
      { q: "¿Junio ya es temporada alta en España?", a: "La primera mitad todavía no tanto; desde fin de mes, con las vacaciones escolares, suben los vuelos y los hoteles." },
      DOCUMENTOS,
      PAGO,
    ],
    notaPrecio: PRECIO_MEDIA,
  }),
  mes({
    mes: "septiembre",
    descripcion:
      "Viajar a España en septiembre desde Lima: La Mercè en Barcelona, la vendimia en La Rioja, el mar todavía caliente y menos gente. Separa con el 50%.",
    intro:
      "Septiembre es la mejor época para quien quiere verano sin multitudes: el mar sigue caliente, el calor fuerte se va y los precios bajan después de mediados de mes.",
    fechas: [
      { cuando: "11 de septiembre", que: "Diada, el día de Cataluña." },
      { cuando: "Alrededor del 21 de septiembre", que: "Fiestas de San Mateo y la vendimia en Logroño (La Rioja)." },
      { cuando: "24 de septiembre", que: "La Mercè, la gran fiesta de Barcelona, con castellers y conciertos." },
    ],
    clima: "Fin del verano: en Madrid las máximas rondan los 26 °C y en la costa el mar sigue cálido para bañarse.",
    queHacer: [
      "Las playas de Barcelona, Valencia y Málaga con menos gente.",
      "La Mercè en Barcelona.",
      "La ruta del vino en La Rioja durante la vendimia (se llega en tren o bus desde Madrid o Bilbao).",
    ],
    consejoCompra:
      "Desde mediados de septiembre bajan los pasajes y los hoteles de playa. Es buen mes para unas vacaciones de playa más baratas que en agosto.",
    rutas: ["lima-barcelona", "lima-madrid", "lima-valencia", "lima-bilbao"],
    destinos: [
      { texto: "Pasajes a Barcelona", href: "/pasajes-a-barcelona" },
      { texto: "Málaga y Costa del Sol", href: "/destinos/malaga-costa-del-sol" },
    ],
    faqs: [
      { q: "¿Todavía se puede ir a la playa en septiembre?", a: "Sí. El agua del Mediterráneo sigue cálida todo el mes y hay mucha menos gente que en agosto." },
      DOCUMENTOS,
      PAGO,
    ],
    notaPrecio: PRECIO_MEDIA,
  }),
  mes({
    mes: "octubre",
    descripcion:
      "Viajar a España en octubre desde Lima: Fiesta Nacional del 12 de octubre, las Fiestas del Pilar en Zaragoza y otoño templado. Separa con el 50%.",
    intro:
      "Octubre es otoño templado en España: buen clima para caminar, menos turistas y precios más bajos que en verano.",
    fechas: [
      { cuando: "12 de octubre", que: "Fiesta Nacional de España, con desfile en Madrid." },
      { cuando: "Semana del 12 de octubre", que: "Fiestas del Pilar en Zaragoza, la gran fiesta de Aragón." },
      { cuando: "Todo el mes", que: "Otoño: árboles de colores en parques como El Retiro." },
    ],
    clima: "Otoño agradable: en Madrid las máximas rondan los 20 °C; en el sur todavía hace calor de día.",
    queHacer: [
      "Las Fiestas del Pilar en Zaragoza, a menos de hora y media en tren desde Madrid.",
      "Madrid, Toledo y Segovia con clima ideal para caminar.",
      "Andalucía sin el calor fuerte del verano.",
    ],
    consejoCompra:
      "Octubre tiene precios de temporada media a baja. Cotiza con uno o dos meses de anticipación.",
    rutas: ["lima-madrid", "lima-barcelona", "lima-sevilla", "lima-valencia"],
    destinos: [
      { texto: "Paquetes turísticos a España", href: "/paquetes-a-espana" },
      { texto: "Sevilla y Andalucía", href: "/destinos/sevilla-andalucia" },
    ],
    faqs: [
      { q: "¿Octubre es buen mes para viajar a España?", a: "Sí: el clima es templado, hay menos turistas que en verano y los precios bajan." },
      DOCUMENTOS,
      PAGO,
    ],
    notaPrecio: PRECIO_MEDIA,
  }),
  mes({
    mes: "noviembre",
    descripcion:
      "Viajar a España en noviembre desde Lima: uno de los meses más baratos para volar, Todos los Santos y el encendido de las luces de Navidad. Separa con el 50%.",
    intro:
      "Noviembre es temporada baja: es de los meses más baratos para volar Lima–Madrid y, a fin de mes, las ciudades encienden sus luces de Navidad.",
    fechas: [
      { cuando: "1 de noviembre", que: "Todos los Santos: feriado en toda España." },
      { cuando: "Todo el mes", que: "Temporada baja: vuelos y hoteles más baratos que en diciembre." },
      { cuando: "Fin de mes", que: "Se encienden las luces de Navidad en Madrid, Barcelona y otras ciudades." },
    ],
    clima: "Otoño frío: en Madrid las máximas rondan los 14 °C y las noches son frías. Lleva casaca abrigadora.",
    queHacer: [
      "Museos y monumentos sin colas.",
      "Ver el encendido de las luces de Navidad a fin de mes.",
      "Visitar a la familia en España antes de la temporada cara de diciembre.",
    ],
    consejoCompra:
      "Si quieres visitar a tu familia en España y te da igual no estar en Navidad, noviembre sale bastante más barato que diciembre.",
    rutas: ["lima-madrid", "lima-barcelona", "madrid-lima", "barcelona-lima"],
    destinos: [
      { texto: "España en Navidad", href: "/viajar-a-espana-en-navidad" },
      { texto: "Traer a un familiar de visita", href: "/blog/traer-familiar-de-peru-a-espana-de-visita" },
    ],
    faqs: [
      { q: "¿Noviembre es barato para viajar a España?", a: "Sí, es de los meses más baratos del año para volar entre Lima y Madrid. Escríbenos con tu fecha y te damos el precio exacto." },
      DOCUMENTOS,
      PAGO,
    ],
    notaPrecio: PRECIO_BAJA,
  }),
];

// Navegación «mes a mes»: los meses que tienen página de temporada enlazan a ella.
export const NAV_MESES_ESPANA: { texto: string; href: string }[] = [
  ["Enero", "/viajar-a-espana-en-enero"],
  ["Febrero", "/viajar-a-espana-en-febrero"],
  ["Marzo", "/viajar-a-espana-en-marzo"],
  ["Abril", "/viajar-a-espana-en-abril"],
  ["Mayo", "/viajar-a-espana-en-mayo"],
  ["Junio", "/viajar-a-espana-en-junio"],
  ["Julio y agosto", "/viajar-a-espana-en-verano"],
  ["Septiembre", "/viajar-a-espana-en-septiembre"],
  ["Octubre", "/viajar-a-espana-en-octubre"],
  ["Noviembre", "/viajar-a-espana-en-noviembre"],
  ["Diciembre", "/viajar-a-espana-en-navidad"],
].map(([texto, href]) => ({ texto, href }));

export function buscarMesEspana(m: string): MesEspana {
  const r = MESES_ESPANA.find((x) => x.mes === m);
  if (!r) throw new Error(`mes sin página: ${m}`);
  return r;
}
