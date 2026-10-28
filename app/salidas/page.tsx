import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QueEsPaqueteArmado from "@/components/paquetes-armados/QueEsPaqueteArmado";
import { Migas, SelloArmado } from "@/components/paquetes-armados/Bloques";
import { formatoUSD } from "@/lib/formato-precio";
import { mesesConSalidas, precioSalida, salidasVigentes } from "@/lib/salidas";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";

export const revalidate = 86400;

const URL = `${URL_BASE_SEO}/salidas`;

export const metadata: Metadata = {
  title: "Paquetes armados con fecha de salida desde Lima | Cityland",
  description:
    "Calendario de paquetes armados con fecha fija y cupo confirmado: Europa, Turquía, Egipto, Asia, Caribe y Sudamérica con vuelo desde Lima. Elige tu mes y separa con el 50%.",
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, title: "Paquetes armados con fecha de salida", siteName: "Cityland Travel", locale: "es_PE" },
};

// Calendario de todas las salidas con cupo bloqueado, por mes.
export default function SalidasPage() {
  const meses = mesesConSalidas();
  const total = salidasVigentes().length;
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <header className="space-y-4">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Salidas con fecha" }]} />
            <SelloArmado texto={`${total} salidas con cupo`} />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight">Paquetes armados con fecha de salida</h1>
            <p className="text-[17px] text-slate-700">
              Viajes ya organizados con fecha fija: el vuelo, los hoteles y los traslados están reservados y solo eliges tu salida. Los cupos de
              cada fecha son limitados.
            </p>
          </header>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {meses.map((m) => {
              const desde = Math.min(...m.salidas.map(precioSalida));
              const destinos = [...new Set(m.salidas.map((s) => s.circuito.paises[0]))];
              return (
                <li key={m.clave}>
                  <Link href={`/salidas/${m.clave}`} className="block h-full rounded-2xl border border-slate-200 p-5 hover:border-[#0a1628] transition-colors">
                    <span className="block text-xl font-extrabold capitalize text-[#0a1628]">{m.nombre}</span>
                    <span className="block text-sm text-slate-600 mt-1">
                      {m.salidas.length} salidas · desde {formatoUSD(desde)}
                    </span>
                    <span className="block text-sm text-slate-500 mt-2">{destinos.slice(0, 6).join(", ")}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <QueEsPaqueteArmado />
          <p className="text-sm text-slate-600">
            ¿Buscas un destino de playa?{" "}
            <Link href="/paquetes-armados" className="font-bold text-[#0a1628] underline">
              Mira los paquetes armados al Caribe
            </Link>{" "}
            o todos los{" "}
            <Link href="/circuitos" className="font-bold text-[#0a1628] underline">
              circuitos por el mundo
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
