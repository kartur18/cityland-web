import Image from "next/image";
import Link from "next/link";
import { OFICINAS } from "@/components/constantes";
import GuiaMeses from "@/components/viaja-a-madrid/GuiaMeses";
import Icono, { type NombreIcono } from "@/components/viaja-a-madrid/Iconos";
import { FOTOS_CLIENTES, HORARIO, PRECIO_ANTICIPADO } from "@/lib/viaja-a-madrid";
import estilos from "@/app/viaja-a-madrid/viaja.module.css";

export const CONTENEDOR = "mx-auto w-full max-w-6xl px-5";

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

// Tarjetas de mes. No promete que todas las fechas cuesten lo mismo: la tarifa se confirma al cotizar.
export function Meses() {
  return (
    <section id="meses" className="scroll-mt-20 bg-[#f4f7fb] py-12 sm:py-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Meses disponibles" titulo="¿Cuándo te gustaría viajar?" texto="Explora los meses disponibles y solicita una cotización para tus fechas." />
        <GuiaMeses />
      </div>
    </section>
  );
}

// Reemplaza al comparativo de ahorro (sin respaldo verificable): una invitación ligera, sin recuadro grande.
export function Planifica() {
  return (
    <section className="py-12 sm:py-16">
      <div className={`${CONTENEDOR} flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10`}>
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-extrabold leading-[1.1] tracking-tight text-[#0a1628] sm:text-[30px]">Planifica hoy tu viaje a Madrid para 2027</h2>
          <p className="mt-2 text-base text-slate-600">Consulta nuestras opciones de ida y vuelta desde US$ {PRECIO_ANTICIPADO} y recibe orientación para elegir tus fechas de viaje.</p>
        </div>
        <a
          href="#cotiza"
          className="inline-flex min-h-[48px] shrink-0 items-center justify-center self-start rounded-xl border-[1.5px] border-[#0a1628] px-6 text-[15px] font-bold text-[#0a1628] transition-colors hover:bg-[#0a1628] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]"
        >
          Consultar disponibilidad
        </a>
      </div>
    </section>
  );
}

const ARGUMENTOS: { icono: NombreIcono; t: string; d: string }[] = [
  { icono: "persona", t: "Atención personalizada", d: "Nuestros asesores te ayudan a revisar las alternativas para tu viaje." },
  { icono: "ubicacion", t: "Oficinas físicas en Lima", d: "Puedes encontrarnos en nuestras sedes de Los Olivos." },
  { icono: "escudo", t: "Información clara antes de reservar", d: "Te orientamos sobre tarifas, itinerarios y condiciones antes de confirmar tu compra." },
];

// Confianza comercial: oficinas reales y, cuando existan, fotos reales de clientes (lista FOTOS_CLIENTES). No hay testimonios ni puntajes inventados.
export function Confianza() {
  return (
    <section id="confianza" className="scroll-mt-20 pb-12 sm:pb-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Cityland Travel" titulo="Tu viaje, en buenas manos" texto="Conoce a Cityland Travel y recibe atención personalizada para organizar tu próximo viaje." />
        <ul className="mt-7 grid gap-5 md:grid-cols-3 md:gap-8">
          {ARGUMENTOS.map((a) => (
            <li key={a.t} className={`${estilos.revelar} flex gap-3.5`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0a1628] text-white">
                <Icono nombre={a.icono} className="h-6 w-6" />
              </span>
              <div>
                <b className="block text-base font-extrabold">{a.t}</b>
                <span className="mt-1 block text-[15px] leading-relaxed text-slate-600">{a.d}</span>
              </div>
            </li>
          ))}
        </ul>

        {FOTOS_CLIENTES.length > 0 && (
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {FOTOS_CLIENTES.map((f) => (
              <li key={f.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={f.src} alt={f.alt} fill loading="lazy" sizes="(min-width: 768px) 30vw, 46vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-8 grid gap-4 border-t border-slate-200 pt-6 md:grid-cols-2">
          {OFICINAS.map((o) => (
            <li key={o.nombre} className="text-[15px] leading-snug text-slate-600">
              <b className="block text-base font-bold text-[#0a1628]">{o.nombre}</b>
              <span className="block">{o.direccion}</span>
              <a href={o.mapa} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex min-h-[44px] items-center text-sm font-bold text-[#2563eb] underline underline-offset-4">
                Cómo llegar
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-500">{HORARIO}</p>
      </div>
    </section>
  );
}

const PASOS: { icono: NombreIcono; t: string; d: string }[] = [
  { icono: "calendario", t: "Elige tus fechas", d: "Selecciona tu mes de viaje y dinos cuántas personas viajarán." },
  { icono: "mensaje", t: "Recibe las opciones", d: "Un asesor te enviará alternativas con itinerarios, equipaje y condiciones de tarifa." },
  { icono: "boleto", t: "Confirma tu reserva", d: "Revisa las condiciones y el precio final antes de realizar el pago." },
];

export function Pasos() {
  return (
    <section id="pasos" className="scroll-mt-20 bg-[#f4f7fb] py-12 sm:py-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Cómo reservar" titulo="Reservar tu viaje es muy sencillo" />
        <ol className="mt-7 grid gap-5 md:grid-cols-3 md:gap-8">
          {PASOS.map((p, i) => (
            <li key={p.t} className={`${estilos.revelar} flex gap-4`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0a1628] text-white">
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

// Resumen de la guía de requisitos del propio sitio (misma base que /viajes/requisitos-viajar-a-espana-desde-peru). Pueden cambiar.
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
    <section id="requisitos" className="scroll-mt-20 py-12 sm:py-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Antes de viajar" titulo="Qué pide España a los peruanos" texto="Resumen de lo que te pueden pedir en migración. Los requisitos pueden cambiar: al cotizar te confirmamos la lista vigente." />
        <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
          {REQUISITOS.map((r) => (
            <li key={r.t} className="flex gap-3 border-t border-slate-200 py-3.5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white">
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
