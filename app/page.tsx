import SchemaOrg from "@/components/SchemaOrg";
import ScrollProgress from "@/components/ScrollProgress";
import UrgencyBar from "@/components/UrgencyBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import ProofBar from "@/components/ProofBar";
import Destinos from "@/components/Destinos";
import UrgencyCountdown from "@/components/UrgencyCountdown";
import HowItWorks from "@/components/HowItWorks";
import Comparador from "@/components/Comparador";
import Migratorio from "@/components/Migratorio";
import Garantias from "@/components/Garantias";
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
        <UrgencyCountdown />
        <HowItWorks />
        <SectionDivider type="wave" color="#FEF3C7" />
        <Comparador />
        <SectionDivider type="curve" color="#0D1F3C" />
        <Migratorio />
        <Garantias />
        <Servicios />
        <Airlines />
        <SectionDivider type="wave" color="#F7F8FF" />
        <Video />
        <SectionDivider type="curve" color="#F4F6FB" />
        <Testimonios />
        <TrustSection />
        <Blog />
        <SectionDivider type="wave" color="#F4F6FB" />
        <FAQ />
        <SectionDivider type="diagonal" color="#0D1F3C" />
        <BigCTA />
        <Mapa />
      </main>

      <Footer />

      {/* Elementos de conversión */}
      <WhatsAppFloat />
      <SocialToast />
      <ExitPopup />
      <CookieBar />
      <FloatingCTA />
    </>
  );
}
