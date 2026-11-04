import Link from "next/link";
import { buildWaUrl } from "@/components/constantes";
import { ofertasDePilar } from "@/lib/ofertas-de-pilar";

// Mejores ofertas de la página principal de un destino, cada una con su enlace y su botón de WhatsApp: la página que
// Google debe subir es la que lleva a las ofertas y a la conversación.
export default function OfertasDelPilar({ ruta, nombre }: { ruta: string; nombre: string }) {
  const ofertas = ofertasDePilar(ruta);
  if (!ofertas.length) return null;
  return (
    <section className="space-y-4" aria-labelledby="ofertas-del-destino">
      <h2 id="ofertas-del-destino" className="text-2xl font-extrabold text-[#0a1628]">
        Ofertas a {nombre} desde Lima
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ofertas.map((o) => {
          const [crudo, ...resto] = o.titulo.split(/:\s*|\s+—\s+/);
          // «Decameron Marazul San Andrés (San Andrés)»: el paréntesis final repite la ciudad.
          const producto = crudo.replace(/\s*\([^)]*\)\s*$/, "");
          const wa = buildWaUrl({
            categoria: "general",
            mensajePersonalizado: `¡Hola Cityland Travel! Quiero cotizar: ${producto.trim()}. Mis fechas y cuántos vamos: `,
            refWeb: `citylandtravel.com/ofertas/${o.slug}`,
          });
          return (
            <li key={o.slug} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link href={`/ofertas/${o.slug}`} className="group flex-1 space-y-1">
                <h3 className="text-base font-extrabold leading-snug text-[#0a1628] group-hover:underline">{producto.trim()}</h3>
                {resto.length > 0 && <p className="text-sm text-slate-600">{resto.join(" · ")}</p>}
              </Link>
              <div className="mt-4 flex items-end justify-between gap-3">
                <span className="text-xs text-slate-500">
                  por persona, desde
                  <strong className="block text-2xl text-[#0a1628]">US$ {o.precioDesdeUSD.toLocaleString("en-US")}</strong>
                </span>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center rounded-xl bg-[#25D366] px-4 text-sm font-extrabold text-white hover:bg-[#1ebe5b]"
                >
                  Cotizar
                </a>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="text-xs text-slate-500">Precios referenciales; te confirmamos el de tu fecha y tu hotel por WhatsApp.</p>
    </section>
  );
}
