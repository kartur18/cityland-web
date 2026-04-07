"use client";

import { useEffect, useState } from "react";
import { WA_LINK } from "@/components/constantes";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      className={`hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-[996] items-center gap-2 bg-gradient-to-b from-[#d30000] to-[#e52020] text-white px-3 py-6 rounded-l-xl font-extrabold text-xs tracking-wider shadow-[0_8px_32px_rgba(255,77,46,.4)] transition-transform duration-500 hover:pr-5 ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      COTIZA GRATIS →
    </a>
  );
}
