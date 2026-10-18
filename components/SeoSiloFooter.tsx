import Link from "next/link";
import type { MigaDePanSEO, PaqueteEnlacesCruzadosSEO } from "@/lib/seo-arquitectura";

export function SeoBreadcrumbs({ migas }: { migas: MigaDePanSEO[] }) {
  if (!migas || migas.length === 0) return null;

  return (
    <nav
      aria-label="Ruta de navegación"
      className="bg-slate-50 border-b border-slate-200/80 py-2.5 px-4 sm:px-6"
    >
      <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs text-slate-600">
        {migas.map((m, idx) => {
          const esUltimo = idx === migas.length - 1;
          return (
            <li key={`${m.url}-${idx}`} className="inline-flex items-center gap-1.5">
              {idx > 0 && <span className="text-slate-400 select-none">/</span>}
              {esUltimo ? (
                <span className="font-bold text-[#0a1628] truncate max-w-[260px] sm:max-w-md" aria-current="page">
                  {m.nombre}
                </span>
              ) : (
                <Link
                  href={m.url}
                  className="hover:text-red-600 font-medium transition-colors"
                >
                  {m.nombre}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function SeoSiloFooter({
  enlaces,
  tituloContexto,
}: {
  enlaces: PaqueteEnlacesCruzadosSEO;
  tituloContexto: string;
}) {
  return (
    <section
      aria-label="Rutas, paquetes y destinos relacionados"
      className="py-12 bg-slate-50/80 border-t border-slate-200/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Bloque Pilar Temático */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-full mb-1.5">
              Arquitectura de Destinos Cityland Travel
            </span>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0a1628]">
              {enlaces.pilar.titulo}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {enlaces.pilar.subtitulo}
            </p>
          </div>
          <Link
            href={enlaces.pilar.href}
            className="inline-flex items-center justify-center shrink-0 bg-[#0a1628] hover:bg-red-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
          >
            Explorar Guía Principal →
          </Link>
        </div>

        {/* Malla de 4 Columnas de Silos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3 pb-2 border-b border-slate-200">
              Ofertas Relacionadas: {tituloContexto}
            </h3>
            <ul className="space-y-2">
              {enlaces.ofertas.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between gap-2 text-xs text-slate-700 hover:text-red-600 transition-colors"
                  >
                    <span className="font-medium group-hover:underline line-clamp-1">
                      {item.titulo}
                    </span>
                    {item.etiqueta && (
                      <span className="text-[11px] font-bold text-slate-500 shrink-0">
                        {item.etiqueta}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3 pb-2 border-b border-slate-200">
              Rutas de Vuelos y Tarifas
            </h3>
            <ul className="space-y-2">
              {enlaces.vuelos.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between gap-2 text-xs text-slate-700 hover:text-red-600 transition-colors"
                  >
                    <span className="font-medium group-hover:underline line-clamp-1">
                      {item.titulo}
                    </span>
                    {item.etiqueta && (
                      <span className="text-[11px] font-bold text-slate-500 shrink-0">
                        {item.etiqueta}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3 pb-2 border-b border-slate-200">
              Guías de Destinos y Circuitos
            </h3>
            <ul className="space-y-2">
              {enlaces.destinos.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between gap-2 text-xs text-slate-700 hover:text-red-600 transition-colors"
                  >
                    <span className="font-medium group-hover:underline line-clamp-1">
                      {item.titulo}
                    </span>
                    {item.etiqueta && (
                      <span className="text-[11px] font-bold text-slate-500 shrink-0">
                        {item.etiqueta}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              {enlaces.viajes.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between gap-2 text-xs text-slate-700 hover:text-red-600 transition-colors"
                  >
                    <span className="font-medium group-hover:underline line-clamp-1">
                      {item.titulo}
                    </span>
                    {item.etiqueta && (
                      <span className="text-[11px] font-bold text-slate-500 shrink-0">
                        {item.etiqueta}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3 pb-2 border-b border-slate-200">
              Atención en Lima y Provincias
            </h3>
            <ul className="space-y-2">
              {enlaces.agencias.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between gap-2 text-xs text-slate-700 hover:text-red-600 transition-colors"
                  >
                    <span className="font-medium group-hover:underline line-clamp-1">
                      {item.titulo}
                    </span>
                    {item.etiqueta && (
                      <span className="text-[11px] font-bold text-slate-500 shrink-0">
                        {item.etiqueta}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/directorio"
                  className="text-xs font-extrabold text-red-600 hover:underline"
                >
                  Ver Directorio Completo de Destinos →
                </Link>
              </li>
              <li>
                <Link
                  href="/espana"
                  className="text-xs font-bold text-[#0a1628] hover:text-red-600 hover:underline"
                >
                  Especialistas en Madrid, Barcelona e Italia →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
