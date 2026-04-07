import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";
import { WA_LINK } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white/60">
      {/* Wave */}
      <div className="w-full overflow-hidden leading-[0] bg-white">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8 md:h-12 block">
          <path d="M0,30 C300,55 900,5 1200,30 L1200,60 L0,60 Z" fill="#0a1628" />
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 pt-4 pb-12">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="bg-white/95 rounded-lg px-3 py-1.5 inline-flex mb-4">
                <div className="relative h-8 w-28">
                  <Image src="/logo.png" alt="Cityland Travel" fill className="object-contain object-left" />
                </div>
              </div>
              <p className="text-[12px] leading-relaxed mb-5 max-w-[240px]">
                Agencia de viajes con más de 10 años conectando peruanos con el mundo. +5,000 viajeros satisfechos.
              </p>
              {/* Payment */}
              <div className="mb-5">
                <p className="text-[10px] font-semibold text-white/25 uppercase tracking-wider mb-2">Medios de pago</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Visa", "Mastercard", "Yape", "Plin", "Transferencia", "Efectivo"].map((p) => (
                    <span key={p} className="bg-white/[0.05] px-2 py-1 rounded text-[10px] font-medium">{p}</span>
                  ))}
                </div>
              </div>
              {/* Social */}
              <div className="flex gap-2">
                {[
                  { label: "Facebook", href: "https://facebook.com/citylandtravel", icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                  { label: "Instagram", href: "https://instagram.com/citylandtravel", icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                  { label: "TikTok", href: "https://tiktok.com/@citylandtravel", icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.89 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.14 15.67 6.34 6.34 0 0 0 9.48 22a6.34 6.34 0 0 0 6.34-6.34V9.09a8.16 8.16 0 0 0 3.77.92V6.69z"/></svg> },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/40 hover:bg-[#dc2626] hover:text-white transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Europa */}
            <div>
              <h5 className="text-[12px] font-bold text-white/90 mb-4 tracking-wider uppercase">Europa</h5>
              {["Paquete migratorio a España", "Vuelos a Madrid", "Vuelos a Barcelona", "Vuelos a Roma", "Vuelos a Milán", "Circuitos por Europa"].map((l) => (
                <a key={l} href="#destinos" className="block text-[12px] py-1.5 hover:text-white hover:translate-x-0.5 transition-all">{l}</a>
              ))}
            </div>

            {/* Caribe */}
            <div>
              <h5 className="text-[12px] font-bold text-white/90 mb-4 tracking-wider uppercase">Caribe & América</h5>
              {["Punta Cana todo incluido", "Paquetes a Cancún", "Viajes a Cartagena", "Río de Janeiro", "San Andrés", "Buenos Aires"].map((l) => (
                <a key={l} href="#destinos" className="block text-[12px] py-1.5 hover:text-white hover:translate-x-0.5 transition-all">{l}</a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-[12px] font-bold text-white/90 mb-4 tracking-wider uppercase">Contáctanos</h5>
              <div className="space-y-2.5 mb-5">
                <a href="#ubicacion" className="flex items-start gap-2 text-[12px] hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 mt-0.5 fill-none stroke-current stroke-2 shrink-0" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Av. Antúnez de Mayolo N. 814<br />Los Olivos, Lima</span>
                </a>
                <a href="tel:+51941551530" className="flex items-center gap-2 text-[12px] hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  +51 941 551 530
                </a>
                <div className="flex items-center gap-2 text-[12px]">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2 shrink-0" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Lun–Sáb: 9am–7pm
                </div>
                <div className="flex items-center gap-2 text-[12px]">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2 shrink-0" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11"/></svg>
                  RUC: 20614914239
                </div>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-[#25D366]/90 hover:bg-[#25D366] text-white px-4 py-2 rounded-lg text-[12px] font-bold transition-all"
              >
                <WhatsAppIcon size={14} />
                Escribirnos ahora
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-white/25 gap-2 text-center">
          <span>&copy; 2026 Cityland Travel · RUC: 20614914239 · Todos los derechos reservados.</span>
          <span>Hecho en Lima, Perú</span>
        </div>
      </div>
    </footer>
  );
}
