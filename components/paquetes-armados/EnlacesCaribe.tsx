import Link from "next/link";
import { paginasCaribe, type ClasePagina, type PaginaCaribe } from "@/lib/paquetes-armados/paginas-caribe";

const TITULOS: Record<ClasePagina, string> = {
  mes: "Por mes de salida",
  estilo: "Por tipo de viaje",
  hotel: "Por hotel",
};

function Chip({ href, texto }: { href: string; texto: string }) {
  return (
    <li>
      <Link href={href} className="inline-flex min-h-[44px] items-center rounded-full border border-slate-200 px-4 text-sm font-bold text-[#0a1628] hover:border-[#0a1628]">
        {texto}
      </Link>
    </li>
  );
}

// Enlaces a las demás páginas del mismo destino y a los otros destinos de playa.
export default function EnlacesCaribe({ actual }: { actual: PaginaCaribe }) {
  const todas = paginasCaribe();
  const mismas = todas.filter((p) => p.destino.id === actual.destino.id && p.slug !== actual.slug);
  const otros = [...new Map(todas.filter((p) => p.destino.id !== actual.destino.id).map((p) => [p.destino.id, p])).values()];
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-extrabold text-[#0a1628]">Más paquetes armados a {actual.destino.nombre}</h2>
      {(["mes", "estilo", "hotel"] as ClasePagina[]).map((clase) => {
        const xs = mismas.filter((p) => p.clase === clase);
        if (!xs.length) return null;
        return (
          <div key={clase} className="space-y-2">
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">{TITULOS[clase]}</h3>
            <ul className="flex flex-wrap gap-2">
              {xs.map((p) => (
                <Chip key={p.slug} href={`/paquetes-armados/${p.slug}`} texto={p.clave.charAt(0).toUpperCase() + p.clave.slice(1)} />
              ))}
            </ul>
          </div>
        );
      })}
      {actual.destino.hub && (
        <p className="text-sm">
          <Link href={actual.destino.hub} className="font-bold text-[#0a1628] underline">
            Todo sobre viajar a {actual.destino.nombre}
          </Link>
        </p>
      )}
      <div className="space-y-2">
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">Otros destinos con paquetes armados</h3>
        <ul className="flex flex-wrap gap-2">
          {otros.map((p) => (
            <Chip key={p.destino.id} href={`/paquetes-armados#${p.destino.id}`} texto={p.destino.nombre.charAt(0).toUpperCase() + p.destino.nombre.slice(1)} />
          ))}
        </ul>
      </div>
    </section>
  );
}
