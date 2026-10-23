"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import { SeoBreadcrumbs } from "@/components/SeoSiloFooter";
import type { MigaDePanSEO } from "@/lib/seo-arquitectura";

export interface TarjetaCatalogoAerolinea {
  id: string;
  titulo: string;
  pais: string;
  filtro: string;
  subtitulo: string;
  precioPrincipal: string;
  precioSecundario?: string;
  notaPrecio: string;
  tag: string;
  tagBg: string;
  img: string;
  alt: string;
  resumenCorto: string;
  checks: [string, string, string];
  waNumber: string;
  waMensaje?: string;
}

export interface ConfiguracionLandingAerolinea {
  badgeHero: string;
  banderasHero: string[];
  tituloHero: string;
  tituloDestacadoHero: string;
  descripcionHero: string;
  negritaHero: string;
  ctaPrincipalTexto: string;
  waPrincipalNumero: string;
  waPrincipalMensaje: string;
  checksHero: [string, string, string];

  vitrina: {
    pais: string;
    etiquetaIzq: string;
    etiquetaDer: string;
    img: string;
    alt: string;
    sobretitulo: string;
    titulo: string;
    labelPrecio: string;
    precio: string;
    moneda: string;
    notaInferior: string;
    waNumero: string;
    waMensaje: string;
  };

  seccionCatalogo: {
    sobretitulo: string;
    titulo: string;
    filtros: { id: string; label: string }[];
  };

  items: TarjetaCatalogoAerolinea[];

  pilares: { titulo: string; sub: string }[];

  bannerFinal: {
    sobretitulo: string;
    titulo: string;
    descripcion: string;
    ctaTexto: string;
    waNumero: string;
    waMensaje: string;
    img: string;
    alt: string;
  };

  waFlotante: {
    numero: string;
    texto: string;
    mensaje: string;
  };
}

import { imagenSinRepetir } from "@/lib/imagenes-destinos";
import BarraConversionMovil from "@/components/BarraConversionMovil";

export default function AirlineLandingTemplate({
  config,
  breadcrumbs,
  children,
}: {
  config: ConfiguracionLandingAerolinea;
  breadcrumbs?: MigaDePanSEO[];
  children?: React.ReactNode;
}) {
  const [filtro, setFiltro] = useState<string>("todos");
  const rutaActual = usePathname() || "";

  // Garantizamos que ninguna imagen se repita entre vitrina, tarjetas y banner final
  const contextoGlobal = `${config.vitrina.titulo} ${config.tituloHero} ${config.tituloDestacadoHero} ${config.vitrina.pais}`;
  const imagenesUsadas = new Set<string>();
  const imgVitrina = imagenSinRepetir(config.vitrina.img, imagenesUsadas);

  const itemsConImagenUnica = config.items.map((item) => ({
    ...item,
    imgRender: imagenSinRepetir(item.img, imagenesUsadas),
  }));

  const imgBannerFinal = imagenSinRepetir(config.bannerFinal.img, imagenesUsadas);

  const itemsMostrados =
    filtro === "todos"
      ? itemsConImagenUnica
      : itemsConImagenUnica.filter((i) => i.filtro === filtro);

  // Ruta para "Ref Web": la última miga y, si no hay migas, la página actual (el CRM la lee como citylandtravel.com/<ruta>)
  const rutaOrigenSeo =
    (breadcrumbs && breadcrumbs.length > 0
      ? breadcrumbs[breadcrumbs.length - 1]?.url || ""
      : "") || rutaActual;

  // Determinar identidad visual según la vertical del destino para diferenciar diseños
  const ctxLower = contextoGlobal.toLowerCase();
  const paisUpper = (config.vitrina.pais || "").toUpperCase();
  const esVerticalEuropa =
    ["ES", "IT", "FR", "PT", "NL", "DE", "EU", "GB", "CH"].includes(paisUpper) ||
    ctxLower.includes("madrid") ||
    ctxLower.includes("barcelona") ||
    ctxLower.includes("espana") ||
    ctxLower.includes("españa") ||
    ctxLower.includes("roma") ||
    ctxLower.includes("italia") ||
    ctxLower.includes("paris") ||
    ctxLower.includes("europa") ||
    ctxLower.includes("schengen");

  const esVerticalCaribe =
    !esVerticalEuropa &&
    (["DO", "MX", "CO", "CU", "AW", "CW", "JM", "PA", "BS"].includes(paisUpper) ||
      ctxLower.includes("punta cana") ||
      ctxLower.includes("cancun") ||
      ctxLower.includes("cancún") ||
      ctxLower.includes("san andres") ||
      ctxLower.includes("san andrés") ||
      ctxLower.includes("cartagena") ||
      ctxLower.includes("aruba") ||
      ctxLower.includes("curacao") ||
      ctxLower.includes("caribe") ||
      ctxLower.includes("todo incluido"));

  const esVerticalPeruSudamerica =
    !esVerticalEuropa &&
    !esVerticalCaribe &&
    (["PE", "AR", "BR", "CL", "UY"].includes(paisUpper) ||
      ctxLower.includes("cusco") ||
      ctxLower.includes("machu picchu") ||
      ctxLower.includes("arequipa") ||
      ctxLower.includes("tarapoto") ||
      ctxLower.includes("buenos aires") ||
      ctxLower.includes("rio de janeiro"));

  const temaHero = esVerticalEuropa
    ? {
        sectionBg:
          "bg-gradient-to-br from-[#071120] via-[#0c1d36] to-[#1a0f1e] text-white border-b-4 border-amber-400",
        badgeCls:
          "bg-amber-400/15 border-amber-400/40 text-amber-300",
        h1Cls: "text-white",
        highlightCls: "text-amber-300",
        pCls: "text-slate-200",
        strongCls: "text-white",
        chipCls:
          "bg-white/10 border-white/20 text-white",
        chipCheckCls: "bg-emerald-500/20 text-emerald-300",
        btnSecCls:
          "bg-white/10 hover:bg-white/20 text-white border-white/25",
      }
    : esVerticalCaribe
    ? {
        sectionBg:
          "bg-gradient-to-br from-cyan-50/90 via-teal-50/50 to-white text-[#0a1628] border-b-2 border-teal-200",
        badgeCls:
          "bg-teal-50 border-teal-200 text-teal-900",
        h1Cls: "text-[#0a1628]",
        highlightCls: "text-teal-700",
        pCls: "text-slate-600",
        strongCls: "text-[#0a1628]",
        chipCls:
          "bg-white border-teal-200/80 text-slate-800 shadow-2xs",
        chipCheckCls: "bg-teal-100 text-teal-800",
        btnSecCls:
          "bg-white hover:bg-teal-50 text-[#0a1628] border-teal-300",
      }
    : esVerticalPeruSudamerica
    ? {
        sectionBg:
          "bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-white text-[#0a1628] border-b-2 border-amber-200",
        badgeCls:
          "bg-amber-100/70 border-amber-300 text-amber-950",
        h1Cls: "text-[#0a1628]",
        highlightCls: "text-red-700",
        pCls: "text-slate-600",
        strongCls: "text-[#0a1628]",
        chipCls:
          "bg-white border-amber-200/90 text-slate-800 shadow-2xs",
        chipCheckCls: "bg-amber-100 text-amber-900",
        btnSecCls:
          "bg-white hover:bg-amber-50 text-[#0a1628] border-amber-300",
      }
    : {
        sectionBg:
          "bg-gradient-to-b from-sky-50/90 via-white to-white text-[#0a1628] border-b border-slate-200/80",
        badgeCls:
          "bg-white border-slate-200/90 text-slate-700 shadow-2xs",
        h1Cls: "text-[#0a1628]",
        highlightCls: "text-red-600",
        pCls: "text-slate-600",
        strongCls: "text-[#0a1628]",
        chipCls:
          "bg-slate-50/90 hover:bg-white border-slate-200/80 text-slate-700 shadow-2xs",
        chipCheckCls: "bg-emerald-100 text-emerald-700",
        btnSecCls:
          "bg-white hover:bg-slate-50 text-[#0a1628] border-slate-300",
      };

  function armarUrlWaConAtribucion(mensajeBase: string, seccion: string): string {
    const limpio = mensajeBase.trim();
    if (limpio.includes("📍 Ref Web:")) {
      return `https://wa.me/51944103890?text=${encodeURIComponent(limpio)}`;
    }
    const sufijo = `\n\n📍 Ref Web: citylandtravel.com${rutaOrigenSeo} [${seccion}]`;
    return `https://wa.me/51944103890?text=${encodeURIComponent(`${limpio}${sufijo}`)}`;
  }

  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      {/* 1. Cabecera Unificada de Cityland Travel */}
      <Navbar />

      {/* 1.8 Migas de Pan HTML Semánticas (Arquitectura Silo SEO) */}
      {breadcrumbs && breadcrumbs.length > 0 && <SeoBreadcrumbs migas={breadcrumbs} />}

      {/* 2. Hero Compacto con Tema por Vertical y Botón WhatsApp Visible al Instante */}
      <section className={`${temaHero.sectionBg} pt-6 pb-10 sm:pt-10 sm:pb-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 text-left animate-fade-up">
              <div
                className={`inline-flex items-center gap-2 border px-3.5 py-1.5 rounded-full text-xs font-bold mb-3.5 ${temaHero.badgeCls}`}
              >
                <span className="flex items-center -space-x-1">
                  {config.banderasHero.map((pais) => (
                    <FlagIcon key={pais} pais={pais} className="w-3.5 h-2.5" />
                  ))}
                </span>
                <span>{config.badgeHero}</span>
              </div>

              <h1
                className={`text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight leading-[1.15] mb-3.5 ${temaHero.h1Cls}`}
              >
                {config.tituloHero.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}{" "}
                <span
                  className={`${temaHero.highlightCls} ${
                    config.tituloDestacadoHero.length <= 22 ? "inline-block" : "block mt-1"
                  }`}
                >
                  {config.tituloDestacadoHero.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                </span>
              </h1>

              <p
                className={`text-sm sm:text-base leading-relaxed mb-5 max-w-2xl ${temaHero.pCls}`}
              >
                {config.descripcionHero
                  .trim()
                  .replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")
                  .replace(/([^.!?])$/, "$1.")}{" "}
                <strong className={`font-bold ${temaHero.strongCls}`}>
                  {config.negritaHero.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                </strong>
              </p>

              {/* Beneficios Comerciales 100% Completos (sin textos cortados) */}
              <div className="flex flex-col gap-2 mb-6 max-w-2xl">
                {config.checksHero.map((c) => (
                  <div
                    key={c}
                    className={`flex items-start sm:items-center gap-2.5 border rounded-xl px-3.5 py-2.5 text-xs sm:text-[13px] font-bold transition-colors ${temaHero.chipCls}`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5 sm:mt-0 ${temaHero.chipCheckCls}`}
                    >
                      ✓
                    </span>
                    <span className="leading-snug">
                      {c.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={armarUrlWaConAtribucion(config.waPrincipalMensaje, "Hero Principal")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>{config.ctaPrincipalTexto}</span>
                </a>
                <a
                  href="#catalogo-principal"
                  className={`inline-flex items-center justify-center gap-2 border px-5 py-3.5 rounded-xl font-bold text-sm transition-colors ${temaHero.btnSecCls}`}
                >
                  <span>Ver Ofertas y Tarifas ↓</span>
                </a>
              </div>
            </div>

            {/* Tarjeta Vitrina Promocional Derecha (Foto 100% limpia sin textos encima) */}
            <div className="lg:col-span-5 animate-fade-up delay-100">
              <div className="card-interactive group bg-white text-[#0a1628] rounded-3xl border-2 border-slate-200/90 shadow-xl overflow-hidden">
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={imgVitrina}
                    alt={config.vitrina.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais={config.vitrina.pais} className="w-3.5 h-2.5" />
                      {config.vitrina.etiquetaIzq}
                    </span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      {config.vitrina.etiquetaDer}
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-white space-y-3.5">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block mb-0.5">
                      {config.vitrina.sobretitulo}
                    </span>
                    <h2 className="text-base sm:text-lg font-extrabold text-[#0a1628] leading-snug">
                      {config.vitrina.titulo}
                    </h2>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                          {config.vitrina.labelPrecio}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                          Desde
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1628] leading-none">
                          {config.vitrina.precio.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                        </span>
                        {config.vitrina.moneda &&
                          config.vitrina.moneda.replace(/\bUSD\b\s*[·•-]?\s*/gi, "").trim() !== "" && (
                            <span className="text-xs font-bold text-slate-500">
                              {config.vitrina.moneda.replace(/\bUSD\b\s*[·•-]?\s*/gi, "").trim()}
                            </span>
                          )}
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 block mt-1">
                        {config.vitrina.notaInferior.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                      </span>
                    </div>

                    <a
                      href={armarUrlWaConAtribucion(config.vitrina.waMensaje, "Vitrina Destacada")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0 shadow-sm"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Cotizar Ahora</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barra de Medios de Pago y Confianza Institucional */}
          <div
            className={`mt-7 pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs ${
              esVerticalEuropa
                ? "border-white/15 text-slate-200"
                : "border-slate-200/70 text-slate-600"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span
                className={`font-extrabold uppercase tracking-wider text-[11px] ${
                  esVerticalEuropa ? "text-amber-300" : "text-[#0a1628]"
                }`}
              >
                Medios de Pago Oficiales:
              </span>
              <span
                className={`px-2.5 py-1 rounded-lg font-semibold text-[11px] border ${
                  esVerticalEuropa
                    ? "bg-white/10 border-white/15 text-white"
                    : "bg-slate-100 border-slate-200/80 text-slate-700"
                }`}
              >
                💳 Visa · Mastercard · Amex
              </span>
              <span
                className={`px-2.5 py-1 rounded-lg font-semibold text-[11px] border ${
                  esVerticalEuropa
                    ? "bg-white/10 border-white/15 text-white"
                    : "bg-slate-100 border-slate-200/80 text-slate-700"
                }`}
              >
                🏦 BCP · BBVA · Interbank
              </span>
              <span
                className={`px-2.5 py-1 rounded-lg font-semibold text-[11px] border ${
                  esVerticalEuropa
                    ? "bg-white/10 border-white/15 text-white"
                    : "bg-slate-100 border-slate-200/80 text-slate-700"
                }`}
              >
                📱 Yape / Plin Empresarial
              </span>
            </div>
            <div
              className={`flex items-center gap-2 text-[11px] font-bold px-3 py-1 rounded-lg border ${
                esVerticalEuropa
                  ? "bg-emerald-500/15 border-emerald-400/30 text-emerald-300"
                  : "bg-emerald-50 border-emerald-200/70 text-emerald-800"
              }`}
            >
              <span>✓ Agencia RUC 20614914239 · Salidas desde Lima (Aeropuerto Jorge Chávez LIM)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grilla de Tarjetas Promocionales y Comerciales (Fotos limpias sin textos encima) */}
      <section id="catalogo-principal" className="py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
                {config.seccionCatalogo.sobretitulo}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight">
                {config.seccionCatalogo.titulo}
              </h2>
            </div>

            {config.seccionCatalogo.filtros.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {config.seccionCatalogo.filtros.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFiltro(f.id)}
                    className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      filtro === f.id
                        ? "bg-[#0a1628] text-white shadow-xs"
                        : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemsMostrados.map((item) => {
              const esInicial = item.precioSecundario?.trim().startsWith("$");
              const msg =
                item.waMensaje ||
                `¡Hola Cityland Travel! Vi su página web y deseo cotizar: ${item.titulo} (${item.subtitulo}) desde ${item.precioPrincipal}.`;
              const waUrl = armarUrlWaConAtribucion(msg, `Tarjeta: ${item.tag || item.id}`);

              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between h-full"
                >
                  {/* Imagen 100% despejada sin textos superpuestos */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.imgRender}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        <FlagIcon pais={item.pais} className="w-3.5 h-2.5" />
                        {item.pais}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wide text-white px-2.5 py-1 rounded-full shadow-xs ${item.tagBg}`}>
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Título, subtítulo y beneficios en fondo blanco limpio */}
                  <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                        {item.subtitulo.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0a1628] leading-snug mb-2.5">
                        {item.titulo.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                      </h3>

                      {item.resumenCorto.length > 55 ? (
                        <p className="text-sm text-slate-600 leading-relaxed mb-3">
                          {item.resumenCorto.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                        </p>
                      ) : (
                        <div className="inline-block bg-sky-50/90 text-[#0a1628] border border-sky-200/70 text-[11px] font-bold px-2.5 py-1 rounded-lg mb-3">
                          {item.resumenCorto.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                        </div>
                      )}

                      <div className="space-y-1.5 text-sm font-medium text-slate-600 pt-2.5 border-t border-slate-100">
                        {item.checks.map((ck) => (
                          <div key={ck} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-extrabold shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span className="leading-snug">
                              {ck.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 leading-none">
                            Tarifa Promo
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                            Desde
                          </span>
                          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1628] leading-none">
                            {item.precioPrincipal.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-700 block mt-1">
                          {(esInicial
                            ? `Separa con ${item.precioSecundario} (50% inicial)`
                            : item.notaPrecio
                          ).replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                        </span>
                      </div>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa-pulse inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0 shadow-xs"
                      >
                        <WhatsAppIcon size={15} />
                        <span>Cotizar</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Pilares en Línea Limpia + Banner Dividido Luminoso */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-12 mb-12 border-b border-slate-200/80">
            {config.pilares.map((p) => (
              <div
                key={p.titulo}
                className="flex items-start gap-3 bg-slate-50/70 rounded-2xl p-4 border border-slate-200/70"
              >
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-[#0a1628]">
                    {p.titulo.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                  </h3>
                  <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                    {p.sub.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-sky-50/50 via-white to-slate-50 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
                {config.bannerFinal.sobretitulo}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-3">
                {config.bannerFinal.titulo.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-xl">
                {config.bannerFinal.descripcion.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={armarUrlWaConAtribucion(config.bannerFinal.waMensaje, "Banner Final")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>{config.bannerFinal.ctaTexto}</span>
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-colors"
                >
                  <span>Ir a la Web Principal</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] w-full overflow-hidden">
              <Image
                src={imgBannerFinal}
                alt={config.bannerFinal.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secciones adicionales (como FAQs y rutas relacionadas) antes del Footer */}
      {children}

      {/* 5. Footer Oficial Unificado */}
      <Footer />

      {/* 6. Barra Sticky de Conversión Móvil (estilo agencias líderes) + Botón Flotante en Escritorio */}
      <BarraConversionMovil
        precio={config.vitrina.precio.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
        href={armarUrlWaConAtribucion(config.waFlotante.mensaje, "Barra Móvil")}
      />

      <div className="hidden sm:block fixed bottom-5 right-5 z-50">
        <a
          href={armarUrlWaConAtribucion(config.waFlotante.mensaje, "Botón Flotante")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3.5 rounded-full shadow-xl cursor-pointer"
          aria-label="Cotizar por WhatsApp"
        >
          <WhatsAppIcon size={22} />
          <span className="font-bold text-xs sm:text-sm">
            Cotizar por WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
