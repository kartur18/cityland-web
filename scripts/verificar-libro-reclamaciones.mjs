// Falla (exit 1) si el Libro de Reclamaciones virtual pierde su enlace, sus datos legales o sus defensas.
// Uso: node --import ./scripts/_registrar-loader.mjs scripts/verificar-libro-reclamaciones.mjs   (o: npm run verificar:reclamos)
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const leer = (ruta) => readFileSync(RAIZ + ruta, "utf8");
const RUC = "20614914239";
const fallas = [];
const exigir = (ok, msg) => { if (!ok) fallas.push(msg); };

// 1. Enlaces: pie, políticas y sitemap.
const footer = leer("components/Footer.tsx");
exigir(/href="\/libro-de-reclamaciones"/.test(footer) && footer.includes("Libro de Reclamaciones"), "El Footer perdió el enlace visible a /libro-de-reclamaciones.");
exigir(!/from "@\/(lib|components)\/reclamaciones/.test(footer), "El Footer no debe importar módulos del libro (arrastraría peso al layout).");
exigir(leer("app/politicas/page.tsx").includes("/libro-de-reclamaciones"), "app/politicas/page.tsx no enlaza al libro.");
exigir(leer("lib/sitemap-urls.ts").includes('"/libro-de-reclamaciones"'), "lib/sitemap-urls.ts no incluye /libro-de-reclamaciones.");

// 2. Página: RUC, canonical, indexable, texto legal, formulario.
const pagina = leer("app/libro-de-reclamaciones/page.tsx");
exigir(pagina.includes(RUC), `La página no contiene el RUC ${RUC}.`);
exigir(pagina.includes("/libro-de-reclamaciones` }") || pagina.includes('canonical: `${URL_BASE_SEO}/libro-de-reclamaciones`'), "La página no declara su canonical con URL_BASE_SEO.");
exigir(/robots:\s*\{\s*index:\s*true,\s*follow:\s*true\s*\}/.test(pagina), "La página debe ser index, follow.");
exigir(pagina.includes("TEXTO_LEGAL_RECLAMOS") && pagina.includes("<FormularioReclamo"), "La página perdió el texto legal o el formulario.");

// 3. Ruta POST: validación, límites, honeypot, rate limit, sin secretos escritos en el código.
const ruta = leer("app/api/libro-de-reclamaciones/route.ts");
exigir(/export async function POST/.test(ruta), "La ruta no exporta POST.");
exigir(ruta.includes("validarReclamo") && ruta.includes("normalizarReclamo"), "La ruta POST no valida ni normaliza la hoja.");
exigir(ruta.includes("cuerpoMaxBytes"), "La ruta POST no limita el tamaño del cuerpo.");
exigir(ruta.includes("verificarRateLimit"), "La ruta POST no tiene rate limit por IP.");
exigir(ruta.includes("sitioWeb"), "La ruta POST perdió el honeypot.");
exigir(/status\D{0,3}503|responder\(\s*503/.test(ruta), "La ruta POST no responde 503 cuando falta la configuración.");
const todo = ruta + leer("lib/reclamaciones/correo.ts") + leer("lib/reclamaciones/proveedor.ts");
exigir(!/re_[A-Za-z0-9]{16,}/.test(todo), "Hay una llave de Resend escrita en el código.");
exigir(!/console\.(log|info|debug)/.test(todo), "No se debe loguear con console.log en el flujo de reclamos.");
for (const v of ["RECLAMOS_RESEND_API_KEY", "RECLAMOS_EMAIL_DESDE", "RECLAMOS_EMAIL_DESTINO"]) {
  exigir(leer("lib/reclamaciones/proveedor.ts").includes(v), `Falta leer la variable ${v}.`);
}

// 4. Comportamiento de la validación y del código.
const { validarReclamo, normalizarReclamo, RECLAMO_VACIO, LIMITES } = await import(new URL("../lib/reclamaciones/esquema.ts", import.meta.url).href);
const { generarCodigoReclamo, fechaLima } = await import(new URL("../lib/reclamaciones/correo.ts", import.meta.url).href);
const { PROVEEDOR_RECLAMOS, TEXTO_LEGAL_RECLAMOS } = await import(new URL("../lib/reclamaciones/proveedor.ts", import.meta.url).href);
const { OFICINAS } = await import(new URL("../components/constantes.ts", import.meta.url).href);

exigir(PROVEEDOR_RECLAMOS.ruc === RUC && PROVEEDOR_RECLAMOS.razonSocial === "Cityland Group E.I.R.L.", "El proveedor del libro no es Cityland Group E.I.R.L. RUC 20614914239.");
exigir(OFICINAS.some((o) => o.ruc === RUC && o.direccion), "OFICINAS no tiene domicilio para el RUC del libro.");
exigir(TEXTO_LEGAL_RECLAMOS.includes("quince (15) días hábiles") && TEXTO_LEGAL_RECLAMOS.includes("INDECOPI"), "El texto legal del libro está incompleto.");

const valida = {
  ...RECLAMO_VACIO,
  nombre: "Ana Torres Quispe", documento: "12345678", domicilio: "Av. Los Olivos 123, Los Olivos",
  telefono: "944 103 890", correo: "ana@example.com", descripcionBien: "Pasaje Lima - Madrid",
  monto: "1250.50", detalle: "El vuelo fue reprogramado sin avisarme con tiempo suficiente.", pedido: "Quiero el reembolso completo.", aceptacion: true,
};
const casos = [
  ["hoja válida pasa", valida, []],
  ["sin aceptación", { ...valida, aceptacion: false }, ["aceptacion"]],
  ["DNI de 7 dígitos", { ...valida, documento: "1234567" }, ["documento"]],
  ["correo inválido", { ...valida, correo: "ana@" }, ["correo"]],
  ["correo con coma (inyección de destinatarios)", { ...valida, correo: "a@b.com,c@d.com" }, ["correo"]],
  ["monto inválido", { ...valida, monto: "12abc" }, ["monto"]],
  ["detalle corto", { ...valida, detalle: "mal" }, ["detalle"]],
  ["menor sin tutor", { ...valida, esMenor: true }, ["tutorDocumento", "tutorNombre"]],
  ["menor con tutor", { ...valida, esMenor: true, tutorNombre: "Rosa Quispe Díaz", tutorDocumento: "87654321" }, []],
  ["monto vacío es opcional", { ...valida, monto: "" }, []],
];
for (const [nombre, datos, esperadas] of casos) {
  const claves = Object.keys(validarReclamo(normalizarReclamo(datos))).sort();
  exigir(JSON.stringify(claves) === JSON.stringify([...esperadas].sort()), `Validación «${nombre}»: esperaba [${esperadas}] y dio [${claves}].`);
}
const largo = normalizarReclamo({ ...valida, detalle: "x".repeat(LIMITES.detalle * 3), nombre: "y ".repeat(500) });
exigir(largo.detalle.length === LIMITES.detalle && largo.nombre.length <= LIMITES.nombre, "normalizarReclamo no recorta a los límites.");
exigir(normalizarReclamo({ ...valida, aceptacion: "true" }).aceptacion === false, "La aceptación solo vale con booleano true.");

const codigo = generarCodigoReclamo(new Date("2026-10-30T03:00:00Z"));
exigir(/^LR-20261029-[A-Z2-9]{6}$/.test(codigo), `El código de reclamo no usa fecha de Lima ni el formato LR-AAAAMMDD-XXXXXX: ${codigo}`);
exigir(generarCodigoReclamo() !== generarCodigoReclamo(), "El código de reclamo no es aleatorio.");
exigir(fechaLima(new Date("2026-10-30T03:00:00Z")).iso === "2026-10-29", "La fecha de la hoja no está en hora de Lima.");

// 5. Los dos modos de la página, renderizados a HTML con el loader del repo (sin build).
//    Sin las 3 variables RECLAMOS_*: página informativa, sin formulario ni promesa de constancia. Con ellas: libro virtual con formulario.
const requireRepo = createRequire(RAIZ + "package.json");
const { renderToStaticMarkup } = requireRepo("react-dom/server");
const { createElement } = requireRepo("react");
const pag = await import(new URL("../app/libro-de-reclamaciones/page.tsx", import.meta.url).href);
const VARS = ["RECLAMOS_RESEND_API_KEY", "RECLAMOS_EMAIL_DESDE", "RECLAMOS_EMAIL_DESTINO"];
const guardadas = Object.fromEntries(VARS.map((v) => [v, process.env[v]]));
const poner = (cfg) => { for (const v of VARS) delete process.env[v]; if (cfg) Object.assign(process.env, cfg); };
const textoPlano = (html) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

try {
  poner(null);
  const sin = renderToStaticMarkup(createElement(pag.default));
  const sinTxt = textoPlano(sin);
  exigir(!/<form[\s>]/.test(sin), "Modo sin config: la página NO debe tener <form>.");
  exigir(!/virtual/i.test(sinTxt), "Modo sin config: la página no debe llamarse ni sugerir 'libro virtual'.");
  exigir(!/constancia|copia en tu correo|recibes una copia/i.test(sinTxt), "Modo sin config: la página no debe prometer constancia ni copia por correo.");
  exigir(!sin.includes("mailto:"), "Modo sin config: no debe mencionarse un correo si RECLAMOS_EMAIL_DESTINO no está cargado.");
  for (const frag of [RUC, "Cityland Group E.I.R.L.", "Antúnez de Mayolo 814", "Libro de Reclamaciones físico", "wa.me/51944103890?text=Hola%2C%20quiero%20presentar%20un%20reclamo%2Fqueja", "quince (15) días hábiles", "RECLAMO:", "QUEJA:", "<h1"]) {
    exigir(sin.includes(frag) || sinTxt.includes(frag), `Modo sin config: falta «${frag}».`);
  }
  const mSin = pag.generateMetadata();
  exigir(!/virtual/i.test(String(mSin.title) + String(mSin.description)) && /físico/.test(String(mSin.description)), "Modo sin config: la metadata no es coherente con la página informativa.");

  poner({ RECLAMOS_RESEND_API_KEY: "re_prueba", RECLAMOS_EMAIL_DESDE: "Cityland <reclamos@example.com>", RECLAMOS_EMAIL_DESTINO: "reclamos@example.com" });
  const con = renderToStaticMarkup(createElement(pag.default));
  exigir(/<form[\s>]/.test(con), "Modo con config: la página debe tener el <form>.");
  exigir(con.includes("Libro de Reclamaciones virtual") && con.includes(RUC) && con.includes("Antúnez de Mayolo 814"), "Modo con config: faltan título virtual, RUC o domicilio.");
  exigir(/name="sitioWeb"/.test(con), "Modo con config: el formulario perdió el honeypot.");
  exigir(/virtual/i.test(String(pag.generateMetadata().title)), "Modo con config: el title debe decir libro virtual.");

  // 6. Ruta POST con fetch simulado: 503 sin config (siempre), 200 con dos correos, honeypot, 400, 413, 502 y 429.
  const { NextRequest } = requireRepo("next/server");
  const { POST } = await import(new URL("../app/api/libro-de-reclamaciones/route.ts", import.meta.url).href);
  const mk = (body, ip) => new NextRequest("http://localhost/api/libro-de-reclamaciones", { method: "POST", headers: { "x-forwarded-for": ip, "content-type": "application/json" }, body: typeof body === "string" ? body : JSON.stringify(body) });
  const hoja = { ...valida, tipoDocumento: "DNI", tipoBien: "SERVICIO", moneda: "USD", tipoReclamo: "RECLAMO" };
  poner(null);
  exigir((await POST(mk(hoja, "10.0.0.1"))).status === 503, "La ruta POST sin config debe responder 503.");
  poner({ RECLAMOS_RESEND_API_KEY: "re_prueba", RECLAMOS_EMAIL_DESDE: "Cityland <reclamos@example.com>", RECLAMOS_EMAIL_DESTINO: "empresa@example.com" });
  const fetchReal = globalThis.fetch;
  const errorReal = console.error;
  console.error = () => {};
  const enviados = [];
  globalThis.fetch = async (_u, init) => { enviados.push(JSON.parse(init.body)); return new Response("{}", { status: 200 }); };
  const ok = await POST(mk(hoja, "10.0.0.2"));
  const cuerpoOk = await ok.json();
  exigir(ok.status === 200 && cuerpoOk.ok && cuerpoOk.copiaEnviada === true && enviados.length === 2, "La ruta POST con config debe enviar 2 correos y responder 200.");
  exigir(enviados[0]?.to?.[0] === "empresa@example.com" && enviados[0]?.reply_to === hoja.correo && enviados[1]?.to?.[0] === hoja.correo, "Los correos deben ir a la empresa (con reply_to) y al consumidor.");
  exigir(enviados[0]?.html.includes("Antúnez de Mayolo 814") && enviados[0]?.text.includes("US$ 1250.50"), "El correo debe traer el domicilio del proveedor y el monto.");
  const antes = enviados.length;
  exigir((await POST(mk({ ...hoja, sitioWeb: "spam" }, "10.0.0.3"))).status === 200 && enviados.length === antes, "El honeypot no debe enviar correos.");
  exigir((await POST(mk({ ...hoja, correo: "x" }, "10.0.0.4"))).status === 400, "Una hoja inválida debe dar 400.");
  exigir((await POST(mk("{no", "10.0.0.5"))).status === 400, "Un JSON roto debe dar 400.");
  exigir((await POST(mk("x".repeat(LIMITES.cuerpoMaxBytes + 1), "10.0.0.6"))).status === 413, "Un cuerpo enorme debe dar 413.");
  globalThis.fetch = async () => new Response("{}", { status: 500 });
  exigir((await POST(mk(hoja, "10.0.0.7"))).status === 502, "Si el proveedor de correo falla, la ruta debe dar 502 (no perder el reclamo en silencio).");
  let ultimo;
  for (let i = 0; i < 6; i++) ultimo = await POST(mk(hoja, "10.0.0.8"));
  exigir(ultimo.status === 429, "El rate limit por IP debe responder 429 al sexto intento.");
  globalThis.fetch = fetchReal;
  console.error = errorReal;
} finally {
  for (const v of VARS) { if (guardadas[v] === undefined) delete process.env[v]; else process.env[v] = guardadas[v]; }
}

if (fallas.length) {
  console.error(`Libro de Reclamaciones: ${fallas.length} FALLAS\n- ` + fallas.join("\n- "));
  process.exit(1);
}
console.log("Libro de Reclamaciones OK: enlaces, RUC, modo informativo (sin config) y modo virtual (con config), ruta POST y código de reclamo.");
