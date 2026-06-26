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

// Variante "completa": misma página principal pero SIN la función de ocultar
// secciones por sincronización con vTurb. Todo se muestra desde el inicio junto
// al video (sin la clase `esconder` ni el watcher `VturbReveal`).
// redeploy: 2026-06-05 (cambio inocuo para forzar build en Vercel)
export default function Completa() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050208] w-full overflow-x-clip">
      {/* 1. Hero (con el video; CTA/pagos visibles desde el inicio) */}
      <HeroSection revealAll />

      {/* Todas las secciones siempre visibles (sin clase `esconder`) */}
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
    </main>
  );
}
