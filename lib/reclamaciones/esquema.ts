// Validación de la Hoja de Reclamación. Sin dependencias: la usan el formulario (navegador) y la ruta POST (servidor).
// La web no tiene zod, así que la validación es manual y estricta; cualquier cambio de límites se hace aquí una sola vez.

export const TIPOS_DOCUMENTO = ["DNI", "CE", "PASAPORTE"] as const;
export const TIPOS_BIEN = ["PRODUCTO", "SERVICIO"] as const;
export const MONEDAS = ["PEN", "USD"] as const;
export const TIPOS_RECLAMO = ["RECLAMO", "QUEJA"] as const;

export type TipoDocumento = (typeof TIPOS_DOCUMENTO)[number];

export const LIMITES = {
  nombre: 120,
  documento: 12,
  domicilio: 200,
  telefono: 20,
  correo: 120,
  descripcionBien: 400,
  detalle: 2000,
  pedido: 1000,
  detalleMin: 20,
  pedidoMin: 5,
  montoMax: 9_999_999,
  cuerpoMaxBytes: 20_000,
} as const;

export type DatosReclamo = {
  nombre: string;
  tipoDocumento: TipoDocumento;
  documento: string;
  domicilio: string;
  telefono: string;
  correo: string;
  esMenor: boolean;
  tutorNombre: string;
  tutorTipoDocumento: TipoDocumento;
  tutorDocumento: string;
  tipoBien: (typeof TIPOS_BIEN)[number];
  descripcionBien: string;
  moneda: (typeof MONEDAS)[number];
  monto: string;
  tipoReclamo: (typeof TIPOS_RECLAMO)[number];
  detalle: string;
  pedido: string;
  aceptacion: boolean;
};

export type ErroresReclamo = Partial<Record<keyof DatosReclamo, string>>;

export const RECLAMO_VACIO: DatosReclamo = {
  nombre: "",
  tipoDocumento: "DNI",
  documento: "",
  domicilio: "",
  telefono: "",
  correo: "",
  esMenor: false,
  tutorNombre: "",
  tutorTipoDocumento: "DNI",
  tutorDocumento: "",
  tipoBien: "SERVICIO",
  descripcionBien: "",
  moneda: "PEN",
  monto: "",
  tipoReclamo: "RECLAMO",
  detalle: "",
  pedido: "",
  aceptacion: false,
};

// Quita caracteres de control (salvo salto de línea y tabulación) y recorta; evita basura en el correo.
export function limpiarTexto(valor: unknown, max: number, multilinea = false): string {
  if (typeof valor !== "string") return "";
  let t = valor.replace(multilinea ? /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g : /[\u0000-\u001f\u007f]/g, " ");
  t = multilinea ? t.replace(/\r\n?/g, "\n").replace(/\n{3,}/g, "\n\n") : t.replace(/\s+/g, " ");
  return t.trim().slice(0, max);
}

const RE_CORREO = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;
const RE_TELEFONO = /^\+?[0-9][0-9 ()-]{5,18}[0-9]$/;
const RE_MONTO = /^\d{1,7}([.,]\d{1,2})?$/;

function validarDocumento(tipo: TipoDocumento, doc: string): string | null {
  if (!doc) return "Ingresa el número de documento.";
  if (tipo === "DNI") return /^\d{8}$/.test(doc) ? null : "El DNI tiene 8 dígitos.";
  if (tipo === "CE") return /^[A-Za-z0-9]{9,12}$/.test(doc) ? null : "El carné de extranjería tiene entre 9 y 12 caracteres.";
  return /^[A-Za-z0-9]{6,12}$/.test(doc) ? null : "El pasaporte tiene entre 6 y 12 caracteres.";
}

export function montoANumero(monto: string): number | null {
  const t = monto.trim();
  if (!t) return null;
  if (!RE_MONTO.test(t)) return Number.NaN;
  return Number(t.replace(",", "."));
}

// Normaliza lo que llega (sea del formulario o de un POST externo) a un objeto con los tipos correctos.
export function normalizarReclamo(bruto: unknown): DatosReclamo {
  const o = (bruto && typeof bruto === "object" ? bruto : {}) as Record<string, unknown>;
  const enLista = <T extends string>(lista: readonly T[], v: unknown, defecto: T): T =>
    typeof v === "string" && (lista as readonly string[]).includes(v) ? (v as T) : defecto;
  return {
    nombre: limpiarTexto(o.nombre, LIMITES.nombre),
    tipoDocumento: enLista(TIPOS_DOCUMENTO, o.tipoDocumento, "DNI"),
    documento: limpiarTexto(o.documento, LIMITES.documento).replace(/\s/g, ""),
    domicilio: limpiarTexto(o.domicilio, LIMITES.domicilio),
    telefono: limpiarTexto(o.telefono, LIMITES.telefono),
    correo: limpiarTexto(o.correo, LIMITES.correo).toLowerCase(),
    esMenor: o.esMenor === true,
    tutorNombre: limpiarTexto(o.tutorNombre, LIMITES.nombre),
    tutorTipoDocumento: enLista(TIPOS_DOCUMENTO, o.tutorTipoDocumento, "DNI"),
    tutorDocumento: limpiarTexto(o.tutorDocumento, LIMITES.documento).replace(/\s/g, ""),
    tipoBien: enLista(TIPOS_BIEN, o.tipoBien, "SERVICIO"),
    descripcionBien: limpiarTexto(o.descripcionBien, LIMITES.descripcionBien, true),
    moneda: enLista(MONEDAS, o.moneda, "PEN"),
    monto: limpiarTexto(o.monto, 12),
    tipoReclamo: enLista(TIPOS_RECLAMO, o.tipoReclamo, "RECLAMO"),
    detalle: limpiarTexto(o.detalle, LIMITES.detalle, true),
    pedido: limpiarTexto(o.pedido, LIMITES.pedido, true),
    aceptacion: o.aceptacion === true,
  };
}

export function validarReclamo(d: DatosReclamo): ErroresReclamo {
  const e: ErroresReclamo = {};
  if (d.nombre.length < 5 || !d.nombre.includes(" ")) e.nombre = "Escribe tus nombres y apellidos completos.";
  const errDoc = validarDocumento(d.tipoDocumento, d.documento);
  if (errDoc) e.documento = errDoc;
  if (d.domicilio.length < 8) e.domicilio = "Escribe tu domicilio (calle, número y distrito).";
  if (!RE_TELEFONO.test(d.telefono)) e.telefono = "Escribe un teléfono válido, con solo números.";
  if (!RE_CORREO.test(d.correo)) e.correo = "Escribe un correo válido; ahí te enviaremos tu copia.";
  if (d.esMenor) {
    if (d.tutorNombre.length < 5 || !d.tutorNombre.includes(" ")) e.tutorNombre = "Escribe los nombres y apellidos del padre, madre o tutor.";
    const errTutor = validarDocumento(d.tutorTipoDocumento, d.tutorDocumento);
    if (errTutor) e.tutorDocumento = errTutor;
  }
  if (d.descripcionBien.length < 3) e.descripcionBien = "Indica qué producto o servicio contrataste.";
  const monto = montoANumero(d.monto);
  if (monto !== null && (Number.isNaN(monto) || monto > LIMITES.montoMax)) e.monto = "Escribe un monto válido, por ejemplo 1250 o 1250.50.";
  if (d.detalle.length < LIMITES.detalleMin) e.detalle = `Cuéntanos qué pasó (mínimo ${LIMITES.detalleMin} caracteres).`;
  if (d.pedido.length < LIMITES.pedidoMin) e.pedido = "Indica qué solución esperas de nuestra parte.";
  if (!d.aceptacion) e.aceptacion = "Debes aceptar la declaración para enviar la hoja.";
  return e;
}
