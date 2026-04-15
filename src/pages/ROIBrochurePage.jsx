import React from 'react';
import { Phone, Mail } from "lucide-react";
import Logo from "../components/Logo";

const ROIBrochurePage = () => {
  const earnings = [
    { label:"Monthly Gross Revenue", value:"₹3,00,000 – ₹12,00,000", sub:null },
    { label:"Can range from", value:"25% to 40%", sub:"(depending on location & operations)" },
    { label:"Expected ROI Period", value:"12 – 18 Months", sub:"Actual numbers depend on store model, area, and execution." },
  ];
  const steps = [
    { num:"01", title:"Inquiry & Consultation", desc:"Connect with our franchise team for a detailed discussion about the opportunity and your goals." },
    { num:"02", title:"Location Assessment", desc:"Our experts evaluate your proposed location for viability, footfall, and market potential." },
    { num:"03", title:"Agreement & Investment", desc:"Sign the franchise agreement and complete the investment process to secure your partnership." },
    { num:"04", title:"Store Setup", desc:"We guide you through store design, equipment installation, and initial inventory procurement." },
    { num:"05", title:"Training & Launch", desc:"Comprehensive staff training, billing software setup, and a strong grand opening campaign." },
    { num:"06", title:"Ongoing Support", desc:"Continuous business mentorship, marketing support, and technology updates throughout your journey." },
  ];
  return (
    <div className="animate-fadeIn">


      <section className="bg-white py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-[#2DB78A] text-center mb-10">Earning Potential</h2>
          <div className="space-y-6">
            {earnings.map((e,i) => (
              <div key={i} className="flex items-start gap-4 border-l-4 border-[#1B2E7A] pl-5">
                <div className="flex-shrink-0"><Logo size={36}/></div>
                <div>
                  <p className="text-gray-600 font-semibold">{e.label}:</p>
                  <p className="text-2xl font-black italic text-[#1B2E7A]">{e.value}</p>
                  {e.sub && <p className="text-xs text-gray-400 mt-1">{e.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8F0F7] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#1B2E7A] text-center mb-10">How to Join</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s,i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-[#2DB78A] mb-3">{s.num}</div>
                <h4 className="font-black text-[#1B2E7A] mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ROIBrochurePage;
