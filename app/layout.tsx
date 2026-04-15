import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GOOGLE_ADS_ID = "AW-18893163482";
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
  metadataBase: new URL("https://citylandtravelpe.com"),
  title: "Cityland Travel — Paquetes a Europa desde $799 | Vuelos y Viajes desde Lima",
  description:
    "Cityland Travel: agencia de viajes en Lima. Paquetes migratorios a Europa desde $799 y turísticos al Caribe, Sudamérica y todo el mundo. Cotización GRATIS en 2 horas por WhatsApp. +5,000 viajes realizados.",
  keywords:
    "agencia de viajes Lima, paquetes a Europa, vuelos baratos, paquete migratorio España, viajes al Caribe, Punta Cana todo incluido, vuelos a Madrid desde Lima, agencia de viajes Los Olivos, Cityland Travel, emigrar a Europa",
  authors: [{ name: "Cityland Travel" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  openGraph: {
    type: "website",
    url: "https://citylandtravelpe.com/",
    title: "Cityland Travel — Paquetes a Europa desde $799 | Cotiza GRATIS",
    description:
      "Agencia de viajes en Lima. Paquetes migratorios y turísticos a Europa, Caribe y Sudamérica. +5,000 viajes realizados.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [{ url: "https://citylandtravelpe.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cityland Travel — Paquetes a Europa desde $799",
    description: "Agencia de viajes en Lima. Vuelos y paquetes migratorios desde $799. Cotización GRATIS en 2h.",
    images: ["https://citylandtravelpe.com/og-image.jpg"],
  },
  alternates: { canonical: "https://citylandtravelpe.com/" },
  other: { "geo.region": "PE-LIM", "geo.placename": "Los Olivos, Lima" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jakarta.variable} ${bebas.variable} antialiased`} suppressHydrationWarning>
      <body className="font-[family-name:var(--font-jakarta)] text-[#0a1628] bg-white overflow-x-hidden m-0">
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()` }} />
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
      </body>
    </html>
  );
}
