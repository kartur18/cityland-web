"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

import {
  obtenerGaleriaPorTexto,
  IMG_AVION_ALA,
  IMG_AEROPUERTO_INTERNACIONAL,
  IMG_HOTEL_LUJO_PISCINA,
  IMG_VIAJERO_MALETA,
  IMG_FAMILIA_VIAJE,
  IMG_PASAPORTE_VIAJE,
} from "@/lib/imagenes-destinos";

const FALLBACKS_NEUTROS_UNIVERSALES: string[] = [
  IMG_AVION_ALA,
  IMG_AEROPUERTO_INTERNACIONAL,
  IMG_HOTEL_LUJO_PISCINA,
  IMG_VIAJERO_MALETA,
  IMG_FAMILIA_VIAJE,
  IMG_PASAPORTE_VIAJE,
];

function obtenerImagenUnica(
  imgOriginal: string,
  contextoTexto: string,
  usadas: Set<string>
): string {
  if (imgOriginal && !usadas.has(imgOriginal)) {
    usadas.add(imgOriginal);
    return imgOriginal;
  }
  const galeriaEspecifica = obtenerGaleriaPorTexto(contextoTexto);
  const candidatos = [...galeriaEspecifica, ...FALLBACKS_NEUTROS_UNIVERSALES];
  for (const cand of candidatos) {
    if (!usadas.has(cand)) {
      usadas.add(cand);
      return cand;
    }
  }
  return imgOriginal;
}

function calcularPrecioAntes(precioStr: string): string | null {
  const limpio = precioStr.replace(/[^0-9]/g, "");
  const num = parseInt(limpio, 10);
  if (!num || isNaN(num) || num <= 0) return null;
  const antes =
    num < 100
      ? num + 20
      : num < 400
      ? Math.ceil((num * 1.22) / 5) * 5
      : Math.ceil((num * 1.2) / 10) * 10;
  return `$${antes.toLocaleString("en-US")}`;
}

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

  // Garantizamos que ninguna imagen se repita entre vitrina, tarjetas y banner final
  const contextoGlobal = `${config.vitrina.titulo} ${config.tituloHero} ${config.tituloDestacadoHero} ${config.vitrina.pais}`;
  const imagenesUsadas = new Set<string>();
  const imgVitrina = obtenerImagenUnica(
    config.vitrina.img,
    contextoGlobal,
    imagenesUsadas
  );

  const itemsConImagenUnica = config.items.map((item) => ({
    ...item,
    imgRender: obtenerImagenUnica(
      item.img,
      `${item.id} ${item.titulo} ${item.alt} ${contextoGlobal}`,
      imagenesUsadas
    ),
  }));

  const imgBannerFinal = obtenerImagenUnica(
    config.bannerFinal.img,
    `${config.bannerFinal.titulo} ${contextoGlobal}`,
    imagenesUsadas
  );

  const itemsMostrados =
    filtro === "todos"
      ? itemsConImagenUnica
      : itemsConImagenUnica.filter((i) => i.filtro === filtro);

  const precioAntesVitrina = calcularPrecioAntes(config.vitrina.precio);

  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      {/* 1. Cabecera Unificada de Cityland Travel */}
      <Navbar />

      {/* 1.5 Cinta Promocional Superior de Alta Conversión */}
      <div className="bg-[#0a1628] text-white border-b border-slate-800 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-red-600 text-white font-extrabold text-[10px] uppercase tracking-wider">
              Promoción Activa
            </span>
            <span className="text-slate-200">
              Separa tu viaje o paquete con el <strong className="text-amber-300">50% de inicial</strong> · Código PNR verificable
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-300">
            <span>🏢 RUC 20614914239 (Boleta y Factura SUNAT)</span>
            <span>•</span>
            <a
              href={`https://wa.me/51944103890?text=${encodeURIComponent(config.waPrincipalMensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold"
            >
              WhatsApp Oficial: +51 944 103 890 →
            </a>
          </div>
        </div>
      </div>

      {/* 1.8 Migas de Pan HTML Semánticas (Arquitectura Silo SEO) */}
      {breadcrumbs && breadcrumbs.length > 0 && <SeoBreadcrumbs migas={breadcrumbs} />}

      {/* 2. Hero Luminoso y Comercial Estilo Aerolínea */}
      <section className="bg-gradient-to-b from-sky-50/90 via-white to-white pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-4">
                <span className="flex items-center -space-x-1">
                  {config.banderasHero.map((pais) => (
                    <FlagIcon key={pais} pais={pais} className="w-3.5 h-2.5" />
                  ))}
                </span>
                <span>{config.badgeHero}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a1628] tracking-tight leading-[1.14] mb-4">
                {config.tituloHero.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}{" "}
                <span
                  className={`text-red-600 ${
                    config.tituloDestacadoHero.length <= 18 ? "inline-block" : ""
                  }`}
                >
                  {config.tituloDestacadoHero.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
                {config.descripcionHero
                  .trim()
                  .replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")
                  .replace(/([^.!?])$/, "$1.")}{" "}
                <strong className="text-[#0a1628] font-bold">
                  {config.negritaHero.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                </strong>
              </p>

              {/* Chips Comerciales Destacados */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 max-w-2xl">
                {config.checksHero.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-2 bg-slate-50/90 hover:bg-white border border-slate-200/80 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 shadow-2xs transition-colors"
                  >
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-extrabold shrink-0">
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
                  href={`https://wa.me/51944103890?text=${encodeURIComponent(config.waPrincipalMensaje)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>{config.ctaPrincipalTexto}</span>
                </a>
                <a
                  href="#catalogo-principal"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-5 py-3.5 rounded-xl font-bold text-sm transition-colors"
                >
                  <span>Ver Ofertas y Tarifas ↓</span>
                </a>
              </div>
            </div>

            {/* Tarjeta Vitrina Promocional Derecha */}
            <div className="lg:col-span-5 animate-fade-up delay-100">
              <div className="card-interactive group bg-white rounded-3xl border-2 border-slate-200/90 shadow-xl overflow-hidden">
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={imgVitrina}
                    alt={config.vitrina.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais={config.vitrina.pais} className="w-3.5 h-2.5" />
                      {config.vitrina.etiquetaIzq}
                    </span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      {config.vitrina.etiquetaDer}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
                      {config.vitrina.sobretitulo}
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold leading-snug">
                      {config.vitrina.titulo}
                    </h2>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {config.vitrina.labelPrecio}
                      </span>
                      {precioAntesVitrina && (
                        <span className="bg-red-50 text-red-600 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                          Oferta
                        </span>
                      )}
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
                      {precioAntesVitrina && (
                        <span className="text-xs font-semibold text-slate-400 line-through ml-1">
                          {precioAntesVitrina}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-1">
                      {config.vitrina.notaInferior.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/51944103890?text=${encodeURIComponent(config.vitrina.waMensaje)}`}
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

          {/* Barra de Medios de Pago y Confianza Institucional */}
          <div className="mt-8 pt-5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-extrabold text-[#0a1628] uppercase tracking-wider text-[11px]">
                Medios de Pago Oficiales:
              </span>
              <span className="bg-slate-100 border border-slate-200/80 px-2.5 py-1 rounded-lg font-semibold text-[11px]">
                💳 Visa · Mastercard · Amex
              </span>
              <span className="bg-slate-100 border border-slate-200/80 px-2.5 py-1 rounded-lg font-semibold text-[11px]">
                🏦 BCP · BBVA · Interbank
              </span>
              <span className="bg-slate-100 border border-slate-200/80 px-2.5 py-1 rounded-lg font-semibold text-[11px]">
                📱 Yape / Plin Empresarial
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-lg">
              <span>✓ Agencia Registrada RUC 20614914239 · Sede Av. Antúnez de Mayolo 814, Los Olivos</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grilla de Tarjetas Promocionales y Comerciales */}
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
              const precioAntesItem = calcularPrecioAntes(item.precioPrincipal);
              const msg =
                item.waMensaje ||
                `¡Hola Cityland Travel! Vi su página web y deseo cotizar: ${item.titulo} (${item.subtitulo}) desde ${item.precioPrincipal} USD.`;
              const waUrl = `https://wa.me/51944103890?text=${encodeURIComponent(msg)}`;

              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between h-full"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.imgRender}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        <FlagIcon pais={item.pais} className="w-3.5 h-2.5" />
                        {item.pais}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wide text-white px-2.5 py-1 rounded-full shadow-xs ${item.tagBg}`}>
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                      <span className="text-[11px] font-semibold text-amber-300 block">
                        {item.subtitulo.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold leading-tight drop-shadow-xs">
                        {item.titulo.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      {item.resumenCorto.length > 55 ? (
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          {item.resumenCorto.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                        </p>
                      ) : (
                        <div className="inline-block bg-sky-50/90 text-[#0a1628] border border-sky-200/70 text-[11px] font-bold px-2.5 py-1 rounded-lg mb-3">
                          {item.resumenCorto.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                        </div>
                      )}

                      <div className="space-y-1.5 text-xs font-medium text-slate-600 pt-2 border-t border-slate-100">
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
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-none">
                            Tarifa Promo
                          </span>
                          {precioAntesItem && (
                            <span className="text-[11px] font-semibold text-slate-400 line-through leading-none">
                              {precioAntesItem}
                            </span>
                          )}
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
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {p.sub.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Proceso Comercial en 3 Pasos para Cierre de Ventas */}
          <div className="mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full mb-2">
                Compra 100% Segura y Verificable
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight">
                ¿Cómo separar tu viaje hoy mismo con Cityland Travel?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="card-interactive bg-slate-50/90 border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#0a1628] text-white font-extrabold text-xs mb-3">
                    01
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-1.5">
                    Cotiza en 2 Minutos por WhatsApp u Oficina
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escríbenos al <strong>+51 944 103 890</strong> o visítanos en nuestra sede de Los Olivos. Una especialista te enviará opciones reales según tus fechas.
                  </p>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 mt-3 block">
                  ✓ Atención personalizada en tiempo real
                </span>
              </div>

              <div className="card-interactive bg-slate-50/90 border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-red-600 text-white font-extrabold text-xs mb-3">
                    02
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-1.5">
                    Congela tu Tarifa con el 50% de Inicial
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bloqueamos tus espacios aéreos y hoteleros con código de reserva <strong>PNR verificable</strong> en el sistema oficial y emitimos tu Boleta o Factura SUNAT.
                  </p>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 mt-3 block">
                  ✓ RUC 20614914239 · Pagos en cuotas sin intereses
                </span>
              </div>

              <div className="card-interactive bg-slate-50/90 border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-600 text-white font-extrabold text-xs mb-3">
                    03
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-1.5">
                    Recibe tu Carpeta y Viaja con Soporte 24/7
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Te entregamos tus boletos, vouchers de hotel, seguro de viaje y guía completa de embarque, con asistencia continua desde tu salida hasta tu regreso.
                  </p>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 mt-3 block">
                  ✓ +5,000 viajeros peruanos atendidos con éxito
                </span>
              </div>
            </div>
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
                  href={`https://wa.me/51944103890?text=${encodeURIComponent(config.bannerFinal.waMensaje)}`}
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

      {/* 6. Botón Flotante de WhatsApp */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={`https://wa.me/51944103890?text=${encodeURIComponent(config.waFlotante.mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl cursor-pointer"
          aria-label="Cotizar por WhatsApp"
        >
          <WhatsAppIcon size={22} />
          <span className="hidden sm:inline font-bold text-xs sm:text-sm">
            Cotizar por WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
