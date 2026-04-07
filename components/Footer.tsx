import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Footer() {
  return (
    <footer className="bg-[#0D1F3C] text-white/70 pt-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-8 mb-10">
            <div>
              <h4 className="font-[family-name:var(--font-bebas)] text-[28px] text-white tracking-wide mb-3">Cityland Travel</h4>
              <p className="text-[13px] leading-relaxed mb-4">Agencia de viajes peruana. Vuelos y paquetes a Europa, Caribe, Sudamérica y todo el mundo desde 2015. Más de 5,000 viajeros satisfechos.</p>
              <div className="flex flex-wrap gap-1.5">
                {["💳 Visa","💳 Mastercard","📱 Yape","📱 Plin","🏦 Transferencia"].map((p)=>(
                  <span key={p} className="bg-white/8 px-2.5 py-1 rounded-md text-[11px] font-semibold">{p}</span>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-sm font-extrabold text-white mb-3.5 tracking-wide">Europa</h5>
              {["Vuelos a Madrid","Vuelos a Barcelona","Vuelos a Roma","Vuelos a Milán","Paquete migratorio"].map((l)=>(
                <a key={l} href="#destinos" className="block text-[13px] py-1 hover:text-white hover:pl-1.5 transition-all">{l}</a>
              ))}
            </div>
            <div>
              <h5 className="text-sm font-extrabold text-white mb-3.5 tracking-wide">Caribe & América</h5>
              {["Punta Cana todo incluido","Paquetes a Cartagena","Viajes a San Andrés","Viajes a Cancún","Vuelos a Río de Janeiro"].map((l)=>(
                <a key={l} href="#destinos" className="block text-[13px] py-1 hover:text-white hover:pl-1.5 transition-all">{l}</a>
              ))}
            </div>
            <div>
              <h5 className="text-sm font-extrabold text-white mb-3.5 tracking-wide">Contacto</h5>
              <a href="#ubicacion" className="block text-[13px] py-1 hover:text-white transition">📍 Av. Antúnez de Mayolo N. 814, Los Olivos</a>
              <a href="tel:+51941551530" className="block text-[13px] py-1 hover:text-white transition">📞 +51 941 551 530</a>
              <a href="https://wa.me/51941551530" target="_blank" rel="noopener" className="block text-[13px] py-1 hover:text-white transition">💬 WhatsApp</a>
              <a href="#ubicacion" className="block text-[13px] py-1 hover:text-white transition">🕐 Lun–Sáb: 9am–7pm</a>
              <span className="block text-[13px] py-1">🏢 RUC: 20614914239</span>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="border-t border-white/10 py-5 flex justify-between text-xs opacity-50 flex-wrap gap-2">
          <span>© 2026 Cityland Travel · RUC: 20614914239 · Todos los derechos reservados.</span>
          <span>Los Olivos, Lima, Perú</span>
        </div>
      </div>
    </footer>
  );
}
