import {
  UserCheck,
  Briefcase,
  Wallet,
  ClipboardCheck,
  Store,
  MapPinned,
  Headphones,
  GraduationCap,
  Megaphone,
  Palette,
  Cpu,
  Truck,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const eligibility = [
  { icon: UserCheck, text: "Pharmacist or tie-up with a registered pharmacist" },
  { icon: Briefcase, text: "Basic business understanding" },
  { icon: Wallet, text: "Ability to invest as per selected model" },
  { icon: ClipboardCheck, text: "Willingness to follow My Sehat Point SOPs" },
  { icon: Store, text: "Owner-operated stores preferred" },
  { icon: MapPinned, text: "Ground floor — residential / main road / hospital zone" },
];

const support = [
  { icon: MapPinned, title: "Location & Feasibility" },
  { icon: GraduationCap, title: "Staff Training & SOPs" },
  { icon: Megaphone, title: "Marketing & Launch Support" },
  { icon: Headphones, title: "Ongoing Operational Support" },
  { icon: Palette, title: "Branding & Store Design" },
  { icon: Cpu, title: "Billing, CRM & Reports" },
  { icon: Truck, title: "Centralized Procurement" },
];

const Eligibility = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/5 blur-3xl rounded-full" />

      <div className="container relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
            Eligibility & Support
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary leading-tight">
            We help you <span className="text-gradient">every step</span>
            <br />
            of the way.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From eligibility to launch — and beyond. You're never alone with My Sehat Point.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Eligibility */}
          <Reveal animation="fade-in-left">
            <div className="h-full bg-card-grad rounded-3xl p-7 md:p-8 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shadow-soft">
                  <ClipboardCheck className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-2xl text-primary">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-3">
                {eligibility.map((e, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-mint-grad transition-smooth"
                  >
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <e.icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground/85 leading-relaxed pt-1.5 text-sm">{e.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Agreement", value: "5 Years" },
                  { label: "Renewal", value: "Easy" },
                  { label: "Royalty", value: "Zero" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="text-center bg-mint-grad rounded-xl p-3 border border-border/60"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {b.label}
                    </div>
                    <div className="font-display font-bold text-lg text-primary">{b.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Support */}
          <Reveal animation="fade-in-right">
            <div className="h-full bg-hero text-primary-foreground rounded-3xl p-7 md:p-8 shadow-elegant relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/30 blur-3xl rounded-full" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl">Support We Offer</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {support.map((s, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white/[0.12] hover:border-secondary/40 transition-smooth"
                    >
                      <div className="w-9 h-9 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring">
                        <s.icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-sm font-medium">{s.title}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-secondary/15 border border-secondary/30">
                  <div className="text-[10px] uppercase tracking-wider text-secondary font-bold">
                    Our Promise
                  </div>
                  <p className="mt-1 text-sm text-primary-foreground/90 leading-relaxed">
                    No hidden charges. No yearly fees. Only a nominal renewal fee after the
                    agreement term — and 100% of profits stay with you.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
