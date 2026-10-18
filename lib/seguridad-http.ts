import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

interface BucketRateLimit {
  count: number;
  resetAt: number;
}

declare global {
  var __citylandWebRateBuckets: Map<string, BucketRateLimit> | undefined;
}

function obtenerBuckets(): Map<string, BucketRateLimit> {
  if (!globalThis.__citylandWebRateBuckets) {
    globalThis.__citylandWebRateBuckets = new Map<string, BucketRateLimit>();
  }
  return globalThis.__citylandWebRateBuckets;
}

/**
 * Extrae la IP real del cliente priorizando la cabecera inyectada por Vercel Edge
 * (no falsificable por el cliente) o el último salto de x-forwarded-for.
 */
export function obtenerIpCliente(req: NextRequest | Request): string {
  const vercelIp = req.headers.get("x-vercel-forwarded-for");
  if (vercelIp) {
    return vercelIp.split(",")[0].trim().slice(0, 64) || "unknown";
  }
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const partes = xff
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (partes.length > 0) {
      return partes[partes.length - 1].slice(0, 64);
    }
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim().slice(0, 64);
  }
  return "unknown";
}

/**
 * Verifica límite de peticiones por ventana de tiempo en memoria.
 */
export function verificarRateLimit(params: {
  clave: string;
  limite: number;
  ventanaMs: number;
}): { permitido: boolean; restantes: number; reintentarEnSegundos: number } {
  const ahora = Date.now();
  const buckets = obtenerBuckets();

  // Limpieza periódica si el mapa crece demasiado
  if (buckets.size > 5000) {
    for (const [k, v] of buckets.entries()) {
      if (v.resetAt <= ahora) {
        buckets.delete(k);
      }
    }
  }

  const actual = buckets.get(params.clave);
  if (!actual || actual.resetAt <= ahora) {
    buckets.set(params.clave, {
      count: 1,
      resetAt: ahora + params.ventanaMs,
    });
    return {
      permitido: true,
      restantes: Math.max(0, params.limite - 1),
      reintentarEnSegundos: Math.ceil(params.ventanaMs / 1000),
    };
  }

  actual.count += 1;
  const reintentarEnSegundos = Math.max(1, Math.ceil((actual.resetAt - ahora) / 1000));
  if (actual.count > params.limite) {
    return {
      permitido: false,
      restantes: 0,
      reintentarEnSegundos,
    };
  }

  return {
    permitido: true,
    restantes: Math.max(0, params.limite - actual.count),
    reintentarEnSegundos,
  };
}

/**
 * Comparación de secretos en tiempo constante (previene ataques de timing).
 */
export function compararSecretoSeguro(recibido: string, esperado: string): boolean {
  if (!recibido || !esperado) return false;
  const bufA = Buffer.from(recibido, "utf-8");
  const bufB = Buffer.from(esperado, "utf-8");
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Valida la clave de administrador de forma fail-closed:
 * - Si ADMIN_PIN no está configurado en variables de entorno o tiene menos de 10 caracteres,
 *   bloquea cualquier intento de acceso administrativo (cero claves por defecto).
 * - Aplica rate-limiting estricto por IP contra ataques de fuerza bruta.
 */
export function verificarAccesoAdmin(
  req: NextRequest,
  pinCandidato?: string | null
): { ok: true } | { ok: false; response: NextResponse } {
  const ip = obtenerIpCliente(req);
  const rl = verificarRateLimit({
    clave: `admin-auth:${ip}`,
    limite: 8,
    ventanaMs: 15 * 60 * 1000, // 8 intentos cada 15 minutos
  });

  if (!rl.permitido) {
    return {
      ok: false,
      response: NextResponse.json(
        {
          ok: false,
          error: "Demasiados intentos. Por seguridad, intenta nuevamente en 15 minutos.",
        },
        {
          status: 429,
          headers: { "Retry-After": String(rl.reintentarEnSegundos) },
        }
      ),
    };
  }

  const adminPinEnv = process.env.ADMIN_PIN?.trim() || "";
  if (adminPinEnv.length < 10) {
    return {
      ok: false,
      response: NextResponse.json(
        {
          ok: false,
          error:
            "Acceso administrativo deshabilitado en este servidor (ADMIN_PIN no configurado).",
        },
        { status: 403 }
      ),
    };
  }

  const headerPin =
    req.headers.get("x-admin-pin") ||
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ||
    "";
  const pinRecibido = (pinCandidato || headerPin || "").trim();

  if (!compararSecretoSeguro(pinRecibido, adminPinEnv)) {
    return {
      ok: false,
      response: NextResponse.json(
        { ok: false, error: "Credenciales de administrador inválidas." },
        { status: 401 }
      ),
    };
  }

  return { ok: true };
}

/**
 * Serializa objetos JSON-LD escapando caracteres HTML peligrosos (<, >, &)
 * para prevenir inyección XSS en bloques <script type="application/ld+json">.
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}
