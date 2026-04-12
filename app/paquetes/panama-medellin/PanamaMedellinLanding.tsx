"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  Plane,
  Hotel,
  Coffee,
  Bus,
  Camera,
  Briefcase,
  CheckCircle,
  MapPin,
  Shield,
  Users,
  Award,
  Star,
  X as XIcon,
  Check,
  Clock,
  ChevronDown,
  MessageCircle,
  Sparkles,
  Heart,
  ThumbsUp,
} from "lucide-react";
import styles from "./panama-medellin.module.css";

// ── Constants ────────────────────────────────────────────────────────────
const WHATSAPP_URL =
  "https://wa.me/51941551530?text=Hola%2C%20quiero%20información%20del%20paquete%20Panamá%20%2B%20Medellín%20a%20%24799";

// Fecha del viaje para el countdown
const TRIP_DATE = new Date("2026-06-01T00:00:00");

// ── WhatsApp SVG Icon ────────────────────────────────────────────────────
function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── Copa Airlines Icon ───────────────────────────────────────────────────
function CopaIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#003876" />
      <path d="M8 16l4-6h8l4 6-4 6h-8l-4-6z" fill="#fff" opacity="0.9" />
      <path d="M10 16l3-4h6l3 4-3 4h-6l-3-4z" fill="#003876" />
    </svg>
  );
}

// ── Scroll animation observer hook ───────────────────────────────────────
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// ── Animated Counter ─────────────────────────────────────────────────────
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ── Countdown Timer ──────────────────────────────────────────────────────
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    const calcular = () => {
      const ahora = new Date();
      const diff = TRIP_DATE.getTime() - ahora.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
        min: Math.floor((diff / (1000 * 60)) % 60),
        seg: Math.floor((diff / 1000) % 60),
      });
    };
    calcular();
    const intervalo = setInterval(calcular, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className={styles.countdown}>
      <p className={styles.countdownLabel}>
        <Clock size={16} /> La oferta termina pronto
      </p>
      <div className={styles.countdownGrid}>
        {[
          { valor: timeLeft.dias, etiqueta: "Días" },
          { valor: timeLeft.horas, etiqueta: "Horas" },
          { valor: timeLeft.min, etiqueta: "Min" },
          { valor: timeLeft.seg, etiqueta: "Seg" },
        ].map((item) => (
          <div key={item.etiqueta} className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{String(item.valor).padStart(2, "0")}</span>
            <span className={styles.countdownUnit}>{item.etiqueta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── FAQ Item ─────────────────────────────────────────────────────────────
function FaqItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className={`${styles.faqItem} ${abierto ? styles.faqItemOpen : ""}`}>
      <button className={styles.faqQuestion} onClick={() => setAbierto((v) => !v)}>
        <span>{pregunta}</span>
        <ChevronDown size={20} className={styles.faqChevron} />
      </button>
      <div className={styles.faqAnswer}>
        <p>{respuesta}</p>
      </div>
    </div>
  );
}

// ── Section Wrapper with scroll animation ────────────────────────────────
function AnimatedSection({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref}
      id={id}
      className={`${styles.animateOnScroll} ${isVisible ? styles.visible : ""} ${className}`}
    >
      {children}
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// ██  Main Landing Component
// ══════════════════════════════════════════════════════════════════════════
export default function PanamaMedellinLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // ── Flight data ──────────────────────────────────────────────────────
  const flights = [
    {
      flight: "400",
      from: "Lima LIM",
      to: "Ciudad de Panamá PTY",
      date: "Dom 01 Jun",
      departure: "11:00",
      arrival: "14:45",
      duration: "3h45m",
      aircraft: "7N8",
      stops: "0",
    },
    {
      flight: "764",
      from: "Ciudad de Panamá PTY",
      to: "Medellín MDE",
      date: "Mar 03 Jun",
      departure: "13:19",
      arrival: "14:45",
      duration: "1h26m",
      aircraft: "738",
      stops: "0",
    },
    {
      flight: "157",
      from: "Medellín MDE",
      to: "Ciudad de Panamá PTY",
      date: "Sáb 07 Jun",
      departure: "18:20",
      arrival: "19:47",
      duration: "1h27m",
      aircraft: "738",
      stops: "1",
    },
    {
      flight: "337",
      from: "Ciudad de Panamá PTY",
      to: "Lima LIM",
      date: "Sáb 07 Jun",
      departure: "21:20",
      arrival: "00:55 (+1)",
      duration: "3h35m",
      aircraft: "738",
      stops: "—",
    },
  ];

  // ── What's included ──────────────────────────────────────────────────
  const includes = [
    { icon: <Plane size={22} />, title: "Vuelo ida y vuelta", desc: "Copa Airlines" },
    { icon: <Briefcase size={22} />, title: "Equipaje de mano", desc: "Mochila 8 kg + maleta 10 kg" },
    { icon: <Hotel size={22} />, title: "Alojamiento", desc: "7 días y 6 noches" },
    { icon: <MapPin size={22} />, title: "3 noches Panamá", desc: "Ciudad de Panamá" },
    { icon: <MapPin size={22} />, title: "3 noches Medellín", desc: "Colombia" },
    { icon: <Bus size={22} />, title: "Traslados", desc: "Aeropuerto – Hotel – Aeropuerto" },
    { icon: <Coffee size={22} />, title: "Desayunos diarios", desc: "Toda la estancia" },
    { icon: <CheckCircle size={22} />, title: "Check-in anticipado", desc: "24 horas antes" },
    { icon: <Shield size={22} />, title: "Impuestos incluidos", desc: "Tasas aeroportuarias" },
  ];

  // ── What's NOT included ──────────────────────────────────────────────
  const notIncludes = [
    "Comidas (excepto desayuno)",
    "Seguro de viaje",
    "Gastos personales",
    "Excursiones adicionales no mencionadas",
  ];

  const includesList = [
    "Boleto aéreo ida y vuelta vía Copa Airlines",
    "Equipaje: mochila 8 kg + maleta de mano 10 kg",
    "Alojamiento 7 días y 6 noches",
    "3 noches en Ciudad de Panamá",
    "3 noches en Medellín",
    "Traslados terrestres (Aeropuerto – Hotel – Aeropuerto)",
    "Desayunos diarios durante toda la estancia",
    "Check-in anticipado 24h antes del vuelo",
    "Impuestos aeroportuarios incluidos",
    "City tour por el Casco Antiguo y Canal de Panamá",
    "Tour en chiva tradicional por Medellín",
  ];

  // ── Testimonios ───────────────────────────────────────────────────────
  const testimonios = [
    {
      nombre: "María G.",
      ciudad: "Lima",
      texto: "Increíble experiencia. Todo estuvo organizado a la perfección, desde los vuelos hasta los hoteles. El Canal de Panamá me dejó sin palabras. 100% recomendado.",
      estrellas: 5,
      imagen: "/images/paquetes/panama-medellin/canal-panama.png",
    },
    {
      nombre: "Carlos R.",
      ciudad: "Arequipa",
      texto: "El tour en chiva por Medellín fue lo mejor del viaje. La gente, la música, la comida... todo. Cityland Travel se encargó de todo, solo tuve que disfrutar.",
      estrellas: 5,
      imagen: "/images/paquetes/panama-medellin/chiva-medellin.png",
    },
    {
      nombre: "Ana L.",
      ciudad: "Trujillo",
      texto: "Viajé sola y me sentí súper segura. El equipo de Cityland estuvo pendiente en todo momento. Los hoteles excelentes y el precio inmejorable.",
      estrellas: 5,
      imagen: "/images/paquetes/panama-medellin/casco-antiguo.png",
    },
  ];

  // ── FAQ ────────────────────────────────────────────────────────────────
  const faqs = [
    {
      pregunta: "¿Necesito visa para viajar a Panamá y Colombia?",
      respuesta: "No. Los ciudadanos peruanos no necesitan visa para ingresar a Panamá ni a Colombia como turistas. Solo necesitas tu pasaporte vigente con al menos 6 meses de validez.",
    },
    {
      pregunta: "¿Puedo pagar en cuotas?",
      respuesta: "¡Sí! Ofrecemos facilidades de pago. Puedes separar tu cupo con un adelanto y pagar el saldo en cuotas antes de la fecha de viaje. Escríbenos por WhatsApp para coordinar tu plan de pagos.",
    },
    {
      pregunta: "¿Es seguro viajar a Medellín?",
      respuesta: "Medellín es una de las ciudades más visitadas de Latinoamérica. Las zonas turísticas son muy seguras y además siempre contarás con nuestro soporte 24/7 durante todo el viaje.",
    },
    {
      pregunta: "¿Qué pasa si necesito cancelar mi viaje?",
      respuesta: "Entendemos que pueden surgir imprevistos. Tenemos políticas de cancelación flexibles dependiendo de la anticipación. Contáctanos para conocer los detalles según tu caso.",
    },
    {
      pregunta: "¿El precio de $799 es por persona?",
      respuesta: "Sí, el precio de $799 USD es por persona en habitación doble. Incluye todo lo detallado en la sección 'Qué Incluye'. No hay costos ocultos — lo que ves es lo que pagas.",
    },
    {
      pregunta: "¿Qué tipo de hoteles están incluidos?",
      respuesta: "Incluimos hoteles 3 estrellas bien ubicados en zonas seguras y turísticas, tanto en Ciudad de Panamá como en Medellín. Todos con desayuno incluido y servicios básicos de calidad.",
    },
  ];

  return (
    <>
      {/* ═════════════════════════════════════════════════════════════════
          NAVBAR
          ═════════════════════════════════════════════════════════════════ */}
      <nav
        className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
        id="navbar"
      >
        <Image
          src="/logo.png"
          alt="Cityland Travel"
          width={130}
          height={45}
          className={styles.navLogo}
          style={{ objectFit: "contain" }}
        />
        <ul className={styles.navLinks}>
          <li>
            <button className={styles.navLink} onClick={() => scrollTo("hero")}>
              Inicio
            </button>
          </li>
          <li>
            <button className={styles.navLink} onClick={() => scrollTo("itinerario")}>
              Itinerario
            </button>
          </li>
          <li>
            <button className={styles.navLink} onClick={() => scrollTo("incluye")}>
              Incluye
            </button>
          </li>
          <li>
            <button className={styles.navLink} onClick={() => scrollTo("testimonios")}>
              Opiniones
            </button>
          </li>
          <li>
            <button className={styles.navLink} onClick={() => scrollTo("reservar")}>
              Reservar
            </button>
          </li>
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navCta}
        >
          <WhatsAppIcon size={18} />
          Reservar
        </a>
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        <button className={styles.mobileMenuLink} onClick={() => scrollTo("hero")}>
          Inicio
        </button>
        <button className={styles.mobileMenuLink} onClick={() => scrollTo("itinerario")}>
          Itinerario
        </button>
        <button className={styles.mobileMenuLink} onClick={() => scrollTo("incluye")}>
          Incluye
        </button>
        <button className={styles.mobileMenuLink} onClick={() => scrollTo("testimonios")}>
          Opiniones
        </button>
        <button className={styles.mobileMenuLink} onClick={() => scrollTo("reservar")}>
          Reservar
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileMenuCta}
        >
          <WhatsAppIcon size={20} />
          ¡Reserva por WhatsApp!
        </a>
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          HERO — Emocional + Urgencia + Precio anclado
          ═════════════════════════════════════════════════════════════════ */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroImage}>
          <Image
            src="/images/paquetes/panama-medellin/hero-panama.png"
            alt="Skyline de Ciudad de Panamá"
            fill
            style={{ objectFit: "cover" }}
            loading="eager"
            priority
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>✈️ Junio 2026 — Solo 15 cupos</span>
          <h1 className={styles.heroTitle}>Panamá + Medellín</h1>
          <p className={styles.heroSubtitle}>
            Descubre dos países en un solo viaje: 7 días de aventura, cultura y recuerdos para toda la vida
          </p>
          <div className={styles.heroPriceContainer}>
            <span className={styles.heroPriceLabel}>Precio especial de lanzamiento</span>
            <div className={styles.heroPriceRow}>
              <span className={styles.heroPriceOld}>$1,200</span>
              <span className={styles.heroPrice}>$799</span>
            </div>
            <span className={styles.heroPriceSave}>Ahorras $401 USD por persona</span>
            <span className={styles.heroPriceNote}>Impuestos incluidos · Todo incluido</span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCtaBtn}
          >
            <WhatsAppIcon size={24} />
            ¡Quiero reservar mi cupo!
          </a>
          <p className={styles.heroGuarantee}>
            <Shield size={14} /> Reserva segura · Respuesta inmediata
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          COUNTDOWN + URGENCIA
          ═════════════════════════════════════════════════════════════════ */}
      <section className={styles.urgencyBar}>
        <div className={styles.sectionContainer}>
          <CountdownTimer />
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          BENEFICIOS RÁPIDOS
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatedSection className={styles.benefitsStrip}>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <Sparkles size={24} />
            <div>
              <strong>2 países, 1 precio</strong>
              <span>Panamá y Colombia</span>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <Hotel size={24} />
            <div>
              <strong>7 días todo incluido</strong>
              <span>Hoteles + desayunos</span>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <Shield size={24} />
            <div>
              <strong>Soporte 24/7</strong>
              <span>Asistencia permanente</span>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <Heart size={24} />
            <div>
              <strong>+5,000 viajeros felices</strong>
              <span>Nos recomiendan</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═════════════════════════════════════════════════════════════════
          ITINERARIO
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatedSection
        id="itinerario"
        className={`${styles.section} ${styles.sectionAlt}`}
      >
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Tu Aventura Día a Día</h2>
          <p className={styles.sectionSubtitle}>
            Cada día planeado para que solo te preocupes por disfrutar
          </p>
          <div className={styles.timeline}>
            {/* Day 1 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineCard}>
                <div className={styles.timelineCardImage}>
                  <Image
                    src="/images/paquetes/panama-medellin/hero-panama.png"
                    alt="Ciudad de Panamá skyline"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.timelineCardBody}>
                  <span className={styles.timelineCardDay}>Día 1</span>
                  <h3 className={styles.timelineCardTitle}>
                    Bienvenido a Ciudad de Panamá
                  </h3>
                  <p className={styles.timelineCardDesc}>
                    Vuelo directo Lima → Panamá con Copa Airlines. Te recibimos en el aeropuerto y te llevamos al hotel. ¡Empieza la aventura!
                  </p>
                </div>
              </div>
            </div>

            {/* Day 2-3 */}
            <div className={styles.timelineItem}>
              <div className={`${styles.timelineDot} ${styles.timelineDotAccent}`} />
              <div className={styles.timelineCard}>
                <div className={styles.timelineCardImage}>
                  <Image
                    src="/images/paquetes/panama-medellin/casco-antiguo.png"
                    alt="Casco Antiguo de Panamá"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.timelineCardBody}>
                  <span className={styles.timelineCardDay}>Día 2-3</span>
                  <h3 className={styles.timelineCardTitle}>Descubre Panamá</h3>
                  <p className={styles.timelineCardDesc}>
                    City tour por el Casco Antiguo (Patrimonio UNESCO) y el impresionante Canal de Panamá. Vive la historia y la modernidad en un solo lugar.
                  </p>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineCard}>
                <div className={styles.timelineCardImage}>
                  <Image
                    src="/images/paquetes/panama-medellin/canal-panama.png"
                    alt="Vista aérea del Canal de Panamá"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.timelineCardBody}>
                  <span className={styles.timelineCardDay}>Día 4</span>
                  <h3 className={styles.timelineCardTitle}>Vuelo a Medellín</h3>
                  <p className={styles.timelineCardDesc}>
                    Vuelo corto Panamá → Medellín (1h 26min). Te recogemos y te llevamos al hotel en la ciudad de la eterna primavera.
                  </p>
                </div>
              </div>
            </div>

            {/* Day 5-6 */}
            <div className={styles.timelineItem}>
              <div className={`${styles.timelineDot} ${styles.timelineDotAccent}`} />
              <div className={styles.timelineCard}>
                <div className={styles.timelineCardImage}>
                  <Image
                    src="/images/paquetes/panama-medellin/chiva-medellin.png"
                    alt="Tour en chiva por Medellín"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.timelineCardBody}>
                  <span className={styles.timelineCardDay}>Día 5-6</span>
                  <h3 className={styles.timelineCardTitle}>Vive Medellín</h3>
                  <p className={styles.timelineCardDesc}>
                    Tour en chiva tradicional con música y color. Explora los barrios más vibrantes, disfruta la gastronomía y enamórate de la cultura paisa.
                  </p>
                </div>
              </div>
            </div>

            {/* Day 7 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineCard}>
                <div className={styles.timelineCardImage}>
                  <Image
                    src="/images/paquetes/panama-medellin/medellin-skyline.png"
                    alt="Skyline de Medellín al atardecer"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.timelineCardBody}>
                  <span className={styles.timelineCardDay}>Día 7</span>
                  <h3 className={styles.timelineCardTitle}>Regreso a Lima</h3>
                  <p className={styles.timelineCardDesc}>
                    Vuelo Medellín → Panamá → Lima. Te llevas los mejores recuerdos de dos países increíbles. ¡Hasta la próxima aventura!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═════════════════════════════════════════════════════════════════
          CTA INTERMEDIO
          ═════════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaMid}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaMidContent}>
            <div className={styles.ctaMidText}>
              <h3>¿Te imaginas desayunando frente al Canal de Panamá?</h3>
              <p>Solo quedan pocos cupos. No dejes pasar esta oportunidad.</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaMidBtn}
            >
              <WhatsAppIcon size={22} />
              Separar mi cupo ahora
            </a>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          QUÉ INCLUYE
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatedSection id="incluye" className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Todo Esto Está Incluido</h2>
          <p className={styles.sectionSubtitle}>
            Sin sorpresas ni costos ocultos — lo que ves es lo que pagas
          </p>
          <div className={styles.includesGrid}>
            {includes.map((item, i) => (
              <div key={i} className={styles.includeItem}>
                <div className={styles.includeIcon}>{item.icon}</div>
                <div className={styles.includeText}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═════════════════════════════════════════════════════════════════
          ACTIVIDADES INCLUIDAS
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatedSection className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Experiencias Que No Olvidarás</h2>
          <p className={styles.sectionSubtitle}>
            Tours exclusivos incluidos en tu paquete sin costo adicional
          </p>
          <div className={styles.activitiesGrid}>
            {/* Casco Antiguo + Canal */}
            <div className={styles.activityCard}>
              <div className={styles.activityImage}>
                <Image
                  src="/images/paquetes/panama-medellin/canal-panama.png"
                  alt="Canal de Panamá — una de las maravillas de la ingeniería moderna"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.activityOverlay}>
                  <span className={styles.activityBadge}>Incluido</span>
                  <h3>
                    <Camera size={20} style={{ marginRight: 8, verticalAlign: "middle" }} />
                    City Tour Panamá
                  </h3>
                </div>
              </div>
              <div className={styles.activityBody}>
                <p>
                  Recorre las calles coloniales del Casco Antiguo, Patrimonio de la Humanidad por la UNESCO, y contempla el impresionante Canal de Panamá — una de las obras de ingeniería más grandes del mundo.
                </p>
              </div>
            </div>

            {/* Chiva Medellín */}
            <div className={styles.activityCard}>
              <div className={styles.activityImage}>
                <Image
                  src="/images/paquetes/panama-medellin/chiva-medellin.png"
                  alt="Tour en bus chiva colorido por las calles de Medellín"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.activityOverlay}>
                  <span className={styles.activityBadge}>Incluido</span>
                  <h3>
                    <Bus size={20} style={{ marginRight: 8, verticalAlign: "middle" }} />
                    Tour en Chiva — Medellín
                  </h3>
                </div>
              </div>
              <div className={styles.activityBody}>
                <p>
                  Vive la experiencia del famoso bus chiva colombiano. Recorre Medellín con música en vivo, luces de colores y la mejor energía de la ciudad de la eterna primavera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═════════════════════════════════════════════════════════════════
          DETALLES DEL VUELO
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatedSection id="vuelos" className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Tus Vuelos Confirmados</h2>
          <p className={styles.sectionSubtitle}>
            Vuela con Copa Airlines, la aerolínea más premiada de Centroamérica
          </p>

          <div className={styles.flightAirline}>
            <CopaIcon />
            <span>Copa Airlines</span>
          </div>

          {/* Desktop table */}
          <table className={styles.flightTable}>
            <thead>
              <tr>
                <th>Vuelo</th>
                <th>Ruta</th>
                <th>Fecha</th>
                <th>Salida</th>
                <th>Llegada</th>
                <th>Duración</th>
                <th>Avión</th>
                <th>Paradas</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((f) => (
                <tr key={f.flight}>
                  <td>CM {f.flight}</td>
                  <td>
                    {f.from} → {f.to}
                  </td>
                  <td>{f.date}</td>
                  <td>{f.departure}</td>
                  <td>{f.arrival}</td>
                  <td>{f.duration}</td>
                  <td>{f.aircraft}</td>
                  <td>{f.stops}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile cards */}
          <div className={styles.flightCards}>
            {flights.map((f) => (
              <div key={f.flight} className={styles.flightCard}>
                <div className={styles.flightCardHeader}>
                  <span className={styles.flightCardRoute}>
                    {f.from.split(" ")[0]} → {f.to.split(" ")[0]}
                  </span>
                  <span className={styles.flightCardFlight}>CM {f.flight}</span>
                </div>
                <div className={styles.flightCardDetails}>
                  <div className={styles.flightCardDetail}>
                    <small>Fecha</small>
                    <span>{f.date}</span>
                  </div>
                  <div className={styles.flightCardDetail}>
                    <small>Duración</small>
                    <span>{f.duration}</span>
                  </div>
                  <div className={styles.flightCardDetail}>
                    <small>Salida</small>
                    <span>{f.departure}</span>
                  </div>
                  <div className={styles.flightCardDetail}>
                    <small>Llegada</small>
                    <span>{f.arrival}</span>
                  </div>
                  <div className={styles.flightCardDetail}>
                    <small>Avión</small>
                    <span>{f.aircraft}</span>
                  </div>
                  <div className={styles.flightCardDetail}>
                    <small>Paradas</small>
                    <span>{f.stops}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═════════════════════════════════════════════════════════════════
          TESTIMONIOS — Prueba social
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatedSection
        id="testimonios"
        className={`${styles.section} ${styles.sectionAlt}`}
      >
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Lo Que Dicen Nuestros Viajeros</h2>
          <p className={styles.sectionSubtitle}>
            Más de 5,000 pasajeros ya vivieron la experiencia Cityland Travel
          </p>
          <div className={styles.testimoniosGrid}>
            {testimonios.map((t, i) => (
              <div key={i} className={styles.testimonioCard}>
                <div className={styles.testimonioImageWrap}>
                  <Image
                    src={t.imagen}
                    alt={`Experiencia de ${t.nombre}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.testimonioBody}>
                  <div className={styles.testimonioStars}>
                    {Array.from({ length: t.estrellas }).map((_, j) => (
                      <Star key={j} size={16} fill="#facc15" color="#facc15" />
                    ))}
                  </div>
                  <p className={styles.testimonioText}>
                    <MessageCircle size={16} style={{ marginRight: 6, opacity: 0.4 }} />
                    &ldquo;{t.texto}&rdquo;
                  </p>
                  <div className={styles.testimonioAuthor}>
                    <strong>{t.nombre}</strong>
                    <span>{t.ciudad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═════════════════════════════════════════════════════════════════
          SOCIAL PROOF / TRUST
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatedSection className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleWhite}`}>
            ¿Por Qué Miles Eligen Cityland Travel?
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.sectionSubtitleWhite}`}>
            Tu tranquilidad es nuestra prioridad
          </p>
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <div className={styles.trustNumber}>
                <AnimatedCounter target={5000} prefix="+" />
              </div>
              <div className={styles.trustLabel}>
                <Users size={18} style={{ marginRight: 6, verticalAlign: "middle" }} />
                Pasajeros felices
              </div>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustNumber}>
                <AnimatedCounter target={3} prefix="+" />
              </div>
              <div className={styles.trustLabel}>
                <Award size={18} style={{ marginRight: 6, verticalAlign: "middle" }} />
                Años de experiencia
              </div>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustNumber}>
                <ThumbsUp
                  size={32}
                  style={{ verticalAlign: "middle" }}
                />
              </div>
              <div className={styles.trustLabel}>
                98% nos recomiendan
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className={styles.trustBadge}>
              🔥 Solo quedan 15 cupos — Junio 2026
            </span>
          </div>
        </div>
      </AnimatedSection>

      {/* ═════════════════════════════════════════════════════════════════
          INCLUYE VS NO INCLUYE
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatedSection className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Transparencia Total</h2>
          <p className={styles.sectionSubtitle}>
            Sin letras pequeñas. Mira exactamente qué incluye y qué no.
          </p>
          <div className={styles.compareGrid}>
            {/* Incluye */}
            <div className={styles.compareCol}>
              <div className={`${styles.compareHeader} ${styles.compareHeaderGreen}`}>
                <Check size={20} /> Lo que SÍ incluye
              </div>
              <ul className={styles.compareList}>
                {includesList.map((item, i) => (
                  <li key={i} className={styles.compareListItem}>
                    <CheckCircle size={18} className={styles.compareCheckIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* No incluye */}
            <div className={styles.compareCol}>
              <div className={`${styles.compareHeader} ${styles.compareHeaderRed}`}>
                <XIcon size={20} /> Lo que NO incluye
              </div>
              <ul className={styles.compareList}>
                {notIncludes.map((item, i) => (
                  <li key={i} className={styles.compareListItem}>
                    <XIcon size={18} className={styles.compareCrossIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className={styles.conditions}>
            Tarifa sujeta a disponibilidad y cambios sin previo aviso.
            Se recomienda realizar la reserva con anticipación para asegurar la disponibilidad de espacios.
          </p>
        </div>
      </AnimatedSection>

      {/* ═════════════════════════════════════════════════════════════════
          FAQ — Eliminar objeciones
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatedSection id="faq" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Preguntas Frecuentes</h2>
          <p className={styles.sectionSubtitle}>
            Resolvemos todas tus dudas antes de que reserves
          </p>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} pregunta={faq.pregunta} respuesta={faq.respuesta} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═════════════════════════════════════════════════════════════════
          GARANTÍA
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatedSection className={styles.guaranteeSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.guaranteeCard}>
            <div className={styles.guaranteeIcon}>
              <Shield size={48} />
            </div>
            <div className={styles.guaranteeText}>
              <h3>Reserva con Confianza</h3>
              <p>
                Somos una agencia registrada y operamos con total transparencia.
                Si por algún motivo no podemos cumplir con el viaje, te devolvemos
                el 100% de tu dinero. Sin preguntas, sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═════════════════════════════════════════════════════════════════
          CTA FINAL — Máxima urgencia
          ═════════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaFinal} id="reservar">
        <div className={styles.sectionContainer}>
          <div className={styles.ctaFinalBadge}>Solo quedan 15 cupos</div>
          <h2 className={styles.ctaFinalTitle}>
            ¿Listo para vivir la aventura de tu vida?
          </h2>
          <p className={styles.ctaFinalSubtitle}>
            2 países · 7 días · Todo incluido · Desde <strong>$799 USD</strong>
          </p>
          <div className={styles.ctaFinalPrice}>
            <span className={styles.ctaFinalPriceOld}>$1,200</span>
            <span className={styles.ctaFinalPriceCurrent}>$799</span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaFinalBtn}
          >
            <WhatsAppIcon size={26} />
            ¡Reservar mi cupo ahora!
          </a>
          <p className={styles.ctaFinalNote}>
            <Clock size={14} /> Respuesta en menos de 5 minutos
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          FOOTER
          ═════════════════════════════════════════════════════════════════ */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Image
            src="/logo.png"
            alt="Cityland Travel"
            width={150}
            height={55}
            className={styles.footerLogo}
            style={{ objectFit: "contain" }}
          />
          <div className={styles.footerInfo}>
            <p>📍 Los Olivos, Lima, Perú</p>
            <p>
              📱 WhatsApp:{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                +51 941 551 530
              </a>
            </p>
          </div>
          <div className={styles.footerSocials}>
            <a
              href="https://instagram.com/citylandtravel"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://facebook.com/citylandtravel"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@citylandtravel"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label="TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.11a8.16 8.16 0 004.76 1.53v-3.4a4.85 4.85 0 01-1-.55z" />
              </svg>
            </a>
          </div>
          <div className={styles.footerBottom}>
            © 2026 Cityland Travel — Agencia de Viajes
          </div>
        </div>
      </footer>

      {/* ═════════════════════════════════════════════════════════════════
          FLOATING WHATSAPP BUTTON
          ═════════════════════════════════════════════════════════════════ */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloat}
        aria-label="Reservar por WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
