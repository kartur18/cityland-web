import Image from "next/image";
import { BotonWhatsApp } from "@/components/paquetes-armados/Bloques";

// Piezas visuales de las páginas de paquetes armados: galería, caja de precio que vende, video del recorrido y la
// franja de lo que incluye.

function Check() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" className="shrink-0 text-emerald-600">
      <path fill="currentColor" d="M8.1 14.6 3.5 10l1.4-1.4 3.2 3.2 7-7L16.5 6z" />
    </svg>
  );
}

// Una foto grande y cuatro chicas en escritorio; en el celular la grande y tres miniaturas.
export function GaleriaMosaico({ fotos, alt }: { fotos: string[]; alt: string }) {
  const [principal, ...resto] = fotos;
  if (!principal) return null;
  return (
    <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:grid-rows-2 md:h-[460px]">
      <div className="relative col-span-3 aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 md:col-span-2 md:row-span-2 md:aspect-auto">
        <Image src={principal} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" priority />
      </div>
      {resto.slice(0, 4).map((f, i) => (
        <div key={f} className={`relative aspect-square overflow-hidden rounded-xl bg-slate-100 md:aspect-auto ${i === 3 ? "hidden md:block" : ""}`}>
          <Image src={f} alt={`${alt} (foto ${i + 2})`} fill sizes="(min-width: 768px) 25vw, 33vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function IncluyeFranja({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
      {items.map((x) => (
        <li key={x} className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-900">
          <Check />
          {x}
        </li>
      ))}
    </ul>
  );
}

// Caja de precio pegada a la galería: precio grande, qué lo respalda y el botón de WhatsApp.
export function CajaPrecio({
  etiqueta,
  precio,
  detalle,
  wa,
  boton,
  nota,
}: {
  etiqueta: string;
  precio: string;
  detalle?: string;
  wa: string;
  boton: string;
  nota?: string;
}) {
  return (
    <div className="rounded-2xl border-2 border-[#0a1628] bg-white p-5 sm:p-6 space-y-4 shadow-lg md:sticky md:top-28">
      <p className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-amber-900">
        Cupos limitados
      </p>
      <div>
        <p className="text-sm text-slate-500">{etiqueta}</p>
        <p className="text-4xl sm:text-5xl font-extrabold text-[#0a1628]">{precio}</p>
        {detalle && <p className="mt-1 text-sm text-slate-600">{detalle}</p>}
      </div>
      <BotonWhatsApp href={wa} texto={boton} />
      <ul className="space-y-1.5 text-sm text-slate-700">
        <li className="flex items-center gap-2">
          <Check />
          Separas con el 50% y pagas el resto antes de viajar
        </li>
        <li className="flex items-center gap-2">
          <Check />
          Te atiende una asesora por WhatsApp
        </li>
        <li className="flex items-center gap-2">
          <Check />
          Agencia con 2 oficinas en Los Olivos
        </li>
      </ul>
      {nota && <p className="text-xs text-slate-500">{nota}</p>}
    </div>
  );
}

export function VideoRecorrido({ url, poster, titulo }: { url: string; poster: string; titulo: string }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-extrabold text-[#0a1628]">Mira el recorrido en video</h2>
      <p className="text-[15px] text-slate-600">{titulo}: el itinerario día por día en el mapa.</p>
      <video controls preload="none" poster={poster} className="w-full rounded-2xl bg-black aspect-video" playsInline>
        <source src={url} type="video/mp4" />
      </video>
    </section>
  );
}

// Ciudades del recorrido en orden, como una línea de viaje.
export function RecorridoVisual({ ciudades }: { ciudades: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-1 gap-y-2">
      {ciudades.map((x, i) => (
        <li key={`${x}-${i}`} className="flex items-center gap-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold text-[#0a1628]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0a1628] text-[11px] text-white">{i + 1}</span>
            {x}
          </span>
          {i < ciudades.length - 1 && (
            <span className="text-slate-400" aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
