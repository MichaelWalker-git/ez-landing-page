import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AdvancedExtractionMethods from '@/components/sections/AdvancedExtractionMethods';
import CaseStudies from '@/components/sections/CaseStudies';
import ContactsSection from '@/components/sections/ContactsSection';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <Header />

      <HeroSection />

      <FeaturesSection />

      <AdvancedExtractionMethods />

      <CaseStudies />

      <ContactsSection />

      <Footer />
    </main>
  );
}
