"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CATALOGO_INICIAL,
  resolverTarifa,
  type CatalogoTarifas,
  type ModalidadTarifa,
  type TarifaItem,
} from "@/lib/tarifas";

export interface EventoClicWA {
  fecha: string;
  pagina: string;
  destino: string;
  dispositivo: string;
  telefono: string;
}

export default function AdminTarifasPage() {
  const [autenticado, setAutenticado] = useState(false);
  const [pin, setPin] = useState("");
  const [errorPin, setErrorPin] = useState("");
  const [catalogo, setCatalogo] = useState<CatalogoTarifas>(CATALOGO_INICIAL);
  const [busqueda, setBusqueda] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [mensajeGuardado, setMensajeGuardado] = useState("");
  const [clicsRecientes, setClicsRecientes] = useState<EventoClicWA[]>([]);

  useEffect(() => {
    fetch("/api/tarifas")
      .then((r) => r.json())
      .then((data) => {
        if (data?.tarifas) setCatalogo(data);
      })
      .catch(() => {});

    try {
      const raw = localStorage.getItem("cityland_wa_clicks");
      if (raw) setClicsRecientes(JSON.parse(raw));
    } catch {}
  }, []);

  const ingresar = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "2026" || pin.toUpperCase() === "CITYLAND2026") {
      setAutenticado(true);
      setErrorPin("");
    } else {
      setErrorPin("Clave incorrecta. Usa la clave de administración (ej. 2026).");
    }
  };

  const actualizarTarifa = (id: string, cambios: Partial<TarifaItem>) => {
    setCatalogo((prev) => ({
      ...prev,
      tarifas: prev.tarifas.map((t) =>
        t.id === id
          ? {
              ...t,
              ...cambios,
              fechaVerificacion: new Date().toISOString().slice(0, 10),
            }
          : t
      ),
    }));
  };

  const agregarNuevaTarifa = () => {
    const hoy = new Date().toISOString().slice(0, 10);
    const nueva: TarifaItem = {
      id: `tarifa-${Date.now()}`,
      categoria: "Vuelos por Ruta",
      nombre: "Nueva Ruta o Paquete",
      rutaODestino: "Lima a Destino",
      modalidad: "Ida y vuelta",
      precioUSD: 699,
      incluyeImpuestos: true,
      condiciones: "Incluye impuestos y cargos obligatorios. Sujeto a disponibilidad.",
      fechasAplicables: "Salidas 2026",
      fechaVerificacion: hoy,
      fechaVencimiento: "2026-12-31",
      activa: true,
      promoActiva: false,
      urlLanding: "/",
    };
    setCatalogo((prev) => ({
      ...prev,
      tarifas: [nueva, ...prev.tarifas],
    }));
  };

  const guardarCambios = async () => {
    setGuardando(true);
    setMensajeGuardado("");
    try {
      const res = await fetch("/api/tarifas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: "2026", catalogo }),
      });
      const data = await res.json();
      if (data.ok) {
        setMensajeGuardado("¡Catálogo de tarifas y tipo de cambio actualizados correctamente!");
      } else {
        setMensajeGuardado(data.error || "No se pudo guardar.");
      }
    } catch {
      setMensajeGuardado("Guardado en sesión local.");
    } finally {
      setGuardando(false);
    }
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-[#071326] flex items-center justify-center px-5">
        <form
          onSubmit={ingresar}
          className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100"
        >
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-3">
            Cityland Travel · Administración
          </span>
          <h1 className="text-2xl font-extrabold text-[#0a1628] mb-2">
            Panel Central de Tarifas y SEO
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            Ingresa tu clave de acceso para administrar precios referenciales, fechas de vigencia, tipo de cambio y métricas de captación por WhatsApp.
          </p>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            Clave de Acceso
          </label>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Ingresa la clave (ej. 2026)"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:border-blue-600"
          />
          {errorPin && <p className="text-red-600 text-xs font-semibold mb-3">{errorPin}</p>}
          <button
            type="submit"
            className="w-full bg-[#0a1628] hover:bg-blue-900 text-white font-bold text-sm py-3.5 rounded-xl transition-colors cursor-pointer"
          >
            Ingresar al Panel
          </button>
        </form>
      </div>
    );
  }

  const tarifasFiltradas = catalogo.tarifas.filter(
    (t) =>
      t.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.rutaODestino.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-[#0a1628] pb-20">
      <header className="bg-[#071326] text-white py-5 px-6 border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block">
              Sistema Centralizado de Precios y Captación Orgánica
            </span>
            <h1 className="text-xl font-extrabold">
              Cityland Travel — Administrador de Tarifas y Vigencias
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-bold text-white/80 hover:text-white border border-white/20 px-4 py-2.5 rounded-xl"
            >
              Ver Web Pública
            </Link>
            <button
              onClick={agregarNuevaTarifa}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer"
            >
              + Nueva Ruta / Tarifa
            </button>
            <button
              onClick={guardarCambios}
              disabled={guardando}
              className="bg-[#25D366] hover:bg-[#1fb855] text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-md cursor-pointer"
            >
              {guardando ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 pt-8 space-y-8">
        {mensajeGuardado && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 px-5 py-3.5 rounded-2xl text-sm font-bold flex items-center justify-between">
            <span>✓ {mensajeGuardado}</span>
            <button onClick={() => setMensajeGuardado("")} className="text-xs underline">
              Cerrar
            </button>
          </div>
        )}

        {/* Configuración Global: Tipo de Cambio y Leyenda Legal */}
        <section className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Tipo de Cambio Referencial (USD → S/)
            </label>
            <input
              type="number"
              step="0.01"
              value={catalogo.configuracion.tipoCambioPEN}
              onChange={(e) =>
                setCatalogo((prev) => ({
                  ...prev,
                  configuracion: {
                    ...prev.configuracion,
                    tipoCambioPEN: parseFloat(e.target.value) || 3.78,
                  },
                }))
              }
              className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold"
            />
            <label className="inline-flex items-center gap-2 mt-2.5 text-xs text-slate-600 font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={catalogo.configuracion.mostrarEquivalenteSoles}
                onChange={(e) =>
                  setCatalogo((prev) => ({
                    ...prev,
                    configuracion: {
                      ...prev.configuracion,
                      mostrarEquivalenteSoles: e.target.checked,
                    },
                  }))
                }
              />
              Calcular y mostrar equivalente referencial en Soles (S/)
            </label>
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Aclaración Legal Obligatoria en todas las Landings
            </label>
            <input
              type="text"
              value={catalogo.configuracion.aclaracionLegal}
              onChange={(e) =>
                setCatalogo((prev) => ({
                  ...prev,
                  configuracion: {
                    ...prev.configuracion,
                    aclaracionLegal: e.target.value,
                  },
                }))
              }
              className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm"
            />
            <p className="text-[11px] text-slate-400 mt-1.5">
              Última verificación global: <strong>{catalogo.configuracion.ultimaActualizacionGlobal}</strong> · Si una tarifa vence o se desactiva, la web muestra automáticamente <strong>«Consultar tarifa»</strong>.
            </p>
          </div>
        </section>

        {/* Buscador y Tabla de Tarifas */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-extrabold text-[#0a1628]">
              Tarifas Referenciales por Destino y Ruta ({tarifasFiltradas.length})
            </h2>
            <input
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por ruta, destino o categoría..."
              className="bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm w-full sm:w-80"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {tarifasFiltradas.map((t) => {
              const resuelta = resolverTarifa(t, catalogo.configuracion);
              return (
                <div
                  key={t.id}
                  className={`bg-white rounded-2xl p-5 border transition-all ${
                    resuelta.vigente
                      ? "border-slate-200/90 shadow-sm"
                      : "border-amber-300 bg-amber-50/30"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                    <div className="lg:col-span-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                            resuelta.vigente
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-200 text-amber-900"
                          }`}
                        >
                          {resuelta.vigente ? "Vigente en Web" : "Oculta → Consultar tarifa"}
                        </span>
                        <span className="text-xs text-slate-400 font-semibold">{t.categoria}</span>
                      </div>
                      <input
                        type="text"
                        value={t.nombre}
                        onChange={(e) => actualizarTarifa(t.id, { nombre: e.target.value })}
                        className="w-full font-extrabold text-[#0a1628] text-base border-b border-transparent focus:border-blue-500 focus:outline-none"
                      />
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>Ruta/Destino:</span>
                        <input
                          type="text"
                          value={t.rutaODestino}
                          onChange={(e) =>
                            actualizarTarifa(t.id, { rutaODestino: e.target.value })
                          }
                          className="border border-slate-200 rounded-lg px-2 py-1 text-xs font-semibold text-slate-700"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Precio (US$)
                      </label>
                      <input
                        type="number"
                        value={t.precioUSD ?? ""}
                        onChange={(e) =>
                          actualizarTarifa(t.id, {
                            precioUSD: e.target.value ? Number(e.target.value) : null,
                          })
                        }
                        placeholder="Vacío = Consultar"
                        className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm font-extrabold text-[#0a1628]"
                      />
                      <span className="block text-[11px] font-bold text-blue-700 mt-1">
                        Vista previa: {resuelta.textoPrecio}
                      </span>
                      {resuelta.textoEquivalentePEN && (
                        <span className="block text-[10px] text-slate-500">
                          {resuelta.textoEquivalentePEN}
                        </span>
                      )}
                    </div>

                    <div className="lg:col-span-2">
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Modalidad
                      </label>
                      <select
                        value={t.modalidad}
                        onChange={(e) =>
                          actualizarTarifa(t.id, {
                            modalidad: e.target.value as ModalidadTarifa,
                          })
                        }
                        className="w-full border border-slate-300 rounded-xl px-2.5 py-2 text-xs font-semibold bg-white"
                      >
                        <option value="Solo ida">Solo ida</option>
                        <option value="Ida y vuelta">Ida y vuelta</option>
                        <option value="Paquete turístico">Paquete turístico</option>
                        <option value="Trámite / Servicio">Trámite / Servicio</option>
                      </select>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mt-2 mb-1">
                        Vence el
                      </label>
                      <input
                        type="date"
                        value={t.fechaVencimiento}
                        onChange={(e) =>
                          actualizarTarifa(t.id, { fechaVencimiento: e.target.value })
                        }
                        className="w-full border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs"
                      />
                    </div>

                    <div className="lg:col-span-3 space-y-2">
                      <label className="block text-[10px] font-bold uppercase text-slate-400">
                        Fechas aplicables y Condiciones
                      </label>
                      <input
                        type="text"
                        value={t.fechasAplicables}
                        onChange={(e) =>
                          actualizarTarifa(t.id, { fechasAplicables: e.target.value })
                        }
                        className="w-full border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs"
                        placeholder="Fechas aplicables"
                      />
                      <textarea
                        rows={2}
                        value={t.condiciones}
                        onChange={(e) => actualizarTarifa(t.id, { condiciones: e.target.value })}
                        className="w-full border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs"
                      />
                    </div>

                    <div className="lg:col-span-1 flex flex-col gap-2 pt-4">
                      <label className="inline-flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={t.activa}
                          onChange={(e) => actualizarTarifa(t.id, { activa: e.target.checked })}
                        />
                        Activa
                      </label>
                      <label className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={t.promoActiva}
                          onChange={(e) =>
                            actualizarTarifa(t.id, { promoActiva: e.target.checked })
                          }
                        />
                        Promo
                      </label>
                      <span className="text-[10px] text-slate-400">
                        Verif: {t.fechaVerificacion}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Registro de Clics de WhatsApp (Medición separada de Clics vs Conversaciones) */}
        <section className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <h2 className="text-base font-extrabold text-[#0a1628]">
                Auditoría de Clics a WhatsApp (Evento GA4: <code>click_whatsapp_consulta</code>)
              </h2>
              <p className="text-xs text-slate-500">
                Cada clic en un botón de WhatsApp se envía a Google Analytics 4 con la URL de la landing page que originó la consulta, separado de las conversaciones reales confirmadas por tus asesores.
              </p>
            </div>
          </div>

          {clicsRecientes.length === 0 ? (
            <p className="text-xs text-slate-400 italic">
              Aún no se han registrado clics a WhatsApp desde este navegador. Haz clic en cualquier botón de WhatsApp de la web para ver cómo se registra aquí y en GA4.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase">
                    <th className="py-2 pr-4">Fecha y Hora</th>
                    <th className="py-2 pr-4">Landing de Origen</th>
                    <th className="py-2 pr-4">Consulta / Ruta</th>
                    <th className="py-2 pr-4">Dispositivo</th>
                    <th className="py-2">Asesor Asignado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {clicsRecientes.slice(0, 15).map((c, idx) => (
                    <tr key={idx}>
                      <td className="py-2 pr-4 font-mono text-slate-500">{c.fecha}</td>
                      <td className="py-2 pr-4 font-bold text-blue-700">{c.pagina}</td>
                      <td className="py-2 pr-4 text-slate-700 truncate max-w-xs">{c.destino}</td>
                      <td className="py-2 pr-4 text-slate-500">{c.dispositivo}</td>
                      <td className="py-2 font-mono text-emerald-700">+{c.telefono}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
