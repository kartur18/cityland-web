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
  title: "Cityland Travel — Paquetes Turísticos All Inclusive y Vuelos desde Lima | Separa con 50%",
  description:
    "Agencia de viajes formal en Lima (RUC 20614914239). Paquetes turísticos completos Todo Incluido a Punta Cana, Cancún, Cartagena, Europa y Turquía. Separa con el 50% de inicial y cancela antes de viajar. Cotización personalizada por WhatsApp.",
  keywords:
    "paquetes turisticos todo incluido lima, agencia de viajes lima peru, paquetes punta cana todo incluido, cancun all inclusive, cartagena de indias, vuelos a espana madrid, paquetes europa, viajes turquia sin visa, agencia de viajes los olivos, cityland travel",
  authors: [{ name: "Cityland Travel E.I.R.L." }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/",
    title: `Cityland Travel — Paquetes a Europa desde $${PRECIO_DESDE_EUROPA} | Cotiza GRATIS`,
    description:
      "Agencia de viajes en Lima. Paquetes migratorios y turísticos a Europa, Caribe y Sudamérica. +5,000 viajes realizados.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [{ url: "https://citylandtravel.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Cityland Travel — Paquetes a Europa desde $${PRECIO_DESDE_EUROPA}`,
    description: `Agencia de viajes en Lima. Vuelos y paquetes migratorios desde $${PRECIO_DESDE_EUROPA}. Cotización GRATIS en 2h.`,
    images: ["https://citylandtravel.com/og-image.jpg"],
  },
  alternates: { canonical: "https://citylandtravel.com/" },
  other: { "geo.region": "PE-LIM", "geo.placename": "Los Olivos, Lima" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jakarta.variable} ${bebas.variable} antialiased`} suppressHydrationWarning>
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
