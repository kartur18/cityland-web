import Link from "next/link";

// Revisión del 10-nov-2026: las páginas por distrito tenían 0-1 enlaces internos y Google aún no conocía
// /paquetes-a-italia. Desde el pie las recibe cada página de la web.
const GRUPOS: { titulo: string; enlaces: [string, string][] }[] = [
  {
    titulo: "Más paquetes por destino",
    enlaces: [
      ["/paquetes-a-cancun", "Cancún"],
      ["/paquetes-a-cartagena", "Cartagena"],
      ["/paquetes-a-san-andres", "San Andrés"],
      ["/paquetes-a-aruba", "Aruba"],
      ["/paquetes-a-panama", "Panamá"],
      ["/paquetes-a-costa-rica", "Costa Rica"],
      ["/paquetes-a-miami", "Miami"],
      ["/paquetes-a-orlando-disney", "Orlando y Disney"],
      ["/paquetes-a-italia", "Italia"],
      ["/paquetes-a-francia", "Francia"],
      ["/paquetes-a-grecia", "Grecia"],
      ["/paquetes-a-turquia", "Turquía"],
      ["/paquetes-a-dubai", "Dubái"],
      ["/paquetes-a-egipto", "Egipto"],
      ["/paquetes-a-jordania", "Jordania"],
      ["/paquetes-a-marruecos", "Marruecos"],
      ["/paquetes-a-india", "India"],
      ["/paquetes-a-china", "China"],
      ["/paquetes-a-japon", "Japón"],
      ["/paquetes-a-tailandia", "Tailandia"],
      ["/nacionales", "Viajes nacionales"],
      ["/promociones", "Promociones"],
      ["/paquetes", "Paquetes internacionales"],
    ],
  },
  {
    titulo: "Agencia de viajes en Lima",
    enlaces: [
      ["/agencia-de-viajes-los-olivos", "Los Olivos"],
      ["/agencia-de-viajes-san-martin-de-porres", "San Martín de Porres"],
      ["/agencia-de-viajes-comas", "Comas"],
      ["/agencia-de-viajes-independencia", "Independencia"],
      ["/agencia-de-viajes-lima-norte", "Lima Norte"],
      ["/agencia-de-viajes-san-miguel", "San Miguel"],
      ["/agencia-de-viajes-miraflores", "Miraflores"],
      ["/agencia-de-viajes-surco", "Surco"],
      ["/agencia-de-viajes-lima", "Lima"],
    ],
  },
];

export default function EnlacesPie() {
  return (
    <div className="mb-10 space-y-4 border-t border-slate-800 pt-8">
      {GRUPOS.map((g) => (
        <div key={g.titulo}>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">{g.titulo}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
            {g.enlaces.map(([href, texto]) => (
              <li key={href}>
                <Link href={href} className="inline-block py-1 text-slate-300 transition-colors hover:text-white">
                  {texto}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
