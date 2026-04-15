import React, { useState } from 'react';
import { MapPin, TrendingUp, Store, CheckCircle2, Phone, Mail } from "lucide-react";
import Logo from "../components/Logo";

const FranchiseModelPage = () => {
  const [activeModel, setActiveModel] = useState("standard");
  const models = {
    mini: { label:"Mini Model", subtitle:"Essential Healthcare Store", tagline:"A smart low-risk entry into pharmacy business", best:"Best for residential areas & starting pharmacists", color:"#2DB78A", area:"200–300 sq.ft", investment:"₹8,25,000 + GST", inventory:"₹4,00,000", fee:"₹50,000 + GST", royalty:"Nil", ownership:"100% Yours", roi:"12–15 Months", features:["Standard pharmacy layout","Medicine racks & counter setup guidance","Billing software & CRM","Centralized purchase access","Initial marketing support","Staff training & SOPs","Home delivery setup","Ongoing guidance"] },
    standard: { label:"Standard Model", subtitle:"Complete Medical Store", tagline:"Balanced investment + strong monthly income", best:"Best for main roads & high footfall markets", color:"#1B2E7A", area:"500–600 sq.ft", investment:"₹15,15,000 + GST", inventory:"₹8,00,000", fee:"₹1,00,000 + GST", royalty:"Nil", ownership:"100% Yours", roi:"15 to 19 Months", features:["Advanced store layout zoning","Extended storage & fast-moving inventory planning","Advanced billing reports","Better purchase margin slabs","Local marketing creatives","Advanced staff training","Order management support","Dedicated business assistance"] },
    mega: { label:"Mega Model", subtitle:"Healthcare Destination Store", tagline:"Maximum visibility, maximum returns", best:"Best for prime locations & hospital zones", color:"#2DB78A", area:"1000+ sq.ft", investment:"₹30,00,000 + GST", inventory:"₹18,00,000", fee:"₹1,50,000 + GST", royalty:"Nil", ownership:"100% Yours", roi:"8 to 10 Months", features:["Premium layout & branding visibility","High capacity storage & bulk inventory planning","Advanced analytics & MIS reports","Priority vendor purchase benefits","Maximum margin slabs","Strong launch marketing campaign","Scalable home delivery operations","Priority support & expansion planning"] },
  };
  const specs = [
    { label:"Recommended Area", key:"area" }, { label:"Total Investment", key:"investment" },
    { label:"Inventory Included", key:"inventory" }, { label:"Franchise Fee", key:"fee" },
    { label:"Monthly Royalty", key:"royalty" }, { label:"Ownership", key:"ownership" }, { label:"Expected ROI", key:"roi" },
  ];
  const m = models[activeModel];
  return (
    <div className="animate-fadeIn">

      <section className="bg-[#E8F0F7] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#1B2E7A] text-center mb-8">Model Overview</h2>
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {Object.entries(models).map(([key, val]) => (
              <button key={key} onClick={() => setActiveModel(key)}
                className="px-5 py-2 rounded-full font-black text-sm transition-all duration-200"
                style={{ backgroundColor: activeModel === key ? val.color : "white", color: activeModel === key ? "white" : val.color, border: `2px solid ${val.color}` }}>
                {val.label}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="px-6 py-5" style={{backgroundColor: m.color}}>
              <span className="text-white font-black text-xl italic">{m.label}</span>
              <span className="text-white font-black text-xl"> — </span>
              <span className="text-white font-black text-xl italic">{m.subtitle}</span>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-50 border-b">
              <p className="text-sm text-gray-500">{m.best}</p>
              <p className="font-black italic text-[#2DB78A] text-sm">{m.tagline}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {specs.map(s => (
                <div key={s.key} className="bg-[#E8F0F7] rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">{s.label}</p>
                  <p className="font-black text-[#1B2E7A] text-sm">{m[s.key]}</p>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <p className="font-black italic text-[#2DB78A] mb-4">You get:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {m.features.map((f,i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#2DB78A] flex-shrink-0 mt-0.5"/>
                    <span className="text-sm text-gray-700 italic">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 overflow-x-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#1B2E7A] text-center mb-8">What You Get in Each Model</h2>
          <table className="w-full min-w-[560px] border-collapse rounded-2xl overflow-hidden shadow-md">
            <thead>
              <tr>
                <th className="bg-[#1B2E7A] text-white px-4 py-3 text-left font-black text-sm">Particulars</th>
                {Object.values(models).map(mv => (
                  <th key={mv.label} className="px-4 py-3 text-white font-black text-sm text-center" style={{backgroundColor: mv.color}}>{mv.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((s,i) => (
                <tr key={s.key} className={i%2===0?"bg-gray-50":"bg-white"}>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-700 border-r">{s.label}</td>
                  {Object.values(models).map(mv => (
                    <td key={mv.label+s.key} className="px-4 py-3 text-sm text-center font-bold text-[#1B2E7A]">{mv[s.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


    </div>
  );
};

export default FranchiseModelPage;
