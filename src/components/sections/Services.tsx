import { Pill, FlaskConical, Stethoscope, Heart, Truck, Syringe } from "lucide-react";
import vaccinesImg from "@/assets/illu-vaccines.jpg";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Pill,
    title: "Pharmacy",
    desc: "A wide variety of allopathy and generic medicines from trusted suppliers — your go-to for every health need.",
    accent: "from-blue-500/20 to-blue-500/0",
    iconBg: "bg-blue-500/15 text-blue-600",
  },
  {
    icon: FlaskConical,
    title: "Lab Tests",
    desc: "Home sample collection — no more trips to the lab. We bring testing right to your doorstep.",
    accent: "from-emerald-500/20 to-emerald-500/0",
    iconBg: "bg-emerald-500/15 text-emerald-600",
  },
  {
    icon: Stethoscope,
    title: "Surgical & Medical Equipment",
    desc: "Premium surgical instruments and medical devices for hospitals, clinics, and home use.",
    accent: "from-cyan-500/20 to-cyan-500/0",
    iconBg: "bg-cyan-500/15 text-cyan-600",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Complete range of supplements, vitamins, and personal care to keep you feeling your best.",
    accent: "from-rose-500/20 to-rose-500/0",
    iconBg: "bg-rose-500/15 text-rose-600",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Health at your doorstep — get medicines and medical products delivered with a single click.",
    accent: "from-amber-500/20 to-amber-500/0",
    iconBg: "bg-amber-500/15 text-amber-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-mint-grad relative overflow-hidden">
      <div className="absolute top-10 right-[-4rem] w-48 md:w-64 opacity-30 md:opacity-60 rotate-12 pointer-events-none animate-float">
        <img src={vaccinesImg} alt="" className="w-full h-auto" loading="lazy" />
      </div>

      <div className="container relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-4">
            Your One-Stop Health Shop
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary leading-tight">
            Everything healthcare,
            <br />
            <span className="text-gradient">under one roof.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From medicines to lab tests, wellness products to doorstep delivery — five powerful
            revenue streams in a single store.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={i} animation="scale-in" delay={i * 0.08}>
              <div
                className={`group relative h-full bg-card-grad rounded-3xl p-7 border border-border/60 hover:border-secondary/40 hover:-translate-y-2 transition-spring shadow-soft hover:shadow-card-brand overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-smooth`}
                />
                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-spring`}
                  >
                    <s.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-secondary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-smooth">
                    Revenue Stream {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal animation="scale-in" delay={services.length * 0.08}>
            <div className="relative h-full rounded-3xl p-7 bg-hero text-primary-foreground overflow-hidden flex flex-col justify-between min-h-[240px] shadow-elegant group">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-secondary/30 blur-2xl group-hover:scale-150 transition-spring" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-primary-glow/30 blur-3xl" />
              <div className="relative">
                <Syringe className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-display font-bold text-2xl leading-tight">
                  Multiple revenue streams.
                  <br />
                  <span className="text-secondary">One trusted brand.</span>
                </h3>
              </div>
              <div className="relative text-sm text-white/85">
                Daily-need + repeat customers = stable income, every single month.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
