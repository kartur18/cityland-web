"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";

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

const POOL_IMAGENES_ALTERNATIVAS: Record<string, string[]> = {
  España: [
    "/images/espana/gran-via-metropolis.jpg",
    "/images/espana/palacio-real.jpg",
    "/images/espana/puerta-de-alcala.jpg",
    "/images/espana/cibeles.jpg",
    "/images/espana/plaza-mayor.jpg",
    "/images/espana/barajas.jpg",
  ],
  Europa: [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85",
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=85",
    "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=85",
    "/images/espana/palacio-real.jpg",
  ],
  Francia: [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
  ],
  Italia: [
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=85",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=85",
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=85",
  ],
  Turquía: [
    "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85",
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=85",
  ],
  "República Dominicana": [
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
    "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=85",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
  ],
  México: [
    "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
    "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=85",
    "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=85",
  ],
  Colombia: [
    "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
    "/images/paquetes/panama-medellin/medellin-skyline.png",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85",
  ],
  Panamá: [
    "/images/paquetes/panama-medellin/hero-panama.jpg",
    "/images/paquetes/panama-medellin/canal-panama.png",
    "/images/paquetes/panama-medellin/casco-antiguo.png",
  ],
  "Estados Unidos": [
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=85",
  ],
  Perú: [
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=85",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
    "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&q=85",
    "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
  ],
  default: [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
    "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
    "/images/espana/palacio-real.jpg",
  ],
};

function obtenerImagenUnica(
  imgOriginal: string,
  pais: string,
  usadas: Set<string>
): string {
  if (!usadas.has(imgOriginal)) {
    usadas.add(imgOriginal);
    return imgOriginal;
  }
  const candidatos = [
    ...(POOL_IMAGENES_ALTERNATIVAS[pais] || []),
    ...POOL_IMAGENES_ALTERNATIVAS.default,
  ];
  for (const cand of candidatos) {
    if (!usadas.has(cand)) {
      usadas.add(cand);
      return cand;
    }
  }
  return imgOriginal;
}

export default function AirlineLandingTemplate({
  config,
  children,
}: {
  config: ConfiguracionLandingAerolinea;
  children?: React.ReactNode;
}) {
  const [filtro, setFiltro] = useState<string>("todos");

  // Garantizamos que ninguna imagen se repita entre vitrina, tarjetas y banner final
  const imagenesUsadas = new Set<string>();
  const imgVitrina = obtenerImagenUnica(
    config.vitrina.img,
    config.vitrina.pais,
    imagenesUsadas
  );

  const itemsConImagenUnica = config.items.map((item) => ({
    ...item,
    imgRender: obtenerImagenUnica(item.img, item.pais, imagenesUsadas),
  }));

  const imgBannerFinal = obtenerImagenUnica(
    config.bannerFinal.img,
    config.vitrina.pais,
    imagenesUsadas
  );

  const itemsMostrados =
    filtro === "todos"
      ? itemsConImagenUnica
      : itemsConImagenUnica.filter((i) => i.filtro === filtro);

  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      {/* 1. Cabecera Unificada de Cityland Travel */}
      <Navbar />

      {/* 2. Hero Luminoso Estilo Aerolínea */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-5">
                <span className="flex items-center -space-x-1">
                  {config.banderasHero.map((pais) => (
                    <FlagIcon key={pais} pais={pais} className="w-3.5 h-2.5" />
                  ))}
                </span>
                <span>{config.badgeHero}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0a1628] tracking-tight leading-[1.12] mb-4">
                {config.tituloHero}{" "}
                <span className="text-red-600">{config.tituloDestacadoHero}</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
                {config.descripcionHero}{" "}
                <strong className="text-[#0a1628] font-bold">
                  {config.negritaHero}
                </strong>
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
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
                  <span>Ver Paquetes y Tarifas</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600 font-semibold">
                {config.checksHero.map((c) => (
                  <span key={c} className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span> {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Tarjeta Vitrina Derecha */}
            <div className="lg:col-span-5">
              <div className="group bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={imgVitrina}
                    alt={config.vitrina.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

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
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1.5">
                      {config.vitrina.labelPrecio}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                        Desde
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1628] leading-none">
                        {config.vitrina.precio}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        USD
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-1">
                      {config.vitrina.notaInferior}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/51944103890?text=${encodeURIComponent(config.vitrina.waMensaje)}`}
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
                `¡Hola Cityland Travel! Vi su página web y deseo cotizar: ${item.titulo} (${item.subtitulo}) desde ${item.precioPrincipal} USD.`;
              const waUrl = `https://wa.me/51944103890?text=${encodeURIComponent(msg)}`;

              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col justify-between h-full"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.imgRender}
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
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1.5">
                          Tarifa por pasajero
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                            Desde
                          </span>
                          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1628] leading-none">
                            {item.precioPrincipal}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            USD
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-700 block mt-1">
                          {esInicial ? `Separa con ${item.precioSecundario} (50% inicial)` : item.notaPrecio}
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

          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-sky-50/50 via-white to-slate-50 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
                {config.bannerFinal.sobretitulo}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-3">
                {config.bannerFinal.titulo}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-xl">
                {config.bannerFinal.descripcion}
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

      {/* Secciones adicionales (como FAQs y rutas relacionadas en /vuelos/[slug]) antes del Footer */}
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
