import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { CATALOGO_INICIAL, type CatalogoTarifas } from "@/lib/tarifas";
import {
  obtenerIpCliente,
  verificarAccesoAdmin,
  verificarRateLimit,
} from "@/lib/seguridad-http";

const FILE_PATH = path.join(process.cwd(), "data", "tarifas.json");

export async function GET(req: NextRequest) {
  const ip = obtenerIpCliente(req);
  const rl = verificarRateLimit({
    clave: `tarifas-get:${ip}`,
    limite: 60,
    ventanaMs: 60 * 1000,
  });
  if (!rl.permitido) {
    return NextResponse.json(
      { ok: false, error: "Demasiadas consultas. Intenta en un minuto." },
      { status: 429 }
    );
  }

  try {
    const raw = await fs.readFile(FILE_PATH, "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json(CATALOGO_INICIAL);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pin, catalogo } = body as { pin?: string; catalogo?: CatalogoTarifas };

    const authCheck = verificarAccesoAdmin(req, pin);
    if (!authCheck.ok) {
      return authCheck.response;
    }

    if (!catalogo || !Array.isArray(catalogo.tarifas) || catalogo.tarifas.length > 500) {
      return NextResponse.json(
        { ok: false, error: "Formato de catálogo inválido." },
        { status: 400 }
      );
    }

    const actualizado: CatalogoTarifas = {
      ...catalogo,
      configuracion: {
        ...catalogo.configuracion,
        ultimaActualizacionGlobal: new Date().toISOString().slice(0, 10),
      },
    };

    try {
      await fs.writeFile(FILE_PATH, JSON.stringify(actualizado, null, 2), "utf-8");
    } catch {
      // En entorno serverless read-only devuelve el JSON listo para descarga/respaldo
    }

    return NextResponse.json({ ok: true, catalogo: actualizado });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Error procesando la solicitud." },
      { status: 500 }
    );
  }
}
