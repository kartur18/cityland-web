import { NextRequest, NextResponse } from "next/server";
import {
  guardarEstadoDistribuidor,
  leerEstadoDistribuidor,
  type EstadoDistribuidorWA,
} from "@/lib/distribuidor-wa";
import { verificarAccesoAdmin } from "@/lib/seguridad-http";

export async function GET(req: NextRequest) {
  const authCheck = verificarAccesoAdmin(req);
  if (!authCheck.ok) {
    return authCheck.response;
  }
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

    const authCheck = verificarAccesoAdmin(req, pin);
    if (!authCheck.ok) {
      return authCheck.response;
    }

    if (!estado || !Array.isArray(estado.asesores) || estado.asesores.length > 50) {
      return NextResponse.json(
        { ok: false, error: "Datos de asesores inválidos." },
        { status: 400 }
      );
    }

    // Normalizar teléfonos al formato internacional 519XXXXXXXX
    estado.asesores = estado.asesores.map((a, idx) => {
      const soloDigitos = String(a.telefono || "").replace(/\D/g, "").slice(0, 15);
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
