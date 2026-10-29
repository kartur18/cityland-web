import DATOS from "@/lib/traslados-turbo/datos.json";
import { DESTINOS_HOTEL, destinosConHoteles } from "@/lib/hoteles-turbo";

// Traslados del aeropuerto al hotel del segundo proveedor, con el fee de Carlos. El proveedor da el precio total para
// 2 adultos y solo de ida; se tomó una búsqueda real del aeropuerto principal a un hotel céntrico el 16-nov-2026. 29-oct-2026.

export interface OpcionTraslado {
  tipo: "Compartido" | "Privado";
  cat: string;
  veh: string;
  min: number;
  p: number;
}

export interface TrasladoCrudo {
  d: string;
  cod: string;
  aero: string;
  hotel: string;
  op: OpcionTraslado[];
}

export const FECHA_REFERENCIA_TRASLADO = "16 de noviembre de 2026";

// Fee de Carlos (29-oct-2026): 20 % del traslado, nunca menos de US$10 por persona (el precio es para 2).
export const FEE_TRASLADO_PORCENTAJE = 0.2;
export const FEE_TRASLADO_MINIMO_PERSONA = 10;
export const precioTraslado = (o: Pick<OpcionTraslado, "p">) =>
  Math.ceil(o.p + Math.max(o.p * FEE_TRASLADO_PORCENTAJE, FEE_TRASLADO_MINIMO_PERSONA * 2));
export const precioPorPersona = (o: Pick<OpcionTraslado, "p">) => Math.ceil(precioTraslado(o) / 2);

// Nombre del aeropuerto como lo busca la gente (el proveedor usa nombres en inglés o sin tildes).
const AEROPUERTO: Record<string, string> = {
  cancun: "Aeropuerto de Cancún",
  "punta-cana": "Aeropuerto de Punta Cana",
  cartagena: "Aeropuerto Rafael Núñez",
  madrid: "Aeropuerto de Madrid-Barajas",
  barcelona: "Aeropuerto de Barcelona-El Prat",
  paris: "Aeropuerto Charles de Gaulle",
  roma: "Aeropuerto de Fiumicino",
  venecia: "Aeropuerto Marco Polo",
  florencia: "Aeropuerto de Florencia",
  milan: "Aeropuerto de Malpensa",
  londres: "Aeropuerto de Heathrow",
  lisboa: "Aeropuerto de Lisboa",
  amsterdam: "Aeropuerto de Schiphol",
  dubai: "Aeropuerto de Dubái",
  miami: "Aeropuerto de Miami",
  orlando: "Aeropuerto de Orlando",
  aruba: "Aeropuerto Reina Beatrix",
  "san-andres": "Aeropuerto Gustavo Rojas Pinilla",
  "nueva-york": "Aeropuerto JFK",
  "santiago-de-chile": "Aeropuerto de Santiago",
  estambul: "Aeropuerto de Estambul",
  "rio-de-janeiro": "Aeropuerto de Galeão",
  "buenos-aires": "Aeropuerto de Ezeiza",
  bogota: "Aeropuerto El Dorado",
  cusco: "Aeropuerto de Cusco",
  medellin: "Aeropuerto José María Córdova",
};

// Lo que el viajero tiene que saber antes de elegir, cuando el destino tiene su particularidad.
const NOTAS: Record<string, string> = {
  venecia: "En Venecia los autos llegan solo hasta Piazzale Roma: a los hoteles del centro histórico se entra en lancha. Por eso el ferry es la opción que te deja en la puerta.",
  cusco: "El aeropuerto está a unos 20 minutos del centro de Cusco. Si sigues a Machu Picchu o al Valle Sagrado, te cotizamos el traslado completo.",
};

export interface DestinoTraslado {
  slug: string;
  nombre: string;
  pais: string;
  aeropuerto: string;
  cod: string;
  hotel: string;
  opciones: OpcionTraslado[];
  desde: number;
  foto: string;
  tours?: string;
  nota?: string;
}

const LISTA = DATOS as TrasladoCrudo[];
const FOTOS = new Map(destinosConHoteles().map((d) => [d.slug, d.foto]));

function armar(t: TrasladoCrudo): DestinoTraslado {
  const d = DESTINOS_HOTEL[t.d];
  return {
    slug: t.d,
    nombre: d.nombre,
    pais: d.pais,
    aeropuerto: AEROPUERTO[t.d] ?? t.aero,
    cod: t.cod,
    hotel: t.hotel,
    opciones: t.op,
    desde: Math.min(...t.op.map(precioPorPersona)),
    foto: FOTOS.get(t.d) ?? "",
    tours: d.tours,
    nota: NOTAS[t.d],
  };
}

const DESTINOS = LISTA.filter((t) => DESTINOS_HOTEL[t.d] && t.op.length).map(armar);

export const destinosConTraslados = () => DESTINOS;
export const buscarTraslado = (slug: string) => DESTINOS.find((d) => d.slug === slug);

// «Privado · Sedán · Estándar»
export const etiquetaOpcion = (o: OpcionTraslado) => [o.tipo, o.veh, o.cat].filter(Boolean).join(" · ");

export const masBarato = (d: DestinoTraslado, tipo: OpcionTraslado["tipo"]) =>
  d.opciones.filter((o) => o.tipo === tipo).sort((a, b) => a.p - b.p)[0];
