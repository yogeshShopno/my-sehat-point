import React from 'react';
import { HeartPulse, FlaskConical, Scissors, Star, Truck } from "lucide-react";
import Logo from "../components/Logo";

const BrandProfilePage = () => {
  const services = [
    { icon: <HeartPulse size={22}/>, title: "Pharmacy", headerBg: "#2DB78A", bodyBg: "#1B2E7A", points: ["A wide variety of allopathy and generic medicines — your go-to solution for health.", "We guarantee quality medicines sourced from trusted suppliers."] },
    { icon: <FlaskConical size={22}/>, title: "Lab Tests", headerBg: "#1B2E7A", bodyBg: "#2DB78A", points: ["Home sample collection — no more trips to the lab, we bring it to you!"] },
    { icon: <Scissors size={22}/>, title: "Surgical & Medical Equipment", headerBg: "#2DB78A", bodyBg: "#1B2E7A", points: ["Premium surgical instruments, medical devices, and health equipment for hospitals, clinics, and homes."] },
    { icon: <Star size={22}/>, title: "Health & Wellness Products", headerBg: "#1B2E7A", bodyBg: "#2DB78A", points: ["A complete range of wellness supplements, vitamins, and personal care items to keep you feeling your best."] },
    { icon: <Truck size={22}/>, title: "Home Delivery Services", headerBg: "#2DB78A", bodyBg: "#1B2E7A", points: ["Health at your doorstep — get your medicines and medical products delivered with a single click."], wide: true },
  ];
  const usps = [
    { num:1, text:"One-Stop Healthcare Model\nPharmacy + Lab Tests + Home Delivery", c:"#2DB78A" },
    { num:2, text:"Daily-Need & Repeat\nCustomer Business", c:"#1B2E7A" },
    { num:3, text:"Centralized Medicine Purchase\nBetter margins than local distributors", c:"#1B2E7A" },
    { num:4, text:"No Royalty Model — 100%\nprofit belongs to franchise partner", c:"#2DB78A" },
    { num:5, text:"Low Investment,\nFast ROI", c:"#2DB78A" },
    { num:6, text:"Technology-Driven Operations\n(Billing, CRM, Reports)", c:"#1B2E7A" },
    { num:7, text:"Brand + Operational Support\nfrom Day One", c:"#1B2E7A" },
    { num:8, text:"Expansion-Friendly &\nScalable Model", c:"#2DB78A" },
  ];
  return (
    <div className="animate-fadeIn">
      <section className="bg-[#E8F0F7] py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#1B2E7A] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#2DB78A] opacity-10 rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="flex justify-center mb-6"><Logo size={80}/></div>
          <h1 className="text-5xl md:text-6xl font-black text-[#1B2E7A] mb-6">Sehat Point</h1>
          <div className="inline-block border-2 border-[#1B2E7A] rounded-2xl px-8 py-4 relative">
            <div className="absolute -top-3 left-1/3 w-4 h-4 bg-[#2DB78A] rounded-full"/>
            <div className="absolute -top-3 right-1/3 w-4 h-4 bg-[#2DB78A] rounded-full"/>
            <p className="text-2xl font-bold text-[#1B2E7A]">Aapki Sehat Hamari</p>
            <p className="text-2xl font-black italic text-[#2DB78A]">Zimmedari</p>
          </div>
        </div>
      </section>

      <section className="bg-[#1B2E7A] py-16 px-4">
        <div className="max-w-3xl mx-auto text-white">
          <div className="border border-white/30 rounded-2xl p-6 mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Welcome to</h2>
            <h2 className="text-3xl md:text-4xl font-black italic text-[#2DB78A]">My Sehat Point</h2>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <div className="w-4 h-4 bg-[#2DB78A] rounded-full"/><div className="w-4 h-4 bg-[#2DB78A] rounded-full"/>
          </div>
          <p className="text-lg leading-relaxed mb-6 text-blue-100">Your One-Stop Healthcare Solution, offering a unique blend of pharmacy, Lab tests, home delivery, and wellness products all under one roof. With a mission to make healthcare affordable, accessible, and super convenient, we're the go-to destination for every health need.</p>
          <p className="text-lg leading-relaxed text-blue-100">Our franchise model ensures high demand and stable returns, making it the ultimate opportunity for entrepreneurs ready to dive into the thriving healthcare sector.</p>
        </div>
      </section>

      <section className="bg-[#E8F0F7] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {[{ label:"Vision", text:"To be India's most trusted healthcare brand, delivering essential products and services that help communities lead healthier lives." },
            { label:"Mission", text:"We strive to provide quality healthcare products and services that are affordable for everyone, empowering people to live healthier and happier lives." }]
            .map(item => (
              <div key={item.label}>
                <div className="inline-flex items-center gap-0 mb-4">
                  <span className="border-2 border-[#1B2E7A] rounded-full px-5 py-2 text-xl font-black italic text-[#2DB78A]">Our</span>
                  <span className="bg-[#2DB78A] rounded-full px-5 py-2 text-xl font-black italic text-white -ml-2">{item.label}</span>
                </div>
                <p className="text-lg italic text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#1B2E7A] italic">Your One-Stop</h2>
            <h2 className="text-4xl font-black text-[#2DB78A] italic">Health Shop</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden ${s.wide ? "sm:col-span-2 sm:max-w-sm sm:mx-auto w-full" : ""}`}>
                <div className="flex items-center gap-3 px-4 py-3" style={{backgroundColor: s.headerBg}}>
                  <div className="text-white">{s.icon}</div>
                  <span className="text-white font-bold text-lg">{s.title}</span>
                </div>
                <div style={{backgroundColor: s.bodyBg}} className="px-5 py-4">
                  {s.points.map((p,j) => <p key={j} className="text-white text-sm leading-relaxed mb-1">• {p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8F0F7] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black italic text-gray-700 mb-1">What makes us your</h2>
          <h2 className="text-4xl font-black text-[#2DB78A] italic mb-6">My Sehat Point?</h2>
          <div className="inline-block bg-[#1B2E7A] text-white text-sm font-bold px-5 py-2 rounded-full mb-8 tracking-wider">OUR USP (UNIQUE SELLING POINTS)</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {usps.map(u => (
              <div key={u.num} className="flex items-center gap-4 bg-white border-2 rounded-2xl px-4 py-4 shadow-sm" style={{borderColor: u.c}}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg" style={{backgroundColor: u.c}}>{u.num}</div>
                <p className="text-sm font-semibold text-gray-800 whitespace-pre-line leading-tight">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandProfilePage;
