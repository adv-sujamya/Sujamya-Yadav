import Header from "@/components/Header";
import DisclaimerModal from "@/components/DisclaimerModal";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PracticeAreas from "@/components/PracticeAreas";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  return (
    <>
      <DisclaimerModal />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreas />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
};

export default Index;
