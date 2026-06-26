import HeroSection from "@/app/components/HeroSection";
import MarqueeSection from "@/app/components/MarqueeSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import MvpSection from "@/app/components/MvpSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import PlatformSection from "@/app/components/PlatformSection";
import PricingSection from "@/app/components/PricingSection";
import BonusSection from "@/app/components/BonusSection";
import OfferSummarySection from "@/app/components/OfferSummarySection";
import GuaranteeSection from "@/app/components/GuaranteeSection";
import AlumniResultsSection from "@/app/components/AlumniResultsSection";
import FAQSection from "@/app/components/FAQSection";
import FinalCTASection from "@/app/components/FinalCTASection";
import Footer from "@/app/components/Footer";
import VturbReveal from "@/app/components/VturbReveal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050208] w-full overflow-x-clip">
      {/* 1. Hero (always visible; revealAll=true shows CTA immediately for testing) */}
      <HeroSection revealAll={true} />

      {/* Content sections (esconder removed for testing) */}
      <div className="flex flex-col w-full">
        {/* 2. Proof image marquee */}
        <MarqueeSection />

        {/* 3. Student results / video testimonials */}
        <TestimonialsSection />

        {/* 4. MvpSection */}
        <MvpSection />

        {/* 6. Feature bento grid */}
        <FeaturesSection />

        {/* 7. Netflix-style platform */}
        <PlatformSection />

        {/* 7. Pricing / CTA */}
        <PricingSection price="69" />

        {/* 8. Bonus */}
        <BonusSection />

        {/* 9. Offer Summary */}
        <OfferSummarySection price="69" />

        {/* 10. Guarantee */}
        <GuaranteeSection />

        {/* 10.5 Alumni results */}
        <AlumniResultsSection />

        {/* 9. FAQ */}
        <FAQSection />

        {/* 10. Final CTA */}
        <FinalCTASection />
      </div>

      {/* 11. Footer (always visible) */}
      <Footer />

      {/* Reveal watcher: shows hidden sections at 1380s (23:00) */}
      <VturbReveal seconds={1380} />
    </main>
  );
}
