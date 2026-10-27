import Link from "next/link";
import { formatoUSD } from "@/lib/formato-precio";
import { precioCityland, type Circuito } from "@/lib/circuitos";

// Tarjeta de un circuito en las vitrinas: nombre, días, si lleva vuelo y precio con fee.
export default function TarjetaCircuito({ c }: { c: Circuito }) {
  return (
    <li>
      <Link
        href={`/circuitos/${c.slug}`}
        className="flex h-full flex-col justify-between gap-2 min-h-[56px] rounded-2xl border border-slate-200 px-5 py-4 hover:border-[#0a1628] transition-colors"
      >
        <span className="font-extrabold text-[#0a1628] leading-snug">{c.nombre}</span>
        <span className="text-sm text-slate-600">
          {c.dias} días · {c.tipo === "vuelo" ? `con vuelo desde ${c.origen}` : c.tipo === "crucero" ? "solo crucero" : "solo terrestre"}
        </span>
        <span className="text-[15px] text-slate-700">
          desde <strong className="text-[#0a1628]">{formatoUSD(precioCityland(c))}</strong>
        </span>
      </Link>
    </li>
  );
}
