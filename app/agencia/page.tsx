import type { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import Link from "next/link";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";
import { AGENCIAS_LOCALES_SEO } from "@/lib/catalogo-agencias-locales";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Agencia de Viajes Oficial en Lima y Perú (RUC 20614914239) | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Conoce Cityland Group E.I.R.L., agencia de viajes formal en Lima Norte (Los Olivos) con atención presencial y en todo el Perú para vuelos, paquetes turísticos, cruceros y visas."),
  alternates: {
    canonical: "https://citylandtravel.com/agencia",
  },
};

const SEDES_DISTRITALES_DESTACADAS = [
  { href: "/agencia-de-viajes-lima", label: "Lima Metropolitana" },
  { href: "/agencia-de-viajes-lima-norte", label: "Lima Norte" },
  { href: "/agencia-de-viajes-los-olivos", label: "Los Olivos (Sede Central)" },
  { href: "/agencia-de-viajes-san-martin-de-porres", label: "San Martín de Porres" },
  { href: "/agencia-de-viajes-independencia", label: "Independencia" },
  { href: "/agencia-de-viajes-comas", label: "Comas" },
  { href: "/agencia/carabayllo", label: "Carabayllo" },
  { href: "/agencia/puente-piedra", label: "Puente Piedra" },
  { href: "/agencia/callao", label: "Callao" },
];

const CONFIG_AGENCIA_CENTRAL = obtenerConfigAgenciaOficial(
  "Lima y Todo el Perú",
  "Sede central presencial en Av. Antúnez de Mayolo N. 814, Los Olivos (RUC 20614914239) y atención digital verificada en los 43 distritos de Lima, Callao y las 24 regiones del Perú."
);

export default function AgenciaCentralPage() {
  const distritosLima = AGENCIAS_LOCALES_SEO.filter((a) => a.tipoZona !== "provincia");
  const provinciasPeru = AGENCIAS_LOCALES_SEO.filter((a) => a.tipoZona === "provincia");

  return (
    <AirlineLandingTemplate config={CONFIG_AGENCIA_CENTRAL}>
      <section className="py-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
              Sede Física y Cobertura Directa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight mb-4">
              Atención Presencial en Lima Norte y Lima Metropolitana
            </h2>
            <div className="flex flex-wrap gap-2">
              {SEDES_DISTRITALES_DESTACADAS.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-xs font-bold bg-white hover:bg-red-50 text-[#0a1628] hover:text-red-600 border border-slate-200 px-3.5 py-2 rounded-xl transition-colors"
                >
                  📍 Agencia en {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-[#0a1628] mb-3">
              Cobertura por Distritos de Lima y Callao ({distritosLima.length} zonas)
            </h3>
            <div className="flex flex-wrap gap-2">
              {distritosLima.map((a) => (
                <Link
                  key={a.slug}
                  href={`/agencia/${a.slug}`}
                  className="text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Agencia de viajes en {a.zona}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-[#0a1628] mb-3">
              Cobertura Nacional en Provincias del Perú ({provinciasPeru.length} ciudades)
            </h3>
            <div className="flex flex-wrap gap-2">
              {provinciasPeru.map((a) => (
                <Link
                  key={a.slug}
                  href={`/agencia/${a.slug}`}
                  className="text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Agencia de viajes en {a.zona} ({a.region})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AirlineLandingTemplate>
  );
}
