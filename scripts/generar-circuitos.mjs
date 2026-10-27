// Convierte los programas del mayorista (mt-programas-2.json) en lib/circuitos-datos.json (correr desde cityland-web).
// Uso: node generar-circuitos.mjs <ruta-json-mayorista>
import fs from "node:fs";

const fuente = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));

const MINUS = new Set(["y", "e", "de", "del", "la", "las", "el", "los", "con", "en", "a", "al", "por", "desde", "o", "sin"]);
const SIGLAS = new Set(["II", "III", "IV", "MSC", "CDMX", "USA", "2X1", "VIP"]);
function titulo(s) {
  return s
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((w, i) => {
      const up = w.toUpperCase();
      if (SIGLAS.has(up.replace(/[(),]/g, ""))) return up === "2X1" ? "2x1" : up;
      const l = w.toLowerCase();
      if (i > 0 && MINUS.has(l)) return l;
      return l.replace(/^([(¿"«]?)(\p{L})/u, (_m, p, c) => p + c.toUpperCase());
    })
    .join(" ")
    .replace(/\bCix\b/, "Chiclayo")
    .replace(/\bLon\/Mad\b/i, "Londres/Madrid")
    .replace(/ By Exa\b/i, "")
    .replace(/^Mega /, "")
    .replace(/\bTurquia\b/g, "Turquía")
    .replace(/\bDubai\b/g, "Dubái")
    .replace(/\bJapon\b/g, "Japón")
    .replace(/\bAfrica\b/g, "África")
    .replace(/\bPanama\b/g, "Panamá")
    .replace(/\bMexico\b/g, "México")
    .replace(/\bCanada\b/g, "Canadá")
    .replace(/\bIguazu\b/g, "Iguazú")
    .replace(/\bBuzios\b/g, "Búzios")
    .replace(/\bRio de Janeiro\b/g, "Río de Janeiro")
    .replace(/\bSao Paulo\b/g, "São Paulo")
    .replace(/\bBahia\b/g, "Bahía")
    .replace(/\bMedellin\b/g, "Medellín")
    .replace(/\bSan Andres\b/g, "San Andrés")
    .replace(/\bMarroqui\b/g, "Marroquí")
    .replace(/\bMagica\b/g, "Mágica")
    .replace(/\bMagico\b/g, "Mágico")
    .replace(/\bClasico\b/g, "Clásico")
    .replace(/\bClasica\b/g, "Clásica")
    .replace(/\bTriangulo\b/g, "Triángulo")
    .replace(/\bAño Nuevo\b/g, "Año Nuevo");
}
const ACENTOS = [
  ["Paraiso", "Paraíso"], ["Pacifico", "Pacífico"], ["Autentico", "Auténtico"], ["Fantasia", "Fantasía"], ["Epicas", "Épicas"],
  ["Asiatico", "Asiático"], ["Basico", "Básico"], ["Raices", "Raíces"], ["Arabes", "Árabes"], ["Meditacion", "Meditación"],
  ["Tailandes", "Tailandés"], ["Sueno", "Sueño"], ["Virgenes", "Vírgenes"], ["Melodias", "Melodías"], ["Americas", "Américas"],
  ["Canton", "Cantón"], ["Florianopolis", "Florianópolis"], ["Ramses", "Ramsés"], ["Seul", "Seúl"], ["Kathmandu", "Katmandú"],
  ["Rio", "Río"],
];
function pulir(n) {
  let s = n
    .replace(/^¡hola/i, "¡Hola")
    .replace(/Rep\.\s*dominicana\s*,\s*/i, "Rep. Dominicana, ")
    .replace(/,\s*(\p{L})/gu, (_m, c) => ", " + c.toUpperCase())
    .replace(/\s*\(Sel\)$/, "")
    .replace(/\s*–\s*(Mad\/mad|Par\/par)$/i, "")
    .replace(/\(Rio, Igu, Sal\)/, "(Río, Iguazú y Salvador)")
    .replace(/\(Búzios, ?Rio, ?Igu\)/i, "(Búzios, Río e Iguazú)")
    .replace(/Xi´an/g, "Xi'an")
    .replace(/^Beijing-xian-guilin-hangzhou-suzhou-shanghai$/i, "Beijing, Xi'an, Guilin, Hangzhou, Suzhou y Shanghái")
    .replace(/\.$/, "");
  for (const [x, y] of ACENTOS) s = s.replace(new RegExp(`(?<![\\p{L}])${x}(?![\\p{L}])`, "gu"), y);
  if (!/\s/.test(s)) s = `Circuito por ${s}`;
  return s;
}
function slug(s) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const REGION = {
  europa: "europa", moriente: "medio-oriente", asia: "asia", africa: "marruecos", usa: "estados-unidos-canada",
  camerica: "centroamerica", caribe: "caribe", sudamerica: "sudamerica", mexico: "mexico", cruceros: "cruceros",
};

function origen(nombre) {
  if (/desde (cix|chiclayo)/i.test(nombre)) return "Chiclayo";
  if (/desde arequipa/i.test(nombre)) return "Arequipa";
  if (/desde panam/i.test(nombre)) return "Panamá";
  return "Lima";
}
function lineas(s) {
  return (s || "")
    .split(/\n|(?<=\.)\s+(?=\d{2}\s)/)
    .map((x) => x.replace(/^[\s•\-–*]+/, "").trim())
    .filter((x) => x.length > 2 && !/mega ?travel/i.test(x))
    .slice(0, 40);
}

const usados = new Set();
const salida = [];
for (const p of fuente) {
  if (!p.nombre) continue;
  const tipo = p.aerolineas.includes("Solo Terrestre") ? "terrestre" : p.aerolineas.includes("Solo Crucero") ? "crucero" : "vuelo";
  const nombre = pulir(titulo(p.nombre.replace(/\s*\(?desde (cix|chiclayo|arequipa|panam[aá])\)?/i, "")));
  let s = `${slug(nombre)}-${p.dias}-dias${tipo === "terrestre" ? "-solo-terrestre" : ""}`;
  if (usados.has(s)) s = `${s}-${p.mt}`;
  usados.add(s);
  salida.push({
    mt: p.mt,
    slug: s,
    nombre,
    dias: p.dias,
    noches: p.noches,
    region: REGION[p.depto] ?? "otros",
    tipo,
    origen: origen(p.nombre),
    desde: Number(p.desde) + Number(p.impuestos || 0),
    paises: p.paises,
    ciudades: p.ciudades,
    aerolineas: p.aerolineas.filter((a) => !/^solo |^incluye vuelo$/i.test(a)).map((a) => (a === "LAN" ? "LATAM" : a)),
    salidas: p.salidas.replace(/\s+/g, " ").trim(),
    vigencia: p.vigencia,
    incluye: lineas(p.incluye),
    noIncluye: lineas(p.noIncluye),
    hoteles: p.hoteles.map((h) => h.slice(0, 3)).slice(0, 12),
  });
}
salida.sort((a, b) => a.region.localeCompare(b.region) || a.desde - b.desde);
fs.writeFileSync("lib/circuitos-datos.json", JSON.stringify(salida));
console.log("circuitos:", salida.length, "bytes:", fs.statSync("lib/circuitos-datos.json").size);
console.log(salida.slice(0, 12).map((c) => `${c.slug} | ${c.nombre} | ${c.desde}`).join("\n"));
