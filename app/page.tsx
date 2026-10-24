import SchemaOrg from "@/components/SchemaOrg";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Destinos from "@/components/Destinos";
import Migratorio from "@/components/Migratorio";
import ConfianzaReal from "@/components/ConfianzaReal";
import FAQ from "@/components/FAQ";
import Mapa from "@/components/Mapa";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieBar from "@/components/CookieBar";

export default function LandingPage() {
  return (
    <>
      <SchemaOrg />
      <Navbar />

      <main id="main-content">
        {/* 1. Hero Principal con Prioridad en Europa $699 y Caribe */}
        <Hero />

        {/* 2. Paquetes Migratorios a España, Italia y Francia ($699 · $799 · $899 · $999) */}
        <Migratorio />

        {/* 3. Catálogo Fotográfico de Destinos Más Vendidos */}
        <Destinos />

        {/* 4. Franja Limpia de Respaldo */}
        <ProofBar />

        {/* 5. Oficinas, RUC y canales oficiales (datos comprobables) */}
        <ConfianzaReal />

        {/* 6. Preguntas Frecuentes Compactas */}
        <FAQ />

        {/* 7. Oficina Física en Los Olivos */}
        <Mapa />
      </main>

      <Footer />
      <WhatsAppFloat />
      <CookieBar />
    </>
  );
}
