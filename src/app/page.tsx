import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import PromosSection from "@/components/PromosSection";
import ProductsSection from "@/components/ProductsSection";
import NetworkSection from "@/components/NetworkSection";
import ClientCarousel from "@/components/ClientCarousel";
import BannerSection from "@/components/BannerSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <FeaturesSection />
      <PromosSection />
      <ProductsSection />
      <NetworkSection />
      <ClientCarousel />
      <BannerSection />
      <ContactFooter />
    </>
  );
}
