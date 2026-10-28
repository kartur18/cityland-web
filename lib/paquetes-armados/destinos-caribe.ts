import type { Circuito } from "@/lib/circuitos";

// Destinos de playa con paquetes armados del mayorista. Cada uno dice qué programas le pertenecen (por sus ciudades) y
// trae datos que ayudan a decidir: qué ver, moneda y la página del destino que ya existe. 27-oct-2026.

export interface DestinoCaribe {
  id: string;
  nombre: string;
  pais: string;
  // Texto para el clima (lib/paquetes-armados/clima.ts).
  zona: string;
  hub?: string;
  // Guía de requisitos para peruanos que ya existe en la web.
  requisitos?: string;
  intro: string;
  imperdibles: string[];
  moneda: string;
  pertenece: (c: Circuito, t: string) => boolean;
}

const playa = (c: Circuito) => c.region === "caribe" || c.region === "sudamerica" || c.region === "mexico";

export const DESTINOS_CARIBE: DestinoCaribe[] = [
  {
    id: "punta-cana",
    nombre: "Punta Cana",
    pais: "República Dominicana",
    zona: "punta cana",
    hub: "/paquetes-a-punta-cana",
    requisitos: "/viajes/requisitos-viajar-a-punta-cana-desde-peru",
    intro: "Punta Cana es el destino todo incluido más pedido desde Lima: resorts frente al mar, arena blanca y aguas tranquilas en la costa este de República Dominicana.",
    imperdibles: ["Playa Bávaro y sus resorts frente al mar", "Excursión en catamarán a Isla Saona", "Hoyo Azul, una poza de agua turquesa en Cap Cana", "Zona colonial de Santo Domingo (día completo)"],
    moneda: "Peso dominicano; en los resorts y tours aceptan dólares.",
    pertenece: (c, t) => c.region === "caribe" && /punta cana/.test(t),
  },
  {
    id: "aruba",
    nombre: "Aruba",
    pais: "Aruba",
    zona: "aruba",
    hub: "/paquetes-a-aruba",
    requisitos: "/viajes/requisitos-viajar-a-aruba-desde-peru",
    intro: "Aruba, «la isla feliz», tiene sol casi todo el año, poca lluvia y está fuera de la ruta de los huracanes. Sus playas de Eagle Beach y Palm Beach son de las más lindas del Caribe.",
    imperdibles: ["Eagle Beach y Palm Beach", "Parque Nacional Arikok y la piscina natural", "Baby Beach, de aguas bajas y tranquilas", "Atardecer en el faro California"],
    moneda: "Florín arubeño; el dólar se acepta en todas partes.",
    pertenece: (c, t) => /aruba|oranjestad/.test(t),
  },
  {
    id: "jamaica",
    nombre: "Jamaica",
    pais: "Jamaica",
    zona: "jamaica",
    requisitos: "/viajes/requisitos-viajar-a-jamaica-desde-peru",
    intro: "Jamaica combina resorts todo incluido con cascadas, música reggae y mucha cultura. Montego Bay y Ocho Ríos son sus zonas de playa más visitadas.",
    imperdibles: ["Cascadas Dunn's River en Ocho Ríos", "Seven Mile Beach en Negril", "Atardecer en Rick's Café", "Nine Mile, el pueblo de Bob Marley"],
    moneda: "Dólar jamaiquino; en los resorts aceptan dólares americanos.",
    pertenece: (c, t) => /jamaica|montego|ocho rios/.test(t),
  },
  {
    id: "cancun",
    nombre: "Cancún",
    pais: "México",
    zona: "cancun",
    hub: "/paquetes-a-cancun",
    requisitos: "/viajes/requisitos-viajar-a-mexico-cancun-desde-peru",
    intro: "Cancún y la Riviera Maya son mar turquesa, resorts todo incluido, cenotes y ruinas mayas como Chichén Itzá y Tulum.",
    imperdibles: ["Isla Mujeres en catamarán", "Chichén Itzá y un cenote en el camino", "Tulum y Playa del Carmen", "Parques como Xcaret o Xel-Há"],
    moneda: "Peso mexicano; en la zona hotelera también aceptan dólares.",
    pertenece: (c, t) => /cancun|riviera maya/.test(t),
  },
  {
    id: "cartagena",
    nombre: "Cartagena",
    pais: "Colombia",
    zona: "cartagena",
    hub: "/paquetes-a-cartagena",
    requisitos: "/viajes/requisitos-viajar-a-colombia-solo-dni",
    intro: "Cartagena de Indias es la ciudad amurallada más bonita del Caribe: calles coloniales con balcones de flores, playas cercanas y las Islas del Rosario a un paseo en lancha.",
    imperdibles: ["Ciudad Amurallada y el barrio de Getsemaní", "Castillo de San Felipe de Barajas", "Islas del Rosario y Playa Blanca en Barú", "Atardecer en las murallas"],
    moneda: "Peso colombiano.",
    pertenece: (c, t) => playa(c) && /cartagena/.test(t),
  },
  {
    id: "san-andres",
    nombre: "San Andrés",
    pais: "Colombia",
    zona: "san andres",
    hub: "/paquetes-a-san-andres",
    requisitos: "/viajes/requisitos-viajar-a-colombia-solo-dni",
    intro: "San Andrés es la isla colombiana del «mar de siete colores»: playas de arena blanca, cayos para hacer snorkel y un ambiente relajado.",
    imperdibles: ["Johnny Cay", "El Acuario y Haynes Cay", "Vuelta a la isla y el Hoyo Soplador", "Snorkel en La Piscinita"],
    moneda: "Peso colombiano.",
    pertenece: (c, t) => /san andres/.test(t),
  },
  {
    id: "rio-de-janeiro",
    nombre: "Río de Janeiro",
    pais: "Brasil",
    zona: "rio de janeiro",
    hub: "/carnaval-de-rio-2027",
    requisitos: "/viajes/requisitos-viajar-a-brasil-solo-dni",
    intro: "Río de Janeiro es playa y ciudad a la vez: Copacabana, Ipanema, el Cristo Redentor y el Pan de Azúcar, con la mejor vida nocturna de Sudamérica.",
    imperdibles: ["Cristo Redentor en el Corcovado", "Pan de Azúcar en teleférico", "Playas de Copacabana e Ipanema", "Escalera Selarón y el barrio de Lapa"],
    moneda: "Real brasileño.",
    pertenece: (c, t) => /rio de janeiro/.test(t),
  },
  {
    id: "buzios",
    nombre: "Búzios",
    pais: "Brasil",
    zona: "buzios brasil",
    intro: "Búzios es la península de playas tranquilas a unas tres horas de Río: ideal para combinar ciudad y descanso en el mismo viaje.",
    imperdibles: ["La Rua das Pedras de noche", "Playas João Fernandes y Geribá", "Paseo en barco por las playas de la península", "Atardecer en la Orla Bardot"],
    moneda: "Real brasileño.",
    pertenece: (c, t) => /buzios/.test(t),
  },
  {
    id: "crucero-por-el-caribe",
    nombre: "crucero por el Caribe",
    pais: "Caribe",
    zona: "antillas",
    hub: "/cruceros",
    intro: "Un crucero por el Caribe te lleva a varias islas en un solo viaje: duermes en el barco, comes a bordo y cada día amaneces en un puerto distinto.",
    imperdibles: ["Islas como St. Maarten, Tortola o Martinica", "Playas de Isla Catalina y Bayahíbe", "Shows y piscinas a bordo", "Excursiones opcionales en cada puerto"],
    moneda: "Dólar americano a bordo y en la mayoría de puertos.",
    pertenece: (c, t) => c.region === "cruceros" && /caribe|antillas|caicos|dominicana|romana|santo domingo|tortola/.test(t),
  },
  {
    id: "isla-margarita",
    nombre: "Isla Margarita",
    pais: "Venezuela",
    zona: "isla margarita",
    intro: "Isla Margarita tiene playas amplias, resorts todo incluido y buen clima casi todo el año.",
    imperdibles: ["Playa El Agua", "Parque Nacional La Restinga en bote", "Isla de Coche", "Compras en Porlamar"],
    moneda: "Bolívar; en hoteles y comercios se usa mucho el dólar.",
    pertenece: (c, t) => /margarita/.test(t),
  },
];

export const sinTildes = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

export function textoPrograma(c: Circuito): string {
  return sinTildes(`${c.nombre} ${c.ciudades.join(" ")} ${c.paises.join(" ")}`);
}
