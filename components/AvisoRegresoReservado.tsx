import Link from "next/link";

// El paquete migratorio lleva una reserva de regreso, no un boleto emitido. La Orden PRE/1282/2007 (BOE) pide,
// si la policía lo solicita, boleto de regreso nominativo, intransferible y cerrado: la web no promete que la
// reserva cumpla ese requisito (decisión de Carlos, 24-oct-2026, mientras lo revisa con un abogado).
export default function AvisoRegresoReservado({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-slate-700 leading-relaxed ${className}`}>
      <p className="font-extrabold text-[#0a1628] mb-1">Importante sobre el regreso</p>
      <p>
        El paquete incluye una <strong>reserva del vuelo de regreso, no un boleto emitido</strong>. En el control de
        frontera te pueden pedir tu boleto de vuelta, y en España la norma (Orden PRE/1282/2007) dice que debe estar a
        tu nombre, ser intransferible y tener fecha fija. Si quieres viajar con el regreso emitido, te cotizamos el
        pasaje de ida y vuelta.{" "}
        <Link href="/blog/que-preguntan-en-migraciones-espana-barajas" className="font-bold text-emerald-700 underline">
          Qué revisa la policía al llegar
        </Link>
      </p>
    </div>
  );
}
