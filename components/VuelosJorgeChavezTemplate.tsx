import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import BarraConversionMovil from "@/components/BarraConversionMovil";
import NotaPrecio from "@/components/NotaPrecio";
import { textoPrecio } from "@/lib/formato-precio";
import { imagenSinRepetir } from "@/lib/imagenes-destinos";
import type { RutaVueloSEO } from "@/lib/rutas-vuelos";

interface Props {
  ruta: RutaVueloSEO;
  breadcrumbs: { nombre: string; url: string }[];
  children?: React.ReactNode;
}

export default function VuelosJorgeChavezTemplate({
  ruta,
  breadcrumbs,
  children,
}: Props) {
  const { origen, destino, codigoOrigen, codigoDestino, precioDesdeUSD, config } = ruta;
  const mitad = Math.max(50, Math.round(precioDesdeUSD * 0.5));
  // El CRM lee "Ref Web: citylandtravel.com/<ruta>": sin https://
  const refWeb = `\n\n📍 Ref Web: citylandtravel.com/vuelos/${ruta.slug}`;
  const imagenesUsadas = new Set<string>();
  const imgVitrina = imagenSinRepetir(config.vitrina.img, imagenesUsadas);
  const waHref = `https://wa.me/51944103890?text=${encodeURIComponent(
    config.waPrincipalMensaje + refWeb
  )}`;

  const esSalidaLima = codigoOrigen === "LIM";
  const etiquetaAeropuertoOrigen = esSalidaLima
    ? "Lima — Aeropuerto Internacional Jorge Chávez (LIM)"
    : `${origen} (${codigoOrigen})`;
  const etiquetaAeropuertoDestino =
    codigoDestino === "LIM"
      ? "Lima — Aeropuerto Internacional Jorge Chávez (LIM)"
      : `${destino} (${codigoDestino})`;

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 flex flex-col">
      <Navbar />

      {/* Barra de Migas de Pan y Aeropuerto Oficial */}
      <div className="bg-[#071120] text-slate-300 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5">
            {breadcrumbs.map((b, idx) => (
              <React.Fragment key={b.url}>
                {idx > 0 && <span className="text-slate-600">/</span>}
                <Link
                  href={b.url}
                  className="hover:text-amber-400 transition-colors font-medium"
                >
                  {b.nombre}
                </Link>
              </React.Fragment>
            ))}
          </nav>
          <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Agencia formal · RUC 20614914239
          </span>
        </div>
      </div>

      {/* HERO ESTILO PANEL DE EMBARQUE JORGE CHÁVEZ (LIM) */}
      <section className="bg-gradient-to-b from-[#071120] via-[#0c1d36] to-[#102544] text-white py-10 sm:py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Columna Izquierda: Tablero de Ruta */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex flex-wrap items-center gap-2 bg-sky-500/15 border border-sky-400/30 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide">
                <span>✈️ CENTRAL DE BOLETOS AÉREOS</span>
                <span>·</span>
                <span>{config.badgeHero}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                Vuelos de {origen} a{" "}
                <span className="text-amber-400">{destino}</span>
              </h1>

              {/* Tarjeta Visual de Ruta IATA (LIM -> DESTINO) */}
              <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5">
                <div className="grid grid-cols-1 sm:grid-cols-11 gap-4 items-center">
                  <div className="sm:col-span-5">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                      Aeropuerto de Salida
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                      {codigoOrigen}
                    </div>
                    <p className="text-xs text-slate-300 font-medium mt-0.5">
                      {etiquetaAeropuertoOrigen}
                    </p>
                  </div>

                  <div className="sm:col-span-1 flex sm:flex-col items-center justify-center text-amber-400">
                    <span className="text-xl">✈️</span>
                  </div>

                  <div className="sm:col-span-5 sm:text-right">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                      Aeropuerto de Destino
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight mt-0.5">
                      {codigoDestino}
                    </div>
                    <p className="text-xs text-slate-300 font-medium mt-0.5">
                      {etiquetaAeropuertoDestino}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                  <span>
                    <strong className="text-white">Equipaje:</strong> según aerolínea y tarifa; tu asesor lo confirma
                  </span>
                  <span>
                    <strong className="text-white">Check-in:</strong> Gestionado por tu asesor
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {textoPrecio(config.descripcionHero)}{" "}
                <strong className="text-white font-bold">{textoPrecio(config.negritaHero)}</strong>
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm sm:text-base"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Cotizar Fechas por WhatsApp (+51 944 103 890)</span>
                </a>
                <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-xs">
                  <span className="text-slate-300 block">Tarifa Referencial Desde</span>
                  <span className="text-lg font-black text-amber-400">
                    ${precioDesdeUSD.toLocaleString("en-US")} USD
                  </span>
                  <span className="text-slate-300 ml-1.5">
                    (Separa desde ${mitad} USD)
                  </span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Foto Limpia del Destino + Resumen de Emisión */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative h-56 sm:h-64 w-full bg-slate-900">
                  <Image
                    src={imgVitrina}
                    alt={`Vuelos de ${origen} a ${destino}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#071120]/90 backdrop-blur-xs text-white text-[11px] font-extrabold px-3 py-1 rounded-full">
                    {codigoOrigen} → {codigoDestino}
                  </div>
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full">
                    Tarifa referencial
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        Ruta Aérea Oficial
                      </span>
                      <h2 className="text-lg font-black text-[#071120]">
                        {origen} ({codigoOrigen}) → {destino} ({codigoDestino})
                      </h2>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-bold uppercase text-slate-600 block">
                        Desde
                      </span>
                      <span className="text-2xl font-black text-emerald-700">
                        ${precioDesdeUSD.toLocaleString("en-US")}
                      </span>
                      <span className="text-xs font-bold text-slate-500 ml-0.5">
                        USD
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-700">
                    {config.checksHero.map((ck) => (
                      <li key={ck} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-black mt-0.5">✓</span>
                        <span>{textoPrecio(ck)}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-black mt-0.5">✓</span>
                      <span>
                        Atención presencial en Los Olivos (Av. Antúnez de Mayolo 814) y WhatsApp
                      </span>
                    </li>
                  </ul>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#071120] hover:bg-slate-800 text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>Verificar Cupos en Esta Ruta</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARADOR DE LAS 3 MODALIDADES DE BOLETO / PAQUETE */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 block mb-1">
            Comparativa de Tarifas y Equipaje en Dólares (USD)
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#071120]">
            Opciones Disponibles para Volar de {origen} a {destino}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Elige entre solo pasaje aéreo, tarifa con doble maleta de 23 kg o paquete completo con alojamiento y asesoría.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.items.map((item, idx) => {
            const itemWa = `https://wa.me/51944103890?text=${encodeURIComponent(
              (item.waMensaje || config.waPrincipalMensaje) + refWeb
            )}`;
            // Solo se resalta la tarjeta que el propio dato marca como la mejor tarifa
            const esDestacado = /mejor|recomendad/i.test(item.tag);
            const imgItem = imagenSinRepetir(item.img, imagenesUsadas);
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl border ${
                  esDestacado
                    ? "border-sky-600 ring-2 ring-sky-600/15"
                    : "border-slate-200"
                } shadow-sm overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  {/* Imagen 100% limpia sin textos encimados */}
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={imgItem}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span
                      className={`absolute top-3 left-3 ${item.tagBg} text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Cuerpo limpio debajo de la foto */}
                  <div className="p-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-700 block mb-1">
                      Opción {idx + 1} · Ruta {codigoOrigen} → {codigoDestino}
                    </span>
                    <h3 className="text-lg font-black text-[#071120] leading-snug mb-1.5">
                      {textoPrecio(item.titulo)}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">{textoPrecio(item.subtitulo)}</p>

                    <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 mb-4 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-500 block">
                          Tarifa desde
                        </span>
                        <span className="text-2xl font-black text-[#071120]">
                          {item.precioPrincipal}
                        </span>
                        <span className="text-xs font-bold text-slate-600 ml-1">
                          USD
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 text-right">
                        {textoPrecio(item.notaPrecio || "Según aerolínea y tarifa; tu asesor lo confirma")}
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm text-slate-700 mb-5">
                      {item.checks.map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                          <span>{textoPrecio(c)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <a
                    href={itemWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Cotizar Opción {idx + 1} por WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <NotaPrecio className="mt-6 text-center" />
      </section>

      {/* Contenido adicional de la página (Calculadora Schengen, FAQs, Rutas Relacionadas) */}
      {children}

      <Footer />

      <BarraConversionMovil
        precio={`$${precioDesdeUSD.toLocaleString("en-US")}`}
        href={waHref}
      />
    </div>
  );
}
