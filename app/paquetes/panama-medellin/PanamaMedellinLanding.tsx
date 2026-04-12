"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Plane,
  Hotel,
  Coffee,
  Bus,
  Camera,
  Briefcase,
  CheckCircle,
  Shield,
  Star,
  X as XIcon,
  Check,
  ChevronRight,
} from "lucide-react";

const WA_URL =
  "https://wa.me/51941551530?text=Hola%2C%20quiero%20información%20del%20paquete%20Panamá%20%2B%20Medellín%20a%20%24799";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Countdown() {
  const [t, setT] = useState({ h: 4, m: 59, s: 59 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((p) => {
        if (p.s > 0) return { ...p, s: p.s - 1 };
        if (p.m > 0) return { ...p, m: p.m - 1, s: 59 };
        if (p.h > 0) return { h: p.h - 1, m: 59, s: 59 };
        return { h: 0, m: 0, s: 0 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {[
        { v: t.h, l: "Hrs" },
        { v: t.m, l: "Min" },
        { v: t.s, l: "Seg" },
      ].map((x, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-white/60 text-xl font-bold">:</span>}
          <div className="text-center">
            <div className="bg-red-600 text-white font-black text-2xl md:text-3xl px-3 py-1.5 rounded-lg min-w-[56px]">
              {pad(x.v)}
            </div>
            <div className="text-white/60 text-[10px] uppercase mt-1">{x.l}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PanamaMedellinLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* ═══ URGENCY BAR ═══ */}
      <div className="bg-amber-100 text-amber-900 text-center py-2.5 px-4 text-sm font-semibold sticky top-0 z-50 border-b border-amber-200">
        <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2" />
        <strong>ATENCIÓN:</strong> Solo quedan <strong>4 cupos</strong> con precio especial para Junio 2026
      </div>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/paquetes/panama-medellin/hero-panama.png"
          alt="Ciudad de Panamá"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 text-center px-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-white/20">
            <Plane size={14} /> Salida Confirmada — Junio 2026
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Vive <span className="text-green-400">Panamá</span> y{" "}
            <span className="text-green-400">Medellín</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-6">
            7 Días · 6 Noches · Vuelos · Hotel · Desayunos · Tours
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-4 border border-white/15 inline-block">
            <div className="text-white/60 text-sm line-through">Precio regular: $1,150 USD</div>
            <div className="text-white text-lg mt-1">
              Precio web desde{" "}
              <span className="text-5xl md:text-6xl font-black text-green-400">$799</span>{" "}
              <span className="text-white/70 text-base">USD</span>
            </div>
          </div>

          <Countdown />

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full mt-6 transition-all shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:scale-105"
          >
            <WhatsAppIcon size={24} />
            ¡Quiero Esta Oferta!
          </a>

          <p className="text-white/50 text-xs mt-4 flex items-center justify-center gap-1">
            <Shield size={12} /> Compra segura · Agencia verificada · +5,000 viajeros
          </p>
        </div>
      </section>

      {/* ═══ DOLOR / SOLUCIÓN ═══ */}
      <section className="py-14 px-5 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4">
            ¿Armar el viaje por tu cuenta te parece un estrés?
          </h2>
          <p className="text-slate-500 mb-6 leading-relaxed">
            Buscar vuelos, coordinar hoteles, organizar traslados y planificar actividades
            toma demasiado tiempo y terminas pagando más de lo necesario.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500 text-left">
            <h3 className="font-bold text-slate-800 text-lg mb-2">
              Nosotros hacemos todo por ti
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Vuelos con Copa Airlines (aerolínea premium), hoteles seleccionados, desayunos
              diarios, traslados puerta a puerta y los mejores tours. Tú solo armas la maleta.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ QUÉ INCLUYE — GRID ═══ */}
      <section className="py-14 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-slate-800 mb-2">
            Todo Esto por Solo $799
          </h2>
          <p className="text-center text-slate-400 mb-10">
            Valor real +$1,150 — Tú ahorras $351
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: <Plane size={24} />, t: "Vuelos Copa Airlines", d: "Ida y vuelta desde Lima" },
              { icon: <Hotel size={24} />, t: "6 Noches Hotel", d: "3 en Panamá + 3 en Medellín" },
              { icon: <Coffee size={24} />, t: "Desayunos Diarios", d: "Todos los días incluidos" },
              { icon: <Bus size={24} />, t: "Traslados", d: "Aeropuerto ↔ Hotel" },
              { icon: <Camera size={24} />, t: "2 Tours Incluidos", d: "Casco Antiguo + Chiva" },
              { icon: <Briefcase size={24} />, t: "Equipaje", d: "Mochila 8kg + maleta 10kg" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all border border-slate-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900 text-white rounded-full mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">{item.t}</h4>
                <p className="text-slate-400 text-xs">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="py-14 px-5 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2">
            Ellos ya vivieron la experiencia
          </h2>
          <p className="text-center text-slate-400 mb-10">+5,000 viajeros confían en nosotros</p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Sofía Ramírez",
                text: "Un viaje sin preocupaciones. Las chivas fiesteras fueron lo máximo y los traslados súper puntuales.",
                color: "bg-pink-500",
              },
              {
                name: "Diego Torres",
                text: "El precio me pareció increíble y superó mis expectativas. Conocí el Canal de Panamá y Medellín sin estresarme.",
                color: "bg-blue-500",
              },
              {
                name: "Lucía Fernández",
                text: "Excelente atención por WhatsApp. Los hoteles cumplieron con todo y Copa Airlines fue puntual.",
                color: "bg-green-500",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="#FACC15" color="#FACC15" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">Viajó a Panamá y Medellín</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA INTERMEDIO ═══ */}
      <section className="py-10 px-5 bg-green-500">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            ¿Listo para esta aventura?
          </h2>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-3.5 rounded-full hover:bg-green-50 transition-all text-lg"
          >
            <WhatsAppIcon size={22} />
            Hablar con un asesor ahora
          </a>
        </div>
      </section>

      {/* ═══ ITINERARIO ═══ */}
      <section className="py-14 px-5 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-slate-800 mb-10">
            Tu Itinerario Día a Día
          </h2>

          <div className="space-y-6">
            {[
              {
                day: "Día 1",
                title: "Llegada a Ciudad de Panamá",
                desc: "Vuelo Lima → Panamá con Copa Airlines (3h 45min). Te recogemos en el aeropuerto y te llevamos al hotel.",
                img: "/images/paquetes/panama-medellin/hero-panama.png",
              },
              {
                day: "Día 2-3",
                title: "Explorar Panamá — City Tour + Canal",
                desc: "Recorre el Casco Antiguo (Patrimonio de la Humanidad) y visita el impresionante Canal de Panamá.",
                img: "/images/paquetes/panama-medellin/casco-antiguo.png",
              },
              {
                day: "Día 4",
                title: "Vuelo a Medellín",
                desc: "Vuelo corto Panamá → Medellín (1h 26min). La ciudad de la eterna primavera te espera.",
                img: "/images/paquetes/panama-medellin/medellin-skyline.png",
              },
              {
                day: "Día 5-6",
                title: "Explorar Medellín — Tour en Chiva",
                desc: "Vive la experiencia del famoso bus chiva colombiano. Música, color y la mejor energía de Colombia.",
                img: "/images/paquetes/panama-medellin/chiva-medellin.png",
              },
              {
                day: "Día 7",
                title: "Regreso a Lima",
                desc: "Vuelo Medellín → Panamá → Lima. Traslado al aeropuerto incluido. ¡Hasta la próxima!",
                img: null,
              },
            ].map((d, i) => (
              <div key={i} className="flex gap-4 md:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < 4 && <div className="w-0.5 flex-1 bg-blue-200 mt-2" />}
                </div>
                <div className="flex-1 pb-2">
                  <span className="text-xs font-bold text-blue-900 uppercase">{d.day}</span>
                  <h3 className="font-bold text-slate-800 text-lg mt-1">{d.title}</h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">{d.desc}</p>
                  {d.img && (
                    <div className="relative h-44 md:h-56 rounded-xl overflow-hidden mt-3">
                      <Image src={d.img} alt={d.title} fill className="object-cover" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VUELOS ═══ */}
      <section className="py-14 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-slate-800 mb-2">
            Detalles de tus Vuelos
          </h2>
          <p className="text-center text-slate-400 mb-8">Copa Airlines — Aerolínea Premium</p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Vuelo</th>
                  <th className="px-4 py-3 text-left font-semibold">Ruta</th>
                  <th className="px-4 py-3 text-left font-semibold">Fecha</th>
                  <th className="px-4 py-3 text-left font-semibold">Hora</th>
                  <th className="px-4 py-3 text-left font-semibold">Duración</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { c: "CM 400", r: "Lima → Panamá", d: "Dom 01 Jun", h: "11:00 → 14:45", dur: "3h45m" },
                  { c: "CM 764", r: "Panamá → Medellín", d: "Mar 03 Jun", h: "13:19 → 14:45", dur: "1h26m" },
                  { c: "CM 157", r: "Medellín → Panamá", d: "Sáb 07 Jun", h: "18:20 → 19:47", dur: "1h27m" },
                  { c: "CM 337", r: "Panamá → Lima", d: "Sáb 07 Jun", h: "21:20 → 00:55", dur: "3h35m" },
                ].map((f, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-blue-900">{f.c}</td>
                    <td className="px-4 py-3 text-slate-600">{f.r}</td>
                    <td className="px-4 py-3 text-slate-600">{f.d}</td>
                    <td className="px-4 py-3 text-slate-600">{f.h}</td>
                    <td className="px-4 py-3 text-slate-600">{f.dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ INCLUYE VS NO INCLUYE ═══ */}
      <section className="py-14 px-5 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-slate-800 mb-8">
            Incluye vs No Incluye
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200">
              <div className="bg-green-500 text-white px-5 py-3 font-bold flex items-center gap-2">
                <Check size={18} /> Lo que SÍ incluye
              </div>
              <ul className="p-5 space-y-2.5">
                {[
                  "Boleto aéreo ida y vuelta — Copa Airlines",
                  "Equipaje: mochila 8 kg + maleta 10 kg",
                  "Alojamiento 7 días y 6 noches",
                  "3 noches en Ciudad de Panamá",
                  "3 noches en Medellín",
                  "Traslados Aeropuerto ↔ Hotel",
                  "Desayunos diarios toda la estancia",
                  "Check-in anticipado 24h",
                  "Impuestos aeroportuarios",
                  "City tour Casco Antiguo + Canal de Panamá",
                  "Tour en chiva por Medellín",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-slate-200">
              <div className="bg-red-500 text-white px-5 py-3 font-bold flex items-center gap-2">
                <XIcon size={18} /> Lo que NO incluye
              </div>
              <ul className="p-5 space-y-2.5">
                {[
                  "Comidas (excepto desayuno)",
                  "Seguro de viaje",
                  "Gastos personales",
                  "Excursiones adicionales no mencionadas",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <XIcon size={16} className="text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-slate-400 text-xs mt-6">
            Tarifa sujeta a disponibilidad. Se recomienda reservar con anticipación.
          </p>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-16 px-5 bg-blue-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-3">
          ¡No te quedes sin tu cupo!
        </h2>
        <p className="text-white/70 mb-2 text-lg">
          Solo quedan pocos espacios para Junio 2026
        </p>
        <div className="text-5xl font-black text-green-400 mb-6">$799 USD</div>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-5 rounded-full transition-all shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] hover:scale-105"
        >
          <WhatsAppIcon size={28} />
          ¡Reservar Ahora por WhatsApp!
        </a>
        <p className="text-white/40 text-xs mt-4">
          <Shield size={12} className="inline mr-1" />
          Reserva segura · Respuesta inmediata
        </p>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-slate-950 text-white/60 py-8 px-5 text-center text-sm">
        <Image
          src="/logo.png"
          alt="Cityland Travel"
          width={120}
          height={40}
          className="mx-auto mb-4 opacity-70"
          style={{ objectFit: "contain" }}
        />
        <p>Los Olivos, Lima, Perú · WhatsApp: +51 941 551 530</p>
        <p className="mt-2">© 2026 Cityland Travel — Agencia de Viajes</p>
      </footer>

      {/* ═══ FLOATING WA (desktop) ═══ */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white w-14 h-14 rounded-full items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all hidden md:flex"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>

      {/* ═══ STICKY MOBILE CTA ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-green-500 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-3 rounded-full text-base"
        >
          <WhatsAppIcon size={20} />
          Reservar — $799 USD
        </a>
      </div>
    </div>
  );
}
