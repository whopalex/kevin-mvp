import AlertBanner from "./components/AlertBanner";
import HeroSection from "./components/HeroSection";
import PriceSection from "./components/PriceSection";
import ReasonsSection from "./components/ReasonsSection";
import WhySection from "./components/WhySection";
import Footer from "../components/Footer";

export default function DownsellPage() {
  return (
    <main className="bg-[#0c0c0c] min-h-screen w-full [overflow-x:clip]">
      <AlertBanner />
      <HeroSection />
      <PriceSection />
      <ReasonsSection />
      <WhySection />
      <Footer />
    </main>
  );
}
