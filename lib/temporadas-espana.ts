// Páginas «viajar a España en Navidad / verano / Semana Santa»: lo que se busca antes de comprar en temporada alta.
// Fechas: Semana Santa 2027 (Domingo de Resurrección 28-mar-2027); el resto son fiestas fijas. 26-oct-2026.

export interface TemporadaEspana {
  ruta: string;
  h1: string;
  // ≤ 49 caracteres: se le suma " | Cityland".
  tituloSeo: string;
  descripcion: string;
  intro: string;
  fechas: { cuando: string; que: string }[];
  clima: string;
  queHacer: string[];
  consejoCompra: string;
  // Rutas de /vuelos que se muestran con su precio.
  rutas: string[];
  destinos: { texto: string; href: string }[];
  faqs: { q: string; a: string }[];
  mensajeWhatsApp: string;
  // Nota bajo los precios; por defecto, la de temporada alta.
  notaPrecio?: string;
}

const DOCUMENTOS = {
  q: "¿Qué documentos necesito?",
  a: "Pasaporte vigente, sin visa, para turismo de hasta 90 días. En migración te pueden pedir el pasaje de regreso, el hotel o la carta de invitación, dinero para tu estadía y un seguro de viaje.",
};
const PAGO = { q: "¿Puedo separar mi pasaje?", a: "Sí. Separas con el 50% y pagas el resto antes de viajar." };

export const TEMPORADAS_ESPANA: Readonly<Record<string, TemporadaEspana>> = {
  navidad: {
    ruta: "/viajar-a-espana-en-navidad",
    h1: "Viajar a España en Navidad y Año Nuevo desde Lima",
    tituloSeo: "Viajar a España en Navidad y Año Nuevo",
    descripcion:
      "Pasajes Lima–Madrid y Barcelona para Navidad y Año Nuevo, y pasajes Madrid–Lima para pasar las fiestas en Perú. Fechas clave, clima y cuándo comprar. Separa con el 50%.",
    intro:
      "Diciembre es de los meses más caros para volar entre Perú y España: viajan los que van a pasar las fiestas con su familia en España y los peruanos que vuelven a Lima. Mientras antes cotices, más opciones de vuelo tienes.",
    fechas: [
      { cuando: "24 y 25 de diciembre", que: "Nochebuena y Navidad: muchas tiendas y museos cierran o abren menos horas." },
      { cuando: "31 de diciembre", que: "Nochevieja: las 12 uvas en la Puerta del Sol de Madrid." },
      { cuando: "5 y 6 de enero", que: "Cabalgata de Reyes y Día de Reyes, la fiesta más esperada por los niños en España." },
    ],
    clima:
      "Es invierno: en Madrid las máximas rondan los 10 °C y en las noches puede bajar cerca de 0 °C. Lleva abrigo, gorro y guantes.",
    queHacer: [
      "El mercadillo navideño de la Plaza Mayor y las luces de Navidad en el centro de Madrid.",
      "Recibir el Año Nuevo en la Puerta del Sol.",
      "Las rebajas de enero, que empiezan después de Reyes.",
    ],
    consejoCompra:
      "Cotiza con dos o tres meses de anticipación: los asientos más baratos de diciembre se venden primero. Si tus fechas son flexibles, salir antes del 20 de diciembre o volver después del 7 de enero suele costar menos.",
    rutas: ["lima-madrid", "lima-barcelona", "madrid-lima", "barcelona-lima"],
    destinos: [
      { texto: "Traer a un familiar de visita", href: "/blog/traer-familiar-de-peru-a-espana-de-visita" },
      { texto: "Viajar a España con niños", href: "/blog/viajar-a-espana-con-ninos-desde-peru" },
      { texto: "Equipaje por aerolínea", href: "/blog/equipaje-para-viajar-a-espana-iberia-air-europa-latam-plus-ultra" },
    ],
    faqs: [
      {
        q: "¿Vives en España y quieres pasar Navidad en Perú?",
        a: "Te cotizamos el pasaje Madrid–Lima o Barcelona–Lima por WhatsApp desde España; pagas con tarjeta o transferencia.",
      },
      DOCUMENTOS,
      PAGO,
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un pasaje a España para Navidad o Año Nuevo.",
  },
  verano: {
    ruta: "/viajar-a-espana-en-verano",
    h1: "Viajar a España en verano desde Lima: julio y agosto",
    tituloSeo: "Viajar a España en verano: julio y agosto",
    descripcion:
      "Pasajes y paquetes a España para julio y agosto: playas de Barcelona, la Costa del Sol, Valencia, Mallorca y Canarias. Clima, temporada alta y cuándo comprar. Separa con el 50%.",
    intro:
      "Julio y agosto son el verano europeo y la temporada más alta del año: coinciden con las vacaciones de medio año y Fiestas Patrias en el Perú. Es la mejor época para las playas de España.",
    fechas: [
      { cuando: "Julio y agosto", que: "Temporada alta: más vuelos llenos y hoteles de playa con precios más altos." },
      { cuando: "28 y 29 de julio", que: "Fiestas Patrias en el Perú: buen momento para sumar días de vacaciones." },
      { cuando: "Agosto", que: "Muchos españoles salen de vacaciones: las ciudades se vacían y las playas se llenan." },
    ],
    clima:
      "Hace calor: en Madrid y Sevilla se pasan fácilmente los 35 °C en las tardes. En la costa el calor es más suave. Lleva ropa ligera, gorra y protector solar.",
    queHacer: [
      "Playas de Barcelona, Valencia, la Costa del Sol (Málaga) y las Islas Baleares y Canarias.",
      "Visitar museos y monumentos temprano en la mañana, antes del calor fuerte.",
      "Combinar España con otros países en un Eurotrip de 17 días.",
    ],
    consejoCompra:
      "Para julio y agosto conviene cotizar entre marzo y mayo. Junio y septiembre tienen buen clima y precios más bajos que pleno verano.",
    rutas: ["lima-madrid", "lima-barcelona", "lima-malaga", "lima-valencia"],
    destinos: [
      { texto: "Paquetes turísticos a España", href: "/paquetes-a-espana" },
      { texto: "Málaga y Costa del Sol", href: "/destinos/malaga-costa-del-sol" },
      { texto: "Palma de Mallorca", href: "/destinos/mallorca-islas-baleares" },
      { texto: "Eurotrip Madrid, París y Roma", href: "/destinos/madrid-paris-roma-17-dias" },
    ],
    faqs: [
      { q: "¿Cuál es la mejor playa de España para ir desde Lima?", a: "Barcelona y Málaga tienen vuelos más fáciles; Mallorca y Tenerife son islas con playas más tranquilas. Te cotizamos según lo que buscas." },
      DOCUMENTOS,
      PAGO,
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un viaje a España para el verano (julio o agosto).",
  },
  semanaSanta: {
    ruta: "/semana-santa-en-espana",
    h1: "Semana Santa 2027 en España desde Lima",
    tituloSeo: "Semana Santa 2027 en España desde Lima",
    descripcion:
      "Semana Santa 2027 en España: procesiones de Sevilla y Málaga del 21 al 28 de marzo, clima de primavera y pasajes desde Lima. Cuándo comprar y qué llevar. Separa con el 50%.",
    intro:
      "La Semana Santa española es famosa por sus procesiones, sobre todo en Andalucía. En 2027 cae a fines de marzo, en plena primavera, con buen clima para recorrer las ciudades.",
    fechas: [
      { cuando: "Domingo 21 de marzo de 2027", que: "Domingo de Ramos: empiezan las procesiones." },
      { cuando: "Jueves 25 y viernes 26 de marzo", que: "Jueves y Viernes Santo: feriados en el Perú y los días de las procesiones más grandes." },
      { cuando: "Domingo 28 de marzo", que: "Domingo de Resurrección." },
    ],
    clima: "Es primavera: días templados y noches frescas. Lleva una casaca ligera.",
    queHacer: [
      "Las procesiones de Sevilla y Málaga, las más conocidas de España.",
      "Recorrer Andalucía: Sevilla, Córdoba, Granada y la Costa del Sol.",
      "Madrid y Toledo, con procesiones más tranquilas.",
    ],
    consejoCompra:
      "El feriado del Perú es de solo 4 días: para ir a España suma días de vacaciones. Sevilla y Málaga se llenan en Semana Santa, así que reserva vuelo y hotel con anticipación.",
    rutas: ["lima-madrid", "lima-sevilla", "lima-malaga", "lima-barcelona"],
    destinos: [
      { texto: "Sevilla y Andalucía", href: "/destinos/sevilla-andalucia" },
      { texto: "Málaga y Costa del Sol", href: "/destinos/malaga-costa-del-sol" },
      { texto: "Feriados largos 2026–2027", href: "/feriados-largos" },
    ],
    faqs: [
      { q: "¿Alcanza el feriado de Semana Santa para ir a España?", a: "Solo con el feriado no: el viaje de ida y vuelta toma dos días. Lo ideal es sumar al menos una semana de vacaciones." },
      DOCUMENTOS,
      PAGO,
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un viaje a España para Semana Santa 2027.",
  },
};
