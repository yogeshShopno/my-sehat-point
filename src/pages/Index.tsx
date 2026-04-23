import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Models from "@/components/sections/Models";
import ROI from "@/components/sections/ROI";
import WhyUs from "@/components/sections/WhyUs";
import Eligibility from "@/components/sections/Eligibility";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Models />
      <ROI />
      <WhyUs />
      <Eligibility />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
