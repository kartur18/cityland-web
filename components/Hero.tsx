import { WA_LINK, WA_SVG, cotLink } from "@/components/constantes";
export default function Hero() {
  return (
    <header className="bg-gradient-to-br from-[#0D1F3C] via-[#1A2E5A] to-[#152040] pt-14 relative overflow-hidden min-h-[calc(100vh-120px)] flex items-center">
      <div className="absolute inset-0 opacity-12 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=85')" }} />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%,100% 100%,100% 40%,0 100%)" }} />
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-center relative z-2 w-full pb-20">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/40 px-4 py-1.5 rounded-full text-amber-300 text-[12.5px] font-bold tracking-wide uppercase mb-5 backdrop-blur-sm">
            <b className="bg-[#FF4D2E] text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider">PERÚ → MUNDO</b>+5,000 viajes realizados
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(52px,7vw,82px)] leading-[0.95] text-white tracking-wide mb-5">VUELA A <em className="not-italic text-amber-300">EUROPA,<br/>CARIBE Y<br/>SUDAMÉRICA</em></h1>
          <p className="text-[17px] text-white/75 leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0">Paquetes migratorios desde <strong className="text-white font-bold">$799</strong> y turísticos a más de 70 destinos.<br/>Cotización <strong className="text-white font-bold">GRATIS</strong> en menos de 2 horas por WhatsApp.</p>
          <div className="flex flex-wrap gap-2.5 mb-10 justify-center lg:justify-start">
            {["✅ Sin visa para Europa","⚡ Respuesta en 2h","💳 Pago en cuotas","🛡️ Seguro incluido"].map((t)=>(
              <span key={t} className="inline-flex items-center gap-1.5 bg-white/8 border border-white/18 px-4 py-1.5 rounded-full text-white/90 text-[12.5px] font-semibold backdrop-blur-sm hover:bg-white/14 transition">{t}</span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
            <a href={WA_LINK} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gradient-to-br from-[#FF4D2E] to-[#FF6B4A] text-white px-8 py-4 rounded-full text-[15px] font-extrabold shadow-[0_6px_28px_rgba(232,64,37,.45)] hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(232,64,37,.55)] transition animate-[pulsefire_2.5s_infinite]">
              <span dangerouslySetInnerHTML={{ __html: WA_SVG(18) }} />Cotizar GRATIS ahora
            </a>
            <a href="#destinos" className="inline-flex items-center gap-2 bg-white/12 text-white px-7 py-4 rounded-full text-[15px] font-bold border-[1.5px] border-white/30 hover:bg-white/20 transition">Ver destinos y precios →</a>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,.28)] p-7 relative animate-[floatcard_6s_ease-in-out_infinite] max-w-[480px] mx-auto lg:mx-0">
          <p className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#4B5680] mb-4">🔥 Destinos populares</p>
          <div className="flex flex-col gap-2.5 mb-5">
            {[{bandera:"🇪🇸",ciudad:"Madrid",tipo:"Migratorio",precio:799,hot:true,fire:"MÁS VENDIDO"},{bandera:"🇩🇴",ciudad:"Punta Cana",tipo:"Turístico",precio:799},{bandera:"🇮🇹",ciudad:"Roma",tipo:"Turístico",precio:1199},{bandera:"🇲🇽",ciudad:"Cancún",tipo:"Turístico",precio:749}].map((d)=>(
              <a key={d.ciudad} href={cotLink(d.ciudad,d.tipo,d.precio)} target="_blank" rel="noopener" className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition hover:scale-[1.02] ${d.hot?"bg-gradient-to-br from-[#FFF4F2] to-[#FFE8E4] border border-[#FF4D2E]/15":"bg-[#F4F6FB] hover:bg-[#EFF6FF]"}`}>
                <div className="flex items-center gap-2.5"><span className="text-[22px]">{d.bandera}</span><div><div className="text-[14px] font-bold text-[#0D1F3C]">{d.ciudad}</div><div className="text-[11px] text-[#4B5680] font-medium">{d.tipo}</div></div></div>
                <div className="text-right"><div className="text-[9px] font-bold uppercase text-[#4B5680] opacity-60">desde</div><div className="text-[20px] font-extrabold text-[#0D1F3C] tabular-nums">${d.precio.toLocaleString()}</div>{d.fire&&<div className="text-[9px] font-extrabold text-[#FF4D2E] uppercase tracking-wide">{d.fire}</div>}</div>
              </a>
            ))}
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener" className="w-full py-3.5 bg-[#059669] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-[#10B981] transition">
            <span dangerouslySetInnerHTML={{ __html: WA_SVG(16) }} />Obtener mi cotización GRATIS
          </a>
          <p className="text-center text-[11px] text-[#4B5680] mt-2.5"><span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse mr-1"/>3 asesores disponibles ahora</p>
        </div>
      </div>
    </header>
  );
}
