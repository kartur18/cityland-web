import { ImageResponse } from "next/og";
import { buscarLandingSoloIda, landingsSoloIda } from "@/lib/landings-solo-ida";
import { formatoUSD } from "@/lib/formato-precio";

// Imagen para compartir de cada página de solo ida: título y precio propios, en diseño claro.
export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return landingsSoloIda().map((l) => ({ slug: l.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const l = buscarLandingSoloIda((await params).slug);
  if (!l) return new Response("No encontrado", { status: 404 });
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #ffffff 0%, #ecfeff 60%, #ccfbf1 100%)",
          fontFamily: "sans-serif",
          color: "#0a1628",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: 28, fontWeight: 800 }}>
          <div style={{ display: "flex", background: "#0f766e", color: "white", borderRadius: 999, padding: "8px 22px" }}>Solo ida</div>
          <div style={{ display: "flex", color: "#475569" }}>{l.sello}</div>
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>{l.h1}</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 28, color: "#475569" }}>{l.etiquetaPrecio}</div>
            <div style={{ display: "flex", fontSize: 96, fontWeight: 800 }}>{formatoUSD(l.precio)}</div>
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 800 }}>Cityland Travel · Lima</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
