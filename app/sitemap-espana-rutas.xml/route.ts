import { respuestaXml, urlsDeSitemap, xmlUrlset } from "@/lib/sitemap-urls";

export const revalidate = 86400;

export function GET() {
  return respuestaXml(xmlUrlset(urlsDeSitemap("espana-rutas")));
}
