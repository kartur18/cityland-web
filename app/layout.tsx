import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { PRECIO_IDA_VUELTA_MADRID_DESDE, PRECIO_MIGRATORIO_DESDE } from "@/components/constantes";
import WhatsAppTracker from "@/components/WhatsAppTracker";
import { ROBOTS_INDEXABLE } from "@/lib/indexacion";
import "./globals.css";

const GOOGLE_ADS_ID = "AW-18093363482";
const GA4_ID = "G-SRFK1LXPBE";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citylandtravel.com"),
  title:
    "Cityland Travel | Agencia de viajes en Los Olivos, Lima",
  description:
    "Agencia de viajes formal en Lima, Perú (RUC 20614914239 · Oficina en Los Olivos). Paquetes turísticos Todo Incluido a Punta Cana, Cancún, Cartagena y Paquete Migratorio a España (solo ida + gestión) desde US$ 699 y vuelos Lima-Madrid ida y vuelta desde US$ 1,250, con Seguro Schengen 30.000€. Separa hoy con el 50% de inicial.",
  keywords: [
    "agencia de viajes en lima",
    "agencia de viajes en los olivos",
    "cityland travel",
    "paquetes turisticos desde lima 2026",
    "paquetes todo incluido punta cana desde lima",
    "paquetes migratorios a espana desde peru",
    "viajar a espana desde lima requisitos 2026",
    "seguro schengen 30000 euros peru",
    "paquetes cancun todo incluido desde lima",
    "paquetes cartagena todo incluido desde lima",
    "viajes a turquia desde peru sin visa",
    "agencia de viajes formal ruc 20614914239",
  ],
  authors: [{ name: "Cityland Travel", url: "https://citylandtravel.com" }],
  creator: "Cityland Travel",
  publisher: "Cityland Group E.I.R.L.",
  category: "travel",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/icon-192.png"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: ROBOTS_INDEXABLE,
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/",
    title: `Cityland Travel — Paquete migratorio España (solo ida + gestión) desde US$ ${PRECIO_MIGRATORIO_DESDE} | Lima-Madrid ida y vuelta desde US$ ${PRECIO_IDA_VUELTA_MADRID_DESDE.toLocaleString("en-US")}`,
    description:
      "Agencia de viajes formal en Lima (RUC 20614914239). Paquetes a Punta Cana, Cancún, Cartagena, España y Europa con vuelos confirmados. Oficinas en Los Olivos.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cityland Travel — Agencia de Viajes Formal en Lima, Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Cityland Travel — Paquete migratorio España (solo ida + gestión) desde US$ ${PRECIO_MIGRATORIO_DESDE}`,
    description:
      "Agencia de viajes formal en Lima (RUC 20614914239). Vuelos y paquetes turísticos y migratorios. Separa con 50% y cotiza por WhatsApp.",
    images: ["https://citylandtravel.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://citylandtravel.com/",
    languages: {
      "es-PE": "https://citylandtravel.com/",
      es: "https://citylandtravel.com/",
    },
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
    "geo.position": "-11.9556;-77.0642",
    ICBM: "-11.9556, -77.0642",
  },
};

import { SCHEMA_ORGANIZACION_CITYLAND } from "@/lib/seo-arquitectura";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE" className={`${jakarta.variable} antialiased`} suppressHydrationWarning>
      <body className="font-[family-name:var(--font-jakarta)] text-[#0a1628] bg-white overflow-x-hidden m-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORGANIZACION_CITYLAND) }}
        />
        {children}
        <WhatsAppTracker />
        {/* lazyOnload: no compite con la carga inicial, el tracking sigue igual solo que carga después */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-tags-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
