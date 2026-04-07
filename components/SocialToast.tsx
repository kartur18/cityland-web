"use client";
import { useEffect, useState } from "react";

const NOTIFS = [
  { nombre:"María G.",msg:"acaba de cotizar Madrid",tiempo:"hace 2 min",color:"bg-[#1a4a8a]",av:"MG" },
  { nombre:"Carlos R.",msg:"reservó Punta Cana",tiempo:"hace 5 min",color:"bg-[#d30000]",av:"CR" },
  { nombre:"Ana P.",msg:"cotizó paquete migratorio",tiempo:"hace 8 min",color:"bg-[#059669]",av:"AP" },
  { nombre:"Luis M.",msg:"reservó Cancún familiar",tiempo:"hace 12 min",color:"bg-[#6366F1]",av:"LM" },
  { nombre:"Rosa T.",msg:"cotizó Barcelona migratorio",tiempo:"hace 15 min",color:"bg-[#F59E0B]",av:"RT" },
  { nombre:"Pedro S.",msg:"reservó Cartagena",tiempo:"hace 18 min",color:"bg-[#A855F7]",av:"PS" },
];

export default function SocialToast() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      const mostrar = () => { setVisible(true); setTimeout(()=>setVisible(false),4500); setIdx(p=>(p+1)%NOTIFS.length); };
      mostrar();
      interval = setInterval(mostrar, 15000+Math.random()*10000);
    }, 8000);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, []);
  const n = NOTIFS[idx];
  return (
    <div className={`fixed bottom-[90px] left-6 z-[997] bg-white rounded-[14px] p-3.5 shadow-[0_8px_40px_rgba(0,0,0,.15)] flex items-center gap-3 max-w-[340px] border-l-4 border-[#059669] transition-transform duration-500 ${visible?"translate-x-0":"-translate-x-[120%]"} max-md:bottom-[150px] max-md:left-3 max-md:right-3 max-md:max-w-full`} style={{transitionTimingFunction:"cubic-bezier(.34,1.56,.64,1)"}}>
      <div className={`w-10 h-10 rounded-full ${n.color} flex items-center justify-center text-xs font-extrabold text-white shrink-0`}>{n.av}</div>
      <div className="text-[12.5px] text-[#0c3265] leading-snug"><strong className="font-bold">{n.nombre}</strong> {n.msg}<small className="block text-[#64748b] text-[11px] mt-0.5">{n.tiempo}</small></div>
    </div>
  );
}
