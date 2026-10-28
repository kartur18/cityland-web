import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import type { AtajoWhatsApp } from "@/lib/landings-espana-tipos";

// Llamados a WhatsApp de las landings de España. Cada uno lleva su propia fuente en el «Ref Web»
// (Precio, Pregunta, Atajo, FAQ, Cierre, Barra móvil) para ver en la Bandeja cuál trae más chats.

export function waEspana(ruta: string, mensaje: string, fuente: string): string {
  return buildWaUrl({ categoria: "europa", mensajePersonalizado: mensaje, refWeb: `citylandtravel.com${ruta} [${fuente}]` });
}

const EXTERNO = { target: "_blank", rel: "noopener noreferrer" } as const;

// Tarjeta con forma de chat: la pregunta ya escrita, lista para mandar.
export function TarjetaPregunta({ ruta, pregunta }: { ruta: string; pregunta: string }) {
  const wa = waEspana(ruta, `¡Hola Cityland Travel! ${pregunta}`, "Pregunta");
  return (
    <section className="rounded-3xl border border-slate-200 bg-[#efeae2] p-4 sm:p-6" aria-labelledby="pregunta-lista">
      <div className="mx-auto max-w-xl space-y-3">
        <h2 id="pregunta-lista" className="text-center text-sm font-bold text-slate-600">
          ¿Tienes esta duda? Mándala tal cual
        </h2>
        <div className="flex items-end gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0a1628] text-xs font-extrabold text-white" aria-hidden="true">
            CT
          </span>
          <p className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-[15px] text-slate-800 shadow-sm">
            Hola, soy tu asesora de Cityland. ¿Qué quieres saber de tu viaje?
          </p>
        </div>
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-[#d9fdd3] px-4 py-3 text-[15px] font-semibold text-slate-900 shadow-sm">{pregunta}</p>
        </div>
        <a
          href={wa}
          {...EXTERNO}
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-[#128C7E] bg-white px-5 text-base font-extrabold text-[#075E54] hover:bg-[#128C7E] hover:text-white"
        >
          <WhatsAppIcon size={18} />
          Enviar esta pregunta
        </a>
      </div>
    </section>
  );
}

// Botones cortos: cada uno abre WhatsApp con su mes, su ciudad o su caso ya escrito.
export function Atajos({ ruta, titulo, atajos }: { ruta: string; titulo: string; atajos: AtajoWhatsApp[] }) {
  return (
    <section className="space-y-3" aria-labelledby="atajos">
      <h2 id="atajos" className="text-xl font-extrabold text-[#0a1628]">
        {titulo}
      </h2>
      <ul className="flex flex-wrap gap-2.5">
        {atajos.map((a) => (
          <li key={a.texto}>
            <a
              href={waEspana(ruta, a.mensaje, `Atajo: ${a.texto}`)}
              {...EXTERNO}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 text-sm font-bold text-emerald-900 hover:border-emerald-500 hover:bg-emerald-100"
            >
              <WhatsAppIcon size={14} />
              {a.texto}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Enlace de texto al pie de cada pregunta frecuente.
export function PreguntaFaq({ ruta, pregunta }: { ruta: string; pregunta: string }) {
  return (
    <a
      href={waEspana(ruta, `¡Hola Cityland Travel! Tengo una duda: ${pregunta}`, "FAQ")}
      {...EXTERNO}
      className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-[#075E54] underline decoration-emerald-300 underline-offset-4 hover:decoration-[#075E54]"
    >
      <WhatsAppIcon size={14} />
      Pregúntale esto a tu asesora
    </a>
  );
}

// Cierre: precio, la razón real para no esperar y un último botón.
export function CierreUrgencia({ ruta, titulo, precio, urgencia, mensaje }: { ruta: string; titulo: string; precio: number; urgencia: string; mensaje: string }) {
  return (
    <section className="overflow-hidden rounded-3xl bg-[#0a1628] text-white" aria-labelledby="cierre">
      <div className="grid gap-6 p-6 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
        <div className="space-y-3">
          <p className="inline-flex rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold uppercase text-[#0a1628]">No lo dejes para después</p>
          <h2 id="cierre" className="text-2xl sm:text-3xl font-extrabold text-balance">
            {titulo}
          </h2>
          <p className="text-base text-slate-200">{urgencia}</p>
          <p className="text-slate-300">
            Desde <strong className="text-3xl text-white">{formatoUSD(precio)}</strong> por persona · separas con el 50%
          </p>
        </div>
        <a
          href={waEspana(ruta, mensaje, "Cierre")}
          {...EXTERNO}
          className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 text-base font-extrabold text-white hover:bg-[#20ba5a]"
        >
          <WhatsAppIcon size={20} />
          Quiero mi cotización
        </a>
      </div>
    </section>
  );
}

// Llamado a mitad de página: tarjeta clara con borde punteado y botón oscuro (no verde), para no repetir la portada.
export function CtaMedio({ ruta, titulo, texto, boton, mensaje }: { ruta: string; titulo: string; texto: string; boton: string; mensaje: string }) {
  return (
    <section className="flex flex-col gap-4 rounded-3xl border-2 border-dashed border-teal-300 bg-teal-50/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628]">{titulo}</h2>
        <p className="text-base text-slate-700">{texto}</p>
      </div>
      <a
        href={waEspana(ruta, mensaje, "Mitad de página")}
        {...EXTERNO}
        className="flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0a1628] px-6 text-base font-extrabold text-white hover:bg-[#13284a]"
      >
        <WhatsAppIcon size={18} />
        {boton}
      </a>
    </section>
  );
}
