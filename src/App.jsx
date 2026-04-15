import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import FranchiseInvestor from './pages/FranchiseInvestor';
import MembershipPlans from './pages/MembershipPlans';
import Testimonial from './pages/Testimonial';
import BlogGrid from './pages/BlogGrid';
import OurStory from './pages/OurStory';
import RentProperty from './pages/RentProperty';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import FranchiseInquiry from './pages/FranchiseInquiry';
import Appointment from './pages/Appointment';
import ServiceDetail from './pages/ServiceDetail';
import MembershipForm from './pages/MembershipForm';
import NotFound from './pages/NotFound';
import BookLabTest from './pages/BookLabTest';
import BrandProfilePage from './pages/BrandProfilePage';
import ROIBrochurePage from './pages/ROIBrochurePage';
import FranchiseModelPage from './pages/FranchiseModelPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="service-detail" element={<ServiceDetail />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="franchise-investor" element={<FranchiseInvestor />} />
          <Route path="membership-plans" element={<MembershipPlans />} />
          <Route path="membership-form" element={<MembershipForm />} />
          <Route path="testimonial" element={<Testimonial />} />http://localhost:3000/brand-profile
          <Route path="blog-grid" element={<BlogGrid />} />
          <Route path="our-story-who-we-are" element={<OurStory />} />
          <Route path="rent-your-property" element={<RentProperty />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="franchise-inquiry" element={<FranchiseInquiry />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="book-lab-test" element={<BookLabTest />} />
          <Route path="brand-profile" element={<BrandProfilePage />} />
          <Route path="roi-brochure" element={<ROIBrochurePage />} />
          <Route path="franchise-model" element={<FranchiseModelPage />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
