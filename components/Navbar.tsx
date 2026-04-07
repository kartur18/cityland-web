"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WA_LINK } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import DarkModeToggle from "@/components/DarkModeToggle";

const navLinks = [
  { label: "Destinos", href: "#destinos" },
  { label: "Migratorio", href: "#migra" },
  { label: "Servicios", href: "#servicios" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#ubicacion" },
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
      {/* Top utility bar */}
      <div className="bg-[#0a1628] text-white/70 text-[11px] hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current opacity-60"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Los Olivos, Lima
            </span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current opacity-60"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              Lun–Sáb 9am–7pm
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+51941551530" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current opacity-60"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              +51 941 551 530
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">
              <WhatsAppIcon size={12} />
              WhatsApp 24/7
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b transition-all duration-300 ${
          scrolled ? "border-gray-200/80 shadow-[0_1px_12px_rgba(0,0,0,.06)]" : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-6 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="#" aria-label="Cityland Travel - Inicio" className="flex-shrink-0 relative h-14 w-[200px] lg:h-16 lg:w-[260px] flex items-center overflow-hidden">
            <Image
              src="/logo.png"
              alt="Cityland Travel"
              fill
              priority
              className="object-contain object-left scale-[2] lg:scale-[2.2] origin-left ml-4 mix-blend-multiply"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[13px] font-semibold text-[#0a1628] hover:text-[#dc2626] transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+51941551530"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-[#0a1628]/70 hover:text-[#0a1628] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              941 551 530
            </a>
            <DarkModeToggle />
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-5 py-2.5 rounded-lg text-[13px] font-bold shadow-sm hover:shadow-md transition-all"
            >
              Cotizar Gratis
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setAbierto(!abierto)}
            className="lg:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-gray-50 transition"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
          >
            <span className={`block w-5 h-[1.5px] bg-[#0a1628] rounded-full transition-all duration-300 ${abierto ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#0a1628] rounded-full transition-all duration-300 ${abierto ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#0a1628] rounded-full transition-all duration-300 ${abierto ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        {/* Mobile overlay */}
        <div
          className={`fixed inset-0 top-[68px] bg-white z-40 flex flex-col transition-all duration-300 lg:hidden ${
            abierto ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-6 pt-6 gap-0.5 flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setAbierto(false)}
                className="text-lg font-semibold text-[#0a1628] py-3.5 border-b border-gray-50 hover:text-[#dc2626] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-8 flex flex-col gap-3 pb-8">
              <a
                href="tel:+51941551530"
                className="flex items-center gap-2 text-sm font-medium text-gray-500"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                +51 941 551 530
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setAbierto(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#dc2626] text-white px-6 py-4 rounded-xl text-[15px] font-bold"
              >
                <WhatsAppIcon size={18} />
                Cotizar mi viaje GRATIS
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
