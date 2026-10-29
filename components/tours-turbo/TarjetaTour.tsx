import FotoCdn from "@/components/FotoCdn";
import Link from "next/link";
import { formatoUSD } from "@/lib/formato-precio";
import { DESTINOS_TOUR, fotoTour, precioTour, type TourCrudo } from "@/lib/tours-turbo";
import { CORAL, Perforado } from "@/components/paquetes-turisticos/Ticket";

// Tarjeta tipo boleto de un tour (misma línea visual que los paquetes turísticos de este proveedor).
export function TarjetaTour({ t }: { t: TourCrudo }) {
  const d = DESTINOS_TOUR[t.d];
  return (
    <li>
      <Link
        href={`/tours-y-actividades/${t.d}/${t.s}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-orange-100 transition-shadow hover:shadow-xl"
      >
        <div className="relative aspect-[4/3] bg-orange-50">
          <FotoCdn
            src={fotoTour(t)}
            alt={t.n}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          {t.dur && (
            <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[#0f5f5a] shadow">{t.dur}</span>
          )}
        </div>
        <div className="relative flex flex-1 flex-col gap-2 border-t-2 border-dashed border-orange-200 p-5">
          <Perforado />
          <span className="text-lg font-extrabold leading-snug text-[#10302e] group-hover:underline">{t.n}</span>
          <span className="text-base text-[#0f766e]">{d ? `${d.nombre}, ${d.pais}` : ""}</span>
          <span className="mt-auto flex items-end justify-between gap-3 pt-3">
            <span className="text-sm text-slate-500">
              por persona <strong className={`block text-3xl ${CORAL}`}>{formatoUSD(precioTour(t))}</strong>
            </span>
            <span className="rounded-full bg-[#0f766e] px-4 py-2.5 text-base font-extrabold text-white">Ver tour</span>
          </span>
        </div>
      </Link>
    </li>
  );
}

export function GrillaTours({ items }: { items: TourCrudo[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t) => (
        <TarjetaTour key={`${t.d}/${t.s}`} t={t} />
      ))}
    </ul>
  );
}
