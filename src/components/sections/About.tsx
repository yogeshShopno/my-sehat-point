import { Eye, Target, Award, Users, Building2, Sparkles } from "lucide-react";
import pharmacyCounter from "@/assets/illu-pharmacy-counter.jpg";
import stethoscopeImg from "@/assets/illu-stethoscope-syringes1.jpg";
import { useReveal } from "@/hooks/use-reveal";

const About = () => {
  const left = useReveal();
  const right = useReveal();

  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left visual */}
          <div
            ref={left.ref}
            className={`lg:col-span-5 relative ${left.visible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-[2.5rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-elegant ring-1 ring-border bg-[#dbeefb]">
                <img
                  src={pharmacyCounter}
                  alt="My Sehat Point pharmacy counter illustration"
                  loading="lazy"
                  width={1100}
                  height={1200}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating stethoscope */}
              <div className="hidden md:block absolute -top-8 -left-8 w-28 h-28 rounded-2xl bg-white shadow-elegant p-2  overflow-hidden">
                <img src={stethoscopeImg} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Stat badge */}
              <div className="absolute -bottom-6 right-4 md:right-8 bg-hero text-primary-foreground rounded-2xl p-4 shadow-elegant " style={{ animationDelay: "1s" }}>
                <div className="text-[10px] uppercase tracking-wider text-secondary font-bold">Trusted by</div>
                <div className="font-display font-extrabold text-2xl">Thousands</div>
                <div className="text-xs text-white/70">across India</div>
              </div>
            </div>
          </div>

          {/* Right copy */}
          <div
            ref={right.ref}
            className={`lg:col-span-7 ${right.visible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-4">
              Welcome to My Sehat Point
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary leading-tight">
              Your one-stop
              <br />
              <span className="text-gradient">healthcare solution.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              A unique blend of pharmacy, lab tests, home delivery, and wellness products — all
              under one roof. We make healthcare affordable, accessible, and super convenient
              for every Indian family.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our franchise model ensures high demand and stable returns, making it the
              ultimate opportunity for entrepreneurs ready to dive into India's thriving
              healthcare sector.
            </p>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="group relative bg-card-grad rounded-2xl p-5 border border-border hover:border-secondary/40 hover:shadow-card-brand transition-spring overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-spring" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-[#1daf83] flex items-center justify-center mb-3 shadow-soft group-hover:rotate-6 transition-spring">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary mb-1">Our Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To be India's most trusted healthcare brand, helping communities lead healthier lives.
                  </p>
                </div>
              </div>

              <div className="group relative bg-hero text-primary-foreground rounded-2xl p-5 shadow-elegant overflow-hidden">
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/30 rounded-full blur-2xl group-hover:scale-150 transition-spring" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-[#1daf83] text-white flex items-center justify-center mb-3 group-hover:rotate-6 transition-spring">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">Our Mission</h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    Quality healthcare that's affordable for everyone — empowering happier, healthier lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                { icon: Building2, value: "100+", label: "Franchise Goal" },
                { icon: Users, value: "365", label: "Days Demand" },
                { icon: Award, value: "5+", label: "Revenue Streams" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center bg-mint-grad rounded-xl p-3 border border-border/60 hover:border-secondary/40 transition-smooth"
                >
                  <s.icon className="w-4 h-4 text-secondary mx-auto mb-1.5" />
                  <div className="font-display font-extrabold text-xl text-primary">{s.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3 px-5 py-3.5 rounded-xl border border-secondary/30 bg-secondary/5">
              <Sparkles className="w-5 h-5 text-secondary flex-shrink-0" />
              <p className="text-sm text-foreground">
                <span className="font-semibold text-primary">No pharma experience needed</span> —
                we'll show you the ropes from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
