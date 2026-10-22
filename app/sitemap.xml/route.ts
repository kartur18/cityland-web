import { respuestaXml, xmlIndice } from "@/lib/sitemap-urls";

export const revalidate = 86400;

export function GET() {
  return respuestaXml(xmlIndice());
}
