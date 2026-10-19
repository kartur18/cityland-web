import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import ModuloSeguridadYCalculadoraEuropa from "@/components/ModuloSeguridadYCalculadoraEuropa";
import type { DatosSuperLandingMigratorio } from "@/lib/catalogo-paquetes-migratorios-1000";

function obtenerEstiloSilo(silo: DatosSuperLandingMigratorio["silo"], pais: string) {
  if (silo === "italia" || pais === "Italia") {
    return {
      heroBg: "from-[#071a14] via-[#0c2920] to-[#0a1628]",
      borderHero: "border-emerald-400",
      badgeHero: "bg-emerald-400/15 border-emerald-400/40 text-emerald-200",
      gradSubtitulo: "from-emerald-300 via-amber-200 to-emerald-300",
      selloPais: "ESPECIALISTAS EN ITALIA & ESPACIO SCHENGEN",
    };
  }
  if (silo === "francia-europa") {
    return {
      heroBg: "from-[#09152b] via-[#13254a] to-[#1a1033]",
      borderHero: "border-sky-400",
      badgeHero: "bg-sky-400/15 border-sky-400/40 text-sky-200",
      gradSubtitulo: "from-sky-300 via-amber-200 to-sky-300",
      selloPais: `RUTA ESPECIALIZADA ${pais.toUpperCase()} & EUROPA`,
    };
  }
  return {
    heroBg: "from-[#081224] via-[#10203d] to-[#240d17]",
    borderHero: "border-amber-400",
    badgeHero: "bg-amber-400/15 border-amber-400/40 text-amber-200",
    gradSubtitulo: "from-amber-300 via-yellow-200 to-amber-400",
    selloPais: "DIVISIÓN PAQUETES MIGRATORIOS A ESPAÑA & EUROPA",
  };
}

export default function SuperLandingMigratorioTemplate({
  datos,
}: {
  datos: DatosSuperLandingMigratorio;
}) {
  const estilo = obtenerEstiloSilo(datos.silo, datos.pais);

  const waCotizarGeneral = `https://wa.me/51944103890?text=${encodeURIComponent(
    `¡Hola! Quiero cotizar mi viaje a ${datos.ciudadDestino} (${datos.pais}). Vi en su web los paquetes migratorios de $699, $799, $899 y $999 (separando con el 50%).\n\n📍 Ref Web: citylandtravel.com/paquetes-migratorios/${datos.slug} [Botón Principal]`
  )}`;

  const waSoloCarpeta = `https://wa.me/51944103890?text=${encodeURIComponent(
    `¡Hola Cityland Travel! Ya compré mi pasaje a ${datos.ciudadDestino} por mi cuenta y quiero contratar Solo la Carpeta Migratoria (boleto de regreso reservado para Migraciones + reserva de hotel + seguro médico + check-in).\n\n📍 Ref Web: citylandtravel.com/paquetes-migratorios/${datos.slug} [Solo Carpeta]`
  )}`;

  const rutaHubPais =
    datos.pais === "España"
      ? { nombre: "España", href: "/espana" }
      : datos.pais === "Italia"
      ? { nombre: "Italia", href: "/italia" }
      : datos.pais === "Francia"
      ? { nombre: "Francia", href: "/francia" }
      : { nombre: "Europa", href: "/europa-turquia" };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pb-20 sm:pb-0">
        {/* ═══════════════════════════════════════════════════════════════════════════
            1. HERO DE ALTA CONVERSIÓN CON FOTO REAL DEL DESTINO Y 4 TARIFAS CLARAS
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section
          className={`relative bg-gradient-to-br ${estilo.heroBg} text-white pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden border-b-4 ${estilo.borderHero}`}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Migas de pan SEO */}
            <nav
              aria-label="Ruta de navegación"
              className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-5"
            >
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link
                href="/paquetes-migratorios"
                className="hover:text-amber-300 transition-colors"
              >
                Paquetes Migratorios
              </Link>
              <span>/</span>
              <Link
                href={rutaHubPais.href}
                className="hover:text-amber-300 transition-colors font-semibold text-amber-300"
              >
                {rutaHubPais.nombre}
              </Link>
              <span>/</span>
              <span className="text-white font-bold">{datos.ciudadDestino}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Columna Izquierda: Propuesta clara en lenguaje peruano */}
              <div className="lg:col-span-7 space-y-4 animate-fade-up">
                <div
                  className={`inline-flex flex-wrap items-center gap-2 border px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wide ${estilo.badgeHero}`}
                >
                  <FlagIcon pais={datos.banderaPais} className="w-4 h-3" />
                  <span>{estilo.selloPais}</span>
                  <span>•</span>
                  <span>RUC 20614914239 · Oficina en Los Olivos</span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.12]">
                  {datos.tituloH1}
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${estilo.gradSubtitulo} block mt-2 text-lg sm:text-2xl lg:text-[26px] font-extrabold`}
                  >
                    {datos.subtituloHero}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                  {datos.ganchoPeruano}
                </p>

                {/* 3 Beneficios en lenguaje 100% sencillo */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl">
                    <span className="text-emerald-400 font-black">✓</span> Pasaje de Ida + Boleto de Regreso para Migraciones
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl">
                    <span className="text-amber-300 font-black">✓</span> Reserva de Hotel o Carta de Invitación
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl">
                    <span className="text-sky-300 font-black">✓</span> Seguro Médico + Check-in 24h Antes
                  </span>
                </div>

                {/* Botones de Acción Inmediata */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href={waCotizarGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1fb858] text-white font-extrabold px-6 py-4 rounded-2xl shadow-xl text-sm sm:text-base transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Quiero cotizar mi viaje (+51 944 103 890)</span>
                  </a>
                  <a
                    href="#planes-precios"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-5 py-4 rounded-2xl text-xs sm:text-sm transition-all"
                  >
                    <span>Ver Precios por Fecha ($699 a $999)</span>
                    <span>↓</span>
                  </a>
                </div>

                <p className="text-xs text-slate-300 pt-1">
                  📍 <strong>Atención presencial en Lima:</strong> Av. Antúnez de Mayolo N.° 814, Los Olivos · Separa hoy con el <strong>50% de inicial</strong> (desde <strong>$350 USD</strong>).
                </p>
              </div>

              {/* Columna Derecha: Tarjeta Visual del Destino + Resumen de los 4 Precios */}
              <div className="lg:col-span-5 animate-fade-up delay-100">
                <div className="card-interactive group bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-400/90">
                  {/* Fotografía Real del Destino (sin textos que tapen el monumento) */}
                  <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={datos.imagenHero}
                      alt={`${datos.ciudadDestino}, ${datos.pais} - ${datos.monumentoDestacado}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#0a1628]/90 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                      <FlagIcon pais={datos.banderaPais} className="w-3.5 h-2.5" />
                      <span>{datos.monumentoDestacado}</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                      Separa con 50%
                    </div>
                  </div>

                  {/* Ruta Aérea */}
                  <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-500 block">
                        Origen ({datos.origenPasajero})
                      </span>
                      <span className="font-black text-slate-900">
                        Jorge Chávez (LIM)
                      </span>
                    </div>
                    <span className="font-black text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full text-[11px]">
                      ✈️ {datos.codigoRuta}
                    </span>
                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase text-slate-500 block">
                        Destino en {datos.pais}
                      </span>
                      <span className="font-black text-slate-900">
                        {datos.ciudadDestino}
                      </span>
                    </div>
                  </div>

                  {/* Resumen Rápido de los 4 Planes Oficiales */}
                  <div className="p-5 space-y-3">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                      Tarifas según tu fecha de viaje (Separa con 50%):
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="#planes-precios"
                        className="rounded-xl border border-blue-200 bg-blue-50/60 p-2.5 hover:bg-blue-100/70 transition-colors"
                      >
                        <span className="text-[10px] font-extrabold uppercase text-blue-700 block">
                          Plan Promo · Feb–May
                        </span>
                        <span className="text-xl font-black text-slate-900">
                          $699 <span className="text-xs font-bold text-slate-500">USD</span>
                        </span>
                        <span className="text-[10px] text-slate-600 block">
                          Inicial 50%: $350
                        </span>
                      </a>
                      <a
                        href="#planes-precios"
                        className="rounded-xl border-2 border-emerald-500 bg-emerald-50/70 p-2.5 hover:bg-emerald-100/70 transition-colors relative"
                      >
                        <span className="text-[10px] font-extrabold uppercase text-emerald-800 block">
                          ★ Plan Smart · Más Pedido
                        </span>
                        <span className="text-xl font-black text-slate-900">
                          $799 <span className="text-xs font-bold text-slate-500">USD</span>
                        </span>
                        <span className="text-[10px] text-emerald-800 font-semibold block">
                          Inicial 50%: $400
                        </span>
                      </a>
                      <a
                        href="#planes-precios"
                        className="rounded-xl border border-amber-200 bg-amber-50/60 p-2.5 hover:bg-amber-100/70 transition-colors"
                      >
                        <span className="text-[10px] font-extrabold uppercase text-amber-800 block">
                          Plan Plus · Próximo/Conexión
                        </span>
                        <span className="text-xl font-black text-slate-900">
                          $899 <span className="text-xs font-bold text-slate-500">USD</span>
                        </span>
                        <span className="text-[10px] text-slate-600 block">
                          Inicial 50%: $450
                        </span>
                      </a>
                      <a
                        href="#planes-precios"
                        className="rounded-xl border border-red-200 bg-red-50/60 p-2.5 hover:bg-red-100/70 transition-colors"
                      >
                        <span className="text-[10px] font-extrabold uppercase text-red-700 block">
                          Plan Full · Alta / Maleta 23kg
                        </span>
                        <span className="text-xl font-black text-slate-900">
                          $999 <span className="text-xs font-bold text-slate-500">USD</span>
                        </span>
                        <span className="text-[10px] text-slate-600 block">
                          Inicial 50%: $500
                        </span>
                      </a>
                    </div>

                    <a
                      href={waCotizarGeneral}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-slate-800 text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>Consultar mi Fecha de Viaje por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════
            2. LOS 4 PRECIOS OFICIALES SEGÚN LA FECHA ($699 · $799 · $899 · $999)
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section id="planes-precios" className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block bg-red-50 text-red-700 border border-red-200 text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
                Precios Claros y Transparentes · Sin Sorpresas
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0a1628] tracking-tight">
                Elige tu Plan para Viajar a {datos.ciudadDestino} según tu Fecha
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
                El valor de tu paquete depende de qué tan pronto viajes y la temporada del año.{" "}
                <strong className="text-slate-900">
                  Todos los planes incluyen tu carpeta migratoria completa y se separan con el 50%:
                </strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
              {datos.planes.map((plan) => {
                const waUrlPlan = `https://wa.me/51944103890?text=${encodeURIComponent(
                  plan.waMensaje
                )}`;
                return (
                  <article
                    key={plan.id}
                    className={`card-lift rounded-3xl p-6 flex flex-col justify-between transition-all relative ${
                      plan.destacado
                        ? "bg-gradient-to-b from-emerald-50/70 via-white to-white border-2 border-emerald-500 shadow-xl ring-4 ring-emerald-500/10"
                        : "bg-white border border-slate-200/90 shadow-sm hover:border-slate-300"
                    }`}
                  >
                    {plan.destacado && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                        ★ Opción Más Pedida
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full ${plan.colorBadge}`}
                        >
                          {plan.etiqueta}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          Código #{plan.id}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-[#0a1628] leading-snug">
                        {plan.nombre}
                      </h3>

                      <div className="my-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs font-bold text-slate-500 uppercase">
                            Desde
                          </span>
                          <span className="text-4xl font-black text-[#0a1628]">
                            ${plan.precioUSD}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            USD
                          </span>
                        </div>
                        <div className="mt-1 inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg">
                          <span>✓ Separa hoy con 50%:</span>
                          <span>${plan.inicial50USD} USD</span>
                        </div>
                      </div>

                      {/* Fechas en las que aplica */}
                      <div className="mb-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-slate-800">
                        <strong className="font-extrabold text-amber-900 block mb-0.5">
                          📅 ¿Para qué fechas aplica?
                        </strong>
                        <span>{plan.fechasIdeales}</span>
                      </div>

                      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                        {plan.resumen}
                      </p>

                      <ul className="space-y-2 text-xs text-slate-700 mb-6">
                        {plan.incluye.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-black mt-0.5 shrink-0">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={waUrlPlan}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer ${
                        plan.destacado
                          ? "bg-[#25D366] hover:bg-[#1fb858] text-white"
                          : "bg-[#0a1628] hover:bg-slate-800 text-white"
                      }`}
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>{plan.waTextoBoton}</span>
                    </a>
                  </article>
                );
              })}
            </div>

            {/* Franja para quienes ya compraron su pasaje */}
            <div className="mt-8 rounded-2xl bg-slate-900 text-white p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 block">
                  ¿Ya compraste tu pasaje de avión por tu cuenta?
                </span>
                <p className="text-sm sm:text-base font-bold mt-0.5">
                  También armamos{" "}
                  <span className="text-amber-300 underline">
                    Solo tu Carpeta Migratoria para {datos.ciudadDestino}
                  </span>{" "}
                  (Boleto de regreso reservado para Migraciones + Reserva de hotel + Seguro médico + Check-in) desde{" "}
                  <strong className="text-emerald-400">$85 USD</strong>.
                </p>
              </div>
              <a
                href={waSoloCarpeta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-3 rounded-xl text-xs sm:text-sm shrink-0 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Pedir Solo Carpeta ($85 USD)</span>
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════
            3. EXPLICACIÓN EN SENCILLO PERUANO: ¿ES IDA Y VUELTA O POR QUÉ CUESTA $699?
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl bg-white border-2 border-slate-200 shadow-lg overflow-hidden">
              <div className="bg-[#0a1628] text-white p-6 sm:p-8 border-b border-slate-800">
                <span className="inline-block bg-amber-400 text-[#0a1628] text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
                  Explicado Clarito y Sin Rodeos
                </span>
                <h2 className="text-xl sm:text-3xl font-black leading-tight">
                  {datos.explicacionIdaYVuelta.pregunta}
                </h2>
                <p className="text-sm sm:text-base text-slate-200 mt-3 max-w-4xl leading-relaxed">
                  {datos.explicacionIdaYVuelta.respuestaDirecta}
                </p>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Columna Izquierda: Comparativa de Ahorro Real */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200">
                    <span className="text-xs font-extrabold uppercase text-red-700 block mb-1">
                      ❌ Lo que pasa si compras un vuelo redondo tradicional:
                    </span>
                    <div className="text-2xl font-black text-red-900 mb-1">
                      Gastas $1,500 a $1,800 USD
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Pagas el doble por un asiento de regreso cerrado que vas a perder si tu meta es quedarte trabajando o viviendo con tu familia en {datos.ciudadDestino}.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-50/80 border-2 border-emerald-500 shadow-sm">
                    <span className="text-xs font-extrabold uppercase text-emerald-800 block mb-1">
                      ✅ Lo que haces con nuestro Paquete Migratorio:
                    </span>
                    <div className="text-2xl font-black text-emerald-950 mb-1">
                      Pagas desde $699 / $799 USD (Ahorras +$800)
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {datos.explicacionIdaYVuelta.ahorroExplicado}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                    💡 <strong>¿Y si mi viaje es solo por vacaciones cortas y sí voy a regresar a Perú en una fecha fija?</strong>{" "}
                    También vendemos el paquete turístico con vuelo de regreso cerrado desde <strong>$1,090 USD</strong>. Díselo a tu asesor por WhatsApp y te cotiza ambas opciones al instante.
                  </div>
                </div>

                {/* Columna Derecha: Los 5 Documentos que Recibes en tu Carpeta */}
                <div className="lg:col-span-7">
                  <h3 className="text-base sm:text-lg font-black text-[#0a1628] mb-4">
                    📂 Estos son los 5 documentos que te entregamos listos para presentar en el aeropuerto:
                  </h3>
                  <div className="space-y-3">
                    {datos.explicacionIdaYVuelta.documentosIncluidos.map((doc) => (
                      <div
                        key={doc.titulo}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex items-start gap-3.5"
                      >
                        <span className="text-2xl shrink-0 mt-0.5">{doc.icono}</span>
                        <div>
                          <h4 className="text-sm font-black text-[#0a1628]">
                            {doc.titulo}
                          </h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {doc.descripcion}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════
            4. GALERÍA REAL DE LA CIUDAD DESTINO + GUÍA PRÁCTICA DE LLEGADA
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                  Destino Real Verificado · {datos.regionDestino}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628]">
                  Tu Llegada a {datos.ciudadDestino} ({datos.pais})
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                Aeropuerto de referencia: <strong>{datos.aeropuertoLlegada}</strong> · Aerolíneas: {datos.aerolineas}.
              </p>
            </div>

            {/* 3 Fotografías reales de la ciudad */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {datos.galeriaCiudad.map((imgUrl, idx) => (
                <div
                  key={`${imgUrl}-${idx}`}
                  className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100"
                >
                  <Image
                    src={imgUrl}
                    alt={`${datos.ciudadDestino} (${datos.pais}) - Vista ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0a1628]/85 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    📍 {datos.ciudadDestino}, {datos.pais}
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Tarjetas de información útil para el peruano que llega a la ciudad */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-extrabold uppercase text-blue-700 block mb-1.5">
                  🚆 Cómo ir del aeropuerto al centro
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {datos.infoLlegadaCiudad.comoLlegarCentro}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-extrabold uppercase text-emerald-700 block mb-1.5">
                  🇵🇪 Barrios con comunidad peruana en {datos.ciudadDestino}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {datos.infoLlegadaCiudad.zonasPeruanos}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-extrabold uppercase text-amber-700 block mb-1.5">
                  ✈️ Recomendación de tu asesor Cityland
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {datos.infoLlegadaCiudad.consejoLocal}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════
            5. CALCULADORA INTERACTIVA DE BOLSA DE VIAJE + VERIFICADOR
           ═══════════════════════════════════════════════════════════════════════════ */}
        <ModuloSeguridadYCalculadoraEuropa
          ciudadPorDefecto={datos.ciudadDestino}
          refWebRuta={`/paquetes-migratorios/${datos.slug}`}
        />

        {/* ═══════════════════════════════════════════════════════════════════════════
            6. GARANTÍA PRESENCIAL EN LOS OLIVOS + PREGUNTAS FRECUENTES + ENLACES SEO
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Tarjeta de Garantía de Agencia Formal */}
            <div className="mb-12 rounded-3xl bg-gradient-to-r from-[#0a1628] to-[#162544] text-white p-6 sm:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <span className="inline-block bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 text-[11px] font-extrabold px-3 py-1 rounded-full">
                  ✓ Agencia de Viajes Formal Registrada en SUNAT
                </span>
                <h3 className="text-xl sm:text-2xl font-black">
                  ¿Miedo a estafas por internet? Ven a nuestra oficina en Los Olivos
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Somos <strong>Cityland Travel E.I.R.L. (RUC 20614914239)</strong>. Te atendemos en persona en{" "}
                  <strong>Av. Antúnez de Mayolo N.° 814, Los Olivos, Lima</strong> (de lunes a sábado de 9:00 a. m. a 7:00 p. m.). Firmas tu contrato físico, pagas en oficina o cuentas empresariales y recoges tu carpeta impresa.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-2.5">
                <a
                  href={waCotizarGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb858] text-white font-extrabold py-3.5 px-5 rounded-xl text-sm shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Agendar Cita o Cotizar</span>
                </a>
                <span className="text-[11px] text-center text-slate-300">
                  Central única: <strong>+51 944 103 890</strong>
                </span>
              </div>
            </div>

            {/* Preguntas Frecuentes en Lenguaje Sencillo */}
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] text-center mb-8">
              Preguntas Frecuentes sobre el Paquete Migratorio a {datos.ciudadDestino}
            </h2>
            <div className="space-y-4">
              {datos.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90"
                >
                  <h3 className="text-sm sm:text-base font-black text-[#0a1628]">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enlaces Relacionados a Otras Super-Landings */}
        <section className="py-10 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
              <h2 className="text-base sm:text-lg font-black text-[#0a1628]">
                Explora otros Paquetes Migratorios en España, Italia y Francia ($699 – $999)
              </h2>
              <Link
                href="/paquetes-migratorios"
                className="text-xs font-extrabold text-red-600 hover:underline"
              >
                Ver las 1,000 páginas de Paquetes Migratorios →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {datos.enlacesRelacionados.map((rel) => (
                <Link
                  key={rel.href}
                  href={rel.href}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-sm transition-all flex items-center justify-between gap-2"
                >
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      {rel.pais} · {rel.ciudad}
                    </span>
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">
                      {rel.titulo}
                    </span>
                  </div>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg shrink-0">
                    ${rel.precioDesde}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Barra móvil inferior fija para cotizar con un toque */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3.5 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <div>
          <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
            {datos.ciudadDestino} · Separa con 50%
          </span>
          <span className="text-sm font-black text-[#0a1628]">
            Planes $699 · $799 · $899 · $999
          </span>
        </div>
        <a
          href={waCotizarGeneral}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#25D366] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Cotizar Ahora</span>
        </a>
      </div>

      <Footer />
    </div>
  );
}
