import Image from "next/image";
import Link from "next/link";
import { formatoUSD } from "@/lib/formato-precio";
import { precioCityland, type Circuito } from "@/lib/circuitos";
import { portadaDe } from "@/lib/paquetes-armados/fotos";

// Tarjeta de un circuito en las vitrinas: portada, días, si lleva vuelo y el precio con fee bien visible.
export default function TarjetaCircuito({ c }: { c: Circuito }) {
  return (
    <li>
      <Link
        href={`/circuitos/${c.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
      >
        <div className="relative aspect-[16/10] bg-slate-100">
          <Image
            src={portadaDe(c)}
            alt={`Paquete armado ${c.nombre}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-[#0a1628]/90 px-3 py-1 text-xs font-extrabold text-white">
            {c.dias} días · {c.noches} noches
          </span>
          <span
            className={`absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-xs font-extrabold ${c.tipo === "vuelo" ? "bg-emerald-500 text-white" : "bg-white/95 text-[#0a1628]"}`}
          >
            {c.tipo === "vuelo" ? `Con vuelo desde ${c.origen}` : c.tipo === "crucero" ? "Solo crucero" : "Sin vuelo"}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-4">
          <span className="font-extrabold leading-snug text-[#0a1628] group-hover:underline">{c.nombre}</span>
          <span className="text-sm text-slate-600 line-clamp-1">{c.ciudades.slice(0, 4).join(" · ")}</span>
          <span className="mt-auto flex items-end justify-between gap-2 pt-2">
            <span className="text-xs text-slate-500">
              desde <strong className="block text-2xl text-[#0a1628]">{formatoUSD(precioCityland(c))}</strong>
            </span>
            <span className="rounded-xl bg-[#25D366] px-3 py-2 text-sm font-extrabold text-white">Ver paquete</span>
          </span>
        </div>
      </Link>
    </li>
  );
}
