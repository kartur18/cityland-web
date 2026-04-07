import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  DESTINOS_EUROPA,
  DESTINOS_CARIBE,
  cotLink,
  type Destino,
} from "@/components/constantes";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import DestinoGallery from "@/components/DestinoGallery";
import PriceDisplay from "@/components/PriceDisplay";

const ALL_DESTINOS = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE];

function findDestino(slug: string): Destino | undefined {
  return ALL_DESTINOS.find((d) => d.slug === slug);
}

function getRelated(current: Destino): Destino[] {
  const sameTipo = ALL_DESTINOS.filter(
    (d) => d.slug !== current.slug && d.tipo === current.tipo
  );
  const others = ALL_DESTINOS.filter(
    (d) => d.slug !== current.slug && d.tipo !== current.tipo
  );
  return [...sameTipo, ...others].slice(0, 3);
}

/* ── Static params ── */
export function generateStaticParams() {
  return ALL_DESTINOS.map((d) => ({ slug: d.slug }));
}

/* ── SEO metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = findDestino(slug);
  if (!dest) return { title: "Destino no encontrado" };

  const price = dest.migratorio ?? dest.turistico;
  return {
    title: `${dest.ciudad}, ${dest.pais} desde $${price} | Cityland Travel`,
    description: dest.descripcion,
    openGraph: {
      title: `Viaja a ${dest.ciudad} desde $${price}`,
      description: dest.descripcion,
      images: [{ url: dest.img, width: 1200, height: 630 }],
    },
  };
}

/* ── Page ── */
export default async function DestinoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = findDestino(slug);
  if (!dest) notFound();

  const price = dest.migratorio ?? dest.turistico;
  const related = getRelated(dest);
  const includes = [
    "Vuelo(s) incluido(s)",
    dest.tipo === "europa" ? "Seguro Schengen" : "Seguro de viaje",
    "Hotel incluido",
    "Asistencia 24/7",
    "Asesoría personalizada",
    "Traslados aeropuerto-hotel",
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={dest.img}
          alt={dest.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1100px] mx-auto px-5 pb-12 w-full">
            <AnimateOnScroll>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">
                {dest.bandera} {dest.pais}
              </p>
              <h1 className="font-[family-name:var(--font-bebas)] text-white text-[clamp(48px,8vw,80px)] leading-none tracking-wide mb-4">
                {dest.ciudad}
              </h1>
              <span className="inline-block bg-[#dc2626] text-white font-bold text-lg px-5 py-2 rounded-full">
                Desde ${price}
              </span>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {dest.gallery.length > 0 && (
        <section className="max-w-[1100px] mx-auto px-5 py-12">
          <AnimateOnScroll>
            <DestinoGallery gallery={dest.gallery} alt={dest.alt} />
          </AnimateOnScroll>
        </section>
      )}

      {/* ── Content grid ── */}
      <section className="max-w-[1100px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left 2/3 */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <AnimateOnScroll>
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-[#0a1628] text-3xl tracking-wide mb-4">
                  Sobre {dest.ciudad}
                </h2>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {dest.descripcion}
                </p>
              </div>
            </AnimateOnScroll>

            {/* Itinerary */}
            <AnimateOnScroll>
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-[#0a1628] text-3xl tracking-wide mb-6">
                  Itinerario sugerido
                </h2>
                <ol className="space-y-4">
                  {dest.itinerario.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0a1628] text-white text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <div className="pt-1">
                        <p className="text-gray-700 font-medium text-[15px]">
                          {step.includes(" – ") ? (
                            <>
                              <span className="font-bold text-[#0a1628]">
                                {step.split(" – ")[0]}
                              </span>
                              {" – "}
                              {step.split(" – ").slice(1).join(" – ")}
                            </>
                          ) : (
                            step
                          )}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimateOnScroll>

            {/* What's included */}
            <AnimateOnScroll>
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-[#0a1628] text-3xl tracking-wide mb-6">
                  Lo que incluye
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {includes.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 space-y-6">
              {/* Pricing */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  {dest.turiLabel ?? "Paquete turístico"}
                </p>
                <PriceDisplay
                  price={price}
                  regularPrice={dest.regularPrice}
                  cuotas={dest.cuotas}
                />
              </div>

              {/* Package description */}
              <p className="text-sm text-gray-500 border-t border-gray-100 pt-4">
                {dest.turiDesc}
              </p>

              {/* CTA */}
              <a
                href={cotLink(
                  dest.ciudad,
                  dest.tipo === "europa" ? "migratorio" : "turístico",
                  price
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-sm py-4 rounded-xl transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.528 5.856L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.727.973.996-3.636-.235-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
                Cotizar por WhatsApp
              </a>

              {/* Trust badges */}
              <div className="space-y-3 border-t border-gray-100 pt-4">
                {[
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Seguro de viaje incluido" },
                  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Respuesta en menos de 2h" },
                  { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", label: "Pago en cuotas sin interés" },
                  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", label: "Agencia registrada en Lima" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-[#0a1628] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={badge.icon}
                      />
                    </svg>
                    <span className="text-xs text-gray-600">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related destinations ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <AnimateOnScroll>
            <h2 className="font-[family-name:var(--font-bebas)] text-[#0a1628] text-4xl tracking-wide text-center mb-10">
              Otros destinos que te pueden interesar
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r, i) => {
              const rPrice = r.migratorio ?? r.turistico;
              return (
                <AnimateOnScroll key={r.slug} delay={i * 100}>
                  <Link
                    href={`/destinos/${r.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={r.img}
                        alt={r.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {r.tag && (
                        <span
                          className={`absolute top-3 left-3 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                            r.tagColor === "hot"
                              ? "bg-[#0a1628] text-white"
                              : r.tagColor === "promo"
                              ? "bg-amber-500 text-white"
                              : "bg-[#dc2626] text-white"
                          }`}
                        >
                          {r.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-gray-400 font-medium mb-1">
                        {r.bandera} {r.pais}
                      </p>
                      <h3 className="font-[family-name:var(--font-bebas)] text-[#0a1628] text-2xl tracking-wide mb-2">
                        {r.ciudad}
                      </h3>
                      <p className="text-[#dc2626] font-bold text-lg">
                        Desde ${rPrice}
                      </p>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
