import AnimateOnScroll from "@/components/AnimateOnScroll";
import { TELEFONO, TELEFONO_FORMATEADO, buildWaUrl } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Mapa() {
  const waOficinaUrl = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: "¡Hola Cityland Travel! Deseo agendar una visita a su oficina de Los Olivos para recibir asesoría presencial y consultar paquetes turísticos.",
  });

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200" id="ubicacion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2.5">
              Atención Presencial
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-2">
              NUESTRA OFICINA EN LIMA
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Conoce a tu asesor en persona, revisa tu contrato formal y paga con total seguridad.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <AnimateOnScroll direction="left" className="lg:col-span-5">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-bold text-[#0a1628] mb-5">
                Cityland Travel — Los Olivos
              </h3>
              
              <div className="space-y-4 mb-6">
                {[
                  {
                    titulo: "Dirección",
                    sub: "Av. Antúnez de Mayolo N. 814, Los Olivos, Lima",
                    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                    bg: "bg-blue-50 text-blue-600 border border-blue-200/60",
                  },
                  {
                    titulo: "WhatsApp Asesoría",
                    sub: TELEFONO_FORMATEADO,
                    icon: <WhatsAppIcon size={16} />,
                    bg: "bg-emerald-50 text-emerald-600 border border-emerald-200/60",
                    link: `tel:${TELEFONO}`,
                  },
                  {
                    titulo: "Horario de Atención",
                    sub: "Lunes a Sábado: 9:00 AM – 7:00 PM",
                    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                    bg: "bg-amber-50 text-amber-700 border border-amber-200/60",
                  },
                  {
                    titulo: "Registro SUNAT",
                    sub: "RUC 20614914239 · Boleta y Factura",
                    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                    bg: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
                  },
                ].map((item) => (
                  <div key={item.titulo} className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <strong className="block text-xs font-bold text-[#0a1628] leading-tight">
                        {item.titulo}
                      </strong>
                      {item.link ? (
                        <a href={item.link} className="text-xs text-emerald-700 font-semibold hover:underline">
                          {item.sub}
                        </a>
                      ) : (
                        <span className="text-xs text-slate-600">{item.sub}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={waOficinaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>Agendar visita por WhatsApp</span>
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[360px] h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5!2d-77.0642!3d-11.9556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU3JzIwLjIiUyA3N8KwMDMnNTEuMSJX!5e0!3m2!1ses!2spe!4v1"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Cityland Travel Los Olivos Lima"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
