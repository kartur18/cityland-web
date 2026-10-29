import FotoCdn from "@/components/FotoCdn";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { formatoUSD } from "@/lib/formato-precio";
import { DESTINOS_HOTEL, NOCHES_REFERENCIA, fotoHotel, precioHotel, precioNoche, textoNota, type HotelCrudo } from "@/lib/hoteles-turbo";

// Diseño propio de los hoteles: tarjetas tipo llave de habitación en azul noche, dorado y crema, para que no se
// confundan con los paquetes (boleto coral) ni con los circuitos del mayorista.

export const AZUL = "#0b2545";
export const DORADO = "#b8891a";
export const CREMA = "#f7f4ee";

export function Nota({ h }: { h: Pick<HotelCrudo, "nota" | "op"> }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-slate-600">
      <span className="rounded-lg px-2 py-1 text-sm font-extrabold text-white" style={{ background: AZUL }}>
        {h.nota.toFixed(1).replace(".", ",")}
      </span>
      <span>
        <strong className="text-slate-800">{textoNota(h.nota)}</strong> · {h.op.toLocaleString("es-PE")} opiniones
      </span>
    </span>
  );
}

export function TarjetaHotel({ h }: { h: HotelCrudo }) {
  const d = DESTINOS_HOTEL[h.d];
  return (
    <li>
      <Link
        href={`/hoteles-en/${h.d}/${h.s}`}
        className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-xl"
      >
        <div className="relative aspect-[4/3] bg-slate-100">
          <FotoCdn
            src={fotoHotel(h)}
            alt={`${h.n}, ${d?.nombre ?? ""}`}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-extrabold text-white shadow"
            style={{ background: h.r === "Todo incluido" ? DORADO : AZUL }}
          >
            {h.r}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <span className="text-lg font-extrabold leading-snug group-hover:underline" style={{ color: AZUL }}>
            {h.n}
          </span>
          <span className="text-base text-slate-600">{h.z}{h.km ? ` · a ${h.km} km del centro` : ""}</span>
          <Nota h={h} />
          <span className="mt-auto flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
            <span className="text-sm text-slate-500">
              por noche, 2 personas
              <strong className="block text-3xl" style={{ color: DORADO }}>
                {formatoUSD(precioNoche(h))}
              </strong>
            </span>
            <span className="rounded-full px-4 py-2.5 text-base font-extrabold text-white" style={{ background: AZUL }}>
              Ver hotel
            </span>
          </span>
        </div>
      </Link>
    </li>
  );
}

export function GrillaHoteles({ items }: { items: HotelCrudo[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((h) => (
        <TarjetaHotel key={`${h.d}/${h.s}`} h={h} />
      ))}
    </ul>
  );
}

// Portada: foto a todo lo ancho y, encima, una «llave» crema con el precio y un solo botón de WhatsApp.
export function PortadaHotel({
  foto,
  alt,
  sello,
  titulo,
  bajada,
  etiquetaPrecio,
  precio,
  nota,
  wa,
  ancla,
}: {
  foto: string;
  alt: string;
  sello: string;
  titulo: string;
  bajada: string;
  etiquetaPrecio: string;
  precio: number;
  nota: string;
  wa: string;
  ancla: string;
}) {
  return (
    <section className="overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-slate-200">
      <div className="relative aspect-[16/9] sm:aspect-[21/8]">
        <FotoCdn src={foto} alt={alt} prioridad sizes="100vw" />
      </div>
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_340px] lg:items-center">
        <div className="space-y-3">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white" style={{ background: DORADO }}>
            {sello}
          </span>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl" style={{ color: AZUL }}>
            {titulo}
          </h1>
          <p className="text-lg text-slate-700">{bajada}</p>
          <a href="#contenido" className="inline-block text-base font-bold underline" style={{ color: AZUL }}>
            {ancla} ↓
          </a>
        </div>
        <div className="rounded-[28px] p-6 text-center" style={{ background: CREMA }}>
          <span className="block text-sm text-slate-600">{etiquetaPrecio}</span>
          <strong className="block text-5xl font-extrabold" style={{ color: AZUL }}>
            {formatoUSD(precio)}
          </strong>
          <span className="mt-1 block text-sm text-slate-500">{nota}</span>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-base font-extrabold text-white hover:bg-[#1ebe5b]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export const PASOS_HOTEL = [
  { t: "Elige el hotel", d: "Mira la nota, la zona y el precio por noche." },
  { t: "Escríbenos tus fechas", d: "Te confirmamos la tarifa real para tus noches y cuántos van." },
  { t: "Recibe tu voucher", d: "Con la reserva confirmada a tu nombre, por escrito." },
];

export function PasosHotel() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: AZUL }}>
        Así reservas tu hotel
      </h2>
      <ol className="grid gap-5 sm:grid-cols-3">
        {PASOS_HOTEL.map((p, i) => (
          <li key={p.t} className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <span className="text-sm font-extrabold" style={{ color: DORADO }}>
              Paso {i + 1}
            </span>
            <strong className="mt-1 block text-lg" style={{ color: AZUL }}>
              {p.t}
            </strong>
            <span className="mt-1 block text-base text-slate-600">{p.d}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

// Cierre en banda azul: texto a la izquierda y un botón blanco (no otro verde igual al de la portada).
export function CierreHotel({ titulo, precio, wa }: { titulo: string; precio: number; wa: string }) {
  return (
    <section className="flex flex-col gap-5 rounded-[32px] p-8 text-white sm:flex-row sm:items-center sm:justify-between" style={{ background: AZUL }}>
      <div>
        <h2 className="text-2xl font-extrabold sm:text-3xl">{titulo}</h2>
        <p className="mt-1 text-base text-slate-200">Desde {formatoUSD(precio)} por noche para 2 personas. Te cotizamos tus fechas exactas.</p>
      </div>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-extrabold hover:bg-slate-100"
        style={{ color: AZUL }}
      >
        <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
        Pedir mi cotización
      </a>
    </section>
  );
}

export const notaReferencia = `Precio de referencia por ${NOCHES_REFERENCIA} noches, cambia según tus fechas.`;
export { precioHotel };
