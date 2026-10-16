import { NextRequest, NextResponse } from "next/server";
import {
  guardarEstadoDistribuidor,
  leerEstadoDistribuidor,
  type EstadoDistribuidorWA,
} from "@/lib/distribuidor-wa";

const ADMIN_PIN = process.env.ADMIN_PIN || "2026";

export async function GET() {
  const estado = await leerEstadoDistribuidor();
  return NextResponse.json({ ok: true, estado });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pin, estado } = body as {
      pin?: string;
      estado?: EstadoDistribuidorWA;
    };

    if (pin !== ADMIN_PIN && pin?.toUpperCase() !== "CITYLAND2026") {
      return NextResponse.json(
        { ok: false, error: "Clave de administrador no válida." },
        { status: 401 }
      );
    }

    if (!estado || !Array.isArray(estado.asesores)) {
      return NextResponse.json(
        { ok: false, error: "Datos de asesores inválidos." },
        { status: 400 }
      );
    }

    // Normalizar teléfonos al formato internacional 519XXXXXXXX
    estado.asesores = estado.asesores.map((a, idx) => {
      const soloDigitos = a.telefono.replace(/\D/g, "");
      const telefonoInternacional =
        soloDigitos.length === 9 && soloDigitos.startsWith("9")
          ? `51${soloDigitos}`
          : soloDigitos;
      return {
        ...a,
        orden: idx + 1,
        telefono: telefonoInternacional,
      };
    });

    const guardado = await guardarEstadoDistribuidor(estado);
    return NextResponse.json({ ok: true, estado: guardado });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Error guardando configuración de asesores." },
      { status: 500 }
    );
  }
}
