import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import AutomationSection from "@/components/home/AutomationSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InsightsSection from "@/components/home/InsightsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <AutomationSection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
