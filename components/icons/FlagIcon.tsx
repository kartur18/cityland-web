import React from "react";

const FLAGS: Record<string, React.ReactNode> = {
  España: (
    <>
      <rect width="3" height="2" fill="#AA151B" />
      <rect y=".5" width="3" height="1" fill="#F1BF00" />
    </>
  ),
  "República Dominicana": (
    <>
      <rect width="3" height="2" fill="#002D62" />
      <rect x="0" y="0" width="1.3" height=".85" fill="#CE1126" />
      <rect x="1.7" y="0" width="1.3" height=".85" fill="#002D62" />
      <rect x="0" y="1.15" width="1.3" height=".85" fill="#002D62" />
      <rect x="1.7" y="1.15" width="1.3" height=".85" fill="#CE1126" />
      <rect x="1.3" y="0" width=".4" height="2" fill="#fff" />
      <rect x="0" y=".85" width="3" height=".3" fill="#fff" />
    </>
  ),
  México: (
    <>
      <rect width="1" height="2" fill="#006847" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#CE1126" />
      <circle cx="1.5" cy="1" r=".2" fill="#8B5A2B" />
    </>
  ),
  Colombia: (
    <>
      <rect width="3" height="1" fill="#FCD116" />
      <rect y="1" width="3" height=".5" fill="#003087" />
      <rect y="1.5" width="3" height=".5" fill="#CE1126" />
    </>
  ),
  Brasil: (
    <>
      <rect width="3" height="2" fill="#009739" />
      <polygon points="1.5,.25 2.75,1 1.5,1.75 .25,1" fill="#FEDD00" />
      <circle cx="1.5" cy="1" r=".42" fill="#012169" />
    </>
  ),
  Turquía: (
    <>
      <rect width="3" height="2" fill="#E30A17" />
      <circle cx="1.1" cy="1" r=".6" fill="#fff" />
      <circle cx="1.25" cy="1" r=".48" fill="#E30A17" />
      <polygon points="1.7,1 1.95,1.08 1.88,0.85 1.78,1.05 1.98,0.95" fill="#fff" />
    </>
  ),
  "Estados Unidos": (
    <>
      <rect width="3" height="2" fill="#B22234" />
      <rect y=".3" width="3" height=".28" fill="#fff" />
      <rect y=".86" width="3" height=".28" fill="#fff" />
      <rect y="1.42" width="3" height=".28" fill="#fff" />
      <rect width="1.3" height="1.1" fill="#3C3B6E" />
    </>
  ),
  Italia: (
    <>
      <rect width="1" height="2" fill="#009246" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#CE2B37" />
    </>
  ),
  Francia: (
    <>
      <rect width="1" height="2" fill="#0055A4" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </>
  ),
  Europa: (
    <>
      <rect width="3" height="2" fill="#003399" />
      <circle cx="1.5" cy="1" r=".6" fill="none" stroke="#FFCC00" strokeWidth=".1" strokeDasharray=".15 .2" />
    </>
  ),
  Canadá: (
    <>
      <rect width=".75" height="2" fill="#FF0000" />
      <rect x=".75" width="1.5" height="2" fill="#fff" />
      <rect x="2.25" width=".75" height="2" fill="#FF0000" />
      <circle cx="1.5" cy="1" r=".32" fill="#FF0000" />
    </>
  ),
  Perú: (
    <>
      <rect width="1" height="2" fill="#D91023" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#D91023" />
    </>
  ),
};

export default function FlagIcon({ pais, className = "w-4 h-3" }: { pais: string; className?: string }) {
  // Búsqueda flexible por nombre de país
  const clave = Object.keys(FLAGS).find(
    (k) =>
      pais.toLowerCase().includes(k.toLowerCase()) ||
      k.toLowerCase().includes(pais.toLowerCase())
  );

  const flag = clave ? FLAGS[clave] : null;

  if (!flag) {
    return (
      <span className={`${className} inline-flex items-center justify-center bg-slate-200 text-slate-700 text-[9px] font-black rounded-xs uppercase leading-none`}>
        {pais.slice(0, 2)}
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 3 2"
      className={`${className} inline-block rounded-xs shadow-xs border border-black/10 shrink-0 align-middle`}
      style={{ aspectRatio: "3/2" }}
    >
      {flag}
    </svg>
  );
}
