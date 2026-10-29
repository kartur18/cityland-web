import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";

// Llamados a WhatsApp de las landings de Italia. Cada uno lleva su fuente en el «Ref Web» (Precio, Pregunta, Mes,
// FAQ, Cierre, Barra móvil) y cada uno tiene otra forma: nunca van dos botones verdes iguales juntos.

export function waItalia(ruta: string, mensaje: string, fuente: string): string {
  return buildWaUrl({ categoria: "europa", mensajePersonalizado: mensaje, refWeb: `citylandtravel.com${ruta} [${fuente}]` });
}

const EXTERNO = { target: "_blank", rel: "noopener noreferrer" } as const;

// Burbuja de chat con la pregunta ya escrita.
export function PreguntaLista({ ruta, pregunta }: { ruta: string; pregunta: string }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-[#f4efe6] p-4 sm:p-6" aria-labelledby="pregunta-lista">
      <div className="mx-auto max-w-xl space-y-3">
        <h2 id="pregunta-lista" className="text-center text-sm font-bold text-slate-600">
          ¿Te pasa lo mismo? Mándanos tu duda tal cual
        </h2>
        <div className="flex justify-end">
          <p className="max-w-[88%] rounded-2xl rounded-br-sm bg-[#d9fdd3] px-4 py-3 text-[15px] font-semibold text-slate-900 shadow-sm">{pregunta}</p>
        </div>
        <a
          href={waItalia(ruta, `¡Hola Cityland Travel! ${pregunta}`, "Pregunta")}
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

// Enlace chico bajo cada respuesta del FAQ: texto subrayado, sin fondo.
export function DudaFaq({ ruta, pregunta }: { ruta: string; pregunta: string }) {
  return (
    <a
      href={waItalia(ruta, `¡Hola Cityland Travel! Tengo una duda: ${pregunta}`, "FAQ")}
      {...EXTERNO}
      className="mt-2 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-[#075E54] underline decoration-2 underline-offset-4"
    >
      <WhatsAppIcon size={14} /> Pregúntale a una asesora
    </a>
  );
}

// Botón del mes en la tabla de precios: cuadrado, borde oscuro.
export function BotonMes({ ruta, mensaje, mes }: { ruta: string; mensaje: string; mes: string }) {
  return (
    <a
      href={waItalia(ruta, `${mensaje} Quiero viajar en ${mes}.`, "Mes")}
      {...EXTERNO}
      aria-label={`Cotizar ${mes} por WhatsApp`}
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-300 bg-white text-[#0a1628] hover:border-[#0a1628]"
    >
      <WhatsAppIcon size={16} />
    </a>
  );
}

// Cierre de la página: bloque oscuro con botón blanco.
export function Cierre({ ruta, titulo, precio, texto, mensaje }: { ruta: string; titulo: string; precio?: number; texto: string; mensaje: string }) {
  return (
    <section className="rounded-3xl bg-[#0a1628] p-6 sm:p-10 text-white">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-balance">{titulo}</h2>
          <p className="text-base text-slate-300 max-w-2xl">{texto}</p>
        </div>
        <a
          href={waItalia(ruta, mensaje, "Cierre")}
          {...EXTERNO}
          className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-white px-7 text-lg font-extrabold text-[#0a1628] hover:bg-emerald-50"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon size={18} />
          </span>
          {precio ? `Cotizar desde ${formatoUSD(precio)}` : "Escribir a una asesora"}
        </a>
      </div>
    </section>
  );
}
