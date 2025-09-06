import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import StatsSection from './components/StatsSection';
import InvestorsSection from './components/InvestorsSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer'
import AdvantagesSection from './components/AdvantagesSection';
import AudienceSection from './components/AudienceSection';
import FaqSection from './components/FaqSection';

export default function HomePage() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <AdvantagesSection/>
    <StatsSection/>
    <InvestorsSection/>
    <AudienceSection/>
    <TeamSection/>
    <ContactUsSection/>
    <FaqSection/>
    <Footer/>
    </>
  );
}
