import { NextRequest, NextResponse } from "next/server";
import { obtenerIpCliente, verificarRateLimit } from "@/lib/seguridad-http";
import { LIMITES, normalizarReclamo, validarReclamo } from "@/lib/reclamaciones/esquema";
import {
  DOMICILIO_PROVEEDOR_RESPALDO,
  PROVEEDOR_RECLAMOS,
  WHATSAPP_RECLAMOS,
  configCorreo,
  correosDestino,
} from "@/lib/reclamaciones/proveedor";
import { correoConsumidor, correoEmpresa, enviarCorreo, fechaLima, generarCodigoReclamo } from "@/lib/reclamaciones/correo";

// La ruta envía correos con credenciales de entorno: nunca se prerenderiza ni se cachea.
export const dynamic = "force-dynamic";

const SIN_CACHE = { "Cache-Control": "no-store" };

// Canales por los que el consumidor puede presentar el reclamo si el envío falla; nunca se pierde un reclamo en silencio.
function alterno() {
  return { whatsapp: WHATSAPP_RECLAMOS, correo: correosDestino()[0] ?? null };
}

function responder(status: number, cuerpo: Record<string, unknown>, extra?: Record<string, string>) {
  return NextResponse.json(cuerpo, { status, headers: { ...SIN_CACHE, ...extra } });
}

// El domicilio sale de OFICINAS (misma fuente del pie). Import diferido: solo se carga al enviar, no en el arranque de la ruta.
async function domicilioProveedor(): Promise<string> {
  try {
    const { OFICINAS } = await import("@/components/constantes");
    return OFICINAS.find((o) => o.ruc === PROVEEDOR_RECLAMOS.ruc)?.direccion ?? DOMICILIO_PROVEEDOR_RESPALDO;
  } catch {
    return DOMICILIO_PROVEEDOR_RESPALDO;
  }
}

export async function POST(req: NextRequest) {
  const ip = obtenerIpCliente(req);
  // En memoria por instancia (no hay Redis en la web): frena el abuso casual, no un ataque distribuido.
  const rl = verificarRateLimit({ clave: `reclamos:${ip}`, limite: 5, ventanaMs: 60 * 60 * 1000 });
  if (!rl.permitido) {
    return responder(
      429,
      { ok: false, codigo: "DEMASIADOS_INTENTOS", mensaje: "Enviaste varias hojas seguidas. Espera un momento o escríbenos por WhatsApp.", alterno: alterno() },
      { "Retry-After": String(rl.reintentarEnSegundos) }
    );
  }

  const cfg = configCorreo();
  if (!cfg) {
    return responder(503, {
      ok: false,
      codigo: "SIN_CONFIGURAR",
      mensaje: "El envío en línea no está disponible por ahora. Presenta tu reclamo por WhatsApp o por correo y te atenderemos.",
      alterno: alterno(),
    });
  }

  const texto = await req.text();
  if (texto.length > LIMITES.cuerpoMaxBytes) {
    return responder(413, { ok: false, codigo: "CUERPO_GRANDE", mensaje: "La hoja es demasiado larga. Acórtala e inténtalo de nuevo." });
  }
  let bruto: unknown;
  try {
    bruto = JSON.parse(texto);
  } catch {
    return responder(400, { ok: false, codigo: "JSON_INVALIDO", mensaje: "No pudimos leer la hoja. Recarga la página e inténtalo de nuevo." });
  }

  // Honeypot: un humano no ve este campo; si viene lleno es un bot. Se responde "ok" para no darle pistas y no se envía nada.
  if (bruto && typeof bruto === "object" && String((bruto as Record<string, unknown>).sitioWeb ?? "").trim() !== "") {
    return responder(200, { ok: true, codigo: generarCodigoReclamo(), copiaEnviada: false });
  }

  const datos = normalizarReclamo(bruto);
  const errores = validarReclamo(datos);
  if (Object.keys(errores).length > 0) {
    return responder(400, { ok: false, codigo: "DATOS_INVALIDOS", mensaje: "Revisa los campos marcados.", errores });
  }

  const ahora = new Date();
  const codigo = generarCodigoReclamo(ahora);
  const fecha = fechaLima(ahora).legible;
  const domicilio = await domicilioProveedor();

  const aEmpresa = await enviarCorreo(cfg, {
    para: cfg.destino,
    responderA: datos.correo,
    correo: correoEmpresa(datos, codigo, fecha, domicilio),
    claveIdempotencia: `reclamo-empresa-${codigo}`,
  });
  if (!aEmpresa) {
    return responder(502, {
      ok: false,
      codigo: "ENVIO_FALLIDO",
      mensaje: "No pudimos registrar tu hoja en este momento. No se perdió nada: inténtalo de nuevo o preséntala por WhatsApp o correo.",
      alterno: alterno(),
    });
  }

  // La copia al consumidor es exigencia legal. Si falla, el reclamo ya llegó a la empresa y el código se muestra en pantalla.
  const copiaEnviada = await enviarCorreo(cfg, {
    para: [datos.correo],
    correo: correoConsumidor(datos, codigo, fecha, domicilio),
    claveIdempotencia: `reclamo-consumidor-${codigo}`,
  });

  return responder(200, { ok: true, codigo, fecha, copiaEnviada });
}
