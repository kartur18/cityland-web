import Image from "next/image";
import Link from "next/link";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import { PRECIO_ANTICIPADO, PRECIO_OTRAS_FECHAS } from "@/lib/viaja-a-madrid";
import estilos from "@/app/viaja-a-madrid/viaja.module.css";

// Secciones de venta de /viaja-a-madrid, todas sin estado (el estado vive en CotizadorContexto).
// Estilo aerolínea: un solo ancho (max-w-6xl), un solo tamaño de título, códigos numerados y bordes finos.
export const CONTENEDOR = "mx-auto max-w-6xl px-5";
export const SECCION = "py-16 sm:py-20";
const TARJETA = "rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(10,22,40,0.04)]";

// Encabezado común: código de sección en monoespaciada (como una tarjeta de embarque), título y bajada.
export function Encabezado({ codigo, etiqueta, titulo, texto }: { codigo: string; etiqueta: string; titulo: React.ReactNode; texto?: string }) {
  return (
    <header className="max-w-2xl">
      <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e30613]">
        <span className="rounded bg-[#0a1628] px-2 py-1 text-white">{codigo}</span>
        {etiqueta}
      </p>
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0a1628] sm:text-4xl">{titulo}</h2>
      {texto && <p className="mt-3 text-lg text-slate-600">{texto}</p>}
    </header>
  );
}

const FRASES = ["Ida y vuelta Lima–Madrid", "Abril · Mayo · Junio 2027", `Desde US$ ${PRECIO_ANTICIPADO} por persona`, "Compra anticipada", "Atención personalizada"];

// Cinta roja que corre entre el hero y el resto: repite la oferta sin ocupar espacio.
export function Cinta() {
  const grupo = FRASES.map((f) => (
    <span key={f} className="flex shrink-0 items-center gap-6 pr-6 text-xs font-extrabold uppercase tracking-[0.2em]">
      {f}
      <span className="text-[#f5b83d]">✦</span>
    </span>
  ));
  return (
    <div aria-hidden="true" className="overflow-hidden bg-[#e30613] py-2.5 text-white">
      <div className={estilos.cinta}>
        {grupo}
        {grupo}
        {grupo}
        {grupo}
      </div>
    </div>
  );
}

const HECHOS = [
  { n: "2", t: "oficinas físicas en Lima", d: "Los Olivos, con atención en persona" },
  { n: "1", t: "asesora personal", d: "te responde por WhatsApp con tus opciones" },
  { n: "0", t: "sorpresas al pagar", d: "el precio final se confirma por escrito antes" },
];

// Franja de datos tipo panel de información: tres cifras comprobables.
export function Hechos() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className={`${CONTENEDOR} grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0`}>
        {HECHOS.map((h) => (
          <div key={h.t} className={`${estilos.revelar} flex items-center gap-4 py-5 sm:px-6 sm:first:pl-0`}>
            <span className="font-mono text-5xl font-black tracking-tighter text-[#0a1628]">{h.n}</span>
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
      <div className={`${CONTENEDOR} grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16`}>
        <Encabezado
          codigo="01"
          etiqueta="Tarifa"
          titulo={
            <>
              Compra hoy y paga <span className="text-[#e30613]">US$ {dif} menos</span> por persona
            </>
          }
          texto="Comprando con meses de anticipación, la tarifa parte más abajo que en otras fechas."
        />
        <div className={`${TARJETA} space-y-6 sm:p-8`}>
          <div>
            <div className="mb-2 flex items-baseline justify-between text-sm font-bold text-[#0a1628]">
              <span>Compra anticipada · abril a junio 2027</span>
              <span className="font-mono text-xl font-extrabold">US$ {PRECIO_ANTICIPADO}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div className={`${estilos.barra} h-full rounded-full bg-[#16a34a]`} style={{ width: `${ancho}%` }} />
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-baseline justify-between text-sm font-semibold text-slate-600">
              <span>Otras fechas</span>
              <span className="font-mono text-xl font-extrabold">US$ {otras.toLocaleString("en-US")}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div className={`${estilos.barra} h-full w-full rounded-full bg-slate-400`} />
            </div>
          </div>
          <p className="border-t border-slate-100 pt-4 text-xs text-slate-500">
            Tarifas «desde» por persona, ida y vuelta Lima–Madrid, sujetas a disponibilidad. Comparación referencial: el precio final depende de tus fechas.
          </p>
        </div>
      </div>
    </section>
  );
}

const LINEA = [
  { cuando: "Hoy", t: "Pides tu cotización", d: "Eliges mes y cuántos viajan. Una asesora te responde con las opciones para tus fechas." },
  { cuando: "Con anticipación", t: "Compras con la tarifa anticipada", d: "Reservas antes de la temporada alta y te guiamos en cada paso (tarifa sujeta a disponibilidad)." },
  { cuando: "Abril · Mayo · Junio 2027", t: "Vuelas a Madrid", d: "Tu boleto Lima–Madrid–Lima, listo. Solo te queda elegir qué caminar primero." },
];

// Proceso como estado de vuelo: tres paradas unidas por una línea.
export function LineaDeTiempo() {
  return (
    <section className={`${CONTENEDOR} ${SECCION}`}>
      <Encabezado codigo="02" etiqueta="Proceso" titulo="Compra hoy. Viaja en primavera." texto="Las tarifas suelen subir a medida que se acerca la fecha de viaje. Por eso esta tarifa es para quien se adelanta." />
      <ol className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        <span aria-hidden="true" className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-slate-200 md:left-5 md:right-5 md:h-px md:w-auto" />
        {LINEA.map((p, i) => (
          <li key={p.t} className={`${estilos.revelar} relative pl-14 md:pl-0 md:pt-14`}>
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0a1628] bg-white font-mono text-sm font-extrabold text-[#0a1628]">
              {i + 1}
            </span>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#e30613]">{p.cuando}</p>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight text-[#0a1628]">{p.t}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{p.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const PARA = [
  { t: "Ver a los tuyos", d: "Tu familia o tus amigos en España te esperan. Viaja con tiempo y llega sin apuros.", sigla: "FAM" },
  { t: "Tu primer viaje a Madrid", d: "Si nunca fuiste, una asesora te explica cada paso: fechas, documentos y qué te conviene.", sigla: "1ER" },
  { t: "Vacaciones en pareja o en familia", d: "Elige tus fechas con calma y viaja en la mejor época para caminar la ciudad.", sigla: "VAC" },
];

export function ParaQuien() {
  return (
    <section className={`${SECCION} bg-[#faf8f4]`}>
      <div className={CONTENEDOR}>
        <Encabezado codigo="03" etiqueta="Motivos" titulo="Un viaje a Madrid para cada motivo" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PARA.map((p) => (
            <article key={p.t} className={`${estilos.revelar} ${TARJETA} border-t-4 border-t-[#e30613] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
              <span className="inline-block rounded bg-[#0a1628] px-2 py-1 font-mono text-xs font-bold tracking-[0.2em] text-white">{p.sigla}</span>
              <h3 className="mt-4 text-xl font-extrabold leading-tight text-[#0a1628]">{p.t}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const DOCUMENTOS = [
  { t: "Pasaporte vigente", d: "Con al menos 3 meses de validez después de tu salida de España y emitido en los últimos 10 años." },
  { t: "Pasaje de ida y vuelta", d: "Es lo primero que revisa migraciones al entrar: tu boleto de regreso." },
  { t: "Reserva de alojamiento", d: "Hotel reservado o carta de invitación si te quedas con familia o amigos." },
  { t: "Dinero para tu estadía", d: "Pueden pedirte comprobar que cuentas con recursos para los días que estarás." },
];

const CONSEJOS = [
  { t: "Que el nombre coincida con tu pasaporte", d: "Indícanos tu nombre tal cual figura en el documento: un error en el boleto puede costar un cambio." },
  { t: "Pregunta qué equipaje incluye", d: "Cambia según la aerolínea y la tarifa; conviene saberlo antes de pagar, no en el aeropuerto." },
  { t: "Contrata un seguro de viaje", d: "Cubre gastos médicos y cancelaciones. Te ayudamos a elegirlo con tu boleto." },
  { t: "Reserva con fechas seguras", d: "Revisa tus permisos y feriados antes de comprar; cambiar fechas después puede tener costo." },
];

function Lista({ items, numerada }: { items: { t: string; d: string }[]; numerada: boolean }) {
  return (
    <ul className="divide-y divide-slate-100">
      {items.map((d, i) => (
        <li key={d.t} className="flex gap-4 py-4 first:pt-0 last:pb-0">
          <span aria-hidden="true" className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-xs font-extrabold text-[#0a1628]">
            {numerada ? i + 1 : "✓"}
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
      <Encabezado codigo="04" etiqueta="Antes de viajar" titulo="Lo que necesitas saber para viajar a Madrid desde Perú" />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className={`${estilos.revelar} ${TARJETA} sm:p-8`}>
          <h3 className="text-xl font-extrabold text-[#0a1628]">Documentos que te pueden pedir</h3>
          <p className="mb-5 mt-1 text-sm text-slate-500">Para turismo, los peruanos viajan a España sin visa hasta 90 días.</p>
          <Lista items={DOCUMENTOS} numerada={false} />
          <Link href="/viajes/requisitos-viajar-a-espana-desde-peru" className="mt-5 inline-flex min-h-[44px] items-center text-sm font-bold text-[#e30613] underline">
            Ver los requisitos actualizados
          </Link>
        </div>
        <div className={`${estilos.revelar} ${TARJETA} sm:p-8`}>
          <h3 className="text-xl font-extrabold text-[#0a1628]">Cómo comprar bien tu boleto</h3>
          <p className="mb-5 mt-1 text-sm text-slate-500">Cuatro cuidados que evitan sorpresas y costos extra.</p>
          <Lista items={CONSEJOS} numerada />
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">Información general; las autoridades pueden cambiar los requisitos. Verifica siempre antes de viajar.</p>
    </section>
  );
}

const GALERIA = [
  { src: "/images/espana/cibeles.jpg", alt: "Fuente de Cibeles, Madrid", t: "Cibeles" },
  { src: "/images/espana/palacio-real.jpg", alt: "Palacio Real de Madrid", t: "Palacio Real" },
  { src: "/images/espana/plaza-mayor.jpg", alt: "Plaza Mayor de Madrid", t: "Plaza Mayor" },
];

// Fotos pequeñas: en celular se deslizan de lado, en pantalla grande son tres tarjetas bajas.
export function Galeria() {
  return (
    <section className={`${SECCION} bg-[#faf8f4]`}>
      <div className={CONTENEDOR}>
        <Encabezado codigo="05" etiqueta="Destino" titulo="Madrid te espera en abril, mayo y junio" texto="Terrazas, plazas y días más largos: los meses para caminar Madrid sin apuro." />
        <div className="-mx-5 mt-8 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
          {GALERIA.map((g) => (
            <figure key={g.src} className="relative aspect-[4/3] w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200 sm:w-auto">
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 640px) 33vw, 72vw" className="object-cover" />
              <figcaption className="absolute bottom-3 left-3 rounded bg-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#0a1628]">{g.t}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8">
          <BotonCotizar zona="Galería" adaptable />
        </div>
      </div>
    </section>
  );
}
