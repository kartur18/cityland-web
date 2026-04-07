import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WA_LINK } from "@/components/constantes";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen flex items-center justify-center px-5">
        <div className="text-center max-w-md mx-auto py-20">
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(120px,20vw,200px)] text-[#0a1628] leading-none tracking-wide">
            404
          </h1>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(24px,4vw,36px)] text-[#0a1628] tracking-wide mt-2 mb-3">
            Página no encontrada
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            La página que buscas no existe o fue movida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-[#162544] text-white font-semibold text-[14px] px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
            >
              Volver al inicio
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-[14px] px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
