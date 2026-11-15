import Link from "next/link";
import GuiaMeses from "@/components/viaja-a-madrid/GuiaMeses";
import Icono, { type NombreIcono } from "@/components/viaja-a-madrid/Iconos";
import { PRECIO_ANTICIPADO, PRECIO_OTRAS_FECHAS } from "@/lib/viaja-a-madrid";
import estilos from "@/app/viaja-a-madrid/viaja.module.css";

export const CONTENEDOR = "mx-auto w-full max-w-6xl px-5";
const AHORRO = PRECIO_OTRAS_FECHAS - PRECIO_ANTICIPADO;
const fmt = (n: number) => n.toLocaleString("en-US");

// Etiqueta azul con rayita + título de sección.
export function Encabezado({ etiqueta, titulo, texto }: { etiqueta: string; titulo: string; texto?: string }) {
  return (
    <div>
      <span className="inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#2563eb]">
        {etiqueta}
        <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-current" />
      </span>
      <h2 className="mt-2 text-balance text-2xl font-extrabold leading-[1.1] tracking-tight text-[#0a1628] sm:text-[34px]">{titulo}</h2>
      {texto && <p className="mt-2 max-w-2xl text-base text-slate-600">{texto}</p>}
    </div>
  );
}

// Guía para elegir el mes (clima y fiestas), en lugar de repetir el precio.
export function Meses() {
  return (
    <section id="meses" className="scroll-mt-20 py-12 sm:py-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Elige tu mes" titulo="¿Cuándo te conviene viajar?" texto="La tarifa es la misma en los tres meses. Elige según el clima que prefieres." />
        <GuiaMeses />
      </div>
    </section>
  );
}

// Una sola línea: cuánto cuesta en otras fechas, cuánto aquí y cuánto ahorras.
export function Comparativo() {
  return (
    <section className="py-12 sm:py-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Compara" titulo={`Ahorras US$ ${AHORRO} por persona`} />
        <div className={`${estilos.revelar} mt-6 grid items-center gap-4 rounded-2xl bg-[#f1ecff] p-5 sm:grid-cols-[1fr_auto_1fr_auto] sm:gap-6 sm:p-7`}>
          <div>
            <p className="text-sm font-semibold text-slate-500">Otras fechas, desde</p>
            <p className="text-4xl font-extrabold tracking-tighter text-slate-400 line-through decoration-[#e30613]/55 decoration-[3px]">US$ {fmt(PRECIO_OTRAS_FECHAS)}</p>
          </div>
          <span aria-hidden="true" className="hidden text-2xl font-bold text-[#7c3aed] sm:block">
            →
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-500">Abril, mayo o junio 2027</p>
            <p className="text-4xl font-extrabold tracking-tighter text-[#e30613]">US$ {PRECIO_ANTICIPADO}</p>
          </div>
          <p className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-[0_14px_24px_-18px_rgba(10,22,40,0.5)]">
            Si viajan 2, son <b className="text-[#0a1628]">US$ {fmt(AHORRO * 2)}</b> menos en total.
          </p>
        </div>
      </div>
    </section>
  );
}

const PASOS: { icono: NombreIcono; t: string; d: string; color: string }[] = [
  { icono: "calendario", t: "Elige tu mes y cuántos viajan", d: "Lo haces arriba, en el buscador. Se abre WhatsApp con tu mensaje listo.", color: "bg-[#2563eb]" },
  { icono: "mensaje", t: "Te enviamos las opciones", d: "Con aerolínea y escalas, equipaje incluido, horarios de ida y vuelta, y condiciones de cambio.", color: "bg-[#0d9488]" },
  { icono: "boleto", t: "Eliges y reservas", d: "Confirmamos el precio final con impuestos antes de que pagues.", color: "bg-[#7c3aed]" },
];

export function Pasos() {
  return (
    <section id="pasos" className="scroll-mt-20 pb-12 sm:pb-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Cómo reservar" titulo="Reservas en tres pasos" />
        <ol className="mt-6 grid gap-5 md:grid-cols-3 md:gap-8">
          {PASOS.map((p, i) => (
            <li key={p.t} className={`${estilos.revelar} flex gap-4`}>
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${p.color}`}>
                <Icono nombre={p.icono} className="h-6 w-6" />
              </span>
              <div>
                <b className="block text-base font-extrabold">
                  {i + 1}. {p.t}
                </b>
                <span className="mt-1 block text-[15px] leading-relaxed text-slate-600">{p.d}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Requisitos reales para peruanos (misma base que la guía de requisitos del sitio).
const REQUISITOS = [
  { t: "Sin visa hasta 90 días", d: "Los peruanos entran a España como turistas con pasaporte." },
  { t: "Pasaporte vigente", d: "Con al menos 3 meses de vigencia después de tu retorno." },
  { t: "Pasaje de ida y vuelta", d: "El regreso debe estar dentro de los 90 días." },
  { t: "Seguro de viaje", d: "Seguro Schengen con cobertura de 30.000 €." },
  { t: "Alojamiento", d: "Reserva de hotel, o carta de invitación si te quedas con familiares." },
  { t: "Dinero para tu estadía", d: "Unos 122 € por día, con un mínimo de 1.098,90 € por persona." },
];

export function Requisitos() {
  return (
    <section id="requisitos" className="scroll-mt-20 bg-[#e3f6f3] py-12 sm:py-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Requisitos" titulo="Qué pide España a los peruanos" texto="Esto es lo que te pueden pedir en migración. Al cotizar te confirmamos la lista actualizada." />
        <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
          {REQUISITOS.map((r) => (
            <li key={r.t} className="flex gap-3 border-t border-teal-900/10 py-3.5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-white">
                <Icono nombre="check" className="h-3.5 w-3.5" />
              </span>
              <p className="text-[15px] leading-snug text-slate-600">
                <b className="block text-base font-bold text-[#0a1628]">{r.t}</b>
                {r.d}
              </p>
            </li>
          ))}
        </ul>
        <Link href="/viajes/requisitos-viajar-a-espana-desde-peru" className="mt-5 inline-flex min-h-[44px] items-center text-sm font-bold text-[#0a1628] underline underline-offset-4">
          Ver la guía completa de requisitos
        </Link>
      </div>
    </section>
  );
}
