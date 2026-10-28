import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import NotaPrecio from "@/components/NotaPrecio";
import { asegurarDesde, formatoUSD, quitarPrecioDeTitulo } from "@/lib/formato-precio";
import type { DatosSuperLandingMigratorio } from "@/lib/catalogo-paquetes-migratorios-1000";
import AvisoRegresoReservado from "@/components/AvisoRegresoReservado";

function obtenerEstiloSilo(silo: DatosSuperLandingMigratorio["silo"], pais: string) {
  if (silo === "italia" || pais === "Italia") {
    return {
      heroBg: "from-white via-emerald-50/40 to-sky-50",
      borderHero: "border-emerald-400",
      badgeHero: "bg-emerald-50 border-emerald-200 text-emerald-800",
      gradSubtitulo: "from-emerald-700 via-emerald-600 to-emerald-700",
      selloPais: "Especialistas en Ruta Italia",
    };
  }
  if (silo === "francia-europa") {
    return {
      heroBg: "from-white via-sky-50/40 to-sky-50",
      borderHero: "border-sky-400",
      badgeHero: "bg-sky-50 border-sky-200 text-sky-800",
      gradSubtitulo: "from-sky-700 via-sky-600 to-sky-700",
      selloPais: `Especialistas en Ruta ${pais}`,
    };
  }
  return {
    heroBg: "from-white via-amber-50/40 to-sky-50",
    borderHero: "border-amber-400",
    badgeHero: "bg-amber-50 border-amber-200 text-amber-800",
    gradSubtitulo: "from-amber-600 via-orange-600 to-amber-700",
    selloPais: "Especialistas en Paquetes Migratorios a Europa",
  };
}

function limpiarNombrePlan(nombre: string): string {
  return nombre.replace(/\s*\$\d+/g, "").trim();
}

export default function SuperLandingMigratorioTemplate({
  datos,
}: {
  datos: DatosSuperLandingMigratorio;
}) {
  const estilo = obtenerEstiloSilo(datos.silo, datos.pais);

  const waCotizarGeneral = `https://wa.me/51944103890?text=${encodeURIComponent(
    `¡Hola! Quiero más información del paquete migratorio a ${datos.ciudadDestino} (${datos.pais}) desde ${formatoUSD(datos.precioDesdeUSD)}.\n\n📍 Ref Web: citylandtravel.com/paquetes-migratorios/${datos.slug} [Hero Principal]`
  )}`;

  const waSoloCarpeta = `https://wa.me/51944103890?text=${encodeURIComponent(
    `¡Hola! Ya tengo mi pasaje a ${datos.ciudadDestino} y quiero contratar Solo la Carpeta Migratoria ($85 USD).\n\n📍 Ref Web: citylandtravel.com/paquetes-migratorios/${datos.slug} [Solo Carpeta]`
  )}`;

  const rutaHubPais =
    datos.pais === "España"
      ? { nombre: "España", href: "/espana" }
      : datos.pais === "Italia"
      ? { nombre: "Italia", href: "/italia" }
      : datos.pais === "Francia"
      ? { nombre: "Francia", href: "/francia" }
      : { nombre: "Europa", href: "/paquetes-migratorios" };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pb-20 sm:pb-0">
        {/* 1. HERO SIMÉTRICO: MENSAJE CLARO + FOTO REAL ÚNICA DEL DESTINO (SIN CAJAS ANIDADAS) */}
        <section
          className={`relative bg-gradient-to-br ${estilo.heroBg} text-[#0a1628] pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden border-b-4 ${estilo.borderHero}`}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Migas de pan */}
            <nav
              aria-label="Ruta de navegación"
              className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-5"
            >
              <Link href="/" className="hover:text-emerald-700 transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link
                href="/paquetes-migratorios"
                className="hover:text-emerald-700 transition-colors"
              >
                Paquetes Migratorios
              </Link>
              <span>/</span>
              <Link
                href={rutaHubPais.href}
                className="hover:text-emerald-700 transition-colors font-semibold text-emerald-700"
              >
                {rutaHubPais.nombre}
              </Link>
              <span>/</span>
              <span className="text-[#0a1628] font-bold">{datos.ciudadDestino}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Izquierda */}
              <div className="lg:col-span-6 space-y-4">
                <div
                  className={`inline-flex items-center gap-2 border px-3.5 py-1.5 rounded-full text-xs font-extrabold ${estilo.badgeHero}`}
                >
                  <FlagIcon pais={datos.banderaPais} className="w-4 h-3" />
                  <span>{estilo.selloPais}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.12]">
                  {asegurarDesde(datos.tituloH1)}
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${estilo.gradSubtitulo} block mt-2 text-lg sm:text-2xl font-extrabold`}
                  >
                    {asegurarDesde(datos.subtituloHero)}
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {asegurarDesde(datos.ganchoPeruano)}
                </p>

                {/* Botones de 1 sola línea */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={waCotizarGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb858] text-white font-extrabold px-7 py-4 rounded-2xl shadow-xl text-sm sm:text-base whitespace-nowrap transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Cotizar por WhatsApp</span>
                  </a>
                  <a
                    href="#planes-precios"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-[#0a1628] font-bold px-6 py-4 rounded-2xl text-xs sm:text-sm whitespace-nowrap transition-all"
                  >
                    <span>Ver los 4 planes por fecha ↓</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-slate-600 pt-2 border-t border-slate-200">
                  <span>✓ Agencia Formal RUC 20614914239</span>
                  <span>✓ Oficina en Av. Antúnez de Mayolo 814, Los Olivos</span>
                </div>
              </div>

              {/* Derecha: Foto grande del Destino + Lista limpia sin recuadros internos */}
              <div className="lg:col-span-6">
                <div className="bg-white text-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                  <div className="relative h-56 sm:h-64 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={datos.imagenHero}
                      alt={`${datos.ciudadDestino}, ${datos.pais} - ${datos.monumentoDestacado}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-black/45 backdrop-blur-xs px-3 py-1 rounded-full">
                        <FlagIcon pais={datos.banderaPais} className="w-3.5 h-2.5" />
                        <span>{datos.monumentoDestacado}</span>
                      </span>
                      <span className="bg-amber-400 text-slate-950 text-[11px] font-black px-3 py-1 rounded-full">
                        ✈️ {datos.codigoRuta}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h2 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-3">
                      Los 5 documentos incluidos en tu paquete a {datos.ciudadDestino}:
                    </h2>
                    <ul className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                      {datos.explicacionIdaYVuelta.documentosIncluidos.map((doc) => (
                        <li
                          key={doc.titulo}
                          className="py-2 flex items-center gap-2.5"
                        >
                          <span className="text-emerald-600 font-black shrink-0">✓</span>
                          <span>
                            <strong className="text-[#0a1628]">{doc.titulo}:</strong>{" "}
                            <span className="text-slate-600">{asegurarDesde(doc.descripcion)}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <AvisoRegresoReservado className="mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOS 4 PLANES OFICIALES SEGÚN FECHA (TARJETAS LIMPIAS SIN RECUADROS INTERNOS) */}
        <section id="planes-precios" className="py-14 sm:py-18 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
                Tarifas según Temporada de Viaje
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0a1628] tracking-tight">
                Elige tu Plan para Viajar a {datos.ciudadDestino}
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Todos los planes incluyen los 5 documentos de tu carpeta migratoria y se separan con el 50%.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {datos.planes.map((plan) => {
                const nombreLimpio = limpiarNombrePlan(plan.nombre);
                const waUrlPlan = `https://wa.me/51944103890?text=${encodeURIComponent(
                  plan.waMensaje
                )}`;
                return (
                  <article
                    key={plan.id}
                    className={`rounded-3xl p-6 flex flex-col justify-between h-full transition-shadow hover:shadow-lg ${
                      plan.destacado
                        ? "bg-white border-2 border-amber-400 shadow-md"
                        : "bg-white border border-slate-200 shadow-xs"
                    }`}
                  >
                    <div>
                      <span
                        className={`inline-block text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-3 ${plan.colorBadge}`}
                      >
                        {asegurarDesde(plan.etiqueta)}
                      </span>

                      <h3 className="text-xl font-black text-[#0a1628]">
                        {nombreLimpio}
                      </h3>

                      <p className="text-xs font-semibold text-red-600 mt-1 min-h-[34px] flex items-center">
                        📅 {asegurarDesde(plan.fechasIdeales)}
                      </p>

                      <div className="my-4 py-3.5 border-y border-slate-100">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-bold text-slate-500">Desde</span>
                          <span className="text-3xl font-black text-[#0a1628]">
                            {formatoUSD(plan.precioUSD)}
                          </span>
                          <span className="text-xs font-bold text-slate-500">USD</span>
                        </div>
                        <span className="text-xs font-extrabold text-emerald-700 block mt-1">
                          ✓ Separa con el 50% (desde {formatoUSD(plan.inicial50USD)} USD)
                        </span>
                      </div>

                      <ul className="space-y-2 text-sm text-slate-600 mb-6">
                        {plan.incluye.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-black mt-0.5 shrink-0">
                              ✓
                            </span>
                            <span>{asegurarDesde(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={waUrlPlan}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Elegir ${nombreLimpio} por WhatsApp`}
                      className="w-full inline-flex items-center justify-center gap-2 font-extrabold py-3.5 px-4 min-h-[44px] rounded-xl text-sm transition-colors cursor-pointer bg-[#25D366] hover:bg-[#1fb858] text-white"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Elegir este plan</span>
                    </a>
                  </article>
                );
              })}
            </div>
            <NotaPrecio className="text-center mt-5" />

            {/* Franja limpia para quienes ya tienen pasaje */}
            <div className="mt-8 rounded-2xl bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 block">
                  ¿Ya compraste tu pasaje de avión por tu cuenta?
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                  También armamos <strong>Solo tu Carpeta Migratoria para {datos.ciudadDestino}</strong> (regreso reservado + hotel + seguro + check-in) desde <strong className="text-emerald-400">$85 USD</strong>.
                </p>
              </div>
              <a
                href={waSoloCarpeta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-3 rounded-xl text-xs whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Pedir Solo Carpeta</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3. GUÍA PRÁCTICA DE LLEGADA A LA CIUDAD (SIN REPETIR LA FOTO DEL HERO) */}
        <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                  Guía Práctica de Destino · {datos.regionDestino}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628]">
                  Información Clave para tu Llegada a {datos.ciudadDestino}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Aeropuerto: <strong>{datos.aeropuertoLlegada}</strong> · Aerolíneas: {datos.aerolineas}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <span className="text-xs font-extrabold uppercase text-blue-700 block mb-1.5">
                  🚆 Transporte al centro
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {datos.infoLlegadaCiudad.comoLlegarCentro}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase text-emerald-700 mb-1.5">
                  <FlagIcon pais="Perú" className="w-3.5 h-2.5 shrink-0" />
                  <span>Comunidad peruana en {datos.ciudadDestino}</span>
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {datos.infoLlegadaCiudad.zonasPeruanos}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <span className="text-xs font-extrabold uppercase text-amber-700 block mb-1.5">
                  ✈️ Recomendación para tu viaje
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {datos.infoLlegadaCiudad.consejoLocal}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PREGUNTAS FRECUENTES EN ACORDEÓN COMPACTO + RUTAS RELACIONADAS */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] text-center mb-6">
              Preguntas Frecuentes sobre tu Viaje a {datos.ciudadDestino}
            </h2>
            <div className="space-y-3 mb-12">
              {datos.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 transition-colors open:bg-white open:border-amber-400"
                >
                  <summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-sm font-extrabold text-[#0a1628]">
                    <span>{asegurarDesde(faq.q)}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2.5 pt-2.5 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                    {asegurarDesde(faq.a)}
                  </p>
                </details>
              ))}
            </div>

            {/* Rutas relacionadas */}
            <div className="border-t border-slate-200 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500">
                  Otras rutas relacionadas en Europa
                </h3>
                <Link
                  href="/paquetes-migratorios"
                  className="text-xs font-extrabold text-red-600 hover:underline"
                >
                  Ver catálogo completo →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {datos.enlacesRelacionados.slice(0, 4).map((rel) => (
                  <Link
                    key={rel.href}
                    href={rel.href}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase text-slate-600 block">
                        {rel.pais} · {rel.ciudad}
                      </span>
                      <span className="text-xs font-bold text-slate-800 line-clamp-2">
                        {quitarPrecioDeTitulo(rel.titulo)}
                      </span>
                    </div>
                    <span className="text-xs font-black text-emerald-700 shrink-0">
                      Desde {formatoUSD(rel.precioDesde)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Barra móvil inferior */}
      <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3.5 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <div>
          <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
            {datos.ciudadDestino} · Separa con 50%
          </span>
          <span className="text-sm font-black text-[#0a1628]">
            Desde {formatoUSD(datos.precioDesdeUSD)} USD
          </span>
        </div>
        <a
          href={waCotizarGeneral}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#25D366] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md whitespace-nowrap"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Cotizar</span>
        </a>
      </div>

      <Footer />
      {/* Espaciador para que la barra móvil no tape el pie */}
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </div>
  );
}
