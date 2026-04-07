import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cityland Travel — Paquetes a Europa desde $799";
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
              fontSize: "28px",
              color: "rgba(255,255,255,0.6)",
              textAlign: "center" as const,
            }}
          >
            Paquetes migratorios y turísticos desde{" "}
            <span style={{ color: "white", fontWeight: 700 }}>$799</span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "16px",
            }}
          >
            {["✈ +5,000 viajes", "⭐ 4.9/5 Google", "⚡ Respuesta en 2h"].map((t) => (
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
