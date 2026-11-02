const WA_BASE = "https://wa.me/51944103890";

export type Alterno = { whatsapp: string; correo: string | null };

export function enlaceWhatsAppReclamo(codigo?: string) {
  const texto = codigo
    ? `Hola Cityland Travel, presenté una hoja del Libro de Reclamaciones con el código ${codigo}.`
    : "Hola Cityland Travel, quiero presentar un reclamo (Libro de Reclamaciones).";
  return `${WA_BASE}?text=${encodeURIComponent(texto)}`;
}

// Canales para presentar el reclamo por otra vía cuando el envío en línea falla o no está disponible.
export function AvisoContingencia({ mensaje, alterno }: { mensaje: string; alterno: Alterno | null }) {
  return (
    <div role="alert" className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
      <p className="font-bold">{mensaje}</p>
      <p className="mt-2">Puedes presentar tu reclamo por estas vías y queda registrado igual:</p>
      <ul className="mt-2 space-y-1.5">
        <li>
          <a href={enlaceWhatsAppReclamo()} target="_blank" rel="noopener noreferrer" className="font-bold underline">
            WhatsApp oficial +51 944 103 890
          </a>
        </li>
        {alterno?.correo ? (
          <li>
            Correo:{" "}
            <a href={`mailto:${alterno.correo}`} className="font-bold underline">
              {alterno.correo}
            </a>
          </li>
        ) : null}
        <li>En nuestra oficina de Los Olivos, de lunes a sábado de 9:00 a. m. a 7:00 p. m.</li>
      </ul>
    </div>
  );
}

export function ConstanciaReclamo({ codigo, fecha, copiaEnviada, correo }: { codigo: string; fecha?: string; copiaEnviada: boolean; correo: string }) {
  return (
    <div role="status" className="rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-[#0a1628]">
      <h2 className="text-xl font-extrabold">Recibimos tu hoja de reclamación</h2>
      <p className="mt-2 text-sm">
        Tu código es <strong className="text-lg tracking-wider">{codigo}</strong>
        {fecha ? <span> · {fecha}</span> : null}. Guárdalo: te responderemos en un plazo no mayor a quince (15) días hábiles, improrrogables.
      </p>
      {copiaEnviada ? (
        <p className="mt-2 text-sm">
          Enviamos una copia a <strong>{correo}</strong>. Si no la ves en unos minutos, revisa spam o promociones.
        </p>
      ) : (
        <p className="mt-2 text-sm font-semibold text-amber-900">
          No pudimos enviar la copia a {correo}. Anota tu código y pídenos la constancia por{" "}
          <a href={enlaceWhatsAppReclamo(codigo)} target="_blank" rel="noopener noreferrer" className="underline">
            WhatsApp
          </a>
          .
        </p>
      )}
    </div>
  );
}
