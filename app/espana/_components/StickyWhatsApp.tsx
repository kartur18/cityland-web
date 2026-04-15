"use client";

import { useEffect, useState } from "react";

export default function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-gradient-to-t from-white via-white/90 to-transparent pt-6 pb-4 px-4 w-full">
        <a 
          href="https://wa.me/51941551530?text=Hola%20Cityland%20Travel,%20quiero%20reservar%20mi%20viaje%20a%20Espa%C3%B1a%20desde%20$699"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-['DM_Sans'] font-bold text-lg py-4 px-6 rounded-2xl shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] w-full max-w-[360px] mx-auto"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.52 3.449a11.956 11.956 0 00-8.47-3.415C5.452.034.083 5.405.08 12c-.001 2.094.545 4.141 1.583 5.946L.015 23.957l6.16-1.616a11.921 11.921 0 005.87 1.53h.005c6.595 0 11.966-5.372 11.97-11.966.002-3.197-1.242-6.204-3.5-8.456zM12.046 21.84h-.003a9.92 9.92 0 01-5.056-1.378l-.362-.215-3.76.986.998-3.666-.236-.376a9.932 9.932 0 01-1.52-5.333C2.091 6.275 6.47 1.9 12.05 1.9c2.724.001 5.282 1.064 7.206 2.991C21.18 6.819 22.242 9.378 22.24 12.1c-.004 5.823-4.382 10.203-9.967 10.203zm5.402-7.391c-.296-.149-1.754-.867-2.025-.966-.27-.1-.468-.149-.665.15-.197.298-.767.965-.94 1.163-.173.198-.346.223-.642.074-.297-.149-1.252-.462-2.387-1.474-.882-.787-1.478-1.76-1.651-2.059-.172-.298-.018-.46.13-.608.134-.134.296-.347.444-.52.148-.173.197-.297.296-.495.099-.198.05-.371-.024-.52-.074-.149-.665-1.603-.91-2.195-.24-.578-.484-.5-.665-.509-.173-.008-.37-.01-.568-.01-.197 0-.518.074-.79.37s-1.036 1.014-1.036 2.474c0 1.46 1.061 2.871 1.209 3.069.148.198 2.095 3.199 5.074 4.417.709.289 1.263.461 1.694.59.71.213 1.356.183 1.866.111.571-.081 1.754-.716 2.001-1.408.247-.692.247-1.285.173-1.408-.074-.124-.271-.198-.567-.347z" />
          </svg>
          Reservar por WhatsApp — Desde $699
        </a>
      </div>
    </div>
  );
}
