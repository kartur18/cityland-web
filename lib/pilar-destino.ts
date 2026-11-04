// Página principal («pilar») de cada destino. Search Console (7-oct → 3-nov-2026): para «san andrés todo incluido»
// competían 12 páginas nuestras casi iguales, en el puesto 60-77, y ninguna enlazaba a /paquetes-a-san-andres.
// Las variantes de ofertas y destinos ahora la ponen en sus migas para que Google sepa cuál es la principal.
// El orden importa: lo más específico primero («san-andres» antes que «cartagena» en los combinados).

export interface Pilar {
  nombre: string;
  href: string;
}

// Palabras completas del slug: «roma» no debe atrapar «romantica», ni «cali» a «california».
const p = (...palabras: string[]) => new RegExp(`(?:^|-)(?:${palabras.join("|")})(?:-|$)`);

const PILARES: readonly (readonly [RegExp, Pilar])[] = [
  [p("san-andres"), { nombre: "Paquetes a San Andrés", href: "/paquetes-a-san-andres" }],
  [p("punta-cana", "bavaro", "bayahibe", "la-romana", "samana"), { nombre: "Paquetes a Punta Cana", href: "/paquetes-a-punta-cana" }],
  [p("cancun", "riviera-maya", "tulum", "xcaret", "playa-del-carmen"), { nombre: "Paquetes a Cancún", href: "/paquetes-a-cancun" }],
  [p("orlando", "disney"), { nombre: "Paquetes a Orlando y Disney", href: "/paquetes-a-orlando-disney" }],
  [p("miami"), { nombre: "Paquetes a Miami", href: "/paquetes-a-miami" }],
  [p("aruba", "curazao"), { nombre: "Paquetes a Aruba", href: "/paquetes-a-aruba" }],
  [p("cartagena", "santa-marta", "barranquilla"), { nombre: "Paquetes a Cartagena", href: "/paquetes-a-cartagena" }],
  [p("panama", "san-blas", "bocas-del-toro"), { nombre: "Paquetes a Panamá", href: "/paquetes-a-panama" }],
  [p("costa-rica", "guanacaste"), { nombre: "Paquetes a Costa Rica", href: "/paquetes-a-costa-rica" }],
  [p("medellin", "bogota", "eje-cafetero", "cali", "colombia"), { nombre: "Paquetes a Colombia", href: "/paquetes-a-colombia" }],
  [p("rio-de-janeiro", "buzios", "gramado", "florianopolis", "salvador-de-bahia", "brasil", "iguazu", "foz"), { nombre: "Paquetes a Brasil", href: "/paquetes-a-brasil" }],
  [p("buenos-aires", "bariloche", "calafate", "mendoza", "salta", "ushuaia", "argentina"), { nombre: "Paquetes a Argentina", href: "/paquetes-a-argentina" }],
  [p("santiago-de-chile", "santiago-chile", "santiago-nieve", "atacama", "vina-del-mar", "chile"), { nombre: "Paquetes a Chile", href: "/paquetes-a-chile" }],
  [p("mexico", "los-cabos", "puerto-vallarta", "cdmx"), { nombre: "Paquetes a México", href: "/paquetes-a-mexico" }],
  [p("nueva-york", "las-vegas", "los-angeles", "san-francisco", "estados-unidos"), { nombre: "Paquetes a Estados Unidos", href: "/paquetes-a-estados-unidos" }],
  [p("turquia", "estambul", "capadocia"), { nombre: "Paquetes a Turquía", href: "/paquetes-a-turquia" }],
  [p("dubai", "emiratos"), { nombre: "Paquetes a Dubái", href: "/paquetes-a-dubai" }],
  [p("egipto", "cairo", "nilo"), { nombre: "Paquetes a Egipto", href: "/paquetes-a-egipto" }],
  [p("jordania", "petra"), { nombre: "Paquetes a Jordania", href: "/paquetes-a-jordania" }],
  [p("marruecos"), { nombre: "Paquetes a Marruecos", href: "/paquetes-a-marruecos" }],
  [p("grecia", "atenas", "santorini", "mykonos"), { nombre: "Paquetes a Grecia", href: "/paquetes-a-grecia" }],
  [p("italia", "roma", "venecia", "florencia", "milan", "toscana", "napoles", "amalfitana", "sicilia"), { nombre: "Paquetes a Italia", href: "/paquetes-a-italia" }],
  [p("madrid", "barcelona", "sevilla", "andalucia", "espana", "mallorca", "tenerife", "malaga", "valencia"), { nombre: "Paquetes a España", href: "/paquetes-a-espana" }],
  [p("francia", "paris", "niza", "costa-azul"), { nombre: "Paquetes a Francia", href: "/paquetes-a-francia" }],
  [p("japon", "tokio", "kioto"), { nombre: "Paquetes a Japón", href: "/paquetes-a-japon" }],
  [p("tailandia", "bangkok", "phuket"), { nombre: "Paquetes a Tailandia", href: "/paquetes-a-tailandia" }],
  [p("china", "pekin", "beijing", "shanghai"), { nombre: "Paquetes a China", href: "/paquetes-a-china" }],
  [p("india", "taj-mahal"), { nombre: "Paquetes a la India", href: "/paquetes-a-india" }],
  [p("cusco", "machu-picchu", "valle-sagrado", "humantay", "7-colores"), { nombre: "Paquetes a Cusco y Machu Picchu", href: "/cusco" }],
  [p("tarapoto"), { nombre: "Paquetes a Tarapoto", href: "/destinos/tarapoto-selva" }],
];

// Pilar que corresponde a un slug, salvo que la página sea el propio pilar. Si el viaje cruza dos países
// («madrid-paris-roma») no se elige ninguno: mejor sin pilar que con el equivocado. El combinado San Andrés y
// Cartagena sí va a San Andrés (los dos son Colombia y San Andrés es lo que se busca).
export function pilarDe(slug: string, rutaActual?: string): Pilar | undefined {
  const s = slug.toLowerCase();
  const todos = [...new Set(PILARES.filter(([re]) => re.test(s)).map(([, x]) => x))];
  const pilar = todos.length === 1 || (todos[0]?.href === "/paquetes-a-san-andres" && todos.length === 2) ? todos[0] : undefined;
  return pilar && pilar.href !== rutaActual ? pilar : undefined;
}
