import DATOS from "@/lib/tours-turbo/datos.json";

// Tours y actividades del segundo proveedor (catálogo de actividades que revende), con nuestro fee por persona. Se
// guarda solo nombre, duración, precio desde y foto; la descripción del proveedor no se copia. 28-oct-2026.

export interface TourCrudo {
  d: string;
  s: string;
  n: string;
  dur: string;
  p: number;
  i: string;
}

export interface DestinoTour {
  slug: string;
  nombre: string;
  pais: string;
  paisTuristico?: string;
}

// Fee de Carlos (29-oct-2026): 20 % por persona, nunca menos de US$15; redondeado al dólar de arriba.
export const FEE_TOUR = 15;
export const FEE_TOUR_PORCENTAJE = 0.2;
export const precioTour = (t: Pick<TourCrudo, "p">) => Math.ceil(t.p + Math.max(t.p * FEE_TOUR_PORCENTAJE, FEE_TOUR));

const CDN = "https://cdn.travelconline.com/images/fit-in/";
export const fotoTour = (t: Pick<TourCrudo, "i">, ancho = 700) => `${CDN}${ancho}x0/filters:quality(75):strip_metadata():format(webp)/${t.i}`;

export const DESTINOS_TOUR: Record<string, DestinoTour> = {
  madrid: { slug: "madrid", nombre: "Madrid", pais: "España", paisTuristico: "espana" },
  barcelona: { slug: "barcelona", nombre: "Barcelona", pais: "España", paisTuristico: "espana" },
  sevilla: { slug: "sevilla", nombre: "Sevilla", pais: "España", paisTuristico: "espana" },
  paris: { slug: "paris", nombre: "París", pais: "Francia" },
  roma: { slug: "roma", nombre: "Roma", pais: "Italia", paisTuristico: "italia" },
  florencia: { slug: "florencia", nombre: "Florencia", pais: "Italia", paisTuristico: "italia" },
  venecia: { slug: "venecia", nombre: "Venecia", pais: "Italia", paisTuristico: "italia" },
  milan: { slug: "milan", nombre: "Milán", pais: "Italia", paisTuristico: "italia" },
  londres: { slug: "londres", nombre: "Londres", pais: "Reino Unido" },
  lisboa: { slug: "lisboa", nombre: "Lisboa", pais: "Portugal" },
  amsterdam: { slug: "amsterdam", nombre: "Ámsterdam", pais: "Países Bajos" },
  atenas: { slug: "atenas", nombre: "Atenas", pais: "Grecia", paisTuristico: "grecia" },
  dublin: { slug: "dublin", nombre: "Dublín", pais: "Irlanda" },
  estambul: { slug: "estambul", nombre: "Estambul", pais: "Turquía", paisTuristico: "turquia" },
  dubai: { slug: "dubai", nombre: "Dubái", pais: "Emiratos Árabes", paisTuristico: "emiratos-arabes" },
  "el-cairo": { slug: "el-cairo", nombre: "El Cairo", pais: "Egipto", paisTuristico: "egipto" },
  cartagena: { slug: "cartagena", nombre: "Cartagena", pais: "Colombia", paisTuristico: "colombia" },
  "san-andres": { slug: "san-andres", nombre: "San Andrés", pais: "Colombia", paisTuristico: "colombia" },
  bogota: { slug: "bogota", nombre: "Bogotá", pais: "Colombia", paisTuristico: "colombia" },
  medellin: { slug: "medellin", nombre: "Medellín", pais: "Colombia", paisTuristico: "colombia" },
  "rio-de-janeiro": { slug: "rio-de-janeiro", nombre: "Río de Janeiro", pais: "Brasil", paisTuristico: "brasil" },
  "buenos-aires": { slug: "buenos-aires", nombre: "Buenos Aires", pais: "Argentina", paisTuristico: "argentina" },
  cusco: { slug: "cusco", nombre: "Cusco", pais: "Perú" },
  "punta-cana": { slug: "punta-cana", nombre: "Punta Cana", pais: "República Dominicana", paisTuristico: "republica-dominicana" },
  cancun: { slug: "cancun", nombre: "Cancún", pais: "México", paisTuristico: "mexico" },
};

const LISTA = DATOS as TourCrudo[];

const sinTildes = (s: string) =>
  s.toLowerCase().replace(/[áà]/g, "a").replace(/[éè]/g, "e").replace(/[íì]/g, "i").replace(/[óò]/g, "o").replace(/[úùü]/g, "u");

export const toursDe = (d: string) => LISTA.filter((t) => t.d === d).sort((a, b) => a.p - b.p);
export const buscarTour = (d: string, s: string) => LISTA.find((t) => t.d === d && t.s === s);
export const todosLosTours = () => LISTA;

export function destinosConTours(): (DestinoTour & { total: number; desde: number; foto: string })[] {
  return Object.values(DESTINOS_TOUR)
    .map((x) => {
      const ts = toursDe(x.slug);
      // Portada: el tour más caro que nombra al destino (una excursión a otra ciudad mostraría otra ciudad).
      const nombre = sinTildes(x.nombre);
      const propios = ts.filter((t) => sinTildes(t.n).includes(nombre) && !/excursion|desde |escapada|\btren\b|crucero/.test(sinTildes(t.n)));
      const estrella = [...(propios.length ? propios : ts)].sort((a, b) => b.p - a.p)[0];
      return { ...x, total: ts.length, desde: ts.length ? precioTour(ts[0]) : 0, foto: estrella ? fotoTour(estrella, 1000) : "" };
    })
    .filter((x) => x.total > 0)
    .sort((a, b) => b.total - a.total);
}

export function toursParecidos(t: TourCrudo, n = 6): TourCrudo[] {
  return toursDe(t.d)
    .filter((x) => x.s !== t.s)
    .sort((a, b) => Math.abs(a.p - t.p) - Math.abs(b.p - t.p))
    .slice(0, n);
}
