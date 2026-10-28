import { CIUDADES, pasaPor } from "@/lib/hubs-ciudades";
import type { DestinoCaribe } from "@/lib/paquetes-armados/destinos-caribe";

// Paquetes armados por ciudad: las mismas 61 ciudades de /viajes-a, con los programas reales que pasan por cada una.
// La zona de clima, la moneda y la guía de requisitos salen del país de la ciudad. 28-oct-2026.

interface Pais {
  zona: string;
  moneda: string;
  requisitos?: string;
}

const R = (slug: string) => `/viajes/requisitos-viajar-a-${slug}`;
const ETIAS = "/viajes/requisitos-y-permiso-etias-europa";

const PAISES: Record<string, Pais> = {
  espana: {
    zona: "espana",
    moneda: "Euro.",
    requisitos: R("espana-desde-peru"),
  },
  francia: {
    zona: "francia",
    moneda: "Euro.",
    requisitos: R("francia-desde-peru"),
  },
  italia: {
    zona: "italia",
    moneda: "Euro.",
    requisitos: R("italia-desde-peru"),
  },
  inglaterra: {
    zona: "inglaterra",
    moneda: "Libra esterlina.",
    requisitos: R("reino-unido-desde-peru"),
  },
  suiza: {
    zona: "suiza",
    moneda: "Franco suizo.",
    requisitos: R("suiza-desde-peru"),
  },
  holanda: {
    zona: "holanda",
    moneda: "Euro.",
    requisitos: R("paises-bajos-desde-peru"),
  },
  alemania: {
    zona: "alemania",
    moneda: "Euro.",
    requisitos: R("alemania-desde-peru"),
  },
  europa: {
    zona: "europa",
    moneda: "Euro (en República Checa y Hungría usan su propia moneda).",
    requisitos: ETIAS,
  },
  grecia: { zona: "grecia", moneda: "Euro.", requisitos: ETIAS },
  turquia: {
    zona: "turquia",
    moneda: "Lira turca; en zonas turísticas aceptan euros y dólares.",
    requisitos: R("turquia-desde-peru"),
  },
  jordania: { zona: "jordania", moneda: "Dinar jordano." },
  egipto: { zona: "egipto", moneda: "Libra egipcia." },
  emiratos: {
    zona: "dubai",
    moneda: "Dírham de los Emiratos.",
    requisitos: R("dubai-desde-peru"),
  },
  japon: { zona: "japon", moneda: "Yen.", requisitos: R("japon-desde-peru") },
  corea: { zona: "corea", moneda: "Won surcoreano." },
  china: { zona: "china", moneda: "Yuan (renminbi)." },
  tailandia: { zona: "tailandia", moneda: "Baht tailandés." },
  india: { zona: "india", moneda: "Rupia india." },
  nepal: { zona: "nepal", moneda: "Rupia nepalí." },
  marruecos: { zona: "marruecos", moneda: "Dírham marroquí." },
  eeuu: {
    zona: "nueva york",
    moneda: "Dólar americano.",
    requisitos: R("estados-unidos-desde-peru"),
  },
  "costa-rica": {
    zona: "costa rica",
    moneda: "Colón costarricense; el dólar se acepta en casi todas partes.",
    requisitos: R("costa-rica-desde-peru"),
  },
  brasil: {
    zona: "brasil",
    moneda: "Real brasileño.",
    requisitos: R("brasil-solo-dni"),
  },
  argentina: {
    zona: "buenos aires",
    moneda: "Peso argentino.",
    requisitos: R("argentina-solo-dni"),
  },
  dominicana: {
    zona: "santo domingo",
    moneda: "Peso dominicano; en zonas turísticas aceptan dólares.",
    requisitos: R("punta-cana-desde-peru"),
  },
};

const PAIS_DE: Record<string, string> = {
  madrid: "espana",
  barcelona: "espana",
  paris: "francia",
  niza: "francia",
  roma: "italia",
  florencia: "italia",
  venecia: "italia",
  londres: "inglaterra",
  zurich: "suiza",
  lucerna: "suiza",
  amsterdam: "holanda",
  munich: "alemania",
  praga: "europa",
  viena: "europa",
  budapest: "europa",
  bruselas: "europa",
  atenas: "grecia",
  santorini: "grecia",
  estambul: "turquia",
  capadocia: "turquia",
  pamukkale: "turquia",
  efeso: "turquia",
  petra: "jordania",
  "wadi-rum": "jordania",
  "mar-muerto": "jordania",
  amman: "jordania",
  "el-cairo": "egipto",
  luxor: "egipto",
  "abu-dabi": "emiratos",
  tokio: "japon",
  kioto: "japon",
  osaka: "japon",
  seul: "corea",
  pekin: "china",
  shanghai: "china",
  xian: "china",
  guilin: "china",
  bangkok: "tailandia",
  phuket: "tailandia",
  "chiang-mai": "tailandia",
  "taj-mahal": "india",
  jaipur: "india",
  delhi: "india",
  katmandu: "nepal",
  marrakech: "marruecos",
  fez: "marruecos",
  chefchaouen: "marruecos",
  "nueva-york": "eeuu",
  "cataratas-del-niagara": "eeuu",
  washington: "eeuu",
  "costa-rica-arenal": "costa-rica",
  monteverde: "costa-rica",
  "manuel-antonio": "costa-rica",
  iguazu: "brasil",
  "salvador-de-bahia": "brasil",
  "sao-paulo": "brasil",
  "buenos-aires": "argentina",
  "santo-domingo": "dominicana",
};

// Ciudades que ya son destino propio (Dubái, Río, Búzios) no se repiten.
export const DESTINOS_CIUDADES: DestinoCaribe[] = CIUDADES.filter((x) => PAIS_DE[x.slug]).map((x) => {
  const p = PAISES[PAIS_DE[x.slug]];
  return {
    id: x.slug,
    nombre: x.nombre,
    pais: PAIS_DE[x.slug],
    zona: p.zona,
    hub: `/viajes-a/${x.slug}`,
    requisitos: p.requisitos,
    intro: x.intro,
    imperdibles: [],
    moneda: p.moneda,
    minimoProgramas: 3,
    pertenece: (c) => pasaPor(c, x.alias),
  };
});
