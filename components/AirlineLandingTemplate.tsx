"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";
import FlagIcon from "@/components/icons/FlagIcon";

export interface TarjetaCatalogoLanding {
  id: string;
  titulo: string;
  pais: string;
  filtro: string;
  subtitulo: string;
  precioPrincipal: string;
  precioSecundario: string;
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
  items: TarjetaCatalogoLanding[];
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
    mensaje: string;
    texto: string;
  };
}

const LINKS_RAPIDOS = [
  { label: "España", href: "/espana" },
  { label: "Caribe & Miami", href: "/caribe" },
  { label: "Cusco", href: "/cusco" },
  { label: "Perú & Playas", href: "/peru" },
  { label: "Visas", href: "/visas" },
  { label: "Cruceros", href: "/cruceros" },
  { label: "Europa & Turquía", href: "/europa-turquia" },
  { label: "Seguros", href: "/seguros" },
  { label: "Colegios", href: "/colegios" },
  { label: "Empresas", href: "/empresas" },
];

export default function AirlineLandingTemplate({
  config,
}: {
  config: ConfiguracionLandingAerolinea;
}) {
  const [filtro, setFiltro] = useState<string>("todos");

  const itemsMostrados =
    filtro === "todos"
      ? config.items
      : config.items.filter((i) => i.filtro === filtro);

  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      {/* 1. Header Limpio y Editorial Estilo Aerolínea */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" aria-label="Cityland Travel - Inicio" className="flex items-center">
              <div className="relative h-12 sm:h-14 w-40 sm:w-48 flex items-center">
                <Image
                  src="/logo-transparent.png"
                  alt="Cityland Travel - Agencia de Viajes en Lima"
                  fill
                  priority
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <span className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 border-l border-slate-200 pl-4">
              RUC 20614914239 · Los Olivos, Lima
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar">
            {LINKS_RAPIDOS.slice(0, 7).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs font-bold text-slate-600 hover:text-[#0a1628] px-2.5 py-1.5 rounded-full hover:bg-slate-100 whitespace-nowrap transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/51983882504?text=${encodeURIComponent(config.waPrincipalMensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold cursor-pointer"
            >
              <WhatsAppIcon size={16} />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Portada Luminosa, Blanca y Simétrica (Cero fondos oscuros ni cuadros recargados) */}
      <section className="bg-gradient-to-b from-sky-50/50 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-5">
                {config.banderasHero.map((b) => (
                  <FlagIcon key={b} pais={b} className="w-3.5 h-2.5" />
                ))}
                <span>{config.badgeHero}</span>
              </div>

              <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-6xl lg:text-[62px] text-[#0a1628] tracking-tight leading-[0.95] mb-3">
                {config.tituloHero}{" "}
                <span className="text-red-600">{config.tituloDestacadoHero}</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
                {config.descripcionHero}{" "}
                <strong className="text-[#0a1628] font-bold">
                  {config.negritaHero}
                </strong>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <a
                  href={`https://wa.me/51906450098?text=${encodeURIComponent(config.waPrincipalMensaje)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-md cursor-pointer"
                >
                  <WhatsAppIcon size={20} />
                  <span>{config.ctaPrincipalTexto}</span>
                </a>

                <a
                  href="#catalogo-principal"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer"
                >
                  <PlaneIcon className="w-4 h-4 fill-none stroke-current stroke-2 text-red-600" />
                  <span>Ver Opciones y Tarifas ↓</span>
                </a>
              </div>

              {/* 3 Puntos Clave en Línea Limpia (Sin recuadros) */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-700 pt-5 border-t border-slate-200/80">
                {config.checksHero.map((ck) => (
                  <span key={ck} className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-extrabold">✓</span> {ck}
                  </span>
                ))}
              </div>
            </div>

            {/* Vitrina Derecha */}
            <div className="lg:col-span-5">
              <div className="card-interactive group bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={config.vitrina.img}
                    alt={config.vitrina.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />

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
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      {config.vitrina.sobretitulo}
                    </span>
                    <h2 className="text-xl font-extrabold leading-tight">
                      {config.vitrina.titulo}
                    </h2>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      {config.vitrina.labelPrecio}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-[family-name:var(--font-bebas)] text-4xl text-[#0a1628] leading-none">
                        {config.vitrina.precio}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {config.vitrina.moneda}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                      {config.vitrina.notaInferior}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/51942086698?text=${encodeURIComponent(config.vitrina.waMensaje)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Cotizar Ahora</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grilla de Tarjetas Limpias y Simétricas */}
      <section id="catalogo-principal" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                {config.seccionCatalogo.sobretitulo}
              </span>
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] tracking-tight leading-none">
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
              const msg =
                item.waMensaje ||
                `¡Hola Cityland Travel! Vi su página web y deseo cotizar: ${item.titulo} (${item.subtitulo}) desde ${item.precioPrincipal} ${item.precioSecundario}.`;
              const waUrl = `https://wa.me/${item.waNumber}?text=${encodeURIComponent(msg)}`;

              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col justify-between h-full"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        <FlagIcon pais={item.pais} className="w-3.5 h-2.5" />
                        {item.pais}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-xs ${item.tagBg}`}>
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                      <span className="text-[11px] font-semibold text-amber-300 block">
                        {item.subtitulo}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold leading-tight drop-shadow-xs">
                        {item.titulo}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-700 leading-snug mb-3">
                        {item.resumenCorto}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
                        {item.checks.map((ck) => (
                          <span key={ck} className="flex items-center gap-1">
                            <span className="text-emerald-600 font-bold">✓</span> {ck}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                          Tarifa desde
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] leading-none">
                            {item.precioPrincipal}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {item.precioSecundario}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                          {item.notaPrecio}
                        </span>
                      </div>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa-pulse inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0"
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
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-200/80">
            {config.pilares.map((p) => (
              <div key={p.titulo} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-[#0a1628]">{p.titulo}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-sky-50/50 via-white to-slate-50 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-6 sm:p-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                {config.bannerFinal.sobretitulo}
              </span>
              <h3 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] leading-none mb-2">
                {config.bannerFinal.titulo}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl">
                {config.bannerFinal.descripcion}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/51944280151?text=${encodeURIComponent(config.bannerFinal.waMensaje)}`}
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

            <div className="lg:col-span-5 relative h-56 sm:h-64 lg:h-full min-h-[240px] w-full">
              <Image
                src={config.bannerFinal.img}
                alt={config.bannerFinal.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer Corporativo con Enlaces a Todo el Ecosistema */}
      <footer className="bg-[#0a1628] text-white py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-300 text-center lg:text-left space-y-1">
            <p className="font-bold text-white text-sm">Cityland Travel E.I.R.L. · RUC 20614914239</p>
            <p>Av. Antúnez de Mayolo N. 814, Los Olivos, Lima · Lun–Sáb 9:00 am – 7:00 pm</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a
              href={`https://wa.me/51938845086?text=${encodeURIComponent(config.waPrincipalMensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
            >
              <WhatsAppIcon size={14} />
              <span>Central WhatsApp</span>
            </a>
            {LINKS_RAPIDOS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      {/* 6. Botón Flotante de WhatsApp */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={`https://wa.me/51906642487?text=${encodeURIComponent(config.waFlotante.mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl cursor-pointer"
          aria-label={config.waFlotante.texto}
        >
          <WhatsAppIcon size={22} />
          <span className="hidden sm:inline font-bold text-xs sm:text-sm">
            {config.waFlotante.texto}
          </span>
        </a>
      </div>
    </div>
  );
}
