export interface ServicioVisa {
  id: string;
  titulo: string;
  pais: string;
  filtro: "usa" | "canada-mexico" | "espana";
  modalidad: string;
  tarifaDesdeSoles: number;
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
    tarifaDesdeSoles: 290,
    tarifaDesdeUSD: 79,
    tag: "#1 Más Solicitada",
    tagBg: "bg-red-600 text-white",
    img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&q=85",
    alt: "Trámite y Asesoría de Visa Americana B1/B2 en Lima Perú - Cityland Travel",
    resumenCorto:
      "Evaluación de perfil y arraigos + Llenado experto del Formulario DS-160 + Programación de cita y Simulacro 1 a 1 de entrevista consular.",
    checks: ["Formulario DS-160 en inglés", "Gestión y adelanto de cita", "Simulacro de entrevista 1 a 1"],
    waNumber: "51944031724",
  },
  {
    id: "renovacion-visa-americana",
    titulo: "Renovación Visa Americana & Adelanto de Cita",
    pais: "Estados Unidos",
    filtro: "usa",
    modalidad: "Trámite Sin Entrevista Consular",
    tarifaDesdeSoles: 220,
    tarifaDesdeUSD: 59,
    tag: "Sin Entrevista",
    tagBg: "bg-blue-600 text-white",
    img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    alt: "Renovación de Visa Americana sin entrevista en Lima Perú - Cityland Travel",
    resumenCorto:
      "Renueva tu visa B1/B2 vencida (o por vencer) sin pasar entrevista en la embajada, o adelanta tu cita consular para viajar antes.",
    checks: ["Formulario DS-160 actualizado", "Orden de envío DHL oficial", "Adelanto prioritario de cita"],
    waNumber: "51906450098",
  },
  {
    id: "visa-canada",
    titulo: "Visa de Canadá & Permiso Electrónico eTA",
    pais: "Canadá",
    filtro: "canada-mexico",
    modalidad: "Turismo, Visita Familiar y eTA Express",
    tarifaDesdeSoles: 320,
    tarifaDesdeUSD: 85,
    tag: "Turismo & eTA",
    tagBg: "bg-red-600 text-white",
    img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=85",
    alt: "Trámite de Visa de Canadá y autorización eTA en Lima Perú - Cityland Travel",
    resumenCorto:
      "Armado completo de expediente digital en el portal oficial de Canadá (IRCC), cita de biométricos en Lima o trámite rápido de eTA si tienes visa USA.",
    checks: ["Expediente digital IRCC", "Cita biométrica VFS Lima", "Trámite eTA en 24h (con visa USA)"],
    waNumber: "51942086698",
  },
  {
    id: "visa-mexico",
    titulo: "Visa de México para Peruanos",
    pais: "México",
    filtro: "canada-mexico",
    modalidad: "Turismo Cancún, Riviera Maya y CDMX",
    tarifaDesdeSoles: 250,
    tarifaDesdeUSD: 69,
    tag: "Cancún & CDMX",
    tagBg: "bg-emerald-600 text-white",
    img: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=85",
    alt: "Trámite de Visa de México para peruanos en Lima - Cityland Travel",
    resumenCorto:
      "Revisión de solvencia económica (boletas, estados de cuenta o propiedades), obtención de cita en la Embajada de México en San Isidro y carpeta lista.",
    checks: ["Cita Embajada de México", "Revisión de solvencia y arraigo", "Sustento de vuelo y hotel"],
    waNumber: "51944280151",
  },
  {
    id: "visado-espana-trabajo-estudios",
    titulo: "Visados a España · Estudios, Trabajo y Estancia",
    pais: "España",
    filtro: "espana",
    modalidad: "Estudios, Trabajo, Nómada Digital y Carpeta Barajas",
    tarifaDesdeSoles: 290,
    tarifaDesdeUSD: 79,
    tag: "Ruta Europa",
    tagBg: "bg-amber-600 text-white",
    img: "/images/espana/gran-via-metropolis.jpg",
    alt: "Asesoría de Visado de Estudios, Trabajo y Carpeta Migratoria a España desde Perú",
    resumenCorto:
      "Orientación documental para visados de estudios, trabajo o residencia ante el Consulado de España, y armado de carpeta completa para ingreso en Barajas.",
    checks: ["Requisitos Consulado / BLS", "Seguro Schengen 30.000€", "Reserva de vuelo y hotel"],
    waNumber: "51983882504",
  },
  {
    id: "visa-familiar-grupal",
    titulo: "Trámite de Visa Familiar (Padres e Hijos)",
    pais: "Estados Unidos",
    filtro: "usa",
    modalidad: "Tarifa Especial para Familias Peruanas",
    tarifaDesdeSoles: 240,
    tarifaDesdeUSD: 65,
    tag: "Descuento Familiar",
    tagBg: "bg-sky-600 text-white",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
    alt: "Trámite de Visa Americana Familiar en Lima Perú - Cityland Travel",
    resumenCorto:
      "Unificamos el expediente de toda tu familia para que asistan juntos a una sola cita consular, cuidando la coherencia de cada formulario DS-160.",
    checks: ["Cita grupal unificada", "DS-160 por cada integrante", "Preparación familiar previa"],
    waNumber: "51938845086",
  },
];
