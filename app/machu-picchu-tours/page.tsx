import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { buildWaUrl } from "@/components/constantes";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

// Página en inglés para turistas extranjeros que llegan a Lima y buscan Machu Picchu. Mismos paquetes y precios que la
// versión en español (vuelo Lima–Cusco incluido); el WhatsApp llega con «EN» para que lo tome quien atiende en inglés.
const RUTA = "/machu-picchu-tours";
const DESCRIPCION =
  "Machu Picchu tour packages from Lima with round-trip flight to Cusco, hotel, Sacred Valley, train and Machu Picchu tickets. Licensed Peruvian travel agency. From US$549.";

export const metadata: Metadata = {
  title: "Machu Picchu Tour Packages from Lima | Cityland Travel",
  description: DESCRIPCION,
  alternates: { canonical: `${URL_BASE_SEO}${RUTA}`, languages: { en: `${URL_BASE_SEO}${RUTA}`, "es-PE": `${URL_BASE_SEO}/destinos/cusco-magico` } },
  openGraph: {
    type: "website",
    url: `${URL_BASE_SEO}${RUTA}`,
    title: "Machu Picchu Tour Packages from Lima",
    description: DESCRIPCION,
    siteName: "Cityland Travel",
    locale: "en_US",
    images: ["https://citylandtravel.com/opengraph-image"],
  },
};

const PAQUETES = [
  {
    titulo: "Cusco & Machu Picchu Classic",
    dias: "4 days / 3 nights",
    precio: 549,
    detalle:
      "Flight Lima–Cusco–Lima, 3 nights in Cusco with breakfast, city tour, Sacred Valley, tourist train, bus up and guided visit to Machu Picchu.",
  },
  {
    titulo: "Machu Picchu, Rainbow Mountain & Humantay Lake",
    dias: "5 days / 4 nights",
    precio: 649,
    detalle: "Everything in the classic package plus full days to Rainbow Mountain (Vinicunca) and Humantay Lake.",
  },
  {
    titulo: "Cusco, Machu Picchu & Lake Titicaca",
    dias: "6 days / 5 nights",
    precio: 799,
    detalle: "Cusco and Machu Picchu, then on to Puno to visit the Uros floating islands on Lake Titicaca.",
  },
];

const FAQS = [
  {
    q: "Do I need to book Machu Picchu tickets in advance?",
    a: "Yes. Entry tickets and train seats are limited per day and sell out weeks ahead in the dry season (May to September). We book them together with your package.",
  },
  {
    q: "When is the best time to visit Machu Picchu?",
    a: "The dry season, May to September, has the clearest skies. December to March is the rainy season with fewer visitors. The Inca Trail closes every February for maintenance.",
  },
  {
    q: "What about the altitude?",
    a: "Cusco is about 3,400 m (11,150 ft) above sea level. Take it easy on the first day; our itineraries start with a light city tour.",
  },
  {
    q: "How do I pay?",
    a: "You reserve with 50% and pay the rest before the trip, by credit card or bank transfer. You receive a written confirmation and an electronic receipt.",
  },
];

export default function MachuPicchuToursPage() {
  const [foto] = obtenerGaleriaPorTexto("cusco machu picchu");
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: "Hi Cityland Travel! (EN) I'd like a quote for a Machu Picchu package.",
    refWeb: `citylandtravel.com${RUTA}`,
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Machu Picchu tour packages from Lima",
        itemListElement: PAQUETES.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": ["Product", "TouristTrip"],
            name: `${p.titulo} (${p.dias})`,
            description: p.detalle,
            offers: { "@type": "Offer", price: String(p.precio), priceCurrency: "USD", availability: "https://schema.org/InStock" },
          },
        })),
      },
      { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" lang="en" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          <header className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-center">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
                Machu Picchu Tour Packages from Lima
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                Landing in Lima? We arrange your whole trip to Machu Picchu: flight to Cusco, hotel, Sacred Valley, train and entry tickets, all
                booked together by a licensed Peruvian travel agency.
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold"
              >
                <WhatsAppIcon size={18} />
                Get a quote on WhatsApp
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={foto}
                alt="Machu Picchu citadel, Cusco, Peru"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Packages</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PAQUETES.map((p) => (
                <li key={p.titulo} className="rounded-2xl border border-slate-200 p-5 space-y-2">
                  <p className="text-sm font-bold text-slate-500">{p.dias}</p>
                  <h3 className="text-lg font-extrabold text-[#0a1628] leading-snug">{p.titulo}</h3>
                  <p className="text-[15px] text-slate-600">{p.detalle}</p>
                  <p className="text-[15px] text-slate-700">
                    from <strong className="text-2xl text-[#0a1628]">US${p.precio.toLocaleString("en-US")}</strong> per person
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500">
              Per person in a double room, including the round-trip flight from Lima. Prices change with dates, hotel category and train service.
            </p>
          </section>

          <section className="rounded-2xl bg-sky-50 border border-sky-100 p-5 sm:p-6 space-y-2">
            <h2 className="text-xl font-extrabold text-[#0a1628]">Why book with us</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-slate-700">
              <li>Registered Peruvian company: Cityland Group E.I.R.L., tax ID (RUC) 20614914239.</li>
              <li>Office in Lima: Av. Antúnez de Mayolo 814, Los Olivos.</li>
              <li>Flight, hotels, train and Machu Picchu tickets confirmed in writing before you pay the balance.</li>
              <li>Reserve with 50%; pay by card or bank transfer.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Frequently asked questions</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {FAQS.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-bold text-[#0a1628] flex justify-between gap-4 min-h-[44px] items-center">
                    {f.q}
                    <span className="text-slate-400 group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="text-[15px] text-slate-600 mt-2">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
