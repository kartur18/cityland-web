import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";
import { WA_LINK, TELEFONO, TELEFONO_FORMATEADO } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white/70 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand & Legal Info */}
          <div className="lg:col-span-4">
            <div className="relative h-16 sm:h-20 w-48 sm:w-60 mb-5">
              <Image
                src="/logo-transparent.png"
                alt="Cityland Travel - Agencia de Viajes"
                fill
                sizes="(max-width: 640px) 192px, 240px"
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed mb-5 max-w-sm">
              Agencia de viajes física y formal con más de 10 años de experiencia conectando a miles de familias y viajeros peruanos con el mundo.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 mb-6">
              <p><strong className="text-white">Razón Social:</strong> Cityland Travel E.I.R.L.</p>
              <p><strong className="text-white">RUC:</strong> 20614914239</p>
              <p><strong className="text-white">Oficina:</strong> Av. Antúnez de Mayolo N. 814, Los Olivos, Lima</p>
            </div>

            {/* Medios de pago */}
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Medios de pago aceptados
              </p>
              <div className="flex flex-wrap gap-2">
                {["BCP", "BBVA", "Interbank", "Yape", "Plin", "Visa", "Mastercard", "Efectivo"].map((p) => (
                  <span key={p} className="bg-white/10 px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-200">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Rutas Europa */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
              Europa & Migratorio
            </h4>
            <div className="space-y-2 text-xs">
              <a href="#migra" className="block text-slate-300 hover:text-white transition-colors">
                Paquete migratorio a España
              </a>
              <a href="#migra" className="block text-slate-300 hover:text-white transition-colors">
                Vuelos Lima ➔ Madrid (Directos)
              </a>
              <a href="#migra" className="block text-slate-300 hover:text-white transition-colors">
                Vuelos Lima ➔ Barcelona
              </a>
              <a href="#migra" className="block text-slate-300 hover:text-white transition-colors">
                Vuelos Lima ➔ Roma & Milán
              </a>
              <a href="#servicios" className="block text-slate-300 hover:text-white transition-colors">
                Seguro médico Schengen 30.000€
              </a>
              <a href="#paquetes" className="block text-slate-300 hover:text-white transition-colors">
                Circuitos por Europa 15 Días
              </a>
            </div>
          </div>

          {/* Rutas Caribe & América */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
              Caribe & América
            </h4>
            <div className="space-y-2 text-xs">
              <a href="/caribe#punta-cana" className="block text-slate-300 hover:text-white transition-colors">
                Punta Cana All Inclusive
              </a>
              <a href="/caribe#cancun" className="block text-slate-300 hover:text-white transition-colors">
                Cancún & Riviera Maya
              </a>
              <a href="/caribe#cartagena" className="block text-slate-300 hover:text-white transition-colors">
                Cartagena de Indias
              </a>
              <a href="/caribe#medellin" className="block text-slate-300 hover:text-white transition-colors">
                Medellín & Guatapé
              </a>
              <a href="/caribe#miami-orlando" className="block text-slate-300 hover:text-white transition-colors">
                Miami & Florida
              </a>
              <a href="/caribe#rio-de-janeiro" className="block text-slate-300 hover:text-white transition-colors">
                Río de Janeiro
              </a>
            </div>
          </div>

          {/* Contáctanos */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
              Atención Presencial & Remota
            </h4>
            <div className="space-y-3 mb-6 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500 shrink-0 mt-0.5 fill-current">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Av. Antúnez de Mayolo N. 814, Los Olivos, Lima</span>
              </div>
              
              <a href={`tel:${TELEFONO}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <PhoneIcon className="w-4 h-4 fill-current text-slate-400 shrink-0" />
                <span>{TELEFONO_FORMATEADO}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2 shrink-0">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Lunes a Sábado: 9:00 AM – 7:00 PM</span>
              </div>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs font-bold shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <WhatsAppIcon size={16} />
              <span>Escribir al WhatsApp Oficial</span>
            </a>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3 text-center sm:text-left">
          <span>&copy; 2026 Cityland Travel E.I.R.L. · RUC: 20614914239 · Todos los derechos reservados.</span>
          <span>Lima, Perú · Agencia de Viajes y Turismo</span>
        </div>
      </div>
    </footer>
  );
}
