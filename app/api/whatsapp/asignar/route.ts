import { NextRequest, NextResponse } from "next/server";
import {
  previsualizarSiguienteAsesor,
  registrarClicYAsignarAsesor,
} from "@/lib/distribuidor-wa";

export async function GET(req: NextRequest) {
  try {
    const cookieAid = req.cookies.get("cityland_wa_aid")?.value || null;
    const cookieTel = req.cookies.get("cityland_wa_tel")?.value || null;
    const queryAid = req.nextUrl.searchParams.get("aid") || cookieAid;
    const queryTel = req.nextUrl.searchParams.get("tel") || cookieTel;

    const preview = await previsualizarSiguienteAsesor(queryAid, queryTel);
    return NextResponse.json({ ok: true, ...preview });
  } catch {
    return NextResponse.json({
      ok: true,
      asesorId: "respaldo",
      telefono: "51906450098",
      nombreInterno: "Central de Respaldo",
      esContinuidad: false,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const cookieAid = req.cookies.get("cityland_wa_aid")?.value || null;
    const cookieTel = req.cookies.get("cityland_wa_tel")?.value || null;

    const resultado = await registrarClicYAsignarAsesor({
      asesorPrevioId: body.asesorPrevioId || cookieAid,
      asesorPrevioTelefono: body.asesorPrevioTelefono || cookieTel,
      landingPage: body.landingPage || "/",
      fuenteTrafico: body.fuenteTrafico || "Directo / Orgánico",
      botonSeleccionado: body.botonSeleccionado || "Botón WhatsApp",
      dispositivo: body.dispositivo || "Web",
    });

    const response = NextResponse.json({ ok: true, ...resultado });
    const maxAge = 60 * 60 * 24 * 30; // 30 días de persistencia

    response.cookies.set("cityland_wa_aid", resultado.asesorId, {
      path: "/",
      maxAge,
      sameSite: "lax",
    });
    response.cookies.set("cityland_wa_tel", resultado.telefono, {
      path: "/",
      maxAge,
      sameSite: "lax",
    });

    return response;
  } catch {
    return NextResponse.json({
      ok: true,
      asesorId: "respaldo",
      telefono: "51906450098",
      nombreInterno: "Central de Respaldo",
      esContinuidad: false,
      turnoGlobal: 0,
    });
  }
}
