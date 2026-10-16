import fs from "fs/promises";
import path from "path";
import estadoInicial from "@/data/asesores.json";

export interface AsesorWhatsApp {
  id: string;
  orden: number;
  nombreInterno: string;
  telefono: string;
  telefonoVisible: string;
  activo: boolean;
  pausado: boolean;
  horaInicio: string; // "08:00"
  horaFin: string; // "22:00"
  clicsRecibidos: number;
  ultimoClicAt: string | null;
}

export interface RegistroClicWhatsApp {
  id: string;
  fechaHora: string;
  landingPage: string;
  fuenteTrafico: string;
  botonSeleccionado: string;
  asesorId: string;
  asesorNombre: string;
  asesorTelefono: string;
  esReasignacionContinuidad: boolean;
  dispositivo: string;
}

export interface EstadoDistribuidorWA {
  configuracion: {
    numeroRespaldo: string;
    respetarHorarioEstricto: boolean;
    persistenciaDias: number;
    punteroActual: number;
    totalClicsGlobal: number;
    ultimaActualizacion: string;
  };
  asesores: AsesorWhatsApp[];
  metricasPorPagina: Record<string, number>;
  historialClics: RegistroClicWhatsApp[];
}

const FILE_PATH = path.join(process.cwd(), "data", "asesores.json");

// Estado persistente en memoria del proceso Node + sincronización en disco
declare global {
  var __citylandWaDistributorState: EstadoDistribuidorWA | undefined;
}

function clonarEstadoInicial(): EstadoDistribuidorWA {
  return JSON.parse(JSON.stringify(estadoInicial)) as EstadoDistribuidorWA;
}

export async function leerEstadoDistribuidor(): Promise<EstadoDistribuidorWA> {
  if (globalThis.__citylandWaDistributorState) {
    return globalThis.__citylandWaDistributorState;
  }
  try {
    const raw = await fs.readFile(FILE_PATH, "utf-8");
    const parsed = JSON.parse(raw) as EstadoDistribuidorWA;
    globalThis.__citylandWaDistributorState = parsed;
    return parsed;
  } catch {
    const inicial = clonarEstadoInicial();
    globalThis.__citylandWaDistributorState = inicial;
    return inicial;
  }
}

export async function guardarEstadoDistribuidor(
  nuevoEstado: EstadoDistribuidorWA
): Promise<EstadoDistribuidorWA> {
  nuevoEstado.configuracion.ultimaActualizacion = new Date().toISOString();
  globalThis.__citylandWaDistributorState = nuevoEstado;
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(nuevoEstado, null, 2), "utf-8");
  } catch {
    // En caso de sistema de archivos de solo lectura en serverless, se mantiene en memoria global
  }
  return nuevoEstado;
}

/**
 * Evalúa si un asesor está dentro de su horario de atención (hora de Lima UTC-5).
 */
export function estaEnHorarioLima(asesor: AsesorWhatsApp, respetarEstricto: boolean): boolean {
  if (!respetarEstricto) return true;
  try {
    const ahoraLima = new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/Lima" })
    );
    const minutosActuales = ahoraLima.getHours() * 60 + ahoraLima.getMinutes();

    const [hIni, mIni] = (asesor.horaInicio || "08:00").split(":").map(Number);
    const [hFin, mFin] = (asesor.horaFin || "22:00").split(":").map(Number);
    const minInicio = hIni * 60 + (mIni || 0);
    const minFin = hFin * 60 + (mFin || 0);

    return minutosActuales >= minInicio && minutosActuales <= minFin;
  } catch {
    return true;
  }
}

export function esAsesorElegible(
  asesor: AsesorWhatsApp,
  respetarHorarioEstricto: boolean
): boolean {
  if (!asesor.activo) return false;
  if (asesor.pausado) return false;
  if (!/^\d{9,15}$/.test(asesor.telefono.replace(/\D/g, ""))) return false;
  return estaEnHorarioLima(asesor, respetarHorarioEstricto);
}

/**
 * Consulta cuál sería el siguiente asesor en turno SIN incrementar todavía el contador
 * (útil para pre-cargar en el cliente antes del clic y evitar bloqueadores de popups en iOS).
 */
export async function previsualizarSiguienteAsesor(
  asesorPrevioId?: string | null,
  asesorPrevioTelefono?: string | null
): Promise<{
  asesorId: string;
  telefono: string;
  nombreInterno: string;
  esContinuidad: boolean;
}> {
  const estado = await leerEstadoDistribuidor();
  const { respetarHorarioEstricto, numeroRespaldo } = estado.configuracion;

  // 1. Verificar si el visitante ya tiene un asesor asignado y sigue activo/disponible
  if (asesorPrevioId || asesorPrevioTelefono) {
    const previo = estado.asesores.find(
      (a) =>
        (asesorPrevioId && a.id === asesorPrevioId) ||
        (asesorPrevioTelefono && a.telefono === asesorPrevioTelefono)
    );
    if (previo && esAsesorElegible(previo, respetarHorarioEstricto)) {
      return {
        asesorId: previo.id,
        telefono: previo.telefono,
        nombreInterno: previo.nombreInterno,
        esContinuidad: true,
      };
    }
  }

  // 2. Buscar el siguiente asesor elegible en orden Round Robin sin mutar el puntero
  const ordenados = [...estado.asesores].sort((a, b) => a.orden - b.orden);
  const total = ordenados.length;
  if (total === 0) {
    return {
      asesorId: "respaldo",
      telefono: numeroRespaldo,
      nombreInterno: "Central de Respaldo",
      esContinuidad: false,
    };
  }

  const inicio = estado.configuracion.punteroActual % total;
  for (let i = 0; i < total; i++) {
    const candidato = ordenados[(inicio + i) % total];
    if (esAsesorElegible(candidato, respetarHorarioEstricto)) {
      return {
        asesorId: candidato.id,
        telefono: candidato.telefono,
        nombreInterno: candidato.nombreInterno,
        esContinuidad: false,
      };
    }
  }

  return {
    asesorId: "respaldo",
    telefono: numeroRespaldo,
    nombreInterno: "Central de Respaldo",
    esContinuidad: false,
  };
}

/**
 * Ejecuta la asignación oficial Round Robin cuando el visitante PULSA el botón de WhatsApp.
 * Incrementa el contador global, suma 1 clic al asesor y registra la métrica.
 */
export async function registrarClicYAsignarAsesor(params: {
  asesorPrevioId?: string | null;
  asesorPrevioTelefono?: string | null;
  landingPage: string;
  fuenteTrafico: string;
  botonSeleccionado: string;
  dispositivo: string;
}): Promise<{
  asesorId: string;
  telefono: string;
  nombreInterno: string;
  esContinuidad: boolean;
  turnoGlobal: number;
}> {
  const estado = await leerEstadoDistribuidor();
  const { respetarHorarioEstricto, numeroRespaldo } = estado.configuracion;
  const ahoraISO = new Date().toLocaleString("es-PE", { timeZone: "America/Lima" });

  let asesorElegido: AsesorWhatsApp | undefined;
  let esContinuidad = false;

  // 1. Mantener el asesor previamente asignado al visitante si sigue activo y disponible
  if (params.asesorPrevioId || params.asesorPrevioTelefono) {
    const previo = estado.asesores.find(
      (a) =>
        (params.asesorPrevioId && a.id === params.asesorPrevioId) ||
        (params.asesorPrevioTelefono && a.telefono === params.asesorPrevioTelefono)
    );
    if (previo && esAsesorElegible(previo, respetarHorarioEstricto)) {
      asesorElegido = previo;
      esContinuidad = true;
    }
  }

  // 2. Si es un nuevo visitante (o su asesor anterior está desactivado/pausado), usar Round Robin Global (1..12)
  const ordenados = [...estado.asesores].sort((a, b) => a.orden - b.orden);
  const total = ordenados.length;

  if (!asesorElegido && total > 0) {
    const punteroBase = estado.configuracion.punteroActual % total;
    for (let i = 0; i < total; i++) {
      const idx = (punteroBase + i) % total;
      const candidato = ordenados[idx];
      if (esAsesorElegible(candidato, respetarHorarioEstricto)) {
        asesorElegido = candidato;
        // Avanzar el puntero global al siguiente asesor para el próximo cliente
        estado.configuracion.punteroActual = (idx + 1) % total;
        break;
      }
    }
  }

  // 3. Contabilizar clic en el asesor o usar el número de respaldo si ninguno está disponible
  const paginaLimpia = params.landingPage || "/";
  estado.configuracion.totalClicsGlobal += 1;
  estado.metricasPorPagina[paginaLimpia] =
    (estado.metricasPorPagina[paginaLimpia] || 0) + 1;

  if (asesorElegido) {
    asesorElegido.clicsRecibidos += 1;
    asesorElegido.ultimoClicAt = ahoraISO;
  }

  const resultado = {
    asesorId: asesorElegido?.id ?? "respaldo",
    telefono: asesorElegido?.telefono ?? numeroRespaldo,
    nombreInterno: asesorElegido?.nombreInterno ?? "Central de Respaldo",
    esContinuidad,
    turnoGlobal: estado.configuracion.totalClicsGlobal,
  };

  estado.historialClics.unshift({
    id: `clic-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    fechaHora: ahoraISO,
    landingPage: paginaLimpia,
    fuenteTrafico: params.fuenteTrafico || "Directo / Orgánico",
    botonSeleccionado: params.botonSeleccionado || "Botón WhatsApp",
    asesorId: resultado.asesorId,
    asesorNombre: resultado.nombreInterno,
    asesorTelefono: resultado.telefono,
    esReasignacionContinuidad: esContinuidad,
    dispositivo: params.dispositivo || "Web",
  });

  if (estado.historialClics.length > 250) {
    estado.historialClics = estado.historialClics.slice(0, 250);
  }

  await guardarEstadoDistribuidor(estado);
  return resultado;
}
