import type { LandingCusco } from "@/lib/landings-cusco-tipos";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

export type { LandingCusco } from "@/lib/landings-cusco-tipos";

// Páginas de apoyo de Cusco (/cusco/<slug>): responden dudas reales de viaje (días necesarios, altura,
// época, entradas a Machu Picchu, tren o bus) para que /cusco no compita solo contra toda la competencia
// de "paquete cusco". Nada de cifras de terceros sin verificar: solo datos propios (PAQUETES_CUSCO) o
// geografía/temporada de conocimiento público. 3-nov-2026.

const [, FOTO_DIAS, FOTO_ALTURA, FOTO_EPOCA, FOTO_BANNER] = obtenerGaleriaPorTexto("cusco machu picchu");

const comun = {
  boton: "Cotizar mi viaje a Cusco",
  enlaces: [
    { href: "/cusco", texto: "Ver los 4 paquetes a Cusco" },
    { href: "/cusco/mejor-epoca-para-viajar-a-machu-picchu", texto: "Mejor época para ir" },
    { href: "/cusco/mal-de-altura-soroche-en-cusco-que-llevar", texto: "Mal de altura: qué llevar" },
  ],
};

const DIAS_NECESARIOS: LandingCusco = {
  ...comun,
  slug: "cuantos-dias-necesitas-en-cusco-para-machu-picchu",
  tituloSeo: "¿Cuántos días necesitas en Cusco para ver Machu Picchu?",
  descripcion:
    "Cuántos días conviene estar en Cusco para ver bien Machu Picchu: la diferencia entre un viaje de 3, 4, 5 y 6 días, qué se visita en cada uno y cómo aclimatarte a la altura sin apuro.",
  migas: "Cuántos días necesitas",
  h1: "¿Cuántos días necesitas en Cusco para ver Machu Picchu?",
  bajada:
    "Depende de qué más quieras ver, además de Machu Picchu: el Valle Sagrado, la Montaña de 7 Colores o la Laguna Humantay. Te mostramos qué entra en cada duración para que elijas con calma.",
  chips: ["Desde 3 días", "Hasta 6 días completos", "Con tiempo para la altura"],
  foto: FOTO_DIAS,
  fotoAlt: "Ciudadela de Machu Picchu entre montañas",
  mensaje: "¡Hola Cityland Travel! Quiero saber cuántos días me conviene estar en Cusco. ¿Me ayudan a elegir?",
  puntosTitulo: "Qué entra en cada duración",
  puntos: [
    { t: "3 días / 2 noches", d: "Lo justo para Machu Picchu y la ciudad de Cusco. Ideal si ya conoces el Valle Sagrado o tienes poco tiempo libre." },
    { t: "4 días / 3 noches", d: "El más pedido: suma el city tour de las 4 ruinas y el Valle Sagrado completo, además de Machu Picchu con el tren." },
    { t: "5 días / 4 noches", d: "Todo lo del anterior más un día completo para la Montaña de 7 Colores (Vinicunca), que es una excursión larga por su altura." },
    { t: "6 días / 5 noches", d: "El más completo: agrega la Laguna Humantay y Maras-Moray, para quienes quieren ver Cusco sin apuro." },
  ],
  listaTitulo: "Para decidir tu duración",
  lista: [
    "Si nunca estuviste sobre los 3,000 metros, suma al menos medio día libre para aclimatarte antes del Valle Sagrado o Machu Picchu",
    "La Montaña de 7 Colores y la Laguna Humantay son excursiones de día completo: no se pueden combinar el mismo día",
    "Entre más corto el viaje, menos margen tienes si el clima atrasa algún traslado",
    "Los 4 programas incluyen vuelo ida y vuelta desde Lima, hotel y las entradas oficiales según los días elegidos",
  ],
  faqs: [
    { q: "¿Se puede ver Machu Picchu en un viaje de 3 días?", a: "Sí. Es ajustado pero se hace: llegas, un día completo para Machu Picchu y el city tour, y el tercer día regresas a Lima." },
    { q: "¿Cuál es el programa que más elige la gente?", a: "El de 4 días, 3 noches: alcanza para Machu Picchu, el Valle Sagrado y la ciudad del Cusco, sin apuro." },
    { q: "¿Conviene llegar un día antes a Cusco por la altura?", a: "Si es tu primera vez a más de 3,000 metros, ayuda bastante. Los programas de 5 y 6 días ya dan ese margen de forma natural." },
  ],
};

const MAL_DE_ALTURA: LandingCusco = {
  ...comun,
  slug: "mal-de-altura-soroche-en-cusco-que-llevar",
  tituloSeo: "Mal de altura en Cusco: qué llevar y cómo prevenirlo",
  descripcion:
    "Cusco está a 3,399 metros sobre el nivel del mar: qué es el soroche o mal de altura, cómo prevenirlo los primeros días y qué llevar en tu maleta para sentirte bien desde que llegas.",
  migas: "Mal de altura",
  h1: "Mal de altura en Cusco: qué llevar y cómo prevenirlo",
  bajada:
    "La ciudad del Cusco está a 3,399 metros, más del doble que Lima. Es normal sentir el cambio los primeros días. Te contamos qué llevar y cómo tomarlo con calma para disfrutar tu viaje.",
  chips: ["Cusco: 3,399 m", "Primeras horas con calma", "Mate de coca y abrigo"],
  foto: FOTO_ALTURA,
  fotoAlt: "Calles del centro histórico del Cusco",
  mensaje: "¡Hola Cityland Travel! Es mi primera vez en Cusco y me preocupa la altura. ¿Qué me recomiendan?",
  puntosTitulo: "Cómo cuidarte los primeros días",
  puntos: [
    { t: "Llega con calma", d: "Las primeras horas, camina despacio y evita el esfuerzo físico fuerte. El cuerpo necesita uno o dos días para acostumbrarse." },
    { t: "Toma líquido, evita el alcohol", d: "Tomar agua seguido ayuda más que cualquier otra cosa. El alcohol y las comidas muy pesadas se sienten más fuerte en altura." },
    { t: "Mate de coca o pastillas", d: "El mate de coca es la costumbre local; también hay pastillas para el soroche en cualquier farmacia de la ciudad." },
    { t: "Ropa por capas", d: "En el día hace sol y de noche baja bastante la temperatura: conviene llevar un abrigo aunque el día esté soleado." },
  ],
  listaTitulo: "Qué llevar en tu maleta",
  lista: [
    "Chompa o casaca abrigadora para las noches",
    "Bloqueador solar: el sol de altura quema más rápido",
    "Lentes de sol y gorra",
    "Pastillas para el mal de altura, si las usas habitualmente (coméntalo con tu médico antes del viaje)",
    "Botella de agua para tomar seguido los primeros días",
  ],
  faqs: [
    { q: "¿A qué altura está la ciudad del Cusco?", a: "A 3,399 metros sobre el nivel del mar, más del doble que Lima." },
    { q: "¿Todos sienten el mal de altura?", a: "No todos, y no siempre igual. Lo más común es cansancio, dolor de cabeza leve o falta de aire los primeros días." },
    { q: "¿Es peligroso para adultos mayores o niños?", a: "La mayoría viaja sin problema, pero si alguien tiene una condición del corazón o los pulmones, conviene consultarlo antes con su médico." },
  ],
};

const MEJOR_EPOCA: LandingCusco = {
  ...comun,
  slug: "mejor-epoca-para-viajar-a-machu-picchu",
  tituloSeo: "¿Cuál es la mejor época para viajar a Machu Picchu?",
  descripcion:
    "La temporada seca (abril a octubre) y la temporada de lluvias (noviembre a marzo) en Cusco: qué cambia en cada una para tu viaje a Machu Picchu y cuándo conviene reservar con más anticipación.",
  migas: "Mejor época para viajar",
  h1: "¿Cuál es la mejor época para viajar a Machu Picchu?",
  bajada:
    "Cusco tiene dos temporadas bien marcadas: la seca, de abril a octubre, y la de lluvias, de noviembre a marzo. Cada una tiene su ventaja; te contamos la diferencia para que elijas según tu viaje.",
  chips: ["Seca: abril a octubre", "Lluvias: noviembre a marzo", "Julio y agosto, temporada alta"],
  foto: FOTO_EPOCA,
  fotoAlt: "Terrazas del Valle Sagrado en Cusco",
  mensaje: "¡Hola Cityland Travel! Quiero saber cuál es la mejor época para viajar a Machu Picchu.",
  puntosTitulo: "Las dos temporadas de Cusco",
  puntos: [
    { t: "Temporada seca (abril a octubre)", d: "Días soleados y cielos más despejados para las fotos. Es también la temporada alta: julio y agosto tienen más turistas y conviene reservar con más tiempo." },
    { t: "Temporada de lluvias (noviembre a marzo)", d: "Llueve casi todas las tardes, pero las mañanas suelen estar despejadas y el paisaje se ve más verde. Hay menos turistas y los hoteles tienen más disponibilidad." },
    { t: "Febrero, el mes más lluvioso", d: "Es cuando más llueve en Cusco; el Camino Inca a pie cierra todo el mes por mantenimiento, pero Machu Picchu en tren sigue abierto." },
    { t: "Mayo y septiembre, buen punto medio", d: "Ya casi sin lluvias o recién terminando, con menos turistas que julio y agosto." },
  ],
  listaTitulo: "Para elegir tu fecha",
  lista: [
    "Si priorizas el clima seco y las fotos, viaja entre mayo y septiembre",
    "Si prefieres menos turistas y mejores precios de hotel, considera noviembre, marzo o la primera quincena de abril",
    "En julio y agosto (temporada alta) separa tu paquete con más anticipación: el tren y las entradas se llenan primero",
    "Lleva ropa de lluvia ligera si viajas entre noviembre y marzo, aunque sea temporada seca en Lima",
  ],
  faqs: [
    { q: "¿Cuándo es temporada seca en Cusco?", a: "De abril a octubre, con julio y agosto como los meses de más turistas." },
    { q: "¿Se puede viajar a Machu Picchu en temporada de lluvias?", a: "Sí. El tren y la ciudadela siguen funcionando todo el año; solo cambia que las tardes suelen tener lluvia." },
    { q: "¿Qué mes tiene menos turistas?", a: "Febrero, por ser el más lluvioso y porque el Camino Inca a pie cierra por mantenimiento. Machu Picchu en tren sigue abierto." },
  ],
};

const ENTRADAS_MACHU_PICCHU: LandingCusco = {
  ...comun,
  slug: "entradas-a-machu-picchu-reservar-con-anticipacion",
  tituloSeo: "Entradas a Machu Picchu: por qué conviene reservar con anticipación",
  descripcion:
    "El ingreso a Machu Picchu lo administra el Ministerio de Cultura del Perú con un cupo limitado de visitantes por día y por horario: por qué conviene reservar tu entrada con anticipación, sobre todo en temporada alta.",
  migas: "Entradas a Machu Picchu",
  h1: "Entradas a Machu Picchu: por qué reservar con anticipación",
  bajada:
    "El Ministerio de Cultura del Perú limita cuántas personas entran a la ciudadela cada día y por horario, para proteger el sitio. En temporada alta las entradas se agotan antes: por eso conviene separar tu viaje con tiempo.",
  chips: ["Cupo limitado por día", "Entra por horario asignado", "Se agota primero en julio y agosto"],
  foto: FOTO_BANNER,
  fotoAlt: "Vista general de la ciudadela de Machu Picchu",
  mensaje: "¡Hola Cityland Travel! Quiero asegurar mi entrada a Machu Picchu. ¿Con cuánta anticipación debo separar?",
  puntosTitulo: "Cómo funciona el ingreso",
  puntos: [
    { t: "Cupo por día", d: "El Ministerio de Cultura fija cuántas personas pueden entrar cada día, para conservar el sitio arqueológico." },
    { t: "Entras por horario", d: "Tu entrada tiene un horario de ingreso asignado; no es libre durante todo el día." },
    { t: "Se agota primero en temporada alta", d: "En julio, agosto y Fiestas Patrias las entradas se acaban con más anticipación que en temporada baja." },
    { t: "Lo reservamos junto con tu paquete", d: "Al separar tu viaje con nosotros, tu entrada, tren y hotel quedan reservados juntos, sin que tengas que ir corriendo por cada cosa por separado." },
  ],
  listaTitulo: "Para no quedarte sin entrada",
  lista: [
    "En temporada alta (julio y agosto), separa tu viaje con 2 a 3 meses de anticipación",
    "En temporada baja, 3 a 4 semanas suele ser suficiente",
    "Si viajas en grupo o familia, mejor reservar todas las entradas juntas desde el principio",
    "Lleva tu pasaporte o DNI: el nombre de tu entrada debe coincidir exactamente con tu documento",
  ],
  faqs: [
    { q: "¿Por qué hay un cupo limitado para entrar a Machu Picchu?", a: "Porque el Ministerio de Cultura del Perú protege el sitio arqueológico limitando cuántas personas entran por día y por horario." },
    { q: "¿Puedo comprar la entrada el mismo día en Machu Picchu?", a: "No es recomendable. En temporada alta se agotan con semanas o meses de anticipación; mejor asegúrala al separar tu paquete." },
    { q: "¿La entrada ya viene incluida en los paquetes de Cityland?", a: "Sí. Los 4 programas a Cusco incluyen tu entrada oficial a Machu Picchu según los días que elijas." },
  ],
};

const TREN_O_BUS: LandingCusco = {
  ...comun,
  slug: "tren-o-bus-para-llegar-a-machu-picchu",
  tituloSeo: "Tren o bus: cómo se llega a Machu Picchu desde Aguas Calientes",
  descripcion:
    "Cómo es el recorrido hasta Machu Picchu: el tren turístico desde Cusco o el Valle Sagrado hasta el pueblo de Aguas Calientes, y el bus que sube desde ahí hasta la entrada de la ciudadela.",
  migas: "Tren o bus",
  h1: "Cómo se llega a Machu Picchu: tren y bus",
  bajada:
    "A Machu Picchu no se llega en carro directo: primero el tren turístico hasta el pueblo de Aguas Calientes, y de ahí un bus que sube por la montaña hasta la entrada de la ciudadela.",
  chips: ["Tren hasta Aguas Calientes", "Bus de subida", "Caminata final corta"],
  foto: FOTO_DIAS,
  fotoAlt: "Tren turístico rumbo a Machu Picchu",
  mensaje: "¡Hola Cityland Travel! Quiero saber cómo es el recorrido en tren y bus hasta Machu Picchu.",
  puntosTitulo: "El recorrido paso a paso",
  puntos: [
    { t: "1. Tren turístico", d: "Sales de la estación de Cusco o del Valle Sagrado (según tu itinerario) en el tren panorámico hasta el pueblo de Aguas Calientes." },
    { t: "2. Pueblo de Aguas Calientes", d: "Es el pueblo al pie de la montaña donde está Machu Picchu. Ahí se cambia del tren al bus." },
    { t: "3. Bus de subida", d: "El bus sube por una carretera de curvas hasta la entrada de la ciudadela, en unos 25 a 30 minutos." },
    { t: "4. Entrada guiada", d: "Con tu entrada y guía, recorres la ciudadela a pie, por senderos ya marcados." },
  ],
  listaTitulo: "Para tu día en Machu Picchu",
  lista: [
    "Lleva ropa cómoda para caminar y calzado con buen agarre",
    "El clima cambia rápido: lleva algo ligero para la lluvia, aunque sea temporada seca",
    "El tren y el bus ya vienen incluidos en los 4 programas de Cityland",
    "La vuelta es el mismo recorrido, al revés: bus hasta Aguas Calientes y tren de regreso",
  ],
  faqs: [
    { q: "¿Se puede llegar a Machu Picchu en carro propio?", a: "No. No hay carretera directa hasta la ciudadela. El recorrido es siempre en tren hasta Aguas Calientes y bus desde ahí." },
    { q: "¿Cuánto dura la subida en bus desde Aguas Calientes?", a: "Unos 25 a 30 minutos, por una carretera de curvas que sube la montaña." },
    { q: "¿El tren y el bus ya están incluidos en el paquete?", a: "Sí, en los 4 programas de Cityland a Cusco el tren turístico y el bus de subida y bajada ya están incluidos." },
  ],
};

export const LANDINGS_CUSCO: readonly LandingCusco[] = [DIAS_NECESARIOS, MAL_DE_ALTURA, MEJOR_EPOCA, ENTRADAS_MACHU_PICCHU, TREN_O_BUS];

export function buscarLandingCusco(slug: string): LandingCusco | undefined {
  return LANDINGS_CUSCO.find((l) => l.slug === slug);
}

export const rutaLandingCusco = (l: LandingCusco) => `/cusco/${l.slug}`;
