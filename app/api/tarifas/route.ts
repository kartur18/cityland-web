import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { CATALOGO_INICIAL, type CatalogoTarifas } from "@/lib/tarifas";

const FILE_PATH = path.join(process.cwd(), "data", "tarifas.json");
const ADMIN_PIN = process.env.ADMIN_PIN || "2026";

export async function GET() {
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

    if (pin !== ADMIN_PIN) {
      return NextResponse.json(
        { ok: false, error: "Clave de administrador incorrecta." },
        { status: 401 }
      );
    }

    if (!catalogo || !Array.isArray(catalogo.tarifas)) {
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
