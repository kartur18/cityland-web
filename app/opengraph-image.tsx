import { ImageResponse } from "next/og";
import { PRECIO_IDA_VUELTA_MADRID_DESDE, PRECIO_MIGRATORIO_DESDE } from "@/components/constantes";

export const alt = `Cityland Travel — Paquete migratorio España (solo ida + gestión) desde US$ ${PRECIO_MIGRATORIO_DESDE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #162544 50%, #0a1628 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              padding: "6px 16px",
              color: "rgba(255,255,255,0.5)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
            }}
          >
            Agencia de viajes en Lima, Perú
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "72px",
              fontWeight: 900,
              color: "white",
              textAlign: "center" as const,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            CITYLAND TRAVEL
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              gap: "6px",
              fontSize: "28px",
              color: "rgba(255,255,255,0.6)",
              textAlign: "center" as const,
            }}
          >
            <div style={{ display: "flex" }}>
              Paquete migratorio España (solo ida + gestión) desde US$ {PRECIO_MIGRATORIO_DESDE}
            </div>
            <div style={{ display: "flex" }}>
              Vuelos Lima-Madrid ida y vuelta desde US$ {PRECIO_IDA_VUELTA_MADRID_DESDE.toLocaleString("en-US")}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "16px",
            }}
          >
            {["Separa con 50%", "Oficinas en Los Olivos", "Cotiza por WhatsApp"].map((t) => (
              <div
                key={t}
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Red accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#dc2626",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
