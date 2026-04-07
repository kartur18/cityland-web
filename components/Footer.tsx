import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";
import { WA_LINK } from "@/components/constantes";

export default function Footer() {
  return (
    <footer className="bg-[#0b1f3d] text-white/70" id="contacto">
      {/* Wave separator - bridges the section above to footer */}
      <div className="w-full overflow-hidden leading-[0] bg-white">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-10 md:h-14 block">
          <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" fill="#0b1f3d" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 pt-6 pb-14">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.3fr] gap-10 mb-12">
            {/* Columna marca */}
            <div>
              <div className="relative h-14 w-44 mb-4">
                <Image
                  src="/logo.png"
                  alt="Cityland Travel"
                  fill
                  className="object-contain object-left brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-[13px] leading-relaxed mb-5 max-w-[260px]">
                Agencia de viajes peruana con más de 10 años conectando peruanos con el mundo. Más de 5,000 viajeros satisfechos.
              </p>
              {/* Métodos de pago */}
              <div className="mb-5">
                <p className="text-[11px] font-extrabold text-white/40 uppercase tracking-wider mb-2">Medios de pago</p>
                <div className="flex flex-wrap gap-1.5">
                  {["💳 Visa", "💳 Mastercard", "📱 Yape", "📱 Plin", "🏦 Transferencia", "💵 Efectivo"].map((p) => (
                    <span key={p} className="bg-white/8 px-2.5 py-1 rounded-md text-[11px] font-semibold hover:bg-white/12 transition-colors">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              {/* Redes sociales */}
              <div className="flex gap-3">
                {[
                  { label: "Facebook", href: "https://facebook.com/citylandtravel", icon: "f" },
                  { label: "Instagram", href: "https://instagram.com/citylandtravel", icon: "ig" },
                  { label: "TikTok", href: "https://tiktok.com/@citylandtravel", icon: "tt" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-[11px] font-extrabold text-white/60 hover:bg-[#d30000] hover:text-white transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Europa */}
            <div>
              <h5 className="text-[13px] font-extrabold text-white mb-4 tracking-wide">Europa</h5>
              {[
                "Paquete migratorio a España",
                "Vuelos a Madrid",
                "Vuelos a Barcelona",
                "Vuelos a Roma",
                "Vuelos a Milán",
                "Circuitos por Europa",
              ].map((l) => (
                <a key={l} href="#destinos" className="block text-[13px] py-1.5 hover:text-white hover:translate-x-1 transition-all duration-150">
                  {l}
                </a>
              ))}
            </div>

            {/* Caribe & América */}
            <div>
              <h5 className="text-[13px] font-extrabold text-white mb-4 tracking-wide">Caribe &amp; América</h5>
              {[
                "Punta Cana todo incluido",
                "Paquetes a Cancún",
                "Viajes a Cartagena",
                "Río de Janeiro",
                "San Andrés",
                "Buenos Aires",
              ].map((l) => (
                <a key={l} href="#destinos" className="block text-[13px] py-1.5 hover:text-white hover:translate-x-1 transition-all duration-150">
                  {l}
                </a>
              ))}
            </div>

            {/* Contacto */}
            <div>
              <h5 className="text-[13px] font-extrabold text-white mb-4 tracking-wide">Contáctanos</h5>
              <div className="space-y-3 mb-5">
                <a href="#ubicacion" className="flex items-start gap-2.5 text-[13px] hover:text-white transition-colors">
                  <span className="mt-0.5">📍</span>
                  <span>Av. Antúnez de Mayolo N. 814<br />Los Olivos, Lima</span>
                </a>
                <a href="tel:+51941551530" className="flex items-center gap-2.5 text-[13px] hover:text-white transition-colors">
                  <span>📞</span> +51 941 551 530
                </a>
                <a href="https://wa.me/51941551530" target="_blank" rel="noopener" className="flex items-center gap-2.5 text-[13px] hover:text-white transition-colors">
                  <span>💬</span> WhatsApp 24/7
                </a>
                <div className="flex items-center gap-2.5 text-[13px]">
                  <span>🕐</span> Lun–Sáb: 9am–7pm
                </div>
                <div className="flex items-center gap-2.5 text-[13px]">
                  <span>🏢</span> RUC: 20614914239
                </div>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-[#25D366]/90 hover:bg-[#25D366] text-white px-5 py-2.5 rounded-full text-[13px] font-extrabold transition-all"
              >
                🟢 Escribirnos ahora
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Divider + copyright */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center text-[12px] opacity-50 gap-2 text-center">
          <span>© 2026 Cityland Travel · RUC: 20614914239 · Todos los derechos reservados.</span>
          <span>Diseñado con ❤️ en Lima, Perú</span>
        </div>
      </div>
    </footer>
  );
}
