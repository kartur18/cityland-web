import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { circuitosVigentes, precioCityland } from "@/lib/circuitos";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { BarraConfianza, HeroVenta } from "@/components/paquetes-armados/Venta";
import { buildWaUrl } from "@/components/constantes";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { absoluta } from "@/lib/paquetes-armados/fotos";

import { ciudadesConProgramas } from "@/lib/hubs-ciudades";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";

export const revalidate = 86400;

const FOTO = obtenerGaleriaPorTexto("estambul turquia")[0];

const DESCRIPCION =
  "Viajes desde Lima a más de 50 ciudades del mundo con programas reales y salidas confirmadas: Europa, Turquía, Egipto, Japón, Tailandia, Marruecos, Estados Unidos, Brasil y Costa Rica.";

export const metadata: Metadata = {
  title: "Viajes desde Lima por ciudad: circuitos y paquetes | Cityland",
  description: optimizarMetaDescriptionSEO(DESCRIPCION),
  alternates: { canonical: `${URL_BASE_SEO}/viajes-a` },
  openGraph: {
    type: "website",
    url: `${URL_BASE_SEO}/viajes-a`,
    title: "Viajes desde Lima por ciudad",
    description: DESCRIPCION,
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [absoluta(FOTO, URL_BASE_SEO)],
  },
};

// Índice de las páginas «Viajes a <ciudad> desde Lima», con cuántos programas tiene cada una.
export default function ViajesAPage() {
  const todos = circuitosVigentes();
  const ciudades = ciudadesConProgramas()
    .map((h) => ({ h, n: todos.filter(h.filtro).length }))
    .sort((a, b) => b.n - a.n);
  const desde = Math.min(...todos.filter((c) => c.tipo === "vuelo").map(precioCityland));
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: "¡Hola Cityland Travel! Quiero cotizar un viaje desde Lima. ¿Qué programas tienen con cupo?",
    refWeb: "citylandtravel.com/viajes-a",
  });
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-slate-50/60 pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-3">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Circuitos", href: "/circuitos" }, { nombre: "Viajes por ciudad" }]} />
            <HeroVenta
              foto={FOTO}
              alt="Viajes desde Lima por ciudad"
              marca="Viajes"
              sello={`${ciudades.length} ciudades`}
              titulo="Viajes desde Lima por ciudad"
              bajada={DESCRIPCION}
              chips={["Programas reales", "Salidas confirmadas", "Con y sin vuelo"]}
              etiquetaPrecio="Con vuelo desde Lima, por persona"
              precio={desde}
              detallePrecio={`${todos.length} programas en ${ciudades.length} ciudades`}
              wa={wa}
              boton="Cotizar por WhatsApp"
            />
          </div>

          <BarraConfianza />
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
      <WhatsAppFloat href={wa} />
    </>
  );
}
