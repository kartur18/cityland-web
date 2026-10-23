import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface Props {
  // Precio ya formateado, por ejemplo "$489".
  precio: string;
  href: string;
  nota?: string;
  etiqueta?: string;
}

/**
 * Barra fija de conversión solo para móvil. Lleva su propio espaciador para que no tape el pie de página,
 * y usa z-30 para quedar por debajo del menú móvil (z-40).
 */
export default function BarraConversionMovil({
  precio,
  href,
  nota = "Separa con 50%",
  etiqueta = "WhatsApp Ahora",
}: Props) {
  return (
    <>
      <div className="h-20 sm:hidden" aria-hidden="true" />
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-[0_-8px_24px_rgba(10,22,40,0.12)] flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 block leading-none">
            Tarifa desde
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-lg font-black text-[#0a1628] leading-none">{precio}</span>
            {nota && (
              <span className="text-[10px] font-bold text-emerald-700 truncate">· {nota}</span>
            )}
          </div>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-4 py-2.5 min-h-[44px] rounded-xl text-xs shadow-md shrink-0"
        >
          <WhatsAppIcon size={16} />
          <span>{etiqueta}</span>
        </a>
      </div>
    </>
  );
}
