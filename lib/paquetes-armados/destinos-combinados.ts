import DATOS from "@/lib/circuitos-datos.json";
import type { Circuito } from "@/lib/circuitos";
import type { DestinoCaribe } from "@/lib/paquetes-armados/destinos-caribe";

// Viajes que combinan dos países en un solo paquete armado («Turquía y Egipto», «España y Portugal»): la combinación
// solo existe si algún programa del mayorista recorre los dos. 28-oct-2026.

interface PaisCombinable {
  nombre: string;
  slug: string;
  zona: string;
  moneda: string;
}

const PAISES: PaisCombinable[] = [
  { nombre: "Turquía", slug: "turquia", zona: "turquia", moneda: "lira turca" },
  { nombre: "Egipto", slug: "egipto", zona: "egipto", moneda: "libra egipcia" },
  { nombre: "Dubái", slug: "dubai", zona: "dubai", moneda: "dírham" },
  { nombre: "Grecia", slug: "grecia", zona: "grecia", moneda: "euro" },
  { nombre: "Jordania", slug: "jordania", zona: "jordania", moneda: "dinar jordano" },
  { nombre: "Israel", slug: "israel", zona: "israel", moneda: "séquel" },
  { nombre: "España", slug: "espana", zona: "espana", moneda: "euro" },
  { nombre: "Portugal", slug: "portugal", zona: "portugal", moneda: "euro" },
  { nombre: "Marruecos", slug: "marruecos", zona: "marruecos", moneda: "dírham marroquí" },
  { nombre: "Francia", slug: "francia", zona: "francia", moneda: "euro" },
  { nombre: "Italia", slug: "italia", zona: "italia", moneda: "euro" },
  { nombre: "Suiza", slug: "suiza", zona: "suiza", moneda: "franco suizo" },
  { nombre: "Inglaterra", slug: "inglaterra", zona: "inglaterra", moneda: "libra esterlina" },
  { nombre: "Austria", slug: "austria", zona: "austria", moneda: "euro" },
  { nombre: "República Checa", slug: "republica-checa", zona: "europa", moneda: "corona checa" },
  { nombre: "Croacia", slug: "croacia", zona: "croacia", moneda: "euro" },
  { nombre: "Japón", slug: "japon", zona: "japon", moneda: "yen" },
  { nombre: "China", slug: "china", zona: "china", moneda: "yuan" },
  { nombre: "Corea del Sur", slug: "corea", zona: "corea", moneda: "won" },
  { nombre: "Tailandia", slug: "tailandia", zona: "tailandia", moneda: "baht" },
  { nombre: "India", slug: "india", zona: "india", moneda: "rupia india" },
  { nombre: "Nepal", slug: "nepal", zona: "nepal", moneda: "rupia nepalí" },
  { nombre: "Estados Unidos", slug: "estados-unidos", zona: "estados unidos", moneda: "dólar" },
  { nombre: "Canadá", slug: "canada", zona: "canada", moneda: "dólar canadiense" },
  { nombre: "Brasil", slug: "brasil", zona: "brasil", moneda: "real" },
  { nombre: "Argentina", slug: "argentina", zona: "buenos aires", moneda: "peso argentino" },
  { nombre: "Chile", slug: "chile", zona: "buenos aires", moneda: "peso chileno" },
  { nombre: "Colombia", slug: "colombia", zona: "cartagena", moneda: "peso colombiano" },
  { nombre: "Panamá", slug: "panama", zona: "panama", moneda: "dólar y balboa" },
  { nombre: "Costa Rica", slug: "costa-rica", zona: "costa rica", moneda: "colón" },
];

const ALIAS: Record<string, string> = { "Emiratos Árabes Unidos": "Dubái", "Corea del Sur": "Corea del Sur" };
const nombrePais = (p: string) => ALIAS[p.trim()] ?? p.trim();
const recorre = (c: Circuito, pais: string) => c.paises.some((p) => nombrePais(p) === pais);

function combinaciones(): DestinoCaribe[] {
  const programas = DATOS as Circuito[];
  const out: DestinoCaribe[] = [];
  for (let i = 0; i < PAISES.length; i++) {
    for (let j = i + 1; j < PAISES.length; j++) {
      const [a, b] = [PAISES[i], PAISES[j]];
      if (!programas.some((c) => recorre(c, a.nombre) && recorre(c, b.nombre))) continue;
      const nombre = `${a.nombre} y ${b.nombre}`;
      out.push({
        id: `${a.slug}-y-${b.slug}`,
        nombre,
        pais: "combinado",
        zona: a.zona,
        intro: `Paquetes armados que recorren ${a.nombre} y ${b.nombre} en un solo viaje, con los vuelos, hoteles y traslados entre los dos países ya resueltos y guía durante el recorrido.`,
        imperdibles: [],
        moneda: `${a.moneda.charAt(0).toUpperCase() + a.moneda.slice(1)} en ${a.nombre} y ${b.moneda} en ${b.nombre}.`,
        soloEstilos: ["con-vuelo-desde-lima", "con-guia-en-espanol", "ano-nuevo", "semana-santa", "vacaciones-de-julio", "barato", "sin-vuelo"],
        pertenece: (c) => recorre(c, a.nombre) && recorre(c, b.nombre),
      });
    }
  }
  return out;
}

export const DESTINOS_COMBINADOS: DestinoCaribe[] = combinaciones();
