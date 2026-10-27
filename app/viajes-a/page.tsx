import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { circuitosVigentes } from "@/lib/circuitos";
import { ciudadesConProgramas } from "@/lib/hubs-ciudades";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";

export const revalidate = 86400;

const DESCRIPCION =
  "Viajes desde Lima a más de 50 ciudades del mundo con programas reales y salidas confirmadas: Europa, Turquía, Egipto, Japón, Tailandia, Marruecos, Estados Unidos, Brasil y Costa Rica.";

export const metadata: Metadata = {
  title: "Viajes desde Lima por ciudad: circuitos y paquetes | Cityland",
  description: DESCRIPCION,
  alternates: { canonical: `${URL_BASE_SEO}/viajes-a` },
};

// Índice de las páginas «Viajes a <ciudad> desde Lima», con cuántos programas tiene cada una.
export default function ViajesAPage() {
  const todos = circuitosVigentes();
  const ciudades = ciudadesConProgramas()
    .map((h) => ({ h, n: todos.filter(h.filtro).length }))
    .sort((a, b) => b.n - a.n);
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <header className="space-y-3 max-w-3xl">
            <nav aria-label="Migas de pan" className="text-xs text-slate-500">
              <Link href="/" className="hover:underline">
                Inicio
              </Link>{" "}
              /{" "}
              <Link href="/circuitos" className="hover:underline">
                Circuitos
              </Link>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">Viajes desde Lima por ciudad</h1>
            <p className="text-base sm:text-lg text-slate-600">{DESCRIPCION}</p>
          </header>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ciudades.map(({ h, n }) => (
              <li key={h.ruta}>
                <Link
                  href={h.ruta}
                  className="flex items-center justify-between gap-3 min-h-[56px] rounded-2xl border border-slate-200 px-5 py-4 hover:border-[#0a1628] transition-colors"
                >
                  <span className="font-extrabold text-[#0a1628]">{h.nombre}</span>
                  <span className="text-sm text-slate-600 whitespace-nowrap">{n} programas</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
