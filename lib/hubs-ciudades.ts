import { circuitosVigentes, type Circuito } from "@/lib/circuitos";
import type { HubCircuitos } from "@/lib/hubs-circuitos";

// «Viajes a <ciudad> desde Lima»: una página por ciudad que de verdad recorren los programas del mayorista (3 o más),
// con esos programas y su precio. Las ciudades que ya tienen página propia (Cartagena, Punta Cana, Panamá, Miami,
// Orlando, Cancún) no se repiten aquí. 27-oct-2026.

export interface Ciudad {
  slug: string;
  nombre: string;
  // Cómo aparece en los programas, sin tildes y en minúsculas.
  alias: string[];
  intro: string;
}

export const CIUDADES: Ciudad[] = [
  // Europa
  { slug: "madrid", nombre: "Madrid", alias: ["madrid"], intro: "Madrid es la puerta de entrada a Europa desde Lima: el Palacio Real, el Museo del Prado, el Retiro y la Gran Vía." },
  { slug: "paris", nombre: "París", alias: ["paris"], intro: "París es la Torre Eiffel, el Louvre, Montmartre y un paseo en barco por el Sena." },
  { slug: "barcelona", nombre: "Barcelona", alias: ["barcelona"], intro: "Barcelona combina la Sagrada Familia y el Park Güell de Gaudí con las playas del Mediterráneo." },
  { slug: "roma", nombre: "Roma", alias: ["roma"], intro: "Roma es el Coliseo, el Vaticano, la Fontana di Trevi y siglos de historia en cada calle." },
  { slug: "florencia", nombre: "Florencia", alias: ["florencia"], intro: "Florencia es la cuna del Renacimiento: el Duomo, el Ponte Vecchio y el David de Miguel Ángel." },
  { slug: "venecia", nombre: "Venecia", alias: ["venecia"], intro: "Venecia es la ciudad de los canales: la Plaza San Marcos, el puente de Rialto y paseos en góndola." },
  { slug: "londres", nombre: "Londres", alias: ["londres"], intro: "Londres es el Big Ben, el Palacio de Buckingham, el Támesis y sus museos gratuitos." },
  { slug: "zurich", nombre: "Zúrich", alias: ["zurich"], intro: "Zúrich y Lucerna son la Suiza de los lagos y los Alpes, parada clásica de los circuitos por Europa." },
  { slug: "niza", nombre: "Niza y la Costa Azul", alias: ["niza", "costa azul"], intro: "Niza y la Costa Azul son las playas y el glamour del sur de Francia, cerca de Mónaco." },
  { slug: "amsterdam", nombre: "Ámsterdam", alias: ["amsterdam"], intro: "Ámsterdam es canales, bicicletas, el Museo Van Gogh y la casa de Ana Frank." },
  { slug: "praga", nombre: "Praga", alias: ["praga"], intro: "Praga es el Puente de Carlos, el reloj astronómico y uno de los centros históricos más bonitos de Europa." },
  { slug: "viena", nombre: "Viena", alias: ["viena"], intro: "Viena es palacios imperiales, música clásica y cafés históricos." },
  { slug: "budapest", nombre: "Budapest", alias: ["budapest"], intro: "Budapest es el Danubio, el Parlamento iluminado de noche y sus baños termales." },
  { slug: "atenas", nombre: "Atenas", alias: ["atenas"], intro: "Atenas es la Acrópolis y el Partenón, punto de partida a las islas griegas." },
  { slug: "santorini", nombre: "Santorini", alias: ["santorini", "mykonos"], intro: "Santorini y Mykonos son las islas griegas de casas blancas, cúpulas azules y atardeceres famosos." },
  { slug: "lucerna", nombre: "Lucerna", alias: ["lucerna"], intro: "Lucerna es el lago, el puente de madera de la Capilla y la vista a los Alpes suizos." },
  { slug: "munich", nombre: "Múnich", alias: ["munich"], intro: "Múnich es la Baviera de las cervecerías, la plaza Marienplatz y la puerta a los castillos alemanes." },
  { slug: "bruselas", nombre: "Bruselas y Brujas", alias: ["bruselas", "brujas"], intro: "Bruselas y Brujas son la Bélgica de la Grand Place, los canales medievales y el chocolate." },
  // Turquía
  { slug: "estambul", nombre: "Estambul", alias: ["estambul"], intro: "Estambul es Santa Sofía, la Mezquita Azul, el Gran Bazar y el estrecho del Bósforo entre Europa y Asia." },
  { slug: "capadocia", nombre: "Capadocia", alias: ["capadocia"], intro: "Capadocia es famosa por sus paseos en globo al amanecer, sus chimeneas de hadas y hoteles en cuevas." },
  { slug: "pamukkale", nombre: "Pamukkale", alias: ["pamukkale"], intro: "Pamukkale son las terrazas blancas de agua termal y las ruinas de Hierápolis." },
  { slug: "efeso", nombre: "Éfeso y Kusadasi", alias: ["kusadasi", "selcuk", "efeso"], intro: "Éfeso es una de las ciudades romanas mejor conservadas del mundo, junto a la costa de Kusadasi." },
  // Medio Oriente y Egipto
  { slug: "petra", nombre: "Petra", alias: ["petra"], intro: "Petra es la ciudad tallada en la roca, una de las siete maravillas del mundo moderno." },
  { slug: "wadi-rum", nombre: "Wadi Rum", alias: ["wadi rum"], intro: "Wadi Rum es el desierto rojo de Jordania, con noches en campamentos beduinos." },
  { slug: "mar-muerto", nombre: "Mar Muerto", alias: ["mar muerto"], intro: "En el Mar Muerto flotas sin esfuerzo en el punto más bajo de la Tierra." },
  { slug: "amman", nombre: "Amán", alias: ["amman", "aman"], intro: "Amán es la capital de Jordania y el punto de partida hacia Petra, Jerash y el Mar Muerto." },
  { slug: "el-cairo", nombre: "El Cairo", alias: ["el cairo", "cairo"], intro: "El Cairo es la puerta a las pirámides de Guiza, la Esfinge y el Museo Egipcio." },
  { slug: "luxor", nombre: "Luxor y Asuán", alias: ["luxor", "aswan", "asuan"], intro: "Luxor y Asuán son los templos del Nilo, el Valle de los Reyes y los cruceros por el río." },
  { slug: "dubai", nombre: "Dubái", alias: ["dubai"], intro: "Dubái es el Burj Khalifa, los centros comerciales gigantes y los safaris en el desierto." },
  { slug: "abu-dabi", nombre: "Abu Dabi", alias: ["abu dhabi", "abu dabi"], intro: "Abu Dabi es la Gran Mezquita Sheikh Zayed y la capital de los Emiratos." },
  // Asia
  { slug: "tokio", nombre: "Tokio", alias: ["tokio"], intro: "Tokio mezcla templos, rascacielos, el cruce de Shibuya y la mejor comida del mundo." },
  { slug: "kioto", nombre: "Kioto", alias: ["kioto"], intro: "Kioto es el Japón tradicional: templos, geishas en Gion y el bosque de bambú." },
  { slug: "osaka", nombre: "Osaka", alias: ["osaka"], intro: "Osaka es la capital de la comida callejera japonesa y la puerta a Nara y sus ciervos." },
  { slug: "pekin", nombre: "Pekín", alias: ["beijing", "pekin"], intro: "Pekín es la Gran Muralla, la Ciudad Prohibida y la plaza de Tiananmén." },
  { slug: "shanghai", nombre: "Shanghái", alias: ["shanghai"], intro: "Shanghái es el malecón del Bund, sus rascacielos y los pueblos de agua cercanos." },
  { slug: "xian", nombre: "Xi'an", alias: ["xi an", "xian"], intro: "Xi'an guarda los Guerreros de Terracota y su muralla antigua." },
  { slug: "guilin", nombre: "Guilin", alias: ["guilin"], intro: "Guilin son los paisajes de montañas y ríos que salen en los billetes chinos." },
  { slug: "bangkok", nombre: "Bangkok", alias: ["bangkok"], intro: "Bangkok es el Gran Palacio, el Buda Reclinado, los mercados flotantes y su vida nocturna." },
  { slug: "phuket", nombre: "Phuket", alias: ["phuket"], intro: "Phuket es la isla de playas de Tailandia, base para visitar Phi Phi y la bahía de Phang Nga." },
  { slug: "chiang-mai", nombre: "Chiang Mai", alias: ["chiang mai", "chiang rai"], intro: "Chiang Mai y Chiang Rai son el norte de Tailandia: templos, montañas y el Triángulo de Oro." },
  { slug: "taj-mahal", nombre: "Agra y el Taj Mahal", alias: ["agra"], intro: "Agra es la ciudad del Taj Mahal, parada obligada del Triángulo de Oro de India." },
  { slug: "jaipur", nombre: "Jaipur", alias: ["jaipur"], intro: "Jaipur es la ciudad rosa de India, con el Palacio de los Vientos y el Fuerte Amber." },
  { slug: "delhi", nombre: "Delhi", alias: ["delhi", "nueva delhi"], intro: "Delhi es la capital de India y el inicio del Triángulo de Oro." },
  { slug: "seul", nombre: "Seúl", alias: ["seul"], intro: "Seúl es palacios, barrios modernos y la cultura coreana que hoy se ve en todo el mundo." },
  { slug: "katmandu", nombre: "Katmandú", alias: ["katmandu"], intro: "Katmandú es la capital de Nepal, con templos budistas e hinduistas al pie del Himalaya." },
  // Marruecos
  { slug: "marrakech", nombre: "Marrakech", alias: ["marrakech"], intro: "Marrakech es la plaza Jemaa el-Fna, los zocos y los jardines Majorelle." },
  { slug: "fez", nombre: "Fez", alias: ["fez"], intro: "Fez tiene la medina medieval más grande del mundo y sus famosas curtidurías." },
  { slug: "chefchaouen", nombre: "Chefchaouen", alias: ["chefchaouen"], intro: "Chefchaouen es el pueblo azul de las montañas del Rif." },
  // Américas
  { slug: "nueva-york", nombre: "Nueva York", alias: ["new york", "nueva york"], intro: "Nueva York es Times Square, Central Park, la Estatua de la Libertad y las compras de la Quinta Avenida." },
  { slug: "cataratas-del-niagara", nombre: "Cataratas del Niágara", alias: ["niagara falls", "niagara"], intro: "Las Cataratas del Niágara se visitan en los circuitos por el este de Estados Unidos y Canadá." },
  { slug: "washington", nombre: "Washington", alias: ["washington"], intro: "Washington es la Casa Blanca, el Capitolio y los museos Smithsonian." },
  { slug: "costa-rica-arenal", nombre: "Volcán Arenal", alias: ["volcan arenal", "arenal"], intro: "El Volcán Arenal es aguas termales, puentes colgantes y selva en el norte de Costa Rica." },
  { slug: "monteverde", nombre: "Monteverde", alias: ["monteverde"], intro: "Monteverde es el bosque nuboso de Costa Rica, con canopy y puentes colgantes." },
  { slug: "manuel-antonio", nombre: "Manuel Antonio", alias: ["manuel antonio"], intro: "Manuel Antonio son playas dentro de un parque nacional, con monos y perezosos." },
  { slug: "rio-de-janeiro", nombre: "Río de Janeiro", alias: ["rio de janeiro"], intro: "Río de Janeiro es el Cristo Redentor, el Pan de Azúcar y las playas de Copacabana e Ipanema." },
  { slug: "buzios", nombre: "Búzios", alias: ["buzios"], intro: "Búzios es la península de playas tranquilas a unas tres horas de Río de Janeiro." },
  { slug: "iguazu", nombre: "Cataratas del Iguazú", alias: ["iguazu", "foz do iguazu"], intro: "Las Cataratas del Iguazú se ven desde el lado brasileño y el argentino, en la frontera con Paraguay." },
  { slug: "salvador-de-bahia", nombre: "Salvador de Bahía", alias: ["salvador de bahia"], intro: "Salvador de Bahía es el Pelourinho colonial, la cultura afrobrasileña y playas cálidas." },
  { slug: "sao-paulo", nombre: "São Paulo", alias: ["sao paulo"], intro: "São Paulo es la gran ciudad de Brasil: compras, gastronomía y conexión a todo el país." },
  { slug: "buenos-aires", nombre: "Buenos Aires", alias: ["buenos aires"], intro: "Buenos Aires es tango, Caminito, Recoleta, parrillas y una vida cultural intensa." },
  { slug: "santo-domingo", nombre: "Santo Domingo", alias: ["santo domingo"], intro: "Santo Domingo tiene la primera ciudad colonial de América y es puerta a las playas dominicanas." },
];

const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{M}+/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

export function pasaPor(c: Circuito, alias: string[]): boolean {
  return c.ciudades.some((x) => {
    const n = norm(x);
    return alias.some((a) => n === a || n.startsWith(`${a} `));
  });
}

function aHub(x: Ciudad): HubCircuitos {
  const ruta = `/viajes-a/${x.slug}`;
  const total = circuitosVigentes().filter((c) => pasaPor(c, x.alias)).length;
  const largo = `Viajes a ${x.nombre} desde Lima: circuitos`;
  return {
    ruta,
    nombre: x.nombre,
    h1: `Viajes a ${x.nombre} desde Lima`,
    tituloSeo: largo.length <= 49 ? largo : `Viajes a ${x.nombre} desde Lima`.slice(0, 49),
    descripcion: `${total} programas que pasan por ${x.nombre}, con salidas confirmadas desde Lima: con vuelo o solo terrestres, hotel y guía en español. Precios por persona. Separa con el 50%.`,
    intro: x.intro,
    filtro: (c) => pasaPor(c, x.alias),
    mensajeWhatsApp: `¡Hola Cityland Travel! Quiero cotizar un viaje a ${x.nombre}.`,
  };
}

export const HUBS_CIUDADES: readonly HubCircuitos[] = CIUDADES.map(aHub);

export function buscarHubCiudad(slug: string): HubCircuitos | undefined {
  return HUBS_CIUDADES.find((h) => h.ruta === `/viajes-a/${slug}`);
}

export function slugsCiudades(): string[] {
  return CIUDADES.map((c) => c.slug);
}

// Solo se publican las ciudades con al menos 3 programas vigentes.
export function ciudadesConProgramas(): HubCircuitos[] {
  const todos = circuitosVigentes();
  return HUBS_CIUDADES.filter((h) => todos.filter(h.filtro).length >= 3);
}
