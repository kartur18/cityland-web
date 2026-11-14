import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import { PRECIO_ANTICIPADO } from "@/lib/viaja-a-madrid";

// Barra fija solo en celular: el precio y el botón siempre a la vista, sin recorrer la página.
export default function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 p-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <p className="shrink-0 text-xs font-semibold leading-tight text-slate-500">
          Desde
          <strong className="block text-2xl font-extrabold tracking-tight text-[#0a1628]">US$ {PRECIO_ANTICIPADO}</strong>
        </p>
        <BotonCotizar zona="Barra móvil" texto="Cotizar por WhatsApp" compacto className="min-h-[50px] flex-1" />
      </div>
    </div>
  );
}
