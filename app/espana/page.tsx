import { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import Image from 'next/image';
import StickyWhatsApp from './_components/StickyWhatsApp';

const sans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap' });
const serif = Fraunces({ subsets: ['latin'], weight: ['700', '900'], display: 'swap' });

// ═══════════════════════════════════════════════════════
// FUENTE ÚNICA DE VERDAD — toda la info comercial aquí
// ═══════════════════════════════════════════════════════
const PRECIO_HOY = 699;
const PRECIO_SEPARADO = 1800;
const PRECIO_ESPERANDO = 999;
const AHORRO_PAQUETE = PRECIO_SEPARADO - PRECIO_HOY; // $1,101
const AHORRO_ANTICIPACION = PRECIO_ESPERANDO - PRECIO_HOY; // $300
const TELEFONO = '941 551 530';
const MESES = 'Oct · Nov · Dic 2026';
const DOMINIO = 'citylandtravelpe.com';

export const metadata: Metadata = {
  title: `España desde $${PRECIO_HOY} · Cityland Travel · ${MESES}`,
  description: `Paquete migratorio a España: vuelo, hotel, seguro Schengen, guía, check-in y asesoría. Reserva por WhatsApp ${TELEFONO}.`,
  alternates: { canonical: `https://${DOMINIO}/espana` },
  openGraph: {
    title: `España desde $${PRECIO_HOY} · Cityland Travel`,
    description: `Paquete completo a España para ${MESES}. Reserva por WhatsApp.`,
    url: `https://${DOMINIO}/espana`,
    type: 'website',
  },
};

const WA = `https://wa.me/51941551530?text=${encodeURIComponent(
  `Hola Cityland Travel, quiero reservar mi viaje a España desde $${PRECIO_HOY} (${MESES})`
)}`;

const HERO_IMG = 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2400&q=85';

const BLUE = '#0A1F5C';
const RED = '#E11D2E';

function WA_Icon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.449a11.956 11.956 0 00-8.47-3.415C5.452.034.083 5.405.08 12c-.001 2.094.545 4.141 1.583 5.946L.015 23.957l6.16-1.616a11.921 11.921 0 005.87 1.53h.005c6.595 0 11.966-5.372 11.97-11.966.002-3.197-1.242-6.204-3.5-8.456zM12.046 21.84h-.003a9.92 9.92 0 01-5.056-1.378l-.362-.215-3.76.986.998-3.666-.236-.376a9.932 9.932 0 01-1.52-5.333C2.091 6.275 6.47 1.9 12.05 1.9c2.724.001 5.282 1.064 7.206 2.991C21.18 6.819 22.242 9.378 22.24 12.1c-.004 5.823-4.382 10.203-9.967 10.203z" />
    </svg>
  );
}

export default function EspanaLandingPage() {
  return (
    <main className={`${sans.className} text-gray-900 bg-white`}>

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="bg-white">
        {/* Franja superior informativa */}
        <div className="text-white text-center text-xs md:text-sm font-medium py-2.5 px-4" style={{ background: `linear-gradient(90deg, ${BLUE} 0%, #132d75 50%, ${BLUE} 100%)` }}>
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <span className="flex items-center gap-2">🇪🇸 <strong>España desde ${PRECIO_HOY}</strong></span>
            <span className="hidden md:inline opacity-30">|</span>
            <span className="flex items-center gap-2">📅 Salidas {MESES}</span>
            <span className="hidden md:inline opacity-30">|</span>
            <span className="flex items-center gap-2">⚡ Cupos limitados</span>
          </div>
        </div>

        {/* Header */}
        <header className="max-w-6xl w-full mx-auto px-6 py-4 flex items-center justify-between">
          <a href={`https://${DOMINIO}`} aria-label="Ir al inicio de Cityland Travel">
            <Image src="/logo-cityland.svg" alt="Cityland Travel" width={280} height={280} className="h-28 md:h-36 w-auto" priority />
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg transition hover:scale-105">
            <WA_Icon className="w-4 h-4" />
            Cotizar ahora
          </a>
        </header>

        <div className="max-w-6xl mx-auto px-6 py-6 md:py-8 grid md:grid-cols-[1.1fr_1fr] gap-8 items-center">
          {/* Texto */}
          <div>
            <span className="inline-block bg-[#FFE8EA] text-[#E11D2E] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4">
              Paquete migratorio completo
            </span>

            <h1 className={`${serif.className} font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-4`} style={{ color: BLUE }}>
              Viaja a España<br />
              desde <span style={{ color: RED }}>${PRECIO_HOY}</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              Vuelo · Hotel · Seguro · Guía · Check-in · Asesoría.{' '}
              <strong className="text-gray-900">Todo incluido en un solo pago.</strong>
            </p>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-lg py-4 px-8 rounded-full shadow-xl transition hover:scale-105"
            >
              <WA_Icon className="w-5 h-5" />
              Reservar por WhatsApp
            </a>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><span className="text-yellow-500">★★★★★</span> 4.9/5</span>
              <span>·</span>
              <span>+5,000 pasajeros</span>
              <span>·</span>
              <span>Respuesta en 5 min</span>
            </div>
          </div>

          {/* Imagen Madrid */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[4/5]">
            <Image
              src={HERO_IMG}
              alt="Vista de Madrid, España al atardecer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-[#0A1F5C] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              📍 Madrid, España
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 2. ANTICIPACIÓN (urgencia de reservar hoy) ═══════════ */}
      <section className="py-10 md:py-14 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-[#E11D2E] text-xs font-bold uppercase tracking-[0.25em] mb-2">¿Por qué reservar hoy?</p>
            <h2 className={`${serif.className} text-3xl md:text-5xl font-black leading-tight`} style={{ color: BLUE }}>
              Estamos en abril.<br />
              Viajas en <span style={{ color: RED }}>Oct · Nov · Dic</span>.
            </h2>
            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              Por eso el precio es <strong>${PRECIO_HOY}</strong>: lo compramos con <strong>6 meses de anticipación</strong>. Cada mes que esperas, el mismo paquete te cuesta más.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Reservando hoy */}
            <div className="bg-white rounded-3xl p-7 border-2 border-[#25D366] shadow-xl relative">
              <span className="absolute -top-3 left-6 bg-[#25D366] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Reserva hoy · Abril
              </span>
              <div className="text-sm text-gray-500 mb-1">Paquete completo a España</div>
              <div className={`${serif.className} text-5xl font-black mb-3`} style={{ color: BLUE }}>${PRECIO_HOY}</div>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>✅ Precio de lanzamiento</li>
                <li>✅ Eliges la fecha que prefieras</li>
                <li>✅ Cupo asegurado con 70%</li>
              </ul>
            </div>

            {/* Esperando */}
            <div className="bg-white rounded-3xl p-7 border-2 border-gray-200">
              <span className="inline-block bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Si esperas a agosto / septiembre
              </span>
              <div className="text-sm text-gray-500 mb-1">El mismo paquete</div>
              <div className={`${serif.className} text-5xl font-black mb-3 text-gray-400`}>${PRECIO_ESPERANDO}+</div>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>⚠️ Vuelos más caros</li>
                <li>⚠️ Menos hoteles disponibles</li>
                <li>⚠️ Cupos casi agotados</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 bg-white rounded-2xl p-5 md:p-6 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💡</span>
              <div>
                <div className="font-black text-lg" style={{ color: BLUE }}>Ahorras ${AHORRO_ANTICIPACION} reservando ahora</div>
                <div className="text-sm text-gray-600">vs. esperar a mitad de año</div>
              </div>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E11D2E] hover:bg-[#a8121f] text-white font-bold py-3 px-6 rounded-full shadow-lg transition whitespace-nowrap"
            >
              Asegurar ${PRECIO_HOY} →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ 3. QUÉ INCLUYE ═══════════ */}
      <section className="py-10 md:py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-7">
            <p className="text-[#E11D2E] text-xs font-bold uppercase tracking-[0.25em] mb-2">Paquete migratorio</p>
            <h2 className={`${serif.className} text-3xl md:text-4xl font-black leading-tight`} style={{ color: BLUE }}>
              Qué incluye tu paquete
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              { i: '✈️', t: 'Vuelo de ida Lima → España', d: 'Aerolíneas reconocidas. Equipaje 23 kg + mano.' },
              { i: '🛬', t: 'Itinerario de retorno', d: 'Comprobante para migraciones Schengen.' },
              { i: '🏨', t: 'Hotel en España', d: '3★ céntrico. Habitación privada con baño.' },
              { i: '🛡️', t: 'Seguro Schengen', d: 'Cobertura médica €30,000. Certificado oficial.' },
              { i: '📘', t: 'Guía de viaje PDF', d: 'Itinerario, mapas, restaurantes y tips.' },
              { i: '✅', t: 'Check-in realizado', d: 'Te enviamos tu tarjeta de embarque al WhatsApp.' },
              { i: '📲', t: 'Asesoría 1 a 1', d: 'Un asesor por WhatsApp todo el viaje.' },
              { i: '💳', t: 'Pago flexible 70/30', d: '70% al reservar, 30% antes de viajar.' },
            ].map((b) => (
              <div key={b.t} className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">{b.i}</span>
                <div>
                  <h3 className="font-bold text-sm" style={{ color: BLUE }}>{b.t}</h3>
                  <p className="text-gray-600 text-xs mt-0.5">{b.d}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 mt-6">
            No incluye: traslados entre ciudades españolas, comidas, tours opcionales y tasas aeroportuarias (~$80).
          </p>
        </div>
      </section>

      {/* ═══════════ 4. POR QUÉ CITYLAND (diferenciadores) ═══════════ */}
      <section className="py-10 md:py-14 px-6" style={{ backgroundColor: BLUE }}>
        <div className="max-w-5xl mx-auto text-white">
          <div className="text-center mb-8">
            <h2 className={`${serif.className} text-3xl md:text-4xl font-black`}>
              ¿Por qué con Cityland?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '💰', t: `Ahorras $${AHORRO_PAQUETE.toLocaleString()}`, d: `Comprado por separado te cuesta $${PRECIO_SEPARADO.toLocaleString()}+. Con nosotros $${PRECIO_HOY}.` },
              { n: '⭐', t: '+5,000 pasajeros felices', d: 'Más de 3 años gestionando viajes a Europa. Calificación 4.9/5.' },
              { n: '📲', t: 'Asesor humano real', d: 'Te atiende una persona por WhatsApp antes, durante y después del viaje.' },
            ].map((r) => (
              <div key={r.t} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-4xl mb-3" aria-hidden="true">{r.n}</div>
                <h3 className="text-xl font-bold mb-2">{r.t}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 5. CTA FINAL ═══════════ */}
      <section className="py-14 px-6 text-center text-white" style={{ background: `linear-gradient(135deg, ${RED} 0%, #a8121f 100%)` }}>
        <div className="max-w-2xl mx-auto">
          <h2 className={`${serif.className} text-4xl md:text-5xl font-black mb-4`}>
            Reserva tu cupo hoy
          </h2>
          <p className="text-xl text-white/95 mb-8">
            Salidas {MESES}. Cotización gratuita en 5 minutos.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#a8121f] font-black text-lg md:text-xl py-5 px-10 rounded-full shadow-2xl hover:scale-105 transition"
          >
            <WA_Icon className="w-6 h-6" />
            Escribir al {TELEFONO}
          </a>
          <p className="mt-4 text-white/80 text-sm">Sin compromiso · Pago flexible 70/30</p>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-white border-t border-gray-100 py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <Image src="/logo-cityland.svg" alt="Cityland Travel" width={80} height={80} className="h-12 w-auto" />
          <span>© {new Date().getFullYear()} Cityland Travel · <a href={`https://${DOMINIO}`} className="font-bold hover:underline" style={{ color: BLUE }}>{DOMINIO}</a></span>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: RED }}>WhatsApp {TELEFONO}</a>
        </div>
      </footer>

      <StickyWhatsApp />
    </main>
  );
}
