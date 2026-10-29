import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormularioReclamo from "@/components/reclamaciones/FormularioReclamo";
import { enlaceWhatsAppReclamo } from "@/components/reclamaciones/AvisosReclamo";
import { OFICINAS } from "@/components/constantes";
import { URL_BASE_SEO, optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import {
  DOMICILIO_PROVEEDOR_RESPALDO,
  PLAZO_RESPUESTA_DIAS_HABILES,
  PROVEEDOR_RECLAMOS,
  TEXTO_LEGAL_RECLAMOS,
  correosDestino,
} from "@/lib/reclamaciones/proveedor";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Libro de Reclamaciones virtual | Cityland Travel"),
  description: optimizarMetaDescriptionSEO(
    "Presenta tu reclamo o queja en el Libro de Reclamaciones virtual de Cityland Group E.I.R.L. (RUC 20614914239). Recibes copia por correo y respuesta en 15 días hábiles."
  ),
  alternates: { canonical: `${URL_BASE_SEO}/libro-de-reclamaciones` },
  robots: { index: true, follow: true },
};

export default function LibroDeReclamacionesPage() {
  // El domicilio sale de la misma lista de oficinas del pie, buscando la que tiene el RUC de la E.I.R.L.
  const domicilio = OFICINAS.find((o) => o.ruc === PROVEEDOR_RECLAMOS.ruc)?.direccion ?? DOMICILIO_PROVEEDOR_RESPALDO;
  const correo = correosDestino()[0];

  return (
    <>
      <Navbar />
      <main className="bg-slate-50 min-h-screen pt-28 pb-20">
        <div className="max-w-[760px] mx-auto px-4 sm:px-5 space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              Libro de Reclamaciones virtual
            </h1>
            <p className="text-base text-slate-600">
              Si algo no salió bien con tu viaje o con nuestra atención, cuéntanoslo aquí. Es gratis, recibes una copia
              en tu correo y te respondemos en un plazo no mayor a {PLAZO_RESPUESTA_DIAS_HABILES} días hábiles.
            </p>
          </header>

          <section aria-labelledby="proveedor" className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
            <h2 id="proveedor" className="text-base font-extrabold text-[#0a1628] mb-3">
              Proveedor
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-4 gap-y-1.5 text-sm text-slate-700">
              <dt className="font-bold text-slate-600">Razón social</dt>
              <dd>{PROVEEDOR_RECLAMOS.razonSocial}</dd>
              <dt className="font-bold text-slate-600">RUC</dt>
              <dd>{PROVEEDOR_RECLAMOS.ruc}</dd>
              <dt className="font-bold text-slate-600">Nombre comercial</dt>
              <dd>{PROVEEDOR_RECLAMOS.nombreComercial}</dd>
              <dt className="font-bold text-slate-600">Domicilio</dt>
              <dd>{domicilio}</dd>
            </dl>
          </section>

          <FormularioReclamo />

          <section aria-labelledby="otras-vias" className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm space-y-3">
            <h2 id="otras-vias" className="text-base font-extrabold text-[#0a1628]">
              Otras formas de presentar tu reclamo
            </h2>
            <p className="text-sm text-slate-600">
              Si el formulario no te funciona, escríbenos y lo registramos igual:
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>
                <a href={enlaceWhatsAppReclamo()} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-700 underline">
                  WhatsApp oficial +51 944 103 890
                </a>
              </li>
              {correo ? (
                <li>
                  Correo:{" "}
                  <a href={`mailto:${correo}`} className="font-bold text-emerald-700 underline">
                    {correo}
                  </a>
                </li>
              ) : null}
              <li>En persona: {domicilio}. Lunes a sábado de 9:00 a. m. a 7:00 p. m.</li>
            </ul>
          </section>

          <p className="text-xs text-slate-500 leading-relaxed">
            {TEXTO_LEGAL_RECLAMOS} Consulta también nuestras{" "}
            <Link href="/politicas" className="underline font-semibold">
              políticas y términos
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
