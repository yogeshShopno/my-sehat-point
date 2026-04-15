import { useEffect } from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import LabTestSection from '../components/LabTestSection';
import WhySection from '../components/WhySection';
import PartnerSection from '../components/PartnerSection';
import MembershipSection from '../components/MembershipSection';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import FranchiseInvestor from './FranchiseInvestor';
import ROIBrochurePage from './ROIBrochurePage';
import FranchiseModelPage from './FranchiseModelPage';

export default function Home() {
  useEffect(() => {
    // Initialize WOW animations
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }

    // Initialize jQuery-based template scripts
    if (typeof window.$ !== 'undefined' && typeof window.$.fn.counterUp !== 'undefined') {
      window.$('.counter').counterUp();
    }

    // Initialize Swiper carousels
    if (typeof Swiper !== 'undefined') {
      document.querySelectorAll('.swiper').forEach(el => {
        if (!el.swiper) new Swiper(el, { loop: true, autoplay: { delay: 3000 } });
      });
    }
  }, []);

  return (
    <>
      <Hero />

      <ServicesSection />
      <LabTestSection />
      <WhySection />
      <PartnerSection />
      <MembershipSection />
      <FranchiseInvestor />
  
      <Section3 />
    </>
  );
}
