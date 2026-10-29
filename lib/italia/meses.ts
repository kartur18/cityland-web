import { formatoUSD } from "@/lib/formato-precio";
import { paquetesDe } from "@/lib/italia/rutas-ida";
import { desdeLimaItaliaEnMes, mesesLimaItalia } from "@/lib/italia/precios";
import type { LandingItalia } from "@/lib/italia/tipos";

// «Viajar a Italia en <mes>»: clima (normales OMM 1991–2020 de Roma-Ciampino y Milán-Linate), precio del pasaje
// de ese mes, temporada y fiestas con fecha (calendario 2026-2027, consulta: 28-oct-2026).

interface Mes {
  nombre: string;
  roma: [number, number];
  milan: [number, number];
  temporada: "alta" | "media" | "baja";
  fiestas: string[];
  ropa: string;
  foto: string;
  fotoAlt: string;
  idea: string;
}

const MESES: Mes[] = [
  { nombre: "enero", roma: [12, 3.4], milan: [7.3, -0.4], temporada: "baja", fiestas: ["1 de enero: Año Nuevo (feriado).", "6 de enero: Epifanía, la fiesta de la Befana (feriado).", "Desde el 23 de enero de 2027: Carnaval de Venecia."], ropa: "Abrigo grueso, chompa, bufanda y zapatos cerrados que aguanten lluvia.", foto: "/images/destinos/venecia.jpg", fotoAlt: "Venecia en invierno", idea: "museos sin colas y el inicio del Carnaval de Venecia" },
  { nombre: "febrero", roma: [13, 3.4], milan: [10, 0.6], temporada: "baja", fiestas: ["Hasta el 9 de febrero de 2027: Carnaval de Venecia, con su semana fuerte al final."], ropa: "Abrigo, capas y paraguas; en el norte puede bajar de cero en la noche.", foto: "/images/destinos/venecia.jpg", fotoAlt: "Canal de Venecia", idea: "el Carnaval de Venecia y precios de temporada baja" },
  { nombre: "marzo", roma: [15.8, 5.9], milan: [15.5, 4.4], temporada: "media", fiestas: ["21 al 28 de marzo de 2027: Semana Santa en Roma y el Vaticano.", "28 de marzo: Pascua; 29 de marzo: Pasquetta (feriado)."], ropa: "Casaca, chompa ligera y una capa para la noche.", foto: "/images/destinos/roma.jpg", fotoAlt: "Roma en primavera", idea: "la Semana Santa en Roma" },
  { nombre: "abril", roma: [18.8, 8.6], milan: [19.3, 8.4], temporada: "media", fiestas: ["25 de abril: Día de la Liberación (feriado) y San Marcos, patrón de Venecia."], ropa: "Ropa por capas: de día se está bien en polo, de noche hace falta casaca.", foto: "/images/destinos/florencia.jpg", fotoAlt: "Florencia en primavera", idea: "primavera templada, ideal para caminar ciudades" },
  { nombre: "mayo", roma: [22.3, 12.6], milan: [23.9, 12.8], temporada: "media", fiestas: ["1 de mayo: Día del Trabajo (feriado)."], ropa: "Ropa ligera, una casaca delgada y zapatillas cómodas.", foto: "/images/destinos/napoles.jpg", fotoAlt: "Costa de Nápoles", idea: "buen clima antes del calor y de las vacaciones europeas" },
  { nombre: "junio", roma: [28.1, 16.7], milan: [28.1, 17.2], temporada: "alta", fiestas: ["2 de junio: Fiesta de la República (feriado).", "Desde el 11 de junio de 2027: temporada de ópera en la Arena de Verona.", "24 de junio: San Juan, patrón de Florencia.", "29 de junio: San Pedro y San Pablo, patronos de Roma."], ropa: "Ropa de verano, bloqueador y algo que cubra hombros y rodillas para entrar a las iglesias.", foto: "/images/destinos/verona.jpg", fotoAlt: "Arena de Verona", idea: "días largos y el inicio de la ópera en Verona" },
  { nombre: "julio", roma: [31, 19.3], milan: [30.7, 19.3], temporada: "alta", fiestas: ["2 de julio: Palio di Siena (Palio di Provenzano).", "Todo el mes: ópera en la Arena de Verona."], ropa: "Ropa fresca, sombrero, bloqueador y botella de agua: pasa los 30 °C.", foto: "/images/destinos/napoles.jpg", fotoAlt: "Costa italiana en verano", idea: "playas del sur y vacaciones escolares en Perú" },
  { nombre: "agosto", roma: [31.6, 19.8], milan: [29.9, 18.8], temporada: "alta", fiestas: ["15 de agosto: Ferragosto (feriado); muchos negocios cierran en la semana.", "16 de agosto: Palio di Siena (Palio dell'Assunta)."], ropa: "Ropa de verano muy fresca; protege la cabeza del sol al mediodía.", foto: "/images/destinos/palermo.jpg", fotoAlt: "Palermo en verano", idea: "el verano italiano en su punto más alto" },
  { nombre: "septiembre", roma: [26.7, 16], milan: [25.5, 14.9], temporada: "media", fiestas: ["Hasta el 11 de septiembre de 2027: ópera en la Arena de Verona.", "19 de septiembre: San Gennaro, patrón de Nápoles."], ropa: "Ropa de verano y una casaca ligera para la noche.", foto: "/images/destinos/genova.jpg", fotoAlt: "Costa de Liguria", idea: "mar todavía tibio y menos gente que en agosto" },
  { nombre: "octubre", roma: [22.2, 12.4], milan: [19, 10.2], temporada: "media", fiestas: ["4 de octubre: San Francisco de Asís, feriado nacional nuevo desde 2026."], ropa: "Capas, casaca y paraguas: empiezan las lluvias de otoño.", foto: "/images/destinos/florencia.jpg", fotoAlt: "Toscana en otoño", idea: "otoño, vendimia en la Toscana y precios más bajos" },
  { nombre: "noviembre", roma: [16.9, 8.5], milan: [12.4, 5.3], temporada: "baja", fiestas: ["1 de noviembre: Todos los Santos (feriado)."], ropa: "Abrigo, paraguas y zapatos impermeables.", foto: "/images/destinos/bolonia.jpg", fotoAlt: "Pórticos de Bolonia", idea: "el mes más barato para volar desde Lima" },
  { nombre: "diciembre", roma: [12.7, 4.7], milan: [7.4, 0.6], temporada: "alta", fiestas: ["7 de diciembre: San Ambrosio, patrón de Milán.", "8 de diciembre: Inmaculada Concepción (feriado); se encienden los adornos navideños.", "24 de diciembre: misa de Nochebuena en San Pedro; 25 de diciembre: bendición Urbi et Orbi al mediodía.", "25 y 26 de diciembre: Navidad y San Esteban (feriados)."], ropa: "Abrigo grueso, guantes y gorro, sobre todo en el norte.", foto: "/images/destinos/milan.webp", fotoAlt: "Milán en invierno", idea: "mercados de Navidad y la Navidad en el Vaticano" },
];

const TEMPORADA = {
  alta: "Temporada alta: más gente y pasajes más caros. Compra con tiempo.",
  media: "Temporada media: buen equilibrio entre clima, gente y precio.",
  baja: "Temporada baja: menos turistas y los pasajes más baratos del año.",
};

const grados = (n: number) => `${n.toLocaleString("es-PE", { maximumFractionDigits: 1 })} °C`;
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

const FUENTES = [
  { texto: "Normales climatológicas 1991–2020 de Roma (OMM/NOAA, tabla en Wikipedia)", url: "https://en.wikipedia.org/wiki/Climate_of_Rome" },
  { texto: "Normales climatológicas 1991–2020 de Milán (OMM/ISPRA, tabla en Wikipedia)", url: "https://en.wikipedia.org/wiki/Milan" },
  { texto: "Feriado del 4 de octubre (Ley 151/2025)", url: "https://www.fiscal-focus.it/quotidiano/il-quotidiano/articoli-lavoro/istituita-la-festa-nazionale-di-san-francesco-d-assisi-il-4-ottobre-diventa-giorno-festivo-dal-2026,3,178265" },
];

const ENLACES = [
  { texto: "Pasajes Lima–Roma", href: "/vuelos/lima-roma" },
  { texto: "Paquetes a Italia", href: "/paquetes-a-italia" },
  { texto: "Bolsa de viaje para Italia", href: "/italia/bolsa-de-viaje-italia" },
  { texto: "Circuitos por Europa", href: "/circuitos-por-europa" },
];

function landingMes(m: Mes, i: number): LandingItalia {
  const precio = desdeLimaItaliaEnMes(i);
  const n = cap(m.nombre);
  return {
    slug: `viajar-a-italia-en-${m.nombre}`,
    grupo: "mes",
    tituloSeo: `Viajar a Italia en ${m.nombre}: clima y precios`,
    descripcion: `¿Viajar a Italia en ${m.nombre}? Roma ${grados(m.roma[0])} de máxima y ${grados(m.roma[1])} de mínima; Milán ${grados(m.milan[0])}/${grados(m.milan[1])}. Pasaje Lima–Roma desde ${formatoUSD(precio)} y las fiestas del mes.`,
    h1: `Viajar a Italia en ${m.nombre}`,
    bajada: `${n} es temporada ${m.temporada} en Italia: ${m.idea}.`,
    migas: `Italia en ${m.nombre}`,
    sello: `Temporada ${m.temporada}`,
    foto: m.foto,
    fotoAlt: m.fotoAlt,
    precio,
    etiquetaPrecio: `Lima–Roma ida y vuelta en ${m.nombre}`,
    mensaje: `¡Hola Cityland Travel! Quiero viajar a Italia en ${m.nombre}.`,
    boton: `Cotizar mi viaje en ${m.nombre}`,
    secciones: [
      {
        id: "clima",
        titulo: `El clima en ${m.nombre}`,
        tabla: {
          cab: ["Ciudad", "Máxima promedio", "Mínima promedio"],
          filas: [
            ["Roma", grados(m.roma[0]), grados(m.roma[1])],
            ["Milán", grados(m.milan[0]), grados(m.milan[1])],
          ],
        },
        texto: [`Qué llevar: ${m.ropa}`],
      },
      { id: "fiestas", titulo: `Fiestas y feriados de ${m.nombre}`, lista: m.fiestas },
      { id: "temporada", titulo: "Precio y temporada", estilo: "aviso", texto: [`${TEMPORADA[m.temporada]} En ${m.nombre}, el pasaje Lima–Roma ida y vuelta sale desde ${formatoUSD(precio)}.`] },
    ],
    meses: mesesLimaItalia(),
    tituloMeses: "Compara con los demás meses",
    paquetes: paquetesDe(["salida-garantizada-italia-clasica-un-viaje-a-traves-del-tiempo-9-noches", "italia-en-tren-italia-central-10-noches", "fly-y-drive-norte-de-italia-10-noches"]),
    pregunta: `Quiero ir a Italia en ${m.nombre}. ¿Qué ciudades me recomiendas para 10 días?`,
    fuentes: FUENTES,
    faqs: [
      { q: `¿Es buena época para viajar a Italia en ${m.nombre}?`, a: `${TEMPORADA[m.temporada]} En Roma la máxima promedio es de ${grados(m.roma[0])} y la mínima de ${grados(m.roma[1])}.` },
      { q: `¿Cuánto cuesta el pasaje a Italia en ${m.nombre}?`, a: `Desde ${formatoUSD(precio)} ida y vuelta Lima–Roma por persona. El precio cambia según el día y los asientos que queden.` },
      { q: "¿Qué ropa llevo?", a: m.ropa },
    ],
    enlaces: ENLACES,
  };
}


export function landingsMeses(): LandingItalia[] {
  return MESES.map(landingMes);
}
