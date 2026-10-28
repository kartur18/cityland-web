import { circuitosVigentes, precioCityland, type Circuito } from "@/lib/circuitos";
import { MESES, partesFecha, precioSalida, salidasVigentes, type Salida } from "@/lib/salidas";
import { DESTINOS_CARIBE, sinTildes, textoPrograma, type DestinoCaribe } from "@/lib/paquetes-armados/destinos-caribe";
import { DESTINOS_MUNDO } from "@/lib/paquetes-armados/destinos-mundo";
import { DESTINOS_CIUDADES } from "@/lib/paquetes-armados/destinos-ciudades";
import { DESTINOS_COMBINADOS } from "@/lib/paquetes-armados/destinos-combinados";
import { componentesDe } from "@/lib/paquetes-armados/comun";

// Páginas de paquetes armados a la playa: por mes, por estilo de viaje y por hotel. Solo existe una página si hay al
// menos un programa real que la cumpla; cuando ese programa vence, la página desaparece sola.

export type ClasePagina = "mes" | "estilo" | "hotel";

export interface PaginaCaribe {
  slug: string;
  clase: ClasePagina;
  destino: DestinoCaribe;
  // Lo que distingue a la página: nombre del mes, del estilo o del hotel.
  clave: string;
  titulo: string;
  h1: string;
  intro: string;
  programas: Circuito[];
  salidas: Salida[];
  mes?: number;
  hotel?: { nombre: string; categoria: string; ciudad: string };
  estilo?: Estilo;
}

export interface Estilo {
  id: string;
  nombre: string;
  titulo: (d: string) => string;
  intro: (d: string) => string;
  consejo: string;
  filtra: (c: Circuito, salidas: Salida[]) => boolean;
  // Para estilos atados a una fecha (Año Nuevo, Semana Santa, julio): solo se muestran esas salidas.
  fechas?: (s: Salida) => boolean;
}

function hoyLima(): string {
  return new Date(Date.now() - 5 * 3600 * 1000).toISOString().slice(0, 10);
}

const NOMBRES_MES: [RegExp, number][] = [
  [/\benero|\bene\b/, 1],
  [/\bfebrero|\bfeb\b/, 2],
  [/\bmarzo|\bmar\b/, 3],
  [/\babril|\babr\b/, 4],
  [/\bmayo\b|\bmay\b/, 5],
  [/\bjunio|\bjun\b/, 6],
  [/\bjulio|\bjul\b/, 7],
  [/\bagosto|\bago\b/, 8],
  [/\bse(p|t)tiembre|\bsetiembre|\bsep\b|\bset\b/, 9],
  [/\boctubre|\boct\b/, 10],
  [/\bnoviembre|\bnov\b/, 11],
  [/\bdiciembre|\bdic\b/, 12],
];

// Meses (1-12) en que el programa tiene salida dentro de su vigencia.
export function mesesDePrograma(c: Circuito, salidas: Salida[]): Set<number> {
  const propias = salidas.filter((s) => s.mt === c.mt);
  if (propias.length) return new Set(propias.map((s) => partesFecha(s.fecha).mes));
  const t = sinTildes(c.salidas);
  const nombrados = NOMBRES_MES.filter(([re]) => re.test(t)).map(([, n]) => n);
  const hoy = partesFecha(hoyLima());
  const fin = c.vigencia ? partesFecha(c.vigencia) : { mes: hoy.mes, anio: hoy.anio + 1 };
  const rango = (desdeMes: number, desdeAnio: number) => {
    const set = new Set<number>();
    let [mes, anio] = [desdeMes, desdeAnio];
    for (let i = 0; i < 13 && (anio < fin.anio || (anio === fin.anio && mes <= fin.mes)); i++) {
      set.add(mes);
      [mes, anio] = mes === 12 ? [1, anio + 1] : [mes + 1, anio];
    }
    return set;
  };
  if (/diari/.test(t)) return rango(hoy.mes, hoy.anio);
  if (/lunes|martes|miercoles|jueves|viernes|sabado|domingo/.test(t)) {
    if (!nombrados.length) return rango(hoy.mes, hoy.anio);
    const primero = nombrados[0];
    return rango(primero, primero >= hoy.mes ? hoy.anio : hoy.anio + 1);
  }
  return new Set(nombrados);
}

const enMes = (salidas: Salida[], c: Circuito, mes: number) => mesesDePrograma(c, salidas).has(mes);

export const ESTILOS: Estilo[] = [
  {
    id: "todo-incluido",
    nombre: "todo incluido",
    titulo: (d) => `Paquete armado a ${d} todo incluido`,
    intro: (d) =>
      `Paquetes armados a ${d} con hotel todo incluido: comidas, snacks y bebidas (también con alcohol) dentro del resort, más el vuelo y los traslados.`,
    consejo: "En un todo incluido casi no gastas dentro del hotel: lleva dinero solo para tours opcionales, propinas y compras.",
    filtra: (c) => componentesDe(c).todoIncluido,
  },
  {
    id: "con-vuelo-desde-lima",
    nombre: "con vuelo desde Lima",
    titulo: (d) => `Paquete armado a ${d} con vuelo desde Lima`,
    intro: (d) => `Paquetes armados a ${d} que ya incluyen el boleto aéreo de ida y vuelta desde Lima, el hotel y los traslados.`,
    consejo: "Revisa el equipaje incluido: varios programas solo traen maleta de cabina de 10 kg.",
    filtra: (c) => c.tipo === "vuelo" && c.origen === "Lima",
  },
  {
    id: "desde-arequipa",
    nombre: "desde Arequipa",
    titulo: (d) => `Paquete armado a ${d} desde Arequipa`,
    intro: (d) => `Paquetes armados a ${d} con salida desde Arequipa: el vuelo Arequipa – Lima y la conexión internacional ya vienen incluidos.`,
    consejo: "Al regreso, algunos programas pasan una noche en Lima antes del vuelo a Arequipa; revisa el itinerario.",
    filtra: (c) => c.origen === "Arequipa",
  },
  {
    id: "5-dias-4-noches",
    nombre: "5 días y 4 noches",
    titulo: (d) => `Paquete armado a ${d} 5 días y 4 noches`,
    intro: (d) => `Paquetes armados a ${d} de 5 días y 4 noches: la duración justa para una escapada sin pedir muchas vacaciones.`,
    consejo: "Con 5 días puedes combinar playa y una excursión de día completo sin correr.",
    filtra: (c) => c.dias === 5 && c.noches === 4,
  },
  {
    id: "ano-nuevo",
    nombre: "Año Nuevo",
    titulo: (d) => `Paquete armado a ${d} para Año Nuevo`,
    intro: (d) => `Recibe el Año Nuevo en ${d} con un paquete armado: fecha fija alrededor del 31 de diciembre, vuelo, hotel y traslados listos.`,
    consejo: "La cena especial de Año Nuevo casi nunca está incluida: pregunta por ella al separar tu cupo. Es la fecha que se agota primero.",
    fechas: (s) => /-12-(2[0-9]|3[01])$/.test(s.fecha),
    filtra: (c, s) => /ano nuevo/.test(sinTildes(c.nombre)) || s.some((x) => x.mt === c.mt && /-12-(2[6-9]|3[01])$/.test(x.fecha)),
  },
  {
    id: "semana-santa",
    nombre: "Semana Santa",
    titulo: (d) => `Paquete armado a ${d} en Semana Santa 2027`,
    intro: (d) => `Aprovecha el feriado largo de Semana Santa (jueves 25 y viernes 26 de marzo de 2027) con un paquete armado a ${d}.`,
    consejo: "Semana Santa es temporada alta: los cupos se separan con meses de anticipación.",
    fechas: (s) => s.fecha >= "2027-03-18" && s.fecha <= "2027-03-28",
    filtra: (c, s) =>
      c.tipo === "vuelo" &&
      (s.some((x) => x.mt === c.mt && x.fecha >= "2027-03-18" && x.fecha <= "2027-03-28") || (!s.some((x) => x.mt === c.mt) && enMes(s, c, 3))),
  },
  {
    id: "vacaciones-de-julio",
    nombre: "vacaciones de julio",
    titulo: (d) => `Paquete armado a ${d} en vacaciones de julio`,
    intro: (d) => `Paquetes armados a ${d} con salida en julio, para aprovechar Fiestas Patrias y las vacaciones de medio año de los chicos.`,
    consejo: "Julio es temporada alta en el Perú: separa con tiempo, sobre todo si viajas en familia.",
    fechas: (s) => partesFecha(s.fecha).mes === 7,
    filtra: (c, s) => enMes(s, c, 7),
  },
  {
    id: "en-familia",
    nombre: "en familia",
    titulo: (d) => `Paquete armado a ${d} en familia`,
    intro: (d) =>
      `Paquetes armados a ${d} pensados para viajar con niños: resorts todo incluido con piscinas, actividades y, en algunos casos, hoteles temáticos como Nickelodeon.`,
    consejo: "Los bebés de 0 a 1 año suelen pagar un porcentaje mínimo; los niños tienen tarifa propia según el hotel. Pídela al cotizar.",
    filtra: (c) => componentesDe(c).todoIncluido && c.tipo === "vuelo",
  },
  {
    id: "luna-de-miel",
    nombre: "luna de miel",
    titulo: (d) => `Paquete armado de luna de miel a ${d}`,
    intro: (d) => `Paquetes armados a ${d} para tu luna de miel: vuelo, hotel frente al mar y traslados listos para que solo disfruten.`,
    consejo: "Avisa que es tu luna de miel al reservar: muchos hoteles dan un detalle de bienvenida a los recién casados.",
    filtra: (c) => c.tipo === "vuelo" && !/ano nuevo/.test(sinTildes(c.nombre)),
  },
  {
    id: "con-guia-en-espanol",
    nombre: "con guía en español",
    titulo: (d) => `Paquete armado a ${d} con guía en español`,
    intro: (d) =>
      `Paquetes armados a ${d} con guía de habla hispana durante el recorrido: no necesitas hablar otro idioma para entender cada visita.`,
    consejo: "Las propinas del guía y del chofer casi nunca están incluidas; revisa el «no incluye» para saber cuánto separar.",
    filtra: (c) => /gu[ií]a.{0,40}(habla hispana|espa[nñ]ol)|habla hispana/i.test(c.incluye.join(" ")),
  },
  {
    id: "sin-vuelo",
    nombre: "sin vuelo (solo terrestre)",
    titulo: (d) => `Paquete armado a ${d} sin vuelo`,
    intro: (d) => `Paquetes armados a ${d} solo terrestres: hotel, traslados y visitas, para quienes ya tienen su pasaje o usan millas.`,
    consejo: "Si compras el vuelo por tu cuenta, que llegue el mismo día que empieza el programa para no perder el traslado.",
    filtra: (c) => c.tipo === "terrestre",
  },
  {
    id: "barato",
    nombre: "barato",
    titulo: (d) => `Paquete armado barato a ${d}`,
    intro: (d) => `Los paquetes armados más económicos a ${d}, ordenados de menor a mayor precio, con lo que incluye cada uno.`,
    consejo: "Las fechas fuera de vacaciones y feriados suelen ser las más baratas; compara las salidas del mismo programa.",
    filtra: () => true,
  },
];

// Las filas de hoteles del mayorista vienen desordenadas: [ciudad, hotel, categoría], [barco, cabina] o [hotel, categoría].
interface FilaHotel {
  ciudad: string;
  nombre: string;
  categoria: string;
}
function filasHotel(c: Circuito): FilaHotel[] {
  const filas: FilaHotel[] = [];
  for (const h of c.hoteles) {
    const fila = h.length >= 3 ? h : /\*|interior|cabina/i.test(h[1] ?? "") ? ["", h[0], h[1]] : [h[0], h[1] ?? "", ""];
    let [ciudad, nombre] = fila;
    const categoria = fila[2];
    if (/^crucero$/i.test(ciudad) || /^(msc|costa)\b/i.test(nombre)) {
      ciudad = "Crucero";
      nombre = nombre.replace(/^MSC Barco /i, "MSC ").replace(/^Costa( Cruceros)?\s*-\s*/i, "Costa ");
    }
    const limpio = nombre
      .replace(/\s+o\s+similar( categor[ií]a)?\.?$/i, "")
      .replace(/&amp;/g, "&")
      .replace(/\.$/, "")
      .replace(/\bDucth\b/, "Dutch")
      .replace(/\bwind creek\b/, "Wind Creek")
      .replace(/\bresort$/, "Resort")
      .trim();
    if (!limpio || /^hotel todo incluido/i.test(limpio)) continue;
    for (const parte of limpio.split(/\s*\/\s*|,\s+/)) filas.push({ ciudad, nombre: parte.trim(), categoria: (categoria ?? "").replace(/\.$/, "") });
  }
  return filas;
}

function slugTexto(s: string): string {
  return sinTildes(s)
    .replace(/^hotel\s+/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Ciudad del hotel que corresponde a cada destino (un programa Cartagena + Panamá no crea «Cartagena con hotel Victoria»).
const CIUDAD_HOTEL: Record<string, RegExp> = {
  "punta-cana": /punta cana/,
  aruba: /aruba|oranjestad/,
  jamaica: /montego|ocho rios|jamaica|negril/,
  cancun: /cancun|riviera maya/,
  cartagena: /cartagena/,
  "san-andres": /san andres/,
  "isla-margarita": /margarita|^$/,
  "crucero-por-el-caribe": /^crucero$/,
};

// Una tabla de más de 24 fechas ya no se lee; el resto está en el calendario de /salidas.
const MAX_SALIDAS = 24;

// Viajes de fe o de recorrido largo por varios países: no se venden como luna de miel.
const SIN_LUNA_DE_MIEL = new Set([
  "tierra-santa",
  "centroamerica",
  "india",
  "petra",
  "wadi-rum",
  "mar-muerto",
  "amman",
  "delhi",
  "jaipur",
  "taj-mahal",
  "katmandu",
]);

let cache: { dia: string; paginas: PaginaCaribe[] } | null = null;

export function paginasCaribe(): PaginaCaribe[] {
  const hoy = hoyLima();
  if (cache?.dia === hoy) return cache.paginas;
  const todos = circuitosVigentes();
  const salidas = salidasVigentes();
  const paginas: PaginaCaribe[] = [];
  for (const d of [...DESTINOS_CARIBE, ...DESTINOS_MUNDO, ...DESTINOS_CIUDADES, ...DESTINOS_COMBINADOS]) {
    const progs = todos.filter((c) => d.pertenece(c, textoPrograma(c))).sort((a, b) => a.desde - b.desde);
    if (!progs.length || progs.length < (d.minimoProgramas ?? 1)) continue;
    // Una combinación de países con un solo programa lleva una sola página: más serían copias del mismo viaje.
    const unaSola = d.pais === "combinado" && progs.length === 1;
    const salidasDe = (ps: Circuito[]) => salidas.filter((s) => ps.some((p) => p.mt === s.mt));
    for (let mes = 1; mes <= 12 && !unaSola; mes++) {
      const ps = progs.filter((c) => enMes(salidas, c, mes));
      if (!ps.length) continue;
      const nombreMes = MESES[mes - 1];
      paginas.push({
        slug: `${d.id}-en-${nombreMes}`,
        clase: "mes",
        destino: d,
        clave: nombreMes,
        titulo: `Paquete armado a ${d.nombre} en ${nombreMes}`,
        h1: `Paquetes armados a ${d.nombre} en ${nombreMes}`,
        intro: `Estos son los paquetes armados a ${d.nombre} con salida en ${nombreMes}: fecha fija, hotel y traslados ya reservados.`,
        programas: ps,
        salidas: salidasDe(ps).filter((s) => partesFecha(s.fecha).mes === mes),
        mes,
      });
    }
    let estilosHechos = 0;
    for (const e of ESTILOS) {
      if ((d.soloEstilos && !d.soloEstilos.includes(e.id)) || (unaSola && estilosHechos > 0)) continue;
      const ps = progs.filter((c) => e.filtra(c, salidas));
      // «Barato» solo tiene sentido si hay con qué comparar.
      if (!ps.length || (e.id === "barato" && progs.length < 3) || (e.id === "luna-de-miel" && SIN_LUNA_DE_MIEL.has(d.id))) continue;
      paginas.push({
        slug: e.id === "luna-de-miel" ? `luna-de-miel-en-${d.id}` : `${d.id}-${e.id}`,
        clase: "estilo",
        destino: d,
        clave: e.nombre,
        titulo: e.titulo(d.nombre),
        h1: e.titulo(d.nombre).replace("Paquete armado", "Paquetes armados"),
        intro: e.intro(d.nombre),
        programas: e.id === "barato" ? ps.slice(0, 8) : ps,
        salidas: e.fechas
          ? salidasDe(ps).filter(e.fechas)
          : e.id === "barato"
            ? [...salidasDe(ps)].sort((a, b) => a.precio - b.precio).slice(0, MAX_SALIDAS)
            : salidasDe(ps).slice(0, MAX_SALIDAS),
        estilo: e,
      });
      estilosHechos++;
    }
    const ciudadOk = CIUDAD_HOTEL[d.id];
    if (!ciudadOk) continue;
    const hoteles = new Map<string, { nombre: string; categoria: string; ciudad: string; ps: Circuito[] }>();
    for (const c of progs) {
      for (const f of filasHotel(c)) {
        if (!ciudadOk.test(sinTildes(f.ciudad))) continue;
        const k = slugTexto(f.nombre);
        if (k.length < 4) continue;
        const h = hoteles.get(k) ?? { nombre: f.nombre, categoria: f.categoria, ciudad: f.ciudad, ps: [] };
        if (!h.ps.includes(c)) h.ps.push(c);
        hoteles.set(k, h);
      }
    }
    for (const [k, h] of hoteles) {
      const esBarco = d.id === "crucero-por-el-caribe";
      const titulo = esBarco
        ? `Crucero por el Caribe en el ${h.nombre}: paquete armado`
        : `Paquete armado a ${d.nombre} con hotel ${h.nombre.replace(/^hotel\s+/i, "")}`;
      paginas.push({
        slug: `${d.id}-${esBarco ? "barco" : "hotel"}-${k}`,
        clase: "hotel",
        destino: d,
        clave: h.nombre,
        titulo,
        h1: titulo,
        intro: esBarco
          ? `Paquetes armados por el Caribe a bordo del ${h.nombre}, con vuelo desde Lima, cabina y comidas a bordo.`
          : `Paquetes armados a ${d.nombre} que trabajan con el hotel ${h.nombre}${h.categoria ? ` (${h.categoria})` : ""} o uno similar de la misma categoría.`,
        programas: h.ps,
        salidas: salidasDe(h.ps),
        hotel: { nombre: h.nombre, categoria: h.categoria, ciudad: h.ciudad },
      });
    }
  }
  cache = { dia: hoy, paginas };
  return paginas;
}

export function buscarPaginaCaribe(slug: string): PaginaCaribe | undefined {
  return paginasCaribe().find((p) => p.slug === slug);
}

// «Desde» de una página: si el programa tiene salidas en la página (p. ej. las de ese mes), manda el precio de esas
// fechas y no el del año. Si hay programas con vuelo, el «desde» es el de esos: un terrestre barato no se compara.
export function desdePagina(p: PaginaCaribe, tipo: "auto" | "vuelo" | "sin-vuelo" = "auto"): number {
  const conVuelo = p.programas.filter((c) => c.tipo === "vuelo");
  const lista = tipo === "vuelo" ? conVuelo : tipo === "sin-vuelo" ? p.programas.filter((c) => c.tipo !== "vuelo") : conVuelo.length ? conVuelo : p.programas;
  if (!lista.length) return 0;
  return Math.min(
    ...lista.map((c) => {
      const propias = p.salidas.filter((s) => s.mt === c.mt);
      return propias.length ? Math.min(...propias.map(precioSalida)) : precioCityland(c);
    }),
  );
}
