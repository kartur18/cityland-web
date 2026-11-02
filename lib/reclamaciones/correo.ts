// Armado y envío de la Hoja de Reclamación por correo (API HTTP de Resend; la web no tiene nodemailer ni base de datos).
// Solo servidor. No registra datos personales en logs.
import { randomBytes } from "node:crypto";
import type { DatosReclamo } from "./esquema";
import { montoANumero } from "./esquema";
import { PROVEEDOR_RECLAMOS, TEXTO_LEGAL_RECLAMOS, PLAZO_RESPUESTA_DIAS_HABILES, type ConfigCorreo } from "./proveedor";

// Sin 0/O/1/I para que el código se dicte bien por teléfono.
const ALFABETO = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function fechaLima(ahora = new Date()): { iso: string; legible: string; compacta: string } {
  const partes = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Lima", year: "numeric", month: "2-digit", day: "2-digit" }).format(ahora);
  const hora = new Intl.DateTimeFormat("es-PE", { timeZone: "America/Lima", hour: "2-digit", minute: "2-digit", hour12: false }).format(ahora);
  const [a, m, d] = partes.split("-");
  return { iso: partes, legible: `${d}/${m}/${a} ${hora} (hora de Lima)`, compacta: `${a}${m}${d}` };
}

// Correlativo legible sin base de datos: LR-AAAAMMDD-XXXXXX. El correlativo formal numerado requiere persistencia.
export function generarCodigoReclamo(ahora = new Date()): string {
  const bytes = randomBytes(6);
  let sufijo = "";
  for (const b of bytes) sufijo += ALFABETO[b % ALFABETO.length];
  return `LR-${fechaLima(ahora).compacta}-${sufijo}`;
}

const esc = (t: string) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

function formatoMonto(d: DatosReclamo): string {
  const n = montoANumero(d.monto);
  if (n === null || Number.isNaN(n)) return "No indicado";
  return `${d.moneda === "PEN" ? "S/" : "US$"} ${n.toFixed(2)}`;
}

type Fila = [string, string];

function filas(d: DatosReclamo, codigo: string, fecha: string, domicilioProveedor: string): { seccion: string; filas: Fila[] }[] {
  const consumidor: Fila[] = [
    ["Nombre completo", d.nombre],
    [d.tipoDocumento, d.documento],
    ["Domicilio", d.domicilio],
    ["Teléfono", d.telefono],
    ["Correo electrónico", d.correo],
    ["Menor de edad", d.esMenor ? "Sí" : "No"],
  ];
  if (d.esMenor) {
    consumidor.push(["Padre, madre o tutor", d.tutorNombre], [`${d.tutorTipoDocumento} del tutor`, d.tutorDocumento]);
  }
  return [
    {
      seccion: "1. Identificación del proveedor",
      filas: [
        ["Razón social", PROVEEDOR_RECLAMOS.razonSocial],
        ["RUC", PROVEEDOR_RECLAMOS.ruc],
        ["Nombre comercial", PROVEEDOR_RECLAMOS.nombreComercial],
        ["Domicilio", domicilioProveedor],
        ["Código de la hoja", codigo],
        ["Fecha y hora", fecha],
      ],
    },
    { seccion: "2. Identificación del consumidor reclamante", filas: consumidor },
    {
      seccion: "3. Identificación del bien contratado",
      filas: [
        ["Tipo", d.tipoBien === "PRODUCTO" ? "Producto" : "Servicio"],
        ["Descripción", d.descripcionBien],
        ["Monto reclamado", formatoMonto(d)],
      ],
    },
    {
      seccion: "4. Detalle de la reclamación y pedido del consumidor",
      filas: [
        ["Tipo", d.tipoReclamo === "RECLAMO" ? "RECLAMO (disconformidad con productos o servicios)" : "QUEJA (malestar en la atención, no relacionado con el producto o servicio)"],
        ["Detalle", d.detalle],
        ["Pedido del consumidor", d.pedido],
      ],
    },
  ];
}

export type CorreoListo = { asunto: string; html: string; texto: string };

function armar(titulo: string, intro: string, d: DatosReclamo, codigo: string, fecha: string, domicilio: string): CorreoListo {
  const bloques = filas(d, codigo, fecha, domicilio);
  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;color:#0a1628;max-width:640px">` +
    `<h2 style="margin:0 0 8px">${esc(titulo)}</h2><p style="margin:0 0 16px">${esc(intro)}</p>` +
    bloques
      .map(
        (b) =>
          `<h3 style="margin:18px 0 6px;font-size:15px">${esc(b.seccion)}</h3>` +
          `<table style="border-collapse:collapse;width:100%;font-size:14px">` +
          b.filas
            .map(
              ([k, v]) =>
                `<tr><td style="border:1px solid #e2e8f0;padding:6px 8px;background:#f8fafc;width:34%;vertical-align:top"><b>${esc(k)}</b></td>` +
                `<td style="border:1px solid #e2e8f0;padding:6px 8px;white-space:pre-wrap">${esc(v)}</td></tr>`
            )
            .join("") +
          `</table>`
      )
      .join("") +
    `<p style="margin:18px 0 0;font-size:12px;color:#475569">${esc(TEXTO_LEGAL_RECLAMOS)}</p>` +
    `<p style="margin:8px 0 0;font-size:12px;color:#475569">El consumidor declaró que la información es veraz y aceptó el contenido de la hoja.</p></div>`;
  const texto =
    `${titulo}\n${intro}\n\n` +
    bloques.map((b) => `${b.seccion}\n` + b.filas.map(([k, v]) => `- ${k}: ${v}`).join("\n")).join("\n\n") +
    `\n\n${TEXTO_LEGAL_RECLAMOS}\n`;
  return { asunto: "", html, texto };
}

export function correoEmpresa(d: DatosReclamo, codigo: string, fecha: string, domicilio: string): CorreoListo {
  const c = armar(
    `Nueva hoja de reclamación ${codigo}`,
    `Se recibió un ${d.tipoReclamo === "RECLAMO" ? "reclamo" : "queja"} por el Libro de Reclamaciones virtual. Responde al consumidor dentro de ${PLAZO_RESPUESTA_DIAS_HABILES} días hábiles; este correo responde directo a su casilla.`,
    d,
    codigo,
    fecha,
    domicilio
  );
  return { ...c, asunto: `[Libro de Reclamaciones] ${d.tipoReclamo} ${codigo}` };
}

export function correoConsumidor(d: DatosReclamo, codigo: string, fecha: string, domicilio: string): CorreoListo {
  const c = armar(
    `Constancia de tu hoja de reclamación ${codigo}`,
    `Recibimos tu ${d.tipoReclamo === "RECLAMO" ? "reclamo" : "queja"}. Esta es tu copia. Guarda el código ${codigo}: te responderemos en un plazo no mayor a ${PLAZO_RESPUESTA_DIAS_HABILES} días hábiles, improrrogables.`,
    d,
    codigo,
    fecha,
    domicilio
  );
  return { ...c, asunto: `Constancia de tu hoja de reclamación ${codigo} - Cityland Travel` };
}

export async function enviarCorreo(
  cfg: ConfigCorreo,
  params: { para: string[]; responderA?: string; correo: CorreoListo; claveIdempotencia: string }
): Promise<boolean> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cfg.apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": params.claveIdempotencia,
      },
      body: JSON.stringify({
        from: cfg.desde,
        to: params.para,
        subject: params.correo.asunto,
        html: params.correo.html,
        text: params.correo.texto,
        ...(params.responderA ? { reply_to: params.responderA } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error(`[reclamos] el proveedor de correo respondió ${res.status}`);
      return false;
    }
    return true;
  } catch (e) {
    console.error(`[reclamos] fallo de red al enviar: ${e instanceof Error ? e.name : "desconocido"}`);
    return false;
  }
}
