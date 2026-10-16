import SchemaOrg from "@/components/SchemaOrg";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Destinos from "@/components/Destinos";
import Migratorio from "@/components/Migratorio";
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
      <Navbar />

      <main id="main-content">
        {/* 1. Hero Cinemático Estilo Aerolínea */}
        <Hero />

        {/* 2. Franja Limpia de Respaldo */}
        <ProofBar />

        {/* 3. Catálogo Fotográfico de Destinos */}
        <Destinos />

        {/* 4. Banner Visual Especial España */}
        <Migratorio />

        {/* 5. Experiencias Reales de Viajeros */}
        <Testimonios />

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
