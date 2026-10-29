import DATOS from "@/lib/hoteles-turbo/datos.json";

// Hoteles del segundo proveedor (banco de camas), con el fee de Carlos. Solo se guardan los que tienen nota 7,5 o más
// y al menos 30 opiniones. Precio de referencia: 3 noches para 2 adultos del 16 al 19-nov-2026. 29-oct-2026.

export interface HotelCrudo {
  d: string;
  s: string;
  n: string;
  z: string;
  km: string;
  a: string[];
  hab: string;
  r: string;
  x: string;
  nota: number;
  op: number;
  p: number;
  i: string;
  gratis: boolean;
}

export interface DestinoHotel {
  slug: string;
  nombre: string;
  pais: string;
  tours?: string;
}

export const NOCHES_REFERENCIA = 3;
export const FECHAS_REFERENCIA = "del 16 al 19 de noviembre de 2026";

// Fee de Carlos (29-oct-2026): 20 % de la reserva, nunca menos de US$30.
export const FEE_HOTEL_PORCENTAJE = 0.2;
export const FEE_HOTEL_MINIMO = 30;
export const precioHotel = (h: Pick<HotelCrudo, "p">) => Math.ceil(h.p + Math.max(h.p * FEE_HOTEL_PORCENTAJE, FEE_HOTEL_MINIMO));
export const precioNoche = (h: Pick<HotelCrudo, "p">) => Math.ceil(precioHotel(h) / NOCHES_REFERENCIA);

const CDN = "https://cdn.travelconline.com/images/fit-in/";
export const fotoHotel = (h: Pick<HotelCrudo, "i">, ancho = 700) =>
  `${CDN}${ancho}x0/filters:quality(75):strip_metadata():format(webp)/${h.i}`;

export const DESTINOS_HOTEL: Record<string, DestinoHotel> = {
  cancun: { slug: "cancun", nombre: "Cancún", pais: "México", tours: "cancun" },
  "punta-cana": { slug: "punta-cana", nombre: "Punta Cana", pais: "República Dominicana", tours: "punta-cana" },
  cartagena: { slug: "cartagena", nombre: "Cartagena", pais: "Colombia", tours: "cartagena" },
  "san-andres": { slug: "san-andres", nombre: "San Andrés", pais: "Colombia", tours: "san-andres" },
  aruba: { slug: "aruba", nombre: "Aruba", pais: "Aruba" },
  miami: { slug: "miami", nombre: "Miami", pais: "Estados Unidos" },
  orlando: { slug: "orlando", nombre: "Orlando", pais: "Estados Unidos" },
  "nueva-york": { slug: "nueva-york", nombre: "Nueva York", pais: "Estados Unidos" },
  madrid: { slug: "madrid", nombre: "Madrid", pais: "España", tours: "madrid" },
  barcelona: { slug: "barcelona", nombre: "Barcelona", pais: "España", tours: "barcelona" },
  paris: { slug: "paris", nombre: "París", pais: "Francia", tours: "paris" },
  roma: { slug: "roma", nombre: "Roma", pais: "Italia", tours: "roma" },
  venecia: { slug: "venecia", nombre: "Venecia", pais: "Italia", tours: "venecia" },
  florencia: { slug: "florencia", nombre: "Florencia", pais: "Italia", tours: "florencia" },
  milan: { slug: "milan", nombre: "Milán", pais: "Italia", tours: "milan" },
  londres: { slug: "londres", nombre: "Londres", pais: "Reino Unido", tours: "londres" },
  lisboa: { slug: "lisboa", nombre: "Lisboa", pais: "Portugal", tours: "lisboa" },
  amsterdam: { slug: "amsterdam", nombre: "Ámsterdam", pais: "Países Bajos", tours: "amsterdam" },
  estambul: { slug: "estambul", nombre: "Estambul", pais: "Turquía", tours: "estambul" },
  dubai: { slug: "dubai", nombre: "Dubái", pais: "Emiratos Árabes", tours: "dubai" },
  "rio-de-janeiro": { slug: "rio-de-janeiro", nombre: "Río de Janeiro", pais: "Brasil", tours: "rio-de-janeiro" },
  "buenos-aires": { slug: "buenos-aires", nombre: "Buenos Aires", pais: "Argentina", tours: "buenos-aires" },
  "santiago-de-chile": { slug: "santiago-de-chile", nombre: "Santiago de Chile", pais: "Chile" },
  bogota: { slug: "bogota", nombre: "Bogotá", pais: "Colombia", tours: "bogota" },
  medellin: { slug: "medellin", nombre: "Medellín", pais: "Colombia", tours: "medellin" },
  cusco: { slug: "cusco", nombre: "Cusco", pais: "Perú", tours: "cusco" },
};

const LISTA = DATOS as HotelCrudo[];

// Primero los mejor puntuados con más opiniones: es el orden en que la gente decide.
const puntaje = (h: HotelCrudo) => h.nota * 10 + Math.log10(h.op + 1);
export const hotelesDe = (d: string) => LISTA.filter((h) => h.d === d).sort((a, b) => puntaje(b) - puntaje(a));
export const buscarHotel = (d: string, s: string) => LISTA.find((h) => h.d === d && h.s === s);
export const todosLosHoteles = () => LISTA;

export function destinosConHoteles(): (DestinoHotel & { total: number; desde: number; foto: string })[] {
  return Object.values(DESTINOS_HOTEL)
    .map((x) => {
      const hs = hotelesDe(x.slug);
      const estrella = hs[0];
      return {
        ...x,
        total: hs.length,
        desde: hs.length ? Math.min(...hs.map(precioNoche)) : 0,
        foto: estrella ? fotoHotel(estrella, 1000) : "",
      };
    })
    .filter((x) => x.total > 0)
    .sort((a, b) => b.total - a.total);
}

export function hotelesParecidos(h: HotelCrudo, n = 6): HotelCrudo[] {
  return hotelesDe(h.d)
    .filter((x) => x.s !== h.s)
    .sort((a, b) => Math.abs(a.p - h.p) - Math.abs(b.p - h.p))
    .slice(0, n);
}

export const textoNota = (nota: number) => (nota >= 9 ? "Excelente" : nota >= 8.5 ? "Muy bueno" : nota >= 8 ? "Bueno" : "Agradable");
