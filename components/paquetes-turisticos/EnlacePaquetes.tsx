import Link from "next/link";
import { formatoUSD } from "@/lib/formato-precio";
import { paisesConPaquetes } from "@/lib/paquetes-turisticos";

// Página por país de la web → su vitrina de paquetes turísticos, para que el cliente (y Google) llegue a ellos.
const DESDE_RUTA: Record<string, string> = {
  "/paquetes-a-colombia": "colombia",
  "/paquetes-a-cartagena": "colombia",
  "/paquetes-a-san-andres": "colombia",
  "/paquetes-a-argentina": "argentina",
  "/paquetes-a-mexico": "mexico",
  "/paquetes-a-cancun": "mexico",
  "/paquetes-a-italia": "italia",
  "/paquetes-a-espana": "espana",
  "/paquetes-a-turquia": "turquia",
  "/paquetes-a-dubai": "emiratos-arabes",
  "/paquetes-a-egipto": "egipto",
  "/paquetes-a-jordania": "jordania",
  "/paquetes-a-marruecos": "marruecos",
  "/paquetes-a-grecia": "grecia",
  "/paquetes-a-japon": "japon",
  "/paquetes-a-china": "china",
  "/paquetes-a-tailandia": "tailandia",
  "/paquetes-a-panama": "panama",
  "/paquetes-a-punta-cana": "republica-dominicana",
  "/paquetes-a-miami": "estados-unidos",
  "/paquetes-a-orlando-disney": "estados-unidos",
  "/paquetes-a-estados-unidos": "estados-unidos",
  "/paquetes-a-brasil": "brasil",
};

export default function EnlacePaquetesTuristicos({ ruta }: { ruta: string }) {
  const pais = paisesConPaquetes().find((x) => x.slug === DESDE_RUTA[ruta]);
  if (!pais) return null;
  return (
    <Link
      href={`/paquetes-turisticos/${pais.slug}`}
      className="flex flex-col gap-3 rounded-3xl border-2 border-dashed border-orange-200 bg-[#fffaf3] p-6 transition-shadow hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
    >
      <span>
        <strong className="block text-xl text-[#10302e]">
          {pais.total} paquetes turísticos más a {pais.nombre}
        </strong>
        <span className="text-base text-slate-600">
          Con alojamiento y precio por persona, desde <strong className="text-[#e4513f]">{formatoUSD(pais.desde)}</strong>.
        </span>
      </span>
      <span className="shrink-0 rounded-full bg-[#0f766e] px-5 py-3 text-base font-extrabold text-white">Ver paquetes →</span>
    </Link>
  );
}
