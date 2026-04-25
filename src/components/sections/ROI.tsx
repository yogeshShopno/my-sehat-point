import { TrendingUp, IndianRupee, Calendar, BarChart3, ShoppingBag, Plane, Pill } from "lucide-react";
import storefront from "@/assets/storefront.jfif";
import coatStetho from "@/assets/illu-coat-stethoscope1.jpg";
import Reveal from "@/components/Reveal";

const stats = [
  { icon: IndianRupee, value: "₹3L – ₹12L", label: "Monthly Gross Revenue" },
  { icon: BarChart3, value: "25% – 40%", label: "Profit Margin Range" },
  { icon: Calendar, value: "12–18 Mo", label: "Expected ROI Period" },
  { icon: TrendingUp, value: "365 Days", label: "Year-Round Demand" },
];

const streams = [
  { num: "01", title: "Medicine Sales", desc: "Branded + generic, with monthly chronic refills as fixed revenue." },
  { num: "02", title: "Generic Margin Edge", desc: "Higher margins than branded — better customer retention." },
  { num: "03", title: "Lab Sample Collection", desc: "35–40% commission per test. Zero lab setup cost." },
  { num: "04", title: "Home Delivery Orders", desc: "Chronic subscriptions, WhatsApp & online — low cost, high repeat." },
  { num: "05", title: "Wellness Products", desc: "Supplements, surgical & personal care — premium add-on income." },
];

const ROI = () => {
  return (
    <section id="roi" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 grid-bg" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-secondary/30 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary-glow/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <Reveal animation="fade-in-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-secondary text-xs font-bold tracking-wider uppercase mb-4">
              Recession-Proof Returns
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight">
              People delay shopping.
              <br />
              People delay travel.
              <br />
              <span className="text-secondary">Never medicines.</span>
            </h2>
            <p className="mt-6 text-primary-foreground/85 text-lg leading-relaxed">
              Healthcare runs 365 days a year — daily billing, repeat customers, and predictable
              monthly revenue. My Sehat Point is built on one principle:{" "}
              <span className="text-primary-foreground font-semibold">Stable demand = Stable income.</span>
            </p>

            <div className="mt-8 space-y-3">
              {[
                { icon: ShoppingBag, label: "Shopping", val: "Can be delayed", muted: true },
                { icon: Plane, label: "Travel", val: "Can be delayed", muted: true },
                { icon: Pill, label: "Medicines", val: "Never delayed", muted: false },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between gap-4 px-5 py-3 rounded-xl border ${c.muted
                      ? "border-white/10 bg-white/[0.03] text-primary-foreground/60"
                      : "border-secondary/40 bg-secondary/15 text-primary-foreground"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <c.icon className={`w-5 h-5 ${c.muted ? "text-primary-foreground/50" : "text-secondary"}`} />
                    <span className="font-semibold">{c.label}</span>
                  </div>
                  <span className={`text-sm font-bold ${c.muted ? "" : "text-secondary"}`}>{c.val}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal animation="fade-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/30 to-primary-glow/30 rounded-[2.5rem] blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-2 ring-white/15">
                <img
                  src={storefront}
                  alt="My Sehat Point storefront"
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-[450px] object-contain bg-primary/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-[10px] uppercase tracking-wider text-secondary font-bold">Live Store</div>
                  <div className="font-display font-bold text-lg">Real My Sehat Point Outlet</div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-6 -right-6 bg-card text-primary rounded-2xl p-4 shadow-elegant w-40 animate-float">
                <div className="text-[10px] uppercase tracking-wider text-secondary font-bold">Net Profit</div>
                <div className="font-display font-extrabold text-2xl">₹3.5L</div>
                <div className="text-xs text-muted-foreground">/ month (Mega)</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <Reveal key={i} animation="scale-in" delay={i * 0.08}>
              <div className="group h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-secondary/30 transition-spring">
                <s.icon className="w-7 h-7 text-secondary mb-3 group-hover:scale-110 transition-spring" />
                <div className="font-display font-extrabold text-2xl md:text-3xl">{s.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/70 mt-1">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Revenue streams */}
        <div>
          <Reveal className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-secondary text-xs font-bold tracking-wider uppercase mb-3">
              Multiple Revenue Streams
            </span>
            <h3 className="font-display font-extrabold text-2xl md:text-4xl">
              5 Income Sources. <span className="text-secondary">One Store.</span>
            </h3>
            <p className="mt-3 text-primary-foreground/70 max-w-xl mx-auto">
              Traditional pharmacies depend on walk-ins. My Sehat Point earns from five sources at once.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {streams.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group h-full relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-secondary/50 transition-spring hover:-translate-y-1">
                  <div className="text-secondary font-display font-extrabold text-3xl mb-2 opacity-80 group-hover:opacity-100 transition-smooth">
                    {s.num}
                  </div>
                  <div className="font-bold mb-1.5">{s.title}</div>
                  <div className="text-sm text-primary-foreground/70 leading-relaxed">{s.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="grid md:grid-cols-3 gap-6 items-center bg-white/5 backdrop-blur rounded-3xl p-6 md:p-8 border border-white/10">
              <div className="hidden md:block rounded-2xl overflow-hidden bg-accent aspect-square">
                <img src={coatStetho} alt="Doctor coat with stethoscope" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="md:col-span-2">
                <h4 className="font-display font-extrabold text-xl md:text-2xl mb-2">
                  More income sources = <span className="text-secondary">Faster ROI & lower risk</span>
                </h4>
                <p className="text-primary-foreground/80 leading-relaxed mb-4">
                  Cost advantage from centralized purchasing. Same medicines → higher profit. One-time
                  franchise fee, no royalty ever, no profit sharing — 100% ownership of your business.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Mini: 1 yr break-even", "Standard: stable income", "Mega: high-earning asset"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ROI;
