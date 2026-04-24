import { Check, Crown, Sparkles, Star, MapPin, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const models = [
  {
    name: "Mini",
    tag: "Fast Payback Starter",
    icon: Sparkles,
    area: "200–300 sq.ft",
    investment: "₹8,25,000",
    franchiseFee: "₹50,000",
    inventory: "₹4,00,000",
    monthlySales: "₹2,40,000",
    netProfit: "₹54,000",
    grossProfit: "₹84,000",
    expenses: "₹30,000",
    roi: "12–15 Months",
    bestFor: "Residential areas & first-time pharmacists",
    features: [
      "Standard pharmacy layout",
      "Billing software & CRM",
      "Centralized purchase access",
      "Staff training & SOPs",
      "Home delivery setup",
      "Initial marketing support",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    tag: "Balanced Growth Income",
    icon: Star,
    area: "500–600 sq.ft",
    investment: "₹15,15,000",
    franchiseFee: "₹1,00,000",
    inventory: "₹8,00,000",
    monthlySales: "₹3,90,000",
    netProfit: "₹76,500",
    grossProfit: "₹1,36,500",
    expenses: "₹60,000",
    roi: "15–19 Months",
    bestFor: "Main roads & high footfall markets",
    features: [
      "Everything in Mini, plus —",
      "Advanced store layout zoning",
      "Better purchase margin slabs",
      "Local marketing creatives",
      "Order management support",
      "Dedicated business assistance",
    ],
    highlight: true,
  },
  {
    name: "Mega",
    tag: "High-Volume Business",
    icon: Crown,
    area: "1000+ sq.ft",
    investment: "₹30,00,000",
    franchiseFee: "₹1,50,000",
    inventory: "₹18,00,000",
    monthlySales: "₹12,00,000",
    netProfit: "₹3,00,000",
    grossProfit: "₹4,20,000",
    expenses: "₹1,20,000",
    roi: "8–10 Months",
    bestFor: "Prime locations & hospital-adjacent zones",
    features: [
      "Everything in Standard, plus —",
      "Premium layout & branding",
      "Maximum margin slabs",
      "Advanced analytics & MIS",
      "Strong launch campaign",
      "Priority expansion planning",
    ],
    highlight: false,
  },
];

const chooseGuide = [
  {
    title: "Choose MINI if",
    icon: Wallet,
    points: ["First medical store", "Residential area", "Limited investment", "Stable income goal"],
  },
  {
    title: "Choose STANDARD if",
    icon: Users,
    points: ["Main market location", "Want ₹1L+ monthly potential", "Moderate competition"],
  },
  {
    title: "Choose MEGA if",
    icon: MapPin,
    points: ["Near hospital / busy road", "Long-term business asset", "High earning focus"],
  },
];

const Models = () => {
  return (
    <section id="models" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
            Choose Your Model
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary leading-tight">
            Three Models - <span className="text-gradient">Zero Royalty</span>
            <br />
            100% Profit Yours.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Pick the franchise model that fits your investment, location and growth ambition.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {models.map((m, i) => (
            <Reveal key={i} animation="scale-in" delay={i * 0.1}>
              <div
                className={`relative h-full rounded-3xl p-8 transition-spring hover:-translate-y-2 ${m.highlight
                    ? "bg-hero text-primary-foreground shadow-elegant lg:-mt-4"
                    : "bg-card-grad text-foreground border border-border shadow-soft hover:shadow-card-brand"
                  }`}
              >
                {m.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-glow ">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${m.highlight ? "bg-secondary/20" : "bg-[#1daf83]"
                      }`}
                  >
                    <m.icon className={`w-6 h-6 ${m.highlight ? "text-secondary" : "text-primary-foreground"}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl">{m.name} Model</h3>
                    <p className={`text-xs ${m.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {m.tag}
                    </p>
                  </div>
                </div>

                <p className={`text-sm mb-6 ${m.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  Best for: {m.bestFor}
                </p>

                <div className={`rounded-2xl p-5 mb-6 ${m.highlight ? "bg-white/10 backdrop-blur" : "bg-mint-grad"}`}>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-display font-extrabold">{m.investment}</span>
                    <span className={`text-sm ${m.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      + GST
                    </span>
                  </div>
                  <div className={`text-xs ${m.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    Total Investment · {m.area}
                  </div>
                  <div
                    className={`grid grid-cols-2 gap-3 mt-4 pt-4 border-t ${m.highlight ? "border-white/20" : "border-border"
                      }`}
                  >
                    <div>
                      <div
                        className={`text-[10px] uppercase tracking-wider ${m.highlight ? "text-primary-foreground/60" : "text-muted-foreground"
                          }`}
                      >
                        Net Profit / mo
                      </div>
                      <div className="font-bold text-lg text-secondary">{m.netProfit}</div>
                    </div>
                    <div>
                      <div
                        className={`text-[10px] uppercase tracking-wider ${m.highlight ? "text-primary-foreground/60" : "text-muted-foreground"
                          }`}
                      >
                        ROI Period
                      </div>
                      <div className="font-bold text-lg">{m.roi}</div>
                    </div>
                  </div>

                  <div
                    className={`grid grid-cols-3 gap-2 mt-3 pt-3 border-t text-[10px] uppercase tracking-wider ${m.highlight ? "border-white/20 text-primary-foreground/60" : "border-border text-muted-foreground"
                      }`}
                  >
                    <div>
                      <div>Sales/mo</div>
                      <div className={`text-sm font-bold ${m.highlight ? "text-primary-foreground" : "text-primary"}`}>
                        {m.monthlySales}
                      </div>
                    </div>
                    <div>
                      <div>Gross</div>
                      <div className={`text-sm font-bold ${m.highlight ? "text-primary-foreground" : "text-primary"}`}>
                        {m.grossProfit}
                      </div>
                    </div>
                    <div>
                      <div>Expenses</div>
                      <div className={`text-sm font-bold ${m.highlight ? "text-primary-foreground" : "text-primary"}`}>
                        {m.expenses}
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {m.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
                      <span className={m.highlight ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant={m.highlight ? "hero" : "brand"} className="w-full" size="lg">
                  <a href="#contact">Apply for {m.name}</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* How to choose guide */}
        <div className="mt-16 md:mt-20">
          <Reveal className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-3">
              Decision Guide
            </span>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-primary">
              How to choose the <span className="text-gradient">right model</span>
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {chooseGuide.map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group h-full bg-card-grad rounded-2xl p-6 border border-border hover:border-secondary/40 hover:-translate-y-1 transition-spring shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-[#1daf83] flex items-center justify-center mb-4 group-hover:rotate-6 transition-spring shadow-soft">
                    <c.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-primary mb-3">{c.title}</h4>
                  <ul className="space-y-2">
                    {c.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Common benefits strip */}
        <Reveal className="mt-12">
          <div className="rounded-3xl bg-hero text-primary-foreground p-8 md:p-10 relative overflow-hidden shadow-elegant">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/30 blur-3xl rounded-full" />
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-secondary text-xs font-bold tracking-wider uppercase mb-3">
                    Common Benefits
                  </span>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl">
                    No matter which model — <span className="text-secondary">you always get.</span>
                  </h3>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "One-time franchise fee",
                  "No royalty ever",
                  "No profit sharing",
                  "100% ownership",
                  "Brand usage rights",
                  "Software & CRM access",
                  "Training & SOP manuals",
                  "Centralized purchasing",
                ].map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/15 text-sm hover:bg-white/15 transition-smooth"
                  >
                    <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Models;
