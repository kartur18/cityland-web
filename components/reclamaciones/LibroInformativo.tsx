import { PROVEEDOR_RECLAMOS, TEXTO_LEGAL_RECLAMOS, TEXTO_QUEJA, TEXTO_RECLAMO, WHATSAPP_RECLAMOS } from "@/lib/reclamaciones/proveedor";

const TARJETA = "rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm";
const TITULO = "text-base font-extrabold text-[#0a1628] mb-3";

const MENSAJE_WHATSAPP =
  "Hola, quiero presentar un reclamo/queja:\n\nNombre completo: \nDNI o documento: \nServicio contratado: \nQué ocurrió: \nQué solución pido: ";

export const ENLACE_WHATSAPP_INFORMATIVO = `https://wa.me/${WHATSAPP_RECLAMOS}?text=${encodeURIComponent(MENSAJE_WHATSAPP)}`;

// Modo sin formulario: solo informa los dos canales reales (libro físico y WhatsApp). No promete constancia por correo.
export default function LibroInformativo({ domicilio, correo }: { domicilio: string; correo?: string }) {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">Libro de Reclamaciones</h1>
        <p className="text-base text-slate-600">
          Si algo no salió bien con tu viaje o con nuestra atención, puedes presentar un reclamo o una queja en nuestra oficina o por WhatsApp. Esta página
          es solo informativa: aquí no se llena ninguna hoja en línea.
        </p>
      </header>

      <section aria-labelledby="proveedor" className={TARJETA}>
        <h2 id="proveedor" className={TITULO}>Proveedor</h2>
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

      <section aria-labelledby="fisico" className={TARJETA}>
        <h2 id="fisico" className={TITULO}>Libro de Reclamaciones físico</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          En nuestra oficina de {domicilio} hay un Libro de Reclamaciones físico a disposición de todo consumidor. Atendemos de lunes a sábado, de 9:00 a. m.
          a 7:00 p. m.
        </p>
      </section>

      <section aria-labelledby="whatsapp" className={TARJETA}>
        <h2 id="whatsapp" className={TITULO}>Presenta tu reclamo o queja por WhatsApp</h2>
        <p className="text-sm text-slate-700 leading-relaxed">Escríbenos al WhatsApp oficial +51 944 103 890 con estos datos para registrar tu reclamo o queja:</p>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>Tu nombre completo y tu DNI o documento de identidad.</li>
          <li>El servicio o producto que contrataste.</li>
          <li>El detalle de lo que ocurrió.</li>
          <li>Lo que pides como solución.</li>
        </ul>
        <a
          href={ENLACE_WHATSAPP_INFORMATIVO}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full inline-flex items-center justify-center min-h-[52px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-base font-extrabold shadow-md transition-colors"
        >
          Presentar mi reclamo o queja por WhatsApp
        </a>
        {correo ? (
          <p className="mt-4 text-sm text-slate-700">
            También puedes escribirnos al correo{" "}
            <a href={`mailto:${correo}`} className="font-bold text-emerald-700 underline">{correo}</a>.
          </p>
        ) : null}
      </section>

      <section aria-labelledby="tipos" className={TARJETA}>
        <h2 id="tipos" className={TITULO}>¿Reclamo o queja?</h2>
        <ul className="text-sm text-slate-700 space-y-1.5">
          <li>{TEXTO_RECLAMO}</li>
          <li>{TEXTO_QUEJA}</li>
        </ul>
      </section>

      <p className="text-xs text-slate-500 leading-relaxed">
        {TEXTO_LEGAL_RECLAMOS}
      </p>
    </div>
  );
}
