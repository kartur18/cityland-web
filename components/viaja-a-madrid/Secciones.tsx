import Image from "next/image";
import Link from "next/link";
import { PRECIO_IDA_VUELTA_MADRID_DESDE } from "@/components/constantes";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import { PRECIO_ANTICIPADO } from "@/lib/viaja-a-madrid";
import estilos from "@/app/viaja-a-madrid/viaja.module.css";

// Secciones de venta de /viaja-a-madrid, todas sin estado (el estado vive en CotizadorContexto).
const ETIQUETA = "text-xs font-bold uppercase tracking-[0.22em]";

const FRASES = ["Ida y vuelta Lima–Madrid", "Abril · Mayo · Junio 2027", `Desde US$ ${PRECIO_ANTICIPADO} por persona`, "Compra anticipada", "Atención personalizada"];

// Cinta roja que corre entre el hero y el resto: repite la oferta sin ocupar espacio.
export function Cinta() {
  const grupo = FRASES.map((f) => (
    <span key={f} className="flex shrink-0 items-center gap-6 pr-6 text-sm font-extrabold uppercase tracking-[0.18em]">
      {f}
      <span className="text-[#f5b83d]">✦</span>
    </span>
  ));
  return (
    <div aria-hidden="true" className="overflow-hidden bg-gradient-to-r from-[#c40510] via-[#e30613] to-[#c40510] py-3 text-white">
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
  { n: "2", t: "oficinas físicas en Lima", d: "Los Olivos, con atención en persona", color: "from-[#e30613] to-[#f5b83d]" },
  { n: "1", t: "asesora personal", d: "te responde por WhatsApp con tus opciones", color: "from-[#3b5bdb] to-[#22d3ee]" },
  { n: "0", t: "sorpresas al pagar", d: "el precio final se confirma por escrito antes", color: "from-[#059669] to-[#a3e635]" },
];

export function Hechos() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {HECHOS.map((h) => (
          <div key={h.t} className="flex items-center gap-4 py-5 sm:px-6 sm:first:pl-0">
            <span className={`bg-gradient-to-br ${h.color} bg-clip-text text-6xl font-black tracking-tighter text-transparent`}>{h.n}</span>
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

// El precio anticipado frente a la tarifa «desde» que la web publica para otras fechas. Referencial, y se dice.
export function Comparativo() {
  const otras = PRECIO_IDA_VUELTA_MADRID_DESDE;
  const dif = otras - PRECIO_ANTICIPADO;
  if (dif <= 0) return null;
  const ancho = Math.round((PRECIO_ANTICIPADO / otras) * 100);
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className={`${ETIQUETA} text-[#c40510]`}>Anticiparte se nota en el precio</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0a1628] sm:text-5xl">
            Compra hoy y paga <span className="text-[#c40510]">US$ {dif} menos</span> por persona
          </h2>
          <p className="mt-4 max-w-md text-lg text-slate-600">Comprando con meses de anticipación, la tarifa parte más abajo que en otras fechas.</p>
        </div>
        <div className="space-y-5">
          <div>
            <div className="mb-2 flex items-baseline justify-between text-sm font-bold text-[#0a1628]">
              <span>Compra anticipada · abril a junio 2027</span>
              <span className="text-xl font-extrabold">US$ {PRECIO_ANTICIPADO}</span>
            </div>
            <div className="h-5 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-gradient-to-r from-[#059669] via-[#84cc16] to-[#f5b83d]" style={{ width: `${ancho}%` }} />
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-baseline justify-between text-sm font-semibold text-slate-600">
              <span>Otras fechas</span>
              <span className="text-xl font-extrabold">US$ {otras.toLocaleString("en-US")}</span>
            </div>
            <div className="h-5 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-full rounded-full bg-slate-400" />
            </div>
          </div>
          <p className="text-xs text-slate-500">
            Tarifas «desde» por persona, ida y vuelta Lima–Madrid, sujetas a disponibilidad. Comparación referencial: el precio final depende de tus fechas.
          </p>
        </div>
      </div>
    </section>
  );
}

const LINEA = [
  { cuando: "Hoy", t: "Pides tu cotización", d: "Eliges mes y cuántos viajan. Una asesora te responde con las opciones para tus fechas.", punto: "bg-[#3b5bdb]" },
  {
    cuando: "Con anticipación",
    t: "Compras con la tarifa anticipada",
    d: "Reservas con tiempo, antes de la temporada alta, y te guiamos en cada paso (tarifa sujeta a disponibilidad).",
    punto: "bg-[#f5b83d]",
  },
  { cuando: "Abril · Mayo · Junio 2027", t: "Vuelas a Madrid", d: "Tu boleto Lima–Madrid–Lima, listo. Solo te queda elegir qué caminar primero.", punto: "bg-[#e30613]" },
];

export function LineaDeTiempo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <p className={`${ETIQUETA} text-[#3b5bdb]`}>Compra con anticipación</p>
      <h2 className="mt-3 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">Compra hoy. Viaja en primavera.</h2>
      <p className="mt-4 max-w-xl text-lg text-slate-600">Las tarifas suelen subir a medida que se acerca la fecha de viaje. Por eso esta tarifa es para quien se adelanta.</p>
      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {LINEA.map((p) => (
          <li key={p.t} className="relative border-l-2 border-slate-200 pl-7 md:border-l-0 md:border-t-2 md:pl-0 md:pt-8">
            <span aria-hidden="true" className={`absolute -left-[8px] top-1 h-3.5 w-3.5 rounded-full ring-4 ring-white md:-top-[8px] md:left-0 ${p.punto}`} />
            <p className={`${ETIQUETA} text-slate-500`}>{p.cuando}</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{p.t}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{p.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const PARA = [
  { t: "Ver a los tuyos", d: "Tu familia o tus amigos en España te esperan. Viaja con tiempo y llega sin apuros.", fondo: "from-[#e11d48] to-[#f97316]", emoji: "♥" },
  { t: "Tu primer viaje a Madrid", d: "Si nunca fuiste, una asesora te explica cada paso: fechas, documentos y qué te conviene.", fondo: "from-[#3b5bdb] to-[#22d3ee]", emoji: "★" },
  { t: "Vacaciones en pareja o en familia", d: "Elige tus fechas con calma y viaja en la mejor época para caminar la ciudad.", fondo: "from-[#059669] to-[#a3e635]", emoji: "☀" },
];

export function ParaQuien() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">Un viaje a Madrid para cada motivo</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {PARA.map((p) => (
          <article key={p.t} className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.fondo} p-7 text-white`}>
            <span aria-hidden="true" className="absolute -right-3 -top-6 text-[8rem] font-black leading-none text-white/15">
              {p.emoji}
            </span>
            <h3 className="relative text-2xl font-extrabold leading-tight">{p.t}</h3>
            <p className="relative mt-3 leading-relaxed text-white/90">{p.d}</p>
          </article>
        ))}
      </div>
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
    <section className="bg-gradient-to-b from-sky-50 to-white px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">Madrid te espera en abril, mayo y junio</h2>
        <p className="mt-3 max-w-xl text-lg text-slate-600">Terrazas, plazas y días más largos: los meses para caminar Madrid sin apuro.</p>
        <div className="-mx-5 mt-8 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
          {GALERIA.map((g) => (
            <figure key={g.src} className="relative aspect-[4/3] w-[70%] shrink-0 snap-start overflow-hidden rounded-2xl bg-slate-200 sm:w-auto">
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 640px) 33vw, 70vw" className="object-cover" />
              <figcaption className="absolute bottom-2.5 left-2.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">{g.t}</figcaption>
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
  { t: "Reserva con tiempo, pero con fechas seguras", d: "Revisa tus permisos y feriados antes de comprar; cambiar fechas después puede tener costo." },
];

// Información útil para decidir: lo que se pide para entrar a España y cómo comprar bien el boleto.
export function GuiaViaje() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <p className={`${ETIQUETA} text-[#059669]`}>Antes de viajar</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">Lo que necesitas saber para viajar a Madrid desde Perú</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50 p-6 ring-1 ring-sky-200 sm:p-8">
          <h3 className="text-xl font-extrabold text-[#1e3a8a]">Documentos que te pueden pedir</h3>
          <p className="mt-1 text-sm text-slate-600">Para turismo, los peruanos viajan a España sin visa hasta 90 días.</p>
          <ul className="mt-5 space-y-4">
            {DOCUMENTOS.map((d) => (
              <li key={d.t} className="flex gap-3">
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3b5bdb] text-xs font-extrabold text-white">
                  ✓
                </span>
                <p className="text-sm leading-snug text-slate-600">
                  <strong className="block text-base text-[#0a1628]">{d.t}</strong>
                  {d.d}
                </p>
              </li>
            ))}
          </ul>
          <Link href="/viajes/requisitos-viajar-a-espana-desde-peru" className="mt-5 inline-block text-sm font-bold text-[#1e3a8a] underline">
            Ver los requisitos actualizados
          </Link>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 ring-1 ring-amber-200 sm:p-8">
          <h3 className="text-xl font-extrabold text-[#9a3412]">Cómo comprar bien tu boleto</h3>
          <p className="mt-1 text-sm text-slate-600">Cuatro cuidados que evitan sorpresas y costos extra.</p>
          <ul className="mt-5 space-y-4">
            {CONSEJOS.map((d) => (
              <li key={d.t} className="flex gap-3">
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-xs font-extrabold text-white">
                  ★
                </span>
                <p className="text-sm leading-snug text-slate-600">
                  <strong className="block text-base text-[#0a1628]">{d.t}</strong>
                  {d.d}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">Información general; las autoridades pueden cambiar los requisitos. Verifica siempre antes de viajar.</p>
    </section>
  );
}
