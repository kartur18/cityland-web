"use client";

import { useState, useEffect } from "react";
import { WA_LINK } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const navLinks = [
  { label: "Destinos", href: "#destinos" },
  { label: "Migratorio", href: "#migra" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

function PlaneLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="plane-grad"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DC2626" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <path
        d="M21 3L3 10.5l6.5 2.5L12 21l3-7.5L21 3z"
        fill="url(#plane-grad)"
      />
      <path
        d="M9.5 13l-1 5.5L12 21l2-4.5"
        fill="url(#plane-grad)"
        opacity="0.6"
      />
    </svg>
  );
}

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-100 bg-white/88 backdrop-blur-[32px] backdrop-saturate-[180%] border-b border-white/60 transition-shadow ${
        scrolled
          ? "shadow-md"
          : "shadow-[0_1px_0_rgba(0,0,0,.06)]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <PlaneLogo />
          <span className="font-[family-name:var(--font-bebas)] text-[28px] tracking-wide text-[#0D1F3C] font-bold">
            CITYLAND
          </span>
          <span className="font-[family-name:var(--font-bebas)] text-[28px] tracking-wide font-bold bg-gradient-to-r from-brand-red to-[#FF6B4A] bg-clip-text text-transparent">
            TRAVEL
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[13px] font-semibold text-[#4B5680] hover:text-[#0D1F3C] transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-gradient-to-br from-[#059669] to-[#10B981] text-white px-4.5 py-2.5 rounded-full text-[13px] font-bold hover:brightness-110 hover:-translate-y-0.5 transition"
          >
            <WhatsAppIcon size={15} />
            Cotizar GRATIS
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setAbierto(!abierto)}
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Abrir menú"
        >
          <span
            className={`block w-[22px] h-0.5 bg-[#0D1F3C] rounded transition-transform ${
              abierto
                ? "rotate-45 translate-x-[5px] translate-y-[5px]"
                : ""
            }`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-[#0D1F3C] rounded transition-opacity ${
              abierto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-[#0D1F3C] rounded transition-transform ${
              abierto
                ? "-rotate-45 translate-x-[5px] -translate-y-[5px]"
                : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {abierto && (
        <div className="md:hidden flex flex-col absolute top-full left-0 right-0 bg-white p-4 pb-6 shadow-lg rounded-b-2xl gap-1 z-99">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setAbierto(false)}
              className="nav-link py-3 text-[15px] font-semibold text-[#0D1F3C] border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setAbierto(false)}
            className="flex items-center gap-2 text-[#059669] font-extrabold mt-1 py-3 text-[15px]"
          >
            <WhatsAppIcon size={15} />
            Cotizar GRATIS por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
