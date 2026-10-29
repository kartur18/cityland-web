import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { buildWaUrl } from "@/components/constantes";

// Llamados a WhatsApp de las páginas de seguros. Cada uno lleva su fuente en el «Ref Web» (Portada, Cotizador,
// Pregunta, FAQ, Cierre, Barra móvil) y cada uno tiene otra forma: nunca van dos botones verdes iguales juntos.

export function waSeguro(ruta: string, mensaje: string, fuente: string): string {
  return buildWaUrl({ categoria: "general", mensajePersonalizado: mensaje, refWeb: `citylandtravel.com${ruta} [${fuente}]` });
}

const EXTERNO = { target: "_blank", rel: "noopener noreferrer" } as const;

// Botón de la portada: píldora coral.
export function BotonPortada({ href, texto }: { href: string; texto: string }) {
  return (
    <a
      href={href}
      {...EXTERNO}
      className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#ff6a3d] px-7 text-base font-extrabold text-white shadow-lg shadow-orange-900/20 hover:bg-[#f05a2c]"
    >
      <WhatsAppIcon size={20} />
      {texto}
    </a>
  );
}

// Burbuja de chat con la pregunta ya escrita: botón de borde.
export function PreguntaSeguro({ ruta, pregunta }: { ruta: string; pregunta: string }) {
  return (
    <section className="rounded-3xl border border-[#0f2e2c]/10 bg-[#fbf7f1] p-4 sm:p-6" aria-labelledby="pregunta-seguro">
      <div className="mx-auto max-w-xl space-y-3">
        <h2 id="pregunta-seguro" className="text-center text-sm font-bold text-slate-600">
          ¿Tu caso se parece? Mándanos la pregunta tal cual
        </h2>
        <div className="flex justify-end">
          <p className="max-w-[88%] rounded-2xl rounded-br-sm bg-[#d9fdd3] px-4 py-3 text-[15px] font-semibold text-slate-900 shadow-sm">{pregunta}</p>
        </div>
        <a
          href={waSeguro(ruta, `¡Hola Cityland Travel! ${pregunta}`, "Pregunta")}
          {...EXTERNO}
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-[#0f2e2c] bg-white px-5 text-base font-extrabold text-[#0f2e2c] hover:bg-[#0f2e2c] hover:text-white"
        >
          <WhatsAppIcon size={18} />
          Enviar esta pregunta
        </a>
      </div>
    </section>
  );
}

// Enlace chico bajo cada respuesta del FAQ: texto subrayado, sin fondo.
export function DudaSeguro({ ruta, pregunta }: { ruta: string; pregunta: string }) {
  return (
    <a
      href={waSeguro(ruta, `¡Hola Cityland Travel! Tengo una duda sobre el seguro: ${pregunta}`, "FAQ")}
      {...EXTERNO}
      className="mt-2 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-[#c2410c] underline decoration-2 underline-offset-4"
    >
      <WhatsAppIcon size={14} /> Pregúntale a una asesora
    </a>
  );
}

// Cierre: banda coral con botón oscuro cuadrado.
export function CierreSeguro({ ruta, titulo, mensaje }: { ruta: string; titulo: string; mensaje: string }) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-[#ff6a3d] to-[#e8452a] p-6 sm:p-10 text-white">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-balance">{titulo}</h2>
          <p className="text-base text-orange-50 max-w-2xl">
            Mándanos destino, fechas y edades. Te respondemos con las opciones por WhatsApp y te enviamos la póliza en PDF.
          </p>
        </div>
        <a
          href={waSeguro(ruta, mensaje, "Cierre")}
          {...EXTERNO}
          className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-[#0f2e2c] px-7 text-lg font-extrabold text-white hover:bg-black"
        >
          <WhatsAppIcon size={20} />
          Quiero mi seguro
        </a>
      </div>
    </section>
  );
}
