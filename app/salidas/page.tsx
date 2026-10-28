import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fotoDe } from "@/lib/paquetes-armados/fotos";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QueEsPaqueteArmado from "@/components/paquetes-armados/QueEsPaqueteArmado";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { BarraConfianza, HeroVenta } from "@/components/paquetes-armados/Venta";
import { buildWaUrl } from "@/components/constantes";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { absoluta } from "@/lib/paquetes-armados/fotos";
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
  openGraph: {
    type: "website",
    url: URL,
    title: "Paquetes armados con fecha de salida",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [absoluta(obtenerGaleriaPorTexto("estambul turquia")[0], URL_BASE_SEO)],
  },
};

// Calendario de todas las salidas con cupo bloqueado, por mes.
export default function SalidasPage() {
  const meses = mesesConSalidas();
  const todas = salidasVigentes();
  const total = todas.length;
  const barata = todas.reduce((x, y) => (precioSalida(y) < precioSalida(x) ? y : x));
  const proxima = [...todas].sort((a, b) => a.fecha.localeCompare(b.fecha))[0];
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: "¡Hola Cityland Travel! Quiero un paquete armado con fecha fija. ¿Qué salidas tienen con cupo?",
    refWeb: "citylandtravel.com/salidas",
  });
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-slate-50/60 pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="space-y-3">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Salidas con fecha" }]} />
            <HeroVenta
              foto={fotoDe(proxima.circuito)}
              alt="Paquetes armados con fecha de salida"
              sello={`${total} salidas con cupo`}
              titulo="Paquetes armados con fecha de salida"
              bajada="Viajes ya organizados con fecha fija: el vuelo, los hoteles y los traslados están reservados y solo eliges tu salida. Los cupos de cada fecha son limitados."
              chips={["Fecha fija", "Cupo bloqueado", `${meses.length} meses`]}
              etiquetaPrecio="La salida más barata, por persona"
              precio={precioSalida(barata)}
              detallePrecio={`${barata.circuito.nombre}, ${barata.circuito.dias} días`}
              proxima={proxima}
              wa={wa}
              boton="Consultar cupos"
            />
          </div>

          <BarraConfianza />

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {meses.map((m) => {
              const desde = Math.min(...m.salidas.map(precioSalida));
              const destinos = [...new Set(m.salidas.map((s) => s.circuito.paises[0]))];
              const foto = fotoDe([...m.salidas].sort((a, b) => a.precio - b.precio)[0].circuito);
              return (
                <li key={m.clave}>
                  <Link
                    href={`/salidas/${m.clave}`}
                    className="group block h-full overflow-hidden rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <span className="relative block aspect-[16/9] bg-slate-100">
                      <Image
                        src={foto}
                        alt={`Paquetes armados con salida en ${m.nombre}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <span className="block p-5 pb-0 text-xl font-extrabold capitalize text-[#0a1628]">{m.nombre}</span>
                    <span className="block px-5 text-sm text-slate-600 mt-1">
                      {m.salidas.length} salidas · desde {formatoUSD(desde)}
                    </span>
                    <span className="block px-5 pb-5 text-sm text-slate-500 mt-2">{destinos.slice(0, 6).join(", ")}</span>
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
      <WhatsAppFloat href={wa} />
    </>
  );
}
