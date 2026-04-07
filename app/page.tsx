import SchemaOrg from "@/components/SchemaOrg";
import ScrollProgress from "@/components/ScrollProgress";
import UrgencyBar from "@/components/UrgencyBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Destinos from "@/components/Destinos";
import SectionDivider from "@/components/SectionDivider";
import HowItWorks from "@/components/HowItWorks";
import Migratorio from "@/components/Migratorio";
import Garantias from "@/components/Garantias";
import Comparador from "@/components/Comparador";
import Servicios from "@/components/Servicios";
import Airlines from "@/components/Airlines";
import Video from "@/components/Video";
import Testimonios from "@/components/Testimonios";
import TrustSection from "@/components/TrustSection";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import BigCTA from "@/components/BigCTA";
import Mapa from "@/components/Mapa";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SocialToast from "@/components/SocialToast";
import ExitPopup from "@/components/ExitPopup";
import CookieBar from "@/components/CookieBar";
import FloatingCTA from "@/components/FloatingCTA";

export default function LandingPage() {
  return (
    <>
      <SchemaOrg />
      <ScrollProgress />
      <UrgencyBar />
      <Navbar />

      <main id="main-content">
        <Hero />
        <ProofBar />
        <Destinos />
        <SectionDivider type="wave" color="#f1f5f9" />
        <HowItWorks />
        <Migratorio />
        <Garantias />
        <Comparador />
        <Servicios />
        <Airlines />
        <Video />
        <Testimonios />
        <TrustSection />
        <Blog />
        <FAQ />
        <BigCTA />
        <Mapa />
      </main>

      <Footer />

      <WhatsAppFloat />
      <SocialToast />
      <ExitPopup />
      <CookieBar />
      <FloatingCTA />
    </>
  );
}
