import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import GuestsSection from "./components/GuestsSection";
import TwoTypesSection from "./components/TwoTypesSection";
import TickerBar from "./components/TickerBar";
import NotFormationSection from "./components/NotFormationSection";
import TopicsSection from "./components/TopicsSection";
import NotForSection from "./components/NotForSection";
import NextLevelSection from "./components/NextLevelSection";
import PricingSection from "./components/PricingSection";
import VenueSection from "./components/VenueSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "../components/Footer";

export default function BeyondX1Page() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050208] w-full overflow-x-clip">
      <HeroSection />
      <ProblemSection />
      <GuestsSection />
      <TwoTypesSection />
      <TickerBar />
      <NotFormationSection />
      <TopicsSection />
      <NotForSection />
      <NextLevelSection />
      <PricingSection />
      <VenueSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
