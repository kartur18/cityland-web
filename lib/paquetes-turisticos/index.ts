import DATOS from "@/lib/paquetes-turisticos/datos.json";

// Paquetes turísticos del segundo proveedor (banco de camas con «ideas de viaje»), con nuestro fee. Los datos salen de
// sus tarjetas públicas para agencias (nombre, noches, destinos, precio desde y foto); el detalle día por día lo manda
// la asesora por WhatsApp porque la ficha del proveedor no abre. 28-oct-2026.

export interface PaqueteTuristico {
  id: string;
  slug: string;
  nombre: string;
  noches: number;
  precio: number;
  lugares: string[];
  pais: string;
  paisNombre: string;
  traslados: number;
  img: string;
}

export interface PaisTuristico {
  slug: string;
  nombre: string;
  intro: string;
  moneda: string;
  documento: string;
  epoca: string;
  requisitos?: string;
}

// Fee elegido por Carlos para paquetes de este proveedor (US$ por persona).
export const FEE_PAQUETE_TURISTICO = 150;

export const precioPaquete = (p: Pick<PaqueteTuristico, "precio">) => p.precio + FEE_PAQUETE_TURISTICO;
export const diasDe = (p: Pick<PaqueteTuristico, "noches">) => p.noches + 1;

const PASAPORTE = "Pasaporte con al menos 6 meses de vigencia. Te confirmamos visa y requisitos vigentes para peruanos al cotizar.";

export const PAISES: Record<string, PaisTuristico> = {
  colombia: {
    slug: "colombia",
    nombre: "Colombia",
    intro: "Cartagena amurallada, Medellín de la eterna primavera, Bogotá y el Eje Cafetero, a menos de 3 horas de vuelo de Lima.",
    moneda: "Peso colombiano; en zonas turísticas aceptan tarjeta.",
    documento: "Te basta el DNI vigente por ser país de la Comunidad Andina.",
    epoca: "Todo el año; de diciembre a marzo es temporada seca en el Caribe.",
  },
  ecuador: {
    slug: "ecuador",
    nombre: "Ecuador",
    intro: "Galápagos, el Quito colonial, Baños y la Amazonía: naturaleza única a un vuelo corto de Lima.",
    moneda: "Dólar americano.",
    documento: "Te basta el DNI vigente (Comunidad Andina). Galápagos cobra tasas de ingreso al parque y control migratorio propio.",
    epoca: "Galápagos todo el año; de junio a noviembre el mar es más fresco y hay más fauna.",
  },
  argentina: {
    slug: "argentina",
    nombre: "Argentina",
    intro: "Buenos Aires, Bariloche, El Calafate, Ushuaia, Mendoza e Iguazú: de la ciudad al glaciar en un mismo viaje.",
    moneda: "Peso argentino; conviene llevar dólares y tarjeta.",
    documento: "Te basta el DNI vigente.",
    epoca: "Patagonia de octubre a abril; Bariloche con nieve de julio a septiembre.",
  },
  italia: {
    slug: "italia",
    nombre: "Italia",
    intro: "Italia en tren o manejando a tu ritmo: Toscana, Roma, Venecia, la Costa Amalfitana, Sicilia y los lagos del norte.",
    moneda: "Euro.",
    documento: "Pasaporte vigente; para turismo de hasta 90 días los peruanos no necesitan visa Schengen.",
    epoca: "Abril a junio y septiembre a octubre: buen clima y menos gente.",
    requisitos: "/viajes/requisitos-viajar-a-italia-desde-peru",
  },
  turquia: {
    slug: "turquia",
    nombre: "Turquía",
    intro: "Estambul, los globos de Capadocia, Éfeso y Pamukkale, y combinados con Dubái, Egipto, Jordania o las islas griegas.",
    moneda: "Lira turca; el euro y el dólar se cambian fácil.",
    documento: PASAPORTE,
    epoca: "Abril a junio y septiembre a noviembre.",
  },
  "emiratos-arabes": {
    slug: "emiratos-arabes",
    nombre: "Emiratos Árabes",
    intro: "Dubái y Abu Dhabi: rascacielos, desierto, compras y playas, en programas de 3 a 7 noches.",
    moneda: "Dírham.",
    documento: PASAPORTE,
    epoca: "Noviembre a marzo; en verano pasa los 40 °C.",
    requisitos: "/viajes/requisitos-viajar-a-dubai-desde-peru",
  },
  oman: {
    slug: "oman",
    nombre: "Omán",
    intro: "Mascate, fiordos, desierto y fortalezas: el Golfo más auténtico.",
    moneda: "Rial omaní.",
    documento: PASAPORTE,
    epoca: "Octubre a abril.",
  },
  "arabia-saudita": {
    slug: "arabia-saudita",
    nombre: "Arabia Saudita",
    intro: "Riad, Yeda y AlUla: un destino que recién abre al turismo, con desierto, historia y ciudades modernas.",
    moneda: "Riyal saudí.",
    documento: PASAPORTE,
    epoca: "Noviembre a marzo.",
  },
  grecia: {
    slug: "grecia",
    nombre: "Grecia",
    intro: "Atenas, Santorini, Mykonos y las islas del Egeo.",
    moneda: "Euro.",
    documento: "Pasaporte vigente; sin visa Schengen para turismo de hasta 90 días.",
    epoca: "Mayo a octubre.",
  },
  egipto: {
    slug: "egipto",
    nombre: "Egipto",
    intro: "Pirámides, el Nilo y el Mar Rojo.",
    moneda: "Libra egipcia.",
    documento: PASAPORTE,
    epoca: "Octubre a abril.",
  },
  jordania: {
    slug: "jordania",
    nombre: "Jordania",
    intro: "Petra, Wadi Rum y el Mar Muerto.",
    moneda: "Dinar jordano.",
    documento: PASAPORTE,
    epoca: "Marzo a mayo y septiembre a noviembre.",
  },
  marruecos: {
    slug: "marruecos",
    nombre: "Marruecos",
    intro: "Marrakech, Fez, el desierto del Sahara y la costa atlántica.",
    moneda: "Dírham marroquí.",
    documento: PASAPORTE,
    epoca: "Marzo a mayo y septiembre a noviembre.",
  },
  china: {
    slug: "china",
    nombre: "China",
    intro: "Pekín, la Gran Muralla, Xi'an y Shanghái.",
    moneda: "Yuan.",
    documento: PASAPORTE,
    epoca: "Abril a mayo y septiembre a octubre.",
  },
  japon: {
    slug: "japon",
    nombre: "Japón",
    intro: "Tokio, Kioto y el Japón tradicional, solo o combinado con China o Corea.",
    moneda: "Yen.",
    documento: PASAPORTE,
    epoca: "Primavera (marzo-abril) y otoño (octubre-noviembre).",
  },
  tailandia: {
    slug: "tailandia",
    nombre: "Tailandia",
    intro: "Bangkok, Chiang Mai y las playas de Phuket.",
    moneda: "Baht.",
    documento: PASAPORTE,
    epoca: "Noviembre a marzo.",
  },
  mexico: {
    slug: "mexico",
    nombre: "México",
    intro: "Ciudad de México, Oaxaca, la Barranca del Cobre, Baja California y el mundo maya.",
    moneda: "Peso mexicano.",
    documento: PASAPORTE,
    epoca: "Noviembre a abril.",
  },
  "estados-unidos": {
    slug: "estados-unidos",
    nombre: "Estados Unidos",
    intro: "Miami y Orlando: playa, compras y parques temáticos.",
    moneda: "Dólar americano.",
    documento: "Pasaporte y visa americana vigentes.",
    epoca: "Todo el año; Orlando es más tranquilo fuera de vacaciones escolares.",
    requisitos: "/visa-americana",
  },
  espana: {
    slug: "espana",
    nombre: "España",
    intro: "Madrid, Barcelona y Andalucía.",
    moneda: "Euro.",
    documento: "Pasaporte vigente; sin visa Schengen para turismo de hasta 90 días.",
    epoca: "Abril a junio y septiembre a octubre.",
    requisitos: "/viajes/requisitos-viajar-a-espana-desde-peru",
  },
  canada: {
    slug: "canada",
    nombre: "Canadá",
    intro: "Toronto, las cataratas del Niágara y Quebec.",
    moneda: "Dólar canadiense.",
    documento: PASAPORTE,
    epoca: "Junio a septiembre.",
  },
  europa: {
    slug: "europa",
    nombre: "Europa",
    intro: "Circuitos por varias capitales europeas.",
    moneda: "Euro (y moneda local en algunos países).",
    documento: "Pasaporte vigente; sin visa Schengen para turismo de hasta 90 días.",
    epoca: "Abril a octubre.",
  },
  "republica-dominicana": {
    slug: "republica-dominicana",
    nombre: "República Dominicana",
    intro: "Punta Cana: playas de arena blanca y resorts.",
    moneda: "Peso dominicano; el dólar se acepta en todos lados.",
    documento: PASAPORTE,
    epoca: "Diciembre a abril.",
    requisitos: "/viajes/requisitos-viajar-a-punta-cana-desde-peru",
  },
  panama: {
    slug: "panama",
    nombre: "Panamá",
    intro: "Ciudad de Panamá, el Canal y las compras.",
    moneda: "Dólar americano y balboa.",
    documento: PASAPORTE,
    epoca: "Diciembre a abril.",
  },
  peru: { slug: "peru", nombre: "Perú", intro: "Escapadas cortas dentro del Perú.", moneda: "Sol.", documento: "DNI.", epoca: "Todo el año." },
  brasil: {
    slug: "brasil",
    nombre: "Brasil",
    intro: "Río de Janeiro y Copacabana.",
    moneda: "Real.",
    documento: "Te basta el DNI vigente.",
    epoca: "Todo el año; de diciembre a marzo es verano.",
  },
};

// Lugares que el proveedor trae en inglés o con la provincia pegada.
const LUGAR: Record<string, string> = {
  "Santa Cruz Island, Galapagos Islands": "Isla Santa Cruz (Galápagos)",
  "Isla Baltra": "Isla Baltra (Galápagos)",
  "Isla San Cristóbal, Islas Galápagos": "Isla San Cristóbal (Galápagos)",
  "Puerto Ayora": "Puerto Ayora (Galápagos)",
  "Yasuni National Park": "Parque Nacional Yasuní",
  Milan: "Milán",
  Turin: "Turín",
  Riyadh: "Riad",
  Dubai: "Dubái",
  "Lake Como": "Lago de Como",
  "Lamezia terme": "Lamezia Terme",
  "La paz (Baja California)": "La Paz (Baja California)",
  "San Jose del Cabo": "San José del Cabo",
  "Miami Beach FL": "Miami Beach",
  "Orlando FL": "Orlando",
  "Universal Parks & Resorts FL": "Orlando",
  "Ouzoud Falls": "Cascadas de Ouzoud",
  "Wahiba Sands": "Desierto de Wahiba",
  "Centro de Dubai": "Dubái",
  "World Trade Center Dubai": "Dubái",
};
const limpiarLugar = (x: string) =>
  (LUGAR[x] ?? x)
    .replace(/\s*\((Provincia|Province)\)/, "")
    .replace(/, (Friuli-Venezia Giulia|South Sardinia)$/, "")
    .replace(/^Pula$/, "Pula (Cerdeña)");

const BASE = (DATOS as PaqueteTuristico[]).map((p) => ({ ...p, lugares: [...new Set(p.lugares.map(limpiarLugar))] }));

// Dos programas con el mismo nombre y noches (rutas inversas, otra ciudad de inicio) llevan «desde <ciudad>» para que
// cada página tenga título propio.
const REPETIDOS = new Set(BASE.map((p) => `${p.nombre}|${p.noches}`).filter((k, i, a) => a.indexOf(k) !== i));
const LISTA = BASE.map((p) => (REPETIDOS.has(`${p.nombre}|${p.noches}`) ? { ...p, nombre: `${p.nombre} desde ${p.lugares[0]}` } : p));

export const paquetesTuristicos = (): PaqueteTuristico[] => LISTA;
export const buscarPaqueteTuristico = (slug: string) => LISTA.find((p) => p.slug === slug);
export const paquetesDePais = (pais: string) => LISTA.filter((p) => p.pais === pais).sort((a, b) => a.precio - b.precio);

export function paisesConPaquetes(): (PaisTuristico & { total: number; desde: number; foto: string })[] {
  return Object.values(PAISES)
    .map((x) => {
      const ps = paquetesDePais(x.slug);
      return { ...x, total: ps.length, desde: ps.length ? precioPaquete(ps[0]) : 0, foto: ps[0]?.img ?? "" };
    })
    .filter((x) => x.total > 0)
    .sort((a, b) => b.total - a.total);
}

// Parecidos: mismo país y duración cercana, para que el cliente compare sin salir de la página.
export function parecidos(p: PaqueteTuristico, n = 6): PaqueteTuristico[] {
  return paquetesDePais(p.pais)
    .filter((x) => x.slug !== p.slug)
    .sort((a, b) => Math.abs(a.noches - p.noches) - Math.abs(b.noches - p.noches))
    .slice(0, n);
}
