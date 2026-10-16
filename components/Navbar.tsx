"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WA_LINK, TELEFONO, TELEFONO_FORMATEADO } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import FlagIcon from "@/components/icons/FlagIcon";

const navLinks: { label: string; href: string; highlight?: boolean }[] = [
  { label: "Paquetes 2026", href: "#paquetes" },
  { label: "Especial España $695", href: "/espana", highlight: true },
  { label: "Europa & Schengen", href: "#migra" },
  { label: "Servicios", href: "#servicios" },
  { label: "Garantías", href: "#garantias" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Oficina", href: "#ubicacion" },
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
      {/* Barra superior institucional de confianza */}
      <div className="bg-[#0a1628] text-white/90 text-[11px] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-3 sm:gap-5 truncate">
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Agencia Formal SUNAT · RUC 20614914239
            </span>
            <span className="hidden md:inline text-white/25">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium text-slate-300 truncate">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-red-500 shrink-0">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Av. Antúnez de Mayolo N. 814, Los Olivos, Lima
            </span>
            <span className="hidden xl:inline text-white/25">|</span>
            <span className="hidden xl:inline text-slate-400">
              Lun–Sáb: 9:00 am – 7:00 pm
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1 text-amber-400 font-bold">
              ★ 4.9/5 Google
            </span>
            <span className="hidden sm:inline text-white/25">|</span>
            <a
              href={`tel:${TELEFONO}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-semibold"
            >
              <PhoneIcon className="w-3.5 h-3.5 fill-current text-slate-400" />
              {TELEFONO_FORMATEADO}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              <WhatsAppIcon size={13} />
              <span>Atención 24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal sticky */}
      <nav
        aria-label="Navegación principal"
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(10,22,40,0.08)] py-2"
            : "border-b border-slate-200/70 py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo Oficial + Sello Verificado */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              aria-label="Cityland Travel - Inicio"
              className="flex items-center group"
            >
              <div className="relative h-12 sm:h-14 lg:h-16 w-40 sm:w-48 lg:w-52 flex items-center transition-transform group-hover:scale-[1.01]">
                <Image
                  src="/logo-transparent.png"
                  alt="Cityland Travel - Agencia de Viajes en Lima"
                  fill
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 208px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* Enlaces Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200/90 px-3 py-1.5 rounded-full transition-all whitespace-nowrap shadow-2xs"
                >
                  <FlagIcon pais="España" className="w-3.5 h-2.5" />
                  <span>{link.label}</span>
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-bold text-slate-700 hover:text-red-600 transition-colors px-2.5 py-2 rounded-lg hover:bg-slate-50 whitespace-nowrap"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="text-right pr-1 hidden xl:block">
              <span className="flex items-center justify-end gap-1 text-[10px] font-bold uppercase text-emerald-700 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Asesores en línea
              </span>
              <a
                href={`tel:${TELEFONO}`}
                className="text-xs font-extrabold text-[#0a1628] hover:text-red-600 transition-colors whitespace-nowrap"
              >
                {TELEFONO_FORMATEADO}
              </a>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 xl:px-5 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              <WhatsAppIcon size={16} />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Botones Móvil */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/espana"
              className="inline-flex items-center gap-1 bg-red-50 border border-red-200 text-red-700 px-2.5 py-1.5 rounded-xl text-[11px] font-extrabold"
            >
              <FlagIcon pais="España" className="w-3 h-2" />
              <span>España</span>
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-2 rounded-xl text-xs font-bold cursor-pointer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={15} />
              <span>Cotizar</span>
            </a>

            <button
              onClick={() => setAbierto(!abierto)}
              className="flex flex-col gap-[5px] p-2.5 rounded-xl hover:bg-slate-100 transition"
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

      {/* Menú desplegable móvil */}
      <div
        className={`fixed inset-0 top-[96px] bg-white z-40 flex flex-col transition-all duration-300 lg:hidden ${
          abierto ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 pt-4 gap-1 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setAbierto(false)}
              className={`text-base font-bold py-3.5 border-b border-slate-100 flex items-center justify-between ${
                link.highlight ? "text-red-600" : "text-[#0a1628] hover:text-red-600"
              }`}
            >
              <span>{link.label}</span>
              <span className="text-xs text-slate-400">→</span>
            </a>
          ))}

          <div className="mt-6 flex flex-col gap-3 pb-8">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-600 space-y-1">
              <p className="font-bold text-slate-900">Cityland Travel E.I.R.L.</p>
              <p>RUC: 20614914239 · Los Olivos, Lima</p>
              <p>Horario: Lunes a Sábado 9:00 am - 7:00 pm</p>
            </div>

            <a
              href={`tel:${TELEFONO}`}
              className="flex items-center justify-center gap-2 text-sm font-bold text-slate-700 py-2.5 border border-slate-200 rounded-xl"
            >
              <PhoneIcon className="w-4 h-4 fill-current text-slate-500" />
              Llamar al {TELEFONO_FORMATEADO}
            </a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAbierto(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-md shadow-emerald-500/20"
            >
              <WhatsAppIcon size={18} />
              Hablar con un asesor por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
