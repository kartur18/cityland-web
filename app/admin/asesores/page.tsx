"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { AsesorWhatsApp, EstadoDistribuidorWA } from "@/lib/distribuidor-wa";

export default function AdminAsesoresPage() {
  const [autenticado, setAutenticado] = useState(false);
  const [pin, setPin] = useState("");
  const [errorPin, setErrorPin] = useState("");
  const [estado, setEstado] = useState<EstadoDistribuidorWA | null>(null);
  const [guardando, setGuardando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [probandoTurno, setProbandoTurno] = useState(false);

  const cargarDatos = async (claveAdmin?: string) => {
    try {
      const res = await fetch("/api/whatsapp/asesores", {
        cache: "no-store",
        headers: {
          "x-admin-pin": claveAdmin ?? pin,
        },
      });
      const data = await res.json();
      if (res.ok && data?.estado) {
        setEstado(data.estado);
        setAutenticado(true);
        setErrorPin("");
      } else {
        setErrorPin(data?.error || "Credenciales de administrador inválidas.");
      }
    } catch {
      setErrorPin("Error de conexión con el servidor.");
    }
  };

  const ingresar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin.trim()) {
      setErrorPin("Ingresa tu clave de administrador.");
      return;
    }
    await cargarDatos(pin.trim());
  };

  const actualizarAsesor = (id: string, cambios: Partial<AsesorWhatsApp>) => {
    if (!estado) return;
    setEstado({
      ...estado,
      asesores: estado.asesores.map((a) => (a.id === id ? { ...a, ...cambios } : a)),
    });
  };

  const agregarNuevoAsesor = () => {
    if (!estado) return;
    const siguienteOrden = estado.asesores.length + 1;
    const numStr = String(siguienteOrden).padStart(2, "0");
    const nuevo: AsesorWhatsApp = {
      id: `asesor-${Date.now()}`,
      orden: siguienteOrden,
      nombreInterno: `Asesor Comercial ${numStr}`,
      telefono: "51944103890",
      telefonoVisible: "+51 944 103 890",
      activo: false,
      pausado: false,
      horaInicio: "08:00",
      horaFin: "22:00",
      clicsRecibidos: 0,
      ultimoClicAt: null,
    };
    setEstado({
      ...estado,
      asesores: [...estado.asesores, nuevo],
    });
  };

  const guardarConfiguracion = async () => {
    if (!estado) return;
    setGuardando(true);
    setMensaje("");
    try {
      const res = await fetch("/api/whatsapp/asesores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-pin": pin,
        },
        body: JSON.stringify({ pin, estado }),
      });
      const data = await res.json();
      if (data?.ok) {
        setEstado(data.estado);
        setMensaje("¡Configuración de los asesores y turnos guardada en producción!");
      } else {
        setMensaje(data?.error || "Error al guardar.");
      }
    } catch {
      setMensaje("No se pudo conectar con el servidor.");
    } finally {
      setGuardando(false);
    }
  };

  const simularClicRoundRobin = async () => {
    setProbandoTurno(true);
    try {
      const res = await fetch("/api/whatsapp/asignar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          asesorPrevioId: null,
          asesorPrevioTelefono: null,
          landingPage: "/prueba-panel-admin",
          fuenteTrafico: "Simulación Admin",
          botonSeleccionado: "Botón Simulador Round Robin",
          dispositivo: "Panel Admin",
        }),
      });
      const data = await res.json();
      if (data?.ok) {
        setMensaje(
          `Turno simulado #${data.turnoGlobal}: asignado a ${data.nombreInterno} (+${data.telefono})`
        );
        await cargarDatos();
      }
    } finally {
      setProbandoTurno(false);
    }
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-[#071326] flex items-center justify-center px-5">
        <form
          onSubmit={ingresar}
          className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100"
        >
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
            Cityland Travel · Acceso Restringido
          </span>
          <h1 className="text-2xl font-extrabold text-[#0a1628] mb-2">
            Panel de Distribución WhatsApp
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            Acceso exclusivo para gerencia. La gestión diaria de leads y conversaciones se realiza desde el CRM central (portal.citylandtravel.com).
          </p>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            Clave de Administrador
          </label>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Ingresa tu clave privada de servidor"
            autoComplete="current-password"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:border-blue-600"
          />
          {errorPin && <p className="text-red-600 text-xs font-semibold mb-3">{errorPin}</p>}
          <button
            type="submit"
            className="w-full bg-[#0a1628] hover:bg-blue-900 text-white font-bold text-sm py-3.5 rounded-xl transition-colors cursor-pointer"
          >
            Verificar Credenciales
          </button>
        </form>
      </div>
    );
  }

  if (!estado) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-sm font-bold text-slate-500">
        Cargando estado de los 12 asesores...
      </div>
    );
  }

  const activosElegibles = estado.asesores.filter((a) => a.activo && !a.pausado).length;
  const totalClics = estado.configuracion.totalClicsGlobal || 0;
  const siguienteIndice =
    estado.asesores.length > 0
      ? estado.configuracion.punteroActual % estado.asesores.length
      : 0;
  const siguienteAsesor = estado.asesores[siguienteIndice];

  return (
    <div className="min-h-screen bg-slate-50 text-[#0a1628] pb-20">
      <header className="bg-[#071326] text-white py-5 px-6 border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 block">
              Distribución Automática por Turnos (Round Robin Global)
            </span>
            <h1 className="text-xl font-extrabold">
              Cityland Travel — Panel Administrativo de los {estado.asesores.length} Números WhatsApp
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/admin/tarifas"
              className="text-xs font-bold text-white/90 hover:text-white bg-white/10 px-4 py-2.5 rounded-xl"
            >
              Ir a Panel de Tarifas
            </Link>
            <Link
              href="/"
              className="text-xs font-bold text-white/80 hover:text-white border border-white/20 px-4 py-2.5 rounded-xl"
            >
              Ver Web Pública
            </Link>
            <button
              onClick={simularClicRoundRobin}
              disabled={probandoTurno}
              className="bg-amber-500 hover:bg-amber-400 text-[#071326] text-xs font-extrabold px-4 py-2.5 rounded-xl cursor-pointer"
            >
              {probandoTurno ? "Probando..." : "⚡ Probar Siguiente Turno"}
            </button>
            <button
              onClick={agregarNuevoAsesor}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer"
            >
              + Agregar Número
            </button>
            <button
              onClick={guardarConfiguracion}
              disabled={guardando}
              className="bg-[#25D366] hover:bg-[#1fb855] text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-md cursor-pointer"
            >
              {guardando ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 pt-8 space-y-8">
        {mensaje && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 px-5 py-3.5 rounded-2xl text-sm font-bold flex items-center justify-between">
            <span>✓ {mensaje}</span>
            <button onClick={() => setMensaje("")} className="text-xs underline">
              Cerrar
            </button>
          </div>
        )}

        {/* Resumen Operativo en Tiempo Real */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Asesores Recibiendo Turnos
            </span>
            <p className="text-3xl font-extrabold text-[#0a1628] mt-1">
              {activosElegibles}{" "}
              <span className="text-sm font-semibold text-slate-400">
                / {estado.asesores.length} activos
              </span>
            </p>
            <span className="text-xs text-emerald-700 font-semibold mt-1 block">
              Salta automáticamente pausados/inactivos
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Siguiente en la Fila (Round Robin)
            </span>
            <p className="text-xl font-extrabold text-blue-700 mt-1 truncate">
              {siguienteAsesor
                ? `#${siguienteAsesor.orden} · ${siguienteAsesor.nombreInterno}`
                : "Respaldo"}
            </p>
            <span className="text-xs text-slate-500 font-mono mt-1 block">
              +{siguienteAsesor?.telefono || estado.configuracion.numeroRespaldo}
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Total Clics a WhatsApp Registrados
            </span>
            <p className="text-3xl font-extrabold text-[#0a1628] mt-1">{totalClics}</p>
            <span className="text-xs text-slate-500 mt-1 block">
              Medido al pulsar el botón (GA4 activo)
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Número de Guardia / Respaldo
            </label>
            <input
              type="text"
              value={estado.configuracion.numeroRespaldo}
              onChange={(e) =>
                setEstado({
                  ...estado,
                  configuracion: {
                    ...estado.configuracion,
                    numeroRespaldo: e.target.value.replace(/\D/g, ""),
                  },
                })
              }
              className="w-full border border-slate-300 rounded-xl px-3 py-1.5 text-sm font-mono font-bold text-[#0a1628]"
            />
            <label className="inline-flex items-center gap-1.5 text-[11px] text-slate-600 font-semibold mt-2 cursor-pointer">
              <input
                type="checkbox"
                checked={estado.configuracion.respetarHorarioEstricto}
                onChange={(e) =>
                  setEstado({
                    ...estado,
                    configuracion: {
                      ...estado.configuracion,
                      respetarHorarioEstricto: e.target.checked,
                    },
                  })
                }
              />
              Filtrar por horario de cada asesor
            </label>
          </div>
        </section>

        {/* Tabla de los 12 Asesores */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-extrabold text-[#0a1628]">
                Administración de los {estado.asesores.length} Canales de WhatsApp Business
              </h2>
              <p className="text-xs text-slate-500">
                Los nombres internos de esta tabla son privados (solo para que tú identifiques cada línea). Nunca se muestran en la web pública.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase">
                <tr>
                  <th className="py-3 px-4">Turno</th>
                  <th className="py-3 px-4">Etiqueta Interna (Privada)</th>
                  <th className="py-3 px-4">Número WhatsApp (51...)</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4">Pausa Temporal</th>
                  <th className="py-3 px-4">Horario Atención</th>
                  <th className="py-3 px-4">Clics Recibidos</th>
                  <th className="py-3 px-4">Último Clic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {estado.asesores.map((asesor, idx) => {
                  const enColaSiguiente = idx === siguienteIndice;
                  const disponible = asesor.activo && !asesor.pausado;
                  const porcentaje =
                    totalClics > 0
                      ? Math.round((asesor.clicsRecibidos / totalClics) * 100)
                      : 0;

                  return (
                    <tr
                      key={asesor.id}
                      className={
                        enColaSiguiente
                          ? "bg-blue-50/40"
                          : !disponible
                          ? "bg-slate-50/70 opacity-75"
                          : ""
                      }
                    >
                      <td className="py-3 px-4 font-extrabold text-[#0a1628]">
                        <span className="inline-flex items-center gap-1.5">
                          #{asesor.orden}
                          {enColaSiguiente && (
                            <span className="bg-blue-600 text-white text-[9px] uppercase px-2 py-0.5 rounded-full">
                              Siguiente
                            </span>
                          )}
                        </span>
                      </td>

                      <td className="py-3 px-4">
                        <input
                          type="text"
                          value={asesor.nombreInterno}
                          onChange={(e) =>
                            actualizarAsesor(asesor.id, { nombreInterno: e.target.value })
                          }
                          className="border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-[#0a1628] w-44"
                        />
                      </td>

                      <td className="py-3 px-4">
                        <input
                          type="text"
                          value={asesor.telefono}
                          onChange={(e) =>
                            actualizarAsesor(asesor.id, {
                              telefono: e.target.value.replace(/\D/g, ""),
                            })
                          }
                          className="border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-mono font-bold text-emerald-800 w-36"
                        />
                      </td>

                      <td className="py-3 px-4">
                        <button
                          type="button"
                          onClick={() =>
                            actualizarAsesor(asesor.id, { activo: !asesor.activo })
                          }
                          className={`px-3 py-1 rounded-full text-[11px] font-extrabold cursor-pointer ${
                            asesor.activo
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {asesor.activo ? "● Activo" : "○ Desactivado"}
                        </button>
                      </td>

                      <td className="py-3 px-4">
                        <button
                          type="button"
                          onClick={() =>
                            actualizarAsesor(asesor.id, { pausado: !asesor.pausado })
                          }
                          className={`px-3 py-1 rounded-full text-[11px] font-bold cursor-pointer ${
                            asesor.pausado
                              ? "bg-amber-200 text-amber-900"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {asesor.pausado ? "⏸ En Pausa" : "En línea"}
                        </button>
                      </td>

                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          <input
                            type="time"
                            value={asesor.horaInicio}
                            onChange={(e) =>
                              actualizarAsesor(asesor.id, { horaInicio: e.target.value })
                            }
                            className="border border-slate-200 rounded px-1.5 py-1 text-[11px]"
                          />
                          <span>–</span>
                          <input
                            type="time"
                            value={asesor.horaFin}
                            onChange={(e) =>
                              actualizarAsesor(asesor.id, { horaFin: e.target.value })
                            }
                            className="border border-slate-200 rounded px-1.5 py-1 text-[11px]"
                          />
                        </div>
                      </td>

                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-[#0a1628]">
                            {asesor.clicsRecibidos}
                          </span>
                          <span className="text-[10px] text-slate-400">({porcentaje}%)</span>
                        </div>
                        <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
                          <div
                            className="h-full bg-emerald-500"
                            style={{ width: `${Math.min(100, porcentaje * 3)}%` }}
                          />
                        </div>
                      </td>

                      <td className="py-3 px-4 text-[11px] text-slate-400 font-mono">
                        {asesor.ultimoClicAt || "Sin clics aún"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Métricas por Landing Page y Registro de Clics */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="text-sm font-extrabold text-[#0a1628] mb-3">
              Clics a WhatsApp por Landing Page
            </h3>
            {Object.keys(estado.metricasPorPagina || {}).length === 0 ? (
              <p className="text-xs text-slate-400 italic">
                Aún no hay clics registrados por página.
              </p>
            ) : (
              <div className="space-y-2">
                {Object.entries(estado.metricasPorPagina)
                  .sort((a, b) => b[1] - a[1])
                  .map(([pagina, cant]) => (
                    <div
                      key={pagina}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100"
                    >
                      <span className="font-bold text-blue-700">{pagina}</span>
                      <span className="font-extrabold text-[#0a1628] bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {cant} clics
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="text-sm font-extrabold text-[#0a1628] mb-1">
              Últimas Asignaciones en Tiempo Real
            </h3>
            <p className="text-[11px] text-slate-500 mb-3">
              Nota importante: cada registro corresponde a un clic voluntario hacia WhatsApp Business. Las conversaciones efectivamente iniciadas se verifican cuando el mensaje ingresa al WhatsApp del asesor.
            </p>
            {estado.historialClics.length === 0 ? (
              <p className="text-xs text-slate-400 italic">
                Pulsa «⚡ Probar Siguiente Turno» arriba o haz clic en cualquier botón de WhatsApp de la web para ver la rotación 1 → 12 en vivo.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px]">
                      <th className="py-2 pr-3">Fecha y Hora</th>
                      <th className="py-2 pr-3">Landing</th>
                      <th className="py-2 pr-3">Fuente</th>
                      <th className="py-2 pr-3">Botón</th>
                      <th className="py-2 pr-3">Asesor Asignado</th>
                      <th className="py-2">Tipo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {estado.historialClics.slice(0, 15).map((item) => (
                      <tr key={item.id}>
                        <td className="py-2 pr-3 font-mono text-[11px] text-slate-500">
                          {item.fechaHora}
                        </td>
                        <td className="py-2 pr-3 font-bold text-blue-700">
                          {item.landingPage}
                        </td>
                        <td className="py-2 pr-3 text-slate-600">{item.fuenteTrafico}</td>
                        <td className="py-2 pr-3 text-slate-600 truncate max-w-[140px]">
                          {item.botonSeleccionado}
                        </td>
                        <td className="py-2 pr-3 font-bold text-emerald-800">
                          {item.asesorNombre} (+{item.asesorTelefono})
                        </td>
                        <td className="py-2">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              item.esReasignacionContinuidad
                                ? "bg-purple-100 text-purple-800"
                                : "bg-emerald-100 text-emerald-800"
                            }`}
                          >
                            {item.esReasignacionContinuidad ? "Continuidad" : "Turno Nuevo"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
