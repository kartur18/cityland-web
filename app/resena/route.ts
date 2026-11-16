import { NextRequest, NextResponse } from "next/server";
import { track } from "@vercel/analytics/server";

// Enlace corto del pedido de reseña (WhatsApp). Antes era un redirect de next.config.ts y nadie sabía cuántos clientes lo abrían.
// Cuenta el clic como evento «resena_clic» de Vercel Analytics y redirige (307) a la ficha de Google.
const DESTINO = "https://g.page/r/CcqRzpILI2GLEBM/review";

// WhatsApp, Facebook y los buscadores abren el enlace solos para armar la vista previa: eso no es un cliente.
const ES_ROBOT = /whatsapp|facebookexternalhit|facebot|bot|crawler|spider|preview|slurp|curl|python|headless/i;

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const agente = req.headers.get("user-agent") ?? "";
  if (agente && !ES_ROBOT.test(agente)) {
    try {
      await track("resena_clic", undefined, { request: req });
    } catch {
      // Contar nunca debe impedir que el cliente llegue a la ficha.
    }
  }
  return NextResponse.redirect(DESTINO, 307);
}
