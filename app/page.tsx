import SchemaOrg from "@/components/SchemaOrg";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Destinos from "@/components/Destinos";
import Migratorio from "@/components/Migratorio";
import Servicios from "@/components/Servicios";
import Garantias from "@/components/Garantias";
import Testimonios from "@/components/Testimonios";
import FAQ from "@/components/FAQ";
import Mapa from "@/components/Mapa";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieBar from "@/components/CookieBar";

export default function LandingPage() {
  return (
    <>
      <SchemaOrg />
      <ScrollProgress />
      <Navbar />

      <main id="main-content">
        {/* 1. Hero Compacto con Cotizador Inmediato a WhatsApp */}
        <Hero />

        {/* 2. Barra de Métricas y Formalidad */}
        <ProofBar />

        {/* 3. PRIORIDAD #1: Catálogo de Paquetes Turísticos 2026 (Lo que el cliente busca de inmediato) */}
        <Destinos />

        {/* 4. PRIORIDAD #2: Especial Paquete a España y Migratorio (Ruta directa al especialista Europa) */}
        <Migratorio />

        {/* 5. PRIORIDAD #3: Servicios Complementarios (Vuelos, All Inclusive, Seguro Schengen, Facilidades) */}
        <Servicios />

        {/* 6. Garantías y Respaldo Formal (RUC, 50% inicial, Oficina en Los Olivos) */}
        <Garantias />

        {/* 7. Testimonios Reales de Viajeros */}
        <Testimonios />

        {/* 8. Preguntas Frecuentes Clave */}
        <FAQ />

        {/* 9. Ubicación de Oficina Física en Los Olivos */}
        <Mapa />
      </main>

      <Footer />

      <WhatsAppFloat />
      <CookieBar />
    </>
  );
}
