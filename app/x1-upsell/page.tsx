import ProgressTabs from "./components/ProgressTabs";
import AlertBanner from "./components/AlertBanner";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import ThreeThingsSection from "./components/ThreeThingsSection";
import CheckoutPlaceholder from "./components/CheckoutPlaceholder";
import ModulesSection from "./components/ModulesSection";
import PerfectForSection from "./components/PerfectForSection";
import PriceSection from "./components/PriceSection";
import GuaranteeSection from "./components/GuaranteeSection";
import ContactSection from "./components/ContactSection";
import Footer from "../components/Footer";
import OrderBumpCharger from "../components/OrderBumpCharger";

export default function UpsellPage() {
  return (
    <main className="bg-[#020101] min-h-screen w-full [overflow-x:clip]">
      <OrderBumpCharger />
      <ProgressTabs />
      <AlertBanner />
      <HeroSection />
      <IntroSection />
      <ThreeThingsSection />
      <CheckoutPlaceholder />
      <ModulesSection />
      <PerfectForSection />
      <PriceSection />
      <GuaranteeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
