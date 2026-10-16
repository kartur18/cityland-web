"use client";

import { buildWaUrl, PRECIO_DESDE_EUROPA } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";

const SERVICIOS_COMPACTOS = [
  {
    id: "all-inclusive",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-600 fill-none stroke-current stroke-2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    badge: "Más Solicitado",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    titulo: "Paquetes All Inclusive",
    subtitulo: "Caribe, Cancún y Colombia",
    descripcion: "Vuelo ida y vuelta desde Lima + Resort 4★ y 5★ frente al mar + Comidas y bebidas ilimitadas 24h + Traslados y tours.",
    precio: "Desde $569 USD",
    cat: "caribe" as const,
    tipo: "All Inclusive",
  },
  {
    id: "europa-migra",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600 fill-none stroke-current stroke-2">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    badge: "Especialidad Cityland",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    titulo: "Europa & Paquete Migratorio",
    subtitulo: "España, Italia y Francia",
    descripcion: "Boleto confirmado + Seguro Schengen obligatorio (30.000€) + Hotel de tránsito y asesoría para migraciones.",
    precio: `Desde $${PRECIO_DESDE_EUROPA} USD`,
    cat: "europa" as const,
    tipo: "Europa / Migratorio",
  },
  {
    id: "exoticos",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-purple-600 fill-none stroke-current stroke-2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    badge: "Sin Visa",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    titulo: "Turquía & Circuitos Exóticos",
    subtitulo: "Estambul y Capadocia en Globo",
    descripcion: "Vuelos I/V + Hoteles 4★ y 5★ + Desayunos y cenas + Crucero Bósforo y vuelo en globo al amanecer.",
    precio: "Desde $1,690 USD",
    cat: "general" as const,
    tipo: "Circuito Exótico",
  },
  {
    id: "vuelos",
    icon: <PlaneIcon className="w-5 h-5 text-emerald-600 fill-none stroke-current stroke-2" />,
    badge: "Con Equipaje",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    titulo: "Boletos Aéreos Internacionales",
    subtitulo: "LATAM, Iberia, Air Europa y Copa",
    descripcion: "Emisión de pasajes directos y con escala desde Lima con equipaje de mano y bodega incluido. Sin sorpresas.",
    precio: "Cotiza tu fecha",
    cat: "general" as const,
    tipo: "Vuelo Internacional",
  },
  {
    id: "seguros",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-600 fill-none stroke-current stroke-2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    badge: "Exigido en Europa",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    titulo: "Seguro de Asistencia Médica",
    subtitulo: "Cobertura Schengen 30.000€",
    descripcion: "Tarjeta de asistencia médica internacional válida para control migratorio, emergencias y extravío de maletas.",
    precio: "Desde $45 USD",
    cat: "general" as const,
    tipo: "Seguro Médico",
  },
  {
    id: "facilidades",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-600 fill-none stroke-current stroke-2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    badge: "Reserva Segura",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    titulo: "Separa con el 50% de Inicial",
    subtitulo: "Cancela el saldo antes de volar",
    descripcion: "Congela tarifas y asegura tus cupos con el 50% de inicial vía Yape, Plin, BCP, BBVA o tarjetas de crédito en cuotas.",
    precio: "50% de Inicial",
    cat: "general" as const,
    tipo: "Facilidad de Pago",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado sin texto de relleno */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            Servicios Cityland Travel
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-2">
            ¿QUÉ SERVICIO BUSCAS HOY?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Haz clic en el servicio que deseas para recibir cotización personalizada en tiempo real por WhatsApp.
          </p>
        </div>

        {/* Grilla Ordenada y Concisa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICIOS_COMPACTOS.map((s) => {
            const url = buildWaUrl({
              categoria: s.cat,
              destino: s.titulo,
              tipo: s.tipo,
              mensajePersonalizado: `¡Hola Cityland Travel! Deseo cotizar el servicio de ${s.titulo} (${s.subtitulo}). Quisiera conocer opciones y cómo separar con el 50% de inicial.`,
            });

            return (
              <div
                key={s.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${s.badgeColor}`}>
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {s.titulo}
                  </h3>
                  <p className="text-xs font-bold text-red-600 mb-2">
                    {s.subtitulo}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {s.descripcion}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase block leading-none">
                      Tarifa
                    </span>
                    <strong className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {s.precio}
                    </strong>
                  </div>

                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer shrink-0"
                  >
                    <WhatsAppIcon size={14} />
                    <span>Cotizar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
