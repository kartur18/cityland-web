import Link from "next/link";
import { formatoUSD } from "@/lib/formato-precio";
import { MESES } from "@/lib/salidas";
import { feriadosEnViaje, listaY } from "@/lib/paquetes-armados/comun";
import { climaDelMes, zonaClima } from "@/lib/paquetes-armados/clima";
import { GUIAS_ESTILO } from "@/lib/paquetes-armados/guias-estilo";
import { desdePagina, paginasCaribe, type PaginaCaribe } from "@/lib/paquetes-armados/paginas-caribe";

// Contenido propio de cada clase de página, para que dos páginas del mismo destino no se vean iguales a Google:
// el mes trae su tabla de precios y clima del año, el estilo su guía y el hotel la comparación con los demás hoteles.

function Check() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-600">
      <path fill="currentColor" d="M8.1 14.6 3.5 10l1.4-1.4 3.2 3.2 7-7L16.5 6z" />
    </svg>
  );
}

const anioDe = (mes: number) => (mes >= 11 ? 2026 : 2027);

function PreciosDelAnio({ p }: { p: PaginaCaribe }) {
  const meses = paginasCaribe().filter((x) => x.destino.id === p.destino.id && x.clase === "mes");
  const zona = zonaClima(p.destino.zona);
  const mes = p.mes ?? 0;
  const feriados = feriadosEnViaje(`${anioDe(mes)}-${String(mes).padStart(2, "0")}-01`, `${anioDe(mes)}-${String(mes).padStart(2, "0")}-31`);
  const precios = meses.map((x) => ({ x, desde: desdePagina(x), vuelo: desdePagina(x, "vuelo"), terrestre: desdePagina(x, "sin-vuelo") }));
  const hayTerrestre = precios.some((x) => x.terrestre > 0);
  // Se compara con vuelo contra con vuelo; si el destino solo tiene terrestres, entre terrestres.
  const comparables = precios.some((x) => x.vuelo) ? precios.filter((x) => x.vuelo).map((x) => ({ ...x, desde: x.vuelo })) : precios;
  const masBarato = comparables.length ? comparables.reduce((a, b) => (b.desde < a.desde ? b : a)) : undefined;
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-extrabold text-[#0a1628]">
        ¿Conviene viajar a {p.destino.nombre} en {MESES[mes - 1]}?
      </h2>
      <p className="text-[15px] text-slate-700">
        {masBarato && masBarato.x.mes === mes
          ? `Sí, si buscas precio: ${MESES[mes - 1]} es el mes más barato para viajar a ${p.destino.nombre} con paquete armado.`
          : masBarato
            ? `El mes más barato es ${masBarato.x.clave}, desde ${formatoUSD(masBarato.desde)}; en ${MESES[mes - 1]} el precio parte en ${formatoUSD(desdePagina(p))}.`
            : ""}
        {feriados.length > 0 && ` En ${MESES[mes - 1]} hay feriado en el Perú por ${listaY(feriados)}, ideal para pedir menos días en el trabajo.`}
      </p>
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[480px] text-[15px]">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Mes de salida</th>
              <th className="px-4 py-3">Con vuelo</th>
              {hayTerrestre && <th className="px-4 py-3">Sin vuelo</th>}
              <th className="px-4 py-3">Clima</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {precios.map(({ x, vuelo, terrestre }) => (
              <tr key={x.slug} className={x.mes === mes ? "bg-sky-50 font-bold" : ""}>
                <td className="px-4 py-3">
                  {x.mes === mes ? (
                    <span className="capitalize">{x.clave}</span>
                  ) : (
                    <Link href={`/paquetes-armados/${x.slug}`} className="capitalize text-[#0a1628] underline">
                      {x.clave}
                    </Link>
                  )}
                </td>
                <td className="px-4 py-3">{vuelo ? formatoUSD(vuelo) : "—"}</td>
                {hayTerrestre && <td className="px-4 py-3 text-slate-600">{terrestre ? formatoUSD(terrestre) : "—"}</td>}
                <td className="px-4 py-3 text-slate-600">{zona && x.mes ? climaDelMes(zona, x.mes).t : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function GuiaDelEstilo({ p }: { p: PaginaCaribe }) {
  const g = p.estilo && GUIAS_ESTILO[p.estilo.id];
  if (!g) return null;
  return (
    <section className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <h2 className="text-2xl font-extrabold text-[#0a1628]">{g.titulo(p.destino.nombre)}</h2>
      <p className="text-[15px] text-slate-700">{g.intro(p.destino.nombre)}</p>
      <ul className="space-y-2.5">
        {g.puntos.map((x) => (
          <li key={x} className="flex gap-2 text-[15px] text-slate-700">
            <Check />
            {x}
          </li>
        ))}
      </ul>
    </section>
  );
}

function CompararHoteles({ p }: { p: PaginaCaribe }) {
  const hoteles = paginasCaribe().filter((x) => x.destino.id === p.destino.id && x.clase === "hotel");
  if (hoteles.length < 2) return null;
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-extrabold text-[#0a1628]">Compara los hoteles de {p.destino.nombre}</h2>
      <p className="text-[15px] text-slate-700">
        Estos son los hoteles con los que trabajan los paquetes armados a {p.destino.nombre}. La categoría cambia el precio, no el recorrido.
      </p>
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[480px] text-[15px]">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Hotel</th>
              <th className="px-4 py-3">Categoría</th>
              <th className="px-4 py-3">Paquetes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {hoteles.map((x) => (
              <tr key={x.slug} className={x.slug === p.slug ? "bg-sky-50 font-bold" : ""}>
                <td className="px-4 py-3">
                  {x.slug === p.slug ? (
                    x.clave
                  ) : (
                    <Link href={`/paquetes-armados/${x.slug}`} className="text-[#0a1628] underline">
                      {x.clave}
                    </Link>
                  )}
                </td>
                <td className="px-4 py-3">{x.hotel?.categoria || "—"}</td>
                <td className="px-4 py-3 text-slate-600">{x.programas.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function ExtrasPagina({ pagina: p }: { pagina: PaginaCaribe }) {
  if (p.clase === "mes") return <PreciosDelAnio p={p} />;
  if (p.clase === "estilo") return <GuiaDelEstilo p={p} />;
  return <CompararHoteles p={p} />;
}
