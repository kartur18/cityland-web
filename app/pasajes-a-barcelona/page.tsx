import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Image from "next/image";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { BarraConfianza, HeroVenta } from "@/components/paquetes-armados/Venta";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { absoluta } from "@/lib/paquetes-armados/fotos";
import PorQueCityland from "@/components/PorQueCityland";
import { GUIAS_ESPANA } from "@/components/GuiasEspana";
import { DESTINOS_EUROPA, buildWaUrl } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { formatoUSD } from "@/lib/formato-precio";
import { buscarRutaVuelo } from "@/lib/rutas-vuelos";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

// Barcelona es el segundo destino de España más pedido por WhatsApp; desde junio de 2026 LEVEL vuela directo
// Lima–Barcelona (tres veces por semana, según la nota de Iberia Agencias). Precios de la ficha de cada ruta.
const RUTA = "/pasajes-a-barcelona";
const FOTOS = obtenerGaleriaPorTexto("barcelona espana");
const DESCRIPCION =
  "Pasajes Lima–Barcelona ida y vuelta, vuelo directo desde junio de 2026 o con escala en Madrid, paquete turístico con hotel y paquete migratorio a Barcelona. Separa con el 50%.";

const FAQS = [
  {
    q: "¿Hay vuelo directo de Lima a Barcelona?",
    a: "Sí. Desde junio de 2026 la aerolínea LEVEL vuela directo Lima–Barcelona tres veces por semana. También puedes ir con escala en Madrid con Iberia, Air Europa o LATAM. Te cotizamos la opción que te convenga según la fecha.",
  },
  {
    q: "¿Necesito visa para Barcelona?",
    a: "No. Los peruanos viajan como turistas hasta 90 días solo con pasaporte. En migración te pueden pedir el pasaje de regreso, el hotel o la carta de invitación y dinero para tu estadía.",
  },
  {
    q: "¿Cuántos días necesito para conocer Barcelona?",
    a: "Con 4 o 5 días ves lo principal: la Sagrada Familia, el Park Güell, el Barrio Gótico, las Ramblas y la playa de la Barceloneta. Nuestro paquete turístico es de 8 días e incluye vuelo y hotel.",
  },
  {
    q: "¿Y si quiero viajar solo de ida?",
    a: "Mira el paquete migratorio a Barcelona: incluye el vuelo de ida y la carpeta de viaje que te armamos para el aeropuerto.",
  },
];

export const metadata: Metadata = {
  title: "Pasajes a Barcelona desde Lima: directo y con escala | Cityland",
  description: DESCRIPCION,
  alternates: { canonical: `${URL_BASE_SEO}${RUTA}` },
  openGraph: {
    type: "website",
    url: `${URL_BASE_SEO}${RUTA}`,
    title: "Pasajes a Barcelona desde Lima",
    description: DESCRIPCION,
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [absoluta(FOTOS[0], URL_BASE_SEO)],
  },
};

export default function PasajesABarcelonaPage() {
  const ida = buscarRutaVuelo("lima-barcelona");
  const vuelta = buscarRutaVuelo("barcelona-lima");
  const paquete = [...DESTINOS_EUROPA, ...DESTINOS_MASIVOS].find((d) => d.slug === "barcelona-espana");
  const wa = buildWaUrl({
    categoria: "europa",
    mensajePersonalizado: "¡Hola Cityland Travel! Quiero cotizar un pasaje a Barcelona.",
    refWeb: `citylandtravel.com${RUTA}`,
  });
  const opciones = [
    ida && { titulo: "Pasaje Lima–Barcelona ida y vuelta", detalle: `Desde ${formatoUSD(ida.precioDesdeUSD)}`, href: `/vuelos/${ida.slug}` },
    paquete && {
      titulo: `Paquete turístico a Barcelona (${paquete.duracion ?? "con hotel"})`,
      detalle: `Vuelo + hotel desde ${formatoUSD(paquete.turistico)}`,
      href: `/destinos/${paquete.slug}`,
    },
    {
      titulo: "Paquete migratorio a Barcelona",
      detalle: "Solo ida con carpeta de viaje",
      href: "/paquetes-migratorios/espana-barcelona-plan-promo-699",
    },
    vuelta && {
      titulo: "Pasaje Barcelona–Lima",
      detalle: `Para viajar a Perú desde ${formatoUSD(vuelta.precioDesdeUSD)}`,
      href: `/vuelos/${vuelta.slug}`,
    },
  ].filter((o): o is { titulo: string; detalle: string; href: string } => Boolean(o));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Pasajes a España", item: `${URL_BASE_SEO}/pasajes-a-espana` },
          { "@type": "ListItem", position: 3, name: "Barcelona", item: `${URL_BASE_SEO}${RUTA}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-slate-50/60 pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-3">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Pasajes a España", href: "/pasajes-a-espana" }, { nombre: "Barcelona" }]} />
            <HeroVenta
              foto={FOTOS[0]}
              alt="Pasajes y paquetes a Barcelona desde Lima"
              marca="Pasajes"
              sello="Lima → Barcelona"
              titulo="Pasajes y paquetes a Barcelona desde Lima"
              bajada="Desde junio de 2026 hay vuelo directo Lima–Barcelona, y también puedes ir con escala en Madrid. Elige si vas de vacaciones, con hotel incluido, o solo de ida."
              chips={["Vuelo directo", "Paquete con hotel", "Solo ida"]}
              etiquetaPrecio={ida ? "Ida y vuelta desde, por persona" : "Te cotizamos tu fecha por WhatsApp"}
              precio={ida?.precioDesdeUSD}
              detallePrecio={ida ? "Precio referencial; te damos el de tu fecha." : undefined}
              wa={wa}
              boton="Cotizar Barcelona"
              ancla="Ver opciones y precios"
              nota="Te damos el precio exacto de tu fecha por WhatsApp"
            />
          </div>

          <BarraConfianza />

          <section className="space-y-4" aria-labelledby="opciones">
            <h2 id="opciones" className="text-2xl font-extrabold text-[#0a1628]">
              Elige cómo viajar a Barcelona
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {opciones.map((o, i) => (
                <li key={o.href}>
                  <Link
                    href={o.href}
                    className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
                  >
                    <span className="relative block aspect-[16/9] bg-slate-100">
                      <Image
                        src={FOTOS[i % FOTOS.length]}
                        alt={o.titulo}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <span className="block px-5 pt-4 font-extrabold text-[#0a1628]">{o.titulo}</span>
                    <span className="block px-5 pb-4 text-[15px] font-bold text-emerald-700 mt-0.5">{o.detalle}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500">Precios referenciales por persona; cambian según la fecha y la aerolínea.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Preguntas frecuentes</h2>
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

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-[#0a1628]">Guías para tu viaje a España</h2>
            <div className="flex flex-wrap gap-2.5">
              {GUIAS_ESPANA.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]"
                >
                  {g.texto}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <PorQueCityland destino="Barcelona" />
      <Footer />
      <WhatsAppFloat href={wa} />
    </>
  );
}
