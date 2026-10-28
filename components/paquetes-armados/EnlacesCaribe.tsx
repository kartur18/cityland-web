import Link from "next/link";
import { paginasCaribe, type ClasePagina, type PaginaCaribe } from "@/lib/paquetes-armados/paginas-caribe";
import { DESTINOS_CIUDADES } from "@/lib/paquetes-armados/destinos-ciudades";

const CIUDADES = new Set(DESTINOS_CIUDADES.map((d) => d.id));

const TITULOS: Record<ClasePagina, string> = {
  mes: "Por mes de salida",
  estilo: "Por tipo de viaje",
  hotel: "Por hotel",
};

type Grupo = "ciudad" | "combinado" | "destino";
const grupo = (p: PaginaCaribe): Grupo => (CIUDADES.has(p.destino.id) ? "ciudad" : p.destino.pais === "combinado" ? "combinado" : "destino");
const mayuscula = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function Chip({ href, texto }: { href: string; texto: string }) {
  return (
    <li>
      <Link href={href} className="inline-flex min-h-[44px] items-center rounded-full border border-slate-200 px-4 text-sm font-bold text-[#0a1628] hover:border-[#0a1628]">
        {texto}
      </Link>
    </li>
  );
}

// Enlaces a las demás páginas del mismo destino y a destinos vecinos del mismo tipo: otras ciudades del mismo país,
// otras combinaciones de países o los demás destinos de la vitrina.
export default function EnlacesCaribe({ actual }: { actual: PaginaCaribe }) {
  const todas = paginasCaribe();
  const g = grupo(actual);
  const mismas = todas.filter((p) => p.destino.id === actual.destino.id && p.slug !== actual.slug);
  const vecino = (p: PaginaCaribe) => p.destino.id !== actual.destino.id && grupo(p) === g && (g !== "ciudad" || p.destino.pais === actual.destino.pais);
  const otros = [...new Map(todas.filter(vecino).map((p) => [p.destino.id, p])).values()];
  const enlace = (p: PaginaCaribe) => (g === "destino" ? `/paquetes-armados#${p.destino.id}` : g === "ciudad" ? (p.destino.hub ?? "/paquetes-armados") : `/paquetes-armados/${p.slug}`);
  const tituloOtros = g === "ciudad" ? "Otras ciudades cerca" : g === "combinado" ? "Otras combinaciones de países" : "Otros destinos con paquetes armados";
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
                <Chip key={p.slug} href={`/paquetes-armados/${p.slug}`} texto={mayuscula(p.clave)} />
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
      {otros.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">{tituloOtros}</h3>
          <ul className="flex flex-wrap gap-2">
            {otros.map((p) => (
              <Chip key={p.destino.id} href={enlace(p)} texto={mayuscula(p.destino.nombre)} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
