import HeroSection from "../components/investors/HeroSection";
import MarketOpportunitySection from "../components/investors/MarketOpportunitySection";
import SolutionSection from "../components/investors/SolutionSection";
import FinancialProjectionsSection from "../components/investors/FinancialProjectionsSection";
// import InvestmentCalculatorSection from "../components/investors/InvestmentCalculatorSection";
import UseOfFundsSection from "../components/investors/UseOfFundsSection";
import Footer from "../components/Footer"
import ContactUsSection from "../components/ContactUsSection";
import FaqSection from "../components/FaqSection";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MarketOpportunitySection />
      <SolutionSection />
      {/* <FinancialProjectionsSection /> */}
      {/* <InvestmentCalculatorSection /> */}
      {/* <UseOfFundsSection /> */}
      <ContactUsSection/>
      <FaqSection/>
      <Footer />
    </div>
  );
}
