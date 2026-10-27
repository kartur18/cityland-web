import Link from "next/link";

// Las guías de España que responden lo que la gente busca antes de viajar; enlazarlas desde las páginas que venden
// les pasa fuerza en Google y lleva al lector del dato a la cotización.
export const GUIAS_ESPANA = [
  { href: "/pasajes-a-espana", texto: "Pasajes a España: todas las rutas" },
  { href: "/viajes/requisitos-viajar-a-espana-desde-peru", texto: "Requisitos para viajar a España desde Perú" },
  { href: "/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje", texto: "Bolsa de viaje: cuánto dinero llevar" },
  { href: "/blog/carta-invitacion-espana-peru-requisitos", texto: "Carta de invitación para España" },
  { href: "/blog/que-preguntan-en-migraciones-espana-barajas", texto: "Qué te preguntan en migraciones" },
  { href: "/blog/cuanto-cuesta-viajar-a-espana-desde-peru", texto: "Cuánto cuesta viajar a España" },
  { href: "/blog/viajar-a-espana-por-primera-vez-desde-peru", texto: "Tu primer viaje a España" },
  { href: "/blog/vuelos-directos-lima-madrid-comparativa-aerolineas", texto: "Vuelos directos Lima–Madrid" },
  { href: "/blog/seguro-schengen-30000-euros-peru-precio", texto: "Seguro de viaje para Europa" },
  { href: "/blog/visa-de-estudios-espana-desde-peru", texto: "Visa de estudios para España" },
  { href: "/blog/reagrupacion-familiar-espana-desde-peru", texto: "Reagrupación familiar" },
  { href: "/blog/traer-familiar-de-peru-a-espana-de-visita", texto: "Traer a un familiar de visita" },
  { href: "/blog/trabajar-legalmente-en-espana-desde-peru", texto: "Trabajar legalmente en España" },
] as const;

export default function GuiasEspana() {
  return (
    <section className="py-10 sm:py-14 bg-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight">Guías para viajar a España</h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
          Lo que más nos preguntan antes de viajar, revisado en las fuentes oficiales.
        </p>
        <div className="flex flex-wrap gap-2.5">
          {GUIAS_ESPANA.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]"
            >
              {g.texto}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
