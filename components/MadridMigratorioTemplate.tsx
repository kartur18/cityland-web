import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";

export interface PlanMadridReal {
  etiqueta: string;
  titulo: string;
  precioUSD: number;
  subtitulo: string;
  destacado?: boolean;
  incluye: string[];
  waMensaje: string;
}

export interface DatosLandingMadridSEO {
  slug: string;
  silo: string;
  siloNombre: string;
  badgeSuperior: string;
  codigoRuta: string;
  terminalBarajas: string;
  aerolineaDestacada: string;
  tituloPrincipal: string;
  subtituloDorado: string;
  resumenEjecutivo: string;
  zonaOMunicipioMadrid: string;
  origenPasajero: string;
  modalidadClave: string;
  precioDesdeUSD: number;
  precioCarpetaSolaUSD: number;
  precioIdaYVueltaUSD: number;
  imagenHero: string;
  imagenSecundaria: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  planesReales: PlanMadridReal[];
  pasosExpediente: { paso: string; titulo: string; detalle: string }[];
  checklistBarajas: { requisito: string; detalleOficial: string; comoTeAyudamos: string }[];
  faqs: { q: string; a: string }[];
  enlacesRelacionados: { titulo: string; href: string; precio: number }[];
}

function obtenerTemaSilo(silo: string) {
  switch (silo) {
    case "estadias-boe-madrid":
      return {
        heroBg: "from-[#061814] via-[#0a2721] to-[#071524]",
        borderBottom: "border-emerald-400",
        badgeBg: "bg-emerald-400/15 border-emerald-400/40 text-emerald-300",
        subtituloGrad: "from-emerald-300 via-amber-200 to-emerald-300",
        selloTexto: "Estadías Calibradas al BOE 2026",
      };
    case "rutas-espana-barajas":
      return {
        heroBg: "from-[#1a0912] via-[#2b0f1c] to-[#0c1629]",
        borderBottom: "border-amber-400",
        badgeBg: "bg-amber-400/15 border-amber-400/40 text-amber-300",
        subtituloGrad: "from-amber-300 via-yellow-200 to-orange-300",
        selloTexto: "Rutas España y Europa vía Madrid-Barajas",
      };
    case "comunidad-peruana-madrid":
      return {
        heroBg: "from-[#0b132b] via-[#1c2541] to-[#111936]",
        borderBottom: "border-sky-400",
        badgeBg: "bg-sky-400/15 border-sky-400/40 text-sky-300",
        subtituloGrad: "from-amber-300 via-sky-200 to-amber-300",
        selloTexto: "Destinos Comunidad Peruana en Madrid",
      };
    case "expediente-servicios-madrid":
      return {
        heroBg: "from-[#111827] via-[#1e1b4b] to-[#0f172a]",
        borderBottom: "border-amber-300",
        badgeBg: "bg-amber-300/15 border-amber-300/40 text-amber-200",
        subtituloGrad: "from-amber-200 via-yellow-300 to-amber-400",
        selloTexto: "Servicios y Expedientes Migratorios Madrid",
      };
    default:
      return {
        heroBg: "from-[#071120] via-[#0c1d36] to-[#1a0f1e]",
        borderBottom: "border-amber-400",
        badgeBg: "bg-amber-400/15 border-amber-400/40 text-amber-300",
        subtituloGrad: "from-amber-300 via-yellow-200 to-amber-400",
        selloTexto: "Especialistas en Ruta Lima → Madrid-Barajas",
      };
  }
}

function limpiarTituloPlan(titulo: string): string {
  return titulo.replace(/\s*\(\$\d+\)/g, "").replace(/\s*\$\d+/g, "").trim();
}

export default function MadridMigratorioTemplate({
  datos,
}: {
  datos: DatosLandingMadridSEO;
}) {
  const tema = obtenerTemaSilo(datos.silo);
  const precioFmt = datos.precioDesdeUSD.toLocaleString("en-US");
  const carpetaFmt = datos.precioCarpetaSolaUSD.toLocaleString("en-US");

  const refTag = datos.slug
    ? `\n\n📍 Ref Web: citylandtravel.com/madrid/${datos.slug}`
    : `\n\n📍 Ref Web: citylandtravel.com/madrid`;

  const waUrlPrincipal = `https://wa.me/51944103890?text=${encodeURIComponent(
    `¡Hola! Quiero más información del paquete migratorio a ${datos.zonaOMunicipioMadrid} desde $${datos.precioDesdeUSD}.${refTag} [Hero Principal]`
  )}`;

  const waUrlSoloCarpeta = `https://wa.me/51944103890?text=${encodeURIComponent(
    `¡Hola! Ya tengo mi pasaje y quiero contratar Solo la Carpeta Migratoria para Madrid ($${datos.precioCarpetaSolaUSD} USD).${refTag} [Solo Carpeta]`
  )}`;

  const subtituloLimpio = datos.subtituloDorado.replace(/\s+USD\b/gi, " USD");
  const migaFinal = datos.zonaOMunicipioMadrid.startsWith("Madrid-Barajas")
    ? datos.tituloPrincipal.replace(/:\s*$/, "")
    : datos.zonaOMunicipioMadrid;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pb-20 sm:pb-0">
        {/* 1. HERO SIMÉTRICO Y LIMPIO (SIN CUADROS METIDOS DENTRO DE CUADROS) */}
        <section
          className={`relative bg-gradient-to-br ${tema.heroBg} text-white pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden border-b-4 ${tema.borderBottom}`}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb SEO */}
            <nav
              aria-label="Ruta de navegación"
              className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-5"
            >
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/espana" className="hover:text-amber-300 transition-colors">
                España
              </Link>
              <span>/</span>
              <Link
                href="/madrid"
                className="hover:text-amber-300 transition-colors font-semibold text-amber-300"
              >
                Madrid-Barajas
              </Link>
              {datos.slug && (
                <>
                  <span>/</span>
                  <span className="text-white font-bold">{migaFinal}</span>
                </>
              )}
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Columna Izquierda: Propuesta clara y 2 botones de 1 línea */}
              <div className="lg:col-span-6 space-y-5">
                <div
                  className={`inline-flex items-center gap-2 border px-3.5 py-1.5 rounded-full text-xs font-extrabold ${tema.badgeBg}`}
                >
                  <FlagIcon pais="España" className="w-4 h-3" />
                  <span>{tema.selloTexto}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.12]">
                  {datos.tituloPrincipal}
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${tema.subtituloGrad} block mt-2 text-xl sm:text-2xl lg:text-3xl font-extrabold`}
                  >
                    {subtituloLimpio}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {datos.resumenEjecutivo}
                </p>

                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={waUrlPrincipal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb858] text-white font-extrabold px-7 py-4 rounded-2xl shadow-xl text-sm sm:text-base whitespace-nowrap transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Cotizar por WhatsApp</span>
                  </a>
                  <a
                    href="#planes-madrid"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-6 py-4 rounded-2xl text-xs sm:text-sm whitespace-nowrap transition-all"
                  >
                    <span>Ver los 4 planes por fecha ↓</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-300 pt-3 border-t border-white/15">
                  <span>✓ Agencia Formal RUC 20614914239</span>
                  <span>✓ Oficina en Av. Antúnez de Mayolo 814, Los Olivos</span>
                </div>
              </div>

              {/* Columna Derecha: Fotografía grande del destino + lista limpia sin cuadros anidados */}
              <div className="lg:col-span-6">
                <div className="bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                  <div className="relative h-56 sm:h-64 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={datos.imagenHero}
                      alt={`${datos.tituloPrincipal} - ${datos.zonaOMunicipioMadrid}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071120]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between gap-2 text-white">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-black/50 backdrop-blur-xs px-3 py-1 rounded-full">
                        <FlagIcon pais="España" className="w-3.5 h-2.5" />
                        <span>{datos.zonaOMunicipioMadrid}</span>
                      </span>
                      <span className="bg-amber-400 text-[#071120] text-[11px] font-black px-3 py-1 rounded-full">
                        ✈️ {datos.codigoRuta}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h2 className="text-sm sm:text-base font-extrabold text-[#071120] mb-3">
                      Los 5 documentos incluidos en tu Paquete Migratorio:
                    </h2>
                    <ul className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                      <li className="py-2 flex items-center gap-2.5">
                        <span className="text-emerald-600 font-black">✓</span>
                        <span>
                          <strong>1. Pasaje de avión de ida</strong> emitido a tu nombre ({datos.aerolineaDestacada}).
                        </span>
                      </li>
                      <li className="py-2 flex items-center gap-2.5">
                        <span className="text-emerald-600 font-black">✓</span>
                        <span>
                          <strong>2. Boleto de regreso reservado</strong> en sistema para Migraciones.
                        </span>
                      </li>
                      <li className="py-2 flex items-center gap-2.5">
                        <span className="text-emerald-600 font-black">✓</span>
                        <span>
                          <strong>3. Reserva de hotel confirmada</strong> (o cuadre con Carta de Invitación).
                        </span>
                      </li>
                      <li className="py-2 flex items-center gap-2.5">
                        <span className="text-emerald-600 font-black">✓</span>
                        <span>
                          <strong>4. Seguro médico Schengen de 30.000€</strong> sin deducible.
                        </span>
                      </li>
                      <li className="pt-2 flex items-center gap-2.5">
                        <span className="text-emerald-600 font-black">✓</span>
                        <span>
                          <strong>5. Check-in hecho 24h antes</strong> y preparación para Barajas.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOS 4 PLANES OFICIALES (TARJETAS LIMPIAS SIN RECUADROS INTERNOS NI PRECIOS REPETIDOS) */}
        <section id="planes-madrid" className="py-14 sm:py-18 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
                Tarifas Oficiales según Temporada
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#071120] tracking-tight">
                Elige tu Plan para Viajar a {datos.zonaOMunicipioMadrid}
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Separa cualquiera de los 4 planes con el 50% y paga el saldo en cuotas antes de tu vuelo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {datos.planesReales.map((plan, idx) => {
                const tituloLimpio = limpiarTituloPlan(plan.titulo);
                const mitadPlan = Math.round(plan.precioUSD * 0.5);
                const waPlan = `https://wa.me/51944103890?text=${encodeURIComponent(
                  `${plan.waMensaje}${refTag} [${tituloLimpio} $${plan.precioUSD}]`
                )}`;
                return (
                  <article
                    key={idx}
                    className={`rounded-3xl p-6 flex flex-col justify-between h-full transition-shadow hover:shadow-lg ${
                      plan.destacado
                        ? "bg-white border-2 border-amber-400 shadow-md"
                        : "bg-white border border-slate-200 shadow-xs"
                    }`}
                  >
                    <div>
                      <span
                        className={`inline-block text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-3 ${
                          plan.destacado
                            ? "bg-amber-400 text-[#071120]"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {plan.etiqueta.split("·")[0].trim()}
                      </span>

                      <h3 className="text-xl font-black text-[#071120]">
                        {tituloLimpio}
                      </h3>
                      <p className="text-xs font-semibold text-red-600 mt-1 min-h-[34px] flex items-center">
                        📅 {plan.subtitulo}
                      </p>

                      <div className="my-4 py-3.5 border-y border-slate-100">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-bold text-slate-500">Desde</span>
                          <span className="text-3xl font-black text-[#071120]">
                            ${plan.precioUSD.toLocaleString("en-US")}
                          </span>
                          <span className="text-xs font-bold text-slate-500">USD</span>
                        </div>
                        <span className="text-xs font-extrabold text-emerald-700 block mt-1">
                          ✓ Separa con el 50% (${mitadPlan} USD)
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-600 mb-6">
                        {plan.incluye.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-black mt-0.5 shrink-0">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={waPlan}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm whitespace-nowrap transition-all bg-[#25D366] hover:bg-[#1fb858] text-white"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Elegir Plan (${plan.precioUSD})</span>
                    </a>
                  </article>
                );
              })}
            </div>

            {/* Franja limpia para quienes ya compraron su pasaje */}
            <div className="mt-8 rounded-2xl bg-[#071120] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 block">
                  ¿Ya compraste tu pasaje de avión por tu cuenta?
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                  También armamos <strong>Solo tu Carpeta Migratoria para Madrid</strong> (boleto de regreso reservado + hotel + seguro 30.000€ + check-in) desde <strong className="text-emerald-400">${carpetaFmt} USD</strong>.
                </p>
              </div>
              <a
                href={waUrlSoloCarpeta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#071120] font-black px-5 py-3 rounded-xl text-xs whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Pedir Solo Carpeta (${carpetaFmt})</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3. REQUISITOS DE INGRESO EN MADRID-BARAJAS (GRILLA LIMPIA DE 1 NIVEL SIN CAJAS ANIDADAS) */}
        <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Control Migratorio en {datos.terminalBarajas}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#071120]">
                ¿Qué te piden al viajar a {datos.zonaOMunicipioMadrid} y cómo lo resolvemos?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {datos.checklistBarajas.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-base font-extrabold text-[#071120]">
                        {idx + 1}. {item.requisito}
                      </h3>
                      <span className="text-xs font-bold text-emerald-700 shrink-0">
                        ✓ Incluido
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {item.detalleOficial}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 font-semibold pt-3 border-t border-slate-100">
                    ✓ {item.comoTeAyudamos}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PREGUNTAS FRECUENTES */}
        <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#071120] text-center mb-8">
              Preguntas Frecuentes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {datos.faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200"
                >
                  <h3 className="text-sm sm:text-base font-extrabold text-[#071120] mb-2">
                    {f.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ENLACES RELACIONADOS COMPACTOS */}
        {datos.enlacesRelacionados.length > 0 && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
              <h2 className="text-lg sm:text-xl font-black text-[#071120]">
                Rutas Relacionadas a Madrid y España
              </h2>
              <Link
                href="/madrid"
                className="text-xs font-extrabold text-red-600 hover:underline"
              >
                Ver central de paquetes a Madrid →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {datos.enlacesRelacionados.slice(0, 8).map((rel, idx) => (
                <Link
                  key={idx}
                  href={rel.href}
                  className="flex items-center justify-between gap-2 bg-white hover:border-amber-400 px-4 py-3 rounded-xl border border-slate-200 transition-colors"
                >
                  <span className="font-semibold text-slate-700 truncate">
                    {rel.titulo}
                  </span>
                  <span className="font-black text-emerald-700 shrink-0">
                    ${rel.precio}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* Barra móvil inferior */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
            Madrid · Separa con 50%
          </span>
          <span className="text-sm font-black text-[#071120]">
            Desde ${precioFmt} USD
          </span>
        </div>
        <a
          href={waUrlPrincipal}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-extrabold px-4 py-2.5 rounded-xl text-xs whitespace-nowrap"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Cotizar</span>
        </a>
      </div>
    </div>
  );
}
