"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WA_LINK, TELEFONO, TELEFONO_FORMATEADO } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "Paquetes", href: "#paquetes" },
  { label: "Europa", href: "#migra" },
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
    return () => { document.body.style.overflow = ""; };
  }, [abierto]);

  return (
    <>
      {/* Top corporate utility bar */}
      <div className="bg-[#0a1628] text-white/80 text-[11px] hidden lg:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-red-500">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Av. Antúnez de Mayolo N. 814, Los Olivos, Lima
            </span>
            <span className="text-white/30">|</span>
            <span className="text-slate-300 font-medium">
              Agencia Formal · RUC: 20614914239
            </span>
            <span className="text-white/30">|</span>
            <span className="text-slate-400">
              Lun–Sáb: 9:00 am – 7:00 pm
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href={`tel:${TELEFONO}`} className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium">
              <PhoneIcon className="w-3.5 h-3.5 fill-current text-slate-400" />
              {TELEFONO_FORMATEADO}
            </a>
            <span className="text-white/30">|</span>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              <WhatsAppIcon size={13} />
              WhatsApp Oficial 24/7
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar con altura ampliada para logotipo destacado */}
      <nav
        className={`sticky top-0 z-50 bg-white/98 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "border-b border-slate-200 shadow-md py-2" : "border-b border-slate-100 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Oficial Destacado y Ampliado */}
          <a
            href="#"
            aria-label="Cityland Travel - Inicio"
            className="flex-shrink-0 flex items-center group"
          >
            <div className="relative h-14 sm:h-16 lg:h-20 w-44 sm:w-52 lg:w-60 flex items-center transition-transform group-hover:scale-[1.01]">
              <Image
                src="/logo-transparent.png"
                alt="Cityland Travel - Agencia de Viajes"
                fill
                priority
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px"
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-[13px] font-bold text-slate-700 hover:text-red-600 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-right pr-2 hidden xl:block">
              <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                Atención Inmediata
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

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
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
              <span className={`block w-5 h-[2px] bg-[#0a1628] rounded-full transition-all duration-300 ${abierto ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-[2px] bg-[#0a1628] rounded-full transition-all duration-300 ${abierto ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-[2px] bg-[#0a1628] rounded-full transition-all duration-300 ${abierto ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-[75px] sm:top-[85px] bg-white z-40 flex flex-col transition-all duration-300 lg:hidden ${
          abierto ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 pt-5 gap-1 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setAbierto(false)}
              className="text-base font-bold text-[#0a1628] py-3.5 border-b border-slate-100 hover:text-red-600 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-6 flex flex-col gap-3 pb-8">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
              <p className="font-bold text-slate-900">Cityland Travel E.I.R.L.</p>
              <p>RUC: 20614914239 · Los Olivos, Lima</p>
              <p>Horario: Lunes a Sábado 9:00 am - 7:00 pm</p>
            </div>

            <a
              href={`tel:${TELEFONO}`}
              className="flex items-center justify-center gap-2 text-sm font-bold text-slate-700 py-2 border border-slate-200 rounded-xl"
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
