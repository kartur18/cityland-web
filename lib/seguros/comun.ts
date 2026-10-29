import { SEGURO_15_DIAS_SOLES } from "@/lib/datos-viaje-espana";
import type { Fuente } from "@/lib/seguros/tipos";

// Datos compartidos por las páginas de seguros. Todo lo que dice «obligatorio» trae su fuente oficial,
// revisada el 29-oct-2026. Precios: no hay tarifa propia publicada; solo el rango de mercado de Europa.

export const CONSULTADO = "29 de octubre de 2026";

// Plan básico de 15 días para Europa en el mercado peruano (28-oct-2026, mismo dato que las páginas de España).
export const PRECIO_EUROPA_15 = `S/ ${SEGURO_15_DIAS_SOLES.min} a S/ ${SEGURO_15_DIAS_SOLES.max}`;

export const F_CONSULADO_ESPANA: Fuente = {
  texto: "Consulado General de España en Lima: requisitos para peruanos sin visa",
  url: "https://www.exteriores.gob.es/Consulados/lima/es/Comunicacion/Noticias/Paginas/Articulos/20160315_NOT1.aspx",
};
export const F_CODIGO_VISADOS: Fuente = {
  texto: "Código de Visados de la UE, Reglamento (CE) 810/2009, art. 15",
  url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32009R0810",
};
export const F_FRANCIA: Fuente = {
  texto: "France-Visas: lo que te piden al llegar a Francia",
  url: "https://france-visas.gouv.fr/votre-arrivee-en-france",
};
export const F_CURAZAO: Fuente = {
  texto: "Gobierno de los Países Bajos: viajar sin visa al Caribe neerlandés",
  url: "https://www.netherlandsworldwide.nl/caribbean-visa/travel-without-visa",
};
export const F_CUBA: Fuente = {
  texto: "Ministerio de Asuntos Exteriores de España: recomendaciones de viaje a Cuba",
  url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Cuba",
};
export const F_ARGENTINA: Fuente = {
  texto: "Ley de Migraciones 25.871, art. 34 (texto del DNU 366/2025)",
  url: "https://www.argentina.gob.ar/normativa/nacional/ley-25871-92016/actualizacion",
};
export const F_DOMINICANA: Fuente = {
  texto: "Go Dominican Republic: requisitos de viaje",
  url: "https://es.godominicanrepublic.com/planea-tu-viaje/requisitos-de-viaje",
};
export const F_ASSIST_EUROPA: Fuente = {
  texto: "Assist Card Perú: seguros de viaje para Europa",
  url: "https://www.assistcard.com/pe/mejores-seguros-de-viaje-para-europa",
};
export const F_UNIVERSAL: Fuente = {
  texto: "Universal Assistance Perú: planes por días y anuales",
  url: "https://www.universal-assistance.com/pe-la/home",
};

// Lo mínimo que pedimos a cualquier póliza que vendemos.
export const CUBRIR_BASE = [
  "Atención médica por accidente o enfermedad, con hospitalización",
  "Medicamentos y odontología de urgencia",
  "Repatriación sanitaria y de restos al Perú",
  "Central de asistencia 24 horas en español",
  "Todos los días del viaje, incluidos los del vuelo",
];

export const ENLACES_DUDAS = [
  { href: "/seguros/seguro-de-viaje-es-obligatorio", texto: "¿Dónde es obligatorio?" },
  { href: "/seguros/cuanto-cuesta-un-seguro-de-viaje", texto: "¿Cuánto cuesta?" },
  { href: "/seguros/que-cubre-el-seguro-de-viaje", texto: "¿Qué cubre?" },
  { href: "/seguros/como-usar-el-seguro-de-viaje", texto: "Cómo usarlo" },
];
