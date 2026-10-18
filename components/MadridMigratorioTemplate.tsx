import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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
        selloTexto: "ESTADÍAS CALIBRADAS AL BOE 2026",
      };
    case "rutas-espana-barajas":
      return {
        heroBg: "from-[#1a0912] via-[#2b0f1c] to-[#0c1629]",
        borderBottom: "border-amber-400",
        badgeBg: "bg-amber-400/15 border-amber-400/40 text-amber-300",
        subtituloGrad: "from-amber-300 via-yellow-200 to-orange-300",
        selloTexto: "RUTAS ESPAÑA Y EUROPA VÍA MADRID-BARAJAS",
      };
    case "comunidad-peruana-madrid":
      return {
        heroBg: "from-[#0b132b] via-[#1c2541] to-[#111936]",
        borderBottom: "border-sky-400",
        badgeBg: "bg-sky-400/15 border-sky-400/40 text-sky-300",
        subtituloGrad: "from-amber-300 via-sky-200 to-amber-300",
        selloTexto: "DESTINOS COMUNIDAD PERUANA EN MADRID",
      };
    case "expediente-servicios-madrid":
      return {
        heroBg: "from-[#111827] via-[#1e1b4b] to-[#0f172a]",
        borderBottom: "border-amber-300",
        badgeBg: "bg-amber-300/15 border-amber-300/40 text-amber-200",
        subtituloGrad: "from-amber-200 via-yellow-300 to-amber-400",
        selloTexto: "SERVICIOS Y EXPEDIENTES MIGRATORIOS MADRID",
      };
    default:
      return {
        heroBg: "from-[#071120] via-[#0c1d36] to-[#1a0f1e]",
        borderBottom: "border-amber-400",
        badgeBg: "bg-amber-400/15 border-amber-400/40 text-amber-300",
        subtituloGrad: "from-amber-300 via-yellow-200 to-amber-400",
        selloTexto: "DIVISIÓN ESPECIALIZADA MADRID-BARAJAS",
      };
  }
}

export default function MadridMigratorioTemplate({
  datos,
}: {
  datos: DatosLandingMadridSEO;
}) {
  const tema = obtenerTemaSilo(datos.silo);
  const precioFmt = datos.precioDesdeUSD.toLocaleString("en-US");
  const mitadPrecio = Math.max(35, Math.round(datos.precioDesdeUSD * 0.5));
  const mitadFmt = mitadPrecio.toLocaleString("en-US");
  const carpetaFmt = datos.precioCarpetaSolaUSD.toLocaleString("en-US");
  const idaVueltaFmt = datos.precioIdaYVueltaUSD.toLocaleString("en-US");

  const refTag = ` [📍 Ref Web: /madrid/${datos.slug}]`;
  const waUrlPrincipal = `https://wa.me/51944103890?text=${encodeURIComponent(
    `¡Hola Cityland Travel! Vi en su web: "${datos.tituloPrincipal} (${datos.subtituloDorado})" y quiero cotizar mi viaje saliendo desde Lima.${refTag}`
  )}`;

  // Limpiar cualquier doble USD en subtituloDorado por seguridad
  const subtituloLimpio = datos.subtituloDorado.replace(/\s+USD\b/gi, " USD");

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO EJECUTIVO COMPACTO CON TARJETA VISUAL LIMPIA Y CTA VISIBLE AL INSTANTE */}
        <section
          className={`relative bg-gradient-to-br ${tema.heroBg} text-white pt-6 pb-12 sm:pt-10 sm:pb-14 overflow-hidden border-b-4 ${tema.borderBottom}`}
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
                Madrid-Barajas (MAD)
              </Link>
              <span>/</span>
              <span className="text-white font-bold truncate max-w-[240px] sm:max-w-md">
                {datos.zonaOMunicipioMadrid}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Columna Izquierda: Propuesta clara, concisa y con botón WhatsApp siempre visible */}
              <div className="lg:col-span-7 space-y-4 animate-fade-up">
                <div
                  className={`inline-flex flex-wrap items-center gap-2 border px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wide ${tema.badgeBg}`}
                >
                  <span>🇪🇸 {tema.selloTexto}</span>
                  <span>•</span>
                  <span>Salida: Aeropuerto Jorge Chávez (LIM)</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight leading-[1.14]">
                  {datos.tituloPrincipal}
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${tema.subtituloGrad} block mt-1.5 text-xl sm:text-2xl lg:text-3xl`}
                  >
                    {subtituloLimpio}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                  {datos.resumenEjecutivo}
                </p>

                {/* Píldoras ejecutivas de 1 línea (sin cajas gigantes ni texto repetido) */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl">
                    <span className="text-emerald-400 font-black">✓</span> Boleto PNR + Retorno RF 24h
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl">
                    <span className="text-amber-300 font-black">✓</span> Hotel Verificable o Carta
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl">
                    <span className="text-sky-300 font-black">✓</span> Seguro 30.000€ + Check-in
                  </span>
                </div>

                {/* Botones de Acción Directa (siempre visibles en la primera pantalla) */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href={waUrlPrincipal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1fb858] text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-xl text-sm sm:text-base transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Cotizar por WhatsApp (+51 944 103 890)</span>
                  </a>
                  <Link
                    href="/guia-europa"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-4 py-3.5 rounded-2xl text-xs sm:text-sm transition-all"
                  >
                    <span>Requisitos BOE 2026</span>
                    <span>→</span>
                  </Link>
                </div>

                {/* Sello de agencia formal */}
                <p className="text-xs text-slate-300 pt-1">
                  📍 <strong>Oficina en Lima:</strong> Av. Antúnez de Mayolo 814, Los Olivos ·{" "}
                  <strong>RUC 20614914239</strong> · Separa con el 50% (${mitadFmt} USD)
                </p>
              </div>

              {/* Columna Derecha: Tarjeta con Fotografía 100% Limpia + Ruta LIM -> MAD sin textos partidos */}
              <div className="lg:col-span-5 animate-fade-up delay-100">
                <div className="card-interactive group bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-400/80">
                  {/* Fotografía real 100% limpia (sin textos ni sombras oscuras tapando la foto) */}
                  <div className="relative h-44 sm:h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={datos.imagenHero}
                      alt={`${datos.tituloPrincipal} - ${datos.zonaOMunicipioMadrid}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#071120]/90 text-amber-300 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
                      ✈️ {datos.aerolineaDestacada}
                    </div>
                    <div className="absolute top-3 right-3 bg-amber-400 text-[#071120] text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                      PNR + IATA
                    </div>
                  </div>

                  {/* Barra de Ruta Horizontal LIM -> MAD (100% limpia, nunca se parte en columnas estrechas) */}
                  <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase block">
                          Salida Perú
                        </span>
                        <span className="text-xl font-black text-[#071120] leading-none">
                          LIM
                        </span>
                        <span className="text-[11px] text-slate-600 block font-semibold mt-0.5">
                          Jorge Chávez (Lima)
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col items-center px-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                          Vuelo Confirmado
                        </span>
                        <div className="w-full my-1 flex items-center gap-1.5 text-slate-400">
                          <span className="h-[2px] flex-1 bg-slate-300" />
                          <span className="text-sm">✈️</span>
                          <span className="h-[2px] flex-1 bg-slate-300" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 whitespace-nowrap">
                          {datos.codigoRuta}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-bold text-slate-500 uppercase block">
                          Llegada España
                        </span>
                        <span className="text-xl font-black text-[#071120] leading-none">
                          MAD
                        </span>
                        <span className="text-[11px] text-slate-600 block font-semibold mt-0.5 truncate max-w-[125px]">
                          Madrid-Barajas
                        </span>
                      </div>
                    </div>

                    {/* Fila de ancho completo para la modalidad y terminal (nunca truncada ni aplastada) */}
                    <div className="mt-2.5 pt-2.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                      <span className="font-extrabold text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-lg">
                        {datos.modalidadClave}
                      </span>
                      <span className="font-semibold text-slate-600">
                        {datos.terminalBarajas}
                      </span>
                    </div>
                  </div>

                  {/* Cuerpo de Tarifas Reales */}
                  <div className="p-5 space-y-3.5">
                    <div className="flex items-center justify-between bg-amber-50/90 border border-amber-200 rounded-2xl px-4 py-3">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase text-amber-900 block">
                          Tarifa Referencial por Pasajero
                        </span>
                        <span className="text-xs text-slate-700">
                          Separa hoy con{" "}
                          <strong className="text-[#071120]">${mitadFmt} USD (50%)</strong>
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl sm:text-3xl font-black text-[#071120]">
                          ${precioFmt}
                        </span>
                        <span className="text-[10px] font-extrabold text-slate-500 block">
                          USD · Tasas Incluidas
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-700">
                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="font-semibold">
                          • Solo Carpeta Migratoria (si ya tienes vuelo):
                        </span>
                        <span className="font-black text-emerald-700">
                          Desde ${carpetaFmt} USD
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="font-semibold">
                          • Paquete Migratorio Completo (Ida + RF + Hotel):
                        </span>
                        <span className="font-black text-[#071120]">
                          Desde ${precioFmt} USD
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="font-semibold">
                          • Vuelo Ida y Vuelta Cerrado + Carpeta:
                        </span>
                        <span className="font-black text-[#071120]">
                          Desde ${idaVueltaFmt} USD
                        </span>
                      </div>
                    </div>

                    <a
                      href={waUrlPrincipal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#071120] hover:bg-red-700 text-white font-extrabold py-3 px-5 rounded-2xl text-xs sm:text-sm transition-colors shadow-md"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>Solicitar Cotización Exacta por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. COMPARADOR DE LAS 4 MODALIDADES REALES A MADRID */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-2">
              Modalidades Reales Emitidas en Cityland Travel
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071120] tracking-tight">
              Elige la Modalidad Exacta para tu Viaje a {datos.zonaOMunicipioMadrid}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Tanto si viajas por primera vez con paquete migratorio completo saliendo de Lima, como si ya compraste tu pasaje y necesitas tu carpeta verificable para Madrid-Barajas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {datos.planesReales.map((plan, idx) => {
              const waPlan = `https://wa.me/51944103890?text=${encodeURIComponent(
                `${plan.waMensaje}${refTag}`
              )}`;
              return (
                <div
                  key={idx}
                  className={`card-interactive rounded-3xl p-6 flex flex-col justify-between transition-all ${
                    plan.destacado
                      ? "bg-[#071120] text-white border-2 border-amber-400 shadow-xl"
                      : "bg-white text-slate-900 border border-slate-200 shadow-xs hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${
                          plan.destacado
                            ? "bg-amber-400 text-[#071120]"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {plan.etiqueta}
                      </span>
                      <span
                        className={`text-xs font-bold ${
                          plan.destacado ? "text-amber-300" : "text-slate-400"
                        }`}
                      >
                        PNR Oficial
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold leading-snug mb-1">
                      {plan.titulo}
                    </h3>
                    <p
                      className={`text-xs mb-4 ${
                        plan.destacado ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {plan.subtitulo}
                    </p>

                    <div className="mb-5 pb-4 border-b border-slate-200/20">
                      <span
                        className={`text-[11px] uppercase font-bold block ${
                          plan.destacado ? "text-slate-300" : "text-slate-400"
                        }`}
                      >
                        Tarifa referencial desde
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-black">
                          ${plan.precioUSD.toLocaleString("en-US")}
                        </span>
                        <span
                          className={`text-xs font-bold ${
                            plan.destacado ? "text-amber-300" : "text-slate-500"
                          }`}
                        >
                          USD
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs mb-6">
                      {plan.incluye.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className={`font-black mt-0.5 ${
                              plan.destacado ? "text-amber-400" : "text-emerald-600"
                            }`}
                          >
                            ✓
                          </span>
                          <span
                            className={
                              plan.destacado ? "text-slate-200" : "text-slate-700"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={waPlan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-extrabold py-3 px-4 rounded-2xl text-xs transition-all ${
                      plan.destacado
                        ? "btn-wa-pulse bg-[#25D366] hover:bg-[#1fb858] text-white shadow-lg"
                        : "bg-slate-900 hover:bg-red-600 text-white"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Cotizar Este Plan</span>
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. CHECKLIST DE CONTROL MIGRATORIO EN MADRID-BARAJAS (FOTO 100% LIMPIA SIN TEXTO ENCIMA) */}
        <section className="py-12 sm:py-14 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block">
                  Control Policial en Aeropuerto Madrid-Barajas
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#071120] leading-tight">
                  ¿Qué revisan al llegar a Madrid ({datos.terminalBarajas}) y cómo preparamos tu carpeta?
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Más de 400 pasajeros peruanos han viajado a Madrid con nuestro equipo. Preparamos cada documento de tu expediente para que sea 100% verificable en el sistema de la aerolínea y del alojamiento.
                </p>

                {/* Tarjeta con imagen 100% limpia arriba y nota BOE debajo */}
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                  <div className="relative h-52 w-full">
                    <Image
                      src={datos.imagenSecundaria}
                      alt={`Viaje a ${datos.zonaOMunicipioMadrid} saliendo de Lima`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-[#071120] text-white">
                    <span className="text-[10px] font-extrabold uppercase bg-amber-400 text-[#071120] px-2.5 py-0.5 rounded-full">
                      Normativa Vigente BOE 2026
                    </span>
                    <p className="text-xs sm:text-sm font-bold mt-2 text-slate-100">
                      Bolsa de Viaje Oficial España: 122,10 € por día de estadía (mínimo obligatorio de 1.098,90 € por pasajero).
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                {datos.checklistBarajas.map((item, idx) => (
                  <div
                    key={idx}
                    className="card-interactive bg-slate-50 rounded-2xl p-5 border border-slate-200/90 hover:border-amber-400 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#071120]">
                        {idx + 1}. {item.requisito}
                      </h3>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shrink-0">
                        Verificable
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5">
                      <strong>Exigencia en frontera:</strong> {item.detalleOficial}
                    </p>
                    <p className="text-xs text-emerald-900 bg-emerald-50/80 border border-emerald-200/70 rounded-xl px-3 py-2 mt-2 font-medium">
                      <strong>Solución Cityland Travel:</strong> {item.comoTeAyudamos}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. PASO A PASO DE EMISIÓN Y CHECK-IN POR ASESOR */}
        <section className="py-12 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
              Proceso Claro y Seguro desde Lima
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071120]">
              ¿Cómo funciona tu emisión para {datos.zonaOMunicipioMadrid}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {datos.pasosExpediente.map((p, idx) => (
              <div
                key={idx}
                className="card-interactive bg-white rounded-3xl p-6 border border-slate-200 shadow-xs relative"
              >
                <span className="w-10 h-10 rounded-2xl bg-[#071120] text-amber-400 font-black text-sm flex items-center justify-center mb-4">
                  {p.paso}
                </span>
                <h3 className="text-base font-extrabold text-[#071120] mb-2">
                  {p.titulo}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.detalle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PREGUNTAS FRECUENTES ESPECÍFICAS */}
        <section className="py-12 sm:py-14 bg-slate-100/80 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Resolvemos tus Dudas Reales
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#071120]">
                Preguntas Frecuentes sobre {datos.tituloPrincipal}
              </h2>
            </div>

            <div className="space-y-4">
              {datos.faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs"
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

        {/* 6. INTERLINKING SILO MADRID (/madrid/[slug]) */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                  Red Especializada en Madrid y España
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#071120]">
                  Otras Modalidades y Rutas Relacionadas a Madrid
                </h2>
              </div>
              <Link
                href="/madrid"
                className="text-xs font-extrabold text-red-600 hover:underline"
              >
                Ver central de paquetes a Madrid →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              {datos.enlacesRelacionados.map((rel, idx) => (
                <Link
                  key={idx}
                  href={rel.href}
                  className="flex items-center justify-between gap-2 bg-slate-50 hover:bg-red-50/70 px-3.5 py-2.5 rounded-xl border border-slate-200/80 transition-colors"
                >
                  <span className="font-semibold text-slate-700 hover:text-red-600 truncate">
                    {rel.titulo}
                  </span>
                  <span className="font-black text-[#071120] shrink-0">
                    ${rel.precio.toLocaleString("en-US")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Barra Sticky Móvil + Botón Flotante WhatsApp Oficial */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-[0_-8px_24px_rgba(10,22,40,0.12)] flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block leading-none">
            Madrid · Separa con 50%
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-lg font-black text-[#071120] leading-none">
              Desde ${precioFmt}
            </span>
            <span className="text-[10px] font-bold text-emerald-700 truncate">
              USD · PNR Real
            </span>
          </div>
        </div>
        <a
          href={waUrlPrincipal}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb858] text-white font-extrabold px-4 py-2.5 rounded-xl text-xs shadow-md shrink-0"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp Ahora</span>
        </a>
      </div>

      <div className="hidden sm:block fixed bottom-5 right-5 z-50">
        <a
          href={waUrlPrincipal}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb858] text-white px-5 py-3.5 rounded-full shadow-xl cursor-pointer"
          aria-label="Cotizar por WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="font-bold text-xs sm:text-sm">
            Cotizar Madrid (+51 944 103 890)
          </span>
        </a>
      </div>
    </div>
  );
}
