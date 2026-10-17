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
  Ecuador: (
    <>
      <rect width="3" height="1" fill="#FFD100" />
      <rect y="1" width="3" height=".5" fill="#0033A0" />
      <rect y="1.5" width="3" height=".5" fill="#EF3340" />
    </>
  ),
  Venezuela: (
    <>
      <rect width="3" height=".67" fill="#FFCC00" />
      <rect y=".67" width="3" height=".66" fill="#00247D" />
      <rect y="1.33" width="3" height=".67" fill="#CF142B" />
    </>
  ),
  Brasil: (
    <>
      <rect width="3" height="2" fill="#009739" />
      <polygon points="1.5,.25 2.75,1 1.5,1.75 .25,1" fill="#FEDD00" />
      <circle cx="1.5" cy="1" r=".42" fill="#012169" />
    </>
  ),
  Argentina: (
    <>
      <rect width="3" height="2" fill="#74ACDF" />
      <rect y=".66" width="3" height=".68" fill="#fff" />
      <circle cx="1.5" cy="1" r=".22" fill="#F6B40E" />
    </>
  ),
  Chile: (
    <>
      <rect width="3" height="1" fill="#fff" />
      <rect y="1" width="3" height="1" fill="#D52B1E" />
      <rect width="1" height="1" fill="#0039A6" />
      <circle cx=".5" cy=".5" r=".18" fill="#fff" />
    </>
  ),
  Uruguay: (
    <>
      <rect width="3" height="2" fill="#fff" />
      <rect y=".3" width="3" height=".25" fill="#0038A8" />
      <rect y=".85" width="3" height=".25" fill="#0038A8" />
      <rect y="1.4" width="3" height=".25" fill="#0038A8" />
      <rect width="1" height="1" fill="#fff" />
      <circle cx=".5" cy=".5" r=".22" fill="#FCD116" />
    </>
  ),
  Bolivia: (
    <>
      <rect width="3" height=".67" fill="#D52B1E" />
      <rect y=".67" width="3" height=".66" fill="#F9E300" />
      <rect y="1.33" width="3" height=".67" fill="#007934" />
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
  Puerto: (
    <>
      <rect width="3" height="2" fill="#ED0000" />
      <rect y=".4" width="3" height=".4" fill="#fff" />
      <rect y="1.2" width="3" height=".4" fill="#fff" />
      <polygon points="0,0 1.3,1 0,2" fill="#0050F0" />
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
  Alemania: (
    <>
      <rect width="3" height=".67" fill="#000" />
      <rect y=".67" width="3" height=".66" fill="#DD0000" />
      <rect y="1.33" width="3" height=".67" fill="#FFCE00" />
    </>
  ),
  "Países Bajos": (
    <>
      <rect width="3" height=".67" fill="#AE1C28" />
      <rect y=".67" width="3" height=".66" fill="#fff" />
      <rect y="1.33" width="3" height=".67" fill="#21468B" />
    </>
  ),
  Bélgica: (
    <>
      <rect width="1" height="2" fill="#000" />
      <rect x="1" width="1" height="2" fill="#FDDA24" />
      <rect x="2" width="1" height="2" fill="#EF3340" />
    </>
  ),
  Portugal: (
    <>
      <rect width="1.2" height="2" fill="#006600" />
      <rect x="1.2" width="1.8" height="2" fill="#FF0000" />
      <circle cx="1.2" cy="1" r=".3" fill="#FFCC00" />
    </>
  ),
  "Reino Unido": (
    <>
      <rect width="3" height="2" fill="#012169" />
      <rect x="1.25" width=".5" height="2" fill="#fff" />
      <rect y=".75" width="3" height=".5" fill="#fff" />
      <rect x="1.35" width=".3" height="2" fill="#C8102E" />
      <rect y=".85" width="3" height=".3" fill="#C8102E" />
    </>
  ),
  Suiza: (
    <>
      <rect width="3" height="2" fill="#DA291C" />
      <rect x="1.3" y=".4" width=".4" height="1.2" fill="#fff" />
      <rect x=".9" y=".8" width="1.2" height=".4" fill="#fff" />
    </>
  ),
  Austria: (
    <>
      <rect width="3" height=".67" fill="#ED2939" />
      <rect y=".67" width="3" height=".66" fill="#fff" />
      <rect y="1.33" width="3" height=".67" fill="#ED2939" />
    </>
  ),
  Grecia: (
    <>
      <rect width="3" height="2" fill="#0D5EAF" />
      <rect y=".4" width="3" height=".25" fill="#fff" />
      <rect y="1" width="3" height=".25" fill="#fff" />
      <rect y="1.6" width="3" height=".25" fill="#fff" />
      <rect width="1.1" height="1.1" fill="#0D5EAF" />
      <rect x=".45" width=".2" height="1.1" fill="#fff" />
      <rect y=".45" width="1.1" height=".2" fill="#fff" />
    </>
  ),
  Checa: (
    <>
      <rect width="3" height="1" fill="#fff" />
      <rect y="1" width="3" height="1" fill="#D7141A" />
      <polygon points="0,0 1.4,1 0,2" fill="#11457E" />
    </>
  ),
  Croacia: (
    <>
      <rect width="3" height=".67" fill="#FF0000" />
      <rect y=".67" width="3" height=".66" fill="#fff" />
      <rect y="1.33" width="3" height=".67" fill="#171796" />
    </>
  ),
  Noruega: (
    <>
      <rect width="3" height="2" fill="#BA0C2F" />
      <rect x=".8" width=".4" height="2" fill="#fff" />
      <rect y=".8" width="3" height=".4" fill="#fff" />
      <rect x=".9" width=".2" height="2" fill="#00205B" />
      <rect y=".9" width="3" height=".2" fill="#00205B" />
    </>
  ),
  Dinamarca: (
    <>
      <rect width="3" height="2" fill="#C8102E" />
      <rect x=".9" width=".3" height="2" fill="#fff" />
      <rect y=".85" width="3" height=".3" fill="#fff" />
    </>
  ),
  Islandia: (
    <>
      <rect width="3" height="2" fill="#02529C" />
      <rect x=".8" width=".4" height="2" fill="#fff" />
      <rect y=".8" width="3" height=".4" fill="#fff" />
      <rect x=".9" width=".2" height="2" fill="#DC1E35" />
      <rect y=".9" width="3" height=".2" fill="#DC1E35" />
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
  Panamá: (
    <>
      <rect width="3" height="2" fill="#fff" />
      <rect x="1.5" y="0" width="1.5" height="1" fill="#DA121A" />
      <rect x="0" y="1" width="1.5" height="1" fill="#072357" />
      <circle cx=".75" cy=".5" r=".18" fill="#072357" />
      <circle cx="2.25" cy="1.5" r=".18" fill="#DA121A" />
    </>
  ),
  "Costa Rica": (
    <>
      <rect width="3" height="2" fill="#002B7F" />
      <rect y=".35" width="3" height="1.3" fill="#fff" />
      <rect y=".65" width="3" height=".7" fill="#CE1126" />
    </>
  ),
  Guatemala: (
    <>
      <rect width="1" height="2" fill="#4997D0" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#4997D0" />
    </>
  ),
  Aruba: (
    <>
      <rect width="3" height="2" fill="#418FDE" />
      <rect y="1.35" width="3" height=".15" fill="#F7D417" />
      <rect y="1.6" width="3" height=".15" fill="#F7D417" />
      <circle cx=".6" cy=".5" r=".2" fill="#EF3340" />
    </>
  ),
  Curaçao: (
    <>
      <rect width="3" height="2" fill="#002B7F" />
      <rect y="1.35" width="3" height=".25" fill="#F9E814" />
      <circle cx=".5" cy=".45" r=".12" fill="#fff" />
      <circle cx=".85" cy=".65" r=".16" fill="#fff" />
    </>
  ),
  Curazao: (
    <>
      <rect width="3" height="2" fill="#002B7F" />
      <rect y="1.35" width="3" height=".25" fill="#F9E814" />
      <circle cx=".5" cy=".45" r=".12" fill="#fff" />
      <circle cx=".85" cy=".65" r=".16" fill="#fff" />
    </>
  ),
  Cuba: (
    <>
      <rect width="3" height="2" fill="#002A8F" />
      <rect y=".4" width="3" height=".4" fill="#fff" />
      <rect y="1.2" width="3" height=".4" fill="#fff" />
      <polygon points="0,0 1.3,1 0,2" fill="#CB1515" />
    </>
  ),
  Jamaica: (
    <>
      <rect width="3" height="2" fill="#009B3A" />
      <polygon points="0,0 1.5,1 0,2" fill="#000" />
      <polygon points="3,0 1.5,1 3,2" fill="#000" />
      <line x1="0" y1="0" x2="3" y2="2" stroke="#FED100" strokeWidth=".3" />
      <line x1="3" y1="0" x2="0" y2="2" stroke="#FED100" strokeWidth=".3" />
    </>
  ),
  Bahamas: (
    <>
      <rect width="3" height="2" fill="#00778B" />
      <rect y=".67" width="3" height=".66" fill="#FFC72C" />
      <polygon points="0,0 1.2,1 0,2" fill="#000" />
    </>
  ),
  Barbados: (
    <>
      <rect width="1" height="2" fill="#00267F" />
      <rect x="1" width="1" height="2" fill="#FFC726" />
      <rect x="2" width="1" height="2" fill="#00267F" />
    </>
  ),
  Caribe: (
    <>
      <rect width="3" height="1.2" fill="#0ea5e9" />
      <rect y="1.2" width="3" height=".8" fill="#0284c7" />
      <circle cx="1.5" cy="1" r=".35" fill="#fde047" />
    </>
  ),
  "Emiratos Árabes": (
    <>
      <rect width="3" height=".66" fill="#00732F" />
      <rect y=".66" width="3" height=".68" fill="#fff" />
      <rect y="1.34" width="3" height=".66" fill="#000" />
      <rect width=".8" height="2" fill="#FF0000" />
    </>
  ),
  Egipto: (
    <>
      <rect width="3" height=".67" fill="#CE1126" />
      <rect y=".67" width="3" height=".66" fill="#fff" />
      <rect y="1.33" width="3" height=".67" fill="#000" />
      <circle cx="1.5" cy="1" r=".15" fill="#C09300" />
    </>
  ),
  Israel: (
    <>
      <rect width="3" height="2" fill="#fff" />
      <rect y=".2" width="3" height=".3" fill="#0038B8" />
      <rect y="1.5" width="3" height=".3" fill="#0038B8" />
      <circle cx="1.5" cy="1" r=".28" fill="none" stroke="#0038B8" strokeWidth=".12" />
    </>
  ),
  Japón: (
    <>
      <rect width="3" height="2" fill="#fff" />
      <circle cx="1.5" cy="1" r=".55" fill="#BC002D" />
    </>
  ),
  Tailandia: (
    <>
      <rect width="3" height="2" fill="#A51931" />
      <rect y=".33" width="3" height="1.34" fill="#F4F5F8" />
      <rect y=".66" width="3" height=".68" fill="#2D2A4A" />
    </>
  ),
  China: (
    <>
      <rect width="3" height="2" fill="#DE2910" />
      <circle cx=".65" cy=".6" r=".25" fill="#FFDE00" />
    </>
  ),
  Australia: (
    <>
      <rect width="3" height="2" fill="#00008B" />
      <rect width="1.3" height="1" fill="#012169" />
      <rect x=".55" width=".2" height="1" fill="#fff" />
      <rect y=".4" width="1.3" height=".2" fill="#fff" />
      <circle cx="2.2" cy="1.2" r=".18" fill="#fff" />
    </>
  ),
  Marruecos: (
    <>
      <rect width="3" height="2" fill="#C1272D" />
      <circle cx="1.5" cy="1" r=".32" fill="none" stroke="#006233" strokeWidth=".12" />
    </>
  ),
};

export default function FlagIcon({
  pais,
  className = "w-4 h-3",
}: {
  pais: string;
  className?: string;
}) {
  const limpio = (pais || "Perú").trim();
  const clave = Object.keys(FLAGS).find(
    (k) =>
      limpio.toLowerCase().includes(k.toLowerCase()) ||
      k.toLowerCase().includes(limpio.toLowerCase())
  );

  const flag = clave ? FLAGS[clave] : FLAGS.Europa;

  return (
    <svg
      viewBox="0 0 3 2"
      className={`${className} inline-block rounded-xs shadow-xs border border-black/10 shrink-0 align-middle`}
      style={{ aspectRatio: "3/2" }}
      aria-hidden="true"
    >
      {flag}
    </svg>
  );
}
