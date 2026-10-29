import { FUENTE_BOLSA, SOLES_POR_EURO, bolsaItalia, euros, filaBolsa, soles } from "@/lib/italia/bolsa";
import type { LandingItalia } from "@/lib/italia/tipos";

// Guías de Italia para peruanos, solo con fuentes oficiales o jurídicas y la fecha de la consulta.

const CONSULTA = "28-oct-2026";
const ENLACES = [
  { texto: "Requisitos para viajar a Italia", href: "/viajes/requisitos-viajar-a-italia-desde-peru" },
  { texto: "Dichiarazione di ospitalità", href: "/blog/dichiarazione-di-ospitalita-italia-48-horas-questura" },
  { texto: "Permiso ETIAS", href: "/blog/requisitos-y-permiso-etias-europa" },
  { texto: "Pasajes de Italia a Perú", href: "/italia/pasajes-de-italia-a-peru" },
  { texto: "Paquetes a Italia", href: "/paquetes-a-italia" },
];
const LEY_68 = { texto: "Ley 68/2007 (Normattiva)", url: "https://www.normattiva.it/eli/id/2007/06/01/007G0081/CONSOLIDATED/20190810" };
const CODIGO_FRONTERAS = { texto: "Código de Fronteras Schengen, Reglamento (UE) 2016/399, art. 6", url: "https://www.legislation.gov.uk/eur/2016/399/title/II/chapter/I/data.htm" };
const SCHENGEN_TEXTO =
  "Los peruanos entran a Italia sin visa para turismo de hasta 90 días dentro de cualquier período de 180 días, contando todo el espacio Schengen.";

type Base = Omit<LandingItalia, "grupo" | "etiquetaPrecio" | "boton" | "enlaces" | "sello">;
const guia = (g: Base): LandingItalia => ({
  ...g,
  grupo: "guia",
  sello: `Guía con fuente oficial · ${CONSULTA}`,
  etiquetaPrecio: "",
  boton: "Preguntar a una asesora",
  enlaces: ENLACES,
});

function bolsa15y30(): string {
  const a = bolsaItalia(15) ?? 0;
  const b = bolsaItalia(30) ?? 0;
  return `15 días: ${euros(a)}; 30 días: ${euros(b)}`;
}

const FAQ_BOLSA_FORMA = {
  q: "¿En qué forma tengo que llevar la bolsa de viaje?",
  a: "Lo importante es poder demostrarlo si te lo piden. Lleva una parte en efectivo y tu tarjeta con el estado de cuenta impreso y reciente.",
};

export function landingsGuias(): LandingItalia[] {
  return [
    guia({
      slug: "bolsa-de-viaje-italia",
      tituloSeo: "Bolsa de viaje para Italia 2026: tabla oficial",
      descripcion: `Bolsa de viaje para Italia desde Perú: 269,60 € hasta 5 días, 44,93 € por día de 6 a 10 días y más. Tabla oficial, ejemplos en soles y qué pasa si viajan en grupo.`,
      h1: "Bolsa de viaje para Italia: cuánto dinero te piden",
      bajada: "Italia publica una tabla con el dinero mínimo que debe tener cada turista según los días de viaje. Aquí está completa, con ejemplos en euros y en soles.",
      migas: "Bolsa de viaje",
      foto: "/images/destinos/roma.jpg",
      fotoAlt: "Coliseo de Roma",
      mensaje: "¡Hola Cityland Travel! Quiero saber cuánto de bolsa de viaje necesito para Italia.",
      datos: [
        { k: "Hasta 5 días", v: "269,60 €" },
        { k: "6 a 10 días", v: "44,93 € por día" },
        { k: "Tipo de cambio", v: `S/ ${SOLES_POR_EURO} por euro (BCRP)` },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "tabla",
          titulo: "La tabla oficial, por persona",
          tabla: {
            cab: ["Días de viaje", "Si viajas solo", "Si viajan 2 o más (cada uno)"],
            filas: [
              ["1 a 5 días", "269,60 € en total", "212,81 € en total"],
              ["6 a 10 días", "44,93 € por día", "26,33 € por día"],
              ["11 a 20 días", "51,64 € + 36,67 € por día", "25,82 € + 22,21 € por día"],
              ["Más de 20 días", "206,58 € + 27,89 € por día", "118,79 € + monto diario sin dato oficial publicado"],
            ],
          },
        },
        {
          id: "ejemplos",
          titulo: "Ejemplos si viajas solo",
          tabla: { cab: ["Viaje de", "Total en euros", "En soles"], filas: [5, 7, 10, 15, 20, 30].map((d) => filaBolsa(d)) },
          texto: [`Soles calculados con la venta del euro del BCRP del 27-oct-2026 (S/ ${SOLES_POR_EURO}). Son nuestras cuentas a partir de la tabla oficial.`],
        },
        {
          id: "aviso",
          titulo: "Además del dinero",
          estilo: "aviso",
          texto: [`${SCHENGEN_TEXTO} En Migraciones te pueden pedir el pasaje de regreso, la reserva de hotel o la dichiarazione di ospitalità de quien te recibe, además de la bolsa de viaje.`],
        },
      ],
      fuentes: [FUENTE_BOLSA, CODIGO_FRONTERAS],
      pregunta: "Viajo 12 días a Italia. ¿Cuánto dinero tengo que llevar?",
      faqs: [
        { q: "¿Cuánto es la bolsa de viaje para Italia desde Perú?", a: `Depende de los días. Hasta 5 días son 269,60 € por persona; para 15 días, 601,69 €; para 30 días, 1.043,28 € (${bolsa15y30()}).` },
        { q: "¿La bolsa de viaje se paga?", a: "No. No es un pago: es el dinero que demuestras tener para tu estadía. Lo gastas tú durante el viaje." },
        FAQ_BOLSA_FORMA,
      ],
    }),
    guia({
      slug: "bolsa-de-viaje-italia-15-dias",
      tituloSeo: "Bolsa de viaje Italia 15 días: 601,69 €",
      descripcion: `Para 15 días en Italia la tabla oficial pide 601,69 € por persona si viajas solo (aprox. ${soles(601.69)}) y 358,97 € si viajan 2 o más. Cálculo paso a paso.`,
      h1: "Bolsa de viaje para 15 días en Italia",
      bajada: "Quince días es el viaje más común. Así se calcula el monto con la tabla oficial, solo o en grupo.",
      migas: "Bolsa 15 días",
      foto: "/images/destinos/florencia.jpg",
      fotoAlt: "Florencia",
      mensaje: "¡Hola Cityland Travel! Viajo 15 días a Italia y quiero armar mi viaje.",
      datos: [
        { k: "Solo", v: "601,69 €" },
        { k: "2 o más, cada uno", v: euros(bolsaItalia(15, true) ?? 0) },
        { k: "En soles (solo)", v: `aprox. ${soles(601.69)}` },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "calculo",
          titulo: "El cálculo",
          lista: [
            "Si viajas solo: 51,64 € fijos + 36,67 € × 15 días = 601,69 €.",
            `Si viajan 2 o más: 25,82 € fijos + 22,21 € × 15 días = ${euros(bolsaItalia(15, true) ?? 0)} por persona.`,
            `Una pareja: ${euros((bolsaItalia(15, true) ?? 0) * 2)} entre los dos.`,
          ],
        },
        { id: "dias", titulo: "Si tu viaje es de 11 a 20 días", tabla: { cab: ["Viaje de", "Solo", "En soles"], filas: [11, 12, 14, 16, 18, 20].map((d) => filaBolsa(d)) } },
      ],
      fuentes: [FUENTE_BOLSA],
      pregunta: "Viajamos 2 personas 15 días a Italia. ¿Cuánto de bolsa llevamos?",
      faqs: [
        { q: "¿Cuánto dinero llevar a Italia por 15 días?", a: `La tabla oficial pide 601,69 € si viajas solo y ${euros(bolsaItalia(15, true) ?? 0)} por persona si viajan 2 o más. Es el mínimo: tus gastos reales pueden ser mayores.` },
        FAQ_BOLSA_FORMA,
      ],
    }),
    guia({
      slug: "bolsa-de-viaje-italia-30-dias",
      tituloSeo: "Bolsa de viaje Italia 30 días: 1.043,28 €",
      descripcion: `Para 30 días en Italia la tabla oficial pide 1.043,28 € si viajas solo (aprox. ${soles(1043.28)}). Cómo se calcula para viajes de más de 20 días.`,
      h1: "Bolsa de viaje para 30 días en Italia",
      bajada: "Si vas a visitar a tu familia un mes, la tabla cambia: hay un monto fijo más uno por cada día.",
      migas: "Bolsa 30 días",
      foto: "/images/destinos/milan.webp",
      fotoAlt: "Duomo de Milán",
      mensaje: "¡Hola Cityland Travel! Viajo un mes a Italia a visitar a mi familia.",
      datos: [
        { k: "30 días, solo", v: "1.043,28 €" },
        { k: "En soles", v: `aprox. ${soles(1043.28)}` },
        { k: "Fórmula", v: "206,58 € + 27,89 €/día" },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        { id: "tabla", titulo: "Viajes de más de 20 días (si viajas solo)", tabla: { cab: ["Viaje de", "Total", "En soles"], filas: [21, 25, 30, 45, 60, 90].map((d) => filaBolsa(d)) } },
        {
          id: "familia",
          titulo: "Si te alojas con tu familia",
          texto: [
            "Quien te recibe en Italia debe comunicar tu hospedaje a la Questura o al Comune dentro de 48 horas (dichiarazione di ospitalità). Esa declaración reemplaza a la reserva de hotel, pero no a la bolsa de viaje.",
          ],
        },
        { id: "grupo", titulo: "Si viajan 2 o más por más de 20 días", estilo: "aviso", texto: ["La tabla oficial publica 118,79 € fijos por persona, pero no el monto por día. Mientras no se publique, lleva como referencia el monto de quien viaja solo."] },
      ],
      fuentes: [FUENTE_BOLSA],
      pregunta: "Voy un mes donde mi hermana en Italia. ¿Qué documentos y cuánto dinero llevo?",
      faqs: [
        { q: "¿Cuánto es la bolsa de viaje para 30 días en Italia?", a: "1.043,28 € si viajas solo: 206,58 € fijos más 27,89 € por cada uno de los 30 días." },
        { q: "¿Cuánto tiempo puedo quedarme como turista?", a: SCHENGEN_TEXTO },
        FAQ_BOLSA_FORMA,
      ],
    }),
    guia({
      slug: "dichiarazione-di-presenza-italia",
      tituloSeo: "Dichiarazione di presenza: qué es y cuándo",
      descripcion: "Dichiarazione di presenza en Italia explicada en español: cuándo basta el control de frontera o el hotel, cuándo vas a la Questura (8 días) y qué pasa si no la haces.",
      h1: "Dichiarazione di presenza: qué es y cuándo se hace",
      bajada: "Todo turista declara su presencia en Italia. Casi siempre ya queda hecha sin que tengas que ir a ningún lado; aquí ves cuándo no.",
      migas: "Dichiarazione di presenza",
      foto: "/images/destinos/bolonia.jpg",
      fotoAlt: "Bolonia",
      mensaje: "¡Hola Cityland Travel! Tengo una duda sobre la dichiarazione di presenza en Italia.",
      datos: [
        { k: "Ley", v: "68/2007" },
        { k: "Plazo en la Questura", v: "8 días" },
        { k: "En hotel", v: "La hace el hotel" },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "casos",
          titulo: "Tres casos",
          lista: [
            "Llegas a Italia en un vuelo desde fuera de Schengen: la declaración queda hecha en el control de frontera.",
            "Entras primero por otro país Schengen (por ejemplo, Madrid) y luego pasas a Italia: la haces en la Questura de la provincia donde estés, dentro de 8 días desde la entrada.",
            "Te alojas en un hotel u hospedaje registrado: la declaración que firmas al llegar vale como dichiarazione di presenza.",
          ],
          estilo: "tarjetas",
        },
        {
          id: "madrid",
          titulo: "Lo que más le pasa a los peruanos",
          texto: [
            "Casi todos los vuelos de Lima a Italia hacen escala en Madrid, París o Ámsterdam, y el control de pasaportes se hace en esa primera escala. Si después te quedas en casa de un familiar y no en un hotel, pregunta en la Questura de tu provincia si debes presentar la declaración dentro de los 8 días.",
          ],
        },
        { id: "sancion", titulo: "Si no la haces", estilo: "aviso", texto: ["La ley prevé la expulsión, salvo causa de fuerza mayor. No fija una multa en euros: desconfía de las cifras que circulan."] },
      ],
      fuentes: [LEY_68, { texto: "Decreto del Ministro dell'Interno, 26-jul-2007 (Polizia di Stato)", url: "https://www.poliziadistato.it/statics/30/decreto_ministro_260707_en.pdf" }],
      pregunta: "Llego a Italia por Madrid y me quedo en casa de mi prima. ¿Tengo que ir a la Questura?",
      faqs: [
        { q: "¿Qué es la dichiarazione di presenza?", a: "Es la declaración de que estás en Italia como visitante por menos de 90 días. La pide la Ley 68/2007." },
        { q: "¿Cuál es la diferencia con la dichiarazione di ospitalità?", a: "La de presenza la hace el viajero. La de ospitalità la hace quien te hospeda y la comunica dentro de 48 horas." },
        { q: "¿Cuántos días tengo para hacerla?", a: "8 días desde la entrada, cuando entraste a Schengen por otro país y no te alojas en un hotel." },
      ],
    }),
    guia({
      slug: "carta-de-invitacion-italia",
      tituloSeo: "Carta de invitación a Italia para peruanos",
      descripcion: "¿Te piden carta de invitación para entrar a Italia? Para peruanos sin visa, no es obligatoria: basta el hotel o la dichiarazione di ospitalità. Quién la firma y en qué plazo.",
      h1: "Carta de invitación para viajar a Italia",
      bajada: "Si te recibe un familiar en Italia, lo que cuenta es la dichiarazione di ospitalità que firma él. Te explicamos qué es cada documento.",
      migas: "Carta de invitación",
      foto: "/images/destinos/genova.jpg",
      fotoAlt: "Génova",
      mensaje: "¡Hola Cityland Travel! Mi familia me invita a Italia. ¿Qué documentos necesito?",
      datos: [
        { k: "¿Obligatoria?", v: "No, sin visa" },
        { k: "La firma", v: "Quien te recibe" },
        { k: "Plazo de aviso", v: "48 horas" },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "que-es",
          titulo: "Carta de invitación, ospitalità y alojamiento",
          lista: [
            "Para entrar sin visa, en Migraciones te pueden pedir prueba de alojamiento: reserva de hotel o la dichiarazione di ospitalità de quien te recibe.",
            "La dichiarazione di ospitalità la firma tu familiar o amigo (italiano o extranjero con residencia) y la comunica a la Questura, Commissariato o Comune dentro de 48 horas desde tu llegada.",
            "Una carta simple de invitación ayuda a explicar el viaje, pero no reemplaza esa comunicación ni la bolsa de viaje.",
          ],
        },
        {
          id: "que-lleva",
          titulo: "Lo que conviene llevar impreso",
          lista: [
            "Copia del documento de identidad o del permesso di soggiorno de quien te recibe.",
            "Su dirección completa y teléfono.",
            "La copia de la dichiarazione di ospitalità, si ya la presentó.",
            "Tu pasaje de regreso y la bolsa de viaje según los días.",
          ],
          estilo: "tarjetas",
        },
      ],
      fuentes: [
        { texto: "Prefettura: modelo de dichiarazione di ospitalità", url: "https://prefettura.interno.gov.it/sites/default/files/35/2024-03/dichiarazione_di_ospitalita.pdf" },
        { texto: "D.Lgs. 286/1998, art. 7 (comentado)", url: "https://brocardi.it/testo-unico-immigrazione/titolo-ii/capo-i/art7.html" },
        CODIGO_FRONTERAS,
      ],
      pregunta: "Mi hermano vive en Milán y me invita. ¿Qué tiene que hacer él y qué llevo yo?",
      faqs: [
        { q: "¿Es obligatoria la carta de invitación para Italia?", a: "No para los peruanos que viajan sin visa. Te pueden pedir prueba de alojamiento: hotel o la dichiarazione di ospitalità de tu anfitrión." },
        { q: "¿La carta de invitación reemplaza la bolsa de viaje?", a: "No. Puede reemplazar a la reserva de hotel, pero igual tienes que demostrar el dinero de la tabla oficial." },
        { q: "¿Quién puede invitarme?", a: "Un ciudadano italiano o un extranjero que vive legalmente en Italia y te hospeda en su casa." },
      ],
    }),
    guia({
      slug: "seguro-de-viaje-italia-es-obligatorio",
      tituloSeo: "¿Es obligatorio el seguro de viaje para Italia?",
      descripcion: "Seguro de viaje para Italia: los 30.000 € son requisito del visado, que los peruanos no necesitan. Por qué igual conviene llevarlo y qué debe cubrir.",
      h1: "¿El seguro de viaje es obligatorio para Italia?",
      bajada: "La respuesta corta: para los peruanos sin visa, la norma no lo pone como condición de entrada. Pero atenderte en un hospital de Italia sin seguro puede costarte mucho más que el seguro.",
      migas: "Seguro de viaje",
      foto: "/images/destinos/venecia.jpg",
      fotoAlt: "Venecia",
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para Italia.",
      datos: [
        { k: "Para el visado", v: "30.000 € mínimo" },
        { k: "Peruanos sin visa", v: "No es condición legal" },
        { k: "Recomendación", v: "Llévalo" },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "norma",
          titulo: "Qué dice la norma",
          texto: [
            "El Código de Visados (Reglamento 810/2009, art. 15) exige un seguro médico de 30.000 € a quien pide visa Schengen. Los peruanos no piden visa desde 2016, y las condiciones de entrada del Código de Fronteras (art. 6) no incluyen el seguro.",
            "Aun así, aerolíneas y agentes de frontera pueden pedirlo, y muchos viajeros lo presentan junto con el pasaje y el hotel.",
          ],
        },
        {
          id: "que-cubra",
          titulo: "Qué debe cubrir tu seguro",
          lista: ["Atención médica y hospitalización en todo el espacio Schengen.", "Repatriación.", "Toda la duración del viaje, incluidos los días de vuelo.", "Equipaje perdido y cancelación, si quieres más tranquilidad."],
        },
      ],
      fuentes: [
        { texto: "Código de Visados, Reglamento (CE) 810/2009, art. 15", url: "https://www.legislation.gov.uk/eur/2009/810/article/15/data.html" },
        CODIGO_FRONTERAS,
      ],
      pregunta: "Viajo a Italia 20 días. ¿Cuánto cuesta un seguro con cobertura de 30.000 €?",
      faqs: [
        { q: "¿Me pueden negar la entrada por no tener seguro?", a: "La norma no lo pone como requisito para quien no necesita visa, pero el agente de frontera evalúa todo tu viaje. Con seguro evitas cualquier discusión." },
        { q: "¿Sirve el seguro de mi tarjeta de crédito?", a: "A veces sí. Revisa que cubra atención médica en Europa, el monto y los días del viaje, y lleva el certificado impreso." },
      ],
    }),
    guia({
      slug: "ees-registro-biometrico-europa-peruanos",
      tituloSeo: "EES en Europa: el registro de huellas en frontera",
      descripcion: "EES, el Sistema de Entradas y Salidas de Europa: desde el 10-abr-2026 reemplaza el sello del pasaporte. Qué te registran al llegar a Italia o a tu escala y cómo cuenta tus 90 días.",
      h1: "EES: el nuevo registro de entrada a Europa",
      bajada: "Ya no te sellan el pasaporte: en tu primera entrada a Schengen te toman las huellas y una foto, y el sistema cuenta tus días.",
      migas: "EES Europa",
      foto: "/images/destinos/verona.jpg",
      fotoAlt: "Verona",
      mensaje: "¡Hola Cityland Travel! Tengo una duda sobre el registro EES para viajar a Europa.",
      datos: [
        { k: "Empezó", v: "12-oct-2025" },
        { k: "Completo desde", v: "10-abr-2026" },
        { k: "Costo", v: "Gratis" },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "que-registra",
          titulo: "Qué te registran",
          lista: ["Tus huellas dactilares y una foto del rostro.", "Tu nombre y los datos del pasaporte.", "La fecha y el lugar de cada entrada y salida."],
        },
        {
          id: "donde",
          titulo: "Dónde se hace si vuelas a Italia",
          texto: ["En el primer aeropuerto Schengen donde llegas: si tu escala es en Madrid, París o Ámsterdam, el registro se hace ahí, no en Italia."],
        },
        { id: "etias", titulo: "EES no es ETIAS", estilo: "aviso", texto: ["El EES es el registro en la frontera y no se tramita antes. El ETIAS es un permiso por internet que costará 20 €; a la fecha de esta consulta todavía no funciona y la UE anunciará su inicio con meses de anticipación."] },
      ],
      fuentes: [
        { texto: "Comisión Europea: Entry/Exit System", url: "https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en" },
        { texto: "Comisión Europea: el ETIAS costará 20 €", url: "https://home-affairs.ec.europa.eu/news/european-travel-authorisation-etias-will-cost-eur-20-2025-07-17_en" },
      ],
      pregunta: "Viajo a Italia con escala en Madrid. ¿Dónde me toman las huellas?",
      faqs: [
        { q: "¿Tengo que hacer algún trámite antes del EES?", a: "No. Se hace en la frontera, en tu primera entrada al espacio Schengen." },
        { q: "¿Cuánto cuesta el EES?", a: "Nada. Es un registro gratuito en el control de frontera." },
        { q: "¿El EES cambia los 90 días?", a: "No cambia la regla de 90 días en 180, pero los cuenta de forma automática con tus entradas y salidas." },
      ],
    }),
  ];
}
