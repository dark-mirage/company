import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection';
// import NewsSection from './components/NewsSection';
import TeamSection from './components/TeamSection';
import StatsSection from './components/StatsSection';
import InvestorsSection from './components/InvestorsSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <StatsSection/>
    <TeamSection/>
    <InvestorsSection/>
    <ContactUsSection/>
    <Footer/>
    </>
  );
}
