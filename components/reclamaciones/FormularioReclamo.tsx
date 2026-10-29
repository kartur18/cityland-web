"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import {
  LIMITES,
  RECLAMO_VACIO,
  TIPOS_DOCUMENTO,
  normalizarReclamo,
  validarReclamo,
  type DatosReclamo,
  type ErroresReclamo,
} from "@/lib/reclamaciones/esquema";
import { Campo, CLASE_CAMPO, Opcion, ariaCampo, idCampo } from "./Campo";
import { AvisoContingencia, ConstanciaReclamo, type Alterno } from "./AvisosReclamo";

type Resultado =
  | { tipo: "ok"; codigo: string; fecha?: string; copiaEnviada: boolean; correo: string }
  | { tipo: "error"; mensaje: string; alterno: Alterno | null };

const TITULO_SECCION = "text-base font-extrabold text-[#0a1628] mb-3";
const SECCION = "rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm";

function fechaHoyLima() {
  return new Intl.DateTimeFormat("es-PE", { timeZone: "America/Lima", day: "2-digit", month: "long", year: "numeric" }).format(new Date());
}

function SelectorDocumento({ nombreTipo, nombreNumero, datos, errores, cambiar }: {
  nombreTipo: "tipoDocumento" | "tutorTipoDocumento";
  nombreNumero: "documento" | "tutorDocumento";
  datos: DatosReclamo;
  errores: ErroresReclamo;
  cambiar: <K extends keyof DatosReclamo>(k: K, v: DatosReclamo[K]) => void;
}) {
  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-3">
      <Campo nombre={nombreTipo} etiqueta="Tipo">
        <select {...ariaCampo(nombreTipo)} value={datos[nombreTipo]} onChange={(e) => cambiar(nombreTipo, e.target.value as DatosReclamo["tipoDocumento"])} className={CLASE_CAMPO}>
          {TIPOS_DOCUMENTO.map((t) => (
            <option key={t} value={t}>{t === "PASAPORTE" ? "Pasaporte" : t}</option>
          ))}
        </select>
      </Campo>
      <Campo nombre={nombreNumero} etiqueta="Número de documento" error={errores[nombreNumero]}>
        <input {...ariaCampo(nombreNumero, errores[nombreNumero])} type="text" inputMode={datos[nombreTipo] === "DNI" ? "numeric" : "text"} autoComplete="off" maxLength={LIMITES.documento} value={datos[nombreNumero]} onChange={(e) => cambiar(nombreNumero, e.target.value)} className={CLASE_CAMPO} />
      </Campo>
    </div>
  );
}

export default function FormularioReclamo() {
  const [datos, setDatos] = useState<DatosReclamo>(RECLAMO_VACIO);
  const [errores, setErrores] = useState<ErroresReclamo>({});
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  // Servidor: vacío (la página es estática); navegador: la fecha de hoy en Lima, sin desfase de hidratación.
  const fecha = useSyncExternalStore(() => () => {}, fechaHoyLima, () => "");
  const [resumenErrores, setResumenErrores] = useState("");
  const refConstancia = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resultado) refConstancia.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [resultado]);

  function cambiar<K extends keyof DatosReclamo>(k: K, v: DatosReclamo[K]) {
    setDatos((d) => ({ ...d, [k]: v }));
    if (errores[k]) setErrores((e) => ({ ...e, [k]: undefined }));
  }

  async function enviar(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (enviando) return;
    const limpio = normalizarReclamo(datos);
    const errs = validarReclamo(limpio);
    const claves = Object.keys(errs) as (keyof DatosReclamo)[];
    setErrores(errs);
    if (claves.length > 0) {
      setResumenErrores(`Hay ${claves.length} ${claves.length === 1 ? "campo por corregir" : "campos por corregir"}.`);
      document.getElementById(idCampo(claves[0]))?.focus();
      return;
    }
    setResumenErrores("");
    setEnviando(true);
    setResultado(null);
    try {
      const honeypot = (ev.currentTarget.elements.namedItem("sitioWeb") as HTMLInputElement | null)?.value ?? "";
      const res = await fetch("/api/libro-de-reclamaciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...limpio, sitioWeb: honeypot }),
      });
      const cuerpo = (await res.json().catch(() => null)) as
        | { ok?: boolean; codigo?: string; fecha?: string; copiaEnviada?: boolean; mensaje?: string; errores?: ErroresReclamo; alterno?: Alterno }
        | null;
      if (res.ok && cuerpo?.ok && cuerpo.codigo) {
        setResultado({ tipo: "ok", codigo: cuerpo.codigo, fecha: cuerpo.fecha, copiaEnviada: cuerpo.copiaEnviada === true, correo: limpio.correo });
        setDatos(RECLAMO_VACIO);
      } else if (res.status === 400 && cuerpo?.errores) {
        setErrores(cuerpo.errores);
        setResumenErrores("Revisa los campos marcados.");
      } else {
        setResultado({ tipo: "error", mensaje: cuerpo?.mensaje ?? "No pudimos enviar tu hoja en este momento.", alterno: cuerpo?.alterno ?? { whatsapp: "51944103890", correo: null } });
      }
    } catch {
      setResultado({ tipo: "error", mensaje: "No pudimos conectar con el servidor. Revisa tu conexión.", alterno: { whatsapp: "51944103890", correo: null } });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={enviar} noValidate className="space-y-5" aria-describedby="rec-resumen">
      <div ref={refConstancia} aria-live="polite" aria-atomic="true">
        {resultado?.tipo === "ok" ? <ConstanciaReclamo codigo={resultado.codigo} fecha={resultado.fecha} copiaEnviada={resultado.copiaEnviada} correo={resultado.correo} /> : null}
        {resultado?.tipo === "error" ? <AvisoContingencia mensaje={resultado.mensaje} alterno={resultado.alterno} /> : null}
      </div>
      <p id="rec-resumen" role="alert" className={resumenErrores ? "rounded-xl bg-red-50 border border-red-300 px-4 py-3 text-sm font-bold text-red-800" : "sr-only"}>
        {resumenErrores}
      </p>

      <fieldset className={SECCION}>
        <legend className="sr-only">Fecha</legend>
        <p className="text-sm text-slate-600">
          Fecha de la hoja: <strong className="text-[#0a1628]">{fecha || "hoy"}</strong> (se registra automáticamente)
        </p>
      </fieldset>

      <fieldset className={SECCION}>
        <legend className={TITULO_SECCION}>1. Tus datos como consumidor</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="sm:col-span-2">
            <Campo nombre="nombre" etiqueta="Nombres y apellidos completos" error={errores.nombre}>
              <input {...ariaCampo("nombre", errores.nombre)} type="text" autoComplete="name" maxLength={LIMITES.nombre} value={datos.nombre} onChange={(e) => cambiar("nombre", e.target.value)} className={CLASE_CAMPO} />
            </Campo>
          </div>
          <div className="sm:col-span-2">
            <SelectorDocumento nombreTipo="tipoDocumento" nombreNumero="documento" datos={datos} errores={errores} cambiar={cambiar} />
          </div>
          <div className="sm:col-span-2">
            <Campo nombre="domicilio" etiqueta="Domicilio" error={errores.domicilio}>
              <input {...ariaCampo("domicilio", errores.domicilio)} type="text" autoComplete="street-address" maxLength={LIMITES.domicilio} value={datos.domicilio} onChange={(e) => cambiar("domicilio", e.target.value)} className={CLASE_CAMPO} />
            </Campo>
          </div>
          <Campo nombre="telefono" etiqueta="Teléfono o celular" error={errores.telefono}>
            <input {...ariaCampo("telefono", errores.telefono)} type="tel" inputMode="tel" autoComplete="tel" maxLength={LIMITES.telefono} value={datos.telefono} onChange={(e) => cambiar("telefono", e.target.value)} className={CLASE_CAMPO} />
          </Campo>
          <Campo nombre="correo" etiqueta="Correo electrónico" error={errores.correo} ayuda="Aquí te enviamos tu copia de la hoja.">
            <input {...ariaCampo("correo", errores.correo)} type="email" inputMode="email" autoComplete="email" maxLength={LIMITES.correo} value={datos.correo} onChange={(e) => cambiar("correo", e.target.value)} className={CLASE_CAMPO} />
          </Campo>
        </div>
        <label className="mt-4 flex items-start gap-3 min-h-[44px] cursor-pointer text-sm text-[#0a1628]">
          <input type="checkbox" checked={datos.esMenor} onChange={(e) => cambiar("esMenor", e.target.checked)} className="mt-1 h-4 w-4 accent-emerald-600" />
          <span>Soy menor de edad (completa los datos de tu padre, madre o tutor)</span>
        </label>
        {datos.esMenor ? (
          <div className="mt-3 grid grid-cols-1 gap-3 rounded-xl bg-slate-50 p-3">
            <Campo nombre="tutorNombre" etiqueta="Nombres y apellidos del padre, madre o tutor" error={errores.tutorNombre}>
              <input {...ariaCampo("tutorNombre", errores.tutorNombre)} type="text" maxLength={LIMITES.nombre} value={datos.tutorNombre} onChange={(e) => cambiar("tutorNombre", e.target.value)} className={CLASE_CAMPO} />
            </Campo>
            <SelectorDocumento nombreTipo="tutorTipoDocumento" nombreNumero="tutorDocumento" datos={datos} errores={errores} cambiar={cambiar} />
          </div>
        ) : null}
      </fieldset>

      <fieldset className={SECCION}>
        <legend className={TITULO_SECCION}>2. Bien contratado</legend>
        <div role="radiogroup" aria-label="Tipo de bien contratado" className="grid grid-cols-2 gap-3 mb-3">
          <Opcion nombre="tipoBien" valor="SERVICIO" actual={datos.tipoBien} titulo="Servicio" detalle="Vuelo, paquete, hotel, seguro" onElegir={(v) => cambiar("tipoBien", v as DatosReclamo["tipoBien"])} />
          <Opcion nombre="tipoBien" valor="PRODUCTO" actual={datos.tipoBien} titulo="Producto" onElegir={(v) => cambiar("tipoBien", v as DatosReclamo["tipoBien"])} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_9rem_9rem] gap-3">
          <Campo nombre="descripcionBien" etiqueta="¿Qué contrataste?" error={errores.descripcionBien} ayuda="Por ejemplo: pasaje Lima - Madrid, paquete a Punta Cana.">
            <input {...ariaCampo("descripcionBien", errores.descripcionBien)} type="text" maxLength={LIMITES.descripcionBien} value={datos.descripcionBien} onChange={(e) => cambiar("descripcionBien", e.target.value)} className={CLASE_CAMPO} />
          </Campo>
          <Campo nombre="moneda" etiqueta="Moneda">
            <select {...ariaCampo("moneda")} value={datos.moneda} onChange={(e) => cambiar("moneda", e.target.value as DatosReclamo["moneda"])} className={CLASE_CAMPO}>
              <option value="PEN">Soles (S/)</option>
              <option value="USD">Dólares (US$)</option>
            </select>
          </Campo>
          <Campo nombre="monto" etiqueta="Monto reclamado" obligatorio={false} error={errores.monto}>
            <input {...ariaCampo("monto", errores.monto)} type="text" inputMode="decimal" autoComplete="off" maxLength={12} placeholder="0.00" value={datos.monto} onChange={(e) => cambiar("monto", e.target.value)} className={CLASE_CAMPO} />
          </Campo>
        </div>
      </fieldset>

      <fieldset className={SECCION}>
        <legend className={TITULO_SECCION}>3. Detalle de la reclamación</legend>
        <div role="radiogroup" aria-label="Tipo de hoja" className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <Opcion nombre="tipoReclamo" valor="RECLAMO" actual={datos.tipoReclamo} titulo="Reclamo" detalle="Disconformidad relacionada con los productos o servicios." onElegir={(v) => cambiar("tipoReclamo", v as DatosReclamo["tipoReclamo"])} />
          <Opcion nombre="tipoReclamo" valor="QUEJA" actual={datos.tipoReclamo} titulo="Queja" detalle="Malestar con la atención al público, no relacionado con el producto o servicio." onElegir={(v) => cambiar("tipoReclamo", v as DatosReclamo["tipoReclamo"])} />
        </div>
        <div className="space-y-3">
          <Campo nombre="detalle" etiqueta="Detalle de lo ocurrido" error={errores.detalle} ayuda={`${datos.detalle.length}/${LIMITES.detalle} caracteres`}>
            <textarea {...ariaCampo("detalle", errores.detalle)} rows={6} maxLength={LIMITES.detalle} value={datos.detalle} onChange={(e) => cambiar("detalle", e.target.value)} className={CLASE_CAMPO} />
          </Campo>
          <Campo nombre="pedido" etiqueta="¿Qué solución esperas? (pedido del consumidor)" error={errores.pedido}>
            <textarea {...ariaCampo("pedido", errores.pedido)} rows={3} maxLength={LIMITES.pedido} value={datos.pedido} onChange={(e) => cambiar("pedido", e.target.value)} className={CLASE_CAMPO} />
          </Campo>
        </div>
      </fieldset>

      {/* Honeypot: fuera de pantalla y fuera del orden de tabulación; solo un bot lo llena. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          No llenar este campo
          <input type="text" name="sitioWeb" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div className={SECCION}>
        <label className="flex items-start gap-3 min-h-[44px] cursor-pointer text-sm text-[#0a1628]">
          <input {...ariaCampo("aceptacion", errores.aceptacion)} type="checkbox" checked={datos.aceptacion} onChange={(e) => cambiar("aceptacion", e.target.checked)} className="mt-1 h-4 w-4 accent-emerald-600" />
          <span>Declaro que la información consignada es verdadera y que he leído y acepto el contenido de esta hoja de reclamación.</span>
        </label>
        {errores.aceptacion ? <p id="rec-aceptacion-error" className="mt-1 text-xs font-semibold text-red-700">{errores.aceptacion}</p> : null}
        <button type="submit" disabled={enviando} className="mt-4 w-full inline-flex items-center justify-center min-h-[52px] px-6 rounded-xl bg-[#0a1628] hover:bg-slate-800 disabled:opacity-60 text-white text-base font-extrabold transition-colors">
          {enviando ? "Enviando tu hoja..." : "Enviar hoja de reclamación"}
        </button>
      </div>
    </form>
  );
}
