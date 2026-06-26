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
import type { VturbConfig } from "@/app/components/VturbVideo";

const CHECKOUT_URL = "/checkout";
const PRICE = "47";

const VIDEO: VturbConfig = {
  playerId: "6a1e5cd244518c29d082e69f",
  accountId: "28aacb89-50b2-4581-bcda-1d88d1bb44fc",
};

export default function Mvp67() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050208] w-full overflow-x-clip">
      {/* 1. Hero (always visible; its CTA + payments stay hidden until reveal) */}
      <HeroSection checkoutUrl={CHECKOUT_URL} video={VIDEO} />

      {/* Everything between Hero and Footer is hidden until the VSL reveal time */}
      <div className="esconder flex flex-col w-full">
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
        <PricingSection checkoutUrl={CHECKOUT_URL} price={PRICE} />

        {/* 8. Bonus */}
        <BonusSection />

        {/* 9. Offer Summary */}
        <OfferSummarySection checkoutUrl={CHECKOUT_URL} price={PRICE} />

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
