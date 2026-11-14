import Image from "next/image";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
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
      <h2 className="mt-2 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-[#0a1628] sm:text-[40px]">{titulo}</h2>
      {texto && <p className="mt-2 text-base text-slate-600 sm:text-lg">{texto}</p>}
    </div>
  );
}

const FOTOS = [
  { src: "/images/espana/cibeles.jpg", alt: "Plaza de Cibeles, Madrid", t: "Plaza de Cibeles", clase: "md:row-span-2 min-h-[220px]" },
  { src: "/images/espana/palacio-real.jpg", alt: "Palacio Real de Madrid", t: "Palacio Real", clase: "" },
  { src: "/images/espana/plaza-mayor.jpg", alt: "Plaza Mayor de Madrid", t: "Plaza Mayor", clase: "md:col-span-2" },
];

export function Destino() {
  return (
    <section id="destino" className="scroll-mt-20 bg-[#eaf1ff] py-14 sm:py-[72px]">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Destino" titulo="Madrid en abril, mayo o junio" texto={`Tres meses para elegir y una sola tarifa: US$ ${PRECIO_ANTICIPADO} por persona.`} />
        <div className="mt-6 grid gap-3 md:grid-cols-[1.3fr_1fr_1fr] md:grid-rows-[200px_200px]">
          {FOTOS.map((f) => (
            <div
              key={f.src}
              className={`${estilos.revelar} group relative h-[190px] overflow-hidden rounded-[20px] shadow-[0_26px_40px_-26px_rgba(10,22,40,0.6)] transition-transform duration-300 hover:-translate-y-1.5 md:h-auto ${f.clase}`}
            >
              <Image src={f.src} alt={f.alt} fill sizes="(min-width: 768px) 40vw, 92vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute bottom-3 left-3 rounded-lg bg-white px-3 py-1.5 text-[13px] font-bold">{f.t}</span>
            </div>
          ))}
        </div>
        <BotonCotizar zona="Destino" texto="Cotizar mi viaje a Madrid" className="mt-7" />
      </div>
    </section>
  );
}

const BENEFICIOS: { icono: NombreIcono; t: string; d: string; color: string; fondo: string }[] = [
  { icono: "avion", t: "Ida y vuelta", d: "Incluida en el precio", color: "text-[#2563eb]", fondo: "bg-[#e1ecff]" },
  { icono: "mensaje", t: "Cotiza por WhatsApp", d: "Gratis y sin DNI", color: "text-[#0d9488]", fondo: "bg-[#dcf5ee]" },
  { icono: "ubicacion", t: "2 oficinas", d: "En Los Olivos, Lima", color: "text-[#7c3aed]", fondo: "bg-[#f1ecff]" },
  { icono: "calendario", t: "Abril · mayo · junio", d: "Viaja en 2027", color: "text-[#f97316]", fondo: "bg-[#fff0e4]" },
];

export function Beneficios() {
  return (
    <section className="py-10 sm:py-14">
      <div className={`${CONTENEDOR} grid gap-0 md:grid-cols-4 md:gap-6`}>
        {BENEFICIOS.map((b) => (
          <div key={b.t} className={`${estilos.revelar} grid grid-cols-[44px_1fr] items-center gap-x-3 border-t border-slate-200 py-3.5 first:border-t-0 md:grid-cols-1 md:gap-y-2 md:border-t-0 md:py-0`}>
            <span className={`row-span-2 flex h-11 w-11 items-center justify-center rounded-xl md:row-span-1 ${b.fondo} ${b.color}`}>
              <Icono nombre={b.icono} className="h-6 w-6" />
            </span>
            <b className="text-[15px] font-bold">{b.t}</b>
            <span className="text-[13px] text-slate-500">{b.d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Comparativo() {
  return (
    <section className="bg-[#f1ecff] py-14 sm:py-[72px]">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Compara" titulo={`Esta tarifa es US$ ${AHORRO} más barata`} />
        <div className="mt-8 grid items-center gap-5 md:grid-cols-[1fr_auto_1.2fr] md:gap-8">
          <div className="px-1">
            <p className="text-sm font-semibold text-slate-500">Otras fechas</p>
            <p className="my-1 text-[clamp(40px,9vw,60px)] font-extrabold leading-[1.1] tracking-tighter text-slate-400 line-through decoration-[#e30613]/55 decoration-4">US$ {fmt(PRECIO_OTRAS_FECHAS)}</p>
            <p className="text-sm font-semibold text-slate-500">Tarifa desde, por persona</p>
          </div>

          <span aria-hidden="true" className="hidden h-[54px] w-[54px] items-center justify-center rounded-full bg-[#7c3aed] text-[15px] font-extrabold text-white shadow-[0_10px_20px_-8px_rgba(124,58,237,0.7)] md:flex">
            VS
          </span>

          <div className={`${estilos.revelar} relative rounded-3xl bg-white p-7 pt-9 shadow-[0_40px_70px_-34px_rgba(10,22,40,0.55),0_0_0_2px_#e30613] transition-transform duration-300 hover:-translate-y-1.5`}>
            <span className="absolute -top-4 left-6 rounded-[10px] bg-[#e30613] px-4 py-2 text-sm font-extrabold text-white shadow-[0_12px_20px_-8px_rgba(227,6,19,0.7)]">Ahorras US$ {AHORRO}</span>
            <p className="text-sm font-semibold text-slate-500">Abril, mayo o junio 2027</p>
            <p className="mb-1 mt-1.5 text-[clamp(56px,13vw,92px)] font-extrabold leading-none tracking-tighter text-[#e30613]">US$ {PRECIO_ANTICIPADO}</p>
            <p className="text-sm font-semibold text-slate-500">Ida y vuelta Lima–Madrid, por persona</p>
            <ul className="mb-5 mt-4 grid gap-2 text-[15px] font-semibold">
              {["Boleto de ida y vuelta incluido", "Cotización gratis por WhatsApp"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white">
                    <Icono nombre="check" className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <BotonCotizar zona="Comparativo" texto="Quiero esta tarifa" className="w-full" />
          </div>
        </div>

        <p className="mt-7 flex flex-wrap items-baseline gap-x-3.5 gap-y-1 rounded-2xl bg-[#0a1628] px-6 py-4 text-white shadow-[0_24px_40px_-26px_rgba(10,22,40,0.7)]">
          <b className="text-[22px] font-extrabold">Viajan 2</b>
          <span className="text-lg font-semibold">
            ahorran <em className="rounded-lg bg-[#0d9488] px-2.5 py-0.5 font-extrabold not-italic">US$ {fmt(AHORRO * 2)}</em> en total
          </span>
          <span className="text-sm opacity-70 md:ml-auto">
            {PRECIO_ANTICIPADO} + {PRECIO_ANTICIPADO} = US$ {fmt(PRECIO_ANTICIPADO * 2)}
          </span>
        </p>
      </div>
    </section>
  );
}

const PASOS: { icono: NombreIcono; t: string; d: string; color: string; sombra: string }[] = [
  { icono: "calendario", t: "Elige tu mes", d: "Abril, mayo o junio de 2027.", color: "bg-[#2563eb]", sombra: "shadow-[0_14px_22px_-10px_rgba(37,99,235,0.7)]" },
  { icono: "mensaje", t: "Recibe opciones", d: "Te escribimos con vuelos y precios.", color: "bg-[#0d9488]", sombra: "shadow-[0_14px_22px_-10px_rgba(13,148,136,0.7)]" },
  { icono: "boleto", t: "Reserva y vuela", d: `Aseguras tu tarifa de US$ ${PRECIO_ANTICIPADO}.`, color: "bg-[#7c3aed]", sombra: "shadow-[0_14px_22px_-10px_rgba(124,58,237,0.7)]" },
];

export function Pasos() {
  return (
    <section id="pasos" className="scroll-mt-20 py-14 sm:py-[72px]">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Cómo reservar" titulo="Reserva en 3 pasos" />
        <ol className="relative mt-8 grid gap-6 md:grid-cols-3 md:gap-7">
          <span aria-hidden="true" className="absolute left-[12%] right-[12%] top-[57px] hidden border-t-[3px] border-dashed border-[#c5d3f5] md:block" />
          {PASOS.map((p, i) => (
            <li key={p.t} className={`${estilos.revelar} relative z-10 rounded-[20px] bg-white p-6 shadow-[0_26px_44px_-30px_rgba(10,22,40,0.5),0_0_0_1px_#e3e8f0]`}>
              <span className={`relative mb-3.5 flex h-[62px] w-[62px] items-center justify-center rounded-[18px] text-white ${p.color} ${p.sombra}`}>
                <Icono nombre={p.icono} className="h-[30px] w-[30px]" />
                <span className="absolute -right-2.5 -top-2.5 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-white bg-[#0a1628] text-sm font-extrabold">{i + 1}</span>
              </span>
              <b className="block text-xl font-extrabold tracking-tight">{p.t}</b>
              <span className="mt-1 block text-[15px] text-slate-600">{p.d}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const DOCUMENTOS = ["Pasaporte vigente", "Boleto de ida y vuelta", "Reserva de alojamiento", "Seguro de viaje"];

export function Requisitos() {
  return (
    <section id="requisitos" className="scroll-mt-20 bg-[#e3f6f3] py-14 sm:py-[72px]">
      <div className={`${CONTENEDOR} grid items-center gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-14`}>
        <div className="relative h-60 -rotate-1 overflow-hidden rounded-[22px] shadow-[0_34px_50px_-30px_rgba(13,148,136,0.7)] md:h-[340px]">
          <Image src="/images/espana/gran-via-metropolis.jpg" alt="Gran Vía y el edificio Metrópolis, Madrid" fill sizes="(min-width: 768px) 45vw, 92vw" className="object-cover" />
          <span className="absolute bottom-3.5 left-3.5 rounded-[9px] bg-white px-3 py-1.5 text-[13px] font-bold">Gran Vía, Madrid</span>
        </div>
        <div>
          <Encabezado etiqueta="Requisitos" titulo="Lo que pide España a los peruanos" />
          <ul className="mt-5 grid gap-2.5">
            {DOCUMENTOS.map((d) => (
              <li key={d} className="flex items-center gap-3 rounded-[14px] bg-white px-4 py-3.5 text-base font-bold shadow-[0_14px_24px_-18px_rgba(10,22,40,0.5)]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-white">
                  <Icono nombre="check" className="h-4 w-4" />
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
