// Loader de Node para ejecutar .ts/.tsx del repo fuera de Next (solo para scripts de medicion).
import { readFileSync, existsSync } from "node:fs";
import { pathToFileURL, fileURLToPath } from "node:url";
import path from "node:path";
import ts from "typescript";

const RAIZ = process.cwd();
const STUBS = path.join(RAIZ, "scripts", "_stubs");
const EXTS = [".ts", ".tsx", "/index.ts", "/index.tsx"];

function probar(base) {
  if (existsSync(base) && /\.(tsx?|mjs|js)$/.test(base)) return base;
  for (const e of EXTS) if (existsSync(base + e)) return base + e;
  return null;
}

const STUB_DE = {
  "next/link": "link.tsx",
  "next/image": "image.tsx",
  "next/navigation": "navigation.ts",
  "next/script": "script.tsx",
};

export async function resolve(spec, ctx, next) {
  if (STUB_DE[spec]) return { url: pathToFileURL(path.join(STUBS, STUB_DE[spec])).href, shortCircuit: true };
  if (spec.startsWith("@/")) {
    const f = probar(path.join(RAIZ, spec.slice(2)));
    if (f) return { url: pathToFileURL(f).href, shortCircuit: true };
  }
  if ((spec.startsWith("./") || spec.startsWith("../")) && ctx.parentURL?.startsWith("file:")) {
    const f = probar(path.resolve(path.dirname(fileURLToPath(ctx.parentURL)), spec));
    if (f) return { url: pathToFileURL(f).href, shortCircuit: true };
  }
  return next(spec, ctx);
}

export async function load(url, ctx, next) {
  if (url.startsWith("file:") && /\.tsx?$/.test(url) && !url.includes("node_modules")) {
    const src = readFileSync(fileURLToPath(url), "utf8");
    const out = ts.transpileModule(src, {
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
      fileName: fileURLToPath(url),
    });
    return { format: "module", source: out.outputText, shortCircuit: true };
  }
  return next(url, ctx);
}
