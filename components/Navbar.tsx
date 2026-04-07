"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WA_LINK } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const navLinks = [
  { label: "Destinos", href: "#destinos" },
  { label: "Paquete Migratorio", href: "#migra" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Bloquear scroll del body cuando el menu movil esta abierto */
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 h-16 w-40 relative overflow-hidden">
          <Image
            src="/logo.png"
            alt="Cityland Travel - Agencia de Viajes"
            fill
            priority
            className="object-contain scale-[1.7]"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#0c3265] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop acciones */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+51941551530"
            className="text-sm font-medium text-gray-700"
          >
            +51 941 551 530
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#1fb855] transition-colors"
          >
            <WhatsAppIcon size={15} />
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setAbierto(!abierto)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label={abierto ? "Cerrar menu" : "Abrir menu"}
        >
          <span
            className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 ${
              abierto ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 ${
              abierto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 ${
              abierto ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 top-16 bg-white z-40 flex flex-col transition-all duration-300 lg:hidden ${
          abierto
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 pt-8 gap-1 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setAbierto(false)}
              className="text-2xl font-medium text-gray-900 py-3 border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="tel:+51941551530"
              className="text-base font-medium text-gray-600"
            >
              +51 941 551 530
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAbierto(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full text-base font-semibold hover:bg-[#1fb855] transition-colors"
            >
              <WhatsAppIcon size={18} />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
