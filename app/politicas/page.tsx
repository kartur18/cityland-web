import { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Políticas de Privacidad y Términos | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Política de privacidad, cookies y términos y condiciones de servicio de Cityland Travel E.I.R.L. (RUC 20614914239), agencia de viajes en Lima."),
  alternates: {
    canonical: "https://citylandtravel.com/politicas",
  },
};

export default function PoliticasPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-28 pb-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-4">
            Políticas y Términos de Servicio
          </h1>
          <p className="text-[14px] text-gray-400 mb-12">
            Documento oficial vigente · Temporada 2026
          </p>

          {/* Política de Privacidad */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#0a1628] tracking-tight mb-4">
              Política de Privacidad
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              En Cityland Travel nos comprometemos a proteger la privacidad de
              nuestros clientes y visitantes. La información personal que
              recopilamos a través de nuestro sitio web, formularios de contacto
              y canales de comunicación (como WhatsApp) se utiliza exclusivamente
              para brindarle un mejor servicio, procesar sus cotizaciones y
              mantenerlo informado sobre nuestras ofertas de viaje.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              No compartimos, vendemos ni alquilamos su información personal a
              terceros, salvo cuando sea necesario para completar una reserva
              (aerolíneas, hoteles, aseguradoras) o cuando la ley lo requiera.
              Implementamos medidas de seguridad técnicas y organizativas para
              proteger sus datos contra acceso no autorizado, pérdida o
              alteración.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Usted tiene derecho a acceder, rectificar o solicitar la
              eliminación de sus datos personales en cualquier momento,
              contactándonos a través de nuestros canales de atención. Nos
              reservamos el derecho de actualizar esta política periódicamente
              para reflejar cambios en nuestras prácticas o en la legislación
              aplicable.
            </p>
          </section>

          {/* Política de Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#0a1628] tracking-tight mb-4">
              Política de Cookies
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Nuestro sitio web utiliza cookies y tecnologías similares para
              mejorar su experiencia de navegación, analizar el tráfico del sitio
              y personalizar el contenido. Las cookies son pequeños archivos de
              texto que se almacenan en su dispositivo cuando visita nuestro
              sitio.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Utilizamos cookies esenciales para el funcionamiento del sitio,
              cookies analíticas (como Google Analytics) para comprender cómo los
              visitantes interactúan con nuestro sitio, y cookies de marketing
              para mostrarle contenido relevante. Puede gestionar sus
              preferencias de cookies desde la configuración de su navegador.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Al continuar navegando en nuestro sitio, usted acepta el uso de
              cookies de acuerdo con esta política. Puede desactivar las cookies
              en cualquier momento, aunque esto puede afectar la funcionalidad
              de algunas secciones del sitio.
            </p>
          </section>

          {/* Términos y Condiciones */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#0a1628] tracking-tight mb-4">
              Términos y Condiciones
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Al utilizar el sitio web de Cityland Travel y contratar nuestros
              servicios, usted acepta los presentes términos y condiciones. Los
              precios publicados en nuestro sitio son referenciales y están
              sujetos a disponibilidad y temporada. El precio final será
              confirmado al momento de la cotización personalizada.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Las reservas se confirman una vez realizado el pago
              correspondiente. Las políticas de cancelación y reembolso varían
              según el tipo de servicio contratado (vuelos, hoteles, paquetes) y
              serán comunicadas al momento de la compra. Cityland Travel actúa
              como intermediario entre el cliente y los proveedores de servicios
              turísticos.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              El contenido de este sitio web, incluyendo textos, imágenes,
              logotipos y diseño, es propiedad de Cityland Travel y está
              protegido por las leyes de propiedad intelectual. Queda prohibida
              su reproducción sin autorización expresa. Nos reservamos el
              derecho de modificar estos términos en cualquier momento.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
