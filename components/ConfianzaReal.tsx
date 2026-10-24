import Link from "next/link";
import { OFICINAS, RESENAS_GOOGLE_URL, WHATSAPP_OFICIALES } from "@/components/constantes";

// Solo datos que se pueden comprobar: oficinas, RUC, comprobante y canales oficiales. Sin testimonios ni calificaciones.
export default function ConfianzaReal() {
  return (
    <section id="confianza" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            Agencia formal
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
            Oficinas reales en Los Olivos y pagos con comprobante
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Antes de pagar, visítanos o verifica que estás hablando con Cityland Travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-4">
            <h3 className="text-base font-extrabold text-[#0a1628]">Visítanos</h3>
            {OFICINAS.map((o) => (
              <div key={o.ruc} className="text-sm text-slate-600">
                <p className="font-bold text-[#0a1628]">{o.direccion}</p>
                <p className="text-xs mt-0.5">
                  {o.razonSocial} · RUC {o.ruc}
                </p>
                <a
                  href={o.mapa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[44px] text-sm font-bold text-emerald-700 hover:underline"
                >
                  Cómo llegar
                </a>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-3">
            <h3 className="text-base font-extrabold text-[#0a1628]">Paga con respaldo</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="text-emerald-600 font-extrabold">✓</span>
                <span>Separas con el 50% y pagas el saldo antes de viajar.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-extrabold">✓</span>
                <span>Recibes boleta o factura electrónica a nombre de la agencia.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-extrabold">✓</span>
                <span>Tu boleto llega con código de reserva que puedes revisar en la web de la aerolínea.</span>
              </li>
            </ul>
            <Link
              href="/blog/como-verificar-codigo-reserva-pnr-aerolinea"
              className="inline-flex items-center min-h-[44px] text-sm font-bold text-emerald-700 hover:underline"
            >
              Cómo verificar tu código de reserva
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-3">
            <h3 className="text-base font-extrabold text-[#0a1628]">Verifica que hablas con nosotros</h3>
            <p className="text-sm text-slate-600">Estos son nuestros WhatsApp oficiales:</p>
            <ul className="space-y-2 text-sm">
              {WHATSAPP_OFICIALES.map((w) => (
                <li key={w.numero}>
                  <span className="font-bold text-[#0a1628] tabular-nums">{w.numero}</span>
                  <span className="block text-xs text-slate-500">{w.uso}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/canales-oficiales"
              className="inline-flex items-center min-h-[44px] text-sm font-bold text-emerald-700 hover:underline"
            >
              Ver todos los canales oficiales
            </Link>
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-600">
          ¿Ya viajaste con nosotros?{" "}
          <a
            href={RESENAS_GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#0a1628] underline underline-offset-2 hover:text-emerald-700"
          >
            Cuéntale a otros viajeros en Google
          </a>
        </p>
      </div>
    </section>
  );
}
