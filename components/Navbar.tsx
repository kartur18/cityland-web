"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WA_LINK } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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

  /* Bloquear scroll del body cuando el menú móvil está abierto */
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [abierto]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,.08)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-24 lg:h-28">
        {/* Logo */}
        <a href="#" aria-label="Cityland Travel - Inicio" className="flex-shrink-0 relative h-20 w-[240px] lg:h-24 lg:w-[320px] flex items-center">
          <Image
            src="/logo.png"
            alt="Cityland Travel - Agencia de Viajes Lima"
            fill
            priority
            className="object-contain object-left scale-150 origin-left ml-4"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[15px] font-bold text-[#001e43] hover:text-[#e3000f] transition-colors py-2 uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop acciones */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+51941551530"
            className="flex items-center gap-1.5 text-sm font-bold text-[#001e43] hover:text-[#e3000f] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current opacity-80" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            +51 941 551 530
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e3000f] hover:bg-[#b0000a] text-white px-6 py-3 rounded-md text-[15px] font-bold shadow-md transition-colors"
          >
            <WhatsAppIcon size={16} />
            Cotizar Vuelos
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setAbierto(!abierto)}
          className="lg:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ${
              abierto ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ${
              abierto ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ${
              abierto ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 top-20 bg-white z-40 flex flex-col transition-all duration-300 lg:hidden ${
          abierto
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 pt-8 gap-1 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setAbierto(false)}
              className="text-2xl font-bold text-gray-900 py-4 border-b border-gray-100 hover:text-[#0c3265] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-8 flex flex-col gap-4 pb-8">
            <a
              href="tel:+51941551530"
              className="flex items-center gap-2 text-base font-semibold text-gray-600"
            >
              📞 +51 941 551 530
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAbierto(false)}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-4 rounded-full text-base font-extrabold shadow-[0_6px_24px_rgba(37,211,102,.4)]"
            >
              <WhatsAppIcon size={20} />
              Escribirnos por WhatsApp
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAbierto(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#0c3265] text-white px-6 py-4 rounded-full text-base font-extrabold"
            >
              Cotizar mi viaje GRATIS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
