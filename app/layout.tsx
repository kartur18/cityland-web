import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { PRECIO_DESDE_EUROPA } from "@/components/constantes";
import "./globals.css";

const GOOGLE_ADS_ID = "AW-18093363482";
const GA4_ID = "G-SRFK1LXPBE";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citylandtravel.com"),
  title: {
    default:
      "Cityland Travel — Agencia de Viajes en Lima | Paquetes a España, Caribe y Europa (Separa con 50%)",
    template: "%s | Cityland Travel — Agencia de Viajes en Lima",
  },
  description:
    "Agencia de viajes formal en Lima, Perú (RUC 20614914239 · Oficina en Los Olivos). Paquetes turísticos Todo Incluido a Punta Cana, Cancún, Cartagena y Paquetes Migratorios a España desde $695 USD con Seguro Schengen 30.000€. Separa hoy con el 50% de inicial.",
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
  authors: [{ name: "Cityland Travel E.I.R.L.", url: "https://citylandtravel.com" }],
  creator: "Cityland Travel E.I.R.L.",
  publisher: "Cityland Travel E.I.R.L.",
  category: "travel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/",
    title: `Cityland Travel — Paquetes al Caribe y España desde $${PRECIO_DESDE_EUROPA} USD | Separa con 50%`,
    description:
      "Agencia de viajes formal en Lima (RUC 20614914239). Paquetes a Punta Cana, Cancún, Cartagena, España y Europa con vuelos confirmados. +5,000 viajeros felices.",
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
    title: `Cityland Travel — Paquetes al Caribe y España desde $${PRECIO_DESDE_EUROPA} USD`,
    description:
      "Agencia de viajes formal en Lima (RUC 20614914239). Vuelos y paquetes turísticos y migratorios. Separa con 50%. Respuesta en 2 min por WhatsApp.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE" className={`${jakarta.variable} ${bebas.variable} antialiased`} suppressHydrationWarning>
      <body className="font-[family-name:var(--font-jakarta)] text-[#0a1628] bg-white overflow-x-hidden m-0">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tags-init" strategy="afterInteractive">
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
