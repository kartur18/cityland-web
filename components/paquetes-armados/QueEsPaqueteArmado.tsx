// Recuadro que explica qué es un paquete armado, para que nadie lo confunda con un viaje a medida.
export default function QueEsPaqueteArmado({ sinVuelo = false }: { sinVuelo?: boolean }) {
  return (
    <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 space-y-2">
      <h2 className="text-xl font-extrabold text-[#0a1628]">¿Qué es un paquete armado?</h2>
      <p className="text-[15px] text-slate-700">
        Es un viaje que ya viene organizado de principio a fin: fecha de salida fija,{" "}
        {sinVuelo ? "hoteles, traslados y visitas" : "vuelo, hoteles, traslados y visitas"} reservados con anticipación. Tú solo eliges la salida,
        separas tu cupo y viajas.
      </p>
      <ul className="list-disc pl-5 space-y-1 text-[15px] text-slate-700">
        <li>El itinerario y los hoteles ya están definidos; los hoteles pueden cambiar por otros de la misma categoría («o similar»).</li>
        <li>Los cupos de cada salida son limitados: cuando se llenan, la fecha se cierra.</li>
        {sinVuelo && <li>Este paquete no incluye el vuelo desde Lima; si quieres, te lo cotizamos aparte.</li>}
        <li>Si buscas otras fechas u otro hotel, también te armamos un viaje a medida.</li>
      </ul>
    </section>
  );
}
