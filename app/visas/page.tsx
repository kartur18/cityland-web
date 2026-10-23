import { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import VisasLandingClient from "./VisasLandingClient";
import { SERVICIOS_VISAS } from "./datos";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Trámite y Asesoría de Visa Americana, Canadá, México y España en Lima | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Asesoría experta para tramitar tu Visa Americana B1/B2 (primera vez y renovación sin entrevista), Visa de Canadá y eTA, Visa de México y Visados a España en Lima, Perú. Llenado DS-160, adelanto de cita y simulacro de entrevista en Los Olivos (RUC 20614914239)."),
  keywords: [
    "tramite de visa americana en lima peru",
    "asesoria visa americana b1 b2 lima",
    "renovacion de visa americana sin entrevista peru",
    "adelanto de cita embajada estados unidos lima",
    "tramite visa canada lima peru eta",
    "requisitos visa mexico para peruanos 2026",
    "visado de estudios y trabajo espana peru",
    "agencia de visas en los olivos lima norte",
    "cityland travel visas",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/visas",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/visas",
    title:
      "Trámite y Asesoría de Visa Americana, Canadá, México y España en Lima — Cityland Travel",
    description:
      "Evaluación de perfil, llenado profesional DS-160 / IRCC, adelanto de cita y simulacro 1 a 1 de entrevista consular.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [
      {
        url: "https://citylandtravel.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Asesoría de Visas EE.UU., Canadá, México y España — Cityland Travel",
      },
    ],
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Los Olivos, Lima, Perú",
  },
};

const JSON_LD_VISAS = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio — Cityland Travel",
          item: "https://citylandtravel.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Trámite y Asesoría de Visas (EE.UU., Canadá, México y España)",
          item: "https://citylandtravel.com/visas",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Servicios de Asesoría y Trámite de Visas en Lima, Perú",
      numberOfItems: SERVICIOS_VISAS.length,
      itemListElement: SERVICIOS_VISAS.map((v, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Service",
          name: v.titulo,
          description: v.resumenCorto,
          provider: {
            "@type": "TravelAgency",
            name: "Cityland Travel E.I.R.L.",
          },
          offers: {
            "@type": "AggregateOffer",
            offerCount: "1",
            priceCurrency: "USD",
            lowPrice: String(v.tarifaDesdeUSD),
            availability: "https://schema.org/InStock",
            url: "https://citylandtravel.com/visas",
          },
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué incluye el servicio de asesoría para la Visa Americana B1/B2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Incluye la evaluación completa de tu perfil y arraigos en Perú, llenado técnico del formulario oficial DS-160 en inglés, creación de cuenta consular, programación o monitoreo de adelanto de cita, armado de carpeta documental y simulacro personalizado 1 a 1 para tu entrevista en la Embajada de EE.UU. en Lima.",
          },
        },
        {
          "@type": "Question",
          name: "¿Los peruanos necesitan visa para viajar a México o Canadá en 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, los ciudadanos peruanos requieren visa consular para ingresar a México y Canadá. Si cuentas con una visa americana vigente o tuviste visa canadiense en los últimos 10 años, podemos tramitar tu autorización electrónica eTA para volar a Canadá sin necesidad de visa tradicional.",
          },
        },
      ],
    },
  ],
};

export default function VisasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_VISAS) }}
      />
      <VisasLandingClient />
    </>
  );
}
