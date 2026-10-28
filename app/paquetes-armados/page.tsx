import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QueEsPaqueteArmado from "@/components/paquetes-armados/QueEsPaqueteArmado";
import { Migas, SelloArmado } from "@/components/paquetes-armados/Bloques";
import { formatoUSD } from "@/lib/formato-precio";
import { precioCityland } from "@/lib/circuitos";
import { DESTINOS_CARIBE } from "@/lib/paquetes-armados/destinos-caribe";
import { DESTINOS_MUNDO } from "@/lib/paquetes-armados/destinos-mundo";
import { paginasCaribe, type ClasePagina } from "@/lib/paquetes-armados/paginas-caribe";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";

export const revalidate = 86400;

const URL = `${URL_BASE_SEO}/paquetes-armados`;

export const metadata: Metadata = {
  title: "Paquetes armados desde Lima: Caribe, Europa, Turquía y más | Cityland",
  description:
    "Paquetes armados a Punta Cana, Aruba, Cancún, Cartagena, Río, Europa, Turquía, Egipto, Japón y más: fecha fija, vuelo, hotel y traslados listos. Separa con el 50%.",
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, title: "Paquetes armados desde Lima", siteName: "Cityland Travel", locale: "es_PE" },
};

const ETIQUETA: Record<ClasePagina, string> = { mes: "Por mes", estilo: "Por tipo de viaje", hotel: "Por hotel" };

// Vitrina de los paquetes armados de playa, destino por destino.
export default function PaquetesArmadosPage() {
  const paginas = paginasCaribe();
  const destinos = [...DESTINOS_CARIBE, ...DESTINOS_MUNDO].map((d) => ({ d, ps: paginas.filter((p) => p.destino.id === d.id) })).filter((x) => x.ps.length);
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <header className="space-y-4">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Paquetes armados" }]} />
            <SelloArmado texto="Caribe, Europa, Asia y más" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight">Paquetes armados desde Lima</h1>
            <p className="text-[17px] text-slate-700">
              Viajes ya organizados: fecha fija, vuelo, hotel y traslados reservados. Elige el destino y luego el mes, el tipo de viaje o el hotel.
            </p>
          </header>

          {destinos.map(({ d, ps }) => {
            const desde = Math.min(...ps.flatMap((p) => p.programas.map(precioCityland)));
            return (
              <section key={d.id} id={d.id} className="scroll-mt-28 space-y-3 border-t border-slate-200 pt-6">
                <h2 className="text-2xl font-extrabold text-[#0a1628] first-letter:uppercase">
                  {d.nombre} <span className="text-base font-bold text-slate-500">desde {formatoUSD(desde)}</span>
                </h2>
                <p className="text-[15px] text-slate-700">{d.intro}</p>
                {(["estilo", "mes", "hotel"] as ClasePagina[]).map((clase) => {
                  const xs = ps.filter((p) => p.clase === clase);
                  if (!xs.length) return null;
                  return (
                    <div key={clase} className="space-y-2">
                      <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">{ETIQUETA[clase]}</h3>
                      <ul className="flex flex-wrap gap-2">
                        {xs.map((p) => (
                          <li key={p.slug}>
                            <Link
                              href={`/paquetes-armados/${p.slug}`}
                              className="inline-flex min-h-[44px] items-center rounded-full border border-slate-200 px-4 text-sm font-bold text-[#0a1628] hover:border-[#0a1628]"
                            >
                              {p.clave.charAt(0).toUpperCase() + p.clave.slice(1)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </section>
            );
          })}

          <QueEsPaqueteArmado />
          <p className="text-sm text-slate-600">
            ¿Prefieres elegir por fecha?{" "}
            <Link href="/salidas" className="font-bold text-[#0a1628] underline">
              Mira el calendario de salidas
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
