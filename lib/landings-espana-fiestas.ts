import { buscarRutaVuelo } from "@/lib/rutas-vuelos";
import { DETALLE_IDA_VUELTA, PRECIO_IDA_VUELTA_MADRID, type LandingEspana, type PuntoLanding } from "@/lib/landings-espana-tipos";

// Fiestas de España con viaje desde Lima. Fechas 2027 consultadas el 29-oct-2026 (calendarios oficiales y prensa);
// lo que el ayuntamiento aún no confirma se dice como «se espera». Sin fútbol.

interface Fiesta {
  slug: string;
  nombre: string;
  ciudad: string;
  ruta: string;
  cuando: string;
  tituloSeo: string;
  descripcion: string;
  bajada: string;
  chips: string[];
  foto: string;
  fotoAlt: string;
  queEs: PuntoLanding[];
  programa: string[][];
  notaPrograma: string;
  consejos: string[];
  faqs: { q: string; a: string }[];
  urgencia: string;
}

const FIESTAS: Fiesta[] = [
  {
    slug: "fallas-de-valencia-2027-desde-lima",
    nombre: "las Fallas",
    ciudad: "Valencia",
    ruta: "lima-valencia",
    cuando: "del 15 al 19 de marzo de 2027",
    tituloSeo: "Fallas de Valencia 2027: viaje desde Lima",
    descripcion: "Fallas de Valencia 2027, del 15 al 19 de marzo: la plantà, las mascletàs y la cremà del 19. Pasajes Lima–Valencia y cuándo comprar para no pagar de más.",
    bajada: "Del 15 al 19 de marzo de 2027 Valencia se llena de monumentos de cartón gigantes, pólvora y música. La noche del 19 se queman todos. Te armamos el viaje desde Lima.",
    chips: ["15 al 19 de marzo", "Cremà el 19", "Valencia"],
    foto: "/images/destinos/valencia-artes.jpg",
    fotoAlt: "Valencia, España",
    queEs: [
      { t: "La plantà", d: "Se levantan en las calles cientos de monumentos de cartón y madera, algunos de varios pisos de alto." },
      { t: "Las mascletàs", d: "Cada día a las 14:00, en la Plaza del Ayuntamiento, un espectáculo de pólvora que se siente en el pecho." },
      { t: "La ofrenda", d: "Miles de falleras con su traje llevan flores a la Virgen de los Desamparados." },
      { t: "La cremà", d: "La noche del 19 de marzo se queman todas las fallas. Es el cierre de la fiesta." },
    ],
    programa: [
      ["15 de marzo", "Plantà: se arman los monumentos en las calles"],
      ["15 al 19 de marzo", "Mascletà a las 14:00 en la Plaza del Ayuntamiento"],
      ["17 y 18 de marzo", "Ofrenda de flores a la Virgen"],
      ["19 de marzo", "Cremà: se queman las fallas en la noche"],
    ],
    notaPrograma: "Fechas de 2027 según el calendario de la Comunitat Valenciana. Los horarios exactos los publica la Junta Central Fallera.",
    consejos: ["Reserva hotel con meses de anticipación", "Lleva tapones para los oídos para las mascletàs", "Muévete a pie o en metro: el centro se cierra al tráfico", "Llega uno o dos días antes del 15"],
    faqs: [
      { q: "¿Cuándo son las Fallas 2027?", a: "Del 15 al 19 de marzo de 2027. La cremà es la noche del viernes 19." },
      { q: "¿Hay vuelo directo de Lima a Valencia?", a: "No. Vuelas a Madrid y conectas a Valencia en avión (unos 55 minutos) o en AVE (menos de 2 horas)." },
    ],
    urgencia: "Las Fallas llenan los vuelos y los hoteles de Valencia con meses de anticipación: los asientos baratos de marzo se acaban primero.",
  },
  {
    slug: "semana-santa-sevilla-2027-desde-lima",
    nombre: "la Semana Santa de Sevilla",
    ciudad: "Sevilla",
    ruta: "lima-sevilla",
    cuando: "del 21 al 28 de marzo de 2027",
    tituloSeo: "Semana Santa en Sevilla 2027 desde Lima",
    descripcion: "Semana Santa de Sevilla 2027, del 21 al 28 de marzo: procesiones de las hermandades, la Madrugá y cómo llegar desde Lima. Pasajes y cuándo comprar.",
    bajada: "Del Domingo de Ramos (21 de marzo) al Domingo de Resurrección (28 de marzo de 2027), las hermandades de Sevilla sacan sus pasos por el centro. Es la Semana Santa más famosa de España.",
    chips: ["21 al 28 de marzo", "La Madrugá", "Sevilla"],
    foto: "/images/destinos/sevilla.jpg",
    fotoAlt: "Sevilla, España",
    queEs: [
      { t: "Las hermandades", d: "Cada día salen varias cofradías con sus pasos, los nazarenos y la música de las bandas." },
      { t: "La Madrugá", d: "La noche del Jueves al Viernes Santo salen las imágenes más queridas de Sevilla. Es la noche más intensa." },
      { t: "La Carrera Oficial", d: "El recorrido común de todas las hermandades por el centro, hasta la Catedral." },
      { t: "Después, la Feria", d: "Dos semanas después llega la Feria de Abril: muchos viajeros juntan las dos." },
    ],
    programa: [
      ["21 de marzo", "Domingo de Ramos: empiezan las procesiones"],
      ["25 al 26 de marzo", "La Madrugá, la noche del Jueves al Viernes Santo"],
      ["28 de marzo", "Domingo de Resurrección"],
    ],
    notaPrograma: "Fechas de 2027 según el calendario litúrgico (Pascua el 28 de marzo). El horario de cada hermandad lo publica el Consejo de Cofradías.",
    consejos: ["Compra con 3 o 4 meses: es temporada alta", "Usa calzado cómodo: se camina mucho", "Consulta los horarios de las hermandades", "Combínala con la Feria de Abril"],
    faqs: [
      { q: "¿Cuándo es la Semana Santa de Sevilla 2027?", a: "Del Domingo de Ramos, 21 de marzo, al Domingo de Resurrección, 28 de marzo de 2027." },
      { q: "¿Cómo llego de Lima a Sevilla?", a: "Vuelas a Madrid y sigues en AVE (unas 2 h 30 min) o en avión con conexión." },
    ],
    urgencia: "Semana Santa es temporada alta en España y en el Perú: los vuelos de marzo de 2027 se llenan antes que los de cualquier otro mes de la primavera.",
  },
  {
    slug: "feria-de-abril-sevilla-2027-desde-lima",
    nombre: "la Feria de Abril",
    ciudad: "Sevilla",
    ruta: "lima-sevilla",
    cuando: "del 12 al 18 de abril de 2027",
    tituloSeo: "Feria de Abril de Sevilla 2027 desde Lima",
    descripcion: "Feria de Abril de Sevilla 2027, del 12 al 18 de abril: casetas, sevillanas, trajes de flamenca y paseo de caballos. Viaje desde Lima y cuándo comprar.",
    bajada: "Se espera del 12 al 18 de abril de 2027: una semana de casetas, sevillanas, trajes de flamenca y paseos a caballo en el recinto de Los Remedios. Te armamos el viaje desde Lima.",
    chips: ["12 al 18 de abril", "Casetas y sevillanas", "Sevilla"],
    foto: "/images/destinos/jerez.jpg",
    fotoAlt: "Andalucía, España",
    queEs: [
      { t: "El alumbrado", d: "La noche del lunes del pescaíto se encienden miles de farolillos en la portada de la Feria." },
      { t: "Las casetas", d: "Cientos de casetas donde se baila sevillanas y se come y se bebe. Muchas son privadas; hay casetas públicas." },
      { t: "Trajes y caballos", d: "Las sevillanas visten traje de flamenca y de día hay paseo de caballos y carruajes." },
      { t: "La Calle del Infierno", d: "La zona de juegos mecánicos de la Feria." },
    ],
    programa: [
      ["12 de abril", "Noche del pescaíto y alumbrado"],
      ["13 al 17 de abril", "Feria: casetas de día y de noche"],
      ["18 de abril", "Último día y fuegos artificiales"],
    ],
    notaPrograma: "Fechas de 2027 que se esperan, dos semanas después de la Pascua; el Ayuntamiento de Sevilla las confirma en su calendario.",
    consejos: ["Busca las casetas públicas si no conoces a nadie", "Reserva hotel con mucha anticipación", "Lleva ropa cómoda para bailar y caminar", "Combina con la Semana Santa"],
    faqs: [
      { q: "¿Cuándo es la Feria de Abril 2027?", a: "Se espera del 12 al 18 de abril de 2027. El Ayuntamiento de Sevilla confirma las fechas." },
      { q: "¿Puedo entrar a las casetas?", a: "Muchas son privadas, pero hay casetas públicas abiertas para todos." },
    ],
    urgencia: "Abril trae la Semana Santa y la Feria en pocas semanas: los vuelos y hoteles de Sevilla se agotan con anticipación.",
  },
  {
    slug: "san-fermin-2027-desde-lima",
    nombre: "San Fermín",
    ciudad: "Pamplona",
    ruta: "lima-pamplona",
    cuando: "del 6 al 14 de julio de 2027",
    tituloSeo: "San Fermín 2027 en Pamplona desde Lima",
    descripcion: "San Fermín 2027 en Pamplona, del 6 al 14 de julio: el chupinazo, los encierros de las 8:00 y el Pobre de mí. Cómo llegar desde Lima y cuándo comprar.",
    bajada: "Del 6 al 14 de julio, Pamplona se viste de blanco y rojo. Empieza con el chupinazo del 6 a las 12:00 y cada mañana hay encierro a las 8:00. Te armamos el viaje desde Lima.",
    chips: ["6 al 14 de julio", "Encierros a las 8:00", "Pamplona"],
    foto: "/images/destinos/pamplona.jpg",
    fotoAlt: "Pamplona, en Navarra, España",
    queEs: [
      { t: "El chupinazo", d: "El 6 de julio a las 12:00, desde el balcón del Ayuntamiento, se lanza el cohete que abre la fiesta." },
      { t: "Los encierros", d: "Del 7 al 14, a las 8:00, los toros corren por las calles del casco antiguo hasta la plaza." },
      { t: "Blanco y rojo", d: "Todo el mundo viste de blanco con pañuelo rojo." },
      { t: "El Pobre de mí", d: "La medianoche del 14 se despide la fiesta cantando con velas." },
    ],
    programa: [
      ["6 de julio, 12:00", "Chupinazo en la Plaza del Ayuntamiento"],
      ["7 al 14 de julio, 8:00", "Encierros"],
      ["14 de julio, 24:00", "Pobre de mí: cierre de la fiesta"],
    ],
    notaPrograma: "San Fermín es del 6 al 14 de julio todos los años; el programa lo publica el Ayuntamiento de Pamplona.",
    consejos: ["Pamplona se llena: reserva con meses", "Para ver el encierro, llega antes de las 7:00", "Lleva ropa blanca y un pañuelo rojo", "También puedes alojarte en otra ciudad y llegar en bus"],
    faqs: [
      { q: "¿Cuándo es San Fermín 2027?", a: "Del 6 al 14 de julio de 2027, como todos los años." },
      { q: "¿Cómo llego de Lima a Pamplona?", a: "Vuelas a Madrid y sigues a Pamplona en tren o en avión. Te cotizamos la conexión." },
    ],
    urgencia: "Julio es temporada alta y coincide con Fiestas Patrias: los pasajes de Lima a España de esas semanas suben primero.",
  },
  {
    slug: "tomatina-2027-desde-lima",
    nombre: "la Tomatina",
    ciudad: "Buñol (Valencia)",
    ruta: "lima-valencia",
    cuando: "el 25 de agosto de 2027",
    tituloSeo: "La Tomatina 2027 en Buñol: viaje desde Lima",
    descripcion: "La Tomatina 2027 es el miércoles 25 de agosto en Buñol (Valencia): una hora de batalla de tomates. Entradas, cómo llegar desde Lima y cuándo comprar.",
    bajada: "El último miércoles de agosto —el 25 de agosto de 2027— Buñol, cerca de Valencia, vive una hora de batalla de tomates. Hay que comprar entrada. Te armamos el viaje desde Lima.",
    chips: ["25 de agosto", "Buñol, Valencia", "Con entrada"],
    foto: "/images/destinos/alicante.jpg",
    fotoAlt: "Comunidad Valenciana, España",
    queEs: [
      { t: "Una hora de tomates", d: "Camiones reparten toneladas de tomates maduros y durante una hora todos se los lanzan." },
      { t: "Con entrada", d: "Desde hace años el aforo es limitado y se compra entrada en la web del Ayuntamiento de Buñol." },
      { t: "Cerca de Valencia", d: "Buñol está a unos 40 km de Valencia: se llega en tren o en bus." },
      { t: "Ropa que puedas botar", d: "Terminas rojo de pies a cabeza: lleva ropa vieja y zapatillas cerradas." },
    ],
    programa: [
      ["25 de agosto de 2027", "La Tomatina en Buñol"],
      ["Mañana", "Ambiente y el palo jabón antes de la batalla"],
      ["Mediodía", "Una hora de batalla de tomates"],
    ],
    notaPrograma: "La Tomatina es el último miércoles de agosto. Horarios y entradas: Ayuntamiento de Buñol.",
    consejos: ["Compra la entrada apenas salga a la venta", "Alójate en Valencia y ve en tren", "Lleva lentes de natación", "No lleves celular ni objetos de valor"],
    faqs: [
      { q: "¿Cuándo es la Tomatina 2027?", a: "El miércoles 25 de agosto de 2027, como cada último miércoles de agosto." },
      { q: "¿Hay que pagar para entrar?", a: "Sí, el aforo es limitado y hay entrada. Se compra en la web del Ayuntamiento de Buñol." },
    ],
    urgencia: "Agosto es temporada alta en Europa: compra el pasaje con 3 o 4 meses para la Tomatina.",
  },
  {
    slug: "navidad-en-madrid-desde-lima",
    nombre: "la Navidad en Madrid",
    ciudad: "Madrid",
    ruta: "lima-madrid",
    cuando: "de fines de noviembre al 6 de enero",
    tituloSeo: "Navidad en Madrid: viaje desde Lima",
    descripcion: "Navidad en Madrid desde Lima: luces de fines de noviembre al 6 de enero, el mercado de la Plaza Mayor, Nochevieja en la Puerta del Sol y la Cabalgata de Reyes.",
    bajada: "De fines de noviembre al 6 de enero, Madrid se llena de luces, mercadillos y fiesta. Con las uvas de la Puerta del Sol y la Cabalgata de Reyes, es la temporada más mágica para visitar.",
    chips: ["Luces hasta el 6 de enero", "Plaza Mayor", "Puerta del Sol"],
    foto: "/images/espana/plaza-mayor.jpg",
    fotoAlt: "Plaza Mayor de Madrid",
    queEs: [
      { t: "Las luces", d: "Las calles del centro se iluminan desde fines de noviembre hasta el 6 de enero." },
      { t: "El mercado de la Plaza Mayor", d: "Puestos de adornos, belenes y dulces de Navidad, de fines de noviembre al 31 de diciembre." },
      { t: "Nochevieja en Sol", d: "El 31 a medianoche se comen las doce uvas con las campanadas del reloj de la Puerta del Sol." },
      { t: "Reyes", d: "La tarde del 5 de enero, la Cabalgata de Reyes recorre el centro." },
    ],
    programa: [
      ["Fines de noviembre", "Encendido de luces y mercado de la Plaza Mayor"],
      ["31 de diciembre", "Nochevieja en la Puerta del Sol"],
      ["5 de enero", "Cabalgata de Reyes"],
      ["6 de enero", "Día de Reyes; se apagan las luces"],
    ],
    notaPrograma: "Fechas de referencia; el programa de cada año lo publica el Ayuntamiento de Madrid a fines de noviembre.",
    consejos: ["Lleva abrigo: hace frío en las noches", "Evita del 15 al 24 de diciembre para volar barato", "Para Nochevieja en Sol, llega temprano", "Combínala con la visita a la familia"],
    faqs: [
      { q: "¿Hasta cuándo están las luces de Navidad en Madrid?", a: "Por lo general, desde fines de noviembre hasta el 6 de enero." },
      { q: "¿Cuándo es más barato volar en diciembre?", a: "A inicios de mes o comprando con 3 o 4 meses. Del 15 al 24 es lo más caro." },
    ],
    urgencia: "Diciembre es de los meses que más rápido se llenan entre Lima y Madrid: compra con 3 o 4 meses.",
  },
  {
    slug: "cabalgata-de-reyes-madrid-2027",
    nombre: "la Cabalgata de Reyes",
    ciudad: "Madrid",
    ruta: "lima-madrid",
    cuando: "el 5 de enero de 2027",
    tituloSeo: "Cabalgata de Reyes Madrid 2027: viaje desde Lima",
    descripcion: "Cabalgata de Reyes de Madrid el 5 de enero de 2027: carrozas por la Castellana hasta Cibeles en la tarde. Viaja con los niños desde Lima y vuelve después de Reyes.",
    bajada: "La tarde del martes 5 de enero de 2027, los Reyes Magos recorren Madrid con sus carrozas hasta Cibeles. Es la noche más esperada por los niños. Te armamos el viaje en familia desde Lima.",
    chips: ["5 de enero", "Con niños", "Castellana y Cibeles"],
    foto: "/images/espana/cibeles.jpg",
    fotoAlt: "Palacio de Cibeles, Madrid",
    queEs: [
      { t: "La Cabalgata", d: "Carrozas, música y caramelos para los niños. En 2026 salió a las 18:00 y llegó a Cibeles hacia las 21:00." },
      { t: "El recorrido", d: "Por lo general baja por el Paseo de la Castellana y Recoletos hasta Cibeles. Se confirma cada año." },
      { t: "El 6 de enero", d: "Día de Reyes: los niños abren sus regalos y se come el roscón." },
      { t: "Después bajan los precios", d: "Pasado Reyes terminan las fiestas y los pasajes empiezan a bajar." },
    ],
    programa: [
      ["5 de enero, tarde", "Cabalgata de Reyes por el centro"],
      ["6 de enero", "Día de Reyes y roscón"],
      ["Desde el 7 de enero", "Rebajas y precios más bajos"],
    ],
    notaPrograma: "El horario y el recorrido de 2027 los publica el Ayuntamiento de Madrid en diciembre.",
    consejos: ["Llega temprano para tener buen sitio", "Abriga bien a los niños", "Vuelve a Lima después del 7 para pagar menos", "Revisa el permiso de viaje si el menor viaja con un solo padre"],
    faqs: [
      { q: "¿Cuándo es la Cabalgata de Reyes 2027 en Madrid?", a: "La tarde del martes 5 de enero de 2027." },
      { q: "¿Conviene volver a Lima después de Reyes?", a: "Sí: después del 7 de enero los pasajes suelen bajar." },
    ],
    urgencia: "Fin de año y Reyes son temporada alta: los vuelos de diciembre y la primera semana de enero se llenan primero.",
  },
];

function landing(f: Fiesta): LandingEspana {
  const precio = buscarRutaVuelo(f.ruta)?.precioDesdeUSD ?? PRECIO_IDA_VUELTA_MADRID;
  const destino = f.ciudad.startsWith("Buñol") ? "Valencia" : f.ciudad;
  const titulo = f.nombre[0].toUpperCase() + f.nombre.slice(1);
  return {
    slug: f.slug,
    tema: "fiesta",
    tituloSeo: f.tituloSeo,
    descripcion: f.descripcion,
    migas: titulo,
    sello: `${f.ciudad} · ${f.cuando}`,
    h1: `${titulo} desde Lima`,
    bajada: f.bajada,
    chips: f.chips,
    foto: f.foto,
    fotoAlt: f.fotoAlt,
    etiquetaPrecio: `Lima–${destino}, ida y vuelta desde`,
    precio,
    detallePrecio: DETALLE_IDA_VUELTA,
    boton: "Cotizar mi viaje",
    mensaje: `¡Hola Cityland Travel! Quiero viajar a ${f.nombre} (${f.cuando}). ¿Me cotizan el pasaje?`,
    pregunta: `Quiero ir a ${f.nombre}: ¿con cuánta anticipación compro el pasaje?`,
    ctaMedio: {
      titulo: "Arma tu viaje con la fecha de la fiesta",
      texto: `Te cotizamos el pasaje para llegar uno o dos días antes y la conexión a ${destino} si hace falta.`,
      boton: "Cotizar mis fechas",
      mensaje: `¡Hola Cityland Travel! Quiero llegar a ${f.ciudad} para ${f.nombre}. ¿Me cotizan con esas fechas?`,
    },
    urgencia: f.urgencia,
    puntosTitulo: `Qué es ${f.nombre}`,
    puntos: f.queEs,
    listaTitulo: "Consejos",
    lista: f.consejos,
    tabla: { titulo: "El programa", columnas: ["Cuándo", "Qué pasa"], filas: f.programa, nota: f.notaPrograma },
    faqs: [...f.faqs, { q: "¿Qué documentos necesito?", a: "Pasaporte vigente, sin visa, para turismo de hasta 90 días, con tu pasaje de regreso, el hotel o la carta de invitación y dinero para tu estadía." }],
    enlaces: [
      { href: "/pasajes-a-espana", texto: "Pasajes a España" },
      { href: "/espana/cuanto-cuesta-viajar-a-espana-desde-peru", texto: "Cuánto cuesta el viaje" },
      { href: `/vuelos/${f.ruta}`, texto: `Vuelos Lima–${destino}` },
    ],
  };
}

export const LANDINGS_FIESTAS: LandingEspana[] = FIESTAS.map(landing);
