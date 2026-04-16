import { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Reveal, CountUp } from './_components/Reveal';

// Code-splitting: el tracker va en su propio chunk y se carga después del LCP
const WhatsAppTracker = dynamic(() =>
  import('./_components/WhatsAppTracker').then((m) => m.WhatsAppTracker)
);

// Solo cargamos los pesos realmente usados (font-normal, font-medium, font-bold, font-black)
const sans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap' });
const serif = Fraunces({ subsets: ['latin'], weight: ['900'], display: 'swap' });

// ═══════════════════════════════════════════════════════
// FUENTE ÚNICA DE VERDAD
// ═══════════════════════════════════════════════════════
const PRECIO_HOY = 699;
const PRECIO_SEPARADO = 1800;
const PRECIO_ESPERANDO = 999;
const AHORRO_PAQUETE = PRECIO_SEPARADO - PRECIO_HOY;
const AHORRO_ANTICIPACION = PRECIO_ESPERANDO - PRECIO_HOY;
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

const IMG = {
  hero: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=75',
};

// Blur placeholder (gradiente cálido que imita Madrid al atardecer) — evita network round-trip
const HERO_BLUR =
  'data:image/svg+xml;base64,' +
  Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 10"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb98a"/><stop offset="0.5" stop-color="#c97f5f"/><stop offset="1" stop-color="#1a2547"/></linearGradient></defs><rect width="8" height="10" fill="url(#g)"/></svg>'
  ).toString('base64');

const BLUE = '#0A1F5C';
const RED = '#E11D2E';

function WA_Icon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.449a11.956 11.956 0 00-8.47-3.415C5.452.034.083 5.405.08 12c-.001 2.094.545 4.141 1.583 5.946L.015 23.957l6.16-1.616a11.921 11.921 0 005.87 1.53h.005c6.595 0 11.966-5.372 11.97-11.966.002-3.197-1.242-6.204-3.5-8.456zM12.046 21.84h-.003a9.92 9.92 0 01-5.056-1.378l-.362-.215-3.76.986.998-3.666-.236-.376a9.932 9.932 0 01-1.52-5.333C2.091 6.275 6.47 1.9 12.05 1.9c2.724.001 5.282 1.064 7.206 2.991C21.18 6.819 22.242 9.378 22.24 12.1c-.004 5.823-4.382 10.203-9.967 10.203z" />
    </svg>
  );
}

// Íconos outline para el paquete
const ICON = {
  plane: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" /></svg>
  ),
  hotel: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>
  ),
  docReturn: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg>
  ),
  chat: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v8.27Z" /></svg>
  ),
  checkBadge: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
  ),
  book: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
  ),
  card: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>
  ),
};

export default function EspanaLandingPage() {
  return (
    <main className={`${sans.className} text-gray-900 bg-white`}>
      {/* Preconnect al CDN de imágenes para acelerar el LCP del hero */}
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="bg-white">
        {/* Franja superior */}
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
        <header className="max-w-6xl w-full mx-auto px-6 py-1 flex items-center justify-between">
          <a href={`https://${DOMINIO}`} aria-label="Ir al inicio de Cityland Travel" className="-my-4">
            <Image src="/logo-cityland.svg" alt="Cityland Travel" width={280} height={280} className="h-24 md:h-32 w-auto -ml-2" priority />
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-sm font-bold px-5 py-2 rounded-full transition hover:scale-105">
            <WA_Icon className="w-4 h-4" />
            Cotizar ahora
          </a>
        </header>

        <div className="max-w-6xl mx-auto px-6 pb-10 md:pb-14 pt-4 md:pt-6 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="space-y-5">
            <span className="inline-block bg-[#FFE8EA] text-[#E11D2E] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
              Paquete migratorio completo
            </span>

            <h1 className={`${serif.className} font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95]`} style={{ color: BLUE }}>
              Viaja a España<br />
              desde <span style={{ color: RED }}>${PRECIO_HOY}</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Vuelo · Hotel · Seguro · Guía · Check-in · Asesoría.{' '}
              <strong className="text-gray-900">Todo incluido en un solo pago.</strong>
            </p>

            <div className="pt-1">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-lg py-4 px-8 rounded-full shadow-xl transition hover:scale-105">
                <WA_Icon className="w-5 h-5" />
                Reservar por WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><span className="text-yellow-500">★★★★★</span> 4.9/5</span>
              <span>·</span>
              <span>+5,000 pasajeros</span>
              <span>·</span>
              <span>Respuesta en 5 min</span>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[4/5]">
            <Image
              src={IMG.hero}
              alt="Vista de Madrid al atardecer"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 560px"
              className="object-cover"
              priority
              fetchPriority="high"
              placeholder="blur"
              blurDataURL={HERO_BLUR}
              quality={75}
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-[#0A1F5C] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              📍 Madrid, España
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <section className="bg-gray-50 border-y border-gray-100 py-4 px-6">
        {/* Móvil: texto compacto */}
        <div className="md:hidden text-center text-xs text-gray-500 font-medium leading-relaxed">
          Vuelos con <strong className="text-gray-700">LATAM · Iberia · Air Europa · KLM</strong> · Pago seguro con <strong className="text-gray-700">Yape · Plin · Visa · Mastercard</strong>
        </div>
        {/* Desktop: layout expandido */}
        <div className="hidden md:flex max-w-6xl mx-auto items-center justify-between gap-6">
          <div className="flex items-center gap-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Volamos con</span>
            <span className="font-black text-gray-600 text-lg">LATAM</span>
            <span className="font-black text-gray-600 text-lg italic">Iberia</span>
            <span className="font-black text-gray-600 text-lg">Air Europa</span>
            <span className="font-black text-gray-600 text-lg">KLM</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Pago seguro</span>
            <span className="text-sm font-bold text-purple-700 bg-white px-3 py-1 rounded-md border border-gray-200">Yape</span>
            <span className="text-sm font-bold text-cyan-700 bg-white px-3 py-1 rounded-md border border-gray-200">Plin</span>
            <span className="text-sm font-bold text-blue-700 bg-white px-3 py-1 rounded-md border border-gray-200">Visa</span>
            <span className="text-sm font-bold text-red-700 bg-white px-3 py-1 rounded-md border border-gray-200">Mastercard</span>
          </div>
        </div>
      </section>

      {/* ═══════════ 2. QUÉ INCLUYE ═══════════ */}
      <section className="py-8 md:py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-9">
            <p className="text-[#E11D2E] text-xs font-bold uppercase tracking-[0.25em] mb-2">Paquete migratorio</p>
            <h2 className={`${serif.className} text-3xl md:text-4xl font-black leading-tight`} style={{ color: BLUE }}>
              Qué incluye tu paquete
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              { i: ICON.plane, t: 'Vuelo de ida Lima → España', d: 'Aerolíneas reconocidas. Equipaje 23 kg + mano.' },
              { i: ICON.hotel, t: 'Hotel en España', d: '3★ céntrico. Habitación privada con baño.' },
              { i: ICON.shield, t: 'Seguro Schengen', d: 'Cobertura médica €30,000. Certificado oficial.' },
              { i: ICON.docReturn, t: 'Itinerario de retorno', d: 'Comprobante para migraciones Schengen.' },
              { i: ICON.chat, t: 'Asesoría 1 a 1', d: 'Un asesor por WhatsApp todo el viaje.' },
              { i: ICON.checkBadge, t: 'Check-in realizado', d: 'Te enviamos tu tarjeta de embarque al WhatsApp.' },
              { i: ICON.book, t: 'Guía de viaje PDF', d: 'Itinerario, mapas, restaurantes y tips.' },
              { i: ICON.card, t: 'Pago flexible 70/30', d: '70% al reservar, 30% antes de viajar.' },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 60}>
                <div className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4 transition hover:bg-white hover:shadow-lg hover:-translate-y-0.5 hover:border-[#E11D2E]/20">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${BLUE}10`, color: BLUE }}>
                    {b.i}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: BLUE }}>{b.t}</h3>
                    <p className="text-gray-600 text-xs mt-0.5">{b.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════ 3. POR QUÉ CITYLAND ═══════════ */}
      <section className="py-8 md:py-16 px-6" style={{ backgroundColor: BLUE }}>
        <div className="max-w-5xl mx-auto text-white">
          <Reveal className="text-center mb-10">
            <h2 className={`${serif.className} text-3xl md:text-4xl font-black`}>
              ¿Por qué con Cityland?
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            <Reveal delay={0}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 h-full transition hover:bg-white/10 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-[#FFD93D]/20 flex items-center justify-center mb-3 text-[#FFD93D]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                </div>
                <h3 className={`${serif.className} text-2xl md:text-3xl font-black mb-1`}>
                  $<CountUp end={AHORRO_PAQUETE} />
                </h3>
                <p className="text-[#FFD93D] text-xs font-bold uppercase tracking-widest mb-2">de ahorro</p>
                <p className="text-white/75 text-sm leading-relaxed">Comprado por separado te cuesta ${PRECIO_SEPARADO.toLocaleString()}+. Con nosotros ${PRECIO_HOY}.</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 h-full transition hover:bg-white/10 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-[#FFD93D]/20 flex items-center justify-center mb-3 text-[#FFD93D]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
                </div>
                <h3 className={`${serif.className} text-2xl md:text-3xl font-black mb-1`}>
                  +<CountUp end={5000} />
                </h3>
                <p className="text-[#FFD93D] text-xs font-bold uppercase tracking-widest mb-2">pasajeros felices</p>
                <p className="text-white/75 text-sm leading-relaxed">Más de 3 años gestionando viajes a Europa. Calificación 4.9/5.</p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 h-full transition hover:bg-white/10 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-[#FFD93D]/20 flex items-center justify-center mb-3 text-[#FFD93D]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
                </div>
                <h3 className={`${serif.className} text-2xl md:text-3xl font-black mb-1`}>1 a 1</h3>
                <p className="text-[#FFD93D] text-xs font-bold uppercase tracking-widest mb-2">Asesor humano</p>
                <p className="text-white/75 text-sm leading-relaxed">Te atiende una persona por WhatsApp antes, durante y después del viaje.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════ 4. ANTICIPACIÓN ═══════════ */}
      <section className="py-8 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-[#E11D2E] text-xs font-bold uppercase tracking-[0.25em] mb-2">¿Por qué reservar hoy?</p>
            <h2 className={`${serif.className} text-3xl md:text-5xl font-black leading-tight`} style={{ color: BLUE }}>
              Estamos en abril.<br />
              Viajas en <span style={{ color: RED }}>Oct · Nov · Dic</span>.
            </h2>
            <p className="text-gray-600 mt-5 text-base leading-relaxed">
              Por eso el precio es <strong>${PRECIO_HOY}</strong>: lo compramos con <strong>6 meses de anticipación</strong>. Cada mes que esperas, el mismo paquete te cuesta más.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="bg-white rounded-3xl p-5 md:p-7 border-2 border-[#25D366] shadow-xl relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#25D366] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                  ★ Más vendido
                </span>
                <span className="inline-block bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 mt-2">
                  Reserva hoy · Abril
                </span>
                <div className="text-sm text-gray-500 mb-1">Paquete completo a España</div>
                <div className={`${serif.className} text-4xl md:text-5xl font-black mb-3`} style={{ color: BLUE }}>${PRECIO_HOY}</div>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>✅ Precio de lanzamiento</li>
                  <li>✅ Eliges la fecha que prefieras</li>
                  <li>✅ Cupo asegurado con 70%</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white rounded-3xl p-5 md:p-7 border-2 border-gray-200">
                <span className="inline-block bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Si esperas a agosto / septiembre
                </span>
                <div className="text-sm text-gray-500 mb-1">El mismo paquete</div>
                <div className={`${serif.className} text-4xl md:text-5xl font-black mb-3 text-gray-400`}>${PRECIO_ESPERANDO}+</div>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li>⚠️ Vuelos más caros</li>
                  <li>⚠️ Menos hoteles disponibles</li>
                  <li>⚠️ Cupos casi agotados</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-5">
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💡</span>
                <div>
                  <div className="font-black text-lg" style={{ color: BLUE }}>Ahorras ${AHORRO_ANTICIPACION} reservando ahora</div>
                  <div className="text-sm text-gray-600">vs. esperar a mitad de año</div>
                </div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#E11D2E] hover:bg-[#a8121f] text-white font-bold py-3 px-6 rounded-full shadow-lg transition whitespace-nowrap hover:scale-105">
                Asegurar ${PRECIO_HOY} →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ 5. CTA FINAL ═══════════ */}
      <section className="py-10 md:py-16 px-6 text-center text-white" style={{ background: `linear-gradient(135deg, ${RED} 0%, #a8121f 100%)` }}>
        <Reveal className="max-w-2xl mx-auto">
          <h2 className={`${serif.className} text-4xl md:text-5xl font-black mb-4`}>
            Reserva tu cupo hoy
          </h2>
          <p className="text-xl text-white/95 mb-8">
            Salidas {MESES}. Cotización gratuita en 5 minutos.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-[#a8121f] font-black text-lg md:text-xl py-5 px-10 rounded-full shadow-2xl hover:scale-105 transition">
            <WA_Icon className="w-6 h-6" />
            Escribir al {TELEFONO}
          </a>
          <p className="mt-4 text-white/80 text-sm">Sin compromiso · Pago flexible 70/30</p>
        </Reveal>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-white border-t border-gray-100 py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <Image src="/logo-cityland.svg" alt="Cityland Travel" width={80} height={80} className="h-12 w-auto" />
          <span>© {new Date().getFullYear()} Cityland Travel · <a href={`https://${DOMINIO}`} className="font-bold hover:underline" style={{ color: BLUE }}>{DOMINIO}</a></span>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: RED }}>WhatsApp {TELEFONO}</a>
        </div>
      </footer>

      <WhatsAppTracker />
    </main>
  );
}
