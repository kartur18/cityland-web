import type { Circuito } from "@/lib/circuitos";

// Piezas comunes de las páginas de «paquete armado»: qué trae el paquete (según su propio «incluye») y los feriados del
// Perú que caen dentro del viaje. Un paquete armado es un viaje ya organizado por el mayorista: fecha fija, vuelo,
// hotel, traslados y visitas listos; el cliente solo elige la salida.

export interface Componentes {
  vuelo: boolean;
  hotel: boolean;
  traslados: boolean;
  tours: boolean;
  todoIncluido: boolean;
  crucero: boolean;
}

export function componentesDe(c: Circuito): Componentes {
  const t = c.incluye.join(" ").toLowerCase();
  return {
    vuelo: c.tipo === "vuelo",
    hotel: /noche|aloj|hotel/.test(t),
    traslados: /traslado/.test(t),
    tours: /visita|tour|excursi|city|panor[aá]mica/.test(t),
    todoIncluido: /todo incluido|all inclusive/.test(t),
    // «equipaje de cabina» no es un crucero: solo cuenta la cabina del barco.
    crucero: c.region === "cruceros" || /noches? de crucero|cabina (interior|exterior|con balc)/.test(t),
  };
}

// «vuelo + hotel + traslados + tours»
export function lineaComponentes(c: Circuito): string {
  const k = componentesDe(c);
  const partes = [
    k.vuelo && `vuelo desde ${c.origen}`,
    k.crucero ? "crucero" : k.hotel && (k.todoIncluido ? "hotel todo incluido" : "hotel"),
    k.traslados && "traslados",
    k.tours && "visitas",
  ].filter(Boolean) as string[];
  return partes.join(" + ");
}

export function etiquetaArmado(c: Circuito): string {
  return c.tipo === "vuelo" ? "Paquete armado" : c.tipo === "crucero" ? "Paquete armado de crucero (sin vuelo)" : "Paquete armado sin vuelo (solo terrestre)";
}

const FERIADOS_PERU: [string, string][] = [
  ["2026-12-08", "la Inmaculada Concepción"],
  ["2026-12-09", "la Batalla de Ayacucho"],
  ["2026-12-25", "Navidad"],
  ["2027-01-01", "Año Nuevo"],
  ["2027-03-25", "Jueves Santo"],
  ["2027-03-26", "Viernes Santo"],
  ["2027-05-01", "el Día del Trabajo"],
  ["2027-06-07", "la Batalla de Arica"],
  ["2027-06-29", "San Pedro y San Pablo"],
  ["2027-07-23", "el Día de la Fuerza Aérea"],
  ["2027-07-28", "Fiestas Patrias"],
  ["2027-07-29", "Fiestas Patrias"],
  ["2027-08-06", "la Batalla de Junín"],
  ["2027-08-30", "Santa Rosa de Lima"],
  ["2027-10-08", "el Combate de Angamos"],
  ["2027-11-01", "Todos los Santos"],
  ["2027-12-08", "la Inmaculada Concepción"],
  ["2027-12-09", "la Batalla de Ayacucho"],
  ["2027-12-25", "Navidad"],
];

// Feriados que caen entre la salida y el regreso: días que no se descuentan de las vacaciones.
export function feriadosEnViaje(desde: string, hasta: string): string[] {
  const nombres = FERIADOS_PERU.filter(([f]) => f >= desde && f <= hasta).map(([, n]) => n);
  return [...new Set(nombres)];
}

export function listaY(xs: string[]): string {
  return xs.length > 1 ? `${xs.slice(0, -1).join(", ")} y ${xs[xs.length - 1]}` : xs.join("");
}

// Google muestra unos 60 caracteres del título: el dato extra y la marca van solo si entran, para que no se corte.
export function tituloSeo(t: string, extra?: string): string {
  const base = extra && `${t} ${extra}`.length <= 54 ? `${t} ${extra}` : t;
  return base.length <= 54 ? `${base} | Cityland` : base;
}
