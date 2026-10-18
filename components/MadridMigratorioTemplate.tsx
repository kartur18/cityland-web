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

export default function MadridMigratorioTemplate({
  datos,
}: {
  datos: DatosLandingMadridSEO;
}) {
  const refTag = ` [📍 Ref Web: /madrid/${datos.slug}]`;
  const waUrlPrincipal = `https://wa.me/51944103890?text=${encodeURIComponent(
    `¡Hola Cityland Travel! Vi en su web especializada de Madrid: "${datos.tituloPrincipal} — ${datos.subtituloDorado}" (Desde $${datos.precioDesdeUSD} USD) y quiero cotizar mi viaje.${refTag}`
  )}`;

  const mitadPrecio = Math.max(35, Math.round(datos.precioDesdeUSD * 0.5));

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO EJECUTIVO ESTILO BOARDING PASS / EXPEDIENTE BARAJAS T4-T1 */}
        <section className="relative bg-gradient-to-br from-[#071120] via-[#0c1d36] to-[#1a0f1e] text-white pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden border-b-4 border-amber-400">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src={datos.imagenHero}
              alt={datos.tituloPrincipal}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071120] via-[#071120]/90 to-[#071120]/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb SEO */}
            <nav
              aria-label="Ruta de navegación"
              className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-6"
            >
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/espana" className="hover:text-amber-300 transition-colors">
                España
              </Link>
              <span>/</span>
              <Link href="/madrid" className="hover:text-amber-300 transition-colors font-semibold text-amber-300">
                Especialistas Madrid (MAD)
              </Link>
              <span>/</span>
              <span className="text-white font-bold truncate max-w-[260px] sm:max-w-md">
                {datos.tituloPrincipal}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Columna Izquierda: Propuesta de Valor Especializada en Madrid */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex flex-wrap items-center gap-2 bg-amber-400/15 border border-amber-400/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide">
                  <span>🇪🇸 DIVISIÓN ESPECIALIZADA MADRID-BARAJAS</span>
                  <span>•</span>
                  <span>{datos.badgeSuperior}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                  {datos.tituloPrincipal}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 block mt-1">
                    {datos.subtituloDorado}
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                  {datos.resumenEjecutivo}
                </p>

                {/* Sello de lo que realmente incluye el paquete migratorio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-3.5 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center font-black text-sm shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs font-extrabold text-white uppercase tracking-wider">
                        Boleto + Retorno RF 24h
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Código PNR real en sistema para control en {datos.terminalBarajas}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-3.5 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center font-black text-sm shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs font-extrabold text-white uppercase tracking-wider">
                        Hotel + Seguro Schengen 30.000€
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Voucher de alojamiento verificable o ajuste a Carta de Invitación
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-3.5 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-300 flex items-center justify-center font-black text-sm shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs font-extrabold text-white uppercase tracking-wider">
                        Check-in Hecho por tu Asesor
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Tarjetas de embarque listas, asiento asignado y carpeta impresa
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-3.5 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-red-500/20 border border-red-400/40 text-red-300 flex items-center justify-center font-black text-sm shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs font-extrabold text-white uppercase tracking-wider">
                        Agencia Formal RUC 20614914239
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Oficina en Av. Universitaria 2029 (Los Olivos) · Separa con 50%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={waUrlPrincipal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fb858] text-white font-extrabold px-7 py-4 rounded-2xl shadow-xl text-sm sm:text-base transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Cotizar Mi Viaje a Madrid (+51 944 103 890)</span>
                  </a>
                  <Link
                    href="/guia-europa"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-5 py-4 rounded-2xl text-xs sm:text-sm transition-all"
                  >
                    <span>Ver Requisitos BOE 2026</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Columna Derecha: Tarjeta de Embarque / Expediente Oficial Madrid */}
              <div className="lg:col-span-5">
                <div className="bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-400/80">
                  {/* Cabecera Boarding Pass */}
                  <div className="bg-gradient-to-r from-[#b91c1c] via-[#991b1b] to-[#7f1d1d] text-white px-6 py-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-200 block">
                        EXPEDIENTE OFICIAL DE VIAJE 2026
                      </span>
                      <p className="text-base font-black tracking-tight">
                        {datos.codigoRuta} · {datos.aerolineaDestacada}
                      </p>
                    </div>
                    <span className="bg-amber-400 text-[#071120] text-xs font-black px-3 py-1 rounded-full">
                      PNR + IATA
                    </span>
                  </div>

                  {/* Ruta visual LIM -> MAD */}
                  <div className="px-6 py-5 bg-slate-50 border-b border-dashed border-slate-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase block">
                          Salida ({datos.origenPasajero})
                        </span>
                        <span className="text-2xl font-black text-[#071120]">LIM</span>
                        <span className="text-xs text-slate-600 block font-medium">
                          Jorge Chávez
                        </span>
                      </div>

                      <div className="flex-1 px-4 text-center">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                          {datos.modalidadClave}
                        </span>
                        <div className="my-1.5 flex items-center justify-center gap-1 text-slate-400">
                          <span className="h-[2px] flex-1 bg-slate-300" />
                          <span className="text-base">✈️</span>
                          <span className="h-[2px] flex-1 bg-slate-300" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-500">
                          Llegada: {datos.terminalBarajas}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-[11px] font-bold text-slate-400 uppercase block">
                          Destino España
                        </span>
                        <span className="text-2xl font-black text-[#071120]">MAD</span>
                        <span className="text-xs text-slate-600 block font-medium">
                          {datos.zonaOMunicipioMadrid}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cuerpo de Tarifas Reales */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-baseline justify-between bg-amber-50/80 border border-amber-200 rounded-2xl p-4">
                      <div>
                        <span className="text-[11px] font-extrabold uppercase text-amber-900 block">
                          Tarifa Referencial por Pasajero
                        </span>
                        <span className="text-xs text-slate-600">
                          Separa hoy con{" "}
                          <strong className="text-[#071120]">${mitadPrecio} USD (50%)</strong>
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-black text-[#071120]">
                          ${datos.precioDesdeUSD}
                        </span>
                        <span className="text-xs font-extrabold text-slate-500 block">
                          USD · Tasas Incluidas
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                        <span className="font-semibold">
                          • Solo Carpeta Migratoria (si ya tienes vuelo):
                        </span>
                        <span className="font-black text-emerald-700">
                          Desde ${datos.precioCarpetaSolaUSD} USD
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                        <span className="font-semibold">
                          • Paquete Migratorio Completo (Ida + RF + Hotel):
                        </span>
                        <span className="font-black text-[#071120]">
                          Desde ${datos.precioDesdeUSD} USD
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1.5">
                        <span className="font-semibold">
                          • Vuelo Ida y Vuelta Cerrado + Carpeta:
                        </span>
                        <span className="font-black text-[#071120]">
                          Desde ${datos.precioIdaYVueltaUSD} USD
                        </span>
                      </div>
                    </div>

                    <a
                      href={waUrlPrincipal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#071120] hover:bg-red-700 text-white font-extrabold py-3.5 px-5 rounded-2xl text-sm transition-colors shadow-md"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>Solicitar Cotización Exacta por WhatsApp</span>
                    </a>

                    <p className="text-[11px] text-center text-slate-500">
                      Emitimos Boleta/Factura SUNAT · Atención en oficina Los Olivos y todo el Perú
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. COMPARADOR DE LAS 4 MODALIDADES REALES A MADRID */}
        <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-2">
              Modalidades Reales Emitidas a Diario en Cityland Travel
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071120] tracking-tight">
              Elige la Modalidad Exacta para tu Viaje a {datos.zonaOMunicipioMadrid}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Tanto si viajas por primera vez con paquete migratorio completo, como si ya compraste tu pasaje y solo necesitas tu carpeta verificable para Madrid-Barajas.
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
                  className={`rounded-3xl p-6 flex flex-col justify-between transition-all ${
                    plan.destacado
                      ? "bg-[#071120] text-white border-2 border-amber-400 shadow-xl scale-[1.01]"
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
                        ? "bg-[#25D366] hover:bg-[#1fb858] text-white shadow-lg"
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

        {/* 3. CHECKLIST DE CONTROL MIGRATORIO EN MADRID-BARAJAS (T4 Y T1) */}
        <section className="py-14 bg-white border-y border-slate-200">
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

                <div className="relative h-56 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src={datos.imagenSecundaria}
                    alt={`Viaje a ${datos.zonaOMunicipioMadrid} desde ${datos.origenPasajero}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-extrabold uppercase bg-amber-400 text-[#071120] px-2.5 py-0.5 rounded-full">
                      Normativa Vigente 2026
                    </span>
                    <p className="text-sm font-bold mt-1">
                      Bolsa de Viaje Oficial BOE España: 122,10 € por día (mínimo 1.098,90 € por persona)
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                {datos.checklistBarajas.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 hover:border-amber-400 transition-colors"
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
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
              Proceso Claro y Seguro
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071120]">
              ¿Cómo funciona tu emisión para {datos.zonaOMunicipioMadrid}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {datos.pasosExpediente.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs relative"
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
        <section className="py-14 bg-slate-100/80 border-t border-slate-200">
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
                Ver central de +10,000 páginas de Madrid →
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
                    ${rel.precio}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
