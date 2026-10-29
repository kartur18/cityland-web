import { IMG_AVION_ALA, obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { DETALLE_IDA_VUELTA, type AtajoWhatsApp, type LandingEspana } from "@/lib/landings-espana-tipos";
import { PROVINCIAS, type Provincia } from "@/lib/landings-espana-provincias";
import { precioRutaEspana } from "@/lib/precios-rutas-espana";

// Tanda 5: rutas entre ciudades del Perú y de España con búsqueda real en Google Perú (sugerencias gl=pe, 29-oct-2026).
// De 400 combinaciones medidas, solo estas tienen búsqueda; Perú → Madrid ya existe en /espana/pasajes-<ciudad>-madrid.

const usd = (n: number) => `US$ ${n.toLocaleString("en-US")}`;

const minutos = (d: string) => {
  const h = /(\d+)\s*h/.exec(d);
  const m = /(\d+)\s*min/.exec(d);
  return (h ? Number(h[1]) * 60 : 0) + (m ? Number(m[1]) : 0);
};

// Vuelo largo (unas 12 h) + tramo nacional + conexión en Lima de 3 a 6 h.
const tiempoTotal = (p: Provincia) => {
  const base = 12 * 60 + minutos(p.duracion);
  return `Entre ${Math.round((base + 180) / 60)} y ${Math.round((base + 360) / 60)} horas`;
};

const provincia = (slug: string) => {
  const p = PROVINCIAS.find((x) => x.slug === slug);
  if (!p) throw new Error(`Falta la provincia ${slug}`);
  return p;
};

// Aerolíneas del tramo nacional a Lima. Donde no hay certeza de todas, va solo LATAM, que vuela a todas.
const NACIONALES: Record<string, string> = {
  arequipa: "LATAM, Sky y JetSMART",
  cusco: "LATAM, Sky y JetSMART",
  trujillo: "LATAM, Sky y JetSMART",
  chiclayo: "LATAM, Sky y JetSMART",
  piura: "LATAM, Sky y JetSMART",
  iquitos: "LATAM, Sky y JetSMART",
  tarapoto: "LATAM, Sky y JetSMART",
  tacna: "LATAM, Sky y JetSMART",
  juliaca: "LATAM, Sky y JetSMART",
};
const nacionales = (p: Provincia) => NACIONALES[p.slug] ?? "LATAM y otras aerolíneas nacionales";

// Lo que conviene saber al llegar a cada ciudad del Perú (para residentes en España que vuelven de visita).
const LLEGADA_PERU: Record<string, { t: string; d: string; foto: string; alt?: string }> = {
  trujillo: { t: "El aeropuerto queda camino a Huanchaco", d: "Llegas al Carlos Martínez de Pinillos, entre el centro de Trujillo y la playa de Huanchaco.", foto: "/images/destinos/trujillo-peru.jpg" },
  arequipa: { t: "Del aeropuerto al centro, en taxi", d: "El Rodríguez Ballón queda a unos 30 minutos de la Plaza de Armas. Pide un taxi autorizado dentro del aeropuerto.", foto: "arequipa" },
  cusco: { t: "Llegas a 3,400 metros de altura", d: "Cusco está en la sierra: el primer día camina despacio y toma mucha agua. El aeropuerto no opera de noche, así que te buscamos un vuelo de Lima temprano.", foto: "cusco" },
  piura: { t: "Las playas del norte quedan cerca", d: "Desde Piura sales por carretera a las playas del norte. Si vas directo a Máncora, también puedes volar a Talara o Tumbes.", foto: "piura", alt: "Playas de Piura" },
  chiclayo: { t: "El aeropuerto está en la ciudad", d: "El José Quiñones queda a pocos minutos del centro de Chiclayo. Tiene menos vuelos diarios a Lima que Arequipa o Cusco.", foto: "/images/destinos/chiclayo-peru.jpg" },
  iquitos: { t: "A Iquitos solo se llega en avión o por río", d: "No hay carretera desde Lima. Por eso el vuelo nacional va en el mismo boleto que el de España: si se retrasa, la aerolínea responde.", foto: "iquitos", alt: "Amazonía del Perú" },
  tarapoto: { t: "La puerta de la selva alta", d: "El aeropuerto de Tarapoto está dentro de la ciudad. Desde Lima son unos 1 h 15 min de vuelo; por carretera, más de 20 horas.", foto: "tarapoto", alt: "Selva del Perú" },
  tacna: { t: "Al lado de la frontera con Chile", d: "Tacna queda cerca de Arica. Si tu familia vive allá, te armamos el vuelo hasta Tacna en el mismo boleto.", foto: IMG_AVION_ALA, alt: "Vuelo de España al Perú" },
  cajamarca: { t: "Pocos vuelos al día y clima de sierra", d: "Cajamarca tiene pocas salidas diarias a Lima y la lluvia puede mover horarios. Te dejamos margen amplio en la conexión.", foto: "/images/destinos/cajamarca-peru.jpg" },
  talara: { t: "El aeropuerto más cerca de Máncora", d: "Si vas a las playas de Máncora o Los Órganos, Talara es el aeropuerto más cercano.", foto: "talara mancora", alt: "Playas del norte del Perú" },
  "puerto-maldonado": { t: "La entrada a Tambopata", d: "Algunos vuelos a Puerto Maldonado hacen escala en Cusco. Te mostramos los que te dejan llegar el mismo día.", foto: "puerto maldonado tambopata", alt: "Amazonía del Perú" },
  juliaca: { t: "Para llegar a Puno, sales por Juliaca", d: "Puno no tiene aeropuerto propio: llegas a Juliaca y sigues por carretera, a menos de una hora.", foto: "puno titicaca", alt: "Lago Titicaca, en Puno" },
  tumbes: { t: "Cerca de Zorritos y Punta Sal", d: "El aeropuerto de Tumbes es el más cerca de Zorritos y Punta Sal. Tiene pocos vuelos diarios: en diciembre se llenan primero.", foto: "tumbes punta sal", alt: "Playas de Tumbes" },
};

const fotoPeru = (p: Provincia, i: number) => {
  const f = LLEGADA_PERU[p.slug]?.foto ?? p.slug;
  return f.startsWith("/") || f.startsWith("http") ? f : obtenerGaleriaPorTexto(f)[i % 5];
};

// Ciudades de España de origen o destino: cómo es el vuelo a Lima y cómo se llega al aeropuerto.
interface CiudadRuta {
  ciudad: string;
  slug: string;
  codigo: string;
  aeropuerto: string;
  vuelo: string;
  // Con conexión en Madrid: la página muestra el precio desde Madrid y la conexión se cotiza aparte.
  conexion?: string;
  transporte: string;
  foto: string;
}

const MADRID: CiudadRuta = {
  ciudad: "Madrid",
  slug: "madrid",
  codigo: "MAD",
  aeropuerto: "Barajas (MAD)",
  vuelo: "Directo Madrid–Lima con Iberia, LATAM, Air Europa o Plus Ultra",
  transporte: "A Barajas llegas en metro (línea 8), en Cercanías (C1, hasta la T4) o en el bus Exprés Aeropuerto, que funciona las 24 horas.",
  foto: "/images/espana/barajas.jpg",
};
const BARCELONA: CiudadRuta = {
  ciudad: "Barcelona",
  slug: "barcelona",
  codigo: "BCN",
  aeropuerto: "El Prat (BCN)",
  vuelo: "Directo con LEVEL (unas 3 veces por semana) o con conexión en Madrid",
  transporte: "De El Prat al centro: Aerobús hasta plaza Catalunya, tren R2 Nord desde la T2 o metro L9 Sud desde la T1 y la T2.",
  foto: "/images/destinos/barcelona.webp",
};
const OTRAS: Record<string, CiudadRuta> = {
  valencia: { ciudad: "Valencia", slug: "valencia", codigo: "VLC", aeropuerto: "Manises (VLC)", vuelo: "Con conexión en Madrid", conexion: "Unos 55 min de Valencia a Madrid", transporte: "A Manises llegas en metro (líneas 3 y 5) desde el centro de Valencia.", foto: "/images/destinos/valencia-artes.jpg" },
  bilbao: { ciudad: "Bilbao", slug: "bilbao", codigo: "BIO", aeropuerto: "Loiu (BIO)", vuelo: "Con conexión en Madrid", conexion: "Alrededor de 1 h de Bilbao a Madrid", transporte: "Al aeropuerto de Bilbao llegas en el bus Bizkaibus desde el centro.", foto: "/images/destinos/bilbao-guggenheim.jpg" },
  sevilla: { ciudad: "Sevilla", slug: "sevilla", codigo: "SVQ", aeropuerto: "San Pablo (SVQ)", vuelo: "Con conexión en Madrid, en avión o en AVE", conexion: "Alrededor de 1 h de Sevilla a Madrid en avión", transporte: "Al aeropuerto de Sevilla llegas en el bus EA desde el centro.", foto: "/images/destinos/sevilla.jpg" },
  malaga: { ciudad: "Málaga", slug: "malaga", codigo: "AGP", aeropuerto: "Costa del Sol (AGP)", vuelo: "Con conexión en Madrid, en avión o en AVE", conexion: "Alrededor de 1 h 10 min de Málaga a Madrid", transporte: "Al aeropuerto de Málaga llegas en el Cercanías C1 desde el centro.", foto: "/images/destinos/malaga.jpg" },
};

const atajosPeruEspana = (origen: string, destino: string): AtajoWhatsApp[] => [
  { texto: "Diciembre", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a ${destino} en diciembre. ¿Qué precio hay?` },
  { texto: "Febrero (más barato)", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a ${destino} en febrero, que es más barato.` },
  { texto: "Julio o agosto", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a ${destino} en julio o agosto.` },
  { texto: "Aún no sé la fecha", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a ${destino} y aún no tengo fecha. ¿Cuándo sale más barato?` },
];

const atajosEspanaPeru = (origen: string, destino: string): AtajoWhatsApp[] => [
  { texto: "Navidad", mensaje: `¡Hola Cityland Travel! Vivo en España y quiero viajar de ${origen} a ${destino} para Navidad.` },
  { texto: "Fiestas Patrias", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a ${destino} para Fiestas Patrias.` },
  { texto: "Verano de España", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a ${destino} en julio o agosto, en mis vacaciones.` },
  { texto: "Con mis hijos", mensaje: `¡Hola Cityland Travel! Viajo de ${origen} a ${destino} con mis hijos. ¿Me cotizan a todos?` },
  { texto: "Aún no sé la fecha", mensaje: `¡Hola Cityland Travel! Quiero viajar de ${origen} a ${destino} y aún no tengo fecha.` },
];

/* ── Perú → Barcelona (ida y vuelta) ── */
const ORIGENES_BARCELONA = ["trujillo", "cusco", "arequipa", "chiclayo", "piura", "iquitos", "tarapoto", "cajamarca"];

function peruBarcelona(slug: string): LandingEspana {
  const p = provincia(slug);
  const precio = precioRutaEspana(p.recargo);
  const ruta = `${p.ciudad}–Barcelona`;
  return {
    slug: `pasajes-${p.slug}-barcelona`,
    tema: "rutaBarcelona",
    tituloSeo: `Vuelos ${p.ciudad} Barcelona desde ${usd(precio)} ida y vuelta`,
    descripcion: `Pasajes de ${p.ciudad} a Barcelona con conexión en Lima, en un solo boleto y con tu maleta hasta El Prat. Ida y vuelta desde ${usd(precio)}. Directo con LEVEL desde Lima o vía Madrid.`,
    migas: `${p.ciudad} → Barcelona`,
    sello: `${p.codigo} → LIM → BCN`,
    h1: `Vuelos de ${p.ciudad} a Barcelona`,
    bajada: `No hay vuelos de ${p.ciudad} a España: todos salen de Lima. Te armamos ${p.ciudad}–Lima y Lima–Barcelona en un solo boleto, con la maleta despachada hasta El Prat.`,
    chips: ["Un solo boleto", "Maleta hasta Barcelona", `Desde ${usd(precio)}`],
    foto: BARCELONA.foto,
    fotoAlt: "Barcelona, España",
    etiquetaPrecio: `${ruta}, ida y vuelta desde`,
    precio,
    detallePrecio: DETALLE_IDA_VUELTA,
    boton: `Cotizar ${ruta}`,
    mensaje: `¡Hola Cityland Travel! Quiero cotizar un pasaje de ${p.ciudad} a Barcelona, ida y vuelta.`,
    pregunta: `¿Me arman ${p.ciudad}–Lima–Barcelona en un solo boleto con la maleta hasta El Prat?`,
    atajosTitulo: "¿En qué mes viajas?",
    atajos: atajosPeruEspana(p.ciudad, "Barcelona"),
    ctaMedio: {
      titulo: "¿Directo desde Lima o por Madrid?",
      texto: `Te comparamos el directo de LEVEL con las opciones vía Madrid para tu fecha, con la conexión desde ${p.ciudad}.`,
      boton: "Comparar opciones",
      mensaje: `¡Hola Cityland Travel! Viajo de ${p.ciudad} a Barcelona. ¿Me comparan el directo desde Lima y la opción por Madrid?`,
    },
    urgencia: p.urgencia,
    puntosTitulo: "Lo que tiene esta ruta",
    puntos: [
      { t: `Tramo nacional: ${p.duracion}`, d: `${p.ciudad}–Lima con ${nacionales(p)}. Llegas al Jorge Chávez y conectas con el vuelo a España.` },
      { t: "Directo o por Madrid", d: `${BARCELONA.vuelo}. Te mostramos las dos para tu fecha.` },
      { t: `Tiempo total: ${tiempoTotal(p).toLowerCase()}`, d: "Según la hora de tu vuelo nacional y la espera en Lima." },
      { t: "Al llegar a El Prat", d: BARCELONA.transporte },
    ],
    listaTitulo: "Lo que llevas",
    lista: ["Pasaporte vigente", "Pasaje de ida y vuelta", "Reserva de alojamiento o carta de invitación", "Dinero para tus días (bolsa de viaje)"],
    tabla: {
      titulo: "Tu itinerario, tramo por tramo",
      columnas: ["Tramo", "Duración aproximada", "Dónde"],
      filas: [
        [`${p.ciudad} → Lima`, p.duracion, `${p.codigo} → LIM, vuelo nacional`],
        ["Conexión en Lima", "De 3 a 6 horas", "Aeropuerto Jorge Chávez"],
        ["Lima → Barcelona", "Unas 12 horas", "Directo con LEVEL o vía Madrid"],
      ],
      nota: "Las horas exactas dependen de la aerolínea y de tu fecha; te las mandamos con la cotización.",
    },
    faqs: [
      { q: `¿Hay vuelo directo de ${p.ciudad} a Barcelona?`, a: `No. Todos los vuelos a España salen de Lima. Desde ${p.ciudad} vuelas a Lima (${p.duracion}) y ahí tomas el vuelo a Barcelona.` },
      { q: `¿Cuánto cuesta el pasaje de ${p.ciudad} a Barcelona?`, a: `Ida y vuelta desde ${usd(precio)} por persona, con impuestos y el tramo nacional en el mismo boleto. El precio de tu fecha te lo damos por WhatsApp.` },
      { q: "¿Hay vuelo directo de Lima a Barcelona?", a: "Sí. LEVEL vuela directo Lima–Barcelona unas 3 veces por semana. Los demás días se viaja con conexión en Madrid." },
      { q: `¿Cuánto dura el viaje de ${p.ciudad} a Barcelona?`, a: `${tiempoTotal(p)}, contando el vuelo nacional y la espera en Lima.` },
    ],
    enlaces: [
      { href: `/espana/pasajes-${p.slug}-madrid`, texto: `${p.ciudad}–Madrid` },
      { href: `/espana/vuelos-barcelona-${p.slug}`, texto: `Barcelona–${p.ciudad}` },
      { href: "/vuelos/lima-barcelona", texto: "Vuelos Lima–Barcelona" },
      { href: "/espana/visitar-familia-en-barcelona", texto: "Visitar a tu familia en Barcelona" },
    ],
  };
}

/* ── España → Perú (residentes que vuelven de visita) ── */
const DESTINOS_MADRID = ["trujillo", "arequipa", "cusco", "piura", "chiclayo", "iquitos", "tarapoto", "tacna", "cajamarca", "talara", "puerto-maldonado", "juliaca", "tumbes"];
const DESTINOS_BARCELONA = ["trujillo", "cusco", "arequipa", "chiclayo", "piura", "iquitos", "tarapoto", "cajamarca"];
const OTRAS_RUTAS: [string, string][] = [
  ["valencia", "trujillo"],
  ["valencia", "arequipa"],
  ["valencia", "cusco"],
  ["bilbao", "arequipa"],
  ["bilbao", "cusco"],
  ["sevilla", "arequipa"],
  ["malaga", "cusco"],
];

function espanaPeru(e: CiudadRuta, slug: string, i: number): LandingEspana {
  const p = provincia(slug);
  const precio = precioRutaEspana(p.recargo);
  const ruta = `${e.ciudad}–${p.ciudad}`;
  const llegada = LLEGADA_PERU[p.slug];
  const conConexion = Boolean(e.conexion);
  const selva = ["iquitos", "tarapoto", "puerto-maldonado"].includes(p.slug);
  return {
    slug: `vuelos-${e.slug}-${p.slug}`,
    tema: "rutaPeru",
    tituloSeo: conConexion ? `Vuelos ${e.ciudad} ${p.ciudad} (Perú): vía Madrid y Lima` : `Vuelos ${e.ciudad} ${p.ciudad} (Perú) desde ${usd(precio)}`,
    descripcion: `Vuelos de ${e.ciudad} a ${p.ciudad} con conexión en Lima, en un solo boleto y con tu maleta hasta ${p.ciudad}. ${conConexion ? `Desde Madrid, ida y vuelta desde ${usd(precio)}; la conexión desde ${e.ciudad} se cotiza aparte.` : `Ida y vuelta desde ${usd(precio)}.`} Para peruanos en España que vuelven a ver a su familia.`,
    migas: `${e.ciudad} → ${p.ciudad}`,
    sello: `${e.codigo} → LIM → ${p.codigo}`,
    h1: `Vuelos de ${e.ciudad} a ${p.ciudad}, Perú`,
    bajada: `Vives en ${e.ciudad === "Madrid" || e.ciudad === "Barcelona" ? e.ciudad : `${e.ciudad} (España)`} y vas a ver a tu familia en ${p.ciudad}. Te armamos el vuelo a Lima y el de ${p.ciudad} en un solo boleto, con la maleta despachada hasta el final.`,
    chips: ["Un solo boleto", `Maleta hasta ${p.ciudad}`, conConexion ? "Vía Madrid y Lima" : `Desde ${usd(precio)}`],
    foto: fotoPeru(p, i),
    fotoAlt: llegada?.alt ?? `${p.ciudad}, Perú`,
    etiquetaPrecio: conConexion ? `Madrid–${p.ciudad}, ida y vuelta desde` : `${ruta}, ida y vuelta desde`,
    precio,
    detallePrecio: conConexion ? `Ida y vuelta con impuestos desde Madrid. La conexión desde ${e.ciudad} te la cotizamos según tu fecha.` : DETALLE_IDA_VUELTA,
    boton: `Cotizar ${ruta}`,
    mensaje: `¡Hola Cityland Travel! Vivo en ${e.ciudad} y quiero cotizar un pasaje a ${p.ciudad}, ida y vuelta.`,
    pregunta: `Vivo en ${e.ciudad}: ¿me arman el vuelo hasta ${p.ciudad} con la maleta en un solo boleto?`,
    atajosTitulo: "¿Cuándo vuelves al Perú?",
    atajos: atajosEspanaPeru(e.ciudad, p.ciudad),
    ctaMedio: {
      titulo: "¿Viajas con tu familia?",
      texto: `Te cotizamos a todos juntos, de ${e.ciudad} a ${p.ciudad}, con la maleta de cada uno incluida.`,
      boton: "Cotizar en familia",
      mensaje: `¡Hola Cityland Travel! Viajo de ${e.ciudad} a ${p.ciudad} con mi familia. ¿Me cotizan a todos?`,
    },
    urgencia: `En diciembre y en julio viajan muchos residentes al Perú: el vuelo a Lima y el de ${p.ciudad} se llenan antes.`,
    puntosTitulo: "Lo que tiene esta ruta",
    puntos: [
      { t: conConexion ? "Primero, a Madrid" : "El vuelo a Lima", d: conConexion ? `${e.conexion}; ahí tomas el directo a Lima con Iberia, LATAM, Air Europa o Plus Ultra.` : `${e.vuelo}.` },
      { t: `Tramo nacional: ${p.duracion}`, d: `Lima–${p.ciudad} con ${nacionales(p)}, en el mismo boleto.` },
      ...(llegada ? [{ t: llegada.t, d: llegada.d }] : []),
      { t: `Para ir a ${e.aeropuerto}`, d: e.transporte },
    ],
    listaTitulo: "Lo que llevas",
    lista: ["Tu documento peruano o tu pasaporte", "Tu TIE vigente, para volver a España", "Pasaje de ida y vuelta", selva ? `Para ${p.ciudad}: la vacuna de la fiebre amarilla (recomendada por el Minsa)` : "Revisa cuántas maletas incluye tu tarifa"],
    tabla: {
      titulo: "Tu viaje, tramo por tramo",
      columnas: ["Tramo", "Duración aproximada", "Dónde"],
      filas: [
        conConexion ? [`${e.ciudad} → Madrid → Lima`, "Unas 13 a 14 horas", `${e.codigo} → MAD → LIM`] : [`${e.ciudad} → Lima`, "Unas 12 horas", `${e.codigo} → LIM`],
        ["Conexión en Lima", "De 3 a 6 horas", "Aeropuerto Jorge Chávez"],
        [`Lima → ${p.ciudad}`, p.duracion, `LIM → ${p.codigo}, vuelo nacional`],
      ],
      nota: "Las horas exactas dependen de la aerolínea y de tu fecha; te las mandamos con la cotización.",
    },
    faqs: [
      { q: `¿Hay vuelo directo de ${e.ciudad} a ${p.ciudad}?`, a: `No. Los vuelos de España llegan a Lima${conConexion ? " (desde " + e.ciudad + " con conexión en Madrid)" : ""} y de ahí sigues a ${p.ciudad} en un vuelo nacional de ${p.duracion}.` },
      { q: `¿Cuánto cuesta el vuelo de ${e.ciudad} a ${p.ciudad}?`, a: conConexion ? `Desde Madrid, ida y vuelta desde ${usd(precio)} por persona con impuestos. La conexión desde ${e.ciudad} te la cotizamos según tu fecha.` : `Ida y vuelta desde ${usd(precio)} por persona, con impuestos y el vuelo nacional en el mismo boleto.` },
      { q: "¿Puedo comprar el pasaje con ustedes estando en España?", a: "Sí. Coordinamos todo por WhatsApp y te mandamos el boleto con su código de reserva." },
      { q: "¿Qué pasa si se retrasa el vuelo a Lima y pierdo el nacional?", a: `Si los dos van en el mismo boleto, la aerolínea te reacomoda en el siguiente vuelo a ${p.ciudad}. Con boletos separados, corre por tu cuenta.` },
    ],
    enlaces: [
      { href: `/vuelos/${e.slug}-lima`, texto: `Vuelos ${e.ciudad}–Lima` },
      { href: "/espana/requisitos-para-viajar-a-peru-desde-espana", texto: "Requisitos para ir al Perú" },
      { href: "/espana/cuanto-cuesta-viajar-a-peru-desde-espana", texto: "Cuánto cuesta viajar al Perú" },
      ...(e.slug === "barcelona" ? [{ href: `/espana/pasajes-${p.slug}-barcelona`, texto: `${p.ciudad}–Barcelona` }] : [{ href: `/espana/pasajes-${p.slug}-madrid`, texto: `${p.ciudad}–Madrid` }]),
    ],
  };
}

export const LANDINGS_RUTAS_BARCELONA: LandingEspana[] = ORIGENES_BARCELONA.map(peruBarcelona);

export const LANDINGS_RUTAS_PERU: LandingEspana[] = [
  ...DESTINOS_MADRID.map((s, i) => espanaPeru(MADRID, s, i)),
  ...DESTINOS_BARCELONA.map((s, i) => espanaPeru(BARCELONA, s, i + 1)),
  ...OTRAS_RUTAS.map(([e, s], i) => espanaPeru(OTRAS[e], s, i + 2)),
];
