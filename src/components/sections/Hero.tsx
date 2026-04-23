import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShieldCheck, TrendingUp, Phone } from "lucide-react";
import pharmacistIllu from "@/assets/illu-pharmacist.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden bg-hero text-primary-foreground"
    >
      {/* Decorative animated blobs */}
      <div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-secondary/25 blur-3xl animate-blob"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-primary-glow/40 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
        aria-hidden
      />
      <div className="absolute inset-0 opacity-[0.06] grid-bg" aria-hidden />

      {/* Floating pill icons */}
      <div className="absolute top-32 left-[8%] w-3 h-3 rounded-full bg-secondary animate-pulse-soft hidden md:block" />
      <div className="absolute top-1/2 right-[12%] w-2 h-2 rounded-full bg-secondary/60 animate-pulse-soft" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-[20%] w-2 h-2 rounded-full bg-white/40 animate-pulse-soft" style={{ animationDelay: "2s" }} />

      <div className="container relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Copy */}
        <div className="lg:col-span-7 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Limited Franchise Opportunities · Pan-India
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight">
            Aapki Sehat,
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-secondary via-emerald-300 to-secondary bg-clip-text text-transparent">
                Hamari Zimmedari.
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 9C40 3 80 3 150 6C220 9 260 6 298 3"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            India's most trusted{" "}
            <span className="text-white font-semibold">one-stop healthcare brand</span> — pharmacy,
            lab tests, wellness & home delivery, all under one roof. Build a recession-proof
            business with My Sehat Point.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">
                Become a Franchise Partner
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="tel:+917778877563">
                <Phone className="w-5 h-5" />
                +91 77788 77563
              </a>
            </Button>
          </div>

          {/* Trust strip */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
            {[
              { icon: TrendingUp, label: "12-18", sub: "Months ROI" },
              { icon: ShieldCheck, label: "Zero", sub: "Royalty Ever" },
              { icon: Sparkles, label: "100%", sub: "Profit Yours" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-start gap-1 pl-3 border-l-2 border-secondary/60"
              >
                <s.icon className="w-5 h-5 text-secondary" />
                <div className="text-xl sm:text-2xl font-bold leading-tight">{s.label}</div>
                <div className="text-[11px] sm:text-xs text-white/70">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Glow ring behind illustration */}
            <div className="absolute inset-0 -m-6 rounded-[3rem] bg-gradient-to-br from-secondary/30 via-secondary/10 to-transparent blur-2xl animate-pulse-soft" />

            {/* Decorative rotating ring */}
            <div className="absolute inset-0 -m-3 rounded-[2.5rem] border border-dashed border-white/20 animate-spin-slow" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant ring-2 ring-white/15 bg-primary">
              <img
                src={pharmacistIllu}
                alt="My Sehat Point pharmacist illustration"
                width={1200}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating cards */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 lg:-left-10 items-center gap-3 bg-white/95 backdrop-blur rounded-2xl p-3.5 shadow-elegant text-foreground animate-float">
              <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Verified</div>
                <div className="font-bold text-sm text-primary">Quality Assured</div>
              </div>
            </div>

            <div
              className="hidden sm:flex absolute -top-5 -right-5 lg:-right-8 items-center gap-3 bg-white/95 backdrop-blur rounded-2xl p-3.5 shadow-elegant text-foreground animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/15 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Net / mo</div>
                <div className="font-bold text-sm text-primary">Up to ₹3.5 Lakh</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip at bottom */}
      <div className="relative mt-20 md:mt-24 border-y border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4 gap-12 text-sm md:text-base font-display font-semibold text-white/70">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 shrink-0">
              {[
                "💊 Pharmacy",
                "🧪 Lab Sample Collection",
                "🚚 Home Delivery",
                "💚 Wellness Products",
                "🩺 Medical Equipment",
                "📈 12-18 Mo ROI",
                "🛡️ No Royalty",
                "🇮🇳 Pan-India Brand",
              ].map((t) => (
                <span key={t} className="flex items-center gap-12 shrink-0">
                  <span>{t}</span>
                  <span className="text-secondary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
