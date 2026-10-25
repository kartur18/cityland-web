import { OFICINAS } from "@/components/constantes";

// Responde la duda «¿por qué no lo compro yo por internet?». Solo hechos que se pueden comprobar (25-oct-2026).
const RAZONES: readonly { titulo: string; texto: string }[] = [
  {
    titulo: "Oficinas de verdad en Los Olivos",
    texto: `Puedes venir a ${OFICINAS.length} oficinas físicas, con RUC registrado en SUNAT, y hablar cara a cara con tu asesora.`,
  },
  {
    titulo: "Separas con el 50%",
    texto: "No pagas todo de golpe: separas tu viaje con la mitad y completas antes de viajar.",
  },
  {
    titulo: "Pagas como prefieras",
    texto: "Yape, Plin, transferencia, tarjeta o en efectivo en la oficina.",
  },
  {
    titulo: "Una persona que te responde",
    texto: "Si cambia tu vuelo o necesitas mover la fecha, escribes a tu asesora por WhatsApp y lo gestiona contigo, según las condiciones de tu tarifa.",
  },
  {
    titulo: "Todo en un solo lugar",
    texto: "Vuelo, hotel, traslados, seguro de viaje y tours en una sola compra, sin armarlo por tu cuenta en varias páginas.",
  },
  {
    titulo: "Te decimos qué documentos llevas",
    texto: "Antes de pagar te confirmamos si necesitas pasaporte, visa o solo DNI, para que no tengas sorpresas en el aeropuerto.",
  },
];

export default function PorQueCityland({ destino }: { destino: string }) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
            ¿Por qué comprar tu viaje a {destino} con Cityland y no solo por internet?
          </h2>
          <p className="text-[15px] sm:text-base text-slate-600">
            Por internet compras solo. Con nosotros tienes a alguien que te acompaña antes, durante y después de la compra.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RAZONES.map((r) => (
            <li key={r.titulo} className="rounded-2xl bg-white border border-slate-200 p-5 space-y-1.5">
              <h3 className="font-extrabold text-[#0a1628]">{r.titulo}</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">{r.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
