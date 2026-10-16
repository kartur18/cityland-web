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

          {/* Rutas Europa, Visas & Seguros */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
              Vuelos a Europa, Visas & Seguros
            </h4>
            <div className="space-y-2 text-xs">
              <a href="/espana" className="block text-slate-300 hover:text-white transition-colors">
                Paquete Migratorio a España (Desde $890 USD)
              </a>
              <a href="/vuelos/lima-madrid" className="block text-slate-300 hover:text-white transition-colors">
                Vuelos de Lima a Madrid (LIM → MAD)
              </a>
              <a href="/vuelos/madrid-lima" className="block text-slate-300 hover:text-white transition-colors">
                Vuelos de Madrid a Lima (MAD → LIM)
              </a>
              <a href="/vuelos/lima-barcelona" className="block text-slate-300 hover:text-white transition-colors">
                Vuelos de Lima a Barcelona (LIM → BCN)
              </a>
              <a href="/europa-turquia" className="block text-slate-300 hover:text-white transition-colors">
                Circuitos Europa 15D & Turquía Sin Visa
              </a>
              <a href="/visas" className="block text-slate-300 hover:text-white transition-colors">
                Trámite Visa Americana, Canadá & México
              </a>
              <a href="/seguros" className="block text-slate-300 hover:text-white transition-colors">
                Seguro Schengen 30.000€ & Internacional
              </a>
            </div>
          </div>

          {/* Rutas Caribe, Perú & Grupos */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
              Caribe, Rutas & Local
            </h4>
            <div className="space-y-2 text-xs">
              <a href="/caribe" className="block text-slate-300 hover:text-white transition-colors">
                Punta Cana, Cancún & Cartagena
              </a>
              <a href="/vuelos/lima-miami" className="block text-slate-300 hover:text-white transition-colors">
                Vuelos de Lima a Miami (LIM → MIA)
              </a>
              <a href="/vuelos/lima-buenos-aires" className="block text-slate-300 hover:text-white transition-colors">
                Vuelos Lima a Buenos Aires (Solo DNI)
              </a>
              <a href="/cusco" className="block text-slate-300 hover:text-white transition-colors">
                Cusco & Machu Picchu (3 a 6 Días)
              </a>
              <a href="/peru" className="block text-slate-300 hover:text-white transition-colors">
                Punta Sal, Máncora & Tarapoto
              </a>
              <a href="/agencia-de-viajes-los-olivos" className="block text-slate-300 hover:text-white transition-colors">
                Agencia de Viajes en Los Olivos
              </a>
              <a href="/agencia-de-viajes-lima-norte" className="block text-slate-300 hover:text-white transition-colors">
                Agencia de Viajes en Lima Norte
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

        {/* Directorio de Enlazado Interno SEO (Estilo Aerolínea para Indexación Rápida en Google) */}
        <div className="border-t border-slate-800/80 pt-8 pb-8 mb-6 space-y-6">
          <div>
            <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2.5">
              Rutas de Vuelos Nacionales e Internacionales
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-slate-400">
              <a href="/vuelos/lima-madrid" className="hover:text-white transition-colors">Vuelos Lima a Madrid</a>
              <a href="/vuelos/madrid-lima" className="hover:text-white transition-colors">Vuelos Madrid a Lima</a>
              <a href="/vuelos/lima-barcelona" className="hover:text-white transition-colors">Vuelos Lima a Barcelona</a>
              <a href="/vuelos/barcelona-lima" className="hover:text-white transition-colors">Vuelos Barcelona a Lima</a>
              <a href="/vuelos/lima-valencia" className="hover:text-white transition-colors">Vuelos Lima a Valencia</a>
              <a href="/vuelos/lima-malaga" className="hover:text-white transition-colors">Vuelos Lima a Málaga</a>
              <a href="/vuelos/lima-sevilla" className="hover:text-white transition-colors">Vuelos Lima a Sevilla</a>
              <a href="/vuelos/lima-bilbao" className="hover:text-white transition-colors">Vuelos Lima a Bilbao</a>
              <a href="/vuelos/lima-roma" className="hover:text-white transition-colors">Vuelos Lima a Roma</a>
              <a href="/vuelos/roma-lima" className="hover:text-white transition-colors">Vuelos Roma a Lima</a>
              <a href="/vuelos/lima-milan" className="hover:text-white transition-colors">Vuelos Lima a Milán</a>
              <a href="/vuelos/milan-lima" className="hover:text-white transition-colors">Vuelos Milán a Lima</a>
              <a href="/vuelos/lima-paris" className="hover:text-white transition-colors">Vuelos Lima a París</a>
              <a href="/vuelos/paris-lima" className="hover:text-white transition-colors">Vuelos París a Lima</a>
              <a href="/vuelos/lima-amsterdam" className="hover:text-white transition-colors">Vuelos Lima a Ámsterdam</a>
              <a href="/vuelos/lima-lisboa" className="hover:text-white transition-colors">Vuelos Lima a Lisboa</a>
              <a href="/vuelos/lima-frankfurt" className="hover:text-white transition-colors">Vuelos Lima a Frankfurt</a>
              <a href="/vuelos/lima-estambul" className="hover:text-white transition-colors">Vuelos Lima a Estambul</a>
              <a href="/vuelos/lima-miami" className="hover:text-white transition-colors">Vuelos Lima a Miami</a>
              <a href="/vuelos/miami-lima" className="hover:text-white transition-colors">Vuelos Miami a Lima</a>
              <a href="/vuelos/lima-orlando" className="hover:text-white transition-colors">Vuelos Lima a Orlando</a>
              <a href="/vuelos/lima-nueva-york" className="hover:text-white transition-colors">Vuelos Lima a Nueva York</a>
              <a href="/vuelos/lima-punta-cana" className="hover:text-white transition-colors">Vuelos Lima a Punta Cana</a>
              <a href="/vuelos/lima-cancun" className="hover:text-white transition-colors">Vuelos Lima a Cancún</a>
              <a href="/vuelos/lima-aruba" className="hover:text-white transition-colors">Vuelos Lima a Aruba</a>
              <a href="/vuelos/lima-panama" className="hover:text-white transition-colors">Vuelos Lima a Panamá</a>
              <a href="/vuelos/lima-cartagena" className="hover:text-white transition-colors">Vuelos Lima a Cartagena</a>
              <a href="/vuelos/lima-medellin" className="hover:text-white transition-colors">Vuelos Lima a Medellín</a>
              <a href="/vuelos/lima-bogota" className="hover:text-white transition-colors">Vuelos Lima a Bogotá</a>
              <a href="/vuelos/lima-san-andres" className="hover:text-white transition-colors">Vuelos Lima a San Andrés</a>
              <a href="/vuelos/lima-buenos-aires" className="hover:text-white transition-colors">Vuelos Lima a Buenos Aires</a>
              <a href="/vuelos/buenos-aires-lima" className="hover:text-white transition-colors">Vuelos Buenos Aires a Lima</a>
              <a href="/vuelos/lima-santiago" className="hover:text-white transition-colors">Vuelos Lima a Santiago</a>
              <a href="/vuelos/santiago-lima" className="hover:text-white transition-colors">Vuelos Santiago a Lima</a>
              <a href="/vuelos/lima-rio-de-janeiro" className="hover:text-white transition-colors">Vuelos Lima a Río de Janeiro</a>
              <a href="/vuelos/lima-sao-paulo" className="hover:text-white transition-colors">Vuelos Lima a São Paulo</a>
              <a href="/vuelos/lima-cusco" className="hover:text-white transition-colors">Vuelos Lima a Cusco</a>
              <a href="/vuelos/lima-arequipa" className="hover:text-white transition-colors">Vuelos Lima a Arequipa</a>
              <a href="/vuelos/lima-piura" className="hover:text-white transition-colors">Vuelos Lima a Piura y Máncora</a>
              <a href="/vuelos/lima-tarapoto" className="hover:text-white transition-colors">Vuelos Lima a Tarapoto</a>
              <a href="/vuelos/lima-iquitos" className="hover:text-white transition-colors">Vuelos Lima a Iquitos</a>
              <a href="/vuelos/lima-puno" className="hover:text-white transition-colors">Vuelos Lima a Puno</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Paquetes Turísticos y Especiales
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
                <a href="/paquetes" className="hover:text-white transition-colors">Catálogo de Paquetes</a>
                <a href="/promociones" className="hover:text-white transition-colors">Ofertas Vigentes</a>
                <a href="/nacionales" className="hover:text-white transition-colors">Viajes Nacionales</a>
                <a href="/cruceros" className="hover:text-white transition-colors">Cruceros</a>
                <a href="/colegios" className="hover:text-white transition-colors">Viajes de Promoción</a>
                <a href="/quinceaneras" className="hover:text-white transition-colors">Viajes de 15 Años</a>
                <a href="/luna-de-miel" className="hover:text-white transition-colors">Luna de Miel</a>
                <a href="/empresas" className="hover:text-white transition-colors">Viajes Corporativos</a>
                <a href="/destinos/punta-cana" className="hover:text-white transition-colors">Paquete Punta Cana</a>
                <a href="/destinos/cancun" className="hover:text-white transition-colors">Paquete Cancún</a>
                <a href="/destinos/cartagena" className="hover:text-white transition-colors">Paquete Cartagena</a>
                <a href="/destinos/medellin" className="hover:text-white transition-colors">Paquete Medellín</a>
                <a href="/destinos/san-andres" className="hover:text-white transition-colors">Paquete San Andrés</a>
                <a href="/destinos/aruba" className="hover:text-white transition-colors">Paquete Aruba</a>
                <a href="/destinos/curazao" className="hover:text-white transition-colors">Paquete Curazao</a>
                <a href="/destinos/panama" className="hover:text-white transition-colors">Paquete Panamá</a>
                <a href="/destinos/varadero-habana" className="hover:text-white transition-colors">Paquete Varadero</a>
                <a href="/destinos/rio-de-janeiro" className="hover:text-white transition-colors">Paquete Río de Janeiro</a>
                <a href="/destinos/buenos-aires" className="hover:text-white transition-colors">Paquete Buenos Aires</a>
                <a href="/destinos/santiago-chile" className="hover:text-white transition-colors">Paquete Santiago</a>
                <a href="/destinos/iguazu-cataratas" className="hover:text-white transition-colors">Cataratas del Iguazú</a>
                <a href="/destinos/miami-orlando" className="hover:text-white transition-colors">Miami & Orlando</a>
                <a href="/destinos/madrid" className="hover:text-white transition-colors">Madrid & Barcelona</a>
                <a href="/destinos/europa-clasica" className="hover:text-white transition-colors">Circuito Europa</a>
                <a href="/destinos/turquia" className="hover:text-white transition-colors">Estambul & Capadocia</a>
                <a href="/destinos/dubai-emiratos" className="hover:text-white transition-colors">Dubái & Abu Dhabi</a>
                <a href="/destinos/cusco-magico" className="hover:text-white transition-colors">Cusco & Machu Picchu</a>
                <a href="/destinos/arequipa-colca" className="hover:text-white transition-colors">Arequipa & Colca</a>
                <a href="/destinos/mancora-vichayito" className="hover:text-white transition-colors">Máncora & Vichayito</a>
                <a href="/destinos/tarapoto-selva" className="hover:text-white transition-colors">Tarapoto & Laguna Azul</a>
                <a href="/paquetes/panama-medellin" className="hover:text-white transition-colors">Combinado Panamá + Medellín</a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Atención en Lima por Distrito
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
                <a href="/agencia-de-viajes-lima" className="hover:text-white transition-colors">Agencia de Viajes en Lima</a>
                <a href="/agencia-de-viajes-los-olivos" className="hover:text-white transition-colors">Agencia en Los Olivos</a>
                <a href="/agencia-de-viajes-lima-norte" className="hover:text-white transition-colors">Agencia en Lima Norte</a>
                <a href="/agencia-de-viajes-independencia" className="hover:text-white transition-colors">Agencia en Independencia (MegaPlaza)</a>
                <a href="/agencia-de-viajes-san-martin-de-porres" className="hover:text-white transition-colors">Agencia en San Martín de Porres</a>
                <a href="/agencia-de-viajes-comas" className="hover:text-white transition-colors">Agencia en Comas y Carabayllo</a>
                <a href="/agencia-de-viajes-san-miguel" className="hover:text-white transition-colors">Agencia en San Miguel y Pueblo Libre</a>
                <a href="/agencia-de-viajes-miraflores" className="hover:text-white transition-colors">Agencia en Miraflores y San Isidro</a>
                <a href="/agencia-de-viajes-surco" className="hover:text-white transition-colors">Agencia en Surco, San Borja y La Molina</a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Guías y Requisitos de Viaje
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
                <a href="/blog/requisitos-viajar-espana-desde-peru-2026" className="hover:text-white transition-colors">Requisitos para viajar a España 2026</a>
                <a href="/blog/carta-invitacion-espana-peru-requisitos" className="hover:text-white transition-colors">Carta de Invitación España</a>
                <a href="/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje" className="hover:text-white transition-colors">Bolsa de Viaje España</a>
                <a href="/blog/seguro-schengen-30000-euros-peru-precio" className="hover:text-white transition-colors">Seguro Schengen 30.000€</a>
                <a href="/blog/equipaje-permitido-iberia-air-europa-plus-ultra" className="hover:text-white transition-colors">Equipaje en Iberia y Air Europa</a>
                <a href="/blog/destinos-internacionales-solo-con-dni-peruanos" className="hover:text-white transition-colors">Viajar solo con DNI</a>
                <a href="/blog/como-tramitar-visa-americana-b1-b2-peru" className="hover:text-white transition-colors">Cómo tramitar Visa Americana</a>
                <a href="/blog/mejor-epoca-viajar-punta-cana-cancun" className="hover:text-white transition-colors">Mejor época Punta Cana y Cancún</a>
                <a href="/blog/como-encontrar-vuelos-economicos-europa-caribe" className="hover:text-white transition-colors">Consejos vuelos económicos</a>
                <a href="/blog/viajes-promocion-escolar-cusco-caribe-consejos" className="hover:text-white transition-colors">Guía viajes de promoción</a>
                <a href="/blog/temporada-baja-viajar-machu-picchu-cusco" className="hover:text-white transition-colors">Mejor mes para Machu Picchu</a>
                <a href="/politicas" className="hover:text-white transition-colors">Términos y Políticas</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 space-y-3">
          <p className="text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
            * Tarifas referenciales expresadas en dólares estadounidenses (US$). Incluyen impuestos y cargos obligatorios. Tarifa sujeta a disponibilidad y condiciones aplicables según fecha de viaje y cupos aéreos. Tarifas verificadas y actualizadas en Octubre 2026.
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
