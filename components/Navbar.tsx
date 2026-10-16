"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WA_LINK, TELEFONO, TELEFONO_FORMATEADO } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import FlagIcon from "@/components/icons/FlagIcon";

const navLinks: { label: string; href: string; highlight?: boolean; badgeColor?: "red" | "sky" }[] = [
  { label: "Destinos", href: "#paquetes" },
  { label: "Especial España", href: "/espana", highlight: true, badgeColor: "red" },
  { label: "Caribe & América", href: "/caribe", highlight: true, badgeColor: "sky" },
  { label: "Reseñas", href: "#testimonios" },
  { label: "Preguntas", href: "#faq" },
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
      <nav
        aria-label="Navegación principal"
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/90 shadow-xs py-2"
            : "border-b border-slate-200/70 py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo Oficial + RUC en una línea limpia */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/"
              aria-label="Cityland Travel - Inicio"
              className="flex items-center"
            >
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

          {/* Enlaces Desktop Limpios */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) =>
              link.highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 text-xs font-extrabold px-3.5 py-2 rounded-full transition-all whitespace-nowrap ${
                    link.badgeColor === "sky"
                      ? "text-sky-700 bg-sky-50 hover:bg-sky-100"
                      : "text-red-600 bg-red-50 hover:bg-red-100"
                  }`}
                >
                  <FlagIcon
                    pais={link.badgeColor === "sky" ? "República Dominicana" : "España"}
                    className="w-3.5 h-2.5"
                  />
                  <span>{link.label}</span>
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold text-slate-700 hover:text-[#0a1628] transition-colors px-3 py-2 rounded-full hover:bg-slate-100 whitespace-nowrap"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${TELEFONO}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0a1628]"
            >
              <PhoneIcon className="w-3.5 h-3.5 fill-current text-slate-400" />
              {TELEFONO_FORMATEADO}
            </a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md cursor-pointer"
            >
              <WhatsAppIcon size={16} />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Móvil */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/espana"
              className="inline-flex items-center gap-1 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-xs font-extrabold"
            >
              <FlagIcon pais="España" className="w-3 h-2" />
              <span>España</span>
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3.5 py-2 rounded-full text-xs font-bold cursor-pointer"
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

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 top-[68px] bg-white z-40 flex flex-col transition-all duration-300 lg:hidden ${
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
                link.highlight ? "text-red-600" : "text-[#0a1628]"
              }`}
            >
              <span>{link.label}</span>
              <span className="text-xs text-slate-400">→</span>
            </a>
          ))}

          <div className="mt-6 flex flex-col gap-3 pb-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAbierto(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full text-sm font-bold shadow-md"
            >
              <WhatsAppIcon size={18} />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
