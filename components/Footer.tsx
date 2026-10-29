import Image from "next/image";
import Link from "next/link";
import { WA_LINK, TELEFONO, TELEFONO_FORMATEADO, OFICINAS } from "@/components/constantes";
import CotizadorWhatsApp from "@/components/CotizadorWhatsApp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import { formatoUSD } from "@/lib/formato-precio";
import { tarifasMigratorio } from "@/lib/precios-migratorio";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white/70 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-12">
        {/* Último empujón antes del pie: el cotizador aparece en todas las páginas que usan el Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12 pb-12 border-b border-slate-800">
          <div className="lg:col-span-5">
            <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance">
              ¿A dónde quieres viajar?
            </p>
            <p className="text-sm text-slate-300 mt-2">
              Cuéntanos destino, mes y cuántos viajan. Te respondemos por WhatsApp con precio y fechas.
            </p>
          </div>
          <div className="lg:col-span-7">
            <CotizadorWhatsApp titulo="Cotiza en 30 segundos" origen="Cotizador pie" />
          </div>
        </div>

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
              Agencia de viajes formal con dos oficinas en Los Olivos. Cotizamos y emitimos vuelos, paquetes y seguros con comprobante electrónico.
            </p>

            <div className="space-y-3 text-xs text-slate-400 mb-6">
              {OFICINAS.map((o) => (
                <p key={o.ruc}>
                  <strong className="text-white block">{o.direccion}</strong>
                  {o.razonSocial} · RUC {o.ruc}
                </p>
              ))}
              <Link href="/canales-oficiales" className="inline-block text-emerald-300 hover:text-emerald-200 font-semibold">
                Verifica nuestros canales oficiales
              </Link>
            </div>

            {/* Medios de pago */}
            <div className="mb-6">
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

            {/* Redes Sociales Oficiales (SEO Entity Graph rel="me") */}
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Síguenos en redes
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://www.facebook.com/citylandtraveloficial"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="Facebook Oficial de Cityland Travel (+22 mil seguidores)"
                  className="inline-flex items-center gap-2 bg-[#1877F2]/15 hover:bg-[#1877F2]/30 border border-[#1877F2]/40 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-[#3b82f6]" aria-hidden="true">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                  <span>Facebook · 22K</span>
                </a>
                <a
                  href="https://www.instagram.com/citylandtravel/"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="Instagram Oficial de Cityland Travel (@citylandtravel)"
                  className="inline-flex items-center gap-2 bg-pink-500/15 hover:bg-pink-500/30 border border-pink-500/40 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-pink-400" aria-hidden="true">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  </svg>
                  <span>Instagram · @citylandtravel</span>
                </a>
              </div>
            </div>
          </div>

          {/* Destinos Internacionales */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
              Destinos Internacionales
            </h4>
            <div className="space-y-2.5 text-xs">
              <Link href="/paquetes-migratorios" className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-bold transition-colors">
                <FlagIcon pais="Europa" className="w-3.5 h-2.5 shrink-0" />
                <span>Paquetes Migratorios (Solo ida desde $699)</span>
              </Link>
              <Link href="/directorio#buscador" className="block text-slate-200 hover:text-white font-semibold transition-colors">
                🔍 Buscador de paquetes y destinos
              </Link>
              <Link href="/guia-europa" className="inline-flex items-center gap-1.5 text-sky-300 hover:text-white font-bold transition-colors">
                <FlagIcon pais="Europa" className="w-3.5 h-2.5" />
                <span>Guía Europa 2026 (BOE 122€ & Verificador PNR)</span>
              </Link>
              <Link href="/paquetes-a-espana" className="block text-slate-300 hover:text-white transition-colors">
                Paquetes turísticos a España (Barcelona, Andalucía, Islas)
              </Link>
              <Link href="/pasajes-a-espana" className="block text-slate-300 hover:text-white transition-colors">
                Pasajes a España ida y vuelta (Madrid y Barcelona)
              </Link>
              <Link href="/pasaje-solo-ida-a-espana" className="block text-slate-300 hover:text-white transition-colors">
                Pasaje solo ida a España
              </Link>
              <Link href="/pasajes-a-barcelona" className="block text-slate-300 hover:text-white transition-colors">
                Pasajes a Barcelona desde Lima
              </Link>
              <Link href="/espana" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                <FlagIcon pais="España" className="w-3.5 h-2.5" />
                <span>Paquete Migratorio España (Solo ida desde $699)</span>
              </Link>
              <Link href="/italia" className="flex items-center gap-1.5 text-emerald-300 hover:text-white font-semibold transition-colors">
                <FlagIcon pais="Italia" className="w-3.5 h-2.5" />
                <span>Paquete Migratorio Italia (Solo ida desde {formatoUSD(tarifasMigratorio("Italia").promo)})</span>
              </Link>
              <Link href="/francia" className="flex items-center gap-1.5 text-sky-200 hover:text-white font-semibold transition-colors">
                <FlagIcon pais="Francia" className="w-3.5 h-2.5 shrink-0" />
                <span>Paquete Migratorio Francia (Solo ida desde {formatoUSD(tarifasMigratorio("Francia").promo)})</span>
              </Link>
              <Link href="/europa-turquia" className="block text-slate-300 hover:text-white transition-colors">
                Circuitos a Europa & Turquía Sin Visa
              </Link>
              <Link href="/circuitos" className="block text-slate-300 hover:text-white transition-colors">
                Circuitos por el mundo (+200 programas)
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
              <Link href="/paquetes-todo-incluido" className="block text-slate-300 hover:text-white transition-colors">
                Paquetes Todo Incluido
              </Link>
              <Link href="/paquetes-a-punta-cana" className="block text-slate-300 hover:text-white transition-colors">
                Paquetes a Punta Cana
              </Link>
              <Link href="/paquetes-a-mexico" className="block text-slate-300 hover:text-white transition-colors">
                Paquetes a Cancún y México
              </Link>
              <Link href="/paquetes-a-colombia" className="block text-slate-300 hover:text-white transition-colors">
                Paquetes a Colombia
              </Link>
              <Link href="/paquetes-a-brasil" className="block text-slate-300 hover:text-white transition-colors">
                Paquetes a Brasil
              </Link>
              <Link href="/paquetes-a-argentina" className="block text-slate-300 hover:text-white transition-colors">
                Paquetes a Argentina
              </Link>
              <Link href="/paquetes-a-chile" className="block text-slate-300 hover:text-white transition-colors">
                Paquetes a Chile
              </Link>
              <Link href="/paquetes-a-estados-unidos" className="block text-slate-300 hover:text-white transition-colors">
                Paquetes a Estados Unidos
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
              <Link href="/institutos" className="block text-slate-300 hover:text-white transition-colors">
                Viajes de Promoción para Institutos
              </Link>
              <Link href="/viajes-adultos-mayores" className="block text-slate-300 hover:text-white transition-colors">
                Viajes para Adultos Mayores
              </Link>
              <Link href="/full-days" className="block text-slate-300 hover:text-white transition-colors">
                Full Days desde Lima
              </Link>
              <Link href="/feriados-largos" className="block text-slate-300 hover:text-white transition-colors">
                Feriados Largos 2026–2027
              </Link>
              <Link href="/hoteles" className="block text-slate-300 hover:text-white transition-colors">
                Reserva de Hoteles
              </Link>
              <Link href="/tours" className="block text-slate-300 hover:text-white transition-colors">
                Tours en el Perú y el Mundo
              </Link>
              <Link href="/traslados" className="block text-slate-300 hover:text-white transition-colors">
                Traslados Aeropuerto–Hotel
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
              {OFICINAS.map((o) => (
                <div key={o.ruc} className="flex items-start gap-2.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500 shrink-0 mt-0.5 fill-current" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>{o.direccion}</span>
                </div>
              ))}
              
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
            * Tarifas referenciales expresadas en dólares estadounidenses (US$). Precio referencial por persona; varía según fecha y disponibilidad. Impuestos y tasas según fecha y aerolínea. Sujetas a disponibilidad aérea/hotelera y condiciones aplicables según fecha exacta de salida (Temporada 2026).
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3 text-center sm:text-left">
            <span>&copy; 2026 Cityland Travel · Cityland Group E.I.R.L. (RUC 20614914239) y Cityland Travel S.A.C. (RUC 20611406305)</span>
            <span>Lima, Perú · Agencia de Viajes y Turismo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
