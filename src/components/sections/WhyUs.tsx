import {
  ShieldCheck,
  Banknote,
  GraduationCap,
  Megaphone,
  Cpu,
  Boxes,
  HeartHandshake,
  Rocket,
} from "lucide-react";
import doctorSyringe from "@/assets/illu-doctor-syringe.jpg";
import Reveal from "@/components/Reveal";

const usps = [
  { icon: ShieldCheck, title: "One-Stop Healthcare Model", desc: "Pharmacy + Lab + Home Delivery in a single trusted brand." },
  { icon: Boxes, title: "Daily-Need Repeat Business", desc: "Medicines & wellness — customers come back every month." },
  { icon: HeartHandshake, title: "Centralized Procurement", desc: "Better margins than local distributors, always." },
  { icon: Banknote, title: "No Royalty, 100% Profit", desc: "Zero monthly fees. Every rupee earned is yours to keep." },
  { icon: Rocket, title: "Low Investment, Fast ROI", desc: "Start from ₹8.25L and recover within 12–18 months." },
  { icon: Cpu, title: "Tech-Driven Operations", desc: "Billing, CRM, analytics and reports — all included." },
  { icon: GraduationCap, title: "Brand & Operational Support", desc: "From day one — training, SOPs, creatives & visibility." },
  { icon: Megaphone, title: "Expansion-Friendly & Scalable", desc: "Multi-store ready model designed to grow with you." },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-mint-grad relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-4">
            Our USP — 8 Reasons
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary leading-tight">
            What makes us your
            <br />
            <span className="text-gradient">My Sehat Point?</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {usps.map((u, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group relative h-full bg-card rounded-2xl p-5 border border-border hover:border-secondary/40 hover:shadow-card-brand transition-spring hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 text-7xl font-display font-extrabold text-secondary/[0.06] leading-none p-3 select-none group-hover:text-secondary/15 transition-smooth">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#1daf83] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-spring shadow-soft">
                      <u.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-primary mb-1 leading-tight">
                        {u.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal animation="fade-in-right" className="hidden lg:block lg:col-span-4">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-[3rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-elegant bg-accent ring-1 ring-border">
                <img
                  src={doctorSyringe}
                  alt="Doctor with syringe illustration"
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground rounded-2xl px-5 py-3 shadow-glow font-display font-bold text-sm whitespace-nowrap">
                Trusted by Pharmacists
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
