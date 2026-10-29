import { PRECIO_IDA_VUELTA_MADRID_DESDE } from "@/components/constantes";

// Títulos escritos a mano: páginas cuyo título automático salía igual a otro (al recortar a 60 caracteres se perdía
// la ciudad, el mes o la modalidad) y páginas clave que deben usar las palabras que la gente busca. 24-oct-2026.
export const TITULOS_SEO_UNICOS: Readonly<Record<string, string>> = {
  "/vuelos/lima-madrid": `Pasajes Lima–Madrid ida y vuelta desde $${PRECIO_IDA_VUELTA_MADRID_DESDE.toLocaleString("en-US")} | Cityland`,
  "/vuelos/lima-barcelona": "Pasajes Lima–Barcelona ida y vuelta | Cityland",
  "/vuelos/lima-valencia": "Pasajes Lima–Valencia ida y vuelta | Cityland",
  "/vuelos/lima-malaga": "Pasajes Lima–Málaga ida y vuelta | Cityland",
  "/vuelos/lima-sevilla": "Pasajes Lima–Sevilla ida y vuelta | Cityland",
  "/vuelos/lima-bilbao": "Pasajes Lima–Bilbao ida y vuelta | Cityland",
  "/vuelos/madrid-lima": "Pasajes Madrid–Lima: viaja a Perú | Cityland",
  "/vuelos/barcelona-lima": "Pasajes Barcelona–Lima: viaja a Perú | Cityland",
  "/vuelos/lima-cusco": "Pasajes Lima–Cusco baratos ida y vuelta | Cityland",
  "/vuelos/lima-arequipa": "Pasajes Lima–Arequipa baratos ida y vuelta | Cityland",
  "/vuelos/lima-piura": "Pasajes Lima–Piura baratos ida y vuelta | Cityland",
  "/vuelos/lima-tarapoto": "Pasajes Lima–Tarapoto baratos ida y vuelta | Cityland",
  "/vuelos/lima-iquitos": "Pasajes Lima–Iquitos baratos ida y vuelta | Cityland",
  "/vuelos/lima-puno": "Pasajes Lima–Puno (Juliaca) baratos | Cityland",

  "/paquetes-migratorios/desde-chiclayo-a-madrid": "Paquete migratorio a Madrid desde Chiclayo | Cityland",
  "/paquetes-migratorios/desde-tacna-a-madrid": "Paquete migratorio a Madrid desde Tacna | Cityland",
  "/paquetes-migratorios/desde-miraflores-a-madrid": "Paquete migratorio a Madrid desde Miraflores | Cityland",
  "/paquetes-migratorios/desde-ate-vitarte-a-milan": "Paquete migratorio a Milán desde Ate Vitarte | Cityland",
  "/paquetes-migratorios/desde-arequipa-a-milan": "Paquete migratorio a Milán desde Arequipa | Cityland",
  "/paquetes-migratorios/desde-callao-a-milan": "Paquete migratorio a Milán desde el Callao | Cityland",
  "/paquetes-migratorios/guia-madrid-como-funciona-boleto-de-regreso-para-migraciones":
    "Boleto de regreso a Madrid: ¿es ida y vuelta? | Cityland",
  "/paquetes-migratorios/guia-milan-como-funciona-boleto-de-regreso-para-migraciones":
    "Boleto de regreso a Milán: ¿es ida y vuelta? | Cityland",

  "/madrid/plan-estadia-7-dias-6-noches-vuelo-ida-vuelta-madrid-separa-con-50-por-ciento":
    `Ida y vuelta Lima–Madrid, 7 días, desde $${PRECIO_IDA_VUELTA_MADRID_DESDE.toLocaleString("en-US")} | Cityland`,
  "/madrid/plan-estadia-90-dias-maximo-schengen-vuelo-ida-vuelta-madrid-pago-bcp-bbva-interbank-yape":
    "Ida y vuelta Lima–Madrid por 90 días | Cityland",
  "/madrid/plan-salida-abril-semana-santa-madrid-vuelo-ida-vuelta-madrid-pago-bcp-bbva-interbank-yape":
    "Ida y vuelta Lima–Madrid en Semana Santa | Cityland",
  "/madrid/plan-estadia-9-dias-8-noches-boe-paquete-migratorio-madrid-checkin-hecho-por-asesor":
    "Paquete migratorio a Madrid, 9 días, desde $870 | Cityland",
  "/madrid/plan-estadia-30-dias-un-mes-paquete-migratorio-madrid-pago-bcp-bbva-interbank-yape":
    "Paquete migratorio a Madrid por un mes | Cityland",
  "/madrid/plan-estadia-60-dias-dos-meses-pasaje-madrid-2-maletas-23kg-separa-con-50-por-ciento":
    "Vuelo a Madrid con 2 maletas, 60 días | Cityland",
  "/madrid/plan-salida-octubre-madrid-barajas-pasaje-madrid-2-maletas-23kg-atencion-sede-los-olivos":
    "Vuelo a Madrid con 2 maletas en octubre | Cityland",
  "/madrid/plan-franquicia-1-maleta-23kg-vuelo-madrid-a-lima-retorno-emision-inmediata-pnr":
    "Pasaje Madrid–Lima con 1 maleta desde $730 | Cityland",
  "/madrid/plan-franquicia-2-maletas-23kg-vuelo-madrid-a-lima-retorno-separa-con-50-por-ciento":
    "Pasaje Madrid–Lima con 2 maletas desde $730 | Cityland",
  "/madrid/plan-ingreso-terminal-t4-barajas-vuelo-madrid-a-lima-retorno-separa-con-50-por-ciento":
    "Pasaje Madrid–Lima desde la T4 de Barajas | Cityland",
  "/madrid/plan-ingreso-terminal-t1-barajas-vuelo-madrid-a-lima-retorno-atencion-sede-los-olivos":
    "Pasaje Madrid–Lima desde la T1 de Barajas | Cityland",
  "/madrid/servicio-paquete-solo-ida-migratorio-lima-madrid-mayo-preventa-garantizada":
    "Paquete migratorio Lima–Madrid en mayo | Cityland",
  "/madrid/servicio-paquete-solo-ida-migratorio-lima-madrid-marzo-sede-los-olivos":
    "Paquete migratorio Lima–Madrid en marzo | Cityland",

  "/ofertas/oferta-tour-iquitos-rio-amazonas-lodge": "Oferta: tour a Iquitos y lodge en el Amazonas | Cityland",
  "/ofertas/tour-grupal-iquitos-rio-amazonas-lodge": "Tour grupal a Iquitos y lodge en el Amazonas | Cityland",
  "/ofertas/servicio-ejecutivo-viajes-de-incentivos-para-empresas": "Viajes de incentivos: servicio ejecutivo | Cityland",
  "/ofertas/corporativo-viajes-de-incentivos-para-empresas": "Viajes corporativos de incentivos | Cityland",
  "/ofertas/occidental-caribe-punta-cana-reserva-en-cuotas": "Occidental Caribe Punta Cana en cuotas | Cityland",
  "/ofertas/occidental-caribe-punta-cana-paquete-todo-incluido": "Occidental Caribe Punta Cana todo incluido | Cityland",
  "/ofertas/hard-rock-hotel-riviera-maya-paquete-todo-incluido": "Hard Rock Riviera Maya todo incluido | Cityland",
  "/ofertas/hard-rock-hotel-riviera-maya-reserva-en-cuotas": "Hard Rock Riviera Maya en cuotas | Cityland",
  "/ofertas/zuana-beach-resort-santa-marta-reserva-en-cuotas": "Zuana Beach Santa Marta en cuotas | Cityland",
  "/ofertas/zuana-beach-resort-santa-marta-paquete-todo-incluido": "Zuana Beach Santa Marta todo incluido | Cityland",
  "/ofertas/estadia-hotel-zuana-beach-santa-marta-5-dias-4-noches-todo-incluido":
    "Zuana Beach Santa Marta, 5 días y 4 noches | Cityland",
  "/ofertas/estadia-hotel-zuana-beach-santa-marta-reserva-en-cuotas-sin-intereses":
    "Zuana Beach Santa Marta en cuotas sin intereses | Cityland",
  "/ofertas/crucero-caribe-desde-cartagena-atencion-los-olivos": "Crucero Caribe desde Cartagena · Los Olivos | Cityland",
  "/ofertas/crucero-caribe-desde-cartagena-salida-desde-lima": "Crucero Caribe desde Cartagena, salida de Lima | Cityland",
  "/ofertas/crucero-caribe-desde-cartagena-temporada-2026": "Crucero Caribe desde Cartagena 2026 | Cityland",
  "/ofertas/crucero-caribe-sin-visa-panama-reserva-en-cuotas": "Crucero Caribe sin visa desde Panamá en cuotas | Cityland",
  "/ofertas/crucero-caribe-sin-visa-panama-temporada-2026": "Crucero Caribe sin visa desde Panamá 2026 | Cityland",
  "/ofertas/viaje-promocion-secundaria-cusco-salida-desde-lima": "Promoción de secundaria a Cusco desde Lima | Cityland",
  "/ofertas/viaje-promocion-secundaria-cusco-programa-oficial": "Promoción de secundaria a Cusco: programa | Cityland",
  "/ofertas/viaje-incentivos-empresas-cusco-programa-oficial": "Incentivos para empresas en Cusco: programa | Cityland",
  "/ofertas/viaje-incentivos-empresas-cusco-salida-desde-lima": "Incentivos para empresas en Cusco desde Lima | Cityland",
  "/ofertas/viaje-promocion-escolar-tarapoto-cotizacion-inmediata": "Promoción escolar a Tarapoto: cotiza hoy | Cityland",
  "/ofertas/viaje-promocion-escolar-tarapoto-reserva-en-cuotas": "Promoción escolar a Tarapoto en cuotas | Cityland",
  "/ofertas/viaje-delegaciones-deportivas-torneos-reserva-en-cuotas":
    "Viajes para delegaciones deportivas en cuotas | Cityland",
  "/ofertas/viaje-delegaciones-deportivas-torneos-temporada-2026": "Viajes para delegaciones deportivas 2026 | Cityland",
  "/ofertas/viaje-delegaciones-deportivas-torneos-programa-oficial":
    "Delegaciones deportivas a torneos: programa | Cityland",
  "/ofertas/ano-nuevo-reveillon-rio-de-janeiro-programa-oficial": "Año Nuevo en Río de Janeiro: programa | Cityland",
  "/ofertas/ano-nuevo-reveillon-rio-de-janeiro-salida-desde-lima": "Año Nuevo en Río de Janeiro desde Lima | Cityland",
  "/ofertas/peregrinacion-fatima-lourdes-madrid-cotizacion-inmediata":
    "Peregrinación a Fátima y Lourdes: cotiza hoy | Cityland",
  "/ofertas/peregrinacion-fatima-lourdes-madrid-salida-desde-lima":
    "Peregrinación a Fátima y Lourdes desde Lima | Cityland",
  "/ofertas/estadia-hotel-decameron-punta-sal-peru-aniversario-y-bodas":
    "Decameron Punta Sal para aniversarios y bodas | Cityland",
  "/ofertas/estadia-hotel-decameron-punta-sal-peru-temporada-verano-2026": "Decameron Punta Sal, verano 2026 | Cityland",
  "/ofertas/estadia-hotel-doubletree-hilton-paracas-tarifa-grupos-y-amigos":
    "DoubleTree Paracas para grupos y amigos | Cityland",
  "/ofertas/estadia-hotel-doubletree-hilton-paracas-preventa-con-50-por-ciento":
    "DoubleTree Paracas: separa con el 50% | Cityland",
  "/ofertas/rutas-peru-churin-banos-termales-huancahuasi-feriado-noviembre-todos-los-santos-preventa-con-50-por-ciento":
    "Churín y Huancahuasi: feriado de noviembre | Cityland",
  "/ofertas/rutas-peru-churin-banos-termales-huancahuasi-feriado-largo-diciembre-preventa-con-50-por-ciento":
    "Churín y Huancahuasi: feriado de diciembre | Cityland",
  "/ofertas/crucero-brasil-uruguay-argentina-temporada-2026": "Crucero Brasil, Uruguay y Argentina 2026 | Cityland",
  "/ofertas/crucero-brasil-uruguay-argentina-cotizacion-inmediata":
    "Crucero Brasil, Uruguay y Argentina: cotiza | Cityland",
  "/ofertas/crucero-brasil-uruguay-argentina-salida-desde-lima":
    "Crucero Brasil, Uruguay y Argentina desde Lima | Cityland",

  "/destinos/europa-clasica": "Europa clásica: Madrid, París y Roma | Cityland",
  "/destinos/madrid-paris-roma-17-dias": "Madrid, París y Roma en 17 días | Cityland",
};

export function tituloSeoUnico(ruta: string, tituloCalculado: string): string {
  return TITULOS_SEO_UNICOS[ruta] ?? tituloCalculado;
}

// Variantes del mismo producto que salían con el mismo título (1,163 páginas el 29-oct-2026): se les suma lo que las
// distingue según su slug. El orden importa: primero la fecha, luego la duración, el público y la forma de pago.
const ETIQUETAS_SLUG: readonly (readonly [RegExp, string | ((m: RegExpMatchArray) => string)])[] = [
  [/semana-santa/, "Semana Santa"],
  [/fiestas-patrias/, "Fiestas Patrias"],
  [/ano-nuevo|fin-de-ano/, "Año Nuevo"],
  [/navidad/, "Navidad"],
  [/todos-los-santos/, "feriado de noviembre"],
  [/santa-rosa/, "feriado de agosto"],
  [/angamos/, "feriado de octubre"],
  [/san-pedro/, "feriado de junio"],
  [/1-de-mayo/, "feriado de mayo"],
  [/largo-diciembre/, "feriado de diciembre"],
  [/vacaciones-escolares-(mayo|julio|octubre)/, (m) => `vacaciones de ${m[1]}`],
  [/vacaciones-escolares/, "vacaciones escolares"],
  [/verano/, "verano"],
  [/temporada-baja/, "temporada baja"],
  [/(?:temporada|salidas-confirmadas)-(202\d)/, (m) => `salidas ${m[1]}`],
  [/(?:^|-)(enero|febrero|marzo|abril|mayo|junio|julio|agosto|setiembre|septiembre|octubre|noviembre|diciembre)(?:-|$)/, (m) => `en ${m[1]}`],
  [/(?:^|-)(\d{1,2})-dias/, (m) => `${m[1]} días`],
  [/-(\d{1,2})-(\d{1,2})(?:-|$)/, (m) => (+m[1] === +m[2] + 1 ? `${m[1]} días` : "")],
  [/luna-de-miel/, "luna de miel"],
  [/aniversario/, "aniversario"],
  [/familia|ninos/, "en familia"],
  [/grupos|amigos|delegaciones/, "en grupo"],
  [/mayores/, "adultos mayores"],
  [/corporativo|empresas/, "empresas"],
  [/vuelo-directo/, "vuelo directo"],
  [/ida-y-vuelta/, "ida y vuelta"],
  [/flexible/, "tarifa flexible"],
  [/todo-incluido/, "todo incluido"],
  [/vista-al-mar/, "vista al mar"],
  [/vuelo-mas-hotel|vuelo-incluido|vuelo-hotel/, "con vuelo"],
  [/traslados/, "con traslados"],
  [/seguro/, "con seguro"],
  [/2-maletas/, "2 maletas"],
  [/1-maleta/, "1 maleta"],
  [/cuotas/, "en cuotas"],
  [/preventa|50-inicial|50-por-ciento/, "separa con 50 %"],
  [/emision-inmediata|pnr|voucher/, "emisión inmediata"],
  [/cotizacion-inmediata/, "cotiza al instante"],
  [/bcp|yape/, "paga con Yape o banco"],
  [/los-olivos/, "sede Los Olivos"],
  [/checkin/, "check-in incluido"],
  [/escapada/, "escapada"],
  [/todo-organizado/, "todo organizado"],
  [/vip/, "VIP"],
  [/salida-desde-lima/, "salida de Lima"],
  [/oficial/, "programa oficial"],
];

const sinTildes = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function etiquetasDe(ruta: string, titulo: string): string[] {
  const slug = ruta.split("/").pop() ?? "";
  const t = sinTildes(titulo);
  const out: string[] = [];
  for (const [re, et] of ETIQUETAS_SLUG) {
    const m = slug.match(re);
    if (!m) continue;
    const e = typeof et === "string" ? et : et(m);
    if (e && !t.includes(sinTildes(e)) && !out.includes(e)) out.push(e);
  }
  return out;
}

// La etiqueta va antes del precio: si Google corta el título, lo que se pierde es la marca y no lo que distingue.
function conEtiquetas(titulo: string, etiquetas: string[]): string {
  if (!etiquetas.length) return titulo;
  const base = titulo.replace(/\s*\|\s*Cityland(?: Travel)?\s*$/, "");
  const extra = ` · ${etiquetas.join(" · ")}`;
  const m = base.match(/^(.*)(\s+desde\s+(?:US)?\$.*)$/i);
  const largo = m ? `${m[1]}${extra}${m[2]}` : `${base}${extra}`;
  return largo.length <= 54 ? `${largo} | Cityland` : largo;
}

// Recibe todos los títulos de una familia de páginas y devuelve, por ruta, uno que no se repita: a cada grupo de
// iguales le suma 1, 2 o 3 etiquetas de su slug, lo justo para que se distingan.
export function titulosSinRepetir(items: readonly { ruta: string; titulo: string }[]): Map<string, string> {
  const grupos = new Map<string, { ruta: string; titulo: string }[]>();
  for (const x of items) grupos.set(x.titulo, [...(grupos.get(x.titulo) ?? []), x]);
  const out = new Map<string, string>();
  for (const [titulo, g] of grupos) {
    if (g.length === 1) {
      out.set(g[0].ruta, titulo);
      continue;
    }
    const etiquetas = g.map((x) => etiquetasDe(x.ruta, titulo));
    let elegidos = g.map(() => titulo);
    for (let k = 1; k <= 3; k++) {
      elegidos = g.map((_, i) => conEtiquetas(titulo, etiquetas[i].slice(0, k)));
      if (new Set(elegidos).size === g.length) break;
    }
    g.forEach((x, i) => out.set(x.ruta, elegidos[i]));
  }
  return out;
}
