import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";
import Link from "next/link";
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

          {/* Destinos Internacionales */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
              Destinos Internacionales
            </h4>
            <div className="space-y-2.5 text-xs">
              <Link href="/directorio#buscador" className="block text-amber-300 hover:text-amber-200 font-bold transition-colors">
                🔍 Buscador Oficial (+10,000 Programas)
              </Link>
              <Link href="/guia-europa" className="block text-sky-300 hover:text-white font-bold transition-colors">
                🇪🇺 Guía Europa 2026 (BOE 122€ & Verificador PNR)
              </Link>
              <Link href="/espana" className="block text-slate-300 hover:text-white transition-colors">
                Vuelos y Paquetes a España (Desde $890)
              </Link>
              <Link href="/europa-turquia" className="block text-slate-300 hover:text-white transition-colors">
                Circuitos a Europa & Turquía Sin Visa
              </Link>
              <Link href="/caribe" className="block text-slate-300 hover:text-white transition-colors">
                Caribe Todo Incluido (Punta Cana & Cancún)
              </Link>
              <Link href="/destinos/punta-cana" className="block text-slate-300 hover:text-white transition-colors">
                Paquete Punta Cana 5D/4N Resort 5★
              </Link>
              <Link href="/destinos/cancun" className="block text-slate-300 hover:text-white transition-colors">
                Paquete Cancún & Riviera Maya 5D/4N
              </Link>
              <Link href="/paquetes/panama-medellin" className="block text-slate-300 hover:text-white transition-colors">
                Combinado Panamá + Medellín 2026
              </Link>
            </div>
          </div>

          {/* Perú, Visas & Servicios */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
              Perú & Servicios
            </h4>
            <div className="space-y-2.5 text-xs">
              <Link href="/ofertas" className="block text-slate-300 hover:text-white transition-colors">
                Ofertas y Preventas con 50%
              </Link>
              <Link href="/cusco" className="block text-slate-300 hover:text-white transition-colors">
                Cusco & Machu Picchu (3 a 6 Días)
              </Link>
              <Link href="/peru" className="block text-slate-300 hover:text-white transition-colors">
                Playas del Norte, Arequipa & Selva
              </Link>
              <Link href="/cruceros" className="block text-slate-300 hover:text-white transition-colors">
                Cruceros por el Caribe y Sudamérica
              </Link>
              <Link href="/visas" className="block text-slate-300 hover:text-white transition-colors">
                Asesoría de Visas (EE.UU., Canadá & Schengen)
              </Link>
              <Link href="/seguros" className="block text-slate-300 hover:text-white transition-colors">
                Seguro de Viaje Schengen 30.000€
              </Link>
              <Link href="/colegios" className="block text-slate-300 hover:text-white transition-colors">
                Viajes de Promoción Escolar y Grupos
              </Link>
              <Link href="/blog" className="block text-slate-300 hover:text-white transition-colors">
                Guías y Consejos de Viaje
              </Link>
              <Link href="/politicas" className="block text-slate-300 hover:text-white transition-colors">
                Términos, Condiciones y Políticas
              </Link>
            </div>
          </div>

          {/* Contáctanos */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
              Sede Central & Contacto
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
        <div className="border-t border-slate-800 pt-8 space-y-3">
          <p className="text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
            * Tarifas referenciales expresadas en dólares estadounidenses (US$). Incluyen impuestos y cargos obligatorios según el programa detallado. Tarifas sujetas a disponibilidad aérea/hotelera y condiciones aplicables según fecha exacta de salida (Temporada 2026).
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3 text-center sm:text-left">
            <span>&copy; 2026 Cityland Travel E.I.R.L. · RUC: 20614914239 · Todos los derechos reservados.</span>
            <span>Lima, Perú · Agencia de Viajes y Turismo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
