import Link from "next/link";
import { enlacesDeCiudad, type Seccion } from "@/lib/destino-cruzado";

// «Todo para tu viaje a X»: une las secciones de una misma ciudad. Neutro, para que entre en cualquier diseño.
export default function TodoElDestino({ ciudad, actual }: { ciudad?: string; actual: Seccion }) {
  const datos = ciudad ? enlacesDeCiudad(ciudad, actual) : null;
  if (!datos) return null;
  return (
    <nav aria-label={`Todo para tu viaje a ${datos.nombre}`} className="rounded-[24px] bg-white p-5 sm:p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-lg font-extrabold text-slate-900 sm:text-xl">Todo para tu viaje a {datos.nombre}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {datos.enlaces.map((e) => (
          <li key={e.href}>
            <Link
              href={e.href}
              className="inline-flex min-h-[44px] items-center rounded-full bg-slate-100 px-4 text-sm font-bold text-slate-800 hover:bg-slate-200"
            >
              {e.texto}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
