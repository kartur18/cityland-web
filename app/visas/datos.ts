export interface ServicioVisa {
  id: string;
  titulo: string;
  pais: string;
  filtro: "usa" | "canada-mexico" | "espana";
  modalidad: string;
  tarifaDesdeUSD: number;
  tag: string;
  tagBg: string;
  img: string;
  alt: string;
  resumenCorto: string;
  checks: [string, string, string];
  waNumber: string;
}

export const SERVICIOS_VISAS: ServicioVisa[] = [
  {
    id: "visa-americana-b1b2",
    titulo: "Visa Americana B1/B2 · Primera Vez",
    pais: "Estados Unidos",
    filtro: "usa",
    modalidad: "Turismo, Compras y Negocios (10 años)",
    tarifaDesdeUSD: 120,
    tag: "#1 Más Solicitada",
    tagBg: "bg-red-600 text-white",
    img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&q=85",
    alt: "Trámite y Asesoría de Visa Americana B1/B2 en Lima Perú - Cityland Travel",
    resumenCorto:
      "Evaluación de perfil y arraigos + Llenado del Formulario DS-160 + Guía para agendar tu cita y Simulacro 1 a 1 de entrevista consular.",
    checks: ["Formulario DS-160 en inglés", "Te guiamos para agendar tu cita", "Simulacro de entrevista 1 a 1"],
    waNumber: "51944103890",
  },
  {
    id: "renovacion-visa-americana",
    titulo: "Renovación de Visa Americana",
    pais: "Estados Unidos",
    filtro: "usa",
    modalidad: "Trámite Sin Entrevista Consular",
    tarifaDesdeUSD: 99,
    tag: "Sin Entrevista",
    tagBg: "bg-blue-600 text-white",
    img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    alt: "Renovación de Visa Americana sin entrevista en Lima Perú - Cityland Travel",
    resumenCorto:
      "Renueva tu visa B1/B2 sin entrevista si cumples las condiciones de la embajada (por ejemplo, que tu visa anterior haya vencido hace menos de 12 meses). Revisamos tu caso antes de empezar.",
    checks: ["Formulario DS-160 actualizado", "Revisamos si calificas sin entrevista", "Armado de tus documentos"],
    waNumber: "51944103890",
  },
  {
    id: "visa-canada",
    titulo: "Visa de Canadá para Peruanos",
    pais: "Canadá",
    filtro: "canada-mexico",
    modalidad: "Turismo y Visita Familiar",
    tarifaDesdeUSD: 140,
    tag: "Turismo",
    tagBg: "bg-red-600 text-white",
    img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=85",
    alt: "Trámite de Visa de Canadá para peruanos en Lima - Cityland Travel",
    resumenCorto:
      "Los peruanos necesitan visa de visitante para Canadá, aunque tengan visa americana. Armamos tu solicitud en el portal oficial (IRCC) y te guiamos para la cita de biométricos en Lima.",
    checks: ["Solicitud en el portal IRCC", "Cita de biométricos en Lima", "Revisión de solvencia y arraigo"],
    waNumber: "51944103890",
  },
  {
    id: "visa-mexico",
    titulo: "Visa de México para Peruanos",
    pais: "México",
    filtro: "canada-mexico",
    modalidad: "Turismo Cancún, Riviera Maya y CDMX",
    tarifaDesdeUSD: 110,
    tag: "Cancún & CDMX",
    tagBg: "bg-emerald-600 text-white",
    img: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=85",
    alt: "Trámite de Visa de México para peruanos en Lima - Cityland Travel",
    resumenCorto:
      "Revisión de solvencia económica (boletas, estados de cuenta o propiedades), guía para pedir tu cita en la Embajada de México en Lima y carpeta lista. Si tienes visa vigente de EE.UU., Canadá, Japón, Reino Unido o Schengen, no necesitas visa mexicana.",
    checks: ["Cita Embajada de México", "Revisión de solvencia y arraigo", "Sustento de vuelo y hotel"],
    waNumber: "51944103890",
  },
  {
    id: "visado-espana-trabajo-estudios",
    titulo: "Visados a España · Estudios, Trabajo y Estancia",
    pais: "España",
    filtro: "espana",
    modalidad: "Estudios, Trabajo, Nómada Digital y Carpeta Barajas",
    tarifaDesdeUSD: 150,
    tag: "Ruta Europa",
    tagBg: "bg-amber-600 text-white",
    img: "/images/espana/gran-via-metropolis.jpg",
    alt: "Asesoría de Visado de Estudios, Trabajo y Carpeta Migratoria a España desde Perú",
    resumenCorto:
      "Orientación documental para visados de estudios, trabajo o residencia ante el Consulado de España, y armado de carpeta completa para ingreso en Barajas.",
    checks: ["Requisitos Consulado / BLS", "Seguro Schengen 30.000€", "Reserva de vuelo y hotel"],
    waNumber: "51944103890",
  },
  {
    id: "visa-familiar-grupal",
    titulo: "Trámite de Visa Familiar (Padres e Hijos)",
    pais: "Estados Unidos",
    filtro: "usa",
    modalidad: "Tarifa Especial para Familias Peruanas",
    tarifaDesdeUSD: 95,
    tag: "Descuento Familiar",
    tagBg: "bg-sky-600 text-white",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=85",
    alt: "Trámite de Visa Americana Familiar en Lima Perú - Cityland Travel",
    resumenCorto:
      "Unificamos el expediente de toda tu familia para que asistan juntos a una sola cita consular, cuidando la coherencia de cada formulario DS-160.",
    checks: ["Cita grupal unificada", "DS-160 por cada integrante", "Preparación familiar previa"],
    waNumber: "51944103890",
  },
];
