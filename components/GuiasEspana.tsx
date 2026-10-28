import Link from "next/link";

// Las guías de España que responden lo que la gente busca antes de viajar; enlazarlas desde las páginas que venden
// les pasa fuerza en Google y lleva al lector del dato a la cotización.
export const GUIAS_ESPANA = [
  { href: "/pasajes-a-espana", texto: "Pasajes a España: todas las rutas" },
  { href: "/espana/pasajes-a-madrid-desde-provincias", texto: "Pasajes a Madrid desde provincias" },
  { href: "/espana/llegada-aeropuerto-madrid-barajas", texto: "Tu llegada a Barajas" },
  { href: "/espana/pasajes-baratos-lima-madrid", texto: "Pasajes baratos Lima–Madrid" },
  { href: "/espana/viajar-a-espana-a-visitar-familia", texto: "Viajar a visitar a tu familia" },
  { href: "/espana/viajar-a-espana-con-ninos", texto: "Pasajes para viajar con niños" },
  { href: "/espana/viajar-a-espana-adultos-mayores", texto: "Viajes para adultos mayores" },
  { href: "/espana/primer-viaje-a-espana", texto: "Primer viaje: te acompañamos" },
  { href: "/espana/pasajes-para-estudiantes-a-espana", texto: "Pasajes para estudiantes" },
  { href: "/espana/pasaje-reagrupacion-familiar-espana", texto: "Pasaje para reagrupación familiar" },
  { href: "/paquetes-a-espana", texto: "Paquetes turísticos a España" },
  { href: "/retorno-gestionado-que-es", texto: "Qué es el retorno gestionado" },
  { href: "/pasaje-ida-y-vuelta-a-espana", texto: "Pasaje ida y vuelta" },
  { href: "/pasaje-solo-ida-a-espana", texto: "Pasaje solo de ida" },
  { href: "/pasajes-de-espana-a-peru", texto: "De España a Perú" },
  { href: "/visa-de-trabajo-para-espana", texto: "Visa de trabajo" },
  { href: "/visa-de-estudios-para-espana", texto: "Visa de estudios" },
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
  { href: "/pasajes-a-barcelona", texto: "Pasajes a Barcelona" },
  { href: "/viajar-a-espana-en-navidad", texto: "España en Navidad" },
  { href: "/viajar-a-espana-en-verano", texto: "España en verano" },
  { href: "/semana-santa-en-espana", texto: "Semana Santa en España" },
  { href: "/blog/equipaje-para-viajar-a-espana-iberia-air-europa-latam-plus-ultra", texto: "Equipaje por aerolínea" },
  { href: "/blog/viajar-a-espana-con-ninos-desde-peru", texto: "Viajar a España con niños" },
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
