import { TELEFONO, TELEFONO_FORMATEADO, buildWaUrl } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Mapa() {
  const waOficinaUrl = buildWaUrl({
    categoria: "general",
    mensajePersonalizado:
      "¡Hola Cityland Travel! Deseo agendar una visita a su oficina de Los Olivos para recibir asesoría presencial.",
  });

  return (
    <section className="bg-slate-50/70 py-14 sm:py-18 border-b border-slate-200/80" id="ubicacion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
              Atención Presencial en Lima
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-5">
              VISÍTANOS EN LOS OLIVOS
            </h2>

            <div className="space-y-3.5 mb-6 text-xs sm:text-sm text-slate-600">
              <p>
                <strong className="text-[#0a1628]">Dirección:</strong> Av. Antúnez de Mayolo N. 814, Los Olivos, Lima
              </p>
              <p>
                <strong className="text-[#0a1628]">Horario:</strong> Lunes a Sábado: 9:00 AM – 7:00 PM
              </p>
              <p>
                <strong className="text-[#0a1628]">Teléfono / WhatsApp:</strong>{" "}
                <a href={`tel:${TELEFONO}`} className="text-emerald-700 font-bold hover:underline">
                  {TELEFONO_FORMATEADO}
                </a>
              </p>
              <p>
                <strong className="text-[#0a1628]">Razón Social:</strong> Cityland Travel E.I.R.L. · RUC 20614914239
              </p>
            </div>

            <a
              href={waOficinaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
            >
              <WhatsAppIcon size={16} />
              <span>Agendar visita por WhatsApp</span>
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs bg-white h-[340px]">
              <iframe
                src="https://www.google.com/maps?q=Av.+Antunez+de+Mayolo+814,+Los+Olivos,+Lima,+Peru&output=embed"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Cityland Travel Los Olivos Lima"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
