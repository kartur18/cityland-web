"use client";

import { useState } from "react";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";

type PerfilViajero = "turismo" | "carta-invitacion" | "visado-residencia" | "retorno-diaspora";

interface AerolineaIATA {
  nombre: string;
  prefijo: string;
  codigoIATA: string;
  rutaBase: string;
  terminalBarajas: string;
  equipajeEstandar: string;
  urlVerificacion: string;
  pais: string;
}

const AEROLINEAS_EUROPA: AerolineaIATA[] = [
  {
    nombre: "Iberia",
    prefijo: "075",
    codigoIATA: "IB",
    rutaBase: "Lima (LIM) ↔ Madrid (MAD) Directo + Conexiones a Barcelona, Roma, Milán, Turín y Europa",
    terminalBarajas: "Terminal 4 y T4 Satélite (T4S)",
    equipajeEstandar: "1 o 2 maletas de 23 kg (158 cm) + 10 kg en cabina",
    urlVerificacion: "https://www.iberia.com/pe/gestion-de-reservas/",
    pais: "España",
  },
  {
    nombre: "Air Europa",
    prefijo: "996",
    codigoIATA: "UX",
    rutaBase: "Lima (LIM) ↔ Madrid (MAD) Directo (Boeing 787 Dreamliner) + Conexiones a Italia y España",
    terminalBarajas: "Terminales T1, T2 y T3",
    equipajeEstandar: "1 o 2 maletas de 23 kg (158 cm) + 10 kg en cabina",
    urlVerificacion: "https://www.aireuropa.com/pe/es/aea/gestiona-tu-reserva.html",
    pais: "España",
  },
  {
    nombre: "Plus Ultra Líneas Aéreas",
    prefijo: "649",
    codigoIATA: "PU",
    rutaBase: "Lima (LIM) ↔ Madrid (MAD) Directo y Tenerife",
    terminalBarajas: "Terminal 1 (T1)",
    equipajeEstandar: "Destaca por tarifas promocionales con 1 o 2 maletas de 23 kg",
    urlVerificacion: "https://plusultra.com/",
    pais: "España",
  },
  {
    nombre: "LATAM Airlines",
    prefijo: "045",
    codigoIATA: "LA",
    rutaBase: "Lima (LIM) ↔ Madrid (MAD) Directo y conexiones desde 18 provincias del Perú",
    terminalBarajas: "Terminal 4 Satélite (T4S)",
    equipajeEstandar: "1 maleta de 23 kg en tarifa Standard/Full + opción de 2da pieza",
    urlVerificacion: "https://www.latamairlines.com/pe/es/mis-viajes",
    pais: "Perú",
  },
  {
    nombre: "KLM / Air France",
    prefijo: "074 / 057",
    codigoIATA: "KL / AF",
    rutaBase: "Lima (LIM) ↔ Ámsterdam (AMS) / París (CDG) → Milán, Roma, Turín, Bolonia, Florencia y España",
    terminalBarajas: "Terminal 2 (Madrid) / Schiphol / CDG",
    equipajeEstandar: "1 maleta de 23 kg en tarifa Standard + conexión interlínea protegida",
    urlVerificacion: "https://www.klm.pe/trip",
    pais: "Países Bajos",
  },
];

const DESTINOS_SELECTOR = [
  "Madrid (España)",
  "Barcelona (España)",
  "Valencia (España)",
  "Sevilla (España)",
  "Bilbao / Málaga (España)",
  "Milán (Italia)",
  "Roma (Italia)",
  "Turín (Italia)",
  "Florencia / Bolonia (Italia)",
  "Génova / Nápoles (Italia)",
  "París / Ámsterdam / Otra ciudad UE",
  "Lima / Provincias (Vuelo desde Europa a Perú)",
];

export default function ModuloSeguridadYCalculadoraEuropa({
  destinoInicial = "Madrid (España)",
}: {
  destinoInicial?: string;
}) {
  const [tabActiva, setTabActiva] = useState<"precalificador" | "calculadora" | "seguridad">(
    "precalificador"
  );

  // Estado Pestaña 1: Pre-calificador de Viaje
  const [perfil, setPerfil] = useState<PerfilViajero>("turismo");
  const [destinoElegido, setDestinoElegido] = useState<string>(destinoInicial);
  const [equipaje, setEquipaje] = useState<"1x23kg" | "2x23kg">("1x23kg");
  const [mesViaje, setMesViaje] = useState<string>("Próximos 30 a 60 días");

  // Estado Pestaña 2: Calculadora Oficial BOE 2026
  const [diasEstancia, setDiasEstancia] = useState<number>(15);
  const [pasajeros, setPasajeros] = useState<number>(1);

  // Estado Pestaña 3: Verificador Educativo PNR vs E-Ticket 13 dígitos
  const [numeroTicketInput, setNumeroTicketInput] = useState<string>("");

  // Cálculo oficial BOE (Orden PRE/1282/2007 vinculada al SMI vigente: 122,10 €/día, mínimo 1.098,90 € por persona)
  const MONTO_DIARIO_BOE_EUR = 122.1;
  const MINIMO_POR_PERSONA_BOE_EUR = 1098.9;
  const calculoPorPersona = Math.max(
    MINIMO_POR_PERSONA_BOE_EUR,
    Number((diasEstancia * MONTO_DIARIO_BOE_EUR).toFixed(2))
  );
  const calculoTotalGrupo = Number((calculoPorPersona * pasajeros).toFixed(2));

  // Identificación de prefijo IATA de 3 dígitos
  const limpioDigitos = numeroTicketInput.replace(/[^0-9]/g, "");
  const prefijoTres = limpioDigitos.slice(0, 3);
  const aerolineaDetectada = AEROLINEAS_EUROPA.find((a) =>
    a.prefijo.split("/").map((s) => s.trim()).includes(prefijoTres)
  );

  const infoPerfil: Record<
    PerfilViajero,
    {
      titulo: string;
      subtitulo: string;
      tipoBoletoExigido: string;
      checklist: string[];
      advertenciaLegal: string;
      servicioRecomendado: string;
    }
  > = {
    turismo: {
      titulo: "1. Turismo o Primer Viaje de Corta Estancia (Hasta 90 días)",
      subtitulo: "Viajeros con pasaporte peruano sin visa que se hospedarán en hotel o alojamiento turístico",
      tipoBoletoExigido: "Obligatorio Boleto de Ida y Vuelta (< 90 días) con E-Ticket de 13 dígitos",
      checklist: [
        "Pasaporte biométrico peruano con vigencia mínima de 3 meses tras la fecha de retorno.",
        "Boleto aéreo de ida y vuelta cerrado y confirmado (máximo 90 días dentro de 180 días).",
        "Reserva de hotel verificable y garantizada por la totalidad de las noches del viaje.",
        "Seguro médico Schengen con cobertura mínima de 30.000 €, sin deducible ni copago.",
        "Acreditación de medios económicos (en España: 122,10 €/día con mínimo obligatorio de 1.098,90 € por persona).",
        "Registro biométrico digital EES al llegar al aeropuerto europeo (vigente desde abril 2026).",
      ],
      advertenciaLegal:
        "Normativa UE (Reglamento 2018/1806): La exención de visado de corta estancia es exclusivamente para turismo, visitas privadas o negocios no remunerados. No autoriza a trabajar en Europa.",
      servicioRecomendado: "Paquete Vuelo I/V + Reserva Hotelera Verificable + Seguro Schengen 30.000€",
    },
    "carta-invitacion": {
      titulo: "2. Visita a Familiar o Amigo Residente en España o Italia (< 90 días)",
      subtitulo: "Viajeros que cuentan con Carta de Invitación Policial (España) o Lettera di Invito (Italia)",
      tipoBoletoExigido: "Obligatorio Boleto de Ida y Vuelta sincronizado exactamente con las fechas de tu Carta",
      checklist: [
        "España: Carta de Invitación original tramitada por tu anfitrión en la Comisaría de Policía Nacional (Orden PRE/1283/2007).",
        "Italia: Lettera di Invito firmada por el residente + obligación de presentar la Dichiarazione di Ospitalità en la Questura dentro de las 48 horas de tu llegada (Art. 7 T.U. Immigrazione).",
        "¡Importante! Si viajas con Carta de Invitación NO debes pagar hotel, pero las fechas de tu vuelo y seguro deben coincidir con el período autorizado en la carta.",
        "La Carta de Invitación acredita el alojamiento, pero NO exime de demostrar los medios económicos propios exigidos en frontera (mín. 1.098,90 € en España).",
        "Seguro médico Schengen de 30.000 € sin deducible por todos los días del viaje.",
      ],
      advertenciaLegal:
        "En el control fronterizo de Madrid-Barajas o Roma/Milán declara siempre con veracidad que visitas a tu familiar presentando tu Carta de Invitación oficial.",
      servicioRecomendado: "Pack Vuelo Ida y Vuelta + Seguro Schengen 30.000€ Sincronizado (Sin gasto de hotel)",
    },
    "visado-residencia": {
      titulo: "3. Viajero con Visado Aprobado (Estudios / Trabajo / Reagrupación) o Residencia",
      subtitulo: "Titulares de Visado Nacional Tipo D (RD 1155/2024 o Decreto Flussi), TIE, Permesso di Soggiorno o Pasaporte UE",
      tipoBoletoExigido: "Habilitado para Boleto de Solo Ida (One-Way) o Ida y Vuelta con 1 o 2 maletas de 23 kg",
      checklist: [
        "Visado Nacional Tipo D vigente estampado en el pasaporte por el Consulado de España o la Embajada de Italia en Lima (o tarjeta TIE / Permesso di Soggiorno vigente).",
        "Al contar con visado de larga duración o residencia, las aerolíneas en Lima SÍ permiten embarcar con boleto de Solo Ida (One-Way).",
        "Para visado de estudios (RD 1155/2024): Póliza médica completa sin copagos ni carencias si tu estancia requiere seguro privado.",
        "Para Reagrupación Familiar / Ricongiungimento Familiare: Resolución o Nulla Osta acompañado de tu pasaporte visado.",
        "Si viajas de Europa a Perú con TIE en renovación: llevar Autorización de Regreso policial española y priorizar vuelo directo Madrid–Lima.",
      ],
      advertenciaLegal:
        "Los boletos de Solo Ida (One-Way) hacia el Espacio Schengen se emiten exclusivamente para pasajeros que cuentan con Visado Tipo D, residencia vigente o pasaporte europeo.",
      servicioRecomendado: "Boleto One-Way o Estudiantil/Familiar con 1 o 2 Maletas de 23 kg + Seguro sin Copago",
    },
    "retorno-diaspora": {
      titulo: "4. Residente en Europa (Viaje Europa → Perú o Compra para Familiar en Perú)",
      subtitulo: "Comunidad peruana en Madrid, Barcelona, Milán, Roma, Turín y Florencia",
      tipoBoletoExigido: "Boleto Europa ↔ Lima (y conexiones a Trujillo, Arequipa, Chiclayo, Piura, Huancayo, Cusco)",
      checklist: [
        "Salidas desde Madrid, Barcelona, Milán, Roma, Turín, Florencia, Bolonia, Génova, Valencia, Sevilla y Bilbao hacia Lima.",
        "Opción de emitir en Lima el pasaje de tus padres, hijos o cónyuge pagando desde Europa con total respaldo empresarial (RUC 20614914239).",
        "Gestión gratuita de asistencia en silla de ruedas (SSR WCHR) en aeropuertos para padres adultos mayores que viajan solos.",
        "Tarifas especiales con 2 maletas de 23 kg en bodega para llevar encargos y regalos familiares.",
      ],
      advertenciaLegal:
        "Si resides en Italia y viajas al Perú con Ricevuta de renovación del Permesso di Soggiorno, consulta con nuestros asesores las reglas de tránsito aeroportuario antes de elegir tu escala.",
      servicioRecomendado: "Boleto Europa ↔ Perú con 2 Maletas 23 kg o Emisión para Familiar con Asistencia en Aeropuerto",
    },
  };

  const datosPerfilActual = infoPerfil[perfil];
  const mensajeWaPrecalificado = `¡Hola Cityland Travel! Utilicé su Planificador Oficial Europa y deseo cotizar:\n• Modalidad: ${datosPerfilActual.titulo}\n• Ruta / Destino: ${destinoElegido}\n• Equipaje requerido: ${equipaje === "2x23kg" ? "2 maletas de 23 kg en bodega" : "1 maleta de 23 kg en bodega"}\n• Fecha estimada: ${mesViaje}\n• Producto: ${datosPerfilActual.servicioRecomendado}`;

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-[#0a1628] to-[#0f213c] text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabecera del Módulo Interactivo */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex flex-wrap items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-4">
              <FlagIcon pais="España" className="w-4 h-3" />
              <FlagIcon pais="Italia" className="w-4 h-3" />
              <FlagIcon pais="Perú" className="w-4 h-3" />
              <span>Centro Oficial de Verificación Aérea y Normativa Europea · Revisión Octubre 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Planifica tu Viaje a España e Italia con Respaldo Verificable
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              6 años de experiencia en la ruta Lima–Madrid y 12 asesores especializados. Diferenciamos con total transparencia turismo sin visa, visitas con Carta de Invitación, viajes con Visado D (RD 1155/2024 / Decreto Flussi) y boletos para residentes.
            </p>
          </div>

          {/* Selector de las 3 Herramientas Interactivas */}
          <div className="flex flex-wrap gap-2 bg-slate-950/70 p-1.5 rounded-2xl border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setTabActiva("precalificador")}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                tabActiva === "precalificador"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              1. Tu Modalidad de Viaje
            </button>
            <button
              type="button"
              onClick={() => setTabActiva("calculadora")}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                tabActiva === "calculadora"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              2. Calculadora BOE 2026 & EES
            </button>
            <button
              type="button"
              onClick={() => setTabActiva("seguridad")}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                tabActiva === "seguridad"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              3. Verificar PNR y Boleto 13 Dígitos
            </button>
          </div>
        </div>

        {/* PESTAÑA 1: PRE-CALIFICADOR DE VIAJE Y COTIZADOR DIRECTO */}
        {tabActiva === "precalificador" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Columna Izquierda: Selección de Perfil y Parámetros */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/15 space-y-5">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-amber-300 block mb-2.5">
                  Paso 1: ¿Cuál es el motivo o documento de tu viaje?
                </label>
                <div className="space-y-2">
                  {(
                    [
                      {
                        id: "turismo",
                        label: "Turismo / Primer Viaje (< 90 días sin visa)",
                        badge: "Vuelo I/V + Hotel + Seguro",
                      },
                      {
                        id: "carta-invitacion",
                        label: "Visita Familiar con Carta de Invitación",
                        badge: "Vuelo I/V + Seguro (Sin Hotel)",
                      },
                      {
                        id: "visado-residencia",
                        label: "Tengo Visado D (Estudios/Trabajo/Reagrupación) o TIE",
                        badge: "Apto Boleto Solo Ida",
                      },
                      {
                        id: "retorno-diaspora",
                        label: "Vivo en Europa / Compro para Familiar en Perú",
                        badge: "Europa ↔ Perú / Asistencia",
                      },
                    ] as const
                  ).map((op) => (
                    <button
                      key={op.id}
                      type="button"
                      onClick={() => setPerfil(op.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        perfil === op.id
                          ? "bg-white text-[#0a1628] border-white shadow-lg font-extrabold"
                          : "bg-slate-900/60 text-slate-200 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <span className="text-xs sm:text-sm leading-snug">{op.label}</span>
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full shrink-0 ${
                          perfil === op.id
                            ? "bg-red-600 text-white"
                            : "bg-white/10 text-amber-300"
                        }`}
                      >
                        {op.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="select-destino-europa"
                    className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1.5"
                  >
                    Ciudad de Destino / Ruta
                  </label>
                  <select
                    id="select-destino-europa"
                    value={destinoElegido}
                    onChange={(e) => setDestinoElegido(e.target.value)}
                    className="w-full bg-slate-900 border border-white/20 rounded-xl px-3 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-amber-400"
                  >
                    {DESTINOS_SELECTOR.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="select-mes-europa"
                    className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1.5"
                  >
                    Temporada de Viaje
                  </label>
                  <select
                    id="select-mes-europa"
                    value={mesViaje}
                    onChange={(e) => setMesViaje(e.target.value)}
                    className="w-full bg-slate-900 border border-white/20 rounded-xl px-3 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Próximos 30 a 60 días">Próximos 30 a 60 días</option>
                    <option value="Octubre - Noviembre (Temporada Ahorro)">
                      Octubre - Noviembre (Ahorro)
                    </option>
                    <option value="Diciembre - Navidad y Fin de Año">
                      Diciembre (Navidad / Fin de Año)
                    </option>
                    <option value="Enero - Febrero 2027">Enero - Febrero 2027</option>
                    <option value="Marzo - Mayo (Primavera Europea)">
                      Marzo - Mayo (Primavera)
                    </option>
                    <option value="Junio - Agosto (Verano Europeo)">
                      Junio - Agosto (Verano)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                  Franquicia de Equipaje en Bodega (23 kg)
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setEquipaje("1x23kg")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      equipaje === "1x23kg"
                        ? "bg-amber-400 text-[#0a1628] border-amber-300 font-extrabold"
                        : "bg-slate-900/60 text-slate-300 border-white/15"
                    }`}
                  >
                    🧳 1 Maleta 23 kg + 10 kg
                  </button>
                  <button
                    type="button"
                    onClick={() => setEquipaje("2x23kg")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      equipaje === "2x23kg"
                        ? "bg-amber-400 text-[#0a1628] border-amber-300 font-extrabold"
                        : "bg-slate-900/60 text-slate-300 border-white/15"
                    }`}
                  >
                    🧳🧳 2 Maletas de 23 kg
                  </button>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Checklist Oficial Personalizado y Botón Pre-Calificado */}
            <div className="lg:col-span-7 bg-white text-[#0a1628] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 block">
                      Diagnóstico Documental y Aéreo
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1628]">
                      {datosPerfilActual.titulo}
                    </h3>
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-extrabold px-3 py-1 rounded-full">
                    {datosPerfilActual.tipoBoletoExigido}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  {datosPerfilActual.subtitulo}
                </p>

                <div className="space-y-2.5 mb-5">
                  {datosPerfilActual.checklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs sm:text-sm text-slate-800"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-3.5 text-xs text-amber-950 mb-6">
                  <strong className="font-extrabold">📌 Nota Legal Oficial: </strong>
                  {datosPerfilActual.advertenciaLegal}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400 block">
                    Servicio Recomendado para tu Caso
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0a1628]">
                    {datosPerfilActual.servicioRecomendado}
                  </span>
                </div>

                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent(mensajeWaPrecalificado)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-xs sm:text-sm px-6 py-4 rounded-2xl shadow-lg shrink-0"
                >
                  <WhatsAppIcon size={18} />
                  <span>Cotizar mi Caso con un Especialista</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA 2: CALCULADORA OFICIAL DE MEDIOS ECONÓMICOS BOE 2026 Y SISTEMA EES */}
        {tabActiva === "calculadora" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 bg-white text-[#0a1628] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-red-50 text-red-600 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                  BOE España · Orden PRE/1282/2007 (SMI Vigente)
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] mb-2">
                  Calculadora Oficial de Bolsa de Viaje para España (2026)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  La normativa española exige acreditar <strong className="text-[#0a1628]">122,10 € por persona y día</strong> de estancia, con un <strong className="text-[#0a1628]">piso mínimo obligatorio de 1.098,90 € por persona</strong> (incluso si viajas de 1 a 9 días).
                </p>

                <div className="space-y-5 mb-6">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-bold mb-1.5">
                      <span>Días de estancia en tu boleto (Máx. 90 días sin visa):</span>
                      <span className="text-red-600 font-extrabold">{diasEstancia} días</span>
                    </div>
                    <input
                      type="range"
                      min={3}
                      max={90}
                      value={diasEstancia}
                      onChange={(e) => setDiasEstancia(Number(e.target.value))}
                      className="w-full accent-red-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>3 días (Mínimo BOE)</span>
                      <span>15 días (Recomendado)</span>
                      <span>30 días</span>
                      <span>90 días (Tope Schengen)</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs sm:text-sm font-bold block mb-2">
                      Número de pasajeros que viajan:
                    </span>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setPasajeros(n)}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                            pasajeros === n
                              ? "bg-[#0a1628] text-white border-[#0a1628]"
                              : "bg-slate-50 text-slate-700 border-slate-200"
                          }`}
                        >
                          {n} {n === 1 ? "Viajero" : "Viajeros"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase text-amber-300 block">
                      Monto Oficial por Persona ({diasEstancia} días)
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      {calculoPorPersona.toLocaleString("es-PE", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      €
                    </span>
                    <span className="text-[11px] text-slate-300 block mt-0.5">
                      {diasEstancia <= 9
                        ? "Aplica el mínimo legal obligatorio BOE (90% SMI)"
                        : `Cálculo: ${diasEstancia} días × 122,10 €/día`}
                    </span>
                  </div>

                  {pasajeros > 1 && (
                    <div className="border-t sm:border-t-0 sm:border-l border-white/15 pt-3 sm:pt-0 sm:pl-4">
                      <span className="text-[11px] font-bold uppercase text-emerald-300 block">
                        Total para {pasajeros} Pasajeros
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                        {calculoTotalGrupo.toLocaleString("es-PE", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        €
                      </span>
                      <span className="text-[11px] text-slate-300 block mt-0.5">
                        Acreditable en efectivo + tarjetas + extracto impreso
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-[11px] text-slate-500 mt-4">
                Fuente oficial: Boletín Oficial del Estado (BOE) de España — Orden PRE/1282/2007 y Consulado General de España en Lima.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-block bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                  Unión Europea · travel-europe.europa.eu
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Estado Oficial del Sistema EES y ETIAS en 2026
                </h3>

                <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold uppercase text-emerald-400">
                      ✓ EES (Entry/Exit System) — EN OPERACIÓN
                    </span>
                    <span className="text-[11px] text-slate-400">Activo desde 10/04/2026</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    El sistema digital de Entradas y Salidas de la UE ya está plenamente operativo en Madrid-Barajas, Barcelona, Roma-Fiumicino, Milán-Malpensa, París y Ámsterdam. Reemplaza el sello manual del pasaporte por un registro biométrico (rostro y huellas dactilares) que calcula automáticamente los <strong>90 días permitidos en cualquier período de 180 días</strong>.
                  </p>
                </div>

                <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold uppercase text-amber-300">
                      ⚠️ ETIAS — AÚN NO ACTIVO (NO SE TRAMITA HOY)
                    </span>
                    <span className="text-[11px] text-slate-400">Portal Oficial UE</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    De acuerdo con el portal oficial de la Unión Europea (<code>travel-europe.europa.eu/etias</code>), la autorización electrónica <strong>ETIAS todavía no está en funcionamiento ni recibe solicitudes</strong>. No pagues en sitios web no oficiales que ofrezcan tramitar ETIAS por adelantado.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <Link
                  href="/blog/sistema-ees-biometrico-europa-2026-que-cambia-para-peruanos"
                  className="text-xs font-extrabold text-amber-300 hover:underline"
                >
                  Leer guía oficial EES y ETIAS 2026 →
                </Link>
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent(
                    `¡Hola Cityland Travel! Calculé mi viaje a Europa por ${diasEstancia} días para ${pasajeros} pasajero(s) y quiero cotizar mi paquete con fechas exactas.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs px-5 py-3 rounded-xl"
                >
                  <WhatsAppIcon size={16} />
                  <span>Cotizar por {diasEstancia} Días</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA 3: SEGURIDAD EN LA COMPRA DE BOLETOS (PNR vs E-TICKET 13 DÍGITOS IATA) */}
        {tabActiva === "seguridad" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white text-[#0a1628] rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-4">
              <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                Resolución IATA 722f · Compra 100% Segura
              </span>
              <h3 className="text-xl font-extrabold text-[#0a1628]">
                Diferencia entre Código PNR y Número de Boleto Electrónico (13 Dígitos)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Un <strong>Código PNR (6 letras/números, ej. K8M4P2)</strong> puede ser solo una reserva temporal en espera (<em>Hold</em>). Tu pasaje solo está 100% emitido y pagado cuando cuenta con el <strong>Número de Boleto Electrónico IATA de 13 dígitos</strong>:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <label
                  htmlFor="input-prefijo-iata"
                  className="text-xs font-extrabold text-[#0a1628] block"
                >
                  Comprueba a qué aerolínea pertenece un boleto (escribe los primeros 3 dígitos):
                </label>
                <input
                  id="input-prefijo-iata"
                  type="text"
                  placeholder="Ej: 075-2489103847 o 996 o 649"
                  value={numeroTicketInput}
                  onChange={(e) => setNumeroTicketInput(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-[#0a1628] focus:outline-none focus:border-red-600"
                />
                {prefijoTres.length === 3 && (
                  <div className="pt-2 text-xs">
                    {aerolineaDetectada ? (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-3">
                        <p className="font-extrabold">
                          ✓ Prefijo IATA {prefijoTres}: {aerolineaDetectada.nombre} ({aerolineaDetectada.codigoIATA})
                        </p>
                        <p className="mt-1 text-[11px]">{aerolineaDetectada.rutaBase}</p>
                        <a
                          href={aerolineaDetectada.urlVerificacion}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-1.5 font-extrabold text-emerald-800 underline"
                        >
                          Ir a &ldquo;Gestionar mi reserva&rdquo; oficial de {aerolineaDetectada.nombre} →
                        </a>
                      </div>
                    ) : (
                      <p className="text-slate-600">
                        Prefijo <strong>{prefijoTres}</strong>: consulta con nuestros asesores para validarlo en el sistema GDS Amadeus / Sabre.
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3.5 text-xs text-rose-950">
                <strong className="font-extrabold">⚠️ Regla del No-Show (No omitir tramos): </strong>
                Si compras un boleto con conexión (ej. <em>Trujillo → Lima → Madrid</em> o <em>Lima → Madrid → Milán</em>) y no te presentas al primer tramo, la aerolínea anula automáticamente todos los tramos siguientes y el retorno.
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/15">
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-4">
                Tabla Oficial de Aerolíneas y Prefijos IATA en Rutas Perú ↔ España e Italia
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-white/15 text-amber-300 uppercase tracking-wider text-[11px]">
                      <th className="py-2.5 pr-3">Aerolínea</th>
                      <th className="py-2.5 px-3">Prefijo E-Ticket</th>
                      <th className="py-2.5 px-3">Terminal Madrid</th>
                      <th className="py-2.5 pl-3">Equipaje y Ruta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-slate-200">
                    {AEROLINEAS_EUROPA.map((a) => (
                      <tr key={a.nombre} className="hover:bg-white/5">
                        <td className="py-3 pr-3 font-extrabold text-white">
                          <div className="flex items-center gap-2">
                            <FlagIcon pais={a.pais} className="w-3.5 h-2.5" />
                            <span>{a.nombre}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-mono font-extrabold px-2 py-0.5 rounded-md">
                            {a.prefijo}-xxxxxxxxxx
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-300">{a.terminalBarajas}</td>
                        <td className="py-3 pl-3 text-slate-300">{a.equipajeEstandar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/blog/como-verificar-reserva-pnr-y-boleto-electronico-13-digitos-iata"
                  className="text-xs font-extrabold text-amber-300 hover:underline"
                >
                  Ver guía completa de seguridad en compra de pasajes →
                </Link>
                <Link
                  href="/guia-europa"
                  className="text-xs font-extrabold bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-colors"
                >
                  Explorar Hub Europa Migratorio (100 Guías y Rutas) →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Pie Institucional de Transparencia Legal */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="max-w-4xl leading-relaxed">
            <strong className="text-slate-200">Transparencia Institucional:</strong> Cityland Travel E.I.R.L. (RUC 20614914239 · Av. Antúnez de Mayolo N. 814, Los Olivos, Lima) es una agencia de viajes y turismo formal. Emitimos boletos aéreos verificables, reservas de hotel y seguros Schengen. La información sobre requisitos se basa en fuentes oficiales vigentes (BOE, Consulado de España en Lima, Embajada de Italia en Lima y Unión Europea) y no sustituye el asesoramiento jurídico de extranjería ni las decisiones soberanas de las autoridades fronterizas.
          </p>
          <Link
            href="/guia-europa"
            className="text-amber-300 hover:text-amber-200 font-extrabold shrink-0"
          >
            Centro Oficial Europa →
          </Link>
        </div>
      </div>
    </section>
  );
}
