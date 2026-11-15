import Image from "next/image";
import { OFICINAS } from "@/components/constantes";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import GuiaMeses from "@/components/viaja-a-madrid/GuiaMeses";
import Icono, { type NombreIcono } from "@/components/viaja-a-madrid/Iconos";
import { FOTOS_CLIENTES, HORARIO, PRECIO_ANTICIPADO, URL_FUENTE_REQUISITOS } from "@/lib/viaja-a-madrid";
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
    <section id="meses" className="scroll-mt-20 bg-[#eaf1ff] py-12 sm:py-16">
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
    <section className="bg-[#f1ecff] py-12 sm:py-14">
      <div className={`${CONTENEDOR} flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10`}>
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-extrabold leading-[1.1] tracking-tight text-[#0a1628] sm:text-[30px]">Planifica hoy tu viaje a Madrid para 2027</h2>
          <p className="mt-2 text-base text-slate-600">Consulta nuestras opciones de ida y vuelta desde US$ {PRECIO_ANTICIPADO} y recibe orientación para elegir tus fechas de viaje.</p>
        </div>
        <BotonCotizar zona="Intermedia" variante="borde" className="shrink-0 self-start" />
      </div>
    </section>
  );
}

const ARGUMENTOS: { icono: NombreIcono; t: string; d: string; color: string }[] = [
  { icono: "persona", t: "Atención personalizada", d: "Nuestros asesores te ayudan a revisar las alternativas para tu viaje.", color: "bg-[#2563eb]" },
  { icono: "ubicacion", t: "Oficinas físicas en Lima", d: "Puedes encontrarnos en nuestras sedes de Los Olivos.", color: "bg-[#e30613]" },
  { icono: "escudo", t: "Información clara antes de reservar", d: "Te orientamos sobre tarifas, itinerarios y condiciones antes de confirmar tu compra.", color: "bg-[#0d9488]" },
];

// Confianza comercial: oficinas reales y, cuando existan, fotos reales de clientes (lista FOTOS_CLIENTES). No hay testimonios ni puntajes inventados.
export function Confianza() {
  return (
    <section id="confianza" className="scroll-mt-20 py-12 sm:py-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Cityland Travel" titulo="Tu viaje, en buenas manos" texto="Conoce a Cityland Travel y recibe atención personalizada para organizar tu próximo viaje." />
        <ul className="mt-7 grid gap-5 md:grid-cols-3 md:gap-8">
          {ARGUMENTOS.map((a) => (
            <li key={a.t} className={`${estilos.revelar} flex gap-3.5 rounded-2xl bg-white p-5 shadow-[0_20px_40px_-28px_rgba(10,22,40,0.45),0_0_0_1px_#e3e8f0] transition-transform duration-300 hover:-translate-y-1`}>
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${a.color}`}>
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

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {OFICINAS.map((o) => (
            <li key={o.nombre} className="rounded-2xl bg-[#fff1f1] p-5 text-[15px] leading-snug text-slate-600">
              <b className="block text-base font-bold text-[#0a1628]">{o.nombre}</b>
              <span className="block">{o.direccion}</span>
              <a href={o.mapa} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex min-h-[44px] items-center text-sm font-bold text-[#2563eb] underline underline-offset-4">
                Cómo llegar
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-slate-500">{HORARIO}</p>
      </div>
    </section>
  );
}

const PASOS: { icono: NombreIcono; t: string; d: string; color: string }[] = [
  { icono: "calendario", t: "Elige tus fechas", d: "Selecciona tu mes de viaje y dinos cuántas personas viajarán.", color: "bg-[#2563eb]" },
  { icono: "mensaje", t: "Recibe las opciones", d: "Un asesor te enviará alternativas con itinerarios, equipaje y condiciones de tarifa.", color: "bg-[#0d9488]" },
  { icono: "boleto", t: "Confirma tu reserva", d: "Revisa las condiciones y el precio final antes de realizar el pago.", color: "bg-[#e30613]" },
];

export function Pasos() {
  return (
    <section id="pasos" className="scroll-mt-20 bg-[#eaf1ff] py-12 sm:py-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Cómo reservar" titulo="Reservar tu viaje es muy sencillo" />
        <ol className="mt-7 grid gap-5 md:grid-cols-3 md:gap-8">
          {PASOS.map((p, i) => (
            <li key={p.t} className={`${estilos.revelar} flex gap-4 rounded-2xl bg-white p-5 shadow-[0_22px_40px_-28px_rgba(10,22,40,0.5)] transition-transform duration-300 hover:-translate-y-1`}>
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

// Resumen de la página oficial del Ministerio del Interior de España (Entrada en España) y del Reglamento (UE) 2016/399. Verificado el 15-nov-2026.
// No se publican cifras de medios económicos de 2026 como si valieran para 2027: se remite al importe oficial vigente al viajar.
const REQUISITOS = [
  { t: "Estancia sin visa", d: "Hasta 90 días dentro de cualquier período de 180 días en el espacio Schengen, si cumples las condiciones aplicables." },
  { t: "Pasaporte", d: "Válido hasta 3 meses después de tu fecha prevista de salida del espacio Schengen y expedido en los últimos 10 años." },
  { t: "Pasaje de retorno", d: "Pueden pedirte documentos que justifiquen el motivo de tu viaje y tu salida o regreso previstos." },
  { t: "Seguro de viaje", d: "Recomendado, pero no es un requisito general de entrada para quienes viajan sin visa." },
  { t: "Alojamiento", d: "Pueden pedirte un documento que justifique dónde te hospedarás: reserva de hotel o carta de invitación de un particular." },
  { t: "Medios económicos", d: "Pueden pedirte que acredites fondos para tu estancia. Se calculan sobre el salario mínimo de España y cambian cada año: consulta el importe oficial vigente al momento de tu viaje." },
];

export function Requisitos() {
  return (
    <section id="requisitos" className="scroll-mt-20 bg-[#e3f6f3] py-12 sm:py-16">
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Antes de viajar" titulo="Qué pide España a los peruanos" texto="Resumen según el Ministerio del Interior de España. Los requisitos pueden cambiar y cumplirlos no garantiza la entrada: la decisión final es de la autoridad de frontera." />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {REQUISITOS.map((r) => (
            <li key={r.t} className="flex gap-3 rounded-xl bg-white p-4 shadow-[0_14px_24px_-20px_rgba(10,22,40,0.5)]">
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
        <a href={URL_FUENTE_REQUISITOS} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-[44px] items-center text-sm font-bold text-[#0a1628] underline underline-offset-4">
          Ver la fuente oficial: Ministerio del Interior de España
        </a>
      </div>
    </section>
  );
}
