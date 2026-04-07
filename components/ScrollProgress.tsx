"use client";
import { useEffect, useState } from "react";
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const handler = () => {
      const h = document.documentElement;
      setPct((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return <div className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#FF4D2E] to-[#F59E0B] z-[9999] transition-[width] duration-100" style={{ width: `${pct}%` }} />;
}
