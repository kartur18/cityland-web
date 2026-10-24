// Datos del tablero semanal de la web (visitas de Google y chats de WhatsApp que llegan desde la web).
// Uso: node scripts/tablero-semanal.mjs <carpeta-de-salida>
// Lee Search Console con la cuenta de servicio (~/.claude/credentials/gsc-service-account.json) y la base del
// portal por DIRECT_URL (nunca el pooler), con una sola consulta liviana. Escribe un JSON por cada fuente.
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";

const SALIDA = process.argv[2];
if (!SALIDA) throw new Error("Falta la carpeta de salida");
fs.mkdirSync(SALIDA, { recursive: true });

const PROPIEDAD = "sc-domain:citylandtravel.com";
const SIN_PORTAL = [{ filters: [{ dimension: "page", operator: "notContains", expression: "portal." }] }];
const SERVICIOS = [
  ["Paquete migratorio a España", "/espana"],
  ["Pasajes Lima–Madrid", "/vuelos/lima-madrid"],
  ["Paquetes migratorios a Europa", "/paquetes-migratorios"],
  ["Vuelos", "/vuelos"],
  ["Hoteles", "/hoteles"],
  ["Tours", "/tours"],
  ["Traslados", "/traslados"],
  ["Seguros de viaje", "/seguros"],
  ["Visas", "/visas"],
  ["Viajes corporativos", "/empresas"],
  ["Luna de miel", "/luna-de-miel"],
  ["Quinceañeras", "/quinceaneras"],
  ["Promociones escolares", "/colegios"],
  ["Institutos", "/institutos"],
];

const b64url = (b) => Buffer.from(b).toString("base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
const isoDia = (d) => d.toISOString().slice(0, 10);
const lunesDe = (dia) => {
  const d = new Date(`${dia}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7));
  return isoDia(d);
};

async function tokenGoogle() {
  const cred = JSON.parse(fs.readFileSync(path.join(os.homedir(), ".claude/credentials/gsc-service-account.json"), "utf8"));
  const ahora = Math.floor(Date.now() / 1000);
  const cuerpo = `${b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))}.${b64url(
    JSON.stringify({
      iss: cred.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: ahora,
      exp: ahora + 3600,
    })
  )}`;
  const firma = b64url(crypto.createSign("RSA-SHA256").update(cuerpo).sign(cred.private_key));
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${cuerpo}.${firma}` }),
  });
  if (!r.ok) throw new Error(`Google no dio acceso (${r.status})`);
  return (await r.json()).access_token;
}

async function consultaGsc(token, cuerpo) {
  const r = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(PROPIEDAD)}/searchAnalytics/query`,
    { method: "POST", headers: { authorization: `Bearer ${token}`, "content-type": "application/json" }, body: JSON.stringify(cuerpo) }
  );
  if (!r.ok) throw new Error(`Search Console respondió ${r.status}`);
  return (await r.json()).rows ?? [];
}

async function leerCrm() {
  const require = createRequire("C:/Proyectos/CITYLAND/cityland-travel/package.json");
  const { Client } = require("pg");
  const env = fs.readFileSync("C:/Proyectos/CITYLAND/cityland-travel/.env", "utf8");
  const url = (env.match(/^DIRECT_URL="?([^"\r\n]+)"?/m) || [])[1];
  if (!url || !url.includes("tqzkxijmaqwpobmtdpcd") || url.includes(":6543")) throw new Error("DIRECT_URL no es la base esperada");
  const c = new Client({ connectionString: url, query_timeout: 15000, ssl: { rejectUnauthorized: false } });
  await c.connect();
  try {
    const desdeWeb = `c.estado != 'BORRADA' AND (c."origenAnuncio"->>'sourceType' = 'web' OR c."origenAnuncio"->>'sourceId' LIKE 'web:%')`;
    const semanal = await c.query(`
      SELECT date_trunc('week', c."createdAt" - interval '5 hours')::date AS semana,
             COUNT(DISTINCT c.id)::int AS chats,
             COUNT(DISTINCT c.id) FILTER (WHERE c."cotizadoEn" IS NOT NULL)::int AS cotizados,
             COUNT(DISTINCT voc."ventaId")::int AS ventas
      FROM "Conversacion" c
      LEFT JOIN "VentaOrigenConversacion" voc ON voc."conversacionId" = c.id
      WHERE c."createdAt" >= '2026-09-01' AND ${desdeWeb}
      GROUP BY 1 ORDER BY 1`);
    const porPagina = await c.query(`
      SELECT COALESCE(NULLIF(regexp_replace(c."origenAnuncio"->>'sourceId', '^web:', ''), ''), '/') AS pagina,
             COUNT(DISTINCT c.id)::int AS chats,
             COUNT(DISTINCT c.id) FILTER (WHERE c."cotizadoEn" IS NOT NULL)::int AS cotizados,
             COUNT(DISTINCT voc."ventaId")::int AS ventas
      FROM "Conversacion" c
      LEFT JOIN "VentaOrigenConversacion" voc ON voc."conversacionId" = c.id
      WHERE c."createdAt" >= now() - interval '28 days' AND ${desdeWeb}
      GROUP BY 1 ORDER BY 2 DESC LIMIT 40`);
    return {
      semanal: semanal.rows.map((r) => ({ ...r, semana: isoDia(r.semana) })),
      porPagina: porPagina.rows,
    };
  } finally {
    await c.end();
  }
}

async function paginasVisibles() {
  const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const indice = await (await fetch("https://citylandtravel.com/sitemap.xml")).text();
  let total = 0;
  for (const hijo of locs(indice)) total += locs(await (await fetch(hijo)).text()).length;
  return total;
}

const hoy = new Date();
const fin = isoDia(new Date(hoy.getTime() - 2 * 86400000)); // Search Console tarda ~2 días en tener el día completo
const inicio28 = isoDia(new Date(hoy.getTime() - 29 * 86400000));
const token = await tokenGoogle();

const dias = await consultaGsc(token, { startDate: "2026-09-28", endDate: fin, dimensions: ["date"], dimensionFilterGroups: SIN_PORTAL, rowLimit: 500 });
const porSemana = new Map();
for (const r of dias) {
  const s = lunesDe(r.keys[0]);
  const a = porSemana.get(s) ?? { semana: s, clics: 0, apariciones: 0, posSuma: 0, dias: 0 };
  a.clics += r.clicks;
  a.apariciones += r.impressions;
  a.posSuma += r.position * r.impressions;
  a.dias += 1;
  porSemana.set(s, a);
}
const googleSemanal = [...porSemana.values()]
  .sort((a, b) => a.semana.localeCompare(b.semana))
  .map((a) => ({
    semana: a.semana,
    clics: a.clics,
    apariciones: a.apariciones,
    posicion: a.apariciones ? Math.round((a.posSuma / a.apariciones) * 10) / 10 : null,
    completa: a.dias === 7,
  }));

const paginas = await consultaGsc(token, { startDate: inicio28, endDate: fin, dimensions: ["page"], dimensionFilterGroups: SIN_PORTAL, rowLimit: 1000 });
const fila = (r) => ({ clics: r.clicks, apariciones: r.impressions, posicion: Math.round(r.position * 10) / 10 });
const rutaDe = (u) => new URL(u).pathname.replace(/\/$/, "") || "/";
const porRuta = new Map(paginas.map((r) => [rutaDe(r.keys[0]), fila(r)]));
const paginasTop = paginas.slice(0, 25).map((r) => ({ pagina: rutaDe(r.keys[0]), ...fila(r) }));
const servicios = SERVICIOS.map(([servicio, pagina]) => ({ servicio, pagina, ...(porRuta.get(pagina) ?? { clics: 0, apariciones: 0, posicion: null }) }));

const busquedas = await consultaGsc(token, { startDate: inicio28, endDate: fin, dimensions: ["query"], dimensionFilterGroups: SIN_PORTAL, rowLimit: 25 });
const busquedasTop = busquedas.map((r) => ({ busqueda: r.keys[0], ...fila(r) }));

const crm = await leerCrm();
const resumen = [{ paginas_visibles: await paginasVisibles(), periodo_desde: inicio28, periodo_hasta: fin, generado: hoy.toISOString() }];

const archivos = {
  google_semanal: googleSemanal,
  chats_web_semanal: crm.semanal,
  chats_por_pagina: crm.porPagina,
  servicios,
  paginas_top: paginasTop,
  busquedas_top: busquedasTop,
  resumen,
};
for (const [id, filas] of Object.entries(archivos)) {
  fs.writeFileSync(path.join(SALIDA, `${id}.json`), JSON.stringify(filas, null, 1));
  console.log(`${id}: ${filas.length} filas`);
}
