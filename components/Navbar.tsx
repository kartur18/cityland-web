"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WA_LINK, TELEFONO, TELEFONO_FORMATEADO } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import FlagIcon from "@/components/icons/FlagIcon";

const PRIMARY_LINKS: {
  label: string;
  href: string;
  highlight?: boolean;
  badgeColor?: "red" | "sky";
  flag?: string;
}[] = [
  { label: "España", href: "/espana", highlight: true, badgeColor: "red", flag: "España" },
  { label: "Italia", href: "/italia", highlight: true, badgeColor: "sky", flag: "Italia" },
  { label: "Caribe & Miami", href: "/caribe", highlight: true, badgeColor: "sky", flag: "República Dominicana" },
  { label: "Europa & Turquía", href: "/europa-turquia" },
  { label: "Cusco", href: "/cusco" },
  { label: "Perú & Playas", href: "/peru" },
  { label: "Visas", href: "/visas" },
  { label: "Cruceros", href: "/cruceros" },
];

const TOP_BAR_LINKS: { label: string; href: string }[] = [
  { label: "🔍 Catálogo (+10,000 Ofertas)", href: "/directorio#buscador" },
  { label: "🇪🇺 Guía Europa 2026 (BOE & PNR)", href: "/guia-europa" },
  { label: "Seguros Schengen 30.000€", href: "/seguros" },
  { label: "Luna de Miel & 15 Años", href: "/luna-de-miel" },
  { label: "Promociones Escolares", href: "/colegios" },
  { label: "Viajes Corporativos", href: "/empresas" },
];

const ALL_MOBILE_LINKS: { label: string; href: string; highlight?: boolean }[] = [
  { label: "🔍 Buscador de +10,000 Ofertas y Hoteles", href: "/directorio#buscador", highlight: true },
  ...PRIMARY_LINKS,
  ...TOP_BAR_LINKS.slice(1),
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Franja Superior Corporativa Tipo Aerolínea */}
        <div className="bg-[#0a1628] text-slate-300 text-[11px] py-1.5 border-b border-slate-800/80 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 font-medium">
              <span className="inline-flex items-center gap-1.5 text-white font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Cityland Travel E.I.R.L. · RUC 20614914239
              </span>
              <span className="text-slate-600">|</span>
              <span className="truncate">Av. Antúnez de Mayolo 814, Los Olivos, Lima</span>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              {TOP_BAR_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-white font-semibold transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
              <span className="text-slate-600">|</span>
              <a
                href={`tel:${TELEFONO}`}
                className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-bold whitespace-nowrap"
              >
                <PhoneIcon className="w-3 h-3 fill-current" />
                <span>{TELEFONO_FORMATEADO}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Barra Principal Luminosa y Simétrica (Sin desborde horizontal) */}
        <nav
          aria-label="Navegación principal"
          className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${
            scrolled
              ? "border-b border-slate-200/90 shadow-sm py-2"
              : "border-b border-slate-200/70 py-2.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
            {/* Logo Oficial */}
            <Link
              href="/"
              aria-label="Cityland Travel - Inicio"
              className="flex items-center shrink-0"
            >
              <div className="relative h-11 sm:h-13 w-36 sm:w-44 flex items-center">
                <Image
                  src="/logo-transparent.png"
                  alt="Cityland Travel - Agencia de Viajes en Lima"
                  fill
                  priority
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Enlaces Principales Desktop (Encajan 100% sin cortar el botón derecho) */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {PRIMARY_LINKS.map((link) =>
                link.highlight ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                      link.badgeColor === "sky"
                        ? "text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200/60"
                        : "text-red-600 bg-red-50 hover:bg-red-100 border border-red-200/60"
                    }`}
                  >
                    <FlagIcon
                      pais={link.flag || "España"}
                      className="w-3.5 h-2.5"
                    />
                    <span>{link.label}</span>
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-bold text-slate-700 hover:text-[#0a1628] transition-colors px-2.5 py-1.5 rounded-full hover:bg-slate-100 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Botones Derecha Desktop (Buscador + WhatsApp) */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <Link
                href="/directorio#buscador"
                title="Buscar entre +10,000 paquetes, hoteles y destinos"
                className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#0a1628] px-3.5 py-2.5 rounded-full text-xs font-extrabold transition-colors whitespace-nowrap"
              >
                <span>🔍</span>
                <span>Buscar</span>
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 xl:px-5 py-2.5 rounded-full text-xs font-bold shadow-md cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon size={15} />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>

            {/* Controles Móvil */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <Link
                href="/directorio#buscador"
                aria-label="Buscar destino u hotel"
                className="inline-flex items-center justify-center bg-slate-100 text-[#0a1628] w-8 h-8 rounded-full text-xs font-extrabold border border-slate-200/80"
              >
                🔍
              </Link>
              <Link
                href="/espana"
                className="inline-flex items-center gap-1 bg-red-50 text-red-600 px-2.5 py-1.5 rounded-full text-xs font-extrabold border border-red-200/60"
              >
                <FlagIcon pais="España" className="w-3 h-2" />
                <span>España</span>
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={14} />
                <span>Cotizar</span>
              </a>

              <button
                onClick={() => setAbierto(!abierto)}
                className="flex flex-col gap-[5px] p-2 rounded-xl hover:bg-slate-100 transition cursor-pointer"
                aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={abierto}
              >
                <span
                  className={`block w-5 h-[2px] bg-[#0a1628] rounded-full transition-all duration-300 ${
                    abierto ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-[2px] bg-[#0a1628] rounded-full transition-all duration-300 ${
                    abierto ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-[2px] bg-[#0a1628] rounded-full transition-all duration-300 ${
                    abierto ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Menú Desplegable Móvil con las 11 Secciones */}
      <div
        className={`fixed inset-0 top-[60px] bg-white z-40 flex flex-col transition-all duration-300 lg:hidden ${
          abierto ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 pt-3 gap-0.5 flex-1 overflow-y-auto">
          {ALL_MOBILE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setAbierto(false)}
              className={`text-sm font-bold py-3 border-b border-slate-100 flex items-center justify-between ${
                link.highlight ? "text-red-600" : "text-[#0a1628]"
              }`}
            >
              <span>{link.label}</span>
              <span className="text-xs text-slate-400">→</span>
            </Link>
          ))}

          <div className="mt-5 flex flex-col gap-3 pb-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAbierto(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full text-sm font-bold shadow-md"
            >
              <WhatsAppIcon size={18} />
              <span>Cotizar por WhatsApp</span>
            </a>
            <p className="text-center text-[11px] text-slate-400">
              Cityland Travel E.I.R.L. · RUC 20614914239 · Los Olivos, Lima
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
