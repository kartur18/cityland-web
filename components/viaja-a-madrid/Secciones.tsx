import Image from "next/image";
import Link from "next/link";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import Icono, { type NombreIcono } from "@/components/viaja-a-madrid/Iconos";
import { PRECIO_ANTICIPADO, PRECIO_OTRAS_FECHAS } from "@/lib/viaja-a-madrid";
import estilos from "@/app/viaja-a-madrid/viaja.module.css";

// Secciones de venta de /viaja-a-madrid, todas sin estado (el estado vive en CotizadorContexto).
// Un solo ancho (max-w-6xl), un solo tamaño de título, tarjetas con sombra suave e iconos de línea.
export const CONTENEDOR = "mx-auto max-w-6xl px-5";
export const SECCION = "py-14 sm:py-20";
export const TARJETA = "rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 shadow-[0_1px_2px_rgba(10,22,40,0.05),0_16px_40px_-20px_rgba(10,22,40,0.22)]";

// Encabezado común: etiqueta en píldora, título grande y bajada.
export function Encabezado({ etiqueta, titulo, texto }: { etiqueta: string; titulo: React.ReactNode; texto?: string }) {
  return (
    <header className="max-w-2xl">
      <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#e30613] ring-1 ring-slate-200">
        <span className="h-1.5 w-1.5 rounded-full bg-[#e30613]" />
        {etiqueta}
      </p>
      <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-[#0a1628] sm:text-4xl">{titulo}</h2>
      {texto && <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">{texto}</p>}
    </header>
  );
}

function Chip({ icono, tono = "rojo" }: { icono: NombreIcono; tono?: "rojo" | "azul" | "verde" | "marino" }) {
  const colores = {
    rojo: "bg-[#fdecee] text-[#e30613]",
    azul: "bg-[#e6f1fb] text-[#1d6fb8]",
    verde: "bg-[#e5f6ec] text-[#16a34a]",
    marino: "bg-[#0a1628] text-white",
  };
  return (
    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colores[tono]}`}>
      <Icono nombre={icono} />
    </span>
  );
}

const HECHOS: { icono: NombreIcono; t: string; d: string }[] = [
  { icono: "boleto", t: "Ida y vuelta incluida", d: "Lima–Madrid–Lima en un solo boleto" },
  { icono: "calendario", t: "Abril, mayo o junio 2027", d: "Tú eliges el mes de salida" },
  { icono: "ubicacion", t: "2 oficinas en Los Olivos", d: "Compra en persona o por WhatsApp" },
];

// Franja de confianza: tres razones comprobables para escribirnos.
export function Hechos() {
  return (
    <section className="bg-white">
      <div className={`${CONTENEDOR} grid gap-6 py-10 sm:grid-cols-3`}>
        {HECHOS.map((h) => (
          <div key={h.t} className={`${estilos.revelar} flex items-center gap-4`}>
            <Chip icono={h.icono} tono="marino" />
            <p className="text-sm leading-snug text-slate-600">
              <strong className="block text-base text-[#0a1628]">{h.t}</strong>
              {h.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// El precio anticipado frente a la tarifa «desde» de otras fechas. Referencial, y se dice.
export function Comparativo() {
  const otras = PRECIO_OTRAS_FECHAS;
  const dif = otras - PRECIO_ANTICIPADO;
  if (dif <= 0) return null;
  const ancho = Math.round((PRECIO_ANTICIPADO / otras) * 100);
  return (
    <section className={`${SECCION} bg-[#faf8f4]`}>
      <div className={`${CONTENEDOR} grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20`}>
        <Encabezado
          etiqueta="El ahorro"
          titulo={
            <>
              Esta tarifa es <span className="text-[#e30613]">US$ {dif}</span> más barata
            </>
          }
          texto={`Comprando con anticipación pagas US$ ${PRECIO_ANTICIPADO}. En otras fechas, la tarifa parte desde US$ ${otras.toLocaleString("en-US")}.`}
        />
        <div className={`${TARJETA} sm:p-9`}>
          <p className="text-sm font-semibold text-slate-500">Ahorras por persona</p>
          <p className="mt-1 text-5xl font-extrabold leading-none tracking-tighter text-[#0a1628]">
            US$ {dif}
          </p>
          <div className="mt-8 space-y-5">
            <div>
              <div className="mb-2 flex items-baseline justify-between text-sm font-bold text-[#0a1628]">
                <span>Compra anticipada · abril a junio 2027</span>
                <span className="text-lg font-extrabold">US$ {PRECIO_ANTICIPADO}</span>
              </div>
              <div className="h-3.5 overflow-hidden rounded-full bg-slate-100">
                <div className={`${estilos.barra} h-full rounded-full bg-[#16a34a]`} style={{ width: `${ancho}%` }} />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-baseline justify-between text-sm font-semibold text-slate-500">
                <span>Otras fechas</span>
                <span className="text-lg font-extrabold">US$ {otras.toLocaleString("en-US")}</span>
              </div>
              <div className="h-3.5 overflow-hidden rounded-full bg-slate-100">
                <div className={`${estilos.barra} h-full w-full rounded-full bg-slate-300`} />
              </div>
            </div>
          </div>
          <p className="mt-6 rounded-xl bg-[#e5f6ec] px-4 py-3 text-sm font-semibold text-[#14532d]">Viajan 2: ahorran US$ {(dif * 2).toLocaleString("en-US")} en total.</p>
          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            Tarifas «desde» por persona, ida y vuelta, sujetas a disponibilidad. El precio final depende de tus fechas.
          </p>
        </div>
      </div>
    </section>
  );
}

const LINEA: { icono: NombreIcono; cuando: string; t: string; d: string }[] = [
  { icono: "calendario", cuando: "Paso 1", t: "Elige tu mes", d: "Dinos cuándo quieres viajar y cuántos son." },
  { icono: "mensaje", cuando: "Paso 2", t: "Recibe tus opciones", d: "Te enviamos vuelos y precio para tus fechas por WhatsApp." },
  { icono: "avion", cuando: "Paso 3", t: "Reserva y vuela", d: "Aseguras tu tarifa y viajas a Madrid en abril, mayo o junio." },
];

// Proceso en tres pasos: tarjetas iguales con icono, unidas por una línea en pantallas grandes.
export function LineaDeTiempo() {
  return (
    <section className={`${CONTENEDOR} ${SECCION}`}>
      <Encabezado etiqueta="Cómo reservar" titulo="Reserva en 3 pasos" texto="Las tarifas suben mientras se acerca la fecha. Esta es para los que se adelantan." />
      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {LINEA.map((p, i) => (
          <li key={p.t} className={`${estilos.revelar} ${TARJETA} relative`}>
            <div className="flex items-center justify-between">
              <Chip icono={p.icono} tono={i === 2 ? "rojo" : "azul"} />
              <span className="text-5xl font-extrabold leading-none tracking-tighter text-slate-100">{i + 1}</span>
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#e30613]">{p.cuando}</p>
            <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-[#0a1628]">{p.t}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{p.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const PARA: { icono: NombreIcono; tono: "rojo" | "azul" | "verde"; t: string; d: string }[] = [
  { icono: "corazon", tono: "rojo", t: "En pareja", d: "Terrazas, museos y cenas largas. Abril a junio es primavera en Madrid." },
  { icono: "brujula", tono: "azul", t: "En familia o con amigos", d: "La tarifa es por persona: viajan los que quieran y el total lo ves al cotizar." },
  { icono: "sol", tono: "verde", t: "A ver a los tuyos", d: "Si tienes familia o amigos en España, llega en primavera con tu boleto ya asegurado." },
];

export function ParaQuien() {
  return (
    <section className={`${SECCION} bg-[#faf8f4]`}>
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Para quién" titulo="¿Con quién vas a Madrid?" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PARA.map((p) => (
            <article key={p.t} className={`${estilos.revelar} ${TARJETA} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(10,22,40,0.3)]`}>
              <Chip icono={p.icono} tono={p.tono} />
              <h3 className="mt-6 text-lg font-bold leading-tight text-[#0a1628]">{p.t}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const DOCUMENTOS = [
  { t: "Pasaporte vigente", d: "Con 3 meses de validez después de tu salida de España y emitido en los últimos 10 años." },
  { t: "Pasaje de ida y vuelta", d: "Migraciones lo revisa al entrar." },
  { t: "Reserva de alojamiento", d: "Hotel reservado o carta de invitación." },
  { t: "Dinero para tu estadía", d: "Pueden pedirte comprobar que tienes con qué cubrir tu estadía." },
];

const CONSEJOS = [
  { t: "Que el nombre coincida con tu pasaporte", d: "Un error en el boleto puede costar un cambio." },
  { t: "Pregunta qué equipaje incluye", d: "Cambia según la aerolínea y la tarifa. Pregúntalo antes de pagar." },
  { t: "Contrata un seguro de viaje", d: "Cubre gastos médicos y cancelaciones del viaje." },
  { t: "Reserva con fechas seguras", d: "Cambiar fechas después puede tener costo." },
];

function Lista({ items }: { items: { t: string; d: string }[] }) {
  return (
    <ul className="space-y-5">
      {items.map((d) => (
        <li key={d.t} className="flex gap-3.5">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e5f6ec] text-[#16a34a]">
            <Icono nombre="check" className="h-3.5 w-3.5" />
          </span>
          <p className="text-sm leading-snug text-slate-600">
            <strong className="block text-base text-[#0a1628]">{d.t}</strong>
            {d.d}
          </p>
        </li>
      ))}
    </ul>
  );
}

// Información útil para decidir: lo que se pide para entrar a España y cómo comprar bien el boleto.
export function GuiaViaje() {
  return (
    <section className={`${CONTENEDOR} ${SECCION}`}>
      <Encabezado etiqueta="Antes de volar" titulo="Lo que pide España a los peruanos" />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className={`${estilos.revelar} ${TARJETA} sm:p-9`}>
          <Chip icono="escudo" tono="marino" />
          <h3 className="mt-5 text-xl font-bold text-[#0a1628]">Lleva en tu equipaje de mano</h3>
          <p className="mb-6 mt-1 text-sm text-slate-500">Para turismo, sin visa hasta 90 días.</p>
          <Lista items={DOCUMENTOS} />
          <Link href="/viajes/requisitos-viajar-a-espana-desde-peru" className="mt-6 inline-flex min-h-[44px] items-center text-sm font-bold text-[#e30613] underline underline-offset-4">
            Ver los requisitos actualizados
          </Link>
        </div>
        <div className={`${estilos.revelar} ${TARJETA} sm:p-9`}>
          <Chip icono="boleto" tono="marino" />
          <h3 className="mt-5 text-xl font-bold text-[#0a1628]">Revisa antes de pagar tu boleto</h3>
          <p className="mb-6 mt-1 text-sm text-slate-500">Cuatro puntos que te ahorran costos extra.</p>
          <Lista items={CONSEJOS} />
        </div>
      </div>
      <p className="mt-5 text-xs text-slate-500">Información general: los requisitos pueden cambiar. Verifícalos antes de viajar.</p>
    </section>
  );
}

const GALERIA = [
  { src: "/images/espana/cibeles.jpg", alt: "Fuente de Cibeles, Madrid", t: "Cibeles", clase: "sm:row-span-2" },
  { src: "/images/espana/palacio-real.jpg", alt: "Palacio Real de Madrid", t: "Palacio Real", clase: "" },
  { src: "/images/espana/plaza-mayor.jpg", alt: "Plaza Mayor de Madrid", t: "Plaza Mayor", clase: "" },
];

// Mosaico: una foto alta y dos bajas; en celular se deslizan de lado.
export function Galeria() {
  return (
    <section className={`${SECCION} bg-[#faf8f4]`}>
      <div className={CONTENEDOR}>
        <Encabezado etiqueta="Tu destino" titulo="Madrid te espera en abril, mayo y junio" />
        <div className="-mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:h-[340px] sm:grid-cols-[1.15fr_1fr] sm:grid-rows-2 sm:overflow-visible sm:px-0">
          {GALERIA.map((g) => (
            <figure key={g.src} className={`group relative aspect-[4/3] w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl bg-slate-200 sm:aspect-auto sm:w-auto ${g.clase}`}>
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 640px) 50vw, 78vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-[#0a1628] shadow-md">
                <Icono nombre="ubicacion" className="h-4 w-4 text-[#e30613]" />
                {g.t}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10">
          <BotonCotizar zona="Galería" adaptable />
        </div>
      </div>
    </section>
  );
}
