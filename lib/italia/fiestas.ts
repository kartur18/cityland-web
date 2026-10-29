import { formatoUSD } from "@/lib/formato-precio";
import { paquetesDe } from "@/lib/italia/rutas-ida";
import { desdeLimaItaliaEnMes } from "@/lib/italia/precios";
import type { LandingItalia, Seccion } from "@/lib/italia/tipos";

// Fiestas y eventos de Italia con viaje desde Lima. Fechas con fuente (consulta: 28-oct-2026).

const ENLACES = [
  { texto: "Pasajes Lima–Roma", href: "/vuelos/lima-roma" },
  { texto: "Pasajes Lima–Venecia", href: "/italia/pasajes-lima-venecia" },
  { texto: "Pasajes Lima–Verona", href: "/italia/pasajes-lima-verona" },
  { texto: "Paquetes a Italia", href: "/paquetes-a-italia" },
];

interface Fiesta {
  slug: string;
  tituloSeo: string;
  h1: string;
  migas: string;
  fecha: string;
  mes: number;
  ciudad: string;
  foto: string;
  fotoAlt: string;
  bajada: string;
  descripcion: string;
  secciones: Seccion[];
  consejo: string;
  paquetes: string[];
  fuentes: { texto: string; url: string }[];
  faqs: { q: string; a: string }[];
}

const FIESTAS: Fiesta[] = [
  {
    slug: "carnaval-de-venecia-2027",
    tituloSeo: "Carnaval de Venecia 2027: fechas y viaje",
    h1: "Carnaval de Venecia 2027 desde Lima",
    migas: "Carnaval de Venecia 2027",
    fecha: "23 de enero al 9 de febrero de 2027",
    mes: 0,
    ciudad: "Venecia",
    foto: "/images/destinos/venecia.jpg",
    fotoAlt: "Venecia",
    bajada: "Máscaras, trajes de época y desfiles por los canales. En 2027 el Carnaval va del 23 de enero al martes 9 de febrero.",
    descripcion: "Carnaval de Venecia 2027: del 23 de enero al 9 de febrero. Qué ver, cuándo ir, dónde alojarte y pasajes desde Lima con escala en Europa.",
    secciones: [
      {
        id: "que-ver",
        titulo: "Qué ver",
        lista: ["Las máscaras y trajes en la Plaza San Marcos.", "Desfiles y espectáculos en el Gran Canal en los fines de semana.", "La última semana, hasta el martes de Carnaval, es la más concurrida."],
        estilo: "tarjetas",
      },
      { id: "programa", titulo: "El programa", texto: ["El programa día por día lo publica la organización del Carnaval unas semanas antes. Te lo enviamos apenas salga."] },
    ],
    consejo: "Los hoteles de Venecia se llenan en las fechas fuertes: si buscas precio, alójate en Mestre, a 10 minutos en tren o bus de Venecia.",
    paquetes: ["italia-en-tren-veneto-7-noches", "fly-y-drive-veneto-7-noches"],
    fuentes: [{ texto: "Carnevale di Venezia (sitio oficial)", url: "https://www.carnevale.venezia.it/" }],
    faqs: [
      { q: "¿Cuándo es el Carnaval de Venecia 2027?", a: "Del sábado 23 de enero al martes 9 de febrero de 2027." },
      { q: "¿Cuántos días necesito?", a: "Dos o tres días en Venecia alcanzan para el Carnaval. Súmale Verona, Florencia o Roma y armas un viaje de 10 días." },
    ],
  },
  {
    slug: "semana-santa-en-roma-2027",
    tituloSeo: "Semana Santa en Roma 2027: fechas y viaje",
    h1: "Semana Santa en Roma 2027",
    migas: "Semana Santa en Roma",
    fecha: "21 al 28 de marzo de 2027",
    mes: 2,
    ciudad: "Roma",
    foto: "/images/destinos/roma.jpg",
    fotoAlt: "Roma",
    bajada: "Domingo de Ramos el 21 de marzo, Vía Crucis en el Coliseo el Viernes Santo y misa de Pascua en San Pedro el 28 de marzo de 2027.",
    descripcion: "Semana Santa en Roma 2027: Ramos el 21 de marzo, Viernes Santo el 26 y Pascua el 28. Las ceremonias del Papa, cómo asistir y pasajes desde Lima.",
    secciones: [
      {
        id: "calendario",
        titulo: "Calendario 2027",
        tabla: {
          cab: ["Día", "Fecha", "Qué pasa"],
          filas: [
            ["Domingo de Ramos", "21 de marzo", "Misa en la Plaza San Pedro"],
            ["Viernes Santo", "26 de marzo", "Vía Crucis en el Coliseo, de noche"],
            ["Domingo de Pascua", "28 de marzo", "Misa y bendición Urbi et Orbi"],
            ["Pasquetta", "29 de marzo", "Feriado en Italia"],
          ],
        },
        texto: ["El Vaticano publica los horarios exactos cerca de la fecha."],
      },
      { id: "entradas", titulo: "Cómo asistir", texto: ["Las misas del Papa en la Plaza San Pedro son gratuitas, pero se pide un boleto a la Prefectura de la Casa Pontificia con anticipación. Llega muy temprano: los controles de seguridad toman tiempo."] },
    ],
    consejo: "Semana Santa coincide con feriado en Perú y en Italia: reserva pasaje y hotel con dos o tres meses de anticipación.",
    paquetes: ["italia-en-tren-lacio-7-noches", "salida-garantizada-italia-clasica-un-viaje-a-traves-del-tiempo-9-noches"],
    fuentes: [],
    faqs: [
      { q: "¿Cuándo es la Semana Santa 2027 en Roma?", a: "Del Domingo de Ramos, 21 de marzo, al Domingo de Pascua, 28 de marzo de 2027. El lunes 29 es feriado en Italia." },
      { q: "¿Se paga para ver al Papa?", a: "No. Los boletos para las misas son gratuitos y se piden a la Prefectura de la Casa Pontificia." },
    ],
  },
  {
    slug: "navidad-en-italia",
    tituloSeo: "Navidad en Italia: Roma, el Vaticano y Milán",
    h1: "Navidad en Italia desde Lima",
    migas: "Navidad en Italia",
    fecha: "8 de diciembre al 6 de enero",
    mes: 11,
    ciudad: "Roma y Milán",
    foto: "/images/destinos/milan.webp",
    fotoAlt: "Duomo de Milán",
    bajada: "Del 8 de diciembre, cuando se encienden los adornos, al 6 de enero, día de la Befana: misa de Nochebuena en San Pedro, mercados navideños y el árbol frente al Duomo de Milán.",
    descripcion: "Navidad en Italia: misa de Nochebuena en San Pedro, Urbi et Orbi el 25 al mediodía, mercados navideños y la Befana del 6 de enero. Clima y pasajes desde Lima.",
    secciones: [
      {
        id: "fechas",
        titulo: "Las fechas de la Navidad italiana",
        lista: [
          "7 de diciembre: San Ambrosio en Milán, con su feria tradicional.",
          "8 de diciembre: Inmaculada Concepción (feriado); empiezan los adornos y los mercados.",
          "24 de diciembre: misa de Nochebuena del Papa en San Pedro (en 2025 fue a las 22:00).",
          "25 de diciembre: bendición Urbi et Orbi a las 12:00 en la Plaza San Pedro.",
          "6 de enero: Epifanía, la fiesta de la Befana (feriado).",
        ],
      },
      { id: "clima", titulo: "El clima", texto: ["En diciembre Roma promedia 12,7 °C de máxima y 4,7 °C de mínima; Milán, 7,4 °C y 0,6 °C. Lleva abrigo grueso."] },
    ],
    consejo: "Diciembre es temporada alta en los vuelos Lima–Europa. Si viajas en Navidad, separa tu pasaje desde agosto o septiembre.",
    paquetes: ["italia-en-tren-lombardia-7-noches", "italia-en-tren-lacio-7-noches"],
    fuentes: [{ texto: "National Catholic Register: Navidad 2025 en el Vaticano", url: "https://www.ncregister.com/cna/pope-leo-xiv-revives-tradition-during-first-christmas-of-his-pontificate" }],
    faqs: [
      { q: "¿Cómo se celebra la Navidad en Italia?", a: "Con el pesebre (presepe), la misa de Nochebuena, el almuerzo del 25 en familia y la Befana el 6 de enero, que trae regalos a los niños." },
      { q: "¿Se puede ir a la misa de Nochebuena del Papa?", a: "Sí, con boleto gratuito de la Prefectura de la Casa Pontificia. Se piden con mucha anticipación." },
    ],
  },
  {
    slug: "arena-di-verona-2027",
    tituloSeo: "Arena di Verona 2027: fechas de la ópera",
    h1: "Arena di Verona Opera Festival 2027",
    migas: "Arena di Verona 2027",
    fecha: "11 de junio al 11 de septiembre de 2027",
    mes: 6,
    ciudad: "Verona",
    foto: "/images/destinos/verona.jpg",
    fotoAlt: "Arena de Verona",
    bajada: "La 104.ª temporada de ópera en el anfiteatro romano de Verona va del 11 de junio al 11 de septiembre de 2027.",
    descripcion: "Arena di Verona Opera Festival 2027: del 11 de junio al 11 de septiembre, 104.ª edición. Cómo llegar desde Lima, dónde alojarte y qué ver cerca.",
    secciones: [
      {
        id: "tips",
        titulo: "Para disfrutar la función",
        lista: ["Las funciones son de noche, al aire libre: lleva una casaca ligera.", "Las gradas de piedra son más baratas que la platea; alquila un cojín.", "Compra las entradas en el sitio oficial de la Arena."],
        estilo: "tarjetas",
      },
      { id: "cerca", titulo: "Qué ver cerca", lista: ["El Lago de Garda, a menos de una hora.", "Venecia, a cerca de una hora y media en tren.", "Milán, a menos de dos horas en tren."] },
    ],
    consejo: "Junio a agosto es temporada alta en los vuelos desde Lima: cotiza con tiempo y combina Verona con Venecia y Milán.",
    paquetes: ["italia-en-tren-veneto-7-noches", "fly-y-drive-veneto-7-noches"],
    fuentes: [{ texto: "Arena di Verona: programa 2027", url: "https://www.arena.it/en/magazine/news/104-arena-di-verona-opera-festival-scopri-il-programma-2027/" }],
    faqs: [
      { q: "¿Cuándo es la temporada de ópera de la Arena di Verona 2027?", a: "Del 11 de junio al 11 de septiembre de 2027. Es la edición número 104." },
      { q: "¿A qué aeropuerto llego?", a: "Al aeropuerto de Verona (VRN), con conexión en Europa, o a Venecia o Milán y sigues en tren." },
    ],
  },
];

function landingFiesta(f: Fiesta): LandingItalia {
  const precio = desdeLimaItaliaEnMes(f.mes);
  return {
    slug: f.slug,
    grupo: "fiesta",
    tituloSeo: f.tituloSeo,
    descripcion: f.descripcion,
    h1: f.h1,
    bajada: f.bajada,
    migas: f.migas,
    sello: f.fecha,
    foto: f.foto,
    fotoAlt: f.fotoAlt,
    precio,
    etiquetaPrecio: "Lima–Roma ida y vuelta, esa temporada",
    mensaje: `¡Hola Cityland Travel! Quiero viajar a ${f.ciudad} para ${f.migas}.`,
    boton: "Cotizar mi viaje",
    datos: [{ k: "Fechas", v: f.fecha }],
    secciones: [...f.secciones, { id: "consejo", titulo: "Nuestro consejo", estilo: "aviso", texto: [f.consejo, `Pasaje Lima–Roma ida y vuelta en esa temporada: desde ${formatoUSD(precio)}.`] }],
    paquetes: paquetesDe(f.paquetes),
    pregunta: `Quiero ir a ${f.migas}. ¿Cuántos días me recomiendas y cuánto me sale?`,
    fuentes: f.fuentes,
    faqs: f.faqs,
    enlaces: ENLACES,
  };
}

export function landingsFiestas(): LandingItalia[] {
  return FIESTAS.map(landingFiesta);
}
