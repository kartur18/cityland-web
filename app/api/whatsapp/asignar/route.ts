import { NextResponse } from "next/server";
import { NUMERO_WHATSAPP_OFICIAL } from "@/components/constantes";

export async function GET() {
  return NextResponse.json({
    ok: true,
    asesorId: "central_bandeja",
    telefono: NUMERO_WHATSAPP_OFICIAL,
    nombreInterno: "Central Cityland Travel",
    esContinuidad: true,
  });
}

export async function POST() {
  const response = NextResponse.json({
    ok: true,
    asesorId: "central_bandeja",
    telefono: NUMERO_WHATSAPP_OFICIAL,
    nombreInterno: "Central Cityland Travel",
    esContinuidad: true,
    turnoGlobal: 1,
  });

  response.cookies.delete("cityland_wa_aid");
  response.cookies.delete("cityland_wa_tel");

  return response;
}
