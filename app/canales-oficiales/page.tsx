import { Metadata } from "next";
import Link from "next/link";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { OFICINAS, WHATSAPP_OFICIALES, WA_LINK, RESENAS_GOOGLE_URL } from "@/components/constantes";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Canales oficiales de Cityland Travel: verifica antes de pagar"),
  description: optimizarMetaDescriptionSEO(
    "WhatsApp, oficinas, razón social y RUC oficiales de Cityland Travel en Los Olivos. Verifica que hablas con nosotros antes de pagar tu viaje."
  ),
  alternates: { canonical: "https://citylandtravel.com/canales-oficiales" },
};

const REDES = [
  { nombre: "Facebook", url: "https://www.facebook.com/citylandtraveloficial" },
  { nombre: "Instagram", url: "https://www.instagram.com/citylandtravel/" },
  { nombre: "TikTok", url: "https://www.tiktok.com/@citylandtravel" },
];

// Página contra suplantaciones: hubo una página falsa que usaba el nombre de Cityland con otro número.
export default function CanalesOficialesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-28 pb-20">
        <div className="max-w-[760px] mx-auto px-5 space-y-10">
          <header className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              Canales oficiales de Cityland Travel
            </h1>
            <p className="text-base text-slate-600">
              Hay páginas que usan nombres parecidos al nuestro. Antes de pagar, revisa que el número, la oficina y la
              razón social coincidan con los de esta página.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0a1628]">WhatsApp oficiales</h2>
            <ul className="divide-y divide-slate-200 border border-slate-200 rounded-2xl">
              {WHATSAPP_OFICIALES.map((w) => (
                <li key={w.numero} className="p-4">
                  <span className="block text-lg font-extrabold text-[#0a1628] tabular-nums">{w.numero}</span>
                  <span className="text-sm text-slate-600">{w.uso}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600">
              Si alguien te escribe desde otro número diciendo que es de Cityland, escríbenos primero a uno de estos
              para confirmarlo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0a1628]">Oficinas y razón social</h2>
            <ul className="space-y-3">
              {OFICINAS.map((o) => (
                <li key={o.ruc} className="border border-slate-200 rounded-2xl p-4">
                  <span className="block font-extrabold text-[#0a1628]">{o.direccion}</span>
                  <span className="block text-sm text-slate-600">
                    {o.razonSocial} · RUC {o.ruc}
                  </span>
                  <a
                    href={o.mapa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-[44px] text-sm font-bold text-emerald-700 hover:underline"
                  >
                    Ver en Google Maps
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600">
              Atendemos de lunes a sábado, de 9:00 a. m. a 7:00 p. m. Puedes verificar cualquiera de los dos RUC en la
              consulta RUC de SUNAT.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0a1628]">Antes de pagar</h2>
            <ul className="space-y-2.5 text-[15px] text-slate-700">
              <li className="flex gap-2">
                <span className="text-emerald-600 font-extrabold">✓</span>
                <span>Pide tu boleta o factura electrónica con el RUC de Cityland.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-extrabold">✓</span>
                <span>
                  Revisa tu código de reserva en la web de la aerolínea.{" "}
                  <Link href="/blog/como-verificar-codigo-reserva-pnr-aerolinea" className="font-bold text-emerald-700 hover:underline">
                    Así se hace
                  </Link>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-extrabold">✓</span>
                <span>Si tienes dudas, visítanos en cualquiera de las dos oficinas antes de pagar.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0a1628]">Redes sociales oficiales</h2>
            <div className="flex flex-wrap gap-2.5">
              {REDES.map((r) => (
                <a
                  key={r.nombre}
                  href={r.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="inline-flex items-center min-h-[44px] px-4 rounded-xl border border-slate-200 text-sm font-bold text-[#0a1628] hover:bg-slate-50"
                >
                  {r.nombre}
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3">
            <p className="text-base font-extrabold text-[#0a1628]">¿Quieres cotizar o confirmar algo?</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold"
            >
              Escribir al WhatsApp oficial
            </a>
            <p className="text-sm text-slate-600">
              ¿Ya viajaste con nosotros?{" "}
              <a href={RESENAS_GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-[#0a1628] underline underline-offset-2">
                Déjanos tu reseña en Google
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
